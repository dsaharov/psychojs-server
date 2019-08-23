import * as util from './_util.js';

let { MonotonicClock, Clock, CountdownTimer, Color, ColorMixin, EventEmitter, Logger, PsychObject, Scheduler, mix, promiseToTupple, makeUuid, getErrorStack, isEmpty, detectBrowser, toNumerical, IsPointInsidePolygon, shuffle, getPositionFromObject, to_px, to_norm, to_height, to_win, to_unit, to_pixiPoint, toString, isInt, getUrlParameters, addInfoFromUrl, selectFromArray, flattenArray, sliceArray, offerDataForDownload } = util;

getUrlParameters = function(){
  let searchParams = util.getUrlParameters.apply(this, arguments);
  //TODO: HACK to pass along server side study parameters
  if(window.virtualSearchParams){
    for(let key in window.virtualSearchParams){
      let value = window.virtualSearchParams[key];
      searchParams.set(key, value);
    }
  }
  return searchParams;
}

// This is exactly the same, except it needs to reference our wrapped function.
addInfoFromUrl = function(info) {
	const infoFromUrl = getUrlParameters();
	for (const [key, value] of infoFromUrl)
		if (key.indexOf('__') !== 0)
			info[key] = value;
	return info;
}

export { MonotonicClock, Clock, CountdownTimer, Color, ColorMixin, EventEmitter, Logger, PsychObject, Scheduler, mix, promiseToTupple, makeUuid, getErrorStack, isEmpty, detectBrowser, toNumerical, IsPointInsidePolygon, shuffle, getPositionFromObject, to_px, to_norm, to_height, to_win, to_unit, to_pixiPoint, toString, isInt, getUrlParameters, addInfoFromUrl, selectFromArray, flattenArray, sliceArray, offerDataForDownload };
