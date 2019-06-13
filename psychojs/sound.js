import { PsychObject } from './util.js';
import { PsychoJS } from './core.js';

/**
 * Sound player interface
 *
 * @author Alain Pitiot
 * @version 3.1
 * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class SoundPlayer extends PsychObject
{
	constructor(psychoJS)
	{
		super(psychoJS);
	}
	static accept(sound)
	{
		throw {origin: 'SoundPlayer.accept', context: 'when evaluating whether this player can play a given sound', error: 'this method is abstract and should not be called.'};
	}
	play(loops)
	{
		throw {origin: 'SoundPlayer.play', context: 'when starting the playback of a sound', error: 'this method is abstract and should not be called.'};
	}
	stop()
	{
		throw {origin: 'SoundPlayer.stop', context: 'when stopping the playback of a sound', error: 'this method is abstract and should not be called.'};
	}
	getDuration()
	{
		throw {origin: 'SoundPlayer.getDuration', context: 'when getting the duration of the sound', error: 'this method is abstract and should not be called.'};
	}
	setLoops(loops)
	{
		throw {origin: 'SoundPlayer.setLoops', context: 'when setting the number of loops', error: 'this method is abstract and should not be called.'};
	}
	setVolume(volume, mute = false) {
		throw {origin: 'SoundPlayer.setVolume', context: 'when setting the volume of the sound', error: 'this method is abstract and should not be called.'};
	}
}

/**
 * Tone Player.
 *
 * @author Alain Pitiot
 * @version 3.1
 * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class TonePlayer extends SoundPlayer {
	constructor({
		psychoJS,
		note = 'C4',
		duration_s = 0.5,
		volume = 1.0,
		loops = 0
	} = {}) {
		super(psychoJS);
		this._addAttributes(TonePlayer, note, duration_s, volume, loops);
		this._synthOtions = {
			oscillator: {
				type: 'triangle'
			},
			envelope: {
				attack: 0.001,
				decay: 0.001,
				sustain: 1,
				release: 0.001
			}
		};
		this._synth = new Tone.Synth(this._synthOtions);
		this._volumeNode = new Tone.Volume(-60 + volume * 66);
		this._synth.connect(this._volumeNode);
		this._volumeNode.toMaster();
		this._toneLoop = null;
	}
	static accept(sound) {
		if ($.isNumeric(sound.value)) {
			const player = new TonePlayer({
				psychoJS: sound.psychoJS,
				note: sound.value,
				duration_s: sound.secs,
				volume: sound.volume,
				loops: sound.loops
			});
			return player;
		}
		if (typeof sound.value === 'string') {
			let psychopyToToneMap = new Map();
			for (const note of ['A', 'B', 'C', 'D', 'E', 'F', 'G']) {
				psychopyToToneMap.set(note, note);
				psychopyToToneMap.set(note + 'fl', note + 'b');
				psychopyToToneMap.set(note + 'sh', note + '#');
			}
			const note = psychopyToToneMap.get(sound.value);
			if (typeof note !== 'undefined') {
				const player = new TonePlayer({
					psychoJS: sound.psychoJS,
					note: note + sound.octave,
					duration_s: sound.secs,
					volume: sound.volume,
					loops: sound.loops
				});
				return player;
			}
		}
		return undefined;
	}
	getDuration()
	{
		return this.duration_s;
	}
	setLoops(loops)
	{
		this._loops = loops;
	}
	setVolume(volume, mute = false) {
		this._volume = volume;
		if (typeof this._volumeNode !== 'undefined') {
			this._volumeNode.mute = mute;
			this._synth.volume.value = -60 + volume * 66;
		}
	}
	play(loops) {
		if (typeof loops !== 'undefined')
			this._loops = loops;
		const self = this;
		const callback = time => { self._synth.triggerAttackRelease(self._note, self.duration_s, Tone.now()); };
		if (this.loops == 0)
			this._toneId = Tone.Transport.scheduleOnce(callback, Tone.now());
		else if (this.loops == -1)
			this._toneId = Tone.Transport.scheduleRepeat(
				callback,
				this.duration_s,
				Tone.now(),
				Tone.Infinity
			);
		else
			this._toneId = Tone.Transport.scheduleRepeat(
				callback,
				this.duration_s,
				Tone.now(),
				this.duration_s * (this._loops+1)
			);
}
	stop() {
		if (this._toneId)
			Tone.Transport.clear(this._toneId);
	}
}
Tone.Transport.start(Tone.now());

/**
 * Track Player.
 *
 * @author Alain Pitiot
 * @version 3.1
 * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class TrackPlayer extends SoundPlayer {
	constructor({
		psychoJS,
		howl,
		startTime = 0,
		stopTime = -1,
		stereo = true,
		volume = 0,
		loops = 0
	} = {}) {
		super(psychoJS);
		this._addAttributes(TrackPlayer, howl, startTime, stopTime, stereo, loops, volume);
		this._currentLoopIndex = -1;
	}
	static accept(sound) {
		if (typeof sound.value === 'string') {
			const howl = sound.psychoJS.serverManager.getResource(sound.value);
			if (typeof howl !== 'undefined') {
				const player = new TrackPlayer({
					psychoJS: sound.psychoJS,
					howl: howl,
					startTime: sound.startTime,
					stopTime: sound.stopTime,
					stereo: sound.stereo,
					loops: sound.loops,
					volume: sound.volume
				});
				return player;
			}
		}
		return undefined;
	}
	getDuration()
	{
		return this._howl.duration();
	}
	setVolume(volume, mute = false) {
		this._volume = volume;
		this._howl.volume(volume);
		this._howl.mute(mute);
	}
	setLoops(loops)
	{
		this._loops = loops;
		this._currentLoopIndex = -1;
		if (loops == 0)
			this._howl.loop(false);
		else
			this._howl.loop(true);
	}
	play(loops) {
		if (typeof loops !== 'undefined')
			this.setLoops(loops);
		if (loops > 0) {
			const self = this;
			this._howl.on('end', (event) => {
				++this._currentLoopIndex;
				if (self._currentLoopIndex > self._loops)
					self.stop();
				else {
					self._howl.seek(self._startTime);
					self._howl.play();
				}
			});
		}
		this._howl.seek(this._startTime);
		this._howl.play();
	}
	stop() {
		this._howl.stop();
		this._howl.off('end');
	}
}

/**
 * Sound stimulus.
 *
 * @author Alain Pitiot
 * @version 3.1
 * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Sound extends PsychObject {
	constructor({
		name,
		win,
		value = 'C',
		octave = 4,
		secs = 0.5,
		startTime = 0,
		stopTime = -1,
		stereo = true,
		volume = 1.0,
		loops = 0,
		hamming = true,
		autoLog = true
	} = {}) {
		super(win._psychoJS, name);
		this._player = undefined;
		this._addAttributes(Sound, win, value, octave, secs, startTime, stopTime, stereo, volume, loops, hamming, autoLog);
		this._getPlayer();
		this.status = PsychoJS.Status.NOT_STARTED;
	}
	play(loops, log = true) {
		this.status = PsychoJS.Status.STARTED;
		this._player.play(loops);
	}
	stop({
		log = true
	} = {}) {
		this._player.stop();
		this.status = PsychoJS.Status.STOPPED;
	}
	getDuration() {
		return this._player.getDuration();
	}
	setVolume(volume, mute = false, log = true) {
		this._setAttribute('volume', volume, log);
		if (typeof this._player !== 'undefined')
			this._player.setVolume(volume, mute);
	}
	setLoops(loops = 0, log = true) {
		this._setAttribute('loops', loops, log);
		if (typeof this._player !== 'undefined')
			this._player.setLoops(loops);
	}
	_getPlayer() {
		const acceptFns = [
			sound => TonePlayer.accept(sound),
			sound => TrackPlayer.accept(sound)
		];
		for (const acceptFn of acceptFns) {
			this._player = acceptFn(this);
			if (typeof this._player !== 'undefined')
				return;
		}
		throw { origin: 'SoundPlayer._getPlayer', context: 'when finding a player for the sound', error: 'could not find an appropriate player.' };
	}
}

export { Sound, SoundPlayer, TonePlayer, TrackPlayer };
