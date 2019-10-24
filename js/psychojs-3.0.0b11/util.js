class MonotonicClock
{
	constructor(startTime = MonotonicClock.getReferenceTime())
	{
		this._timeAtLastReset = startTime;
	}
	getTime()
	{
		return MonotonicClock.getReferenceTime() - this._timeAtLastReset;
	}
	getLastResetTime()
	{
		return this._timeAtLastReset;
	}
	static getReferenceTime()
	{
		return (new Date().getTime() - MonotonicClock._referenceTime) / 1000;
	}
	static getDateStr(format = 'YYYY-MM-DD_HH[h]mm.ss.SSS')
	{
		return moment().format(format);
	}
}
	MonotonicClock._referenceTime = new Date().getTime();
class Clock extends MonotonicClock
{
	constructor()
	{
		super();
	}
	reset(newT = 0)
	{
		this._timeAtLastReset = MonotonicClock.getReferenceTime() + newT;
	}
	add(t)
	{
		this._timeAtLastReset += t;
	}
}
class CountdownTimer extends Clock
{
	constructor(startTime)
	{
		super();
		startTime = startTime || 0;
		this._timeAtLastReset = MonotonicClock.getReferenceTime();
		this._countdown_duration = startTime;
		if (startTime) {
			this.add(startTime);
		}
	}
	add(t)
	{
		this._timeAtLastReset += t;
	}
	reset(t)
	{
		if (t === undefined) {
			this._timeAtLastReset = MonotonicClock.getReferenceTime() + this._countdown_duration;
		}
		else {
			this._countdown_duration = t;
			this._timeAtLastReset = MonotonicClock.getReferenceTime() + t;
		}
	}
	getTime()
	{
		return this._timeAtLastReset - MonotonicClock.getReferenceTime();
	}
}

class Color {
	constructor(obj = 'black', colorspace = Color.COLOR_SPACE.RGB) {
		var errorPrefix = '{ "function" : "Color", "context" : "when defining a color", "error" : ';
		try {
			if (typeof obj == 'string') {
				if (colorspace != Color.COLOR_SPACE.RGB)
					throw '"the colorspace must be RGB for a named color"';
				if (obj[0] == '#') {
					this._hex = obj;
				}
				else {
					if (!(obj in Color.NAMED_COLORS))
						throw '"unknown named color: ' + obj + '"';
					this._hex = Color.NAMED_COLORS[obj];
				}
				this._rgb = Color.hexToRgb(this._hex);
			}
			else if (typeof obj == 'number') {
				if (colorspace != Color.COLOR_SPACE.RGB)
					throw '"the colorspace must be RGB for a named color"';
				this._rgb = Color._intToRgb(obj);
			}
			else if (Array.isArray(obj)) {
				Color._checkTypeAndRange(obj);
				let [a, b, c] = obj;
				if (colorspace != Color.COLOR_SPACE.RGB255) {
					Color._checkTypeAndRange(obj, [-1, 1]);
					a = (a + 1.0) / 2.0;
					b = (b + 1.0) / 2.0;
					c = (c + 1.0) / 2.0;
				}
				switch (colorspace) {
					case Color.COLOR_SPACE.RGB255:
						Color._checkTypeAndRange(obj, [0, 255]);
						this._rgb = [a / 255.0, b / 255.0, c / 255.0];
						break;
					case Color.COLOR_SPACE.RGB:
						this._rgb = [a, b, c];
						break;
					case Color.COLOR_SPACE.HSV:
						break;
					case Color.COLOR_SPACE.DKL:
						break;
					case Color.COLOR_SPACE.LMS:
						break;
					default:
						throw '"unknown colorspace: ' + colorspace + '"';
				}
			}
		}
		catch (exception) {
			throw errorPrefix + exception + ' }';
		}
	}
	get rgb() { return this._rgb; }
	get rgb255() { return [Math.round(this._rgb[0] * 255.0), Math.round(this._rgb[1] * 255.0), Math.round(this._rgb[2] * 255.0)]; }
	get hex() {
		if (typeof this._hex === 'undefined')
			this._hex = Color._rgbToHex(this._rgb);
		return this._hex;
	}
	get int() {
		if (typeof this._int === 'undefined')
			this._int = Color._rgbToInt(this._rgb);
		return this._int;
	}
	get hsv() {
		if (typeof this._hsv === 'undefined')
			this._hsv = Color._rgbToHsv(this._rgb);
		return this._hsv;
	}
	get dkl() {
		if (typeof this._dkl === 'undefined')
			this._dkl = Color._rgbToDkl(this._rgb);
		return this._dkl;
	}
	get lms() {
		if (typeof this._lms === 'undefined')
			this._lms = Color._rgbToLms(this._rgb);
		return this._lms;
	}
	static hexToRgb255(hex) {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result == null)
			throw '{ "function" : "Color.hexToRgb(255)", "context" : "when converting an hexadecimal color code to its 255- or [0,1]-based RGB color representation", "error" : "unable to parse the argument: wrong type or wrong code"';
		return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
	}
	static hexToRgb(hex) {
		let [r255, g255, b255] = Color.hexToRgb255(hex);
		return [r255 / 255.0, g255 / 255.0, b255 / 255.0];
	}
	static rgb255ToHex(rgb255) {
		var errorPrefix = '{ "function" : "Color.rgb255ToHex", "context" : "when converting an rgb triplet to its hexadecimal color representation", "error" : ';
		try {
			Color._checkTypeAndRange(rgb255, [0, 255]);
			return Color._rgb255ToHex(rgb255);
		}
		catch (exception) {
			throw errorPrefix + exception + ' }';
		}
	}
	static rgbToHex(rgb) {
		var errorPrefix = '{ "function" : "Color.rgbToHex", "context" : "when converting an rgb triplet to its hexadecimal color representation", "error" : ';
		try {
			Color._checkTypeAndRange(rgb, [0, 1]);
			return Color._rgbToHex(rgb);
		}
		catch (exception) {
			throw errorPrefix + exception + ' }';
		}
	}
	static rgbToInt(rgb) {
		var errorPrefix = '{ "function" : "Color.rgbToInt", "context" : "when converting an rgb triplet to its integer representation", "error" : ';
		try {
			Color._checkTypeAndRange(rgb, [0, 1]);
			return Color._rgbToInt(rgb);
		}
		catch (exception) {
			throw errorPrefix + exception + ' }';
		}
	}
	static rgb255ToInt(rgb255) {
		var errorPrefix = '{ "function" : "Color.rgb255ToInt", "context" : "when converting an rgb triplet to its integer representation", "error" : ';
		try {
			Color._checkTypeAndRange(rgb255, [0, 255]);
			return Color._rgb255ToInt(rgb255);
		}
		catch (exception) {
			throw errorPrefix + exception + ' }';
		}
	}
	static _rgb255ToHex(rgb255) {
		return "#" + ((1 << 24) + (rgb255[0] << 16) + (rgb255[1] << 8) + rgb255[2]).toString(16).slice(1);
	}
	static _rgbToHex(rgb) {
		let rgb255 = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
		return Color._rgb255ToHex(rgb255);
	}
	static _rgbToInt(rgb) {
		let rgb255 = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
		return Color._rgb255ToInt(rgb255);
	}
	static _rgb255ToInt(rgb255) {
		return rgb255[0] * 0x10000 + rgb255[1] * 0x100 + rgb255[2];
	}
	static _intToRgb255(hex) {
		let r255 = hex >>> 0x10;
		let g255 = (hex & 0xFF00) / 0x100;
		let b255 = hex & 0xFF;
		return [r255, g255, b255];
	}
	static _intToRgb(hex) {
		let [r255, g255, b255] = Color._intToRgb255(hex);
		return [r255 / 255.0, g255 / 255.0, b255 / 255.0];
	}
	static _checkTypeAndRange(arg, range = undefined) {
		if (!Array.isArray(arg) || arg.length != 3
			|| typeof arg[0] !== 'number' || typeof arg[1] !== 'number' || typeof arg[2] !== 'number')
			throw '"the argument should be an array of numbers of length 3"';
		if (typeof range !== 'undefined' && (arg[0] < range[0] || arg[0] > range[1] || arg[1] < range[0] || arg[1] > range[1] || arg[2] < range[0] || arg[2] > range[1]))
			throw '"the color components should all belong to [' + range[0] + ', ' + range[1] + ']"';
	}
}
Color.COLOR_SPACE = {
	RGB: Symbol.for('RGB'),
	RGB255: Symbol.for('RGB255'),
	HSV: Symbol.for('HSV'),
	DKL: Symbol.for('DKL'),
	LMS: Symbol.for('LMS')
};
Color.NAMED_COLORS = {
	'aliceblue': '#F0F8FF',
	'antiquewhite': '#FAEBD7',
	'aqua': '#00FFFF',
	'aquamarine': '#7FFFD4',
	'azure': '#F0FFFF',
	'beige': '#F5F5DC',
	'bisque': '#FFE4C4',
	'black': '#000000',
	'blanchedalmond': '#FFEBCD',
	'blue': '#0000FF',
	'blueviolet': '#8A2BE2',
	'brown': '#A52A2A',
	'burlywood': '#DEB887',
	'cadetblue': '#5F9EA0',
	'chartreuse': '#7FFF00',
	'chocolate': '#D2691E',
	'coral': '#FF7F50',
	'cornflowerblue': '#6495ED',
	'cornsilk': '#FFF8DC',
	'crimson': '#DC143C',
	'cyan': '#00FFFF',
	'darkblue': '#00008B',
	'darkcyan': '#008B8B',
	'darkgoldenrod': '#B8860B',
	'darkgray': '#A9A9A9',
	'darkgreen': '#006400',
	'darkkhaki': '#BDB76B',
	'darkmagenta': '#8B008B',
	'darkolivegreen': '#556B2F',
	'darkorange': '#FF8C00',
	'darkorchid': '#9932CC',
	'darkred': '#8B0000',
	'darksalmon': '#E9967A',
	'darkseagreen': '#8FBC8B',
	'darkslateblue': '#483D8B',
	'darkslategray': '#2F4F4F',
	'darkturquoise': '#00CED1',
	'darkviolet': '#9400D3',
	'deeppink': '#FF1493',
	'deepskyblue': '#00BFFF',
	'dimgray': '#696969',
	'dodgerblue': '#1E90FF',
	'firebrick': '#B22222',
	'floralwhite': '#FFFAF0',
	'forestgreen': '#228B22',
	'fuchsia': '#FF00FF',
	'gainsboro': '#DCDCDC',
	'ghostwhite': '#F8F8FF',
	'gold': '#FFD700',
	'goldenrod': '#DAA520',
	'gray': '#808080',
	'green': '#008000',
	'greenyellow': '#ADFF2F',
	'honeydew': '#F0FFF0',
	'hotpink': '#FF69B4',
	'indianred': '#CD5C5C',
	'indigo': '#4B0082',
	'ivory': '#FFFFF0',
	'khaki': '#F0E68C',
	'lavender': '#E6E6FA',
	'lavenderblush': '#FFF0F5',
	'lawngreen': '#7CFC00',
	'lemonchiffon': '#FFFACD',
	'lightblue': '#ADD8E6',
	'lightcoral': '#F08080',
	'lightcyan': '#E0FFFF',
	'lightgoldenrodyellow': '#FAFAD2',
	'lightgray': '#D3D3D3',
	'lightgreen': '#90EE90',
	'lightpink': '#FFB6C1',
	'lightsalmon': '#FFA07A',
	'lightseagreen': '#20B2AA',
	'lightskyblue': '#87CEFA',
	'lightslategray': '#778899',
	'lightsteelblue': '#B0C4DE',
	'lightyellow': '#FFFFE0',
	'lime': '#00FF00',
	'limegreen': '#32CD32',
	'linen': '#FAF0E6',
	'magenta': '#FF00FF',
	'maroon': '#800000',
	'mediumaquamarine': '#66CDAA',
	'mediumblue': '#0000CD',
	'mediumorchid': '#BA55D3',
	'mediumpurple': '#9370DB',
	'mediumseagreen': '#3CB371',
	'mediumslateblue': '#7B68EE',
	'mediumspringgreen': '#00FA9A',
	'mediumturquoise': '#48D1CC',
	'mediumvioletred': '#C71585',
	'midnightblue': '#191970',
	'mintcream': '#F5FFFA',
	'mistyrose': '#FFE4E1',
	'moccasin': '#FFE4B5',
	'navajowhite': '#FFDEAD',
	'navy': '#000080',
	'oldlace': '#FDF5E6',
	'olive': '#808000',
	'olivedrab': '#6B8E23',
	'orange': '#FFA500',
	'orangered': '#FF4500',
	'orchid': '#DA70D6',
	'palegoldenrod': '#EEE8AA',
	'palegreen': '#98FB98',
	'paleturquoise': '#AFEEEE',
	'palevioletred': '#DB7093',
	'papayawhip': '#FFEFD5',
	'peachpuff': '#FFDAB9',
	'peru': '#CD853F',
	'pink': '#FFC0CB',
	'plum': '#DDA0DD',
	'powderblue': '#B0E0E6',
	'purple': '#800080',
	'red': '#FF0000',
	'rosybrown': '#BC8F8F',
	'royalblue': '#4169E1',
	'saddlebrown': '#8B4513',
	'salmon': '#FA8072',
	'sandybrown': '#F4A460',
	'seagreen': '#2E8B57',
	'seashell': '#FFF5EE',
	'sienna': '#A0522D',
	'silver': '#C0C0C0',
	'skyblue': '#87CEEB',
	'slateblue': '#6A5ACD',
	'slategray': '#708090',
	'snow': '#FFFAFA',
	'springgreen': '#00FF7F',
	'steelblue': '#4682B4',
	'tan': '#D2B48C',
	'teal': '#008080',
	'thistle': '#D8BFD8',
	'tomato': '#FF6347',
	'turquoise': '#40E0D0',
	'violet': '#EE82EE',
	'wheat': '#F5DEB3',
	'white': '#FFFFFF',
	'whitesmoke': '#F5F5F5',
	'yellow': '#FFFF00',
	'yellowgreen': '#9ACD32'
};

let ColorMixin = (superclass) => class extends superclass
{
	constructor(args)
	{
		super(args);
	}
	setColor(color, log)
	{
		this._setAttribute('color', color, log);
		this._needUpdate = true;
	};
	setContrast(contrast, log)
	{
		this._setAttribute('contrast', contrast, log);
		this._needUpdate = true;
	}
	_getDesiredColor(color, contrast)
	{
		let rgb = color.rgb.map(c => (c*2.0-1.0) * contrast);
		return new Color(rgb, Color.COLOR_SPACE.RGB);
	}
};

let mix = (superclass) => new MixinBuilder(superclass);
class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass;
  }
  with(...mixins) {
    return mixins.reduce((c, mixin) => mixin(c), this.superclass);
  }
}
function promiseToTupple(promise) {
	return promise
		.then(data => [null, data])
		.catch(error => [error, null]);
}
function makeUuid()
{
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
function getErrorStack()
{
  try {
		throw Error('');
	} catch(error) {
		var stack = error.stack.split("\n");
		stack.splice(1, 1);
		return JSON.stringify(stack.join('\n'));
	}
}
function isEmpty(x)
{
	if (typeof x === 'undefined') return true;
	if (!Array.isArray(x)) return false;
	if (x.length == 0) return true;
	if (x.length == 1 && typeof x[0] === 'undefined') return true;
	return false;
}
function detectBrowser()
{
	const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	if (isOpera) return 'Opera';
	const isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) return 'Firefox';
	const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
	if (isSafari) return 'Safari';
	const isIE = /*@cc_on!@*/!!document.documentMode;
	if (isIE) return 'IE';
	const isEdge = !isIE && !!window.StyleMedia;
	if (isEdge) return 'Edge';
	const isChrome = !!window.chrome && !!window.chrome.webstore;
	if (isChrome) return 'Chrome';
	const isBlink = (isChrome || isOpera) && !!window.CSS;
	if (isBlink) return 'Blink';
	return 'unknown';
}
function toNumerical(obj)
{
	let errorPrefix = '{ "origin" : "util.toNumerical", "context" : "when converting an object to its numerical form", "error" : ';
	if (typeof obj === 'number')
		return obj;
	if (typeof obj === 'string')
		obj = [obj];
	if (Array.isArray(obj)) {
		return obj.map( e => {
			let n = Number.parseFloat(e);
			if (Number.isNaN(n))
				throw errorPrefix + '"unable to convert: ' + e + ' to a number."}';
			return n;
		});
	}
}
function IsPointInsidePolygon(point, vertices)
{
	let x = point[0], y = point[1];
	let isInside = false;
	for (var i = 0, j = vertices.length - 1; i < vertices.length; j = i++)
	{
  	const xi = vertices[i][0], yi = vertices[i][1];
    const xj = vertices[j][0], yj = vertices[j][1];
    const intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) isInside = !isInside;
  }
  return isInside;
}
function shuffle(array)
{
	for (let i = array.length - 1; i > 0; i--)
	{
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
function	getPositionFromObject(object, units)
{
	let errorPrefix = '{ "origin" : "util.getPositionFromObject", "context" : "when getting the position of an object", "error" : ';
	let pos = undefined, posUnit = undefined, objectWin = undefined;
	if (typeof object.getPos === 'function') {
		pos = object.getPos();
		posUnit = object.units;
		objectWin = object.win;
	}
	if (typeof pos === 'undefined')
		throw errorPrefix + '"unable to get the position of the object" }';
	let pos_px = to_px(pos, posUnit, objectWin);
	return pos_px;
}
function to_px(pos, posUnit, win)
{
	let errorPrefix = '{ "origin" : "util.to_px", "context" : "when converting a position to pixel units", "error" : ';
	if (posUnit === 'pix')
		return pos;
	if (posUnit === 'norm')
		return [pos[0] * win.size[0]/2.0, pos[1] * win.size[1]/2.0];
	if (posUnit === 'height') {
		const minSize = Math.min(win.size[0], win.size[1]);
		return [pos[0] * minSize, pos[1] * minSize];
	}
	throw errorPrefix + '"unknown pos units: ' + posUnit + '" }';
}
function to_norm(pos, posUnit, win)
{
	let errorPrefix = '{ "origin" : "util.to_norm", "context" : "when converting a position to norm units", "error" : ';
	if (posUnit === 'norm')
		return pos;
	if (posUnit === 'pix')
		return [pos[0] / (win.size[0]/2.0), pos[1] / (win.size[1]/2.0)];
	if (posUnit === 'height') {
		const minSize = Math.min(win.size[0], win.size[1]);
		return [pos[0] * minSize / (win.size[0]/2.0), pos[1] * minSize / (win.size[1]/2.0)];
	}
	throw errorPrefix + '"unknown pos units: ' + posUnit + '" }';
}
function to_height(pos, posUnit, win)
{
	let errorPrefix = '{ "origin" : "util.to_height", "context" : "when converting a position to height units", "error" : ';
	if (posUnit === 'height')
		return pos;
	if (posUnit === 'pix') {
		const minSize = Math.min(win.size[0], win.size[1]);
		return [pos[0] / minSize, pos[1] / minSize];
	}
	if (posUnit === 'norm') {
		const minSize = Math.min(win.size[0], win.size[1]);
		return [pos[0] * win.size[0]/2.0 / minSize, pos[1] * win.size[1]/2.0 / minSize];
	}
	throw errorPrefix + '"unknown pos units: ' + posUnit + '" }';
}
function to_win(pos, posUnit, win)
{
	let errorPrefix = '{ "origin" : "util.to_win", "context" : "when converting a position to window units", "error" : ';
	try {
		if (win._units === 'pix')
			return to_px(pos, posUnit, win);
		if (win._units === 'norm')
			return to_norm(pos, posUnit, win);
		if (win._units === 'height')
			return to_height(pos, posUnit, win);
		throw errorPrefix + '"unknown window units: ' + win._units + '" }';
	} catch (error) {
		throw errorPrefix + error + '}';
	}
}
function to_unit(pos, posUnit, win, targetUnit)
{
	let errorPrefix = '{ "origin" : "util.to_unit", "context" : "when converting a position to a different unit", "error" : ';
	try {
		if (targetUnit === 'pix')
			return to_px(pos, posUnit, win);
		if (targetUnit === 'norm')
			return to_norm(pos, posUnit, win);
		if (targetUnit === 'height')
			return to_height(pos, posUnit, win);
		throw errorPrefix + '"unknown target units: ' + targetUnit + '" }';
	} catch (error) {
		throw errorPrefix + error + '}';
	}
}
function to_pixiPoint(pos, posUnit, win)
{
	const pos_px = to_px(pos, posUnit, win);
	return new PIXI.Point(pos_px[0], pos_px[1]);
}
function toString(object)
{
	if (typeof object === 'string')
		return object;
	try {
		return JSON.stringify(object);
	} catch (e)
	{
		return 'Object (circular)';
	}
}
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this
		.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
			? args[number]
			: match
			;
		})
		.replace(/{([$_a-zA-Z][$_a-zA-Z0-9]*)}/g, function(match, name) {
			return args.length > 0 &&  args[0][name] !== undefined
			? args[0][name]
			: match
			;
		});
  };
}
function isInt(value) {
	var x;
	if (isNaN(value)) {
	  return false;
	}
	x = parseFloat(value);
	return (x | 0) === x;
  }
function getUrlParameters()
{
	const urlQuery = window.location.search.slice(1);
	return new URLSearchParams(urlQuery);
}
function addInfoFromUrl(info)
{
	const infoFromUrl = getUrlParameters();
	for (const [key, value] of infoFromUrl)
		if (key.indexOf('__') !== 0)
		info[key] = value;
	return info;
}

class EventEmitter
{
 	constructor()
	{
		this._listeners = new Map();
		this._onceUuids = new Map();
	}
	on(name, listener)
	{
		if (typeof listener !== 'function')
			throw new TypeError('listener must be a function');
		let uuid = makeUuid();
		if (!this._listeners.has(name))
			this._listeners.set(name, []);
		this._listeners.get(name).push({uuid, listener});
		return uuid;
	}
	once(name, listener)
	{
		let uuid = this.on(name, listener);
		if (!this._onceUuids.has(name))
			this._onceUuids.set(name, []);
		this._onceUuids.get(name).push(uuid);
		return uuid;
	}
	off(name, uuid)
	{
		let relevantUuidListeners = this._listeners.get(name);
		if (relevantUuidListeners && relevantUuidListeners.length) {
			this._listeners.set(name, relevantUuidListeners.filter( uuidlistener => (uuidlistener.uuid != uuid) ) );
			return true;
		}
		return false;
	}
	emit(name, data)
	{
		let relevantUuidListeners = this._listeners.get(name);
		if (relevantUuidListeners && relevantUuidListeners.length)
		{
			let onceUuids = this._onceUuids.get(name);
			let self = this;
			relevantUuidListeners.forEach( ({uuid, listener}) => {
				listener(data);
				if (typeof onceUuids !== 'undefined' && onceUuids.includes(uuid))
					self.off(name, uuid);
			});
			return true;
		}
		return false;
	}
}

/**
 * @file Logger
 *
 * @author Alain Pitiot
 * @version 3.0.0b2
 * @copyright (c) 2018 Ilixa Ltd. ([www.ilixa.com]{@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Logger {
	constructor(threshold) {
		this.consoleLogger = log4javascript.getLogger('psychojs');
		const appender = new log4javascript.BrowserConsoleAppender();
		appender.setLayout(this._customConsoleLayout());
		appender.setThreshold(threshold);
		this.consoleLogger.addAppender(appender);
		this.consoleLogger.setLevel(threshold);
	}
	_customConsoleLayout() {
		const customLayout = new log4javascript.PatternLayout("%p %f{1} | %m");
		customLayout.setCustomField('location', function (layout, loggingReference) {
			try { (0)(); } catch (e) {
				const stackEntries = e.stack.replace(/^.*?\n/, '').replace(/(?:\n@:0)?\s+$/m, '').replace(/^\(/gm, '{anon}(').split("\n");
				let relevantEntry;
				const browser = detectBrowser();
				if (browser == 'Firefox') {
					for (let entry of stackEntries)
						if (entry.indexOf('log4javascript.min.js') <= 0) {
							relevantEntry = entry;
							break;
						}
					const buf = relevantEntry.split(':');
					const line = buf[buf.length - 2];
					const file = buf[buf.length - 3].split('/').pop();
					const method = relevantEntry.split('@')[0];
					return method + ' ' + file + ' ' + line;
				}
				else if (browser == 'Safari') {
					return 'unknown';
				}
				else if (browser == 'Chrome') {
					relevantEntry = stackEntries.pop();
					let buf = relevantEntry.split(' ');
					let fileLine = buf.pop();
					const method = buf.pop();
					buf = fileLine.split(':'); buf.pop();
					const line = buf.pop();
					const file = buf.pop().split('/').pop();
					return method + ' ' + file + ' ' + line;
				}
				else
					return 'unknown';
			}
		});
		return customLayout;
	}
}

/**
 * @file Core Object.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class PsychObject extends EventEmitter {
	get psychoJS() { return this._psychoJS; }
	set psychoJS(psychoJS) { this._psychoJS = psychoJS; }
	constructor(psychoJS, name) {
		super();
		this._psychoJS = psychoJS;
		if (typeof name === 'undefined')
			name = this.constructor.name;
		this._addAttribute('name', name);
	}
	_setAttribute(attributeName, attributeValue, log = false, operation = undefined, stealth = false) {
		let response = { origin: 'PsychObject.setAttribute', context: 'when setting the attribute of an object' };
		if (typeof attributeName == 'undefined')
			throw { ...response, error: 'the attribute name cannot be undefined' };
		if (typeof attributeValue == 'undefined') {
			this._psychoJS.logger.warn('setting the value of attribute: ' + attributeName + ' in PsychObject: ' + this._name + ' as: undefined');
		}
		if (typeof operation !== 'undefined' && this.hasOwnProperty('_' + attributeName)) {
			let oldValue = this['_' + attributeName];
			if (typeof attributeValue == 'number' || (Array.isArray(attributeValue) && (attributeValue.length == 0 || typeof attributeValue[0] == 'number'))) {
				if (Array.isArray(attributeValue)) {
					if (Array.isArray(oldValue)) {
						if (attributeValue.length != oldValue.length)
							throw { ...response, error: 'old and new value should have the same size when they are both arrays' };
						switch (operation) {
							case '':
								break;
							case '+':
								attributeValue = attributeValue.map((v, i) => oldValue[i] + v);
								break;
							case '*':
								attributeValue = attributeValue.map((v, i) => oldValue[i] * v);
								break;
							case '-':
								attributeValue = attributeValue.map((v, i) => oldValue[i] - v);
								break;
							case '/':
								attributeValue = attributeValue.map((v, i) => oldValue[i] / v);
								break;
							case '**':
								attributeValue = attributeValue.map((v, i) => oldValue[i] ** v);
								break;
							case '%':
								attributeValue = attributeValue.map((v, i) => oldValue[i] % v);
								break;
							default:
								throw { ...response, error: 'unsupported operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name };
						}
					} else
					{
						switch (operation) {
							case '':
								break;
							case '+':
								attributeValue = attributeValue.map(v => oldValue + v);
								break;
							case '*':
								attributeValue = attributeValue.map(v => oldValue * v);
								break;
							case '-':
								attributeValue = attributeValue.map(v => oldValue - v);
								break;
							case '/':
								attributeValue = attributeValue.map(v => oldValue / v);
								break;
							case '**':
								attributeValue = attributeValue.map(v => oldValue ** v);
								break;
							case '%':
								attributeValue = attributeValue.map(v => oldValue % v);
								break;
							default:
								throw { ...response, error: 'unsupported value: ' + JSON.stringify(attributeValue) + ' for operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name };
						}
					}
				} else
				{
					if (Array.isArray(oldValue)) {
						switch (operation) {
							case '':
								attributeValue = oldValue.map(v => attributeValue);
								break;
							case '+':
								attributeValue = oldValue.map(v => v + attributeValue);
								break;
							case '*':
								attributeValue = oldValue.map(v => v * attributeValue);
								break;
							case '-':
								attributeValue = oldValue.map(v => v - attributeValue);
								break;
							case '/':
								attributeValue = oldValue.map(v => v / attributeValue);
								break;
							case '**':
								attributeValue = oldValue.map(v => v ** attributeValue);
								break;
							case '%':
								attributeValue = oldValue.map(v => v % attributeValue);
								break;
							default:
								throw { ...response, error: 'unsupported operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name };
						}
					} else
					{
						switch (operation) {
							case '':
								break;
							case '+':
								attributeValue = oldValue + attributeValue;
								break;
							case '*':
								attributeValue = oldValue * attributeValue;
								break;
							case '-':
								attributeValue = oldValue - attributeValue;
								break;
							case '/':
								attributeValue = oldValue / attributeValue;
								break;
							case '**':
								attributeValue = oldValue ** attributeValue;
								break;
							case '%':
								attributeValue = oldValue % attributeValue;
								break;
							default:
								throw { ...response, error: 'unsupported value: ' + JSON.stringify(attributeValue) + ' for operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name };
						}
					}
				}
			} else
				throw { ...response, error: 'operation: ' + operation + ' is invalid for old value: ' + JSON.stringify(oldValue) + ' and new value: ' + JSON.stringify(attributeValue) };
		}
		if (!stealth && (log || this._autoLog) && (typeof this.win !== 'undefined')) {
			var message = this.name + ": " + attributeName + " = " + JSON.stringify(attributeValue);
		}
		this['_' + attributeName] = attributeValue;
	}
	_addAttributes(cls, ...args) {
		let callLine = cls.toString().match(/this.*\._addAttributes\(.*\;/)[0];
		let startIndex = callLine.indexOf('._addAttributes(') + 16;
		let endIndex = callLine.indexOf(');');
		let callArgs = callLine.substr(startIndex, endIndex - startIndex).split(',').map((s) => s.trim());
		let attributeMap = new Map();
		for (var i = 1; i < callArgs.length; ++i)
			attributeMap.set(callArgs[i], args[i - 1]);
		for (let [name, value] of attributeMap.entries())
			this._addAttribute(name, value);
	}
	_addAttribute(name, value) {
		let getPropertyName = 'get' + name[0].toUpperCase() + name.substr(1);
		if (typeof this[getPropertyName] === 'undefined')
			this[getPropertyName] = () => this['_' + name];
		let setPropertyName = 'set' + name[0].toUpperCase() + name.substr(1);
		if (typeof this[setPropertyName] === 'undefined')
			this[setPropertyName] = (value, log = false) => {
				this._setAttribute(name, value, log);
			};
		Object.defineProperty(this, name, {
			configurable: true,
			get() { return this[getPropertyName]();                               },
			set(value) { this[setPropertyName](value); }
		});
		this[name] = value;
	}
}

class Scheduler {
	constructor(psychoJS) {
		this._psychoJS = psychoJS;
		this._taskList = [];
		this._currentTask = undefined;
		this._argsList = [];
		this._currentArgs = undefined;
		this._stopAtNextUpdate = false;
	}
	add(task, args) {
		this._taskList.push(task);
		this._argsList.push(args);
	}
	addConditional(condition, thenScheduler, elseScheduler) {
		let self = this;
		let task = function () {
			if (condition())
				self.add(thenScheduler);
			else
				self.add(elseScheduler);
			return Scheduler.Event.NEXT;
		};
		this.add(task);
	}
	run() {
		let state = Scheduler.Event.NEXT;
		while (state === Scheduler.Event.NEXT) {
			if (typeof this._currentTask == 'undefined') {
				if (this._taskList.length > 0) {
					this._currentTask = this._taskList.shift();
					this._currentArgs = this._argsList.shift();
				}
				else {
					this._currentTask = undefined;
					return Scheduler.Event.QUIT;
				}
			}
			if (this._currentTask instanceof Function) {
				state = this._currentTask(this._currentArgs);
			}
			else {
				state = this._currentTask.run();
				if (state === Scheduler.Event.QUIT) state = Scheduler.Event.NEXT;
			}
			if (state != Scheduler.Event.FLIP_REPEAT) {
				this._currentTask = undefined;
				this._currentArgs = undefined;
			}
		}
		return state;
	}
	start() {
		let self = this;
		let update = () => {
			if (self._stopAtNextUpdate) return;
			let state = self.run();
			if (state === Scheduler.Event.QUIT)
				return;
			self._psychoJS.window.render();
			requestAnimationFrame(update);
		};
		requestAnimationFrame(update);
	}
	stop() {
		this._stopAtNextUpdate = true;
	}
}
Scheduler.Event = {
	NEXT: Symbol.for('NEXT'),
	FLIP_REPEAT: Symbol.for('FLIP_REPEAT'),
	FLIP_NEXT: Symbol.for('FLIP_NEXT'),
	QUIT: Symbol.for('QUIT')
};

export { MonotonicClock, Clock, CountdownTimer, Color, ColorMixin, EventEmitter, Logger, PsychObject, Scheduler, mix, promiseToTupple, makeUuid, getErrorStack, isEmpty, detectBrowser, toNumerical, IsPointInsidePolygon, shuffle, getPositionFromObject, to_px, to_norm, to_height, to_win, to_unit, to_pixiPoint, toString, isInt, getUrlParameters, addInfoFromUrl };
