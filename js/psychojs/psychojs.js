(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

_dereq_(2);

_dereq_(4);

_dereq_(3);

_dereq_(10);

_dereq_(9);

_dereq_(12);

_dereq_(11);

_dereq_(13);

_dereq_(6);

_dereq_(7);

_dereq_(5);

_dereq_(8);

_dereq_(287);

_dereq_(288);

if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"10":10,"11":11,"12":12,"13":13,"2":2,"287":287,"288":288,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9}],2:[function(_dereq_,module,exports){
_dereq_(259);
_dereq_(195);
_dereq_(197);
_dereq_(196);
_dereq_(199);
_dereq_(201);
_dereq_(206);
_dereq_(200);
_dereq_(198);
_dereq_(208);
_dereq_(207);
_dereq_(203);
_dereq_(204);
_dereq_(202);
_dereq_(194);
_dereq_(205);
_dereq_(209);
_dereq_(210);
_dereq_(161);
_dereq_(163);
_dereq_(162);
_dereq_(212);
_dereq_(211);
_dereq_(182);
_dereq_(192);
_dereq_(193);
_dereq_(183);
_dereq_(184);
_dereq_(185);
_dereq_(186);
_dereq_(187);
_dereq_(188);
_dereq_(189);
_dereq_(190);
_dereq_(191);
_dereq_(165);
_dereq_(166);
_dereq_(167);
_dereq_(168);
_dereq_(169);
_dereq_(170);
_dereq_(171);
_dereq_(172);
_dereq_(173);
_dereq_(174);
_dereq_(175);
_dereq_(176);
_dereq_(177);
_dereq_(178);
_dereq_(179);
_dereq_(180);
_dereq_(181);
_dereq_(246);
_dereq_(251);
_dereq_(258);
_dereq_(249);
_dereq_(241);
_dereq_(242);
_dereq_(247);
_dereq_(252);
_dereq_(254);
_dereq_(237);
_dereq_(238);
_dereq_(239);
_dereq_(240);
_dereq_(243);
_dereq_(244);
_dereq_(245);
_dereq_(248);
_dereq_(250);
_dereq_(253);
_dereq_(255);
_dereq_(256);
_dereq_(257);
_dereq_(156);
_dereq_(158);
_dereq_(157);
_dereq_(160);
_dereq_(159);
_dereq_(144);
_dereq_(142);
_dereq_(149);
_dereq_(146);
_dereq_(152);
_dereq_(154);
_dereq_(141);
_dereq_(148);
_dereq_(138);
_dereq_(153);
_dereq_(136);
_dereq_(151);
_dereq_(150);
_dereq_(143);
_dereq_(147);
_dereq_(135);
_dereq_(137);
_dereq_(140);
_dereq_(139);
_dereq_(155);
_dereq_(145);
_dereq_(228);
_dereq_(229);
_dereq_(235);
_dereq_(230);
_dereq_(231);
_dereq_(232);
_dereq_(233);
_dereq_(234);
_dereq_(213);
_dereq_(164);
_dereq_(236);
_dereq_(271);
_dereq_(272);
_dereq_(260);
_dereq_(261);
_dereq_(266);
_dereq_(269);
_dereq_(270);
_dereq_(264);
_dereq_(267);
_dereq_(265);
_dereq_(268);
_dereq_(262);
_dereq_(263);
_dereq_(214);
_dereq_(215);
_dereq_(216);
_dereq_(217);
_dereq_(218);
_dereq_(221);
_dereq_(219);
_dereq_(220);
_dereq_(222);
_dereq_(223);
_dereq_(224);
_dereq_(225);
_dereq_(227);
_dereq_(226);
module.exports = _dereq_(33);

},{"135":135,"136":136,"137":137,"138":138,"139":139,"140":140,"141":141,"142":142,"143":143,"144":144,"145":145,"146":146,"147":147,"148":148,"149":149,"150":150,"151":151,"152":152,"153":153,"154":154,"155":155,"156":156,"157":157,"158":158,"159":159,"160":160,"161":161,"162":162,"163":163,"164":164,"165":165,"166":166,"167":167,"168":168,"169":169,"170":170,"171":171,"172":172,"173":173,"174":174,"175":175,"176":176,"177":177,"178":178,"179":179,"180":180,"181":181,"182":182,"183":183,"184":184,"185":185,"186":186,"187":187,"188":188,"189":189,"190":190,"191":191,"192":192,"193":193,"194":194,"195":195,"196":196,"197":197,"198":198,"199":199,"200":200,"201":201,"202":202,"203":203,"204":204,"205":205,"206":206,"207":207,"208":208,"209":209,"210":210,"211":211,"212":212,"213":213,"214":214,"215":215,"216":216,"217":217,"218":218,"219":219,"220":220,"221":221,"222":222,"223":223,"224":224,"225":225,"226":226,"227":227,"228":228,"229":229,"230":230,"231":231,"232":232,"233":233,"234":234,"235":235,"236":236,"237":237,"238":238,"239":239,"240":240,"241":241,"242":242,"243":243,"244":244,"245":245,"246":246,"247":247,"248":248,"249":249,"250":250,"251":251,"252":252,"253":253,"254":254,"255":255,"256":256,"257":257,"258":258,"259":259,"260":260,"261":261,"262":262,"263":263,"264":264,"265":265,"266":266,"267":267,"268":268,"269":269,"270":270,"271":271,"272":272,"33":33}],3:[function(_dereq_,module,exports){
_dereq_(273);
module.exports = _dereq_(33).Array.flatMap;

},{"273":273,"33":33}],4:[function(_dereq_,module,exports){
_dereq_(274);
module.exports = _dereq_(33).Array.includes;

},{"274":274,"33":33}],5:[function(_dereq_,module,exports){
_dereq_(275);
module.exports = _dereq_(33).Object.entries;

},{"275":275,"33":33}],6:[function(_dereq_,module,exports){
_dereq_(276);
module.exports = _dereq_(33).Object.getOwnPropertyDescriptors;

},{"276":276,"33":33}],7:[function(_dereq_,module,exports){
_dereq_(277);
module.exports = _dereq_(33).Object.values;

},{"277":277,"33":33}],8:[function(_dereq_,module,exports){
'use strict';
_dereq_(213);
_dereq_(278);
module.exports = _dereq_(33).Promise['finally'];

},{"213":213,"278":278,"33":33}],9:[function(_dereq_,module,exports){
_dereq_(279);
module.exports = _dereq_(33).String.padEnd;

},{"279":279,"33":33}],10:[function(_dereq_,module,exports){
_dereq_(280);
module.exports = _dereq_(33).String.padStart;

},{"280":280,"33":33}],11:[function(_dereq_,module,exports){
_dereq_(282);
module.exports = _dereq_(33).String.trimRight;

},{"282":282,"33":33}],12:[function(_dereq_,module,exports){
_dereq_(281);
module.exports = _dereq_(33).String.trimLeft;

},{"281":281,"33":33}],13:[function(_dereq_,module,exports){
_dereq_(283);
module.exports = _dereq_(132).f('asyncIterator');

},{"132":132,"283":283}],14:[function(_dereq_,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],15:[function(_dereq_,module,exports){
var cof = _dereq_(29);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"29":29}],16:[function(_dereq_,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _dereq_(133)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _dereq_(53)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"133":133,"53":53}],17:[function(_dereq_,module,exports){
'use strict';
var at = _dereq_(110)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"110":110}],18:[function(_dereq_,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],19:[function(_dereq_,module,exports){
var isObject = _dereq_(62);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"62":62}],20:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = _dereq_(123);
var toAbsoluteIndex = _dereq_(118);
var toLength = _dereq_(122);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"118":118,"122":122,"123":123}],21:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = _dereq_(123);
var toAbsoluteIndex = _dereq_(118);
var toLength = _dereq_(122);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"118":118,"122":122,"123":123}],22:[function(_dereq_,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = _dereq_(121);
var toLength = _dereq_(122);
var toAbsoluteIndex = _dereq_(118);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"118":118,"121":121,"122":122}],23:[function(_dereq_,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = _dereq_(35);
var IObject = _dereq_(58);
var toObject = _dereq_(123);
var toLength = _dereq_(122);
var asc = _dereq_(26);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"122":122,"123":123,"26":26,"35":35,"58":58}],24:[function(_dereq_,module,exports){
var aFunction = _dereq_(14);
var toObject = _dereq_(123);
var IObject = _dereq_(58);
var toLength = _dereq_(122);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"122":122,"123":123,"14":14,"58":58}],25:[function(_dereq_,module,exports){
var isObject = _dereq_(62);
var isArray = _dereq_(60);
var SPECIES = _dereq_(133)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"133":133,"60":60,"62":62}],26:[function(_dereq_,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = _dereq_(25);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"25":25}],27:[function(_dereq_,module,exports){
'use strict';
var aFunction = _dereq_(14);
var isObject = _dereq_(62);
var invoke = _dereq_(57);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"14":14,"57":57,"62":62}],28:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_(29);
var TAG = _dereq_(133)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"133":133,"29":29}],29:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],30:[function(_dereq_,module,exports){
'use strict';
var dP = _dereq_(80).f;
var create = _dereq_(79);
var redefineAll = _dereq_(98);
var ctx = _dereq_(35);
var anInstance = _dereq_(18);
var forOf = _dereq_(49);
var $iterDefine = _dereq_(66);
var step = _dereq_(68);
var setSpecies = _dereq_(104);
var DESCRIPTORS = _dereq_(39);
var fastKey = _dereq_(75).fastKey;
var validate = _dereq_(130);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"104":104,"130":130,"18":18,"35":35,"39":39,"49":49,"66":66,"68":68,"75":75,"79":79,"80":80,"98":98}],31:[function(_dereq_,module,exports){
'use strict';
var redefineAll = _dereq_(98);
var getWeak = _dereq_(75).getWeak;
var anObject = _dereq_(19);
var isObject = _dereq_(62);
var anInstance = _dereq_(18);
var forOf = _dereq_(49);
var createArrayMethod = _dereq_(23);
var $has = _dereq_(52);
var validate = _dereq_(130);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"130":130,"18":18,"19":19,"23":23,"49":49,"52":52,"62":62,"75":75,"98":98}],32:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_(51);
var $export = _dereq_(43);
var redefine = _dereq_(99);
var redefineAll = _dereq_(98);
var meta = _dereq_(75);
var forOf = _dereq_(49);
var anInstance = _dereq_(18);
var isObject = _dereq_(62);
var fails = _dereq_(45);
var $iterDetect = _dereq_(67);
var setToStringTag = _dereq_(105);
var inheritIfRequired = _dereq_(56);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"105":105,"18":18,"43":43,"45":45,"49":49,"51":51,"56":56,"62":62,"67":67,"75":75,"98":98,"99":99}],33:[function(_dereq_,module,exports){
var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],34:[function(_dereq_,module,exports){
'use strict';
var $defineProperty = _dereq_(80);
var createDesc = _dereq_(97);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"80":80,"97":97}],35:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"14":14}],36:[function(_dereq_,module,exports){
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = _dereq_(45);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"45":45}],37:[function(_dereq_,module,exports){
'use strict';
var anObject = _dereq_(19);
var toPrimitive = _dereq_(124);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"124":124,"19":19}],38:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],39:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_(45)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"45":45}],40:[function(_dereq_,module,exports){
var isObject = _dereq_(62);
var document = _dereq_(51).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"51":51,"62":62}],41:[function(_dereq_,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],42:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
var getKeys = _dereq_(88);
var gOPS = _dereq_(85);
var pIE = _dereq_(89);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"85":85,"88":88,"89":89}],43:[function(_dereq_,module,exports){
var global = _dereq_(51);
var core = _dereq_(33);
var hide = _dereq_(53);
var redefine = _dereq_(99);
var ctx = _dereq_(35);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"33":33,"35":35,"51":51,"53":53,"99":99}],44:[function(_dereq_,module,exports){
var MATCH = _dereq_(133)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"133":133}],45:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],46:[function(_dereq_,module,exports){
'use strict';
_dereq_(229);
var redefine = _dereq_(99);
var hide = _dereq_(53);
var fails = _dereq_(45);
var defined = _dereq_(38);
var wks = _dereq_(133);
var regexpExec = _dereq_(101);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"101":101,"133":133,"229":229,"38":38,"45":45,"53":53,"99":99}],47:[function(_dereq_,module,exports){
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = _dereq_(19);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"19":19}],48:[function(_dereq_,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = _dereq_(60);
var isObject = _dereq_(62);
var toLength = _dereq_(122);
var ctx = _dereq_(35);
var IS_CONCAT_SPREADABLE = _dereq_(133)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"122":122,"133":133,"35":35,"60":60,"62":62}],49:[function(_dereq_,module,exports){
var ctx = _dereq_(35);
var call = _dereq_(64);
var isArrayIter = _dereq_(59);
var anObject = _dereq_(19);
var toLength = _dereq_(122);
var getIterFn = _dereq_(134);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"122":122,"134":134,"19":19,"35":35,"59":59,"64":64}],50:[function(_dereq_,module,exports){
module.exports = _dereq_(107)('native-function-to-string', Function.toString);

},{"107":107}],51:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],52:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],53:[function(_dereq_,module,exports){
var dP = _dereq_(80);
var createDesc = _dereq_(97);
module.exports = _dereq_(39) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"39":39,"80":80,"97":97}],54:[function(_dereq_,module,exports){
var document = _dereq_(51).document;
module.exports = document && document.documentElement;

},{"51":51}],55:[function(_dereq_,module,exports){
module.exports = !_dereq_(39) && !_dereq_(45)(function () {
  return Object.defineProperty(_dereq_(40)('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"39":39,"40":40,"45":45}],56:[function(_dereq_,module,exports){
var isObject = _dereq_(62);
var setPrototypeOf = _dereq_(103).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"103":103,"62":62}],57:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],58:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"29":29}],59:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators = _dereq_(69);
var ITERATOR = _dereq_(133)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"133":133,"69":69}],60:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
var cof = _dereq_(29);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"29":29}],61:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = _dereq_(62);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"62":62}],62:[function(_dereq_,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],63:[function(_dereq_,module,exports){
// 7.2.8 IsRegExp(argument)
var isObject = _dereq_(62);
var cof = _dereq_(29);
var MATCH = _dereq_(133)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"133":133,"29":29,"62":62}],64:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_(19);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"19":19}],65:[function(_dereq_,module,exports){
'use strict';
var create = _dereq_(79);
var descriptor = _dereq_(97);
var setToStringTag = _dereq_(105);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_(53)(IteratorPrototype, _dereq_(133)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"105":105,"133":133,"53":53,"79":79,"97":97}],66:[function(_dereq_,module,exports){
'use strict';
var LIBRARY = _dereq_(70);
var $export = _dereq_(43);
var redefine = _dereq_(99);
var hide = _dereq_(53);
var Iterators = _dereq_(69);
var $iterCreate = _dereq_(65);
var setToStringTag = _dereq_(105);
var getPrototypeOf = _dereq_(86);
var ITERATOR = _dereq_(133)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"105":105,"133":133,"43":43,"53":53,"65":65,"69":69,"70":70,"86":86,"99":99}],67:[function(_dereq_,module,exports){
var ITERATOR = _dereq_(133)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"133":133}],68:[function(_dereq_,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],69:[function(_dereq_,module,exports){
module.exports = {};

},{}],70:[function(_dereq_,module,exports){
module.exports = false;

},{}],71:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],72:[function(_dereq_,module,exports){
// 20.2.2.16 Math.fround(x)
var sign = _dereq_(74);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"74":74}],73:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],74:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],75:[function(_dereq_,module,exports){
var META = _dereq_(128)('meta');
var isObject = _dereq_(62);
var has = _dereq_(52);
var setDesc = _dereq_(80).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_dereq_(45)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"128":128,"45":45,"52":52,"62":62,"80":80}],76:[function(_dereq_,module,exports){
var global = _dereq_(51);
var macrotask = _dereq_(117).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = _dereq_(29)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"117":117,"29":29,"51":51}],77:[function(_dereq_,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = _dereq_(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"14":14}],78:[function(_dereq_,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = _dereq_(88);
var gOPS = _dereq_(85);
var pIE = _dereq_(89);
var toObject = _dereq_(123);
var IObject = _dereq_(58);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || _dereq_(45)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"123":123,"45":45,"58":58,"85":85,"88":88,"89":89}],79:[function(_dereq_,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = _dereq_(19);
var dPs = _dereq_(81);
var enumBugKeys = _dereq_(41);
var IE_PROTO = _dereq_(106)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _dereq_(40)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _dereq_(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"106":106,"19":19,"40":40,"41":41,"54":54,"81":81}],80:[function(_dereq_,module,exports){
var anObject = _dereq_(19);
var IE8_DOM_DEFINE = _dereq_(55);
var toPrimitive = _dereq_(124);
var dP = Object.defineProperty;

exports.f = _dereq_(39) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"124":124,"19":19,"39":39,"55":55}],81:[function(_dereq_,module,exports){
var dP = _dereq_(80);
var anObject = _dereq_(19);
var getKeys = _dereq_(88);

module.exports = _dereq_(39) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"19":19,"39":39,"80":80,"88":88}],82:[function(_dereq_,module,exports){
var pIE = _dereq_(89);
var createDesc = _dereq_(97);
var toIObject = _dereq_(121);
var toPrimitive = _dereq_(124);
var has = _dereq_(52);
var IE8_DOM_DEFINE = _dereq_(55);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = _dereq_(39) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"121":121,"124":124,"39":39,"52":52,"55":55,"89":89,"97":97}],83:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_(121);
var gOPN = _dereq_(84).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"121":121,"84":84}],84:[function(_dereq_,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = _dereq_(87);
var hiddenKeys = _dereq_(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"41":41,"87":87}],85:[function(_dereq_,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],86:[function(_dereq_,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = _dereq_(52);
var toObject = _dereq_(123);
var IE_PROTO = _dereq_(106)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"106":106,"123":123,"52":52}],87:[function(_dereq_,module,exports){
var has = _dereq_(52);
var toIObject = _dereq_(121);
var arrayIndexOf = _dereq_(22)(false);
var IE_PROTO = _dereq_(106)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"106":106,"121":121,"22":22,"52":52}],88:[function(_dereq_,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _dereq_(87);
var enumBugKeys = _dereq_(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"41":41,"87":87}],89:[function(_dereq_,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],90:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_(43);
var core = _dereq_(33);
var fails = _dereq_(45);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"33":33,"43":43,"45":45}],91:[function(_dereq_,module,exports){
var getKeys = _dereq_(88);
var toIObject = _dereq_(121);
var isEnum = _dereq_(89).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"121":121,"88":88,"89":89}],92:[function(_dereq_,module,exports){
// all object keys, includes non-enumerable and symbols
var gOPN = _dereq_(84);
var gOPS = _dereq_(85);
var anObject = _dereq_(19);
var Reflect = _dereq_(51).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"19":19,"51":51,"84":84,"85":85}],93:[function(_dereq_,module,exports){
var $parseFloat = _dereq_(51).parseFloat;
var $trim = _dereq_(115).trim;

module.exports = 1 / $parseFloat(_dereq_(116) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"115":115,"116":116,"51":51}],94:[function(_dereq_,module,exports){
var $parseInt = _dereq_(51).parseInt;
var $trim = _dereq_(115).trim;
var ws = _dereq_(116);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"115":115,"116":116,"51":51}],95:[function(_dereq_,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],96:[function(_dereq_,module,exports){
var anObject = _dereq_(19);
var isObject = _dereq_(62);
var newPromiseCapability = _dereq_(77);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"19":19,"62":62,"77":77}],97:[function(_dereq_,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],98:[function(_dereq_,module,exports){
var redefine = _dereq_(99);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"99":99}],99:[function(_dereq_,module,exports){
var global = _dereq_(51);
var hide = _dereq_(53);
var has = _dereq_(52);
var SRC = _dereq_(128)('src');
var $toString = _dereq_(50);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

_dereq_(33).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"128":128,"33":33,"50":50,"51":51,"52":52,"53":53}],100:[function(_dereq_,module,exports){
'use strict';

var classof = _dereq_(28);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

},{"28":28}],101:[function(_dereq_,module,exports){
'use strict';

var regexpFlags = _dereq_(47);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"47":47}],102:[function(_dereq_,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],103:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = _dereq_(62);
var anObject = _dereq_(19);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _dereq_(35)(Function.call, _dereq_(82).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"19":19,"35":35,"62":62,"82":82}],104:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_(51);
var dP = _dereq_(80);
var DESCRIPTORS = _dereq_(39);
var SPECIES = _dereq_(133)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"133":133,"39":39,"51":51,"80":80}],105:[function(_dereq_,module,exports){
var def = _dereq_(80).f;
var has = _dereq_(52);
var TAG = _dereq_(133)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"133":133,"52":52,"80":80}],106:[function(_dereq_,module,exports){
var shared = _dereq_(107)('keys');
var uid = _dereq_(128);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"107":107,"128":128}],107:[function(_dereq_,module,exports){
var core = _dereq_(33);
var global = _dereq_(51);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: _dereq_(70) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"33":33,"51":51,"70":70}],108:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = _dereq_(19);
var aFunction = _dereq_(14);
var SPECIES = _dereq_(133)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"133":133,"14":14,"19":19}],109:[function(_dereq_,module,exports){
'use strict';
var fails = _dereq_(45);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"45":45}],110:[function(_dereq_,module,exports){
var toInteger = _dereq_(120);
var defined = _dereq_(38);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"120":120,"38":38}],111:[function(_dereq_,module,exports){
// helper for String#{startsWith, endsWith, includes}
var isRegExp = _dereq_(63);
var defined = _dereq_(38);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"38":38,"63":63}],112:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var fails = _dereq_(45);
var defined = _dereq_(38);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"38":38,"43":43,"45":45}],113:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = _dereq_(122);
var repeat = _dereq_(114);
var defined = _dereq_(38);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"114":114,"122":122,"38":38}],114:[function(_dereq_,module,exports){
'use strict';
var toInteger = _dereq_(120);
var defined = _dereq_(38);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"120":120,"38":38}],115:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var defined = _dereq_(38);
var fails = _dereq_(45);
var spaces = _dereq_(116);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"116":116,"38":38,"43":43,"45":45}],116:[function(_dereq_,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],117:[function(_dereq_,module,exports){
var ctx = _dereq_(35);
var invoke = _dereq_(57);
var html = _dereq_(54);
var cel = _dereq_(40);
var global = _dereq_(51);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_dereq_(29)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"29":29,"35":35,"40":40,"51":51,"54":54,"57":57}],118:[function(_dereq_,module,exports){
var toInteger = _dereq_(120);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"120":120}],119:[function(_dereq_,module,exports){
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = _dereq_(120);
var toLength = _dereq_(122);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"120":120,"122":122}],120:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],121:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_(58);
var defined = _dereq_(38);
module.exports = function (it) {
  return IObject(defined(it));
};

},{"38":38,"58":58}],122:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_(120);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"120":120}],123:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_(38);
module.exports = function (it) {
  return Object(defined(it));
};

},{"38":38}],124:[function(_dereq_,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = _dereq_(62);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"62":62}],125:[function(_dereq_,module,exports){
'use strict';
if (_dereq_(39)) {
  var LIBRARY = _dereq_(70);
  var global = _dereq_(51);
  var fails = _dereq_(45);
  var $export = _dereq_(43);
  var $typed = _dereq_(127);
  var $buffer = _dereq_(126);
  var ctx = _dereq_(35);
  var anInstance = _dereq_(18);
  var propertyDesc = _dereq_(97);
  var hide = _dereq_(53);
  var redefineAll = _dereq_(98);
  var toInteger = _dereq_(120);
  var toLength = _dereq_(122);
  var toIndex = _dereq_(119);
  var toAbsoluteIndex = _dereq_(118);
  var toPrimitive = _dereq_(124);
  var has = _dereq_(52);
  var classof = _dereq_(28);
  var isObject = _dereq_(62);
  var toObject = _dereq_(123);
  var isArrayIter = _dereq_(59);
  var create = _dereq_(79);
  var getPrototypeOf = _dereq_(86);
  var gOPN = _dereq_(84).f;
  var getIterFn = _dereq_(134);
  var uid = _dereq_(128);
  var wks = _dereq_(133);
  var createArrayMethod = _dereq_(23);
  var createArrayIncludes = _dereq_(22);
  var speciesConstructor = _dereq_(108);
  var ArrayIterators = _dereq_(145);
  var Iterators = _dereq_(69);
  var $iterDetect = _dereq_(67);
  var setSpecies = _dereq_(104);
  var arrayFill = _dereq_(21);
  var arrayCopyWithin = _dereq_(20);
  var $DP = _dereq_(80);
  var $GOPD = _dereq_(82);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"104":104,"108":108,"118":118,"119":119,"120":120,"122":122,"123":123,"124":124,"126":126,"127":127,"128":128,"133":133,"134":134,"145":145,"18":18,"20":20,"21":21,"22":22,"23":23,"28":28,"35":35,"39":39,"43":43,"45":45,"51":51,"52":52,"53":53,"59":59,"62":62,"67":67,"69":69,"70":70,"79":79,"80":80,"82":82,"84":84,"86":86,"97":97,"98":98}],126:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_(51);
var DESCRIPTORS = _dereq_(39);
var LIBRARY = _dereq_(70);
var $typed = _dereq_(127);
var hide = _dereq_(53);
var redefineAll = _dereq_(98);
var fails = _dereq_(45);
var anInstance = _dereq_(18);
var toInteger = _dereq_(120);
var toLength = _dereq_(122);
var toIndex = _dereq_(119);
var gOPN = _dereq_(84).f;
var dP = _dereq_(80).f;
var arrayFill = _dereq_(21);
var setToStringTag = _dereq_(105);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"105":105,"119":119,"120":120,"122":122,"127":127,"18":18,"21":21,"39":39,"45":45,"51":51,"53":53,"70":70,"80":80,"84":84,"98":98}],127:[function(_dereq_,module,exports){
var global = _dereq_(51);
var hide = _dereq_(53);
var uid = _dereq_(128);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"128":128,"51":51,"53":53}],128:[function(_dereq_,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],129:[function(_dereq_,module,exports){
var global = _dereq_(51);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"51":51}],130:[function(_dereq_,module,exports){
var isObject = _dereq_(62);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"62":62}],131:[function(_dereq_,module,exports){
var global = _dereq_(51);
var core = _dereq_(33);
var LIBRARY = _dereq_(70);
var wksExt = _dereq_(132);
var defineProperty = _dereq_(80).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"132":132,"33":33,"51":51,"70":70,"80":80}],132:[function(_dereq_,module,exports){
exports.f = _dereq_(133);

},{"133":133}],133:[function(_dereq_,module,exports){
var store = _dereq_(107)('wks');
var uid = _dereq_(128);
var Symbol = _dereq_(51).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"107":107,"128":128,"51":51}],134:[function(_dereq_,module,exports){
var classof = _dereq_(28);
var ITERATOR = _dereq_(133)('iterator');
var Iterators = _dereq_(69);
module.exports = _dereq_(33).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"133":133,"28":28,"33":33,"69":69}],135:[function(_dereq_,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = _dereq_(43);

$export($export.P, 'Array', { copyWithin: _dereq_(20) });

_dereq_(16)('copyWithin');

},{"16":16,"20":20,"43":43}],136:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $every = _dereq_(23)(4);

$export($export.P + $export.F * !_dereq_(109)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"109":109,"23":23,"43":43}],137:[function(_dereq_,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = _dereq_(43);

$export($export.P, 'Array', { fill: _dereq_(21) });

_dereq_(16)('fill');

},{"16":16,"21":21,"43":43}],138:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $filter = _dereq_(23)(2);

$export($export.P + $export.F * !_dereq_(109)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"109":109,"23":23,"43":43}],139:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = _dereq_(43);
var $find = _dereq_(23)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_(16)(KEY);

},{"16":16,"23":23,"43":43}],140:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = _dereq_(43);
var $find = _dereq_(23)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_dereq_(16)(KEY);

},{"16":16,"23":23,"43":43}],141:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $forEach = _dereq_(23)(0);
var STRICT = _dereq_(109)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"109":109,"23":23,"43":43}],142:[function(_dereq_,module,exports){
'use strict';
var ctx = _dereq_(35);
var $export = _dereq_(43);
var toObject = _dereq_(123);
var call = _dereq_(64);
var isArrayIter = _dereq_(59);
var toLength = _dereq_(122);
var createProperty = _dereq_(34);
var getIterFn = _dereq_(134);

$export($export.S + $export.F * !_dereq_(67)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"122":122,"123":123,"134":134,"34":34,"35":35,"43":43,"59":59,"64":64,"67":67}],143:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $indexOf = _dereq_(22)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(109)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"109":109,"22":22,"43":43}],144:[function(_dereq_,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = _dereq_(43);

$export($export.S, 'Array', { isArray: _dereq_(60) });

},{"43":43,"60":60}],145:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_(16);
var step = _dereq_(68);
var Iterators = _dereq_(69);
var toIObject = _dereq_(121);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_(66)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"121":121,"16":16,"66":66,"68":68,"69":69}],146:[function(_dereq_,module,exports){
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = _dereq_(43);
var toIObject = _dereq_(121);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (_dereq_(58) != Object || !_dereq_(109)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"109":109,"121":121,"43":43,"58":58}],147:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var toIObject = _dereq_(121);
var toInteger = _dereq_(120);
var toLength = _dereq_(122);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !_dereq_(109)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"109":109,"120":120,"121":121,"122":122,"43":43}],148:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $map = _dereq_(23)(1);

$export($export.P + $export.F * !_dereq_(109)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"109":109,"23":23,"43":43}],149:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var createProperty = _dereq_(34);

// WebKit Array.of isn't generic
$export($export.S + $export.F * _dereq_(45)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"34":34,"43":43,"45":45}],150:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $reduce = _dereq_(24);

$export($export.P + $export.F * !_dereq_(109)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"109":109,"24":24,"43":43}],151:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $reduce = _dereq_(24);

$export($export.P + $export.F * !_dereq_(109)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"109":109,"24":24,"43":43}],152:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var html = _dereq_(54);
var cof = _dereq_(29);
var toAbsoluteIndex = _dereq_(118);
var toLength = _dereq_(122);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * _dereq_(45)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"118":118,"122":122,"29":29,"43":43,"45":45,"54":54}],153:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $some = _dereq_(23)(3);

$export($export.P + $export.F * !_dereq_(109)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"109":109,"23":23,"43":43}],154:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var aFunction = _dereq_(14);
var toObject = _dereq_(123);
var fails = _dereq_(45);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !_dereq_(109)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"109":109,"123":123,"14":14,"43":43,"45":45}],155:[function(_dereq_,module,exports){
_dereq_(104)('Array');

},{"104":104}],156:[function(_dereq_,module,exports){
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = _dereq_(43);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"43":43}],157:[function(_dereq_,module,exports){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = _dereq_(43);
var toISOString = _dereq_(36);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"36":36,"43":43}],158:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var toObject = _dereq_(123);
var toPrimitive = _dereq_(124);

$export($export.P + $export.F * _dereq_(45)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"123":123,"124":124,"43":43,"45":45}],159:[function(_dereq_,module,exports){
var TO_PRIMITIVE = _dereq_(133)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) _dereq_(53)(proto, TO_PRIMITIVE, _dereq_(37));

},{"133":133,"37":37,"53":53}],160:[function(_dereq_,module,exports){
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  _dereq_(99)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"99":99}],161:[function(_dereq_,module,exports){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = _dereq_(43);

$export($export.P, 'Function', { bind: _dereq_(27) });

},{"27":27,"43":43}],162:[function(_dereq_,module,exports){
'use strict';
var isObject = _dereq_(62);
var getPrototypeOf = _dereq_(86);
var HAS_INSTANCE = _dereq_(133)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) _dereq_(80).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"133":133,"62":62,"80":80,"86":86}],163:[function(_dereq_,module,exports){
var dP = _dereq_(80).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || _dereq_(39) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"39":39,"80":80}],164:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_(30);
var validate = _dereq_(130);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = _dereq_(32)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"130":130,"30":30,"32":32}],165:[function(_dereq_,module,exports){
// 20.2.2.3 Math.acosh(x)
var $export = _dereq_(43);
var log1p = _dereq_(73);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"43":43,"73":73}],166:[function(_dereq_,module,exports){
// 20.2.2.5 Math.asinh(x)
var $export = _dereq_(43);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"43":43}],167:[function(_dereq_,module,exports){
// 20.2.2.7 Math.atanh(x)
var $export = _dereq_(43);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"43":43}],168:[function(_dereq_,module,exports){
// 20.2.2.9 Math.cbrt(x)
var $export = _dereq_(43);
var sign = _dereq_(74);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"43":43,"74":74}],169:[function(_dereq_,module,exports){
// 20.2.2.11 Math.clz32(x)
var $export = _dereq_(43);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"43":43}],170:[function(_dereq_,module,exports){
// 20.2.2.12 Math.cosh(x)
var $export = _dereq_(43);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"43":43}],171:[function(_dereq_,module,exports){
// 20.2.2.14 Math.expm1(x)
var $export = _dereq_(43);
var $expm1 = _dereq_(71);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"43":43,"71":71}],172:[function(_dereq_,module,exports){
// 20.2.2.16 Math.fround(x)
var $export = _dereq_(43);

$export($export.S, 'Math', { fround: _dereq_(72) });

},{"43":43,"72":72}],173:[function(_dereq_,module,exports){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = _dereq_(43);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"43":43}],174:[function(_dereq_,module,exports){
// 20.2.2.18 Math.imul(x, y)
var $export = _dereq_(43);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * _dereq_(45)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"43":43,"45":45}],175:[function(_dereq_,module,exports){
// 20.2.2.21 Math.log10(x)
var $export = _dereq_(43);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"43":43}],176:[function(_dereq_,module,exports){
// 20.2.2.20 Math.log1p(x)
var $export = _dereq_(43);

$export($export.S, 'Math', { log1p: _dereq_(73) });

},{"43":43,"73":73}],177:[function(_dereq_,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = _dereq_(43);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"43":43}],178:[function(_dereq_,module,exports){
// 20.2.2.28 Math.sign(x)
var $export = _dereq_(43);

$export($export.S, 'Math', { sign: _dereq_(74) });

},{"43":43,"74":74}],179:[function(_dereq_,module,exports){
// 20.2.2.30 Math.sinh(x)
var $export = _dereq_(43);
var expm1 = _dereq_(71);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * _dereq_(45)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"43":43,"45":45,"71":71}],180:[function(_dereq_,module,exports){
// 20.2.2.33 Math.tanh(x)
var $export = _dereq_(43);
var expm1 = _dereq_(71);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"43":43,"71":71}],181:[function(_dereq_,module,exports){
// 20.2.2.34 Math.trunc(x)
var $export = _dereq_(43);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"43":43}],182:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_(51);
var has = _dereq_(52);
var cof = _dereq_(29);
var inheritIfRequired = _dereq_(56);
var toPrimitive = _dereq_(124);
var fails = _dereq_(45);
var gOPN = _dereq_(84).f;
var gOPD = _dereq_(82).f;
var dP = _dereq_(80).f;
var $trim = _dereq_(115).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(_dereq_(79)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _dereq_(39) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _dereq_(99)(global, NUMBER, $Number);
}

},{"115":115,"124":124,"29":29,"39":39,"45":45,"51":51,"52":52,"56":56,"79":79,"80":80,"82":82,"84":84,"99":99}],183:[function(_dereq_,module,exports){
// 20.1.2.1 Number.EPSILON
var $export = _dereq_(43);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"43":43}],184:[function(_dereq_,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = _dereq_(43);
var _isFinite = _dereq_(51).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"43":43,"51":51}],185:[function(_dereq_,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = _dereq_(43);

$export($export.S, 'Number', { isInteger: _dereq_(61) });

},{"43":43,"61":61}],186:[function(_dereq_,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = _dereq_(43);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"43":43}],187:[function(_dereq_,module,exports){
// 20.1.2.5 Number.isSafeInteger(number)
var $export = _dereq_(43);
var isInteger = _dereq_(61);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"43":43,"61":61}],188:[function(_dereq_,module,exports){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = _dereq_(43);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"43":43}],189:[function(_dereq_,module,exports){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = _dereq_(43);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"43":43}],190:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var $parseFloat = _dereq_(93);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"43":43,"93":93}],191:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var $parseInt = _dereq_(94);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"43":43,"94":94}],192:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var toInteger = _dereq_(120);
var aNumberValue = _dereq_(15);
var repeat = _dereq_(114);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !_dereq_(45)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"114":114,"120":120,"15":15,"43":43,"45":45}],193:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $fails = _dereq_(45);
var aNumberValue = _dereq_(15);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"15":15,"43":43,"45":45}],194:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_(43);

$export($export.S + $export.F, 'Object', { assign: _dereq_(78) });

},{"43":43,"78":78}],195:[function(_dereq_,module,exports){
var $export = _dereq_(43);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: _dereq_(79) });

},{"43":43,"79":79}],196:[function(_dereq_,module,exports){
var $export = _dereq_(43);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !_dereq_(39), 'Object', { defineProperties: _dereq_(81) });

},{"39":39,"43":43,"81":81}],197:[function(_dereq_,module,exports){
var $export = _dereq_(43);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !_dereq_(39), 'Object', { defineProperty: _dereq_(80).f });

},{"39":39,"43":43,"80":80}],198:[function(_dereq_,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = _dereq_(62);
var meta = _dereq_(75).onFreeze;

_dereq_(90)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"62":62,"75":75,"90":90}],199:[function(_dereq_,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = _dereq_(121);
var $getOwnPropertyDescriptor = _dereq_(82).f;

_dereq_(90)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"121":121,"82":82,"90":90}],200:[function(_dereq_,module,exports){
// 19.1.2.7 Object.getOwnPropertyNames(O)
_dereq_(90)('getOwnPropertyNames', function () {
  return _dereq_(83).f;
});

},{"83":83,"90":90}],201:[function(_dereq_,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = _dereq_(123);
var $getPrototypeOf = _dereq_(86);

_dereq_(90)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"123":123,"86":86,"90":90}],202:[function(_dereq_,module,exports){
// 19.1.2.11 Object.isExtensible(O)
var isObject = _dereq_(62);

_dereq_(90)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"62":62,"90":90}],203:[function(_dereq_,module,exports){
// 19.1.2.12 Object.isFrozen(O)
var isObject = _dereq_(62);

_dereq_(90)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"62":62,"90":90}],204:[function(_dereq_,module,exports){
// 19.1.2.13 Object.isSealed(O)
var isObject = _dereq_(62);

_dereq_(90)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"62":62,"90":90}],205:[function(_dereq_,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $export = _dereq_(43);
$export($export.S, 'Object', { is: _dereq_(102) });

},{"102":102,"43":43}],206:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_(123);
var $keys = _dereq_(88);

_dereq_(90)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"123":123,"88":88,"90":90}],207:[function(_dereq_,module,exports){
// 19.1.2.15 Object.preventExtensions(O)
var isObject = _dereq_(62);
var meta = _dereq_(75).onFreeze;

_dereq_(90)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"62":62,"75":75,"90":90}],208:[function(_dereq_,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = _dereq_(62);
var meta = _dereq_(75).onFreeze;

_dereq_(90)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"62":62,"75":75,"90":90}],209:[function(_dereq_,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = _dereq_(43);
$export($export.S, 'Object', { setPrototypeOf: _dereq_(103).set });

},{"103":103,"43":43}],210:[function(_dereq_,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = _dereq_(28);
var test = {};
test[_dereq_(133)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _dereq_(99)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"133":133,"28":28,"99":99}],211:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var $parseFloat = _dereq_(93);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"43":43,"93":93}],212:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var $parseInt = _dereq_(94);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"43":43,"94":94}],213:[function(_dereq_,module,exports){
'use strict';
var LIBRARY = _dereq_(70);
var global = _dereq_(51);
var ctx = _dereq_(35);
var classof = _dereq_(28);
var $export = _dereq_(43);
var isObject = _dereq_(62);
var aFunction = _dereq_(14);
var anInstance = _dereq_(18);
var forOf = _dereq_(49);
var speciesConstructor = _dereq_(108);
var task = _dereq_(117).set;
var microtask = _dereq_(76)();
var newPromiseCapabilityModule = _dereq_(77);
var perform = _dereq_(95);
var userAgent = _dereq_(129);
var promiseResolve = _dereq_(96);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_dereq_(133)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _dereq_(98)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
_dereq_(105)($Promise, PROMISE);
_dereq_(104)(PROMISE);
Wrapper = _dereq_(33)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_(67)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"104":104,"105":105,"108":108,"117":117,"129":129,"133":133,"14":14,"18":18,"28":28,"33":33,"35":35,"43":43,"49":49,"51":51,"62":62,"67":67,"70":70,"76":76,"77":77,"95":95,"96":96,"98":98}],214:[function(_dereq_,module,exports){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = _dereq_(43);
var aFunction = _dereq_(14);
var anObject = _dereq_(19);
var rApply = (_dereq_(51).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !_dereq_(45)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"14":14,"19":19,"43":43,"45":45,"51":51}],215:[function(_dereq_,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = _dereq_(43);
var create = _dereq_(79);
var aFunction = _dereq_(14);
var anObject = _dereq_(19);
var isObject = _dereq_(62);
var fails = _dereq_(45);
var bind = _dereq_(27);
var rConstruct = (_dereq_(51).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"14":14,"19":19,"27":27,"43":43,"45":45,"51":51,"62":62,"79":79}],216:[function(_dereq_,module,exports){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = _dereq_(80);
var $export = _dereq_(43);
var anObject = _dereq_(19);
var toPrimitive = _dereq_(124);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * _dereq_(45)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"124":124,"19":19,"43":43,"45":45,"80":80}],217:[function(_dereq_,module,exports){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = _dereq_(43);
var gOPD = _dereq_(82).f;
var anObject = _dereq_(19);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"19":19,"43":43,"82":82}],218:[function(_dereq_,module,exports){
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = _dereq_(43);
var anObject = _dereq_(19);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
_dereq_(65)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"19":19,"43":43,"65":65}],219:[function(_dereq_,module,exports){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = _dereq_(82);
var $export = _dereq_(43);
var anObject = _dereq_(19);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"19":19,"43":43,"82":82}],220:[function(_dereq_,module,exports){
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = _dereq_(43);
var getProto = _dereq_(86);
var anObject = _dereq_(19);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"19":19,"43":43,"86":86}],221:[function(_dereq_,module,exports){
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = _dereq_(82);
var getPrototypeOf = _dereq_(86);
var has = _dereq_(52);
var $export = _dereq_(43);
var isObject = _dereq_(62);
var anObject = _dereq_(19);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"19":19,"43":43,"52":52,"62":62,"82":82,"86":86}],222:[function(_dereq_,module,exports){
// 26.1.9 Reflect.has(target, propertyKey)
var $export = _dereq_(43);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"43":43}],223:[function(_dereq_,module,exports){
// 26.1.10 Reflect.isExtensible(target)
var $export = _dereq_(43);
var anObject = _dereq_(19);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"19":19,"43":43}],224:[function(_dereq_,module,exports){
// 26.1.11 Reflect.ownKeys(target)
var $export = _dereq_(43);

$export($export.S, 'Reflect', { ownKeys: _dereq_(92) });

},{"43":43,"92":92}],225:[function(_dereq_,module,exports){
// 26.1.12 Reflect.preventExtensions(target)
var $export = _dereq_(43);
var anObject = _dereq_(19);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"19":19,"43":43}],226:[function(_dereq_,module,exports){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = _dereq_(43);
var setProto = _dereq_(103);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"103":103,"43":43}],227:[function(_dereq_,module,exports){
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = _dereq_(80);
var gOPD = _dereq_(82);
var getPrototypeOf = _dereq_(86);
var has = _dereq_(52);
var $export = _dereq_(43);
var createDesc = _dereq_(97);
var anObject = _dereq_(19);
var isObject = _dereq_(62);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"19":19,"43":43,"52":52,"62":62,"80":80,"82":82,"86":86,"97":97}],228:[function(_dereq_,module,exports){
var global = _dereq_(51);
var inheritIfRequired = _dereq_(56);
var dP = _dereq_(80).f;
var gOPN = _dereq_(84).f;
var isRegExp = _dereq_(63);
var $flags = _dereq_(47);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_dereq_(39) && (!CORRECT_NEW || _dereq_(45)(function () {
  re2[_dereq_(133)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  _dereq_(99)(global, 'RegExp', $RegExp);
}

_dereq_(104)('RegExp');

},{"104":104,"133":133,"39":39,"45":45,"47":47,"51":51,"56":56,"63":63,"80":80,"84":84,"99":99}],229:[function(_dereq_,module,exports){
'use strict';
var regexpExec = _dereq_(101);
_dereq_(43)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"101":101,"43":43}],230:[function(_dereq_,module,exports){
// 21.2.5.3 get RegExp.prototype.flags()
if (_dereq_(39) && /./g.flags != 'g') _dereq_(80).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _dereq_(47)
});

},{"39":39,"47":47,"80":80}],231:[function(_dereq_,module,exports){
'use strict';

var anObject = _dereq_(19);
var toLength = _dereq_(122);
var advanceStringIndex = _dereq_(17);
var regExpExec = _dereq_(100);

// @@match logic
_dereq_(46)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"100":100,"122":122,"17":17,"19":19,"46":46}],232:[function(_dereq_,module,exports){
'use strict';

var anObject = _dereq_(19);
var toObject = _dereq_(123);
var toLength = _dereq_(122);
var toInteger = _dereq_(120);
var advanceStringIndex = _dereq_(17);
var regExpExec = _dereq_(100);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
_dereq_(46)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

},{"100":100,"120":120,"122":122,"123":123,"17":17,"19":19,"46":46}],233:[function(_dereq_,module,exports){
'use strict';

var anObject = _dereq_(19);
var sameValue = _dereq_(102);
var regExpExec = _dereq_(100);

// @@search logic
_dereq_(46)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

},{"100":100,"102":102,"19":19,"46":46}],234:[function(_dereq_,module,exports){
'use strict';

var isRegExp = _dereq_(63);
var anObject = _dereq_(19);
var speciesConstructor = _dereq_(108);
var advanceStringIndex = _dereq_(17);
var toLength = _dereq_(122);
var callRegExpExec = _dereq_(100);
var regexpExec = _dereq_(101);
var fails = _dereq_(45);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
_dereq_(46)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

},{"100":100,"101":101,"108":108,"122":122,"17":17,"19":19,"45":45,"46":46,"63":63}],235:[function(_dereq_,module,exports){
'use strict';
_dereq_(230);
var anObject = _dereq_(19);
var $flags = _dereq_(47);
var DESCRIPTORS = _dereq_(39);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  _dereq_(99)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_dereq_(45)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"19":19,"230":230,"39":39,"45":45,"47":47,"99":99}],236:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_(30);
var validate = _dereq_(130);
var SET = 'Set';

// 23.2 Set Objects
module.exports = _dereq_(32)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"130":130,"30":30,"32":32}],237:[function(_dereq_,module,exports){
'use strict';
// B.2.3.2 String.prototype.anchor(name)
_dereq_(112)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"112":112}],238:[function(_dereq_,module,exports){
'use strict';
// B.2.3.3 String.prototype.big()
_dereq_(112)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"112":112}],239:[function(_dereq_,module,exports){
'use strict';
// B.2.3.4 String.prototype.blink()
_dereq_(112)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"112":112}],240:[function(_dereq_,module,exports){
'use strict';
// B.2.3.5 String.prototype.bold()
_dereq_(112)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"112":112}],241:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $at = _dereq_(110)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"110":110,"43":43}],242:[function(_dereq_,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = _dereq_(43);
var toLength = _dereq_(122);
var context = _dereq_(111);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * _dereq_(44)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"111":111,"122":122,"43":43,"44":44}],243:[function(_dereq_,module,exports){
'use strict';
// B.2.3.6 String.prototype.fixed()
_dereq_(112)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"112":112}],244:[function(_dereq_,module,exports){
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
_dereq_(112)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"112":112}],245:[function(_dereq_,module,exports){
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
_dereq_(112)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"112":112}],246:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var toAbsoluteIndex = _dereq_(118);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"118":118,"43":43}],247:[function(_dereq_,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = _dereq_(43);
var context = _dereq_(111);
var INCLUDES = 'includes';

$export($export.P + $export.F * _dereq_(44)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"111":111,"43":43,"44":44}],248:[function(_dereq_,module,exports){
'use strict';
// B.2.3.9 String.prototype.italics()
_dereq_(112)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"112":112}],249:[function(_dereq_,module,exports){
'use strict';
var $at = _dereq_(110)(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_(66)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"110":110,"66":66}],250:[function(_dereq_,module,exports){
'use strict';
// B.2.3.10 String.prototype.link(url)
_dereq_(112)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"112":112}],251:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var toIObject = _dereq_(121);
var toLength = _dereq_(122);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"121":121,"122":122,"43":43}],252:[function(_dereq_,module,exports){
var $export = _dereq_(43);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _dereq_(114)
});

},{"114":114,"43":43}],253:[function(_dereq_,module,exports){
'use strict';
// B.2.3.11 String.prototype.small()
_dereq_(112)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"112":112}],254:[function(_dereq_,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = _dereq_(43);
var toLength = _dereq_(122);
var context = _dereq_(111);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * _dereq_(44)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"111":111,"122":122,"43":43,"44":44}],255:[function(_dereq_,module,exports){
'use strict';
// B.2.3.12 String.prototype.strike()
_dereq_(112)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"112":112}],256:[function(_dereq_,module,exports){
'use strict';
// B.2.3.13 String.prototype.sub()
_dereq_(112)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"112":112}],257:[function(_dereq_,module,exports){
'use strict';
// B.2.3.14 String.prototype.sup()
_dereq_(112)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"112":112}],258:[function(_dereq_,module,exports){
'use strict';
// 21.1.3.25 String.prototype.trim()
_dereq_(115)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"115":115}],259:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = _dereq_(51);
var has = _dereq_(52);
var DESCRIPTORS = _dereq_(39);
var $export = _dereq_(43);
var redefine = _dereq_(99);
var META = _dereq_(75).KEY;
var $fails = _dereq_(45);
var shared = _dereq_(107);
var setToStringTag = _dereq_(105);
var uid = _dereq_(128);
var wks = _dereq_(133);
var wksExt = _dereq_(132);
var wksDefine = _dereq_(131);
var enumKeys = _dereq_(42);
var isArray = _dereq_(60);
var anObject = _dereq_(19);
var isObject = _dereq_(62);
var toIObject = _dereq_(121);
var toPrimitive = _dereq_(124);
var createDesc = _dereq_(97);
var _create = _dereq_(79);
var gOPNExt = _dereq_(83);
var $GOPD = _dereq_(82);
var $DP = _dereq_(80);
var $keys = _dereq_(88);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  _dereq_(84).f = gOPNExt.f = $getOwnPropertyNames;
  _dereq_(89).f = $propertyIsEnumerable;
  _dereq_(85).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !_dereq_(70)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_(53)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"105":105,"107":107,"121":121,"124":124,"128":128,"131":131,"132":132,"133":133,"19":19,"39":39,"42":42,"43":43,"45":45,"51":51,"52":52,"53":53,"60":60,"62":62,"70":70,"75":75,"79":79,"80":80,"82":82,"83":83,"84":84,"85":85,"88":88,"89":89,"97":97,"99":99}],260:[function(_dereq_,module,exports){
'use strict';
var $export = _dereq_(43);
var $typed = _dereq_(127);
var buffer = _dereq_(126);
var anObject = _dereq_(19);
var toAbsoluteIndex = _dereq_(118);
var toLength = _dereq_(122);
var isObject = _dereq_(62);
var ArrayBuffer = _dereq_(51).ArrayBuffer;
var speciesConstructor = _dereq_(108);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * _dereq_(45)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

_dereq_(104)(ARRAY_BUFFER);

},{"104":104,"108":108,"118":118,"122":122,"126":126,"127":127,"19":19,"43":43,"45":45,"51":51,"62":62}],261:[function(_dereq_,module,exports){
var $export = _dereq_(43);
$export($export.G + $export.W + $export.F * !_dereq_(127).ABV, {
  DataView: _dereq_(126).DataView
});

},{"126":126,"127":127,"43":43}],262:[function(_dereq_,module,exports){
_dereq_(125)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],263:[function(_dereq_,module,exports){
_dereq_(125)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],264:[function(_dereq_,module,exports){
_dereq_(125)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],265:[function(_dereq_,module,exports){
_dereq_(125)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],266:[function(_dereq_,module,exports){
_dereq_(125)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],267:[function(_dereq_,module,exports){
_dereq_(125)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],268:[function(_dereq_,module,exports){
_dereq_(125)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],269:[function(_dereq_,module,exports){
_dereq_(125)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"125":125}],270:[function(_dereq_,module,exports){
_dereq_(125)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"125":125}],271:[function(_dereq_,module,exports){
'use strict';
var global = _dereq_(51);
var each = _dereq_(23)(0);
var redefine = _dereq_(99);
var meta = _dereq_(75);
var assign = _dereq_(78);
var weak = _dereq_(31);
var isObject = _dereq_(62);
var validate = _dereq_(130);
var NATIVE_WEAK_MAP = _dereq_(130);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _dereq_(32)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"130":130,"23":23,"31":31,"32":32,"51":51,"62":62,"75":75,"78":78,"99":99}],272:[function(_dereq_,module,exports){
'use strict';
var weak = _dereq_(31);
var validate = _dereq_(130);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
_dereq_(32)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"130":130,"31":31,"32":32}],273:[function(_dereq_,module,exports){
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = _dereq_(43);
var flattenIntoArray = _dereq_(48);
var toObject = _dereq_(123);
var toLength = _dereq_(122);
var aFunction = _dereq_(14);
var arraySpeciesCreate = _dereq_(26);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

_dereq_(16)('flatMap');

},{"122":122,"123":123,"14":14,"16":16,"26":26,"43":43,"48":48}],274:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = _dereq_(43);
var $includes = _dereq_(22)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_dereq_(16)('includes');

},{"16":16,"22":22,"43":43}],275:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = _dereq_(43);
var $entries = _dereq_(91)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"43":43,"91":91}],276:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = _dereq_(43);
var ownKeys = _dereq_(92);
var toIObject = _dereq_(121);
var gOPD = _dereq_(82);
var createProperty = _dereq_(34);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"121":121,"34":34,"43":43,"82":82,"92":92}],277:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export = _dereq_(43);
var $values = _dereq_(91)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"43":43,"91":91}],278:[function(_dereq_,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = _dereq_(43);
var core = _dereq_(33);
var global = _dereq_(51);
var speciesConstructor = _dereq_(108);
var promiseResolve = _dereq_(96);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"108":108,"33":33,"43":43,"51":51,"96":96}],279:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = _dereq_(43);
var $pad = _dereq_(113);
var userAgent = _dereq_(129);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"113":113,"129":129,"43":43}],280:[function(_dereq_,module,exports){
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = _dereq_(43);
var $pad = _dereq_(113);
var userAgent = _dereq_(129);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"113":113,"129":129,"43":43}],281:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_dereq_(115)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"115":115}],282:[function(_dereq_,module,exports){
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_dereq_(115)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"115":115}],283:[function(_dereq_,module,exports){
_dereq_(131)('asyncIterator');

},{"131":131}],284:[function(_dereq_,module,exports){
var $iterators = _dereq_(145);
var getKeys = _dereq_(88);
var redefine = _dereq_(99);
var global = _dereq_(51);
var hide = _dereq_(53);
var Iterators = _dereq_(69);
var wks = _dereq_(133);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"133":133,"145":145,"51":51,"53":53,"69":69,"88":88,"99":99}],285:[function(_dereq_,module,exports){
var $export = _dereq_(43);
var $task = _dereq_(117);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"117":117,"43":43}],286:[function(_dereq_,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var global = _dereq_(51);
var $export = _dereq_(43);
var userAgent = _dereq_(129);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"129":129,"43":43,"51":51}],287:[function(_dereq_,module,exports){
_dereq_(286);
_dereq_(285);
_dereq_(284);
module.exports = _dereq_(33);

},{"284":284,"285":285,"286":286,"33":33}],288:[function(_dereq_,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},{},[1]);
!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
var util = (function (exports) {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /**
   * Various utilities.
   *
   * @author Alain Pitiot
   * @version 3.0.7
   * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
   * @license Distributed under the terms of the MIT License
   */
  var mix = function mix(superclass) {
    return new MixinBuilder(superclass);
  };
  var MixinBuilder = function () {
    function MixinBuilder(superclass) {
      classCallCheck(this, MixinBuilder);
      this.superclass = superclass;
    }
    createClass(MixinBuilder, [{
      key: 'with',
      value: function _with() {
        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }
        return mixins.reduce(function (c, mixin) {
          return mixin(c);
        }, this.superclass);
      }
    }]);
    return MixinBuilder;
  }();
  function promiseToTupple(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (error) {
      return [error, null];
    });
  }
  function makeUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
  function getErrorStack() {
    try {
      throw Error('');
    } catch (error) {
      var stack = error.stack.split("\n");
      stack.splice(1, 1);
      return JSON.stringify(stack.join('\n'));
    }
  }
  function isEmpty(x) {
    if (typeof x === 'undefined') return true;
    if (!Array.isArray(x)) return false;
    if (x.length === 0) return true;
    if (x.length === 1 && typeof x[0] === 'undefined') return true;
    return false;
  }
  function detectBrowser() {
    var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (isOpera) return 'Opera';
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) return 'Firefox';
    var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification);
    if (isSafari) return 'Safari';
    var isIE = /*@cc_on!@*/!!document.documentMode;
    if (isIE) return 'IE';
    var isEdge = !isIE && !!window.StyleMedia;
    if (isEdge) return 'Edge';
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome) return 'Chrome';
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isBlink) return 'Blink';
    return 'unknown';
  }
  function toNumerical(obj) {
    var response = { origin: 'util.toNumerical', context: 'when converting an object to its numerical form' };
    if (typeof obj === 'number') return obj;
    if (typeof obj === 'string') obj = [obj];
    if (Array.isArray(obj)) {
      return obj.map(function (e) {
        var n = Number.parseFloat(e);
        if (Number.isNaN(n)) throw _extends({}, response, { error: 'unable to convert: ' + e + ' to a number.' });
        return n;
      });
    }
  }
  function IsPointInsidePolygon(point, vertices) {
    var x = point[0];
    var y = point[1];
    var isInside = false;
    for (var i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
      var xi = vertices[i][0],
          yi = vertices[i][1];
      var xj = vertices[j][0],
          yj = vertices[j][1];
      var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) isInside = !isInside;
    }
    return isInside;
  }
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref = [array[j], array[i]];
      array[i] = _ref[0];
      array[j] = _ref[1];
    }
    return array;
  }
  function getPositionFromObject(object, units) {
    var response = { origin: 'util.getPositionFromObject', context: 'when getting the position of an object' };
    try {
      if (typeof object === 'undefined') throw 'cannot get the position of an undefined object';
      var objectWin = undefined;
      if (typeof object.getPos === 'function') {
        units = object.units;
        objectWin = object.win;
        object = object.getPos();
      }
      return to_px(object, units, objectWin);
    } catch (error) {
      throw _extends({}, response, { error: error });
    }
  }
  function to_px(pos, posUnit, win) {
    var response = { origin: 'util.to_px', context: 'when converting a position to pixel units' };
    if (posUnit === 'pix') return pos;else if (posUnit === 'norm') return [pos[0] * win.size[0] / 2.0, pos[1] * win.size[1] / 2.0];else if (posUnit === 'height') {
      var minSize = Math.min(win.size[0], win.size[1]);
      return [pos[0] * minSize, pos[1] * minSize];
    } else throw _extends({}, response, { error: 'unknown position units: ' + posUnit });
  }
  function to_norm(pos, posUnit, win) {
    var response = { origin: 'util.to_norm', context: 'when converting a position to norm units' };
    if (posUnit === 'norm') return pos;
    if (posUnit === 'pix') return [pos[0] / (win.size[0] / 2.0), pos[1] / (win.size[1] / 2.0)];
    if (posUnit === 'height') {
      var minSize = Math.min(win.size[0], win.size[1]);
      return [pos[0] * minSize / (win.size[0] / 2.0), pos[1] * minSize / (win.size[1] / 2.0)];
    }
    throw _extends({}, response, { error: 'unknown position units: ' + posUnit });
  }
  function to_height(pos, posUnit, win) {
    var response = { origin: 'util.to_height', context: 'when converting a position to height units' };
    if (posUnit === 'height') return pos;
    if (posUnit === 'pix') {
      var minSize = Math.min(win.size[0], win.size[1]);
      return [pos[0] / minSize, pos[1] / minSize];
    }
    if (posUnit === 'norm') {
      var _minSize = Math.min(win.size[0], win.size[1]);
      return [pos[0] * win.size[0] / 2.0 / _minSize, pos[1] * win.size[1] / 2.0 / _minSize];
    }
    throw _extends({}, response, { error: 'unknown position units: ' + posUnit });
  }
  function to_win(pos, posUnit, win) {
    var response = { origin: 'util.to_win', context: 'when converting a position to window units' };
    try {
      if (win._units === 'pix') return to_px(pos, posUnit, win);
      if (win._units === 'norm') return to_norm(pos, posUnit, win);
      if (win._units === 'height') return to_height(pos, posUnit, win);
      throw 'unknown window units: ' + win._units;
    } catch (error) {
      throw _extends({}, response, { error: error });
    }
  }
  function to_unit(pos, posUnit, win, targetUnit) {
    var response = { origin: 'util.to_unit', context: 'when converting a position to different units' };
    try {
      if (targetUnit === 'pix') return to_px(pos, posUnit, win);
      if (targetUnit === 'norm') return to_norm(pos, posUnit, win);
      if (targetUnit === 'height') return to_height(pos, posUnit, win);
      throw 'unknown target units: ' + targetUnit;
    } catch (error) {
      throw _extends({}, response, { error: error });
    }
  }
  function to_pixiPoint(pos, posUnit, win) {
    var pos_px = to_px(pos, posUnit, win);
    return new PIXI.Point(pos_px[0], pos_px[1]);
  }
  function toString(object) {
    if (typeof object === 'string') return object;
    try {
      return JSON.stringify(object);
    } catch (e) {
      return 'Object (circular)';
    }
  }
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      }).replace(/{([$_a-zA-Z][$_a-zA-Z0-9]*)}/g, function (match, name) {
        return args.length > 0 && args[0][name] !== undefined ? args[0][name] : match;
      });
    };
  }
  function isInt(obj) {
    if (isNaN(obj)) return false;
    var x = parseFloat(obj);
    return (x | 0) === x;
  }
  function getUrlParameters() {
    var urlQuery = window.location.search.slice(1);
    return new URLSearchParams(urlQuery);
  }
  function addInfoFromUrl(info) {
    var infoFromUrl = getUrlParameters();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (var _iterator = infoFromUrl[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref2 = _step.value;
        var _ref3 = slicedToArray(_ref2, 2);
        var key = _ref3[0];
        var value = _ref3[1];
        if (key !== '__msg') info[key] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return info;
  }
  function selectFromArray(array, selection) {
    if (isInt(selection)) return [array[parseInt(selection)]];
    else if (Array.isArray(selection)) return array.filter(function (e, i) {
        return selection.includes(i);
      });
      else if (typeof selection === 'string') {
          if (selection.indexOf(',') > -1) return flattenArray(selection.split(',').map(function (a) {
            return selectFromArray(array, a);
          }));else if (selection.indexOf(':') > -1) {
            var sliceParams = selection.split(':').map(function (a) {
              return parseInt(a);
            });
            if (sliceParams.length === 3) return sliceArray(array, sliceParams[0], sliceParams[2], sliceParams[1]);else return sliceArray.apply(undefined, [array].concat(toConsumableArray(sliceParams)));
          }
        } else throw { origin: 'selectFromArray', context: 'when selecting entries from an array', error: 'unknown selection type: ' + (typeof selection === 'undefined' ? 'undefined' : _typeof(selection)) };
  }
  function flattenArray(array) {
    return array.reduce(function (flat, next) {
      return flat.concat(Array.isArray(next) ? flattenArray(next) : next);
    }, []);
  }
  function sliceArray(array) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
    var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
    var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;
    if (isNaN(from)) from = 0;
    if (isNaN(to)) to = array.length;
    var arraySlice = array.slice(from, to);
    if (isNaN(step)) return arraySlice;
    if (step < 0) arraySlice.reverse();
    step = Math.abs(step);
    if (step == 1) return arraySlice;else return arraySlice.filter(function (e, i) {
      return i % step == 0;
    });
  }

  var MonotonicClock = function () {
  	function MonotonicClock() {
  		var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MonotonicClock.getReferenceTime();
  		classCallCheck(this, MonotonicClock);
  		this._timeAtLastReset = startTime;
  	}
  	createClass(MonotonicClock, [{
  		key: 'getTime',
  		value: function getTime() {
  			return MonotonicClock.getReferenceTime() - this._timeAtLastReset;
  		}
  	}, {
  		key: 'getLastResetTime',
  		value: function getLastResetTime() {
  			return this._timeAtLastReset;
  		}
  	}], [{
  		key: 'getReferenceTime',
  		value: function getReferenceTime() {
  			return (new Date().getTime() - MonotonicClock._referenceTime) / 1000;
  		}
  	}, {
  		key: 'getDateStr',
  		value: function getDateStr() {
  			var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD_HH[h]mm.ss.SSS';
  			return moment().format(format);
  		}
  	}]);
  	return MonotonicClock;
  }();
  MonotonicClock._referenceTime = new Date().getTime();
  var Clock = function (_MonotonicClock) {
  	inherits(Clock, _MonotonicClock);
  	function Clock() {
  		classCallCheck(this, Clock);
  		return possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this));
  	}
  	createClass(Clock, [{
  		key: 'reset',
  		value: function reset() {
  			var newTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  			this._timeAtLastReset = MonotonicClock.getReferenceTime() + newTime;
  		}
  	}, {
  		key: 'add',
  		value: function add(deltaTime) {
  			this._timeAtLastReset += deltaTime;
  		}
  	}]);
  	return Clock;
  }(MonotonicClock);
  var CountdownTimer = function (_Clock) {
  	inherits(CountdownTimer, _Clock);
  	function CountdownTimer() {
  		var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  		classCallCheck(this, CountdownTimer);
  		var _this2 = possibleConstructorReturn(this, (CountdownTimer.__proto__ || Object.getPrototypeOf(CountdownTimer)).call(this));
  		_this2._timeAtLastReset = MonotonicClock.getReferenceTime();
  		_this2._countdown_duration = startTime;
  		if (startTime) {
  			_this2.add(startTime);
  		}
  		return _this2;
  	}
  	createClass(CountdownTimer, [{
  		key: 'add',
  		value: function add(deltaTime) {
  			this._timeAtLastReset += deltaTime;
  		}
  	}, {
  		key: 'reset',
  		value: function reset() {
  			var newTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  			if (typeof newTime == 'undefined') {
  				this._timeAtLastReset = MonotonicClock.getReferenceTime() + this._countdown_duration;
  			} else {
  				this._countdown_duration = t;
  				this._timeAtLastReset = MonotonicClock.getReferenceTime() + newTime;
  			}
  		}
  	}, {
  		key: 'getTime',
  		value: function getTime() {
  			return this._timeAtLastReset - MonotonicClock.getReferenceTime();
  		}
  	}]);
  	return CountdownTimer;
  }(Clock);

  /**
   * Color management.
   *
   * @author Alain Pitiot
   * @version 3.0.7
   * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
   * @license Distributed under the terms of the MIT License
   */
  var Color = function () {
  	function Color() {
  		var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'black';
  		var colorspace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Color.COLOR_SPACE.RGB;
  		classCallCheck(this, Color);
  		var response = { origin: 'Color', context: 'when defining a color' };
  		if (typeof obj == 'string') {
  			if (colorspace !== Color.COLOR_SPACE.RGB) throw _extends({}, response, { error: 'the colorspace must be RGB for a named color' });
  			if (obj[0] === '#') {
  				this._hex = obj;
  			}
  			else {
  					if (!(obj.toLowerCase() in Color.NAMED_COLORS)) throw _extends({}, response, { error: 'unknown named color: ' + obj });
  					this._hex = Color.NAMED_COLORS[obj.toLowerCase()];
  				}
  			this._rgb = Color.hexToRgb(this._hex);
  		}
  		else if (typeof obj == 'number') {
  				if (colorspace !== Color.COLOR_SPACE.RGB) throw _extends({}, response, { error: 'the colorspace must be RGB for a named color' });
  				this._rgb = Color._intToRgb(obj);
  			}
  			else if (Array.isArray(obj)) {
  					Color._checkTypeAndRange(obj);
  					var _obj = slicedToArray(obj, 3),
  					    a = _obj[0],
  					    b = _obj[1],
  					    c = _obj[2];
  					if (colorspace !== Color.COLOR_SPACE.RGB255) {
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
  							throw _extends({}, response, { error: 'unknown colorspace: ' + colorspace });
  					}
  				}
  	}
  	createClass(Color, [{
  		key: 'rgb',
  		get: function get$$1() {
  			return this._rgb;
  		}
  	}, {
  		key: 'rgb255',
  		get: function get$$1() {
  			return [Math.round(this._rgb[0] * 255.0), Math.round(this._rgb[1] * 255.0), Math.round(this._rgb[2] * 255.0)];
  		}
  	}, {
  		key: 'hex',
  		get: function get$$1() {
  			if (typeof this._hex === 'undefined') this._hex = Color._rgbToHex(this._rgb);
  			return this._hex;
  		}
  	}, {
  		key: 'int',
  		get: function get$$1() {
  			if (typeof this._int === 'undefined') this._int = Color._rgbToInt(this._rgb);
  			return this._int;
  		}
  	}], [{
  		key: 'hexToRgb255',
  		value: function hexToRgb255(hex) {
  			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  			if (result == null) throw { origin: 'Color.hexToRgb255', context: 'when converting an hexadecimal color code to its 255- or [0,1]-based RGB color representation', error: 'unable to parse the argument: wrong type or wrong code' };
  			return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  		}
  	}, {
  		key: 'hexToRgb',
  		value: function hexToRgb(hex) {
  			var _Color$hexToRgb = Color.hexToRgb255(hex),
  			    _Color$hexToRgb2 = slicedToArray(_Color$hexToRgb, 3),
  			    r255 = _Color$hexToRgb2[0],
  			    g255 = _Color$hexToRgb2[1],
  			    b255 = _Color$hexToRgb2[2];
  			return [r255 / 255.0, g255 / 255.0, b255 / 255.0];
  		}
  	}, {
  		key: 'rgb255ToHex',
  		value: function rgb255ToHex(rgb255) {
  			var response = { origin: 'Color.rgb255ToHex', context: 'when converting an rgb triplet to its hexadecimal color representation' };
  			try {
  				Color._checkTypeAndRange(rgb255, [0, 255]);
  				return Color._rgb255ToHex(rgb255);
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'rgbToHex',
  		value: function rgbToHex(rgb) {
  			var response = { origin: 'Color.rgbToHex', context: 'when converting an rgb triplet to its hexadecimal color representation' };
  			try {
  				Color._checkTypeAndRange(rgb, [0, 1]);
  				return Color._rgbToHex(rgb);
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'rgbToInt',
  		value: function rgbToInt(rgb) {
  			var response = { origin: 'Color.rgbToInt', context: 'when converting an rgb triplet to its integer representation' };
  			try {
  				Color._checkTypeAndRange(rgb, [0, 1]);
  				return Color._rgbToInt(rgb);
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'rgb255ToInt',
  		value: function rgb255ToInt(rgb255) {
  			var response = { origin: 'Color.rgb255ToInt', context: 'when converting an rgb triplet to its integer representation' };
  			try {
  				Color._checkTypeAndRange(rgb255, [0, 255]);
  				return Color._rgb255ToInt(rgb255);
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: '_rgb255ToHex',
  		value: function _rgb255ToHex(rgb255) {
  			return "#" + ((1 << 24) + (rgb255[0] << 16) + (rgb255[1] << 8) + rgb255[2]).toString(16).slice(1);
  		}
  	}, {
  		key: '_rgbToHex',
  		value: function _rgbToHex(rgb) {
  			var rgb255 = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
  			return Color._rgb255ToHex(rgb255);
  		}
  	}, {
  		key: '_rgbToInt',
  		value: function _rgbToInt(rgb) {
  			var rgb255 = [Math.round(rgb[0] * 255), Math.round(rgb[1] * 255), Math.round(rgb[2] * 255)];
  			return Color._rgb255ToInt(rgb255);
  		}
  	}, {
  		key: '_rgb255ToInt',
  		value: function _rgb255ToInt(rgb255) {
  			return rgb255[0] * 0x10000 + rgb255[1] * 0x100 + rgb255[2];
  		}
  	}, {
  		key: '_intToRgb255',
  		value: function _intToRgb255(hex) {
  			var r255 = hex >>> 0x10;
  			var g255 = (hex & 0xFF00) / 0x100;
  			var b255 = hex & 0xFF;
  			return [r255, g255, b255];
  		}
  	}, {
  		key: '_intToRgb',
  		value: function _intToRgb(hex) {
  			var _Color$_intToRgb = Color._intToRgb255(hex),
  			    _Color$_intToRgb2 = slicedToArray(_Color$_intToRgb, 3),
  			    r255 = _Color$_intToRgb2[0],
  			    g255 = _Color$_intToRgb2[1],
  			    b255 = _Color$_intToRgb2[2];
  			return [r255 / 255.0, g255 / 255.0, b255 / 255.0];
  		}
  	}, {
  		key: '_checkTypeAndRange',
  		value: function _checkTypeAndRange(arg) {
  			var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  			if (!Array.isArray(arg) || arg.length !== 3 || typeof arg[0] !== 'number' || typeof arg[1] !== 'number' || typeof arg[2] !== 'number') throw 'the argument should be an array of numbers of length 3';
  			if (typeof range !== 'undefined' && (arg[0] < range[0] || arg[0] > range[1] || arg[1] < range[0] || arg[1] > range[1] || arg[2] < range[0] || arg[2] > range[1])) throw 'the color components should all belong to [' + range[0] + ', ' + range[1] + ']';
  		}
  	}]);
  	return Color;
  }();
  Color.COLOR_SPACE = {
  	RGB: Symbol.for('RGB'),
  	RGB255: Symbol.for('RGB255')
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

  var ColorMixin = function ColorMixin(superclass) {
  	return function (_superclass) {
  		inherits(_class, _superclass);
  		function _class(args) {
  			classCallCheck(this, _class);
  			return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, args));
  		}
  		createClass(_class, [{
  			key: 'setColor',
  			value: function setColor(color, log) {
  				this._setAttribute('color', color, log);
  				this._needUpdate = true;
  			}
  		}, {
  			key: 'setContrast',
  			value: function setContrast(contrast, log) {
  				this._setAttribute('contrast', contrast, log);
  				this._needUpdate = true;
  			}
  		}, {
  			key: 'getContrastedColor',
  			value: function getContrastedColor(color, contrast) {
  				var rgb = color.rgb.map(function (c) {
  					return (c * 2.0 - 1.0) * contrast;
  				});
  				return new Color(rgb, Color.COLOR_SPACE.RGB);
  			}
  		}]);
  		return _class;
  	}(superclass);
  };

  var EventEmitter = function () {
  	function EventEmitter() {
  		classCallCheck(this, EventEmitter);
  		this._listeners = new Map();
  		this._onceUuids = new Map();
  	}
  	createClass(EventEmitter, [{
  		key: 'on',
  		value: function on(name, listener) {
  			if (typeof listener !== 'function') throw new TypeError('listener must be a function');
  			var uuid = makeUuid();
  			if (!this._listeners.has(name)) this._listeners.set(name, []);
  			this._listeners.get(name).push({ uuid: uuid, listener: listener });
  			return uuid;
  		}
  	}, {
  		key: 'once',
  		value: function once(name, listener) {
  			var uuid = this.on(name, listener);
  			if (!this._onceUuids.has(name)) this._onceUuids.set(name, []);
  			this._onceUuids.get(name).push(uuid);
  			return uuid;
  		}
  	}, {
  		key: 'off',
  		value: function off(name, uuid) {
  			var relevantUuidListeners = this._listeners.get(name);
  			if (relevantUuidListeners && relevantUuidListeners.length) {
  				this._listeners.set(name, relevantUuidListeners.filter(function (uuidlistener) {
  					return uuidlistener.uuid != uuid;
  				}));
  				return true;
  			}
  			return false;
  		}
  	}, {
  		key: 'emit',
  		value: function emit(name, data) {
  			var relevantUuidListeners = this._listeners.get(name);
  			if (relevantUuidListeners && relevantUuidListeners.length) {
  				var onceUuids = this._onceUuids.get(name);
  				var self = this;
  				relevantUuidListeners.forEach(function (_ref) {
  					var uuid = _ref.uuid,
  					    listener = _ref.listener;
  					listener(data);
  					if (typeof onceUuids !== 'undefined' && onceUuids.includes(uuid)) self.off(name, uuid);
  				});
  				return true;
  			}
  			return false;
  		}
  	}]);
  	return EventEmitter;
  }();

  var Logger = function () {
  	function Logger(threshold) {
  		classCallCheck(this, Logger);
  		this.consoleLogger = log4javascript.getLogger('psychojs');
  		var appender = new log4javascript.BrowserConsoleAppender();
  		appender.setLayout(this._customConsoleLayout());
  		appender.setThreshold(threshold);
  		this.consoleLogger.addAppender(appender);
  		this.consoleLogger.setLevel(threshold);
  	}
  	createClass(Logger, [{
  		key: '_customConsoleLayout',
  		value: function _customConsoleLayout() {
  			var customLayout = new log4javascript.PatternLayout("%p %f{1} | %m");
  			customLayout.setCustomField('location', function (layout, loggingReference) {
  				try {
  					0();
  				} catch (e) {
  					var stackEntries = e.stack.replace(/^.*?\n/, '').replace(/(?:\n@:0)?\s+$/m, '').replace(/^\(/gm, '{anon}(').split("\n");
  					var relevantEntry = void 0;
  					var browser = detectBrowser();
  					if (browser == 'Firefox') {
  						var _iteratorNormalCompletion = true;
  						var _didIteratorError = false;
  						var _iteratorError = undefined;
  						try {
  							for (var _iterator = stackEntries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  								var entry = _step.value;
  								if (entry.indexOf('log4javascript.min.js') <= 0) {
  									relevantEntry = entry;
  									break;
  								}
  							}
  						} catch (err) {
  							_didIteratorError = true;
  							_iteratorError = err;
  						} finally {
  							try {
  								if (!_iteratorNormalCompletion && _iterator.return) {
  									_iterator.return();
  								}
  							} finally {
  								if (_didIteratorError) {
  									throw _iteratorError;
  								}
  							}
  						}
  						var buf = relevantEntry.split(':');
  						var line = buf[buf.length - 2];
  						var file = buf[buf.length - 3].split('/').pop();
  						var method = relevantEntry.split('@')[0];
  						return method + ' ' + file + ' ' + line;
  					} else if (browser == 'Safari') {
  						return 'unknown';
  					} else if (browser == 'Chrome') {
  						relevantEntry = stackEntries.pop();
  						var _buf = relevantEntry.split(' ');
  						var fileLine = _buf.pop();
  						var _method = _buf.pop();
  						_buf = fileLine.split(':');_buf.pop();
  						var _line = _buf.pop();
  						var _file = _buf.pop().split('/').pop();
  						return _method + ' ' + _file + ' ' + _line;
  					} else return 'unknown';
  				}
  			});
  			return customLayout;
  		}
  	}]);
  	return Logger;
  }();

  var PsychObject = function (_EventEmitter) {
  	inherits(PsychObject, _EventEmitter);
  	function PsychObject(psychoJS, name) {
  		classCallCheck(this, PsychObject);
  		var _this = possibleConstructorReturn(this, (PsychObject.__proto__ || Object.getPrototypeOf(PsychObject)).call(this));
  		_this._psychoJS = psychoJS;
  		if (typeof name === 'undefined') name = _this.constructor.name;
  		_this._addAttribute('name', name);
  		return _this;
  	}
  	createClass(PsychObject, [{
  		key: '_setAttribute',
  		value: function _setAttribute(attributeName, attributeValue) {
  			var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  			var operation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  			var stealth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  			var response = { origin: 'PsychObject.setAttribute', context: 'when setting the attribute of an object' };
  			if (typeof attributeName == 'undefined') throw _extends({}, response, { error: 'the attribute name cannot be undefined' });
  			if (typeof attributeValue == 'undefined') {
  				this._psychoJS.logger.warn('setting the value of attribute: ' + attributeName + ' in PsychObject: ' + this._name + ' as: undefined');
  			}
  			if (typeof operation !== 'undefined' && this.hasOwnProperty('_' + attributeName)) {
  				var oldValue = this['_' + attributeName];
  				if (typeof attributeValue == 'number' || Array.isArray(attributeValue) && (attributeValue.length == 0 || typeof attributeValue[0] == 'number')) {
  					if (Array.isArray(attributeValue)) {
  						if (Array.isArray(oldValue)) {
  							if (attributeValue.length !== oldValue.length) throw _extends({}, response, { error: 'old and new value should have the same size when they are both arrays' });
  							switch (operation) {
  								case '':
  									break;
  								case '+':
  									attributeValue = attributeValue.map(function (v, i) {
  										return oldValue[i] + v;
  									});
  									break;
  								case '*':
  									attributeValue = attributeValue.map(function (v, i) {
  										return oldValue[i] * v;
  									});
  									break;
  								case '-':
  									attributeValue = attributeValue.map(function (v, i) {
  										return oldValue[i] - v;
  									});
  									break;
  								case '/':
  									attributeValue = attributeValue.map(function (v, i) {
  										return oldValue[i] / v;
  									});
  									break;
  								case '**':
  									attributeValue = attributeValue.map(function (v, i) {
  										return Math.pow(oldValue[i], v);
  									});
  									break;
  								case '%':
  									attributeValue = attributeValue.map(function (v, i) {
  										return oldValue[i] % v;
  									});
  									break;
  								default:
  									throw _extends({}, response, { error: 'unsupported operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name });
  							}
  						} else
  							{
  								switch (operation) {
  									case '':
  										break;
  									case '+':
  										attributeValue = attributeValue.map(function (v) {
  											return oldValue + v;
  										});
  										break;
  									case '*':
  										attributeValue = attributeValue.map(function (v) {
  											return oldValue * v;
  										});
  										break;
  									case '-':
  										attributeValue = attributeValue.map(function (v) {
  											return oldValue - v;
  										});
  										break;
  									case '/':
  										attributeValue = attributeValue.map(function (v) {
  											return oldValue / v;
  										});
  										break;
  									case '**':
  										attributeValue = attributeValue.map(function (v) {
  											return Math.pow(oldValue, v);
  										});
  										break;
  									case '%':
  										attributeValue = attributeValue.map(function (v) {
  											return oldValue % v;
  										});
  										break;
  									default:
  										throw _extends({}, response, { error: 'unsupported value: ' + JSON.stringify(attributeValue) + ' for operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name });
  								}
  							}
  					} else
  						{
  							if (Array.isArray(oldValue)) {
  								switch (operation) {
  									case '':
  										attributeValue = oldValue.map(function (v) {
  											return attributeValue;
  										});
  										break;
  									case '+':
  										attributeValue = oldValue.map(function (v) {
  											return v + attributeValue;
  										});
  										break;
  									case '*':
  										attributeValue = oldValue.map(function (v) {
  											return v * attributeValue;
  										});
  										break;
  									case '-':
  										attributeValue = oldValue.map(function (v) {
  											return v - attributeValue;
  										});
  										break;
  									case '/':
  										attributeValue = oldValue.map(function (v) {
  											return v / attributeValue;
  										});
  										break;
  									case '**':
  										attributeValue = oldValue.map(function (v) {
  											return Math.pow(v, attributeValue);
  										});
  										break;
  									case '%':
  										attributeValue = oldValue.map(function (v) {
  											return v % attributeValue;
  										});
  										break;
  									default:
  										throw _extends({}, response, { error: 'unsupported operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name });
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
  											attributeValue = Math.pow(oldValue, attributeValue);
  											break;
  										case '%':
  											attributeValue = oldValue % attributeValue;
  											break;
  										default:
  											throw _extends({}, response, { error: 'unsupported value: ' + JSON.stringify(attributeValue) + ' for operation: ' + operation + ' when setting: ' + attributeName + ' in: ' + this.name });
  									}
  								}
  						}
  				} else throw _extends({}, response, { error: 'operation: ' + operation + ' is invalid for old value: ' + JSON.stringify(oldValue) + ' and new value: ' + JSON.stringify(attributeValue) });
  			}
  			if (!stealth && (log || this._autoLog) && typeof this.win !== 'undefined') {
  				var message = this.name + ": " + attributeName + " = " + JSON.stringify(attributeValue);
  			}
  			var previousAttributeValue = this['_' + attributeName];
  			this['_' + attributeName] = attributeValue;
  			return attributeValue !== previousAttributeValue;
  		}
  	}, {
  		key: '_addAttributes',
  		value: function _addAttributes(cls) {
  			var callLine = cls.toString().match(/this.*\._addAttributes\(.*\;/)[0];
  			var startIndex = callLine.indexOf('._addAttributes(') + 16;
  			var endIndex = callLine.indexOf(');');
  			var callArgs = callLine.substr(startIndex, endIndex - startIndex).split(',').map(function (s) {
  				return s.trim();
  			});
  			var attributeMap = new Map();
  			for (var i = 1; i < callArgs.length; ++i) {
  				attributeMap.set(callArgs[i], arguments.length <= i - 1 + 1 ? undefined : arguments[i - 1 + 1]);
  			}
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = attributeMap.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var _ref = _step.value;
  					var _ref2 = slicedToArray(_ref, 2);
  					var name = _ref2[0];
  					var value = _ref2[1];
  					this._addAttribute(name, value);
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  		}
  	}, {
  		key: '_addAttribute',
  		value: function _addAttribute(name, value) {
  			var _this2 = this;
  			var getPropertyName = 'get' + name[0].toUpperCase() + name.substr(1);
  			if (typeof this[getPropertyName] === 'undefined') this[getPropertyName] = function () {
  				return _this2['_' + name];
  			};
  			var setPropertyName = 'set' + name[0].toUpperCase() + name.substr(1);
  			if (typeof this[setPropertyName] === 'undefined') this[setPropertyName] = function (value) {
  				var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  				_this2._setAttribute(name, value, log);
  			};
  			Object.defineProperty(this, name, {
  				configurable: true,
  				get: function get$$1() {
  					return this[getPropertyName]();
  				},
  				set: function set$$1(value) {
  					this[setPropertyName](value);
  				}
  			});
  			this[name] = value;
  		}
  	}, {
  		key: 'psychoJS',
  		get: function get$$1() {
  			return this._psychoJS;
  		}
  		,
  		set: function set$$1(psychoJS) {
  			this._psychoJS = psychoJS;
  		}
  	}]);
  	return PsychObject;
  }(EventEmitter);

  /**
   * Scheduler.
   *
   * @author Alain Pitiot
   * @version 3.0.7
   * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
   * @license Distributed under the terms of the MIT License
   */
  var Scheduler = function () {
  	function Scheduler(psychoJS) {
  		classCallCheck(this, Scheduler);
  		this._psychoJS = psychoJS;
  		this._taskList = [];
  		this._currentTask = undefined;
  		this._argsList = [];
  		this._currentArgs = undefined;
  		this._stopAtNextUpdate = false;
  		this._stopAtNextTask = false;
  		this._status = Scheduler.Status.STOPPED;
  	}
  	createClass(Scheduler, [{
  		key: 'add',
  		value: function add(task) {
  			this._taskList.push(task);
  			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  				args[_key - 1] = arguments[_key];
  			}
  			this._argsList.push(args);
  		}
  	}, {
  		key: 'addConditional',
  		value: function addConditional(condition, thenScheduler, elseScheduler) {
  			var self = this;
  			var task = function task() {
  				if (condition()) self.add(thenScheduler);else self.add(elseScheduler);
  				return Scheduler.Event.NEXT;
  			};
  			this.add(task);
  		}
  	}, {
  		key: 'start',
  		value: function start() {
  			var self = this;
  			var update = function update() {
  				if (self._stopAtNextUpdate) {
  					self._status = Scheduler.Status.STOPPED;
  					return;
  				}
  				var state = self._runNextTasks();
  				if (state === Scheduler.Event.QUIT) {
  					self._status = Scheduler.Status.STOPPED;
  					return;
  				}
  				self._psychoJS.window.render();
  				requestAnimationFrame(update);
  			};
  			requestAnimationFrame(update);
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			this._status = Scheduler.Status.STOPPED;
  			this._stopAtNextTask = true;
  			this._stopAtNextUpdate = true;
  		}
  	}, {
  		key: '_runNextTasks',
  		value: function _runNextTasks() {
  			this._status = Scheduler.Status.RUNNING;
  			var state = Scheduler.Event.NEXT;
  			while (state === Scheduler.Event.NEXT) {
  				if (this._stopAtNextTask) return Scheduler.Event.QUIT;
  				if (typeof this._currentTask == 'undefined') {
  					if (this._taskList.length > 0) {
  						this._currentTask = this._taskList.shift();
  						this._currentArgs = this._argsList.shift();
  					}
  					else {
  							this._currentTask = undefined;
  							this._currentArgs = undefined;
  							return Scheduler.Event.QUIT;
  						}
  				}
  				if (this._currentTask instanceof Scheduler) {
  					state = this._currentTask._runNextTasks();
  					if (state === Scheduler.Event.QUIT) {
  						if (!this._psychoJS.experiment.experimentEnded) state = Scheduler.Event.NEXT;
  					}
  				}
  				else if (this._currentTask instanceof Function) {
  						state = this._currentTask.apply(this, toConsumableArray(this._currentArgs));
  					}
  					else {
  							console.log(this._currentTask);
  							throw { origin: 'Scheduler._runNextTasks', context: 'when running the scheduler\'s tasks', error: 'the next' + ' task has unknown type (neither a Scheduler nor a Function)' };
  						}
  				if (state !== Scheduler.Event.FLIP_REPEAT) {
  					this._currentTask = undefined;
  					this._currentArgs = undefined;
  				}
  			}
  			return state;
  		}
  	}, {
  		key: 'status',
  		get: function get$$1() {
  			return this._status;
  		}
  	}]);
  	return Scheduler;
  }();
  Scheduler.Event = {
  	NEXT: Symbol.for('NEXT'),
  	FLIP_REPEAT: Symbol.for('FLIP_REPEAT'),
  	FLIP_NEXT: Symbol.for('FLIP_NEXT'),
  	QUIT: Symbol.for('QUIT')
  };
  Scheduler.Status = {
  	RUNNING: Symbol.for('RUNNING'),
  	STOPPED: Symbol.for('STOPPED')
  };

  exports.MonotonicClock = MonotonicClock;
  exports.Clock = Clock;
  exports.CountdownTimer = CountdownTimer;
  exports.Color = Color;
  exports.ColorMixin = ColorMixin;
  exports.EventEmitter = EventEmitter;
  exports.Logger = Logger;
  exports.PsychObject = PsychObject;
  exports.Scheduler = Scheduler;
  exports.mix = mix;
  exports.promiseToTupple = promiseToTupple;
  exports.makeUuid = makeUuid;
  exports.getErrorStack = getErrorStack;
  exports.isEmpty = isEmpty;
  exports.detectBrowser = detectBrowser;
  exports.toNumerical = toNumerical;
  exports.IsPointInsidePolygon = IsPointInsidePolygon;
  exports.shuffle = shuffle;
  exports.getPositionFromObject = getPositionFromObject;
  exports.to_px = to_px;
  exports.to_norm = to_norm;
  exports.to_height = to_height;
  exports.to_win = to_win;
  exports.to_unit = to_unit;
  exports.to_pixiPoint = to_pixiPoint;
  exports.toString = toString;
  exports.isInt = isInt;
  exports.getUrlParameters = getUrlParameters;
  exports.addInfoFromUrl = addInfoFromUrl;
  exports.selectFromArray = selectFromArray;

  return exports;

}({}));
var data = (function (exports,PsychObject_js,Clock_js,util) {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var ExperimentHandler = function (_PsychObject) {
  	inherits(ExperimentHandler, _PsychObject);
  	createClass(ExperimentHandler, [{
  		key: 'experimentEnded',
  		get: function get$$1() {
  			return this._experimentEnded;
  		}
  		,
  		set: function set$$1(ended) {
  			this._experimentEnded = ended;
  		}
  	}]);
  	function ExperimentHandler() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    name = _ref.name,
  		    extraInfo = _ref.extraInfo;
  		classCallCheck(this, ExperimentHandler);
  		var _this = possibleConstructorReturn(this, (ExperimentHandler.__proto__ || Object.getPrototypeOf(ExperimentHandler)).call(this, psychoJS, name));
  		_this._addAttributes(ExperimentHandler, extraInfo);
  		_this._loops = [];
  		_this._unfinishedLoops = [];
  		_this._trialsKeys = [];
  		_this._trialsData = [];
  		_this._currentTrialData = {};
  		_this._experimentEnded = false;
  		return _this;
  	}
  	createClass(ExperimentHandler, [{
  		key: 'addLoop',
  		value: function addLoop(loop) {
  			this._loops.push(loop);
  			this._unfinishedLoops.push(loop);
  			loop.experimentHandler = this;
  		}
  	}, {
  		key: 'removeLoop',
  		value: function removeLoop(loop) {
  			var index = this._unfinishedLoops.indexOf(loop);
  			if (index !== -1) this._unfinishedLoops.splice(index, 1);
  		}
  	}, {
  		key: 'addData',
  		value: function addData(key, value) {
  			if (this._trialsKeys.indexOf(key) === -1) {
  				this._trialsKeys.push(key);
  			}
  			if (Array.isArray(value)) value = JSON.stringify(value);
  			this._currentTrialData[key] = value;
  		}
  	}, {
  		key: 'nextEntry',
  		value: function nextEntry() {
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = this._unfinishedLoops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var loop = _step.value;
  					var attributes = ExperimentHandler._getLoopAttributes(loop);
  					for (var _a in attributes) {
  						if (attributes.hasOwnProperty(_a)) this._currentTrialData[_a] = attributes[_a];
  					}
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  			for (var a in this.extraInfo) {
  				if (this.extraInfo.hasOwnProperty(a)) this._currentTrialData[a] = this.extraInfo[a];
  			}this._trialsData.push(this._currentTrialData);
  			this._currentTrialData = {};
  		}
  	}, {
  		key: 'save',
  		value: function () {
  			var _ref2 = asyncToGenerator(              regeneratorRuntime.mark(function _callee() {
  				var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  				    _ref3$attributes = _ref3.attributes,
  				    attributes = _ref3$attributes === undefined ? [] : _ref3$attributes;
  				var l, loop, loopAttributes, a, _a2, info, __experimentName, __participant, __session, __datetime, gitlabConfig, __projectId, worksheet, csv, key, documents, r, doc, h, _key;
  				return regeneratorRuntime.wrap(function _callee$(_context) {
  					while (1) {
  						switch (_context.prev = _context.next) {
  							case 0:
  								this._psychoJS.logger.info('[PsychoJS] Save experiment results.');
  								if (attributes.length === 0) {
  									attributes = this._trialsKeys.slice();
  									for (l = 0; l < this._loops.length; l++) {
  										loop = this._loops[l];
  										loopAttributes = ExperimentHandler._getLoopAttributes(loop);
  										for (a in loopAttributes) {
  											if (loopAttributes.hasOwnProperty(a)) attributes.push(a);
  										}
  									}
  									for (_a2 in this.extraInfo) {
  										if (this.extraInfo.hasOwnProperty(_a2)) attributes.push(_a2);
  									}
  								}
  								info = this.extraInfo;
  								__experimentName = typeof info.expName !== 'undefined' ? info.expName : this.psychoJS.config.experiment.name;
  								__participant = typeof info.participant === 'string' && info.participant.length > 0 ? info.participant : 'PARTICIPANT';
  								__session = typeof info.session === 'string' && info.session.length > 0 ? info.session : 'SESSION';
  								__datetime = typeof info.date !== 'undefined' ? info.date : Clock_js.MonotonicClock.getDateStr();
  								gitlabConfig = this._psychoJS.config.gitlab;
  								__projectId = typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined' ? gitlabConfig.projectId : undefined;
  								if (!(this._psychoJS.config.experiment.saveFormat === ExperimentHandler.SaveFormat.CSV)) {
  									_context.next = 18;
  									break;
  								}
  								worksheet = XLSX.utils.json_to_sheet(this._trialsData);
  								csv = XLSX.utils.sheet_to_csv(worksheet);
  								key = __participant + '_' + __experimentName + '_' + __datetime + '.csv';
  								_context.next = 15;
  								return this._psychoJS.serverManager.uploadData(key, csv);
  							case 15:
  								return _context.abrupt('return', _context.sent);
  							case 18:
  								if (!(this._psychoJS.config.experiment.saveFormat === ExperimentHandler.SaveFormat.DATABASE)) {
  									_context.next = 25;
  									break;
  								}
  								documents = [];
  								for (r = 0; r < this._trialsData.length; r++) {
  									doc = { __projectId: __projectId, __experimentName: __experimentName, __participant: __participant, __session: __session, __datetime: __datetime };
  									for (h = 0; h < attributes.length; h++) {
  										doc[attributes[h]] = this._trialsData[r][attributes[h]];
  									}documents.push(doc);
  								}
  								_key = 'results';
  								_context.next = 24;
  								return this._psychoJS.serverManager.uploadData(_key, JSON.stringify(documents));
  							case 24:
  								return _context.abrupt('return', _context.sent);
  							case 25:
  							case 'end':
  								return _context.stop();
  						}
  					}
  				}, _callee, this);
  			}));
  			function save() {
  				return _ref2.apply(this, arguments);
  			}
  			return save;
  		}()
  	}], [{
  		key: '_getLoopAttributes',
  		value: function _getLoopAttributes(loop) {
  			var loopName = loop['name'];
  			var properties = ['thisRepN', 'thisTrialN', 'thisN', 'thisIndex', 'stepSizeCurrent', 'ran', 'order'];
  			var attributes = {};
  			var _iteratorNormalCompletion2 = true;
  			var _didIteratorError2 = false;
  			var _iteratorError2 = undefined;
  			try {
  				for (var _iterator2 = properties[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  					var property = _step2.value;
  					for (var loopProperty in loop) {
  						if (loopProperty === property) {
  							if (property === 'stepSizeCurrent') var key = loopName + '.stepSize';else key = loopName + '.' + property;
  							attributes[key] = loop[property];
  						}
  					}
  				}
  			} catch (err) {
  				_didIteratorError2 = true;
  				_iteratorError2 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion2 && _iterator2.return) {
  						_iterator2.return();
  					}
  				} finally {
  					if (_didIteratorError2) {
  						throw _iteratorError2;
  					}
  				}
  			}
  			if (typeof loop.getCurrentTrial === 'function') {
  				var currentTrial = loop.getCurrentTrial();
  				for (var trialProperty in currentTrial) {
  					attributes[trialProperty] = currentTrial[trialProperty];
  				}
  			}
  			return attributes;
  		}
  	}]);
  	return ExperimentHandler;
  }(PsychObject_js.PsychObject);
  ExperimentHandler.SaveFormat = {
  	CSV: Symbol.for('CSV'),
  	DATABASE: Symbol.for('DATABASE')
  };

  var TrialHandler = function (_PsychObject) {
  	inherits(TrialHandler, _PsychObject);
  	createClass(TrialHandler, [{
  		key: 'experimentHandler',
  		get: function get$$1() {
  			return this._experimentHandler;
  		}
  		,
  		set: function set$$1(exp) {
  			this._experimentHandler = exp;
  		}
  	}]);
  	function TrialHandler() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    _ref$trialList = _ref.trialList,
  		    trialList = _ref$trialList === undefined ? [undefined] : _ref$trialList,
  		    nReps = _ref.nReps,
  		    _ref$method = _ref.method,
  		    method = _ref$method === undefined ? TrialHandler.Method.RANDOM : _ref$method,
  		    _ref$extraInfo = _ref.extraInfo,
  		    extraInfo = _ref$extraInfo === undefined ? [] : _ref$extraInfo,
  		    seed = _ref.seed,
  		    name = _ref.name,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? true : _ref$autoLog;
  		classCallCheck(this, TrialHandler);
  		var _this = possibleConstructorReturn(this, (TrialHandler.__proto__ || Object.getPrototypeOf(TrialHandler)).call(this, psychoJS));
  		_this._addAttributes(TrialHandler, trialList, nReps, method, extraInfo, seed, name, autoLog);
  		_this._prepareTrialList(trialList);
  		_this.nStim = _this.trialList.length;
  		_this.nTotal = _this.nReps * _this.nStim;
  		_this.nRemaining = _this.nTotal;
  		_this.thisRepN = 0;
  		_this.thisTrialN = -1;
  		_this.thisN = -1;
  		_this.thisIndex = 0;
  		_this.ran = 0;
  		_this.order = -1;
  		_this._prepareSequence();
  		_this._experimentHandler = null;
  		_this.thisTrial = null;
  		_this.finished = false;
  		return _this;
  	}
  	createClass(TrialHandler, [{
  		key: Symbol.iterator,
  		value: function value() {
  			var _this2 = this;
  			return {
  				next: function next() {
  					_this2.thisTrialN++;
  					_this2.thisN++;
  					_this2.nRemaining--;
  					if (_this2.thisTrialN === _this2.nStim) {
  						_this2.thisTrialN = 0;
  						_this2.thisRepN++;
  					}
  					if (_this2.thisRepN >= _this2.nReps) {
  						_this2.thisTrial = null;
  						return { done: true };
  					}
  					_this2.thisIndex = _this2._trialSequence[_this2.thisRepN][_this2.thisTrialN];
  					_this2.thisTrial = _this2.trialList[_this2.thisIndex];
  					_this2.ran = 1;
  					_this2.order = _this2.thisN;
  					return { value: _this2.thisTrial, done: false };
  				}
  			};
  		}
  	}, {
  		key: 'getTrialIndex',
  		value: function getTrialIndex() {
  			return this.thisIndex;
  		}
  	}, {
  		key: 'setTrialIndex',
  		value: function setTrialIndex(index) {
  			this.thisIndex = index;
  		}
  	}, {
  		key: 'getAttributes',
  		value: function getAttributes() {
  			if (!Array.isArray(this.trialList) || this.nStim == 0) return [];
  			var firstTrial = this.trialList[0];
  			if (!firstTrial) return [];
  			return Object.keys(this.trialList[0]);
  		}
  	}, {
  		key: 'getCurrentTrial',
  		value: function getCurrentTrial() {
  			return this.trialList[this.thisIndex];
  		}
  	}, {
  		key: 'getFutureTrial',
  		value: function getFutureTrial() {
  			var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  			if (this.thisIndex + n < 0 || n > this.nRemaining) return undefined;
  			return this.trialList[this.thisIndex + n];
  		}
  	}, {
  		key: 'getEarlierTrial',
  		value: function getEarlierTrial() {
  			var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  			return getFutureTrial(-abs(n));
  		}
  	}, {
  		key: 'addData',
  		value: function addData(key, value) {
  			if (this._experimentHandler) this._experimentHandler.addData(key, value);
  		}
  	}, {
  		key: '_prepareTrialList',
  		value: function _prepareTrialList(trialList) {
  			var response = { origin: 'TrialHandler._prepareTrialList', context: 'when preparing the trial list' };
  			if (typeof trialList === 'undefined') this.trialList = [undefined];
  			else if (Array.isArray(trialList)) {
  					if (trialList.length === 0) this.trialList = [undefined];
  				}
  				else if (typeof trialList === 'string') this.trialList = TrialHandler.importConditions(this.psychoJS.serverManager, trialList);
  					else throw _extends({}, response, { error: 'unable to prepare trial list: unknown type: ' + (typeof trialList === 'undefined' ? 'undefined' : _typeof(trialList)) });
  		}
  	}, {
  		key: '_prepareSequence',
  		value: function _prepareSequence() {
  			var response = { origin: 'TrialHandler._prepareSequence', context: 'when preparing a sequence of trials' };
  			var indices = Array.from(this.trialList.keys());
  			if (typeof this.seed !== 'undefined') Math.seedrandom(this.seed);else Math.seedrandom();
  			if (this.method === TrialHandler.Method.SEQUENTIAL) {
  				this._trialSequence = Array(this.nReps).fill(indices);
  			} else if (this.method === TrialHandler.Method.RANDOM) {
  				this._trialSequence = [];
  				for (var i = 0; i < this.nReps; ++i) {
  					this._trialSequence.push(util.shuffle(indices.slice()));
  				}
  			} else if (this.method === TrialHandler.Method.FULL_RANDOM) {
  				var flatSequence = [];
  				for (var _i = 0; _i < this.nReps; ++_i) {
  					flatSequence.push.apply(flatSequence, indices);
  				}
  				util.shuffle(flatSequence);
  				this._trialSequence = [];
  				for (var _i2 = 0; _i2 < this.nReps; _i2++) {
  					this._trialSequence.push(flatSequence.slice(_i2 * this.nStim, (_i2 + 1) * this.nStim));
  				}
  			} else {
  				throw _extends({}, response, { error: 'unknown method' });
  			}
  			return this._trialSequence;
  		}
  	}], [{
  		key: 'importConditions',
  		value: function importConditions(serverManager, resourceName) {
  			var selection = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  			try {
  				var resourceExtension = resourceName.split('.').pop();
  				if (['csv', 'odp', 'xls', 'xlsx'].indexOf(resourceExtension) > -1) {
  					var resourceValue = serverManager.getResource(resourceName);
  					var workbook = XLSX.read(new Uint8Array(resourceValue), { type: "array" });
  					if (workbook.SheetNames.length === 0) throw 'workbook should contain at least one worksheet';
  					var sheetName = workbook.SheetNames[0];
  					var worksheet = workbook.Sheets[sheetName];
  					var sheet = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false });
  					var fields = sheet.shift();
  					var selectedRows = selection === null ? sheet : util.selectFromArray(sheet, selection);
  					var trialList = new Array(selectedRows.length - 1);
  					for (var r = 0; r < selectedRows.length; ++r) {
  						var row = selectedRows[r];
  						var trial = {};
  						for (var l = 0; l < fields.length; ++l) {
  							var value = row[l];
  							if (typeof value === 'string') {
  								var numericalValue = Number.parseFloat(value);
  								if (!Number.isNaN(numericalValue)) value = numericalValue;
  							}
  							trial[fields[l]] = value;
  						}
  						trialList[r] = trial;
  					}
  					return trialList;
  				} else {
  					throw 'extension: ' + resourceExtension + ' currently not supported.';
  				}
  			} catch (error) {
  				throw { origin: 'TrialHandler.importConditions', context: 'when importing condition: ' + resourceName, error: error };
  			}
  		}
  	}]);
  	return TrialHandler;
  }(PsychObject_js.PsychObject);
  TrialHandler.Method = {
  	SEQUENTIAL: Symbol.for('SEQUENTIAL'),
  	RANDOM: Symbol.for('RANDOM'),
  	FULL_RANDOM: Symbol.for('FULL_RANDOM')
  };

  exports.ExperimentHandler = ExperimentHandler;
  exports.TrialHandler = TrialHandler;

  return exports;

}({},util,util,util));
var core = (function (exports,PsychObject_js,util$1,Color_js,Clock_js,Scheduler_js,ExperimentHandler_js,Logger_js) {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var ServerManager = function (_PsychObject) {
  	inherits(ServerManager, _PsychObject);
  	function ServerManager() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? false : _ref$autoLog;
  		classCallCheck(this, ServerManager);
  		var _this = possibleConstructorReturn(this, (ServerManager.__proto__ || Object.getPrototypeOf(ServerManager)).call(this, psychoJS));
  		_this._session = {};
  		_this._resourceDirectory = undefined;
  		_this._resourcesMap = new Map();
  		_this._nbResources = -1;
  		_this._howls = undefined;
  		_this._addAttributes(ServerManager, autoLog);
  		_this._addAttribute('status', ServerManager.Status.READY);
  		return _this;
  	}
  	createClass(ServerManager, [{
  		key: 'getConfiguration',
  		value: function getConfiguration(configURL) {
  			var response = { origin: 'ServerManager.getConfiguration', context: 'when reading the configuration file: ' + configURL };
  			this._psychoJS.logger.debug('reading the configuration file: ' + configURL);
  			return new Promise(function (resolve, reject) {
  				$.get(configURL, 'json').done(function (config, textStatus) {
  					resolve(_extends({}, response, { config: config }));
  				}).fail(function (jqXHR, textStatus, errorThrown) {
  					reject(_extends({}, response, { error: errorThrown }));
  				});
  			});
  		}
  	}, {
  		key: 'openSession',
  		value: function openSession() {
  			var _this2 = this;
  			var response = { origin: 'ServerManager.openSession', context: 'when opening a session for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('opening a session for experiment: ' + this._psychoJS.config.experiment.name);
  			this.setStatus(ServerManager.Status.BUSY);
  			var data = {
  				experimentFullPath: this._psychoJS.config.experiment.fullpath
  			};
  			var gitlabConfig = this._psychoJS.config.gitlab;
  			if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined') data.projectId = gitlabConfig.projectId;
  			var self = this;
  			return new Promise(function (resolve, reject) {
  				$.post(_this2._psychoJS.config.psychoJsManager.URL + '?command=open_session', data, null, 'json').done(function (data, textStatus) {
  					if ('error' in data) {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: data.error }));
  					}
  					if ('token' in data) {
  						self._psychoJS.config.experiment.token = data.token;
  						self.setStatus(ServerManager.Status.READY);
  						resolve(_extends({}, response, { token: data.token }));
  					} else {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: 'unexpected answer from server: no token' }));
  					}
  				}).fail(function (jqXHR, textStatus, errorThrown) {
  					self.setStatus(ServerManager.Status.ERROR);
  					reject(_extends({}, response, { error: 'request error: ' + textStatus }));
  				});
  			});
  		}
  	}, {
  		key: 'closeSession',
  		value: function closeSession() {
  			var _this3 = this;
  			var isCompleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  			var response = { origin: 'ServerManager.closeSession', context: 'when closing the session for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('closing the session for experiment: ' + this._psychoJS.config.experiment.name);
  			this.setStatus(ServerManager.Status.BUSY);
  			var data = {
  				experimentFullPath: this._psychoJS.config.experiment.fullpath,
  				'token': this._psychoJS.config.experiment.token,
  				'isCompleted': isCompleted
  			};
  			var gitlabConfig = this._psychoJS.config.gitlab;
  			if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined') data.projectId = gitlabConfig.projectId;
  			var self = this;
  			return new Promise(function (resolve, reject) {
  				$.post(_this3._psychoJS.config.psychoJsManager.URL + '?command=close_session', data, null, 'json').done(function (data, textStatus) {
  					if ('error' in data) {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: data.error }));
  					}
  					self.setStatus(ServerManager.Status.READY);
  					resolve(_extends({}, response, { data: data }));
  				}).fail(function (jqXHR, textStatus, errorThrown) {
  					self.setStatus(ServerManager.Status.ERROR);
  					reject(_extends({}, response, { error: errorThrown }));
  				});
  			});
  		}
  	}, {
  		key: 'getResource',
  		value: function getResource(resourceName) {
  			var response = { origin: 'ServerManager.getResource', context: 'when getting the value of resource: ' + resourceName };
  			var resourceValue = this._resourcesMap.get(resourceName);
  			if (typeof resourceValue === 'undefined') throw _extends({}, response, { error: 'unknown resource' });
  			return resourceValue;
  		}
  	}, {
  		key: 'setStatus',
  		value: function setStatus(status) {
  			var response = { origin: 'ServerManager.setStatus', context: 'when changing the status of the server manager to: ' + util$1.toString(status) };
  			var statusKey = (typeof status === 'undefined' ? 'undefined' : _typeof(status)) === 'symbol' ? Symbol.keyFor(status) : null;
  			if (!statusKey) throw _extends({}, response, { error: 'status must be a symbol' });
  			if (!ServerManager.Status.hasOwnProperty(statusKey)) throw _extends({}, response, { error: 'unknown status' });
  			this._status = status;
  			this.emit(ServerManager.Event.STATUS, this._status);
  			return this._status;
  		}
  	}, {
  		key: 'resetStatus',
  		value: function resetStatus() {
  			return this.setStatus(ServerManager.Status.READY);
  		}
  	}, {
  		key: 'downloadResources',
  		value: function downloadResources() {
  			var _this4 = this;
  			var response = { origin: 'ServerManager.downloadResources', context: 'when downloading the resources for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('downloading the resources for experiment: ' + this._psychoJS.config.experiment.name);
  			var self = this;
  			var download = function () {
  				var _ref2 = asyncToGenerator(              regeneratorRuntime.mark(function _callee() {
  					var _ref3, resources, resourceDirectory, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, resource;
  					return regeneratorRuntime.wrap(function _callee$(_context) {
  						while (1) {
  							switch (_context.prev = _context.next) {
  								case 0:
  									_context.prev = 0;
  									_context.next = 3;
  									return self._listResources();
  								case 3:
  									_ref3 = _context.sent;
  									resources = _ref3.resources;
  									resourceDirectory = _ref3.resourceDirectory;
  									self._psychoJS.config.experiment.resourceDirectory = resourceDirectory;
  									_iteratorNormalCompletion = true;
  									_didIteratorError = false;
  									_iteratorError = undefined;
  									_context.prev = 10;
  									for (_iterator = resources[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  										resource = _step.value;
  										self._resourcesMap.set(resource, 'undefined');
  									}_context.next = 18;
  									break;
  								case 14:
  									_context.prev = 14;
  									_context.t0 = _context['catch'](10);
  									_didIteratorError = true;
  									_iteratorError = _context.t0;
  								case 18:
  									_context.prev = 18;
  									_context.prev = 19;
  									if (!_iteratorNormalCompletion && _iterator.return) {
  										_iterator.return();
  									}
  								case 21:
  									_context.prev = 21;
  									if (!_didIteratorError) {
  										_context.next = 24;
  										break;
  									}
  									throw _iteratorError;
  								case 24:
  									return _context.finish(21);
  								case 25:
  									return _context.finish(18);
  								case 26:
  									self._nbResources = resources.length;
  									self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCES_REGISTERED, count: self._nbResources });
  									_context.next = 30;
  									return self._downloadRegisteredResources();
  								case 30:
  									_context.next = 36;
  									break;
  								case 32:
  									_context.prev = 32;
  									_context.t1 = _context['catch'](0);
  									console.log('error', _context.t1);
  									throw _extends({}, response, { error: _context.t1 });
  								case 36:
  								case 'end':
  									return _context.stop();
  							}
  						}
  					}, _callee, _this4, [[0, 32], [10, 14, 18, 26], [19,, 21, 25]]);
  				}));
  				return function download() {
  					return _ref2.apply(this, arguments);
  				};
  			}();
  			download();
  		}
  	}, {
  		key: 'uploadData',
  		value: function uploadData(key, value) {
  			var _this5 = this;
  			var response = { origin: 'ServerManager.uploadData', context: 'when uploading participant\'s results for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('uploading data for experiment: ' + this._psychoJS.config.experiment.name);
  			this.setStatus(ServerManager.Status.BUSY);
  			var data = {
  				experimentFullPath: this._psychoJS.config.experiment.fullpath,
  				token: this._psychoJS.config.experiment.token,
  				key: key,
  				value: value,
  				saveFormat: Symbol.keyFor(this._psychoJS.config.experiment.saveFormat)
  			};
  			var gitlabConfig = this._psychoJS.config.gitlab;
  			if (typeof gitlabConfig !== 'undefined' && typeof gitlabConfig.projectId !== 'undefined') data.projectId = gitlabConfig.projectId;
  			var self = this;
  			return new Promise(function (resolve, reject) {
  				$.post(_this5._psychoJS.config.psychoJsManager.URL + '?command=save_data', data, null, 'json').done(function (data, textStatus) {
  					if ('error' in data) {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: data.error }));
  					}
  					self.setStatus(ServerManager.Status.READY);
  					resolve(_extends({}, response, { data: data }));
  				}).fail(function (jqXHR, textStatus, errorThrown) {
  					self.setStatus(ServerManager.Status.ERROR);
  					reject(_extends({}, response, { error: errorThrown }));
  				});
  			});
  		}
  	}, {
  		key: '_listResources',
  		value: function _listResources() {
  			var response = { origin: 'ServerManager._listResourcesSession', context: 'when listing the resources for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('listing the resources for experiment: ' + this._psychoJS.config.experiment.name);
  			this.setStatus(ServerManager.Status.BUSY);
  			var self = this;
  			return new Promise(function (resolve, reject) {
  				$.get(self._psychoJS.config.psychoJsManager.URL, {
  					'command': 'list_resources',
  					'experimentFullPath': self._psychoJS.config.experiment.fullpath,
  					'token': self._psychoJS.config.experiment.token
  				}, null, 'json').done(function (data, textStatus) {
  					if ('error' in data) reject(_extends({}, response, { error: data.error }));
  					if (!('resources' in data)) {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: 'unexpected answer from server: no resources' }));
  					}
  					if (!('resourceDirectory' in data)) {
  						self.setStatus(ServerManager.Status.ERROR);
  						reject(_extends({}, response, { error: 'unexpected answer from server: no resourceDirectory' }));
  					}
  					self.setStatus(ServerManager.Status.READY);
  					resolve(_extends({}, response, { resources: data.resources, resourceDirectory: data.resourceDirectory }));
  				}).fail(function (jqXHR, textStatus, errorThrown) {
  					self.setStatus(ServerManager.Status.ERROR);
  					reject(_extends({}, response, { error: errorThrown }));
  				});
  			});
  		}
  	}, {
  		key: '_downloadRegisteredResources',
  		value: function _downloadRegisteredResources() {
  			var _this6 = this;
  			var response = { origin: 'ServerManager._downloadResources', context: 'when downloading the resources for experiment: ' + this._psychoJS.config.experiment.name };
  			this._psychoJS.logger.debug('downloading the registered resources for experiment: ' + this._psychoJS.config.experiment.name);
  			this.setStatus(ServerManager.Status.BUSY);
  			this._nbLoadedResources = 0;
  			this._resourceQueue = new createjs.LoadQueue(true, this._psychoJS.config.experiment.resourceDirectory);
  			var self = this;
  			this._resourceQueue.addEventListener("filestart", function (event) {
  				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOADING_RESOURCE, resource: event.item.id });
  			});
  			this._resourceQueue.addEventListener("fileload", function (event) {
  				++self._nbLoadedResources;
  				self._resourcesMap.set(event.item.id, event.result);
  				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCE_DOWNLOADED, resource: event.item.id });
  			});
  			this._resourceQueue.addEventListener("complete", function (event) {
  				self._resourceQueue.close();
  				if (self._nbLoadedResources === self._nbResources) {
  					self.setStatus(ServerManager.Status.READY);
  					self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
  				}
  			});
  			this._resourceQueue.addEventListener("error", function (event) {
  				self.setStatus(ServerManager.Status.ERROR);
  				var resourceId = typeof event.data !== 'undefined' ? event.data.id : 'UNKNOWN RESOURCE';
  				throw _extends({}, response, { error: 'unable to download resource: ' + resourceId + ' (' + event.title + ')' });
  			});
  			var manifest = [];
  			var soundFilenames = [];
  			var _iteratorNormalCompletion2 = true;
  			var _didIteratorError2 = false;
  			var _iteratorError2 = undefined;
  			try {
  				for (var _iterator2 = this._resourcesMap.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  					var resourceName = _step2.value;
  					var resourceExtension = resourceName.split('.').pop();
  					if (['csv', 'odp', 'xls', 'xlsx'].indexOf(resourceExtension) > -1) manifest.push({ id: resourceName, src: resourceName, type: createjs.Types.BINARY });
  					else if (['mp3', 'mpeg', 'opus', 'ogg', 'oga', 'wav', 'aac', 'caf', 'm4a', 'weba', 'dolby', 'flac'].indexOf(resourceExtension) > -1) soundFilenames.push(resourceName);
  						else manifest.push({ id: resourceName, src: resourceName });
  				}
  			} catch (err) {
  				_didIteratorError2 = true;
  				_iteratorError2 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion2 && _iterator2.return) {
  						_iterator2.return();
  					}
  				} finally {
  					if (_didIteratorError2) {
  						throw _iteratorError2;
  					}
  				}
  			}
  			if (manifest.length > 0) this._resourceQueue.loadManifest(manifest);else {
  				if (this._nbLoadedResources === this._nbResources) {
  					this.setStatus(ServerManager.Status.READY);
  					this.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
  				}
  			}
  			var _loop = function _loop(soundFilename) {
  				var resourcePath = _this6._psychoJS.config.experiment.resourceDirectory + soundFilename;
  				self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOADING_RESOURCE, resource: soundFilename });
  				var howl = new Howl({
  					src: resourcePath,
  					preload: false,
  					autoplay: false
  				});
  				howl.on('load', function (event) {
  					++self._nbLoadedResources;
  					self._resourcesMap.set(soundFilename, howl);
  					self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.RESOURCE_DOWNLOADED, resource: soundFilename });
  					if (self._nbLoadedResources === self._nbResources) {
  						self.setStatus(ServerManager.Status.READY);
  						self.emit(ServerManager.Event.RESOURCE, { message: ServerManager.Event.DOWNLOAD_COMPLETED });
  					}
  				});
  				howl.on('loaderror', function (id, error) {
  					throw _extends({}, response, { error: 'unable to download resource: ' + soundFilename + ' (' + util$1.toString(error) + ')' });
  				});
  				howl.load();
  			};
  			var _iteratorNormalCompletion3 = true;
  			var _didIteratorError3 = false;
  			var _iteratorError3 = undefined;
  			try {
  				for (var _iterator3 = soundFilenames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
  					var soundFilename = _step3.value;
  					_loop(soundFilename);
  				}
  			} catch (err) {
  				_didIteratorError3 = true;
  				_iteratorError3 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion3 && _iterator3.return) {
  						_iterator3.return();
  					}
  				} finally {
  					if (_didIteratorError3) {
  						throw _iteratorError3;
  					}
  				}
  			}
  		}
  	}]);
  	return ServerManager;
  }(PsychObject_js.PsychObject);
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

  var Window = function (_PsychObject) {
  	inherits(Window, _PsychObject);
  	createClass(Window, [{
  		key: 'monitorFramePeriod',
  		get: function get$$1() {
  			return this._monitorFramePeriod;
  		}
  	}]);
  	function Window() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    name = _ref.name,
  		    _ref$fullscr = _ref.fullscr,
  		    fullscr = _ref$fullscr === undefined ? false : _ref$fullscr,
  		    _ref$color = _ref.color,
  		    color = _ref$color === undefined ? new Color_js.Color('black') : _ref$color,
  		    _ref$units = _ref.units,
  		    units = _ref$units === undefined ? 'pix' : _ref$units,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? true : _ref$autoLog;
  		classCallCheck(this, Window);
  		var _this = possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, psychoJS, name));
  		_this._msgToBeLogged = [];
  		_this._drawList = [];
  		_this._addAttributes(Window, fullscr, color, units, autoLog);
  		_this._addAttribute('size', []);
  		_this._setupPixi();
  		_this._monitorFramePeriod = 1.0 / _this.getActualFrameRate();
  		_this._frameCount = 0;
  		_this._flipCallbacks = [];
  		return _this;
  	}
  	createClass(Window, [{
  		key: 'close',
  		value: function close() {
  			if (document.body.contains(this._renderer.view)) document.body.removeChild(this._renderer.view);
  			window.removeEventListener('resize', this._resizeCallback);
  			window.removeEventListener('orientationchange', this._resizeCallback);
  		}
  	}, {
  		key: 'getActualFrameRate',
  		value: function getActualFrameRate() {
  			return 60.0;
  		}
  	}, {
  		key: 'adjustScreenSize',
  		value: function adjustScreenSize() {
  			this._windowAlreadyInFullScreen = !window.screenTop && !window.screenY;
  			if (this.fullscr && !this._windowAlreadyInFullScreen) {
  				this._psychoJS.logger.debug('Resizing Window: ', this._name, 'to full screen.');
  				if (typeof document.documentElement.requestFullscreen === 'function') document.documentElement.requestFullscreen();else if (typeof document.documentElement.mozRequestFullScreen === 'function') document.documentElement.mozRequestFullScreen();else if (typeof document.documentElement.webkitRequestFullscreen === 'function') document.documentElement.webkitRequestFullscreen();else if (typeof document.documentElement.msRequestFullscreen === 'function') document.documentElement.msRequestFullscreen();else this.psychoJS.logger.warn('Unable to go fullscreen.');
  				this._needUpdate = true;
  				var _iteratorNormalCompletion = true;
  				var _didIteratorError = false;
  				var _iteratorError = undefined;
  				try {
  					for (var _iterator = this._drawList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  						var stimulus = _step.value;
  						stimulus._needUpdate = true;
  					}
  				} catch (err) {
  					_didIteratorError = true;
  					_iteratorError = err;
  				} finally {
  					try {
  						if (!_iteratorNormalCompletion && _iterator.return) {
  							_iterator.return();
  						}
  					} finally {
  						if (_didIteratorError) {
  							throw _iteratorError;
  						}
  					}
  				}
  			}
  		}
  	}, {
  		key: 'closeFullScreen',
  		value: function closeFullScreen() {
  			if (this._windowAlreadyInFullScreen) return;
  			var windowInFullScreen = !window.screenTop && !window.screenY;
  			if (this.fullscr && windowInFullScreen) {
  				this._psychoJS.logger.debug('Resizing Window: ', this._name, 'back from full screen.');
  				if (typeof document.exitFullscreen === 'function') document.exitFullscreen();else if (typeof document.mozCancelFullScreen === 'function') document.mozCancelFullScreen();else if (typeof document.webkitExitFullscreen === 'function') document.webkitExitFullscreen();else if (typeof document.msExitFullscreen === 'function') document.msExitFullscreen();
  			}
  		}
  	}, {
  		key: 'logOnFlip',
  		value: function logOnFlip() {
  			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  			    msg = _ref2.msg,
  			    level = _ref2.level,
  			    _ref2$obj = _ref2.obj,
  			    obj = _ref2$obj === undefined ? undefined : _ref2$obj;
  			this._msgToBeLogged.push({ msg: msg, level: level, obj: obj });
  		}
  	}, {
  		key: 'callOnFlip',
  		value: function callOnFlip(flipCallback) {
  			for (var _len = arguments.length, flipCallbackArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  				flipCallbackArgs[_key - 1] = arguments[_key];
  			}
  			this._flipCallbacks.push({ function: flipCallback, arguments: flipCallbackArgs });
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			this._frameCount++;
  			this._renderer.render(this._rootContainer);
  			this._renderer.gl.readPixels(0, 0, 1, 1, this._renderer.gl.RGBA, this._renderer.gl.UNSIGNED_BYTE, new Uint8Array(4));
  			this._writeLogOnFlip();
  			var _iteratorNormalCompletion2 = true;
  			var _didIteratorError2 = false;
  			var _iteratorError2 = undefined;
  			try {
  				for (var _iterator2 = this._flipCallbacks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  					var callback = _step2.value;
  					callback['function'].apply(callback, toConsumableArray(callback['arguments']));
  				}
  			} catch (err) {
  				_didIteratorError2 = true;
  				_iteratorError2 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion2 && _iterator2.return) {
  						_iterator2.return();
  					}
  				} finally {
  					if (_didIteratorError2) {
  						throw _iteratorError2;
  					}
  				}
  			}
  			this._flipCallbacks = [];
  			this._refresh();
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (this._needUpdate) {
  				this._renderer.backgroundColor = this._color.int;
  				document.body.style.backgroundColor = this._color.hex;
  				this._needUpdate = false;
  			}
  		}
  	}, {
  		key: '_refresh',
  		value: function _refresh() {
  			this._updateIfNeeded();
  			var _iteratorNormalCompletion3 = true;
  			var _didIteratorError3 = false;
  			var _iteratorError3 = undefined;
  			try {
  				for (var _iterator3 = this._drawList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
  					var stimulus = _step3.value;
  					if (stimulus._needUpdate) {
  						this._rootContainer.removeChild(stimulus._pixi);
  						stimulus._updateIfNeeded();
  						this._rootContainer.addChild(stimulus._pixi);
  					}
  				}
  			} catch (err) {
  				_didIteratorError3 = true;
  				_iteratorError3 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion3 && _iterator3.return) {
  						_iterator3.return();
  					}
  				} finally {
  					if (_didIteratorError3) {
  						throw _iteratorError3;
  					}
  				}
  			}
  		}
  	}, {
  		key: '_fullRefresh',
  		value: function _fullRefresh() {
  			this._needUpdate = true;
  			var _iteratorNormalCompletion4 = true;
  			var _didIteratorError4 = false;
  			var _iteratorError4 = undefined;
  			try {
  				for (var _iterator4 = this._drawList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
  					var stimulus = _step4.value;
  					stimulus.refresh();
  				}
  			} catch (err) {
  				_didIteratorError4 = true;
  				_iteratorError4 = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion4 && _iterator4.return) {
  						_iterator4.return();
  					}
  				} finally {
  					if (_didIteratorError4) {
  						throw _iteratorError4;
  					}
  				}
  			}
  			this._refresh();
  		}
  	}, {
  		key: '_setupPixi',
  		value: function _setupPixi() {
  			var _this2 = this;
  			this._size[0] = window.innerWidth;
  			this._size[1] = window.innerHeight;
  			this._renderer = PIXI.autoDetectRenderer(this._size[0], this._size[1], {
  				backgroundColor: this.color.int
  			});
  			this._renderer.view.style["transform"] = "translatez(0)";
  			this._renderer.view.style.position = "absolute";
  			document.body.appendChild(this._renderer.view);
  			document.body.style.backgroundColor = this._color.hex;
  			this._rootContainer = new PIXI.Container();
  			this._rootContainer.interactive = true;
  			Window._resizePixiRenderer(this);
  			this.psychoJS.eventManager.addMouseListeners(this._renderer);
  			this._resizeCallback = function (e) {
  				Window._resizePixiRenderer(_this2, e);
  				_this2._fullRefresh();
  			};
  			window.addEventListener('resize', this._resizeCallback);
  			window.addEventListener('orientationchange', this._resizeCallback);
  		}
  	}, {
  		key: '_writeLogOnFlip',
  		value: function _writeLogOnFlip() {
  			var logTime = Clock_js.MonotonicClock.getReferenceTime();
  			for (var i = 0; i < this._msgToBeLogged.length; ++i) {
  				var entry = this._msgToBeLogged[i];
  				this._psychoJS.logger.log(entry.msg, entry.level, logTime, entry.obj);
  			}
  			this._msgToBeLogged = [];
  		}
  	}], [{
  		key: '_resizePixiRenderer',
  		value: function _resizePixiRenderer(pjsWindow, event) {
  			pjsWindow._psychoJS.logger.debug('resizing Window: ', pjsWindow._name, 'event:', JSON.stringify(event));
  			pjsWindow._size[0] = window.innerWidth;
  			pjsWindow._size[1] = window.innerHeight;
  			pjsWindow._renderer.view.style.width = pjsWindow._size[0] + 'px';
  			pjsWindow._renderer.view.style.height = pjsWindow._size[1] + 'px';
  			pjsWindow._renderer.view.style.left = '0px';
  			pjsWindow._renderer.view.style.top = '0px';
  			pjsWindow._renderer.resize(pjsWindow._size[0], pjsWindow._size[1]);
  			pjsWindow._rootContainer.position.x = pjsWindow._size[0] / 2.0;
  			pjsWindow._rootContainer.position.y = pjsWindow._size[1] / 2.0;
  			pjsWindow._rootContainer.scale.y = -1;
  		}
  	}]);
  	return Window;
  }(PsychObject_js.PsychObject);

  var GUI = function () {
  	createClass(GUI, [{
  		key: 'dialogComponent',
  		get: function get$$1() {
  			return this._dialogComponent;
  		}
  	}]);
  	function GUI(psychoJS) {
  		var _this = this;
  		classCallCheck(this, GUI);
  		this._psychoJS = psychoJS;
  		psychoJS.serverManager.on(ServerManager.Event.RESOURCE, function (signal) {
  			_this._onResourceEvents(signal);
  		});
  		this._dialogScalingFactor = 0;
  	}
  	createClass(GUI, [{
  		key: 'DlgFromDict',
  		value: function DlgFromDict(_ref) {
  			var _this2 = this;
  			var dictionary = _ref.dictionary,
  			    title = _ref.title;
  			var infoFromUrl = util$1.getUrlParameters();
  			this._progressMsg = '&nbsp;';
  			this._progressBarMax = 0;
  			this._allResourcesDownloaded = false;
  			this._requiredKeys = [];
  			this._nbSetRequiredKeys = 0;
  			this._dialogComponent = {};
  			this._dialogComponent.status = PsychoJS.Status.NOT_STARTED;
  			var dialogClock = new Clock_js.Clock();
  			var self = this;
  			return function () {
  				var t = dialogClock.getTime();
  				if (t >= 0.0 && self._dialogComponent.status === PsychoJS.Status.NOT_STARTED) {
  					self._dialogComponent.tStart = t;
  					self._dialogComponent.status = PsychoJS.Status.STARTED;
  					var htmlCode = '<div id="expDialog" title="' + title + '">' +
  					'<p class="validateTips">Fields marked with an asterisk (*) are required.</p>';
  					htmlCode += '<form>';
  					for (var key in dictionary) {
  						var value = dictionary[key];
  						var keyId = key + '_id';
  						var inUrl = false;
  						var cleanedDictKey = key.trim().toLowerCase();
  						var _iteratorNormalCompletion = true;
  						var _didIteratorError = false;
  						var _iteratorError = undefined;
  						try {
  							for (var _iterator = infoFromUrl[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  								var _ref2 = _step.value;
  								var _ref3 = slicedToArray(_ref2, 2);
  								var urlKey = _ref3[0];
  								var urlValue = _ref3[1];
  								var cleanedUrlKey = urlKey.trim().toLowerCase();
  								if (cleanedUrlKey === cleanedDictKey) {
  									inUrl = true;
  									break;
  								}
  							}
  						} catch (err) {
  							_didIteratorError = true;
  							_iteratorError = err;
  						} finally {
  							try {
  								if (!_iteratorNormalCompletion && _iterator.return) {
  									_iterator.return();
  								}
  							} finally {
  								if (_didIteratorError) {
  									throw _iteratorError;
  								}
  							}
  						}
  						if (!inUrl) {
  							htmlCode += '<label for="' + key + '">' + key + '</label>';
  							if (key.slice(-1) === '*') self._requiredKeys.push(key);
  							if (Array.isArray(value)) {
  								htmlCode += '<select name="' + key + '" id="' + keyId + '" class="text ui-widget-content' + ' ui-corner-all">';
  								if (key.slice(-1) === '*') htmlCode += '<option disabled selected>...</option>';
  								var _iteratorNormalCompletion2 = true;
  								var _didIteratorError2 = false;
  								var _iteratorError2 = undefined;
  								try {
  									for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  										var option = _step2.value;
  										htmlCode += '<option>' + option + '</option>';
  									}
  								} catch (err) {
  									_didIteratorError2 = true;
  									_iteratorError2 = err;
  								} finally {
  									try {
  										if (!_iteratorNormalCompletion2 && _iterator2.return) {
  											_iterator2.return();
  										}
  									} finally {
  										if (_didIteratorError2) {
  											throw _iteratorError2;
  										}
  									}
  								}
  								htmlCode += '</select>';
  								$('#' + keyId).selectmenu({ classes: {} });
  							}
  							else
  								htmlCode += '<input type="text" name="' + key + '" id="' + keyId + '" value="' + value + '" class="text ui-widget-content ui-corner-all">';
  						}
  					}
  					htmlCode += '</form>';
  					htmlCode += '<hr><div id="progressMsg" class="progress">' + self._progressMsg + '</div>';
  					htmlCode += '<div id="progressbar"></div></div>';
  					var dialogElement = document.getElementById('root');
  					dialogElement.innerHTML = htmlCode;
  					var _iteratorNormalCompletion3 = true;
  					var _didIteratorError3 = false;
  					var _iteratorError3 = undefined;
  					try {
  						for (var _iterator3 = _this2._requiredKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
  							var _key = _step3.value;
  							var _keyId = _key + '_id';
  							var input = document.getElementById(_keyId);
  							if (input) input.onchange = function (event) {
  								return GUI._onKeyChange(self, event);
  							};
  						}
  					} catch (err) {
  						_didIteratorError3 = true;
  						_iteratorError3 = err;
  					} finally {
  						try {
  							if (!_iteratorNormalCompletion3 && _iterator3.return) {
  								_iterator3.return();
  							}
  						} finally {
  							if (_didIteratorError3) {
  								throw _iteratorError3;
  							}
  						}
  					}
  					self._dialogComponent.button = 'Cancel';
  					self._estimateDialogScalingFactor();
  					var dialogSize = self._getDialogSize();
  					$("#expDialog").dialog({
  						width: dialogSize[0],
  						maxHeight: dialogSize[1],
  						autoOpen: true,
  						modal: true,
  						closeOnEscape: false,
  						buttons: [{
  							id: "buttonOk",
  							text: "Ok",
  							click: function click() {
  								for (var _key2 in dictionary) {
  									var input = document.getElementById(_key2 + "_id");
  									if (input) dictionary[_key2] = input.value;
  								}
  								self._dialogComponent.button = 'OK';
  								$("#expDialog").dialog("close");
  								self._psychoJS.window.adjustScreenSize();
  							}
  						}, {
  							id: "buttonCancel",
  							text: "Cancel",
  							click: function click() {
  								self._dialogComponent.button = 'Cancel';
  								$("#expDialog").dialog("close");
  							}
  						}],
  						open: self._dialogOpen('#expDialog'),
  						close: function close() {
  							self._dialogComponent.status = PsychoJS.Status.FINISHED;
  						}
  					})
  					.prev(".ui-dialog-titlebar").css("background", "green");
  					self._updateOkButtonStatus();
  					self._dialogResize('#expDialog');
  					$("#progressbar").progressbar({ value: self._progressBarCurrentIncrement });
  					$("#progressbar").progressbar("option", "max", self._progressBarMax);
  				}
  				if (self._dialogComponent.status === PsychoJS.Status.FINISHED) return Scheduler_js.Scheduler.Event.NEXT;else return Scheduler_js.Scheduler.Event.FLIP_REPEAT;
  			};
  		}
  	}, {
  		key: 'dialog',
  		value: function dialog() {
  			var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  			    message = _ref4.message,
  			    warning = _ref4.warning,
  			    error = _ref4.error,
  			    _ref4$showOK = _ref4.showOK,
  			    showOK = _ref4$showOK === undefined ? true : _ref4$showOK,
  			    onOK = _ref4.onOK;
  			this.destroyDialog();
  			var htmlCode = void 0;
  			var titleColour = void 0;
  			if (typeof error !== 'undefined') {
  				this._psychoJS.logger.fatal(util$1.toString(error));
  				htmlCode = '<div id="msgDialog" title="Error">';
  				htmlCode += '<p class="validateTips">Unfortunately we encountered an error:</p>';
  				htmlCode += '<ul>';
  				while (true) {
  					if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && 'context' in error) {
  						htmlCode += '<li>' + error.context + '</li>';
  						error = error.error;
  					} else {
  						htmlCode += '<li><b>' + error + '</b></li>';
  						break;
  					}
  				}
  				htmlCode += '</ul>';
  				htmlCode += '<p>Try to run the experiment again. If the error persists, contact the experimenter.</p>';
  				titleColour = 'red';
  			}
  			else if (typeof message !== 'undefined') {
  					htmlCode = '<div id="msgDialog" title="Message">' + '<p class="validateTips">' + message + '</p>';
  					titleColour = 'green';
  				}
  				else if (typeof warning !== 'undefined') {
  						htmlCode = '<div id="msgDialog" title="Warning">' + '<p class="validateTips">' + warning + '</p>';
  						titleColour = 'orange';
  					}
  			htmlCode += '</div>';
  			var dialogElement = document.getElementById('root');
  			dialogElement.innerHTML = htmlCode;
  			this._estimateDialogScalingFactor();
  			var dialogSize = this._getDialogSize();
  			var self = this;
  			$('#msgDialog').dialog({
  				dialogClass: 'no-close',
  				width: dialogSize[0],
  				maxHeight: dialogSize[1],
  				autoOpen: true,
  				modal: true,
  				closeOnEscape: false,
  				buttons: !showOK ? [] : [{
  					id: "buttonOk",
  					text: "Ok",
  					click: function click() {
  						$(this).dialog("close");
  						if (typeof onOK !== 'undefined') onOK();
  					}
  				}],
  				open: self._dialogOpen('#msgDialog')
  			})
  			.prev(".ui-dialog-titlebar").css("background", titleColour);
  			self._dialogResize('#msgDialog');
  		}
  	}, {
  		key: '_dialogOpen',
  		value: function _dialogOpen(dialogId) {
  			var self = this;
  			return function () {
  				var windowSize = [$(window).width(), $(window).height()];
  				var parent = $(dialogId).parent();
  				parent.css({
  					position: 'absolute',
  					left: Math.max(0, (windowSize[0] - parent.outerWidth()) / 2.0),
  					top: Math.max(0, (windowSize[1] - parent.outerHeight()) / 2.0)
  				});
  				self._contentDelta = [parent.css('width').slice(0, -2) - $(dialogId).css('width').slice(0, -2), parent.css('height').slice(0, -2) - $(dialogId).css('height').slice(0, -2)];
  			};
  		}
  	}, {
  		key: '_dialogResize',
  		value: function _dialogResize(dialogId) {
  			var self = this;
  			$(window).resize(function () {
  				var parent = $(dialogId).parent();
  				var windowSize = [$(window).width(), $(window).height()];
  				var dialogSize = self._getDialogSize();
  				parent.css({
  					width: dialogSize[0],
  					maxHeight: dialogSize[1]
  				});
  				var isDifferent = self._estimateDialogScalingFactor();
  				if (!isDifferent) {
  					$(dialogId).css({
  						width: dialogSize[0] - self._contentDelta[0],
  						maxHeight: dialogSize[1] - self._contentDelta[1]
  					});
  				}
  				parent.css({
  					position: 'absolute',
  					left: Math.max(0, (windowSize[0] - parent.outerWidth()) / 2.0),
  					top: Math.max(0, (windowSize[1] - parent.outerHeight()) / 2.0)
  				});
  			});
  		}
  	}, {
  		key: 'destroyDialog',
  		value: function destroyDialog() {
  			if ($("#expDialog").length) {
  				$("#expDialog").dialog("destroy");
  			}
  			if ($("#msgDialog").length) {
  				$("#msgDialog").dialog("destroy");
  			}
  		}
  	}, {
  		key: '_onResourceEvents',
  		value: function _onResourceEvents(signal) {
  			this._psychoJS.logger.debug('signal: ' + util$1.toString(signal));
  			if (signal.message === ServerManager.Event.RESOURCES_REGISTERED) {
  				this._progressBarMax = signal.count * 2;
  				$("#progressbar").progressbar("option", "max", this._progressBarMax);
  				this._progressBarCurrentIncrement = 0;
  				$("#progressMsg").text('all resources registered.');
  			}
  			else if (signal.message === ServerManager.Event.DOWNLOAD_COMPLETED) {
  					this._allResourcesDownloaded = true;
  					$("#progressMsg").text('all resources downloaded.');
  					this._updateOkButtonStatus();
  				}
  				else if (signal.message === ServerManager.Event.DOWNLOADING_RESOURCE || signal.message === ServerManager.Event.RESOURCE_DOWNLOADED) {
  						if (typeof this._progressBarCurrentIncrement === 'undefined') this._progressBarCurrentIncrement = 0;
  						if (signal.message === ServerManager.Event.DOWNLOADING_RESOURCE) $("#progressMsg").text(signal.resource + ': downloading...');else $("#progressMsg").text(signal.resource + ': downloaded.');
  						++this._progressBarCurrentIncrement;
  						$("#progressbar").progressbar("option", "value", this._progressBarCurrentIncrement);
  					}
  					else $("#progressMsg").text(signal.message);
  		}
  	}, {
  		key: '_updateOkButtonStatus',
  		value: function _updateOkButtonStatus() {
  			if (this._allResourcesDownloaded && this._nbSetRequiredKeys >= this._requiredKeys.length) {
  				$("#buttonOk").button("option", "disabled", false);
  			} else $("#buttonOk").button("option", "disabled", true);
  			$("#buttonOk").hide(0, function () {
  				$("#buttonOk").show();
  			});
  		}
  	}, {
  		key: '_estimateDialogScalingFactor',
  		value: function _estimateDialogScalingFactor() {
  			var windowSize = [$(window).width(), $(window).height()];
  			var dialogScalingFactor = 1.0;
  			if (windowSize[0] < 1080) {
  				if (windowSize[0] > windowSize[1]) dialogScalingFactor = 1.5;
  				else dialogScalingFactor = 2.0;
  			}
  			var isDifferent = dialogScalingFactor !== this._dialogScalingFactor;
  			this._dialogScalingFactor = dialogScalingFactor;
  			return isDifferent;
  		}
  	}, {
  		key: '_getDialogSize',
  		value: function _getDialogSize() {
  			var windowSize = [$(window).width(), $(window).height()];
  			this._estimateDialogScalingFactor();
  			return [Math.min(GUI.dialogMaxSize[0], (windowSize[0] - GUI.dialogMargin[0]) / this._dialogScalingFactor), Math.min(GUI.dialogMaxSize[1], (windowSize[1] - GUI.dialogMargin[1]) / this._dialogScalingFactor)];
  		}
  	}], [{
  		key: '_onKeyChange',
  		value: function _onKeyChange(gui, event) {
  			var element = event.target;
  			var value = element.value;
  			if (typeof value !== 'undefined' && value.length > 0) gui._nbSetRequiredKeys++;else gui._nbSetRequiredKeys--;
  			gui._updateOkButtonStatus();
  		}
  	}]);
  	return GUI;
  }();
  GUI.dialogMaxSize = [500, 600];
  GUI.dialogMargin = [50, 50];

  var PsychoJS = function () {
  	createClass(PsychoJS, [{
  		key: 'status',
  		get: function get$$1() {
  			return this._status;
  		},
  		set: function set$$1(status) {
  			this._status = status;
  		}
  	}, {
  		key: 'config',
  		get: function get$$1() {
  			return this._config;
  		}
  	}, {
  		key: 'window',
  		get: function get$$1() {
  			return this._window;
  		}
  	}, {
  		key: 'serverManager',
  		get: function get$$1() {
  			return this._serverManager;
  		}
  	}, {
  		key: 'experiment',
  		get: function get$$1() {
  			return this._experiment;
  		}
  	}, {
  		key: 'scheduler',
  		get: function get$$1() {
  			return this._scheduler;
  		}
  	}, {
  		key: 'monotonicClock',
  		get: function get$$1() {
  			return this._monotonicClock;
  		}
  	}, {
  		key: 'logger',
  		get: function get$$1() {
  			return this._logger.consoleLogger;
  		}
  	}, {
  		key: 'eventManager',
  		get: function get$$1() {
  			return this._eventManager;
  		}
  	}, {
  		key: 'gui',
  		get: function get$$1() {
  			return this._gui;
  		}
  	}, {
  		key: 'IP',
  		get: function get$$1() {
  			return this._IP;
  		}
  	}, {
  		key: 'serverMsg',
  		get: function get$$1() {
  			return this._serverMsg;
  		}
  	}]);
  	function PsychoJS() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    _ref$debug = _ref.debug,
  		    debug = _ref$debug === undefined ? true : _ref$debug,
  		    _ref$collectIP = _ref.collectIP,
  		    collectIP = _ref$collectIP === undefined ? false : _ref$collectIP;
  		classCallCheck(this, PsychoJS);
  		this._logger = new Logger_js.Logger(debug ? log4javascript.Level.DEBUG : log4javascript.Level.INFO);
  		this._captureErrors();
  		this._monotonicClock = new Clock_js.MonotonicClock();
  		this._eventManager = new EventManager(this);
  		this._serverManager = new ServerManager({
  			psychoJS: this
  		});
  		this._gui = new GUI(this);
  		this._collectIP = collectIP;
  		this._scheduler = new Scheduler_js.Scheduler(this);
  		this._window = undefined;
  		this._cancellationUrl = undefined;
  		this._completionUrl = undefined;
  		this._status = PsychoJS.Status.NOT_CONFIGURED;
  		this.logger.info('[PsychoJS] Initialised.');
  	}
  	createClass(PsychoJS, [{
  		key: 'openWindow',
  		value: function openWindow() {
  			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  			    name = _ref2.name,
  			    fullscr = _ref2.fullscr,
  			    color = _ref2.color,
  			    units = _ref2.units,
  			    autoLog = _ref2.autoLog;
  			this.logger.info('[PsychoJS] Open Window.');
  			if (typeof this._window !== 'undefined') throw { origin: 'PsychoJS.openWindow', context: 'when opening a Window', error: 'A Window has already been opened.' };
  			this._window = new Window({
  				psychoJS: this,
  				name: name,
  				fullscr: fullscr,
  				color: color,
  				units: units,
  				autoLog: autoLog
  			});
  		}
  	}, {
  		key: 'setRedirectUrls',
  		value: function setRedirectUrls(completionUrl, cancellationUrl) {
  			this._completionUrl = completionUrl;
  			this._cancellationUrl = cancellationUrl;
  		}
  	}, {
  		key: 'schedule',
  		value: function schedule(task, args) {
  			this.logger.debug('schedule task: ', task.toString().substring(0, 50), '...');
  			this._scheduler.add(task, args);
  		}
  	}, {
  		key: 'scheduleCondition',
  		value: function scheduleCondition(condition, thenScheduler, elseScheduler) {
  			this.logger.debug('schedule condition: ', condition.toString().substring(0, 50), '...');
  			this._scheduler.addConditional(condition, thenScheduler, elseScheduler);
  		}
  	}, {
  		key: 'start',
  		value: function () {
  			var _ref3 = asyncToGenerator(              regeneratorRuntime.mark(function _callee() {
  				var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  				    _ref4$configURL = _ref4.configURL,
  				    configURL = _ref4$configURL === undefined ? 'config.json' : _ref4$configURL,
  				    expInfo = _ref4.expInfo;
  				var response;
  				return regeneratorRuntime.wrap(function _callee$(_context) {
  					while (1) {
  						switch (_context.prev = _context.next) {
  							case 0:
  								this.logger.debug();
  								response = { origin: 'PsychoJS.start', context: 'when starting the experiment' };
  								_context.prev = 2;
  								_context.next = 5;
  								return this._configure(configURL);
  							case 5:
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
  								this._experiment = new ExperimentHandler_js.ExperimentHandler({
  									psychoJS: this,
  									extraInfo: expInfo
  								});
  								this._serverMsg = util$1.getUrlParameters().get('__msg');
  								_context.next = 10;
  								return this._serverManager.openSession();
  							case 10:
  								this._serverManager.downloadResources();
  								this.logger.info('[PsychoJS] Start Experiment.');
  								this._scheduler.start();
  								_context.next = 18;
  								break;
  							case 15:
  								_context.prev = 15;
  								_context.t0 = _context['catch'](2);
  								this._gui.dialog({ error: _extends({}, response, { error: _context.t0 }) });
  							case 18:
  							case 'end':
  								return _context.stop();
  						}
  					}
  				}, _callee, this, [[2, 15]]);
  			}));
  			function start() {
  				return _ref3.apply(this, arguments);
  			}
  			return start;
  		}()
  	}, {
  		key: 'importAttributes',
  		value: function importAttributes(obj) {
  			this.logger.debug('import attributes from: ', util$1.toString(obj));
  			if (typeof obj === 'undefined') return;
  			for (var attribute in obj) {
  				window[attribute] = obj[attribute];
  			}
  		}
  	}, {
  		key: 'quit',
  		value: function () {
  			var _ref5 = asyncToGenerator(              regeneratorRuntime.mark(function _callee2() {
  				var _this = this;
  				var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  				    message = _ref6.message,
  				    _ref6$isCompleted = _ref6.isCompleted,
  				    isCompleted = _ref6$isCompleted === undefined ? false : _ref6$isCompleted;
  				var text, self;
  				return regeneratorRuntime.wrap(function _callee2$(_context2) {
  					while (1) {
  						switch (_context2.prev = _context2.next) {
  							case 0:
  								this.logger.info('[PsychoJS] Quit.');
  								this._experiment.experimentEnded = true;
  								this._status = PsychoJS.Status.FINISHED;
  								_context2.prev = 3;
  								this._scheduler.stop();
  								this.gui.dialog({ warning: 'Saving the experiment results and closing the session. Please wait a few moments.', showOK: false });
  								_context2.next = 8;
  								return this._experiment.save();
  							case 8:
  								_context2.next = 10;
  								return this._serverManager.closeSession(isCompleted);
  							case 10:
  								text = 'Thank you for your patience. The data have been saved.<br/><br/>';
  								text += typeof message !== 'undefined' ? message : 'Goodbye!';
  								self = this;
  								this._gui.dialog({
  									message: text, onOK: function onOK() {
  										self._window.close();
  										self._gui.destroyDialog();
  										while (document.body.hasChildNodes()) {
  											document.body.removeChild(document.body.lastChild);
  										}
  										_this._window.closeFullScreen();
  										if (isCompleted && typeof self._completionUrl !== 'undefined') window.location = self._completionUrl;else if (!isCompleted && typeof self._cancellationUrl !== 'undefined') window.location = self._cancellationUrl;
  									}
  								});
  								_context2.next = 20;
  								break;
  							case 16:
  								_context2.prev = 16;
  								_context2.t0 = _context2['catch'](3);
  								console.error(_context2.t0);
  								this._gui.dialog({ error: _context2.t0 });
  							case 20:
  							case 'end':
  								return _context2.stop();
  						}
  					}
  				}, _callee2, this, [[3, 16]]);
  			}));
  			function quit() {
  				return _ref5.apply(this, arguments);
  			}
  			return quit;
  		}()
  	}, {
  		key: '_configure',
  		value: function () {
  			var _ref7 = asyncToGenerator(              regeneratorRuntime.mark(function _callee3(configURL) {
  				var response, _response;
  				return regeneratorRuntime.wrap(function _callee3$(_context3) {
  					while (1) {
  						switch (_context3.prev = _context3.next) {
  							case 0:
  								response = { origin: 'PsychoJS.configure', context: 'when configuring PsychoJS for the experiment' };
  								_context3.prev = 1;
  								this.status = PsychoJS.Status.CONFIGURING;
  								_context3.next = 5;
  								return this._serverManager.getConfiguration(configURL);
  							case 5:
  								_response = _context3.sent;
  								this.status = PsychoJS.Status.CONFIGURED;
  								this._config = _response.config;
  								this.logger.debug('configuration:', util$1.toString(_response.config));
  								if ('experiment' in this._config) {
  									_context3.next = 11;
  									break;
  								}
  								throw 'missing experiment block in configuration';
  							case 11:
  								if ('name' in this._config.experiment) {
  									_context3.next = 13;
  									break;
  								}
  								throw 'missing name in experiment block in configuration';
  							case 13:
  								if ('fullpath' in this._config.experiment) {
  									_context3.next = 15;
  									break;
  								}
  								throw 'missing fullpath in experiment block in configuration';
  							case 15:
  								if ('psychoJsManager' in this._config) {
  									_context3.next = 17;
  									break;
  								}
  								throw 'missing psychoJsManager block in configuration';
  							case 17:
  								if ('URL' in this._config.psychoJsManager) {
  									_context3.next = 19;
  									break;
  								}
  								throw 'missing URL in psychoJsManager block in configuration';
  							case 19:
  								if ('saveFormat' in this._config.experiment) this._config.experiment.saveFormat = Symbol.for(this._config.experiment.saveFormat);else this._config.experiment.saveFormat = ExperimentHandler_js.ExperimentHandler.SaveFormat.CSV;
  								return _context3.abrupt('return', _response);
  							case 23:
  								_context3.prev = 23;
  								_context3.t0 = _context3['catch'](1);
  								throw _extends({}, response, { error: _context3.t0 });
  							case 26:
  							case 'end':
  								return _context3.stop();
  						}
  					}
  				}, _callee3, this, [[1, 23]]);
  			}));
  			function _configure(_x5) {
  				return _ref7.apply(this, arguments);
  			}
  			return _configure;
  		}()
  	}, {
  		key: '_getParticipantIPInfo',
  		value: function () {
  			var _ref8 = asyncToGenerator(              regeneratorRuntime.mark(function _callee4() {
  				var response, self, geoResponse, geoData;
  				return regeneratorRuntime.wrap(function _callee4$(_context4) {
  					while (1) {
  						switch (_context4.prev = _context4.next) {
  							case 0:
  								response = { origin: 'PsychoJS._getParticipantIPInfo', context: 'when get the IP information of the participant' };
  								this.logger.debug('getting the IP information of the participant');
  								this._IP = {};
  								self = this;
  								_context4.prev = 4;
  								_context4.next = 7;
  								return $.get('http://www.geoplugin.net/json.gp');
  							case 7:
  								geoResponse = _context4.sent;
  								geoData = JSON.parse(geoResponse);
  								self._IP['IP'] = geoData.geoplugin_request;
  								self._IP['country'] = geoData.geoplugin_countryName;
  								self._IP['latitude'] = geoData.geoplugin_latitude;
  								self._IP['longitude'] = geoData.geoplugin_longitude;
  								self.logger.debug('IP information of the participant: ' + util$1.toString(self._IP));
  								_context4.next = 19;
  								break;
  							case 16:
  								_context4.prev = 16;
  								_context4.t0 = _context4['catch'](4);
  								throw _extends({}, response, { error: _context4.t0 });
  							case 19:
  							case 'end':
  								return _context4.stop();
  						}
  					}
  				}, _callee4, this, [[4, 16]]);
  			}));
  			function _getParticipantIPInfo() {
  				return _ref8.apply(this, arguments);
  			}
  			return _getParticipantIPInfo;
  		}()
  	}, {
  		key: '_captureErrors',
  		value: function _captureErrors() {
  			this.logger.debug('capturing all errors using window.onerror');
  			var self = this;
  			window.onerror = function (message, source, lineno, colno, error) {
  				console.error(error);
  				self._gui.dialog({ "error": error });
  				return true;
  			};
  		}
  	}]);
  	return PsychoJS;
  }();
  PsychoJS.Status = {
  	NOT_CONFIGURED: Symbol.for('NOT_CONFIGURED'),
  	CONFIGURING: Symbol.for('CONFIGURING'),
  	CONFIGURED: Symbol.for('CONFIGURED'),
  	NOT_STARTED: Symbol.for('NOT_STARTED'),
  	STARTED: Symbol.for('STARTED'),
  	FINISHED: Symbol.for('FINISHED'),
  	STOPPED: Symbol.for('FINISHED')
  };

  var EventManager = function () {
  	function EventManager(psychoJS) {
  		classCallCheck(this, EventManager);
  		this._psychoJS = psychoJS;
  		for (var keyName in EventManager._pygletMap) {
  			EventManager._reversePygletMap[EventManager._pygletMap[keyName]] = keyName;
  		}
  		this._keyBuffer = [];
  		this._addKeyListeners();
  		this._mouseInfo = {
  			pos: [0, 0],
  			wheelRel: [0.0, 0.0],
  			buttons: {
  				pressed: [0, 0, 0],
  				clocks: [new Clock_js.Clock(), new Clock_js.Clock(), new Clock_js.Clock()],
  				times: [0.0, 0.0, 0.0]
  			},
  			moveClock: new Clock_js.Clock()
  		};
  	}
  	createClass(EventManager, [{
  		key: 'getKeys',
  		value: function getKeys() {
  			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  			    _ref$keyList = _ref.keyList,
  			    keyList = _ref$keyList === undefined ? null : _ref$keyList,
  			    _ref$timeStamped = _ref.timeStamped,
  			    timeStamped = _ref$timeStamped === undefined ? false : _ref$timeStamped;
  			if (keyList != null) keyList = this._pyglet2w3c(keyList);
  			var newBuffer = [];
  			var keys = [];
  			for (var i = 0; i < this._keyBuffer.length; ++i) {
  				var key = this._keyBuffer[i];
  				var keyId = null;
  				if (keyList != null) {
  					var index = keyList.indexOf(key.code);
  					if (index < 0) index = keyList.indexOf(EventManager._keycodeMap[key.keyCode]);
  					if (index >= 0) keyId = EventManager._reversePygletMap[keyList[index]];
  				} else keyId = EventManager._reversePygletMap[key.code];
  				if (keyId != null) {
  					if (timeStamped) keys.push([keyId, key.timestamp]);else keys.push(keyId);
  				} else newBuffer.push(key);
  			}
  			this._keyBuffer = newBuffer;
  			return keys;
  		}
  	}, {
  		key: 'getMouseInfo',
  		value: function getMouseInfo() {
  			return this._mouseInfo;
  		}
  	}, {
  		key: 'clearEvents',
  		value: function clearEvents(attribs) {
  			this.clearKeys();
  		}
  	}, {
  		key: 'clearKeys',
  		value: function clearKeys() {
  			this._keyBuffer = [];
  		}
  	}, {
  		key: 'startMoveClock',
  		value: function startMoveClock() {}
  	}, {
  		key: 'stopMoveClock',
  		value: function stopMoveClock() {}
  	}, {
  		key: 'resetMoveClock',
  		value: function resetMoveClock() {}
  	}, {
  		key: 'addMouseListeners',
  		value: function addMouseListeners(renderer) {
  			var self = this;
  			renderer.view.addEventListener("pointerdown", function (event) {
  				event.preventDefault();
  				self._mouseInfo.buttons.pressed[event.button] = 1;
  				self._mouseInfo.buttons.times[event.button] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[event.button].getLastResetTime();
  				self._mouseInfo.pos = [event.offsetX, event.offsetY];
  			}, false);
  			renderer.view.addEventListener("touchstart", function (event) {
  				event.preventDefault();
  				self._mouseInfo.buttons.pressed[0] = 1;
  				self._mouseInfo.buttons.times[0] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[0].getLastResetTime();
  				var touches = event.changedTouches;
  				self._mouseInfo.pos = [touches[0].pageX, touches[0].pageY];
  			}, false);
  			renderer.view.addEventListener("pointerup", function (event) {
  				event.preventDefault();
  				self._mouseInfo.buttons.pressed[event.button] = 0;
  				self._mouseInfo.buttons.times[event.button] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[event.button].getLastResetTime();
  				self._mouseInfo.pos = [event.offsetX, event.offsetY];
  			}, false);
  			renderer.view.addEventListener("touchend", function (event) {
  				event.preventDefault();
  				self._mouseInfo.buttons.pressed[0] = 0;
  				self._mouseInfo.buttons.times[0] = self._psychoJS._monotonicClock.getTime() - self._mouseInfo.buttons.clocks[0].getLastResetTime();
  				var touches = event.changedTouches;
  				self._mouseInfo.pos = [touches[0].pageX, touches[0].pageY];
  			}, false);
  			renderer.view.addEventListener("pointermove", function (event) {
  				event.preventDefault();
  				self._mouseInfo.moveClock.reset();
  				self._mouseInfo.pos = [event.offsetX, event.offsetY];
  			}, false);
  			renderer.view.addEventListener("touchmove", function (event) {
  				event.preventDefault();
  				self._mouseInfo.moveClock.reset();
  				var touches = event.changedTouches;
  				self._mouseInfo.pos = [touches[0].pageX, touches[0].pageY];
  			}, false);
  			renderer.view.addEventListener("wheel", function (event) {
  				self._mouseInfo.wheelRel[0] += event.deltaX;
  				self._mouseInfo.wheelRel[1] += event.deltaY;
  			}, false);
  		}
  	}, {
  		key: '_addKeyListeners',
  		value: function _addKeyListeners() {
  			var self = this;
  			document.addEventListener("keydown", function (e) {
  				self._keyBuffer.push({
  					code: e.code,
  					key: e.key,
  					keyCode: e.keyCode,
  					timestamp: Clock_js.MonotonicClock.getReferenceTime() / 1000
  				});
  				self._psychoJS.logger.trace('keys pressed : ', util$1.toString(self._keyBuffer));
  			});
  		}
  	}, {
  		key: '_pyglet2w3c',
  		value: function _pyglet2w3c(pygletKeyList) {
  			var w3cKeyList = [];
  			for (var i = 0; i < pygletKeyList.length; i++) {
  				if (typeof EventManager._pygletMap[pygletKeyList[i]] === 'undefined') w3cKeyList.push(pygletKeyList[i]);else w3cKeyList.push(EventManager._pygletMap[pygletKeyList[i]]);
  			}
  			return w3cKeyList;
  		}
  	}]);
  	return EventManager;
  }();
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
  var BuilderKeyResponse = function BuilderKeyResponse(psychoJS) {
  	classCallCheck(this, BuilderKeyResponse);
  	this._psychoJS = psychoJS;
  	this.status = PsychoJS.Status.NOT_STARTED;
  	this.keys = [];
  	this.corr = 0;
  	this.rt = [];
  	this.clock = new Clock_js.Clock();
  };

  var MinimalStim = function (_PsychObject) {
  	inherits(MinimalStim, _PsychObject);
  	function MinimalStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$autoDraw = _ref.autoDraw,
  		    autoDraw = _ref$autoDraw === undefined ? false : _ref$autoDraw,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? false : _ref$autoLog;
  		classCallCheck(this, MinimalStim);
  		var _this = possibleConstructorReturn(this, (MinimalStim.__proto__ || Object.getPrototypeOf(MinimalStim)).call(this, win._psychoJS, name));
  		_this._pixi = undefined;
  		_this._addAttributes(MinimalStim, win, autoDraw, autoLog);
  		_this._needUpdate = false;
  		_this.status = PsychoJS.Status.NOT_STARTED;
  		return _this;
  	}
  	createClass(MinimalStim, [{
  		key: 'setAutoDraw',
  		value: function setAutoDraw(autoDraw) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var errorPrefix = { origin: 'MinimalStim.setAutoDraw', context: 'when setting the autoDraw attribute of stimulus: ' + this._name };
  			this._setAttribute('autoDraw', autoDraw, log);
  			var index = this.win._drawList.indexOf(this);
  			if (this._autoDraw) {
  				if (this.win) {
  					if (index < 0) {
  						this._updateIfNeeded();
  						if (typeof this._pixi === 'undefined') throw _extends({}, errorPrefix, { error: 'the PIXI representation of the stimulus is unavailable' });
  						this.win._rootContainer.addChild(this._pixi);
  						this.win._drawList.push(this);
  					} else {
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
  	}, {
  		key: 'draw',
  		value: function draw() {
  			this._updateIfNeeded();
  			if (this.win && this.win._drawList.indexOf(this) < 0) {
  				this.win._container.addChild(this._pixi);
  				this.win._drawList.push(this);
  			}
  		}
  	}, {
  		key: 'contains',
  		value: function contains(object, units) {
  			throw { origin: 'MinimalStim.contains', context: 'when determining whether stimulus: ' + this._name + ' contains object: ' + util.toString(object), error: 'this method is abstract and should not be called.' };
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			throw { origin: 'MinimalStim._updateIfNeeded', context: 'when updating stimulus: ' + this._name, error: 'this method is abstract and should not be called.' };
  		}
  	}]);
  	return MinimalStim;
  }(PsychObject_js.PsychObject);

  var Mouse = function (_PsychObject) {
  	inherits(Mouse, _PsychObject);
  	function Mouse() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? true : _ref$autoLog;
  		classCallCheck(this, Mouse);
  		var _this = possibleConstructorReturn(this, (Mouse.__proto__ || Object.getPrototypeOf(Mouse)).call(this, win._psychoJS, name));
  		_this._lastPos = undefined;
  		_this._prevPos = undefined;
  		_this._movedistance = 0.0;
  		var units = win.units;
  		var visible = 1;
  		_this._addAttributes(Mouse, win, units, visible, autoLog);
  		_this.status = PsychoJS.Status.NOT_STARTED;
  		return _this;
  	}
  	createClass(Mouse, [{
  		key: 'getPos',
  		value: function getPos() {
  			var mouseInfo = this.psychoJS.eventManager.getMouseInfo();
  			var pos_px = mouseInfo.pos.slice();
  			pos_px[0] = pos_px[0] - this.win.size[0] / 2;
  			pos_px[1] = this.win.size[1] / 2 - pos_px[1];
  			this._lastPos = util$1.to_win(pos_px, 'pix', this._win);
  			return this._lastPos;
  		}
  	}, {
  		key: 'getRel',
  		value: function getRel() {
  			if (typeof this._lastPos === 'undefined') return this.getPos();else {
  				var lastPos = this._lastPos;
  				var pos = this.getPos();
  				return [-lastPos[0] + pos[0], -lastPos[1] + pos[1]];
  			}
  		}
  	}, {
  		key: 'getWheelRel',
  		value: function getWheelRel() {
  			var mouseInfo = this.psychoJS.eventManager.getMouseInfo();
  			var wheelRel_px = mouseInfo.wheelRel.slice();
  			var wheelRel = util$1.to_win(wheelRel_px, 'pix', this._win);
  			mouseInfo.wheelRel = [0, 0];
  			return wheelRel;
  		}
  	}, {
  		key: 'getPressed',
  		value: function getPressed() {
  			var getTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  			var buttonPressed = this.psychoJS.eventManager.getMouseInfo().buttons.pressed.slice();
  			if (!getTime) return buttonPressed;else {
  				var buttonTimes = this.psychoJS.eventManager.getMouseInfo().buttons.times.slice();
  				return [buttonPressed, buttonTimes];
  			}
  		}
  	}, {
  		key: 'mouseMoved',
  		value: function mouseMoved(distance) {
  			var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			if (typeof this._lastPos === 'undefined') this.getPos();
  			this._prevPos = this._lastPos.slice();
  			this.getPos();
  			if (typeof reset === 'boolean' && reset == false) {
  				if (typeof distance === 'undefined') return this._prevPos[0] != this._lastPos[0] || this._prevPos[1] != this._lastPos[1];else {
  					if (typeof distance === 'number') {
  						this._movedistance = Math.sqrt((this._prevPos[0] - this._lastPos[0]) * (this._prevPos[0] - this._lastPos[0]) + (this._prevPos[1] - this._lastPos[1]) * (this._prevPos[1] - this._lastPos[1]));
  						return this._movedistance > distance;
  					}
  					if (this._prevPos[0] + distance[0] - this._lastPos[0] > 0.0) return true;
  					if (this._prevPos[1] + distance[1] - this._lastPos[0] > 0.0) return true;
  					return false;
  				}
  			} else if (typeof reset === 'boolean' && reset == true) {
  				this.psychoJS.eventManager.getMouseInfo().moveClock.reset();
  				return false;
  			} else if (reset === 'here') {
  				this._prevPos = this._lastPos.clone();
  				return false;
  			} else if (reset instanceof Array) {
  				this._prevPos = reset.slice();
  				if (!distance) return false;
  				else {
  						if (typeof distance === 'number') {
  							this._movedistance = Math.sqrt((this._prevPos[0] - this._lastPos[0]) * (this._prevPos[0] - this._lastPos[0]) + (this._prevPos[1] - this._lastPos[1]) * (this._prevPos[1] - this._lastPos[1]));
  							return this._movedistance > distance;
  						}
  						if (Math.abs(this._lastPos[0] - this._prevPos[0]) > distance[0]) return true;
  						if (Math.abs(this._lastPos[1] - this._prevPos[1]) > distance[1]) return true;
  						return false;
  					}
  			} else return false;
  		}
  	}, {
  		key: 'mouseMoveTime',
  		value: function mouseMoveTime() {
  			return this.psychoJS.eventManager.getMouseInfo().moveClock.getTime();
  		}
  	}, {
  		key: 'clickReset',
  		value: function clickReset() {
  			var buttons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 1, 2];
  			var mouseInfo = this.psychoJS.eventManager.getMouseInfo();
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var b = _step.value;
  					mouseInfo.buttons.clocks[b].reset();
  					mouseInfo.buttons.times[b] = 0.0;
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  		}
  	}]);
  	return Mouse;
  }(PsychObject_js.PsychObject);

  /**
   * Mixin implementing various unit-handling measurement methods.
   *
   * @author Alain Pitiot
   * @version 3.0.7
   * @copyright (c) 2019 Ilixa Ltd. ({@link http://ilixa.com})
   * @license Distributed under the terms of the MIT License
   */
  var WindowMixin = function WindowMixin(superclass) {
  	return function (_superclass) {
  		inherits(_class, _superclass);
  		function _class(args) {
  			classCallCheck(this, _class);
  			return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, args));
  		}
  		createClass(_class, [{
  			key: 'setUnits',
  			value: function setUnits() {
  				var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.win.units;
  				var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  				this._setAttribute('units', units, log);
  			}
  		}, {
  			key: '_getLengthPix',
  			value: function _getLengthPix(length) {
  				var errorPrefix = { origin: 'WindowMixin._getLengthPix', context: 'when converting a length from stimulus unit to pixel units' };
  				if (this._units === 'pix') {
  					return length;
  				} else if (typeof this._units === 'undefined' || this._units === 'norm') {
  					var winSize = this.win.size;
  					return length * winSize[1] / 2;
  				} else if (this._units === 'height') {
  					var minSize = Math.min(this.win.size[0], this.win.size[1]);
  					return length * minSize;
  				} else {
  					throw _extends({}, errorPrefix, { error: 'unable to deal with unit: ' + this._units });
  				}
  			}
  		}, {
  			key: '_getLengthUnits',
  			value: function _getLengthUnits(length_px) {
  				var errorPrefix = { origin: 'WindowMixin._getLengthUnits', context: 'when converting a length from pixel unit to stimulus units' };
  				if (this._units === 'pix') {
  					return length_px;
  				} else if (typeof this._units === 'undefined' || this._units === 'norm') {
  					var winSize = this.win.size;
  					return length_px / (winSize[1] / 2);
  				} else if (this._units === 'height') {
  					var minSize = Math.min(this.win.size[0], this.win.size[1]);
  					return length_px / minSize;
  				} else {
  					throw _extends({}, errorPrefix, { error: 'unable to deal with unit: ' + this._units });
  				}
  			}
  		}, {
  			key: '_getHorLengthPix',
  			value: function _getHorLengthPix(length) {
  				var errorPrefix = { origin: 'WindowMixin._getHorLengthPix', context: 'when converting a length from pixel unit to stimulus units' };
  				if (this._units === 'pix') {
  					return length;
  				} else if (typeof this._units === 'undefined' || this._units === 'norm') {
  					var winSize = this.win.size;
  					return length * winSize[0] / 2;
  				} else if (this._units === 'height') {
  					var minSize = Math.min(this.win.size[0], this.win.size[1]);
  					return length * minSize;
  				} else {
  					throw _extends({}, errorPrefix, { error: 'unable to deal with unit: ' + this._units });
  				}
  			}
  		}, {
  			key: '_getVerLengthPix',
  			value: function _getVerLengthPix(length) {
  				var errorPrefix = { origin: 'WindowMixin._getVerLengthPix', context: 'when converting a length from pixel unit to stimulus units' };
  				if (this._units === 'pix') {
  					return length;
  				} else if (typeof this._units === 'undefined' || this._units === 'norm') {
  					var winSize = this.win.size;
  					return length * winSize[1] / 2;
  				} else if (this._units === 'height') {
  					var minSize = Math.min(this.win.size[0], this.win.size[1]);
  					return length * minSize;
  				} else {
  					throw _extends({}, errorPrefix, { error: 'unable to deal with unit: ' + this._units });
  				}
  			}
  		}]);
  		return _class;
  	}(superclass);
  };

  exports.EventManager = EventManager;
  exports.BuilderKeyResponse = BuilderKeyResponse;
  exports.GUI = GUI;
  exports.MinimalStim = MinimalStim;
  exports.Mouse = Mouse;
  exports.PsychoJS = PsychoJS;
  exports.ServerManager = ServerManager;
  exports.Window = Window;
  exports.WindowMixin = WindowMixin;

  return exports;

}({},util,util,util,util,util,data,util));
var visual = (function (exports,MinimalStim_js,WindowMixin_js,util,Color_js,ColorMixin_js,PsychoJS_js,Clock_js) {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var VisualStim = function (_util$mix$with) {
  	inherits(VisualStim, _util$mix$with);
  	function VisualStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    units = _ref.units,
  		    _ref$ori = _ref.ori,
  		    ori = _ref$ori === undefined ? 0.0 : _ref$ori,
  		    _ref$opacity = _ref.opacity,
  		    opacity = _ref$opacity === undefined ? 1.0 : _ref$opacity,
  		    _ref$pos = _ref.pos,
  		    pos = _ref$pos === undefined ? [0, 0] : _ref$pos,
  		    size = _ref.size,
  		    autoDraw = _ref.autoDraw,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? false : _ref$autoLog;
  		classCallCheck(this, VisualStim);
  		var _this = possibleConstructorReturn(this, (VisualStim.__proto__ || Object.getPrototypeOf(VisualStim)).call(this, { win: win, name: name, autoDraw: autoDraw, autoLog: autoLog }));
  		_this._needVertexUpdate = true;
  		_this._vertices_px = undefined;
  		_this._addAttributes(VisualStim, units, ori, opacity, pos, size);
  		_this._needUpdate = true;
  		return _this;
  	}
  	createClass(VisualStim, [{
  		key: 'refresh',
  		value: function refresh() {
  			this._needUpdate = true;
  			this._needVertexUpdate = true;
  		}
  	}, {
  		key: 'setSize',
  		value: function setSize(size) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			if (typeof size !== 'undefined') {
  				size = util.toNumerical(size);
  				if (!Array.isArray(size)) size = [size, size];
  			}
  			this._setAttribute('size', size, log);
  			this._needVertexUpdate = true;
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setOri',
  		value: function setOri(ori) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('ori', ori, log);
  			var radians = ori * 0.017453292519943295;
  			this._rotationMatrix = [[Math.cos(radians), -Math.sin(radians)], [Math.sin(radians), Math.cos(radians)]];
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setPos',
  		value: function setPos(pos) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('pos', util.toNumerical(pos), log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setOpacity',
  		value: function setOpacity(opacity) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('opacity', opacity, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: '_getVertices_px',
  		value: function _getVertices_px()                  {
  			var _this2 = this;
  			var flip = [1.0, 1.0];
  			if ('_flipHoriz' in this && this._flipHoriz) flip[0] = -1.0;
  			if ('_flipVert' in this && this._flipVert) flip[1] = -1.0;
  			this._vertices_px = this._vertices.map(function (v) {
  				return util.to_px([v[0] * _this2._size[0] * flip[0], v[1] * _this2._size[1] * flip[1]], _this2._units, _this2._win);
  			});
  			return this._vertices_px;
  		}
  	}]);
  	return VisualStim;
  }(util.mix(MinimalStim_js.MinimalStim).with(WindowMixin_js.WindowMixin));

  var ImageStim = function (_util$mix$with) {
  	inherits(ImageStim, _util$mix$with);
  	function ImageStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    image = _ref.image,
  		    mask = _ref.mask,
  		    pos = _ref.pos,
  		    units = _ref.units,
  		    ori = _ref.ori,
  		    size = _ref.size,
  		    _ref$color = _ref.color,
  		    color = _ref$color === undefined ? new Color_js.Color('white') : _ref$color,
  		    _ref$opacity = _ref.opacity,
  		    opacity = _ref$opacity === undefined ? 1.0 : _ref$opacity,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    _ref$texRes = _ref.texRes,
  		    texRes = _ref$texRes === undefined ? 128 : _ref$texRes,
  		    _ref$depth = _ref.depth,
  		    depth = _ref$depth === undefined ? 0 : _ref$depth,
  		    _ref$interpolate = _ref.interpolate,
  		    interpolate = _ref$interpolate === undefined ? false : _ref$interpolate,
  		    _ref$flipHoriz = _ref.flipHoriz,
  		    flipHoriz = _ref$flipHoriz === undefined ? false : _ref$flipHoriz,
  		    _ref$flipVert = _ref.flipVert,
  		    flipVert = _ref$flipVert === undefined ? false : _ref$flipVert,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, ImageStim);
  		var _this = possibleConstructorReturn(this, (ImageStim.__proto__ || Object.getPrototypeOf(ImageStim)).call(this, { name: name, win: win, units: units, ori: ori, opacity: opacity, pos: pos, size: size, autoDraw: autoDraw, autoLog: autoLog }));
  		_this.psychoJS.logger.debug('create a new ImageStim with name: ', name);
  		_this._addAttributes(ImageStim, image, mask, color, contrast, texRes, interpolate, depth, flipHoriz, flipVert);
  		return _this;
  	}
  	createClass(ImageStim, [{
  		key: 'setImage',
  		value: function setImage(image) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var response = { origin: 'ImageStim.setImage', context: 'when setting the image of ImageStim: ' + this._name };
  			try {
  				if (typeof image === 'undefined') {
  					this.psychoJS.logger.warn('setting the image of ImageStim: ' + this._name + ' with argument: undefined.');
  					this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: undefined');
  				} else {
  					if (typeof image === 'string') image = this.psychoJS.serverManager.getResource(image);
  					if (!(image instanceof HTMLImageElement)) {
  						throw 'the argument: ' + image.toString() + ' is not an image" }';
  					}
  					this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: src= ' + image.src + ', size= ' + image.width + 'x' + image.height);
  				}
  				this._setAttribute('image', image, log);
  				this._needUpdate = true;
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'setMask',
  		value: function setMask(mask) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var response = { origin: 'ImageStim.setMask', context: 'when setting the mask of ImageStim: ' + this._name };
  			try {
  				if (typeof mask === 'undefined') {
  					this.psychoJS.logger.warn('setting the mask of ImageStim: ' + this._name + ' with argument: undefined.');
  					this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: undefined');
  				} else {
  					if (typeof mask === 'string') mask = this.psychoJS.serverManager.getResource(mask);
  					if (!(mask instanceof HTMLImageElement)) {
  						throw 'the argument: ' + mask.toString() + ' is not an image" }';
  					}
  					this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: src= ' + mask.src + ', size= ' + mask.width + 'x' + mask.height);
  				}
  				this._setAttribute('mask', mask, log);
  				this._needUpdate = true;
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'setFlipVert',
  		value: function setFlipVert(flipVert) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('flipVert', flipVert, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFlipHoriz',
  		value: function setFlipHoriz(flipHoriz) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('flipHoriz', flipHoriz, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'contains',
  		value: function contains(object, units) {
  			var objectPos_px = util.getPositionFromObject(object, units);
  			if (typeof objectPos_px === 'undefined') throw { origin: 'ImageStim.contains', context: 'when determining whether ImageStim: ' + this._name + ' contains object: ' + util.toString(object), error: 'unable to determine the position of the object' };
  			var pos_px = util.to_px(this.pos, this.units, this._win);
  			var size_px = util.to_px(this.size, this.units, this._win);
  			var polygon_px = [[pos_px[0] - size_px[0] / 2, pos_px[1] - size_px[1] / 2], [pos_px[0] + size_px[0] / 2, pos_px[1] - size_px[1] / 2], [pos_px[0] + size_px[0] / 2, pos_px[1] + size_px[1] / 2], [pos_px[0] - size_px[0] / 2, pos_px[1] + size_px[1] / 2]];
  			return util.IsPointInsidePolygon(objectPos_px, polygon_px);
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (!this._needUpdate) return;
  			this._needUpdate = false;
  			this._pixi = undefined;
  			if (typeof this._image === 'undefined') return;
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
  			if (this._texture.width === 0) {
  				this._needUpdate = true;
  				return;
  			}
  			this._pixi.alpha = this.opacity;
  			var stimSize = this.size;
  			if (typeof stimSize === 'undefined') {
  				var textureSize = [this._texture.width, this._texture.height];
  				stimSize = util.to_unit(textureSize, 'pix', this.win, this.units);
  			}
  			var size_px = util.to_px(stimSize, this.units, this.win);
  			var scaleX = size_px[0] / this._texture.width;
  			var scaleY = size_px[1] / this._texture.height;
  			this._pixi.scale.x = this.flipHoriz ? -scaleX : scaleX;
  			this._pixi.scale.y = this.flipVert ? scaleY : -scaleY;
  			this._pixi.position = util.to_pixiPoint(this.pos, this.units, this.win);
  			this._pixi.rotation = this.ori * Math.PI / 180;
  			this._pixi.anchor.x = 0.5;
  			this._pixi.anchor.y = 0.5;
  		}
  	}]);
  	return ImageStim;
  }(util.mix(VisualStim).with(ColorMixin_js.ColorMixin));

  var MovieStim = function (_VisualStim) {
  	inherits(MovieStim, _VisualStim);
  	function MovieStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    movie = _ref.movie,
  		    pos = _ref.pos,
  		    units = _ref.units,
  		    ori = _ref.ori,
  		    size = _ref.size,
  		    _ref$color = _ref.color,
  		    color = _ref$color === undefined ? new Color_js.Color('white') : _ref$color,
  		    _ref$opacity = _ref.opacity,
  		    opacity = _ref$opacity === undefined ? 1.0 : _ref$opacity,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    _ref$interpolate = _ref.interpolate,
  		    interpolate = _ref$interpolate === undefined ? false : _ref$interpolate,
  		    _ref$flipHoriz = _ref.flipHoriz,
  		    flipHoriz = _ref$flipHoriz === undefined ? false : _ref$flipHoriz,
  		    _ref$flipVert = _ref.flipVert,
  		    flipVert = _ref$flipVert === undefined ? false : _ref$flipVert,
  		    _ref$loop = _ref.loop,
  		    loop = _ref$loop === undefined ? false : _ref$loop,
  		    _ref$volume = _ref.volume,
  		    volume = _ref$volume === undefined ? 1.0 : _ref$volume,
  		    _ref$noAudio = _ref.noAudio,
  		    noAudio = _ref$noAudio === undefined ? false : _ref$noAudio,
  		    _ref$autoPlay = _ref.autoPlay,
  		    autoPlay = _ref$autoPlay === undefined ? true : _ref$autoPlay,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, MovieStim);
  		var _this = possibleConstructorReturn(this, (MovieStim.__proto__ || Object.getPrototypeOf(MovieStim)).call(this, { name: name, win: win, units: units, ori: ori, opacity: opacity, pos: pos, size: size, autoDraw: autoDraw, autoLog: autoLog }));
  		_this.psychoJS.logger.debug('create a new MovieStim with name: ', name);
  		_this._addAttributes(MovieStim, movie, color, contrast, interpolate, flipHoriz, flipVert, loop, volume, noAudio, autoPlay);
  		var videoElement = document.createElement('video');
  		_this._hasFastSeek = typeof videoElement.fastSeek === 'function';
  		return _this;
  	}
  	createClass(MovieStim, [{
  		key: 'setMovie',
  		value: function setMovie(movie) {
  			var _this2 = this;
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var response = { origin: 'MovieStim.setMovie', context: 'when setting the movie of MovieStim: ' + this._name };
  			try {
  				if (typeof movie === 'undefined') {
  					this.psychoJS.logger.warn('setting the movie of MovieStim: ' + this._name + ' with argument: undefined.');
  					this.psychoJS.logger.debug('set the movie of MovieStim: ' + this._name + ' as: undefined');
  				} else {
  					if (typeof movie === 'string') movie = this.psychoJS.serverManager.getResource(movie);
  					if (!(movie instanceof HTMLVideoElement)) throw 'the argument: ' + movie.toString() + ' is not a video" }';
  					this.psychoJS.logger.debug('set the movie of MovieStim: ' + this._name + ' as: src= ' + movie.src + ', size= ' + movie.videoWidth + 'x' + movie.videoHeight + ', duration= ' + movie.duration + 's');
  				}
  				this._setAttribute('movie', movie, log);
  				this._movie.onended = function () {
  					_this2.status = PsychoJS_js.PsychoJS.Status.FINISHED;
  				};
  				this._needUpdate = true;
  			} catch (error) {
  				throw _extends({}, response, { error: error });
  			}
  		}
  	}, {
  		key: 'setVolume',
  		value: function setVolume(volume) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('volume', volume, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setNoAudio',
  		value: function setNoAudio(noAudio) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('noAudio', noAudio, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFlipVert',
  		value: function setFlipVert(flipVert) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('flipVert', flipVert, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFlipHoriz',
  		value: function setFlipHoriz(flipHoriz) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('flipHoriz', flipHoriz, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'reset',
  		value: function reset() {
  			this.status = PsychoJS_js.PsychoJS.Status.NOT_STARTED;
  			this._movie.pause();
  			if (this._hasFastSeek) this._movie.fastSeek(0);
  		}
  	}, {
  		key: 'play',
  		value: function play() {
  			this.status = PsychoJS_js.PsychoJS.Status.STARTED;
  			this._movie.play();
  		}
  	}, {
  		key: 'pause',
  		value: function pause() {
  			this.status = PsychoJS_js.PsychoJS.Status.STOPPED;
  			this._movie.pause();
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			this.status = PsychoJS_js.PsychoJS.Status.STOPPED;
  			this._movie.pause();
  			if (this._hasFastSeek) this._movie.fastSeek(0);
  		}
  	}, {
  		key: 'seek',
  		value: function seek(timePoint) {
  			if (timePoint < 0 || timePoint > this._movie.duration) {
  				throw {
  					origin: 'MovieStim.seek',
  					context: 'when seeking to timepoint: ' + timePoint + ' of MovieStim: ' + this._name,
  					error: 'the timepoint does not belong to [0, ' + this._movie.duration
  				};
  			}
  			if (this._hasFastSeek) this._movie.fastSeek(timePoint);
  		}
  	}, {
  		key: 'contains',
  		value: function contains(object, units) {
  			var objectPos_px = util.getPositionFromObject(object, units);
  			if (typeof objectPos_px === 'undefined') {
  				throw {
  					origin: 'MovieStim.contains',
  					context: 'when determining whether MovieStim: ' + this._name + ' contains object: ' + util.toString(object),
  					error: 'unable to determine the position of the object'
  				};
  			}
  			var pos_px = util.to_px(this.pos, this.units, this._win);
  			var size_px = util.to_px(this.size, this.units, this._win);
  			var polygon_px = [[pos_px[0] - size_px[0] / 2, pos_px[1] - size_px[1] / 2], [pos_px[0] + size_px[0] / 2, pos_px[1] - size_px[1] / 2], [pos_px[0] + size_px[0] / 2, pos_px[1] + size_px[1] / 2], [pos_px[0] - size_px[0] / 2, pos_px[1] + size_px[1] / 2]];
  			return util.IsPointInsidePolygon(objectPos_px, polygon_px);
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (!this._needUpdate) return;
  			this._needUpdate = false;
  			this._pixi = undefined;
  			if (typeof this._movie === 'undefined') return;
  			this._texture = PIXI.Texture.fromVideo(this._movie);
  			this._pixi = new PIXI.Sprite(this._texture);
  			if (this._texture.width === 0) {
  				this._needUpdate = true;
  				return;
  			}
  			this._movie.muted = this._noAudio;
  			this._movie.volume = this._volume;
  			this._texture.baseTexture.autoPlay = this.autoPlay;
  			this._movie.loop = this._loop;
  			this._pixi.alpha = this.opacity;
  			var stimSize = this.size;
  			if (typeof stimSize === 'undefined') {
  				var textureSize = [this._texture.width, this._texture.height];
  				stimSize = util.to_unit(textureSize, 'pix', this.win, this.units);
  			}
  			var size_px = util.to_px(stimSize, this.units, this.win);
  			var scaleX = size_px[0] / this._texture.width;
  			var scaleY = size_px[1] / this._texture.height;
  			this._pixi.scale.x = this.flipHoriz ? -scaleX : scaleX;
  			this._pixi.scale.y = this.flipVert ? scaleY : -scaleY;
  			this._pixi.position = util.to_pixiPoint(this.pos, this.units, this.win);
  			this._pixi.rotation = this.ori * Math.PI / 180;
  			this._pixi.anchor.x = 0.5;
  			this._pixi.anchor.y = 0.5;
  		}
  	}]);
  	return MovieStim;
  }(VisualStim);

  var ShapeStim = function (_util$mix$with) {
  	inherits(ShapeStim, _util$mix$with);
  	function ShapeStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$lineWidth = _ref.lineWidth,
  		    lineWidth = _ref$lineWidth === undefined ? 1.5 : _ref$lineWidth,
  		    _ref$lineColor = _ref.lineColor,
  		    lineColor = _ref$lineColor === undefined ? new Color_js.Color('white') : _ref$lineColor,
  		    fillColor = _ref.fillColor,
  		    _ref$opacity = _ref.opacity,
  		    opacity = _ref$opacity === undefined ? 1.0 : _ref$opacity,
  		    _ref$vertices = _ref.vertices,
  		    vertices = _ref$vertices === undefined ? [[-0.5, 0], [0, 0.5], [0.5, 0]] : _ref$vertices,
  		    _ref$closeShape = _ref.closeShape,
  		    closeShape = _ref$closeShape === undefined ? true : _ref$closeShape,
  		    _ref$pos = _ref.pos,
  		    pos = _ref$pos === undefined ? [0, 0] : _ref$pos,
  		    _ref$size = _ref.size,
  		    size = _ref$size === undefined ? 1.0 : _ref$size,
  		    _ref$ori = _ref.ori,
  		    ori = _ref$ori === undefined ? 0.0 : _ref$ori,
  		    units = _ref.units,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    _ref$depth = _ref.depth,
  		    depth = _ref$depth === undefined ? 0 : _ref$depth,
  		    _ref$interpolate = _ref.interpolate,
  		    interpolate = _ref$interpolate === undefined ? true : _ref$interpolate,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, ShapeStim);
  		var _this = possibleConstructorReturn(this, (ShapeStim.__proto__ || Object.getPrototypeOf(ShapeStim)).call(this, { name: name, win: win, units: units, ori: ori, opacity: opacity, pos: pos, size: size, autoDraw: autoDraw, autoLog: autoLog }));
  		_this._pixiPolygon_px = undefined;
  		_this._addAttributes(ShapeStim, lineWidth, lineColor, fillColor, vertices, closeShape, contrast, depth, interpolate);
  		return _this;
  	}
  	createClass(ShapeStim, [{
  		key: 'setLineWidth',
  		value: function setLineWidth(lineWidth) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('lineWidth', lineWidth, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setLineColor',
  		value: function setLineColor(lineColor) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('lineColor', lineColor, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFillColor',
  		value: function setFillColor(fillColor) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._setAttribute('fillColor', fillColor, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setVertices',
  		value: function setVertices(vertices) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._psychoJS.logger.debug('set the vertices of ShapeStim:', this.name);
  			this._setAttribute('vertices', vertices, log);
  			this._needVertexUpdate = true;
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'contains',
  		value: function contains(object, units) {
  			this._psychoJS.logger.debug('test whether BaseShameStim:', this.name, 'contains object: ', 'name' in object ? object.name : object);
  			var objectPos_px = util.getPositionFromObject(object, units);
  			if (typeof objectPos_px === 'undefined') throw { origin: 'ShapeStim.contains', context: 'when determining whether BaseShameStim: ' + this._name + ' contains object: ' + util.toString(object), error: 'unable to determine the position of the object' };
  			var pos_px = util.to_px(this.pos, this.units, this.win);
  			var polygon_px = this._vertices_px.map(function (v) {
  				return [v[0] + pos_px[0], v[1] + pos_px[1]];
  			});
  			return util.IsPointInsidePolygon(objectPos_px, polygon_px);
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (!this._needUpdate) return;
  			this._needUpdate = false;
  			this._getPolygon();
  			this._pixi = undefined;
  			if (typeof this._pixiPolygon_px === 'undefined') return;
  			this._pixi = new PIXI.Graphics();
  			this._pixi.lineStyle(this._lineWidth, this._lineColor.int, this._opacity, 0.5);
  			if (typeof this._fillColor !== 'undefined') this._pixi.beginFill(this._fillColor.int, this._opacity);
  			this._pixi.drawPolygon(this._pixiPolygon_px);
  			if (typeof this._fillColor !== 'undefined') this._pixi.endFill();
  			this._pixi.position = util.to_pixiPoint(this.pos, this.units, this.win);
  			this._pixi.rotation = this.ori * Math.PI / 180.0;
  		}
  	}, {
  		key: '_getPolygon',
  		value: function _getPolygon()                  {
  			if (!this._needVertexUpdate) return;
  			this._needVertexUpdate = false;
  			this._getVertices_px();
  			var coords_px = [];
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = this._vertices_px[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var vertex_px = _step.value;
  					coords_px.push.apply(coords_px, vertex_px);
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  			if (coords_px.length >= 6 && this._closeShape) {
  				var n = coords_px.length;
  				if (coords_px[0] !== coords_px[n - 2] || coords_px[1] !== coords_px[n - 1]) {
  					coords_px.push(coords_px[0]);
  					coords_px.push(coords_px[1]);
  				}
  			}
  			this._pixiPolygon_px = new PIXI.Polygon(coords_px);
  			return this._pixiPolygon_px;
  		}
  	}]);
  	return ShapeStim;
  }(util.mix(VisualStim).with(ColorMixin_js.ColorMixin));

  var Rect = function (_ShapeStim) {
  	inherits(Rect, _ShapeStim);
  	function Rect() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$lineWidth = _ref.lineWidth,
  		    lineWidth = _ref$lineWidth === undefined ? 1.5 : _ref$lineWidth,
  		    _ref$lineColor = _ref.lineColor,
  		    lineColor = _ref$lineColor === undefined ? new Color_js.Color('white') : _ref$lineColor,
  		    fillColor = _ref.fillColor,
  		    _ref$opacity = _ref.opacity,
  		    opacity = _ref$opacity === undefined ? 1.0 : _ref$opacity,
  		    _ref$width = _ref.width,
  		    width = _ref$width === undefined ? 0.5 : _ref$width,
  		    _ref$height = _ref.height,
  		    height = _ref$height === undefined ? 0.5 : _ref$height,
  		    _ref$pos = _ref.pos,
  		    pos = _ref$pos === undefined ? [0, 0] : _ref$pos,
  		    _ref$size = _ref.size,
  		    size = _ref$size === undefined ? 1.0 : _ref$size,
  		    _ref$ori = _ref.ori,
  		    ori = _ref$ori === undefined ? 0.0 : _ref$ori,
  		    units = _ref.units,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    _ref$depth = _ref.depth,
  		    depth = _ref$depth === undefined ? 0 : _ref$depth,
  		    _ref$interpolate = _ref.interpolate,
  		    interpolate = _ref$interpolate === undefined ? true : _ref$interpolate,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, Rect);
  		var _this = possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, { name: name, win: win, lineWidth: lineWidth, lineColor: lineColor, fillColor: fillColor, opacity: opacity, pos: pos, ori: ori, size: size, units: units, contrast: contrast, depth: depth, interpolate: interpolate, autoDraw: autoDraw, autoLog: autoLog }));
  		_this._psychoJS.logger.debug('create a new Rect with name: ', name);
  		_this._addAttributes(Rect, width, height);
  		_this._updateVertices();
  		return _this;
  	}
  	createClass(Rect, [{
  		key: 'setWidth',
  		value: function setWidth(width) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._psychoJS.logger.debug('set the width of Rect: ', this.name, 'to: ', width);
  			this._setAttribute('width', width, log);
  			this._updateVertices();
  		}
  	}, {
  		key: 'setHeight',
  		value: function setHeight(height) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._psychoJS.logger.debug('set the height of Rect: ', this.name, 'to: ', height);
  			this._setAttribute('height', height, log);
  			this._updateVertices();
  		}
  	}, {
  		key: '_updateVertices',
  		value: function _updateVertices() {
  			this._psychoJS.logger.debug('update the vertices of Rect: ', this.name);
  			this.setVertices([[-this._width / 2.0, -this._height / 2.0], [this._width / 2.0, -this._height / 2.0], [this._width / 2.0, this._height / 2.0], [-this._width / 2.0, this._height / 2.0]]);
  		}
  	}]);
  	return Rect;
  }(ShapeStim);

  var Slider = function (_util$mix$with) {
  	inherits(Slider, _util$mix$with);
  	function Slider() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    pos = _ref.pos,
  		    size = _ref.size,
  		    ori = _ref.ori,
  		    _ref$units = _ref.units,
  		    units = _ref$units === undefined ? 'height' : _ref$units,
  		    _ref$color = _ref.color,
  		    color = _ref$color === undefined ? new Color_js.Color('LightGray') : _ref$color,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    opacity = _ref.opacity,
  		    _ref$style = _ref.style,
  		    style = _ref$style === undefined ? [Slider.Style.RATING] : _ref$style,
  		    _ref$ticks = _ref.ticks,
  		    ticks = _ref$ticks === undefined ? [1, 2, 3, 4, 5] : _ref$ticks,
  		    _ref$labels = _ref.labels,
  		    labels = _ref$labels === undefined ? [] : _ref$labels,
  		    labelHeight = _ref.labelHeight,
  		    _ref$granularity = _ref.granularity,
  		    granularity = _ref$granularity === undefined ? 0 : _ref$granularity,
  		    _ref$flip = _ref.flip,
  		    flip = _ref$flip === undefined ? false : _ref$flip,
  		    _ref$readOnly = _ref.readOnly,
  		    readOnly = _ref$readOnly === undefined ? false : _ref$readOnly,
  		    _ref$fontFamily = _ref.fontFamily,
  		    fontFamily = _ref$fontFamily === undefined ? 'Helvetica' : _ref$fontFamily,
  		    _ref$bold = _ref.bold,
  		    bold = _ref$bold === undefined ? true : _ref$bold,
  		    _ref$italic = _ref.italic,
  		    italic = _ref$italic === undefined ? false : _ref$italic,
  		    fontSize = _ref.fontSize,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, Slider);
  		var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, { name: name, win: win, units: units, ori: ori, opacity: opacity, pos: pos, size: size, autoDraw: autoDraw, autoLog: autoLog }));
  		_this._needMarkerUpdate = false;
  		_this._addAttributes(Slider, ticks, labels, labelHeight, granularity, flip, color, contrast, fontFamily, bold, italic, fontSize, style, readOnly);
  		_this._addAttribute('rating', undefined);
  		_this._addAttribute('markerPos', undefined);
  		_this._addAttribute('history', []);
  		_this._addAttribute('lineAspectRatio', 0.01);
  		_this._responseClock = new Clock_js.Clock();
  		_this._isCategorical = _this._ticks.length === 0;
  		return _this;
  	}
  	createClass(Slider, [{
  		key: 'contains',
  		value: function contains(object, units) {
  			var objectPos_px = util.getPositionFromObject(object, units);
  			if (typeof objectPos_px === 'undefined') throw { origin: 'Slider.contains', context: 'when determining whether Slider: ' + this._name + ' contains\n\t\t\tobject: ' + util.toString(object), error: 'unable to determine the position of the object' };
  			return false;
  		}
  	}, {
  		key: 'reset',
  		value: function reset() {
  			this.psychoJS.logger.debug('reset Slider: ', this._name);
  			this._markerPos = undefined;
  			this._history = [];
  			this._rating = undefined;
  			this._responseClock.reset();
  			this.status = PsychoJS_js.PsychoJS.Status.NOT_STARTED;
  			this._needMarkerUpdate = true;
  			this._needUpdate = true;
  			if (typeof this._marker !== 'undefined') this._marker.alpha = 0;
  		}
  	}, {
  		key: 'getRating',
  		value: function getRating() {
  			var historyLength = this._history.length;
  			if (historyLength > 0) return this._history[historyLength - 1]['rating'];else return undefined;
  		}
  	}, {
  		key: 'getRT',
  		value: function getRT() {
  			var historyLength = this._history.length;
  			if (historyLength > 0) return this._history[historyLength - 1]['responseTime'];else return undefined;
  		}
  	}, {
  		key: 'setFontSize',
  		value: function setFontSize(fontSize) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			if (typeof fontSize === 'undefined') {
  				fontSize = this._units === 'pix' ? 14 : 0.03;
  			}
  			var hasChanged = this._setAttribute('fontSize', fontSize, log);
  			if (hasChanged) {
  				this._needUpdate = true;
  				this._needVertexUpdate = true;
  			}
  		}
  	}, {
  		key: 'setBold',
  		value: function setBold() {
  			var bold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var hasChanged = this._setAttribute('bold', bold, log);
  			if (hasChanged) {
  				this._fontWeight = bold ? 'bold' : 'normal';
  				this._needUpdate = true;
  				this._needVertexUpdate = true;
  			}
  		}
  	}, {
  		key: 'setItalic',
  		value: function setItalic() {
  			var italic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var hasChanged = this._setAttribute('italic', italic, log);
  			if (hasChanged) {
  				this._fontStyle = italic ? 'italic' : 'normal';
  				this._needUpdate = true;
  				this._needVertexUpdate = true;
  			}
  		}
  	}, {
  		key: 'setReadOnly',
  		value: function setReadOnly() {
  			var readOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var hasChanged = this._setAttribute('readOnly', readOnly, log);
  			if (hasChanged) {
  				if (readOnly) this._opacity /= 2.0;
  				this._needUpdate = true;
  			}
  		}
  	}, {
  		key: 'setMarkerPos',
  		value: function setMarkerPos(displayedRating) {
  			var previousMarkerPos = this._markerPos;
  			this._markerPos = this._granularise(displayedRating);
  			if (previousMarkerPos !== this._markerPos) {
  				this._needMarkerUpdate = true;
  				this._needUpdate = true;
  			}
  		}
  	}, {
  		key: 'setRating',
  		value: function setRating(rating) {
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			rating = this._granularise(rating);
  			this._markerPos = rating;
  			if (this._isCategorical) rating = this._labels[Math.round(rating)];
  			this._setAttribute('rating', rating, log);
  		}
  	}, {
  		key: '_recordRating',
  		value: function _recordRating(rating) {
  			var responseTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  			var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  			if (typeof responseTime === 'undefined') responseTime = this._responseClock.getTime();
  			this.setRating(rating, log);
  			this._history.push({ rating: this._rating, responseTime: responseTime });
  			this.psychoJS.logger.debug('record a new rating: ', this._rating, 'with response time: ', responseTime, 'for Slider: ', this._name);
  			this._needMarkerUpdate = true;
  			this._needUpdate = true;
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (!this._needUpdate) return;
  			this._needUpdate = false;
  			this._buildSlider();
  			this._updateMarker();
  			this._pixi.scale.x = this._flipHoriz ? -1 : 1;
  			this._pixi.scale.y = this._flipVert ? 1 : -1;
  			this._pixi.rotation = this._ori * Math.PI / 180;
  			this._pixi.position = util.to_pixiPoint(this.pos, this.units, this.win);
  			this._pixi.alpha = this._opacity;
  		}
  	}, {
  		key: '_updateMarker',
  		value: function _updateMarker() {
  			if (!this._needMarkerUpdate) return;
  			this._needMarkerUpdate = false;
  			if (typeof this._marker !== 'undefined') {
  				if (typeof this._markerPos !== 'undefined') {
  					var visibleMarkerPos = this._ratingToPos([this._markerPos]);
  					this._marker.position = util.to_pixiPoint(visibleMarkerPos[0], this.units, this.win);
  					this._marker.alpha = 1;
  				} else this._marker.alpha = 0;
  			}
  		}
  	}, {
  		key: '_buildSlider',
  		value: function _buildSlider() {
  			var _this2 = this;
  			if (!this._needVertexUpdate) return;
  			this._needVertexUpdate = false;
  			this._applyStyle();
  			this._pixi = new PIXI.Container();
  			this._pixi.interactive = true;
  			this._body = new PIXI.Graphics();
  			this._body.interactive = true;
  			this._pixi.addChild(this._body);
  			var barSize_px = util.to_px(this._barSize, this._units, this._win).map(function (v) {
  				return Math.max(1, v);
  			});
  			if (this._barLineWidth_px > 0) {
  				this._body.lineStyle(this._barLineWidth_px, this._barLineColor.int, this._opacity, 0.5);
  				if (typeof this._barFillColor !== 'undefined') this._body.beginFill(this._barFillColor.int, this._opacity);
  				this._body.drawRect(-barSize_px[0] / 2, -barSize_px[1] / 2, barSize_px[0], barSize_px[1]);
  				if (typeof this._barFillColor !== 'undefined') this._body.endFill();
  			}
  			if (this._isCategorical) {
  				this._ticks = [].concat(toConsumableArray(Array(this._labels.length))).map(function (_, i) {
  					return i;
  				});
  				this._granularity = 1.0;
  			}
  			var tickPositions = this._ratingToPos(this._ticks);
  			var tickPositions_px = tickPositions.map(function (p) {
  				return util.to_px(p, _this2._units, _this2._win);
  			});
  			this._body.lineStyle(this._barLineWidth_px * 2, this._tickColor.int, this._opacity, 0.5);
  			var tickSize_px = util.to_px(this._tickSize, this._units, this._win);
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = tickPositions_px[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var tickPosition_px = _step.value;
  					if (this._tickType === Slider.Shape.LINE) {
  						this._body.moveTo(tickPosition_px[0] - tickSize_px[0] / 2, tickPosition_px[1] - tickSize_px[1] / 2);
  						this._body.lineTo(tickPosition_px[0] + tickSize_px[0] / 2, tickPosition_px[1] + tickSize_px[1] / 2);
  					} else if (this._tickType === Slider.Shape.DISC) {
  						this._body.beginFill(this._tickColor.int, this._opacity);
  						this._body.drawCircle(tickPosition_px[0], tickPosition_px[1], Math.max(tickSize_px[0], tickSize_px[1]));
  						this._body.endFill();
  					}
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  			var eventCaptureRectangle = new PIXI.Graphics();
  			eventCaptureRectangle.beginFill(0, 0);
  			eventCaptureRectangle.drawRect(-barSize_px[0] / 2 - tickSize_px[0] / 2, -barSize_px[1] / 2 - tickSize_px[1] / 2, barSize_px[0] + tickSize_px[0], barSize_px[1] + tickSize_px[1]);
  			eventCaptureRectangle.endFill();
  			this._pixi.addChild(eventCaptureRectangle);
  			var labelPositions_px = [].concat(toConsumableArray(Array(this._labels.length))).map(function (_, i) {
  				return tickPositions_px[Math.round(i / (_this2._labels.length - 1) * (_this2._ticks.length - 1))];
  			});
  			var fontSize_px = util.to_px([this._fontSize, this._fontSize], this._units, this._win);
  			for (var l = 0; l < labelPositions_px.length; ++l) {
  				var labelText = new PIXI.Text(this._labels[l], {
  					fontFamily: this._fontFamily,
  					fontWeight: this._fontWeight,
  					fontStyle: this._fontStyle,
  					fontSize: Math.round(fontSize_px[0]),
  					fill: this._labelColor.hex,
  					align: this._labelAlign });
  				var labelBounds = labelText.getBounds(true);
  				labelText.position.x = labelPositions_px[l][0];
  				labelText.position.y = labelPositions_px[l][1];
  				labelText.anchor.x = this._labelAnchor.x;
  				labelText.anchor.y = this._labelAnchor.y;
  				if (this._isHorizontal()) {
  					if (this._flip) labelText.position.y -= labelBounds.height + tickSize_px[1];else labelText.position.y += tickSize_px[1];
  				} else {
  					if (this._flip) labelText.position.x += tickSize_px[0];else if (this._labelOri === 0) labelText.position.x -= labelBounds.width + tickSize_px[0];else labelText.position.x -= tickSize_px[0];
  				}
  				labelText.rotation = (this._ori + this._labelOri) * Math.PI / 180;
  				labelText.alpha = this._opacity;
  				this._pixi.addChild(labelText);
  			}
  			var markerSize_px = Math.max.apply(Math, toConsumableArray(util.to_px(this._markerSize, this._units, this._win)));
  			this._marker = new PIXI.Graphics();
  			this._marker.alpha = 0;
  			this._marker.interactive = true;
  			this._pixi.addChild(this._marker);
  			if (this._markerType === Slider.Shape.DISC) {
  				this._marker.lineStyle(1, this._markerColor.int, this._opacity, 0.5);
  				this._marker.beginFill(this._markerColor.int, this._opacity);
  				this._marker.drawCircle(0, 0, markerSize_px / 2);
  				this._marker.endFill();
  			} else if (this._markerType === Slider.Shape.TRIANGLE) {
  				this._marker.lineStyle(1, this._markerColor.int, this._opacity, 0.5);
  				this._marker.beginFill(this._markerColor.int, this._opacity);
  				this._marker.moveTo(0, 0);
  				if (this._isHorizontal()) {
  					if (this._flip) {
  						this._marker.lineTo(markerSize_px, markerSize_px);
  						this._marker.lineTo(-markerSize_px, markerSize_px);
  					} else {
  						this._marker.lineTo(markerSize_px, -markerSize_px);
  						this._marker.lineTo(-markerSize_px, -markerSize_px);
  					}
  				} else {
  					if (this._flip) {
  						this._marker.lineTo(-markerSize_px, markerSize_px);
  						this._marker.lineTo(-markerSize_px, -markerSize_px);
  					} else {
  						this._marker.lineTo(markerSize_px, markerSize_px);
  						this._marker.lineTo(markerSize_px, -markerSize_px);
  					}
  				}
  				this._marker.endFill();
  			}
  			var self = this;
  			self._markerDragging = false;
  			this._marker.pointerdown = this._marker.mousedown = this._marker.touchstart = function (event) {
  				if (event.data.button === 0) self._markerDragging = true;
  				event.stopPropagation();
  			};
  			this._marker.pointerup = this._marker.mouseup = this._marker.touchend = function (event) {
  				if (self._markerDragging) {
  					self._markerDragging = false;
  					var mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
  					var rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
  					self._recordRating(rating);
  					event.stopPropagation();
  				}
  			};
  			this._marker.pointerupoutside = this._marker.mouseupoutside = this._marker.touchendoutside = function (event) {
  				if (self._markerDragging) {
  					var mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
  					var rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
  					self._recordRating(rating);
  					self._markerDragging = false;
  					event.stopPropagation();
  				}
  			};
  			this._marker.pointermove = function (event) {
  				if (self._markerDragging) {
  					var mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
  					var rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
  					self.setMarkerPos(rating);
  					event.stopPropagation();
  				}
  			};
  			this._pixi.pointerup = this._pixi.mouseup = this._pixi.touchend = function (event) {
  				var mouseLocalPos_px = event.data.getLocalPosition(self._body);
  				var rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
  				self._recordRating(rating);
  				event.stopPropagation();
  			};
  		}
  	}, {
  		key: '_applyStyle',
  		value: function _applyStyle() {
  			if (this._isHorizontal()) {
  				this._barSize = [this._size[0], 0];
  				this._tickSize = [0, this._size[1]];
  				this._labelAnchor = new PIXI.Point(0.5, 0);
  			} else {
  				this._barSize = [0, this._size[1]];
  				this._tickSize = [this._size[0], 0];
  				this._labelAnchor = new PIXI.Point(0, 0.5);
  			}
  			this._barLineWidth_px = 1;
  			this._barLineColor = this._color;
  			this._barFillColor = undefined;
  			this._tickType = Slider.Shape.LINE;
  			this._tickColor = this._color;
  			this._markerColor = new Color_js.Color('red');
  			this._markerType = Slider.Shape.DISC;
  			this._markerSize = this._tickSize;
  			this._labelColor = this._color;
  			this._labelAlign = 'center';
  			this._labelOri = 0;
  			if (this._style.indexOf(Slider.Style.RATING) > -1) ;
  			if (this._style.indexOf(Slider.Style.TRIANGLE_MARKER) > -1) {
  				this._markerType = Slider.Shape.TRIANGLE;
  				this._markerSize = this._markerSize.map(function (s) {
  					return s * 2;
  				});
  			}
  			if (this._style.indexOf(Slider.Style.SLIDER) > -1) {
  				this.psychoJS.logger.warn('"slider" style not implemented!');
  			}
  			if (this._style.indexOf(Slider.Style.WHITE_ON_BLACK) > -1) {
  				this._barLineColor = new Color_js.Color('black');
  				this._tickColor = new Color_js.Color('black');
  				this._markerColor = new Color_js.Color('white');
  				this._labelColor = new Color_js.Color('black');
  			}
  			if (this._style.indexOf(Slider.Style.LABELS45) > -1) {
  				if (this._flip) {
  					this._labelAnchor = new PIXI.Point(0, 0.5);
  					this._labelAlign = 'left';
  				} else {
  					this._labelAnchor = new PIXI.Point(1, 0.5);
  					this._labelAlign = 'right';
  				}
  				this._labelOri = -45;
  			}
  			if (this._style.indexOf(Slider.Style.RADIO) > -1) {
  				this._barLineWidth_px = 0;
  				this._tickType = Slider.Shape.DISC;
  				this._markerColor = this.getContrastedColor(this._tickColor, 0.5);
  				this._markerSize.x *= 0.7;
  				this._markerSize.y *= 0.7;
  			}
  		}
  	}, {
  		key: '_ratingToPos',
  		value: function _ratingToPos(ratings) {
  			var _this3 = this;
  			var range = this._ticks[this._ticks.length - 1] - this._ticks[0];
  			if (this._isHorizontal()) return ratings.map(function (v) {
  				return [((v - _this3._ticks[0]) / range - 0.5) * _this3._size[0], 0];
  			});else return ratings.map(function (v) {
  				return [0, (1.0 - (v - _this3._ticks[0]) / range - 0.5) * _this3._size[1]];
  			});
  		}
  	}, {
  		key: '_posToRating',
  		value: function _posToRating(pos_px) {
  			var range = this._ticks[this._ticks.length - 1] - this._ticks[0];
  			var size_px = util.to_px(this._size, this._units, this._win);
  			if (this._isHorizontal()) return (pos_px[0] / size_px[0] + 0.5) * range + this._ticks[0];
  			else return (1.0 - (pos_px[1] / size_px[1] + 0.5)) * range + this._ticks[0];
  		}
  	}, {
  		key: '_isHorizontal',
  		value: function _isHorizontal() {
  			return this._size[0] > this._size[1];
  		}
  	}, {
  		key: '_granularise',
  		value: function _granularise(rating) {
  			if (typeof rating === 'undefined') return undefined;
  			if (this._granularity > 0) rating = Math.round(rating / this._granularity) * this._granularity;
  			rating = Math.min(Math.max(this._ticks[0], rating), this._ticks[this._ticks.length - 1]);
  			return rating;
  		}
  	}]);
  	return Slider;
  }(util.mix(VisualStim).with(ColorMixin_js.ColorMixin));
  Slider.Shape = {
  	DISC: Symbol.for('DISC'),
  	TRIANGLE: Symbol.for('TRIANGLE'),
  	LINE: Symbol.for('LINE'),
  	BOX: Symbol.for('BOX')
  };
  Slider.Style = {
  	RATING: Symbol.for('RATING'),
  	TRIANGLE_MARKER: Symbol.for('TRIANGLE_MARKER'),
  	SLIDER: Symbol.for('SLIDER'),
  	WHITE_ON_BLACK: Symbol.for('WHITE_ON_BLACK'),
  	LABELS45: Symbol.for('LABELS45'),
  	RADIO: Symbol.for('RADIO')
  };

  var TextStim = function (_util$mix$with) {
  	inherits(TextStim, _util$mix$with);
  	function TextStim() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$text = _ref.text,
  		    text = _ref$text === undefined ? 'Hello World' : _ref$text,
  		    _ref$font = _ref.font,
  		    font = _ref$font === undefined ? 'Arial' : _ref$font,
  		    pos = _ref.pos,
  		    _ref$color = _ref.color,
  		    color = _ref$color === undefined ? new Color_js.Color('white') : _ref$color,
  		    opacity = _ref.opacity,
  		    _ref$contrast = _ref.contrast,
  		    contrast = _ref$contrast === undefined ? 1.0 : _ref$contrast,
  		    units = _ref.units,
  		    ori = _ref.ori,
  		    _ref$height = _ref.height,
  		    height = _ref$height === undefined ? 0.1 : _ref$height,
  		    _ref$bold = _ref.bold,
  		    bold = _ref$bold === undefined ? false : _ref$bold,
  		    _ref$italic = _ref.italic,
  		    italic = _ref$italic === undefined ? false : _ref$italic,
  		    _ref$alignHoriz = _ref.alignHoriz,
  		    alignHoriz = _ref$alignHoriz === undefined ? 'center' : _ref$alignHoriz,
  		    _ref$alignVert = _ref.alignVert,
  		    alignVert = _ref$alignVert === undefined ? 'center' : _ref$alignVert,
  		    wrapWidth = _ref.wrapWidth,
  		    _ref$flipHoriz = _ref.flipHoriz,
  		    flipHoriz = _ref$flipHoriz === undefined ? false : _ref$flipHoriz,
  		    _ref$flipVert = _ref.flipVert,
  		    flipVert = _ref$flipVert === undefined ? false : _ref$flipVert,
  		    autoDraw = _ref.autoDraw,
  		    autoLog = _ref.autoLog;
  		classCallCheck(this, TextStim);
  		var _this = possibleConstructorReturn(this, (TextStim.__proto__ || Object.getPrototypeOf(TextStim)).call(this, { name: name, win: win, units: units, ori: ori, opacity: opacity, pos: pos, autoDraw: autoDraw, autoLog: autoLog }));
  		_this._addAttributes(TextStim, text, font, color, contrast, height, bold, italic, alignHoriz, alignVert, wrapWidth, flipHoriz, flipVert);
  		return _this;
  	}
  	createClass(TextStim, [{
  		key: 'setText',
  		value: function setText(text, log) {
  			this._setAttribute('text', text, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setAlignHoriz',
  		value: function setAlignHoriz(alignHoriz, log) {
  			this._setAttribute('alignHoriz', alignHoriz, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setWrapWidth',
  		value: function setWrapWidth(wrapWidth, log) {
  			if (typeof wrapWidth === 'undefined') {
  				if (!TextStim._defaultWrapWidthMap.has(this._units)) throw { origin: 'TextStim.setWrapWidth', context: 'when setting the wrap width of TextStim: ' + this._name, error: 'no default wrap width for unit: ' + this._units };
  				wrapWidth = TextStim._defaultWrapWidthMap.get(this._units);
  			}
  			this._setAttribute('wrapWidth', wrapWidth, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setHeight',
  		value: function setHeight(height, log) {
  			if (typeof height === 'undefined') {
  				if (!TextStim._defaultLetterHeightMap.has(this._units)) throw { origin: 'TextStim.setHeight', context: 'when setting the height of TextStim: ' + this._name, error: 'no default letter height for unit: ' + this._units };
  				height = TextStim._defaultLetterHeightMap.get(this._units);
  			}
  			this._setAttribute('height', height, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setItalic',
  		value: function setItalic(italic, log) {
  			this._setAttribute('italic', italic, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setBold',
  		value: function setBold(bold, log) {
  			this._setAttribute('bold', bold, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFlipVert',
  		value: function setFlipVert(flipVert, log) {
  			this._setAttribute('flipVert', flipVert, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'setFlipHoriz',
  		value: function setFlipHoriz(flipHoriz, log) {
  			this._setAttribute('flipHoriz', flipHoriz, log);
  			this._needUpdate = true;
  		}
  	}, {
  		key: 'contains',
  		value: function contains(object, units) {
  			var objectPos_px = util.getPositionFromObject(object, units);
  			if (typeof objectPos_px === 'undefined') throw { origin: 'TextStim.contains', context: 'when determining whether TextStim: ' + this._name + ' contains object: ' + util.toString(object), error: 'unable to determine the position of the object' };
  			return false;
  		}
  	}, {
  		key: '_updateIfNeeded',
  		value: function _updateIfNeeded() {
  			if (!this._needUpdate) return;
  			this._needUpdate = false;
  			this._heightPix = this._getLengthPix(this._height);
  			var fontSize = Math.round(this._heightPix);
  			var color = this.getContrastedColor(this._color, this._contrast);
  			var font = (this._bold ? 'bold ' : '') + (this._italic ? 'italic ' : '') + fontSize + 'px ' + this._font;
  			this._pixi = new PIXI.Text(this._text, {
  				font: font,
  				fill: color.hex,
  				align: this._alignHoriz,
  				wordWrap: typeof this._wrapWidth !== 'undefined',
  				wordWrapWidth: this._wrapWidth ? this._getHorLengthPix(this._wrapWidth) : 0
  			});
  			this._pixi.anchor.x = 0.5;
  			this._pixi.anchor.y = 0.5;
  			this._pixi.scale.x = this._flipHoriz ? -1 : 1;
  			this._pixi.scale.y = this._flipVert ? 1 : -1;
  			this._pixi.rotation = this._ori * Math.PI / 180;
  			this._pixi.position = util.to_pixiPoint(this.pos, this.units, this.win);
  			this._pixi.alpha = this._opacity;
  			this._size = [this._getLengthUnits(Math.abs(this._pixi.width)), this._getLengthUnits(Math.abs(this._pixi.height))];
  		}
  	}]);
  	return TextStim;
  }(util.mix(VisualStim).with(ColorMixin_js.ColorMixin));
  TextStim._defaultLetterHeightMap = new Map([['cm', 1.0], ['deg', 1.0], ['degs', 1.0], ['degFlatPos', 1.0], ['degFlat', 1.0], ['norm', 0.1], ['height', 0.2], ['pix', 20], ['pixels', 20]]);
  TextStim._defaultWrapWidthMap = new Map([['cm', 15.0], ['deg', 15.0], ['degs', 15.0], ['degFlatPos', 15.0], ['degFlat', 15.0], ['norm', 1], ['height', 1], ['pix', 500], ['pixels', 500]]);

  exports.ImageStim = ImageStim;
  exports.MovieStim = MovieStim;
  exports.Rect = Rect;
  exports.ShapeStim = ShapeStim;
  exports.Slider = Slider;
  exports.TextStim = TextStim;
  exports.VisualStim = VisualStim;

  return exports;

}({},core,core,util,util,util,core,util));
var sound = (function (exports,PsychObject_js,PsychoJS_js) {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var SoundPlayer = function (_PsychObject) {
  	inherits(SoundPlayer, _PsychObject);
  	function SoundPlayer(psychoJS) {
  		classCallCheck(this, SoundPlayer);
  		return possibleConstructorReturn(this, (SoundPlayer.__proto__ || Object.getPrototypeOf(SoundPlayer)).call(this, psychoJS));
  	}
  	createClass(SoundPlayer, [{
  		key: 'play',
  		value: function play(loops) {
  			throw { origin: 'SoundPlayer.play', context: 'when starting the playback of a sound', error: 'this method is abstract and should not be called.' };
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			throw { origin: 'SoundPlayer.stop', context: 'when stopping the playback of a sound', error: 'this method is abstract and should not be called.' };
  		}
  	}, {
  		key: 'getDuration',
  		value: function getDuration() {
  			throw { origin: 'SoundPlayer.getDuration', context: 'when getting the duration of the sound', error: 'this method is abstract and should not be called.' };
  		}
  	}, {
  		key: 'setLoops',
  		value: function setLoops(loops) {
  			throw { origin: 'SoundPlayer.setLoops', context: 'when setting the number of loops', error: 'this method is abstract and should not be called.' };
  		}
  	}, {
  		key: 'setVolume',
  		value: function setVolume(volume) {
  			throw { origin: 'SoundPlayer.setVolume', context: 'when setting the volume of the sound', error: 'this method is abstract and should not be called.' };
  		}
  	}], [{
  		key: 'accept',
  		value: function accept(sound) {
  			throw { origin: 'SoundPlayer.accept', context: 'when evaluating whether this player can play a given sound', error: 'this method is abstract and should not be called.' };
  		}
  	}]);
  	return SoundPlayer;
  }(PsychObject_js.PsychObject);

  var TonePlayer = function (_SoundPlayer) {
  	inherits(TonePlayer, _SoundPlayer);
  	function TonePlayer() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    _ref$note = _ref.note,
  		    note = _ref$note === undefined ? 'C4' : _ref$note,
  		    _ref$duration_s = _ref.duration_s,
  		    duration_s = _ref$duration_s === undefined ? 0.5 : _ref$duration_s,
  		    _ref$volume = _ref.volume,
  		    volume = _ref$volume === undefined ? 1.0 : _ref$volume,
  		    _ref$loops = _ref.loops,
  		    loops = _ref$loops === undefined ? 0 : _ref$loops;
  		classCallCheck(this, TonePlayer);
  		var _this = possibleConstructorReturn(this, (TonePlayer.__proto__ || Object.getPrototypeOf(TonePlayer)).call(this, psychoJS));
  		_this._addAttributes(TonePlayer, note, duration_s, volume, loops);
  		_this._synthOtions = {
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
  		_this._synth = new Tone.Synth(_this._synthOtions);
  		_this._volumeNode = new Tone.Volume(-60 + volume * 66);
  		_this._synth.connect(_this._volumeNode);
  		_this._volumeNode.toMaster();
  		_this._toneLoop = null;
  		return _this;
  	}
  	createClass(TonePlayer, [{
  		key: 'getDuration',
  		value: function getDuration() {
  			return this.duration_s;
  		}
  	}, {
  		key: 'setLoops',
  		value: function setLoops(loops) {
  			this._loops = loops;
  		}
  	}, {
  		key: 'setVolume',
  		value: function setVolume(volume) {
  			var mute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._volume = volume;
  			if (typeof this._volumeNode !== 'undefined') {
  				this._volumeNode.mute = mute;
  				this._synth.volume.value = -60 + volume * 66;
  			}
  		}
  	}, {
  		key: 'play',
  		value: function play(loops) {
  			if (typeof loops !== 'undefined') this._loops = loops;
  			var self = this;
  			var callback = function callback(time) {
  				self._synth.triggerAttackRelease(self._note, self.duration_s, Tone.now());
  			};
  			if (this.loops == 0) this._toneId = Tone.Transport.scheduleOnce(callback, Tone.now());else if (this.loops == -1) this._toneId = Tone.Transport.scheduleRepeat(callback, this.duration_s, Tone.now(), Tone.Infinity);else this._toneId = Tone.Transport.scheduleRepeat(callback, this.duration_s, Tone.now(), this.duration_s * (this._loops + 1));
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			if (this._toneId) Tone.Transport.clear(this._toneId);
  		}
  	}], [{
  		key: 'accept',
  		value: function accept(sound) {
  			if ($.isNumeric(sound.value)) {
  				var player = new TonePlayer({
  					psychoJS: sound.psychoJS,
  					note: sound.value,
  					duration_s: sound.secs,
  					volume: sound.volume,
  					loops: sound.loops
  				});
  				return player;
  			}
  			if (typeof sound.value === 'string') {
  				var psychopyToToneMap = new Map();
  				var _arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  				for (var _i = 0; _i < _arr.length; _i++) {
  					var _note = _arr[_i];
  					psychopyToToneMap.set(_note, _note);
  					psychopyToToneMap.set(_note + 'fl', _note + 'b');
  					psychopyToToneMap.set(_note + 'sh', _note + '#');
  				}
  				var note = psychopyToToneMap.get(sound.value);
  				if (typeof note !== 'undefined') {
  					var _player = new TonePlayer({
  						psychoJS: sound.psychoJS,
  						note: note + sound.octave,
  						duration_s: sound.secs,
  						volume: sound.volume,
  						loops: sound.loops
  					});
  					return _player;
  				}
  			}
  			return undefined;
  		}
  	}]);
  	return TonePlayer;
  }(SoundPlayer);
  Tone.Transport.start(Tone.now());

  var TrackPlayer = function (_SoundPlayer) {
  	inherits(TrackPlayer, _SoundPlayer);
  	function TrackPlayer() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    psychoJS = _ref.psychoJS,
  		    howl = _ref.howl,
  		    _ref$startTime = _ref.startTime,
  		    startTime = _ref$startTime === undefined ? 0 : _ref$startTime,
  		    _ref$stopTime = _ref.stopTime,
  		    stopTime = _ref$stopTime === undefined ? -1 : _ref$stopTime,
  		    _ref$stereo = _ref.stereo,
  		    stereo = _ref$stereo === undefined ? true : _ref$stereo,
  		    _ref$volume = _ref.volume,
  		    volume = _ref$volume === undefined ? 0 : _ref$volume,
  		    _ref$loops = _ref.loops,
  		    loops = _ref$loops === undefined ? 0 : _ref$loops;
  		classCallCheck(this, TrackPlayer);
  		var _this = possibleConstructorReturn(this, (TrackPlayer.__proto__ || Object.getPrototypeOf(TrackPlayer)).call(this, psychoJS));
  		_this._addAttributes(TrackPlayer, howl, startTime, stopTime, stereo, loops, volume);
  		_this._currentLoopIndex = -1;
  		return _this;
  	}
  	createClass(TrackPlayer, [{
  		key: 'getDuration',
  		value: function getDuration() {
  			return this._howl.duration();
  		}
  	}, {
  		key: 'setVolume',
  		value: function setVolume(volume) {
  			var mute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			this._volume = volume;
  			this._howl.volume(volume);
  			this._howl.mute(mute);
  		}
  	}, {
  		key: 'setLoops',
  		value: function setLoops(loops) {
  			this._loops = loops;
  			this._currentLoopIndex = -1;
  			if (loops == 0) this._howl.loop(false);else this._howl.loop(true);
  		}
  	}, {
  		key: 'play',
  		value: function play(loops) {
  			var _this2 = this;
  			if (typeof loops !== 'undefined') this.setLoops(loops);
  			if (loops > 0) {
  				var self = this;
  				this._howl.on('end', function (event) {
  					++_this2._currentLoopIndex;
  					if (self._currentLoopIndex > self._loops) self.stop();else {
  						self._howl.seek(self._startTime);
  						self._howl.play();
  					}
  				});
  			}
  			this._howl.seek(this._startTime);
  			this._howl.play();
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			this._howl.stop();
  			this._howl.off('end');
  		}
  	}], [{
  		key: 'accept',
  		value: function accept(sound) {
  			if (typeof sound.value === 'string') {
  				var howl = sound.psychoJS.serverManager.getResource(sound.value);
  				if (typeof howl !== 'undefined') {
  					var player = new TrackPlayer({
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
  	}]);
  	return TrackPlayer;
  }(SoundPlayer);

  var Sound = function (_PsychObject) {
  	inherits(Sound, _PsychObject);
  	function Sound() {
  		var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  		    name = _ref.name,
  		    win = _ref.win,
  		    _ref$value = _ref.value,
  		    value = _ref$value === undefined ? 'C' : _ref$value,
  		    _ref$octave = _ref.octave,
  		    octave = _ref$octave === undefined ? 4 : _ref$octave,
  		    _ref$secs = _ref.secs,
  		    secs = _ref$secs === undefined ? 0.5 : _ref$secs,
  		    _ref$startTime = _ref.startTime,
  		    startTime = _ref$startTime === undefined ? 0 : _ref$startTime,
  		    _ref$stopTime = _ref.stopTime,
  		    stopTime = _ref$stopTime === undefined ? -1 : _ref$stopTime,
  		    _ref$stereo = _ref.stereo,
  		    stereo = _ref$stereo === undefined ? true : _ref$stereo,
  		    _ref$volume = _ref.volume,
  		    volume = _ref$volume === undefined ? 1.0 : _ref$volume,
  		    _ref$loops = _ref.loops,
  		    loops = _ref$loops === undefined ? 0 : _ref$loops,
  		    _ref$hamming = _ref.hamming,
  		    hamming = _ref$hamming === undefined ? true : _ref$hamming,
  		    _ref$autoLog = _ref.autoLog,
  		    autoLog = _ref$autoLog === undefined ? true : _ref$autoLog;
  		classCallCheck(this, Sound);
  		var _this = possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).call(this, win._psychoJS, name));
  		_this._player = undefined;
  		_this._addAttributes(Sound, win, value, octave, secs, startTime, stopTime, stereo, volume, loops, hamming, autoLog);
  		_this._getPlayer();
  		_this.status = PsychoJS_js.PsychoJS.Status.NOT_STARTED;
  		return _this;
  	}
  	createClass(Sound, [{
  		key: 'play',
  		value: function play(loops) {
  			this.status = PsychoJS_js.PsychoJS.Status.STARTED;
  			this._player.play(loops);
  		}
  	}, {
  		key: 'stop',
  		value: function stop() {
  			var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  			    _ref2$log = _ref2.log;
  			this._player.stop();
  			this.status = PsychoJS_js.PsychoJS.Status.STOPPED;
  		}
  	}, {
  		key: 'getDuration',
  		value: function getDuration() {
  			return this._player.getDuration();
  		}
  	}, {
  		key: 'setVolume',
  		value: function setVolume(volume) {
  			var mute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  			var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  			this._setAttribute('volume', volume, log);
  			if (typeof this._player !== 'undefined') this._player.setVolume(volume, mute);
  		}
  	}, {
  		key: 'setLoops',
  		value: function setLoops() {
  			var loops = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  			var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  			this._setAttribute('loops', loops, log);
  			if (typeof this._player !== 'undefined') this._player.setLoops(loops);
  		}
  	}, {
  		key: '_getPlayer',
  		value: function _getPlayer() {
  			var acceptFns = [function (sound) {
  				return TonePlayer.accept(sound);
  			}, function (sound) {
  				return TrackPlayer.accept(sound);
  			}];
  			var _iteratorNormalCompletion = true;
  			var _didIteratorError = false;
  			var _iteratorError = undefined;
  			try {
  				for (var _iterator = acceptFns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  					var acceptFn = _step.value;
  					this._player = acceptFn(this);
  					if (typeof this._player !== 'undefined') return;
  				}
  			} catch (err) {
  				_didIteratorError = true;
  				_iteratorError = err;
  			} finally {
  				try {
  					if (!_iteratorNormalCompletion && _iterator.return) {
  						_iterator.return();
  					}
  				} finally {
  					if (_didIteratorError) {
  						throw _iteratorError;
  					}
  				}
  			}
  			throw { origin: 'SoundPlayer._getPlayer', context: 'when finding a player for the sound', error: 'could not find an appropriate player.' };
  		}
  	}]);
  	return Sound;
  }(PsychObject_js.PsychObject);

  exports.Sound = Sound;
  exports.SoundPlayer = SoundPlayer;
  exports.TonePlayer = TonePlayer;
  exports.TrackPlayer = TrackPlayer;

  return exports;

}({},util,core));

// adding a few top level variables for convenience
// (e.g. this makes it possible to use "return Scheduler.Event.NEXT;" instead of "util.Scheduler.Event.NEXT;")

PsychoJS = core.PsychoJS;
TrialHandler = data.TrialHandler;
Scheduler = util.Scheduler;
