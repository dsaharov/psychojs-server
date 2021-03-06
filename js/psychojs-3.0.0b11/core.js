import { PsychObject } from './util-3.0.0b11.js';
import { toString, getUrlParameters, to_win } from './util-3.0.0b11.js';
import { Color } from './util-3.0.0b11.js';
import { MonotonicClock, Clock } from './util-3.0.0b11.js';
import { Scheduler } from './util-3.0.0b11.js';
import { ExperimentHandler } from './data-3.0.0b11.js';
import { Logger } from './util-3.0.0b11.js';

/**
 * Manager responsible for the communication between the experiment running in the participant's browser and the remote PsychoJS manager running on the remote https://pavlovia.org server.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class ServerManager extends PsychObject {
	constructor({
		psychoJS,
		autoLog = false
	} = {}) {
		super(psychoJS);
		this._session = {};
		this._resourceDirectory = undefined;
		this._resources = new Map();
		this._nbResources = -1;
		this._howls = undefined;
		this._addAttributes(ServerManager, autoLog);
		this._addAttribute('status', ServerManager.Status.READY);
	}
	getConfiguration(configURL) {
		let response = { origin: 'ServerManager.getConfiguration', context: 'when reading the configuration file: ' + configURL };
		this._psychoJS.logger.debug('reading the configuration file: ' + configURL);
		return new Promise((resolve, reject) => {
			$.get(configURL, 'json')
				.done((config, textStatus) => {
					resolve({ ...response, config });
				})
				.fail((jqXHR, textStatus, errorThrown) => {
					reject({ ...response, error: errorThrown });
				});
		});
	}
	openSession() {
		let response = { origin: 'ServerManager.openSession', context: 'when opening a session for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('opening a session for experiment: ' + this._psychoJS.config.experiment.name);
		this.setStatus(ServerManager.Status.BUSY);
		let data = {
			experimentFullPath: this._psychoJS.config.experiment.fullpath
		};
		const gitlabConfig = this._psychoJS.config.gitlab;
		if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined')
			data.projectId = gitlabConfig.projectId;
		let self = this;
		return new Promise((resolve, reject) => {
			$.post(this._psychoJS.config.psychoJsManager.URL + '?command=open_session', data, null, 'json')
				.done((data, textStatus) => {
					if ('error' in data) {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: data.error });
					}
					if ('token' in data) {
						self._psychoJS.config.experiment.token = data.token;
						self.setStatus(ServerManager.Status.READY);
						resolve({ ...response, token: data.token });
					}
					else {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: 'unexpected answer from server: no token' });
					}
				})
				.fail((jqXHR, textStatus, errorThrown) => {
					self.setStatus(ServerManager.Status.ERROR);
					reject({ ...response, error: 'request error: ' + textStatus });
				});
		});
	}
	closeSession(isCompleted = false) {
		let response = { origin: 'ServerManager.closeSession', context: 'when closing the session for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('closing the session for experiment: ' + this._psychoJS.config.experiment.name);
		this.setStatus(ServerManager.Status.BUSY);
		let data = {
			experimentFullPath: this._psychoJS.config.experiment.fullpath,
			'token': this._psychoJS.config.experiment.token,
			'isCompleted': isCompleted
		};
		const gitlabConfig = this._psychoJS.config.gitlab;
		if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined')
			data.projectId = gitlabConfig.projectId;
		let self = this;
		return new Promise((resolve, reject) => {
			$.post(this._psychoJS.config.psychoJsManager.URL + '?command=close_session', data, null, 'json')
				.done((data, textStatus) => {
					if ('error' in data) {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: data.error });
					}
					self.setStatus(ServerManager.Status.READY);
					resolve({ ...response, data });
				})
				.fail((jqXHR, textStatus, errorThrown) => {
					self.setStatus(ServerManager.Status.ERROR);
					reject({ ...response, error: errorThrown });
				});
		});
	}
	getResource(name) {
		const response = { origin: 'ServerManager.getResource', context: 'when getting the value of resource: ' + name };
		const path_data = this._resources.get(name);
		if (typeof path_data === 'undefined')
			throw { ...response, error: 'unknown resource' };
		return path_data.data;
	}
	setStatus(status) {
		let response = { origin: 'ServerManager.setStatus', context: 'when changing the status of the server manager to: ' + toString(status) };
		const statusKey = (typeof status === 'symbol') ? Symbol.keyFor(status) : null;
		if (!statusKey)
			throw { ...response, error: 'status must be a symbol' };
		if (!ServerManager.Status.hasOwnProperty(statusKey))
			throw { ...response, error: 'unknown status' };
		this._status = status;
		this.emit(ServerManager.Event.STATUS, this._status);
		return this._status;
	}
	resetStatus() {
		return this.setStatus(ServerManager.Status.READY);
	}
	downloadResources(resources = []) {
		const response = { origin: 'ServerManager.downloadResources', context: 'when downloading the resources for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('downloading resources for experiment: ' + this._psychoJS.config.experiment.name);
		const self = this;
		let download = async () => {
			try {
				console.log(1)
				if (true) {
					if (resources.length === 0) {
						const serverResponse = await self._listResources();
						for (const name of serverResponse.resources)
							self._resources.set(name, { path: serverResponse.resourceDirectory + '/' + name });
					}
					else {
						console.log(2)
						for (const {name, path} of resources){
							console.log(3)
							self._resources.set(name, { path });
							console.log(3)
						}
					}
				} else {
					for (const {name, path} of resources)
						self._resources.set(name, { path });
				}
				self._nbResources = self._resources.size;
				console.log(4)
				for (const name of self._resources.keys())
					this._psychoJS.logger.debug('resource:', name, self._resources.get(name).path);
				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCES_REGISTERED, count: self._nbResources });
				await self._downloadRegisteredResources();
			}
			catch (error) {
				console.log('error', error);
				throw { ...response, error: error };
			}
		};
		download();
	}
	uploadData(key, value) {
		let response = { origin: 'ServerManager.uploadData', context: 'when uploading participant\' results for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('uploading data for experiment: ' + this._psychoJS.config.experiment.name);
		this.setStatus(ServerManager.Status.BUSY);
		let data = {
			experimentFullPath: this._psychoJS.config.experiment.fullpath,
			token: this._psychoJS.config.experiment.token,
			key,
			value,
			saveFormat: Symbol.keyFor(this._psychoJS.config.experiment.saveFormat)
		};
		const gitlabConfig = this._psychoJS.config.gitlab;
		if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined')
			data.projectId = gitlabConfig.projectId;
		const self = this;
		return new Promise((resolve, reject) => {
			$.post(this._psychoJS.config.psychoJsManager.URL + '?command=save_data', data, null, 'json')
				.done((data, textStatus) => {
					if ('error' in data) {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: data.error });
					}
					self.setStatus(ServerManager.Status.READY);
					resolve({ ...response, data });
				})
				.fail((jqXHR, textStatus, errorThrown) => {
					self.setStatus(ServerManager.Status.ERROR);
					reject({ ...response, error: errorThrown });
				});
		});
	}
	_listResources() {
		let response = { origin: 'ServerManager._listResourcesSession', context: 'when listing the resources for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('listing the resources for experiment: ' + this._psychoJS.config.experiment.name);
		this.setStatus(ServerManager.Status.BUSY);
		const self = this;
		return new Promise((resolve, reject) => {
			$.get(self._psychoJS.config.psychoJsManager.URL, {
				'command': 'list_resources',
				'experimentFullPath': self._psychoJS.config.experiment.fullpath,
				'token': self._psychoJS.config.experiment.token
			}, null, 'json')
				.done((data, textStatus) => {
					if ('error' in data)
						reject({ ...response, error: data.error });
					if (!('resources' in data)) {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: 'unexpected answer from server: no resources' });
					}
					if (!('resourceDirectory' in data)) {
						self.setStatus(ServerManager.Status.ERROR);
						reject({ ...response, error: 'unexpected answer from server: no resourceDirectory' });
					}
					self.setStatus(ServerManager.Status.READY);
					resolve({ ...response, resources: data.resources, resourceDirectory: data.resourceDirectory });
				})
				.fail((jqXHR, textStatus, errorThrown) => {
					self.setStatus(ServerManager.Status.ERROR);
					reject({ ...response, error: errorThrown });
				});
		});
	}
	_downloadRegisteredResources() {
		const response = { origin: 'ServerManager._downloadResources', context: 'when downloading the resources for experiment: ' + this._psychoJS.config.experiment.name };
		this._psychoJS.logger.debug('downloading the registered resources for experiment: ' + this._psychoJS.config.experiment.name);
		this.setStatus(ServerManager.Status.BUSY);
		this._nbLoadedResources = 0;
		this._resourceQueue = new createjs.LoadQueue(true);
		const self = this;
		this._resourceQueue.addEventListener("filestart", event => {
			self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOADING_RESOURCE, resource: event.item.id });
		});
		this._resourceQueue.addEventListener("fileload", event => {
			++self._nbLoadedResources;
			let path_data = self._resources.get(event.item.id);
			path_data.data = event.result;
			self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCE_DOWNLOADED, resource: event.item.id });
		});
		this._resourceQueue.addEventListener("complete", event => {
			self._resourceQueue.close();
			if (self._nbLoadedResources === self._nbResources) {
				self.setStatus(ServerManager.Status.READY);
				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
			}
		});
		this._resourceQueue.addEventListener("error", event => {
			self.setStatus(ServerManager.Status.ERROR);
			const resourceId = (typeof event.data !== 'undefined')?event.data.id:'UNKNOWN RESOURCE';
			throw { ...response, error: 'unable to download resource: ' + resourceId + ' (' + event.title + ')' };
		});
		let manifest = [];
		let soundResources = [];
		for (const [name, path_data] of this._resources) {
			const extension = name.split('.').pop();
			if (['csv', 'odp', 'xls', 'xlsx'].indexOf(extension) > -1)
				manifest.push({ id: name, src: path_data.path, type: createjs.Types.BINARY });
			else if (['mp3', 'mpeg', 'opus', 'ogg', 'oga', 'wav', 'aac', 'caf', 'm4a', 'weba', 'dolby', 'flac'].indexOf(extension) > -1)
				soundResources.push(name);
			else
				manifest.push({ id: name, src: path_data.path });
		}
		if (manifest.length > 0)
			this._resourceQueue.loadManifest(manifest);
		else {
			if (this._nbLoadedResources === this._nbResources) {
				this.setStatus(ServerManager.Status.READY);
				this.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
			}
		}
		for (const name of soundResources) {
			self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOADING_RESOURCE, resource: name });
			const path_data = self._resources.get(name);
			const howl = new Howl({
				src: path_data.path,
				preload: false,
				autoplay: false
			});
			howl.on('load', (event) => {
				++self._nbLoadedResources;
				path_data.data = howl;
				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCE_DOWNLOADED, resource: name });
				if (self._nbLoadedResources === self._nbResources) {
					self.setStatus(ServerManager.Status.READY);
					self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
				}
			});
			howl.on('loaderror', (id, error) => {
				throw { ...response, error: 'unable to download resource: ' + name + ' (' + toString(error) + ')' };
			});
			howl.load();
		}
	}
}
ServerManager.Event = {
	RESOURCE: Symbol.for('RESOURCE'),
	RESOURCES_REGISTERED: Symbol.for('RESOURCES_REGISTERED'),
	DOWNLOADING_RESOURCE: Symbol.for('DOWNLOADING_RESOURCE'),
	RESOURCE_DOWNLOADED: Symbol.for('RESOURCE_DOWNLOADED'),
	DOWNLOAD_COMPLETED: Symbol.for('DOWNLOAD_COMPLETED'),
	STATUS: Symbol.for('STATUS')
};
ServerManager.Status = {
	READY: Symbol.for('READY'),
	BUSY: Symbol.for('BUSY'),
	ERROR: Symbol.for('ERROR')
};

/**
 * Window responsible for displaying the experiment stimuli
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Window extends PsychObject {
	get monitorFramePeriod() { return this._monitorFramePeriod; }
	constructor({
		psychoJS,
		name,
		fullscr = false,
		color = new Color('black'),
		units = 'pix',
		autoLog = true
	} = {}) {
		super(psychoJS, name);
		this._msgToBeLogged = [];
		this._drawList = [];
		this._addAttributes(Window, name, fullscr, color, units, autoLog);
		this._addAttribute('size', []);
		this._setupPixi();
		this._monitorFramePeriod = 1.0 / this.getActualFrameRate();
		this._frameCount = 0;
		this._flipCallback = undefined;
		this._flipCallbackArgs = undefined;
	}
	close() {
		if (document.body.contains(this._renderer.view))
			document.body.removeChild(this._renderer.view);
		window.removeEventListener('resize', this._resizeCallback);
		window.removeEventListener('orientationchange', this._resizeCallback);
	}
	getActualFrameRate() {
		return 60.0;
	}
	adjustScreenSize() {
		if (this.fullscr) {
			if (typeof document.documentElement.requestFullscreen === 'function')
				document.documentElement.requestFullscreen();
			else if (typeof document.documentElement.mozRequestFullScreen === 'function')
				document.documentElement.mozRequestFullScreen();
			else if (typeof document.documentElement.webkitRequestFullscreen === 'function')
				document.documentElement.webkitRequestFullscreen();
			else if (typeof document.documentElement.msRequestFullscreen === 'function')
				document.documentElement.msRequestFullscreen();
			else
				this.psychoJS.logger.warn('Unable to go fullscreen.');
			this._needUpdate = true;
			for (const stim of this._drawList)
				stim._needUpdate = true;
		}
	}
	logOnFlip({
		msg,
		level,
		obj = undefined } = {}) {
		this._msgToBeLogged.push({ msg, level, obj });
	}
	callOnFlip(flipCallback, ...flipCallbackArgs) {
		this._flipCallback = flipCallback;
		this._flipCallbackArgs = flipCallbackArgs;
	}
	render() {
		this._frameCount++;
		this._renderer.render(this._rootContainer);
		this._renderer.gl.readPixels(0, 0, 1, 1, this._renderer.gl.RGBA, this._renderer.gl.UNSIGNED_BYTE, new Uint8Array(4));
		this._writeLogOnFlip();
		if (typeof this._flipCallback !== 'undefined')
			this._flipCallback(...this._flipCallbackArgs);
		this._refresh();
	}
	_updateIfNeeded() {
		if (this._needUpdate) {
			this._renderer.backgroundColor = this._color.int;
			this._needUpdate = false;
		}
	}
	_refresh() {
		this._updateIfNeeded();
		for (const stim of this._drawList)
			if (stim._needUpdate) {
				this._rootContainer.removeChild(stim._pixi);
				stim._updateIfNeeded();
				this._rootContainer.addChild(stim._pixi);
			}
	}
	_setupPixi() {
		this._size[0] = window.innerWidth;
		this._size[1] = window.innerHeight;
		this._renderer = PIXI.autoDetectRenderer(this._size[0], this._size[1], {
			backgroundColor: this.color.int
		});
		this._renderer.view.style["transform"] = "translatez(0)";
		this._renderer.view.style.position = "absolute";
		document.body.appendChild(this._renderer.view);
		this._rootContainer = new PIXI.Container();
		this._rootContainer.interactive = true;
		this._onResize(this);
		this.psychoJS.eventManager.addMouseListeners(this._renderer);
		this._resizeCallback = e => this._onResize(this);
		window.addEventListener('resize', this._resizeCallback);
		window.addEventListener('orientationchange', this._resizeCallback);
	}
	_onResize(win) {
		win._size[0] = window.innerWidth;
		win._size[1] = window.innerHeight;
		win._renderer.view.style.width = win._size[0] + 'px';
		win._renderer.view.style.height = win._size[1] + 'px';
		win._renderer.view.style.left = '0px';
		win._renderer.view.style.top = '0px';
		win._renderer.resize(win._size[0], win._size[1]);
		win._rootContainer.position.x = win._size[0] / 2.0;
		win._rootContainer.position.y = win._size[1] / 2.0;
		win._rootContainer.scale.y = -1;
	}
	_writeLogOnFlip() {
		var logTime = MonotonicClock.getReferenceTime();
		for (var i = 0; i < this._msgToBeLogged.length; ++i) {
			var entry = this._msgToBeLogged[i];
			this._psychoJS.logger.log(entry.msg, entry.level, logTime, entry.obj);
		}
		this._msgToBeLogged = [];
	}
}

/**
 * Graphic User Interface
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class GUI
{
	get dialogComponent() { return this._dialogComponent; }
	constructor(psychoJS)
	{
		this._psychoJS = psychoJS;
		psychoJS.serverManager.on(ServerManager.Event.RESOURCE, (signal) => { this._onResourceEvents(signal); });
	}
	DlgFromDict({
		dictionary,
		title
	})
	{
		const infoFromUrl = getUrlParameters();
		this._progressMsg = '&nbsp;';
		this._progressBarMax = 0;
		this._OkButtonDisabled = true;
		this._dialogComponent = {};
		this._dialogComponent.status = PsychoJS.Status.NOT_STARTED;
		const dialogClock = new Clock();
		let self = this;
		let loop = () => {
			const t = dialogClock.getTime();
			if (t >= 0.0 && self._dialogComponent.status === PsychoJS.Status.NOT_STARTED) {
				self._dialogComponent.tStart = t;
				self._dialogComponent.status = PsychoJS.Status.STARTED;
				let htmlCode =
					'<div id="expDialog" title="' + title + '">' +
					'<p class="validateTips">Fields marked with an asterisk (*) are required.</p>';
				for (const key in dictionary)
				{
					let inUrl = false;
					const cleanedDictKey = key.trim().toLowerCase();
					for (const [urlKey, urlValue] of infoFromUrl) {
						const cleanedUrlKey = urlKey.trim().toLowerCase();
						if (cleanedUrlKey == cleanedDictKey) {
							inUrl = true;
							break;
						}
					}
					if (!inUrl) {
						htmlCode = htmlCode +
						'<label for="' + key + '">' + key + '</label>' +
						'<input type="text" name="' + key + '" id="' + key + '_id" value="' + dictionary[key] + '" class="text ui-widget-content ui-corner-all">';
					}
				}
				htmlCode = htmlCode + '<hr><div id="progressMsg" class="progress">' + self._progressMsg + '</div>';
				htmlCode = htmlCode + '<div id="progressbar"></div></div>';
				let dialogElement = document.getElementById('root');
				dialogElement.innerHTML = htmlCode;
				self._dialogComponent.button = 'Cancel';
				$("#expDialog").dialog({
					width: 400,
					modal: true,
					closeOnEscape: false,
					buttons: [
						{
							id: "buttonOk",
							text: "Ok",
							disabled: self._OkButtonDisabled,
							click: function() {
								for (const key in dictionary) {
									const input = document.getElementById(key + "_id");
									if (input)
										dictionary[key] = input.value;
								}
								self._dialogComponent.button = 'OK';
								$("#expDialog").dialog( "close" );
								self._psychoJS.window.adjustScreenSize();
							}
						},
						{
							id: "buttonCancel",
							text: "Cancel",
							click: function() {
								self._dialogComponent.button = 'Cancel';
								$("#expDialog").dialog( "close" );
							}
						}
					],
					close : function() {
						self._dialogComponent.status = PsychoJS.Status.FINISHED;
					}
				})
				.prev(".ui-dialog-titlebar").css("background", "green");
				$("#expDialog").dialog("open");
				$("#progressbar").progressbar({value: self._progressBarCurrentIncrement});
				$("#progressbar").progressbar("option", "max", self._progressBarMax);
			}
			if (self._dialogComponent.status === PsychoJS.Status.FINISHED)
				return Scheduler.Event.NEXT;
			else
				return Scheduler.Event.FLIP_REPEAT;
		};
		return loop;
	}
	_onResourceEvents(signal) {
		this._psychoJS.logger.debug('signal: ' + toString(signal));
		if (signal.message === ServerManager.Event.RESOURCES_REGISTERED) {
			this._progressBarMax = signal.count * 2;
			$("#progressbar").progressbar("option", "max", this._progressBarMax);
			this._progressBarCurrentIncrement = 0;
			$("#progressMsg").text('all resources registered.');
		}
		else if (signal.message === ServerManager.Event.DOWNLOAD_COMPLETED) {
			this._OkButtonDisabled = false;
			$("#buttonOk").button({ disabled: this._OkButtonDisabled });
			$("#progressMsg").text('all resources downloaded.');
		}
		else if (signal.message === ServerManager.Event.DOWNLOADING_RESOURCE || signal.message === ServerManager.Event.RESOURCE_DOWNLOADED)
		{
			if (typeof this._progressBarCurrentIncrement === 'undefined')
				this._progressBarCurrentIncrement = 0;
			if (signal.message === ServerManager.Event.DOWNLOADING_RESOURCE)
				$("#progressMsg").text(signal.resource + ': downloading...');
			else
				$("#progressMsg").text(signal.resource + ': downloaded.');
			++ this._progressBarCurrentIncrement;
			$("#progressbar").progressbar("option", "value", this._progressBarCurrentIncrement);
		}
		else
			$("#progressMsg").text(signal.message);
	}
	dialog({
		message,
		warning,
		error,
		showOK = true,
		onOK
	} = {}) {
		this.destroyDialog();
		if (typeof error !== 'undefined') {
			this._psychoJS.logger.fatal(toString(error));
			var htmlCode = '<div id="msgDialog" title="Error">';
			htmlCode += '<p class="validateTips">Unfortunately we encountered an error:</p>';
			htmlCode += '<ul>';
			while (true) {
				if (typeof error === 'object' && 'context' in error) {
					htmlCode += '<li>' + error.context + '</li>';
					error = error.error;
				} else {
					htmlCode += '<li><b>' + error  + '</b></li>';
					break;
				}
			}
			htmlCode += '</ul>';
			htmlCode += '<p>Try to run the experiment again. If the error persists, contact the experimenter.</p>';
			var titleColour = 'red';
		}
		else if (typeof message !== 'undefined') {
			htmlCode = '<div id="msgDialog" title="Message">'
				+ '<p class="validateTips">' + message + '</p>';
			titleColour = 'green';
		}
		else if (typeof warning !== 'undefined') {
			htmlCode = '<div id="msgDialog" title="Warning">'
				+ '<p class="validateTips">' + warning + '</p>';
			titleColour = 'orange';
		}
		htmlCode = htmlCode + '</div>';
		var dialogElement = document.getElementById('root');
		dialogElement.innerHTML = htmlCode;
		$("#msgDialog").dialog({dialogClass: 'no-close', width: '80%', modal: true, closeOnEscape: false})
		.prev(".ui-dialog-titlebar").css("background", titleColour);
		if (showOK) {
			$("#msgDialog").dialog("option", "buttons", [
				{
					id: "buttonOk",
					text: "Ok",
					click: function() {
						$(this).dialog("close");
						if (typeof onOK !== 'undefined')
							onOK();
					}
				}]);
		}
		$("#msgDialog").dialog("open");
	}
	destroyDialog()
	{
		if ($("#expDialog").length) {
			$("#expDialog").dialog("destroy");
		}
		if ($("#msgDialog").length) {
			$("#msgDialog").dialog("destroy");
		}
	}
}

/**
 * Main component of the PsychoJS library.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class PsychoJS {
	get status() { return this._status; }
	set status(sts) {
		this._status = sts;
	}
	get config() { return this._config; }
	get window() { return this._window; }
	get serverManager() { return this._serverManager; }
	get experiment() { return this._experiment; }
	get scheduler() { return this._scheduler; }
	get monotonicClock() { return this._monotonicClock; }
	get logger() { return this._logger.consoleLogger; }
	get eventManager() { return this._eventManager; }
	get gui() { return this._gui; }
	get IP() { return this._IP; }
	constructor({
		debug = true,
		collectIP = false
	} = {}) {
		this._logger = new Logger((debug) ? log4javascript.Level.DEBUG : log4javascript.Level.INFO);
		this._captureErrors();
		this._monotonicClock = new MonotonicClock();
		this._eventManager = new EventManager(this);
		this._serverManager = new ServerManager({
			psychoJS: this
		});
		this._gui = new GUI(this);
		this._collectIP = collectIP;
		this._scheduler = new Scheduler(this);
		this._window = undefined;
		this._cancellationUrl = undefined;
		this._completionUrl = undefined;
		this._status = PsychoJS.Status.NOT_CONFIGURED;
		this.logger.info('[PsychoJS] Initialised.');
	}
	openWindow({
		name,
		fullscr,
		color,
		units,
		autoLog
	} = {}) {
		this.logger.info('[PsychoJS] Open Window.');
		if (typeof this._window !== 'undefined')
			throw { origin : 'PsychoJS.openWindow', context : 'when opening a Window', error : 'A Window has already been opened.' };
		this._window = new Window({
			psychoJS: this,
			name,
			fullscr,
			color,
			units,
			autoLog
		});
	}
	setRedirectUrls(completionUrl, cancellationUrl) {
		this._completionUrl = completionUrl;
		this._cancellationUrl = cancellationUrl;
	}
	schedule(task, args) {
		this.logger.debug('schedule task: ', task.toString().substring(0, 50), '...');
		this._scheduler.add(task, args);
	}
	scheduleCondition(condition, thenScheduler, elseScheduler) {
		this.logger.debug('schedule condition: ', condition.toString().substring(0, 50), '...');
		this._scheduler.addConditional(condition, thenScheduler, elseScheduler);
	}
	async start({ configURL = 'config.json', expInfo, resources = [] } = {}) {
		this.logger.debug();
		let response = { origin: 'PsychoJS.start', context: 'when starting the experiment' };
		try {
			await this._configure(configURL);
			if (this._collectIP) {
				this._getParticipantIPInfo();
			} else {
				this._IP = {};
				this._IP['IP'] = 'X';
				this._IP['hostname'] = 'X';
				this._IP['city'] = 'X';
				this._IP['region'] = 'X';
				this._IP['country'] = 'X';
				this._IP['location'] = 'X';
			}
			this._experiment = new ExperimentHandler({
				psychoJS: this,
				extraInfo: expInfo
			});
			await this._serverManager.openSession();
			this._serverManager.downloadResources(resources);
			this.logger.info('[PsychoJS] Start Experiment.');
			this._scheduler.start();
		}
		catch (error) {
			this._gui.dialog({ error: { ...response, error } });
		}
	}
	importAttributes(obj) {
		this.logger.debug('import attributes from: ', toString(obj));
		if (typeof obj === 'undefined')
			return;
		for (const attribute in obj) {
			window[attribute] = obj[attribute];
		}
	}
	async quit({ message, isCompleted = false } = {}) {
		this.logger.info('[PsychoJS] Quit.');
		try {
			this.gui.dialog({ warning: 'Saving the experiment results and closing the session. Please wait a few moments.', showOK: false });
			await this._experiment.save();
			await this._serverManager.closeSession(isCompleted);
			this._scheduler.stop();
			let text = 'Thank you for your patience. The data have been saved.<br/><br/>';
			text += (typeof message !== 'undefined') ? message : 'Goodbye!';
			const self = this;
			this._gui.dialog({
				message: text, onOK: () => {
					self._window.close();
					self._gui.destroyDialog();
					while (document.body.hasChildNodes())
						document.body.removeChild(document.body.lastChild);
					if (isCompleted && typeof self._completionUrl !== 'undefined')
						window.location = self._completionUrl;
					else if (!isCompleted && typeof self._cancellationUrl !== 'undefined')
						window.location = self._cancellationUrl;
				}
			});
		}
		catch (error) {
			console.error(error);
			this._gui.dialog({ "error": error });
		}
	}
	async _configure(configURL) {
		let response = { origin: 'PsychoJS.configure', context: 'when configuring PsychoJS for the experiment' };
		try {
			this.status = PsychoJS.Status.CONFIGURING;
			const response = await this._serverManager.getConfiguration(configURL);
			this.status = PsychoJS.Status.CONFIGURED;
			this._config = response.config;
			this.logger.debug('configuration:', toString(response.config));

			if (!('experiment' in this._config))
				throw 'missing experiment block in configuration';
			if (!('name' in this._config.experiment))
				throw 'missing name in experiment block in configuration';
			if (!('fullpath' in this._config.experiment))
				throw 'missing fullpath in experiment block in configuration';
			if (!('psychoJsManager' in this._config))
				throw 'missing psychoJsManager block in configuration';
			if (!('URL' in this._config.psychoJsManager))
				throw 'missing URL in psychoJsManager block in configuration';
			if ('saveFormat' in this._config.experiment)
				this._config.experiment.saveFormat = Symbol.for(this._config.experiment.saveFormat);
			else
				this._config.experiment.saveFormat = ExperimentHandler.SaveFormat.CSV;
			return response;
		}
		catch (error) {
			throw { ...response, error };
		}
	}
	async _getParticipantIPInfo() {
		let response = { origin: 'PsychoJS._getParticipantIPInfo', context: 'when get the IP information of the participant' };
		this.logger.debug('getting the IP information of the participant');
		this._IP = {};
		let self = this;
		try {
			const geoResponse = await $.get('http://www.geoplugin.net/json.gp');
			const geoData = JSON.parse(geoResponse);
			self._IP['IP'] = geoData.geoplugin_request;
			self._IP['country'] = geoData.geoplugin_countryName;
			self._IP['latitude'] = geoData.geoplugin_latitude;
			self._IP['longitude'] = geoData.geoplugin_longitude;
			self.logger.debug('IP information of the participant: ' + toString(self._IP));
		}
		catch (error) {
			throw { ...response, error };
		}
	}
	_captureErrors() {
		this.logger.debug('capturing all errors using window.onerror');
		const self = this;
		window.onerror = function (message, source, lineno, colno, error) {
			console.error(error);
			self._gui.dialog({ "error": error });
			return true;
		};
	}
}
PsychoJS.Status = {
	NOT_CONFIGURED: Symbol.for('NOT_CONFIGURED'),
	CONFIGURING: Symbol.for('CONFIGURING'),
	CONFIGURED: Symbol.for('CONFIGURED'),
	NOT_STARTED: Symbol.for('NOT_STARTED'),
	STARTED: Symbol.for('STARTED'),
	STOPPED: Symbol.for('STOPPED'),
	FINISHED: Symbol.for('FINISHED')
};

/**
 * Manager handling the keyboard and mouse/touch events.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class EventManager {
	constructor(psychoJS) {
		this._psychoJS = psychoJS;
		for (var keyName in EventManager._pygletMap)
			EventManager._reversePygletMap[EventManager._pygletMap[keyName]] = keyName;
		this._keyBuffer = [];
		this._addKeyListeners();
		this._mouseInfo = {
			pos: [0, 0],
			wheelRel: [0.0, 0.0],
			buttons: {
				pressed: [0, 0, 0],
				clocks: [new Clock(), new Clock(), new Clock()],
				times: [0.0, 0.0, 0.0]
			},
			moveClock: new Clock()
		};
	}
	getKeys({
		keyList = null,
		timeStamped = false
	} = {}) {
		if (keyList != null)
			keyList = this._pyglet2w3c(keyList);
		let newBuffer = [];
		let keys = [];
		for (let i = 0; i < this._keyBuffer.length; ++i) {
			const key = this._keyBuffer[i];
			let keyId = null;
			if (keyList != null) {
				let index = keyList.indexOf(key.code);
				if (index < 0)
					index = keyList.indexOf(EventManager._keycodeMap[key.keyCode]);
				if (index >= 0)
					keyId = EventManager._reversePygletMap[keyList[index]];
			}
			else
				keyId = EventManager._reversePygletMap[key.code];
			if (keyId != null) {
				if (timeStamped)
					keys.push([keyId, key.timestamp]);
				else
					keys.push(keyId);
			}
			else
				newBuffer.push(key);
		}
		this._keyBuffer = newBuffer;
		return keys;
	}
	getMouseInfo() {
		return this._mouseInfo;
	}
	clearEvents(attribs) {
		this.clearKeys();
	}
	clearKeys() {
		this._keyBuffer = [];
	}
	startMoveClock() {
	}
	stopMoveClock() {
	}
	resetMoveClock() {
	}
	addMouseListeners(renderer) {
		let self = this;
		const view = renderer.view;
		view.addEventListener("pointerdown", event => {
			self._mouseInfo.buttons.pressed[event.button] = 1;
			self._mouseInfo.buttons.times[event.button] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[event.button].getLastResetTime();
			self._mouseInfo.pos = [event.offsetX, event.offsetY];
		}, false);
		view.addEventListener("pointerup", event => {
			self._mouseInfo.buttons.pressed[event.button] = 0;
			self._mouseInfo.buttons.times[event.button] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[event.button].getLastResetTime();
			self._mouseInfo.pos = [event.offsetX, event.offsetY];
		}, false);
		view.addEventListener("pointermove", event => {
			self._mouseInfo.pos = [event.offsetX, event.offsetY];
			self._mouseInfo.moveClock.reset();
		}, false);
		view.addEventListener("wheel", event => {
			self._mouseInfo.wheelRel[0] += event.deltaX;
			self._mouseInfo.wheelRel[1] += event.deltaY;
		}, false);
	}
	_addKeyListeners() {
		let self = this;
		document.addEventListener("keydown", (e) => {
			self._keyBuffer.push({
				code: e.code,
				key: e.key,
				keyCode: e.keyCode,
				timestamp: MonotonicClock.getReferenceTime() / 1000
			});
			self._psychoJS.logger.trace('keys pressed : ', toString(self._keyBuffer));
		});
	}
	_pyglet2w3c(pygletKeyList) {
		let w3cKeyList = [];
		for (let i = 0; i < pygletKeyList.length; i++) {
			if (typeof EventManager._pygletMap[pygletKeyList[i]] === 'undefined')
				w3cKeyList.push(pygletKeyList[i]);
			else
				w3cKeyList.push(EventManager._pygletMap[pygletKeyList[i]]);
		}
		return w3cKeyList;
	}
}
EventManager._keycodeMap = {
	49: "Digit1",
	50: "Digit2",
	51: "Digit3",
	52: "Digit4",
	53: "Digit5",
	54: "Digit6",
	55: "Digit7",
	56: "Digit8",
	57: "Digit9",
	48: "Digit0",
	65: "KeyA",
	66: "KeyB",
	67: "KeyC",
	68: "KeyD",
	69: "KeyE",
	70: "KeyF",
	71: "KeyG",
	72: "KeyH",
	73: "KeyI",
	74: "KeyJ",
	75: "KeyK",
	76: "KeyL",
	77: "KeyM",
	78: "KeyN",
	79: "KeyO",
	80: "KeyP",
	81: "KeyQ",
	82: "KeyR",
	83: "KeyS",
	84: "KeyT",
	85: "KeyU",
	86: "KeyV",
	87: "KeyW",
	88: "KeyX",
	89: "KeyY",
	90: "KeyZ",
	188: "Comma",
	190: "Period",
	186: "Semicolon",
	222: "Quote",
	219: "BracketLeft",
	221: "BracketRight",
	192: "Backquote",
	220: "Backslash",
	189: "Minus",
	187: "Equal",
	144: "NumLock",
	96: "Numpad0",
	97: "Numpad1",
	98: "Numpad2",
	99: "Numpad3",
	100: "Numpad4",
	101: "Numpad5",
	102: "Numpad6",
	103: "Numpad7",
	104: "Numpad8",
	105: "Numpad9",
	107: "NumpadAdd",
	194: "NumpadComma",
	194: "NumpadComma",
	110: "NumpadDecimal",
	110: "NumpadDecimal",
	111: "NumpadDivide",
	13: "NumpadEnter",
	12: "NumpadEqual",
	106: "NumpadMultiply",
	109: "NumpadSubtract",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	27: "Escape",
	32: "Space"
};
EventManager._pygletMap = {
	"grave": "Backquote",
	"backslash": "Backslash",
	"backspace": "Backspace",
	"bracketleft": "BracketLeft",
	"bracketright": "BracketRight",
	"comma": "Comma",
	"0": "Digit0",
	"1": "Digit1",
	"2": "Digit2",
	"3": "Digit3",
	"4": "Digit4",
	"5": "Digit5",
	"6": "Digit6",
	"7": "Digit7",
	"8": "Digit8",
	"9": "Digit9",
	"equal": "Equal",
	"a": "KeyA",
	"b": "KeyB",
	"c": "KeyC",
	"d": "KeyD",
	"e": "KeyE",
	"f": "KeyF",
	"g": "KeyG",
	"h": "KeyH",
	"i": "KeyI",
	"j": "KeyJ",
	"k": "KeyK",
	"l": "KeyL",
	"m": "KeyM",
	"n": "KeyN",
	"o": "KeyO",
	"p": "KeyP",
	"q": "KeyQ",
	"r": "KeyR",
	"s": "KeyS",
	"t": "KeyT",
	"u": "KeyU",
	"v": "KeyV",
	"w": "KeyW",
	"x": "KeyX",
	"y": "KeyY",
	"z": "KeyZ",
	"minus": "Minus",
	"period": "Period",
	"apostrophe": "Quote",
	"semicolon": "Semicolon",
	"slash": "Slash",
	"escape": "Escape",
	"loption": "AltLeft",
	"roption": "AltRight",
	"capslock": "CapsLock",
	"lcontrol": "ControlLeft",
	"rcontrol": "ControlRight",
	"return": "Enter",
	"lcommand": "MetaLeft",
	"rcommand": "MetaRight",
	"lshift": "ShiftLeft",
	"rshift": "ShiftRight",
	"space": "Space",
	"tab": "Tab",
	"down": "ArrowDown",
	"left": "ArrowLeft",
	"right": "ArrowRight",
	"up": "ArrowUp",
	"num_0": "Numpad0",
	"num_1": "Numpad1",
	"num_2": "Numpad2",
	"num_3": "Numpad3",
	"num_4": "Numpad4",
	"num_5": "Numpad5",
	"num_6": "Numpad6",
	"num_7": "Numpad7",
	"num_8": "Numpad8",
	"num_9": "Numpad9",
	"num_decimal": "NumpadDecimal",
	"num_enter": "NumpadEnter",
	"num_add": "NumpadAdd",
	"num_subtract": "NumpadSubtract",
	"num_multiply": "NumpadMultiply",
	"num_divide": "NumpadDivide",
	"num_equal": "NumpadEqual",
	"num_numlock": "NumpadNumlock"
};
EventManager._reversePygletMap = {};
class BuilderKeyResponse {
	constructor(psychoJS) {
		this._psychoJS = psychoJS;
		this.status = PsychoJS.Status.NOT_STARTED;
		this.keys = [];
		this.corr = 0;
		this.rt = [];
		this.clock = new Clock();
	}
}

/**
 * Base class for all stimuli.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class MinimalStim extends PsychObject {
	constructor({
		name,
		win,
		autoDraw = false,
		autoLog = false
	} = {}) {
		super(win._psychoJS, name);
		this._pixi = undefined;
		this._addAttributes(MinimalStim, win, autoDraw, autoLog);
		this._needUpdate = false;
		this.status = PsychoJS.Status.NOT_STARTED;
	}
	setAutoDraw(autoDraw, log = false) {
		let errorPrefix = { origin : 'MinimalStim.setAutoDraw', context: 'when setting the autoDraw attribute of stimulus: ' + this._name };
		this._setAttribute('autoDraw', autoDraw, log);
		const index = this.win._drawList.indexOf(this);
		if (this._autoDraw) {
			if (this.win) {
				if (index < 0) {
					this._updateIfNeeded();
					if (typeof this._pixi === 'undefined')
						throw {...errorPrefix, error: 'the PIXI representation of the stimulus is unavailable'};
					this.win._rootContainer.addChild(this._pixi);
					this.win._drawList.push(this);
				} else
				{
					if (this._needUpdate) {
						this.win._rootContainer.removeChild(this._pixi);
						this._updateIfNeeded();
						this.win._rootContainer.addChild(this._pixi);
					}
				}
			}
			this.status = PsychoJS.Status.STARTED;
		}
		else {
			if (this.win) {
				if (index >= 0) {
					this.win._drawList.splice(index, 1);
					this.win._rootContainer.removeChild(this._pixi);
				}
			}
			this.status = PsychoJS.Status.STOPPED;
		}
	}
	draw() {
		this._updateIfNeeded();
		if (this.win && this.win._drawList.indexOf(this) < 0) {
			this.win._container.addChild(this._pixi);
			this.win._drawList.push(this);
		}
	}
	contains(object, units) {
		throw {origin: 'MinimalStim.contains', context: 'when determining whether stimulus: ' + this._name + 'contains object: ' + util.toString(object), error: 'this method is abstract and should not be called.'};
	}
	_updateIfNeeded() {
		throw {origin: 'MinimalStim._updateIfNeeded', context: 'when updating stimulus: ' + this._name, error: 'this method is abstract and should not be called.'};
	}
}

/**
 * Manager responsible for the interactions between the experiment's stimuli and the mouse.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Mouse extends PsychObject {
	constructor({
		name,
		win,
		autoLog = true
	} = {}) {
		super(win._psychoJS, name);
		this._lastPos = undefined;
		this._prevPos = undefined;
		this._movedistance = 0.0;
		const units = win.units;
		const visible = 1;
		this._addAttributes(Mouse, win, units, visible, autoLog);
		this.status = PsychoJS.Status.NOT_STARTED;
	}
	getPos() {
		const mouseInfo = this.psychoJS.eventManager.getMouseInfo();
		let pos_px = mouseInfo.pos.slice();
		pos_px[0] = pos_px[0] - this.win.size[0] / 2;
		pos_px[1] = this.win.size[1] / 2 - pos_px[1];
		this._lastPos = to_win(pos_px, 'pix', this._win);
		return this._lastPos;
	}
	getRel() {
		if (typeof this._lastPos === 'undefined')
			return this.getPos();
		else {
			const lastPos = this._lastPos;
			const pos = this.getPos();
			return [-lastPos[0] + pos[0], -lastPos[1] + pos[1]];
		}
	}
	getWheelRel()
	{
		const mouseInfo = this.psychoJS.eventManager.getMouseInfo();
		const wheelRel_px = mouseInfo.wheelRel.slice();
		const wheelRel = to_win(wheelRel_px, 'pix', this._win);
		mouseInfo.wheelRel = [0, 0];
		return wheelRel;
	}
	getPressed(getTime = false) {
		const buttonPressed = this.psychoJS.eventManager.getMouseInfo().buttons.pressed.slice();
		if (!getTime)
			return buttonPressed;
		else {
			const buttonTimes = this.psychoJS.eventManager.getMouseInfo().buttons.times.slice();
			return [buttonPressed, buttonTimes];
		}
	}
	mouseMoved(distance, reset = false) {
		if (typeof this._lastPos === 'undefined')
			this.getPos();
		this._prevPos = this._lastPos.slice();
		this.getPos();
		if (typeof reset === 'boolean' && reset == false) {
			if (typeof distance === 'undefined')
				return (this._prevPos[0] != this._lastPos[0]) || (this._prevPos[1] != this._lastPos[1]);
			else {
				if (typeof distance === 'number') {
					this._movedistance = Math.sqrt((this._prevPos[0] - this._lastPos[0]) * (this._prevPos[0] - this._lastPos[0]) + (this._prevPos[1] - this._lastPos[1]) * (this._prevPos[1] - this._lastPos[1]));
					return (this._movedistance > distance);
				}
				if (this._prevPos[0] + distance[0] - this._lastPos[0] > 0.0)
					return true;
				if (this._prevPos[1] + distance[1] - this._lastPos[0] > 0.0)
					return true;
				return false;
			}
		}
		else if (typeof reset === 'boolean' && reset == true) {
			this.psychoJS.eventManager.getMouseInfo().moveClock.reset();
			return false;
		}
		else if (reset === 'here') {
			this._prevPos = this._lastPos.clone();
			return false;
		}
		else if (reset instanceof Array) {
			this._prevPos = reset.slice();
			if (!distance)
				return false;
			else {
				if (typeof distance === 'number') {
					this._movedistance = Math.sqrt((this._prevPos[0] - this._lastPos[0]) * (this._prevPos[0] - this._lastPos[0]) + (this._prevPos[1] - this._lastPos[1]) * (this._prevPos[1] - this._lastPos[1]));
					return (this._movedistance > distance);
				}
				if (Math.abs(this._lastPos[0] - this._prevPos[0]) > distance[0])
					return true;
				if (Math.abs(this._lastPos[1] - this._prevPos[1]) > distance[1])
					return true;
				return false;
			}
		}
		else
			return false;
	}
	mouseMoveTime() {
		return this.psychoJS.eventManager.getMouseInfo().moveClock.getTime();
	}
	clickReset(buttons = [0, 1, 2]) {
		const mouseInfo = this.psychoJS.eventManager.getMouseInfo();
		for (const b of buttons) {
			mouseInfo.buttons.clocks[b].reset();
			mouseInfo.buttons.times[b] = 0.0;
		}
	}
}

/**
 * Mixin implementing various unit-handling measurement methods.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
let WindowMixin = (superclass) => class extends superclass
{
	constructor(args)
	{
		super(args);
	}
	setUnits(units = this.win.units, log = false)
	{
		this._setAttribute('units', units, log);
	}
	_getLengthPix(length)
	{
		let errorPrefix = { origin: 'WindowMixin._getLengthPix', context: 'when converting a length from stimulus unit to pixel units' };
		if (this._units === 'pix') {
			return length;
		}
		else if (typeof this._units === 'undefined' || this._units === 'norm') {
			var winSize = this.win.size;
			return length * winSize[1]/2;
		}
		else if (this._units === 'height') {
			const minSize = Math.min(this.win.size[0], this.win.size[1]);
			return length * minSize;
		}
		else {
			throw {...errorPrefix, error: 'unable to deal with unit: ' + this._units};
		}
	}
	_getLengthUnits(length_px)
	{
		let errorPrefix = { origin: 'WindowMixin._getLengthUnits', context: 'when converting a length from pixel unit to stimulus units' };
		if (this._units === 'pix') {
			return length_px;
		}
		else if (typeof this._units === 'undefined' || this._units === 'norm') {
			const winSize = this.win.size;
			return length_px / (winSize[1]/2);
		}
		else if (this._units === 'height') {
			const minSize = Math.min(this.win.size[0], this.win.size[1]);
			return length_px / minSize;
		}
		else {
			throw {...errorPrefix, error: 'unable to deal with unit: ' + this._units};
		}
	}
	_getHorLengthPix(length)
	{
		let errorPrefix = { origin: 'WindowMixin._getHorLengthPix', context: 'when converting a length from pixel unit to stimulus units' };
		if (this._units === 'pix') {
			return length;
		}
		else if (typeof this._units === 'undefined' || this._units === 'norm') {
			var winSize = this.win.size;
			return length * winSize[0]/2;
		}
		else if (this._units === 'height') {
			const minSize = Math.min(this.win.size[0], this.win.size[1]);
			return length * minSize;
		}
		else {
			throw {...errorPrefix, error: 'unable to deal with unit: ' + this._units};
		}
	}
	_getVerLengthPix(length)
	{
		let errorPrefix = { origin: 'WindowMixin._getVerLengthPix', context: 'when converting a length from pixel unit to stimulus units' };
		if (this._units === 'pix') {
			return length;
		}
		else if (typeof this._units === 'undefined' || this._units === 'norm') {
			var winSize = this.win.size;
			return length * winSize[1]/2;
		}
		else if (this._units === 'height') {
			const minSize = Math.min(this.win.size[0], this.win.size[1]);
			return length * minSize;
		}
		else {
			throw {...errorPrefix, error: 'unable to deal with unit: ' + this._units};
		}
	}
};

export { EventManager, BuilderKeyResponse, GUI, MinimalStim, Mouse, PsychoJS, ServerManager, Window, WindowMixin };
