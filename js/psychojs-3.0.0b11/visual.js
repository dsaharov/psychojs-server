import { MinimalStim } from './core-3.0.0b11.js';
import { WindowMixin } from './core-3.0.0b11.js';
import { mix, getPositionFromObject, toString, to_px, IsPointInsidePolygon, to_pixiPoint, toNumerical, to_unit } from './util-3.0.0b11.js';
import { Color } from './util-3.0.0b11.js';
import { ColorMixin } from './util-3.0.0b11.js';

/**
 * @file Base class for all visual stimuli.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class BaseVisualStim extends mix(MinimalStim).with(WindowMixin)
{
	constructor({
		name,
		win,
		units = 'norm',
		ori = 0.0,
		opacity = 1.0,
		pos = [0, 0],
		size,
		autoDraw,
		autoLog = false
	} = {})
	{
		super({win, name, autoDraw, autoLog});
		this._needVertexUpdate = true;
		this._vertices_px = undefined;
		this._addAttributes(BaseVisualStim, units, ori, opacity, pos, size);
		this._needUpdate = true;
	}
	setSize(size, log = false)
	{
		if (typeof size !== 'undefined') {
			size = toNumerical(size);
			if (!Array.isArray(size))
				size = [size, size];
		}
		this._setAttribute('size', size, log);
		this._needVertexUpdate = true;
		this._needUpdate = true;
	}
	setOri(ori, log = false)
	{
		this._setAttribute('ori', ori, log);
		let radians = ori * 0.017453292519943295;
		this._rotationMatrix = [[Math.cos(radians), -Math.sin(radians)],
								[Math.sin(radians), Math.cos(radians)]];
		this._needUpdate = true;
	}
	setPos(pos, log = false)
	{
		this._setAttribute('pos', toNumerical(pos), log);
		this._needUpdate = true;
	}
	setOpacity(opacity, log = false)
	{
		this._setAttribute('opacity', opacity, log);
		this._needUpdate = true;
	}
	_getVertices_px(                 )
	{
		let flip = [1.0, 1.0];
		if ('_flipHoriz' in this && this._flipHoriz)
			flip[0] = -1.0;
		if ('_flipVert' in this && this._flipVert)
			flip[1] = -1.0;
		this._vertices_px = this._vertices.map( v => to_px([v[0] * this._size[0] * flip[0], v[1] * this._size[1] * flip[1]], this._units, this._win) );
		return this._vertices_px;
	}
}

/**
 * @file Basic Shape Stimulus.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class BaseShapeStim extends mix(BaseVisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		lineWidth = 1.5,
		lineColor = new Color('white'),
		fillColor,
		opacity = 1.0,
		vertices = [[-0.5, 0], [0, 0.5], [0.5, 0]],
		closeShape = true,
		pos = [0, 0],
		size = 1.0,
		ori = 0.0,
		units,
		contrast = 1.0,
		depth = 0,
		interpolate = true,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this._pixiPolygon_px = undefined;
		this._addAttributes(BaseShapeStim, lineWidth, lineColor, fillColor, vertices, closeShape, contrast, depth, interpolate);
	}
	setLineWidth(lineWidth, log = false) {
		this._setAttribute('lineWidth', lineWidth, log);
		this._needUpdate = true;
	}
	setLineColor(lineColor, log = false) {
		this._setAttribute('lineColor', lineColor, log);
		this._needUpdate = true;
	}
	setFillColor(fillColor, log = false) {
		this._setAttribute('fillColor', fillColor, log);
		this._needUpdate = true;
	}
	setVertices(vertices, log = false) {
		this._psychoJS.logger.debug('set the vertices of BaseShapeStim:', this.name);
		this._setAttribute('vertices', vertices, log);
		this._needVertexUpdate = true;
		this._needUpdate = true;
	}
	contains(object, units) {
		this._psychoJS.logger.debug('test whether BaseShameStim:', this.name, 'contains object: ', ('name' in object) ? object.name : object);
		const objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'BaseShapeStim.contains', context : 'when determining whether BaseShameStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		const pos_px = to_px(this.pos, this.units, this.win);
		const polygon_px = this._vertices_px.map(v => [v[0] + pos_px[0], v[1] + pos_px[1]]);
		return IsPointInsidePolygon(objectPos_px, polygon_px);
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._getPolygon(        );
		this._pixi = undefined;
		if (typeof this._pixiPolygon_px === 'undefined')
			return;
		this._pixi = new PIXI.Graphics();
		this._pixi.lineStyle(this._lineWidth, this._lineColor.int, this._opacity, 0.5);
		if (typeof this._fillColor !== 'undefined')
			this._pixi.beginFill(this._fillColor.int, this._opacity);
		this._pixi.drawPolygon(this._pixiPolygon_px);
		if (typeof this._fillColor !== 'undefined')
			this._pixi.endFill();
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.rotation = this.ori * Math.PI / 180.0;
	}
	_getPolygon(                 ) {
		if (!this._needVertexUpdate)
			return;
		this._needVertexUpdate = false;
		this._getVertices_px(         );
		let coords_px = [];
		for (const vertex_px of this._vertices_px)
			coords_px.push.apply(coords_px, vertex_px);
		if (coords_px.length >= 6 && this._closeShape) {
			const n = coords_px.length;
			if (coords_px[0] != coords_px[n - 2] || coords_px[1] != coords_px[n - 1]) {
				coords_px.push(coords_px[0]);
				coords_px.push(coords_px[1]);
			}
		}
		this._pixiPolygon_px = new PIXI.Polygon(coords_px);
		return this._pixiPolygon_px;
	}
}

/**
 * @file Image Stimulus.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class ImageStim extends mix(BaseVisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		image,
		mask,
		pos,
		units,
		ori,
		size,
		color = new Color('white'),
		opacity = 1.0,
		contrast = 1.0,
		texRes = 128,
		depth = 0,
		interpolate = false,
		flipHoriz = false,
		flipVert = false,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this.psychoJS.logger.debug('create a new ImageStim with name: ', name);
		this._addAttributes(ImageStim, image, mask, color, contrast, texRes, interpolate, depth, flipHoriz, flipVert);
	}
	setImage(image, log = false) {
		let response = { origin: 'ImageStim.setImage', context: 'when setting the image of ImageStim: ' + this._name };
		try {
			if (typeof image === 'undefined') {
				this.psychoJS.logger.warn('setting the image of ImageStim: ' + this._name + ' with argument: undefined.');
				this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: undefined');
			}
			else {
				if (typeof image === 'string')
					image = this.psychoJS.serverManager.getResource(image);
				if (!(image instanceof HTMLImageElement))
					throw 'the argument: ' + image.toString() + ' is not an image" }';
				this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: src= ' + image.src + ', size= ' + image.width + 'x' + image.height);
			}
			this._setAttribute('image', image, log);
			this._needUpdate = true;
		}
		catch (error) {
			throw { ...response, error };
		}
	}
	setMask(mask, log = false) {
		let response = { origin: 'ImageStim.setMask', context: 'when setting the mask of ImageStim: ' + this._name };
		try {
			if (typeof mask === 'undefined') {
				this.psychoJS.logger.warn('setting the mask of ImageStim: ' + this._name + ' with argument: undefined.');
				this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: undefined');
			}
			else {
				if (typeof mask === 'string')
					mask = this.psychoJS.serverManager.getResource(mask);
				if (!(mask instanceof HTMLImageElement))
					throw 'the argument: ' + mask.toString() + ' is not an image" }';
				this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: src= ' + mask.src + ', size= ' + mask.width + 'x' + mask.height);
			}
			this._setAttribute('mask', mask, log);
			this._needUpdate = true;
		}
		catch (error) {
			throw { ...response, error };
		}
	}
	setFlipVert(flipVert, log = false) {
		this._setAttribute('flipVert', flipVert, log);
		this._needUpdate = true;
	}
	setFlipHoriz(flipHoriz, log = false) {
		this._setAttribute('flipHoriz', flipHoriz, log);
		this._needUpdate = true;
	}
	contains(object, units) {
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'ImageStim.contains', context : 'when determining whether ImageStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		let pos_px = to_px(this.pos, this.units, this._win);
		let size_px = to_px(this.size, this.units, this._win);
		const polygon_px = [
			[pos_px[0] - size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] + size_px[1] / 2],
			[pos_px[0] - size_px[0] / 2, pos_px[1] + size_px[1] / 2]];
		return IsPointInsidePolygon(objectPos_px, polygon_px);
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._pixi = undefined;
		if (typeof this._image === 'undefined')
			return;
		this._texture = new PIXI.Texture(new PIXI.BaseTexture(this._image));
		this._pixi = new PIXI.Sprite(this._texture);
		this._pixi.zOrder = this.depth;
		if (typeof this._mask !== 'undefined') {
			this._maskTexture = new PIXI.Texture(new PIXI.BaseTexture(this._mask));
			this._pixi.mask = new PIXI.Sprite(this._maskTexture);
			this._pixi.mask.anchor.x = 0.5;
			this._pixi.mask.anchor.y = 0.5;
			this._pixi.addChild(this._pixi.mask);
		}
		if (this._texture.width == 0) {
			this._needUpdate = true;
			return;
		}
		this._pixi.alpha = this.opacity;
		let stimSize = this.size;
		if (typeof stimSize === 'undefined') {
			const textureSize = [this._texture.width, this._texture.height];
			stimSize = to_unit(textureSize, 'pix', this.win, this.units);
		}
		const size_px = to_px(stimSize, this.units, this.win);
		var scaleX = size_px[0] / this._texture.width;
		var scaleY = size_px[1] / this._texture.height;
		this._pixi.scale.x = this.flipHoriz ? -scaleX : scaleX;
		this._pixi.scale.y = this.flipVert ? scaleY : -scaleY;
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.rotation = this.ori * Math.PI / 180;
		this._pixi.anchor.x = 0.5;
		this._pixi.anchor.y = 0.5;
	}
}

/**
 * @file Rectangular Stimulus.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Rect extends BaseShapeStim {
	constructor({
		name,
		win,
		lineWidth = 1.5,
		lineColor = new Color('white'),
		fillColor,
		opacity = 1.0,
		width = 0.5,
		height = 0.5,
		pos = [0, 0],
		size = 1.0,
		ori = 0.0,
		units,
		contrast = 1.0,
		depth = 0,
		interpolate = true,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, lineWidth, lineColor, fillColor, opacity, pos, ori, size, units, contrast, depth, interpolate, autoDraw, autoLog });
		this._psychoJS.logger.debug('create a new Rect with name: ', name);
		this._addAttributes(Rect, width, height);
		this._updateVertices();
	}
	setWidth(width, log = false) {
		this._psychoJS.logger.debug('set the width of Rect: ', this.name, 'to: ', width);
		this._setAttribute('width', width, log);
		this._updateVertices();
	}
	setHeight(height, log = false) {
		this._psychoJS.logger.debug('set the height of Rect: ', this.name, 'to: ', height);
		this._setAttribute('height', height, log);
		this._updateVertices();
	}
	_updateVertices() {
		this._psychoJS.logger.debug('update the vertices of Rect: ', this.name);
		this.setVertices([
			[-this._width / 2.0, -this._height / 2.0],
			[this._width / 2.0, -this._height / 2.0],
			[this._width / 2.0, this._height / 2.0],
			[-this._width / 2.0, this._height / 2.0]
		]);
	}
}

/**
 * @file Text Stimulus.
 *
 * @author Alain Pitiot
 * @version 3.0.0b11
 * @copyright (c) 2018 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class TextStim extends mix(BaseVisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		text = 'Hello World',
		font = 'Arial',
		pos,
		color = new Color('white'),
		opacity,
		contrast = 1.0,
		units = 'norm',
		ori,
		height,
		bold = false,
		italic = false,
		alignHoriz = 'center',
		alignVert = 'center',
		wrapWidth,
		flipHoriz = false,
		flipVert = false,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, autoDraw, autoLog });
		this._addAttributes(TextStim, text, font, color, contrast, height, bold, italic, alignHoriz, alignVert, wrapWidth, flipHoriz, flipVert);
	}
	setText(text, log) {
		this._setAttribute('text', text, log);
		this._needUpdate = true;
	}
	setAlignHoriz(alignHoriz, log) {
		this._setAttribute('alignHoriz', alignHoriz, log);
		this._needUpdate = true;
	}
	setWrapWidth(wrapWidth, log) {
		this._setAttribute('wrapWidth', wrapWidth, log);
		this._needUpdate = true;
	}
	setHeight(height, log) {
		this._setAttribute('height', height, log);
		this._needUpdate = true;
	}
	setItalic(italic, log) {
		this._setAttribute('italic', italic, log);
		this._needUpdate = true;
	}
	setBold(bold, log) {
		this._setAttribute('bold', bold, log);
		this._needUpdate = true;
	}
	setFlipVert(flipVert, log) {
		this._setAttribute('flipVert', flipVert, log);
		this._needUpdate = true;
	}
	setFlipHoriz(flipHoriz, log) {
		this._setAttribute('flipHoriz', flipHoriz, log);
		this._needUpdate = true;
	}
	contains(object, units) {
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'TextStim.contains', context : 'when determining whether ImageStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		return false;
	}
	_updateIfNeeded() {
		if (this._needUpdate) {
			let height = this._height || 0.1;
			this._heightPix = this._getLengthPix(height);
			var fontSize = Math.round(this._heightPix);
			let color = this._getDesiredColor(this._color, this._contrast);
			var font =
				(this._bold ? 'bold ' : '') +
				(this._italic ? 'italic ' : '') +
				fontSize + 'px ' + this._font;
			this._pixi = new PIXI.Text(this._text, {
				font: font,
				fill: color.hex,
				align: this._alignHoriz,
				wordWrap: this._wrapWidth != undefined,
				wordWrapWidth: this._wrapWidth ? this._getHorLengthPix(this._wrapWidth) : 0
			});
			this._pixi.anchor.x = 0.5;
			this._pixi.anchor.y = 0.5;
			this._pixi.scale.x = this._flipHoriz ? -1 : 1;
			this._pixi.scale.y = this._flipVert ? 1 : -1;
			this._pixi.rotation = this._ori * Math.PI / 180;
			this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
			this._pixi.alpha = this._opacity;
			this._size = [
				this._getLengthUnits(Math.abs(this._pixi.width)),
				this._getLengthUnits(Math.abs(this._pixi.height))];
			this._needUpdate = false;
		}
	}
}

export { BaseShapeStim, BaseVisualStim, ImageStim, Rect, TextStim };
