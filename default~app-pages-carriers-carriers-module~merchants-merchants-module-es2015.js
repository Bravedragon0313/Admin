(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-carriers-carriers-module~merchants-merchants-module"],{

/***/ "../../node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.6.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

var version = "1.6.0";

/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */

var freeze = Object.freeze;
Object.freeze = function (obj) { return obj; };

// @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
function extend(dest) {
	var i, j, len, src;

	for (j = 1, len = arguments.length; j < len; j++) {
		src = arguments[j];
		for (i in src) {
			dest[i] = src[i];
		}
	}
	return dest;
}

// @function create(proto: Object, properties?: Object): Object
// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
var create = Object.create || (function () {
	function F() {}
	return function (proto) {
		F.prototype = proto;
		return new F();
	};
})();

// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
function bind(fn, obj) {
	var slice = Array.prototype.slice;

	if (fn.bind) {
		return fn.bind.apply(fn, slice.call(arguments, 1));
	}

	var args = slice.call(arguments, 2);

	return function () {
		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
	};
}

// @property lastId: Number
// Last unique ID used by [`stamp()`](#util-stamp)
var lastId = 0;

// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
function stamp(obj) {
	/*eslint-disable */
	obj._leaflet_id = obj._leaflet_id || ++lastId;
	return obj._leaflet_id;
	/* eslint-enable */
}

// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
function throttle(fn, time, context) {
	var lock, args, wrapperFn, later;

	later = function () {
		// reset lock and call if queued
		lock = false;
		if (args) {
			wrapperFn.apply(context, args);
			args = false;
		}
	};

	wrapperFn = function () {
		if (lock) {
			// called too soon, queue to call later
			args = arguments;

		} else {
			// call and lock until later
			fn.apply(context, arguments);
			setTimeout(later, time);
			lock = true;
		}
	};

	return wrapperFn;
}

// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
function wrapNum(x, range, includeMax) {
	var max = range[1],
	    min = range[0],
	    d = max - min;
	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}

// @function falseFn(): Function
// Returns a function which always returns `false`.
function falseFn() { return false; }

// @function formatNum(num: Number, digits?: Number): Number
// Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
function formatNum(num, digits) {
	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
	return Math.round(num * pow) / pow;
}

// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
function trim(str) {
	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
function splitWords(str) {
	return trim(str).split(/\s+/);
}

// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
function setOptions(obj, options) {
	if (!obj.hasOwnProperty('options')) {
		obj.options = obj.options ? create(obj.options) : {};
	}
	for (var i in options) {
		obj.options[i] = options[i];
	}
	return obj.options;
}

// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
function getParamString(obj, existingUrl, uppercase) {
	var params = [];
	for (var i in obj) {
		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
	}
	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
}

var templateRe = /\{ *([\w_-]+) *\}/g;

// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
function template(str, data) {
	return str.replace(templateRe, function (str, key) {
		var value = data[key];

		if (value === undefined) {
			throw new Error('No value provided for variable ' + str);

		} else if (typeof value === 'function') {
			value = value(data);
		}
		return value;
	});
}

// @function isArray(obj): Boolean
// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
var isArray = Array.isArray || function (obj) {
	return (Object.prototype.toString.call(obj) === '[object Array]');
};

// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
function indexOf(array, el) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === el) { return i; }
	}
	return -1;
}

// @property emptyImageUrl: String
// Data URI string containing a base64-encoded empty GIF image.
// Used as a hack to free memory from unused images on WebKit-powered
// mobile devices (by setting image `src` to this string).
var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

function getPrefixed(name) {
	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
}

var lastTime = 0;

// fallback for IE 7-8
function timeoutDefer(fn) {
	var time = +new Date(),
	    timeToCall = Math.max(0, 16 - (time - lastTime));

	lastTime = time + timeToCall;
	return window.setTimeout(fn, timeToCall);
}

var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
function requestAnimFrame(fn, context, immediate) {
	if (immediate && requestFn === timeoutDefer) {
		fn.call(context);
	} else {
		return requestFn.call(window, bind(fn, context));
	}
}

// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
function cancelAnimFrame(id) {
	if (id) {
		cancelFn.call(window, id);
	}
}


var Util = (Object.freeze || Object)({
	freeze: freeze,
	extend: extend,
	create: create,
	bind: bind,
	lastId: lastId,
	stamp: stamp,
	throttle: throttle,
	wrapNum: wrapNum,
	falseFn: falseFn,
	formatNum: formatNum,
	trim: trim,
	splitWords: splitWords,
	setOptions: setOptions,
	getParamString: getParamString,
	template: template,
	isArray: isArray,
	indexOf: indexOf,
	emptyImageUrl: emptyImageUrl,
	requestFn: requestFn,
	cancelFn: cancelFn,
	requestAnimFrame: requestAnimFrame,
	cancelAnimFrame: cancelAnimFrame
});

// @class Class
// @aka L.Class

// @section
// @uninheritable

// Thanks to John Resig and Dean Edwards for inspiration!

function Class() {}

Class.extend = function (props) {

	// @function extend(props: Object): Function
	// [Extends the current class](#class-inheritance) given the properties to be included.
	// Returns a Javascript function that is a class constructor (to be called with `new`).
	var NewClass = function () {

		// call the constructor
		if (this.initialize) {
			this.initialize.apply(this, arguments);
		}

		// call all constructor hooks
		this.callInitHooks();
	};

	var parentProto = NewClass.__super__ = this.prototype;

	var proto = create(parentProto);
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	// inherit parent's statics
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	if (props.statics) {
		extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	if (props.includes) {
		checkDeprecatedMixinEvents(props.includes);
		extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	if (proto.options) {
		props.options = extend(create(proto.options), props.options);
	}

	// mix given properties into the prototype
	extend(proto, props);

	proto._initHooks = [];

	// add method for calling all hooks
	proto.callInitHooks = function () {

		if (this._initHooksCalled) { return; }

		if (parentProto.callInitHooks) {
			parentProto.callInitHooks.call(this);
		}

		this._initHooksCalled = true;

		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
			proto._initHooks[i].call(this);
		}
	};

	return NewClass;
};


// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function (props) {
	extend(this.prototype, props);
	return this;
};

// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function (options) {
	extend(this.prototype.options, options);
	return this;
};

// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function (fn) { // (Function) || (String, args...)
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};

	this.prototype._initHooks = this.prototype._initHooks || [];
	this.prototype._initHooks.push(init);
	return this;
};

function checkDeprecatedMixinEvents(includes) {
	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

	includes = isArray(includes) ? includes : [includes];

	for (var i = 0; i < includes.length; i++) {
		if (includes[i] === L.Mixin.Events) {
			console.warn('Deprecated include of L.Mixin.Events: ' +
				'this property will be removed in future releases, ' +
				'please inherit from L.Evented instead.', new Error().stack);
		}
	}
}

/*
 * @class Evented
 * @aka L.Evented
 * @inherits Class
 *
 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
 *
 * @example
 *
 * ```js
 * map.on('click', function(e) {
 * 	alert(e.latlng);
 * } );
 * ```
 *
 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
 *
 * ```js
 * function onClick(e) { ... }
 *
 * map.on('click', onClick);
 * map.off('click', onClick);
 * ```
 */

var Events = {
	/* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */
	on: function (types, fn, context) {

		// types can be a map of types/handlers
		if (typeof types === 'object') {
			for (var type in types) {
				// we don't process space-separated events here for performance;
				// it's a hot path since Layer uses the on(obj) syntax
				this._on(type, types[type], fn);
			}

		} else {
			// types can be a string of space-separated words
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._on(types[i], fn, context);
			}
		}

		return this;
	},

	/* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object. This includes implicitly attached events.
	 */
	off: function (types, fn, context) {

		if (!types) {
			// clear all listeners if called without arguments
			delete this._events;

		} else if (typeof types === 'object') {
			for (var type in types) {
				this._off(type, types[type], fn);
			}

		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				this._off(types[i], fn, context);
			}
		}

		return this;
	},

	// attach listener (without syntactic sugar now)
	_on: function (type, fn, context) {
		this._events = this._events || {};

		/* get/init listeners for type */
		var typeListeners = this._events[type];
		if (!typeListeners) {
			typeListeners = [];
			this._events[type] = typeListeners;
		}

		if (context === this) {
			// Less memory footprint.
			context = undefined;
		}
		var newListener = {fn: fn, ctx: context},
		    listeners = typeListeners;

		// check if fn already there
		for (var i = 0, len = listeners.length; i < len; i++) {
			if (listeners[i].fn === fn && listeners[i].ctx === context) {
				return;
			}
		}

		listeners.push(newListener);
	},

	_off: function (type, fn, context) {
		var listeners,
		    i,
		    len;

		if (!this._events) { return; }

		listeners = this._events[type];

		if (!listeners) {
			return;
		}

		if (!fn) {
			// Set all removed listeners to noop so they are not called if remove happens in fire
			for (i = 0, len = listeners.length; i < len; i++) {
				listeners[i].fn = falseFn;
			}
			// clear all listeners for a type if function isn't specified
			delete this._events[type];
			return;
		}

		if (context === this) {
			context = undefined;
		}

		if (listeners) {

			// find fn and remove it
			for (i = 0, len = listeners.length; i < len; i++) {
				var l = listeners[i];
				if (l.ctx !== context) { continue; }
				if (l.fn === fn) {

					// set the removed listener to noop so that's not called if remove happens in fire
					l.fn = falseFn;

					if (this._firingCount) {
						/* copy array in case events are being fired */
						this._events[type] = listeners = listeners.slice();
					}
					listeners.splice(i, 1);

					return;
				}
			}
		}
	},

	// @method fire(type: String, data?: Object, propagate?: Boolean): this
	// Fires an event of the specified type. You can optionally provide an data
	// object — the first argument of the listener function will contain its
	// properties. The event can optionally be propagated to event parents.
	fire: function (type, data, propagate) {
		if (!this.listens(type, propagate)) { return this; }

		var event = extend({}, data, {
			type: type,
			target: this,
			sourceTarget: data && data.sourceTarget || this
		});

		if (this._events) {
			var listeners = this._events[type];

			if (listeners) {
				this._firingCount = (this._firingCount + 1) || 1;
				for (var i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					l.fn.call(l.ctx || this, event);
				}

				this._firingCount--;
			}
		}

		if (propagate) {
			// propagate the event to parents (set with addEventParent)
			this._propagateEvent(event);
		}

		return this;
	},

	// @method listens(type: String): Boolean
	// Returns `true` if a particular event type has any listeners attached to it.
	listens: function (type, propagate) {
		var listeners = this._events && this._events[type];
		if (listeners && listeners.length) { return true; }

		if (propagate) {
			// also check parents for listeners if event propagates
			for (var id in this._eventParents) {
				if (this._eventParents[id].listens(type, propagate)) { return true; }
			}
		}
		return false;
	},

	// @method once(…): this
	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
	once: function (types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				this.once(type, types[type], fn);
			}
			return this;
		}

		var handler = bind(function () {
			this
			    .off(types, fn, context)
			    .off(types, handler, context);
		}, this);

		// add a listener that's executed once and removed after that
		return this
		    .on(types, fn, context)
		    .on(types, handler, context);
	},

	// @method addEventParent(obj: Evented): this
	// Adds an event parent - an `Evented` that will receive propagated events
	addEventParent: function (obj) {
		this._eventParents = this._eventParents || {};
		this._eventParents[stamp(obj)] = obj;
		return this;
	},

	// @method removeEventParent(obj: Evented): this
	// Removes an event parent, so it will stop receiving propagated events
	removeEventParent: function (obj) {
		if (this._eventParents) {
			delete this._eventParents[stamp(obj)];
		}
		return this;
	},

	_propagateEvent: function (e) {
		for (var id in this._eventParents) {
			this._eventParents[id].fire(e.type, extend({
				layer: e.target,
				propagatedFrom: e.target
			}, e), true);
		}
	}
};

// aliases; we should ditch those eventually

// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;

// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)

// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;

// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;

// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;

// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;

var Evented = Class.extend(Events);

/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Point(x, y, round) {
	// @property x: Number; The `x` coordinate of the point
	this.x = (round ? Math.round(x) : x);
	// @property y: Number; The `y` coordinate of the point
	this.y = (round ? Math.round(y) : y);
}

var trunc = Math.trunc || function (v) {
	return v > 0 ? Math.floor(v) : Math.ceil(v);
};

Point.prototype = {

	// @method clone(): Point
	// Returns a copy of the current point.
	clone: function () {
		return new Point(this.x, this.y);
	},

	// @method add(otherPoint: Point): Point
	// Returns the result of addition of the current and the given points.
	add: function (point) {
		// non-destructive, returns a new point
		return this.clone()._add(toPoint(point));
	},

	_add: function (point) {
		// destructive, used directly for performance in situations where it's safe to modify existing point
		this.x += point.x;
		this.y += point.y;
		return this;
	},

	// @method subtract(otherPoint: Point): Point
	// Returns the result of subtraction of the given point from the current.
	subtract: function (point) {
		return this.clone()._subtract(toPoint(point));
	},

	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},

	// @method divideBy(num: Number): Point
	// Returns the result of division of the current point by the given number.
	divideBy: function (num) {
		return this.clone()._divideBy(num);
	},

	_divideBy: function (num) {
		this.x /= num;
		this.y /= num;
		return this;
	},

	// @method multiplyBy(num: Number): Point
	// Returns the result of multiplication of the current point by the given number.
	multiplyBy: function (num) {
		return this.clone()._multiplyBy(num);
	},

	_multiplyBy: function (num) {
		this.x *= num;
		this.y *= num;
		return this;
	},

	// @method scaleBy(scale: Point): Point
	// Multiply each coordinate of the current point by each coordinate of
	// `scale`. In linear algebra terms, multiply the point by the
	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
	// defined by `scale`.
	scaleBy: function (point) {
		return new Point(this.x * point.x, this.y * point.y);
	},

	// @method unscaleBy(scale: Point): Point
	// Inverse of `scaleBy`. Divide each coordinate of the current point by
	// each coordinate of `scale`.
	unscaleBy: function (point) {
		return new Point(this.x / point.x, this.y / point.y);
	},

	// @method round(): Point
	// Returns a copy of the current point with rounded coordinates.
	round: function () {
		return this.clone()._round();
	},

	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},

	// @method floor(): Point
	// Returns a copy of the current point with floored coordinates (rounded down).
	floor: function () {
		return this.clone()._floor();
	},

	_floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	},

	// @method ceil(): Point
	// Returns a copy of the current point with ceiled coordinates (rounded up).
	ceil: function () {
		return this.clone()._ceil();
	},

	_ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	},

	// @method trunc(): Point
	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
	trunc: function () {
		return this.clone()._trunc();
	},

	_trunc: function () {
		this.x = trunc(this.x);
		this.y = trunc(this.y);
		return this;
	},

	// @method distanceTo(otherPoint: Point): Number
	// Returns the cartesian distance between the current and the given points.
	distanceTo: function (point) {
		point = toPoint(point);

		var x = point.x - this.x,
		    y = point.y - this.y;

		return Math.sqrt(x * x + y * y);
	},

	// @method equals(otherPoint: Point): Boolean
	// Returns `true` if the given point has the same coordinates.
	equals: function (point) {
		point = toPoint(point);

		return point.x === this.x &&
		       point.y === this.y;
	},

	// @method contains(otherPoint: Point): Boolean
	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
	contains: function (point) {
		point = toPoint(point);

		return Math.abs(point.x) <= Math.abs(this.x) &&
		       Math.abs(point.y) <= Math.abs(this.y);
	},

	// @method toString(): String
	// Returns a string representation of the point for debugging purposes.
	toString: function () {
		return 'Point(' +
		        formatNum(this.x) + ', ' +
		        formatNum(this.y) + ')';
	}
};

// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.

// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
function toPoint(x, y, round) {
	if (x instanceof Point) {
		return x;
	}
	if (isArray(x)) {
		return new Point(x[0], x[1]);
	}
	if (x === undefined || x === null) {
		return x;
	}
	if (typeof x === 'object' && 'x' in x && 'y' in x) {
		return new Point(x.x, x.y);
	}
	return new Point(x, y, round);
}

/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function Bounds(a, b) {
	if (!a) { return; }

	var points = b ? [a, b] : a;

	for (var i = 0, len = points.length; i < len; i++) {
		this.extend(points[i]);
	}
}

Bounds.prototype = {
	// @method extend(point: Point): this
	// Extends the bounds to contain the given point.
	extend: function (point) { // (Point)
		point = toPoint(point);

		// @property min: Point
		// The top left corner of the rectangle.
		// @property max: Point
		// The bottom right corner of the rectangle.
		if (!this.min && !this.max) {
			this.min = point.clone();
			this.max = point.clone();
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
		return this;
	},

	// @method getCenter(round?: Boolean): Point
	// Returns the center point of the bounds.
	getCenter: function (round) {
		return new Point(
		        (this.min.x + this.max.x) / 2,
		        (this.min.y + this.max.y) / 2, round);
	},

	// @method getBottomLeft(): Point
	// Returns the bottom-left point of the bounds.
	getBottomLeft: function () {
		return new Point(this.min.x, this.max.y);
	},

	// @method getTopRight(): Point
	// Returns the top-right point of the bounds.
	getTopRight: function () { // -> Point
		return new Point(this.max.x, this.min.y);
	},

	// @method getTopLeft(): Point
	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
	getTopLeft: function () {
		return this.min; // left, top
	},

	// @method getBottomRight(): Point
	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
	getBottomRight: function () {
		return this.max; // right, bottom
	},

	// @method getSize(): Point
	// Returns the size of the given bounds
	getSize: function () {
		return this.max.subtract(this.min);
	},

	// @method contains(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle contains the given one.
	// @alternative
	// @method contains(point: Point): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) {
		var min, max;

		if (typeof obj[0] === 'number' || obj instanceof Point) {
			obj = toPoint(obj);
		} else {
			obj = toBounds(obj);
		}

		if (obj instanceof Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}

		return (min.x >= this.min.x) &&
		       (max.x <= this.max.x) &&
		       (min.y >= this.min.y) &&
		       (max.y <= this.max.y);
	},

	// @method intersects(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds
	// intersect if they have at least one point in common.
	intersects: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
	// overlap if their intersection is an area.
	overlaps: function (bounds) { // (Bounds) -> Boolean
		bounds = toBounds(bounds);

		var min = this.min,
		    max = this.max,
		    min2 = bounds.min,
		    max2 = bounds.max,
		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

		return xOverlaps && yOverlaps;
	},

	isValid: function () {
		return !!(this.min && this.max);
	}
};


// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
function toBounds(a, b) {
	if (!a || a instanceof Bounds) {
		return a;
	}
	return new Bounds(a, b);
}

/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
	if (!corner1) { return; }

	var latlngs = corner2 ? [corner1, corner2] : corner1;

	for (var i = 0, len = latlngs.length; i < len; i++) {
		this.extend(latlngs[i]);
	}
}

LatLngBounds.prototype = {

	// @method extend(latlng: LatLng): this
	// Extend the bounds to contain the given point

	// @alternative
	// @method extend(otherBounds: LatLngBounds): this
	// Extend the bounds to contain the given bounds
	extend: function (obj) {
		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLng) {
			sw2 = obj;
			ne2 = obj;

		} else if (obj instanceof LatLngBounds) {
			sw2 = obj._southWest;
			ne2 = obj._northEast;

			if (!sw2 || !ne2) { return this; }

		} else {
			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
		}

		if (!sw && !ne) {
			this._southWest = new LatLng(sw2.lat, sw2.lng);
			this._northEast = new LatLng(ne2.lat, ne2.lng);
		} else {
			sw.lat = Math.min(sw2.lat, sw.lat);
			sw.lng = Math.min(sw2.lng, sw.lng);
			ne.lat = Math.max(ne2.lat, ne.lat);
			ne.lng = Math.max(ne2.lng, ne.lng);
		}

		return this;
	},

	// @method pad(bufferRatio: Number): LatLngBounds
	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
	// Negative values will retract the bounds.
	pad: function (bufferRatio) {
		var sw = this._southWest,
		    ne = this._northEast,
		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

		return new LatLngBounds(
		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
	},

	// @method getCenter(): LatLng
	// Returns the center point of the bounds.
	getCenter: function () {
		return new LatLng(
		        (this._southWest.lat + this._northEast.lat) / 2,
		        (this._southWest.lng + this._northEast.lng) / 2);
	},

	// @method getSouthWest(): LatLng
	// Returns the south-west point of the bounds.
	getSouthWest: function () {
		return this._southWest;
	},

	// @method getNorthEast(): LatLng
	// Returns the north-east point of the bounds.
	getNorthEast: function () {
		return this._northEast;
	},

	// @method getNorthWest(): LatLng
	// Returns the north-west point of the bounds.
	getNorthWest: function () {
		return new LatLng(this.getNorth(), this.getWest());
	},

	// @method getSouthEast(): LatLng
	// Returns the south-east point of the bounds.
	getSouthEast: function () {
		return new LatLng(this.getSouth(), this.getEast());
	},

	// @method getWest(): Number
	// Returns the west longitude of the bounds
	getWest: function () {
		return this._southWest.lng;
	},

	// @method getSouth(): Number
	// Returns the south latitude of the bounds
	getSouth: function () {
		return this._southWest.lat;
	},

	// @method getEast(): Number
	// Returns the east longitude of the bounds
	getEast: function () {
		return this._northEast.lng;
	},

	// @method getNorth(): Number
	// Returns the north latitude of the bounds
	getNorth: function () {
		return this._northEast.lat;
	},

	// @method contains(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle contains the given one.

	// @alternative
	// @method contains (latlng: LatLng): Boolean
	// Returns `true` if the rectangle contains the given point.
	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
			obj = toLatLng(obj);
		} else {
			obj = toLatLngBounds(obj);
		}

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2, ne2;

		if (obj instanceof LatLngBounds) {
			sw2 = obj.getSouthWest();
			ne2 = obj.getNorthEast();
		} else {
			sw2 = ne2 = obj;
		}

		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
	},

	// @method intersects(otherBounds: LatLngBounds): Boolean
	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
	intersects: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

		return latIntersects && lngIntersects;
	},

	// @method overlaps(otherBounds: Bounds): Boolean
	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
	overlaps: function (bounds) {
		bounds = toLatLngBounds(bounds);

		var sw = this._southWest,
		    ne = this._northEast,
		    sw2 = bounds.getSouthWest(),
		    ne2 = bounds.getNorthEast(),

		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

		return latOverlaps && lngOverlaps;
	},

	// @method toBBoxString(): String
	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
	toBBoxString: function () {
		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
	},

	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (bounds, maxMargin) {
		if (!bounds) { return false; }

		bounds = toLatLngBounds(bounds);

		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
	},

	// @method isValid(): Boolean
	// Returns `true` if the bounds are properly initialized.
	isValid: function () {
		return !!(this._southWest && this._northEast);
	}
};

// TODO International date line?

// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
function toLatLngBounds(a, b) {
	if (a instanceof LatLngBounds) {
		return a;
	}
	return new LatLngBounds(a, b);
}

/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */

function LatLng(lat, lng, alt) {
	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	}

	// @property lat: Number
	// Latitude in degrees
	this.lat = +lat;

	// @property lng: Number
	// Longitude in degrees
	this.lng = +lng;

	// @property alt: Number
	// Altitude in meters (optional)
	if (alt !== undefined) {
		this.alt = +alt;
	}
}

LatLng.prototype = {
	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
	equals: function (obj, maxMargin) {
		if (!obj) { return false; }

		obj = toLatLng(obj);

		var margin = Math.max(
		        Math.abs(this.lat - obj.lat),
		        Math.abs(this.lng - obj.lng));

		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
	},

	// @method toString(): String
	// Returns a string representation of the point (for debugging purposes).
	toString: function (precision) {
		return 'LatLng(' +
		        formatNum(this.lat, precision) + ', ' +
		        formatNum(this.lng, precision) + ')';
	},

	// @method distanceTo(otherLatLng: LatLng): Number
	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
	distanceTo: function (other) {
		return Earth.distance(this, toLatLng(other));
	},

	// @method wrap(): LatLng
	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
	wrap: function () {
		return Earth.wrapLatLng(this);
	},

	// @method toBounds(sizeInMeters: Number): LatLngBounds
	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
	toBounds: function (sizeInMeters) {
		var latAccuracy = 180 * sizeInMeters / 40075017,
		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

		return toLatLngBounds(
		        [this.lat - latAccuracy, this.lng - lngAccuracy],
		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
	},

	clone: function () {
		return new LatLng(this.lat, this.lng, this.alt);
	}
};



// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

function toLatLng(a, b, c) {
	if (a instanceof LatLng) {
		return a;
	}
	if (isArray(a) && typeof a[0] !== 'object') {
		if (a.length === 3) {
			return new LatLng(a[0], a[1], a[2]);
		}
		if (a.length === 2) {
			return new LatLng(a[0], a[1]);
		}
		return null;
	}
	if (a === undefined || a === null) {
		return a;
	}
	if (typeof a === 'object' && 'lat' in a) {
		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
	}
	if (b === undefined) {
		return null;
	}
	return new LatLng(a, b, c);
}

/*
 * @namespace CRS
 * @crs L.CRS.Base
 * Object that defines coordinate reference systems for projecting
 * geographical points into pixel (screen) coordinates and back (and to
 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
 *
 * Leaflet defines the most usual CRSs by default. If you want to use a
 * CRS not defined by default, take a look at the
 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
 *
 * Note that the CRS instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.
 */

var CRS = {
	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
	// Projects geographical coordinates into pixel coordinates for a given zoom.
	latLngToPoint: function (latlng, zoom) {
		var projectedPoint = this.projection.project(latlng),
		    scale = this.scale(zoom);

		return this.transformation._transform(projectedPoint, scale);
	},

	// @method pointToLatLng(point: Point, zoom: Number): LatLng
	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
	// zoom into geographical coordinates.
	pointToLatLng: function (point, zoom) {
		var scale = this.scale(zoom),
		    untransformedPoint = this.transformation.untransform(point, scale);

		return this.projection.unproject(untransformedPoint);
	},

	// @method project(latlng: LatLng): Point
	// Projects geographical coordinates into coordinates in units accepted for
	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
	project: function (latlng) {
		return this.projection.project(latlng);
	},

	// @method unproject(point: Point): LatLng
	// Given a projected coordinate returns the corresponding LatLng.
	// The inverse of `project`.
	unproject: function (point) {
		return this.projection.unproject(point);
	},

	// @method scale(zoom: Number): Number
	// Returns the scale used when transforming projected coordinates into
	// pixel coordinates for a particular zoom. For example, it returns
	// `256 * 2^zoom` for Mercator-based CRS.
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	},

	// @method zoom(scale: Number): Number
	// Inverse of `scale()`, returns the zoom level corresponding to a scale
	// factor of `scale`.
	zoom: function (scale) {
		return Math.log(scale / 256) / Math.LN2;
	},

	// @method getProjectedBounds(zoom: Number): Bounds
	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
	getProjectedBounds: function (zoom) {
		if (this.infinite) { return null; }

		var b = this.projection.bounds,
		    s = this.scale(zoom),
		    min = this.transformation.transform(b.min, s),
		    max = this.transformation.transform(b.max, s);

		return new Bounds(min, max);
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates.

	// @property code: String
	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
	//
	// @property wrapLng: Number[]
	// An array of two numbers defining whether the longitude (horizontal) coordinate
	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
	//
	// @property wrapLat: Number[]
	// Like `wrapLng`, but for the latitude (vertical) axis.

	// wrapLng: [min, max],
	// wrapLat: [min, max],

	// @property infinite: Boolean
	// If true, the coordinate space will be unbounded (infinite in both axes)
	infinite: false,

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where lat and lng has been wrapped according to the
	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
	wrapLatLng: function (latlng) {
		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
		    alt = latlng.alt;

		return new LatLng(lat, lng, alt);
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring
	// that its center is within the CRS's bounds.
	// Only accepts actual `L.LatLngBounds` instances, not arrays.
	wrapLatLngBounds: function (bounds) {
		var center = bounds.getCenter(),
		    newCenter = this.wrapLatLng(center),
		    latShift = center.lat - newCenter.lat,
		    lngShift = center.lng - newCenter.lng;

		if (latShift === 0 && lngShift === 0) {
			return bounds;
		}

		var sw = bounds.getSouthWest(),
		    ne = bounds.getNorthEast(),
		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

		return new LatLngBounds(newSw, newNe);
	}
};

/*
 * @namespace CRS
 * @crs L.CRS.Earth
 *
 * Serves as the base for CRS that are global such that they cover the earth.
 * Can only be used as the base for other CRS and cannot be used directly,
 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
 * meters.
 */

var Earth = extend({}, CRS, {
	wrapLng: [-180, 180],

	// Mean Earth Radius, as recommended for use by
	// the International Union of Geodesy and Geophysics,
	// see http://rosettacode.org/wiki/Haversine_formula
	R: 6371000,

	// distance between two geographical points using spherical law of cosines approximation
	distance: function (latlng1, latlng2) {
		var rad = Math.PI / 180,
		    lat1 = latlng1.lat * rad,
		    lat2 = latlng2.lat * rad,
		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return this.R * c;
	}
});

/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */

var earthRadius = 6378137;

var SphericalMercator = {

	R: earthRadius,
	MAX_LATITUDE: 85.0511287798,

	project: function (latlng) {
		var d = Math.PI / 180,
		    max = this.MAX_LATITUDE,
		    lat = Math.max(Math.min(max, latlng.lat), -max),
		    sin = Math.sin(lat * d);

		return new Point(
			this.R * latlng.lng * d,
			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
	},

	unproject: function (point) {
		var d = 180 / Math.PI;

		return new LatLng(
			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
			point.x * d / this.R);
	},

	bounds: (function () {
		var d = earthRadius * Math.PI;
		return new Bounds([-d, -d], [d, d]);
	})()
};

/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */


// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
function Transformation(a, b, c, d) {
	if (isArray(a)) {
		// use array properties
		this._a = a[0];
		this._b = a[1];
		this._c = a[2];
		this._d = a[3];
		return;
	}
	this._a = a;
	this._b = b;
	this._c = c;
	this._d = d;
}

Transformation.prototype = {
	// @method transform(point: Point, scale?: Number): Point
	// Returns a transformed point, optionally multiplied by the given scale.
	// Only accepts actual `L.Point` instances, not arrays.
	transform: function (point, scale) { // (Point, Number) -> Point
		return this._transform(point.clone(), scale);
	},

	// destructive transform (faster)
	_transform: function (point, scale) {
		scale = scale || 1;
		point.x = scale * (this._a * point.x + this._b);
		point.y = scale * (this._c * point.y + this._d);
		return point;
	},

	// @method untransform(point: Point, scale?: Number): Point
	// Returns the reverse transformation of the given point, optionally divided
	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
	untransform: function (point, scale) {
		scale = scale || 1;
		return new Point(
		        (point.x / scale - this._b) / this._a,
		        (point.y / scale - this._d) / this._c);
	}
};

// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.

// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.

function toTransformation(a, b, c, d) {
	return new Transformation(a, b, c, d);
}

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3857
 *
 * The most common CRS for online maps, used by almost all free and commercial
 * tile providers. Uses Spherical Mercator projection. Set in by default in
 * Map's `crs` option.
 */

var EPSG3857 = extend({}, Earth, {
	code: 'EPSG:3857',
	projection: SphericalMercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * SphericalMercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

var EPSG900913 = extend({}, EPSG3857, {
	code: 'EPSG:900913'
});

// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:

// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
function svgCreate(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
function pointsToPath(rings, closed) {
	var str = '',
	i, j, len, len2, points, p;

	for (i = 0, len = rings.length; i < len; i++) {
		points = rings[i];

		for (j = 0, len2 = points.length; j < len2; j++) {
			p = points[j];
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}

		// closes the ring for polygons; "x" is VML syntax
		str += closed ? (svg ? 'z' : 'x') : '';
	}

	// SVG complains about empty path strings
	return str || 'M0 0';
}

/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */

var style$1 = document.documentElement.style;

// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = 'ActiveXObject' in window;

// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;

// @property edge: Boolean; `true` for the Edge web browser.
var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains('webkit');

// @property android: Boolean
// `true` for any browser running on an Android platform.
var android = userAgentContains('android');

// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains('android 2') || userAgentContains('android 3');

/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;

// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = userAgentContains('chrome');

// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains('safari');

var phantom = userAgentContains('phantom');

// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = 'OTransition' in style$1;

// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf('Win') === 0;

// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && ('transition' in style$1);

// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = 'MozPerspective' in style$1;

// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;

// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;

// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;

// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !webkit && !!(window.PointerEvent || msPointer);

// @property touch: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// This does not necessarily mean that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch));

// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;

// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;

// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;

// @property passiveEvents: Boolean
// `true` for browsers that support passive events.
var passiveEvents = (function () {
	var supportsPassiveOption = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function () {
				supportsPassiveOption = true;
			}
		});
		window.addEventListener('testPassiveEventSupport', falseFn, opts);
		window.removeEventListener('testPassiveEventSupport', falseFn, opts);
	} catch (e) {
		// Errors can safely be ignored since this is only a browser support test.
	}
	return supportsPassiveOption;
});

// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');

	} catch (e) {
		return false;
	}
}());


function userAgentContains(str) {
	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}


var Browser = (Object.freeze || Object)({
	ie: ie,
	ielt9: ielt9,
	edge: edge,
	webkit: webkit,
	android: android,
	android23: android23,
	androidStock: androidStock,
	opera: opera,
	chrome: chrome,
	gecko: gecko,
	safari: safari,
	phantom: phantom,
	opera12: opera12,
	win: win,
	ie3d: ie3d,
	webkit3d: webkit3d,
	gecko3d: gecko3d,
	any3d: any3d,
	mobile: mobile,
	mobileWebkit: mobileWebkit,
	mobileWebkit3d: mobileWebkit3d,
	msPointer: msPointer,
	pointer: pointer,
	touch: touch,
	mobileOpera: mobileOpera,
	mobileGecko: mobileGecko,
	retina: retina,
	passiveEvents: passiveEvents,
	canvas: canvas,
	svg: svg,
	vml: vml
});

/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */


var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];

var _pointers = {};
var _pointerDocListener = false;

// DomEvent.DoubleTap needs to know about this
var _pointersCount = 0;

// Provides a touch events wrapper for (ms)pointer events.
// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

function addPointerListener(obj, type, handler, id) {
	if (type === 'touchstart') {
		_addPointerStart(obj, handler, id);

	} else if (type === 'touchmove') {
		_addPointerMove(obj, handler, id);

	} else if (type === 'touchend') {
		_addPointerEnd(obj, handler, id);
	}

	return this;
}

function removePointerListener(obj, type, id) {
	var handler = obj['_leaflet_' + type + id];

	if (type === 'touchstart') {
		obj.removeEventListener(POINTER_DOWN, handler, false);

	} else if (type === 'touchmove') {
		obj.removeEventListener(POINTER_MOVE, handler, false);

	} else if (type === 'touchend') {
		obj.removeEventListener(POINTER_UP, handler, false);
		obj.removeEventListener(POINTER_CANCEL, handler, false);
	}

	return this;
}

function _addPointerStart(obj, handler, id) {
	var onDown = bind(function (e) {
		if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
			// In IE11, some touch events needs to fire for form controls, or
			// the controls will stop working. We keep a whitelist of tag names that
			// need these events. For other target tags, we prevent default on the event.
			if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
				preventDefault(e);
			} else {
				return;
			}
		}

		_handlePointer(e, handler);
	});

	obj['_leaflet_touchstart' + id] = onDown;
	obj.addEventListener(POINTER_DOWN, onDown, false);

	// need to keep track of what pointers and how many are active to provide e.touches emulation
	if (!_pointerDocListener) {
		// we listen documentElement as any drags that end by moving the touch off the screen get fired there
		document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
		document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
		document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
		document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

		_pointerDocListener = true;
	}
}

function _globalPointerDown(e) {
	_pointers[e.pointerId] = e;
	_pointersCount++;
}

function _globalPointerMove(e) {
	if (_pointers[e.pointerId]) {
		_pointers[e.pointerId] = e;
	}
}

function _globalPointerUp(e) {
	delete _pointers[e.pointerId];
	_pointersCount--;
}

function _handlePointer(e, handler) {
	e.touches = [];
	for (var i in _pointers) {
		e.touches.push(_pointers[i]);
	}
	e.changedTouches = [e];

	handler(e);
}

function _addPointerMove(obj, handler, id) {
	var onMove = function (e) {
		// don't fire touch moves when mouse isn't down
		if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

		_handlePointer(e, handler);
	};

	obj['_leaflet_touchmove' + id] = onMove;
	obj.addEventListener(POINTER_MOVE, onMove, false);
}

function _addPointerEnd(obj, handler, id) {
	var onUp = function (e) {
		_handlePointer(e, handler);
	};

	obj['_leaflet_touchend' + id] = onUp;
	obj.addEventListener(POINTER_UP, onUp, false);
	obj.addEventListener(POINTER_CANCEL, onUp, false);
}

/*
 * Extends the event handling code with double tap support for mobile browsers.
 */

var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
var _pre = '_leaflet_';

// inspired by Zepto touch code by Thomas Fuchs
function addDoubleTapListener(obj, handler, id) {
	var last, touch$$1,
	    doubleTap = false,
	    delay = 250;

	function onTouchStart(e) {
		var count;

		if (pointer) {
			if ((!edge) || e.pointerType === 'mouse') { return; }
			count = _pointersCount;
		} else {
			count = e.touches.length;
		}

		if (count > 1) { return; }

		var now = Date.now(),
		    delta = now - (last || now);

		touch$$1 = e.touches ? e.touches[0] : e;
		doubleTap = (delta > 0 && delta <= delay);
		last = now;
	}

	function onTouchEnd(e) {
		if (doubleTap && !touch$$1.cancelBubble) {
			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				// work around .type being readonly with MSPointer* events
				var newTouch = {},
				    prop, i;

				for (i in touch$$1) {
					prop = touch$$1[i];
					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
				}
				touch$$1 = newTouch;
			}
			touch$$1.type = 'dblclick';
			touch$$1.button = 0;
			handler(touch$$1);
			last = null;
		}
	}

	obj[_pre + _touchstart + id] = onTouchStart;
	obj[_pre + _touchend + id] = onTouchEnd;
	obj[_pre + 'dblclick' + id] = handler;

	obj.addEventListener(_touchstart, onTouchStart, passiveEvents ? {passive: false} : false);
	obj.addEventListener(_touchend, onTouchEnd, passiveEvents ? {passive: false} : false);

	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
	// the browser doesn't fire touchend/pointerup events but does fire
	// native dblclicks. See #4127.
	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
	obj.addEventListener('dblclick', handler, false);

	return this;
}

function removeDoubleTapListener(obj, id) {
	var touchstart = obj[_pre + _touchstart + id],
	    touchend = obj[_pre + _touchend + id],
	    dblclick = obj[_pre + 'dblclick' + id];

	obj.removeEventListener(_touchstart, touchstart, passiveEvents ? {passive: false} : false);
	obj.removeEventListener(_touchend, touchend, passiveEvents ? {passive: false} : false);
	if (!edge) {
		obj.removeEventListener('dblclick', dblclick, false);
	}

	return this;
}

/*
 * @namespace DomUtil
 *
 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
 * tree, used by Leaflet internally.
 *
 * Most functions expecting or returning a `HTMLElement` also work for
 * SVG elements. The only difference is that classes refer to CSS classes
 * in HTML and SVG classes in SVG.
 */


// @property TRANSFORM: String
// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
var TRANSFORM = testProp(
	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

// webkitTransition comes first because some browser versions that drop vendor prefix don't do
// the same for the transitionend event, in particular the Android 4.1 stock browser

// @property TRANSITION: String
// Vendor-prefixed transition style name.
var TRANSITION = testProp(
	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

// @property TRANSITION_END: String
// Vendor-prefixed transitionend event name.
var TRANSITION_END =
	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
function get(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
function getStyle(el, style) {
	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

	if ((!value || value === 'auto') && document.defaultView) {
		var css = document.defaultView.getComputedStyle(el, null);
		value = css ? css[style] : null;
	}
	return value === 'auto' ? null : value;
}

// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
function create$1(tagName, className, container) {
	var el = document.createElement(tagName);
	el.className = className || '';

	if (container) {
		container.appendChild(el);
	}
	return el;
}

// @function remove(el: HTMLElement)
// Removes `el` from its parent element
function remove(el) {
	var parent = el.parentNode;
	if (parent) {
		parent.removeChild(el);
	}
}

// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
function empty(el) {
	while (el.firstChild) {
		el.removeChild(el.firstChild);
	}
}

// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
function toFront(el) {
	var parent = el.parentNode;
	if (parent && parent.lastChild !== el) {
		parent.appendChild(el);
	}
}

// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
function toBack(el) {
	var parent = el.parentNode;
	if (parent && parent.firstChild !== el) {
		parent.insertBefore(el, parent.firstChild);
	}
}

// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
function hasClass(el, name) {
	if (el.classList !== undefined) {
		return el.classList.contains(name);
	}
	var className = getClass(el);
	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
}

// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
function addClass(el, name) {
	if (el.classList !== undefined) {
		var classes = splitWords(name);
		for (var i = 0, len = classes.length; i < len; i++) {
			el.classList.add(classes[i]);
		}
	} else if (!hasClass(el, name)) {
		var className = getClass(el);
		setClass(el, (className ? className + ' ' : '') + name);
	}
}

// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
function removeClass(el, name) {
	if (el.classList !== undefined) {
		el.classList.remove(name);
	} else {
		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
	}
}

// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
function setClass(el, name) {
	if (el.className.baseVal === undefined) {
		el.className = name;
	} else {
		// in case of SVG element
		el.className.baseVal = name;
	}
}

// @function getClass(el: HTMLElement): String
// Returns the element's class.
function getClass(el) {
	// Check if the element is an SVGElementInstance and use the correspondingElement instead
	// (Required for linked SVG elements in IE11.)
	if (el.correspondingElement) {
		el = el.correspondingElement;
	}
	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}

// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
function setOpacity(el, value) {
	if ('opacity' in el.style) {
		el.style.opacity = value;
	} else if ('filter' in el.style) {
		_setOpacityIE(el, value);
	}
}

function _setOpacityIE(el, value) {
	var filter = false,
	    filterName = 'DXImageTransform.Microsoft.Alpha';

	// filters collection throws an error if we try to retrieve a filter that doesn't exist
	try {
		filter = el.filters.item(filterName);
	} catch (e) {
		// don't set opacity to 1 if we haven't already set an opacity,
		// it isn't needed and breaks transparent pngs.
		if (value === 1) { return; }
	}

	value = Math.round(value * 100);

	if (filter) {
		filter.Enabled = (value !== 100);
		filter.Opacity = value;
	} else {
		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
	}
}

// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
function testProp(props) {
	var style = document.documentElement.style;

	for (var i = 0; i < props.length; i++) {
		if (props[i] in style) {
			return props[i];
		}
	}
	return false;
}

// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
function setTransform(el, offset, scale) {
	var pos = offset || new Point(0, 0);

	el.style[TRANSFORM] =
		(ie3d ?
			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
		(scale ? ' scale(' + scale + ')' : '');
}

// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
function setPosition(el, point) {

	/*eslint-disable */
	el._leaflet_pos = point;
	/* eslint-enable */

	if (any3d) {
		setTransform(el, point);
	} else {
		el.style.left = point.x + 'px';
		el.style.top = point.y + 'px';
	}
}

// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
function getPosition(el) {
	// this method is only used for elements previously positioned using setPosition,
	// so it's safe to cache the position for performance

	return el._leaflet_pos || new Point(0, 0);
}

// @function disableTextSelection()
// Prevents the user from generating `selectstart` DOM events, usually generated
// when the user drags the mouse through a page with text. Used internally
// by Leaflet to override the behaviour of any click-and-drag interaction on
// the map. Affects drag interactions on the whole document.

// @function enableTextSelection()
// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ('onselectstart' in document) {
	disableTextSelection = function () {
		on(window, 'selectstart', preventDefault);
	};
	enableTextSelection = function () {
		off(window, 'selectstart', preventDefault);
	};
} else {
	var userSelectProperty = testProp(
		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	disableTextSelection = function () {
		if (userSelectProperty) {
			var style = document.documentElement.style;
			_userSelect = style[userSelectProperty];
			style[userSelectProperty] = 'none';
		}
	};
	enableTextSelection = function () {
		if (userSelectProperty) {
			document.documentElement.style[userSelectProperty] = _userSelect;
			_userSelect = undefined;
		}
	};
}

// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
function disableImageDrag() {
	on(window, 'dragstart', preventDefault);
}

// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
function enableImageDrag() {
	off(window, 'dragstart', preventDefault);
}

var _outlineElement;
var _outlineStyle;
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
function preventOutline(element) {
	while (element.tabIndex === -1) {
		element = element.parentNode;
	}
	if (!element.style) { return; }
	restoreOutline();
	_outlineElement = element;
	_outlineStyle = element.style.outline;
	element.style.outline = 'none';
	on(window, 'keydown', restoreOutline);
}

// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
function restoreOutline() {
	if (!_outlineElement) { return; }
	_outlineElement.style.outline = _outlineStyle;
	_outlineElement = undefined;
	_outlineStyle = undefined;
	off(window, 'keydown', restoreOutline);
}

// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
function getSizedParentNode(element) {
	do {
		element = element.parentNode;
	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
	return element;
}

// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
function getScale(element) {
	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

	return {
		x: rect.width / element.offsetWidth || 1,
		y: rect.height / element.offsetHeight || 1,
		boundingClientRect: rect
	};
}


var DomUtil = (Object.freeze || Object)({
	TRANSFORM: TRANSFORM,
	TRANSITION: TRANSITION,
	TRANSITION_END: TRANSITION_END,
	get: get,
	getStyle: getStyle,
	create: create$1,
	remove: remove,
	empty: empty,
	toFront: toFront,
	toBack: toBack,
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	setClass: setClass,
	getClass: getClass,
	setOpacity: setOpacity,
	testProp: testProp,
	setTransform: setTransform,
	setPosition: setPosition,
	getPosition: getPosition,
	disableTextSelection: disableTextSelection,
	enableTextSelection: enableTextSelection,
	disableImageDrag: disableImageDrag,
	enableImageDrag: enableImageDrag,
	preventOutline: preventOutline,
	restoreOutline: restoreOutline,
	getSizedParentNode: getSizedParentNode,
	getScale: getScale
});

/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */

// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).

// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function on(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			addOne(obj, type, types[type], fn);
		}
	} else {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			addOne(obj, types[i], fn, context);
		}
	}

	return this;
}

var eventsKey = '_leaflet_events';

// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.

// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
function off(obj, types, fn, context) {

	if (typeof types === 'object') {
		for (var type in types) {
			removeOne(obj, type, types[type], fn);
		}
	} else if (types) {
		types = splitWords(types);

		for (var i = 0, len = types.length; i < len; i++) {
			removeOne(obj, types[i], fn, context);
		}
	} else {
		for (var j in obj[eventsKey]) {
			removeOne(obj, j, obj[eventsKey][j]);
		}
		delete obj[eventsKey];
	}

	return this;
}

function addOne(obj, type, fn, context) {
	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

	var handler = function (e) {
		return fn.call(context || obj, e || window.event);
	};

	var originalHandler = handler;

	if (pointer && type.indexOf('touch') === 0) {
		// Needs DomEvent.Pointer.js
		addPointerListener(obj, type, handler, id);

	} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
	           !(pointer && chrome)) {
		// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
		// See #5180
		addDoubleTapListener(obj, handler, id);

	} else if ('addEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, passiveEvents ? {passive: false} : false);

		} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
			handler = function (e) {
				e = e || window.event;
				if (isExternalTarget(obj, e)) {
					originalHandler(e);
				}
			};
			obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

		} else {
			if (type === 'click' && android) {
				handler = function (e) {
					filterClick(e, originalHandler);
				};
			}
			obj.addEventListener(type, handler, false);
		}

	} else if ('attachEvent' in obj) {
		obj.attachEvent('on' + type, handler);
	}

	obj[eventsKey] = obj[eventsKey] || {};
	obj[eventsKey][id] = handler;
}

function removeOne(obj, type, fn, context) {

	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
	    handler = obj[eventsKey] && obj[eventsKey][id];

	if (!handler) { return this; }

	if (pointer && type.indexOf('touch') === 0) {
		removePointerListener(obj, type, id);

	} else if (touch && (type === 'dblclick') && removeDoubleTapListener &&
	           !(pointer && chrome)) {
		removeDoubleTapListener(obj, id);

	} else if ('removeEventListener' in obj) {

		if (type === 'mousewheel') {
			obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, passiveEvents ? {passive: false} : false);

		} else {
			obj.removeEventListener(
				type === 'mouseenter' ? 'mouseover' :
				type === 'mouseleave' ? 'mouseout' : type, handler, false);
		}

	} else if ('detachEvent' in obj) {
		obj.detachEvent('on' + type, handler);
	}

	obj[eventsKey][id] = null;
}

// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
function stopPropagation(e) {

	if (e.stopPropagation) {
		e.stopPropagation();
	} else if (e.originalEvent) {  // In case of Leaflet event.
		e.originalEvent._stopped = true;
	} else {
		e.cancelBubble = true;
	}
	skipped(e);

	return this;
}

// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
function disableScrollPropagation(el) {
	addOne(el, 'mousewheel', stopPropagation);
	return this;
}

// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
function disableClickPropagation(el) {
	on(el, 'mousedown touchstart dblclick', stopPropagation);
	addOne(el, 'click', fakeStop);
	return this;
}

// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
function preventDefault(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	return this;
}

// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
function stop(e) {
	preventDefault(e);
	stopPropagation(e);
	return this;
}

// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
function getMousePosition(e, container) {
	if (!container) {
		return new Point(e.clientX, e.clientY);
	}

	var scale = getScale(container),
	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

	return new Point(
		// offset.left/top values are in page scale (like clientX/Y),
		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
		(e.clientX - offset.left) / scale.x - container.clientLeft,
		(e.clientY - offset.top) / scale.y - container.clientTop
	);
}

// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
// and Firefox scrolls device pixels, not CSS pixels
var wheelPxFactor =
	(win && chrome) ? 2 * window.devicePixelRatio :
	gecko ? window.devicePixelRatio : 1;

// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a mousewheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
function getWheelDelta(e) {
	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
	       0;
}

var skipEvents = {};

function fakeStop(e) {
	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
	skipEvents[e.type] = true;
}

function skipped(e) {
	var events = skipEvents[e.type];
	// reset when checking, as it's only used in map container and propagates outside of the map
	skipEvents[e.type] = false;
	return events;
}

// check if element really left/entered the event target (for mouseenter/mouseleave)
function isExternalTarget(el, e) {

	var related = e.relatedTarget;

	if (!related) { return true; }

	try {
		while (related && (related !== el)) {
			related = related.parentNode;
		}
	} catch (err) {
		return false;
	}
	return (related !== el);
}

var lastClick;

// this is a horrible workaround for a bug in Android where a single touch triggers two click events
function filterClick(e, handler) {
	var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
	    elapsed = lastClick && (timeStamp - lastClick);

	// are they closer together than 500ms yet more than 100ms?
	// Android typically triggers them ~300ms apart while multiple listeners
	// on the same event should be triggered far faster;
	// or check if click is simulated on the element, and if it is, reject any non-simulated events

	if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
		stop(e);
		return;
	}
	lastClick = timeStamp;

	handler(e);
}




var DomEvent = (Object.freeze || Object)({
	on: on,
	off: off,
	stopPropagation: stopPropagation,
	disableScrollPropagation: disableScrollPropagation,
	disableClickPropagation: disableClickPropagation,
	preventDefault: preventDefault,
	stop: stop,
	getMousePosition: getMousePosition,
	getWheelDelta: getWheelDelta,
	fakeStop: fakeStop,
	skipped: skipped,
	isExternalTarget: isExternalTarget,
	addListener: on,
	removeListener: off
});

/*
 * @class PosAnimation
 * @aka L.PosAnimation
 * @inherits Evented
 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
 *
 * @example
 * ```js
 * var fx = new L.PosAnimation();
 * fx.run(el, [300, 500], 0.5);
 * ```
 *
 * @constructor L.PosAnimation()
 * Creates a `PosAnimation` object.
 *
 */

var PosAnimation = Evented.extend({

	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
	// Run an animation of a given element to a new position, optionally setting
	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
	// `0.5` by default).
	run: function (el, newPos, duration, easeLinearity) {
		this.stop();

		this._el = el;
		this._inProgress = true;
		this._duration = duration || 0.25;
		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

		this._startPos = getPosition(el);
		this._offset = newPos.subtract(this._startPos);
		this._startTime = +new Date();

		// @event start: Event
		// Fired when the animation starts
		this.fire('start');

		this._animate();
	},

	// @method stop()
	// Stops the animation (if currently running).
	stop: function () {
		if (!this._inProgress) { return; }

		this._step(true);
		this._complete();
	},

	_animate: function () {
		// animation loop
		this._animId = requestAnimFrame(this._animate, this);
		this._step();
	},

	_step: function (round) {
		var elapsed = (+new Date()) - this._startTime,
		    duration = this._duration * 1000;

		if (elapsed < duration) {
			this._runFrame(this._easeOut(elapsed / duration), round);
		} else {
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (progress, round) {
		var pos = this._startPos.add(this._offset.multiplyBy(progress));
		if (round) {
			pos._round();
		}
		setPosition(this._el, pos);

		// @event step: Event
		// Fired continuously during the animation.
		this.fire('step');
	},

	_complete: function () {
		cancelAnimFrame(this._animId);

		this._inProgress = false;
		// @event end: Event
		// Fired when the animation ends.
		this.fire('end');
	},

	_easeOut: function (t) {
		return 1 - Math.pow(1 - t, this._easeOutPower);
	}
});

/*
 * @class Map
 * @aka L.Map
 * @inherits Evented
 *
 * The central class of the API — it is used to create a map on a page and manipulate it.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with a given center and zoom
 * var map = L.map('map', {
 * 	center: [51.505, -0.09],
 * 	zoom: 13
 * });
 * ```
 *
 */

var Map = Evented.extend({

	options: {
		// @section Map State Options
		// @option crs: CRS = L.CRS.EPSG3857
		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
		// sure what it means.
		crs: EPSG3857,

		// @option center: LatLng = undefined
		// Initial geographic center of the map
		center: undefined,

		// @option zoom: Number = undefined
		// Initial map zoom level
		zoom: undefined,

		// @option minZoom: Number = *
		// Minimum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the lowest of their `minZoom` options will be used instead.
		minZoom: undefined,

		// @option maxZoom: Number = *
		// Maximum zoom level of the map.
		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
		// the highest of their `maxZoom` options will be used instead.
		maxZoom: undefined,

		// @option layers: Layer[] = []
		// Array of layers that will be added to the map initially
		layers: [],

		// @option maxBounds: LatLngBounds = null
		// When this option is set, the map restricts the view to the given
		// geographical bounds, bouncing the user back if the user tries to pan
		// outside the view. To set the restriction dynamically, use
		// [`setMaxBounds`](#map-setmaxbounds) method.
		maxBounds: undefined,

		// @option renderer: Renderer = *
		// The default method for drawing vector layers on the map. `L.SVG`
		// or `L.Canvas` by default depending on browser support.
		renderer: undefined,


		// @section Animation Options
		// @option zoomAnimation: Boolean = true
		// Whether the map zoom animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		zoomAnimation: true,

		// @option zoomAnimationThreshold: Number = 4
		// Won't animate zoom if the zoom difference exceeds this value.
		zoomAnimationThreshold: 4,

		// @option fadeAnimation: Boolean = true
		// Whether the tile fade animation is enabled. By default it's enabled
		// in all browsers that support CSS3 Transitions except Android.
		fadeAnimation: true,

		// @option markerZoomAnimation: Boolean = true
		// Whether markers animate their zoom with the zoom animation, if disabled
		// they will disappear for the length of the animation. By default it's
		// enabled in all browsers that support CSS3 Transitions except Android.
		markerZoomAnimation: true,

		// @option transform3DLimit: Number = 2^23
		// Defines the maximum size of a CSS translation transform. The default
		// value should not be changed unless a web browser positions layers in
		// the wrong place after doing a large `panBy`.
		transform3DLimit: 8388608, // Precision limit of a 32-bit float

		// @section Interaction Options
		// @option zoomSnap: Number = 1
		// Forces the map's zoom level to always be a multiple of this, particularly
		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
		// By default, the zoom level snaps to the nearest integer; lower values
		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
		zoomSnap: 1,

		// @option zoomDelta: Number = 1
		// Controls how much the map's zoom level will change after a
		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
		zoomDelta: 1,

		// @option trackResize: Boolean = true
		// Whether the map automatically handles browser window resize to update itself.
		trackResize: true
	},

	initialize: function (id, options) { // (HTMLElement or String, Object)
		options = setOptions(this, options);

		// Make sure to assign internal flags at the beginning,
		// to avoid inconsistent state in some edge cases.
		this._handlers = [];
		this._layers = {};
		this._zoomBoundLayers = {};
		this._sizeChanged = true;

		this._initContainer(id);
		this._initLayout();

		// hack for https://github.com/Leaflet/Leaflet/issues/1980
		this._onResize = bind(this._onResize, this);

		this._initEvents();

		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}

		if (options.zoom !== undefined) {
			this._zoom = this._limitZoom(options.zoom);
		}

		if (options.center && options.zoom !== undefined) {
			this.setView(toLatLng(options.center), options.zoom, {reset: true});
		}

		this.callInitHooks();

		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
				this.options.zoomAnimation;

		// zoom transitions run with the same duration for all layers, so if one of transitionend events
		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
		if (this._zoomAnimated) {
			this._createAnimProxy();
			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
		}

		this._addLayers(this.options.layers);
	},


	// @section Methods for modifying map state

	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) with the given
	// animation options.
	setView: function (center, zoom, options) {

		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
		options = options || {};

		this._stop();

		if (this._loaded && !options.reset && options !== true) {

			if (options.animate !== undefined) {
				options.zoom = extend({animate: options.animate}, options.zoom);
				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
			}

			// try animating pan or zoom
			var moved = (this._zoom !== zoom) ?
				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
				this._tryAnimatedPan(center, options.pan);

			if (moved) {
				// prevent resize handler call, the view will refresh after animation anyway
				clearTimeout(this._sizeTimer);
				return this;
			}
		}

		// animation didn't start, just reset the map view
		this._resetView(center, zoom);

		return this;
	},

	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
	// Sets the zoom of the map.
	setZoom: function (zoom, options) {
		if (!this._loaded) {
			this._zoom = zoom;
			return this;
		}
		return this.setView(this.getCenter(), zoom, {zoom: options});
	},

	// @method zoomIn(delta?: Number, options?: Zoom options): this
	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomIn: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom + delta, options);
	},

	// @method zoomOut(delta?: Number, options?: Zoom options): this
	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
	zoomOut: function (delta, options) {
		delta = delta || (any3d ? this.options.zoomDelta : 1);
		return this.setZoom(this._zoom - delta, options);
	},

	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified geographical point on the map
	// stationary (e.g. used internally for scroll zoom and double-click zoom).
	// @alternative
	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
	setZoomAround: function (latlng, zoom, options) {
		var scale = this.getZoomScale(zoom),
		    viewHalf = this.getSize().divideBy(2),
		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

		return this.setView(newCenter, zoom, {zoom: options});
	},

	_getBoundsCenterZoom: function (bounds, options) {

		options = options || {};
		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

		if (zoom === Infinity) {
			return {
				center: bounds.getCenter(),
				zoom: zoom
			};
		}

		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

		    swPoint = this.project(bounds.getSouthWest(), zoom),
		    nePoint = this.project(bounds.getNorthEast(), zoom),
		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

		return {
			center: center,
			zoom: zoom
		};
	},

	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets a map view that contains the given geographical bounds with the
	// maximum zoom level possible.
	fitBounds: function (bounds, options) {

		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			throw new Error('Bounds are not valid.');
		}

		var target = this._getBoundsCenterZoom(bounds, options);
		return this.setView(target.center, target.zoom, options);
	},

	// @method fitWorld(options?: fitBounds options): this
	// Sets a map view that mostly contains the whole world with the maximum
	// zoom level possible.
	fitWorld: function (options) {
		return this.fitBounds([[-90, -180], [90, 180]], options);
	},

	// @method panTo(latlng: LatLng, options?: Pan options): this
	// Pans the map to a given center.
	panTo: function (center, options) { // (LatLng)
		return this.setView(center, this._zoom, {pan: options});
	},

	// @method panBy(offset: Point, options?: Pan options): this
	// Pans the map by a given number of pixels (animated).
	panBy: function (offset, options) {
		offset = toPoint(offset).round();
		options = options || {};

		if (!offset.x && !offset.y) {
			return this.fire('moveend');
		}
		// If we pan too far, Chrome gets issues with tiles
		// and makes them disappear or appear in the wrong place (slightly offset) #2602
		if (options.animate !== true && !this.getSize().contains(offset)) {
			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
			return this;
		}

		if (!this._panAnim) {
			this._panAnim = new PosAnimation();

			this._panAnim.on({
				'step': this._onPanTransitionStep,
				'end': this._onPanTransitionEnd
			}, this);
		}

		// don't fire movestart if animating inertia
		if (!options.noMoveStart) {
			this.fire('movestart');
		}

		// animate pan unless animate: false specified
		if (options.animate !== false) {
			addClass(this._mapPane, 'leaflet-pan-anim');

			var newPos = this._getMapPanePos().subtract(offset).round();
			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
		} else {
			this._rawPanBy(offset);
			this.fire('move').fire('moveend');
		}

		return this;
	},

	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
	// Sets the view of the map (geographical center and zoom) performing a smooth
	// pan-zoom animation.
	flyTo: function (targetCenter, targetZoom, options) {

		options = options || {};
		if (options.animate === false || !any3d) {
			return this.setView(targetCenter, targetZoom, options);
		}

		this._stop();

		var from = this.project(this.getCenter()),
		    to = this.project(targetCenter),
		    size = this.getSize(),
		    startZoom = this._zoom;

		targetCenter = toLatLng(targetCenter);
		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

		var w0 = Math.max(size.x, size.y),
		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
		    u1 = (to.distanceTo(from)) || 1,
		    rho = 1.42,
		    rho2 = rho * rho;

		function r(i) {
			var s1 = i ? -1 : 1,
			    s2 = i ? w1 : w0,
			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
			    b1 = 2 * s2 * rho2 * u1,
			    b = t1 / b1,
			    sq = Math.sqrt(b * b + 1) - b;

			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
			    // thus triggering an infinite loop in flyTo
			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

			return log;
		}

		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
		function tanh(n) { return sinh(n) / cosh(n); }

		var r0 = r(0);

		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

		var start = Date.now(),
		    S = (r(1) - r0) / rho,
		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

		function frame() {
			var t = (Date.now() - start) / duration,
			    s = easeOut(t) * S;

			if (t <= 1) {
				this._flyToFrame = requestAnimFrame(frame, this);

				this._move(
					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
					this.getScaleZoom(w0 / w(s), startZoom),
					{flyTo: true});

			} else {
				this
					._move(targetCenter, targetZoom)
					._moveEnd(true);
			}
		}

		this._moveStart(true, options.noMoveStart);

		frame.call(this);
		return this;
	},

	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
	flyToBounds: function (bounds, options) {
		var target = this._getBoundsCenterZoom(bounds, options);
		return this.flyTo(target.center, target.zoom, options);
	},

	// @method setMaxBounds(bounds: Bounds): this
	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
	setMaxBounds: function (bounds) {
		bounds = toLatLngBounds(bounds);

		if (!bounds.isValid()) {
			this.options.maxBounds = null;
			return this.off('moveend', this._panInsideMaxBounds);
		} else if (this.options.maxBounds) {
			this.off('moveend', this._panInsideMaxBounds);
		}

		this.options.maxBounds = bounds;

		if (this._loaded) {
			this._panInsideMaxBounds();
		}

		return this.on('moveend', this._panInsideMaxBounds);
	},

	// @method setMinZoom(zoom: Number): this
	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
	setMinZoom: function (zoom) {
		var oldZoom = this.options.minZoom;
		this.options.minZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method setMaxZoom(zoom: Number): this
	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
	setMaxZoom: function (zoom) {
		var oldZoom = this.options.maxZoom;
		this.options.maxZoom = zoom;

		if (this._loaded && oldZoom !== zoom) {
			this.fire('zoomlevelschange');

			if (this.getZoom() > this.options.maxZoom) {
				return this.setZoom(zoom);
			}
		}

		return this;
	},

	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
	panInsideBounds: function (bounds, options) {
		this._enforcingBounds = true;
		var center = this.getCenter(),
		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

		if (!center.equals(newCenter)) {
			this.panTo(newCenter, options);
		}

		this._enforcingBounds = false;
		return this;
	},

	// @method panInside(latlng: LatLng, options?: options): this
	// Pans the map the minimum amount to make the `latlng` visible. Use
	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
	// If `latlng` is already within the (optionally padded) display bounds,
	// the map will not be panned.
	panInside: function (latlng, options) {
		options = options || {};

		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
		    center = this.getCenter(),
		    pixelCenter = this.project(center),
		    pixelPoint = this.project(latlng),
		    pixelBounds = this.getPixelBounds(),
		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

		if (!paddedBounds.contains(pixelPoint)) {
			this._enforcingBounds = true;
			var diff = pixelCenter.subtract(pixelPoint),
			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
				newCenter.x = pixelCenter.x - diff.x;
				if (diff.x > 0) {
					newCenter.x += halfPixelBounds.x - paddingTL.x;
				} else {
					newCenter.x -= halfPixelBounds.x - paddingBR.x;
				}
			}
			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
				newCenter.y = pixelCenter.y - diff.y;
				if (diff.y > 0) {
					newCenter.y += halfPixelBounds.y - paddingTL.y;
				} else {
					newCenter.y -= halfPixelBounds.y - paddingBR.y;
				}
			}
			this.panTo(this.unproject(newCenter), options);
			this._enforcingBounds = false;
		}
		return this;
	},

	// @method invalidateSize(options: Zoom/pan options): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default. If `options.pan` is `false`, panning will not occur.
	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
	// that it doesn't happen often even if the method is called many
	// times in a row.

	// @alternative
	// @method invalidateSize(animate: Boolean): this
	// Checks if the map container size changed and updates the map if so —
	// call it after you've changed the map size dynamically, also animating
	// pan by default.
	invalidateSize: function (options) {
		if (!this._loaded) { return this; }

		options = extend({
			animate: false,
			pan: true
		}, options === true ? {animate: true} : options);

		var oldSize = this.getSize();
		this._sizeChanged = true;
		this._lastCenter = null;

		var newSize = this.getSize(),
		    oldCenter = oldSize.divideBy(2).round(),
		    newCenter = newSize.divideBy(2).round(),
		    offset = oldCenter.subtract(newCenter);

		if (!offset.x && !offset.y) { return this; }

		if (options.animate && options.pan) {
			this.panBy(offset);

		} else {
			if (options.pan) {
				this._rawPanBy(offset);
			}

			this.fire('move');

			if (options.debounceMoveend) {
				clearTimeout(this._sizeTimer);
				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
			} else {
				this.fire('moveend');
			}
		}

		// @section Map state change events
		// @event resize: ResizeEvent
		// Fired when the map is resized.
		return this.fire('resize', {
			oldSize: oldSize,
			newSize: newSize
		});
	},

	// @section Methods for modifying map state
	// @method stop(): this
	// Stops the currently running `panTo` or `flyTo` animation, if any.
	stop: function () {
		this.setZoom(this._limitZoom(this._zoom));
		if (!this.options.zoomSnap) {
			this.fire('viewreset');
		}
		return this._stop();
	},

	// @section Geolocation methods
	// @method locate(options?: Locate options): this
	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
	// and optionally sets the map view to the user's location with respect to
	// detection accuracy (or to the world view if geolocation failed).
	// Note that, if your page doesn't use HTTPS, this method will fail in
	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
	// See `Locate options` for more details.
	locate: function (options) {

		options = this._locateOptions = extend({
			timeout: 10000,
			watch: false
			// setView: false
			// maxZoom: <Number>
			// maximumAge: 0
			// enableHighAccuracy: false
		}, options);

		if (!('geolocation' in navigator)) {
			this._handleGeolocationError({
				code: 0,
				message: 'Geolocation not supported.'
			});
			return this;
		}

		var onResponse = bind(this._handleGeolocationResponse, this),
		    onError = bind(this._handleGeolocationError, this);

		if (options.watch) {
			this._locationWatchId =
			        navigator.geolocation.watchPosition(onResponse, onError, options);
		} else {
			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
		}
		return this;
	},

	// @method stopLocate(): this
	// Stops watching location previously initiated by `map.locate({watch: true})`
	// and aborts resetting the map view if map.locate was called with
	// `{setView: true}`.
	stopLocate: function () {
		if (navigator.geolocation && navigator.geolocation.clearWatch) {
			navigator.geolocation.clearWatch(this._locationWatchId);
		}
		if (this._locateOptions) {
			this._locateOptions.setView = false;
		}
		return this;
	},

	_handleGeolocationError: function (error) {
		var c = error.code,
		    message = error.message ||
		            (c === 1 ? 'permission denied' :
		            (c === 2 ? 'position unavailable' : 'timeout'));

		if (this._locateOptions.setView && !this._loaded) {
			this.fitWorld();
		}

		// @section Location events
		// @event locationerror: ErrorEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
		this.fire('locationerror', {
			code: c,
			message: 'Geolocation error: ' + message + '.'
		});
	},

	_handleGeolocationResponse: function (pos) {
		var lat = pos.coords.latitude,
		    lng = pos.coords.longitude,
		    latlng = new LatLng(lat, lng),
		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
		    options = this._locateOptions;

		if (options.setView) {
			var zoom = this.getBoundsZoom(bounds);
			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
		}

		var data = {
			latlng: latlng,
			bounds: bounds,
			timestamp: pos.timestamp
		};

		for (var i in pos.coords) {
			if (typeof pos.coords[i] === 'number') {
				data[i] = pos.coords[i];
			}
		}

		// @event locationfound: LocationEvent
		// Fired when geolocation (using the [`locate`](#map-locate) method)
		// went successfully.
		this.fire('locationfound', data);
	},

	// TODO Appropriate docs section?
	// @section Other Methods
	// @method addHandler(name: String, HandlerClass: Function): this
	// Adds a new `Handler` to the map, given its name and constructor function.
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return this; }

		var handler = this[name] = new HandlerClass(this);

		this._handlers.push(handler);

		if (this.options[name]) {
			handler.enable();
		}

		return this;
	},

	// @method remove(): this
	// Destroys the map and clears all related event listeners.
	remove: function () {

		this._initEvents(true);

		if (this._containerId !== this._container._leaflet_id) {
			throw new Error('Map container is being reused by another instance');
		}

		try {
			// throws error in IE6-8
			delete this._container._leaflet_id;
			delete this._containerId;
		} catch (e) {
			/*eslint-disable */
			this._container._leaflet_id = undefined;
			/* eslint-enable */
			this._containerId = undefined;
		}

		if (this._locationWatchId !== undefined) {
			this.stopLocate();
		}

		this._stop();

		remove(this._mapPane);

		if (this._clearControlPos) {
			this._clearControlPos();
		}
		if (this._resizeRequest) {
			cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = null;
		}

		this._clearHandlers();

		if (this._loaded) {
			// @section Map state change events
			// @event unload: Event
			// Fired when the map is destroyed with [remove](#map-remove) method.
			this.fire('unload');
		}

		var i;
		for (i in this._layers) {
			this._layers[i].remove();
		}
		for (i in this._panes) {
			remove(this._panes[i]);
		}

		this._layers = [];
		this._panes = [];
		delete this._mapPane;
		delete this._renderer;

		return this;
	},

	// @section Other Methods
	// @method createPane(name: String, container?: HTMLElement): HTMLElement
	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
	// then returns it. The pane is created as a child of `container`, or
	// as a child of the main map pane if not set.
	createPane: function (name, container) {
		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
		    pane = create$1('div', className, container || this._mapPane);

		if (name) {
			this._panes[name] = pane;
		}
		return pane;
	},

	// @section Methods for Getting Map State

	// @method getCenter(): LatLng
	// Returns the geographical center of the map view
	getCenter: function () {
		this._checkIfLoaded();

		if (this._lastCenter && !this._moved()) {
			return this._lastCenter;
		}
		return this.layerPointToLatLng(this._getCenterLayerPoint());
	},

	// @method getZoom(): Number
	// Returns the current zoom level of the map view
	getZoom: function () {
		return this._zoom;
	},

	// @method getBounds(): LatLngBounds
	// Returns the geographical bounds visible in the current map view
	getBounds: function () {
		var bounds = this.getPixelBounds(),
		    sw = this.unproject(bounds.getBottomLeft()),
		    ne = this.unproject(bounds.getTopRight());

		return new LatLngBounds(sw, ne);
	},

	// @method getMinZoom(): Number
	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
	getMinZoom: function () {
		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
	},

	// @method getMaxZoom(): Number
	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
	getMaxZoom: function () {
		return this.options.maxZoom === undefined ?
			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
			this.options.maxZoom;
	},

	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
	// Returns the maximum zoom level on which the given bounds fit to the map
	// view in its entirety. If `inside` (optional) is set to `true`, the method
	// instead returns the minimum zoom level on which the map view fits into
	// the given bounds in its entirety.
	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
		bounds = toLatLngBounds(bounds);
		padding = toPoint(padding || [0, 0]);

		var zoom = this.getZoom() || 0,
		    min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    nw = bounds.getNorthWest(),
		    se = bounds.getSouthEast(),
		    size = this.getSize().subtract(padding),
		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
		    snap = any3d ? this.options.zoomSnap : 1,
		    scalex = size.x / boundsSize.x,
		    scaley = size.y / boundsSize.y,
		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

		zoom = this.getScaleZoom(scale, zoom);

		if (snap) {
			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
		}

		return Math.max(min, Math.min(max, zoom));
	},

	// @method getSize(): Point
	// Returns the current size of the map container (in pixels).
	getSize: function () {
		if (!this._size || this._sizeChanged) {
			this._size = new Point(
				this._container.clientWidth || 0,
				this._container.clientHeight || 0);

			this._sizeChanged = false;
		}
		return this._size.clone();
	},

	// @method getPixelBounds(): Bounds
	// Returns the bounds of the current map view in projected pixel
	// coordinates (sometimes useful in layer and overlay implementations).
	getPixelBounds: function (center, zoom) {
		var topLeftPoint = this._getTopLeftPoint(center, zoom);
		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},

	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
	// the map pane? "left point of the map layer" can be confusing, specially
	// since there can be negative offsets.
	// @method getPixelOrigin(): Point
	// Returns the projected pixel coordinates of the top left point of
	// the map layer (useful in custom layer and overlay implementations).
	getPixelOrigin: function () {
		this._checkIfLoaded();
		return this._pixelOrigin;
	},

	// @method getPixelWorldBounds(zoom?: Number): Bounds
	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
	// If `zoom` is omitted, the map's current zoom level is used.
	getPixelWorldBounds: function (zoom) {
		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
	},

	// @section Other Methods

	// @method getPane(pane: String|HTMLElement): HTMLElement
	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
	getPane: function (pane) {
		return typeof pane === 'string' ? this._panes[pane] : pane;
	},

	// @method getPanes(): Object
	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
	// the panes as values.
	getPanes: function () {
		return this._panes;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the map.
	getContainer: function () {
		return this._container;
	},


	// @section Conversion Methods

	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
	// Returns the scale factor to be applied to a map transition from zoom level
	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
	getZoomScale: function (toZoom, fromZoom) {
		// TODO replace with universal implementation after refactoring projections
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		return crs.scale(toZoom) / crs.scale(fromZoom);
	},

	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
	// level and everything is scaled by a factor of `scale`. Inverse of
	// [`getZoomScale`](#map-getZoomScale).
	getScaleZoom: function (scale, fromZoom) {
		var crs = this.options.crs;
		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
		var zoom = crs.zoom(scale * crs.scale(fromZoom));
		return isNaN(zoom) ? Infinity : zoom;
	},

	// @method project(latlng: LatLng, zoom: Number): Point
	// Projects a geographical coordinate `LatLng` according to the projection
	// of the map's CRS, then scales it according to `zoom` and the CRS's
	// `Transformation`. The result is pixel coordinate relative to
	// the CRS origin.
	project: function (latlng, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
	},

	// @method unproject(point: Point, zoom: Number): LatLng
	// Inverse of [`project`](#map-project).
	unproject: function (point, zoom) {
		zoom = zoom === undefined ? this._zoom : zoom;
		return this.options.crs.pointToLatLng(toPoint(point), zoom);
	},

	// @method layerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding geographical coordinate (for the current zoom level).
	layerPointToLatLng: function (point) {
		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
		return this.unproject(projectedPoint);
	},

	// @method latLngToLayerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the [origin pixel](#map-getpixelorigin).
	latLngToLayerPoint: function (latlng) {
		var projectedPoint = this.project(toLatLng(latlng))._round();
		return projectedPoint._subtract(this.getPixelOrigin());
	},

	// @method wrapLatLng(latlng: LatLng): LatLng
	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
	// CRS's bounds.
	// By default this means longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees.
	wrapLatLng: function (latlng) {
		return this.options.crs.wrapLatLng(toLatLng(latlng));
	},

	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
	// its center is within the CRS's bounds.
	// By default this means the center longitude is wrapped around the dateline so its
	// value is between -180 and +180 degrees, and the majority of the bounds
	// overlaps the CRS's bounds.
	wrapLatLngBounds: function (latlng) {
		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
	},

	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
	// Returns the distance between two geographical coordinates according to
	// the map's CRS. By default this measures distance in meters.
	distance: function (latlng1, latlng2) {
		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
	},

	// @method containerPointToLayerPoint(point: Point): Point
	// Given a pixel coordinate relative to the map container, returns the corresponding
	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
	containerPointToLayerPoint: function (point) { // (Point)
		return toPoint(point).subtract(this._getMapPanePos());
	},

	// @method layerPointToContainerPoint(point: Point): Point
	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
	// returns the corresponding pixel coordinate relative to the map container.
	layerPointToContainerPoint: function (point) { // (Point)
		return toPoint(point).add(this._getMapPanePos());
	},

	// @method containerPointToLatLng(point: Point): LatLng
	// Given a pixel coordinate relative to the map container, returns
	// the corresponding geographical coordinate (for the current zoom level).
	containerPointToLatLng: function (point) {
		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
		return this.layerPointToLatLng(layerPoint);
	},

	// @method latLngToContainerPoint(latlng: LatLng): Point
	// Given a geographical coordinate, returns the corresponding pixel coordinate
	// relative to the map container.
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
	},

	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to the
	// map container where the event took place.
	mouseEventToContainerPoint: function (e) {
		return getMousePosition(e, this._container);
	},

	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
	// Given a MouseEvent object, returns the pixel coordinate relative to
	// the [origin pixel](#map-getpixelorigin) where the event took place.
	mouseEventToLayerPoint: function (e) {
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},

	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
	// Given a MouseEvent object, returns geographical coordinate where the
	// event took place.
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},


	// map initialization methods

	_initContainer: function (id) {
		var container = this._container = get(id);

		if (!container) {
			throw new Error('Map container not found.');
		} else if (container._leaflet_id) {
			throw new Error('Map container is already initialized.');
		}

		on(container, 'scroll', this._onScroll, this);
		this._containerId = stamp(container);
	},

	_initLayout: function () {
		var container = this._container;

		this._fadeAnimated = this.options.fadeAnimation && any3d;

		addClass(container, 'leaflet-container' +
			(touch ? ' leaflet-touch' : '') +
			(retina ? ' leaflet-retina' : '') +
			(ielt9 ? ' leaflet-oldie' : '') +
			(safari ? ' leaflet-safari' : '') +
			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

		var position = getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
			container.style.position = 'relative';
		}

		this._initPanes();

		if (this._initControlPos) {
			this._initControlPos();
		}
	},

	_initPanes: function () {
		var panes = this._panes = {};
		this._paneRenderers = {};

		// @section
		//
		// Panes are DOM elements used to control the ordering of layers on the map. You
		// can access panes with [`map.getPane`](#map-getpane) or
		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
		// [`map.createPane`](#map-createpane) method.
		//
		// Every map has the following default panes that differ only in zIndex.
		//
		// @pane mapPane: HTMLElement = 'auto'
		// Pane that contains all other map panes

		this._mapPane = this.createPane('mapPane', this._container);
		setPosition(this._mapPane, new Point(0, 0));

		// @pane tilePane: HTMLElement = 200
		// Pane for `GridLayer`s and `TileLayer`s
		this.createPane('tilePane');
		// @pane overlayPane: HTMLElement = 400
		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
		this.createPane('shadowPane');
		// @pane shadowPane: HTMLElement = 500
		// Pane for overlay shadows (e.g. `Marker` shadows)
		this.createPane('overlayPane');
		// @pane markerPane: HTMLElement = 600
		// Pane for `Icon`s of `Marker`s
		this.createPane('markerPane');
		// @pane tooltipPane: HTMLElement = 650
		// Pane for `Tooltip`s.
		this.createPane('tooltipPane');
		// @pane popupPane: HTMLElement = 700
		// Pane for `Popup`s.
		this.createPane('popupPane');

		if (!this.options.markerZoomAnimation) {
			addClass(panes.markerPane, 'leaflet-zoom-hide');
			addClass(panes.shadowPane, 'leaflet-zoom-hide');
		}
	},


	// private methods that modify map state

	// @section Map state change events
	_resetView: function (center, zoom) {
		setPosition(this._mapPane, new Point(0, 0));

		var loading = !this._loaded;
		this._loaded = true;
		zoom = this._limitZoom(zoom);

		this.fire('viewprereset');

		var zoomChanged = this._zoom !== zoom;
		this
			._moveStart(zoomChanged, false)
			._move(center, zoom)
			._moveEnd(zoomChanged);

		// @event viewreset: Event
		// Fired when the map needs to redraw its content (this usually happens
		// on map zoom or load). Very useful for creating custom overlays.
		this.fire('viewreset');

		// @event load: Event
		// Fired when the map is initialized (when its center and zoom are set
		// for the first time).
		if (loading) {
			this.fire('load');
		}
	},

	_moveStart: function (zoomChanged, noMoveStart) {
		// @event zoomstart: Event
		// Fired when the map zoom is about to change (e.g. before zoom animation).
		// @event movestart: Event
		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
		if (zoomChanged) {
			this.fire('zoomstart');
		}
		if (!noMoveStart) {
			this.fire('movestart');
		}
		return this;
	},

	_move: function (center, zoom, data) {
		if (zoom === undefined) {
			zoom = this._zoom;
		}
		var zoomChanged = this._zoom !== zoom;

		this._zoom = zoom;
		this._lastCenter = center;
		this._pixelOrigin = this._getNewPixelOrigin(center);

		// @event zoom: Event
		// Fired repeatedly during any change in zoom level, including zoom
		// and fly animations.
		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
			this.fire('zoom', data);
		}

		// @event move: Event
		// Fired repeatedly during any movement of the map, including pan and
		// fly animations.
		return this.fire('move', data);
	},

	_moveEnd: function (zoomChanged) {
		// @event zoomend: Event
		// Fired when the map has changed, after any animations.
		if (zoomChanged) {
			this.fire('zoomend');
		}

		// @event moveend: Event
		// Fired when the center of the map stops changing (e.g. user stopped
		// dragging the map).
		return this.fire('moveend');
	},

	_stop: function () {
		cancelAnimFrame(this._flyToFrame);
		if (this._panAnim) {
			this._panAnim.stop();
		}
		return this;
	},

	_rawPanBy: function (offset) {
		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
	},

	_getZoomSpan: function () {
		return this.getMaxZoom() - this.getMinZoom();
	},

	_panInsideMaxBounds: function () {
		if (!this._enforcingBounds) {
			this.panInsideBounds(this.options.maxBounds);
		}
	},

	_checkIfLoaded: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
	},

	// DOM event handling

	// @section Interaction events
	_initEvents: function (remove$$1) {
		this._targets = {};
		this._targets[stamp(this._container)] = this;

		var onOff = remove$$1 ? off : on;

		// @event click: MouseEvent
		// Fired when the user clicks (or taps) the map.
		// @event dblclick: MouseEvent
		// Fired when the user double-clicks (or double-taps) the map.
		// @event mousedown: MouseEvent
		// Fired when the user pushes the mouse button on the map.
		// @event mouseup: MouseEvent
		// Fired when the user releases the mouse button on the map.
		// @event mouseover: MouseEvent
		// Fired when the mouse enters the map.
		// @event mouseout: MouseEvent
		// Fired when the mouse leaves the map.
		// @event mousemove: MouseEvent
		// Fired while the mouse moves over the map.
		// @event contextmenu: MouseEvent
		// Fired when the user pushes the right mouse button on the map, prevents
		// default browser context menu from showing if there are listeners on
		// this event. Also fired on mobile when the user holds a single touch
		// for a second (also called long press).
		// @event keypress: KeyboardEvent
		// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
		// @event keydown: KeyboardEvent
		// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
		// the `keydown` event is fired for keys that produce a character value and for keys
		// that do not produce a character value.
		// @event keyup: KeyboardEvent
		// Fired when the user releases a key from the keyboard while the map is focused.
		onOff(this._container, 'click dblclick mousedown mouseup ' +
			'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);

		if (this.options.trackResize) {
			onOff(window, 'resize', this._onResize, this);
		}

		if (any3d && this.options.transform3DLimit) {
			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
		}
	},

	_onResize: function () {
		cancelAnimFrame(this._resizeRequest);
		this._resizeRequest = requestAnimFrame(
		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
	},

	_onScroll: function () {
		this._container.scrollTop  = 0;
		this._container.scrollLeft = 0;
	},

	_onMoveEnd: function () {
		var pos = this._getMapPanePos();
		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
			this._resetView(this.getCenter(), this.getZoom());
		}
	},

	_findEventTargets: function (e, type) {
		var targets = [],
		    target,
		    isHover = type === 'mouseout' || type === 'mouseover',
		    src = e.target || e.srcElement,
		    dragging = false;

		while (src) {
			target = this._targets[stamp(src)];
			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
				// Prevent firing click after you just dragged an object.
				dragging = true;
				break;
			}
			if (target && target.listens(type, true)) {
				if (isHover && !isExternalTarget(src, e)) { break; }
				targets.push(target);
				if (isHover) { break; }
			}
			if (src === this._container) { break; }
			src = src.parentNode;
		}
		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
			targets = [this];
		}
		return targets;
	},

	_handleDOMEvent: function (e) {
		if (!this._loaded || skipped(e)) { return; }

		var type = e.type;

		if (type === 'mousedown' || type === 'keypress' || type === 'keyup' || type === 'keydown') {
			// prevents outline when clicking on keyboard-focusable element
			preventOutline(e.target || e.srcElement);
		}

		this._fireDOMEvent(e, type);
	},

	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

	_fireDOMEvent: function (e, type, targets) {

		if (e.type === 'click') {
			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
			// @event preclick: MouseEvent
			// Fired before mouse click on the map (sometimes useful when you
			// want something to happen on click before any existing click
			// handlers start running).
			var synth = extend({}, e);
			synth.type = 'preclick';
			this._fireDOMEvent(synth, synth.type, targets);
		}

		if (e._stopped) { return; }

		// Find the layer the event is propagating from and its parents.
		targets = (targets || []).concat(this._findEventTargets(e, type));

		if (!targets.length) { return; }

		var target = targets[0];
		if (type === 'contextmenu' && target.listens(type, true)) {
			preventDefault(e);
		}

		var data = {
			originalEvent: e
		};

		if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {
			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
			data.containerPoint = isMarker ?
				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
		}

		for (var i = 0; i < targets.length; i++) {
			targets[i].fire(type, data, true);
			if (data.originalEvent._stopped ||
				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
		}
	},

	_draggableMoved: function (obj) {
		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
	},

	_clearHandlers: function () {
		for (var i = 0, len = this._handlers.length; i < len; i++) {
			this._handlers[i].disable();
		}
	},

	// @section Other Methods

	// @method whenReady(fn: Function, context?: Object): this
	// Runs the given function `fn` when the map gets initialized with
	// a view (center and zoom) and at least one layer, or immediately
	// if it's already initialized, optionally passing a function context.
	whenReady: function (callback, context) {
		if (this._loaded) {
			callback.call(context || this, {target: this});
		} else {
			this.on('load', callback, context);
		}
		return this;
	},


	// private methods for getting map state

	_getMapPanePos: function () {
		return getPosition(this._mapPane) || new Point(0, 0);
	},

	_moved: function () {
		var pos = this._getMapPanePos();
		return pos && !pos.equals([0, 0]);
	},

	_getTopLeftPoint: function (center, zoom) {
		var pixelOrigin = center && zoom !== undefined ?
			this._getNewPixelOrigin(center, zoom) :
			this.getPixelOrigin();
		return pixelOrigin.subtract(this._getMapPanePos());
	},

	_getNewPixelOrigin: function (center, zoom) {
		var viewHalf = this.getSize()._divideBy(2);
		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
	},

	_latLngToNewLayerPoint: function (latlng, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return this.project(latlng, zoom)._subtract(topLeft);
	},

	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
		var topLeft = this._getNewPixelOrigin(center, zoom);
		return toBounds([
			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
		]);
	},

	// layer point of the current center
	_getCenterLayerPoint: function () {
		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
	},

	// offset of the specified place to the current center in pixels
	_getCenterOffset: function (latlng) {
		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
	},

	// adjust center for view to get inside bounds
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
		    viewHalf = this.getSize().divideBy(2),
		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		// If offset is less than a pixel, ignore.
		// This prevents unstable projections from getting into
		// an infinite loop of tiny offsets.
		if (offset.round().equals([0, 0])) {
			return center;
		}

		return this.unproject(centerPoint.add(offset), zoom);
	},

	// adjust offset for view to get inside bounds
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	},

	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
		var projectedMaxBounds = toBounds(
		        this.project(maxBounds.getNorthEast(), zoom),
		        this.project(maxBounds.getSouthWest(), zoom)
		    ),
		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

		    dx = this._rebound(minOffset.x, -maxOffset.x),
		    dy = this._rebound(minOffset.y, -maxOffset.y);

		return new Point(dx, dy);
	},

	_rebound: function (left, right) {
		return left + right > 0 ?
			Math.round(left - right) / 2 :
			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
	},

	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
		    max = this.getMaxZoom(),
		    snap = any3d ? this.options.zoomSnap : 1;
		if (snap) {
			zoom = Math.round(zoom / snap) * snap;
		}
		return Math.max(min, Math.min(max, zoom));
	},

	_onPanTransitionStep: function () {
		this.fire('move');
	},

	_onPanTransitionEnd: function () {
		removeClass(this._mapPane, 'leaflet-pan-anim');
		this.fire('moveend');
	},

	_tryAnimatedPan: function (center, options) {
		// difference between the new and current centers in pixels
		var offset = this._getCenterOffset(center)._trunc();

		// don't animate too far unless animate: true specified in options
		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

		this.panBy(offset, options);

		return true;
	},

	_createAnimProxy: function () {

		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
		this._panes.mapPane.appendChild(proxy);

		this.on('zoomanim', function (e) {
			var prop = TRANSFORM,
			    transform = this._proxy.style[prop];

			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

			// workaround for case when transform is the same and so transitionend event is not fired
			if (transform === this._proxy.style[prop] && this._animatingZoom) {
				this._onZoomTransitionEnd();
			}
		}, this);

		this.on('load moveend', this._animMoveEnd, this);

		this._on('unload', this._destroyAnimProxy, this);
	},

	_destroyAnimProxy: function () {
		remove(this._proxy);
		this.off('load moveend', this._animMoveEnd, this);
		delete this._proxy;
	},

	_animMoveEnd: function () {
		var c = this.getCenter(),
		    z = this.getZoom();
		setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
	},

	_catchTransitionEnd: function (e) {
		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
			this._onZoomTransitionEnd();
		}
	},

	_nothingToAnimate: function () {
		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
	},

	_tryAnimatedZoom: function (center, zoom, options) {

		if (this._animatingZoom) { return true; }

		options = options || {};

		// don't animate if disabled, not supported or zoom difference is too large
		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

		// offset is the pixel coords of the zoom origin relative to the current center
		var scale = this.getZoomScale(zoom),
		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

		requestAnimFrame(function () {
			this
			    ._moveStart(true, false)
			    ._animateZoom(center, zoom, true);
		}, this);

		return true;
	},

	_animateZoom: function (center, zoom, startAnim, noUpdate) {
		if (!this._mapPane) { return; }

		if (startAnim) {
			this._animatingZoom = true;

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			addClass(this._mapPane, 'leaflet-zoom-anim');
		}

		// @section Other Events
		// @event zoomanim: ZoomAnimEvent
		// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
		this.fire('zoomanim', {
			center: center,
			zoom: zoom,
			noUpdate: noUpdate
		});

		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
	},

	_onZoomTransitionEnd: function () {
		if (!this._animatingZoom) { return; }

		if (this._mapPane) {
			removeClass(this._mapPane, 'leaflet-zoom-anim');
		}

		this._animatingZoom = false;

		this._move(this._animateToCenter, this._animateToZoom);

		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
		requestAnimFrame(function () {
			this._moveEnd(true);
		}, this);
	}
});

// @section

// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
function createMap(id, options) {
	return new Map(id, options);
}

/*
 * @class Control
 * @aka L.Control
 * @inherits Class
 *
 * L.Control is a base class for implementing map controls. Handles positioning.
 * All other controls extend from this class.
 */

var Control = Class.extend({
	// @section
	// @aka Control options
	options: {
		// @option position: String = 'topright'
		// The position of the control (one of the map corners). Possible values are `'topleft'`,
		// `'topright'`, `'bottomleft'` or `'bottomright'`
		position: 'topright'
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	/* @section
	 * Classes extending L.Control will inherit the following methods:
	 *
	 * @method getPosition: string
	 * Returns the position of the control.
	 */
	getPosition: function () {
		return this.options.position;
	},

	// @method setPosition(position: string): this
	// Sets the position of the control.
	setPosition: function (position) {
		var map = this._map;

		if (map) {
			map.removeControl(this);
		}

		this.options.position = position;

		if (map) {
			map.addControl(this);
		}

		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTMLElement that contains the control.
	getContainer: function () {
		return this._container;
	},

	// @method addTo(map: Map): this
	// Adds the control to the given map.
	addTo: function (map) {
		this.remove();
		this._map = map;

		var container = this._container = this.onAdd(map),
		    pos = this.getPosition(),
		    corner = map._controlCorners[pos];

		addClass(container, 'leaflet-control');

		if (pos.indexOf('bottom') !== -1) {
			corner.insertBefore(container, corner.firstChild);
		} else {
			corner.appendChild(container);
		}

		this._map.on('unload', this.remove, this);

		return this;
	},

	// @method remove: this
	// Removes the control from the map it is currently active on.
	remove: function () {
		if (!this._map) {
			return this;
		}

		remove(this._container);

		if (this.onRemove) {
			this.onRemove(this._map);
		}

		this._map.off('unload', this.remove, this);
		this._map = null;

		return this;
	},

	_refocusOnMap: function (e) {
		// if map exists and event is not a keyboard event
		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
			this._map.getContainer().focus();
		}
	}
});

var control = function (options) {
	return new Control(options);
};

/* @section Extension methods
 * @uninheritable
 *
 * Every control should extend from `L.Control` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): HTMLElement
 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
 *
 * @method onRemove(map: Map)
 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
 */

/* @namespace Map
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addControl(control: Control): this
	// Adds the given control to the map
	addControl: function (control) {
		control.addTo(this);
		return this;
	},

	// @method removeControl(control: Control): this
	// Removes the given control from the map
	removeControl: function (control) {
		control.remove();
		return this;
	},

	_initControlPos: function () {
		var corners = this._controlCorners = {},
		    l = 'leaflet-',
		    container = this._controlContainer =
		            create$1('div', l + 'control-container', this._container);

		function createCorner(vSide, hSide) {
			var className = l + vSide + ' ' + l + hSide;

			corners[vSide + hSide] = create$1('div', className, container);
		}

		createCorner('top', 'left');
		createCorner('top', 'right');
		createCorner('bottom', 'left');
		createCorner('bottom', 'right');
	},

	_clearControlPos: function () {
		for (var i in this._controlCorners) {
			remove(this._controlCorners[i]);
		}
		remove(this._controlContainer);
		delete this._controlCorners;
		delete this._controlContainer;
	}
});

/*
 * @class Control.Layers
 * @aka L.Control.Layers
 * @inherits Control
 *
 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
 *
 * @example
 *
 * ```js
 * var baseLayers = {
 * 	"Mapbox": mapbox,
 * 	"OpenStreetMap": osm
 * };
 *
 * var overlays = {
 * 	"Marker": marker,
 * 	"Roads": roadsLayer
 * };
 *
 * L.control.layers(baseLayers, overlays).addTo(map);
 * ```
 *
 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
 *
 * ```js
 * {
 *     "<someName1>": layer1,
 *     "<someName2>": layer2
 * }
 * ```
 *
 * The layer names can contain HTML, which allows you to add additional styling to the items:
 *
 * ```js
 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
 * ```
 */

var Layers = Control.extend({
	// @section
	// @aka Control.Layers options
	options: {
		// @option collapsed: Boolean = true
		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
		collapsed: true,
		position: 'topright',

		// @option autoZIndex: Boolean = true
		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
		autoZIndex: true,

		// @option hideSingleBase: Boolean = false
		// If `true`, the base layers in the control will be hidden when there is only one.
		hideSingleBase: false,

		// @option sortLayers: Boolean = false
		// Whether to sort the layers. When `false`, layers will keep the order
		// in which they were added to the control.
		sortLayers: false,

		// @option sortFunction: Function = *
		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
		// that will be used for sorting the layers, when `sortLayers` is `true`.
		// The function receives both the `L.Layer` instances and their names, as in
		// `sortFunction(layerA, layerB, nameA, nameB)`.
		// By default, it sorts layers alphabetically by their name.
		sortFunction: function (layerA, layerB, nameA, nameB) {
			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
		}
	},

	initialize: function (baseLayers, overlays, options) {
		setOptions(this, options);

		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;

		for (var i in baseLayers) {
			this._addLayer(baseLayers[i], i);
		}

		for (i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},

	onAdd: function (map) {
		this._initLayout();
		this._update();

		this._map = map;
		map.on('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.on('add remove', this._onLayerChange, this);
		}

		return this._container;
	},

	addTo: function (map) {
		Control.prototype.addTo.call(this, map);
		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
		return this._expandIfNotCollapsed();
	},

	onRemove: function () {
		this._map.off('zoomend', this._checkDisabledLayers, this);

		for (var i = 0; i < this._layers.length; i++) {
			this._layers[i].layer.off('add remove', this._onLayerChange, this);
		}
	},

	// @method addBaseLayer(layer: Layer, name: String): this
	// Adds a base layer (radio button entry) with the given name to the control.
	addBaseLayer: function (layer, name) {
		this._addLayer(layer, name);
		return (this._map) ? this._update() : this;
	},

	// @method addOverlay(layer: Layer, name: String): this
	// Adds an overlay (checkbox entry) with the given name to the control.
	addOverlay: function (layer, name) {
		this._addLayer(layer, name, true);
		return (this._map) ? this._update() : this;
	},

	// @method removeLayer(layer: Layer): this
	// Remove the given layer from the control.
	removeLayer: function (layer) {
		layer.off('add remove', this._onLayerChange, this);

		var obj = this._getLayer(stamp(layer));
		if (obj) {
			this._layers.splice(this._layers.indexOf(obj), 1);
		}
		return (this._map) ? this._update() : this;
	},

	// @method expand(): this
	// Expand the control container if collapsed.
	expand: function () {
		addClass(this._container, 'leaflet-control-layers-expanded');
		this._section.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._section.clientHeight) {
			addClass(this._section, 'leaflet-control-layers-scrollbar');
			this._section.style.height = acceptableHeight + 'px';
		} else {
			removeClass(this._section, 'leaflet-control-layers-scrollbar');
		}
		this._checkDisabledLayers();
		return this;
	},

	// @method collapse(): this
	// Collapse the control container if expanded.
	collapse: function () {
		removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},

	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = create$1('div', className),
		    collapsed = this.options.collapsed;

		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
		container.setAttribute('aria-haspopup', true);

		disableClickPropagation(container);
		disableScrollPropagation(container);

		var section = this._section = create$1('section', className + '-list');

		if (collapsed) {
			this._map.on('click', this.collapse, this);

			if (!android) {
				on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}

		var link = this._layersLink = create$1('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';

		if (touch) {
			on(link, 'click', stop);
			on(link, 'click', this.expand, this);
		} else {
			on(link, 'focus', this.expand, this);
		}

		if (!collapsed) {
			this.expand();
		}

		this._baseLayersList = create$1('div', className + '-base', section);
		this._separator = create$1('div', className + '-separator', section);
		this._overlaysList = create$1('div', className + '-overlays', section);

		container.appendChild(section);
	},

	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {

			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},

	_addLayer: function (layer, name, overlay) {
		if (this._map) {
			layer.on('add remove', this._onLayerChange, this);
		}

		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});

		if (this.options.sortLayers) {
			this._layers.sort(bind(function (a, b) {
				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
			}, this));
		}

		if (this.options.autoZIndex && layer.setZIndex) {
			this._lastZIndex++;
			layer.setZIndex(this._lastZIndex);
		}

		this._expandIfNotCollapsed();
	},

	_update: function () {
		if (!this._container) { return this; }

		empty(this._baseLayersList);
		empty(this._overlaysList);

		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}

		// Hide base layers section if there's only one layer.
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}

		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

		return this;
	},

	_onLayerChange: function (e) {
		if (!this._handlingClick) {
			this._update();
		}

		var obj = this._getLayer(stamp(e.target));

		// @namespace Map
		// @section Layer events
		// @event baselayerchange: LayersControlEvent
		// Fired when the base layer is changed through the [layer control](#control-layers).
		// @event overlayadd: LayersControlEvent
		// Fired when an overlay is selected through the [layer control](#control-layers).
		// @event overlayremove: LayersControlEvent
		// Fired when an overlay is deselected through the [layer control](#control-layers).
		// @namespace Control.Layers
		var type = obj.overlay ?
			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
			(e.type === 'add' ? 'baselayerchange' : null);

		if (type) {
			this._map.fire(type, obj);
		}
	},

	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
	_createRadioElement: function (name, checked) {

		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

		var radioFragment = document.createElement('div');
		radioFragment.innerHTML = radioHtml;

		return radioFragment.firstChild;
	},

	_addItem: function (obj) {
		var label = document.createElement('label'),
		    checked = this._map.hasLayer(obj.layer),
		    input;

		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'checkbox';
			input.className = 'leaflet-control-layers-selector';
			input.defaultChecked = checked;
		} else {
			input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);
		}

		this._layerControlInputs.push(input);
		input.layerId = stamp(obj.layer);

		on(input, 'click', this._onInputClick, this);

		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;

		// Helps from preventing layer control flicker when checkboxes are disabled
		// https://github.com/Leaflet/Leaflet/issues/2771
		var holder = document.createElement('div');

		label.appendChild(holder);
		holder.appendChild(input);
		holder.appendChild(name);

		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);

		this._checkDisabledLayers();
		return label;
	},

	_onInputClick: function () {
		var inputs = this._layerControlInputs,
		    input, layer;
		var addedLayers = [],
		    removedLayers = [];

		this._handlingClick = true;

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;

			if (input.checked) {
				addedLayers.push(layer);
			} else if (!input.checked) {
				removedLayers.push(layer);
			}
		}

		// Bugfix issue 2318: Should remove all old layers before readding new ones
		for (i = 0; i < removedLayers.length; i++) {
			if (this._map.hasLayer(removedLayers[i])) {
				this._map.removeLayer(removedLayers[i]);
			}
		}
		for (i = 0; i < addedLayers.length; i++) {
			if (!this._map.hasLayer(addedLayers[i])) {
				this._map.addLayer(addedLayers[i]);
			}
		}

		this._handlingClick = false;

		this._refocusOnMap();
	},

	_checkDisabledLayers: function () {
		var inputs = this._layerControlInputs,
		    input,
		    layer,
		    zoom = this._map.getZoom();

		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

		}
	},

	_expandIfNotCollapsed: function () {
		if (this._map && !this.options.collapsed) {
			this.expand();
		}
		return this;
	},

	_expand: function () {
		// Backward compatibility, remove me in 1.1.
		return this.expand();
	},

	_collapse: function () {
		// Backward compatibility, remove me in 1.1.
		return this.collapse();
	}

});


// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
// Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
var layers = function (baseLayers, overlays, options) {
	return new Layers(baseLayers, overlays, options);
};

/*
 * @class Control.Zoom
 * @aka L.Control.Zoom
 * @inherits Control
 *
 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
 */

var Zoom = Control.extend({
	// @section
	// @aka Control.Zoom options
	options: {
		position: 'topleft',

		// @option zoomInText: String = '+'
		// The text set on the 'zoom in' button.
		zoomInText: '+',

		// @option zoomInTitle: String = 'Zoom in'
		// The title set on the 'zoom in' button.
		zoomInTitle: 'Zoom in',

		// @option zoomOutText: String = '&#x2212;'
		// The text set on the 'zoom out' button.
		zoomOutText: '&#x2212;',

		// @option zoomOutTitle: String = 'Zoom out'
		// The title set on the 'zoom out' button.
		zoomOutTitle: 'Zoom out'
	},

	onAdd: function (map) {
		var zoomName = 'leaflet-control-zoom',
		    container = create$1('div', zoomName + ' leaflet-bar'),
		    options = this.options;

		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
		        zoomName + '-in',  container, this._zoomIn);
		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
		        zoomName + '-out', container, this._zoomOut);

		this._updateDisabled();
		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

		return container;
	},

	onRemove: function (map) {
		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
	},

	disable: function () {
		this._disabled = true;
		this._updateDisabled();
		return this;
	},

	enable: function () {
		this._disabled = false;
		this._updateDisabled();
		return this;
	},

	_zoomIn: function (e) {
		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_zoomOut: function (e) {
		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
		}
	},

	_createButton: function (html, title, className, container, fn) {
		var link = create$1('a', className, container);
		link.innerHTML = html;
		link.href = '#';
		link.title = title;

		/*
		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
		 */
		link.setAttribute('role', 'button');
		link.setAttribute('aria-label', title);

		disableClickPropagation(link);
		on(link, 'click', stop);
		on(link, 'click', fn, this);
		on(link, 'click', this._refocusOnMap, this);

		return link;
	},

	_updateDisabled: function () {
		var map = this._map,
		    className = 'leaflet-disabled';

		removeClass(this._zoomInButton, className);
		removeClass(this._zoomOutButton, className);

		if (this._disabled || map._zoom === map.getMinZoom()) {
			addClass(this._zoomOutButton, className);
		}
		if (this._disabled || map._zoom === map.getMaxZoom()) {
			addClass(this._zoomInButton, className);
		}
	}
});

// @namespace Map
// @section Control options
// @option zoomControl: Boolean = true
// Whether a [zoom control](#control-zoom) is added to the map by default.
Map.mergeOptions({
	zoomControl: true
});

Map.addInitHook(function () {
	if (this.options.zoomControl) {
		// @section Controls
		// @property zoomControl: Control.Zoom
		// The default zoom control (only available if the
		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
		this.zoomControl = new Zoom();
		this.addControl(this.zoomControl);
	}
});

// @namespace Control.Zoom
// @factory L.control.zoom(options: Control.Zoom options)
// Creates a zoom control
var zoom = function (options) {
	return new Zoom(options);
};

/*
 * @class Control.Scale
 * @aka L.Control.Scale
 * @inherits Control
 *
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
 *
 * @example
 *
 * ```js
 * L.control.scale().addTo(map);
 * ```
 */

var Scale = Control.extend({
	// @section
	// @aka Control.Scale options
	options: {
		position: 'bottomleft',

		// @option maxWidth: Number = 100
		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
		maxWidth: 100,

		// @option metric: Boolean = True
		// Whether to show the metric scale line (m/km).
		metric: true,

		// @option imperial: Boolean = True
		// Whether to show the imperial scale line (mi/ft).
		imperial: true

		// @option updateWhenIdle: Boolean = false
		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
	},

	onAdd: function (map) {
		var className = 'leaflet-control-scale',
		    container = create$1('div', className),
		    options = this.options;

		this._addScales(options, className + '-line', container);

		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		map.whenReady(this._update, this);

		return container;
	},

	onRemove: function (map) {
		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
	},

	_addScales: function (options, className, container) {
		if (options.metric) {
			this._mScale = create$1('div', className, container);
		}
		if (options.imperial) {
			this._iScale = create$1('div', className, container);
		}
	},

	_update: function () {
		var map = this._map,
		    y = map.getSize().y / 2;

		var maxMeters = map.distance(
			map.containerPointToLatLng([0, y]),
			map.containerPointToLatLng([this.options.maxWidth, y]));

		this._updateScales(maxMeters);
	},

	_updateScales: function (maxMeters) {
		if (this.options.metric && maxMeters) {
			this._updateMetric(maxMeters);
		}
		if (this.options.imperial && maxMeters) {
			this._updateImperial(maxMeters);
		}
	},

	_updateMetric: function (maxMeters) {
		var meters = this._getRoundNum(maxMeters),
		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

		this._updateScale(this._mScale, label, meters / maxMeters);
	},

	_updateImperial: function (maxMeters) {
		var maxFeet = maxMeters * 3.2808399,
		    maxMiles, miles, feet;

		if (maxFeet > 5280) {
			maxMiles = maxFeet / 5280;
			miles = this._getRoundNum(maxMiles);
			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

		} else {
			feet = this._getRoundNum(maxFeet);
			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
		}
	},

	_updateScale: function (scale, text, ratio) {
		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
		scale.innerHTML = text;
	},

	_getRoundNum: function (num) {
		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
		    d = num / pow10;

		d = d >= 10 ? 10 :
		    d >= 5 ? 5 :
		    d >= 3 ? 3 :
		    d >= 2 ? 2 : 1;

		return pow10 * d;
	}
});


// @factory L.control.scale(options?: Control.Scale options)
// Creates an scale control with the given options.
var scale = function (options) {
	return new Scale(options);
};

/*
 * @class Control.Attribution
 * @aka L.Control.Attribution
 * @inherits Control
 *
 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
 */

var Attribution = Control.extend({
	// @section
	// @aka Control.Attribution options
	options: {
		position: 'bottomright',

		// @option prefix: String = 'Leaflet'
		// The HTML text shown before the attributions. Pass `false` to disable.
		prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
	},

	initialize: function (options) {
		setOptions(this, options);

		this._attributions = {};
	},

	onAdd: function (map) {
		map.attributionControl = this;
		this._container = create$1('div', 'leaflet-control-attribution');
		disableClickPropagation(this._container);

		// TODO ugly, refactor
		for (var i in map._layers) {
			if (map._layers[i].getAttribution) {
				this.addAttribution(map._layers[i].getAttribution());
			}
		}

		this._update();

		return this._container;
	},

	// @method setPrefix(prefix: String): this
	// Sets the text before the attributions.
	setPrefix: function (prefix) {
		this.options.prefix = prefix;
		this._update();
		return this;
	},

	// @method addAttribution(text: String): this
	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
	addAttribution: function (text) {
		if (!text) { return this; }

		if (!this._attributions[text]) {
			this._attributions[text] = 0;
		}
		this._attributions[text]++;

		this._update();

		return this;
	},

	// @method removeAttribution(text: String): this
	// Removes an attribution text.
	removeAttribution: function (text) {
		if (!text) { return this; }

		if (this._attributions[text]) {
			this._attributions[text]--;
			this._update();
		}

		return this;
	},

	_update: function () {
		if (!this._map) { return; }

		var attribs = [];

		for (var i in this._attributions) {
			if (this._attributions[i]) {
				attribs.push(i);
			}
		}

		var prefixAndAttribs = [];

		if (this.options.prefix) {
			prefixAndAttribs.push(this.options.prefix);
		}
		if (attribs.length) {
			prefixAndAttribs.push(attribs.join(', '));
		}

		this._container.innerHTML = prefixAndAttribs.join(' | ');
	}
});

// @namespace Map
// @section Control options
// @option attributionControl: Boolean = true
// Whether a [attribution control](#control-attribution) is added to the map by default.
Map.mergeOptions({
	attributionControl: true
});

Map.addInitHook(function () {
	if (this.options.attributionControl) {
		new Attribution().addTo(this);
	}
});

// @namespace Control.Attribution
// @factory L.control.attribution(options: Control.Attribution options)
// Creates an attribution control.
var attribution = function (options) {
	return new Attribution(options);
};

Control.Layers = Layers;
Control.Zoom = Zoom;
Control.Scale = Scale;
Control.Attribution = Attribution;

control.layers = layers;
control.zoom = zoom;
control.scale = scale;
control.attribution = attribution;

/*
	L.Handler is a base class for handler classes that are used internally to inject
	interaction features like dragging to classes like Map and Marker.
*/

// @class Handler
// @aka L.Handler
// Abstract class for map interaction handlers

var Handler = Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	// @method enable(): this
	// Enables the handler
	enable: function () {
		if (this._enabled) { return this; }

		this._enabled = true;
		this.addHooks();
		return this;
	},

	// @method disable(): this
	// Disables the handler
	disable: function () {
		if (!this._enabled) { return this; }

		this._enabled = false;
		this.removeHooks();
		return this;
	},

	// @method enabled(): Boolean
	// Returns `true` if the handler is enabled
	enabled: function () {
		return !!this._enabled;
	}

	// @section Extension methods
	// Classes inheriting from `Handler` must implement the two following methods:
	// @method addHooks()
	// Called when the handler is enabled, should add event hooks.
	// @method removeHooks()
	// Called when the handler is disabled, should remove the event hooks added previously.
});

// @section There is static function which can be called without instantiating L.Handler:
// @function addTo(map: Map, name: String): this
// Adds a new Handler to the given map with the given name.
Handler.addTo = function (map, name) {
	map.addHandler(name, this);
	return this;
};

var Mixin = {Events: Events};

/*
 * @class Draggable
 * @aka L.Draggable
 * @inherits Evented
 *
 * A class for making DOM elements draggable (including touch support).
 * Used internally for map and marker dragging. Only works for elements
 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
 *
 * @example
 * ```js
 * var draggable = new L.Draggable(elementToDrag);
 * draggable.enable();
 * ```
 */

var START = touch ? 'touchstart mousedown' : 'mousedown';
var END = {
	mousedown: 'mouseup',
	touchstart: 'touchend',
	pointerdown: 'touchend',
	MSPointerDown: 'touchend'
};
var MOVE = {
	mousedown: 'mousemove',
	touchstart: 'touchmove',
	pointerdown: 'touchmove',
	MSPointerDown: 'touchmove'
};


var Draggable = Evented.extend({

	options: {
		// @section
		// @aka Draggable options
		// @option clickTolerance: Number = 3
		// The max number of pixels a user can shift the mouse pointer during a click
		// for it to be considered a valid click (as opposed to a mouse drag).
		clickTolerance: 3
	},

	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
		setOptions(this, options);

		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
		this._preventOutline = preventOutline$$1;
	},

	// @method enable()
	// Enables the dragging ability
	enable: function () {
		if (this._enabled) { return; }

		on(this._dragStartTarget, START, this._onDown, this);

		this._enabled = true;
	},

	// @method disable()
	// Disables the dragging ability
	disable: function () {
		if (!this._enabled) { return; }

		// If we're currently dragging this draggable,
		// disabling it counts as first ending the drag.
		if (Draggable._dragging === this) {
			this.finishDrag();
		}

		off(this._dragStartTarget, START, this._onDown, this);

		this._enabled = false;
		this._moved = false;
	},

	_onDown: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		this._moved = false;

		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

		if (this._preventOutline) {
			preventOutline(this._element);
		}

		disableImageDrag();
		disableTextSelection();

		if (this._moving) { return; }

		// @event down: Event
		// Fired when a drag is about to start.
		this.fire('down');

		var first = e.touches ? e.touches[0] : e,
		    sizedParent = getSizedParentNode(this._element);

		this._startPoint = new Point(first.clientX, first.clientY);

		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
		this._parentScale = getScale(sizedParent);

		on(document, MOVE[e.type], this._onMove, this);
		on(document, END[e.type], this._onUp, this);
	},

	_onMove: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }

		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

		if (!offset.x && !offset.y) { return; }
		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
		// and we can use the cached value for the scale.
		offset.x /= this._parentScale.x;
		offset.y /= this._parentScale.y;

		preventDefault(e);

		if (!this._moved) {
			// @event dragstart: Event
			// Fired when a drag starts
			this.fire('dragstart');

			this._moved = true;
			this._startPos = getPosition(this._element).subtract(offset);

			addClass(document.body, 'leaflet-dragging');

			this._lastTarget = e.target || e.srcElement;
			// IE and Edge do not give the <use> element, so fetch it
			// if necessary
			if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
				this._lastTarget = this._lastTarget.correspondingUseElement;
			}
			addClass(this._lastTarget, 'leaflet-drag-target');
		}

		this._newPos = this._startPos.add(offset);
		this._moving = true;

		cancelAnimFrame(this._animRequest);
		this._lastEvent = e;
		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
	},

	_updatePosition: function () {
		var e = {originalEvent: this._lastEvent};

		// @event predrag: Event
		// Fired continuously during dragging *before* each corresponding
		// update of the element's position.
		this.fire('predrag', e);
		setPosition(this._element, this._newPos);

		// @event drag: Event
		// Fired continuously during dragging.
		this.fire('drag', e);
	},

	_onUp: function (e) {
		// Ignore simulated events, since we handle both touch and
		// mouse explicitly; otherwise we risk getting duplicates of
		// touch events, see #4315.
		// Also ignore the event if disabled; this happens in IE11
		// under some circumstances, see #3666.
		if (e._simulated || !this._enabled) { return; }
		this.finishDrag();
	},

	finishDrag: function () {
		removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		for (var i in MOVE) {
			off(document, MOVE[i], this._onMove, this);
			off(document, END[i], this._onUp, this);
		}

		enableImageDrag();
		enableTextSelection();

		if (this._moved && this._moving) {
			// ensure drag is not fired after dragend
			cancelAnimFrame(this._animRequest);

			// @event dragend: DragEndEvent
			// Fired when the drag ends.
			this.fire('dragend', {
				distance: this._newPos.distanceTo(this._startPos)
			});
		}

		this._moving = false;
		Draggable._dragging = false;
	}

});

/*
 * @namespace LineUtil
 *
 * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
 */

// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
// Improves rendering performance dramatically by lessening the number of points to draw.

// @function simplify(points: Point[], tolerance: Number): Point[]
// Dramatically reduces the number of points in a polyline while retaining
// its shape and returns a new array of simplified points, using the
// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
// Used for a huge performance boost when processing/displaying Leaflet polylines for
// each zoom level and also reducing visual noise. tolerance affects the amount of
// simplification (lesser value means higher quality but slower and with more points).
// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
function simplify(points, tolerance) {
	if (!tolerance || !points.length) {
		return points.slice();
	}

	var sqTolerance = tolerance * tolerance;

	    // stage 1: vertex reduction
	    points = _reducePoints(points, sqTolerance);

	    // stage 2: Douglas-Peucker simplification
	    points = _simplifyDP(points, sqTolerance);

	return points;
}

// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
// Returns the distance between point `p` and segment `p1` to `p2`.
function pointToSegmentDistance(p, p1, p2) {
	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
}

// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
// Returns the closest point from a point `p` on a segment `p1` to `p2`.
function closestPointOnSegment(p, p1, p2) {
	return _sqClosestPointOnSegment(p, p1, p2);
}

// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
function _simplifyDP(points, sqTolerance) {

	var len = points.length,
	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
	    markers = new ArrayConstructor(len);

	    markers[0] = markers[len - 1] = 1;

	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

	var i,
	    newPoints = [];

	for (i = 0; i < len; i++) {
		if (markers[i]) {
			newPoints.push(points[i]);
		}
	}

	return newPoints;
}

function _simplifyDPStep(points, markers, sqTolerance, first, last) {

	var maxSqDist = 0,
	index, i, sqDist;

	for (i = first + 1; i <= last - 1; i++) {
		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

		if (sqDist > maxSqDist) {
			index = i;
			maxSqDist = sqDist;
		}
	}

	if (maxSqDist > sqTolerance) {
		markers[index] = 1;

		_simplifyDPStep(points, markers, sqTolerance, first, index);
		_simplifyDPStep(points, markers, sqTolerance, index, last);
	}
}

// reduce points that are too close to each other to a single point
function _reducePoints(points, sqTolerance) {
	var reducedPoints = [points[0]];

	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
		if (_sqDist(points[i], points[prev]) > sqTolerance) {
			reducedPoints.push(points[i]);
			prev = i;
		}
	}
	if (prev < len - 1) {
		reducedPoints.push(points[len - 1]);
	}
	return reducedPoints;
}

var _lastCode;

// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
// Clips the segment a to b by rectangular bounds with the
// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
// (modifying the segment points directly!). Used by Leaflet to only show polyline
// points that are on the screen or near, increasing performance.
function clipSegment(a, b, bounds, useLastCode, round) {
	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
	    codeB = _getBitCode(b, bounds),

	    codeOut, p, newCode;

	    // save 2nd code to avoid calculating it on the next segment
	    _lastCode = codeB;

	while (true) {
		// if a,b is inside the clip window (trivial accept)
		if (!(codeA | codeB)) {
			return [a, b];
		}

		// if a,b is outside the clip window (trivial reject)
		if (codeA & codeB) {
			return false;
		}

		// other cases
		codeOut = codeA || codeB;
		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
		newCode = _getBitCode(p, bounds);

		if (codeOut === codeA) {
			a = p;
			codeA = newCode;
		} else {
			b = p;
			codeB = newCode;
		}
	}
}

function _getEdgeIntersection(a, b, code, bounds, round) {
	var dx = b.x - a.x,
	    dy = b.y - a.y,
	    min = bounds.min,
	    max = bounds.max,
	    x, y;

	if (code & 8) { // top
		x = a.x + dx * (max.y - a.y) / dy;
		y = max.y;

	} else if (code & 4) { // bottom
		x = a.x + dx * (min.y - a.y) / dy;
		y = min.y;

	} else if (code & 2) { // right
		x = max.x;
		y = a.y + dy * (max.x - a.x) / dx;

	} else if (code & 1) { // left
		x = min.x;
		y = a.y + dy * (min.x - a.x) / dx;
	}

	return new Point(x, y, round);
}

function _getBitCode(p, bounds) {
	var code = 0;

	if (p.x < bounds.min.x) { // left
		code |= 1;
	} else if (p.x > bounds.max.x) { // right
		code |= 2;
	}

	if (p.y < bounds.min.y) { // bottom
		code |= 4;
	} else if (p.y > bounds.max.y) { // top
		code |= 8;
	}

	return code;
}

// square distance (to avoid unnecessary Math.sqrt calls)
function _sqDist(p1, p2) {
	var dx = p2.x - p1.x,
	    dy = p2.y - p1.y;
	return dx * dx + dy * dy;
}

// return closest point on segment or distance to that point
function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
	var x = p1.x,
	    y = p1.y,
	    dx = p2.x - x,
	    dy = p2.y - y,
	    dot = dx * dx + dy * dy,
	    t;

	if (dot > 0) {
		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

		if (t > 1) {
			x = p2.x;
			y = p2.y;
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}

	dx = p.x - x;
	dy = p.y - y;

	return sqDist ? dx * dx + dy * dy : new Point(x, y);
}


// @function isFlat(latlngs: LatLng[]): Boolean
// Returns true if `latlngs` is a flat array, false is nested.
function isFlat(latlngs) {
	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
}

function _flat(latlngs) {
	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
	return isFlat(latlngs);
}


var LineUtil = (Object.freeze || Object)({
	simplify: simplify,
	pointToSegmentDistance: pointToSegmentDistance,
	closestPointOnSegment: closestPointOnSegment,
	clipSegment: clipSegment,
	_getEdgeIntersection: _getEdgeIntersection,
	_getBitCode: _getBitCode,
	_sqClosestPointOnSegment: _sqClosestPointOnSegment,
	isFlat: isFlat,
	_flat: _flat
});

/*
 * @namespace PolyUtil
 * Various utility functions for polygon geometries.
 */

/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
 * performance. Note that polygon points needs different algorithm for clipping
 * than polyline, so there's a separate method for it.
 */
function clipPolygon(points, bounds, round) {
	var clippedPoints,
	    edges = [1, 4, 2, 8],
	    i, j, k,
	    a, b,
	    len, edge, p;

	for (i = 0, len = points.length; i < len; i++) {
		points[i]._code = _getBitCode(points[i], bounds);
	}

	// for each edge (left, bottom, right, top)
	for (k = 0; k < 4; k++) {
		edge = edges[k];
		clippedPoints = [];

		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
			a = points[i];
			b = points[j];

			// if a is inside the clip window
			if (!(a._code & edge)) {
				// if b is outside the clip window (a->b goes out of screen)
				if (b._code & edge) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
				clippedPoints.push(a);

			// else if b is inside the clip window (a->b enters the screen)
			} else if (!(b._code & edge)) {
				p = _getEdgeIntersection(b, a, edge, bounds, round);
				p._code = _getBitCode(p, bounds);
				clippedPoints.push(p);
			}
		}
		points = clippedPoints;
	}

	return points;
}


var PolyUtil = (Object.freeze || Object)({
	clipPolygon: clipPolygon
});

/*
 * @namespace Projection
 * @section
 * Leaflet comes with a set of already defined Projections out of the box:
 *
 * @projection L.Projection.LonLat
 *
 * Equirectangular, or Plate Carree projection — the most simple projection,
 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
 * `EPSG:4326` and `Simple` CRS.
 */

var LonLat = {
	project: function (latlng) {
		return new Point(latlng.lng, latlng.lat);
	},

	unproject: function (point) {
		return new LatLng(point.y, point.x);
	},

	bounds: new Bounds([-180, -90], [180, 90])
};

/*
 * @namespace Projection
 * @projection L.Projection.Mercator
 *
 * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
 */

var Mercator = {
	R: 6378137,
	R_MINOR: 6356752.314245179,

	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

	project: function (latlng) {
		var d = Math.PI / 180,
		    r = this.R,
		    y = latlng.lat * d,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    con = e * Math.sin(y);

		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
		y = -r * Math.log(Math.max(ts, 1E-10));

		return new Point(latlng.lng * d * r, y);
	},

	unproject: function (point) {
		var d = 180 / Math.PI,
		    r = this.R,
		    tmp = this.R_MINOR / r,
		    e = Math.sqrt(1 - tmp * tmp),
		    ts = Math.exp(-point.y / r),
		    phi = Math.PI / 2 - 2 * Math.atan(ts);

		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
			con = e * Math.sin(phi);
			con = Math.pow((1 - con) / (1 + con), e / 2);
			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
			phi += dphi;
		}

		return new LatLng(phi * d, point.x * d / r);
	}
};

/*
 * @class Projection

 * An object with methods for projecting geographical coordinates of the world onto
 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

 * @property bounds: Bounds
 * The bounds (specified in CRS units) where the projection is valid

 * @method project(latlng: LatLng): Point
 * Projects geographical coordinates into a 2D point.
 * Only accepts actual `L.LatLng` instances, not arrays.

 * @method unproject(point: Point): LatLng
 * The inverse of `project`. Projects a 2D point into a geographical location.
 * Only accepts actual `L.Point` instances, not arrays.

 * Note that the projection instances do not inherit from Leafet's `Class` object,
 * and can't be instantiated. Also, new classes can't inherit from them,
 * and methods can't be added to them with the `include` function.

 */




var index = (Object.freeze || Object)({
	LonLat: LonLat,
	Mercator: Mercator,
	SphericalMercator: SphericalMercator
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG3395
 *
 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
 */
var EPSG3395 = extend({}, Earth, {
	code: 'EPSG:3395',
	projection: Mercator,

	transformation: (function () {
		var scale = 0.5 / (Math.PI * Mercator.R);
		return toTransformation(scale, 0.5, -scale, 0.5);
	}())
});

/*
 * @namespace CRS
 * @crs L.CRS.EPSG4326
 *
 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
 *
 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
 */

var EPSG4326 = extend({}, Earth, {
	code: 'EPSG:4326',
	projection: LonLat,
	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
});

/*
 * @namespace CRS
 * @crs L.CRS.Simple
 *
 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
 * axis should still be inverted (going from bottom to top). `distance()` returns
 * simple euclidean distance.
 */

var Simple = extend({}, CRS, {
	projection: LonLat,
	transformation: toTransformation(1, 0, -1, 0),

	scale: function (zoom) {
		return Math.pow(2, zoom);
	},

	zoom: function (scale) {
		return Math.log(scale) / Math.LN2;
	},

	distance: function (latlng1, latlng2) {
		var dx = latlng2.lng - latlng1.lng,
		    dy = latlng2.lat - latlng1.lat;

		return Math.sqrt(dx * dx + dy * dy);
	},

	infinite: true
});

CRS.Earth = Earth;
CRS.EPSG3395 = EPSG3395;
CRS.EPSG3857 = EPSG3857;
CRS.EPSG900913 = EPSG900913;
CRS.EPSG4326 = EPSG4326;
CRS.Simple = Simple;

/*
 * @class Layer
 * @inherits Evented
 * @aka L.Layer
 * @aka ILayer
 *
 * A set of methods from the Layer base class that all Leaflet layers use.
 * Inherits all methods, options and events from `L.Evented`.
 *
 * @example
 *
 * ```js
 * var layer = L.marker(latlng).addTo(map);
 * layer.addTo(map);
 * layer.remove();
 * ```
 *
 * @event add: Event
 * Fired after the layer is added to a map
 *
 * @event remove: Event
 * Fired after the layer is removed from a map
 */


var Layer = Evented.extend({

	// Classes extending `L.Layer` will inherit the following options:
	options: {
		// @option pane: String = 'overlayPane'
		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
		pane: 'overlayPane',

		// @option attribution: String = null
		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
		attribution: null,

		bubblingMouseEvents: true
	},

	/* @section
	 * Classes extending `L.Layer` will inherit the following methods:
	 *
	 * @method addTo(map: Map|LayerGroup): this
	 * Adds the layer to the given map or layer group.
	 */
	addTo: function (map) {
		map.addLayer(this);
		return this;
	},

	// @method remove: this
	// Removes the layer from the map it is currently active on.
	remove: function () {
		return this.removeFrom(this._map || this._mapToAdd);
	},

	// @method removeFrom(map: Map): this
	// Removes the layer from the given map
	removeFrom: function (obj) {
		if (obj) {
			obj.removeLayer(this);
		}
		return this;
	},

	// @method getPane(name? : String): HTMLElement
	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
	getPane: function (name) {
		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
	},

	addInteractiveTarget: function (targetEl) {
		this._map._targets[stamp(targetEl)] = this;
		return this;
	},

	removeInteractiveTarget: function (targetEl) {
		delete this._map._targets[stamp(targetEl)];
		return this;
	},

	// @method getAttribution: String
	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
	getAttribution: function () {
		return this.options.attribution;
	},

	_layerAdd: function (e) {
		var map = e.target;

		// check in case layer gets added and then removed before the map is ready
		if (!map.hasLayer(this)) { return; }

		this._map = map;
		this._zoomAnimated = map._zoomAnimated;

		if (this.getEvents) {
			var events = this.getEvents();
			map.on(events, this);
			this.once('remove', function () {
				map.off(events, this);
			}, this);
		}

		this.onAdd(map);

		if (this.getAttribution && map.attributionControl) {
			map.attributionControl.addAttribution(this.getAttribution());
		}

		this.fire('add');
		map.fire('layeradd', {layer: this});
	}
});

/* @section Extension methods
 * @uninheritable
 *
 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
 *
 * @method onAdd(map: Map): this
 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
 *
 * @method onRemove(map: Map): this
 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
 *
 * @method getEvents(): Object
 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
 *
 * @method getAttribution(): String
 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
 *
 * @method beforeAdd(map: Map): this
 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
 */


/* @namespace Map
 * @section Layer events
 *
 * @event layeradd: LayerEvent
 * Fired when a new layer is added to the map.
 *
 * @event layerremove: LayerEvent
 * Fired when some layer is removed from the map
 *
 * @section Methods for Layers and Controls
 */
Map.include({
	// @method addLayer(layer: Layer): this
	// Adds the given layer to the map
	addLayer: function (layer) {
		if (!layer._layerAdd) {
			throw new Error('The provided object is not a Layer.');
		}

		var id = stamp(layer);
		if (this._layers[id]) { return this; }
		this._layers[id] = layer;

		layer._mapToAdd = this;

		if (layer.beforeAdd) {
			layer.beforeAdd(this);
		}

		this.whenReady(layer._layerAdd, layer);

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the map.
	removeLayer: function (layer) {
		var id = stamp(layer);

		if (!this._layers[id]) { return this; }

		if (this._loaded) {
			layer.onRemove(this);
		}

		if (layer.getAttribution && this.attributionControl) {
			this.attributionControl.removeAttribution(layer.getAttribution());
		}

		delete this._layers[id];

		if (this._loaded) {
			this.fire('layerremove', {layer: layer});
			layer.fire('remove');
		}

		layer._map = layer._mapToAdd = null;

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the map
	hasLayer: function (layer) {
		return !!layer && (stamp(layer) in this._layers);
	},

	/* @method eachLayer(fn: Function, context?: Object): this
	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
	 * ```
	 * map.eachLayer(function(layer){
	 *     layer.bindPopup('Hello');
	 * });
	 * ```
	 */
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	_addLayers: function (layers) {
		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

		for (var i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);
		}
	},

	_addZoomLimit: function (layer) {
		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
			this._zoomBoundLayers[stamp(layer)] = layer;
			this._updateZoomLevels();
		}
	},

	_removeZoomLimit: function (layer) {
		var id = stamp(layer);

		if (this._zoomBoundLayers[id]) {
			delete this._zoomBoundLayers[id];
			this._updateZoomLevels();
		}
	},

	_updateZoomLevels: function () {
		var minZoom = Infinity,
		    maxZoom = -Infinity,
		    oldZoomSpan = this._getZoomSpan();

		for (var i in this._zoomBoundLayers) {
			var options = this._zoomBoundLayers[i].options;

			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
		}

		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

		// @section Map state change events
		// @event zoomlevelschange: Event
		// Fired when the number of zoomlevels on the map is changed due
		// to adding or removing a layer.
		if (oldZoomSpan !== this._getZoomSpan()) {
			this.fire('zoomlevelschange');
		}

		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
			this.setZoom(this._layersMaxZoom);
		}
		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
			this.setZoom(this._layersMinZoom);
		}
	}
});

/*
 * @class LayerGroup
 * @aka L.LayerGroup
 * @inherits Layer
 *
 * Used to group several layers and handle them as one. If you add it to the map,
 * any layers added or removed from the group will be added/removed on the map as
 * well. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.layerGroup([marker1, marker2])
 * 	.addLayer(polyline)
 * 	.addTo(map);
 * ```
 */

var LayerGroup = Layer.extend({

	initialize: function (layers, options) {
		setOptions(this, options);

		this._layers = {};

		var i, len;

		if (layers) {
			for (i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		}
	},

	// @method addLayer(layer: Layer): this
	// Adds the given layer to the group.
	addLayer: function (layer) {
		var id = this.getLayerId(layer);

		this._layers[id] = layer;

		if (this._map) {
			this._map.addLayer(layer);
		}

		return this;
	},

	// @method removeLayer(layer: Layer): this
	// Removes the given layer from the group.
	// @alternative
	// @method removeLayer(id: Number): this
	// Removes the layer with the given internal ID from the group.
	removeLayer: function (layer) {
		var id = layer in this._layers ? layer : this.getLayerId(layer);

		if (this._map && this._layers[id]) {
			this._map.removeLayer(this._layers[id]);
		}

		delete this._layers[id];

		return this;
	},

	// @method hasLayer(layer: Layer): Boolean
	// Returns `true` if the given layer is currently added to the group.
	// @alternative
	// @method hasLayer(id: Number): Boolean
	// Returns `true` if the given internal ID is currently added to the group.
	hasLayer: function (layer) {
		return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
	},

	// @method clearLayers(): this
	// Removes all the layers from the group.
	clearLayers: function () {
		return this.eachLayer(this.removeLayer, this);
	},

	// @method invoke(methodName: String, …): this
	// Calls `methodName` on every layer contained in this group, passing any
	// additional parameters. Has no effect if the layers contained do not
	// implement `methodName`.
	invoke: function (methodName) {
		var args = Array.prototype.slice.call(arguments, 1),
		    i, layer;

		for (i in this._layers) {
			layer = this._layers[i];

			if (layer[methodName]) {
				layer[methodName].apply(layer, args);
			}
		}

		return this;
	},

	onAdd: function (map) {
		this.eachLayer(map.addLayer, map);
	},

	onRemove: function (map) {
		this.eachLayer(map.removeLayer, map);
	},

	// @method eachLayer(fn: Function, context?: Object): this
	// Iterates over the layers of the group, optionally specifying context of the iterator function.
	// ```js
	// group.eachLayer(function (layer) {
	// 	layer.bindPopup('Hello');
	// });
	// ```
	eachLayer: function (method, context) {
		for (var i in this._layers) {
			method.call(context, this._layers[i]);
		}
		return this;
	},

	// @method getLayer(id: Number): Layer
	// Returns the layer with the given internal ID.
	getLayer: function (id) {
		return this._layers[id];
	},

	// @method getLayers(): Layer[]
	// Returns an array of all the layers added to the group.
	getLayers: function () {
		var layers = [];
		this.eachLayer(layers.push, layers);
		return layers;
	},

	// @method setZIndex(zIndex: Number): this
	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
	setZIndex: function (zIndex) {
		return this.invoke('setZIndex', zIndex);
	},

	// @method getLayerId(layer: Layer): Number
	// Returns the internal ID for a layer
	getLayerId: function (layer) {
		return stamp(layer);
	}
});


// @factory L.layerGroup(layers?: Layer[], options?: Object)
// Create a layer group, optionally given an initial set of layers and an `options` object.
var layerGroup = function (layers, options) {
	return new LayerGroup(layers, options);
};

/*
 * @class FeatureGroup
 * @aka L.FeatureGroup
 * @inherits LayerGroup
 *
 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
 * handler, it will handle events from any of the layers. This includes mouse events
 * and custom events.
 *  * Has `layeradd` and `layerremove` events
 *
 * @example
 *
 * ```js
 * L.featureGroup([marker1, marker2, polyline])
 * 	.bindPopup('Hello world!')
 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
 * 	.addTo(map);
 * ```
 */

var FeatureGroup = LayerGroup.extend({

	addLayer: function (layer) {
		if (this.hasLayer(layer)) {
			return this;
		}

		layer.addEventParent(this);

		LayerGroup.prototype.addLayer.call(this, layer);

		// @event layeradd: LayerEvent
		// Fired when a layer is added to this `FeatureGroup`
		return this.fire('layeradd', {layer: layer});
	},

	removeLayer: function (layer) {
		if (!this.hasLayer(layer)) {
			return this;
		}
		if (layer in this._layers) {
			layer = this._layers[layer];
		}

		layer.removeEventParent(this);

		LayerGroup.prototype.removeLayer.call(this, layer);

		// @event layerremove: LayerEvent
		// Fired when a layer is removed from this `FeatureGroup`
		return this.fire('layerremove', {layer: layer});
	},

	// @method setStyle(style: Path options): this
	// Sets the given path options to each layer of the group that has a `setStyle` method.
	setStyle: function (style) {
		return this.invoke('setStyle', style);
	},

	// @method bringToFront(): this
	// Brings the layer group to the top of all other layers
	bringToFront: function () {
		return this.invoke('bringToFront');
	},

	// @method bringToBack(): this
	// Brings the layer group to the back of all other layers
	bringToBack: function () {
		return this.invoke('bringToBack');
	},

	// @method getBounds(): LatLngBounds
	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
	getBounds: function () {
		var bounds = new LatLngBounds();

		for (var id in this._layers) {
			var layer = this._layers[id];
			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
		}
		return bounds;
	}
});

// @factory L.featureGroup(layers: Layer[])
// Create a feature group, optionally given an initial set of layers.
var featureGroup = function (layers) {
	return new FeatureGroup(layers);
};

/*
 * @class Icon
 * @aka L.Icon
 *
 * Represents an icon to provide when creating a marker.
 *
 * @example
 *
 * ```js
 * var myIcon = L.icon({
 *     iconUrl: 'my-icon.png',
 *     iconRetinaUrl: 'my-icon@2x.png',
 *     iconSize: [38, 95],
 *     iconAnchor: [22, 94],
 *     popupAnchor: [-3, -76],
 *     shadowUrl: 'my-icon-shadow.png',
 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
 *     shadowSize: [68, 95],
 *     shadowAnchor: [22, 94]
 * });
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
 *
 */

var Icon = Class.extend({

	/* @section
	 * @aka Icon options
	 *
	 * @option iconUrl: String = null
	 * **(required)** The URL to the icon image (absolute or relative to your script path).
	 *
	 * @option iconRetinaUrl: String = null
	 * The URL to a retina sized version of the icon image (absolute or relative to your
	 * script path). Used for Retina screen devices.
	 *
	 * @option iconSize: Point = null
	 * Size of the icon image in pixels.
	 *
	 * @option iconAnchor: Point = null
	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
	 * will be aligned so that this point is at the marker's geographical location. Centered
	 * by default if size is specified, also can be set in CSS with negative margins.
	 *
	 * @option popupAnchor: Point = [0, 0]
	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
	 *
	 * @option tooltipAnchor: Point = [0, 0]
	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
	 *
	 * @option shadowUrl: String = null
	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
	 *
	 * @option shadowRetinaUrl: String = null
	 *
	 * @option shadowSize: Point = null
	 * Size of the shadow image in pixels.
	 *
	 * @option shadowAnchor: Point = null
	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
	 * as iconAnchor if not specified).
	 *
	 * @option className: String = ''
	 * A custom class name to assign to both icon and shadow images. Empty by default.
	 */

	options: {
		popupAnchor: [0, 0],
		tooltipAnchor: [0, 0]
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
	// Called internally when the icon has to be shown, returns a `<img>` HTML element
	// styled according to the options.
	createIcon: function (oldIcon) {
		return this._createIcon('icon', oldIcon);
	},

	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
	// As `createIcon`, but for the shadow beneath it.
	createShadow: function (oldIcon) {
		return this._createIcon('shadow', oldIcon);
	},

	_createIcon: function (name, oldIcon) {
		var src = this._getIconUrl(name);

		if (!src) {
			if (name === 'icon') {
				throw new Error('iconUrl not set in Icon options (see the docs).');
			}
			return null;
		}

		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
		this._setIconStyles(img, name);

		return img;
	},

	_setIconStyles: function (img, name) {
		var options = this.options;
		var sizeOption = options[name + 'Size'];

		if (typeof sizeOption === 'number') {
			sizeOption = [sizeOption, sizeOption];
		}

		var size = toPoint(sizeOption),
		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
		            size && size.divideBy(2, true));

		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

		if (anchor) {
			img.style.marginLeft = (-anchor.x) + 'px';
			img.style.marginTop  = (-anchor.y) + 'px';
		}

		if (size) {
			img.style.width  = size.x + 'px';
			img.style.height = size.y + 'px';
		}
	},

	_createImg: function (src, el) {
		el = el || document.createElement('img');
		el.src = src;
		return el;
	},

	_getIconUrl: function (name) {
		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
	}
});


// @factory L.icon(options: Icon options)
// Creates an icon instance with the given options.
function icon(options) {
	return new Icon(options);
}

/*
 * @miniclass Icon.Default (Icon)
 * @aka L.Icon.Default
 * @section
 *
 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
 * no icon is specified. Points to the blue marker image distributed with Leaflet
 * releases.
 *
 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
 * (which is a set of `Icon options`).
 *
 * If you want to _completely_ replace the default icon, override the
 * `L.Marker.prototype.options.icon` with your own icon instead.
 */

var IconDefault = Icon.extend({

	options: {
		iconUrl:       'marker-icon.png',
		iconRetinaUrl: 'marker-icon-2x.png',
		shadowUrl:     'marker-shadow.png',
		iconSize:    [25, 41],
		iconAnchor:  [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize:  [41, 41]
	},

	_getIconUrl: function (name) {
		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
			IconDefault.imagePath = this._detectIconPath();
		}

		// @option imagePath: String
		// `Icon.Default` will try to auto-detect the location of the
		// blue icon images. If you are placing these images in a non-standard
		// way, set this option to point to the right path.
		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
	},

	_detectIconPath: function () {
		var el = create$1('div',  'leaflet-default-icon-path', document.body);
		var path = getStyle(el, 'background-image') ||
		           getStyle(el, 'backgroundImage');	// IE8

		document.body.removeChild(el);

		if (path === null || path.indexOf('url') !== 0) {
			path = '';
		} else {
			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
		}

		return path;
	}
});

/*
 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
 */


/* @namespace Marker
 * @section Interaction handlers
 *
 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
 *
 * ```js
 * marker.dragging.disable();
 * ```
 *
 * @property dragging: Handler
 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
 */

var MarkerDrag = Handler.extend({
	initialize: function (marker) {
		this._marker = marker;
	},

	addHooks: function () {
		var icon = this._marker._icon;

		if (!this._draggable) {
			this._draggable = new Draggable(icon, icon, true);
		}

		this._draggable.on({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).enable();

		addClass(icon, 'leaflet-marker-draggable');
	},

	removeHooks: function () {
		this._draggable.off({
			dragstart: this._onDragStart,
			predrag: this._onPreDrag,
			drag: this._onDrag,
			dragend: this._onDragEnd
		}, this).disable();

		if (this._marker._icon) {
			removeClass(this._marker._icon, 'leaflet-marker-draggable');
		}
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	_adjustPan: function (e) {
		var marker = this._marker,
		    map = marker._map,
		    speed = this._marker.options.autoPanSpeed,
		    padding = this._marker.options.autoPanPadding,
		    iconPos = getPosition(marker._icon),
		    bounds = map.getPixelBounds(),
		    origin = map.getPixelOrigin();

		var panBounds = toBounds(
			bounds.min._subtract(origin).add(padding),
			bounds.max._subtract(origin).subtract(padding)
		);

		if (!panBounds.contains(iconPos)) {
			// Compute incremental movement
			var movement = toPoint(
				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
			).multiplyBy(speed);

			map.panBy(movement, {animate: false});

			this._draggable._newPos._add(movement);
			this._draggable._startPos._add(movement);

			setPosition(marker._icon, this._draggable._newPos);
			this._onDrag(e);

			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDragStart: function () {
		// @section Dragging events
		// @event dragstart: Event
		// Fired when the user starts dragging the marker.

		// @event movestart: Event
		// Fired when the marker starts moving (because of dragging).

		this._oldLatLng = this._marker.getLatLng();
		this._marker
		    .closePopup()
		    .fire('movestart')
		    .fire('dragstart');
	},

	_onPreDrag: function (e) {
		if (this._marker.options.autoPan) {
			cancelAnimFrame(this._panRequest);
			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
		}
	},

	_onDrag: function (e) {
		var marker = this._marker,
		    shadow = marker._shadow,
		    iconPos = getPosition(marker._icon),
		    latlng = marker._map.layerPointToLatLng(iconPos);

		// update shadow position
		if (shadow) {
			setPosition(shadow, iconPos);
		}

		marker._latlng = latlng;
		e.latlng = latlng;
		e.oldLatLng = this._oldLatLng;

		// @event drag: Event
		// Fired repeatedly while the user drags the marker.
		marker
		    .fire('move', e)
		    .fire('drag', e);
	},

	_onDragEnd: function (e) {
		// @event dragend: DragEndEvent
		// Fired when the user stops dragging the marker.

		 cancelAnimFrame(this._panRequest);

		// @event moveend: Event
		// Fired when the marker stops moving (because of dragging).
		delete this._oldLatLng;
		this._marker
		    .fire('moveend')
		    .fire('dragend', e);
	}
});

/*
 * @class Marker
 * @inherits Interactive layer
 * @aka L.Marker
 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * L.marker([50.5, 30.5]).addTo(map);
 * ```
 */

var Marker = Layer.extend({

	// @section
	// @aka Marker options
	options: {
		// @option icon: Icon = *
		// Icon instance to use for rendering the marker.
		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
		// If not specified, a common instance of `L.Icon.Default` is used.
		icon: new IconDefault(),

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option keyboard: Boolean = true
		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
		keyboard: true,

		// @option title: String = ''
		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
		title: '',

		// @option alt: String = ''
		// Text for the `alt` attribute of the icon image (useful for accessibility).
		alt: '',

		// @option zIndexOffset: Number = 0
		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
		zIndexOffset: 0,

		// @option opacity: Number = 1.0
		// The opacity of the marker.
		opacity: 1,

		// @option riseOnHover: Boolean = false
		// If `true`, the marker will get on top of others when you hover the mouse over it.
		riseOnHover: false,

		// @option riseOffset: Number = 250
		// The z-index offset used for the `riseOnHover` feature.
		riseOffset: 250,

		// @option pane: String = 'markerPane'
		// `Map pane` where the markers icon will be added.
		pane: 'markerPane',

		// @option pane: String = 'shadowPane'
		// `Map pane` where the markers shadow will be added.
		shadowPane: 'shadowPane',

		// @option bubblingMouseEvents: Boolean = false
		// When `true`, a mouse event on this marker will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: false,

		// @section Draggable marker options
		// @option draggable: Boolean = false
		// Whether the marker is draggable with mouse/touch or not.
		draggable: false,

		// @option autoPan: Boolean = false
		// Whether to pan the map when dragging this marker near its edge or not.
		autoPan: false,

		// @option autoPanPadding: Point = Point(50, 50)
		// Distance (in pixels to the left/right and to the top/bottom) of the
		// map edge to start panning the map.
		autoPanPadding: [50, 50],

		// @option autoPanSpeed: Number = 10
		// Number of pixels the map should pan by.
		autoPanSpeed: 10
	},

	/* @section
	 *
	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
	 */

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
	},

	onAdd: function (map) {
		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

		if (this._zoomAnimated) {
			map.on('zoomanim', this._animateZoom, this);
		}

		this._initIcon();
		this.update();
	},

	onRemove: function (map) {
		if (this.dragging && this.dragging.enabled()) {
			this.options.draggable = true;
			this.dragging.removeHooks();
		}
		delete this.dragging;

		if (this._zoomAnimated) {
			map.off('zoomanim', this._animateZoom, this);
		}

		this._removeIcon();
		this._removeShadow();
	},

	getEvents: function () {
		return {
			zoom: this.update,
			viewreset: this.update
		};
	},

	// @method getLatLng: LatLng
	// Returns the current geographical position of the marker.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Changes the marker position to the given point.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.update();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method setZIndexOffset(offset: Number): this
	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
	setZIndexOffset: function (offset) {
		this.options.zIndexOffset = offset;
		return this.update();
	},

	// @method getIcon: Icon
	// Returns the current icon used by the marker
	getIcon: function () {
		return this.options.icon;
	},

	// @method setIcon(icon: Icon): this
	// Changes the marker icon.
	setIcon: function (icon) {

		this.options.icon = icon;

		if (this._map) {
			this._initIcon();
			this.update();
		}

		if (this._popup) {
			this.bindPopup(this._popup, this._popup.options);
		}

		return this;
	},

	getElement: function () {
		return this._icon;
	},

	update: function () {

		if (this._icon && this._map) {
			var pos = this._map.latLngToLayerPoint(this._latlng).round();
			this._setPos(pos);
		}

		return this;
	},

	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		var icon = options.icon.createIcon(this._icon),
		    addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (icon.tagName === 'IMG') {
				icon.alt = options.alt || '';
			}
		}

		addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		if (options.riseOnHover) {
			this.on({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		var newShadow = options.icon.createShadow(this._shadow),
		    addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			addClass(newShadow, classToAdd);
			newShadow.alt = '';
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		if (addIcon) {
			this.getPane().appendChild(this._icon);
		}
		this._initInteraction();
		if (newShadow && addShadow) {
			this.getPane(options.shadowPane).appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			this.off({
				mouseover: this._bringToFront,
				mouseout: this._resetZIndex
			});
		}

		remove(this._icon);
		this.removeInteractiveTarget(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			remove(this._shadow);
		}
		this._shadow = null;
	},

	_setPos: function (pos) {

		if (this._icon) {
			setPosition(this._icon, pos);
		}

		if (this._shadow) {
			setPosition(this._shadow, pos);
		}

		this._zIndex = pos.y + this.options.zIndexOffset;

		this._resetZIndex();
	},

	_updateZIndex: function (offset) {
		if (this._icon) {
			this._icon.style.zIndex = this._zIndex + offset;
		}
	},

	_animateZoom: function (opt) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

		this._setPos(pos);
	},

	_initInteraction: function () {

		if (!this.options.interactive) { return; }

		addClass(this._icon, 'leaflet-interactive');

		this.addInteractiveTarget(this._icon);

		if (MarkerDrag) {
			var draggable = this.options.draggable;
			if (this.dragging) {
				draggable = this.dragging.enabled();
				this.dragging.disable();
			}

			this.dragging = new MarkerDrag(this);

			if (draggable) {
				this.dragging.enable();
			}
		}
	},

	// @method setOpacity(opacity: Number): this
	// Changes the opacity of the marker.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		if (this._map) {
			this._updateOpacity();
		}

		return this;
	},

	_updateOpacity: function () {
		var opacity = this.options.opacity;

		if (this._icon) {
			setOpacity(this._icon, opacity);
		}

		if (this._shadow) {
			setOpacity(this._shadow, opacity);
		}
	},

	_bringToFront: function () {
		this._updateZIndex(this.options.riseOffset);
	},

	_resetZIndex: function () {
		this._updateZIndex(0);
	},

	_getPopupAnchor: function () {
		return this.options.icon.options.popupAnchor;
	},

	_getTooltipAnchor: function () {
		return this.options.icon.options.tooltipAnchor;
	}
});


// factory L.marker(latlng: LatLng, options? : Marker options)

// @factory L.marker(latlng: LatLng, options? : Marker options)
// Instantiates a Marker object given a geographical point and optionally an options object.
function marker(latlng, options) {
	return new Marker(latlng, options);
}

/*
 * @class Path
 * @aka L.Path
 * @inherits Interactive layer
 *
 * An abstract class that contains options and constants shared between vector
 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
 */

var Path = Layer.extend({

	// @section
	// @aka Path options
	options: {
		// @option stroke: Boolean = true
		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
		stroke: true,

		// @option color: String = '#3388ff'
		// Stroke color
		color: '#3388ff',

		// @option weight: Number = 3
		// Stroke width in pixels
		weight: 3,

		// @option opacity: Number = 1.0
		// Stroke opacity
		opacity: 1,

		// @option lineCap: String= 'round'
		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
		lineCap: 'round',

		// @option lineJoin: String = 'round'
		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
		lineJoin: 'round',

		// @option dashArray: String = null
		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashArray: null,

		// @option dashOffset: String = null
		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
		dashOffset: null,

		// @option fill: Boolean = depends
		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
		fill: false,

		// @option fillColor: String = *
		// Fill color. Defaults to the value of the [`color`](#path-color) option
		fillColor: null,

		// @option fillOpacity: Number = 0.2
		// Fill opacity.
		fillOpacity: 0.2,

		// @option fillRule: String = 'evenodd'
		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
		fillRule: 'evenodd',

		// className: '',

		// Option inherited from "Interactive layer" abstract class
		interactive: true,

		// @option bubblingMouseEvents: Boolean = true
		// When `true`, a mouse event on this path will trigger the same event on the map
		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
		bubblingMouseEvents: true
	},

	beforeAdd: function (map) {
		// Renderer is set here because we need to call renderer.getEvents
		// before this.getEvents.
		this._renderer = map.getRenderer(this);
	},

	onAdd: function () {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);
	},

	onRemove: function () {
		this._renderer._removePath(this);
	},

	// @method redraw(): this
	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
	redraw: function () {
		if (this._map) {
			this._renderer._updatePath(this);
		}
		return this;
	},

	// @method setStyle(style: Path options): this
	// Changes the appearance of a Path based on the options in the `Path options` object.
	setStyle: function (style) {
		setOptions(this, style);
		if (this._renderer) {
			this._renderer._updateStyle(this);
			if (this.options.stroke && style && style.hasOwnProperty('weight')) {
				this._updateBounds();
			}
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all path layers.
	bringToFront: function () {
		if (this._renderer) {
			this._renderer._bringToFront(this);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all path layers.
	bringToBack: function () {
		if (this._renderer) {
			this._renderer._bringToBack(this);
		}
		return this;
	},

	getElement: function () {
		return this._path;
	},

	_reset: function () {
		// defined in child classes
		this._project();
		this._update();
	},

	_clickTolerance: function () {
		// used when doing hit detection for Canvas layers
		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
	}
});

/*
 * @class CircleMarker
 * @aka L.CircleMarker
 * @inherits Path
 *
 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
 */

var CircleMarker = Path.extend({

	// @section
	// @aka CircleMarker options
	options: {
		fill: true,

		// @option radius: Number = 10
		// Radius of the circle marker, in pixels
		radius: 10
	},

	initialize: function (latlng, options) {
		setOptions(this, options);
		this._latlng = toLatLng(latlng);
		this._radius = this.options.radius;
	},

	// @method setLatLng(latLng: LatLng): this
	// Sets the position of a circle marker to a new location.
	setLatLng: function (latlng) {
		var oldLatLng = this._latlng;
		this._latlng = toLatLng(latlng);
		this.redraw();

		// @event move: Event
		// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
	},

	// @method getLatLng(): LatLng
	// Returns the current geographical position of the circle marker
	getLatLng: function () {
		return this._latlng;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle marker. Units are in pixels.
	setRadius: function (radius) {
		this.options.radius = this._radius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of the circle
	getRadius: function () {
		return this._radius;
	},

	setStyle : function (options) {
		var radius = options && options.radius || this._radius;
		Path.prototype.setStyle.call(this, options);
		this.setRadius(radius);
		return this;
	},

	_project: function () {
		this._point = this._map.latLngToLayerPoint(this._latlng);
		this._updateBounds();
	},

	_updateBounds: function () {
		var r = this._radius,
		    r2 = this._radiusY || r,
		    w = this._clickTolerance(),
		    p = [r + w, r2 + w];
		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
	},

	_update: function () {
		if (this._map) {
			this._updatePath();
		}
	},

	_updatePath: function () {
		this._renderer._updateCircle(this);
	},

	_empty: function () {
		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
	}
});


// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
// Instantiates a circle marker object given a geographical point, and an optional options object.
function circleMarker(latlng, options) {
	return new CircleMarker(latlng, options);
}

/*
 * @class Circle
 * @aka L.Circle
 * @inherits CircleMarker
 *
 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
 *
 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
 *
 * @example
 *
 * ```js
 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
 * ```
 */

var Circle = CircleMarker.extend({

	initialize: function (latlng, options, legacyOptions) {
		if (typeof options === 'number') {
			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
			options = extend({}, legacyOptions, {radius: options});
		}
		setOptions(this, options);
		this._latlng = toLatLng(latlng);

		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

		// @section
		// @aka Circle options
		// @option radius: Number; Radius of the circle, in meters.
		this._mRadius = this.options.radius;
	},

	// @method setRadius(radius: Number): this
	// Sets the radius of a circle. Units are in meters.
	setRadius: function (radius) {
		this._mRadius = radius;
		return this.redraw();
	},

	// @method getRadius(): Number
	// Returns the current radius of a circle. Units are in meters.
	getRadius: function () {
		return this._mRadius;
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		var half = [this._radius, this._radiusY || this._radius];

		return new LatLngBounds(
			this._map.layerPointToLatLng(this._point.subtract(half)),
			this._map.layerPointToLatLng(this._point.add(half)));
	},

	setStyle: Path.prototype.setStyle,

	_project: function () {

		var lng = this._latlng.lng,
		    lat = this._latlng.lat,
		    map = this._map,
		    crs = map.options.crs;

		if (crs.distance === Earth.distance) {
			var d = Math.PI / 180,
			    latR = (this._mRadius / Earth.R) / d,
			    top = map.project([lat + latR, lng]),
			    bottom = map.project([lat - latR, lng]),
			    p = top.add(bottom).divideBy(2),
			    lat2 = map.unproject(p).lat,
			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

			if (isNaN(lngR) || lngR === 0) {
				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
			}

			this._point = p.subtract(map.getPixelOrigin());
			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
			this._radiusY = p.y - top.y;

		} else {
			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

			this._point = map.latLngToLayerPoint(this._latlng);
			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
		}

		this._updateBounds();
	}
});

// @factory L.circle(latlng: LatLng, options?: Circle options)
// Instantiates a circle object given a geographical point, and an options object
// which contains the circle radius.
// @alternative
// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
// Do not use in new applications or plugins.
function circle(latlng, options, legacyOptions) {
	return new Circle(latlng, options, legacyOptions);
}

/*
 * @class Polyline
 * @aka L.Polyline
 * @inherits Path
 *
 * A class for drawing polyline overlays on a map. Extends `Path`.
 *
 * @example
 *
 * ```js
 * // create a red polyline from an array of LatLng points
 * var latlngs = [
 * 	[45.51, -122.68],
 * 	[37.77, -122.43],
 * 	[34.04, -118.2]
 * ];
 *
 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polyline
 * map.fitBounds(polyline.getBounds());
 * ```
 *
 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
 *
 * ```js
 * // create a red polyline from an array of arrays of LatLng points
 * var latlngs = [
 * 	[[45.51, -122.68],
 * 	 [37.77, -122.43],
 * 	 [34.04, -118.2]],
 * 	[[40.78, -73.91],
 * 	 [41.83, -87.62],
 * 	 [32.76, -96.72]]
 * ];
 * ```
 */


var Polyline = Path.extend({

	// @section
	// @aka Polyline options
	options: {
		// @option smoothFactor: Number = 1.0
		// How much to simplify the polyline on each zoom level. More means
		// better performance and smoother look, and less means more accurate representation.
		smoothFactor: 1.0,

		// @option noClip: Boolean = false
		// Disable polyline clipping.
		noClip: false
	},

	initialize: function (latlngs, options) {
		setOptions(this, options);
		this._setLatLngs(latlngs);
	},

	// @method getLatLngs(): LatLng[]
	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
	getLatLngs: function () {
		return this._latlngs;
	},

	// @method setLatLngs(latlngs: LatLng[]): this
	// Replaces all the points in the polyline with the given array of geographical points.
	setLatLngs: function (latlngs) {
		this._setLatLngs(latlngs);
		return this.redraw();
	},

	// @method isEmpty(): Boolean
	// Returns `true` if the Polyline has no LatLngs.
	isEmpty: function () {
		return !this._latlngs.length;
	},

	// @method closestLayerPoint(p: Point): Point
	// Returns the point closest to `p` on the Polyline.
	closestLayerPoint: function (p) {
		var minDistance = Infinity,
		    minPoint = null,
		    closest = _sqClosestPointOnSegment,
		    p1, p2;

		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
			var points = this._parts[j];

			for (var i = 1, len = points.length; i < len; i++) {
				p1 = points[i - 1];
				p2 = points[i];

				var sqDist = closest(p, p1, p2, true);

				if (sqDist < minDistance) {
					minDistance = sqDist;
					minPoint = closest(p, p1, p2);
				}
			}
		}
		if (minPoint) {
			minPoint.distance = Math.sqrt(minDistance);
		}
		return minPoint;
	},

	// @method getCenter(): LatLng
	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, halfDist, segDist, dist, p1, p2, ratio,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polyline centroid algorithm; only uses the first ring if there are multiple

		for (i = 0, halfDist = 0; i < len - 1; i++) {
			halfDist += points[i].distanceTo(points[i + 1]) / 2;
		}

		// The line is so small in the current view that all points are on the same pixel.
		if (halfDist === 0) {
			return this._map.layerPointToLatLng(points[0]);
		}

		for (i = 0, dist = 0; i < len - 1; i++) {
			p1 = points[i];
			p2 = points[i + 1];
			segDist = p1.distanceTo(p2);
			dist += segDist;

			if (dist > halfDist) {
				ratio = (dist - halfDist) / segDist;
				return this._map.layerPointToLatLng([
					p2.x - ratio * (p2.x - p1.x),
					p2.y - ratio * (p2.y - p1.y)
				]);
			}
		}
	},

	// @method getBounds(): LatLngBounds
	// Returns the `LatLngBounds` of the path.
	getBounds: function () {
		return this._bounds;
	},

	// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
	// Adds a given point to the polyline. By default, adds to the first ring of
	// the polyline in case of a multi-polyline, but can be overridden by passing
	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
	addLatLng: function (latlng, latlngs) {
		latlngs = latlngs || this._defaultShape();
		latlng = toLatLng(latlng);
		latlngs.push(latlng);
		this._bounds.extend(latlng);
		return this.redraw();
	},

	_setLatLngs: function (latlngs) {
		this._bounds = new LatLngBounds();
		this._latlngs = this._convertLatLngs(latlngs);
	},

	_defaultShape: function () {
		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
	},

	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
	_convertLatLngs: function (latlngs) {
		var result = [],
		    flat = isFlat(latlngs);

		for (var i = 0, len = latlngs.length; i < len; i++) {
			if (flat) {
				result[i] = toLatLng(latlngs[i]);
				this._bounds.extend(result[i]);
			} else {
				result[i] = this._convertLatLngs(latlngs[i]);
			}
		}

		return result;
	},

	_project: function () {
		var pxBounds = new Bounds();
		this._rings = [];
		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

		if (this._bounds.isValid() && pxBounds.isValid()) {
			this._rawPxBounds = pxBounds;
			this._updateBounds();
		}
	},

	_updateBounds: function () {
		var w = this._clickTolerance(),
		    p = new Point(w, w);
		this._pxBounds = new Bounds([
			this._rawPxBounds.min.subtract(p),
			this._rawPxBounds.max.add(p)
		]);
	},

	// recursively turns latlngs into a set of rings with projected coordinates
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var flat = latlngs[0] instanceof LatLng,
		    len = latlngs.length,
		    i, ring;

		if (flat) {
			ring = [];
			for (i = 0; i < len; i++) {
				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
				projectedBounds.extend(ring[i]);
			}
			result.push(ring);
		} else {
			for (i = 0; i < len; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// clip polyline by renderer bounds so that we have less to render for performance
	_clipPoints: function () {
		var bounds = this._renderer._bounds;

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		var parts = this._parts,
		    i, j, k, len, len2, segment, points;

		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
			points = this._rings[i];

			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

				if (!segment) { continue; }

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		}
	},

	// simplify each clipped part of the polyline for performance
	_simplifyPoints: function () {
		var parts = this._parts,
		    tolerance = this.options.smoothFactor;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = simplify(parts[i], tolerance);
		}
	},

	_update: function () {
		if (!this._map) { return; }

		this._clipPoints();
		this._simplifyPoints();
		this._updatePath();
	},

	_updatePath: function () {
		this._renderer._updatePoly(this);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, part,
		    w = this._clickTolerance();

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// hit detection for polylines
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) { continue; }

				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
					return true;
				}
			}
		}
		return false;
	}
});

// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline object given an array of geographical points and
// optionally an options object. You can create a `Polyline` object with
// multiple separate lines (`MultiPolyline`) by passing an array of arrays
// of geographic points.
function polyline(latlngs, options) {
	return new Polyline(latlngs, options);
}

// Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
Polyline._flat = _flat;

/*
 * @class Polygon
 * @aka L.Polygon
 * @inherits Polyline
 *
 * A class for drawing polygon overlays on a map. Extends `Polyline`.
 *
 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
 *
 *
 * @example
 *
 * ```js
 * // create a red polygon from an array of LatLng points
 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
 *
 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
 *
 * // zoom the map to the polygon
 * map.fitBounds(polygon.getBounds());
 * ```
 *
 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
 *
 * ```js
 * var latlngs = [
 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 * ];
 * ```
 *
 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
 *
 * ```js
 * var latlngs = [
 *   [ // first polygon
 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
 *   ],
 *   [ // second polygon
 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
 *   ]
 * ];
 * ```
 */

var Polygon = Polyline.extend({

	options: {
		fill: true
	},

	isEmpty: function () {
		return !this._latlngs.length || !this._latlngs[0].length;
	},

	getCenter: function () {
		// throws error when not yet added to map as this center calculation requires projected coordinates
		if (!this._map) {
			throw new Error('Must add layer to map before using getCenter()');
		}

		var i, j, p1, p2, f, area, x, y, center,
		    points = this._rings[0],
		    len = points.length;

		if (!len) { return null; }

		// polygon centroid algorithm; only uses the first ring if there are multiple

		area = x = y = 0;

		for (i = 0, j = len - 1; i < len; j = i++) {
			p1 = points[i];
			p2 = points[j];

			f = p1.y * p2.x - p2.y * p1.x;
			x += (p1.x + p2.x) * f;
			y += (p1.y + p2.y) * f;
			area += f * 3;
		}

		if (area === 0) {
			// Polygon is so small that all points are on same pixel.
			center = points[0];
		} else {
			center = [x / area, y / area];
		}
		return this._map.layerPointToLatLng(center);
	},

	_convertLatLngs: function (latlngs) {
		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
		    len = result.length;

		// remove last point if it equals first one
		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
			result.pop();
		}
		return result;
	},

	_setLatLngs: function (latlngs) {
		Polyline.prototype._setLatLngs.call(this, latlngs);
		if (isFlat(this._latlngs)) {
			this._latlngs = [this._latlngs];
		}
	},

	_defaultShape: function () {
		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
	},

	_clipPoints: function () {
		// polygons need a different clipping algorithm so we redefine that

		var bounds = this._renderer._bounds,
		    w = this.options.weight,
		    p = new Point(w, w);

		// increase clip padding by stroke width to avoid stroke on clip edges
		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

		this._parts = [];
		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
			return;
		}

		if (this.options.noClip) {
			this._parts = this._rings;
			return;
		}

		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
			clipped = clipPolygon(this._rings[i], bounds, true);
			if (clipped.length) {
				this._parts.push(clipped);
			}
		}
	},

	_updatePath: function () {
		this._renderer._updatePoly(this, true);
	},

	// Needed by the `Canvas` renderer for interactivity
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2, i, j, k, len, len2;

		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

		// ray casting algorithm for detecting if point is in polygon
		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		// also check if it's on polygon stroke
		return inside || Polyline.prototype._containsPoint.call(this, p, true);
	}

});


// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
function polygon(latlngs, options) {
	return new Polygon(latlngs, options);
}

/*
 * @class GeoJSON
 * @aka L.GeoJSON
 * @inherits FeatureGroup
 *
 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
 *
 * @example
 *
 * ```js
 * L.geoJSON(data, {
 * 	style: function (feature) {
 * 		return {color: feature.properties.color};
 * 	}
 * }).bindPopup(function (layer) {
 * 	return layer.feature.properties.description;
 * }).addTo(map);
 * ```
 */

var GeoJSON = FeatureGroup.extend({

	/* @section
	 * @aka GeoJSON options
	 *
	 * @option pointToLayer: Function = *
	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
	 * The default is to spawn a default `Marker`:
	 * ```js
	 * function(geoJsonPoint, latlng) {
	 * 	return L.marker(latlng);
	 * }
	 * ```
	 *
	 * @option style: Function = *
	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
	 * called internally when data is added.
	 * The default value is to not override any defaults:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return {}
	 * }
	 * ```
	 *
	 * @option onEachFeature: Function = *
	 * A `Function` that will be called once for each created `Feature`, after it has
	 * been created and styled. Useful for attaching events and popups to features.
	 * The default is to do nothing with the newly created layers:
	 * ```js
	 * function (feature, layer) {}
	 * ```
	 *
	 * @option filter: Function = *
	 * A `Function` that will be used to decide whether to include a feature or not.
	 * The default is to include all features:
	 * ```js
	 * function (geoJsonFeature) {
	 * 	return true;
	 * }
	 * ```
	 * Note: dynamically changing the `filter` option will have effect only on newly
	 * added data. It will _not_ re-evaluate already included features.
	 *
	 * @option coordsToLatLng: Function = *
	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
	 * The default is the `coordsToLatLng` static method.
	 *
	 * @option markersInheritOptions: Boolean = false
	 * Whether default Markers for "Point" type Features inherit from group options.
	 */

	initialize: function (geojson, options) {
		setOptions(this, options);

		this._layers = {};

		if (geojson) {
			this.addData(geojson);
		}
	},

	// @method addData( <GeoJSON> data ): this
	// Adds a GeoJSON object to the layer.
	addData: function (geojson) {
		var features = isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(feature);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return this; }

		var layer = geometryToLayer(geojson, options);
		if (!layer) {
			return this;
		}
		layer.feature = asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	},

	// @method resetStyle( <Path> layer? ): this
	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
	// If `layer` is omitted, the style of all features in the current layer is reset.
	resetStyle: function (layer) {
		if (layer === undefined) {
			return this.eachLayer(this.resetStyle, this);
		}
		// reset any custom styles
		layer.options = extend({}, layer.defaultOptions);
		this._setLayerStyle(layer, this.options.style);
		return this;
	},

	// @method setStyle( <Function> style ): this
	// Changes styles of GeoJSON vector layers with the given style function.
	setStyle: function (style) {
		return this.eachLayer(function (layer) {
			this._setLayerStyle(layer, style);
		}, this);
	},

	_setLayerStyle: function (layer, style) {
		if (layer.setStyle) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			layer.setStyle(style);
		}
	}
});

// @section
// There are several static functions which can be called without instantiating L.GeoJSON:

// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
// Creates a `Layer` from a given GeoJSON feature. Can use a custom
// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
// functions if provided as options.
function geometryToLayer(geojson, options) {

	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry ? geometry.coordinates : null,
	    layers = [],
	    pointToLayer = options && options.pointToLayer,
	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
	    latlng, latlngs, i, len;

	if (!coords && !geometry) {
		return null;
	}

	switch (geometry.type) {
	case 'Point':
		latlng = _coordsToLatLng(coords);
		return _pointToLayer(pointToLayer, geojson, latlng, options);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = _coordsToLatLng(coords[i]);
			layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
		}
		return new FeatureGroup(layers);

	case 'LineString':
	case 'MultiLineString':
		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
		return new Polyline(latlngs, options);

	case 'Polygon':
	case 'MultiPolygon':
		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
		return new Polygon(latlngs, options);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {
			var layer = geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, options);

			if (layer) {
				layers.push(layer);
			}
		}
		return new FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
}

function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
	return pointToLayerFn ?
		pointToLayerFn(geojson, latlng) :
		new Marker(latlng, options && options.markersInheritOptions && options);
}

// @function coordsToLatLng(coords: Array): LatLng
// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
function coordsToLatLng(coords) {
	return new LatLng(coords[1], coords[0], coords[2]);
}

// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
	var latlngs = [];

	for (var i = 0, len = coords.length, latlng; i < len; i++) {
		latlng = levelsDeep ?
			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
			(_coordsToLatLng || coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
}

// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
function latLngToCoords(latlng, precision) {
	precision = typeof precision === 'number' ? precision : 6;
	return latlng.alt !== undefined ?
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
}

// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
	var coords = [];

	for (var i = 0, len = latlngs.length; i < len; i++) {
		coords.push(levelsDeep ?
			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
			latLngToCoords(latlngs[i], precision));
	}

	if (!levelsDeep && closed) {
		coords.push(coords[0]);
	}

	return coords;
}

function getFeature(layer, newGeometry) {
	return layer.feature ?
		extend({}, layer.feature, {geometry: newGeometry}) :
		asFeature(newGeometry);
}

// @function asFeature(geojson: Object): Object
// Normalize GeoJSON geometries/features into GeoJSON features.
function asFeature(geojson) {
	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
		return geojson;
	}

	return {
		type: 'Feature',
		properties: {},
		geometry: geojson
	};
}

var PointToGeoJSON = {
	toGeoJSON: function (precision) {
		return getFeature(this, {
			type: 'Point',
			coordinates: latLngToCoords(this.getLatLng(), precision)
		});
	}
};

// @namespace Marker
// @section Other methods
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
Marker.include(PointToGeoJSON);

// @namespace CircleMarker
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
Circle.include(PointToGeoJSON);
CircleMarker.include(PointToGeoJSON);


// @namespace Polyline
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
Polyline.include({
	toGeoJSON: function (precision) {
		var multi = !isFlat(this._latlngs);

		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'LineString',
			coordinates: coords
		});
	}
});

// @namespace Polygon
// @method toGeoJSON(precision?: Number): Object
// `precision` is the number of decimal places for coordinates.
// The default value is 6 places.
// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
Polygon.include({
	toGeoJSON: function (precision) {
		var holes = !isFlat(this._latlngs),
		    multi = holes && !isFlat(this._latlngs[0]);

		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

		if (!holes) {
			coords = [coords];
		}

		return getFeature(this, {
			type: (multi ? 'Multi' : '') + 'Polygon',
			coordinates: coords
		});
	}
});


// @namespace LayerGroup
LayerGroup.include({
	toMultiPoint: function (precision) {
		var coords = [];

		this.eachLayer(function (layer) {
			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
		});

		return getFeature(this, {
			type: 'MultiPoint',
			coordinates: coords
		});
	},

	// @method toGeoJSON(precision?: Number): Object
	// `precision` is the number of decimal places for coordinates.
	// The default value is 6 places.
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
	toGeoJSON: function (precision) {

		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

		if (type === 'MultiPoint') {
			return this.toMultiPoint(precision);
		}

		var isGeometryCollection = type === 'GeometryCollection',
		    jsons = [];

		this.eachLayer(function (layer) {
			if (layer.toGeoJSON) {
				var json = layer.toGeoJSON(precision);
				if (isGeometryCollection) {
					jsons.push(json.geometry);
				} else {
					var feature = asFeature(json);
					// Squash nested feature collections
					if (feature.type === 'FeatureCollection') {
						jsons.push.apply(jsons, feature.features);
					} else {
						jsons.push(feature);
					}
				}
			}
		});

		if (isGeometryCollection) {
			return getFeature(this, {
				geometries: jsons,
				type: 'GeometryCollection'
			});
		}

		return {
			type: 'FeatureCollection',
			features: jsons
		};
	}
});

// @namespace GeoJSON
// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
// Creates a GeoJSON layer. Optionally accepts an object in
// [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
// (you can alternatively add it later with `addData` method) and an `options` object.
function geoJSON(geojson, options) {
	return new GeoJSON(geojson, options);
}

// Backward compatibility.
var geoJson = geoJSON;

/*
 * @class ImageOverlay
 * @aka L.ImageOverlay
 * @inherits Interactive layer
 *
 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
 *
 * @example
 *
 * ```js
 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
 * ```
 */

var ImageOverlay = Layer.extend({

	// @section
	// @aka ImageOverlay options
	options: {
		// @option opacity: Number = 1.0
		// The opacity of the image overlay.
		opacity: 1,

		// @option alt: String = ''
		// Text for the `alt` attribute of the image (useful for accessibility).
		alt: '',

		// @option interactive: Boolean = false
		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
		interactive: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the image.
		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false,

		// @option errorOverlayUrl: String = ''
		// URL to the overlay image to show in place of the overlay that failed to load.
		errorOverlayUrl: '',

		// @option zIndex: Number = 1
		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
		zIndex: 1,

		// @option className: String = ''
		// A custom class name to assign to the image. Empty by default.
		className: ''
	},

	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
		this._url = url;
		this._bounds = toLatLngBounds(bounds);

		setOptions(this, options);
	},

	onAdd: function () {
		if (!this._image) {
			this._initImage();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}

		if (this.options.interactive) {
			addClass(this._image, 'leaflet-interactive');
			this.addInteractiveTarget(this._image);
		}

		this.getPane().appendChild(this._image);
		this._reset();
	},

	onRemove: function () {
		remove(this._image);
		if (this.options.interactive) {
			this.removeInteractiveTarget(this._image);
		}
	},

	// @method setOpacity(opacity: Number): this
	// Sets the opacity of the overlay.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._image) {
			this._updateOpacity();
		}
		return this;
	},

	setStyle: function (styleOpts) {
		if (styleOpts.opacity) {
			this.setOpacity(styleOpts.opacity);
		}
		return this;
	},

	// @method bringToFront(): this
	// Brings the layer to the top of all overlays.
	bringToFront: function () {
		if (this._map) {
			toFront(this._image);
		}
		return this;
	},

	// @method bringToBack(): this
	// Brings the layer to the bottom of all overlays.
	bringToBack: function () {
		if (this._map) {
			toBack(this._image);
		}
		return this;
	},

	// @method setUrl(url: String): this
	// Changes the URL of the image.
	setUrl: function (url) {
		this._url = url;

		if (this._image) {
			this._image.src = url;
		}
		return this;
	},

	// @method setBounds(bounds: LatLngBounds): this
	// Update the bounds that this ImageOverlay covers
	setBounds: function (bounds) {
		this._bounds = toLatLngBounds(bounds);

		if (this._map) {
			this._reset();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			zoom: this._reset,
			viewreset: this._reset
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @method setZIndex(value: Number): this
	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
	setZIndex: function (value) {
		this.options.zIndex = value;
		this._updateZIndex();
		return this;
	},

	// @method getBounds(): LatLngBounds
	// Get the bounds that this ImageOverlay covers
	getBounds: function () {
		return this._bounds;
	},

	// @method getElement(): HTMLElement
	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
	// used by this overlay.
	getElement: function () {
		return this._image;
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'IMG';
		var img = this._image = wasElementSupplied ? this._url : create$1('img');

		addClass(img, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(img, this.options.className); }

		img.onselectstart = falseFn;
		img.onmousemove = falseFn;

		// @event load: Event
		// Fired when the ImageOverlay layer has loaded its image
		img.onload = bind(this.fire, this, 'load');
		img.onerror = bind(this._overlayOnError, this, 'error');

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		if (this.options.zIndex) {
			this._updateZIndex();
		}

		if (wasElementSupplied) {
			this._url = img.src;
			return;
		}

		img.src = this._url;
		img.alt = this.options.alt;
	},

	_animateZoom: function (e) {
		var scale = this._map.getZoomScale(e.zoom),
		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

		setTransform(this._image, offset, scale);
	},

	_reset: function () {
		var image = this._image,
		    bounds = new Bounds(
		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		    size = bounds.getSize();

		setPosition(image, bounds.min);

		image.style.width  = size.x + 'px';
		image.style.height = size.y + 'px';
	},

	_updateOpacity: function () {
		setOpacity(this._image, this.options.opacity);
	},

	_updateZIndex: function () {
		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._image.style.zIndex = this.options.zIndex;
		}
	},

	_overlayOnError: function () {
		// @event error: Event
		// Fired when the ImageOverlay layer fails to load its image
		this.fire('error');

		var errorUrl = this.options.errorOverlayUrl;
		if (errorUrl && this._url !== errorUrl) {
			this._url = errorUrl;
			this._image.src = errorUrl;
		}
	}
});

// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
// Instantiates an image overlay object given the URL of the image and the
// geographical bounds it is tied to.
var imageOverlay = function (url, bounds, options) {
	return new ImageOverlay(url, bounds, options);
};

/*
 * @class VideoOverlay
 * @aka L.VideoOverlay
 * @inherits ImageOverlay
 *
 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
 *
 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
 * HTML5 element.
 *
 * @example
 *
 * ```js
 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
 * 	videoBounds = [[ 32, -130], [ 13, -100]];
 * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
 * ```
 */

var VideoOverlay = ImageOverlay.extend({

	// @section
	// @aka VideoOverlay options
	options: {
		// @option autoplay: Boolean = true
		// Whether the video starts playing automatically when loaded.
		autoplay: true,

		// @option loop: Boolean = true
		// Whether the video will loop back to the beginning when played.
		loop: true,

		// @option keepAspectRatio: Boolean = true
		// Whether the video will save aspect ratio after the projection.
		// Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
		keepAspectRatio: true
	},

	_initImage: function () {
		var wasElementSupplied = this._url.tagName === 'VIDEO';
		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

		addClass(vid, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(vid, this.options.className); }

		vid.onselectstart = falseFn;
		vid.onmousemove = falseFn;

		// @event load: Event
		// Fired when the video has finished loading the first frame
		vid.onloadeddata = bind(this.fire, this, 'load');

		if (wasElementSupplied) {
			var sourceElements = vid.getElementsByTagName('source');
			var sources = [];
			for (var j = 0; j < sourceElements.length; j++) {
				sources.push(sourceElements[j].src);
			}

			this._url = (sourceElements.length > 0) ? sources : [vid.src];
			return;
		}

		if (!isArray(this._url)) { this._url = [this._url]; }

		if (!this.options.keepAspectRatio && vid.style.hasOwnProperty('objectFit')) { vid.style['objectFit'] = 'fill'; }
		vid.autoplay = !!this.options.autoplay;
		vid.loop = !!this.options.loop;
		for (var i = 0; i < this._url.length; i++) {
			var source = create$1('source');
			source.src = this._url[i];
			vid.appendChild(source);
		}
	}

	// @method getElement(): HTMLVideoElement
	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
	// used by this overlay.
});


// @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
// Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
// geographical bounds it is tied to.

function videoOverlay(video, bounds, options) {
	return new VideoOverlay(video, bounds, options);
}

/*
 * @class SVGOverlay
 * @aka L.SVGOverlay
 * @inherits ImageOverlay
 *
 * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
 *
 * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
 *
 * @example
 *
 * ```js
 * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
 * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
 * svgElement.setAttribute('viewBox', "0 0 200 200");
 * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
 * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
 * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
 * ```
 */

var SVGOverlay = ImageOverlay.extend({
	_initImage: function () {
		var el = this._image = this._url;

		addClass(el, 'leaflet-image-layer');
		if (this._zoomAnimated) { addClass(el, 'leaflet-zoom-animated'); }
		if (this.options.className) { addClass(el, this.options.className); }

		el.onselectstart = falseFn;
		el.onmousemove = falseFn;
	}

	// @method getElement(): SVGElement
	// Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
	// used by this overlay.
});


// @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
// Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
// A viewBox attribute is required on the SVG element to zoom in and out properly.

function svgOverlay(el, bounds, options) {
	return new SVGOverlay(el, bounds, options);
}

/*
 * @class DivOverlay
 * @inherits Layer
 * @aka L.DivOverlay
 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
 */

// @namespace DivOverlay
var DivOverlay = Layer.extend({

	// @section
	// @aka DivOverlay options
	options: {
		// @option offset: Point = Point(0, 7)
		// The offset of the popup position. Useful to control the anchor
		// of the popup when opening it on some overlays.
		offset: [0, 7],

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: '',

		// @option pane: String = 'popupPane'
		// `Map pane` where the popup will be added.
		pane: 'popupPane'
	},

	initialize: function (options, source) {
		setOptions(this, options);

		this._source = source;
	},

	onAdd: function (map) {
		this._zoomAnimated = map._zoomAnimated;

		if (!this._container) {
			this._initLayout();
		}

		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
		}

		clearTimeout(this._removeTimeout);
		this.getPane().appendChild(this._container);
		this.update();

		if (map._fadeAnimated) {
			setOpacity(this._container, 1);
		}

		this.bringToFront();
	},

	onRemove: function (map) {
		if (map._fadeAnimated) {
			setOpacity(this._container, 0);
			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
		} else {
			remove(this._container);
		}
	},

	// @namespace Popup
	// @method getLatLng: LatLng
	// Returns the geographical point of popup.
	getLatLng: function () {
		return this._latlng;
	},

	// @method setLatLng(latlng: LatLng): this
	// Sets the geographical point where the popup will open.
	setLatLng: function (latlng) {
		this._latlng = toLatLng(latlng);
		if (this._map) {
			this._updatePosition();
			this._adjustPan();
		}
		return this;
	},

	// @method getContent: String|HTMLElement
	// Returns the content of the popup.
	getContent: function () {
		return this._content;
	},

	// @method setContent(htmlContent: String|HTMLElement|Function): this
	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
	setContent: function (content) {
		this._content = content;
		this.update();
		return this;
	},

	// @method getElement: String|HTMLElement
	// Alias for [getContent()](#popup-getcontent)
	getElement: function () {
		return this._container;
	},

	// @method update: null
	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
	update: function () {
		if (!this._map) { return; }

		this._container.style.visibility = 'hidden';

		this._updateContent();
		this._updateLayout();
		this._updatePosition();

		this._container.style.visibility = '';

		this._adjustPan();
	},

	getEvents: function () {
		var events = {
			zoom: this._updatePosition,
			viewreset: this._updatePosition
		};

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}
		return events;
	},

	// @method isOpen: Boolean
	// Returns `true` when the popup is visible on the map.
	isOpen: function () {
		return !!this._map && this._map.hasLayer(this);
	},

	// @method bringToFront: this
	// Brings this popup in front of other popups (in the same map pane).
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings this popup to the back of other popups (in the same map pane).
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
		}
		return this;
	},

	_prepareOpen: function (parent, layer, latlng) {
		if (!(layer instanceof Layer)) {
			latlng = layer;
			layer = parent;
		}

		if (layer instanceof FeatureGroup) {
			for (var id in parent._layers) {
				layer = parent._layers[id];
				break;
			}
		}

		if (!latlng) {
			if (layer.getCenter) {
				latlng = layer.getCenter();
			} else if (layer.getLatLng) {
				latlng = layer.getLatLng();
			} else {
				throw new Error('Unable to get source layer LatLng.');
			}
		}

		// set overlay source to this layer
		this._source = layer;

		// update the overlay (content, layout, ect...)
		this.update();

		return latlng;
	},

	_updateContent: function () {
		if (!this._content) { return; }

		var node = this._contentNode;
		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

		if (typeof content === 'string') {
			node.innerHTML = content;
		} else {
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			}
			node.appendChild(content);
		}
		this.fire('contentupdate');
	},

	_updatePosition: function () {
		if (!this._map) { return; }

		var pos = this._map.latLngToLayerPoint(this._latlng),
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (this._zoomAnimated) {
			setPosition(this._container, pos.add(anchor));
		} else {
			offset = offset.add(pos).add(anchor);
		}

		var bottom = this._containerBottom = -offset.y,
		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

		// bottom position the popup in case the height of the popup changes (images loading etc)
		this._container.style.bottom = bottom + 'px';
		this._container.style.left = left + 'px';
	},

	_getAnchor: function () {
		return [0, 0];
	}

});

/*
 * @class Popup
 * @inherits DivOverlay
 * @aka L.Popup
 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
 * open popups while making sure that only one popup is open at one time
 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
 *
 * @example
 *
 * If you want to just bind a popup to marker click and then open it, it's really easy:
 *
 * ```js
 * marker.bindPopup(popupContent).openPopup();
 * ```
 * Path overlays like polylines also have a `bindPopup` method.
 * Here's a more complicated way to open a popup on a map:
 *
 * ```js
 * var popup = L.popup()
 * 	.setLatLng(latlng)
 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
 * 	.openOn(map);
 * ```
 */


// @namespace Popup
var Popup = DivOverlay.extend({

	// @section
	// @aka Popup options
	options: {
		// @option maxWidth: Number = 300
		// Max width of the popup, in pixels.
		maxWidth: 300,

		// @option minWidth: Number = 50
		// Min width of the popup, in pixels.
		minWidth: 50,

		// @option maxHeight: Number = null
		// If set, creates a scrollable container of the given height
		// inside a popup if its content exceeds it.
		maxHeight: null,

		// @option autoPan: Boolean = true
		// Set it to `false` if you don't want the map to do panning animation
		// to fit the opened popup.
		autoPan: true,

		// @option autoPanPaddingTopLeft: Point = null
		// The margin between the popup and the top left corner of the map
		// view after autopanning was performed.
		autoPanPaddingTopLeft: null,

		// @option autoPanPaddingBottomRight: Point = null
		// The margin between the popup and the bottom right corner of the map
		// view after autopanning was performed.
		autoPanPaddingBottomRight: null,

		// @option autoPanPadding: Point = Point(5, 5)
		// Equivalent of setting both top left and bottom right autopan padding to the same value.
		autoPanPadding: [5, 5],

		// @option keepInView: Boolean = false
		// Set it to `true` if you want to prevent users from panning the popup
		// off of the screen while it is open.
		keepInView: false,

		// @option closeButton: Boolean = true
		// Controls the presence of a close button in the popup.
		closeButton: true,

		// @option autoClose: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the popup closing when another popup is opened.
		autoClose: true,

		// @option closeOnEscapeKey: Boolean = true
		// Set it to `false` if you want to override the default behavior of
		// the ESC key for closing of the popup.
		closeOnEscapeKey: true,

		// @option closeOnClick: Boolean = *
		// Set it if you want to override the default behavior of the popup closing when user clicks
		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

		// @option className: String = ''
		// A custom CSS class name to assign to the popup.
		className: ''
	},

	// @namespace Popup
	// @method openOn(map: Map): this
	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
	openOn: function (map) {
		map.openPopup(this);
		return this;
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupopen: PopupEvent
		// Fired when a popup is opened in the map
		map.fire('popupopen', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup bound to this layer is opened
			this._source.fire('popupopen', {popup: this}, true);
			// For non-path layers, we toggle the popup when clicking
			// again the layer, so prevent the map to reopen it.
			if (!(this._source instanceof Path)) {
				this._source.on('preclick', stopPropagation);
			}
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Popup events
		// @event popupclose: PopupEvent
		// Fired when a popup in the map is closed
		map.fire('popupclose', {popup: this});

		if (this._source) {
			// @namespace Layer
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup bound to this layer is closed
			this._source.fire('popupclose', {popup: this}, true);
			if (!(this._source instanceof Path)) {
				this._source.off('preclick', stopPropagation);
			}
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
			events.preclick = this._close;
		}

		if (this.options.keepInView) {
			events.moveend = this._adjustPan;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closePopup(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-popup',
		    container = this._container = create$1('div',
			prefix + ' ' + (this.options.className || '') +
			' leaflet-zoom-animated');

		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
		this._contentNode = create$1('div', prefix + '-content', wrapper);

		disableClickPropagation(wrapper);
		disableScrollPropagation(this._contentNode);
		on(wrapper, 'contextmenu', stopPropagation);

		this._tipContainer = create$1('div', prefix + '-tip-container', container);
		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

		if (this.options.closeButton) {
			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
			closeButton.href = '#close';
			closeButton.innerHTML = '&#215;';

			on(closeButton, 'click', this._onCloseButtonClick, this);
		}
	},

	_updateLayout: function () {
		var container = this._contentNode,
		    style = container.style;

		style.width = '';
		style.whiteSpace = 'nowrap';

		var width = container.offsetWidth;
		width = Math.min(width, this.options.maxWidth);
		width = Math.max(width, this.options.minWidth);

		style.width = (width + 1) + 'px';
		style.whiteSpace = '';

		style.height = '';

		var height = container.offsetHeight,
		    maxHeight = this.options.maxHeight,
		    scrolledClass = 'leaflet-popup-scrolled';

		if (maxHeight && height > maxHeight) {
			style.height = maxHeight + 'px';
			addClass(container, scrolledClass);
		} else {
			removeClass(container, scrolledClass);
		}

		this._containerWidth = this._container.offsetWidth;
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
		    anchor = this._getAnchor();
		setPosition(this._container, pos.add(anchor));
	},

	_adjustPan: function () {
		if (!this.options.autoPan) { return; }
		if (this._map._panAnim) { this._map._panAnim.stop(); }

		var map = this._map,
		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
		    containerHeight = this._container.offsetHeight + marginBottom,
		    containerWidth = this._containerWidth,
		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

		layerPos._add(getPosition(this._container));

		var containerPos = map.layerPointToContainerPoint(layerPos),
		    padding = toPoint(this.options.autoPanPadding),
		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
		    size = map.getSize(),
		    dx = 0,
		    dy = 0;

		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
		}
		if (containerPos.x - dx - paddingTL.x < 0) { // left
			dx = containerPos.x - paddingTL.x;
		}
		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
		}
		if (containerPos.y - dy - paddingTL.y < 0) { // top
			dy = containerPos.y - paddingTL.y;
		}

		// @namespace Map
		// @section Popup events
		// @event autopanstart: Event
		// Fired when the map starts autopanning when opening a popup.
		if (dx || dy) {
			map
			    .fire('autopanstart')
			    .panBy([dx, dy]);
		}
	},

	_onCloseButtonClick: function (e) {
		this._close();
		stop(e);
	},

	_getAnchor: function () {
		// Where should we anchor the popup on the source layer?
		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
	}

});

// @namespace Popup
// @factory L.popup(options?: Popup options, source?: Layer)
// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
var popup = function (options, source) {
	return new Popup(options, source);
};


/* @namespace Map
 * @section Interaction Options
 * @option closePopupOnClick: Boolean = true
 * Set it to `false` if you don't want popups to close when user clicks the map.
 */
Map.mergeOptions({
	closePopupOnClick: true
});


// @namespace Map
// @section Methods for Layers and Controls
Map.include({
	// @method openPopup(popup: Popup): this
	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
	// @alternative
	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
	// Creates a popup with the specified content and options and opens it in the given point on a map.
	openPopup: function (popup, latlng, options) {
		if (!(popup instanceof Popup)) {
			popup = new Popup(options).setContent(popup);
		}

		if (latlng) {
			popup.setLatLng(latlng);
		}

		if (this.hasLayer(popup)) {
			return this;
		}

		if (this._popup && this._popup.options.autoClose) {
			this.closePopup();
		}

		this._popup = popup;
		return this.addLayer(popup);
	},

	// @method closePopup(popup?: Popup): this
	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
	closePopup: function (popup) {
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
		}
		return this;
	}
});

/*
 * @namespace Layer
 * @section Popup methods example
 *
 * All layers share a set of methods convenient for binding popups to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
 * layer.openPopup();
 * layer.closePopup();
 * ```
 *
 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
 */

// @section Popup methods
Layer.include({

	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
	// Binds a popup to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindPopup: function (content, options) {

		if (content instanceof Popup) {
			setOptions(content, options);
			this._popup = content;
			content._source = this;
		} else {
			if (!this._popup || options) {
				this._popup = new Popup(options, this);
			}
			this._popup.setContent(content);
		}

		if (!this._popupHandlersAdded) {
			this.on({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = true;
		}

		return this;
	},

	// @method unbindPopup(): this
	// Removes the popup previously bound with `bindPopup`.
	unbindPopup: function () {
		if (this._popup) {
			this.off({
				click: this._openPopup,
				keypress: this._onKeyPress,
				remove: this.closePopup,
				move: this._movePopup
			});
			this._popupHandlersAdded = false;
			this._popup = null;
		}
		return this;
	},

	// @method openPopup(latlng?: LatLng): this
	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
	openPopup: function (layer, latlng) {
		if (this._popup && this._map) {
			latlng = this._popup._prepareOpen(this, layer, latlng);

			// open the popup on the map
			this._map.openPopup(this._popup, latlng);
		}

		return this;
	},

	// @method closePopup(): this
	// Closes the popup bound to this layer if it is open.
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},

	// @method togglePopup(): this
	// Opens or closes the popup bound to this layer depending on its current state.
	togglePopup: function (target) {
		if (this._popup) {
			if (this._popup._map) {
				this.closePopup();
			} else {
				this.openPopup(target);
			}
		}
		return this;
	},

	// @method isPopupOpen(): boolean
	// Returns `true` if the popup bound to this layer is currently open.
	isPopupOpen: function () {
		return (this._popup ? this._popup.isOpen() : false);
	},

	// @method setPopupContent(content: String|HTMLElement|Popup): this
	// Sets the content of the popup bound to this layer.
	setPopupContent: function (content) {
		if (this._popup) {
			this._popup.setContent(content);
		}
		return this;
	},

	// @method getPopup(): Popup
	// Returns the popup bound to this layer.
	getPopup: function () {
		return this._popup;
	},

	_openPopup: function (e) {
		var layer = e.layer || e.target;

		if (!this._popup) {
			return;
		}

		if (!this._map) {
			return;
		}

		// prevent map click
		stop(e);

		// if this inherits from Path its a vector and we can just
		// open the popup at the new location
		if (layer instanceof Path) {
			this.openPopup(e.layer || e.target, e.latlng);
			return;
		}

		// otherwise treat it like a marker and figure out
		// if we should toggle it open/closed
		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
			this.closePopup();
		} else {
			this.openPopup(layer, e.latlng);
		}
	},

	_movePopup: function (e) {
		this._popup.setLatLng(e.latlng);
	},

	_onKeyPress: function (e) {
		if (e.originalEvent.keyCode === 13) {
			this._openPopup(e);
		}
	}
});

/*
 * @class Tooltip
 * @inherits DivOverlay
 * @aka L.Tooltip
 * Used to display small texts on top of map layers.
 *
 * @example
 *
 * ```js
 * marker.bindTooltip("my tooltip text").openTooltip();
 * ```
 * Note about tooltip offset. Leaflet takes two options in consideration
 * for computing tooltip offsetting:
 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
 *   move it to the bottom. Negatives will move to the left and top.
 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
 *   should adapt this value if you use a custom icon.
 */


// @namespace Tooltip
var Tooltip = DivOverlay.extend({

	// @section
	// @aka Tooltip options
	options: {
		// @option pane: String = 'tooltipPane'
		// `Map pane` where the tooltip will be added.
		pane: 'tooltipPane',

		// @option offset: Point = Point(0, 0)
		// Optional offset of the tooltip position.
		offset: [0, 0],

		// @option direction: String = 'auto'
		// Direction where to open the tooltip. Possible values are: `right`, `left`,
		// `top`, `bottom`, `center`, `auto`.
		// `auto` will dynamically switch between `right` and `left` according to the tooltip
		// position on the map.
		direction: 'auto',

		// @option permanent: Boolean = false
		// Whether to open the tooltip permanently or only on mouseover.
		permanent: false,

		// @option sticky: Boolean = false
		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
		sticky: false,

		// @option interactive: Boolean = false
		// If true, the tooltip will listen to the feature events.
		interactive: false,

		// @option opacity: Number = 0.9
		// Tooltip container opacity.
		opacity: 0.9
	},

	onAdd: function (map) {
		DivOverlay.prototype.onAdd.call(this, map);
		this.setOpacity(this.options.opacity);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipopen: TooltipEvent
		// Fired when a tooltip is opened in the map.
		map.fire('tooltipopen', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip bound to this layer is opened.
			this._source.fire('tooltipopen', {tooltip: this}, true);
		}
	},

	onRemove: function (map) {
		DivOverlay.prototype.onRemove.call(this, map);

		// @namespace Map
		// @section Tooltip events
		// @event tooltipclose: TooltipEvent
		// Fired when a tooltip in the map is closed.
		map.fire('tooltipclose', {tooltip: this});

		if (this._source) {
			// @namespace Layer
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip bound to this layer is closed.
			this._source.fire('tooltipclose', {tooltip: this}, true);
		}
	},

	getEvents: function () {
		var events = DivOverlay.prototype.getEvents.call(this);

		if (touch && !this.options.permanent) {
			events.preclick = this._close;
		}

		return events;
	},

	_close: function () {
		if (this._map) {
			this._map.closeTooltip(this);
		}
	},

	_initLayout: function () {
		var prefix = 'leaflet-tooltip',
		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

		this._contentNode = this._container = create$1('div', className);
	},

	_updateLayout: function () {},

	_adjustPan: function () {},

	_setPosition: function (pos) {
		var map = this._map,
		    container = this._container,
		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
		    tooltipPoint = map.layerPointToContainerPoint(pos),
		    direction = this.options.direction,
		    tooltipWidth = container.offsetWidth,
		    tooltipHeight = container.offsetHeight,
		    offset = toPoint(this.options.offset),
		    anchor = this._getAnchor();

		if (direction === 'top') {
			pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
		} else if (direction === 'bottom') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
		} else if (direction === 'center') {
			pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
		} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
			direction = 'right';
			pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
		} else {
			direction = 'left';
			pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
		}

		removeClass(container, 'leaflet-tooltip-right');
		removeClass(container, 'leaflet-tooltip-left');
		removeClass(container, 'leaflet-tooltip-top');
		removeClass(container, 'leaflet-tooltip-bottom');
		addClass(container, 'leaflet-tooltip-' + direction);
		setPosition(container, pos);
	},

	_updatePosition: function () {
		var pos = this._map.latLngToLayerPoint(this._latlng);
		this._setPosition(pos);
	},

	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._container) {
			setOpacity(this._container, opacity);
		}
	},

	_animateZoom: function (e) {
		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
		this._setPosition(pos);
	},

	_getAnchor: function () {
		// Where should we anchor the tooltip on the source layer?
		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
	}

});

// @namespace Tooltip
// @factory L.tooltip(options?: Tooltip options, source?: Layer)
// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
var tooltip = function (options, source) {
	return new Tooltip(options, source);
};

// @namespace Map
// @section Methods for Layers and Controls
Map.include({

	// @method openTooltip(tooltip: Tooltip): this
	// Opens the specified tooltip.
	// @alternative
	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
	// Creates a tooltip with the specified content and options and open it.
	openTooltip: function (tooltip, latlng, options) {
		if (!(tooltip instanceof Tooltip)) {
			tooltip = new Tooltip(options).setContent(tooltip);
		}

		if (latlng) {
			tooltip.setLatLng(latlng);
		}

		if (this.hasLayer(tooltip)) {
			return this;
		}

		return this.addLayer(tooltip);
	},

	// @method closeTooltip(tooltip?: Tooltip): this
	// Closes the tooltip given as parameter.
	closeTooltip: function (tooltip) {
		if (tooltip) {
			this.removeLayer(tooltip);
		}
		return this;
	}

});

/*
 * @namespace Layer
 * @section Tooltip methods example
 *
 * All layers share a set of methods convenient for binding tooltips to it.
 *
 * ```js
 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
 * layer.openTooltip();
 * layer.closeTooltip();
 * ```
 */

// @section Tooltip methods
Layer.include({

	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
	// Binds a tooltip to the layer with the passed `content` and sets up the
	// necessary event listeners. If a `Function` is passed it will receive
	// the layer as the first argument and should return a `String` or `HTMLElement`.
	bindTooltip: function (content, options) {

		if (content instanceof Tooltip) {
			setOptions(content, options);
			this._tooltip = content;
			content._source = this;
		} else {
			if (!this._tooltip || options) {
				this._tooltip = new Tooltip(options, this);
			}
			this._tooltip.setContent(content);

		}

		this._initTooltipInteractions();

		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
			this.openTooltip();
		}

		return this;
	},

	// @method unbindTooltip(): this
	// Removes the tooltip previously bound with `bindTooltip`.
	unbindTooltip: function () {
		if (this._tooltip) {
			this._initTooltipInteractions(true);
			this.closeTooltip();
			this._tooltip = null;
		}
		return this;
	},

	_initTooltipInteractions: function (remove$$1) {
		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
		var onOff = remove$$1 ? 'off' : 'on',
		    events = {
			remove: this.closeTooltip,
			move: this._moveTooltip
		    };
		if (!this._tooltip.options.permanent) {
			events.mouseover = this._openTooltip;
			events.mouseout = this.closeTooltip;
			if (this._tooltip.options.sticky) {
				events.mousemove = this._moveTooltip;
			}
			if (touch) {
				events.click = this._openTooltip;
			}
		} else {
			events.add = this._openTooltip;
		}
		this[onOff](events);
		this._tooltipHandlersAdded = !remove$$1;
	},

	// @method openTooltip(latlng?: LatLng): this
	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
	openTooltip: function (layer, latlng) {
		if (this._tooltip && this._map) {
			latlng = this._tooltip._prepareOpen(this, layer, latlng);

			// open the tooltip on the map
			this._map.openTooltip(this._tooltip, latlng);

			// Tooltip container may not be defined if not permanent and never
			// opened.
			if (this._tooltip.options.interactive && this._tooltip._container) {
				addClass(this._tooltip._container, 'leaflet-clickable');
				this.addInteractiveTarget(this._tooltip._container);
			}
		}

		return this;
	},

	// @method closeTooltip(): this
	// Closes the tooltip bound to this layer if it is open.
	closeTooltip: function () {
		if (this._tooltip) {
			this._tooltip._close();
			if (this._tooltip.options.interactive && this._tooltip._container) {
				removeClass(this._tooltip._container, 'leaflet-clickable');
				this.removeInteractiveTarget(this._tooltip._container);
			}
		}
		return this;
	},

	// @method toggleTooltip(): this
	// Opens or closes the tooltip bound to this layer depending on its current state.
	toggleTooltip: function (target) {
		if (this._tooltip) {
			if (this._tooltip._map) {
				this.closeTooltip();
			} else {
				this.openTooltip(target);
			}
		}
		return this;
	},

	// @method isTooltipOpen(): boolean
	// Returns `true` if the tooltip bound to this layer is currently open.
	isTooltipOpen: function () {
		return this._tooltip.isOpen();
	},

	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
	// Sets the content of the tooltip bound to this layer.
	setTooltipContent: function (content) {
		if (this._tooltip) {
			this._tooltip.setContent(content);
		}
		return this;
	},

	// @method getTooltip(): Tooltip
	// Returns the tooltip bound to this layer.
	getTooltip: function () {
		return this._tooltip;
	},

	_openTooltip: function (e) {
		var layer = e.layer || e.target;

		if (!this._tooltip || !this._map) {
			return;
		}
		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
	},

	_moveTooltip: function (e) {
		var latlng = e.latlng, containerPoint, layerPoint;
		if (this._tooltip.options.sticky && e.originalEvent) {
			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
			latlng = this._map.layerPointToLatLng(layerPoint);
		}
		this._tooltip.setLatLng(latlng);
	}
});

/*
 * @class DivIcon
 * @aka L.DivIcon
 * @inherits Icon
 *
 * Represents a lightweight icon for markers that uses a simple `<div>`
 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
 *
 * @example
 * ```js
 * var myIcon = L.divIcon({className: 'my-div-icon'});
 * // you can set .my-div-icon styles in CSS
 *
 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
 * ```
 *
 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
 */

var DivIcon = Icon.extend({
	options: {
		// @section
		// @aka DivIcon options
		iconSize: [12, 12], // also can be set through CSS

		// iconAnchor: (Point),
		// popupAnchor: (Point),

		// @option html: String|HTMLElement = ''
		// Custom HTML code to put inside the div element, empty by default. Alternatively,
		// an instance of `HTMLElement`.
		html: false,

		// @option bgPos: Point = [0, 0]
		// Optional relative position of the background, in pixels
		bgPos: null,

		className: 'leaflet-div-icon'
	},

	createIcon: function (oldIcon) {
		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
		    options = this.options;

		if (options.html instanceof Element) {
			empty(div);
			div.appendChild(options.html);
		} else {
			div.innerHTML = options.html !== false ? options.html : '';
		}

		if (options.bgPos) {
			var bgPos = toPoint(options.bgPos);
			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
		}
		this._setIconStyles(div, 'icon');

		return div;
	},

	createShadow: function () {
		return null;
	}
});

// @factory L.divIcon(options: DivIcon options)
// Creates a `DivIcon` instance with the given options.
function divIcon(options) {
	return new DivIcon(options);
}

Icon.Default = IconDefault;

/*
 * @class GridLayer
 * @inherits Layer
 * @aka L.GridLayer
 *
 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
 *
 *
 * @section Synchronous usage
 * @example
 *
 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords){
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
 *         var ctx = tile.getContext('2d');
 *
 *         // return the tile so it can be rendered on screen
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section Asynchronous usage
 * @example
 *
 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
 *
 * ```js
 * var CanvasLayer = L.GridLayer.extend({
 *     createTile: function(coords, done){
 *         var error;
 *
 *         // create a <canvas> element for drawing
 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
 *
 *         // setup tile width and height according to the options
 *         var size = this.getTileSize();
 *         tile.width = size.x;
 *         tile.height = size.y;
 *
 *         // draw something asynchronously and pass the tile to the done() callback
 *         setTimeout(function() {
 *             done(error, tile);
 *         }, 1000);
 *
 *         return tile;
 *     }
 * });
 * ```
 *
 * @section
 */


var GridLayer = Layer.extend({

	// @section
	// @aka GridLayer options
	options: {
		// @option tileSize: Number|Point = 256
		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
		tileSize: 256,

		// @option opacity: Number = 1.0
		// Opacity of the tiles. Can be used in the `createTile()` function.
		opacity: 1,

		// @option updateWhenIdle: Boolean = (depends)
		// Load new tiles only when panning ends.
		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
		updateWhenIdle: mobile,

		// @option updateWhenZooming: Boolean = true
		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
		updateWhenZooming: true,

		// @option updateInterval: Number = 200
		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
		updateInterval: 200,

		// @option zIndex: Number = 1
		// The explicit zIndex of the tile layer.
		zIndex: 1,

		// @option bounds: LatLngBounds = undefined
		// If set, tiles will only be loaded inside the set `LatLngBounds`.
		bounds: null,

		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = undefined
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: undefined,

		// @option maxNativeZoom: Number = undefined
		// Maximum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
		// from `maxNativeZoom` level and auto-scaled.
		maxNativeZoom: undefined,

		// @option minNativeZoom: Number = undefined
		// Minimum zoom number the tile source has available. If it is specified,
		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
		// from `minNativeZoom` level and auto-scaled.
		minNativeZoom: undefined,

		// @option noWrap: Boolean = false
		// Whether the layer is wrapped around the antimeridian. If `true`, the
		// GridLayer will only be displayed once at low zoom levels. Has no
		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
		// tiles outside the CRS limits.
		noWrap: false,

		// @option pane: String = 'tilePane'
		// `Map pane` where the grid layer will be added.
		pane: 'tilePane',

		// @option className: String = ''
		// A custom class name to assign to the tile layer. Empty by default.
		className: '',

		// @option keepBuffer: Number = 2
		// When panning the map, keep this many rows and columns of tiles before unloading them.
		keepBuffer: 2
	},

	initialize: function (options) {
		setOptions(this, options);
	},

	onAdd: function () {
		this._initContainer();

		this._levels = {};
		this._tiles = {};

		this._resetView();
		this._update();
	},

	beforeAdd: function (map) {
		map._addZoomLimit(this);
	},

	onRemove: function (map) {
		this._removeAllTiles();
		remove(this._container);
		map._removeZoomLimit(this);
		this._container = null;
		this._tileZoom = undefined;
	},

	// @method bringToFront: this
	// Brings the tile layer to the top of all tile layers.
	bringToFront: function () {
		if (this._map) {
			toFront(this._container);
			this._setAutoZIndex(Math.max);
		}
		return this;
	},

	// @method bringToBack: this
	// Brings the tile layer to the bottom of all tile layers.
	bringToBack: function () {
		if (this._map) {
			toBack(this._container);
			this._setAutoZIndex(Math.min);
		}
		return this;
	},

	// @method getContainer: HTMLElement
	// Returns the HTML element that contains the tiles for this layer.
	getContainer: function () {
		return this._container;
	},

	// @method setOpacity(opacity: Number): this
	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
	setOpacity: function (opacity) {
		this.options.opacity = opacity;
		this._updateOpacity();
		return this;
	},

	// @method setZIndex(zIndex: Number): this
	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
	setZIndex: function (zIndex) {
		this.options.zIndex = zIndex;
		this._updateZIndex();

		return this;
	},

	// @method isLoading: Boolean
	// Returns `true` if any tile in the grid layer has not finished loading.
	isLoading: function () {
		return this._loading;
	},

	// @method redraw: this
	// Causes the layer to clear all the tiles and request them again.
	redraw: function () {
		if (this._map) {
			this._removeAllTiles();
			this._update();
		}
		return this;
	},

	getEvents: function () {
		var events = {
			viewprereset: this._invalidateAll,
			viewreset: this._resetView,
			zoom: this._resetView,
			moveend: this._onMoveEnd
		};

		if (!this.options.updateWhenIdle) {
			// update tiles on move, but not more often than once per given interval
			if (!this._onMove) {
				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
			}

			events.move = this._onMove;
		}

		if (this._zoomAnimated) {
			events.zoomanim = this._animateZoom;
		}

		return events;
	},

	// @section Extension methods
	// Layers extending `GridLayer` shall reimplement the following method.
	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, must be overridden by classes extending `GridLayer`.
	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
	// is specified, it must be called when the tile has finished loading and drawing.
	createTile: function () {
		return document.createElement('div');
	},

	// @section
	// @method getTileSize: Point
	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
	getTileSize: function () {
		var s = this.options.tileSize;
		return s instanceof Point ? s : new Point(s, s);
	},

	_updateZIndex: function () {
		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
			this._container.style.zIndex = this.options.zIndex;
		}
	},

	_setAutoZIndex: function (compare) {
		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

		var layers = this.getPane().children,
		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

			zIndex = layers[i].style.zIndex;

			if (layers[i] !== this._container && zIndex) {
				edgeZIndex = compare(edgeZIndex, +zIndex);
			}
		}

		if (isFinite(edgeZIndex)) {
			this.options.zIndex = edgeZIndex + compare(-1, 1);
			this._updateZIndex();
		}
	},

	_updateOpacity: function () {
		if (!this._map) { return; }

		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
		if (ielt9) { return; }

		setOpacity(this._container, this.options.opacity);

		var now = +new Date(),
		    nextFrame = false,
		    willPrune = false;

		for (var key in this._tiles) {
			var tile = this._tiles[key];
			if (!tile.current || !tile.loaded) { continue; }

			var fade = Math.min(1, (now - tile.loaded) / 200);

			setOpacity(tile.el, fade);
			if (fade < 1) {
				nextFrame = true;
			} else {
				if (tile.active) {
					willPrune = true;
				} else {
					this._onOpaqueTile(tile);
				}
				tile.active = true;
			}
		}

		if (willPrune && !this._noPrune) { this._pruneTiles(); }

		if (nextFrame) {
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		}
	},

	_onOpaqueTile: falseFn,

	_initContainer: function () {
		if (this._container) { return; }

		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
		this._updateZIndex();

		if (this.options.opacity < 1) {
			this._updateOpacity();
		}

		this.getPane().appendChild(this._container);
	},

	_updateLevels: function () {

		var zoom = this._tileZoom,
		    maxZoom = this.options.maxZoom;

		if (zoom === undefined) { return undefined; }

		for (var z in this._levels) {
			if (this._levels[z].el.children.length || z === zoom) {
				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
				this._onUpdateLevel(z);
			} else {
				remove(this._levels[z].el);
				this._removeTilesAtZoom(z);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
		}

		var level = this._levels[zoom],
		    map = this._map;

		if (!level) {
			level = this._levels[zoom] = {};

			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
			level.el.style.zIndex = maxZoom;

			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
			level.zoom = zoom;

			this._setZoomTransform(level, map.getCenter(), map.getZoom());

			// force the browser to consider the newly added element for transition
			falseFn(level.el.offsetWidth);

			this._onCreateLevel(level);
		}

		this._level = level;

		return level;
	},

	_onUpdateLevel: falseFn,

	_onRemoveLevel: falseFn,

	_onCreateLevel: falseFn,

	_pruneTiles: function () {
		if (!this._map) {
			return;
		}

		var key, tile;

		var zoom = this._map.getZoom();
		if (zoom > this.options.maxZoom ||
			zoom < this.options.minZoom) {
			this._removeAllTiles();
			return;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			tile.retain = tile.current;
		}

		for (key in this._tiles) {
			tile = this._tiles[key];
			if (tile.current && !tile.active) {
				var coords = tile.coords;
				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
				}
			}
		}

		for (key in this._tiles) {
			if (!this._tiles[key].retain) {
				this._removeTile(key);
			}
		}
	},

	_removeTilesAtZoom: function (zoom) {
		for (var key in this._tiles) {
			if (this._tiles[key].coords.z !== zoom) {
				continue;
			}
			this._removeTile(key);
		}
	},

	_removeAllTiles: function () {
		for (var key in this._tiles) {
			this._removeTile(key);
		}
	},

	_invalidateAll: function () {
		for (var z in this._levels) {
			remove(this._levels[z].el);
			this._onRemoveLevel(z);
			delete this._levels[z];
		}
		this._removeAllTiles();

		this._tileZoom = undefined;
	},

	_retainParent: function (x, y, z, minZoom) {
		var x2 = Math.floor(x / 2),
		    y2 = Math.floor(y / 2),
		    z2 = z - 1,
		    coords2 = new Point(+x2, +y2);
		coords2.z = +z2;

		var key = this._tileCoordsToKey(coords2),
		    tile = this._tiles[key];

		if (tile && tile.active) {
			tile.retain = true;
			return true;

		} else if (tile && tile.loaded) {
			tile.retain = true;
		}

		if (z2 > minZoom) {
			return this._retainParent(x2, y2, z2, minZoom);
		}

		return false;
	},

	_retainChildren: function (x, y, z, maxZoom) {

		for (var i = 2 * x; i < 2 * x + 2; i++) {
			for (var j = 2 * y; j < 2 * y + 2; j++) {

				var coords = new Point(i, j);
				coords.z = z + 1;

				var key = this._tileCoordsToKey(coords),
				    tile = this._tiles[key];

				if (tile && tile.active) {
					tile.retain = true;
					continue;

				} else if (tile && tile.loaded) {
					tile.retain = true;
				}

				if (z + 1 < maxZoom) {
					this._retainChildren(i, j, z + 1, maxZoom);
				}
			}
		}
	},

	_resetView: function (e) {
		var animating = e && (e.pinch || e.flyTo);
		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
	},

	_animateZoom: function (e) {
		this._setView(e.center, e.zoom, true, e.noUpdate);
	},

	_clampZoom: function (zoom) {
		var options = this.options;

		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
			return options.minNativeZoom;
		}

		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
			return options.maxNativeZoom;
		}

		return zoom;
	},

	_setView: function (center, zoom, noPrune, noUpdate) {
		var tileZoom = this._clampZoom(Math.round(zoom));
		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
			tileZoom = undefined;
		}

		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

		if (!noUpdate || tileZoomChanged) {

			this._tileZoom = tileZoom;

			if (this._abortLoading) {
				this._abortLoading();
			}

			this._updateLevels();
			this._resetGrid();

			if (tileZoom !== undefined) {
				this._update(center);
			}

			if (!noPrune) {
				this._pruneTiles();
			}

			// Flag to prevent _updateOpacity from pruning tiles during
			// a zoom anim or a pinch gesture
			this._noPrune = !!noPrune;
		}

		this._setZoomTransforms(center, zoom);
	},

	_setZoomTransforms: function (center, zoom) {
		for (var i in this._levels) {
			this._setZoomTransform(this._levels[i], center, zoom);
		}
	},

	_setZoomTransform: function (level, center, zoom) {
		var scale = this._map.getZoomScale(zoom, level.zoom),
		    translate = level.origin.multiplyBy(scale)
		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

		if (any3d) {
			setTransform(level.el, translate, scale);
		} else {
			setPosition(level.el, translate);
		}
	},

	_resetGrid: function () {
		var map = this._map,
		    crs = map.options.crs,
		    tileSize = this._tileSize = this.getTileSize(),
		    tileZoom = this._tileZoom;

		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
		if (bounds) {
			this._globalTileRange = this._pxBoundsToTileRange(bounds);
		}

		this._wrapX = crs.wrapLng && !this.options.noWrap && [
			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
		];
		this._wrapY = crs.wrapLat && !this.options.noWrap && [
			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
		];
	},

	_onMoveEnd: function () {
		if (!this._map || this._map._animatingZoom) { return; }

		this._update();
	},

	_getTiledPixelBounds: function (center) {
		var map = this._map,
		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
		    scale = map.getZoomScale(mapZoom, this._tileZoom),
		    pixelCenter = map.project(center, this._tileZoom).floor(),
		    halfSize = map.getSize().divideBy(scale * 2);

		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
	},

	// Private method to load tiles in the grid's active zoom level according to map bounds
	_update: function (center) {
		var map = this._map;
		if (!map) { return; }
		var zoom = this._clampZoom(map.getZoom());

		if (center === undefined) { center = map.getCenter(); }
		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

		var pixelBounds = this._getTiledPixelBounds(center),
		    tileRange = this._pxBoundsToTileRange(pixelBounds),
		    tileCenter = tileRange.getCenter(),
		    queue = [],
		    margin = this.options.keepBuffer,
		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
		                              tileRange.getTopRight().add([margin, -margin]));

		// Sanity check: panic if the tile range contains Infinity somewhere.
		if (!(isFinite(tileRange.min.x) &&
		      isFinite(tileRange.min.y) &&
		      isFinite(tileRange.max.x) &&
		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

		for (var key in this._tiles) {
			var c = this._tiles[key].coords;
			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
				this._tiles[key].current = false;
			}
		}

		// _update just loads more tiles. If the tile zoom level differs too much
		// from the map's, let _setView reset levels and prune old tiles.
		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

		// create a queue of coordinates to load tiles from
		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
				var coords = new Point(i, j);
				coords.z = this._tileZoom;

				if (!this._isValidTile(coords)) { continue; }

				var tile = this._tiles[this._tileCoordsToKey(coords)];
				if (tile) {
					tile.current = true;
				} else {
					queue.push(coords);
				}
			}
		}

		// sort tile queue to load tiles in order of their distance to center
		queue.sort(function (a, b) {
			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
		});

		if (queue.length !== 0) {
			// if it's the first batch of tiles to load
			if (!this._loading) {
				this._loading = true;
				// @event loading: Event
				// Fired when the grid layer starts loading tiles.
				this.fire('loading');
			}

			// create DOM fragment to append tiles in one batch
			var fragment = document.createDocumentFragment();

			for (i = 0; i < queue.length; i++) {
				this._addTile(queue[i], fragment);
			}

			this._level.el.appendChild(fragment);
		}
	},

	_isValidTile: function (coords) {
		var crs = this._map.options.crs;

		if (!crs.infinite) {
			// don't load tile if it's out of bounds and not wrapped
			var bounds = this._globalTileRange;
			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
		}

		if (!this.options.bounds) { return true; }

		// don't load tile if it doesn't intersect the bounds in options
		var tileBounds = this._tileCoordsToBounds(coords);
		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
	},

	_keyToBounds: function (key) {
		return this._tileCoordsToBounds(this._keyToTileCoords(key));
	},

	_tileCoordsToNwSe: function (coords) {
		var map = this._map,
		    tileSize = this.getTileSize(),
		    nwPoint = coords.scaleBy(tileSize),
		    sePoint = nwPoint.add(tileSize),
		    nw = map.unproject(nwPoint, coords.z),
		    se = map.unproject(sePoint, coords.z);
		return [nw, se];
	},

	// converts tile coordinates to its geographical bounds
	_tileCoordsToBounds: function (coords) {
		var bp = this._tileCoordsToNwSe(coords),
		    bounds = new LatLngBounds(bp[0], bp[1]);

		if (!this.options.noWrap) {
			bounds = this._map.wrapLatLngBounds(bounds);
		}
		return bounds;
	},
	// converts tile coordinates to key for the tile cache
	_tileCoordsToKey: function (coords) {
		return coords.x + ':' + coords.y + ':' + coords.z;
	},

	// converts tile cache key to coordinates
	_keyToTileCoords: function (key) {
		var k = key.split(':'),
		    coords = new Point(+k[0], +k[1]);
		coords.z = +k[2];
		return coords;
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		remove(tile.el);

		delete this._tiles[key];

		// @event tileunload: TileEvent
		// Fired when a tile is removed (e.g. when a tile goes off the screen).
		this.fire('tileunload', {
			tile: tile.el,
			coords: this._keyToTileCoords(key)
		});
	},

	_initTile: function (tile) {
		addClass(tile, 'leaflet-tile');

		var tileSize = this.getTileSize();
		tile.style.width = tileSize.x + 'px';
		tile.style.height = tileSize.y + 'px';

		tile.onselectstart = falseFn;
		tile.onmousemove = falseFn;

		// update opacity on tiles in IE7-8 because of filter inheritance problems
		if (ielt9 && this.options.opacity < 1) {
			setOpacity(tile, this.options.opacity);
		}

		// without this hack, tiles disappear after zoom on Chrome for Android
		// https://github.com/Leaflet/Leaflet/issues/2078
		if (android && !android23) {
			tile.style.WebkitBackfaceVisibility = 'hidden';
		}
	},

	_addTile: function (coords, container) {
		var tilePos = this._getTilePos(coords),
		    key = this._tileCoordsToKey(coords);

		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

		this._initTile(tile);

		// if createTile is defined with a second argument ("done" callback),
		// we know that tile is async and will be ready later; otherwise
		if (this.createTile.length < 2) {
			// mark tile as ready, but delay one frame for opacity animation to happen
			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
		}

		setPosition(tile, tilePos);

		// save tile in cache
		this._tiles[key] = {
			el: tile,
			coords: coords,
			current: true
		};

		container.appendChild(tile);
		// @event tileloadstart: TileEvent
		// Fired when a tile is requested and starts loading.
		this.fire('tileloadstart', {
			tile: tile,
			coords: coords
		});
	},

	_tileReady: function (coords, err, tile) {
		if (err) {
			// @event tileerror: TileErrorEvent
			// Fired when there is an error loading a tile.
			this.fire('tileerror', {
				error: err,
				tile: tile,
				coords: coords
			});
		}

		var key = this._tileCoordsToKey(coords);

		tile = this._tiles[key];
		if (!tile) { return; }

		tile.loaded = +new Date();
		if (this._map._fadeAnimated) {
			setOpacity(tile.el, 0);
			cancelAnimFrame(this._fadeFrame);
			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
		} else {
			tile.active = true;
			this._pruneTiles();
		}

		if (!err) {
			addClass(tile.el, 'leaflet-tile-loaded');

			// @event tileload: TileEvent
			// Fired when a tile loads.
			this.fire('tileload', {
				tile: tile.el,
				coords: coords
			});
		}

		if (this._noTilesToLoad()) {
			this._loading = false;
			// @event load: Event
			// Fired when the grid layer loaded all visible tiles.
			this.fire('load');

			if (ielt9 || !this._map._fadeAnimated) {
				requestAnimFrame(this._pruneTiles, this);
			} else {
				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
				// to trigger a pruning.
				setTimeout(bind(this._pruneTiles, this), 250);
			}
		}
	},

	_getTilePos: function (coords) {
		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
	},

	_wrapCoords: function (coords) {
		var newCoords = new Point(
			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
		newCoords.z = coords.z;
		return newCoords;
	},

	_pxBoundsToTileRange: function (bounds) {
		var tileSize = this.getTileSize();
		return new Bounds(
			bounds.min.unscaleBy(tileSize).floor(),
			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
	},

	_noTilesToLoad: function () {
		for (var key in this._tiles) {
			if (!this._tiles[key].loaded) { return false; }
		}
		return true;
	}
});

// @factory L.gridLayer(options?: GridLayer options)
// Creates a new instance of GridLayer with the supplied options.
function gridLayer(options) {
	return new GridLayer(options);
}

/*
 * @class TileLayer
 * @inherits GridLayer
 * @aka L.TileLayer
 * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
 *
 * @example
 *
 * ```js
 * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
 * ```
 *
 * @section URL template
 * @example
 *
 * A string of the following form:
 *
 * ```
 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
 * ```
 *
 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
 *
 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
 *
 * ```
 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
 * ```
 */


var TileLayer = GridLayer.extend({

	// @section
	// @aka TileLayer options
	options: {
		// @option minZoom: Number = 0
		// The minimum zoom level down to which this layer will be displayed (inclusive).
		minZoom: 0,

		// @option maxZoom: Number = 18
		// The maximum zoom level up to which this layer will be displayed (inclusive).
		maxZoom: 18,

		// @option subdomains: String|String[] = 'abc'
		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
		subdomains: 'abc',

		// @option errorTileUrl: String = ''
		// URL to the tile image to show in place of the tile that failed to load.
		errorTileUrl: '',

		// @option zoomOffset: Number = 0
		// The zoom number used in tile URLs will be offset with this value.
		zoomOffset: 0,

		// @option tms: Boolean = false
		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
		tms: false,

		// @option zoomReverse: Boolean = false
		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
		zoomReverse: false,

		// @option detectRetina: Boolean = false
		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
		detectRetina: false,

		// @option crossOrigin: Boolean|String = false
		// Whether the crossOrigin attribute will be added to the tiles.
		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
		crossOrigin: false
	},

	initialize: function (url, options) {

		this._url = url;

		options = setOptions(this, options);

		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);

			if (!options.zoomReverse) {
				options.zoomOffset++;
				options.maxZoom--;
			} else {
				options.zoomOffset--;
				options.minZoom++;
			}

			options.minZoom = Math.max(0, options.minZoom);
		}

		if (typeof options.subdomains === 'string') {
			options.subdomains = options.subdomains.split('');
		}

		// for https://github.com/Leaflet/Leaflet/issues/137
		if (!android) {
			this.on('tileunload', this._onTileRemove);
		}
	},

	// @method setUrl(url: String, noRedraw?: Boolean): this
	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
	// If the URL does not change, the layer will not be redrawn unless
	// the noRedraw parameter is set to false.
	setUrl: function (url, noRedraw) {
		if (this._url === url && noRedraw === undefined) {
			noRedraw = true;
		}

		this._url = url;

		if (!noRedraw) {
			this.redraw();
		}
		return this;
	},

	// @method createTile(coords: Object, done?: Function): HTMLElement
	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
	// callback is called when the tile has been loaded.
	createTile: function (coords, done) {
		var tile = document.createElement('img');

		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
		on(tile, 'error', bind(this._tileOnError, this, done, tile));

		if (this.options.crossOrigin || this.options.crossOrigin === '') {
			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
		}

		/*
		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
		 http://www.w3.org/TR/WCAG20-TECHS/H67
		*/
		tile.alt = '';

		/*
		 Set role="presentation" to force screen readers to ignore this
		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
		*/
		tile.setAttribute('role', 'presentation');

		tile.src = this.getTileUrl(coords);

		return tile;
	},

	// @section Extension methods
	// @uninheritable
	// Layers extending `TileLayer` might reimplement the following method.
	// @method getTileUrl(coords: Object): String
	// Called only internally, returns the URL for a tile given its coordinates.
	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
	getTileUrl: function (coords) {
		var data = {
			r: retina ? '@2x' : '',
			s: this._getSubdomain(coords),
			x: coords.x,
			y: coords.y,
			z: this._getZoomForUrl()
		};
		if (this._map && !this._map.options.crs.infinite) {
			var invertedY = this._globalTileRange.max.y - coords.y;
			if (this.options.tms) {
				data['y'] = invertedY;
			}
			data['-y'] = invertedY;
		}

		return template(this._url, extend(data, this.options));
	},

	_tileOnLoad: function (done, tile) {
		// For https://github.com/Leaflet/Leaflet/issues/3332
		if (ielt9) {
			setTimeout(bind(done, this, null, tile), 0);
		} else {
			done(null, tile);
		}
	},

	_tileOnError: function (done, tile, e) {
		var errorUrl = this.options.errorTileUrl;
		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
			tile.src = errorUrl;
		}
		done(e, tile);
	},

	_onTileRemove: function (e) {
		e.tile.onload = null;
	},

	_getZoomForUrl: function () {
		var zoom = this._tileZoom,
		maxZoom = this.options.maxZoom,
		zoomReverse = this.options.zoomReverse,
		zoomOffset = this.options.zoomOffset;

		if (zoomReverse) {
			zoom = maxZoom - zoom;
		}

		return zoom + zoomOffset;
	},

	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},

	// stops loading all tiles in the background layer
	_abortLoading: function () {
		var i, tile;
		for (i in this._tiles) {
			if (this._tiles[i].coords.z !== this._tileZoom) {
				tile = this._tiles[i].el;

				tile.onload = falseFn;
				tile.onerror = falseFn;

				if (!tile.complete) {
					tile.src = emptyImageUrl;
					remove(tile);
					delete this._tiles[i];
				}
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		if (!tile) { return; }

		// Cancels any pending http requests associated with the tile
		// unless we're on Android's stock browser,
		// see https://github.com/Leaflet/Leaflet/issues/137
		if (!androidStock) {
			tile.el.setAttribute('src', emptyImageUrl);
		}

		return GridLayer.prototype._removeTile.call(this, key);
	},

	_tileReady: function (coords, err, tile) {
		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
			return;
		}

		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
	}
});


// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
// Instantiates a tile layer object given a `URL template` and optionally an options object.

function tileLayer(url, options) {
	return new TileLayer(url, options);
}

/*
 * @class TileLayer.WMS
 * @inherits TileLayer
 * @aka L.TileLayer.WMS
 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
 *
 * @example
 *
 * ```js
 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
 * 	layers: 'nexrad-n0r-900913',
 * 	format: 'image/png',
 * 	transparent: true,
 * 	attribution: "Weather data © 2012 IEM Nexrad"
 * });
 * ```
 */

var TileLayerWMS = TileLayer.extend({

	// @section
	// @aka TileLayer.WMS options
	// If any custom options not documented here are used, they will be sent to the
	// WMS server as extra parameters in each request URL. This can be useful for
	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
	defaultWmsParams: {
		service: 'WMS',
		request: 'GetMap',

		// @option layers: String = ''
		// **(required)** Comma-separated list of WMS layers to show.
		layers: '',

		// @option styles: String = ''
		// Comma-separated list of WMS styles.
		styles: '',

		// @option format: String = 'image/jpeg'
		// WMS image format (use `'image/png'` for layers with transparency).
		format: 'image/jpeg',

		// @option transparent: Boolean = false
		// If `true`, the WMS service will return images with transparency.
		transparent: false,

		// @option version: String = '1.1.1'
		// Version of the WMS service to use
		version: '1.1.1'
	},

	options: {
		// @option crs: CRS = null
		// Coordinate Reference System to use for the WMS requests, defaults to
		// map CRS. Don't change this if you're not sure what it means.
		crs: null,

		// @option uppercase: Boolean = false
		// If `true`, WMS request parameter keys will be uppercase.
		uppercase: false
	},

	initialize: function (url, options) {

		this._url = url;

		var wmsParams = extend({}, this.defaultWmsParams);

		// all keys that are not TileLayer options go to WMS params
		for (var i in options) {
			if (!(i in this.options)) {
				wmsParams[i] = options[i];
			}
		}

		options = setOptions(this, options);

		var realRetina = options.detectRetina && retina ? 2 : 1;
		var tileSize = this.getTileSize();
		wmsParams.width = tileSize.x * realRetina;
		wmsParams.height = tileSize.y * realRetina;

		this.wmsParams = wmsParams;
	},

	onAdd: function (map) {

		this._crs = this.options.crs || map.options.crs;
		this._wmsVersion = parseFloat(this.wmsParams.version);

		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
		this.wmsParams[projectionKey] = this._crs.code;

		TileLayer.prototype.onAdd.call(this, map);
	},

	getTileUrl: function (coords) {

		var tileBounds = this._tileCoordsToNwSe(coords),
		    crs = this._crs,
		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
		    min = bounds.min,
		    max = bounds.max,
		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
		    [min.y, min.x, max.y, max.x] :
		    [min.x, min.y, max.x, max.y]).join(','),
		    url = TileLayer.prototype.getTileUrl.call(this, coords);
		return url +
			getParamString(this.wmsParams, url, this.options.uppercase) +
			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
	},

	// @method setParams(params: Object, noRedraw?: Boolean): this
	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
	setParams: function (params, noRedraw) {

		extend(this.wmsParams, params);

		if (!noRedraw) {
			this.redraw();
		}

		return this;
	}
});


// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
function tileLayerWMS(url, options) {
	return new TileLayerWMS(url, options);
}

TileLayer.WMS = TileLayerWMS;
tileLayer.wms = tileLayerWMS;

/*
 * @class Renderer
 * @inherits Layer
 * @aka L.Renderer
 *
 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
 * DOM container of the renderer, its bounds, and its zoom animation.
 *
 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
 * itself can be added or removed to the map. All paths use a renderer, which can
 * be implicit (the map will decide the type of renderer and use it automatically)
 * or explicit (using the [`renderer`](#path-renderer) option of the path).
 *
 * Do not use this class directly, use `SVG` and `Canvas` instead.
 *
 * @event update: Event
 * Fired when the renderer updates its bounds, center and zoom, for example when
 * its map has moved
 */

var Renderer = Layer.extend({

	// @section
	// @aka Renderer options
	options: {
		// @option padding: Number = 0.1
		// How much to extend the clip area around the map view (relative to its size)
		// e.g. 0.1 would be 10% of map view in each direction
		padding: 0.1,

		// @option tolerance: Number = 0
		// How much to extend click tolerance round a path/object on the map
		tolerance : 0
	},

	initialize: function (options) {
		setOptions(this, options);
		stamp(this);
		this._layers = this._layers || {};
	},

	onAdd: function () {
		if (!this._container) {
			this._initContainer(); // defined by renderer implementations

			if (this._zoomAnimated) {
				addClass(this._container, 'leaflet-zoom-animated');
			}
		}

		this.getPane().appendChild(this._container);
		this._update();
		this.on('update', this._updatePaths, this);
	},

	onRemove: function () {
		this.off('update', this._updatePaths, this);
		this._destroyContainer();
	},

	getEvents: function () {
		var events = {
			viewreset: this._reset,
			zoom: this._onZoom,
			moveend: this._update,
			zoomend: this._onZoomEnd
		};
		if (this._zoomAnimated) {
			events.zoomanim = this._onAnimZoom;
		}
		return events;
	},

	_onAnimZoom: function (ev) {
		this._updateTransform(ev.center, ev.zoom);
	},

	_onZoom: function () {
		this._updateTransform(this._map.getCenter(), this._map.getZoom());
	},

	_updateTransform: function (center, zoom) {
		var scale = this._map.getZoomScale(zoom, this._zoom),
		    position = getPosition(this._container),
		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
		    currentCenterPoint = this._map.project(this._center, zoom),
		    destCenterPoint = this._map.project(center, zoom),
		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

		if (any3d) {
			setTransform(this._container, topLeftOffset, scale);
		} else {
			setPosition(this._container, topLeftOffset);
		}
	},

	_reset: function () {
		this._update();
		this._updateTransform(this._center, this._zoom);

		for (var id in this._layers) {
			this._layers[id]._reset();
		}
	},

	_onZoomEnd: function () {
		for (var id in this._layers) {
			this._layers[id]._project();
		}
	},

	_updatePaths: function () {
		for (var id in this._layers) {
			this._layers[id]._update();
		}
	},

	_update: function () {
		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
		// Subclasses are responsible of firing the 'update' event.
		var p = this.options.padding,
		    size = this._map.getSize(),
		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

		this._center = this._map.getCenter();
		this._zoom = this._map.getZoom();
	}
});

/*
 * @class Canvas
 * @inherits Renderer
 * @aka L.Canvas
 *
 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
 * available in all web browsers, notably IE8, and overlapping geometries might
 * not display properly in some edge cases.
 *
 * @example
 *
 * Use Canvas by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.canvas()
 * });
 * ```
 *
 * Use a Canvas renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.canvas({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var Canvas = Renderer.extend({
	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.viewprereset = this._onViewPreReset;
		return events;
	},

	_onViewPreReset: function () {
		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
		this._postponeUpdatePaths = true;
	},

	onAdd: function () {
		Renderer.prototype.onAdd.call(this);

		// Redraw vectors since canvas is cleared upon removal,
		// in case of removing the renderer itself from the map.
		this._draw();
	},

	_initContainer: function () {
		var container = this._container = document.createElement('canvas');

		on(container, 'mousemove', this._onMouseMove, this);
		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
		on(container, 'mouseout', this._handleMouseOut, this);

		this._ctx = container.getContext('2d');
	},

	_destroyContainer: function () {
		cancelAnimFrame(this._redrawRequest);
		delete this._ctx;
		remove(this._container);
		off(this._container);
		delete this._container;
	},

	_updatePaths: function () {
		if (this._postponeUpdatePaths) { return; }

		var layer;
		this._redrawBounds = null;
		for (var id in this._layers) {
			layer = this._layers[id];
			layer._update();
		}
		this._redraw();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    container = this._container,
		    size = b.getSize(),
		    m = retina ? 2 : 1;

		setPosition(container, b.min);

		// set canvas size (also clearing it); use double size on retina
		container.width = m * size.x;
		container.height = m * size.y;
		container.style.width = size.x + 'px';
		container.style.height = size.y + 'px';

		if (retina) {
			this._ctx.scale(2, 2);
		}

		// translate so we use the same path coordinates after canvas element moves
		this._ctx.translate(-b.min.x, -b.min.y);

		// Tell paths to redraw themselves
		this.fire('update');
	},

	_reset: function () {
		Renderer.prototype._reset.call(this);

		if (this._postponeUpdatePaths) {
			this._postponeUpdatePaths = false;
			this._updatePaths();
		}
	},

	_initPath: function (layer) {
		this._updateDashArray(layer);
		this._layers[stamp(layer)] = layer;

		var order = layer._order = {
			layer: layer,
			prev: this._drawLast,
			next: null
		};
		if (this._drawLast) { this._drawLast.next = order; }
		this._drawLast = order;
		this._drawFirst = this._drawFirst || this._drawLast;
	},

	_addPath: function (layer) {
		this._requestRedraw(layer);
	},

	_removePath: function (layer) {
		var order = layer._order;
		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			this._drawLast = prev;
		}
		if (prev) {
			prev.next = next;
		} else {
			this._drawFirst = next;
		}

		delete layer._order;

		delete this._layers[stamp(layer)];

		this._requestRedraw(layer);
	},

	_updatePath: function (layer) {
		// Redraw the union of the layer's old pixel
		// bounds and the new pixel bounds.
		this._extendRedrawBounds(layer);
		layer._project();
		layer._update();
		// The redraw will extend the redraw bounds
		// with the new pixel bounds.
		this._requestRedraw(layer);
	},

	_updateStyle: function (layer) {
		this._updateDashArray(layer);
		this._requestRedraw(layer);
	},

	_updateDashArray: function (layer) {
		if (typeof layer.options.dashArray === 'string') {
			var parts = layer.options.dashArray.split(/[, ]+/),
			    dashArray = [],
			    dashValue,
			    i;
			for (i = 0; i < parts.length; i++) {
				dashValue = Number(parts[i]);
				// Ignore dash array containing invalid lengths
				if (isNaN(dashValue)) { return; }
				dashArray.push(dashValue);
			}
			layer.options._dashArray = dashArray;
		} else {
			layer.options._dashArray = layer.options.dashArray;
		}
	},

	_requestRedraw: function (layer) {
		if (!this._map) { return; }

		this._extendRedrawBounds(layer);
		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
	},

	_extendRedrawBounds: function (layer) {
		if (layer._pxBounds) {
			var padding = (layer.options.weight || 0) + 1;
			this._redrawBounds = this._redrawBounds || new Bounds();
			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
		}
	},

	_redraw: function () {
		this._redrawRequest = null;

		if (this._redrawBounds) {
			this._redrawBounds.min._floor();
			this._redrawBounds.max._ceil();
		}

		this._clear(); // clear layers in redraw bounds
		this._draw(); // draw layers

		this._redrawBounds = null;
	},

	_clear: function () {
		var bounds = this._redrawBounds;
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
		} else {
			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
		}
	},

	_draw: function () {
		var layer, bounds = this._redrawBounds;
		this._ctx.save();
		if (bounds) {
			var size = bounds.getSize();
			this._ctx.beginPath();
			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
			this._ctx.clip();
		}

		this._drawing = true;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
				layer._updatePath();
			}
		}

		this._drawing = false;

		this._ctx.restore();  // Restore state before clipping.
	},

	_updatePoly: function (layer, closed) {
		if (!this._drawing) { return; }

		var i, j, len2, p,
		    parts = layer._parts,
		    len = parts.length,
		    ctx = this._ctx;

		if (!len) { return; }

		ctx.beginPath();

		for (i = 0; i < len; i++) {
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				p = parts[i][j];
				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
			}
			if (closed) {
				ctx.closePath();
			}
		}

		this._fillStroke(ctx, layer);

		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
	},

	_updateCircle: function (layer) {

		if (!this._drawing || layer._empty()) { return; }

		var p = layer._point,
		    ctx = this._ctx,
		    r = Math.max(Math.round(layer._radius), 1),
		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

		if (s !== 1) {
			ctx.save();
			ctx.scale(1, s);
		}

		ctx.beginPath();
		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

		if (s !== 1) {
			ctx.restore();
		}

		this._fillStroke(ctx, layer);
	},

	_fillStroke: function (ctx, layer) {
		var options = layer.options;

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fillStyle = options.fillColor || options.color;
			ctx.fill(options.fillRule || 'evenodd');
		}

		if (options.stroke && options.weight !== 0) {
			if (ctx.setLineDash) {
				ctx.setLineDash(layer.options && layer.options._dashArray || []);
			}
			ctx.globalAlpha = options.opacity;
			ctx.lineWidth = options.weight;
			ctx.strokeStyle = options.color;
			ctx.lineCap = options.lineCap;
			ctx.lineJoin = options.lineJoin;
			ctx.stroke();
		}
	},

	// Canvas obviously doesn't have mouse events for individual drawn objects,
	// so we emulate that by calculating what's under the mouse on mousemove/click manually

	_onClick: function (e) {
		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
				clickedLayer = layer;
			}
		}
		if (clickedLayer)  {
			fakeStop(e);
			this._fireEvent([clickedLayer], e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

		var point = this._map.mouseEventToLayerPoint(e);
		this._handleMouseHover(e, point);
	},


	_handleMouseOut: function (e) {
		var layer = this._hoveredLayer;
		if (layer) {
			// if we're leaving the layer, fire mouseout
			removeClass(this._container, 'leaflet-interactive');
			this._fireEvent([layer], e, 'mouseout');
			this._hoveredLayer = null;
			this._mouseHoverThrottled = false;
		}
	},

	_handleMouseHover: function (e, point) {
		if (this._mouseHoverThrottled) {
			return;
		}

		var layer, candidateHoveredLayer;

		for (var order = this._drawFirst; order; order = order.next) {
			layer = order.layer;
			if (layer.options.interactive && layer._containsPoint(point)) {
				candidateHoveredLayer = layer;
			}
		}

		if (candidateHoveredLayer !== this._hoveredLayer) {
			this._handleMouseOut(e);

			if (candidateHoveredLayer) {
				addClass(this._container, 'leaflet-interactive'); // change cursor
				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
				this._hoveredLayer = candidateHoveredLayer;
			}
		}

		if (this._hoveredLayer) {
			this._fireEvent([this._hoveredLayer], e);
		}

		this._mouseHoverThrottled = true;
		setTimeout(L.bind(function () {
			this._mouseHoverThrottled = false;
		}, this), 32);
	},

	_fireEvent: function (layers, e, type) {
		this._map._fireDOMEvent(e, type || e.type, layers);
	},

	_bringToFront: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (next) {
			next.prev = prev;
		} else {
			// Already last
			return;
		}
		if (prev) {
			prev.next = next;
		} else if (next) {
			// Update first entry unless this is the
			// single entry
			this._drawFirst = next;
		}

		order.prev = this._drawLast;
		this._drawLast.next = order;

		order.next = null;
		this._drawLast = order;

		this._requestRedraw(layer);
	},

	_bringToBack: function (layer) {
		var order = layer._order;

		if (!order) { return; }

		var next = order.next;
		var prev = order.prev;

		if (prev) {
			prev.next = next;
		} else {
			// Already first
			return;
		}
		if (next) {
			next.prev = prev;
		} else if (prev) {
			// Update last entry unless this is the
			// single entry
			this._drawLast = prev;
		}

		order.prev = null;

		order.next = this._drawFirst;
		this._drawFirst.prev = order;
		this._drawFirst = order;

		this._requestRedraw(layer);
	}
});

// @factory L.canvas(options?: Renderer options)
// Creates a Canvas renderer with the given options.
function canvas$1(options) {
	return canvas ? new Canvas(options) : null;
}

/*
 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
 */


var vmlCreate = (function () {
	try {
		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
		return function (name) {
			return document.createElement('<lvml:' + name + ' class="lvml">');
		};
	} catch (e) {
		return function (name) {
			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
		};
	}
})();


/*
 * @class SVG
 *
 *
 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
 * with old versions of Internet Explorer.
 */

// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
var vmlMixin = {

	_initContainer: function () {
		this._container = create$1('div', 'leaflet-vml-container');
	},

	_update: function () {
		if (this._map._animatingZoom) { return; }
		Renderer.prototype._update.call(this);
		this.fire('update');
	},

	_initPath: function (layer) {
		var container = layer._container = vmlCreate('shape');

		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

		container.coordsize = '1 1';

		layer._path = vmlCreate('path');
		container.appendChild(layer._path);

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		var container = layer._container;
		this._container.appendChild(container);

		if (layer.options.interactive) {
			layer.addInteractiveTarget(container);
		}
	},

	_removePath: function (layer) {
		var container = layer._container;
		remove(container);
		layer.removeInteractiveTarget(container);
		delete this._layers[stamp(layer)];
	},

	_updateStyle: function (layer) {
		var stroke = layer._stroke,
		    fill = layer._fill,
		    options = layer.options,
		    container = layer._container;

		container.stroked = !!options.stroke;
		container.filled = !!options.fill;

		if (options.stroke) {
			if (!stroke) {
				stroke = layer._stroke = vmlCreate('stroke');
			}
			container.appendChild(stroke);
			stroke.weight = options.weight + 'px';
			stroke.color = options.color;
			stroke.opacity = options.opacity;

			if (options.dashArray) {
				stroke.dashStyle = isArray(options.dashArray) ?
				    options.dashArray.join(' ') :
				    options.dashArray.replace(/( *, *)/g, ' ');
			} else {
				stroke.dashStyle = '';
			}
			stroke.endcap = options.lineCap.replace('butt', 'flat');
			stroke.joinstyle = options.lineJoin;

		} else if (stroke) {
			container.removeChild(stroke);
			layer._stroke = null;
		}

		if (options.fill) {
			if (!fill) {
				fill = layer._fill = vmlCreate('fill');
			}
			container.appendChild(fill);
			fill.color = options.fillColor || options.color;
			fill.opacity = options.fillOpacity;

		} else if (fill) {
			container.removeChild(fill);
			layer._fill = null;
		}
	},

	_updateCircle: function (layer) {
		var p = layer._point.round(),
		    r = Math.round(layer._radius),
		    r2 = Math.round(layer._radiusY || r);

		this._setPath(layer, layer._empty() ? 'M0 0' :
			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
	},

	_setPath: function (layer, path) {
		layer._path.v = path;
	},

	_bringToFront: function (layer) {
		toFront(layer._container);
	},

	_bringToBack: function (layer) {
		toBack(layer._container);
	}
};

var create$2 = vml ? vmlCreate : svgCreate;

/*
 * @class SVG
 * @inherits Renderer
 * @aka L.SVG
 *
 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
 * Inherits `Renderer`.
 *
 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
 * available in all web browsers, notably Android 2.x and 3.x.
 *
 * Although SVG is not available on IE7 and IE8, these browsers support
 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
 * (a now deprecated technology), and the SVG renderer will fall back to VML in
 * this case.
 *
 * @example
 *
 * Use SVG by default for all paths in the map:
 *
 * ```js
 * var map = L.map('map', {
 * 	renderer: L.svg()
 * });
 * ```
 *
 * Use a SVG renderer with extra padding for specific vector geometries:
 *
 * ```js
 * var map = L.map('map');
 * var myRenderer = L.svg({ padding: 0.5 });
 * var line = L.polyline( coordinates, { renderer: myRenderer } );
 * var circle = L.circle( center, { renderer: myRenderer } );
 * ```
 */

var SVG = Renderer.extend({

	getEvents: function () {
		var events = Renderer.prototype.getEvents.call(this);
		events.zoomstart = this._onZoomStart;
		return events;
	},

	_initContainer: function () {
		this._container = create$2('svg');

		// makes it possible to click through svg root; we'll reset it back in individual paths
		this._container.setAttribute('pointer-events', 'none');

		this._rootGroup = create$2('g');
		this._container.appendChild(this._rootGroup);
	},

	_destroyContainer: function () {
		remove(this._container);
		off(this._container);
		delete this._container;
		delete this._rootGroup;
		delete this._svgSize;
	},

	_onZoomStart: function () {
		// Drag-then-pinch interactions might mess up the center and zoom.
		// In this case, the easiest way to prevent this is re-do the renderer
		//   bounds and padding when the zooming starts.
		this._update();
	},

	_update: function () {
		if (this._map._animatingZoom && this._bounds) { return; }

		Renderer.prototype._update.call(this);

		var b = this._bounds,
		    size = b.getSize(),
		    container = this._container;

		// set size of svg-container if changed
		if (!this._svgSize || !this._svgSize.equals(size)) {
			this._svgSize = size;
			container.setAttribute('width', size.x);
			container.setAttribute('height', size.y);
		}

		// movement: update container viewBox so that we don't have to change coordinates of individual layers
		setPosition(container, b.min);
		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

		this.fire('update');
	},

	// methods below are called by vector layers implementations

	_initPath: function (layer) {
		var path = layer._path = create$2('path');

		// @namespace Path
		// @option className: String = null
		// Custom class name set on an element. Only for SVG renderer.
		if (layer.options.className) {
			addClass(path, layer.options.className);
		}

		if (layer.options.interactive) {
			addClass(path, 'leaflet-interactive');
		}

		this._updateStyle(layer);
		this._layers[stamp(layer)] = layer;
	},

	_addPath: function (layer) {
		if (!this._rootGroup) { this._initContainer(); }
		this._rootGroup.appendChild(layer._path);
		layer.addInteractiveTarget(layer._path);
	},

	_removePath: function (layer) {
		remove(layer._path);
		layer.removeInteractiveTarget(layer._path);
		delete this._layers[stamp(layer)];
	},

	_updatePath: function (layer) {
		layer._project();
		layer._update();
	},

	_updateStyle: function (layer) {
		var path = layer._path,
		    options = layer.options;

		if (!path) { return; }

		if (options.stroke) {
			path.setAttribute('stroke', options.color);
			path.setAttribute('stroke-opacity', options.opacity);
			path.setAttribute('stroke-width', options.weight);
			path.setAttribute('stroke-linecap', options.lineCap);
			path.setAttribute('stroke-linejoin', options.lineJoin);

			if (options.dashArray) {
				path.setAttribute('stroke-dasharray', options.dashArray);
			} else {
				path.removeAttribute('stroke-dasharray');
			}

			if (options.dashOffset) {
				path.setAttribute('stroke-dashoffset', options.dashOffset);
			} else {
				path.removeAttribute('stroke-dashoffset');
			}
		} else {
			path.setAttribute('stroke', 'none');
		}

		if (options.fill) {
			path.setAttribute('fill', options.fillColor || options.color);
			path.setAttribute('fill-opacity', options.fillOpacity);
			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
		} else {
			path.setAttribute('fill', 'none');
		}
	},

	_updatePoly: function (layer, closed) {
		this._setPath(layer, pointsToPath(layer._parts, closed));
	},

	_updateCircle: function (layer) {
		var p = layer._point,
		    r = Math.max(Math.round(layer._radius), 1),
		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

		// drawing a circle with two half-arcs
		var d = layer._empty() ? 'M0 0' :
			'M' + (p.x - r) + ',' + p.y +
			arc + (r * 2) + ',0 ' +
			arc + (-r * 2) + ',0 ';

		this._setPath(layer, d);
	},

	_setPath: function (layer, path) {
		layer._path.setAttribute('d', path);
	},

	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
	_bringToFront: function (layer) {
		toFront(layer._path);
	},

	_bringToBack: function (layer) {
		toBack(layer._path);
	}
});

if (vml) {
	SVG.include(vmlMixin);
}

// @namespace SVG
// @factory L.svg(options?: Renderer options)
// Creates a SVG renderer with the given options.
function svg$1(options) {
	return svg || vml ? new SVG(options) : null;
}

Map.include({
	// @namespace Map; @method getRenderer(layer: Path): Renderer
	// Returns the instance of `Renderer` that should be used to render the given
	// `Path`. It will ensure that the `renderer` options of the map and paths
	// are respected, and that the renderers do exist on the map.
	getRenderer: function (layer) {
		// @namespace Path; @option renderer: Renderer
		// Use this specific instance of `Renderer` for this path. Takes
		// precedence over the map's [default renderer](#map-renderer).
		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

		if (!renderer) {
			renderer = this._renderer = this._createRenderer();
		}

		if (!this.hasLayer(renderer)) {
			this.addLayer(renderer);
		}
		return renderer;
	},

	_getPaneRenderer: function (name) {
		if (name === 'overlayPane' || name === undefined) {
			return false;
		}

		var renderer = this._paneRenderers[name];
		if (renderer === undefined) {
			renderer = this._createRenderer({pane: name});
			this._paneRenderers[name] = renderer;
		}
		return renderer;
	},

	_createRenderer: function (options) {
		// @namespace Map; @option preferCanvas: Boolean = false
		// Whether `Path`s should be rendered on a `Canvas` renderer.
		// By default, all `Path`s are rendered in a `SVG` renderer.
		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
	}
});

/*
 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
 */

/*
 * @class Rectangle
 * @aka L.Rectangle
 * @inherits Polygon
 *
 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
 *
 * @example
 *
 * ```js
 * // define rectangle geographical bounds
 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
 *
 * // create an orange rectangle
 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
 *
 * // zoom the map to the rectangle bounds
 * map.fitBounds(bounds);
 * ```
 *
 */


var Rectangle = Polygon.extend({
	initialize: function (latLngBounds, options) {
		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
	},

	// @method setBounds(latLngBounds: LatLngBounds): this
	// Redraws the rectangle with the passed bounds.
	setBounds: function (latLngBounds) {
		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
	},

	_boundsToLatLngs: function (latLngBounds) {
		latLngBounds = toLatLngBounds(latLngBounds);
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
function rectangle(latLngBounds, options) {
	return new Rectangle(latLngBounds, options);
}

SVG.create = create$2;
SVG.pointsToPath = pointsToPath;

GeoJSON.geometryToLayer = geometryToLayer;
GeoJSON.coordsToLatLng = coordsToLatLng;
GeoJSON.coordsToLatLngs = coordsToLatLngs;
GeoJSON.latLngToCoords = latLngToCoords;
GeoJSON.latLngsToCoords = latLngsToCoords;
GeoJSON.getFeature = getFeature;
GeoJSON.asFeature = asFeature;

/*
 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
 * (zoom to a selected bounding box), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option boxZoom: Boolean = true
	// Whether the map can be zoomed to a rectangular area specified by
	// dragging the mouse while pressing the shift key.
	boxZoom: true
});

var BoxZoom = Handler.extend({
	initialize: function (map) {
		this._map = map;
		this._container = map._container;
		this._pane = map._panes.overlayPane;
		this._resetStateTimeout = 0;
		map.on('unload', this._destroy, this);
	},

	addHooks: function () {
		on(this._container, 'mousedown', this._onMouseDown, this);
	},

	removeHooks: function () {
		off(this._container, 'mousedown', this._onMouseDown, this);
	},

	moved: function () {
		return this._moved;
	},

	_destroy: function () {
		remove(this._pane);
		delete this._pane;
	},

	_resetState: function () {
		this._resetStateTimeout = 0;
		this._moved = false;
	},

	_clearDeferredResetState: function () {
		if (this._resetStateTimeout !== 0) {
			clearTimeout(this._resetStateTimeout);
			this._resetStateTimeout = 0;
		}
	},

	_onMouseDown: function (e) {
		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

		// Clear the deferred resetState if it hasn't executed yet, otherwise it
		// will interrupt the interaction and orphan a box element in the container.
		this._clearDeferredResetState();
		this._resetState();

		disableTextSelection();
		disableImageDrag();

		this._startPoint = this._map.mouseEventToContainerPoint(e);

		on(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseMove: function (e) {
		if (!this._moved) {
			this._moved = true;

			this._box = create$1('div', 'leaflet-zoom-box', this._container);
			addClass(this._container, 'leaflet-crosshair');

			this._map.fire('boxzoomstart');
		}

		this._point = this._map.mouseEventToContainerPoint(e);

		var bounds = new Bounds(this._point, this._startPoint),
		    size = bounds.getSize();

		setPosition(this._box, bounds.min);

		this._box.style.width  = size.x + 'px';
		this._box.style.height = size.y + 'px';
	},

	_finish: function () {
		if (this._moved) {
			remove(this._box);
			removeClass(this._container, 'leaflet-crosshair');
		}

		enableTextSelection();
		enableImageDrag();

		off(document, {
			contextmenu: stop,
			mousemove: this._onMouseMove,
			mouseup: this._onMouseUp,
			keydown: this._onKeyDown
		}, this);
	},

	_onMouseUp: function (e) {
		if ((e.which !== 1) && (e.button !== 1)) { return; }

		this._finish();

		if (!this._moved) { return; }
		// Postpone to next JS tick so internal click event handling
		// still see it as "moved".
		this._clearDeferredResetState();
		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

		var bounds = new LatLngBounds(
		        this._map.containerPointToLatLng(this._startPoint),
		        this._map.containerPointToLatLng(this._point));

		this._map
			.fitBounds(bounds)
			.fire('boxzoomend', {boxZoomBounds: bounds});
	},

	_onKeyDown: function (e) {
		if (e.keyCode === 27) {
			this._finish();
		}
	}
});

// @section Handlers
// @property boxZoom: Handler
// Box (shift-drag with mouse) zoom handler.
Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

/*
 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
 */

// @namespace Map
// @section Interaction Options

Map.mergeOptions({
	// @option doubleClickZoom: Boolean|String = true
	// Whether the map can be zoomed in by double clicking on it and
	// zoomed out by double clicking while holding shift. If passed
	// `'center'`, double-click zoom will zoom to the center of the
	//  view regardless of where the mouse was.
	doubleClickZoom: true
});

var DoubleClickZoom = Handler.extend({
	addHooks: function () {
		this._map.on('dblclick', this._onDoubleClick, this);
	},

	removeHooks: function () {
		this._map.off('dblclick', this._onDoubleClick, this);
	},

	_onDoubleClick: function (e) {
		var map = this._map,
		    oldZoom = map.getZoom(),
		    delta = map.options.zoomDelta,
		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

		if (map.options.doubleClickZoom === 'center') {
			map.setZoom(zoom);
		} else {
			map.setZoomAround(e.containerPoint, zoom);
		}
	}
});

// @section Handlers
//
// Map properties include interaction handlers that allow you to control
// interaction behavior in runtime, enabling or disabling certain features such
// as dragging or touch zoom (see `Handler` methods). For example:
//
// ```js
// map.doubleClickZoom.disable();
// ```
//
// @property doubleClickZoom: Handler
// Double click zoom handler.
Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

/*
 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @option dragging: Boolean = true
	// Whether the map be draggable with mouse/touch or not.
	dragging: true,

	// @section Panning Inertia Options
	// @option inertia: Boolean = *
	// If enabled, panning of the map will have an inertia effect where
	// the map builds momentum while dragging and continues moving in
	// the same direction for some time. Feels especially nice on touch
	// devices. Enabled by default unless running on old Android devices.
	inertia: !android23,

	// @option inertiaDeceleration: Number = 3000
	// The rate with which the inertial movement slows down, in pixels/second².
	inertiaDeceleration: 3400, // px/s^2

	// @option inertiaMaxSpeed: Number = Infinity
	// Max speed of the inertial movement, in pixels/second.
	inertiaMaxSpeed: Infinity, // px/s

	// @option easeLinearity: Number = 0.2
	easeLinearity: 0.2,

	// TODO refactor, move to CRS
	// @option worldCopyJump: Boolean = false
	// With this option enabled, the map tracks when you pan to another "copy"
	// of the world and seamlessly jumps to the original one so that all overlays
	// like markers and vector layers are still visible.
	worldCopyJump: false,

	// @option maxBoundsViscosity: Number = 0.0
	// If `maxBounds` is set, this option will control how solid the bounds
	// are when dragging the map around. The default value of `0.0` allows the
	// user to drag outside the bounds at normal speed, higher values will
	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
	// solid, preventing the user from dragging outside the bounds.
	maxBoundsViscosity: 0.0
});

var Drag = Handler.extend({
	addHooks: function () {
		if (!this._draggable) {
			var map = this._map;

			this._draggable = new Draggable(map._mapPane, map._container);

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this);

			this._draggable.on('predrag', this._onPreDragLimit, this);
			if (map.options.worldCopyJump) {
				this._draggable.on('predrag', this._onPreDragWrap, this);
				map.on('zoomend', this._onZoomEnd, this);

				map.whenReady(this._onZoomEnd, this);
			}
		}
		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
		this._draggable.enable();
		this._positions = [];
		this._times = [];
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-grab');
		removeClass(this._map._container, 'leaflet-touch-drag');
		this._draggable.disable();
	},

	moved: function () {
		return this._draggable && this._draggable._moved;
	},

	moving: function () {
		return this._draggable && this._draggable._moving;
	},

	_onDragStart: function () {
		var map = this._map;

		map._stop();
		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
			var bounds = toLatLngBounds(this._map.options.maxBounds);

			this._offsetLimit = toBounds(
				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
					.add(this._map.getSize()));

			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
		} else {
			this._offsetLimit = null;
		}

		map
		    .fire('movestart')
		    .fire('dragstart');

		if (map.options.inertia) {
			this._positions = [];
			this._times = [];
		}
	},

	_onDrag: function (e) {
		if (this._map.options.inertia) {
			var time = this._lastTime = +new Date(),
			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

			this._positions.push(pos);
			this._times.push(time);

			this._prunePositions(time);
		}

		this._map
		    .fire('move', e)
		    .fire('drag', e);
	},

	_prunePositions: function (time) {
		while (this._positions.length > 1 && time - this._times[0] > 50) {
			this._positions.shift();
			this._times.shift();
		}
	},

	_onZoomEnd: function () {
		var pxCenter = this._map.getSize().divideBy(2),
		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
	},

	_viscousLimit: function (value, threshold) {
		return value - (value - threshold) * this._viscosity;
	},

	_onPreDragLimit: function () {
		if (!this._viscosity || !this._offsetLimit) { return; }

		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

		var limit = this._offsetLimit;
		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

		this._draggable._newPos = this._draggable._startPos.add(offset);
	},

	_onPreDragWrap: function () {
		// TODO refactor to be able to adjust map pane position after zoom
		var worldWidth = this._worldWidth,
		    halfWidth = Math.round(worldWidth / 2),
		    dx = this._initialWorldOffset,
		    x = this._draggable._newPos.x,
		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._absPos = this._draggable._newPos.clone();
		this._draggable._newPos.x = newX;
	},

	_onDragEnd: function (e) {
		var map = this._map,
		    options = map.options,

		    noInertia = !options.inertia || this._times.length < 2;

		map.fire('dragend', e);

		if (noInertia) {
			map.fire('moveend');

		} else {
			this._prunePositions(+new Date());

			var direction = this._lastPos.subtract(this._positions[0]),
			    duration = (this._lastTime - this._times[0]) / 1000,
			    ease = options.easeLinearity,

			    speedVector = direction.multiplyBy(ease / duration),
			    speed = speedVector.distanceTo([0, 0]),

			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

			if (!offset.x && !offset.y) {
				map.fire('moveend');

			} else {
				offset = map._limitOffset(offset, map.options.maxBounds);

				requestAnimFrame(function () {
					map.panBy(offset, {
						duration: decelerationDuration,
						easeLinearity: ease,
						noMoveStart: true,
						animate: true
					});
				});
			}
		}
	}
});

// @section Handlers
// @property dragging: Handler
// Map dragging handler (by both mouse and touch).
Map.addInitHook('addHandler', 'dragging', Drag);

/*
 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
 */

// @namespace Map
// @section Keyboard Navigation Options
Map.mergeOptions({
	// @option keyboard: Boolean = true
	// Makes the map focusable and allows users to navigate the map with keyboard
	// arrows and `+`/`-` keys.
	keyboard: true,

	// @option keyboardPanDelta: Number = 80
	// Amount of pixels to pan when pressing an arrow key.
	keyboardPanDelta: 80
});

var Keyboard = Handler.extend({

	keyCodes: {
		left:    [37],
		right:   [39],
		down:    [40],
		up:      [38],
		zoomIn:  [187, 107, 61, 171],
		zoomOut: [189, 109, 54, 173]
	},

	initialize: function (map) {
		this._map = map;

		this._setPanDelta(map.options.keyboardPanDelta);
		this._setZoomDelta(map.options.zoomDelta);
	},

	addHooks: function () {
		var container = this._map._container;

		// make the container focusable by tabbing
		if (container.tabIndex <= 0) {
			container.tabIndex = '0';
		}

		on(container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.on({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	removeHooks: function () {
		this._removeHooks();

		off(this._map._container, {
			focus: this._onFocus,
			blur: this._onBlur,
			mousedown: this._onMouseDown
		}, this);

		this._map.off({
			focus: this._addHooks,
			blur: this._removeHooks
		}, this);
	},

	_onMouseDown: function () {
		if (this._focused) { return; }

		var body = document.body,
		    docEl = document.documentElement,
		    top = body.scrollTop || docEl.scrollTop,
		    left = body.scrollLeft || docEl.scrollLeft;

		this._map._container.focus();

		window.scrollTo(left, top);
	},

	_onFocus: function () {
		this._focused = true;
		this._map.fire('focus');
	},

	_onBlur: function () {
		this._focused = false;
		this._map.fire('blur');
	},

	_setPanDelta: function (panDelta) {
		var keys = this._panKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.left.length; i < len; i++) {
			keys[codes.left[i]] = [-1 * panDelta, 0];
		}
		for (i = 0, len = codes.right.length; i < len; i++) {
			keys[codes.right[i]] = [panDelta, 0];
		}
		for (i = 0, len = codes.down.length; i < len; i++) {
			keys[codes.down[i]] = [0, panDelta];
		}
		for (i = 0, len = codes.up.length; i < len; i++) {
			keys[codes.up[i]] = [0, -1 * panDelta];
		}
	},

	_setZoomDelta: function (zoomDelta) {
		var keys = this._zoomKeys = {},
		    codes = this.keyCodes,
		    i, len;

		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
			keys[codes.zoomIn[i]] = zoomDelta;
		}
		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
			keys[codes.zoomOut[i]] = -zoomDelta;
		}
	},

	_addHooks: function () {
		on(document, 'keydown', this._onKeyDown, this);
	},

	_removeHooks: function () {
		off(document, 'keydown', this._onKeyDown, this);
	},

	_onKeyDown: function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

		var key = e.keyCode,
		    map = this._map,
		    offset;

		if (key in this._panKeys) {
			if (!map._panAnim || !map._panAnim._inProgress) {
				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = toPoint(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}
			}
		} else if (key in this._zoomKeys) {
			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
			map.closePopup();

		} else {
			return;
		}

		stop(e);
	}
});

// @section Handlers
// @section Handlers
// @property keyboard: Handler
// Keyboard navigation handler.
Map.addInitHook('addHandler', 'keyboard', Keyboard);

/*
 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Mousewheel options
	// @option scrollWheelZoom: Boolean|String = true
	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
	// it will zoom to the center of the view regardless of where the mouse was.
	scrollWheelZoom: true,

	// @option wheelDebounceTime: Number = 40
	// Limits the rate at which a wheel can fire (in milliseconds). By default
	// user can't zoom via wheel more often than once per 40 ms.
	wheelDebounceTime: 40,

	// @option wheelPxPerZoomLevel: Number = 60
	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
	// mean a change of one full zoom level. Smaller values will make wheel-zooming
	// faster (and vice versa).
	wheelPxPerZoomLevel: 60
});

var ScrollWheelZoom = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'mousewheel', this._onWheelScroll, this);

		this._delta = 0;
	},

	removeHooks: function () {
		off(this._map._container, 'mousewheel', this._onWheelScroll, this);
	},

	_onWheelScroll: function (e) {
		var delta = getWheelDelta(e);

		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(bind(this._performZoom, this), left);

		stop(e);
	},

	_performZoom: function () {
		var map = this._map,
		    zoom = map.getZoom(),
		    snap = this._map.options.zoomSnap || 0;

		map._stop(); // stop panning and fly animations if any

		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }

		if (map.options.scrollWheelZoom === 'center') {
			map.setZoom(zoom + delta);
		} else {
			map.setZoomAround(this._lastMousePos, zoom + delta);
		}
	}
});

// @section Handlers
// @property scrollWheelZoom: Handler
// Scroll wheel zoom handler.
Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

/*
 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option tap: Boolean = true
	// Enables mobile hacks for supporting instant taps (fixing 200ms click
	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
	tap: true,

	// @option tapTolerance: Number = 15
	// The max number of pixels a user can shift his finger during touch
	// for it to be considered a valid tap.
	tapTolerance: 15
});

var Tap = Handler.extend({
	addHooks: function () {
		on(this._map._container, 'touchstart', this._onDown, this);
	},

	removeHooks: function () {
		off(this._map._container, 'touchstart', this._onDown, this);
	},

	_onDown: function (e) {
		if (!e.touches) { return; }

		preventDefault(e);

		this._fireClick = true;

		// don't simulate click or track longpress if more than 1 touch
		if (e.touches.length > 1) {
			this._fireClick = false;
			clearTimeout(this._holdTimeout);
			return;
		}

		var first = e.touches[0],
		    el = first.target;

		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

		// if touching a link, highlight it
		if (el.tagName && el.tagName.toLowerCase() === 'a') {
			addClass(el, 'leaflet-active');
		}

		// simulate long hold but setting a timeout
		this._holdTimeout = setTimeout(bind(function () {
			if (this._isTapValid()) {
				this._fireClick = false;
				this._onUp();
				this._simulateEvent('contextmenu', first);
			}
		}, this), 1000);

		this._simulateEvent('mousedown', first);

		on(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);
	},

	_onUp: function (e) {
		clearTimeout(this._holdTimeout);

		off(document, {
			touchmove: this._onMove,
			touchend: this._onUp
		}, this);

		if (this._fireClick && e && e.changedTouches) {

			var first = e.changedTouches[0],
			    el = first.target;

			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
				removeClass(el, 'leaflet-active');
			}

			this._simulateEvent('mouseup', first);

			// simulate click if the touch didn't move too much
			if (this._isTapValid()) {
				this._simulateEvent('click', first);
			}
		}
	},

	_isTapValid: function () {
		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
	},

	_onMove: function (e) {
		var first = e.touches[0];
		this._newPos = new Point(first.clientX, first.clientY);
		this._simulateEvent('mousemove', first);
	},

	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent._simulated = true;
		e.target._simulatedClick = true;

		simulatedEvent.initMouseEvent(
		        type, true, true, window, 1,
		        e.screenX, e.screenY,
		        e.clientX, e.clientY,
		        false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});

// @section Handlers
// @property tap: Handler
// Mobile touch hacks (quick tap and touch hold) handler.
if (touch && !pointer) {
	Map.addInitHook('addHandler', 'tap', Tap);
}

/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

// @namespace Map
// @section Interaction Options
Map.mergeOptions({
	// @section Touch interaction options
	// @option touchZoom: Boolean|String = *
	// Whether the map can be zoomed by touch-dragging with two fingers. If
	// passed `'center'`, it will zoom to the center of the view regardless of
	// where the touch events (fingers) were. Enabled for touch-capable web
	// browsers except for old Androids.
	touchZoom: touch && !android23,

	// @option bounceAtZoomLimits: Boolean = true
	// Set it to false if you don't want the map to zoom beyond min/max zoom
	// and then bounce back when pinch-zooming.
	bounceAtZoomLimits: true
});

var TouchZoom = Handler.extend({
	addHooks: function () {
		addClass(this._map._container, 'leaflet-touch-zoom');
		on(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	removeHooks: function () {
		removeClass(this._map._container, 'leaflet-touch-zoom');
		off(this._map._container, 'touchstart', this._onTouchStart, this);
	},

	_onTouchStart: function (e) {
		var map = this._map;
		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

		this._centerPoint = map.getSize()._divideBy(2);
		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
		if (map.options.touchZoom !== 'center') {
			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
		}

		this._startDist = p1.distanceTo(p2);
		this._startZoom = map.getZoom();

		this._moved = false;
		this._zooming = true;

		map._stop();

		on(document, 'touchmove', this._onTouchMove, this);
		on(document, 'touchend', this._onTouchEnd, this);

		preventDefault(e);
	},

	_onTouchMove: function (e) {
		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

		var map = this._map,
		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
		    scale = p1.distanceTo(p2) / this._startDist;

		this._zoom = map.getScaleZoom(scale, this._startZoom);

		if (!map.options.bounceAtZoomLimits && (
			(this._zoom < map.getMinZoom() && scale < 1) ||
			(this._zoom > map.getMaxZoom() && scale > 1))) {
			this._zoom = map._limitZoom(this._zoom);
		}

		if (map.options.touchZoom === 'center') {
			this._center = this._startLatLng;
			if (scale === 1) { return; }
		} else {
			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
		}

		if (!this._moved) {
			map._moveStart(true, false);
			this._moved = true;
		}

		cancelAnimFrame(this._animRequest);

		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
		this._animRequest = requestAnimFrame(moveFn, this, true);

		preventDefault(e);
	},

	_onTouchEnd: function () {
		if (!this._moved || !this._zooming) {
			this._zooming = false;
			return;
		}

		this._zooming = false;
		cancelAnimFrame(this._animRequest);

		off(document, 'touchmove', this._onTouchMove);
		off(document, 'touchend', this._onTouchEnd);

		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
		if (this._map.options.zoomAnimation) {
			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
		} else {
			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
		}
	}
});

// @section Handlers
// @property touchZoom: Handler
// Touch zoom handler.
Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

Map.BoxZoom = BoxZoom;
Map.DoubleClickZoom = DoubleClickZoom;
Map.Drag = Drag;
Map.Keyboard = Keyboard;
Map.ScrollWheelZoom = ScrollWheelZoom;
Map.Tap = Tap;
Map.TouchZoom = TouchZoom;

Object.freeze = freeze;

exports.version = version;
exports.Control = Control;
exports.control = control;
exports.Browser = Browser;
exports.Evented = Evented;
exports.Mixin = Mixin;
exports.Util = Util;
exports.Class = Class;
exports.Handler = Handler;
exports.extend = extend;
exports.bind = bind;
exports.stamp = stamp;
exports.setOptions = setOptions;
exports.DomEvent = DomEvent;
exports.DomUtil = DomUtil;
exports.PosAnimation = PosAnimation;
exports.Draggable = Draggable;
exports.LineUtil = LineUtil;
exports.PolyUtil = PolyUtil;
exports.Point = Point;
exports.point = toPoint;
exports.Bounds = Bounds;
exports.bounds = toBounds;
exports.Transformation = Transformation;
exports.transformation = toTransformation;
exports.Projection = index;
exports.LatLng = LatLng;
exports.latLng = toLatLng;
exports.LatLngBounds = LatLngBounds;
exports.latLngBounds = toLatLngBounds;
exports.CRS = CRS;
exports.GeoJSON = GeoJSON;
exports.geoJSON = geoJSON;
exports.geoJson = geoJson;
exports.Layer = Layer;
exports.LayerGroup = LayerGroup;
exports.layerGroup = layerGroup;
exports.FeatureGroup = FeatureGroup;
exports.featureGroup = featureGroup;
exports.ImageOverlay = ImageOverlay;
exports.imageOverlay = imageOverlay;
exports.VideoOverlay = VideoOverlay;
exports.videoOverlay = videoOverlay;
exports.SVGOverlay = SVGOverlay;
exports.svgOverlay = svgOverlay;
exports.DivOverlay = DivOverlay;
exports.Popup = Popup;
exports.popup = popup;
exports.Tooltip = Tooltip;
exports.tooltip = tooltip;
exports.Icon = Icon;
exports.icon = icon;
exports.DivIcon = DivIcon;
exports.divIcon = divIcon;
exports.Marker = Marker;
exports.marker = marker;
exports.TileLayer = TileLayer;
exports.tileLayer = tileLayer;
exports.GridLayer = GridLayer;
exports.gridLayer = gridLayer;
exports.SVG = SVG;
exports.svg = svg$1;
exports.Renderer = Renderer;
exports.Canvas = Canvas;
exports.canvas = canvas$1;
exports.Path = Path;
exports.CircleMarker = CircleMarker;
exports.circleMarker = circleMarker;
exports.Circle = Circle;
exports.circle = circle;
exports.Polyline = Polyline;
exports.polyline = polyline;
exports.Polygon = Polygon;
exports.polygon = polygon;
exports.Rectangle = Rectangle;
exports.rectangle = rectangle;
exports.Map = Map;
exports.map = createMap;

var oldL = window.L;
exports.noConflict = function() {
	window.L = oldL;
	return this;
}

// Always export us to window global (see #2364)
window.L = exports;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [nbSpinner]=\"loading\">\n\t<div class=\"modal-header\">\n\t\t<span class=\"modal-title\">\n\t\t\t{{ 'CARRIERS_VIEW.CARRIER_PAGE.REGISTER_NEW_CARRIER' | translate }}\n\t\t</span>\n\t\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\n\t<form-wizard\n\t\tclass=\"form-horizontal\"\n\t\t[formGroup]=\"form\"\n\t\t[buttonDone]=\"buttonDone\"\n\t\t[buttonNext]=\"buttonNext\"\n\t\t[buttonPrevious]=\"buttonPrevious\"\n\t>\n\t\t<wizard-step\n\t\t\t[title]=\"'CARRIERS_VIEW.CREATE.BASIC_INFO' | translate\"\n\t\t\t[isValid]=\"basicInfo.valid\"\n\t\t>\n\t\t\t<br />\n\t\t\t<ea-carrier-basic-info-form\n\t\t\t\t#basicInfoForm\n\t\t\t\t[form]=\"basicInfo\"\n\t\t\t\t[password]=\"password\"\n\t\t\t></ea-carrier-basic-info-form>\n\t\t</wizard-step>\n\n\t\t<wizard-step\n\t\t\t[title]=\"'CARRIERS_VIEW.CREATE.LOCATION' | translate\"\n\t\t\t[isValid]=\"location.valid\"\n\t\t\t(onComplete)=\"createCarrier()\"\n\t\t>\n\t\t\t<br />\n\t\t\t<ea-location-form\n\t\t\t\t#locationForm\n\t\t\t\t[form]=\"location\"\n\t\t\t\t[showAutocompleteSearch]=\"true\"\n\t\t\t\t(mapCoordinatesEmitter)=\"onCoordinatesChanges($event)\"\n\t\t\t\t(mapGeometryEmitter)=\"onGeometrySend($event)\"\n\t\t\t>\n\t\t\t</ea-location-form>\n\n\t\t\t<google-map\n\t\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t\t></google-map>\n\t\t</wizard-step>\n\t</form-wizard>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carriers-table/carriers-table.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carriers-table/carriers-table.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\t(userRowSelect)=\"selectCarrierTmp($event)\"\n\t(edit)=\"editRow.emit($event)\"\n\t(delete)=\"deleteRow.emit($event)\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card class=\"basic-info {{ boxShadow === 'none' ? 'no-box-shadow' : '' }}\">\n\t<div class=\"col-sm-12\" [formGroup]=\"form\" *ngIf=\"form\">\n\t\t<br />\n\n\t\t<fieldset>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t\t'Name' | translate\n\t\t\t\t}}</label>\n\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.EDIT.FIRST_NAME' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\tfirstName.invalid &&\n\t\t\t\t\t\t\t(firstName.dirty || firstName.touched)\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"firstName.errors.required\"\n\t\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.FIRST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"firstName.errors.pattern\"\n\t\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.EDIT.LAST_NAME' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t/>\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\tlastName.invalid &&\n\t\t\t\t\t\t\t(lastName.dirty || lastName.touched)\n\t\t\t\t\t\t\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"lastName.errors.required\"\n\t\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.LAST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"lastName.errors.pattern\"\n\t\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</fieldset>\n\n\t\t<fieldset>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t\t'Username' | translate\n\t\t\t\t}}</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tplaceholder=\"{{ 'Username' | translate }}\"\n\t\t\t\t\t\tformControlName=\"username\"\n\t\t\t\t\t/>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\tusername.invalid &&\n\t\t\t\t\t\t\t(username.dirty || username.touched)\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.USERNAME_REQUIRED' | translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\" *ngIf=\"password\">\n\t\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t\t'Password' | translate\n\t\t\t\t}}</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tplaceholder=\"{{ 'Password' | translate }}\"\n\t\t\t\t\t\trequired\n\t\t\t\t\t\t[formControl]=\"password\"\n\t\t\t\t\t/>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"\n\t\t\t\t\t\t\tpassword.invalid &&\n\t\t\t\t\t\t\t(password.dirty || password.touched)\n\t\t\t\t\t\t\"\n\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.PASSWORD_REQUIRED' | translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</fieldset>\n\n\t\t<fieldset>\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label class=\"col-sm-2 control-label\">{{\n\t\t\t\t\t'Phone' | translate\n\t\t\t\t}}</label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.EDIT.CONTACT_PHONE' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t\tformControlName=\"phone\"\n\t\t\t\t\t/>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('pattern')\">\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.PHONE_MUST_CONTAINS_ONLY(specail_signs)AND_DIGIT_CHARACTER'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div [hidden]=\"!phone.hasError('required')\">\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.PHONE_REQUIRED'\n\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t}}!\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<label class=\"col-sm-2 control-label\">\n\t\t\t\t\t{{ 'CARRIERS_VIEW.EDIT.PHOTO_URL' | translate }}\n\t\t\t\t</label>\n\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t\t[placeholder]=\"uploaderPlaceholder\"\n\t\t\t\t\t\t[name]=\"username?.value\"\n\t\t\t\t\t\t[fileUrl]=\"logo?.value\"\n\t\t\t\t\t\t(uploadedImgUrl)=\"logo.setValue($event)\"\n\t\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t\t<div\n\t\t\t\t\t\t*ngIf=\"logo.invalid && (logo.dirty || logo.touched)\"\n\t\t\t\t\t\tclass=\"alert alert-danger\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'SHARED.FORMS.ERRORS.LOGO_URL_REQUIRED' | translate\n\t\t\t\t\t\t}}!\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\" [hidden]=\"logo.invalid\">\n\t\t\t\t<label class=\"col-sm-2 control-label\"></label>\n\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t<div class=\"row preview-img\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t[hidden]=\"!showLogoMeta\"\n\t\t\t\t\t\t\tclass=\"remove-icon\"\n\t\t\t\t\t\t\t(click)=\"deleteImg()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t#logoImagePreview\n\t\t\t\t\t\t\t\tsrc=\"{{ logo.value }}\"\n\t\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\tclass=\"ion-md-remove-circle text-danger pl-2\"\n\t\t\t\t\t\t\t\ttitle=\"Remove\"\n\t\t\t\t\t\t\t></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group row\">\n\t\t\t\t<!-- TODO add translate -->\n\t\t\t\t<nb-checkbox\n\t\t\t\t\tclass=\"col-sm-12\"\n\t\t\t\t\tformControlName=\"isSharedCarrier\"\n\t\t\t\t>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'CARRIERS_VIEW.CARRIER_PAGE.CARRIER_CAN_BE_SHARED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}\n\t\t\t\t</nb-checkbox>\n\t\t\t\t<nb-checkbox class=\"col-sm-12\" formControlName=\"isActive\">\n\t\t\t\t\t{{ 'CARRIERS_VIEW.CARRIER_PAGE.ACTIVE' | translate }}\n\t\t\t\t</nb-checkbox>\n\t\t\t</div>\n\t\t</fieldset>\n\t</div>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"iconsCont\" style=\"display: flex;\">\n\t<h6 class=\"text-center iconBtns\">\n\t\t<i (click)=\"openInfo()\" class=\"fa fa-info-circle infoBtn\"></i>\n\t</h6>\n\t<h6><i (click)=\"openMap()\" class=\"fa fa-search infoBtn\"></i></h6>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\n\tclass=\"{{ redirectPage ? 'redirect-image' : '' }}\"\n\t(click)=\"redirect()\"\n\tsrc=\"{{ imageUrl }}\"\n\twidth=\"60\"\n/>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<a href=\"tel:{{ rowData.phone }}\" *ngIf=\"rowData.phone.length > 0\">\n\t\t<i class=\"fas fa-phone-square\"></i> <span>{{ rowData.phone }}</span>\n\t</a>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/carrier-info.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/carrier-info.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n\t<h3>{{ 'CARRIERS_VIEW.CARRIER_PAGE.CARRIER_INFO' | translate }}</h3>\n\t<button class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<h6>\n\t\t<strong\n\t\t\t>{{ 'CARRIERS_VIEW.CARRIER_PAGE.CARRIER_ID' | translate }}:</strong\n\t\t>\n\t\t{{ carrierId }}\n\t</h6>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/location/carrier-location.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/location/carrier-location.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card [ngClass]=\"{ 'modal-style': carrierId }\">\n\t<nb-card-header class=\"header-color\">{{\n\t\t'CARRIERS_VIEW.CARRIER_PAGE.LOCATION' | translate\n\t}}</nb-card-header>\n\t<nb-card-body> <div #gmap class=\"googleMap\"></div> </nb-card-body>\n</nb-card>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\t<div class=\"col-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.TRACK_ALL_WORKING_CARRIERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body>\n\t\t\t\t\t\t<div #gmap class=\"googleMap\"></div>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<nb-card>\n\t\t\t\t\t<nb-card-header>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.FILTER_CARRIERS'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</nb-card-header>\n\t\t\t\t\t<nb-card-body style=\"overflow: inherit;\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t[items]=\"stores\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t\t\t'DASHBOARD_VIEW.SELECT_COMPONENT.SELECT_STORE'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\tbindLabel=\"id\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t\t(change)=\"storeListener($event)\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedStore\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template ng-label-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\theight=\"15\"\n\t\t\t\t\t\t\t\t\t\twidth=\"15\"\n\t\t\t\t\t\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<b>{{ item.name }}</b>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item.name }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t<ng-select\n\t\t\t\t\t\t\t\t(change)=\"carrierListener($event)\"\n\t\t\t\t\t\t\t\t[items]=\"filteredCarriersList\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedCarrier\"\n\t\t\t\t\t\t\t\t[clearable]=\"false\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.CARRIER_PAGE.SELECT_CARRIER'\n\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t}}\"\n\t\t\t\t\t\t\t\tbindLabel=\"fullName\"\n\t\t\t\t\t\t\t\tstyle=\"width: 100%; margin-bottom: 30px;\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template ng-label-tmp let-item=\"item\">\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\theight=\"15\"\n\t\t\t\t\t\t\t\t\t\twidth=\"15\"\n\t\t\t\t\t\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t{{ item.fullName }}\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t<ng-template\n\t\t\t\t\t\t\t\t\tng-option-tmp\n\t\t\t\t\t\t\t\t\tlet-item=\"item\"\n\t\t\t\t\t\t\t\t\tlet-index=\"index\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<p class=\"card-title\">\n\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t\theight=\"40\"\n\t\t\t\t\t\t\t\t\t\t\twidth=\"40\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"item.logo\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t{{ item.fullName }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<nb-card-footer>\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<div class=\"warehouse\" *ngIf=\"selectedStore\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedStore.name }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.PHONE'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactPhone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.EMAIL'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}:\n\t\t\t\t\t\t\t\t\t\t\t{{ selectedStore.contactEmail }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.ADDRESS'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedStore.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"carrier\" *ngIf=\"selectedCarrier\">\n\t\t\t\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t\t\t\t<b>{{ selectedCarrier.fullName }}</b>\n\t\t\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.DELIVERY_COUNT'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.numberOfDeliveries\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.PHONE'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}: {{ selectedCarrier.phone }}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\t'CARRIERS_VIEW.TRACK_PAGE.ADDRESS'\n\t\t\t\t\t\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t\t\t\t\t\t}}:\n\t\t\t\t\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t\t\t\t\t\tselectedCarrier.geoLocation\n\t\t\t\t\t\t\t\t\t\t\t\t\t.streetAddress\n\t\t\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</nb-card-footer>\n\t\t\t\t\t</nb-card-body>\n\t\t\t\t</nb-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/track.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/track.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ea-carrier-tracking></ea-carrier-tracking>\n");

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/index.js ***!
  \************************************************************/
/*! exports provided: LeafletModule, LeafletDirective, LeafletDirectiveWrapper, LeafletUtil, LeafletLayerDirective, LeafletLayersDirective, LeafletTileLayerDefinition, LeafletBaseLayersDirective, LeafletLayersControlDirective, LeafletControlLayersWrapper, LeafletControlLayersConfig, LeafletControlLayersChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet/leaflet.module */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletModule", function() { return _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__["LeafletModule"]; });

/* harmony import */ var _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletDirective", function() { return _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"]; });

/* harmony import */ var _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletDirectiveWrapper", function() { return _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"]; });

/* harmony import */ var _leaflet_core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet/core/leaflet.util */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletUtil", function() { return _leaflet_core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__["LeafletUtil"]; });

/* harmony import */ var _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layer.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layer.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayerDirective", function() { return _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayerDirective"]; });

/* harmony import */ var _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layers.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersDirective", function() { return _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletLayersDirective"]; });

/* harmony import */ var _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaflet/layers/leaflet-tile-layer-definition.model */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-tile-layer-definition.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletTileLayerDefinition", function() { return _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_6__["LeafletTileLayerDefinition"]; });

/* harmony import */ var _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaflet/layers/base/leaflet-baselayers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/base/leaflet-baselayers.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletBaseLayersDirective", function() { return _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__["LeafletBaseLayersDirective"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersControlDirective", function() { return _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_8__["LeafletLayersControlDirective"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersWrapper", function() { return _leaflet_layers_control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_9__["LeafletControlLayersWrapper"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers-config.model */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersConfig", function() { return _leaflet_layers_control_leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_10__["LeafletControlLayersConfig"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers-changes.model */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-changes.model.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersChanges", function() { return _leaflet_layers_control_leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_11__["LeafletControlLayersChanges"]; });













//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js ***!
  \*************************************************************************************/
/*! exports provided: LeafletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDirective", function() { return LeafletDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "../../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leaflet_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet.util */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeafletDirective = /** @class */ (function () {
    function LeafletDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.DEFAULT_ZOOM = 1;
        this.DEFAULT_CENTER = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(38.907192, -77.036871);
        this.DEFAULT_FPZ_OPTIONS = {};
        this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
        this.panOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
        // Default configuration
        this.options = {};
        // Configure callback function for the map
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Mouse Map Events
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Map Move Events
        this.onMapMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapMoveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapMoveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Map Zoom Events
        this.onMapZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapZoomStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapZoomEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Nothing here
    }
    LeafletDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Create the map outside of angular so the various map events don't trigger change detection
        this.zone.runOutsideAngular(function () {
            // Create the map with some reasonable defaults
            _this.map = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["map"])(_this.element.nativeElement, _this.options);
            _this.addMapEventListeners();
        });
        // Only setView if there is a center/zoom
        if (null != this.center && null != this.zoom) {
            this.setView(this.center, this.zoom);
        }
        // Set up all the initial settings
        if (null != this.fitBounds) {
            this.setFitBounds(this.fitBounds);
        }
        if (null != this.maxBounds) {
            this.setMaxBounds(this.maxBounds);
        }
        if (null != this.minZoom) {
            this.setMinZoom(this.minZoom);
        }
        if (null != this.maxZoom) {
            this.setMaxZoom(this.maxZoom);
        }
        this.doResize();
        // Fire map ready event
        this.mapReady.emit(this.map);
    };
    LeafletDirective.prototype.ngOnChanges = function (changes) {
        /*
         * The following code is to address an issue with our (basic) implementation of
         * zooming and panning. From our testing, it seems that a pan operation followed
         * by a zoom operation in the same thread will interfere with eachother. The zoom
         * operation interrupts/cancels the pan, resulting in a final center point that is
         * inaccurate. The solution seems to be to either separate them with a timeout or
          * to collapse them into a setView call.
         */
        // Zooming and Panning
        if (changes['zoom'] && changes['center'] && null != this.zoom && null != this.center) {
            this.setView(changes['center'].currentValue, changes['zoom'].currentValue);
        }
        // Set the zoom level
        else if (changes['zoom']) {
            this.setZoom(changes['zoom'].currentValue);
        }
        // Set the map center
        else if (changes['center']) {
            this.setCenter(changes['center'].currentValue);
        }
        // Other options
        if (changes['fitBounds']) {
            this.setFitBounds(changes['fitBounds'].currentValue);
        }
        if (changes['maxBounds']) {
            this.setMaxBounds(changes['maxBounds'].currentValue);
        }
        if (changes['minZoom']) {
            this.setMinZoom(changes['minZoom'].currentValue);
        }
        if (changes['maxZoom']) {
            this.setMaxZoom(changes['maxZoom'].currentValue);
        }
    };
    LeafletDirective.prototype.getMap = function () {
        return this.map;
    };
    LeafletDirective.prototype.onResize = function () {
        this.delayResize();
    };
    LeafletDirective.prototype.addMapEventListeners = function () {
        var _this = this;
        // Add all the pass-through mouse event handlers
        this.map.on('click', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onClick, e); });
        this.map.on('dblclick', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onDoubleClick, e); });
        this.map.on('mousedown', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseDown, e); });
        this.map.on('mouseup', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseUp, e); });
        this.map.on('mouseover', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseOver, e); });
        this.map.on('mouseout', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseOut, e); });
        this.map.on('mousemove', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseMove, e); });
        this.map.on('zoomstart', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoomStart, e); });
        this.map.on('zoom', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoom, e); });
        this.map.on('zoomend', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoomEnd, e); });
        this.map.on('movestart', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMoveStart, e); });
        this.map.on('move', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMove, e); });
        this.map.on('moveend', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMoveEnd, e); });
        // Update any things for which we provide output bindings
        this.map.on('zoomend moveend', function () {
            var zoom = _this.map.getZoom();
            if (zoom !== _this.zoom) {
                _this.zoom = zoom;
                _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.zoomChange, zoom);
            }
            var center = _this.map.getCenter();
            if (null != center || null != _this.center) {
                if (((null == center || null == _this.center) && center !== _this.center)
                    || (center.lat !== _this.center.lat || center.lng !== _this.center.lng)) {
                    _this.center = center;
                    _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.centerChange, center);
                }
            }
        });
    };
    /**
     * Resize the map to fit it's parent container
     */
    LeafletDirective.prototype.doResize = function () {
        var _this = this;
        // Run this outside of angular so the map events stay outside of angular
        this.zone.runOutsideAngular(function () {
            // Invalidate the map size to trigger it to update itself
            _this.map.invalidateSize({});
        });
    };
    /**
     * Manage a delayed resize of the component
     */
    LeafletDirective.prototype.delayResize = function () {
        if (null != this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
    };
    /**
     * Set the view (center/zoom) all at once
     * @param center The new center
     * @param zoom The new zoom level
     */
    LeafletDirective.prototype.setView = function (center, zoom) {
        if (this.map && null != center && null != zoom) {
            this.map.setView(center, zoom, this.zoomPanOptions);
        }
    };
    /**
     * Set the map zoom level
     * @param zoom the new zoom level for the map
     */
    LeafletDirective.prototype.setZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setZoom(zoom, this.zoomOptions);
        }
    };
    /**
     * Set the center of the map
     * @param center the center point
     */
    LeafletDirective.prototype.setCenter = function (center) {
        if (this.map && null != center) {
            this.map.panTo(center, this.panOptions);
        }
    };
    /**
     * Fit the map to the bounds
     * @param latLngBounds the boundary to set
     */
    LeafletDirective.prototype.setFitBounds = function (latLngBounds) {
        if (this.map && null != latLngBounds) {
            this.map.fitBounds(latLngBounds, this.fitBoundsOptions);
        }
    };
    /**
     * Set the map's max bounds
     * @param latLngBounds the boundary to set
     */
    LeafletDirective.prototype.setMaxBounds = function (latLngBounds) {
        if (this.map && null != latLngBounds) {
            this.map.setMaxBounds(latLngBounds);
        }
    };
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    LeafletDirective.prototype.setMinZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setMinZoom(zoom);
        }
    };
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    LeafletDirective.prototype.setMaxZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setMaxZoom(zoom);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletFitBoundsOptions'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "fitBoundsOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletPanOptions'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "panOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletZoomOptions'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "zoomOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletZoomPanOptions'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "zoomPanOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletOptions'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapReady'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "mapReady", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletZoom'),
        __metadata("design:type", Number)
    ], LeafletDirective.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletZoomChange'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "zoomChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletCenter'),
        __metadata("design:type", leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"])
    ], LeafletDirective.prototype, "center", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletCenterChange'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "centerChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletFitBounds'),
        __metadata("design:type", leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"])
    ], LeafletDirective.prototype, "fitBounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletMaxBounds'),
        __metadata("design:type", leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLngBounds"])
    ], LeafletDirective.prototype, "maxBounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletMinZoom'),
        __metadata("design:type", Number)
    ], LeafletDirective.prototype, "minZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletMaxZoom'),
        __metadata("design:type", Number)
    ], LeafletDirective.prototype, "maxZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletClick'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletDoubleClick'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onDoubleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMouseDown'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMouseDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMouseUp'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMouseUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMouseMove'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMouseOver'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMouseOut'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapMove'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapMoveStart'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapMoveStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapMoveEnd'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapMoveEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapZoom'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapZoomStart'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapZoomStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletMapZoomEnd'),
        __metadata("design:type", Object)
    ], LeafletDirective.prototype, "onMapZoomEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LeafletDirective.prototype, "onResize", null);
    LeafletDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[leaflet]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LeafletDirective);
    return LeafletDirective;
}());

//# sourceMappingURL=leaflet.directive.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js ***!
  \*********************************************************************************************/
/*! exports provided: LeafletDirectiveWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDirectiveWrapper", function() { return LeafletDirectiveWrapper; });
var LeafletDirectiveWrapper = /** @class */ (function () {
    function LeafletDirectiveWrapper(leafletDirective) {
        this.leafletDirective = leafletDirective;
    }
    LeafletDirectiveWrapper.prototype.init = function () {
        // Nothing for now
    };
    LeafletDirectiveWrapper.prototype.getMap = function () {
        return this.leafletDirective.getMap();
    };
    return LeafletDirectiveWrapper;
}());

//# sourceMappingURL=leaflet.directive.wrapper.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js ***!
  \********************************************************************************/
/*! exports provided: LeafletUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletUtil", function() { return LeafletUtil; });
var LeafletUtil = /** @class */ (function () {
    function LeafletUtil() {
    }
    LeafletUtil.mapToArray = function (map) {
        var toReturn = [];
        for (var k in map) {
            if (map.hasOwnProperty(k)) {
                toReturn.push(map[k]);
            }
        }
        return toReturn;
    };
    LeafletUtil.handleEvent = function (zone, eventEmitter, event) {
        // Don't want to emit if there are no observers
        if (0 < eventEmitter.observers.length) {
            zone.run(function () {
                eventEmitter.emit(event);
            });
        }
    };
    return LeafletUtil;
}());

//# sourceMappingURL=leaflet.util.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/base/leaflet-baselayers.directive.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/base/leaflet-baselayers.directive.js ***!
  \*******************************************************************************************************/
/*! exports provided: LeafletBaseLayersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletBaseLayersDirective", function() { return LeafletBaseLayersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "../../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_leaflet_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.util */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js");
/* harmony import */ var _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../control/leaflet-control-layers.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Baselayers directive
 *
 * This directive is provided as a convenient way to add baselayers to the map. The input accepts
 * a key-value map of layer name -> layer. Mutable changed are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed. This directive
 * will also add the layers control so users can switch between available base layers.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the plugin will use the last one it sees.
 */
var LeafletBaseLayersDirective = /** @class */ (function () {
    function LeafletBaseLayersDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        // Output for once the layers control is ready
        this.layersControlReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_4__["LeafletDirectiveWrapper"](leafletDirective);
        this.controlLayers = new _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_5__["LeafletControlLayersWrapper"](this.zone, this.layersControlReady);
        this.baseLayersDiffer = this.differs.find({}).create();
    }
    Object.defineProperty(LeafletBaseLayersDirective.prototype, "baseLayers", {
        get: function () {
            return this.baseLayersValue;
        },
        // Set/get baseLayers
        set: function (v) {
            this.baseLayersValue = v;
            this.updateBaseLayers();
        },
        enumerable: true,
        configurable: true
    });
    LeafletBaseLayersDirective.prototype.ngOnDestroy = function () {
        this.baseLayers = {};
        this.controlLayers.getLayersControl().remove();
    };
    LeafletBaseLayersDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Init the map
        this.leafletDirective.init();
        // Create the control outside angular to prevent events from triggering chnage detection
        this.zone.runOutsideAngular(function () {
            // Initially configure the controlLayers
            _this.controlLayers
                .init({}, _this.layersControlOptions)
                .addTo(_this.leafletDirective.getMap());
        });
        this.updateBaseLayers();
    };
    LeafletBaseLayersDirective.prototype.ngDoCheck = function () {
        this.updateBaseLayers();
    };
    LeafletBaseLayersDirective.prototype.updateBaseLayers = function () {
        var map = this.leafletDirective.getMap();
        var layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl && null != this.baseLayersDiffer) {
            var changes = this.baseLayersDiffer.diff(this.baseLayersValue);
            var results = this.controlLayers.applyBaseLayerChanges(changes);
            if (results.changed()) {
                this.syncBaseLayer();
            }
        }
    };
    /**
     * Check the current base layer and change it to the new one if necessary
     */
    LeafletBaseLayersDirective.prototype.syncBaseLayer = function () {
        var _this = this;
        var map = this.leafletDirective.getMap();
        var layers = _core_leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].mapToArray(this.baseLayers);
        var foundLayer;
        // Search all the layers in the map to see if we can find them in the baselayer array
        map.eachLayer(function (l) {
            foundLayer = layers.find(function (bl) { return (l === bl); });
        });
        // Did we find the layer?
        if (null != foundLayer) {
            // Yes - set the baselayer to the one we found
            this.baseLayer = foundLayer;
        }
        else {
            // No - set the baselayer to the first in the array and add it to the map
            if (layers.length > 0) {
                this.baseLayer = layers[0];
                // Add layers outside of angular to prevent events from triggering change detection
                this.zone.runOutsideAngular(function () {
                    _this.baseLayer.addTo(map);
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletBaseLayers'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LeafletBaseLayersDirective.prototype, "baseLayers", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletLayersControlOptions'),
        __metadata("design:type", Object)
    ], LeafletBaseLayersDirective.prototype, "layersControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletLayersControlReady'),
        __metadata("design:type", Object)
    ], LeafletBaseLayersDirective.prototype, "layersControlReady", void 0);
    LeafletBaseLayersDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[leafletBaseLayers]'
        }),
        __metadata("design:paramtypes", [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LeafletBaseLayersDirective);
    return LeafletBaseLayersDirective;
}());

//# sourceMappingURL=leaflet-baselayers.directive.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-changes.model.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-changes.model.js ***!
  \******************************************************************************************************************/
/*! exports provided: LeafletControlLayersChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersChanges", function() { return LeafletControlLayersChanges; });
var LeafletControlLayersChanges = /** @class */ (function () {
    function LeafletControlLayersChanges() {
        this.layersRemoved = 0;
        this.layersChanged = 0;
        this.layersAdded = 0;
    }
    LeafletControlLayersChanges.prototype.changed = function () {
        return !(this.layersRemoved === 0 && this.layersChanged === 0 && this.layersAdded === 0);
    };
    return LeafletControlLayersChanges;
}());

//# sourceMappingURL=leaflet-control-layers-changes.model.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model.js ***!
  \*****************************************************************************************************************/
/*! exports provided: LeafletControlLayersConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersConfig", function() { return LeafletControlLayersConfig; });
var LeafletControlLayersConfig = /** @class */ (function () {
    function LeafletControlLayersConfig() {
        this.baseLayers = {};
        this.overlays = {};
    }
    return LeafletControlLayersConfig;
}());

//# sourceMappingURL=leaflet-control-layers-config.model.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.directive.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.directive.js ***!
  \**************************************************************************************************************/
/*! exports provided: LeafletLayersControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersControlDirective", function() { return LeafletLayersControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js");
/* harmony import */ var _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet-control-layers.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js");
/* harmony import */ var _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet-control-layers-config.model */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Layers Control
 *
 * This directive is used to configure the layers control. The input accepts an object with two
 * key-value maps of layer name -> layer. Mutable changes are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the last one it sees will be used.
 */
var LeafletLayersControlDirective = /** @class */ (function () {
    function LeafletLayersControlDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.layersControlReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
        this.controlLayers = new _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__["LeafletControlLayersWrapper"](this.zone, this.layersControlReady);
        // Generate differs
        this.baseLayersDiffer = this.differs.find({}).create();
        this.overlaysDiffer = this.differs.find({}).create();
    }
    Object.defineProperty(LeafletLayersControlDirective.prototype, "layersControlConfig", {
        get: function () {
            return this.layersControlConfigValue;
        },
        set: function (v) {
            // Validation/init stuff
            if (null == v) {
                v = new _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__["LeafletControlLayersConfig"]();
            }
            if (null == v.baseLayers) {
                v.baseLayers = {};
            }
            if (null == v.overlays) {
                v.overlays = {};
            }
            // Store the value
            this.layersControlConfigValue = v;
            // Update the map
            this.updateLayers();
        },
        enumerable: true,
        configurable: true
    });
    LeafletLayersControlDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Init the map
        this.leafletDirective.init();
        // Set up control outside of angular to avoid change detection when using the control
        this.zone.runOutsideAngular(function () {
            // Set up all the initial settings
            _this.controlLayers
                .init({}, _this.layersControlOptions)
                .addTo(_this.leafletDirective.getMap());
        });
        this.updateLayers();
    };
    LeafletLayersControlDirective.prototype.ngOnDestroy = function () {
        this.layersControlConfig = { baseLayers: {}, overlays: {} };
        this.controlLayers.getLayersControl().remove();
    };
    LeafletLayersControlDirective.prototype.ngDoCheck = function () {
        this.updateLayers();
    };
    LeafletLayersControlDirective.prototype.updateLayers = function () {
        var map = this.leafletDirective.getMap();
        var layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl) {
            // Run the baselayers differ
            if (null != this.baseLayersDiffer && null != this.layersControlConfigValue.baseLayers) {
                var changes = this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);
                this.controlLayers.applyBaseLayerChanges(changes);
            }
            // Run the overlays differ
            if (null != this.overlaysDiffer && null != this.layersControlConfigValue.overlays) {
                var changes = this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);
                this.controlLayers.applyOverlayChanges(changes);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletLayersControl'),
        __metadata("design:type", _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__["LeafletControlLayersConfig"]),
        __metadata("design:paramtypes", [_leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__["LeafletControlLayersConfig"]])
    ], LeafletLayersControlDirective.prototype, "layersControlConfig", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletLayersControlOptions'),
        __metadata("design:type", Object)
    ], LeafletLayersControlDirective.prototype, "layersControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletLayersControlReady'),
        __metadata("design:type", Object)
    ], LeafletLayersControlDirective.prototype, "layersControlReady", void 0);
    LeafletLayersControlDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[leafletLayersControl]'
        }),
        __metadata("design:paramtypes", [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LeafletLayersControlDirective);
    return LeafletLayersControlDirective;
}());

//# sourceMappingURL=leaflet-control-layers.directive.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js ***!
  \************************************************************************************************************/
/*! exports provided: LeafletControlLayersWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersWrapper", function() { return LeafletControlLayersWrapper; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "../../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet-control-layers-changes.model */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-changes.model.js");


var LeafletControlLayersWrapper = /** @class */ (function () {
    function LeafletControlLayersWrapper(zone, layersControlReady) {
        this.zone = zone;
        this.layersControlReady = layersControlReady;
    }
    LeafletControlLayersWrapper.prototype.getLayersControl = function () {
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.init = function (controlConfig, controlOptions) {
        var _this = this;
        var baseLayers = controlConfig.baseLayers || {};
        var overlays = controlConfig.overlays || {};
        // Create the control outside of angular to ensure events don't trigger change detection
        this.zone.runOutsideAngular(function () {
            _this.layersControl = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].layers(baseLayers, overlays, controlOptions);
        });
        this.layersControlReady.emit(this.layersControl);
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.applyBaseLayerChanges = function (changes) {
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != this.layersControl) {
            results = this.applyChanges(changes, this.layersControl.addBaseLayer);
        }
        return results;
    };
    LeafletControlLayersWrapper.prototype.applyOverlayChanges = function (changes) {
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != this.layersControl) {
            results = this.applyChanges(changes, this.layersControl.addOverlay);
        }
        return results;
    };
    LeafletControlLayersWrapper.prototype.applyChanges = function (changes, addFn) {
        var _this = this;
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != changes) {
            // All layer management is outside angular to avoid layer events from triggering change detection
            this.zone.runOutsideAngular(function () {
                changes.forEachChangedItem(function (c) {
                    _this.layersControl.removeLayer(c.previousValue);
                    addFn.call(_this.layersControl, c.currentValue, c.key);
                    results.layersChanged++;
                });
                changes.forEachRemovedItem(function (c) {
                    _this.layersControl.removeLayer(c.previousValue);
                    results.layersRemoved++;
                });
                changes.forEachAddedItem(function (c) {
                    addFn.call(_this.layersControl, c.currentValue, c.key);
                    results.layersAdded++;
                });
            });
        }
        return results;
    };
    return LeafletControlLayersWrapper;
}());

//# sourceMappingURL=leaflet-control-layers.wrapper.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layer.directive.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layer.directive.js ***!
  \*********************************************************************************************/
/*! exports provided: LeafletLayerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayerDirective", function() { return LeafletLayerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "../../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js");
/* harmony import */ var _core_leaflet_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/leaflet.util */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.util.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Layer directive
 *
 * This directive is used to directly control a single map layer. The purpose of this directive is to
 * be used as part of a child structural directive of the map element.
 *
 */
var LeafletLayerDirective = /** @class */ (function () {
    function LeafletLayerDirective(leafletDirective, zone) {
        this.zone = zone;
        // Layer Events
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__["LeafletDirectiveWrapper"](leafletDirective);
    }
    LeafletLayerDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
    };
    LeafletLayerDirective.prototype.ngOnDestroy = function () {
        this.layer.remove();
    };
    LeafletLayerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['layer']) {
            // Update the layer
            var p_1 = changes['layer'].previousValue;
            var n_1 = changes['layer'].currentValue;
            this.zone.runOutsideAngular(function () {
                if (null != p_1) {
                    p_1.remove();
                }
                if (null != n_1) {
                    _this.addLayerEventListeners(n_1);
                    _this.leafletDirective.getMap().addLayer(n_1);
                }
            });
        }
    };
    LeafletLayerDirective.prototype.addLayerEventListeners = function (l) {
        var _this = this;
        l.on('add', function (e) { return _core_leaflet_util__WEBPACK_IMPORTED_MODULE_4__["LeafletUtil"].handleEvent(_this.zone, _this.onAdd, e); });
        l.on('remove', function (e) { return _core_leaflet_util__WEBPACK_IMPORTED_MODULE_4__["LeafletUtil"].handleEvent(_this.zone, _this.onRemove, e); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletLayer'),
        __metadata("design:type", leaflet__WEBPACK_IMPORTED_MODULE_1__["Layer"])
    ], LeafletLayerDirective.prototype, "layer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletLayerAdd'),
        __metadata("design:type", Object)
    ], LeafletLayerDirective.prototype, "onAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('leafletLayerRemove'),
        __metadata("design:type", Object)
    ], LeafletLayerDirective.prototype, "onRemove", void 0);
    LeafletLayerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[leafletLayer]'
        }),
        __metadata("design:paramtypes", [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LeafletLayerDirective);
    return LeafletLayerDirective;
}());

//# sourceMappingURL=leaflet-layer.directive.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layers.directive.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layers.directive.js ***!
  \**********************************************************************************************/
/*! exports provided: LeafletLayersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersDirective", function() { return LeafletLayersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Layers directive
 *
 * This directive is used to directly control map layers. As changes are made to the input array of
 * layers, the map is synched to the array. As layers are added or removed from the input array, they
 * are also added or removed from the map. The input array is treated as immutable. To detect changes,
 * you must change the array instance.
 *
 * Important Note: The input layers array is assumed to be immutable. This means you need to use an
 * immutable array implementation or create a new copy of your array when you make changes, otherwise
 * this directive won't detect the change. This is by design. It's for performance reasons. Change
 * detection of mutable arrays requires diffing the state of the array on every DoCheck cycle, which
 * is extremely expensive from a time complexity perspective.
 *
 */
var LeafletLayersDirective = /** @class */ (function () {
    function LeafletLayersDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
        this.layersDiffer = this.differs.find([]).create();
    }
    Object.defineProperty(LeafletLayersDirective.prototype, "layers", {
        get: function () {
            return this.layersValue;
        },
        // Set/get the layers
        set: function (v) {
            this.layersValue = v;
            // Now that we have a differ, do an immediate layer update
            this.updateLayers();
        },
        enumerable: true,
        configurable: true
    });
    LeafletLayersDirective.prototype.ngDoCheck = function () {
        this.updateLayers();
    };
    LeafletLayersDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
        // Update layers once the map is ready
        this.updateLayers();
    };
    LeafletLayersDirective.prototype.ngOnDestroy = function () {
        this.layers = [];
    };
    /**
     * Update the state of the layers.
     * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
     * This is important because it allows us to react to changes to the contents of the array as well
     * as changes to the actual array instance.
     */
    LeafletLayersDirective.prototype.updateLayers = function () {
        var map = this.leafletDirective.getMap();
        if (null != map && null != this.layersDiffer) {
            var changes_1 = this.layersDiffer.diff(this.layersValue);
            if (null != changes_1) {
                // Run outside angular to ensure layer events don't trigger change detection
                this.zone.runOutsideAngular(function () {
                    changes_1.forEachRemovedItem(function (c) {
                        map.removeLayer(c.item);
                    });
                    changes_1.forEachAddedItem(function (c) {
                        map.addLayer(c.item);
                    });
                });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('leafletLayers'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LeafletLayersDirective.prototype, "layers", null);
    LeafletLayersDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[leafletLayers]'
        }),
        __metadata("design:paramtypes", [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LeafletLayersDirective);
    return LeafletLayersDirective;
}());

//# sourceMappingURL=leaflet-layers.directive.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-tile-layer-definition.model.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-tile-layer-definition.model.js ***!
  \*********************************************************************************************************/
/*! exports provided: LeafletTileLayerDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletTileLayerDefinition", function() { return LeafletTileLayerDefinition; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "../../node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

var LeafletTileLayerDefinition = /** @class */ (function () {
    function LeafletTileLayerDefinition(type, url, options) {
        this.type = type;
        this.url = url;
        this.options = options;
    }
    /**
     * Creates a TileLayer from the provided definition. This is a convenience function
     * to help with generating layers from objects.
     *
     * @param layerDef The layer to create
     * @returns {TileLayer} The TileLayer that has been created
     */
    LeafletTileLayerDefinition.createTileLayer = function (layerDef) {
        var layer;
        switch (layerDef.type) {
            case 'xyz':
                layer = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"])(layerDef.url, layerDef.options);
                break;
            case 'wms':
            default:
                layer = leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"].wms(layerDef.url, layerDef.options);
                break;
        }
        return layer;
    };
    /**
     * Creates a TileLayer for each key in the incoming map. This is a convenience function
     * for generating an associative array of layers from an associative array of objects
     *
     * @param layerDefs A map of key to tile layer definition
     * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
     */
    LeafletTileLayerDefinition.createTileLayers = function (layerDefs) {
        var layers = {};
        for (var k in layerDefs) {
            if (layerDefs.hasOwnProperty(k)) {
                layers[k] = (LeafletTileLayerDefinition.createTileLayer(layerDefs[k]));
            }
        }
        return layers;
    };
    /**
     * Create a Tile Layer from the current state of this object
     *
     * @returns {TileLayer} A new TileLayer
     */
    LeafletTileLayerDefinition.prototype.createTileLayer = function () {
        return LeafletTileLayerDefinition.createTileLayer(this);
    };
    return LeafletTileLayerDefinition;
}());

//# sourceMappingURL=leaflet-tile-layer-definition.model.js.map

/***/ }),

/***/ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/leaflet.module.js ***!
  \*****************************************************************************/
/*! exports provided: LeafletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletModule", function() { return LeafletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/leaflet.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/core/leaflet.directive.js");
/* harmony import */ var _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/leaflet-layer.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layer.directive.js");
/* harmony import */ var _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/leaflet-layers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/leaflet-layers.directive.js");
/* harmony import */ var _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers/control/leaflet-control-layers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers.directive.js");
/* harmony import */ var _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layers/base/leaflet-baselayers.directive */ "./node_modules/@asymmetrik/ngx-leaflet/dist/leaflet/layers/base/leaflet-baselayers.directive.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
    LeafletModule_1 = LeafletModule;
    LeafletModule.forRoot = function () {
        return { ngModule: LeafletModule_1, providers: [] };
    };
    var LeafletModule_1;
    LeafletModule = LeafletModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
                _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
                _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
                _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
                _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]
            ],
            declarations: [
                _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
                _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
                _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
                _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
                _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]
            ]
        })
    ], LeafletModule);
    return LeafletModule;
}());

//# sourceMappingURL=leaflet.module.js.map

/***/ }),

/***/ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42a948;\n  /* green */\n}\n\n:host ::ng-deep .card-footer button {\n  background-color: #111111 !important;\n  border: none !important;\n  color: white !important;\n  cursor: pointer !important;\n}\n\n:host ::ng-deep .card-footer button:hover {\n  background-color: #bebebe !important;\n  color: #111111 !important;\n}\n\nnb-card {\n  margin: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL2NhcnJpZXIvY2Fycmllci1tdXRhdGlvbi9jYXJyaWVyLW11dGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL2NhcnJpZXIvY2Fycmllci1tdXRhdGlvbi9jYXJyaWVyLW11dGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVDLDhCQUE4QjtFQUFFLFVBQUE7QUNFakM7O0FEQ0E7RUFDQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7QUNFM0I7O0FEQUE7RUFDQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FDRzFCOztBREFBO0VBQ0MsV0FBVztBQ0daIiwiZmlsZSI6InNyYy9hcHAvQHNoYXJlZC9jYXJyaWVyL2NhcnJpZXItbXV0YXRpb24vY2Fycmllci1tdXRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sXG4ubmctdmFsaWQucmVxdWlyZWQge1xuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7IC8qIGdyZWVuICovXG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZC1mb290ZXIgYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJkLWZvb3RlciBidXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmViZWJlICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiAjMTExMTExICFpbXBvcnRhbnQ7XG59XG5cbm5iLWNhcmQge1xuXHRtYXJnaW46IDBweDtcbn1cbiIsIi5uZy12YWxpZFtyZXF1aXJlZF0sXG4ubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7XG4gIC8qIGdyZWVuICovXG59XG5cbjpob3N0IDo6bmctZGVlcCAuY2FyZC1mb290ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcmQtZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMTExMTEgIWltcG9ydGFudDtcbn1cblxubmItY2FyZCB7XG4gIG1hcmdpbjogMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.ts ***!
  \********************************************************************************/
/*! exports provided: CarrierMutationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierMutationComponent", function() { return CarrierMutationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/carrier/forms/index.ts");
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










let CarrierMutationComponent = class CarrierMutationComponent {
    constructor(toasterService, activeModal, formBuilder, carrierRouter, _translateService) {
        this.toasterService = toasterService;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.carrierRouter = carrierRouter;
        this._translateService = _translateService;
        this.form = this.formBuilder.group({
            basicInfo: _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"].buildForm(this.formBuilder),
            location: _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormComponent"].buildForm(this.formBuilder),
            password: _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"].buildPasswordForm(this.formBuilder),
        });
        this.basicInfo = this.form.get('basicInfo');
        this.location = this.form.get('location');
        this.password = this.form.get('password');
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.BUTTON_DONE = 'BUTTON_DONE';
        this.BUTTON_NEXT = 'BUTTON_NEXT';
        this.BUTTON_PREV = 'BUTTON_PREV';
    }
    get buttonDone() {
        return this._translate(this.BUTTON_DONE);
    }
    get buttonNext() {
        return this._translate(this.BUTTON_NEXT);
    }
    get buttonPrevious() {
        return this._translate(this.BUTTON_PREV);
    }
    ngAfterViewInit() {
        if (this.locationForm) {
            this.locationForm.setDefaultCoords();
        }
    }
    onGeometrySend(geometry) {
        this.mapGeometryEmitter.emit(geometry);
    }
    onCoordinatesChanges(location) {
        this.mapCoordEmitter.emit(location);
    }
    createCarrier() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const geoLocationInput = this.locationForm.getValue();
                geoLocationInput.loc.coordinates.reverse();
                this.loading = true;
                const carrierCreateObj = Object.assign(Object.assign({}, this.basicInfoForm.getValue()), { geoLocation: geoLocationInput });
                if (!carrierCreateObj.logo) {
                    const letter = carrierCreateObj.firstName
                        .charAt(0)
                        .toUpperCase();
                    carrierCreateObj.logo = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__["getDummyImage"])(300, 300, letter);
                }
                const carrier = yield this.carrierRouter.register({
                    carrier: carrierCreateObj,
                    password: this.basicInfoForm.getPassword(),
                });
                this.loading = false;
                this.toasterService.pop('success', `Carrier ${carrier.firstName} was created`);
                this.activeModal.close(carrier);
            }
            catch (err) {
                this.loading = false;
                this.toasterService.pop('error', `Error in creating carrier: "${err.message}"`);
                this.activeModal.dismiss('canceled');
            }
        });
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    _translate(key) {
        let translationResult = '';
        this._translateService.get(key).subscribe((res) => {
            translationResult = res;
        });
        return translationResult;
    }
};
CarrierMutationComponent.ctorParameters = () => [
    { type: angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms__WEBPACK_IMPORTED_MODULE_6__["BasicInfoFormComponent"])
], CarrierMutationComponent.prototype, "basicInfoForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _forms_location__WEBPACK_IMPORTED_MODULE_7__["LocationFormComponent"])
], CarrierMutationComponent.prototype, "locationForm", void 0);
CarrierMutationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carrier-mutation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-mutation.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-mutation.component.scss */ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], CarrierMutationComponent);



/***/ }),

/***/ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@shared/carrier/carrier-mutation/carrier-mutation.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CarrierMutationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierMutationModule", function() { return CarrierMutationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _carrier_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-mutation.component */ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _forms_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms/location */ "./src/app/@shared/forms/location/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forms */ "./src/app/@shared/carrier/forms/index.ts");
/* harmony import */ var _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forms/google-map/google-map.module */ "./src/app/@shared/forms/google-map/google-map.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");










let CarrierMutationModule = class CarrierMutationModule {
};
CarrierMutationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_5__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            _forms__WEBPACK_IMPORTED_MODULE_7__["CarrierFormsModule"],
            _forms_location__WEBPACK_IMPORTED_MODULE_6__["LocationFormModule"],
            _forms_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_8__["GoogleMapModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSpinnerModule"],
        ],
        exports: [_carrier_mutation_component__WEBPACK_IMPORTED_MODULE_2__["CarrierMutationComponent"]],
        declarations: [_carrier_mutation_component__WEBPACK_IMPORTED_MODULE_2__["CarrierMutationComponent"]],
        entryComponents: [_carrier_mutation_component__WEBPACK_IMPORTED_MODULE_2__["CarrierMutationComponent"]],
    })
], CarrierMutationModule);



/***/ }),

/***/ "./src/app/@shared/carrier/carrier-mutation/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/@shared/carrier/carrier-mutation/index.ts ***!
  \***********************************************************/
/*! exports provided: CarrierMutationComponent, CarrierMutationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _carrier_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrier-mutation.component */ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarrierMutationComponent", function() { return _carrier_mutation_component__WEBPACK_IMPORTED_MODULE_1__["CarrierMutationComponent"]; });

/* harmony import */ var _carrier_mutation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-mutation.module */ "./src/app/@shared/carrier/carrier-mutation/carrier-mutation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarrierMutationModule", function() { return _carrier_mutation_module__WEBPACK_IMPORTED_MODULE_2__["CarrierMutationModule"]; });






/***/ }),

/***/ "./src/app/@shared/carrier/carriers-table/carriers-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/@shared/carrier/carriers-table/carriers-table.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0BzaGFyZWQvY2Fycmllci9jYXJyaWVycy10YWJsZS9jYXJyaWVycy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/@shared/carrier/carriers-table/carriers-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@shared/carrier/carriers-table/carriers-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: CarriersSmartTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriersSmartTableComponent", function() { return CarriersSmartTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_shared_render_component_carriers_table_carrier_image_carrier_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/render-component/carriers-table/carrier-image/carrier-image.component */ "./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.ts");
/* harmony import */ var _app_shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@shared/render-component/name-redirect/name-redirect.component */ "./src/app/@shared/render-component/name-redirect/name-redirect.component.ts");
/* harmony import */ var _app_shared_render_component_carriers_table_carrier_phone_carrier_phone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component */ "./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_render_component_carriers_table_carrier_actions_carrier_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component */ "./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.ts");
/* harmony import */ var _modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/server.common/enums/CarrierStatus */ "../common/src/enums/CarrierStatus.ts");
var CarriersSmartTableComponent_1;











let CarriersSmartTableComponent = CarriersSmartTableComponent_1 = class CarriersSmartTableComponent {
    constructor(_translateService) {
        this._translateService = _translateService;
        this.selectMode = 'multi';
        this.actions = '';
        this.redirectPage = 'carriers';
        this.editRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteRow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        this.selectedCarriers = [];
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    get hasSelectedCarriers() {
        return this.selectedCarriers.length > 0;
    }
    ngOnInit() {
        this.loadSettingsSmartTable(this.perPage);
    }
    ngAfterViewInit() {
        if (this.loadWholeData) {
            this.loadData(this.loadWholeData);
        }
        else {
            this.smartTableChange();
        }
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    }
    selectCarrierTmp(ev) {
        this.selectedCarriers = ev.selected;
    }
    loadData(carriersData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sourceSmartTable.load(carriersData);
        });
    }
    loadSettingsSmartTable(perPage) {
        const columnTitlePrefix = 'CARRIERS_VIEW.SMART_TABLE_COLUMNS.';
        const getTranslate = (name) => this._translateService.get(columnTitlePrefix + name);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(this._translateService.get('Id'), getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('PHONE'), getTranslate('STATUS'), getTranslate('ADDRESS'), getTranslate('DELIVERIES'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$))
            .subscribe(([id, image, name, phone, status, address, deliveries]) => {
            this.settingsSmartTable = {
                selectMode: this.selectMode,
                mode: 'external',
                actions: this.actions === 'show' && {
                    add: false,
                },
                edit: {
                    editButtonContent: '<i class="ion-md-create"></i>',
                },
                delete: {
                    deleteButtonContent: '<i class="ion-md-trash"></i>',
                    confirmDelete: true,
                },
                columns: {
                    images: {
                        title: image,
                        class: 'carrier-image',
                        type: 'custom',
                        renderComponent: _app_shared_render_component_carriers_table_carrier_image_carrier_image_component__WEBPACK_IMPORTED_MODULE_4__["CarrierImageComponent"],
                        onComponentInitFunction: (instance) => {
                            instance.redirectPage = this.redirectPage;
                        },
                        filter: false,
                    },
                    name: {
                        title: name,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_name_redirect_name_redirect_component__WEBPACK_IMPORTED_MODULE_5__["RedirectNameComponent"],
                        onComponentInitFunction: (instance) => {
                            instance.redirectPage = this.redirectPage;
                        },
                    },
                    phone: {
                        title: phone,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_carriers_table_carrier_phone_carrier_phone_component__WEBPACK_IMPORTED_MODULE_6__["CarrierPhoneComponent"],
                    },
                    status: { title: status },
                    address: { title: address },
                    deliveries: { title: deliveries, filter: false },
                    actions: {
                        title: 'Actions',
                        filter: false,
                        type: 'custom',
                        renderComponent: _app_shared_render_component_carriers_table_carrier_actions_carrier_actions_component__WEBPACK_IMPORTED_MODULE_9__["CarrierActionsComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage,
                },
            };
        });
    }
    smartTableChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sourceSmartTable
                .onChanged()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.ngDestroy$))
                .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (event.action === 'page') {
                    const page = event.paging.page;
                    this.pageChange.emit(page);
                }
            }));
        });
    }
    static getCarrierSmartTableObject(c) {
        return {
            id: c.id,
            image: c.logo || CarriersSmartTableComponent_1.noInfoSign,
            name: `${c.firstName || CarriersSmartTableComponent_1.noInfoSign} ${c.lastName || CarriersSmartTableComponent_1.noInfoSign}`,
            phone: c.phone || CarriersSmartTableComponent_1.noInfoSign,
            status: {
                [_modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_10__["default"].Offline]: 'Offline',
                [_modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_10__["default"].Online]: 'Online',
                [_modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_10__["default"].Blocked]: 'Blocked',
            }[c.status],
            address: `${c.geoLocation.city || CarriersSmartTableComponent_1.noInfoSign} st. ${c.geoLocation.streetAddress ||
                CarriersSmartTableComponent_1.noInfoSign}, hse. № ${c.geoLocation.house || CarriersSmartTableComponent_1.noInfoSign}`,
            deliveries: c.numberOfDeliveries,
            carrier: c,
        };
    }
};
CarriersSmartTableComponent.noInfoSign = '';
CarriersSmartTableComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CarriersSmartTableComponent.prototype, "perPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarriersSmartTableComponent.prototype, "selectMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CarriersSmartTableComponent.prototype, "actions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarriersSmartTableComponent.prototype, "redirectPage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], CarriersSmartTableComponent.prototype, "loadWholeData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarriersSmartTableComponent.prototype, "editRow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarriersSmartTableComponent.prototype, "deleteRow", void 0);
CarriersSmartTableComponent = CarriersSmartTableComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carriers-smart-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carriers-table.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/carriers-table/carriers-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carriers-table.component.scss */ "./src/app/@shared/carrier/carriers-table/carriers-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
], CarriersSmartTableComponent);



/***/ }),

/***/ "./src/app/@shared/carrier/carriers-table/carriers-table.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@shared/carrier/carriers-table/carriers-table.module.ts ***!
  \*************************************************************************/
/*! exports provided: CarriersSmartTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriersSmartTableModule", function() { return CarriersSmartTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var _app_shared_render_component_carriers_table_carriers_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/@shared/render-component/carriers-table/carriers-table.module */ "./src/app/@shared/render-component/carriers-table/carriers-table.module.ts");
/* harmony import */ var _carriers_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carriers-table.component */ "./src/app/@shared/carrier/carriers-table/carriers-table.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let CarriersSmartTableModule = class CarriersSmartTableModule {
};
CarriersSmartTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
            _app_shared_render_component_carriers_table_carriers_table_module__WEBPACK_IMPORTED_MODULE_4__["CarriersTableModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
        ],
        declarations: [_carriers_table_component__WEBPACK_IMPORTED_MODULE_5__["CarriersSmartTableComponent"]],
        exports: [_carriers_table_component__WEBPACK_IMPORTED_MODULE_5__["CarriersSmartTableComponent"]],
    })
], CarriersSmartTableModule);



/***/ }),

/***/ "./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-img {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.img-rounded {\n  max-height: 70px;\n}\n\n.remove-icon {\n  cursor: pointer;\n}\n\n.remove-icon span {\n  padding-right: 7px;\n  position: absolute;\n  font-size: 1.1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL2NhcnJpZXIvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0BzaGFyZWQvY2Fycmllci9mb3Jtcy9iYXNpYy1pbmZvL2Jhc2ljLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNDcEI7O0FERUE7RUFDQyxnQkFBZ0I7QUNDakI7O0FERUE7RUFDQyxlQUFlO0FDQ2hCOztBREZBO0VBSUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNFbEIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL2NhcnJpZXIvZm9ybXMvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJldmlldy1pbWcge1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcm91bmRlZCB7XG5cdG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi5yZW1vdmUtaWNvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblxuXHRzcGFuIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiA3cHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdH1cbn1cbiIsIi5wcmV2aWV3LWltZyB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmltZy1yb3VuZGVkIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnJlbW92ZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlLWljb24gc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../forms/helpers */ "./src/app/@shared/forms/helpers.ts");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-url */ "../../node_modules/is-url/index.js");
/* harmony import */ var is_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var BasicInfoFormComponent_1;








let BasicInfoFormComponent = BasicInfoFormComponent_1 = class BasicInfoFormComponent {
    constructor(translateService) {
        this.translateService = translateService;
    }
    get isActive() {
        return this.form.get('isActive');
    }
    get isSharedCarrier() {
        return this.form.get('isSharedCarrier');
    }
    get username() {
        return this.form.get('username');
    }
    get phone() {
        return this.form.get('phone');
    }
    get firstName() {
        return this.form.get('firstName');
    }
    get lastName() {
        return this.form.get('lastName');
    }
    get logo() {
        return this.form.get('logo');
    }
    get showLogoMeta() {
        return this.logo && this.logo.value !== '';
    }
    static buildForm(formBuilder) {
        return formBuilder.group({
            firstName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(`^[a-z ,.'-]+$`, 'i')),
                ],
            ],
            lastName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(`^[a-z ,.'-]+$`, 'i')),
                ],
            ],
            isActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isSharedCarrier: [false],
            phone: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(BasicInfoFormComponent_1.phoneNumberRegex),
                ],
            ],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logo: [
                '',
                [
                    (control) => {
                        const imageUrl = control.value;
                        if (!is_url__WEBPACK_IMPORTED_MODULE_5___default()(imageUrl) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(imageUrl)) {
                            return { invalidImageUrl: true };
                        }
                        return null;
                    },
                ],
            ],
        });
    }
    static buildPasswordForm(formBuilder) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    ngOnInit() {
        this.getuploaderPlaceholderText();
    }
    ngAfterViewInit() {
        this._setupCarrierLogoUrlValidation();
    }
    getValue() {
        return this.form.getRawValue();
    }
    setValue(basicInfo) {
        _forms_helpers__WEBPACK_IMPORTED_MODULE_4__["FormHelpers"].deepMark(this.form, 'dirty');
        this.form.setValue(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pick(basicInfo, Object.keys(this.getValue())));
    }
    getPassword() {
        if (!this.password) {
            throw new Error("Form doesn't contain password");
        }
        return this.password.value;
    }
    setPassword(value) {
        this.password.setValue(value);
    }
    deleteImg() {
        this.logo.setValue('');
    }
    getuploaderPlaceholderText() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.uploaderPlaceholder = yield this.translateService
                .get('CARRIERS_VIEW.EDIT.PHOTO_URL')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                .toPromise();
            this.uploaderPlaceholder += ' (optional)';
        });
    }
    _setupCarrierLogoUrlValidation() {
        this.logoImagePreview.nativeElement.onload = () => {
            if (this.showLogoMeta) {
                this.logo.setErrors(null);
            }
        };
        this.logoImagePreview.nativeElement.onerror = () => {
            if (this.showLogoMeta) {
                this.logo.setErrors({ invalidUrl: true });
            }
        };
    }
};
BasicInfoFormComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
BasicInfoFormComponent.phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9x]*$/;
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logoImagePreview'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BasicInfoFormComponent.prototype, "logoImagePreview", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
], BasicInfoFormComponent.prototype, "form", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["AbstractControl"])
], BasicInfoFormComponent.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BasicInfoFormComponent.prototype, "boxShadow", void 0);
BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carrier-basic-info-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
], BasicInfoFormComponent);



/***/ }),

/***/ "./src/app/@shared/carrier/forms/basic-info/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/@shared/carrier/forms/basic-info/index.ts ***!
  \***********************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/app/@shared/carrier/forms/basic-info/basic-info-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info_form_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });





/***/ }),

/***/ "./src/app/@shared/carrier/forms/carrier-forms.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/@shared/carrier/forms/carrier-forms.module.ts ***!
  \***************************************************************/
/*! exports provided: CarrierFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierFormsModule", function() { return CarrierFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/carrier/forms/basic-info/index.ts");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared/file-uploader/file-uploader.module */ "./src/app/@shared/file-uploader/file-uploader.module.ts");







let CarrierFormsModule = class CarrierFormsModule {
};
CarrierFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _app_theme__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            _app_shared_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_6__["FileUploaderModule"],
        ],
        exports: [_basic_info__WEBPACK_IMPORTED_MODULE_4__["BasicInfoFormComponent"]],
        declarations: [_basic_info__WEBPACK_IMPORTED_MODULE_4__["BasicInfoFormComponent"]],
    })
], CarrierFormsModule);



/***/ }),

/***/ "./src/app/@shared/carrier/forms/index.ts":
/*!************************************************!*\
  !*** ./src/app/@shared/carrier/forms/index.ts ***!
  \************************************************/
/*! exports provided: CarrierFormsModule, BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _basic_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info */ "./src/app/@shared/carrier/forms/basic-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return _basic_info__WEBPACK_IMPORTED_MODULE_1__["BasicInfoFormComponent"]; });

/* harmony import */ var _carrier_forms_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-forms.module */ "./src/app/@shared/carrier/forms/carrier-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarrierFormsModule", function() { return _carrier_forms_module__WEBPACK_IMPORTED_MODULE_2__["CarrierFormsModule"]; });






/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CarrierActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierActionsComponent", function() { return CarrierActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_pages_carriers_carrier_location_carrier_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pages/+carriers/+carrier/location/carrier-location.component */ "./src/app/pages/+carriers/+carrier/location/carrier-location.component.ts");
/* harmony import */ var _app_pages_carriers_carrier_carrier_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/pages/+carriers/+carrier/carrier-info.component */ "./src/app/pages/+carriers/+carrier/carrier-info.component.ts");





let CarrierActionsComponent = class CarrierActionsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    openInfo() {
        const activeModal = this.modalService.open(_app_pages_carriers_carrier_carrier_info_component__WEBPACK_IMPORTED_MODULE_4__["CarrierTableInfoComponent"], {
            size: 'sm',
            container: 'nb-layout',
        });
        const modalComponent = activeModal.componentInstance;
        modalComponent.carrierId = this.rowData.id;
    }
    openMap() {
        const activeModal = this.modalService.open(_app_pages_carriers_carrier_location_carrier_location_component__WEBPACK_IMPORTED_MODULE_3__["CarrierLocationComponent"], {
            size: 'sm',
            windowClass: 'map-modal',
        });
        const modalComponent = activeModal.componentInstance;
        modalComponent.carrierId = this.rowData.id;
    }
};
CarrierActionsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarrierActionsComponent.prototype, "rowData", void 0);
CarrierActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-actions.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], CarrierActionsComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 64px;\n  height: 64px;\n}\n\n.redirect-image {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1pbWFnZS9jYXJyaWVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1pbWFnZS9jYXJyaWVyLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVztFQUNYLFlBQVk7QUNDYjs7QURFQTtFQUNDLGVBQWU7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1pbWFnZS9jYXJyaWVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcblx0d2lkdGg6IDY0cHg7XG5cdGhlaWdodDogNjRweDtcbn1cblxuLnJlZGlyZWN0LWltYWdlIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIiwiaW1nIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnJlZGlyZWN0LWltYWdlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CarrierImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierImageComponent", function() { return CarrierImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CarrierImageComponent = class CarrierImageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.imageUrl = this.rowData.image;
    }
    redirect() {
        if (this.redirectPage) {
            this.router.navigate([`${this.redirectPage}/${this.rowData.id}`]);
        }
    }
};
CarrierImageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CarrierImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-image.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-image.component.scss */ "./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CarrierImageComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none;\n}\n\ndiv a i {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 18px;\n  height: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1waG9uZS9jYXJyaWVyLXBob25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1waG9uZS9jYXJyaWVyLXBob25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBUUMseUJBQW1CO01BQW5CLHNCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBcUI7QUNOdEI7O0FESkE7RUFFRSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtNQUFuQixzQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtNQUF2QixxQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FDTWQiLCJmaWxlIjoic3JjL2FwcC9Ac2hhcmVkL3JlbmRlci1jb21wb25lbnQvY2FycmllcnMtdGFibGUvY2Fycmllci1waG9uZS9jYXJyaWVyLXBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IGEge1xuXHRpIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0d2lkdGg6IDE4cHg7XG5cdFx0aGVpZ2h0OiAxOHB4O1xuXHR9XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsImRpdiBhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5kaXYgYSBpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CarrierPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierPhoneComponent", function() { return CarrierPhoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarrierPhoneComponent = class CarrierPhoneComponent {
    constructor() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarrierPhoneComponent.prototype, "rowData", void 0);
CarrierPhoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-phone.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-phone.component.scss */ "./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CarrierPhoneComponent);



/***/ }),

/***/ "./src/app/@shared/render-component/carriers-table/carriers-table.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@shared/render-component/carriers-table/carriers-table.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CarriersTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriersTableModule", function() { return CarriersTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _pages_carriers_carrier_carrier_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pages/+carriers/+carrier/carrier-info.component */ "./src/app/pages/+carriers/+carrier/carrier-info.component.ts");
/* harmony import */ var _carrier_image_carrier_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrier-image/carrier-image.component */ "./src/app/@shared/render-component/carriers-table/carrier-image/carrier-image.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _carrier_phone_carrier_phone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrier-phone/carrier-phone.component */ "./src/app/@shared/render-component/carriers-table/carrier-phone/carrier-phone.component.ts");
/* harmony import */ var _carrier_actions_carrier_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carrier-actions/carrier-actions.component */ "./src/app/@shared/render-component/carriers-table/carrier-actions/carrier-actions.component.ts");









const COMPONENTS = [
    _carrier_actions_carrier_actions_component__WEBPACK_IMPORTED_MODULE_8__["CarrierActionsComponent"],
    _pages_carriers_carrier_carrier_info_component__WEBPACK_IMPORTED_MODULE_4__["CarrierTableInfoComponent"],
    _carrier_image_carrier_image_component__WEBPACK_IMPORTED_MODULE_5__["CarrierImageComponent"],
    _carrier_phone_carrier_phone_component__WEBPACK_IMPORTED_MODULE_7__["CarrierPhoneComponent"],
];
let CarriersTableModule = class CarriersTableModule {
};
CarriersTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()],
        declarations: COMPONENTS,
        entryComponents: COMPONENTS,
        exports: COMPONENTS,
    })
], CarriersTableModule);



/***/ }),

/***/ "./src/app/pages/+carriers/+carrier/carrier-info.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/+carriers/+carrier/carrier-info.component.ts ***!
  \********************************************************************/
/*! exports provided: CarrierTableInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTableInfoComponent", function() { return CarrierTableInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let CarrierTableInfoComponent = class CarrierTableInfoComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    ngOnInit() { }
};
CarrierTableInfoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
CarrierTableInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-info.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/carrier-info.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], CarrierTableInfoComponent);



/***/ }),

/***/ "./src/app/pages/+carriers/+carrier/location/carrier-location.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/+carriers/+carrier/location/carrier-location.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-default :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-cosmic :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-corporate :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-everlight :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-everlight :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-everdark :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-everdark :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host instead of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-dark :host nb-card-body {\n  padding: 0;\n}\n.nb-theme-dark :host ::ng-deep .leaflet-container {\n  width: 100%;\n}\n.header-color {\n  color: #181616;\n  background-color: #f1efef;\n}\n.googleMap {\n  width: 100%;\n  height: 200px !important;\n}\n.modal-style {\n  background: white;\n  width: 60vw;\n  position: absolute;\n  top: 10%;\n  left: calc(50% - 30vw);\n}\n.modal-style nb-card-header {\n  background: white;\n}\n.modal-style .googleMap {\n  width: 100%;\n  height: 400px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9fdGhlbWluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy8rY2FycmllcnMvK2NhcnJpZXIvbG9jYXRpb24vY2Fycmllci1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL19taXhpbnMuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL19mdW5jdGlvbnMuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL192YXJpYW50cy5zY3NzIiwiL2hvbWUvaXRleHBlcnQvRG9jdW1lbnRzL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9hZG1pbi13ZWItYW5ndWxhci9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fbWFwcGluZy5zY3NzIiwiL2hvbWUvaXRleHBlcnQvRG9jdW1lbnRzL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9hZG1pbi13ZWItYW5ndWxhci9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvdGhlbWluZy9fcmVnaXN0ZXIuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2luc3RhbGwuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL3RoZW1pbmcvX2dldC12YWx1ZS5zY3NzIiwiL2hvbWUvaXRleHBlcnQvRG9jdW1lbnRzL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9hZG1pbi13ZWItYW5ndWxhci9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGVmYXVsdC5zY3NzIiwiL2hvbWUvaXRleHBlcnQvRG9jdW1lbnRzL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9hZG1pbi13ZWItYW5ndWxhci9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fZGFyay5zY3NzIiwiL2hvbWUvaXRleHBlcnQvRG9jdW1lbnRzL0RvbGNlR3JvY2VyeS9wYWNrYWdlcy9hZG1pbi13ZWItYW5ndWxhci9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcy9fY29zbWljLnNjc3MiLCIvaG9tZS9pdGV4cGVydC9Eb2N1bWVudHMvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL2FkbWluLXdlYi1hbmd1bGFyL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rY2FycmllcnMvK2NhcnJpZXIvbG9jYXRpb24vY2Fycmllci1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQ0lFO0FERUY7OztFQ0VFO0FDUkY7Ozs7RURhRTtBQzJKRjs7OztFRHRKRTtBQ2dMRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRDVEQztBRXRJRDs7OztFRjJJRTtBRzNJRjs7OztFSGdKRTtBSWhKRjs7OztFSnFKRTtBS25KRjs7OztFTHdKRTtBTTFKRjs7OztFTitKRTtBTy9KRjs7OztFUG9LRTtBUXBLRjs7OztFUnlLRTtBRXpLRjs7OztFRjhLRTtBQzlLRjs7OztFRG1MRTtBQ1hGOzs7O0VEZ0JFO0FDVUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0QwR0M7QVM1U0Q7Ozs7RVRpVEU7QUVqVEY7Ozs7RUZzVEU7QUN0VEY7Ozs7RUQyVEU7QUNuSkY7Ozs7RUR3SkU7QUM5SEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RrUEM7QVFwYkQ7Ozs7RVJ5YkU7QUV6YkY7Ozs7RUY4YkU7QUM5YkY7Ozs7RURtY0U7QUMzUkY7Ozs7RURnU0U7QUN0UUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0QwWEM7QVU1akJEOzs7O0VWaWtCRTtBRWprQkY7Ozs7RUZza0JFO0FDdGtCRjs7OztFRDJrQkU7QUNuYUY7Ozs7RUR3YUU7QUM5WUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0RrZ0JDO0FTcHNCRDs7OztFVHlzQkU7QUV6c0JGOzs7O0VGOHNCRTtBQzlzQkY7Ozs7RURtdEJFO0FDM2lCRjs7OztFRGdqQkU7QUN0aEJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEMG9CQztBUTUwQkQ7Ozs7RVJpMUJFO0FFajFCRjs7OztFRnMxQkU7QUN0MUJGOzs7O0VEMjFCRTtBQ25yQkY7Ozs7RUR3ckJFO0FDOXBCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDRGt4QkM7QVdwOUJEOzs7O0VYeTlCRTtBRXo5QkY7Ozs7RUY4OUJFO0FDOTlCRjs7OztFRG0rQkU7QUMzekJGOzs7O0VEZzBCRTtBQ3R5QkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0QwNUJDO0FRNWxDRDs7OztFUmltQ0U7QUVqbUNGOzs7O0VGc21DRTtBQ3RtQ0Y7Ozs7RUQybUNFO0FDbjhCRjs7OztFRHc4QkU7QUM5NkJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NEa2lDQztBTXpwQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S042cUNDO0FZcnZDSjtFQUNDLFVBQVU7QVp1dkNaO0FZcHZDQztFQUNDLFdBQVc7QVp1dkNiO0FNcHJDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTnlzQ0M7QVlqeENKO0VBQ0MsVUFBVTtBWm14Q1o7QVloeENDO0VBQ0MsV0FBVztBWm14Q2I7QU1odENJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOcXVDQztBWTd5Q0o7RUFDQyxVQUFVO0FaK3lDWjtBWTV5Q0M7RUFDQyxXQUFXO0FaK3lDYjtBTTV1Q0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S05pd0NDO0FZejBDSjtFQUNDLFVBQVU7QVoyMENaO0FZeDBDQztFQUNDLFdBQVc7QVoyMENiO0FNeHdDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLTjZ4Q0M7QVlyMkNKO0VBQ0MsVUFBVTtBWnUyQ1o7QVlwMkNDO0VBQ0MsV0FBVztBWnUyQ2I7QU1weUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tOeXpDQztBWWo0Q0o7RUFDQyxVQUFVO0FabTRDWjtBWWg0Q0M7RUFDQyxXQUFXO0FabTRDYjtBWTkzQ0E7RUFDQyxjQUFzQjtFQUN0Qix5QkFBb0M7QVppNENyQztBWTkzQ0E7RUFDQyxXQUFXO0VBQ1gsd0JBQXdCO0FaaTRDekI7QVk5M0NBO0VBQ0MsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjtBWmk0Q3ZCO0FZdDRDQTtFQU9FLGlCQUFpQjtBWm00Q25CO0FZMTRDQTtFQVVFLFdBQVc7RUFDWCx3QkFBd0I7QVpvNEMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytjYXJyaWVycy8rY2Fycmllci9sb2NhdGlvbi9jYXJyaWVyLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuXG4vLyBwdWJsaWMgdmFyaWFibGVzXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtY29zbWljIDpob3N0IG5iLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtZXZlcmxpZ2h0IDpob3N0IG5iLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYi10aGVtZS1ldmVybGlnaHQgOmhvc3QgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4ubmItdGhlbWUtZXZlcmRhcmsgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5iLXRoZW1lLWV2ZXJkYXJrIDpob3N0IDo6bmctZGVlcCAubGVhZmxldC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRhcmsgOmhvc3QgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5iLXRoZW1lLWRhcmsgOmhvc3QgOjpuZy1kZWVwIC5sZWFmbGV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWNvbG9yIHtcbiAgY29sb3I6ICMxODE2MTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7XG59XG5cbi5nb29nbGVNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDYwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzB2dyk7XG59XG5cbi5tb2RhbC1zdHlsZSBuYi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubW9kYWwtc3R5bGUgLmdvb2dsZU1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdiYXNpYycsICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdjb250cm9sJztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRldmEtbWFwcGluZzogKFxuXG4gIC8qIENvbXBvbmVudHMgbWFwcGluZ3MgLSBtYXBzIHRoZW1lIHZhcmlhYmxlcyBvbnRvIGNvbXBvbmVudCB2YXJpYWJsZXMgKi9cblxuICBsaW5rLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbGluay10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSxcbiAgbGluay10ZXh0LWZvY3VzLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGxpbmstdGV4dC1ob3Zlci1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIGNhcmQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYXJkLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNhcmQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2FyZC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FyZC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FyZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiAxcmVtIDEuNXJlbSxcbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FyZC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjYXJkLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2FyZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYXJkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhcmQtaGVhZGVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FyZC1oZWFkZXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG5cbiAgY2FyZC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBmb290ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBmb290ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBmb290ZXItZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgZm9vdGVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbGF5b3V0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsYXlvdXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGF5b3V0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBsYXlvdXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGxheW91dC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2lkZWJhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzaWRlYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzaWRlYmFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNpZGViYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNpZGViYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcbiAgc2lkZWJhci1tZW51LWl0ZW0taGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIG1lbnUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIG1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIG1lbnUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBtZW51LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBtZW51LWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0taG92ZXItY3Vyc29yOiBwb2ludGVyLFxuICBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcixcblxuICBtZW51LWl0ZW0taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcbiAgbWVudS1pdGVtLWljb24td2lkdGg6IDEuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LXRleHQtYWxpZ246IGNlbnRlcixcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRvYXN0ci1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvYXN0ci1wYWRkaW5nOiAxcmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgdG9hc3RyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHksXG4gIHRvYXN0ci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsXG4gIHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0b2FzdHItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdG9hc3RyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1pY29uLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tYmFzaWMtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIHRvYXN0ci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1pY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tdGlueS1pY29uLXNpemU6IDAuNzVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtaWNvbi1zaXplOiAxcmVtLFxuICBidXR0b24tc21hbGwtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXNtYWxsLWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXNpemU6IDEuMjVyZW0sXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLW9mZnNldDogMC41cmVtLFxuXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBidXR0b24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1sYXJnZS1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1sYXJnZS1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgYnV0dG9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tZ2lhbnQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tZ2lhbnQtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sXG5cbiAgYnV0dG9uLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidXR0b24tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tb3V0bGluZS1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLW91dGxpbmUtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZ2hvc3QtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZ2hvc3QtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24taGVyby1ib3JkZXItd2lkdGg6IDAsXG4gIGJ1dHRvbi1oZXJvLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjM3NXJlbSAwLjY4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNXJlbSAwLjkzNzVyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMTg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDEuNDM3NXJlbSxcblxuICBidXR0b24taGVyby1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tdGV4dC1zaGFkb3c6IHNoYWRvdyxcbiAgYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1iZXZlbC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZ2xvdy1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1pbmZvLWJldmVsLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1nbG93LWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1kYW5nZXItYmV2ZWwtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICBidXR0b24taGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24taGVyby1jb250cm9sLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpY29uLWJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC41cmVtIDAuMzc1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMXJlbSxcblxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGlucHV0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgaW5wdXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgaW5wdXQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXNtYWxsLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcbiAgaW5wdXQtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgY2hlY2tib3gtdGV4dC1zcGFjZTogMC42ODc1cmVtLFxuICBjaGVja2JveC1wYWRkaW5nOiAwLFxuICBjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGNoZWNrYm94LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGJhZGdlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJhZGdlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBiYWRnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJhZGdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBiYWRnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBiYWRnZS1wYWRkaW5nOiAwLjI1cmVtIDAuNHJlbSxcblxuICBiYWRnZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGJhZGdlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYmFkZ2UtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBwcm9ncmVzcy1iYXItdGlueS1oZWlnaHQ6IDFyZW0sXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLWhlaWdodDogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLWhlaWdodDogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1naWFudC1oZWlnaHQ6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBwcm9ncmVzcy1iYXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBwcm9ncmVzcy1iYXItYmFzaWMtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItaW5mby1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWxlcnQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBhbGVydC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1hY2NlbnQtYmFzaWMtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhbGVydC1hY2NlbnQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcblxuICBhbGVydC1vdXRsaW5lLXdpZHRoOiAxcHgsXG4gIGFsZXJ0LW91dGxpbmUtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtY29udHJvbC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG5cbiAgY2hhdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYm9yZGVyOiBub25lLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBjaGF0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBjaGF0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNoYXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2hhdC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2hhdC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNoYXQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC10aW55LWhlaWdodDogMTMuNXJlbSxcbiAgY2hhdC1zbWFsbC1oZWlnaHQ6IDIxcmVtLFxuICBjaGF0LW1lZGl1bS1oZWlnaHQ6IDI4LjVyZW0sXG4gIGNoYXQtbGFyZ2UtaGVpZ2h0OiAzNnJlbSxcbiAgY2hhdC1naWFudC1oZWlnaHQ6IDQzLjVyZW0sXG5cbiAgY2hhdC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hhdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hhdC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hhdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoYXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hhdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjaGF0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNoYXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2hhdC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBzcGlubmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBzcGlubmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBzcGlubmVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZmlsbGVkLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1oZWlnaHQtdGlueTogMXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMS41cmVtLFxuICBzcGlubmVyLWhlaWdodC1sYXJnZTogMS43NXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6IDJyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMjAuNjI1cmVtLFxuICBjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNhbGVuZGFyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhbGVuZGFyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhbGVuZGFyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYWxlbmRhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctdG9wOiAwLjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b206IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1zdGFydDogMC42MjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWVuZDogMC42MjVyZW0sXG5cbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOiAwLjYyNXJlbSAwLjI1cmVtLFxuXG4gIGNhbGVuZGFyLWNlbGwtaW5hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjgxMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS10ZXh0LWNvbG9yOiBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktd2lkdGgsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDIyLjM3NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNS4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSksXG5cbiAgdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTMsXG4gIHRvb2x0aXAtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1ib3JkZXItc3R5bGU6IGRhc2hlZCxcbiAgdG9vbHRpcC1ib3JkZXItd2lkdGg6IDAsXG4gIHRvb2x0aXAtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9vbHRpcC1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgdG9vbHRpcC10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcbiAgdG9vbHRpcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHRvb2x0aXAtdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0LFxuICB0b29sdGlwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1pY29uLWhlaWdodDogMXJlbSxcbiAgdG9vbHRpcC1pY29uLXdpZHRoOiAxcmVtLFxuICB0b29sdGlwLW1heC13aWR0aDogMTZyZW0sXG5cbiAgdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHRvb2x0aXAtYmFzaWMtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b29sdGlwLXByaW1hcnktYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b29sdGlwLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9vbHRpcC1jb250cm9sLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgb3B0aW9uLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogbm9uZSxcbiAgb3B0aW9uLWxpc3QtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBvcHRpb24tbGlzdC1ib3JkZXItY29sb3IsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItd2lkdGg6IG9wdGlvbi1saXN0LWJvcmRlci13aWR0aCxcblxuICBvcHRpb24tZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBvcHRpb24tZ3JvdXAtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgb3B0aW9uLWdyb3VwLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgb3B0aW9uLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIG9wdGlvbi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgb3B0aW9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcblxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nLFxuXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgb3B0aW9uLW1lZGl1bS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZyxcblxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmcsXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgc2VsZWN0LWljb24tb2Zmc2V0OiAycmVtLFxuXG4gIHNlbGVjdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWxlY3QtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG5cbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci1zdHlsZTogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItd2lkdGg6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3Mtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tbGFyZ2UtcGFkZGluZzogMC43NXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDFyZW0sXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgZGF0ZXBpY2tlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBkYXRlcGlja2VyLWJvcmRlci13aWR0aDogMCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcblxuICByYWRpby13aWR0aDogMS4yNXJlbSxcbiAgcmFkaW8taGVpZ2h0OiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICByYWRpby1ib3JkZXItd2lkdGg6IDFweCxcbiAgcmFkaW8tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICByYWRpby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcmFkaW8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICByYWRpby10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHJhZGlvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHJhZGlvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgcmFkaW8tYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgcmFkaW8tYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1iYXNpYy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8taW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1pbmZvLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICByYWRpby1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8taW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8taW5mby1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHJhZGlvLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgcmFkaW8taW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICByYWRpby1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1kYW5nZXItaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICByYWRpby1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICByYWRpby1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci13aWR0aDogMXB4LFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICB0cmVlLWdyaWQtcm93LW1pbi1oZWlnaHQ6IDJyZW0sXG4gIHRyZWUtZ3JpZC1jZWxsLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG5cbiAgdHJlZS1ncmlkLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtZmFtaWx5OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXNpemU6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXdlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtcm93LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtcm93LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYm9yZGVyOiBub25lLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLXBhZGRpbmc6IDAsXG5cbiAgaWNvbi1mb250LXNpemU6IDEuMjVyZW0sXG4gIGljb24tbGluZS1oZWlnaHQ6IDEsXG4gIGljb24td2lkdGg6IDFlbSxcbiAgaWNvbi1oZWlnaHQ6IDFlbSxcbiAgaWNvbi1zdmctdmVydGljYWwtYWxpZ246IHRvcCxcbiAgaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICB0b2dnbGUtaGVpZ2h0OiAxLjg3NXJlbSxcbiAgdG9nZ2xlLXdpZHRoOiAzLjEyNXJlbSxcbiAgdG9nZ2xlLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2dnbGUtYm9yZGVyLXJhZGl1czogMTAwcHgsXG4gIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICB0b2dnbGUtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgdG9nZ2xlLXN3aXRjaGVyLXNpemU6IDEuNzVyZW0sXG4gIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6IDAuNzVyZW0sXG4gIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgdG9nZ2xlLWN1cnNvcjogcG9pbnRlcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0OiAxLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWljb24tc2l6ZTogYnV0dG9uLXRpbnktaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodDogMnJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaWNvbi1zaXplOiBidXR0b24tc21hbGwtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1pY29uLXNpemU6IGJ1dHRvbi1tZWRpdW0taWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2Utd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWljb24tc2l6ZTogYnV0dG9uLWxhcmdlLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodDogMy41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1pY29uLXNpemU6IGJ1dHRvbi1naWFudC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZXMvbWFwcGluZyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcblxuICBAaWYgKGxlbmd0aCgkbmItZW5hYmxlZC10aGVtZXMpID09IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICRuYi10aGVtZXMge1xuICAgICAgJG5iLWVuYWJsZWQtdGhlbWVzOiBhcHBlbmQoJG5iLWVuYWJsZWQtdGhlbWVzLCAkdGhlbWUtbmFtZSkgIWdsb2JhbDtcbiAgICB9XG4gIH1cbiAgQHJldHVybiAkbmItZW5hYmxlZC10aGVtZXM7XG59XG5cbkBmdW5jdGlvbiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCkge1xuICAkdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcbiAgQHJldHVybiBudGgoJHRoZW1lcywgbGVuZ3RoKCR0aGVtZXMpKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcy1leHBvcnQsICRwYXJlbnQtbmFtZSk7XG4gIEBpZiAoJHBhcmVudC10aGVtZSAhPSBudWxsKSB7XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkcGFyZW50LXRoZW1lLCBkYXRhKSwgJHRoZW1lKTtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoXG4gICAgZGF0YTogJHRoZW1lLFxuICAgIHBhcmVudDogJHBhcmVudC1uYW1lLFxuICApO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCAkdGhlbWUtZGF0YSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmFtZSkge1xuICAkdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJG5hbWUpO1xuXG4gIC8vIFRPRE86IGNoZWNrIGlmIG9wdGltYWwgcGxhY2VcbiAgQGlmICgkdGhlbWUgPT0gbnVsbCkge1xuICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogdGhlbWUgYCcgKyAkbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggYG5iLXJlZ2lzdGVyLXRoZW1lYCBmdW5jdGlvbi4nO1xuICB9XG5cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBSZWdpc3RlcnMgYSBuZXcgdGhlbWVcbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICBAaWYgKCRuYi10aGVtZS1leHBvcnQtbW9kZSA9PSB0cnVlKSB7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZSkgIWdsb2JhbDtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuICBAaWYgKCRwYXJlbnQtbmFtZSAhPSBudWxsKSB7XG4gICAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkcGFyZW50LW5hbWUpO1xuICAgIEBpZiAoJHBhcmVudC10aGVtZSA9PSBudWxsKSB7XG4gICAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHBhcmVudCB0aGVtZSBgJyArICRwYXJlbnQtbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIG9yIGltcG9ydGVkLic7XG4gICAgfVxuICAgICR0aGVtZTogbWFwLW1lcmdlKCRwYXJlbnQtdGhlbWUsICR0aGVtZSk7XG4gIH1cbiAgJHRoZW1lOiBtYXAtbWVyZ2UoJGV2YS1tYXBwaW5nLCAkdGhlbWUpO1xuICAkbmItdGhlbWVzOiBtYXAtc2V0KCRuYi10aGVtZXMsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgQHJldHVybiAkbmItdGhlbWVzO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsICR0aGVtZSkge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuXG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJyBhbmQgbWFwLWdldCgkdGhlbWUsICR2YWx1ZSkpIHtcbiAgICAgICAgLS0jeyR2YXJ9OiB2YXIoLS0jeyR2YWx1ZX0pO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIC0tI3skdmFyfTogI3skdmFsdWV9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAncHJlLXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6IG5iLXByb2Nlc3MtdGhlbWUobmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogKCkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAvLyBAYnJlYWtpbmctY2hhbmdlIDUuMC4wXG4gIDpob3N0IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICRlbmFibGVkLXRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJGVuYWJsZWQtdGhlbWVzIHtcblxuICAgIEBpbmNsdWRlIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0gOmhvc3Qge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBjb21wb25lbnQgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gIH0gQGVsc2Uge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICBAY29udGVudDtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKTtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgZ2xvYmFsIHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuQG1peGluIG5iLWluc3RhbGwoKSB7XG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICAkcGFyZW50LXZhbHVlOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICBAaWYgKCRwYXJlbnQtdmFsdWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkcGFyZW50LXZhbHVlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5AZnVuY3Rpb24gbmItcHJvY2Vzcy10aGVtZSgkdGhlbWUpIHtcbiAgJHByb2Nlc3NlZC10aGVtZTogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICRwcm9jZXNzZWQtdGhlbWU6IG1hcC1zZXQoJHByb2Nlc3NlZC10aGVtZSwgJGtleSwgbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cbiAgQHJldHVybiAkcHJvY2Vzc2VkLXRoZW1lO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiAkbmItdGhlbWUtbmFtZTtcbiAgfVxuXG4gIEByZXR1cm4gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuXG4gICR2YWx1ZTogKCk7XG5cbiAgLy8gaW4gY2FzZSBvZiBjc3MgY3VzdG9tIHByb3BlcnRpZXMgLSBqdXN0IHJldHVybnMgdmFyKC0tdmFyLW5hbWUpIC0gdGhlIHJlc3QgaXMgYSBicm93c2VyIGpvYlxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzID09IHRydWUpIHtcbiAgICAvLyB0aGVyZSBpcyBubyB3YXkgdG8gY2hlY2sgaWYgdmFyaWFibGUgZXhpc3RzIGFzIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQgaXMgb3V0c2lkZSBvZiBwYXJ0aWN1bGFyIHRoZW1lXG4gICAgLy8gYmVjYXVzZSB3ZSBwcm9jZXNzIGNzcyBpbiB0aGlzIG1vZGUgb25seSBvbmNlISAoYW5kIG5vdCBmb3IgZWFjaCB0aGVtZSlcbiAgICAkdmFsdWU6IHZhcigtLSN7JGtleX0pO1xuICB9IEBlbHNlIHtcbiAgICAvLyBpbiBhIHByZXByb2Nlc3MgbW9kZSAobmItaW5zdGFsbC1nbG9iYWwgY2FsbCkgZ2V0IHJlYWR5IHZhbHVlIGZyb20gJG5iLXByb2Nlc3NlZC10aGVtZSB2YXJpYWJsZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAncHJlLXByb2Nlc3MnKSB7XG4gICAgICAkdmFsdWU6IG1hcC1nZXQoJG5iLXByb2Nlc3NlZC10aGVtZSwgJGtleSk7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGxhemlseSBzZWFyY2ggZm9yIHZhcmlhYmxlIHZhbHVlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdsYXp5LXByb2Nlc3MnKSB7XG5cbiAgICAgICRuYi10aGVtZS1uYW1lOiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCk7XG5cbiAgICAgICR0aGVtZTogbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5iLXRoZW1lLW5hbWUpO1xuICAgICAgJHZhbHVlOiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCBtYXAtZ2V0KCR0aGVtZSwgJGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAoJHZhbHVlID09IG51bGwpIHtcbiAgICBAd2FybiAnTmVidWxhciBUaGVtZTogYG5iLXRoZW1lKClgIGNhbm5vdCBmaW5kIHZhbHVlIGZvciBrZXkgYCcgKyAka2V5ICsgJ2AgZm9yIHRoZW1lIGAnKyAkbmItdGhlbWUtbmFtZSArJ2AnO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG5cbiAgLyoqXG4gICAqIFNhc3MgbWFwIGNvbnRhaW5zIGEgbGlzdCBvZiBhbGwgVGhlbWUgdmFyaWFibGVzIGFuZCBhbHNvIHRoZWlyIG1hcHBpbmdzIGludG8gQ29tcG9uZW50IHZhcmlhYmxlc1xuICAgKiBBIHRoZW1lIGNvbnNpc3RzIG9mIGEgbGlzdCBvZiBjb2xvcnMsIGJhY2tncm91bmRzLCBib3JkZXJzLCB0ZXh0IHN0eWxlcyBhbmQgc3VwcG9ydGluZyB2YXJpYWJsZXMuXG4gICAqL1xuXG5cbiAgLyogU3RhdHVzIGNvbG9yczogcHJpbWFyeSwgc3VjY2VzcywgaW5mbywgd2FybmluZywgZGFuZ2VyIC0gZm9yIGNvbG9yZWQgZWxlbWVudHMgKGJ1dHRvbnMsIGV0YykgKi9cblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2YyZjZmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNkOWU0ZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjYTZjMWZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogIzU5OGJmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICMzMzY2ZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjMjc0YmRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzFhMzRiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMxMDI2OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMDkxYzdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1zdWNjZXNzLTEwMDogI2YwZmZmNSxcbiAgY29sb3Itc3VjY2Vzcy0yMDA6ICNjY2ZjZTMsXG4gIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjOGNmYWM3LFxuICBjb2xvci1zdWNjZXNzLTQwMDogIzJjZTY5YixcbiAgY29sb3Itc3VjY2Vzcy01MDA6ICMwMGQ2OGYsXG4gIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjMDBiODg3LFxuICBjb2xvci1zdWNjZXNzLTcwMDogIzAwOTk3YSxcbiAgY29sb3Itc3VjY2Vzcy04MDA6ICMwMDdkNmMsXG4gIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMDA0YTQ1LFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjA4KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMTYpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4yNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjMyKSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQ4KSxcblxuICBjb2xvci1pbmZvLTEwMDogI2YyZjhmZixcbiAgY29sb3ItaW5mby0yMDA6ICNjN2UyZmYsXG4gIGNvbG9yLWluZm8tMzAwOiAjOTRjYmZmLFxuICBjb2xvci1pbmZvLTQwMDogIzQyYWFmZixcbiAgY29sb3ItaW5mby01MDA6ICMwMDk1ZmYsXG4gIGNvbG9yLWluZm8tNjAwOiAjMDA2ZmQ2LFxuICBjb2xvci1pbmZvLTcwMDogIzAwNTdjMixcbiAgY29sb3ItaW5mby04MDA6ICMwMDQxYTgsXG4gIGNvbG9yLWluZm8tOTAwOiAjMDAyODg1LFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTYpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4yNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci13YXJuaW5nLTEwMDogI2ZmZmRmMixcbiAgY29sb3Itd2FybmluZy0yMDA6ICNmZmYxYzIsXG4gIGNvbG9yLXdhcm5pbmctMzAwOiAjZmZlNTllLFxuICBjb2xvci13YXJuaW5nLTQwMDogI2ZmYzk0ZCxcbiAgY29sb3Itd2FybmluZy01MDA6ICNmZmFhMDAsXG4gIGNvbG9yLXdhcm5pbmctNjAwOiAjZGI4YjAwLFxuICBjb2xvci13YXJuaW5nLTcwMDogI2I4NmUwMCxcbiAgY29sb3Itd2FybmluZy04MDA6ICM5NDU0MDAsXG4gIGNvbG9yLXdhcm5pbmctOTAwOiAjNzAzYzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjA4KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMTYpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4yNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjMyKSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQ4KSxcblxuICBjb2xvci1kYW5nZXItMTAwOiAjZmZmMmYyLFxuICBjb2xvci1kYW5nZXItMjAwOiAjZmZkNmQ5LFxuICBjb2xvci1kYW5nZXItMzAwOiAjZmZhOGI0LFxuICBjb2xvci1kYW5nZXItNDAwOiAjZmY3MDhkLFxuICBjb2xvci1kYW5nZXItNTAwOiAjZmYzZDcxLFxuICBjb2xvci1kYW5nZXItNjAwOiAjZGIyYzY2LFxuICBjb2xvci1kYW5nZXItNzAwOiAjYjgxZDViLFxuICBjb2xvci1kYW5nZXItODAwOiAjOTQxMjRlLFxuICBjb2xvci1kYW5nZXItOTAwOiAjNzAwOTQwLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjA4KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMTYpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4yNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjMyKSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQ4KSxcblxuICAvKiBCYXNpYyBjb2xvcnMgLSBmb3IgYmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgYW5kIHRleHRzICovXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y5ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2VkZjFmNyxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTRlOWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjNWNlZTAsXG4gIGNvbG9yLWJhc2ljLTYwMDogIzhmOWJiMyxcbiAgY29sb3ItYmFzaWMtNzAwOiAjMmUzYTU5LFxuICBjb2xvci1iYXNpYy04MDA6ICMyMjJiNDUsXG4gIGNvbG9yLWJhc2ljLTkwMDogIzE5MjAzOCxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzE1MWEzMCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEwMTQyNixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpLFxuXG4gIC8qIFN0YXR1cyBjb2xvcnMgc3RhdGVzIC0gZm9jdXMsIGhvdmVyLCBkZWZhdWx0LCBhY3RpdmUsIGRpc2FibGVkICAqL1xuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby03MDAsXG4gIGNvbG9yLWluZm8taG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLFxuICBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmU6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcblxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIC8qIEJhY2tncm91bmRzIGFuZCBib3JkZXJzIC0gYmFzaWMsIGFsdGVybmF0aXZlIGFuZCBwcmltYXJ5ICAqL1xuXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0xOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLXByaW1hcnktNjAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci00OiBjb2xvci1wcmltYXJ5LTgwMCxcblxuICBib3JkZXItcHJpbWFyeS1jb2xvci0xOiBjb2xvci1iYXNpYy01MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItYmFzaWMtNzAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci00OiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTU6IGNvbG9yLWJhc2ljLTkwMCxcblxuICAvKiBUZXh0IGNvbG9ycyAtIGdlbmVyYWwgYW5kIHN0YXR1cyAqL1xuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdGV4dC1oaW50LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG5cbiAgdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdGV4dC1wcmltYXJ5LWRpc2FibGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcblxuICB0ZXh0LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdGV4dC1zdWNjZXNzLWZvY3VzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0ZXh0LXN1Y2Nlc3MtaG92ZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICB0ZXh0LXN1Y2Nlc3MtZGlzYWJsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuXG4gIHRleHQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0ZXh0LWluZm8tZm9jdXMtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRleHQtaW5mby1ob3Zlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdGV4dC1pbmZvLWFjdGl2ZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHRleHQtaW5mby1kaXNhYmxlZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG5cbiAgdGV4dC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRleHQtd2FybmluZy1mb2N1cy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0ZXh0LXdhcm5pbmctYWN0aXZlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgdGV4dC13YXJuaW5nLWRpc2FibGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcblxuICB0ZXh0LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRleHQtZGFuZ2VyLWFjdGl2ZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG5cbiAgLyogRm9udHMgYW5kIHRleHQgc3R5bGVzIC0gaGVhZGluZ3MsIHN1YnRpdGxlcywgcGFyYWdyYXBocywgY2FwdGlvbnMsIGJ1dHRvbiAqL1xuXG4gIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ09wZW4gU2Fucywgc2Fucy1zZXJpZicpLFxuICBmb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG5cbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplOiAyLjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodDogM3JlbSxcblxuICB0ZXh0LWhlYWRpbmctMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXNpemU6IDJyZW0sXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0yLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1zaXplOiAxLjg3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTMtbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctNC1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXNpemU6IDEuNjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNC1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXNpemU6IDEuMzc1cmVtLFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNS1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodDogMS4yNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQ6IDEuMTI1cmVtLFxuXG4gIHRleHQtbGFiZWwtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtbGFiZWwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWxhYmVsLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtbGFiZWwtbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZTogMC42MjVyZW0sXG4gIHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQ6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemU6IDAuODc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZTogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgLyogU3VwcG9ydGluZyB2YXJpYWJsZXMgLSBib3JkZXIgcmFkaXVzLCBvdXRsaW5lLCBzaGFkb3csIGRpdmlkZXIgKi9cblxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuXG4gIG91dGxpbmUtd2lkdGg6IDAuMzc1cmVtLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG5cbiAgc2Nyb2xsYmFyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNjcm9sbGJhci13aWR0aDogMC4zMTI1cmVtLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoNDQsIDUxLCA3MywgMC4xKSxcblxuICBkaXZpZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgZGl2aWRlci1zdHlsZTogc29saWQsXG4gIGRpdmlkZXItd2lkdGg6IDFweCxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgIzFhMWYzMyxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRhcmssIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkYXJrJztcblxuJHRoZW1lOiAoXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmYWY3ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZWNlM2ZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2Q1YmZmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICNiMThhZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjYTE2ZWZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzdiNTFkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICM1YTM3YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjM2UyNDk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzI5MTU3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y3ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2YwZjBmYSxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTFlMWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjZWNlZWIsXG4gIGNvbG9yLWJhc2ljLTYwMDogI2I0YjRkYixcbiAgY29sb3ItYmFzaWMtNzAwOiAjNmE2YTk0LFxuICBjb2xvci1iYXNpYy04MDA6ICMzMjMyNTksXG4gIGNvbG9yLWJhc2ljLTkwMDogIzI1MjU0NyxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzFiMWIzOCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEzMTMyYixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40OCksXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGFyayk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYm9yZGVyLXJhZGl1czogMC4xN3JlbSxcbiAgc2hhZG93OiBub25lLFxuXG4gIGJ1dHRvbi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcblxuICBjYXJkLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY29udGV4dC1tZW51LWJvcmRlci13aWR0aDogMXB4LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG5cbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgcm91dGUtdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgYnV0dG9uLWhlcm8tc2hhZG93OiBub25lLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFjY29yZGlvbi1zaGFkb3c6IG5vbmUsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvcnBvcmF0ZSwgZGVmYXVsdCk7XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XG5cbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXHRuYi1jYXJkLWJvZHkge1xuXHRcdHBhZGRpbmc6IDA7XG5cdH1cblxuXHQ6Om5nLWRlZXAgLmxlYWZsZXQtY29udGFpbmVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvLyBoZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVpZ2h0LWxhcmdlKTtcblx0fVxufVxuXG4uaGVhZGVyLWNvbG9yIHtcblx0Y29sb3I6IHJnYigyNCwgMjIsIDIyKTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM5LCAyMzkpO1xufVxuXG4uZ29vZ2xlTWFwIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLXN0eWxlIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHdpZHRoOiA2MHZ3O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTAlO1xuXHRsZWZ0OiBjYWxjKDUwJSAtIDMwdncpO1xuXHRuYi1jYXJkLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdH1cblx0Lmdvb2dsZU1hcCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+carriers/+carrier/location/carrier-location.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/+carriers/+carrier/location/carrier-location.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CarrierLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierLocationComponent", function() { return CarrierLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@core/data/carriers.service */ "./src/app/@core/data/carriers.service.ts");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");









const directionsDisplay = new google.maps.DirectionsRenderer();
const directionsService = new google.maps.DirectionsService();
let CarrierLocationComponent = class CarrierLocationComponent {
    constructor(route, carrierRouter, carrierOrdersRouter, carriersService) {
        this.route = route;
        this.carrierRouter = carrierRouter;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.carriersService = carriersService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isReverted = true;
    }
    ngOnInit() {
        this.showMap();
        this._subscribeCarrier();
    }
    _subscribeCarrier() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.params$ = this.route.params.subscribe((res) => {
                const carrierId = res.id || this.carrierId;
                this.carrierSub$ = this.carrierRouter
                    .get(carrierId)
                    .subscribe((carrier) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (this.interval) {
                        clearInterval(this.interval);
                    }
                    const newCoordinates = new google.maps.LatLng(carrier.geoLocation.coordinates.lat, carrier.geoLocation.coordinates.lng);
                    if (this.marker) {
                        this.marker.setMap(null);
                    }
                    let isWorking = false;
                    this.interval = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        const order = yield this.carriersService.getCarrierCurrentOrder(carrierId);
                        if (order) {
                            if (!isWorking) {
                                const user = order.user;
                                const warehouse = order.warehouse;
                                const warehouseIcon = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].MAP_MERCHANT_ICON_LINK;
                                const userIcon = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].MAP_USER_ICON_LINK;
                                user.geoLocation = new _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_8__["default"](user.geoLocation);
                                this.userMarker = this.addMarker(new google.maps.LatLng(user.geoLocation.coordinates.lat, user.geoLocation.coordinates.lng), this.map, userIcon);
                                warehouse.geoLocation = new _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_8__["default"](warehouse.geoLocation);
                                this.warehouseMarker = this.addMarker(new google.maps.LatLng(warehouse['geoLocation'].coordinates.lat, warehouse['geoLocation'].coordinates.lng), this.map, warehouseIcon);
                                const start = new google.maps.LatLng(user.geoLocation.coordinates.lat, user.geoLocation.coordinates.lng);
                                const end = new google.maps.LatLng(warehouse['geoLocation'].coordinates.lat, warehouse['geoLocation'].coordinates.lng);
                                const request = {
                                    origin: start,
                                    destination: end,
                                    travelMode: 'DRIVING',
                                };
                                directionsService.route(request, function (res, stat) {
                                    if (stat === 'OK') {
                                        directionsDisplay.setDirections(res);
                                    }
                                });
                                directionsDisplay.setOptions({
                                    suppressMarkers: true,
                                });
                                directionsDisplay.setMap(this.map);
                                const bounds = new google.maps.LatLngBounds();
                                bounds.extend(this.marker.getPosition());
                                bounds.extend(this.warehouseMarker.getPosition());
                                bounds.extend(this.userMarker.getPosition());
                                this.map.fitBounds(bounds);
                                isWorking = true;
                                this.isReverted = false;
                                const userInfoContent = `
									<h3>  ${order.user.firstName + ' ' + order.user.lastName}</h3>
									<ul>
										<li><i style='margin-right:5px;' class="ion-md-mail"></i>${order.user.email}</li>
										<li><i style='margin-right:5px;' class="ion-md-call"></i>${order.user.phone}</li>
										<li><i style='margin-right:5px;' class="ion-md-locate"></i>${order.user.geoLocation.streetAddress}</li>
									</ul>
									`;
                                const userInfoWindow = new google.maps.InfoWindow({
                                    content: userInfoContent,
                                });
                                this.userMarker.addListener('click', () => {
                                    userInfoWindow.open(this.map, this.userMarker);
                                });
                                const warehouseInfoContent = `
									<h3>  ${order.warehouse.name}</h3>
									<ul>
										<li>
											<i style='margin-right:5px;' class="ion-md-mail"></i>
											${order.warehouse.contactEmail}
										</li>
										<li>
											<i style='margin-right:5px;' class="ion-md-phone"></i><i class="ion-md-call"></i>
											${order.warehouse.contactPhone}
										</li>
										<li>
											<i style='margin-right:5px;' class="ion-md-locate"></i>
											${order.warehouse.geoLocation.streetAddress}
										</li>
									</ul>
									`;
                                const warehouseInfoWindow = new google.maps.InfoWindow({
                                    content: warehouseInfoContent,
                                });
                                this.warehouseMarker.addListener('click', () => {
                                    warehouseInfoWindow.open(this.map, this.warehouseMarker);
                                });
                            }
                        }
                        else {
                            if (isWorking) {
                                this.revertMap();
                                isWorking = false;
                            }
                            if (!this.isReverted) {
                                this.revertMap();
                            }
                        }
                    }), 1500);
                    this.map.setCenter(newCoordinates);
                    const carierIcon = environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].MAP_CARRIER_ICON_LINK;
                    this.marker = this.addMarker(newCoordinates, this.map, carierIcon);
                    const carrierInfoContent = `
					<h3>  ${carrier.fullName}</h3>
					<ul>
						<li>${carrier.username}</li>
						<li><i style='margin-right:5px;' class="ion-md-call"></i>${carrier.phone}</li>
						<li><i style='margin-right:5px;' class="ion-md-locate"></i>${carrier.geoLocation.streetAddress}</li>
					</ul>
					`;
                    const carrierInfoWindow = new google.maps.InfoWindow({
                        content: carrierInfoContent,
                    });
                    this.marker.addListener('click', () => {
                        carrierInfoWindow.open(this.map, this.marker);
                    });
                }));
            });
        });
    }
    revertMap() {
        this.map.setZoom(15);
        this.warehouseMarker.setMap(null);
        this.userMarker.setMap(null);
        this.isReverted = true;
    }
    showMap() {
        const mapProp = {
            center: new google.maps.LatLng(42.642941, 23.334149),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    addMarker(position, map, icon) {
        return new google.maps.Marker({
            position,
            map,
            icon,
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.carrierSub$) {
            this.carrierSub$.unsubscribe();
        }
        if (this.params$) {
            this.params$.unsubscribe();
        }
    }
};
CarrierLocationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
    { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"] },
    { type: _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_7__["CarriersService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarrierLocationComponent.prototype, "gmapElement", void 0);
CarrierLocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carrier-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-location.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/+carrier/location/carrier-location.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-location.component.scss */ "./src/app/pages/+carriers/+carrier/location/carrier-location.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
        _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"],
        _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_7__["CarriersService"]])
], CarrierLocationComponent);



/***/ }),

/***/ "./src/app/pages/+carriers/+carrier/location/carrier-location.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/+carriers/+carrier/location/carrier-location.module.ts ***!
  \******************************************************************************/
/*! exports provided: CarrierLocationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierLocationModule", function() { return CarrierLocationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "../../node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _carrier_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrier-location.component */ "./src/app/pages/+carriers/+carrier/location/carrier-location.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");










let CarrierLocationModule = class CarrierLocationModule {
};
CarrierLocationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                apiKey: environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].GOOGLE_MAPS_API_KEY,
                libraries: ['places'],
            }),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
        ],
        declarations: [_carrier_location_component__WEBPACK_IMPORTED_MODULE_7__["CarrierLocationComponent"]],
        exports: [_carrier_location_component__WEBPACK_IMPORTED_MODULE_7__["CarrierLocationComponent"]],
        entryComponents: [_carrier_location_component__WEBPACK_IMPORTED_MODULE_7__["CarrierLocationComponent"]],
    })
], CarrierLocationModule);



/***/ }),

/***/ "./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".googleMap {\n  width: 100%;\n  height: 60vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvYWRtaW4td2ViLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy8rY2FycmllcnMvdHJhY2svY2Fycmllci10cmFja2luZy9jYXJyaWVyLXRyYWNraW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy8rY2FycmllcnMvdHJhY2svY2Fycmllci10cmFja2luZy9jYXJyaWVyLXRyYWNraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVztFQUNYLFlBQVk7QUNDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytjYXJyaWVycy90cmFjay9jYXJyaWVyLXRyYWNraW5nL2NhcnJpZXItdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xlTWFwIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogNjB2aDtcbn1cbiIsIi5nb29nbGVNYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CarrierTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTrackingComponent", function() { return CarrierTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@core/data/carriers.service */ "./src/app/@core/data/carriers.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/@core/data/warehouses.service */ "./src/app/@core/data/warehouses.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










const directionsDisplay = new google.maps.DirectionsRenderer();
const directionsService = new google.maps.DirectionsService();
let CarrierTrackingComponent = class CarrierTrackingComponent {
    constructor(route, router, carrierRouter, carrierOrdersRouter, carriersService, _storesService) {
        this.route = route;
        this.router = router;
        this.carrierRouter = carrierRouter;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.carriersService = carriersService;
        this._storesService = _storesService;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.warehouseMarkers = [];
        this.isReverted = true;
        this.carriers = [];
        this.filteredCarriersList = [];
        this.stores = [];
        this.selectedStoreEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.showMap();
        this.getCarriers();
    }
    getCarriers() {
        this._storesService
            .getStores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.ngDestroy$))
            .subscribe((stores) => {
            this.stores = stores;
            this.carriersService
                .getAllCarriers()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.ngDestroy$))
                .subscribe((carriers) => {
                this.carriers = carriers.filter((carrier) => carrier.status === 0);
                this.filteredCarriersList = this.carriers;
                this.loadDataFromUrl();
            });
        });
    }
    selectNewStore(id) {
        this.selectedStore = this.stores.find((s) => s.id === id);
    }
    storeListener(e) {
        this.router.navigate([`carriers/track/${this.selectedStore.id}`]);
    }
    carrierListener(e) {
        if (this.selectedStore) {
            this.router.navigate([
                `carriers/track/${this.selectedStore.id}/${this.selectedCarrier.id}`,
            ]);
        }
        else {
            this.router.navigate([
                `carriers/track/1/${this.selectedCarrier.id}`,
            ]);
        }
    }
    loadDataFromUrl() {
        this.params$ = this.route.params.subscribe((res) => {
            if (!res.carrierId && res.storeId) {
                this.selectNewStore(res.storeId);
                this.filteredCarriersList = this.carriers.filter((x) => this.selectedStore.usedCarriersIds.includes(x.id));
                this.selectedCarrier = undefined;
                this.revertMap();
                this._subscribeCarrier(this.filteredCarriersList);
            }
            else if (res.carrierId) {
                this.selectNewStore(res.storeId);
                const filteredList = this.filteredCarriersList.filter((carrier) => carrier._id === res.carrierId);
                this.selectedCarrier = filteredList[0];
                this.revertMap();
                this._subscribeCarrier(filteredList);
            }
            else if (!res.carrierId && !res.storeId) {
                this._subscribeCarrier(this.filteredCarriersList);
            }
        });
    }
    _subscribeCarrier(carrierList) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idArray = carrierList.map((carrier) => carrier._id);
            idArray.forEach((c) => {
                const carrierId = c.toString();
                this.carrierSub$ = this.carrierRouter
                    .get(carrierId)
                    .subscribe((carrier) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (this.interval) {
                        clearInterval(this.interval);
                    }
                    const newCoordinates = new google.maps.LatLng(carrier.geoLocation.coordinates.lat, carrier.geoLocation.coordinates.lng);
                    this.map.setCenter(newCoordinates);
                    const carierIcon = environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].MAP_CARRIER_ICON_LINK;
                    const marker = this.addMarker(newCoordinates, this.map, carierIcon);
                    this.warehouseMarkers.push(marker);
                }));
            });
        });
    }
    revertMap() {
        if (this.warehouseMarkers.length > 0) {
            this.warehouseMarkers.forEach((x) => {
                x.setMap(null);
            });
            this.warehouseMarkers = [];
        }
    }
    showMap() {
        const mapProp = {
            center: new google.maps.LatLng(42.642941, 23.334149),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    addMarker(position, map, icon) {
        return new google.maps.Marker({
            position,
            map,
            icon,
        });
    }
    ngOnDestroy() {
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
        this.carriers = [];
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.carrierSub$) {
            this.carrierSub$.unsubscribe();
        }
        if (this.params$) {
            this.params$.unsubscribe();
        }
    }
};
CarrierTrackingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__["CarrierRouter"] },
    { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"] },
    { type: _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__["CarriersService"] },
    { type: _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_8__["WarehousesService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarrierTrackingComponent.prototype, "gmapElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CarrierTrackingComponent.prototype, "selectedStoreEmitter", void 0);
CarrierTrackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ea-carrier-tracking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-tracking.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-tracking.component.scss */ "./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__["CarrierRouter"],
        _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"],
        _app_core_data_carriers_service__WEBPACK_IMPORTED_MODULE_6__["CarriersService"],
        _app_core_data_warehouses_service__WEBPACK_IMPORTED_MODULE_8__["WarehousesService"]])
], CarrierTrackingComponent);



/***/ }),

/***/ "./src/app/pages/+carriers/track/track.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/+carriers/track/track.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytjYXJyaWVycy90cmFjay90cmFjay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/+carriers/track/track.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/+carriers/track/track.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let TrackComponent = class TrackComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss('canceled');
    }
    ngOnInit() { }
};
TrackComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
TrackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./track.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+carriers/track/track.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./track.component.scss */ "./src/app/pages/+carriers/track/track.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], TrackComponent);



/***/ }),

/***/ "./src/app/pages/+carriers/track/track.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/+carriers/track/track.module.ts ***!
  \*******************************************************/
/*! exports provided: TrackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackModule", function() { return TrackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _carrier_tracking_carrier_tracking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-tracking/carrier-tracking.component */ "./src/app/pages/+carriers/track/carrier-tracking/carrier-tracking.component.ts");
/* harmony import */ var _track_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track.component */ "./src/app/pages/+carriers/track/track.component.ts");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-wizard */ "./node_modules/@ever-co/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm2015/ng2-smart-table.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/@theme */ "./src/app/@theme/index.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");












let TrackModule = class TrackModule {
};
TrackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular2_wizard__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            _app_theme__WEBPACK_IMPORTED_MODULE_9__["ThemeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
        ],
        entryComponents: [_track_component__WEBPACK_IMPORTED_MODULE_3__["TrackComponent"]],
        declarations: [_track_component__WEBPACK_IMPORTED_MODULE_3__["TrackComponent"], _carrier_tracking_carrier_tracking_component__WEBPACK_IMPORTED_MODULE_2__["CarrierTrackingComponent"]],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbActiveModal"]],
    })
], TrackModule);



/***/ })

}]);
//# sourceMappingURL=default~app-pages-carriers-carriers-module~merchants-merchants-module-es2015.js.map