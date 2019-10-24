import { PsychObject } from './util-3.0.0b11.js';
import { MonotonicClock } from './util-3.0.0b11.js';
import { getErrorStack, shuffle } from './util-3.0.0b11.js';

/**
 * @file Experiment Handler
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class ExperimentHandler extends PsychObject {
	get experimentEnded() { return this._experimentEnded; }
	set experimentEnded(ended) { this._experimentEnded = ended; }
	constructor({
		psychoJS,
		name,
		extraInfo
	} = {}) {
		super(psychoJS, name);
		this._addAttributes(ExperimentHandler, name, extraInfo);
		this._loops = [];
		this._unfinishedLoops = [];
		this._trialsKeys = [];
		this._trialsData = [];
		this._currentTrialData = {};
		this._experimentEnded = false;
	}
	addLoop(loop) {
		this._loops.push(loop);
		this._unfinishedLoops.push(loop);
		loop.experimentHandler = this;
	}
	removeLoop(loop) {
		const index = this._unfinishedLoops.indexOf(loop);
		if (index !== -1) {
			this._unfinishedLoops.splice(index, 1);
		}
	}
	addData(key, value) {
		if (this._trialsKeys.indexOf(key) === -1) {
			this._trialsKeys.push(key);
		}		this._currentTrialData[key] = value;
	}
	nextEntry() {
		for (let loop of this._unfinishedLoops) {
			var attributes = this.getLoopAttributes(loop);
			for (let a in attributes)
				if (attributes.hasOwnProperty(a))
					this._currentTrialData[a] = attributes[a];
		}
		for (let a in this.extraInfo)
			if (this.extraInfo.hasOwnProperty(a))
				this._currentTrialData[a] = this.extraInfo[a];
		this._trialsData.push(this._currentTrialData);
		this._currentTrialData = {};
	}
	async save({
		attributes = []
	} = {}) {
		this._psychoJS.logger.info('[PsychoJS] Save experiment results.');
		if (attributes.length == 0) {
			attributes = this._trialsKeys.slice();
			for (let l = 0; l < this._loops.length; l++) {
				const loop = this._loops[l];
				const loopAttributes = this.getLoopAttributes(loop);
				for (let a in loopAttributes)
					if (loopAttributes.hasOwnProperty(a))
					attributes.push(a);
			}
			for (let a in this.extraInfo) {
				if (this.extraInfo.hasOwnProperty(a))
				attributes.push(a);
			}
		}
		const info = this.extraInfo;
		const __experimentName = (typeof info.expName !== 'undefined') ? info.expName : this.psychoJS.config.experiment.name;
		const __participant = ((typeof info.participant === 'string' && info.participant.length > 0) ? info.participant : 'PARTICIPANT');
		const __session = ((typeof info.session === 'string' && info.session.length > 0) ? info.session : 'SESSION');
		const __datetime = ((typeof info.date !== 'undefined') ? info.date : MonotonicClock.getDateStr());
		const gitlabConfig = this._psychoJS.config.gitlab;
		const __projectId = (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined')?gitlabConfig.projectId:undefined;
		if (this._psychoJS.config.experiment.saveFormat == ExperimentHandler.SaveFormat.CSV) {
			let csv = "";
			for (let h = 0; h < attributes.length; h++) {
				if (h > 0)
					csv = csv + ', ';
				csv = csv + attributes[h];
			}
			csv = csv + '\n';
			for (let r = 0; r < this._trialsData.length; r++) {
				for (let h = 0; h < attributes.length; h++) {
					if (h > 0)
						csv = csv + ', ';
					csv = csv + this._trialsData[r][attributes[h]];
				}
				csv = csv + '\n';
			}
			const key = __participant + '_' + __experimentName + '_' + __datetime + '.csv';
			return await this._psychoJS.serverManager.uploadData(key, csv);
		}
		else if (this._psychoJS.config.experiment.saveFormat == ExperimentHandler.SaveFormat.DATABASE) {
			let documents = [];
			for (let r = 0; r < this._trialsData.length; r++) {
				let doc = { __projectId, __experimentName, __participant, __session, __datetime };
				for (let h = 0; h < attributes.length; h++)
					doc[attributes[h]] = this._trialsData[r][attributes[h]];
				documents.push(doc);
			}
			const key = 'results';
			return await this._psychoJS.serverManager.uploadData(key, JSON.stringify(documents));
		}
	}
	getLoopAttributes(loop) {
		const loopName = loop['name'];
		const properties = ['thisRepN', 'thisTrialN', 'thisN', 'thisIndex', 'stepSizeCurrent', 'ran', 'order'];
		let attributes = {};
		for (const property of properties)
			for (const loopProperty in loop)
				if (loopProperty === property) {
					if (property === 'stepSizeCurrent')
						var key = loopName + '.stepSize';
					else
						key = loopName + '.' + property;
					attributes[key] = loop[property];
				}
		if (typeof loop.getCurrentTrial === 'function') {
			const currentTrial = loop.getCurrentTrial();
			for (const trialProperty in currentTrial)
				attributes[trialProperty] = currentTrial[trialProperty];
		}
		return attributes;
	}
}ExperimentHandler.SaveFormat = {
	CSV: Symbol.for('CSV'),
	DATABASE: Symbol.for('DATABASE')
};

/**
 * @file Trial Handler
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class TrialHandler extends PsychObject {
	get experimentHandler() { return this._experimentHandler; }
	set experimentHandler(exp) {
		this._experimentHandler = exp;
	}
	constructor({
		psychoJS,
		trialList = [undefined],
		nReps,
		method = TrialHandler.Method.RANDOM,
		extraInfo = [],
		seed,
		name,
		autoLog = true
	} = {}) {
		super(psychoJS);
		this._addAttributes(TrialHandler, trialList, nReps, method, extraInfo, seed, name, autoLog);
		this._prepareTrialList(trialList);
		this.nStim = this.trialList.length;
		this.nTotal = this.nReps * this.nStim;
		this.nRemaining = this.nTotal;
		this.thisRepN = 0;
		this.thisTrialN = -1;
		this.thisN = -1;
		this.thisIndex = 0;
		this.ran = 0;
		this.order = -1;
		this._prepareSequence();
		this._experimentHandler = null;
		this.thisTrial = null;
		this.finished = false;
	}
	[Symbol.iterator]() {
		return {
			next: () => {
				this.thisTrialN++;
				this.thisN++;
				this.nRemaining--;
				if (this.thisTrialN === this.nStim) {
					this.thisTrialN = 0;
					this.thisRepN++;
				}
				if (this.thisRepN >= this.nReps) {
					this.thisTrial = null;
					return { done: true };
				}
				this.thisIndex = this._trialSequence[this.thisRepN][this.thisTrialN];
				this.thisTrial = this.trialList[this.thisIndex];
				this.ran = 1;
				this.order = this.thisN;
				return { value: this.thisTrial, done: false };
			}
		};
	};
	getTrialIndex() {
		return this.thisIndex;
	}
	setTrialIndex(index) {
		this.thisIndex = index;
	}
	getAttributes() {
		if (!Array.isArray(this.trialList) || this.nStim == 0)
			return [];
		const firstTrial = this.trialList[0];
		if (!firstTrial)
			return [];
		return Object.keys(this.trialList[0]);
	}
	getCurrentTrial() {
		return this.trialList[this.thisIndex];
	}
	getFutureTrial(n = 1) {
		if (this.thisIndex+n < 0 || n > this.nRemaining)
			return undefined;
		return this.trialList[this.thisIndex+n];
	}
	getEarlierTrial(n = -1) {
		return getFutureTrial(-abs(n));
	}
	addData(key, value) {
		if (this._experimentHandler)
			this._experimentHandler.addData(key, value);
	}
	static importConditions(serverManager, resourceName, selection = null) {
		try {
			let resourceExtension = resourceName.split('.').pop();
			if (['csv', 'odp', 'xls', 'xlsx'].indexOf(resourceExtension) > -1) {
				let resourceValue = serverManager.getResource(resourceName);
				let workbook = XLSX.read(new Uint8Array(resourceValue), { type: "array" });
				if (workbook.SheetNames.length == 0)
					throw '"workbook should contain at least one worksheet"';
				let sheetName = workbook.SheetNames[0];
				let worksheet = workbook.Sheets[sheetName];
				let sheet = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
				let fields = sheet.shift();
				let selectedRows = sheet;
				if (selection != null)
					selectedRows = selectFromArray(sheet, selection);
				let trialList = new Array(selectedRows.length - 1);
				for (var r = 0; r < selectedRows.length; ++r) {
					let row = selectedRows[r];
					let trial = {};
					for (var l = 0; l < fields.length; ++l)
						trial[fields[l]] = row[l];
					trialList[r] = trial;
				}
				return trialList;
			}
			else {
				throw 'extension: ' + resourceExtension + ' currently not supported.';
			}
		}
		catch (exception) {
			throw '{ "origin" : "data.importConditions", "context" : "when importing condition: ' + resourceName + '", "error" : ' + exception + ', "stack" : ' + getErrorStack() + ' }';
		}
	}
	_prepareTrialList(trialList) {
		let response = { origin : 'TrialHandler._prepareTrialList', context : 'when preparing the trial list' };
		if (typeof trialList === 'undefined')
			this.trialList = [undefined];
		else if (typeof trialList === 'string')
			this.trialList = TrialHandler.importConditions(this.psychoJS.serverManager, trialList);
		else if (Array.isArray(trialList)) {
			if (trialList.length == 0)
				this.trialList = [undefined];
		}
		else
			throw { ...response, error: 'unable to prepare trial list: unknown type.' };
	}
	_prepareSequence() {
		let response = { origin : 'TrialHandler._prepareSequence', context : 'when preparing a sequence of trials' };
		const indices = Array.from(this.trialList.keys());
		if (typeof (this.seed) !== 'undefined')
			Math.seedrandom(this.seed);
		else
			Math.seedrandom();
		if (this.method === TrialHandler.Method.SEQUENTIAL) {
			this._trialSequence = Array(this.nReps).fill(indices);
		}
		else if (this.method === TrialHandler.Method.RANDOM) {
			this._trialSequence = [];
			for (let i = 0; i < this.nReps; ++i)
				this._trialSequence.push(shuffle(indices.slice()));
		}
		else if (this.method === TrialHandler.Method.FULL_RANDOM) {
			let flatSequence = [];
			for (let i = 0; i < this.nReps; ++i)
				flatSequence.push.apply(flatSequence, indices);
			shuffle(flatSequence);
			this._trialSequence = [];
			for (let i = 0; i < this.nReps; i++)
				this._trialSequence.push(flatSequence.slice(i * this.nStim, (i + 1) * this.nStim));
		}
		else {
			throw { ...response, error: 'unknown method' };
		}
		return this._trialSequence;
	}
}
TrialHandler.Method = {
	SEQUENTIAL: Symbol.for('SEQUENTIAL'),
	RANDOM: Symbol.for('RANDOM'),
	FULL_RANDOM: Symbol.for('FULL_RANDOM')
};

export { ExperimentHandler, TrialHandler };
