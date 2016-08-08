
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[i - 1],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_p1._0,
				_elm_lang$core$Platform$sendToApp(router)));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (f, task) {
		return A2(
			_elm_lang$core$Task$onError,
			task,
			function (err) {
				return _elm_lang$core$Task$fail(
					f(err));
			});
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			});
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					});
			});
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							});
					});
			});
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									});
							});
					});
			});
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskA,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskB,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							taskC,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									taskD,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											taskE,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											});
									});
							});
					});
			});
	});
var _elm_lang$core$Task$andMap = F2(
	function (taskFunc, taskValue) {
		return A2(
			_elm_lang$core$Task$andThen,
			taskFunc,
			function (func) {
				return A2(
					_elm_lang$core$Task$andThen,
					taskValue,
					function (value) {
						return _elm_lang$core$Task$succeed(
							func(value));
					});
			});
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p2 = tasks;
	if (_p2.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p2._0,
			_elm_lang$core$Task$sequence(_p2._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p3) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$toMaybe = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Maybe$Just, task),
		function (_p4) {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		});
};
var _elm_lang$core$Task$fromMaybe = F2(
	function ($default, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Task$succeed(_p5._0);
		} else {
			return _elm_lang$core$Task$fail($default);
		}
	});
var _elm_lang$core$Task$toResult = function (task) {
	return A2(
		_elm_lang$core$Task$onError,
		A2(_elm_lang$core$Task$map, _elm_lang$core$Result$Ok, task),
		function (msg) {
			return _elm_lang$core$Task$succeed(
				_elm_lang$core$Result$Err(msg));
		});
};
var _elm_lang$core$Task$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Ok') {
		return _elm_lang$core$Task$succeed(_p6._0);
	} else {
		return _elm_lang$core$Task$fail(_p6._0);
	}
};
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p9, _p8, _p7) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$T = function (a) {
	return {ctor: 'T', _0: a};
};
var _elm_lang$core$Task$perform = F3(
	function (onFail, onSuccess, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$T(
				A2(
					_elm_lang$core$Task$onError,
					A2(_elm_lang$core$Task$map, onSuccess, task),
					function (x) {
						return _elm_lang$core$Task$succeed(
							onFail(x));
					})));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$T(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1))),
				function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				});
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				_elm_lang$core$Native_List.fromArray(
					[_p6]),
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				A2(_elm_lang$core$List_ops['::'], _p6, _p4._0),
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Time$now,
				function (time) {
					return A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Task$sequence(
							A2(
								_elm_lang$core$List$map,
								function (tagger) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										tagger(time));
								},
								_p7._0)),
						function (_p8) {
							return _elm_lang$core$Task$succeed(state);
						});
				});
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						_elm_lang$core$Native_Scheduler.kill(id),
						function (_p14) {
							return _p13._2;
						})
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: A2(_elm_lang$core$List_ops['::'], interval, _p18._0),
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			killTask,
			function (_p20) {
				return A2(
					_elm_lang$core$Task$andThen,
					A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict),
					function (newProcesses) {
						return _elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
					});
			});
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Random$onSelfMsg = F3(
	function (_p1, _p0, seed) {
		return _elm_lang$core$Task$succeed(seed);
	});
var _elm_lang$core$Random$magicNum8 = 2147483562;
var _elm_lang$core$Random$range = function (_p2) {
	return {ctor: '_Tuple2', _0: 0, _1: _elm_lang$core$Random$magicNum8};
};
var _elm_lang$core$Random$magicNum7 = 2147483399;
var _elm_lang$core$Random$magicNum6 = 2147483563;
var _elm_lang$core$Random$magicNum5 = 3791;
var _elm_lang$core$Random$magicNum4 = 40692;
var _elm_lang$core$Random$magicNum3 = 52774;
var _elm_lang$core$Random$magicNum2 = 12211;
var _elm_lang$core$Random$magicNum1 = 53668;
var _elm_lang$core$Random$magicNum0 = 40014;
var _elm_lang$core$Random$step = F2(
	function (_p3, seed) {
		var _p4 = _p3;
		return _p4._0(seed);
	});
var _elm_lang$core$Random$onEffects = F3(
	function (router, commands, seed) {
		var _p5 = commands;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$Task$succeed(seed);
		} else {
			var _p6 = A2(_elm_lang$core$Random$step, _p5._0._0, seed);
			var value = _p6._0;
			var newSeed = _p6._1;
			return A2(
				_elm_lang$core$Task$andThen,
				A2(_elm_lang$core$Platform$sendToApp, router, value),
				function (_p7) {
					return A3(_elm_lang$core$Random$onEffects, router, _p5._1, newSeed);
				});
		}
	});
var _elm_lang$core$Random$listHelp = F4(
	function (list, n, generate, seed) {
		listHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 1) < 0) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$reverse(list),
					_1: seed
				};
			} else {
				var _p8 = generate(seed);
				var value = _p8._0;
				var newSeed = _p8._1;
				var _v2 = A2(_elm_lang$core$List_ops['::'], value, list),
					_v3 = n - 1,
					_v4 = generate,
					_v5 = newSeed;
				list = _v2;
				n = _v3;
				generate = _v4;
				seed = _v5;
				continue listHelp;
			}
		}
	});
var _elm_lang$core$Random$minInt = -2147483648;
var _elm_lang$core$Random$maxInt = 2147483647;
var _elm_lang$core$Random$iLogBase = F2(
	function (b, i) {
		return (_elm_lang$core$Native_Utils.cmp(i, b) < 0) ? 1 : (1 + A2(_elm_lang$core$Random$iLogBase, b, (i / b) | 0));
	});
var _elm_lang$core$Random$command = _elm_lang$core$Native_Platform.leaf('Random');
var _elm_lang$core$Random$Generator = function (a) {
	return {ctor: 'Generator', _0: a};
};
var _elm_lang$core$Random$list = F2(
	function (n, _p9) {
		var _p10 = _p9;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				return A4(
					_elm_lang$core$Random$listHelp,
					_elm_lang$core$Native_List.fromArray(
						[]),
					n,
					_p10._0,
					seed);
			});
	});
var _elm_lang$core$Random$map = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p13 = _p12._0(seed0);
				var a = _p13._0;
				var seed1 = _p13._1;
				return {
					ctor: '_Tuple2',
					_0: func(a),
					_1: seed1
				};
			});
	});
var _elm_lang$core$Random$map2 = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p18 = _p16._0(seed0);
				var a = _p18._0;
				var seed1 = _p18._1;
				var _p19 = _p17._0(seed1);
				var b = _p19._0;
				var seed2 = _p19._1;
				return {
					ctor: '_Tuple2',
					_0: A2(func, a, b),
					_1: seed2
				};
			});
	});
var _elm_lang$core$Random$pair = F2(
	function (genA, genB) {
		return A3(
			_elm_lang$core$Random$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			genA,
			genB);
	});
var _elm_lang$core$Random$map3 = F4(
	function (func, _p22, _p21, _p20) {
		var _p23 = _p22;
		var _p24 = _p21;
		var _p25 = _p20;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p26 = _p23._0(seed0);
				var a = _p26._0;
				var seed1 = _p26._1;
				var _p27 = _p24._0(seed1);
				var b = _p27._0;
				var seed2 = _p27._1;
				var _p28 = _p25._0(seed2);
				var c = _p28._0;
				var seed3 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: A3(func, a, b, c),
					_1: seed3
				};
			});
	});
var _elm_lang$core$Random$map4 = F5(
	function (func, _p32, _p31, _p30, _p29) {
		var _p33 = _p32;
		var _p34 = _p31;
		var _p35 = _p30;
		var _p36 = _p29;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p37 = _p33._0(seed0);
				var a = _p37._0;
				var seed1 = _p37._1;
				var _p38 = _p34._0(seed1);
				var b = _p38._0;
				var seed2 = _p38._1;
				var _p39 = _p35._0(seed2);
				var c = _p39._0;
				var seed3 = _p39._1;
				var _p40 = _p36._0(seed3);
				var d = _p40._0;
				var seed4 = _p40._1;
				return {
					ctor: '_Tuple2',
					_0: A4(func, a, b, c, d),
					_1: seed4
				};
			});
	});
var _elm_lang$core$Random$map5 = F6(
	function (func, _p45, _p44, _p43, _p42, _p41) {
		var _p46 = _p45;
		var _p47 = _p44;
		var _p48 = _p43;
		var _p49 = _p42;
		var _p50 = _p41;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p51 = _p46._0(seed0);
				var a = _p51._0;
				var seed1 = _p51._1;
				var _p52 = _p47._0(seed1);
				var b = _p52._0;
				var seed2 = _p52._1;
				var _p53 = _p48._0(seed2);
				var c = _p53._0;
				var seed3 = _p53._1;
				var _p54 = _p49._0(seed3);
				var d = _p54._0;
				var seed4 = _p54._1;
				var _p55 = _p50._0(seed4);
				var e = _p55._0;
				var seed5 = _p55._1;
				return {
					ctor: '_Tuple2',
					_0: A5(func, a, b, c, d, e),
					_1: seed5
				};
			});
	});
var _elm_lang$core$Random$andThen = F2(
	function (_p56, callback) {
		var _p57 = _p56;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p58 = _p57._0(seed);
				var result = _p58._0;
				var newSeed = _p58._1;
				var _p59 = callback(result);
				var genB = _p59._0;
				return genB(newSeed);
			});
	});
var _elm_lang$core$Random$State = F2(
	function (a, b) {
		return {ctor: 'State', _0: a, _1: b};
	});
var _elm_lang$core$Random$initState = function (s$) {
	var s = A2(_elm_lang$core$Basics$max, s$, 0 - s$);
	var q = (s / (_elm_lang$core$Random$magicNum6 - 1)) | 0;
	var s2 = A2(_elm_lang$core$Basics_ops['%'], q, _elm_lang$core$Random$magicNum7 - 1);
	var s1 = A2(_elm_lang$core$Basics_ops['%'], s, _elm_lang$core$Random$magicNum6 - 1);
	return A2(_elm_lang$core$Random$State, s1 + 1, s2 + 1);
};
var _elm_lang$core$Random$next = function (_p60) {
	var _p61 = _p60;
	var _p63 = _p61._1;
	var _p62 = _p61._0;
	var k$ = (_p63 / _elm_lang$core$Random$magicNum3) | 0;
	var s2$ = (_elm_lang$core$Random$magicNum4 * (_p63 - (k$ * _elm_lang$core$Random$magicNum3))) - (k$ * _elm_lang$core$Random$magicNum5);
	var s2$$ = (_elm_lang$core$Native_Utils.cmp(s2$, 0) < 0) ? (s2$ + _elm_lang$core$Random$magicNum7) : s2$;
	var k = (_p62 / _elm_lang$core$Random$magicNum1) | 0;
	var s1$ = (_elm_lang$core$Random$magicNum0 * (_p62 - (k * _elm_lang$core$Random$magicNum1))) - (k * _elm_lang$core$Random$magicNum2);
	var s1$$ = (_elm_lang$core$Native_Utils.cmp(s1$, 0) < 0) ? (s1$ + _elm_lang$core$Random$magicNum6) : s1$;
	var z = s1$$ - s2$$;
	var z$ = (_elm_lang$core$Native_Utils.cmp(z, 1) < 0) ? (z + _elm_lang$core$Random$magicNum8) : z;
	return {
		ctor: '_Tuple2',
		_0: z$,
		_1: A2(_elm_lang$core$Random$State, s1$$, s2$$)
	};
};
var _elm_lang$core$Random$split = function (_p64) {
	var _p65 = _p64;
	var _p68 = _p65._1;
	var _p67 = _p65._0;
	var _p66 = _elm_lang$core$Basics$snd(
		_elm_lang$core$Random$next(_p65));
	var t1 = _p66._0;
	var t2 = _p66._1;
	var new_s2 = _elm_lang$core$Native_Utils.eq(_p68, 1) ? (_elm_lang$core$Random$magicNum7 - 1) : (_p68 - 1);
	var new_s1 = _elm_lang$core$Native_Utils.eq(_p67, _elm_lang$core$Random$magicNum6 - 1) ? 1 : (_p67 + 1);
	return {
		ctor: '_Tuple2',
		_0: A2(_elm_lang$core$Random$State, new_s1, t2),
		_1: A2(_elm_lang$core$Random$State, t1, new_s2)
	};
};
var _elm_lang$core$Random$Seed = function (a) {
	return {ctor: 'Seed', _0: a};
};
var _elm_lang$core$Random$int = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (_p69) {
				var _p70 = _p69;
				var _p75 = _p70._0;
				var base = 2147483561;
				var f = F3(
					function (n, acc, state) {
						f:
						while (true) {
							var _p71 = n;
							if (_p71 === 0) {
								return {ctor: '_Tuple2', _0: acc, _1: state};
							} else {
								var _p72 = _p75.next(state);
								var x = _p72._0;
								var state$ = _p72._1;
								var _v27 = n - 1,
									_v28 = x + (acc * base),
									_v29 = state$;
								n = _v27;
								acc = _v28;
								state = _v29;
								continue f;
							}
						}
					});
				var _p73 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p73._0;
				var hi = _p73._1;
				var k = (hi - lo) + 1;
				var n = A2(_elm_lang$core$Random$iLogBase, base, k);
				var _p74 = A3(f, n, 1, _p75.state);
				var v = _p74._0;
				var state$ = _p74._1;
				return {
					ctor: '_Tuple2',
					_0: lo + A2(_elm_lang$core$Basics_ops['%'], v, k),
					_1: _elm_lang$core$Random$Seed(
						_elm_lang$core$Native_Utils.update(
							_p75,
							{state: state$}))
				};
			});
	});
var _elm_lang$core$Random$bool = A2(
	_elm_lang$core$Random$map,
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		})(1),
	A2(_elm_lang$core$Random$int, 0, 1));
var _elm_lang$core$Random$float = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p76 = A2(
					_elm_lang$core$Random$step,
					A2(_elm_lang$core$Random$int, _elm_lang$core$Random$minInt, _elm_lang$core$Random$maxInt),
					seed);
				var number = _p76._0;
				var newSeed = _p76._1;
				var negativeOneToOne = _elm_lang$core$Basics$toFloat(number) / _elm_lang$core$Basics$toFloat(_elm_lang$core$Random$maxInt - _elm_lang$core$Random$minInt);
				var _p77 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p77._0;
				var hi = _p77._1;
				var scaled = ((lo + hi) / 2) + ((hi - lo) * negativeOneToOne);
				return {ctor: '_Tuple2', _0: scaled, _1: newSeed};
			});
	});
var _elm_lang$core$Random$initialSeed = function (n) {
	return _elm_lang$core$Random$Seed(
		{
			state: _elm_lang$core$Random$initState(n),
			next: _elm_lang$core$Random$next,
			split: _elm_lang$core$Random$split,
			range: _elm_lang$core$Random$range
		});
};
var _elm_lang$core$Random$init = A2(
	_elm_lang$core$Task$andThen,
	_elm_lang$core$Time$now,
	function (t) {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Random$initialSeed(
				_elm_lang$core$Basics$round(t)));
	});
var _elm_lang$core$Random$Generate = function (a) {
	return {ctor: 'Generate', _0: a};
};
var _elm_lang$core$Random$generate = F2(
	function (tagger, generator) {
		return _elm_lang$core$Random$command(
			_elm_lang$core$Random$Generate(
				A2(_elm_lang$core$Random$map, tagger, generator)));
	});
var _elm_lang$core$Random$cmdMap = F2(
	function (func, _p78) {
		var _p79 = _p78;
		return _elm_lang$core$Random$Generate(
			A2(_elm_lang$core$Random$map, func, _p79._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Random'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Random$init, onEffects: _elm_lang$core$Random$onEffects, onSelfMsg: _elm_lang$core$Random$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Random$cmdMap};

var _elm_community$elm_random_extra$Utils$get = F2(
	function (index, list) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p0 = A2(_elm_lang$core$List$drop, index, list);
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(_p0._0);
			}
		}
	});

var _elm_community$elm_random_extra$Random_Extra$mapConstraint = F2(
	function (constraint, generator) {
		return A2(
			_elm_lang$core$Random$map,
			function (a) {
				return {
					ctor: '_Tuple2',
					_0: a,
					_1: constraint(a)
				};
			},
			generator);
	});
var _elm_community$elm_random_extra$Random_Extra$quickGenerate = function (generator) {
	return _elm_lang$core$Basics$fst(
		A2(
			_elm_lang$core$Random$step,
			generator,
			_elm_lang$core$Random$initialSeed(1)));
};
var _elm_community$elm_random_extra$Random_Extra$cappedGenerateUntil = F4(
	function (maxGenerations, predicate, generator, seed) {
		if (_elm_lang$core$Native_Utils.cmp(maxGenerations, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p0 = A2(_elm_lang$core$Random$step, generator, seed);
			var value = _p0._0;
			var nextSeed = _p0._1;
			return predicate(value) ? A2(
				_elm_lang$core$List_ops['::'],
				value,
				A4(_elm_community$elm_random_extra$Random_Extra$cappedGenerateUntil, maxGenerations - 1, predicate, generator, nextSeed)) : _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$elm_random_extra$Random_Extra$generateUntil = F3(
	function (predicate, generator, seed) {
		var _p1 = A2(_elm_lang$core$Random$step, generator, seed);
		var value = _p1._0;
		var nextSeed = _p1._1;
		return predicate(value) ? A2(
			_elm_lang$core$List_ops['::'],
			value,
			A3(_elm_community$elm_random_extra$Random_Extra$generateUntil, predicate, generator, nextSeed)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$elm_random_extra$Random_Extra$generateIterativelyUntil = F4(
	function (maxLength, predicate, constructor, seed) {
		var iterate = function (index) {
			return (_elm_lang$core$Native_Utils.cmp(index, maxLength) > -1) ? _elm_lang$core$Native_List.fromArray(
				[]) : A2(
				_elm_lang$core$Basics_ops['++'],
				A3(
					_elm_community$elm_random_extra$Random_Extra$generateUntil,
					predicate,
					constructor(index),
					seed),
				iterate(index + 1));
		};
		return iterate(0);
	});
var _elm_community$elm_random_extra$Random_Extra$generateIterativelySuchThat = F2(
	function (maxLength, predicate) {
		return A2(
			_elm_community$elm_random_extra$Random_Extra$generateIterativelyUntil,
			maxLength,
			function (a) {
				return _elm_lang$core$Basics$not(
					predicate(a));
			});
	});
var _elm_community$elm_random_extra$Random_Extra$generateN = F3(
	function (n, generator, seed) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p2 = A2(_elm_lang$core$Random$step, generator, seed);
			var value = _p2._0;
			var nextSeed = _p2._1;
			return A2(
				_elm_lang$core$List_ops['::'],
				value,
				A3(_elm_community$elm_random_extra$Random_Extra$generateN, n - 1, generator, nextSeed));
		}
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap6 = F7(
	function (constructor, generatorA, generatorB, generatorC, generatorD, generatorE, generatorF) {
		return A2(
			_elm_lang$core$Random$andThen,
			generatorA,
			function (a) {
				return A2(
					_elm_lang$core$Random$andThen,
					generatorB,
					function (b) {
						return A2(
							_elm_lang$core$Random$andThen,
							generatorC,
							function (c) {
								return A2(
									_elm_lang$core$Random$andThen,
									generatorD,
									function (d) {
										return A2(
											_elm_lang$core$Random$andThen,
											generatorE,
											function (e) {
												return A2(
													_elm_lang$core$Random$andThen,
													generatorF,
													function (f) {
														return A6(constructor, a, b, c, d, e, f);
													});
											});
									});
							});
					});
			});
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap5 = F6(
	function (constructor, generatorA, generatorB, generatorC, generatorD, generatorE) {
		return A2(
			_elm_lang$core$Random$andThen,
			generatorA,
			function (a) {
				return A2(
					_elm_lang$core$Random$andThen,
					generatorB,
					function (b) {
						return A2(
							_elm_lang$core$Random$andThen,
							generatorC,
							function (c) {
								return A2(
									_elm_lang$core$Random$andThen,
									generatorD,
									function (d) {
										return A2(
											_elm_lang$core$Random$andThen,
											generatorE,
											function (e) {
												return A5(constructor, a, b, c, d, e);
											});
									});
							});
					});
			});
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap4 = F5(
	function (constructor, generatorA, generatorB, generatorC, generatorD) {
		return A2(
			_elm_lang$core$Random$andThen,
			generatorA,
			function (a) {
				return A2(
					_elm_lang$core$Random$andThen,
					generatorB,
					function (b) {
						return A2(
							_elm_lang$core$Random$andThen,
							generatorC,
							function (c) {
								return A2(
									_elm_lang$core$Random$andThen,
									generatorD,
									function (d) {
										return A4(constructor, a, b, c, d);
									});
							});
					});
			});
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap3 = F4(
	function (constructor, generatorA, generatorB, generatorC) {
		return A2(
			_elm_lang$core$Random$andThen,
			generatorA,
			function (a) {
				return A2(
					_elm_lang$core$Random$andThen,
					generatorB,
					function (b) {
						return A2(
							_elm_lang$core$Random$andThen,
							generatorC,
							function (c) {
								return A3(constructor, a, b, c);
							});
					});
			});
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap2 = F3(
	function (constructor, generatorA, generatorB) {
		return A2(
			_elm_lang$core$Random$andThen,
			generatorA,
			function (a) {
				return A2(
					_elm_lang$core$Random$andThen,
					generatorB,
					function (b) {
						return A2(constructor, a, b);
					});
			});
	});
var _elm_community$elm_random_extra$Random_Extra$flatMap = _elm_lang$core$Basics$flip(_elm_lang$core$Random$andThen);
var _elm_community$elm_random_extra$Random_Extra$zip5 = _elm_lang$core$Random$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$elm_random_extra$Random_Extra$zip4 = _elm_lang$core$Random$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$elm_random_extra$Random_Extra$zip3 = _elm_lang$core$Random$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$elm_random_extra$Random_Extra$zip = _elm_lang$core$Random$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$elm_random_extra$Random_Extra$reduce = F3(
	function (reducer, initial, generator) {
		return A2(
			_elm_lang$core$Random$map,
			function (a) {
				return A2(reducer, a, initial);
			},
			generator);
	});
var _elm_community$elm_random_extra$Random_Extra$fold = _elm_community$elm_random_extra$Random_Extra$reduce;
var _elm_community$elm_random_extra$Random_Extra$andMap = F2(
	function (funcGenerator, generator) {
		return A3(
			_elm_lang$core$Random$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			funcGenerator,
			generator);
	});
var _elm_community$elm_random_extra$Random_Extra$map6 = F7(
	function (f, generatorA, generatorB, generatorC, generatorD, generatorE, generatorF) {
		return A2(
			_elm_community$elm_random_extra$Random_Extra$andMap,
			A6(_elm_lang$core$Random$map5, f, generatorA, generatorB, generatorC, generatorD, generatorE),
			generatorF);
	});
var _elm_community$elm_random_extra$Random_Extra$zip6 = _elm_community$elm_random_extra$Random_Extra$map6(
	F6(
		function (v0, v1, v2, v3, v4, v5) {
			return {ctor: '_Tuple6', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4, _5: v5};
		}));
var _elm_community$elm_random_extra$Random_Extra$constant = function (value) {
	return A2(
		_elm_lang$core$Random$map,
		function (_p3) {
			return value;
		},
		_elm_lang$core$Random$bool);
};
var _elm_community$elm_random_extra$Random_Extra$select = function (list) {
	return A2(
		_elm_lang$core$Random$map,
		function (index) {
			return A2(_elm_community$elm_random_extra$Utils$get, index, list);
		},
		A2(
			_elm_lang$core$Random$int,
			0,
			_elm_lang$core$List$length(list) - 1));
};
var _elm_community$elm_random_extra$Random_Extra$selectWithDefault = F2(
	function (defaultValue, list) {
		return A2(
			_elm_lang$core$Random$map,
			_elm_lang$core$Maybe$withDefault(defaultValue),
			_elm_community$elm_random_extra$Random_Extra$select(list));
	});
var _elm_community$elm_random_extra$Random_Extra$flattenList = function (generators) {
	var _p4 = generators;
	if (_p4.ctor === '[]') {
		return _elm_community$elm_random_extra$Random_Extra$constant(
			_elm_lang$core$Native_List.fromArray(
				[]));
	} else {
		return A3(
			_elm_lang$core$Random$map2,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$List_ops['::'], x, y);
				}),
			_p4._0,
			_elm_community$elm_random_extra$Random_Extra$flattenList(_p4._1));
	}
};
var _elm_community$elm_random_extra$Random_Extra$keepIf = F2(
	function (predicate, generator) {
		return A2(
			_elm_lang$core$Random$andThen,
			generator,
			function (a) {
				return predicate(a) ? _elm_community$elm_random_extra$Random_Extra$constant(a) : A2(_elm_community$elm_random_extra$Random_Extra$keepIf, predicate, generator);
			});
	});
var _elm_community$elm_random_extra$Random_Extra$dropIf = function (predicate) {
	return _elm_community$elm_random_extra$Random_Extra$keepIf(
		function (a) {
			return _elm_lang$core$Basics$not(
				predicate(a));
		});
};
var _elm_community$elm_random_extra$Random_Extra$generateSuchThat = F3(
	function (predicate, generator, seed) {
		return A2(
			_elm_lang$core$Random$step,
			A2(_elm_community$elm_random_extra$Random_Extra$keepIf, predicate, generator),
			seed);
	});
var _elm_community$elm_random_extra$Random_Extra$frequency = F2(
	function (pairs, defaultGenerator) {
		var pick = F2(
			function (choices, n) {
				pick:
				while (true) {
					var _p5 = choices;
					if ((_p5.ctor === '::') && (_p5._0.ctor === '_Tuple2')) {
						var _p6 = _p5._0._0;
						if (_elm_lang$core$Native_Utils.cmp(n, _p6) < 1) {
							return _p5._0._1;
						} else {
							var _v2 = _p5._1,
								_v3 = n - _p6;
							choices = _v2;
							n = _v3;
							continue pick;
						}
					} else {
						return defaultGenerator;
					}
				}
			});
		var total = _elm_lang$core$List$sum(
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					return _elm_lang$core$Basics$abs(
						_elm_lang$core$Basics$fst(_p7));
				},
				pairs));
		return _elm_lang$core$Native_Utils.eq(total, 0) ? defaultGenerator : A2(
			_elm_lang$core$Random$andThen,
			A2(_elm_lang$core$Random$float, 0, total),
			pick(pairs));
	});
var _elm_community$elm_random_extra$Random_Extra$merge = F2(
	function (generator1, generator2) {
		return A2(
			_elm_community$elm_random_extra$Random_Extra$frequency,
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 1, _1: generator1},
					{ctor: '_Tuple2', _0: 1, _1: generator2}
				]),
			generator1);
	});

var _elm_community$elm_random_extra$Random_Array$choose = function (arr) {
	if (_elm_lang$core$Array$isEmpty(arr)) {
		return _elm_community$elm_random_extra$Random_Extra$constant(
			{ctor: '_Tuple2', _0: _elm_lang$core$Maybe$Nothing, _1: arr});
	} else {
		var front = function (i) {
			return A3(_elm_lang$core$Array$slice, 0, i, arr);
		};
		var lastIndex = _elm_lang$core$Array$length(arr) - 1;
		var back = function (i) {
			return _elm_lang$core$Native_Utils.eq(i, lastIndex) ? _elm_lang$core$Array$empty : A3(_elm_lang$core$Array$slice, i + 1, lastIndex + 1, arr);
		};
		var gen = A2(_elm_lang$core$Random$int, 0, lastIndex);
		return A2(
			_elm_lang$core$Random$map,
			function (index) {
				return {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$Array$get, index, arr),
					_1: A2(
						_elm_lang$core$Array$append,
						front(index),
						back(index))
				};
			},
			gen);
	}
};
var _elm_community$elm_random_extra$Random_Array$shuffle = function (arr) {
	if (_elm_lang$core$Array$isEmpty(arr)) {
		return _elm_community$elm_random_extra$Random_Extra$constant(arr);
	} else {
		var helper = function (_p0) {
			var _p1 = _p0;
			var _p6 = _p1._0;
			return A2(
				_elm_lang$core$Random$andThen,
				_elm_community$elm_random_extra$Random_Array$choose(_p1._1),
				function (_p2) {
					var _p3 = _p2;
					var _p5 = _p3._1;
					var _p4 = _p3._0;
					if (_p4.ctor === 'Nothing') {
						return _elm_community$elm_random_extra$Random_Extra$constant(
							{ctor: '_Tuple2', _0: _p6, _1: _p5});
					} else {
						return helper(
							{
								ctor: '_Tuple2',
								_0: A2(_elm_lang$core$List_ops['::'], _p4._0, _p6),
								_1: _p5
							});
					}
				});
		};
		return A2(
			_elm_lang$core$Random$map,
			function (_p7) {
				return _elm_lang$core$Array$fromList(
					_elm_lang$core$Basics$fst(_p7));
			},
			helper(
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: arr
				}));
	}
};
var _elm_community$elm_random_extra$Random_Array$sample = function (arr) {
	var gen = A2(
		_elm_lang$core$Random$int,
		0,
		_elm_lang$core$Array$length(arr) - 1);
	return A2(
		_elm_lang$core$Random$map,
		function (index) {
			return A2(_elm_lang$core$Array$get, index, arr);
		},
		gen);
};
var _elm_community$elm_random_extra$Random_Array$emptyArray = _elm_community$elm_random_extra$Random_Extra$constant(_elm_lang$core$Array$empty);
var _elm_community$elm_random_extra$Random_Array$array = F2(
	function (arrayLength, generator) {
		return A2(
			_elm_lang$core$Random$map,
			_elm_lang$core$Array$fromList,
			A2(_elm_lang$core$Random$list, arrayLength, generator));
	});
var _elm_community$elm_random_extra$Random_Array$rangeLengthArray = F3(
	function (minLength, maxLength, generator) {
		return A2(
			_elm_community$elm_random_extra$Random_Extra$flatMap,
			function (len) {
				return A2(_elm_community$elm_random_extra$Random_Array$array, len, generator);
			},
			A2(_elm_lang$core$Random$int, minLength, maxLength));
	});

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function badCustom(msg)
{
	return { tag: 'custom', msg: msg };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'custom':
				return 'A `customDecode` failed'
					+ (context === '_' ? '' : ' at ' + context)
					+ ' with the message: ' + problem.msg;

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badCustom(realResult._0);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_community$json_extra$Json_Decode_Extra$lazy = function (getDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$customDecoder,
		_elm_lang$core$Json_Decode$value,
		function (rawValue) {
			return A2(
				_elm_lang$core$Json_Decode$decodeValue,
				getDecoder(
					{ctor: '_Tuple0'}),
				rawValue);
		});
};
var _elm_community$json_extra$Json_Decode_Extra$maybeNull = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder)
			]));
};
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_lang$core$Json_Decode$maybe(decoder),
			function (_p0) {
				return _elm_lang$core$Json_Decode$succeed(
					A2(_elm_lang$core$Maybe$withDefault, fallback, _p0));
			});
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p1 = tuples;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p2 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p1._0._0);
			if (_p2.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p1._1),
					function (_p3) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p2._0, _p1._0._1, _p3));
					});
			} else {
				return _elm_lang$core$Json_Decode$fail(_p2._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_lang$core$Json_Decode$dict(valueDecoder),
			function (_p4) {
				return A2(
					_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples,
					keyDecoder,
					_elm_lang$core$Dict$toList(_p4));
			});
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_lang$core$Json_Decode$list(decoder),
		function (_p5) {
			return _elm_lang$core$Json_Decode$succeed(
				_elm_lang$core$Set$fromList(_p5));
		});
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(_elm_lang$core$Json_Decode$customDecoder, _elm_lang$core$Json_Decode$string, _elm_lang$core$Date$fromString);
var _elm_community$json_extra$Json_Decode_Extra$apply = _elm_lang$core$Json_Decode$object2(
	F2(
		function (x, y) {
			return x(y);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_community$json_extra$Json_Decode_Extra$apply;

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

return {
	onDocument: F3(on(document)),
	onWindow: F3(on(window))
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: undefined };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};

			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			var data = patch.data;

			// end inserts
			var endInserts = data.endInserts;
			var end;
			if (typeof endInserts !== 'undefined')
			{
				if (endInserts.length === 1)
				{
					var insert = endInserts[0];
					var entry = insert.entry;
					var end = entry.tag === 'move'
						? entry.data
						: render(entry.vnode, patch.eventNode);
				}
				else
				{
					end = document.createDocumentFragment();
					for (var i = 0; i < endInserts.length; i++)
					{
						var insert = endInserts[i];
						var entry = insert.entry;
						var node = entry.tag === 'move'
							? entry.data
							: render(entry.vnode, patch.eventNode);
						end.appendChild(node);
					}
				}
			}

			// removals
			domNode = applyPatchesHelp(domNode, data.patches);

			// inserts
			var inserts = data.inserts;
			for (var i = 0; i < inserts.length; i++)
			{
				var insert = inserts[i];
				var entry = insert.entry;
				var node = entry.tag === 'move'
					? entry.data
					: render(entry.vnode, patch.eventNode);
				domNode.insertBefore(node, domNode.childNodes[insert.index]);
			}

			if (typeof end !== 'undefined')
			{
				domNode.appendChild(end);
			}

			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$keyboard$Keyboard$onSelfMsg = F3(
	function (router, _p0, state) {
		var _p1 = _p0;
		var _p2 = A2(_elm_lang$core$Dict$get, _p1.category, state);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p1.keyCode));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p2._0.taggers)),
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				});
		}
	});
var _elm_lang$keyboard$Keyboard_ops = _elm_lang$keyboard$Keyboard_ops || {};
_elm_lang$keyboard$Keyboard_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			t1,
			function (_p4) {
				return t2;
			});
	});
var _elm_lang$keyboard$Keyboard$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$keyboard$Keyboard$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p5 = maybeValues;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				_elm_lang$core$Native_List.fromArray(
					[value]));
		} else {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$List_ops['::'], value, _p5._0));
		}
	});
var _elm_lang$keyboard$Keyboard$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p6 = subs;
			if (_p6.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p6._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p6._0._0,
					_elm_lang$keyboard$Keyboard$categorizeHelpHelp(_p6._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$keyboard$Keyboard$categorize = function (subs) {
	return A2(_elm_lang$keyboard$Keyboard$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$keyboard$Keyboard$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$keyboard$Keyboard$subscription = _elm_lang$core$Native_Platform.leaf('Keyboard');
var _elm_lang$keyboard$Keyboard$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$keyboard$Keyboard$Msg = F2(
	function (a, b) {
		return {category: a, keyCode: b};
	});
var _elm_lang$keyboard$Keyboard$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Process$spawn(
								A3(
									_elm_lang$dom$Dom_LowLevel$onDocument,
									category,
									_elm_lang$keyboard$Keyboard$keyCode,
									function (_p7) {
										return A2(
											_elm_lang$core$Platform$sendToSelf,
											router,
											A2(_elm_lang$keyboard$Keyboard$Msg, category, _p7));
									})),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, pid),
										state));
							});
					});
			});
		var bothStep = F4(
			function (category, _p8, taggers, task) {
				var _p9 = _p8;
				return A2(
					_elm_lang$core$Task$andThen,
					task,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$keyboard$Keyboard$Watcher, taggers, _p9.pid),
								state));
					});
			});
		var leftStep = F3(
			function (category, _p10, task) {
				var _p11 = _p10;
				return A2(
					_elm_lang$keyboard$Keyboard_ops['&>'],
					_elm_lang$core$Process$kill(_p11.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$keyboard$Keyboard$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$keyboard$Keyboard$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$keyboard$Keyboard$presses = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keypress', tagger));
};
var _elm_lang$keyboard$Keyboard$downs = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keydown', tagger));
};
var _elm_lang$keyboard$Keyboard$ups = function (tagger) {
	return _elm_lang$keyboard$Keyboard$subscription(
		A2(_elm_lang$keyboard$Keyboard$MySub, 'keyup', tagger));
};
var _elm_lang$keyboard$Keyboard$subMap = F2(
	function (func, _p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$keyboard$Keyboard$MySub,
			_p13._0,
			function (_p14) {
				return func(
					_p13._1(_p14));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Keyboard'] = {pkg: 'elm-lang/keyboard', init: _elm_lang$keyboard$Keyboard$init, onEffects: _elm_lang$keyboard$Keyboard$onEffects, onSelfMsg: _elm_lang$keyboard$Keyboard$onSelfMsg, tag: 'sub', subMap: _elm_lang$keyboard$Keyboard$subMap};

var _elm_lang$navigation$Native_Navigation = function() {

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


return {
	go: go,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$spawnPopState = function (router) {
	return _elm_lang$core$Process$spawn(
		A3(
			_elm_lang$dom$Dom_LowLevel$onWindow,
			'popstate',
			_elm_lang$core$Json_Decode$value,
			function (_p0) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			}));
};
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			task1,
			function (_p1) {
				return task2;
			});
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p2) {
			var _p3 = _p2;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p3._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p4 = cmd;
		switch (_p4.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p4._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$pushState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
			default:
				return A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$navigation$Navigation$replaceState(_p4._0),
					A2(_elm_lang$navigation$Navigation$notify, router, subs));
		}
	});
var _elm_lang$navigation$Navigation$updateHelp = F2(
	function (func, _p5) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: _p6._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, func, _p6._1)
		};
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, process: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p7) {
		var _p8 = _p7;
		var _p10 = _p8.process;
		var stepState = function () {
			var _p9 = {ctor: '_Tuple2', _0: subs, _1: _p10};
			_v4_2:
			do {
				if (_p9._0.ctor === '[]') {
					if (_p9._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$core$Process$kill(_p9._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v4_2;
					}
				} else {
					if (_p9._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$navigation$Navigation$spawnPopState(router),
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(pid)));
							});
					} else {
						break _v4_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p10));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
var _elm_lang$navigation$Navigation$UserMsg = function (a) {
	return {ctor: 'UserMsg', _0: a};
};
var _elm_lang$navigation$Navigation$Change = function (a) {
	return {ctor: 'Change', _0: a};
};
var _elm_lang$navigation$Navigation$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _elm_lang$navigation$Navigation$makeParser = _elm_lang$navigation$Navigation$Parser;
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p11, myCmd) {
		var _p12 = myCmd;
		switch (_p12.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p12._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p12._0);
			default:
				return _elm_lang$navigation$Navigation$Modify(_p12._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (_p13, stuff) {
		var _p14 = _p13;
		var _p16 = _p14._0;
		var location = _elm_lang$navigation$Native_Navigation.getLocation(
			{ctor: '_Tuple0'});
		var init = function (flags) {
			return A2(
				_elm_lang$navigation$Navigation$updateHelp,
				_elm_lang$navigation$Navigation$UserMsg,
				A2(
					stuff.init,
					flags,
					_p16(location)));
		};
		var view = function (model) {
			return A2(
				_elm_lang$html$Html_App$map,
				_elm_lang$navigation$Navigation$UserMsg,
				stuff.view(model));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(_elm_lang$navigation$Navigation$Change)),
						A2(
						_elm_lang$core$Platform_Sub$map,
						_elm_lang$navigation$Navigation$UserMsg,
						stuff.subscriptions(model))
					]));
		};
		var update = F2(
			function (msg, model) {
				return A2(
					_elm_lang$navigation$Navigation$updateHelp,
					_elm_lang$navigation$Navigation$UserMsg,
					function () {
						var _p15 = msg;
						if (_p15.ctor === 'Change') {
							return A2(
								stuff.urlUpdate,
								_p16(_p15._0),
								model);
						} else {
							return A2(stuff.update, _p15._0, model);
						}
					}());
			});
		return _elm_lang$html$Html_App$programWithFlags(
			{init: init, view: view, update: update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$program = F2(
	function (parser, stuff) {
		return A2(
			_elm_lang$navigation$Navigation$programWithFlags,
			parser,
			_elm_lang$core$Native_Utils.update(
				stuff,
				{
					init: function (_p17) {
						return stuff.init;
					}
				}));
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p18) {
		var _p19 = _p18;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p20) {
				return func(
					_p19._0(_p20));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _evancz$url_parser$UrlParser$oneOfHelp = F3(
	function (choices, chunks, formatter) {
		oneOfHelp:
		while (true) {
			var _p0 = choices;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Result$Err('Tried many parsers, but none of them worked!');
			} else {
				var _p1 = A2(_p0._0._0, chunks, formatter);
				if (_p1.ctor === 'Err') {
					var _v2 = _p0._1,
						_v3 = chunks,
						_v4 = formatter;
					choices = _v2;
					chunks = _v3;
					formatter = _v4;
					continue oneOfHelp;
				} else {
					return _elm_lang$core$Result$Ok(_p1._0);
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Chunks = F2(
	function (a, b) {
		return {seen: a, rest: b};
	});
var _evancz$url_parser$UrlParser$parse = F3(
	function (input, _p2, url) {
		var _p3 = _p2;
		var _p4 = A2(
			_p3._0,
			A2(
				_evancz$url_parser$UrlParser$Chunks,
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(_elm_lang$core$String$split, '/', url)),
			input);
		if (_p4.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p4._0);
		} else {
			var _p7 = _p4._0._1;
			var _p6 = _p4._0._0.rest;
			var _p5 = _p6;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Result$Ok(_p7);
			} else {
				if ((_p5._0 === '') && (_p5._1.ctor === '[]')) {
					return _elm_lang$core$Result$Ok(_p7);
				} else {
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'The parser worked, but /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$String$join, '/', _p6),
								' was left over.')));
				}
			}
		}
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		F2(
			function (_p8, result) {
				var _p9 = _p8;
				var _p12 = _p9.rest;
				var _p10 = _p12;
				if (_p10.ctor === '[]') {
					return _elm_lang$core$Result$Err(
						A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', str));
				} else {
					var _p11 = _p10._0;
					return _elm_lang$core$Native_Utils.eq(_p11, str) ? _elm_lang$core$Result$Ok(
						{
							ctor: '_Tuple2',
							_0: A2(
								_evancz$url_parser$UrlParser$Chunks,
								A2(_elm_lang$core$List_ops['::'], _p11, _p9.seen),
								_p10._1),
							_1: result
						}) : _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Wanted /',
							A2(
								_elm_lang$core$Basics_ops['++'],
								str,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' but got /',
									A2(_elm_lang$core$String$join, '/', _p12)))));
				}
			}));
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (_p13, func) {
					var _p14 = _p13;
					var _p15 = _p14.rest;
					if (_p15.ctor === '[]') {
						return _elm_lang$core$Result$Err(
							A2(_elm_lang$core$Basics_ops['++'], 'Got to the end of the URL but wanted /', tipe));
					} else {
						var _p17 = _p15._0;
						var _p16 = stringToSomething(_p17);
						if (_p16.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								{
									ctor: '_Tuple2',
									_0: A2(
										_evancz$url_parser$UrlParser$Chunks,
										A2(_elm_lang$core$List_ops['::'], _p17, _p14.seen),
										_p15._1),
									_1: func(_p16._0)
								});
						} else {
							return _elm_lang$core$Result$Err(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Parsing `',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p17,
										A2(_elm_lang$core$Basics_ops['++'], '` went wrong: ', _p16._0))));
						}
					}
				}));
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					return A2(
						_elm_lang$core$Result$andThen,
						A2(_p20._0, chunks, func),
						function (_p22) {
							var _p23 = _p22;
							return A2(_p21._0, _p23._0, _p23._1);
						});
				}));
	});
var _evancz$url_parser$UrlParser$oneOf = function (choices) {
	return _evancz$url_parser$UrlParser$Parser(
		_evancz$url_parser$UrlParser$oneOfHelp(choices));
};
var _evancz$url_parser$UrlParser$format = F2(
	function (input, _p24) {
		var _p25 = _p24;
		return _evancz$url_parser$UrlParser$Parser(
			F2(
				function (chunks, func) {
					var _p26 = A2(_p25._0, chunks, input);
					if (_p26.ctor === 'Err') {
						return _elm_lang$core$Result$Err(_p26._0);
					} else {
						return _elm_lang$core$Result$Ok(
							{
								ctor: '_Tuple2',
								_0: _p26._0._0,
								_1: func(_p26._0._1)
							});
					}
				}));
	});

var _mgold$elm_date_format$Date_Format$padWith = function (c) {
	return function (_p0) {
		return A3(
			_elm_lang$core$String$padLeft,
			2,
			c,
			_elm_lang$core$Basics$toString(_p0));
	};
};
var _mgold$elm_date_format$Date_Format$zero2twelve = function (n) {
	return _elm_lang$core$Native_Utils.eq(n, 0) ? 12 : n;
};
var _mgold$elm_date_format$Date_Format$mod12 = function (h) {
	return A2(_elm_lang$core$Basics_ops['%'], h, 12);
};
var _mgold$elm_date_format$Date_Format$fullDayOfWeek = function (dow) {
	var _p1 = dow;
	switch (_p1.ctor) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var _mgold$elm_date_format$Date_Format$monthToFullName = function (m) {
	var _p2 = m;
	switch (_p2.ctor) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var _mgold$elm_date_format$Date_Format$monthToInt = function (m) {
	var _p3 = m;
	switch (_p3.ctor) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var _mgold$elm_date_format$Date_Format$formatToken = F2(
	function (d, m) {
		var symbol = function () {
			var _p4 = m.submatches;
			if (((_p4.ctor === '::') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === '[]')) {
				return _p4._0._0;
			} else {
				return ' ';
			}
		}();
		var _p5 = symbol;
		switch (_p5) {
			case '%':
				return '%';
			case 'Y':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$year(d));
			case 'm':
				return A3(
					_elm_lang$core$String$padLeft,
					2,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Basics$toString(
						_mgold$elm_date_format$Date_Format$monthToInt(
							_elm_lang$core$Date$month(d))));
			case 'B':
				return _mgold$elm_date_format$Date_Format$monthToFullName(
					_elm_lang$core$Date$month(d));
			case 'b':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$month(d));
			case 'd':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$day(d));
			case 'e':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_elm_lang$core$Date$day(d));
			case 'a':
				return _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$dayOfWeek(d));
			case 'A':
				return _mgold$elm_date_format$Date_Format$fullDayOfWeek(
					_elm_lang$core$Date$dayOfWeek(d));
			case 'H':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$hour(d));
			case 'k':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_elm_lang$core$Date$hour(d));
			case 'I':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'l':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr(' '),
					_mgold$elm_date_format$Date_Format$zero2twelve(
						_mgold$elm_date_format$Date_Format$mod12(
							_elm_lang$core$Date$hour(d))));
			case 'p':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					13) < 0) ? 'AM' : 'PM';
			case 'P':
				return (_elm_lang$core$Native_Utils.cmp(
					_elm_lang$core$Date$hour(d),
					13) < 0) ? 'am' : 'pm';
			case 'M':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$minute(d));
			case 'S':
				return A2(
					_mgold$elm_date_format$Date_Format$padWith,
					_elm_lang$core$Native_Utils.chr('0'),
					_elm_lang$core$Date$second(d));
			default:
				return '';
		}
	});
var _mgold$elm_date_format$Date_Format$re = _elm_lang$core$Regex$regex('%(%|Y|m|B|b|d|e|a|A|H|k|I|l|p|P|M|S)');
var _mgold$elm_date_format$Date_Format$format = F2(
	function (s, d) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_mgold$elm_date_format$Date_Format$re,
			_mgold$elm_date_format$Date_Format$formatToken(d),
			s);
	});
var _mgold$elm_date_format$Date_Format$formatISO8601 = _mgold$elm_date_format$Date_Format$format('%Y-%m-%dT%H:%M:%SZ');

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1));
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4));
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5));
					}
				case 'DocumentRule':
					return A2(
						_elm_lang$core$List_ops['::'],
						_p0._0,
						_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1));
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6));
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7));
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8));
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9));
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10));
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p0._0,
							_rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13));
					}
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p16._0,
					A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						update(_p17._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p17._0,
					A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return _elm_lang$core$Native_List.fromArray(
										[
											A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0))
										]);
								} else {
									var _p19 = A2(
										_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
										update,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1)
											]));
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p19._0._0,
												A2(_elm_lang$core$List_ops['::'], _p18._0._1._0, _p19._0._1))
											]);
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1))
								]);
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p18._0,
			A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1));
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_rtfeldman$elm_css$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				_elm_lang$core$Native_List.fromArray(
					[property])));
	});
var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return _elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
								A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0))
							]);
					case 'MediaRule':
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(
								_rtfeldman$elm_css$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
									_p22._0._1))
							]);
					default:
						return declarations;
				}
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$MediaQuery = function (a) {
	return {ctor: 'MediaQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
	function (pseudo, _p23) {
		var _p24 = _p23;
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			_p24._0,
			_p24._1,
			_elm_lang$core$Maybe$Just(pseudo));
	});
var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		var _p25 = styleBlock;
		if (_p25._1.ctor === '[]') {
			var _p26 = _p25._0;
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p26,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p25._2),
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					A2(_rtfeldman$elm_css$Css_Structure$applyPseudoElement, pseudo, _p26),
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[_p25]);
		}
	});
var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p27 = sequence;
		switch (_p27.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p27._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p27._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p27._0,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p27._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p27._1,
						_elm_lang$core$Native_List.fromArray(
							[selector])));
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p28 = list;
		if (_p28.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if ((_p28._0.ctor === '_Tuple2') && (_p28._1.ctor === '[]')) {
				return _elm_lang$core$Native_List.fromArray(
					[
						{
						ctor: '_Tuple2',
						_0: _p28._0._0,
						_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p28._0._1)
					}
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p28._0,
					A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p28._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p29 = selector;
		if (_p29._1.ctor === '[]') {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p29._0),
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p29._2);
		} else {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p29._0,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p29._1),
				_p29._2);
		}
	});
var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p30 = declarations;
		_v24_15:
		do {
			if (_p30.ctor === '[]') {
				return declarations;
			} else {
				if (_p30._1.ctor === '[]') {
					switch (_p30._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p30._0._0._1.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[
										_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p30._0._0._2))
									]);
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p30._0._0._1);
								return _elm_lang$core$Native_List.fromArray(
									[
										_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._0._0, newRest, _p30._0._0._2))
									]);
							}
						case 'MediaRule':
							if (_p30._0._1.ctor === '::') {
								if (_p30._0._1._1.ctor === '[]') {
									if (_p30._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._1._0._0),
											_elm_lang$core$Native_List.fromArray(
												[]),
											_p30._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p30._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									} else {
										var newRest = A2(
											_rtfeldman$elm_css$Css_Structure$mapLast,
											_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
											_p30._0._1._0._1);
										var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._1._0._0, newRest, _p30._0._1._0._2);
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p30._0._0,
												_elm_lang$core$Native_List.fromArray(
													[newStyleBlock]))
											]);
									}
								} else {
									var _p31 = A2(
										_rtfeldman$elm_css$Css_Structure$extendLastSelector,
										selector,
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p30._0._0, _p30._0._1._1)
											]));
									if (((_p31.ctor === '::') && (_p31._0.ctor === 'MediaRule')) && (_p31._1.ctor === '[]')) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p31._0._0,
												A2(_elm_lang$core$List_ops['::'], _p30._0._1._0, _p31._0._1))
											]);
									} else {
										return _p31;
									}
								}
							} else {
								break _v24_15;
							}
						case 'SupportsRule':
							return _elm_lang$core$Native_List.fromArray(
								[
									A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p30._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p30._0._1))
								]);
						case 'DocumentRule':
							if (_p30._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_rtfeldman$elm_css$Css_Structure$StyleBlock,
									A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p30._0._4._0),
									_elm_lang$core$Native_List.fromArray(
										[]),
									_p30._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p30._0._0, _p30._0._1, _p30._0._2, _p30._0._3, newStyleBlock)
									]);
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p30._0._4._1);
								var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p30._0._4._0, newRest, _p30._0._4._2);
								return _elm_lang$core$Native_List.fromArray(
									[
										A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p30._0._0, _p30._0._1, _p30._0._2, _p30._0._3, newStyleBlock)
									]);
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v24_15;
				}
			}
		} while(false);
		return A2(
			_elm_lang$core$List_ops['::'],
			_p30._0,
			A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p30._1));
	});
var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
	function (selector, styleBlock) {
		var _p32 = styleBlock;
		if (_p32._1.ctor === '[]') {
			var _p33 = _p32._0;
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p33,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_p32._2),
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p33),
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		} else {
			var _p35 = _p32._1;
			var _p34 = _p32._0;
			var newRest = A2(
				_rtfeldman$elm_css$Css_Structure$mapLast,
				_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
				_p35);
			return _elm_lang$core$Native_List.fromArray(
				[
					A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p34, _p35, _p32._2),
					A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p34,
					newRest,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]);
		}
	});
var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (mixins) {
	toPropertyPairs:
	while (true) {
		var _p0 = mixins;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return A2(
						_elm_lang$core$List_ops['::'],
						_rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				case 'ApplyMixins':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					mixins = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p3._0]));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: _elm_lang$core$Native_List.fromArray(
			[]),
		namespaces: _elm_lang$core$Native_List.fromArray(
			[]),
		snippets: snippets
	};
};
var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$ApplyMixins = function (a) {
	return {ctor: 'ApplyMixins', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
	function (update, mixin) {
		var _p4 = mixin;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return mixin;
			case 'WithPseudoElement':
				return mixin;
			case 'WithMedia':
				return mixin;
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
					A2(
						_rtfeldman$elm_css$Css_Structure$mapLast,
						_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
	function (update, mixins) {
		var _p5 = mixins;
		if (_p5.ctor === '[]') {
			return mixins;
		} else {
			if (_p5._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0)
					]);
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p5._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1));
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], '    ', str);
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _rtfeldman$elm_css$Css_Structure_Output$indent(
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				A2(
					_elm_lang$core$List_ops['::'],
					_p7._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)));
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
				_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1)
			]));
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var pseudoElementsString = A2(
		_elm_lang$core$String$join,
		'',
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2))
			]));
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0)
			]),
		A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		pseudoElementsString,
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p13) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p13));
				},
				segments)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = function (_p14) {
	var _p15 = _p14;
	var selectorStr = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
			A2(_elm_lang$core$List_ops['::'], _p15._0, _p15._1)));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		selectorStr,
		A2(
			_elm_lang$core$Basics_ops['++'],
			' {\n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p15._2),
				'\n}')));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p16 = declaration;
	switch (_p16.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p16._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					function (_p17) {
						var _p18 = _p17;
						return _p18._0;
					},
					_p16._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _rtfeldman$elm_css$Css_Structure_Output$indent(
							_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock(_p19));
					},
					_p16._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_rtfeldman$elm_css$Css_Structure_Output$indent(blocks),
							'\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 56, column: 5},
					end: {line: 73, column: 49}
				},
				_p16)('not yet implemented :x');
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return _elm_lang$core$Basics$not(
					_elm_lang$core$String$isEmpty(_p27));
			},
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
					A2(
					_elm_lang$core$String$join,
					'\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
					A2(
					_elm_lang$core$String$join,
					'\n\n',
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations))
				])));
};

var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p1) {
	var _p2 = _p1;
	return {
		ctor: '_Tuple2',
		_0: _p2.warnings,
		_1: {key: _p2.key, value: _p2.value, important: _p2.important}
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Basics$snd(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p3 = declaration;
		if (_p3.ctor === 'StyleBlockDeclaration') {
			return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p3._0);
		} else {
			return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p4 = declarationsAndWarnings;
	if (_p4.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p4._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p4._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p4._0.warnings, result.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p5 = tuplesToExpand;
		if (_p5.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var _p6 = expandTuples(_p5._1);
			var nextWarnings = _p6._0;
			var nextTuples = _p6._1;
			var _p7 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p5._0._1);
			var warnings = _p7._0;
			var properties = _p7._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: _p5._0._0, _1: properties},
					nextTuples)
			};
		}
	};
	var _p8 = expandTuples(tuples);
	var warnings = _p8._0;
	var newTuples = _p8._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p9 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p9._0;
	var properties = _p9._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p10 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p10._0;
	var properties = _p10._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$Viewport(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties)
				]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p11._0;
	var properties = _p11._1;
	return {
		declarations: _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$FontFace(properties)
			]),
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p12 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p12._0;
		var properties = _p12._1;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties)
				]),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p13 = declaration;
		switch (_p13.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					_elm_lang$core$Native_List.fromArray(
						[_p13._0]));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p13._0),
					_p13._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p13._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p13._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p13._0, _p13._1, _p13._2, _p13._3, _p13._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p14 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p14.declarations;
			var warnings = _p14.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p15) {
	var _p16 = _p15;
	return A2(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
		_p16._2,
		_elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
				A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p16._0,
					_p16._1,
					_elm_lang$core$Native_List.fromArray(
						[])))
			]));
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins = F2(
	function (mixins, declarations) {
		applyMixins:
		while (true) {
			var _p17 = mixins;
			if (_p17.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: _elm_lang$core$Native_List.fromArray(
						[])
				};
			} else {
				switch (_p17._0.ctor) {
					case 'AppendProperty':
						var _p18 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p17._0._0);
						var warnings = _p18._0;
						var property = _p18._1;
						var result = A2(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins,
							_p17._1,
							A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p17._0._1,
							_p17._1,
							_rtfeldman$elm_css$Css_Structure$appendToLastSelector(_p17._0._0),
							declarations);
					case 'NestSnippet':
						var chain = F2(
							function (_p20, _p19) {
								var _p21 = _p20;
								var _p22 = _p19;
								return A3(
									_rtfeldman$elm_css$Css_Structure$Selector,
									_p21._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p21._1,
										A2(
											_elm_lang$core$List_ops['::'],
											{ctor: '_Tuple2', _0: _p17._0._0, _1: _p22._0},
											_p22._1)),
									_elm_lang$core$Maybe$oneOf(
										_elm_lang$core$Native_List.fromArray(
											[_p22._2, _p21._2])));
							});
						var expandDeclaration = function (declaration) {
							var _p23 = declaration;
							switch (_p23.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												A2(_elm_lang$core$List_ops['::'], _p23._0._0, _p23._0._1));
										},
										_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p24 = newSelectors;
										if (_p24.ctor === '[]') {
											return _elm_lang$core$Native_List.fromArray(
												[]);
										} else {
											return _elm_lang$core$Native_List.fromArray(
												[
													_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
													A3(
														_rtfeldman$elm_css$Css_Structure$StyleBlock,
														_p24._0,
														_p24._1,
														_elm_lang$core$Native_List.fromArray(
															[])))
												]);
										}
									}();
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										_elm_lang$core$Native_List.fromArray(
											[
												A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p23._0._2, newDeclarations)
											]));
								case 'MediaRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p23._0, _p23._1);
								case 'SupportsRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p23._0, _p23._1);
								case 'DocumentRule':
									return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p23._0, _p23._1, _p23._2, _p23._3, _p23._4);
								case 'PageRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p23._0, _p23._1);
								case 'FontFace':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p23._0);
								case 'Keyframes':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p23._0, _p23._1);
								case 'Viewport':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p23._0);
								case 'CounterStyle':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p23._0);
								default:
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p23._0);
							}
						};
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								_elm_lang$core$Native_List.fromArray(
									[
										A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations)
									]),
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p17._0._1))));
					case 'WithPseudoElement':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast,
							_p17._0._1,
							_p17._1,
							_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p17._0._0),
							declarations);
					case 'WithMedia':
						var newDeclarations = function () {
							var _p25 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p25.ctor === '[]') {
								return _elm_lang$core$Native_List.fromArray(
									[]);
							} else {
								return _elm_lang$core$Native_List.fromArray(
									[
										A2(
										_rtfeldman$elm_css$Css_Structure$MediaRule,
										_p17._0._0,
										_elm_lang$core$Native_List.fromArray(
											[
												A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												_p25._0,
												_p25._1,
												_elm_lang$core$Native_List.fromArray(
													[]))
											]))
									]);
							}
						}();
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							_elm_lang$core$Native_List.fromArray(
								[
									A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._1, declarations),
									A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, _p17._0._1, newDeclarations)
								]));
					default:
						var _v14 = A2(_elm_lang$core$Basics_ops['++'], _p17._0._0, _p17._1),
							_v15 = declarations;
						mixins = _v14;
						declarations = _v15;
						continue applyMixins;
				}
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedMixinsToLast = F4(
	function (nestedMixins, rest, f, declarations) {
		var handleInitial = function (declarationsAndWarnings) {
			var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, nestedMixins, declarationsAndWarnings.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
				declarations: result.declarations
			};
		};
		var initialResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
			A2(
				_rtfeldman$elm_css$Css_Structure$mapLast,
				handleInitial,
				A2(
					_elm_lang$core$List$map,
					function (declaration) {
						return {
							declarations: _elm_lang$core$Native_List.fromArray(
								[declaration]),
							warnings: _elm_lang$core$Native_List.fromArray(
								[])
						};
					},
					A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, declarations))));
		var nextResult = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyMixins, rest, initialResult.declarations);
		return {
			warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
			declarations: nextResult.declarations
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p26 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p26.declarations;
		var warnings = _p26.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p27 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p27.declarations;
		var warnings = _p27.warnings;
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[
					A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations)
				]),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p28 = snippetDeclarations;
	if (_p28.ctor === '[]') {
		return {
			declarations: _elm_lang$core$Native_List.fromArray(
				[]),
			warnings: _elm_lang$core$Native_List.fromArray(
				[])
		};
	} else {
		var _p29 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p28._0);
		var declarations = _p29.declarations;
		var warnings = _p29.warnings;
		var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p28._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p30 = snippetDeclaration;
	switch (_p30.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p30._0);
		case 'MediaRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p30._0, _p30._1);
		case 'SupportsRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p30._0, _p30._1);
		case 'DocumentRule':
			return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p30._0, _p30._1, _p30._2, _p30._3, _p30._4);
		case 'PageRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p30._0, _p30._1);
		case 'FontFace':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p30._0);
		case 'Keyframes':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p30._0, _p30._1);
		case 'Viewport':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p30._0);
		case 'CounterStyle':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p30._0);
		default:
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p30._0);
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p31) {
	var _p32 = _p31;
	var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p32.snippets));
	var warnings = _p33.warnings;
	var declarations = _p33.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p32.charset, imports: _p32.imports, namespaces: _p32.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (sheet) {
	var _p34 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p34._0;
	var warnings = _p34._1;
	return {
		warnings: warnings,
		css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
			_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _rtfeldman$elm_css$Css$asPairs = _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs;
var _rtfeldman$elm_css$Css$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p0._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$List_ops['::'], _p0._0._0._0, _p0._0._0._1),
					_rtfeldman$elm_css$Css$collectSelectors(_p0._1));
			} else {
				var _v1 = _p0._1;
				declarations = _v1;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css$compile = _rtfeldman$elm_css$Css_Preprocess_Resolve$compile;
var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _rtfeldman$elm_css$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_rtfeldman$elm_css$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _rtfeldman$elm_css$Css$each = F2(
	function (snippetCreators, mixins) {
		var selectorsToSnippet = function (selectors) {
			var _p1 = selectors;
			if (_p1.ctor === '[]') {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[]));
			} else {
				return _rtfeldman$elm_css$Css_Preprocess$Snippet(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
							A3(_rtfeldman$elm_css$Css_Preprocess$StyleBlock, _p1._0, _p1._1, mixins))
						]));
			}
		};
		return selectorsToSnippet(
			_rtfeldman$elm_css$Css$collectSelectors(
				A2(
					_elm_lang$core$List$concatMap,
					_rtfeldman$elm_css$Css_Preprocess$unwrapSnippet,
					A2(
						_elm_lang$core$List$map,
						F2(
							function (x, y) {
								return y(x);
							})(
							_elm_lang$core$Native_List.fromArray(
								[])),
						snippetCreators))));
	});
var _rtfeldman$elm_css$Css$generalSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$GeneralSibling);
var _rtfeldman$elm_css$Css$adjacentSiblings = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$AdjacentSibling);
var _rtfeldman$elm_css$Css$descendants = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Descendant);
var _rtfeldman$elm_css$Css$withClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$ClassSelector(
			A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class)));
};
var _rtfeldman$elm_css$Css$children = _rtfeldman$elm_css$Css_Preprocess$NestSnippet(_rtfeldman$elm_css$Css_Structure$Child);
var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('selection'));
var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('first-line'));
var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('first-letter'));
var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('before'));
var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
	_rtfeldman$elm_css$Css_Structure$PseudoElement('after'));
var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('valid'));
var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('target'));
var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('scope'));
var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('root'));
var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('required'));
var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('read-write'));
var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('out-of-range'));
var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('optional'));
var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-of-type'));
var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('only-child'));
var _rtfeldman$elm_css$Css$nthOfType = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-of-type(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-last-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$nthChild = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'nth-child(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('link'));
var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-of-type'));
var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('last-child'));
var _rtfeldman$elm_css$Css$lang = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'lang(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('invalid'));
var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('indeterminate'));
var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('hover'));
var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('focus'));
var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('fullscreen'));
var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-of-type'));
var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first-child'));
var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('first'));
var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('enabled'));
var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('empty'));
var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('disabled'));
var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('checked'));
var _rtfeldman$elm_css$Css$any = function (str) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'any(',
				A2(_elm_lang$core$Basics_ops['++'], str, ')'))));
};
var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
	_rtfeldman$elm_css$Css_Structure$PseudoClassSelector('active'));
var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
	var _p2 = directionality;
	if (_p2.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _rtfeldman$elm_css$Css$dir = function (directionality) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'dir(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_rtfeldman$elm_css$Css$directionalityToString(directionality),
					')'))));
};
var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _rtfeldman$elm_css$Css$makeSnippet = F2(
	function (mixins, sequence) {
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			_elm_lang$core$Native_List.fromArray(
				[]),
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						_elm_lang$core$Native_List.fromArray(
							[]),
						mixins))
				]));
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['.'] = F2(
	function ($class, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure$ClassSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', $class))
					])));
	});
var _rtfeldman$elm_css$Css$selector = F2(
	function (selectorStr, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			A2(
				_rtfeldman$elm_css$Css_Structure$CustomSelector,
				selectorStr,
				_elm_lang$core$Native_List.fromArray(
					[])));
	});
var _rtfeldman$elm_css$Css$everything = function (mixins) {
	return A2(
		_rtfeldman$elm_css$Css$makeSnippet,
		mixins,
		_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
			_elm_lang$core$Native_List.fromArray(
				[])));
};
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['#'] = F2(
	function (id, mixins) {
		return A2(
			_rtfeldman$elm_css$Css$makeSnippet,
			mixins,
			_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
				_elm_lang$core$Native_List.fromArray(
					[
						_rtfeldman$elm_css$Css_Structure$IdSelector(
						A2(_rtfeldman$elm_css_util$Css_Helpers$identifierToString, '', id))
					])));
	});
var _rtfeldman$elm_css$Css$mixin = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins;
var _rtfeldman$elm_css$Css$stylesheet = _rtfeldman$elm_css$Css_Preprocess$stylesheet;
var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
};
var _rtfeldman$elm_css$Css$animationName = function (identifier) {
	return _rtfeldman$elm_css$Css$animationNames(
		_elm_lang$core$Native_List.fromArray(
			[identifier]));
};
var _rtfeldman$elm_css$Css$fontWeight = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p5,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				_elm_lang$core$Native_List.range(1, 9)));
	};
	var warnings = validWeight(
		_rtfeldman$elm_css$Css$stringToInt(_p5)) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p5, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values'))
		]);
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p5);
};
var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p6) {
	var _p7 = _p6;
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p7.warnings, 'font-feature-settings', _p7.value);
};
var _rtfeldman$elm_css$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _rtfeldman$elm_css$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _rtfeldman$elm_css$Css$src = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _rtfeldman$elm_css$Css$withMedia = _rtfeldman$elm_css$Css_Preprocess$WithMedia;
var _rtfeldman$elm_css$Css$media = F2(
	function (mediaQueries, snippets) {
		var nestedMediaRules = function (declarations) {
			nestedMediaRules:
			while (true) {
				var _p8 = declarations;
				if (_p8.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					switch (_p8._0.ctor) {
						case 'StyleBlockDeclaration':
							var _v7 = _p8._1;
							declarations = _v7;
							continue nestedMediaRules;
						case 'MediaRule':
							return A2(
								_elm_lang$core$List_ops['::'],
								A2(
									_rtfeldman$elm_css$Css_Preprocess$MediaRule,
									A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p8._0._0),
									_p8._0._1),
								nestedMediaRules(_p8._1));
						default:
							return A2(
								_elm_lang$core$List_ops['::'],
								_p8._0,
								nestedMediaRules(_p8._1));
					}
				}
			}
		};
		var extractStyleBlocks = function (declarations) {
			extractStyleBlocks:
			while (true) {
				var _p9 = declarations;
				if (_p9.ctor === '[]') {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				} else {
					if (_p9._0.ctor === 'StyleBlockDeclaration') {
						return A2(
							_elm_lang$core$List_ops['::'],
							_p9._0._0,
							extractStyleBlocks(_p9._1));
					} else {
						var _v9 = _p9._1;
						declarations = _v9;
						continue extractStyleBlocks;
					}
				}
			}
		};
		var snippetDeclarations = A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets);
		var mediaRuleFromStyleBlocks = A2(
			_rtfeldman$elm_css$Css_Preprocess$MediaRule,
			mediaQueries,
			extractStyleBlocks(snippetDeclarations));
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List_ops['::'],
				mediaRuleFromStyleBlocks,
				nestedMediaRules(snippetDeclarations)));
	});
var _rtfeldman$elm_css$Css$mediaQuery = F2(
	function (queryString, snippets) {
		return A2(
			_rtfeldman$elm_css$Css$media,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css_Structure$MediaQuery(queryString)
				]),
			snippets);
	});
var _rtfeldman$elm_css$Css$color = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _rtfeldman$elm_css$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value, c4.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value, c3.value]));
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				[c1.value, c2.value]));
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _rtfeldman$elm_css$Css$featureOff = 0;
var _rtfeldman$elm_css$Css$featureOn = 1;
var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value, argD.value])));
	});
var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
var _rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value, argC.value])));
	});
var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations3 = function (_p10) {
	return A2(
		_rtfeldman$elm_css$Css$prop3,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p10));
};
var _rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				_elm_lang$core$Native_List.fromArray(
					[argA.value, argB.value])));
	});
var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations2 = function (_p11) {
	return A2(
		_rtfeldman$elm_css$Css$prop2,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p11));
};
var _rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
	});
var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
var _rtfeldman$elm_css$Css$fontFamilies = function (_p12) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-family',
		_rtfeldman$elm_css$Css$stringsToValue(_p12));
};
var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p13) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-variant-numeric',
		_rtfeldman$elm_css$Css$valuesOrNone(_p13));
};
var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations = function (_p14) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p14));
};
var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
var _rtfeldman$elm_css$Css$textDecorationLines = function (_p15) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration-line',
		_rtfeldman$elm_css$Css$valuesOrNone(_p15));
};
var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
var _rtfeldman$elm_css$Css$transforms = function (_p16) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'transform',
		_rtfeldman$elm_css$Css$valuesOrNone(_p16));
};
var _rtfeldman$elm_css$Css$transform = function (only) {
	return _rtfeldman$elm_css$Css$transforms(
		_elm_lang$core$Native_List.fromArray(
			[only]));
};
var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
var _rtfeldman$elm_css$Css$textJustify = _rtfeldman$elm_css$Css$prop1('text-justify');
var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
var _rtfeldman$elm_css$Css$combineLengths = F3(
	function (operation, first, second) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p17) {
					return _elm_lang$core$Basics$not(
						_elm_lang$core$String$isEmpty(_p17));
				},
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Basics$toString(
						A2(operation, first.numericValue, second.numericValue)),
						first.unitLabel
					])));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value});
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, mixin) {
		getOverloadedProperty:
		while (true) {
			var _p18 = mixin;
			switch (_p18.ctor) {
				case 'AppendProperty':
					return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p18._0.key);
				case 'ExtendSelector':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for selector ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for combinator ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable mixin for media query ',
										_elm_lang$core$Basics$toString(_p18._0))))
							]),
						desiredKey,
						'');
				default:
					if (_p18._0.ctor === '[]') {
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty mixin. '))
								]),
							desiredKey,
							'');
					} else {
						if (_p18._0._1.ctor === '[]') {
							var _v11 = functionName,
								_v12 = desiredKey,
								_v13 = _p18._0._0;
							functionName = _v11;
							desiredKey = _v12;
							mixin = _v13;
							continue getOverloadedProperty;
						} else {
							var _v14 = functionName,
								_v15 = desiredKey,
								_v16 = _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(_p18._0._1);
							functionName = _v14;
							desiredKey = _v15;
							mixin = _v16;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _rtfeldman$elm_css$Css$tv = _rtfeldman$elm_css$Css_Structure$MediaQuery('tv');
var _rtfeldman$elm_css$Css$projection = _rtfeldman$elm_css$Css_Structure$MediaQuery('projection');
var _rtfeldman$elm_css$Css$print = _rtfeldman$elm_css$Css_Structure$MediaQuery('print');
var _rtfeldman$elm_css$Css$screen = _rtfeldman$elm_css$Css_Structure$MediaQuery('screen');
var _rtfeldman$elm_css$Css$NumberedWeight = F2(
	function (a, b) {
		return {value: a, fontWeight: b};
	});
var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, lengthOrNumberOrAutoOrNoneOrContent: m, fontSize: n};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$NonMixable = {};
var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return {value: a, all: b, alignItems: c, boxSizing: d, display: e, flexBasis: f, flexWrap: g, flexDirection: h, flexDirectionOrWrap: i, none: j, number: k, overflow: l, textDecorationLine: m, textRendering: n, textIndent: o, textDecorationStyle: p, length: q, lengthOrAuto: r, lengthOrNone: s, lengthOrNumber: t, lengthOrMinMaxDimension: u, lengthOrNoneOrMinMaxDimension: v, lengthOrNumberOrAutoOrNoneOrContent: w, fontFamily: x, fontSize: y, fontStyle: z, fontWeight: _1, fontVariant: _2, units: _3, numericValue: _4, unitLabel: _5};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$Compatible = {ctor: 'Compatible'};
var _rtfeldman$elm_css$Css$transparent = {
	value: 'transparent',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _rtfeldman$elm_css$Css$currentColor = {
	value: 'currentColor',
	color: _rtfeldman$elm_css$Css$Compatible,
	warnings: _elm_lang$core$Native_List.fromArray(
		[])
};
var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', overflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.'))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue]))),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.'))))))))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[red, green, blue, alpha]))),
			color: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$hex = function (str) {
	var value = _elm_lang$core$Native_Utils.eq(
		A3(_elm_lang$core$String$slice, 0, 1, str),
		'#') ? str : A2(_elm_lang$core$Basics_ops['++'], '#', str);
	var warnings = A2(
		_elm_lang$core$Regex$contains,
		_elm_lang$core$Regex$regex('^#([a-fA-F0-9]{8}|[a-fA-F0-9]{6}|[a-fA-F0-9]{4}|[a-fA-F0-9]{3})$'),
		value) ? _elm_lang$core$Native_List.fromArray(
		[]) : _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$String$join,
			' ',
			_elm_lang$core$Native_List.fromArray(
				['The syntax of a hex-color is a token whose value consists of 3, 4, 6, or 8 hexadecimal digits.', value, 'is not valid.', 'Please see: https://drafts.csswg.org/css-color/#hex-notation']))
		]);
	return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: 0, green: 0, blue: 0, alpha: 1, warnings: warnings};
};
var _rtfeldman$elm_css$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, alpha) {
		var blue = 0;
		var green = 0;
		var red = 0;
		return {value: value, color: _rtfeldman$elm_css$Css$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _rtfeldman$elm_css$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css$numberToString(hue),
				_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_rtfeldman$elm_css$Css$numericalPercentageToString(lightness)
			]);
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _rtfeldman$elm_css$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = _elm_lang$core$Native_List.fromArray(
			[
				_rtfeldman$elm_css$Css$numberToString(hue),
				_rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
				_rtfeldman$elm_css$Css$numberToString(alpha)
			]);
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.'))
			]) : _elm_lang$core$Native_List.fromArray(
			[]);
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lengthConverter = F3(
	function (units, unitLabel, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				unitLabel),
			numericValue: num,
			units: units,
			unitLabel: unitLabel,
			length: _rtfeldman$elm_css$Css$Compatible,
			lengthOrAuto: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNone: _rtfeldman$elm_css$Css$Compatible,
			lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible,
			textIndent: _rtfeldman$elm_css$Css$Compatible,
			flexBasis: _rtfeldman$elm_css$Css$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
			fontSize: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				suffix),
			angle: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
var _rtfeldman$elm_css$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[a, b, c, d, tx, ty]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_rtfeldman$elm_css$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_rtfeldman$elm_css$Css$numberToString,
																			_elm_lang$core$Native_List.fromArray(
																				[a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4]))),
																	transform: _rtfeldman$elm_css$Css$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$perspective = function (l) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'perspective',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(l)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate = function (_p19) {
	var _p20 = _p19;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			_elm_lang$core$Native_List.fromArray(
				[_p20.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateX = function (_p21) {
	var _p22 = _p21;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateX',
			_elm_lang$core$Native_List.fromArray(
				[_p22.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateY = function (_p23) {
	var _p24 = _p23;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateY',
			_elm_lang$core$Native_List.fromArray(
				[_p24.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateZ = function (_p25) {
	var _p26 = _p25;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p26.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate3d = F4(
	function (x, y, z, _p27) {
		var _p28 = _p27;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css$numberToString,
			_elm_lang$core$Native_List.fromArray(
				[x, y, z]));
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					_elm_lang$core$Native_List.fromArray(
						[_p28.value]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scale = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scale',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(x)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scaleX = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleX',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(x)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$numberToString(y)
				])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					_elm_lang$core$Native_List.fromArray(
						[x, y, z]))),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skew = function (_p29) {
	var _p30 = _p29;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skew',
			_elm_lang$core$Native_List.fromArray(
				[_p30.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				_elm_lang$core$Native_List.fromArray(
					[ax.value, ay.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skewX = function (_p31) {
	var _p32 = _p31;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewX',
			_elm_lang$core$Native_List.fromArray(
				[_p32.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$skewY = function (_p33) {
	var _p34 = _p33;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewY',
			_elm_lang$core$Native_List.fromArray(
				[_p34.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate = function (_p35) {
	var _p36 = _p35;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translate',
			_elm_lang$core$Native_List.fromArray(
				[_p36.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$translateX = function (_p37) {
	var _p38 = _p37;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateX',
			_elm_lang$core$Native_List.fromArray(
				[_p38.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateY = function (_p39) {
	var _p40 = _p39;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			_elm_lang$core$Native_List.fromArray(
				[_p40.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateZ = function (_p41) {
	var _p42 = _p41;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateZ',
			_elm_lang$core$Native_List.fromArray(
				[_p42.value])),
		transform: _rtfeldman$elm_css$Css$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate3d',
				_elm_lang$core$Native_List.fromArray(
					[tx.value, ty.value, tz.value])),
			transform: _rtfeldman$elm_css$Css$Compatible
		};
	});
var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$wrap,
	{value: 'wrap-reverse'});
var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'row-reverse'});
var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column'});
var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column-reverse'});
var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$none = {value: 'none', none: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, transform: _rtfeldman$elm_css$Css$Compatible, borderStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$auto = {value: 'auto', flexBasis: _rtfeldman$elm_css$Css$Compatible, overflow: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'max-content'});
var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'min-content'});
var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'fit-content'});
var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$normal = {
	value: 'normal',
	warnings: _elm_lang$core$Native_List.fromArray(
		[]),
	fontStyle: _rtfeldman$elm_css$Css$Compatible,
	featureTagValue: _rtfeldman$elm_css$Css$Compatible
};
var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bold = {value: 'bold', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css$Compatible};
var _rtfeldman$elm_css$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = _elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
				{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature values cannot be negative. ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(value),
						' is invalid.'))
			}
			]);
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$snd,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$fst, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _rtfeldman$elm_css$Css$Compatible,
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css$featureTag = function (tag) {
	return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
};
var _rtfeldman$elm_css$Css$PseudoClass = F2(
	function (a, b) {
		return {ctor: 'PseudoClass', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PseudoElement = F2(
	function (a, b) {
		return {ctor: 'PseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0};
var _rtfeldman$elm_css$Css$int = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessInteger
	};
};
var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _rtfeldman$elm_css$Css$float = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css$Compatible,
		number: _rtfeldman$elm_css$Css$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessFloat
	};
};
var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _rtfeldman$elm_css$Css$initial = {value: 'initial', overflow: _rtfeldman$elm_css$Css$Compatible, none: _rtfeldman$elm_css$Css$Compatible, number: _rtfeldman$elm_css$Css$Compatible, textDecorationLine: _rtfeldman$elm_css$Css$Compatible, textRendering: _rtfeldman$elm_css$Css$Compatible, textIndent: _rtfeldman$elm_css$Css$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css$Compatible, boxSizing: _rtfeldman$elm_css$Css$Compatible, display: _rtfeldman$elm_css$Css$Compatible, all: _rtfeldman$elm_css$Css$Compatible, alignItems: _rtfeldman$elm_css$Css$Compatible, length: _rtfeldman$elm_css$Css$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css$Compatible, lengthOrNone: _rtfeldman$elm_css$Css$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css$Compatible, flexBasis: _rtfeldman$elm_css$Css$Compatible, flexWrap: _rtfeldman$elm_css$Css$Compatible, flexDirection: _rtfeldman$elm_css$Css$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css$Compatible, fontFamily: _rtfeldman$elm_css$Css$Compatible, fontSize: _rtfeldman$elm_css$Css$Compatible, fontStyle: _rtfeldman$elm_css$Css$Compatible, fontWeight: _rtfeldman$elm_css$Css$Compatible, fontVariant: _rtfeldman$elm_css$Css$Compatible, units: _rtfeldman$elm_css$Css$IncompatibleUnits, numericValue: 0, unitLabel: ''};
var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
var _rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty = F2(
	function (name, property) {
		var _p0 = property.key;
		if (_p0 === 'animation-name') {
			return _elm_lang$core$Native_Utils.update(
				property,
				{
					value: A2(_elm_lang$core$Basics_ops['++'], name, property.value)
				});
		} else {
			return property;
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable = F2(
	function (name, selector) {
		var _p1 = selector;
		switch (_p1.ctor) {
			case 'ClassSelector':
				return _rtfeldman$elm_css$Css_Structure$ClassSelector(
					A2(_elm_lang$core$Basics_ops['++'], name, _p1._0));
			case 'IdSelector':
				return _rtfeldman$elm_css$Css_Structure$IdSelector(_p1._0);
			default:
				return _rtfeldman$elm_css$Css_Structure$PseudoClassSelector(_p1._0);
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence = F2(
	function (name, sequence) {
		var _p2 = sequence;
		switch (_p2.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._0));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p2._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable(name),
						_p2._1));
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector = F2(
	function (name, _p3) {
		var _p4 = _p3;
		var apply = _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSequence(name);
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			apply(_p4._0),
			A2(
				_elm_lang$core$List$map,
				function (_p5) {
					var _p6 = _p5;
					return {
						ctor: '_Tuple2',
						_0: _p6._0,
						_1: apply(_p6._1)
					};
				},
				_p4._1),
			_p4._2);
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin = F2(
	function (name, mixin) {
		var _p7 = mixin;
		switch (_p7.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToProperty, name, _p7._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToRepeatable, name, _p7._0),
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'NestSnippet':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$NestSnippet,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(name),
						_p7._1));
			case 'WithPseudoElement':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$WithPseudoElement,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			case 'WithMedia':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$WithMedia,
					_p7._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._1));
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyMixins(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
						_p7._0));
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet = F2(
	function (name, _p8) {
		var _p9 = _p8;
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
				_p9._0));
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration = F2(
	function (name, declaration) {
		var _p10 = declaration;
		switch (_p10.ctor) {
			case 'StyleBlockDeclaration':
				return _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._0));
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$MediaRule,
					_p10._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock(name),
						_p10._1));
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$SupportsRule,
					_p10._0,
					function (declarations) {
						return _elm_lang$core$Native_List.fromArray(
							[
								_rtfeldman$elm_css$Css_Preprocess$Snippet(declarations)
							]);
					}(
						A2(
							_elm_lang$core$List$map,
							_rtfeldman$elm_css$Css_Namespace$applyNamespaceToDeclaration(name),
							A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p10._1))));
			case 'DocumentRule':
				return A5(
					_rtfeldman$elm_css$Css_Preprocess$DocumentRule,
					_p10._0,
					_p10._1,
					_p10._2,
					_p10._3,
					A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock, name, _p10._4));
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$Keyframes,
					A2(_elm_lang$core$Basics_ops['++'], name, _p10._0),
					_p10._1);
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Namespace$applyNamespaceToStyleBlock = F2(
	function (name, _p11) {
		var _p12 = _p11;
		return A3(
			_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
			A2(_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector, name, _p12._0),
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSelector(name),
				_p12._1),
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Namespace$applyNamespaceToMixin(name),
				_p12._2));
	});
var _rtfeldman$elm_css$Css_Namespace$namespace = F2(
	function (rawIdentifier, snippets) {
		return A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css_Namespace$applyNamespaceToSnippet(
				_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(rawIdentifier)),
			snippets);
	});

var _user$project$Types$Card = F6(
	function (a, b, c, d, e, f) {
		return {id: a, imageName: b, question: c, hint: d, correctAnswer: e, answers: f};
	});
var _user$project$Types$Answer = F2(
	function (a, b) {
		return {card: a, answer: b};
	});
var _user$project$Types$Result = F3(
	function (a, b, c) {
		return {answers: a, elapsedTime: b, date: c};
	});
var _user$project$Types$HelpModel = F3(
	function (a, b, c) {
		return {show: a, currentHint: b, shownHints: c};
	});
var _user$project$Types$Left = {ctor: 'Left'};
var _user$project$Types$Bottom = {ctor: 'Bottom'};
var _user$project$Types$Right = {ctor: 'Right'};
var _user$project$Types$Top = {ctor: 'Top'};
var _user$project$Types$ResultTableHint = {ctor: 'ResultTableHint'};
var _user$project$Types$QuizCardHint = {ctor: 'QuizCardHint'};
var _user$project$Types$QuizStatusHint = {ctor: 'QuizStatusHint'};
var _user$project$Types$QuizMenuHint = {ctor: 'QuizMenuHint'};
var _user$project$Types$HomeMenuHint = {ctor: 'HomeMenuHint'};
var _user$project$Types$SetHelp = function (a) {
	return {ctor: 'SetHelp', _0: a};
};
var _user$project$Types$DisableHelp = {ctor: 'DisableHelp'};
var _user$project$Types$EnableHelp = {ctor: 'EnableHelp'};
var _user$project$Types$HideHint = {ctor: 'HideHint'};
var _user$project$Types$ShowHint = function (a) {
	return {ctor: 'ShowHint', _0: a};
};
var _user$project$Types$ShowHintSet = function (a) {
	return {ctor: 'ShowHintSet', _0: a};
};

var _user$project$Utils_String$pluralize = F2(
	function (forms, count) {
		var reminder = A2(_elm_lang$core$Basics$rem, count, 10);
		return _elm_lang$core$Native_Utils.eq(reminder, 1) ? forms.one : (((_elm_lang$core$Native_Utils.cmp(reminder, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(reminder, 5) < 0)) ? forms.few : forms.many);
	});
var _user$project$Utils_String$PluralizationForms = F3(
	function (a, b, c) {
		return {one: a, few: b, many: c};
	});

var _user$project$Config$timeLimitInMinutes = 30;
var _user$project$Config$timeLimit = _user$project$Config$timeLimitInMinutes * 60;
var _user$project$Config$successScore = 0.8;
var _user$project$Config$cardsPerQuiz = 20;

var _user$project$Features_Help_Hints$resultTable = A2(_elm_lang$core$Basics_ops['++'], 'В этой таблице отображаются результаты предыдущих попыток. ', 'Перейти к любому результату можно щелчком на соответсвующей строчке');
var _user$project$Features_Help_Hints$quizCard = A2(
	_elm_lang$core$Basics_ops['++'],
	'Ответить на вопрос можно щелчком на нужном ответе или нажатием клавиши ',
	A2(_elm_lang$core$Basics_ops['++'], 'с номером ответа. Для перемещения между вопросами используйте кнопки ', '«Предыдущий» и «Следующий» или клавиши «←» и «→».'));
var _user$project$Features_Help_Hints$quizMenu = A2(_elm_lang$core$Basics_ops['++'], 'С помощью этого меню можно вернуться на главный экран ', 'или начать новую попытку');
var _user$project$Features_Help_Hints$homeMenu = A2(_elm_lang$core$Basics_ops['++'], 'С помощью этого меню можно начать тестирование или посмотреть ', 'результаты прошлых попыток');
var _user$project$Features_Help_Hints$minutesCount = function (count) {
	return A2(
		_user$project$Utils_String$pluralize,
		{one: 'минута', few: 'минуты', many: 'минут'},
		count);
};
var _user$project$Features_Help_Hints$quizStatus = A2(
	_elm_lang$core$Basics_ops['++'],
	'Здесь отображается номер текущего вопроса и прошедшее время. ',
	A2(
		_elm_lang$core$Basics_ops['++'],
		'На все вопросы дается ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(_user$project$Config$timeLimitInMinutes),
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Features_Help_Hints$minutesCount(_user$project$Config$timeLimitInMinutes),
					'. После истечения этого времени экзамен завершится автоматически')))));

var _user$project$Features_Help_Model$hint = function (helpHint) {
	var _p0 = helpHint;
	switch (_p0.ctor) {
		case 'HomeMenuHint':
			return _user$project$Features_Help_Hints$homeMenu;
		case 'QuizMenuHint':
			return _user$project$Features_Help_Hints$quizMenu;
		case 'QuizStatusHint':
			return _user$project$Features_Help_Hints$quizStatus;
		case 'QuizCardHint':
			return _user$project$Features_Help_Hints$quizCard;
		default:
			return _user$project$Features_Help_Hints$resultTable;
	}
};
var _user$project$Features_Help_Model$allHintsShown = function (model) {
	var allHints = _elm_lang$core$Set$fromList(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$toString,
			_elm_lang$core$Native_List.fromArray(
				[_user$project$Types$HomeMenuHint, _user$project$Types$QuizMenuHint, _user$project$Types$QuizStatusHint, _user$project$Types$QuizCardHint, _user$project$Types$ResultTableHint])));
	var shownHints = _elm_lang$core$Set$fromList(
		A2(_elm_lang$core$List$map, _elm_lang$core$Basics$toString, model.shownHints));
	return _elm_lang$core$Native_Utils.eq(shownHints, allHints);
};
var _user$project$Features_Help_Model$enableHelp = {
	show: true,
	currentHint: _elm_lang$core$Maybe$Just(_user$project$Types$HomeMenuHint),
	shownHints: _elm_lang$core$Native_List.fromArray(
		[])
};
var _user$project$Features_Help_Model$disableHelp = {
	show: false,
	currentHint: _elm_lang$core$Maybe$Nothing,
	shownHints: _elm_lang$core$Native_List.fromArray(
		[])
};
var _user$project$Features_Help_Model$hideHint = function (model) {
	var _p1 = model.currentHint;
	if (_p1.ctor === 'Just') {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				currentHint: _elm_lang$core$Maybe$Nothing,
				shownHints: A2(_elm_lang$core$List_ops['::'], _p1._0, model.shownHints)
			});
	} else {
		return model;
	}
};
var _user$project$Features_Help_Model$showHint = F2(
	function (model, hint) {
		return A2(_elm_lang$core$List$member, hint, model.shownHints) ? model : _elm_lang$core$Native_Utils.update(
			model,
			{
				shownHints: A2(_elm_lang$core$List_ops['::'], hint, model.shownHints),
				currentHint: _elm_lang$core$Maybe$Just(hint)
			});
	});
var _user$project$Features_Help_Model$showHintSet = F2(
	function (model, hints) {
		showHintSet:
		while (true) {
			var _p2 = hints;
			if (_p2.ctor === '[]') {
				return model;
			} else {
				var _p3 = _p2._0;
				if (A2(_elm_lang$core$List$member, _p3, model.shownHints)) {
					var _v3 = model,
						_v4 = _p2._1;
					model = _v3;
					hints = _v4;
					continue showHintSet;
				} else {
					return A2(_user$project$Features_Help_Model$showHint, model, _p3);
				}
			}
		}
	});
var _user$project$Features_Help_Model$init = function (hint) {
	return {
		show: true,
		currentHint: hint,
		shownHints: _elm_lang$core$Native_List.fromArray(
			[])
	};
};
var _user$project$Features_Help_Model$Model = F3(
	function (a, b, c) {
		return {show: a, currentHint: b, shownHints: c};
	});

var _user$project$Utils_HtmlHelpers$void = _elm_lang$html$Html_Attributes$href('javascript:void(0)');

var _user$project$Utils_Events$noBubble = {stopPropagation: true, preventDefault: true};
var _user$project$Utils_Events$messageOn = F3(
	function (name, options, message) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			name,
			options,
			_elm_lang$core$Json_Decode$succeed(message));
	});
var _user$project$Utils_Events$onClick = A2(_user$project$Utils_Events$messageOn, 'click', _user$project$Utils_Events$noBubble);

var _user$project$Utils_CssHelpers$namespacedClass = F3(
	function (namespace, prefixedClass, otherClasses) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List_ops['::'],
					A2(
						_elm_lang$core$Basics_ops['++'],
						namespace,
						_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(prefixedClass)),
					otherClasses)));
	});

var _user$project$Features_Help_Styles$namespace = 'Help';
var _user$project$Features_Help_Styles$namespacedClass = F2(
	function ($class, otherClasses) {
		var defaultClasses = function () {
			var _p0 = $class;
			if (_p0.ctor === 'Container') {
				return _elm_lang$core$Native_List.fromArray(
					['card-panel yellow lighten-4']);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}();
		return A3(
			_user$project$Utils_CssHelpers$namespacedClass,
			_user$project$Features_Help_Styles$namespace,
			$class,
			A2(_elm_lang$core$List$append, defaultClasses, otherClasses));
	});
var _user$project$Features_Help_Styles$Next = {ctor: 'Next'};
var _user$project$Features_Help_Styles$Hide = {ctor: 'Hide'};
var _user$project$Features_Help_Styles$Hint = {ctor: 'Hint'};
var _user$project$Features_Help_Styles$Container = {ctor: 'Container'};
var _user$project$Features_Help_Styles$css = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Features_Help_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Help_Styles$Container,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$px(350)),
					_rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$left),
					_rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('000')),
					_rtfeldman$elm_css$Css$lineHeight(
					_rtfeldman$elm_css$Css$px(21))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Help_Styles$Hint,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$paddingRight(
					_rtfeldman$elm_css$Css$px(10))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Help_Styles$Hide,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$top(
					_rtfeldman$elm_css$Css$px(10)),
					_rtfeldman$elm_css$Css$right(
					_rtfeldman$elm_css$Css$px(15)),
					_rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$color(
						_rtfeldman$elm_css$Css$hex('000'))),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent)),
					_rtfeldman$elm_css$Css$hover(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$important(
							_rtfeldman$elm_css$Css$color(
								_rtfeldman$elm_css$Css$hex('546e7a')))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Help_Styles$Next,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$display(_rtfeldman$elm_css$Css$inlineBlock)),
					_rtfeldman$elm_css$Css$marginTop(
					_rtfeldman$elm_css$Css$px(10)),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$padding(_rtfeldman$elm_css$Css$zero)),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$backgroundColor(_rtfeldman$elm_css$Css$transparent)),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$color(
						_rtfeldman$elm_css$Css$hex('039be5'))),
					_rtfeldman$elm_css$Css$hover(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$important(
							_rtfeldman$elm_css$Css$color(
								_rtfeldman$elm_css$Css$hex('64b5f6')))
						]))
				]))
		]));

var _user$project$Features_Help_View$styleFromPosition = function (position) {
	var mapSide = function (side) {
		var _p0 = side;
		switch (_p0.ctor) {
			case 'Top':
				return 'top';
			case 'Right':
				return 'right';
			case 'Bottom':
				return 'bottom';
			default:
				return 'left';
		}
	};
	var mapPair = function (_p1) {
		var _p2 = _p1;
		return {
			ctor: '_Tuple2',
			_0: mapSide(_p2._0),
			_1: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p2._1),
				'px')
		};
	};
	return A2(_elm_lang$core$List$map, mapPair, position);
};
var _user$project$Features_Help_View$closeButton = A2(
	_elm_lang$html$Html$a,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Utils_HtmlHelpers$void,
			A2(
			_user$project$Features_Help_Styles$namespacedClass,
			_user$project$Features_Help_Styles$Hide,
			_elm_lang$core$Native_List.fromArray(
				[])),
			_user$project$Utils_Events$onClick(_user$project$Types$HideHint)
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('✕')
		]));
var _user$project$Features_Help_View$nextHintButton = function (nextHint) {
	var btn = function (next) {
		return A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Utils_HtmlHelpers$void,
					A2(
					_user$project$Features_Help_Styles$namespacedClass,
					_user$project$Features_Help_Styles$Next,
					_elm_lang$core$Native_List.fromArray(
						[])),
					_user$project$Utils_Events$onClick(
					_user$project$Types$ShowHint(next))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('Далее')
				]));
	};
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_elm_lang$html$Html$text(''),
		A2(_elm_lang$core$Maybe$map, btn, nextHint));
};
var _user$project$Features_Help_View$hintContainer = F3(
	function (currentHint, nextHint, position) {
		var containerStyle = A2(
			_elm_lang$core$List_ops['::'],
			{ctor: '_Tuple2', _0: 'z-index', _1: '10000'},
			_user$project$Features_Help_View$styleFromPosition(position));
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_Help_Styles$namespacedClass,
					_user$project$Features_Help_Styles$Container,
					_elm_lang$core$Native_List.fromArray(
						[])),
					_elm_lang$html$Html_Attributes$style(containerStyle)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_Help_Styles$namespacedClass,
							_user$project$Features_Help_Styles$Hint,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text(
							_user$project$Features_Help_Model$hint(currentHint))
						])),
					_user$project$Features_Help_View$nextHintButton(nextHint),
					_user$project$Features_Help_View$closeButton
				]));
	});
var _user$project$Features_Help_View$view = F4(
	function (model, currentHint, nextHint, position) {
		var renderHint = function (hint) {
			return _elm_lang$core$Native_Utils.eq(hint, currentHint) ? A3(_user$project$Features_Help_View$hintContainer, currentHint, nextHint, position) : _elm_lang$html$Html$text('');
		};
		return model.show ? A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$html$Html$text(''),
			A2(_elm_lang$core$Maybe$map, renderHint, model.currentHint)) : _elm_lang$html$Html$text('');
	});

var _user$project$App_Help$help = F5(
	function (model, mapper, hint, nextHint, position) {
		return A2(
			_elm_lang$html$Html_App$map,
			mapper,
			A4(_user$project$Features_Help_View$view, model, hint, nextHint, position));
	});

var _user$project$Features_Home_Messages$HelpMessage = function (a) {
	return {ctor: 'HelpMessage', _0: a};
};
var _user$project$Features_Home_Messages$OpenResultsList = {ctor: 'OpenResultsList'};
var _user$project$Features_Home_Messages$OpenQuiz = {ctor: 'OpenQuiz'};

var _user$project$Features_Quiz_Messages$HelpMessage = function (a) {
	return {ctor: 'HelpMessage', _0: a};
};
var _user$project$Features_Quiz_Messages$InitAnswers = function (a) {
	return {ctor: 'InitAnswers', _0: a};
};
var _user$project$Features_Quiz_Messages$SetDate = function (a) {
	return {ctor: 'SetDate', _0: a};
};
var _user$project$Features_Quiz_Messages$ToggleHint = {ctor: 'ToggleHint'};
var _user$project$Features_Quiz_Messages$IncrementTimer = {ctor: 'IncrementTimer'};
var _user$project$Features_Quiz_Messages$Answer = function (a) {
	return {ctor: 'Answer', _0: a};
};
var _user$project$Features_Quiz_Messages$PrevCard = {ctor: 'PrevCard'};
var _user$project$Features_Quiz_Messages$NextCard = {ctor: 'NextCard'};
var _user$project$Features_Quiz_Messages$Cancel = {ctor: 'Cancel'};
var _user$project$Features_Quiz_Messages$Finish = function (a) {
	return {ctor: 'Finish', _0: a};
};
var _user$project$Features_Quiz_Messages$SetStartTime = {ctor: 'SetStartTime'};
var _user$project$Features_Quiz_Messages$Start = {ctor: 'Start'};
var _user$project$Features_Quiz_Messages$NoOp = {ctor: 'NoOp'};

var _user$project$Data_CardsList$cardsList = _elm_lang$core$Native_List.fromArray(
	[
		{
		id: 1,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие транспортные средства по Правилам относятся к маршрутным транспортным средствам?',
		hint: 'Критерием отнесения ТС к маршрутным является наличие установленного маршрута с обозначенными местами остановок. К таковым Правила относят автобусы, троллейбусы и трамваи (п. 1.2). Автомобили-такси к маршрутным ТС не относятся.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Все автобусы.', 'Автобусы, троллейбусы и трамваи, предназначенные для перевозки людей и движущиеся по установленному маршруту с обозначенными местами остановок.', 'Любые транспортные средства, перевозящие пассажиров.'])
	},
		{
		id: 2,
		imageName: _elm_lang$core$Maybe$Just('01-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение?',
		hint: 'Знак 4.1.4 «Движение прямо или направо» разрешает Вам движение только в направлениях А или Б. Разворот по траектории В, даже при наличии прерывистой линии разметки 1.7, запрещён.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только А или Б.', 'В любых.'])
	},
		{
		id: 3,
		imageName: _elm_lang$core$Maybe$Just('01-03.jpg'),
		question: 'Этот дорожный знак указывает:',
		hint: 'Информационный знак 6.21.1 «Направление движения к аварийному выходу» указывает направление к аварийному выходу и расстояние до него.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Расстояние до конца тоннеля.', 'Расстояние до места аварийной остановки.', 'Направление движения к аварийному выходу и расстояние до него.'])
	},
		{
		id: 4,
		imageName: _elm_lang$core$Maybe$Just('01-04.jpg'),
		question: 'Этот знак разрешает Вам ставить на стоянку легковой автомобиль с использованием тротуара:',
		hint: 'Знак 5.29 «Зона регулируемой стоянки» относится к так называемым зональным знакам, требования которых действуют на всей территории (участке дороги), обозначенной такими знаками, вплоть до выезда из зоны, обозначенного в данном случае знаком 5.30 «Конец зоны регулируемой стоянки». Действие знаков не прерывается на перекрёстках. При этом информацию о видах ТС, способах парковки и т.д. размещают на табличке под знаком или с помощью изображения таблички в нижней части знака. В данном случае табличка 8.6.2 «Способ постановки транспортного средства на стоянку» разрешает ставить легковые автомобили на стоянку с использованием тротуара на территории всей регулируемой стоянки, т.е. на любой стороне дорог, расположенных в зоне регулируемой стоянки.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на правой стороне дороги до ближайшего по ходу движения перекрестка.', 'Только на правой стороне дороги до знака «Конец зоны регулируемой стоянки».', 'На любой стороне дорог, расположенных в зоне регулируемой стоянки.'])
	},
		{
		id: 5,
		imageName: _elm_lang$core$Maybe$Just('01-05.jpg'),
		question: 'Эта разметка, нанесенная на полосе движения:',
		hint: 'Разметка 1.19 (в виде стрел) предупреждает Вас о необходимости покинуть полосу движения в связи с уменьшением количества полос в данном направлении (сужением проезжей части). Необходимо перестроиться на правую полосу.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предоставляет Вам преимущество при перестроении на правую полосу.', 'Информирует Вас о том, что дорога поворачивает направо.', 'Предупреждает Вас о приближении к сужению проезжей части.'])
	},
		{
		id: 6,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает мигание зелёного сигнала светофора?',
		hint: 'Для информирования водителей о предстоящей смене зелёного сигнала светофора на жёлтый Правилами предусмотрена возможность мигания зелёного сигнала. Этот сигнал разрешает движение ТС (п. 6.2). Длительность мигания при этом должна составлять 3 сек.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предупреждает о неисправности светофора.', 'Разрешает движение и информирует о том, что вскоре будет включен запрещающий сигнал.', 'Запрещает дальнейшее движение.'])
	},
		{
		id: 7,
		imageName: _elm_lang$core$Maybe$Just('01-07.jpg'),
		question: 'Обязаны ли Вы в данной ситуации подать сигнал правого поворота?',
		hint: 'Водитель обязан подавать сигналы световыми указателями поворота соответствующего направления перед началом движения, перестроением, поворотом, остановкой (п. 8.1). Двигаясь по закруглению дороги и не намереваясь перестраиваться или останавливаться, Вы не должны включать указатели поворота, чтобы не вводить в заблуждение других участников движения (п. 8.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но только при наличии движущихся сзади транспортных средств.', 'Нет.'])
	},
		{
		id: 8,
		imageName: _elm_lang$core$Maybe$Just('01-08.jpg'),
		question: 'Кто должен уступить дорогу при одновременном перестроении?',
		hint: 'При взаимном перестроении водитель легкового автомобиля должен уступить дорогу водителю мотоцикла, находящемуся от него справа (п. 8.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель легкового автомобиля.', 'Водитель мотоцикла.'])
	},
		{
		id: 9,
		imageName: _elm_lang$core$Maybe$Just('01-09.jpg'),
		question: 'По какой траектории Вам разрешено выполнить разворот?',
		hint: 'Выполняя разворот на этом перекрёстке, Вам придется использовать для движения участок проезжей части, имеющий двустороннее движение. Поэтому, въезжая на перекресток, Вы можете продолжить движение только по правой стороне этого участка проезжей части (п. 1.4), т.е. по траектории А.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 10,
		imageName: _elm_lang$core$Maybe$Just('01-10.jpg'),
		question: 'С какой скоростью Вы можете продолжить движение вне населенного пункта по левой полосе на легковом автомобиле?',
		hint: 'Знак 4.6 «Ограничение минимальной скорости» и табличка 8.14 «Полоса движения» предписывают двигаться по левой полосе со скоростью не менее 50 км/ч. Однако при этом на дороге вне населённого пункта, не относящейся к автомагистрали, Вы не имеете права развивать скорость на легковом автомобиле более 90 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 50 км/ч.', 'Не менее 50 км/ч и не более 70 км/ч.', 'Не менее 50 км/ч и не более 90 км/ч.'])
	},
		{
		id: 11,
		imageName: _elm_lang$core$Maybe$Just('01-11.jpg'),
		question: 'Может ли водитель легкового автомобиля в населенном пункте выполнить опережение грузовых автомобилей по такой траектории?',
		hint: 'Поскольку водитель легкового автомобиля приближается к перекрёстку неравнозначных дорог, двигаясь по главной дороге (знак 2.3.1 «Пересечение с второстепенной дорогой»), имеющей 2 полосы для движения в данном направлении, ему не запрещается в населённом пункте совершать опережение обоих грузовых автомобилей по любой траектории (п. 9.4.).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 12,
		imageName: _elm_lang$core$Maybe$Just('01-12.jpg'),
		question: 'Разрешено ли водителю поставить автомобиль на стоянку в указанном месте?',
		hint: 'Остановившись за пешеходным переходом в 5 м от края пересекаемой проезжей части и обеспечив при этом расстояние в 3 м до сплошной линии разметки, водитель не нарушил правила стоянки (пп. 12.4 и 12.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 13,
		imageName: _elm_lang$core$Maybe$Just('01-13.jpg'),
		question: 'Вы намерены повернуть направо. Следует ли уступить дорогу автобусу?',
		hint: 'При движении в направлении стрелки, включенной в дополнительной секции одновременно с красным сигналом светофора, Вы обязаны уступать дорогу ТС, движущимся с других направлений (п. 13.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 14,
		imageName: _elm_lang$core$Maybe$Just('01-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Несмотря на то, что легковой автомобиль первым въехал на перекресток равнозначных дорог, Вы имеете перед ним преимущество, и его водитель при левом повороте должен уступить вам дорогу (пп. 13.11 и 13.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу легковому автомобилю, поскольку он первым въехал на перекресток.', 'Убедитесь, что легковой автомобиль уступает дорогу и проедете перекресток первым.'])
	},
		{
		id: 15,
		imageName: _elm_lang$core$Maybe$Just('01-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Проезжая данный перекресток неравнозначных дорог по направлению главной дороги (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), Вы никому не должны уступать дорогу, так как пользуетесь преимуществом как перед находящимся на главной дороге автобусом, для которого Вы являетесь «помехой справа» (пп. 13.10 и 13.11), так и перед легковым автомобилем, движущимся по второстепенной дороге (п. 13.9).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только легковому автомобилю.', 'Никому.'])
	},
		{
		id: 16,
		imageName: _elm_lang$core$Maybe$Just('01-16.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение за знаком?',
		hint: 'Знак 5.21 «Жилая зона» показывает, что Вы въезжаете на территорию, где скорость не должна превышать 20 км/ч (п. 10.2).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['60 км/ч.', '50 км/ч.', '30 км/ч.', '20 км/ч.'])
	},
		{
		id: 17,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы Вы можете использовать при движении в темное время суток на неосвещенных участках дорог?',
		hint: 'При движении в темное время суток на неосвещенных участках дорог Вы должны использовать, в зависимости от дорожных условий, скорости движения и наличия впереди встречных и попутных ТС, фары ближнего или дальнего света (п. 19.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только фары ближнего света.', 'Только фары дальнего света.', 'Фары ближнего и дальнего света.'])
	},
		{
		id: 18,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При какой неисправности Вам разрешается эксплуатация транспортного средства?',
		hint: 'Из всех перечисленных неисправностей только неработающий стеклоподъемник не является причиной запрещения эксплуатации вашего ТС. Остальные неисправности включены в Перечень (п. 7.4), и при их наличии эксплуатация ТС запрещена.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работают запоры горловин топливных баков.', 'Не работает механизм регулировки сиденья водителя.', 'Не работает устройство обогрева и обдува стекла.', 'Не работает стеклоподъемник.'])
	},
		{
		id: 19,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В случае, когда правые колеса автомобиля наезжают на неукрепленную влажную обочину, рекомендуется:',
		hint: 'При съезде автомобиля правыми колесами на неукрепленную и влажную обочину возникает опасность заноса из-за разницы сцепления правых и левых колес с дорогой. При этом целесообразно, не меняя скорости, т.е. не прибегая к торможению, плавным поворотом рулевого колеса вернуть автомобиль на проезжую часть. Торможение в данной ситуации может вызвать занос автомобиля.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Затормозить и полностью остановиться.', 'Затормозить и плавно направить автомобиль в левую сторону.', 'Не прибегая к торможению, плавно вернуть автомобиль на проезжую часть.'])
	},
		{
		id: 20,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Когда, следует начинать сердечно-легочную реанимацию пострадавшего?',
		hint: 'Сердечно-лёгочная реанимация проводится только при отстутствии у пострадавшего признаков жизни: потери сознания, отсутствии пульса на сонной артерии, а также признаков дыхания.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['При потере пострадавшим сознания, независимо от наличия пулься на сонной артерии и признаков дыхания.', 'При потере пострадавшим сознания и отсутствии пульса на сонной артерии, а также признаков дыхания.'])
	},
		{
		id: 21,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении на легковом автомобиле, оборудованном ремнями безопасности, пристегиваться ремнями должны:',
		hint: 'При движении на легковом автомобиле не только водитель, но и все пассажиры ТС, оборудованного ремнями безопасности, должны быть пристегнуты (п. 2.1.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель.', 'Только водитель и пассажир на переднем сиденье.', 'Все лица, находящиеся в автомобиле.'])
	},
		{
		id: 22,
		imageName: _elm_lang$core$Maybe$Just('02-02.jpg'),
		question: 'Можете ли Вы въехать на мост первым?',
		hint: 'Знак 2.7 «Преимущество перед встречным движением» дает Вам право первым въехать на узкий мост, поскольку водитель встречного автомобиля в этой ситуации должен уступить дорогу тем, кто находится не только на мосту, но и на противоположном подъезде к нему.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 23,
		imageName: _elm_lang$core$Maybe$Just('02-03.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на грузовом автомобиле с разрешенной максимальной массой не более 3,5 т?',
		hint: 'Табличка 8.4.3 «Вид транспортного средства» с изображением легкового автомобиля распространяет действие знака и на грузовые автомобили с разрешенной максимальной массой до 3,5 т. Таким образом, Вы можете двигаться со скоростью не более 80 км/ч.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['60 км/ч.', '70 км/ч.', '80 км/ч.'])
	},
		{
		id: 24,
		imageName: _elm_lang$core$Maybe$Just('02-04.jpg'),
		question: 'Что запрещено в зоне действия этого знака:',
		hint: 'Знак 5.33 «Пешеходная зона» определяет место, с которого начинается территория (участок дороги), на которой разрешено движение только пешеходов, а значит, въезд в обозначенную зону любым ТС запрещён (Приложение 1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Движение со скоростью более 20 км/ч.', 'Движение только механических транспортных средств.', 'Движение любых транспортных средств.'])
	},
		{
		id: 25,
		imageName: _elm_lang$core$Maybe$Just('02-05.jpg'),
		question: 'Разрешён ли Вам обгон, если реверсивные светофоры отключены?',
		hint: 'В случае если реверсивные светофоры выключены, линию разметки 1.9 можно пересекать, если она расположена справа от водителя. Поскольку разметка слева от Вас, то обгон запрещён независимо от скорости движения автобуса.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, если скорость автобуса менее 30 км/ч.', 'Не разрешён.'])
	},
		{
		id: 26,
		imageName: _elm_lang$core$Maybe$Just('02-06.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение?',
		hint: 'Дополнительная секция с включенным сигналом в виде зелёной стрелки, знак 5.15.1 «Направления движения по полосам» и разметка 1.18 разрешают Вам с правой полосы только поворот налево. Движение прямо запрещает красный сигнал светофора, а разворот запрещён, так как правила предписывают проводить разворот только с крайней левой полосы (п. 8.5). Поворот направо запрещён при любом сигнале.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево.', 'Прямо и налево.', 'Налево и в обратном направлении.'])
	},
		{
		id: 27,
		imageName: _elm_lang$core$Maybe$Just('02-07.jpg'),
		question: 'Поднятая вверх рука водителя легкового автомобиля является сигналом, информирующим Вас:',
		hint: 'Для выполнения требования знака 2.4 «Уступите дорогу» водитель легкового автомобиля должен снизить скорость и остановиться, чтобы уступить дорогу мотоциклисту. Об этом он и информирует Вас поднятой вверх рукой (п. 8.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении повернуть направо.', 'О его намерении продолжить движение прямо.', 'О его намерении снизить скорость, чтобы остановиться и уступить дорогу мотоциклисту.'])
	},
		{
		id: 28,
		imageName: _elm_lang$core$Maybe$Just('02-08.jpg'),
		question: 'Двигаясь по левой полосе, Вы намерены перестроиться на правую. На каком из рисунков показана ситуация, в которой Вы обязаны уступить дорогу?',
		hint: 'Когда Вы перестраиваетесь с левой полосы на правую, то должны уступить дорогу водителю легкового автомобиля, движущегося по соседней правой полосе, как при его движении без изменения направления движения, так и в случае, когда он одновременно с Вами проводит перестроение (п. 8.4). Таким образом, уступить дорогу Вы обязаны в ситуациях, изображенных на обоих рисунках.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['На левом.', 'На правом.', 'На обоих.'])
	},
		{
		id: 29,
		imageName: _elm_lang$core$Maybe$Just('02-09.jpg'),
		question: 'Разрешён ли Вам разворот в указанном месте?',
		hint: 'Разворот запрещён непосредственно на самих железнодорожных переездах (п. 8.11). Перед переездом разворот разрешён.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешен только при отсутствии приближающегося поезда.', 'Разрешён.', 'Запрещён.'])
	},
		{
		id: 30,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях Вы можете наезжать на прерывистые линии разметки, разделяющие проезжую часть на полосы движения?',
		hint: 'Наезжать на прерывистые линии разметки разрешается только при перестроении (п. 9.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при перестроении.', 'Только при движении в темное время суток.', 'Только если на дороге нет других транспортных средств.', 'Во всех перечисленных случаях.'])
	},
		{
		id: 31,
		imageName: _elm_lang$core$Maybe$Just('02-11.jpg'),
		question: 'Разрешено ли Вам обогнать мотоциклиста?',
		hint: 'Мотоциклист и Вы приближаетесь к нерегулируемому перекрёстку равнозначных дорог, на котором обгон запрещён (п. 11.4). Кроме того, справа от вас находится легковой автомобиль, которому оба водителя должны уступить дорогу (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Запрещено.'])
	},
		{
		id: 32,
		imageName: _elm_lang$core$Maybe$Just('02-12.jpg'),
		question: 'Нарушил ли водитель грузового автомобиля с разрешенной максимальной массой не более 3,5 т правила стоянки в данной ситуации?',
		hint: 'Водитель нарушил правило стоянки, так как грузовым автомобилям не зависимо от разрешённой максимальной массы такая стоянка запрещена (п. 12.2), а легковым автомобилям, мотоциклам разрешена при наличии знака 6.4 «Место стоянки» с одной из табличек 8.6.2 ; 8.6.3 ; 8.6.6 - 8.6.9 «Способ постановки транспортного средства на стоянку».',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 33,
		imageName: _elm_lang$core$Maybe$Just('02-13.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Перекресток, на который Вы въезжаете, — регулируемый, и очередность движения на нем определяется не знаками приоритета, а сигналами светофора (пп. 6.15 и 13.3). Поворачивая налево, Вы должны уступить дорогу автобусу, движущемуся со встречного направления прямо (п. 13.4), а, завершая поворот, — и пешеходам, переходящим проезжую часть дороги, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только пешеходам.', 'Только автобусу.', 'Автобусу и пешеходам.', 'Никому.'])
	},
		{
		id: 34,
		imageName: _elm_lang$core$Maybe$Just('02-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Находящийся слева грузовой автомобиль должен уступить вам дорогу (п. 13.11), и поэтому данный перекресток равнозначных дорог Вы проедете первым. При этом конфигурация перекрёстка не влияет на очередность проезда.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Уступите дорогу автомобилю.'])
	},
		{
		id: 35,
		imageName: _elm_lang$core$Maybe$Just('02-15.jpg'),
		question: 'Обязан ли мотоциклист уступить Вам дорогу в данной ситуации?',
		hint: 'Вы движетесь по автомагистрали, о чем свидетельствует знак 5.1 «Автомагистраль», а мотоцикл въезжает на нее, и поэтому в данной ситуации он должен уступить вам дорогу. Автомагистраль является главной дорогой по отношению к примыкающей (пп. 13.9 и 1.2, термин «Главная дорога»).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 36,
		imageName: _elm_lang$core$Maybe$Just('02-16.jpg'),
		question: 'В данной ситуации Вы:',
		hint: 'В населённом пункте Вы должны уступить дорогу автобусу, начинающему движение от обозначенной остановки, даже если его водитель выезжает на вторую полосу (п. 18.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу автобусу, начинающему движение от обозначенного места остановки.', 'Имеете преимущество, так как водитель автобуса начинает движение с выездом на вторую полосу.'])
	},
		{
		id: 37,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких из перечисленных случаев запрещена буксировка на гибкой сцепке?',
		hint: 'Буксировка на гибкой сцепке запрещена только в гололедицу (п. 20.4) из-за высокой вероятности заноса при торможении или трогании с места.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на горных дорогах.', 'Только в гололедицу.', 'Только в темное время суток и в условиях недостаточной видимости.', 'Во всех перечисленных случаях.'])
	},
		{
		id: 38,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какая наименьшая величина остаточной высоты рисунка протектора допускается при эксплуатации мотоцикла?',
		hint: 'Остаточная высота рисунка протектора шины мотоцикла должна быть не менее 0,8 мм (Перечень, п. 5.1). При меньшей высоте рисунка протектора заметно ухудшается сцепление колеса с влажным покрытием.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['0,8 мм.', '1,0 мм.', '1,6 мм.', '2,0 мм.'])
	},
		{
		id: 39,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что подразумевается под остановочным путем?',
		hint: 'Под остановочным путем подразумевается расстояние, пройденное ТС с момента обнаружения водителем опасности до полной остановки. Остановочный путь всегда больше тормозного, так как до начала торможения ТС успевает переместиться на расстояние, зависящее от времени реакции водителя и времени срабатывания тормозного привода.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Расстояние, пройденное транспортным средством с момента обнаружения водителем опасности до полной остановки.', 'Расстояние, пройденное транспортным средством с момента начала срабатывания тормозного привода до полной остановки.', 'Расстояние, соответствующее тормозному пути, определенному технической характеристикой данного транспортного средства.'])
	},
		{
		id: 40,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что подразумевается под временем реакции водителя?',
		hint: 'Под временем реакции водителя подразумевается время с момента обнаружения опасности до начала принятия мер по избежанию опасности. В зависимости от состояния водителя и его опыта, а также сложности обстановки, в которой находится водитель, это время обычно составляет от 0,5 до 1,5 секунды.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Время с момента обнаружения водителем опасности до полной остановки транспортного средства.', 'Время с момента обнаружения водителем опасности до начала принятия мер по ее избежанию.', 'Время, необходимое для переноса ноги с педали подачи топлива на педаль тормоза.'])
	},
		{
		id: 41,
		imageName: _elm_lang$core$Maybe$Just('03-01.jpg'),
		question: 'Выезжая с грунтовой дороги, Вы попадаете:',
		hint: 'Вы выезжаете на дорогу с покрытием, которая является главной по отношению к грунтовой (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На главную дорогу.', 'На равнозначную дорогу.'])
	},
		{
		id: 42,
		imageName: _elm_lang$core$Maybe$Just('03-02.jpg'),
		question: 'В каком месте Вы должны остановиться?',
		hint: 'Знак 2.5 «Движение без остановки запрещено» применяется при ограниченной видимости пересекаемой дороги и поэтому независимо от наличия на ней ТС требует обязательной остановки. В данном случае Вы должны остановиться перед краем пересекаемой проезжей части (место В). При наличии разметки 1.12 (стоп-линия) останавливаться следует перед такой линией.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перед знаком (А).', 'Перед перекрестком (Б).', 'Перед краем пересекаемой проезжей части (В).'])
	},
		{
		id: 43,
		imageName: _elm_lang$core$Maybe$Just('03-03.jpg'),
		question: 'В каком случае Вам необходимо двигаться со скоростью до 40 км/ч?',
		hint: 'Табличка 8.16 «Влажное покрытие» информирует о том, что запрещение движения со скоростью более 40 км/ч, вводимое знаком 3.24 «Ограничение максимальной скорости», действует только в период времени, когда покрытие проезжей части влажное, например, во время дождя или сразу после его окончания.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Во всех случаях.', 'Только в том случае, когда покрытие на дороге влажное.'])
	},
		{
		id: 44,
		imageName: _elm_lang$core$Maybe$Just('03-04.jpg'),
		question: 'Какие из знаков устанавливают в начале дороги с односторонним движением?',
		hint: 'В начале дороги с односторонним движением устанавливается знак Б (5.5 «Дорога с односторонним движением»). Знак А (5.14 «Полоса для маршрутных транспортных средств») обозначает полосу для маршрутных ТС, знак В (6.14.2 «Номер маршрута») указывает номер и направление маршрута на перекрёстке, а знак Г (6.15.1 «Направление для грузовых автомобилей») — рекомендуемое направление движения для грузовых автомобилей.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Б или Г.', 'Б или В.'])
	},
		{
		id: 45,
		imageName: _elm_lang$core$Maybe$Just('03-05.jpg'),
		question: 'Можете ли Вы остановиться в этом месте для посадки или высадки пассажиров?',
		hint: 'Разметка 1.17 (в виде жёлтой зигзагообразной линии) применяется для обозначения мест остановок маршрутных ТС и стоянок такси. В данной ситуации Вы можете остановиться для посадки или высадки пассажиров в обозначенной разметкой 1.17 зоне, если не создадите помех движению маршрутных автобусов или троллейбусов.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если Вы не создадите помех движению маршрутных транспортных средств.', 'Нет.'])
	},
		{
		id: 46,
		imageName: _elm_lang$core$Maybe$Just('03-06.jpg'),
		question: 'В каких направлениях может продолжить движение водитель автомобиля с включенным проблесковым маячком?',
		hint: 'Водители ТС оперативных служб, выполняющие неотложное служебное задание, при включении проблескового маячка синего цвета могут отступать от требований ряда разделов Правил (п. 3.1). В данном случае водитель автомобиля ДПС при условии обеспечения безопасности движения может проехать перекресток в любом направлении независимо от требований знака 4.1.4 «Движение прямо или направо» и сигналов светофоров.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только направо.', 'Только прямо или направо.', 'В любом.'])
	},
		{
		id: 47,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях Вы не должны подавать предупредительный сигнал указателями поворота?',
		hint: 'Водитель не должен подавать предупредительный сигнал указателями поворота только в том случае, если этот сигнал может ввести в заблуждение других участников движения. Во всех других случаях он обязан информировать о своих намерениях включением сигнала даже при отсутствии на дороге других участников движения (п. 8.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при отсутствии на дороге других участников движения.', 'Только если сигнал может ввести в заблуждение других участников движения.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 48,
		imageName: _elm_lang$core$Maybe$Just('03-08.jpg'),
		question: 'По какой траектории Вы можете выполнить правый поворот?',
		hint: 'Поворачивая направо, Вы должны двигаться ближе к правому краю проезжей части, т.е. по траектории А (п. 8.6).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 49,
		imageName: _elm_lang$core$Maybe$Just('03-09.jpg'),
		question: 'Разрешено ли Вам таким образом выполнить разворот на перекрёстке?',
		hint: 'На перекрёстке Вы можете совершить разворот только из крайнего левого положения (пп. 8.5 и 8.8).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 50,
		imageName: _elm_lang$core$Maybe$Just('03-10.jpg'),
		question: 'По какой полосе Вам разрешено движение в данной ситуации?',
		hint: 'Вне населённого пункта запрещается занимать левые полосы при свободной правой (п. 9.4). В данной ситуации Вы можете двигаться только по правой полосе.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['По любой.', 'Только по правой.'])
	},
		{
		id: 51,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вы можете начать обгон, если такой маневр на данном участке дороги не запрещён?',
		hint: 'Вы можете начать обгон с выездом на полосу встречного движения, если не создадите помех не только встречным, но и обгоняющим Вас ТС (п. 11.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только если полоса встречного движения свободна на достаточном для обгона расстоянии.', 'Только если Вас никто не обгоняет.', 'В случае, если выполнены оба условия.'])
	},
		{
		id: 52,
		imageName: _elm_lang$core$Maybe$Just('03-12.jpg'),
		question: 'Разрешена ли Вам остановка для посадки пассажира в этом месте?',
		hint: 'Правила разрешают остановку ближе 15 м от указателя остановки маршрутных ТС только для посадки или высадки пассажиров при условии, что не создаются помехи движению маршрутных ТС (п. 2.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена, если при этом не будет создано помех для движения маршрутных транспортных средств.', 'Запрещена.'])
	},
		{
		id: 53,
		imageName: _elm_lang$core$Maybe$Just('03-13.jpg'),
		question: 'При движении прямо Вы:',
		hint: 'Вы приближаетесь к регулируемому перекрёстку и можете проехать его без остановки, поскольку включен зелёный, разрешающий, сигнал светофора (п. 6.15). Выполнять требование знака 2.5 «Движение без остановки запрещено» Вы должны только в том случае, если светофор будет выключен или переведён на режим жёлтого мигающего сигнала (п. 13.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны остановиться перед стоп-линией.', 'Можете продолжить движение через перекресток без остановки.', 'Должны уступить дорогу транспортным средствам, движущимся с других направлений.'])
	},
		{
		id: 54,
		imageName: _elm_lang$core$Maybe$Just('03-14.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'На данном перекрёстке дорогу мотоциклу уступать не надо - он не является помехой справа (п. 13.11), поскольку, поворачивая направо, не пересекаете путь его движения. Перед легковым автомобилем, поворачивающим налево, преимущество за Вами (п. 13.12).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Уступите дорогу легковому автомобилю.'])
	},
		{
		id: 55,
		imageName: _elm_lang$core$Maybe$Just('03-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Двигаясь на данном перекрёстке по направлению главной дороги (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), для определения очередности проезда с трамваем А и легковым автомобилем Вы должны руководствоваться правилами проезда перекрёстков равнозначных дорог (п. 13.10). В соответствии с ними преимущество имеет трамвай А (п. 13.11). По этим же правилам легковой автомобиль, находящийся от Вас слева, обязан уступить дорогу. Также уступает Вам дорогу и трамвай Б, движущийся по второстепенной дороге (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Трамваю А и легковому автомобилю.', 'Только трамваю А.', 'Всем транспортным средствам.', 'Никому.'])
	},
		{
		id: 56,
		imageName: _elm_lang$core$Maybe$Just('03-16.jpg'),
		question: 'Кто из водителей нарушил правила остановки?',
		hint: 'Оба водителя нарушили правила остановки, так как на автомагистралях остановка разрешена только на специальных площадках для стоянки, обозначенных знаками 6.4 «Место стоянки» или 7.11 «Место отдыха» (п. 16.1). Кроме того, водитель легкового автомобиля остановился слева от краевой линии, т.е. на проезжей части (п. 12.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель легкового автомобиля.', 'Только водитель грузового автомобиля.', 'Оба нарушили.'])
	},
		{
		id: 57,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие из перечисленных требований предъявляются к обучаемому, допущенному к учебной езде на дорогах?',
		hint: 'При обучении вождению на дорогах обучаемый должен отвечать всем перечисленным требованиям (пп. 21.2 и 21.4). При отсутствии навыков управления и знаний ПДД первоначальное обучение вождению должно проводиться на закрытых площадках или автодромах (п. 21.1).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Возраст не менее 16 лет.', 'Наличие первоначальных навыков управления.', 'Знание Правил дорожного движения.', 'Все перечисленные требования.'])
	},
		{
		id: 58,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях запрещается эксплуатация мотоцикла?',
		hint: 'Эксплуатация мотоцикла запрещается, если на мотоцикле нет предусмотренных конструкцией дуг безопасности, подножек, поперечных рукояток для пассажиров на седле. (Перечень п.п. 7.16 и 7.17)',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['При отсутствии предусмотренных конструкцией дуг безопасности, подножек, поперечных рукояток для пассажиров на седле.', 'Только при отсутствии предусмотренных конуструкцией дуг безопасности.', 'Только при отсутствиие предусмотренных конструкцией подножек, поперечных рукояток для пассажиров на седле.'])
	},
		{
		id: 59,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'На повороте возник занос задней оси переднеприводного автомобиля. Ваши действия?',
		hint: 'Занос переднеприводного автомобиля может возникнуть при торможении на повороте из-за «набегания» задних колес на передние. В этом случае целесообразно слегка увеличить подачу топлива (не вызывая пробуксовки передних колес) и дальнейшим поворотом рулевого колеса скорректировать направление движения автомобиля. Следует помнить, что на заднеприводном автомобиле увеличение скорости может только усилить возникший занос.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уменьшите подачу топлива, рулевым колесом стабилизируете движение.', 'Притормозите и повернете рулевое колесо в сторону заноса.', 'Значительно увеличите подачу топлива, не меняя положения рулевого колеса.', 'Слегка увеличите подачу топлива, корректируя направление движения рулевым колесом.'])
	},
		{
		id: 60,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие сведения необходимо сообщить диспечеру для вызова «Скорой помощи» при ДТП?',
		hint: 'Быстрота приезда «Скорой помощи» во многом зависит от чёткости описания мастонахождения ДТП. От указанного числа пострадвших зависит количество автомобилей «Скорой помощи», которые требуются на месте ДТП. Сообщение о наличие или отсутствии у пострадавших признаков жизни и сильного кровотечения необходимо диспечеру для определения специализации бригады «Скорой помощи».',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Указать общеизвестные ориентиры, ближайшие к месту ДТП. Сообщить о количестве пострадавших, указать их пол и возраст.', 'Указать улицу и номер дома, ближайшего к месту ДТП. Сообщить, кто пострадал в ДТП (пешеход, водитель автомобиля или пассажиры), и описать травмы которые они получили.', 'Уазать точное место совершенного ДТП (назвать улицу, номер дома и общеизвестные ориентиры, ближайшие к месту ДТП). Сообщить о количестве пострадавших, их пол, примерный возраст и о наличии у них признаков жизни, а также сильного кровотечения.'])
	},
		{
		id: 61,
		imageName: _elm_lang$core$Maybe$Just('04-01.jpg'),
		question: 'Проезжая часть данной дороги имеет:',
		hint: 'Проезжая часть разделена сплошной линией разметки на две полосы, каждая из которых имеет ширину, достаточную для движения автомобилей в один ряд. При этом мотоциклам, с учётом их габаритов, не запрещено двигаться по полосе в два ряда (пп. 1.2 и 9.1, Приложение 2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одну полосу для движения.', 'Две полосы для движения.', 'Три полосы для движения.'])
	},
		{
		id: 62,
		imageName: _elm_lang$core$Maybe$Just('04-02.jpg'),
		question: 'Эти знаки предупреждают Вас:',
		hint: 'Знак 1.12.2 «Опасные повороты» предупреждает Вас о том, что через 150 — 300 м начнется участок дороги с несколькими следующими друг за другом опасными поворотами, первый из которых — налево. Табличка 8.2.1 «Зона действия» уточняет, что общая протяженность этого участка — 500 м.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['О наличии через 500 м опасных поворотов.', 'О том, что на расстоянии 150 — 300 м за дорожным знаком начнется участок дороги протяженностью 500 м с опасными поворотами.', 'О том, что сразу за знаком начнется участок протяженностью 500 м с опасными поворотами.'])
	},
		{
		id: 63,
		imageName: _elm_lang$core$Maybe$Just('04-03.jpg'),
		question: 'Какой из знаков распространяет свое действие только на ту полосу, над которой он установлен?',
		hint: 'Действие каждого из показанных знаков будет распространяться на полосу, над которой он расположен, только в случае, если совместно со знаком применена табличка 8.14 «Полоса движения» (знак А).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Б и В.'])
	},
		{
		id: 64,
		imageName: _elm_lang$core$Maybe$Just('04-04.jpg'),
		question: 'Этот дорожный знак с жёлтым фоном информирует Вас о том, что:',
		hint: 'Знак 6.19.1 «Предварительный указатель перестроения на другую проезжую часть» применяется во время ремонтных работ на дорогах с разделительной полосой, когда одна из проезжих частей полностью закрывается и движение ТС переводится на проезжую часть, предназначенную для встречного движения. Знак информирует Вас о расположении разрыва в разделительной полосе, по которому осуществляется переезд на левую проезжую часть.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Дальнейшее движение возможно только по второй полосе.', 'Дальнейшее движение возможно только по проезжей части встречного направления.', 'Дальнейшее движение возможно только по другой дороге.'])
	},
		{
		id: 65,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает разметка в виде надписи «СТОП» на проезжей части?',
		hint: 'Разметка 1.21 в виде надписи «СТОП» на проезжей части предупреждает о приближении к линии поперечной разметки 1.12 (стоп-линия), указывающей место, где Вы должны остановиться, выполняя требование знака 2.5 «Движение без остановки запрещено». Без знака 2.5 данная разметка не применяется.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предупреждает о приближении к стоп-линии перед регулируемым перекрестком.', 'Предупреждает о приближении к стоп-линии и знаку «Движение без остановки запрещено».', 'Предупреждает о приближении к знаку «Уступите дорогу».'])
	},
		{
		id: 66,
		imageName: _elm_lang$core$Maybe$Just('04-06.jpg'),
		question: 'Каким транспортным средствам разрешено движение прямо?',
		hint: 'В данной ситуации применяется по полосное регулирование: движение по каждой полосе проезжей части регулируется отдельным светофором, расположенным над ней. Стрелки на всех сигналах светофоров указывают направления, в которых разрешено движение с полосы (п. 6.3). В данном случае движение прямо разрешено только грузовому автомобилю.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковому и грузовому автомобилям.', 'Только грузовому автомобилю.', 'Только грузовому автомобилю и автобусу.', 'Всем транспортным средствам.'])
	},
		{
		id: 67,
		imageName: _elm_lang$core$Maybe$Just('04-07.jpg'),
		question: 'Вы намерены продолжить движение по главной дороге. Обязаны ли Вы при этом включить правые указатели поворота?',
		hint: 'Продолжая движение на перекрёстке по главной дороге и выполняя при этом правый поворот, Вы обязаны включить правые световые указатели поворота даже при отсутствии других ТС (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, только при наличии движущегося сзади транспортного средства.', 'Нет.'])
	},
		{
		id: 68,
		imageName: _elm_lang$core$Maybe$Just('04-08.jpg'),
		question: 'Кто обязан уступить дорогу?',
		hint: 'Знак 5.15.5 «Конец полосы» информирует об окончании полосы. Следовательно, водителю легкового автомобиля придется перестроиться на левую полосу, а при перестроении он должен будет уступить дорогу грузовому автомобилю, движущемуся в попутном направлении без смены полосы (п. 8.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель грузового автомобиля.', 'Водитель легкового автомобиля.'])
	},
		{
		id: 69,
		imageName: _elm_lang$core$Maybe$Just('04-09.jpg'),
		question: 'По какой траектории Вы можете выполнить разворот?',
		hint: 'Поскольку на данном участке дороги имеются трамвайные пути, расположенные слева на одном уровне с проезжей частью, разворот при отсутствии трамвая Вы должны выполнять с них по траектории Б (пп. 8.5 и 8.8).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 70,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'По какой полосе проезжей части Вам разрешено движение в населенном пункте, если по техническим причинам Ваше транспортное средство не может развивать скорость более 40 км/ч?',
		hint: 'На любых дорогах, если ваше ТС не может развить скорость более 40 км/ч, Вы обязаны двигаться только по крайней правой полосе (п. 9.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по крайней правой.', 'Не далее второй полосы.', 'По любой, кроме крайней левой.'])
	},
		{
		id: 71,
		imageName: _elm_lang$core$Maybe$Just('04-11.jpg'),
		question: 'Разрешено ли Вам обогнать мотоциклиста?',
		hint: 'Поскольку Вы проезжаете перекресток по главной дороге (знак 2.1 «Главная дорога»), обогнать мотоцикл можно (п. 11.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только после проезда перекрестка.', 'Запрещено.'])
	},
		{
		id: 72,
		imageName: _elm_lang$core$Maybe$Just('04-12.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'В данной ситуации нарушил правила стоянки только водитель легкового автомобиля, так как использовал для стоянки тротуар (п. 12.2). Стоянка на расстоянии менее 3 м до прерывистой линии разметки не запрещается.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Оба нарушили.', 'Только водитель автомобиля.', 'Только водитель мотоцикла.', 'Никто не нарушил.'])
	},
		{
		id: 73,
		imageName: _elm_lang$core$Maybe$Just('04-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Несмотря на разрешающий движение сигнал светофора, Вы обязаны уступить дорогу автомобилю с включенными проблесковым маячком и специальным звуковым сигналом, движущемуся по пересекаемой дороге (п. 3.2). Перед встречным грузовым автомобилем Вы имеете преимущество (п. 13.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете первым.', 'Уступите дорогу только встречному автомобилю.', 'Уступите дорогу только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом.', 'Уступите дорогу обоим транспортным средствам.'])
	},
		{
		id: 74,
		imageName: _elm_lang$core$Maybe$Just('04-14.jpg'),
		question: 'Вы намерены продолжить движение в прямом направлении. Ваши действия?',
		hint: 'На перекрёстке равнозначных дорог Вы должны уступить дорогу легковому автомобилю, приближающемуся справа, и поэтому можете продолжить движение в прямом направлении только после того, как этот автомобиль выедет на перекресток (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Продолжите движение только после выезда на перекресток легкового автомобиля.'])
	},
		{
		id: 75,
		imageName: _elm_lang$core$Maybe$Just('04-15.jpg'),
		question: 'Вы намерены развернуться. Ваши действия?',
		hint: 'На данном перекрёстке неравнозначных дорог легковой автомобиль, так же как и вы, находится на главной дороге (знак 2.1 «Главная дорога»), и, разворачиваясь, Вы должны уступить ему дорогу (п. 13.12). По отношению к грузовому автомобилю Вы пользуетесь преимуществом, так как он находится на второстепенной дороге (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу только легковому автомобилю и развернетесь.', 'Уступите дорогу обоим транспортным средствам и развернетесь.'])
	},
		{
		id: 76,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие действия запрещены в жилой зоне?',
		hint: 'В жилой зоне движение пешеходов разрешается как по тротуарам, так и по проезжей части. В такой зоне Правила запрещают учебную езду, стоянку с работающим двигателем, а также сквозное движение (п. 17.2).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только сквозное движение.', 'Только учебная езда.', 'Только стоянка с работающим двигателем.', 'Все перечисленные действия.'])
	},
		{
		id: 77,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое расстояние должно быть обеспечено между буксирующим и буксируемым транспортными средствами при буксировке на жесткой сцепке?',
		hint: 'При буксировке на жесткой сцепке расстояние между транспортными средствами должно быть не более 4 м (п. 20.3). Однако длина сцепки не должна быть меньше половины ширины тягача, что позволяет избежать повреждения автомобилей при складывании поезда.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 4 м.', 'От 4 до 6 м.', 'Правилами не регламентируется.'])
	},
		{
		id: 78,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам разрешается эксплуатация транспортного средства?',
		hint: 'Запрещается эксплуатация ТС, если на нем загрязнены внешние световые приборы (Перечень, п. 3.3), нарушена регулировка фар (Перечень, п. 3.2), на световых приборах отсутствуют рассеиватели либо используются рассеиватели и лампы, несоответствующие данному типу светового прибора (Перечень, п. 3.4). При отсутствии противотуманных фар эксплуатация ТС вам не запрещается.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Загрязнены внешние световые приборы.', 'Нарушена регулировка фар.', 'На световых приборах используются рассеиватели, не соответствующие типу данного светового прибора.', 'Отсутствуют противотуманные фары.'])
	},
		{
		id: 79,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что следует предпринять водителю для предотвращения опасных последствий заноса автомобиля при резком повороте рулевого колеса на скользкой дороге?',
		hint: 'Занос на скользкой дороге может возникнуть из-за резкого поворота рулевого колеса. В этом случае необходимо быстро, но плавно повернуть рулевое колесо в сторону заноса и, не дожидаясь прекращения скольжения, опережающим воздействием на рулевое колесо выровнять траекторию движения автомобиля.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Быстро, но плавно повернуть рулевое колесо в сторону заноса, затем опережающим воздействием на рулевое колесо выровнять траекторию движения автомобиля.', 'Выключить сцепление.', 'Нажать на педаль тормоза.'])
	},
		{
		id: 80,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как следует расположить руки на грудной клетке пострадавшего при выполнении непрямого массажа сердца?',
		hint: 'Сердце человека располагается в середине грудной клетки: за грудиной, на 2 пальца выше ее мечевидного отростка (треугольная кость, которой заканчивается грудина). Выполнение напрямого массажа сердца требует больших физических усилий, поэтому он проводится обеими руками, которые накладываются одна на другую. Для профилактики переломов гудины и ребер эти усилия должны быть направлены вдоль оси грудины (большие пальцы рук указывают на побородок и живот).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Основания ладоней обеих рук должны располагаться на грудной клетке на два пальца выше мечевидного отростка так, чтобы большой палец одной руки указывал в сторону левого плеча пострадавшего, а другой — в сторону правого плеча.', 'Основания ладоней обеих рук, которые накладываются одна на другую, должны, располагаться на грудной клетке на два пальца выше мечевидного отростка так, чтобы большой палец одной руки указывал в сторону подбородка пострадавшего, а другой — в сторону живота.', 'Непрямой массаж сердца выполняют основанием ладони только одной руки, расположенной на грудной клетке на два пальца выше мечевидного отростка. Направление большого пальца не имеет значение.'])
	},
		{
		id: 81,
		imageName: _elm_lang$core$Maybe$Just('05-01.jpg'),
		question: 'Сколько проезжих частей имеет данная дорога?',
		hint: 'Дорога имеет одну проезжую часть, предназначенную для движения в обоих направлениях, так как двойная сплошная линия горизонтальной разметки не является разделительной полосой (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одну.', 'Две.', 'Четыре.'])
	},
		{
		id: 82,
		imageName: _elm_lang$core$Maybe$Just('05-02.jpg'),
		question: 'Какие знаки распространяют свое действие только на период времени, когда покрытие проезжей части влажное?',
		hint: 'Только установленные вместе знаки А (3.24 «Ограничение максимальной скорости» и 8.16 «Влажное покрытие») распространяют свое действие на период времени, когда покрытие влажное (дождь, мокрый снег). Другие знаки предупреждают о возможной опасности: Б (1.18 «Выброс гравия») — о приближении к участку дороги, где возможен выброс гравия или щебня из-под колес автомобиля; В (1.15 «Скользкая дорога») — о приближении к участку дороги с повышенной скользкостью, которая может быть вызвана различными причинами (гололедица, снежный накат и т. д.).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только А и Б.', 'Все.'])
	},
		{
		id: 83,
		imageName: _elm_lang$core$Maybe$Just('05-03.jpg'),
		question: 'Разрешена ли Вам стоянка в указанном месте?',
		hint: 'Зона действия знака 3.28 «Стоянка запрещена» в данной ситуации распространяется до конца населённого пункта (Приложение 1). Поставив автомобиль на стоянку на обочине за знаком 5.24.1 «Конец населённого пункта», Вы не нарушили требования знака и п. 12.1 Правил.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена, но только в светлое время суток.', 'Запрещена.'])
	},
		{
		id: 84,
		imageName: _elm_lang$core$Maybe$Just('05-04.jpg'),
		question: 'По какой траектории Вам разрешено продолжить движение?',
		hint: 'У разрыва в разделительной полосе, обозначенного знаком 6.3.1 «Место разворота», на переносной стойке установлен временный знак 4.1.1 «Движение прямо». Требования знаков противоречат друг другу. Правила предусматривают, что в таких случаях следует руководствоваться временным знаком, т.е. вам разрешено продолжить движение только прямо (траектория А).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по А или В.', 'По любой.', 'По любой, кроме Б.'])
	},
		{
		id: 85,
		imageName: _elm_lang$core$Maybe$Just('05-05.jpg'),
		question: 'Такая вертикальная разметка на ограждении дороги предупреждает Вас:',
		hint: 'Разметка 2.5 применяется для обозначения боковых поверхностей дорожных ограждений на опасных участках: начале ограждения на прямых участках, а также по всей длине на транспортных развязках в разных уровнях, закругления дорог радиусом менее 50 м, крутых спусках.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['О приближении к железнодорожному переезду.', 'О приближении к опасному пересечению.', 'О движении по опасному участку дороги.'])
	},
		{
		id: 86,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам продолжить движение, если при включении жёлтого сигнала светофора после зелёного Вы можете остановиться перед перекрёстком, только применив экстренное торможение?',
		hint: 'Правила разрешают вам продолжить движение через перекресток, если при включении жёлтого сигнала Вы не можете остановиться перед стоп-линией (табличкой 6.16) или перед пересекаемой проезжей частью без применения экстренного торможения (п. 6.14).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается, только если Вы намерены проехать перекресток в прямом направлении.', 'Не разрешается.'])
	},
		{
		id: 87,
		imageName: _elm_lang$core$Maybe$Just('05-07.jpg'),
		question: 'Такой сигнал рукой, подаваемый мотоциклистом, информирует Вас:',
		hint: 'Сигнал торможения, поданный поднятой вверх левой рукой мотоциклиста, свидетельствует о его намерении снизить скорость, чтобы остановиться (п. 8.1) и уступить дорогу легковому автомобилю, приближающемуся справа к нерегулируемому перекрёстку равнозначных дорог (п. 13.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении продолжить движение прямо.', 'О его намерении повернуть направо.', 'О его намерении снизить скорость, чтобы остановиться и уступить дорогу легковому автомобилю.'])
	},
		{
		id: 88,
		imageName: _elm_lang$core$Maybe$Just('05-08.jpg'),
		question: 'В каких направлениях Вы можете продолжить движение по второй полосе на легковом автомобиле?',
		hint: 'Знак 4.1.4 «Движение прямо или направо» и табличка 8.4.1 «Вид транспортного средства» информируют о том, что в указанных направлениях должны двигаться только грузовые автомобили с разрешенной максимальной массой более 3,5 т. На легковые автомобили действие этого предписывающего знака не распространяется. Поэтому Вы можете по второй полосе продолжить движение во всех разрешенных с этой полосы направлениях, т.е. прямо, налево и в обратном направлении (п. 8.5).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только прямо и налево.', 'Только прямо и направо.', 'Прямо, налево и в обратном направлении.'])
	},
		{
		id: 89,
		imageName: _elm_lang$core$Maybe$Just('05-09.jpg'),
		question: 'Вам необходимо повернуть на примыкающую справа дорогу. Ваши действия?',
		hint: 'В данном случае при повороте на примыкающую справа дорогу Вы должны своевременно перестроиться на полосу торможения и снижать скорость только на ней (п. 8.10).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не меняя полосы, снизить скорость, затем перестроиться на полосу торможения.', 'Не меняя скорости, перестроиться на полосу торможения, снизить скорость, затем приступить к повороту.', 'Возможны оба варианта действий.'])
	},
		{
		id: 90,
		imageName: _elm_lang$core$Maybe$Just('05-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на легковом автомобиле с прицепом?',
		hint: 'За знаком 3.25 «Конец ограничения максимальной скорости» скорость движения легкового автомобиля с прицепом вне населённого пункта на дорогах, не относящихся к автомагистралям, должна быть не более 70 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['50 км/ч.', '60 км/ч.', '70 км/ч.', '80 км/ч.', '90 км/ч.'])
	},
		{
		id: 91,
		imageName: _elm_lang$core$Maybe$Just('05-11.jpg'),
		question: 'Можете ли Вы после опережения грузового автомобиля продолжить движение по левой полосе?',
		hint: 'Вне населённых пунктов водителям ТС запрещается занимать левые полосы при свободных правых (п. 9.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 92,
		imageName: _elm_lang$core$Maybe$Just('05-12.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'В данной ситуации никто из водителей не нарушил Правила, так как они поставили автомобили в месте уширения проезжей части, где разрешается стоянка как под углом к краю проезжей части, так и параллельно ей (п. 12.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Никто не нарушил.'])
	},
		{
		id: 93,
		imageName: _elm_lang$core$Maybe$Just('05-13.jpg'),
		question: 'Вы намерены развернуться. Ваши действия?',
		hint: 'При таком сигнале регулировщика движение разрешено Вам и легковому автомобилю, поворачивающему направо (п. 6.10). В этой ситуации очередность движения правилами проезда перекрёстков не оговорена, а поэтому дорогу должен уступить водитель, к которому ТС приближается справа (п. 8.9). Таким ТС и будет для Вас легковой автомобиль после того, как Вы начнете движение и выедете на перекресток. Завершая разворот, Вы должны уступить дорогу легковому автомобилю.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Произведете разворот, уступив дорогу легковому автомобилю.'])
	},
		{
		id: 94,
		imageName: _elm_lang$core$Maybe$Just('05-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Кому следует уступить дорогу?',
		hint: 'На данном перекрёстке равнозначных дорог Вы должны уступить дорогу только трамваю, имеющему преимущество, а легковой автомобиль, находящийся слева, проезжает перекресток после Вас, поскольку обязан уступить Вам дорогу (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваю.', 'Только легковому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 95,
		imageName: _elm_lang$core$Maybe$Just('05-15.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Проблесковый маячок оранжевого или жёлтого цвета преимущества в движении не дает (п. 3.4). Поэтому, двигаясь по главной дороге (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), Вы можете проехать данный перекресток неравнозначных дорог первым. Легковой автомобиль и грузовой автомобиль с маячком находятся на второстепенных дорогах и должны уступить Вам дорогу (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Уступите дорогу только грузовому автомобилю с включенным проблесковым маячком.', 'Уступите дорогу обоим транспортным средствам.'])
	},
		{
		id: 96,
		imageName: _elm_lang$core$Maybe$Just('05-16.jpg'),
		question: 'Разрешено ли Вам проехать железнодорожный переезд?',
		hint: 'Такое положение дежурного по переезду запрещает всякое движение через переезд независимо от сигнала светофора, положения шлагбаума и отсутствия приближающегося поезда (п. 15.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, так как дежурный по переезду запрещает движение только встречному автомобилю.', 'Да, если отсутствует приближающийся поезд.', 'Нет.'])
	},
		{
		id: 97,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях разрешено применять звуковые сигналы в населенных пунктах?',
		hint: 'В населённых пунктах звуковой сигнал разрешается применять только для предотвращения дорожно-транспортного происшествия (п. 19.10). При этом важно подать его своевременно, а не в последний момент, и он не должен быть излишне продолжительным.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только для предупреждения о намерении произвести обгон.', 'Только для предотвращения дорожно-транспортного происшествия.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 98,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При каком значении суммарного люфта в рулевом управлении допускается эксплуатация легкового автомобиля?',
		hint: 'Суммарный люфт в рулевом управлении легкового автомобиля не должен превышать 10 градусов (Перечень, п. 2.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 10 градусов.', 'Не более 20 градусов.', 'Не более 25 градусов.'])
	},
		{
		id: 99,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Вероятность возникновения аварийной ситуации при движении в плотном транспортном потоке будет меньше, если скорость Вашего транспортного средства:',
		hint: 'Вероятность возникновения аварийной ситуации при движении в плотном потоке будет меньше, если скорость Вашего ТС близка к средней скорости потока. Движение с большей или меньшей скоростью провоцирует выполнение лишних маневров, что при движении в плотном потоке опасно.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Значительно меньше средней скорости потока.', 'Значительно больше средней скорости потока.', 'Равна средней скорости потока.'])
	},
		{
		id: 100,
		imageName: _elm_lang$core$Maybe$Just('05-00.jpg'),
		question: 'При движении в условиях тумана расстояние до предметов представляется:',
		hint: 'При движении в условиях тумана водитель должен учитывать, что расстояние до предметов представляется большим, чем в действительности.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Большим, чем в действительности.', 'Меньше, чем в действительности.', 'Соответствующим действительности.'])
	},
		{
		id: 101,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что называется разрешённой максимальной массой транспортного средства?',
		hint: 'Разрешённая максимальная масса является величиной постоянной для конкретной модели ТС и не зваисит от фактической загрузки ТС (п. 1.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Максимально допустимая для перевозки масса груза, установленная предприятием-изготовителем.', 'Масса снаряженного транспортного средства без учета массы водителя, пассажиров и груза, установленная предприятием-изготовителем.', 'Масса снаряженного транспортного средства с грузом, водителем и пассажирами, установленная предприятием-изготовителем в качестве максимально допустимой.'])
	},
		{
		id: 102,
		imageName: _elm_lang$core$Maybe$Just('06-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение?',
		hint: 'Знак 3.18.2 «Поворот налево запрещен» запрещает только поворот налево как таковой. Таким образом, на этом перекрёстке Вы можете развернуться в разрыве разделительной полосы или продолжить движение в прямом направлении.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Прямо или в обратном направлении.', 'Во всех направлениях.'])
	},
		{
		id: 103,
		imageName: _elm_lang$core$Maybe$Just('06-03.jpg'),
		question: 'Какие знаки разрешают Вам проезд на автомобиле к месту проживания?',
		hint: 'Действие знаков А (3.2 «Движение запрещено») и В (3.3 «Движение механических транспортных средств запрещено») не распространяется на ТС, принадлежащие гражданам, проживающим в обозначенной зоне. Знак Б (3.1 «Въезд запрещен») запрещает движение в данном направлении всех ТС.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только В.', 'Только А и В.', 'Все.'])
	},
		{
		id: 104,
		imageName: _elm_lang$core$Maybe$Just('06-04.jpg'),
		question: 'Что означают эти дорожные знаки?',
		hint: 'Знак 6.4 «Место стоянки» с табличкой 8.21.2 «Вид маршрутного транспортного средства» используются в крупных городах для обозначения мест стоянки ТС, организуемых для того, чтобы водители имели возможность оставить свои автомобили на оборудованной стянке и продолжить движение на маршрутном ТС — автобусе или троллейбусе (Приложение 1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Место для стоянки только автобусов.', 'Место для стоянки автобусов и троллейбусов.', 'Место для стоянки транспортных средств, где для дальнейшего движения можно воспользоваться маршрутными транспортными средствами — автобусом или троллейбусом.'])
	},
		{
		id: 105,
		imageName: _elm_lang$core$Maybe$Just('06-05.jpg'),
		question: 'Что обозначает разметка в виде треугольника на полосе движения?',
		hint: 'Разметка 1.20 (в виде треугольника на полосе движения) предупреждает о приближении к разметке 1.13 , перед которой Вы должны при необходимости остановиться, выполняя требование знака 2.4 «Уступите дорогу», предоставляя преимущество ТС, движущимся по главной дороге.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы въезжаете на опасный участок дороги.', 'Предупреждает о приближении к месту, где нужно уступить дорогу.', 'Показывает место, где необходимо остановиться.'])
	},
		{
		id: 106,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам продолжить движение, если регулировщик поднял руку вверх после того, как Вы въехали на перекрёсток?',
		hint: 'Поскольку Вы уже въехали на перекресток, необходимо продолжить движение и покинуть его в выбранном вами направлении (п. 6.14).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не разрешается.', 'Разрешается, только если Вы поворачиваете направо.', 'Разрешается.'])
	},
		{
		id: 107,
		imageName: _elm_lang$core$Maybe$Just('06-07.jpg'),
		question: 'Вы намерены продолжить движение по главной дороге. Обязаны ли Вы включить левые указатели поворота?',
		hint: 'Вы обязаны информировать других участников движения о своих намерения во всех случаях. Поэтому, собираясь продолжить движение по главной дороге, т.е. выполнить левый поворот на перекрёстке, Вы должны включить указатели поворота соответствующего направления (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Обязаны, если с других направлений приближаются транспортные средства.', 'Нет.'])
	},
		{
		id: 108,
		imageName: _elm_lang$core$Maybe$Just('06-08.jpg'),
		question: 'Кому Вы должны уступить дорогу при повороте во двор?',
		hint: 'При повороте налево во двор (на прилегающую территорию) Вы должны уступить дорогу не только встречному автомобилю (п. 8.8), но и пешеходам, путь движения которых Вы пересекаете (п. 8.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только встречному автомобилю.', 'Встречному автомобилю и пешеходам.', 'Никому.'])
	},
		{
		id: 109,
		imageName: _elm_lang$core$Maybe$Just('06-09.jpg'),
		question: 'Разрешено ли Вам выполнить разворот на данном перекрёстке?',
		hint: 'Поскольку Вы заняли крайнее левое положение на проезжей части, а разметку 1.11 можно пересекать со стороны прерывистой линии, выполнить разворот на перекрёстке вам разрешено (п. 8.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 110,
		imageName: _elm_lang$core$Maybe$Just('06-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на легковом автомобиле?',
		hint: 'Двигаясь по автомагистрали (знак 5.1 «Автомагистраль») на легковом автомобиле, Вы можете развивать скорость не более 110 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['70 км/ч.', '90 км/ч.', '110 км/ч.'])
	},
		{
		id: 111,
		imageName: _elm_lang$core$Maybe$Just('06-11.jpg'),
		question: 'Должны ли Вы уступить дорогу встречному автомобилю?',
		hint: 'Если встречный разъезд затруднен, то водитель, на стороне которого имеется препятствие, должен уступить дорогу (п. 11.7). Поскольку препятствие находится на Вашей стороне, то Вы и должны уступить дорогу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 112,
		imageName: _elm_lang$core$Maybe$Just('06-12.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Хотя Вами соблюдено требование постановки автомобиля на стоянку не ближе 15 м от указателя места остановки маршрутных ТС, Вы все же нарушите Правила, так как остановка и стоянка запрещены на пешеходных переходах и ближе 5 м перед ними (пп. 12.4 и 12.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, если при этом не будут созданы помехи для движения маршрутных транспортных средств.', 'Запрещено.'])
	},
		{
		id: 113,
		imageName: _elm_lang$core$Maybe$Just('06-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Сочетание зелёного сигнала светофора и включенной стрелки в дополнительной секции разрешает Вам поворот налево (п. 6.2). Движение трамвая на данном перекрёстке регулируется светофором одноцветной сигнализации в виде буквы «Т». Учитывая, что при таком сигнале движение трамваю запрещено (п. 6.8), Вы можете проехать перекресток первым.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу трамваю.', 'Проедете перекресток первым.', 'Дождетесь разрешающего сигнала специального светофора и только после этого повернёте.'])
	},
		{
		id: 114,
		imageName: _elm_lang$core$Maybe$Just('06-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Поворачивая налево на данном перекрёстке, следует уступить дорогу пешеходам, переходящим проезжую часть дороги, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу пешеходам.', 'Проедете перекресток, не уступая дорогу пешеходам.'])
	},
		{
		id: 115,
		imageName: _elm_lang$core$Maybe$Just('06-15.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Хотя Вы движетесь по дороге с твердым покрытием, которая является главной по отношению к примыкающей слева грунтовой дороге (п. 1.2 , термин «Главная дорога»), Вам все же необходимо уступить дорогу выезжающему со второстепенной дороги автомобилю с включенными проблесковым маячком синего цвета и специальным звуковым сигналом (п. 3.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Уступите дорогу автомобилю с включенными проблесковым маячком и специальным звуковым сигналом.'])
	},
		{
		id: 116,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вы можете продолжить движение, приближаясь к остановившемуся транспортному средству, закрывшему видимость нерегулируемого пешеходного перехода?',
		hint: 'Приближаясь к нерегулируемому пешеходному переходу, перед которым остановилось ТС, Вы можете продолжать движение, лишь убедившись, что перед указанным ТС нет пешеходов (пп. 14.1 и 14.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только после подачи звукового сигнала.', 'Только после остановки перед пешеходным переходом.', 'Только убедившись, что перед остановившимся транспортным средством нет пешеходов.'])
	},
		{
		id: 117,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Дневные ходовые огни предназначены для:',
		hint: 'Дневные ходовые огни устанавливаются только спереди (п. 1.2). Поскольку в них, как правило, используются светодиоды, это весьма экономный прибор.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Улучшения видимости движущегося транспортного средства в светлое время суток как спереди, так и сзади.', 'Улучшения видимости движущегося транспортного средства в светлое время суток только спереди.', 'Улучшения видимости движущегося транспортного средства в светлое время суток только сзади.'])
	},
		{
		id: 118,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Вы имеете право эксплуатировать легковой автомобиль при отсутствии:',
		hint: 'Эксплуатировать легковой автомобиль Вы можете только при наличии в нем медицинской аптечки, огнетушителя и знака аварийной остановки (Перечень, п. 7.7). Отсутствие на легковом автомобиле противооткатных упоров не является основанием для запрещения его эксплуатации.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Аптечки.', 'Огнетушителя.', 'Знака аварийной остановки.', 'Противооткатных упоров.'])
	},
		{
		id: 119,
		imageName: _elm_lang$core$Maybe$Just('06-19.jpg'),
		question: 'Для обеспечения безопасности при остановке на подъеме (спуске) водителю следует повернуть передние колеса. Водители каких транспортных средств правильно выполнили это требование при отсутствии тротуара?',
		hint: 'Производя остановку на спусках (поз. А и Б) или подъемах (поз. В и Г) при наличии обочины, водители должны не только использовать стояночный тормоз, но и повернуть колеса в сторону, чтобы избежать самопроизвольного скатывания автомобиля на проезжую часть. Правильное положение колес обеспечили водители автомобилей А и Г.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['А и Г.', 'Б и В.', 'А и В.', 'Б и Г.'])
	},
		{
		id: 120,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Каковы типичные признаки наступившего утомления водителя?',
		hint: 'Типичными признаками утомления водителя являются сонливость, вялость, притупление внимания. В таком состоянии управление ТС опасно и поэтому запрещено (п. 2.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Сонливость, вялость, притупление внимания.', 'Возбужденность, раздражительность.', 'Головокружение, резь в глазах, повышенная потливость.'])
	},
		{
		id: 121,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Можете ли Вы, будучи владельцем мотоцикла, передавать управление этим транспортным средством в своем присутствии другому лицу, имея при этом соответствующий страховой полис?',
		hint: 'Вы можете передавать управление мотоциклом в своем присутствии другому лицу, имея при этом соответствующий страховой полис, при условии, что это лицо имеет водительское удостоверение с отметкой в категории «А» (п. 2.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Можете при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «А».', 'Можете при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «В».', 'Не можете.'])
	},
		{
		id: 122,
		imageName: _elm_lang$core$Maybe$Just('07-02.jpg'),
		question: 'О чем информируют Вас эти дорожные знаки?',
		hint: 'Знак 2.4 «Уступите дорогу» в сочетании с табличкой 8.1.2 «Расстояние до объекта» информирует вас о том, что через 250 м находится перекресток с ограниченной видимостью пересекаемой дороги, перед которым установлен знак 2.5 «Движение без остановки запрещено».',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['О приближении к перекрестку, где установлен знак «Уступите дорогу».', 'О приближении к перекрестку, где установлен знак «Движение без остановки запрещено».', 'О приближении к таможне.'])
	},
		{
		id: 123,
		imageName: _elm_lang$core$Maybe$Just('07-03.jpg'),
		question: 'Разрешено ли Вам произвести остановку в указанном месте?',
		hint: 'В данной ситуации зона действия знака 3.27 «Остановка запрещена» ограничена протяжённостью сплошной жёлтой линии 1.4 , нанесённой у края проезжей части. Вы можете остановиться в любом месте после ее окончания.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 124,
		imageName: _elm_lang$core$Maybe$Just('07-04.jpg'),
		question: 'Действие каких знаков распространяется только до ближайшего по ходу движения перекрёстка?',
		hint: 'Действия запрещающих знаков, вводящих какие-либо ограничения, распостраняется до ближайшего по ходу движения перекрёстка. К таким знакам относятся знаки Б (3.24 «Ограничение максимальной скорости») и Г (3.28 «Стоянка запрещена»). Знаки особых предписаний А (5.31 «Зона с ограничением максимальной скорости» и В (5.27 «Зона с ограничением стоянки») вводят точно такие же ограничения, но в отличие от запрещающих знаков их действие распространяется на всю обозначенную такими знаками территорию, которая может включать в себя несколько улиц со всеми прекрёстками на них. Действие знаков А и В заканчивается лишь на выезде с таких территорий, где устанавливаются знаки 5.32 «Конец зоны с ограничением максимальной стоянки» и 5.28 «Конец зоны с ограничением стоянки».',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['А и В.', 'Б и Г.', 'В и Г.'])
	},
		{
		id: 125,
		imageName: _elm_lang$core$Maybe$Just('07-05.jpg'),
		question: 'Что обозначают прерывистые линии разметки на перекрёстке?',
		hint: 'Линия разметки 1.7 (прерывистая линия с короткими штрихами и равными им промежутками) применяется для обозначения полос движения в пределах перекрёстка. Эту линию можно пересекать с любой стороны.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обязательное направление движения на перекрестке.', 'Границы полос движения в пределах перекрестка.'])
	},
		{
		id: 126,
		imageName: _elm_lang$core$Maybe$Just('07-06.jpg'),
		question: 'В каких направлениях Вам разрешено движение?',
		hint: 'В данной ситуации регулировщик не изменяет существующую на перекрёстке организацию движения (п. 6.15). Находясь на правой полосе, Вы можете проехать через перекресток только прямо, так как знак 5.7.2 «Выезд на дорогу с односторонним движением» запрещает поворот направо. Для левого поворота или разворота необходимо было занять левую полосу (п. 8.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только прямо и направо.', 'Только прямо, налево и в обратном направлении.', 'В любом.'])
	},
		{
		id: 127,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Когда Вы обязаны выключить левые указатели поворота, выполняя обгон?',
		hint: 'Перестроившись на встречную полосу при выполнении обгона, Вы должны сразу же прекратить подачу сигналов левого поворота. В противном случае можно ввести в заблуждение других участников движения, которые могут воспринять включенный сигнал как ваше намерение совершить поворот налево  (п. 8.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Сразу же после перестроения на встречную полосу.', 'После опережения обгоняемого транспортного средства.', 'По своему усмотрению.'])
	},
		{
		id: 128,
		imageName: _elm_lang$core$Maybe$Just('07-08.jpg'),
		question: 'Обязаны ли Вы, двигаясь по правой полосе, уступить дорогу водителю автомобиля, который намерен перестроиться на Вашу полосу?',
		hint: 'Вы движетесь без изменения направления движения и поэтому не обязаны уступать дорогу водителю автомобиля, намеревающегося перестроиться на вашу полосу (п. 8.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обязаны, если водитель перестраивается после опережения Вашего автомобиля.', 'Обязаны.', 'Не обязаны.'])
	},
		{
		id: 129,
		imageName: _elm_lang$core$Maybe$Just('07-09.jpg'),
		question: 'Разрешён ли Вам разворот на указанном участке дороги?',
		hint: 'На данном участке дороги нет ни знаков, ни разметки, запрещающих разворот. Но, поскольку впереди поворот дороги, разворот возможен лишь при условии, что видимость дороги будет более 100 м (п. 8.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешен только при видимости дороги более 100 метров.', 'Не разрешён.'])
	},
		{
		id: 130,
		imageName: _elm_lang$core$Maybe$Just('07-10.jpg'),
		question: 'По какой траектории следует двигаться, поворачивая налево?',
		hint: 'Поворот налево на трехполосных дорогах должен осуществляться из средней полосы (п. 9.3). Не нарушая Правил, Вы можете выполнить поворот только по траектории Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 131,
		imageName: _elm_lang$core$Maybe$Just('07-11.jpg'),
		question: 'Разрешено ли Вам в конце подъема перестроиться на среднюю полосу для опережения грузового автомобиля?',
		hint: 'Перестроиться с целью опережения грузового автомобиля без выезда на полосу встречного движения Вам разрешено, так как в конце подъема запрещён только обгон (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещено.', 'Разрешено.'])
	},
		{
		id: 132,
		imageName: _elm_lang$core$Maybe$Just('07-12.jpg'),
		question: 'В каком из указанных мест Вы можете поставить на стоянку легковой автомобиль?',
		hint: 'На дорогах с односторонним движением в населённых пунктах остановка и стоянка легковых автомобилей разрешаются как на правой, так и на левой стороне дороги у края проезжей части (п. 12.1). Однако, поставив автомобиль на стоянку в позиции Б, Вы нарушите требования знака 3.28 «Стоянка запрещена».',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только В.', 'А или В.', 'Ни в каком.'])
	},
		{
		id: 133,
		imageName: _elm_lang$core$Maybe$Just('07-13.jpg'),
		question: 'Как Вы должны действовать, если Вам необходимо повернуть налево?',
		hint: 'Вы можете выехать за стоп-линию по разрешающему сигналу светофора. Однако при повороте налево Вы обязаны остановиться на перекрёстке и уступить дорогу автомобилю, движущемуся со встречного направления прямо (п. 13.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выехать за стоп-линию и остановиться на перекрестке, чтобы уступить дорогу встречному автомобилю.', 'Остановиться перед стоп-линией и после проезда легкового автомобиля повернуть налево.', 'Проехать первым.'])
	},
		{
		id: 134,
		imageName: _elm_lang$core$Maybe$Just('07-14.jpg'),
		question: 'Вы имеете право выехать на перекрёсток, если за ним образовался затор:',
		hint: 'В данной ситуации Вы можете выехать на перекресток только для поворота или разворота, так как образовавшийся затор делает невозможным движение в прямом направлении без вынужденной остановки на перекрёстке, а это создаст препятствие для движения в поперечном направлении (п. 13.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только если Вы намерены проехать перекресток в прямом направлении.', 'Только если Вы намерены совершить поворот или разворот.', 'В любом случае.'])
	},
		{
		id: 135,
		imageName: _elm_lang$core$Maybe$Just('07-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'При въезде на перекресток неравнозначных дорог по главной дороге (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») Вы пользуетесь преимуществом перед грузовым и легковым автомобилями, находящимися на второстепенных дорогах (п. 13.9). С мотоциклом, который также въезжает на перекресток по главной дороге, Вы разъезжаетесь по правилам проезда перекрёстков равнозначных дорог, имея в данном случае преимущество (пп. 13.10 и 13.11). Значит, уступать дорогу Вы никому не должны.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только мотоциклу.', 'Мотоциклу и легковому автомобилю.', 'Никому.'])
	},
		{
		id: 136,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Где могут двигаться пешеходы в жилой зоне?',
		hint: 'В жилых зонах и приравненных к ним дворовых территориях пешеходам движение разрешено как по тротуарам, так и по всей ширине проезжей части дорог (пп. 17.1 и 17.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по тротуарам.', 'По тротуарам и в один ряд по краю проезжей части.', 'По тротуарам и по всей ширине проезжей части.'])
	},
		{
		id: 137,
		imageName: _elm_lang$core$Maybe$Just('07-17.jpg'),
		question: 'На каком рисунке изображен автомобиль, водитель которого не нарушает правил перевозки грузов?',
		hint: 'Правила обязывают водителей обозначать груз знаком «Крупногабаритный груз» в случаях, если он выступает за габариты транспортного средства спереди или сзади более чем на 1 м (п. 23.4). Следовательно, оба водителя выполнили правила перевозки грузов.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на А.', 'Только на Б.', 'На обоих.'])
	},
		{
		id: 138,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях разрешается эксплуатация транспортного средства?',
		hint: 'Из всех перечисленных неисправностей только отказ в работе указателя температуры охлаждающей жидкости не является причиной запрещения эксплуатации вашего ТС. Если содержание вредных веществ в отработавших газах или дымность превышают установленные нормы (Перечень, п. 6.1) или негерметична топливная система (Перечень, п. 6.2), или уровень внешнего шума превышает установленные нормы (Перечень п. 6.5), эксплуатация ТС запрещена.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Содержание вредных веществ в отработавших газах или дымность превышают установленные нормы.', 'Негерметична топливная система.', 'Не работает указатель температуры охлаждающей жидкости.', 'Уровень внешнего шума превышает установленные нормы.'])
	},
		{
		id: 139,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Двигаться по глубокому снегу на грунтовой дороге следует:',
		hint: 'Движение по глубокому снегу по грунтовой дороге на заранее выбранной пониженной передаче, без резких поворотов рулевого колеса и остановки обеспечит вам необходимый запас мощности, требуемый для преодоления возникающих на этом участке больших сил сопротивления.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Изменяя скорость движения и передачу в зависимости от состояния дороги.', 'На заранее выбранной пониженной передаче, без резких поворотов и остановок.'])
	},
		{
		id: 140,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В чём заключается первая помощь пострадавшему, находящемуся в сознании при повреждении позвоночника?',
		hint: 'Чтобы избежать повреждения спинного мозга, при травме позвоночника важно не допустить смещения позвоночников относительно друг друга. Для обеспечения минимальной подвижности позвоночника пострадавшего до приезда «Скорой помощи» нельзя перемещать, позу ему не менять, а на шею следует наложить импровизированную шейную шину.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уложить пострадавшего набок.', 'Лежащего пострадавшего не перемещать. Следует наложить ему на шею импровизированную шейную шину, не изменя положения шеи и тела.', 'Пострадавшему, лежащему на спине, подложить под шею валик из одежды и приподнять ноги.'])
	},
		{
		id: 141,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что обязаны сделать в первую очередь водители, причастные к дорожно-транспортному происшествию?',
		hint: 'Первые действия любого водителя, причастного к дорожно-транспортному происшествию (даже если он не является непосредственным участником ДТП, но его действия повлияли на развитие ситуации, приведшей  к ДТП), следующие: остановка, включение аварийной сигализации и установка знака аварийной остановки (п 2.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Освободить проезжую часть.', 'Остановиться, включить аварийную сигнализацию и выставить знак аварийной остановки.', 'Сообщить о случившемся в полицию.'])
	},
		{
		id: 142,
		imageName: _elm_lang$core$Maybe$Just('08-02.jpg'),
		question: 'В чем особенность скоростного режима на этом участке дороги?',
		hint: 'Табличка 8.14 «Полоса движения» указывает, что действие знака 4.6 «Ограничение минимальной скорости» распространяется только на левую полосу, минимальная допустимая скорость движения по которой — 50 км/ч.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Минимальная допустимая скорость движения на этой дороге — 50 км/ч.', 'Рекомендуемая скорость движения на этой дороге — 50 км/ч.', 'Минимальная допустимая скорость движения по левой полосе — 50 км/ч.'])
	},
		{
		id: 143,
		imageName: _elm_lang$core$Maybe$Just('08-03.jpg'),
		question: 'Какие знаки запрещают поворот налево?',
		hint: 'Знак 5.13.1 «Выезд на дорогу с полосой для маршрутных транспортных средств» (знак А) устанавливают перед выездом на дорогу, на которой общий поток ТС движется слева направо, а маршрутные ТС по своей полосе - справа налево. По полосе для маршрутных ТС движение других ТС запрещено (п. 18.2). Таким образом, повернуть налево на перекрёстке, перед которым установлен знак 5.13.1, нельзя. Знак 3.19 «Разворот запрещен» (знак Б) запрещает только разворот, поворот налево при этом возможен. Знак 6.3.1 «Место для разворота» (знак В) указывает на участке многополосной дороги между перекрёстками место для разворота. При этом поворот налево в этом месте, например во двор, запрещён.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только А и Б.', 'Только А и В.', 'Все.'])
	},
		{
		id: 144,
		imageName: _elm_lang$core$Maybe$Just('08-04.jpg'),
		question: 'Разрешено ли Вам повернуть направо на этом перекрёстке?',
		hint: 'Знак 6.8.2 «Тупик» лишь информирует о том, что направо ведет дорога, не имеющая сквозного проезда. Знак не вводит никаких запретов на манёвры.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 145,
		imageName: _elm_lang$core$Maybe$Just('08-05.jpg'),
		question: 'Разрешён ли Вам обгон?',
		hint: 'Хотя прерывистую линию разметки 1.5 можно пересекать, красный сигнал реверсивного светофора над полосой показывает, что движение по этой полосе осуществляется во встречном направлении и выезжать на нее нельзя (п. 6.7). Поэтому обгон, независимо от скорости грузового автомобиля, Вам запрещён.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, если скорость грузового автомобиля менее 30 км/ч.', 'Не разрешён.'])
	},
		{
		id: 146,
		imageName: _elm_lang$core$Maybe$Just('08-06.jpg'),
		question: 'Разрешено ли Вам движение?',
		hint: 'Положение регулировщика, когда он обращен к вам правым боком, а его правая рука вытянута вперед, запрещает движение во всех направлениях (п. 6.10).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено только направо.', 'Запрещено.'])
	},
		{
		id: 147,
		imageName: _elm_lang$core$Maybe$Just('08-07.jpg'),
		question: 'Водитель легкового автомобиля должен выключить левые указатели поворота:',
		hint: 'Сигнал левого поворота должен быть выключен сразу же после выполнения перестроения на левую полосу, чтобы не вводить в заблуждение других участников движения, которые могут воспринять включенный сигнал как намерение водителя осуществить в дальнейшем поворот налево или разворот (п. 8.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Сразу же после перестроения на левую полосу.', 'Только после опережения грузового автомобиля.', 'Только после возвращения на правую полосу.'])
	},
		{
		id: 148,
		imageName: _elm_lang$core$Maybe$Just('08-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Знак 5.15.1 «Направления движения по полосам» запрещает поворот налево и разворот с трамвайных путей попутного направления по траектории А (п. 8.5). Этот манёвр должен выполняться по траектории Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 149,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Если траектории движения транспортных средств пересекаются, а очередность проезда не оговорена Правилами, Вы должны:',
		hint: 'Во всех случаях, когда траектории движения ТС пересекаются, а очередность проезда не оговорена Правилами, Вы должны уступить дорогу ТС, приближающемуся справа (п. 8.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу транспортному средству, приближающемуся справа.', 'Уступить дорогу транспортному средству, приближающемуся слева.'])
	},
		{
		id: 150,
		imageName: _elm_lang$core$Maybe$Just('08-10.jpg'),
		question: 'По каким полосам Правила разрешают Вам движение на этой дороге?',
		hint: 'Вне населённого пункта запрещается занимать левые полосы движения при свободных правых (п. 9.4). В данной ситуации вам разрешено двигаться только по правой полосе.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['По любой.', 'По любой, кроме левой.', 'Только по правой.'])
	},
		{
		id: 151,
		imageName: _elm_lang$core$Maybe$Just('08-11.jpg'),
		question: 'Разрешено ли Вам после опережения первого автомобиля продолжить движение по левой полосе с целью опережения второго?',
		hint: 'Вне населённых пунктов водители ТС должны вести их по возможности ближе к правому краю проезжей части (п. 9.4). При занятой правой полосе Вы можете продолжить движение по левой полосе, но только с целью опережения второго грузового автомобиля.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 152,
		imageName: _elm_lang$core$Maybe$Just('08-12.jpg'),
		question: 'Можете ли Вы остановиться в указанном месте после поворота направо?',
		hint: 'Вы можете остановиться в указанном месте, поскольку расстояние до края пересекаемой проезжей части составляет 5 м (п. 12.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 153,
		imageName: _elm_lang$core$Maybe$Just('08-13.jpg'),
		question: 'Кто из водителей, совершающих поворот, нарушает Правила?',
		hint: 'Водители обязаны выполнять требования сигналов светофора, дорожных знаков и разметки (п. 1.3). В данной ситуации временный дорожный знак 4.1.1 «Движение прямо» на переносной стойке изменяет установленный режим движения на перекрёстке и предписывает двигаться только прямо независимо от того, в каких направлениях разрешают движение зелёный сигнал светофора и дополнительная секция. Сигналы светофора отменяют действие только знаков приоритета (п. 6.15).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель легкового автомобиля.', 'Только мотоциклист.', 'Оба нарушают.', 'Оба не нарушают.'])
	},
		{
		id: 154,
		imageName: _elm_lang$core$Maybe$Just('08-14.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'В данной ситуации Вы должны уступить дорогу как пешеходу, переходящему ее по нерегулируемому пешеходному переходу (п. 14.1), так и пешеходам справа, переходящим проезжую часть, на которую Вы поворачиваете на перекрёстке (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу только пешеходу, переходящему проезжую часть по нерегулируемому пешеходному переходу.', 'Уступите дорогу только пешеходам, переходящим проезжую часть, на которую Вы поворачиваете.', 'Уступите дорогу всем пешеходам.'])
	},
		{
		id: 155,
		imageName: _elm_lang$core$Maybe$Just('08-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'На этом перекрёстке неравнозначных дорог (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») Вы должны уступить дорогу трамваю Б и легковому автомобилю, которые, так же как и Вы, находятся на главной дороге и являются для Вас «помехой справа». С ними Вы разъезжаетесь по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11). Перед трамваем А Вы имеете преимущество, поскольку он движется по второстепенной дороге (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваям.', 'Трамваю Б и легковому автомобилю.', 'Всем транспортным средствам.'])
	},
		{
		id: 156,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких местах Вам разрешено произвести остановку на автомагистрали?',
		hint: 'На автомагистрали Вы можете остановиться только на специальных площадках, предназначенных для стоянки и обозначенных знаками 6.4 «Место стоянки» или 7.11 «Место отдыха» (п. 16.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['В любых местах за пределами проезжей части.', 'Только правее линии разметки, обозначающей край проезжей части.', 'Только на специальных площадках для стоянки, обозначенных соответствующими знаками.'])
	},
		{
		id: 157,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы Вы должны использовать при движении в темное время суток на освещенных участках дорог населенного пункта?',
		hint: 'В населённых пунктах Правила предписывают Вам использовать при движении в темное время суток на освещенных участках дорог только фары ближнего света  (пп. 19.1 и 19.2). Движение с включенными габаритными огнями запрещено, так как они недостаточно хорошо обозначают ваше ТС для других участников движения. Фары дальнего света, учитывая его ослепляющее воздействие на других водителей, использовать также запрещено (п. 19.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только габаритные огни.', 'Фары ближнего света или габаритные огни.', 'Только фары ближнего света.'])
	},
		{
		id: 158,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При возникновении какой неисправности Вам запрещено дальнейшее движение даже до места ремонта или стоянки?',
		hint: 'При неисправности рабочей тормозной системы Вам запрещено дальнейшее движение даже до места ремонта или стоянки (п. 2.3.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Неисправна рабочая тормозная система.', 'Неисправна система выпуска отработавших газов.', 'Не работает стеклоомыватель.'])
	},
		{
		id: 159,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае легковой автомобиль более устойчив против опрокидывания на повороте?',
		hint: 'Более устойчив на повороте автомобиль без груза и пассажиров, так как у такого автомобиля самое низкое расположение центра тяжести, а значит, самый маленький опрокидывающий момент.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Без груза и пассажиров.', 'С пассажирами, но без груза.', 'Без пассажиров, но с грузом на верхнем багажнике.'])
	},
		{
		id: 160,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При открытом переломе конечностей, сопровождающемся кровотечением, первую помощью начинают:',
		hint: 'При открытом переломе конечности повреждается не только костная ткань. Острые обломки сломанной кости могут повредить крупные сосуды травмированной конечности. Поэтому в данном случае первую помощью следует начинать с остановки кровотечения из раны путём наложения жгута выше раны на месте перелома.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['С наложения импровизированной шины.', 'С наложения жгута выше раны на месте перелома.', 'С наложения давящей повязки.'])
	},
		{
		id: 161,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое удостоверение достаточно иметь водителю, управляющему легковым автомобилем с прицепом, имеющим разрешённую максимальную массу до 750 кг?',
		hint: 'Согласно действующему положению, право управлять легковым автомобилем с прицепом, имеющим разрешённую максимальную массу до 750 кг, дает удостоверение с отметкой в категории «В». Наличие отметки в категории «Е» требуется только в том случае, если разрешённая максимальная масса прицепа превышает 750 кг.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На право управления транспортным средством категории «В».', 'На право управления транспортным средством категории «E».', 'На право управления транспортными средствами категорий «В» и «E».'])
	},
		{
		id: 162,
		imageName: _elm_lang$core$Maybe$Just('09-02.jpg'),
		question: 'Знаки предупреждают Вас о том, что:',
		hint: 'Знак 1.22 «Пешеходный переход» предупреждает о приближении к переходу, обозначенному информационно-указательными знаками 5.19.1 и 5.19.2 «Пешеходный переход» и соответствующей разметкой. Как правило, в населённых пунктах предупреждающие знаки устанавливают на расстоянии от 50 до 100 м до опасного участка. Однако в данном слоучае переход скрыт за поворотом улицы, поэтому знак установлен на большем, чем обычно, расстоянии, которое и указано на табличке 8.1.1 «Расстояние до объекта».',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На протяжении 150 м возможно появление пешеходов на проезжей части.', 'Через 150 м на Вашем пути будет нерегулируемый пешеходный переход.'])
	},
		{
		id: 163,
		imageName: _elm_lang$core$Maybe$Just('09-03.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение?',
		hint: 'Знак 4.3 «Круговое движение» обязывает до выезда в нужный проезд двигаться вокруг центрального островка против часовой стрелки. Таким образом, движение в направлении В запрещено. Кроме того, в данном случае знак 3.18.1 «Поворот направо запрещён» запрещает Вам и поворот в первый по ходу движения проезд (направление А).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'А и Б.', 'Б или В.'])
	},
		{
		id: 164,
		imageName: _elm_lang$core$Maybe$Just('09-04.jpg'),
		question: 'Какие знаки запрещают движение транспортных средств, скорость которых по технической характеристике или их состоянию менее 40 км/ч?',
		hint: 'На автомагистралях, а они обозначаются знаком 5.1 «Автомагистраль» (знак А), запрещено движение ТС, скорость которых по технической характеристике или их состоянию менее 40 км/ч (п. 16.1). Точно такие же требования распространяются и на дороги, обозначенные знаком 5.3 «Дорога для автомобилей» (знак Б). Знак 6.2 «Рекомендуемая скорость» (знак В) указывает скорость, с которой рекомендуется движение на данном участке дороги, при этом не исключается возможность двигаться с меньшей или большей скоростью.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только В.', 'А и Б.'])
	},
		{
		id: 165,
		imageName: _elm_lang$core$Maybe$Just('09-05.jpg'),
		question: 'Позволяет ли Вам данная разметка выполнить обгон?',
		hint: 'Правила разрешают пересекать линию разметки 1.11 со стороны прерывистой линии без каких-либо дополнительных условий. Со стороны сплошной её можно пересекать только при завершении обгона или объезда. Вы вправе выполнить такой манёвр независимо от скорости движения трактора.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но только если скорость трактора менее 30 км/ч.', 'Нет.'])
	},
		{
		id: 166,
		imageName: _elm_lang$core$Maybe$Just('09-06.jpg'),
		question: 'В каких направлениях регулировщик разрешает Вам движение?',
		hint: 'В случае, когда регулировщик расположен к Вам левым или правым боком, а его руки вытянуты в стороны либо опущены, движение Вам разрешено прямо и направо (п. 6.10). Поскольку очередность движения на перекрёстке определяется регулировщиком, знак приоритета 2.4 «Уступите дорогу», устанавливающий очередность проезда нерегулируемых перекрёстков, в данном случае не действует (пп. 6.15 и 13.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только прямо и направо.', 'Во всех.'])
	},
		{
		id: 167,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Когда Вы должны включить указатели поворота?',
		hint: 'Указатели поворота соответствующего направления должны быть включены Вами заблаговременно до начала выполнения манёвра (п. 8.2), чтобы Ваши намерения были понятны другим участникам движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Непосредственно перед поворотом или разворотом.', 'Заблаговременно до начала выполнения манёвра.', 'По своему усмотрению.'])
	},
		{
		id: 168,
		imageName: _elm_lang$core$Maybe$Just('09-08.jpg'),
		question: 'Кто должен уступить дорогу?',
		hint: 'Водитель, намеривающийся начать движение от тротуара, должен убедиться в том, что он не создаст опасности и помех другим ТС (пункт 8.1). Поэтому он должен уступить дорогу автомобилю, находящемуся в движении.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель, намеревающийся начать движение от тротуара.', 'Водитель, намеревающийся остановиться у тротуара.'])
	},
		{
		id: 169,
		imageName: _elm_lang$core$Maybe$Just('09-09.jpg'),
		question: 'Разрешён ли Вам разворот в этом месте?',
		hint: 'В местах остановок маршрутных ТС разворот запрещён назависимо от наличия или отсутствия маршрутных ТС (п. 8.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, если не будет создано помех движению маршрутных транспортных средств.', 'Не разрешён.'])
	},
		{
		id: 170,
		imageName: _elm_lang$core$Maybe$Just('09-10.jpg'),
		question: 'По какой траектории Вы можете продолжить движение?',
		hint: 'Вы можете продолжить движение только по траектории Б, так как при повороте на дорогу с реверсивным движением (знак 5.10 «Выезд на дорогу с реверсивным движением») Вы обязаны, независимо от количества полос на этой дороге, занять крайнюю полосу. Перестроение возможно только после того, как станет ясно, по каким ещё полосам возможно движение в данном направлении (п 9.8).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 171,
		imageName: _elm_lang$core$Maybe$Just('09-11.jpg'),
		question: 'Разрешён ли Вам обгон?',
		hint: 'На нерегулируемых перекрёстках обгон запрещён при движении по дороге, не являющейся главной (п. 11.4). Поскольку Вы приближаетесь к перекрёстку неравнозначных дорог, двигаясь по главной дороге (знак 2.3.1 «Пересечение со второстепенной дорогой»), то обгон разрешается совершить, даже если он не будет завершён до перекрёстка.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, только если обгон будет завершен до перекрестка.', 'Запрещён.'])
	},
		{
		id: 172,
		imageName: _elm_lang$core$Maybe$Just('09-12.jpg'),
		question: 'Кто нарушил правила остановки?',
		hint: 'Остановка запрещена ближе 5 м от края пересекаемой проезжей части, и это требование водители выполнили. Однако водитель грузового автомобиля всё же нарушил Правила, так как расстояние между ТС и сплошной линией разметки менее 3 м (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Оба водителя.', 'Только водитель грузового автомобиля.', 'Только водитель легкового автомобиля.', 'Никто не нарушил.'])
	},
		{
		id: 173,
		imageName: _elm_lang$core$Maybe$Just('09-13.jpg'),
		question: 'В каком случае Вы имеете право выехать на перекрёсток, если за ним образовался затор?',
		hint: 'В данной ситуации при разрешающем сигнале светофора (п. 6.2) Вы можете совершить на перекрёстке поворот или разворот. Продолжить движение в прямом направлении Вы не можете из-за затора, который заставит Вас остановиться на перекрёстке, в результате чего после смены сигналов светофора будут созданы помехи движению других ТС (п. 13.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только если Вы намерены совершить поворот или разворот.', 'В любом случае.'])
	},
		{
		id: 174,
		imageName: _elm_lang$core$Maybe$Just('09-14.jpg'),
		question: 'Вы намерены продолжить движение в прямом направлении. Следует ли уступить дорогу грузовому автомобилю?',
		hint: 'Наличие знака 6.8.2 «Тупик» не меняет порядка проезда перекрёстков равнозначных дорог, в соответствии с которым Вы должны уступить дорогу грузовому автомобилю, приближающемуся справа (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 175,
		imageName: _elm_lang$core$Maybe$Just('09-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'При проезде данного перекрёстка неравнозначных дорог по направлению главной дороги (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») Вам нет необходимости уступать дорогу ни автобусу, который движется по второстепенной дороге (п. 13.9), ни легковому автомобилю, с которым Вы разъезжаетесь по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11), поскольку он находится слева от Вас.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только легковому автомобилю.', 'Никому.'])
	},
		{
		id: 176,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли движение задним ходом по автомагистрали?',
		hint: 'Движение задним ходом на автомагистралях запрещено, в том числе и вне проезжей части, т.е. правее сплошной линии разметки, обозначающей её край (п. 16.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается, если Ваше транспортное средство находится правее сплошной линии разметки, обозначающей край проезжей части автомагистрали.', 'Запрещается.'])
	},
		{
		id: 177,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли перевозка людей в прицепе-даче?',
		hint: 'Прицеп-дача не предназначен по своим техническим параметрам для перевозки людей, поэтому Правила запрещают перевозку людей в них независимо от наличия мест для сидения (п. 22.8).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не разрешается.', 'Разрешается.', 'Разрешается при наличии места для сидения.'])
	},
		{
		id: 178,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях Вам запрещается дальнейшее движение даже до места ремонта или стоянки с негорящими (из-за неисправности) фарами и задними габаритными огнями?',
		hint: 'С негорящими или отсутствующими фарами и задними габаритными огнями Вам запрещается дальнейшее движение не только в темное время суток, но и в условиях недостаточной видимости (п. 2.3.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только в условиях недостаточной видимости.', 'Только в тёмное время суток.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 179,
		imageName: _elm_lang$core$Maybe$Just('09-19.jpg'),
		question: 'На каком рисунке показан безопасный способ разворота вне перекрёстка с использованием прилегающей территории слева?',
		hint: 'Безопасный способ разворота на узких дорогах с использованием прилегающей слева территории показан на правом рисунке, так как, выезжая на дорогу задним ходом, водитель имеет возможность не только следить за своей траекторией движения, но и полностью контролировать обстановку на полосе, на которую он въезжает.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На левом.', 'На правом.'])
	},
		{
		id: 180,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие виды административных наказаний могут применяться к водителям за нарушения Правил?',
		hint: 'В соответствии с КоАП за нарушения ПДД к водителям могут применяться следующие виды административных наказаний: предупреждение (выносимое в письменной форме), штраф (взыскание с нарушителя определенной суммы денежных средств), конфискация орудия совершения или предмета административного правонарушения (безвозмездное обращение в государственную собственность не изъятых из оборота вещей), лишение права управления ТС (запрещение в течение определенного срока управлять ТС), административный арест (содержание нарушителя в течение определенного срока под стражей).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только предупреждение или штраф.', 'Только предупреждение, штраф или лишение права управления транспортными средствами.', 'Предупреждение, штраф, конфискация орудия совершения или предмета административного правонарушения, лишение права управления транспортными средствами, административный арест.'])
	},
		{
		id: 181,
		imageName: _elm_lang$core$Maybe$Just('10-01.jpg'),
		question: 'На каких рисунках показана главная дорога?',
		hint: 'Главная дорога показана на левом верхнем и нижнем рисунках, о чем свидетельствуют установленные на этих дорогах знаки 2.1 «Главная дорога» и 2.3.1 «Пересечение с второстепенной дорогой» (п. 1.2, Приложение 1). Знак 6.8.2 «Тупик», показанный на верхнем правом рисунке, информирует водителей о том, что справа примыкает дорога, не имеющая сквозного проезда.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на левом верхнем.', 'На левом верхнем и нижнем.', 'На всех.'])
	},
		{
		id: 182,
		imageName: _elm_lang$core$Maybe$Just('10-02.jpg'),
		question: 'Какие знаки означают, что Вы должны уступить дорогу, если встречный разъезд затруднён?',
		hint: 'Знаки А (1.13 «Крутой спуск») и Б (1.14 «Крутой подъём») устанавливают соответственно на спусках и подъёмах, где Вы при наличии препятствия должны уступить дорогу ТС, движущемуся на подъём (п. 11.7). Знак В (2.6 «Преимущество встречного движения») устанавливается перед въездом на узкий участок дороги и обязывает вас уступить дорогу встречному ТС средству, если разъезд затруднён. Знак Г (2.7 «Преимущество перед встречным движением»), установленный перед въездом на узкий участок дороги, предоставляет вам приоритет по отношению к встречному ТС (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только В.', 'А и В.', 'Б и В.', 'Б и Г.'])
	},
		{
		id: 183,
		imageName: _elm_lang$core$Maybe$Just('10-03.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Знак 3.28 «Стоянка запрещена» с табличкой 8.2.2 «Зона действия» запрещает вам стоянку на протяжении 50 м за знаком. Поставив автомобиль на стоянку в указанном месте, Вы нарушите требования запрещающего знака, даже если Вы проживаете рядом с этим местом.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, если Вы проживаете рядом с этим местом.', 'Запрещено.'])
	},
		{
		id: 184,
		imageName: _elm_lang$core$Maybe$Just('10-04.jpg'),
		question: 'Вы управляете грузовым автомобилем с разрешённой максимальной массой не более 3,5 т. В каких направлениях Вам разрешено дальнейшее движение?',
		hint: 'Установленный за перекрёстком знак 3.4 «Движение грузовых автомобилей запрещено» (без указания массы на знаке) запрещает движение в прямом направлении только грузовым автомобилям с разрешенной максимальной массой более 3,5 т, а знак 6.15.2 «Направление движения для грузовых автомобилей» перед перекрёстком указывает для таких автомобилей рекомендуемое направление движения для объезда закрытого для них участка дороги. Таким образом, Вы на этом перекрёстке можете двигаться в любом направлении.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только направо.', 'Только направо, налево и в обратном направлении.', 'В любых.'])
	},
		{
		id: 185,
		imageName: _elm_lang$core$Maybe$Just('10-05.jpg'),
		question: 'Такой вертикальной разметкой обозначают:',
		hint: 'Разметкой 2.1.1 и 2.1.3 обозначают вертикальные элементы дорожных сооружений (опоры мостов, путепроводов, торцовые части парапетов и т.п.), когда эти элементы представляют опасность для движущихся ТС.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Все вертикальные элементы дорожных сооружений.', 'Только вертикальные элементы дорожных сооружений, представляющие опасность для движущихся транспортных средств.'])
	},
		{
		id: 186,
		imageName: _elm_lang$core$Maybe$Just('10-06.jpg'),
		question: 'Кто из водителей может продолжить движение?',
		hint: 'Регулировщик по какой-то причине взял управление движением на перекрёстке на себя. Водители должны выполнять требования его сигналов, несмотря на то, что они противоречат сигналам светофора (п. 6.15). Следуя его сигналу, оба водителя могут продолжить движение (п. 6.10).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель автобуса.', 'Только водитель легкового автомобиля.', 'Оба водителя.', 'Никто.'])
	},
		{
		id: 187,
		imageName: _elm_lang$core$Maybe$Just('10-07.jpg'),
		question: 'Вы намерены произвести разворот на перекрёстке. Какие указатели поворота необходимо включить при въезде на перекрёсток?',
		hint: 'Совершая разворот на перекрёстке с круговым движением, Вы обязаны, руководствуясь требованием знака 4.3 «Круговое движение», выполнить правые повороты при въезде на перекресток и выезде с него. При этом необходимо своевременно включить правые указатели поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Правые.', 'Левые.', 'Включать указатели поворота в этой ситуации нет необходимости.'])
	},
		{
		id: 188,
		imageName: _elm_lang$core$Maybe$Just('10-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Дорожные знаки 5.6 «Конец дороги с односторонним движением» и 1.21 «Двустороннее движение» информируют вас о том, что дорога с односторонним движением заканчивается только на перекрёстке. Следовательно, поворот налево должен выполняться с крайней левой полосы (п. 8.5), т.е. по траектории Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 189,
		imageName: _elm_lang$core$Maybe$Just('10-09.jpg'),
		question: 'Водитель легкового автомобиля в данной ситуации:',
		hint: 'В данном случае в месте въезда на дорогу имеется полоса разгона. Водитель легкового автомобиля, движущегося по ней, должен при перестроении уступить дорогу грузовому автомобилю (п. 8.10).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должен уступить дорогу грузовому автомобилю, так как выезжает с полосы разгона.', 'Имеет преимущественное право на движение, так как находится справа от грузового автомобиля.'])
	},
		{
		id: 190,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что должно иметь для Вас решающее значение при выборе скорости движения в тёмное время суток?',
		hint: 'Двигаясь в тёмное время суток с предельно допустимой скоростью, водитель, при возникновении опасности, может не успеть остановиться в пределах освещаемого фарами участка дороги. Поэтому ночью условия видимости имеют решающее значение при выборе скорости (п. 10.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предельные ограничения скорости, установленные для Вашего транспортного средства.', 'Условия видимости.'])
	},
		{
		id: 191,
		imageName: _elm_lang$core$Maybe$Just('10-11.jpg'),
		question: 'Можете ли Вы обогнать трактор?',
		hint: 'Обгон запрещён на железнодорожных переездах и ближе чем за 100 м перед ними (п. 11.4). Поскольку железнодорожный переезд находится вне населённого пункта, то знаки 1.2 «Железнодорожный переезд без шлагбаума» и 1.4.1 «Приближение к железнодорожному переезду» установлены на расстоянии 150 — 300 м до переезда. Следовательно, Вы можете начать обгон трактора в данной ситуации, если обгон будет завершен за 100 м до переезда (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если обгон будет завершен за 100 м до переезда.', 'Нет.'])
	},
		{
		id: 192,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Где разрешается стоянка в целях длительного отдыха, ночлега на дорогах вне населённого пункта?',
		hint: 'Стоянка с целью длительного отдыха, ночлега вне населённого пункта разрешается только на предусмотренных для этого площадках или за пределами дороги (п. 12.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на хорошо просматриваемом месте на обочине.', 'В любом месте на обочине.', 'Только на предусмотренных для этого площадках или за пределами дороги.', 'В любом из перечисленных мест.'])
	},
		{
		id: 193,
		imageName: _elm_lang$core$Maybe$Just('10-13.jpg'),
		question: 'При включении зелёного сигнала светофора Вы должны:',
		hint: 'Прежде чем начать движение при включении зелёного сигнала светофора, Вы должны убедиться в отсутствии пешеходов, завершающих переход проезжей части, которые могут появиться из-за стоящего справа грузового автомобиля (п. 13.8).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Убедиться в отсутствии пешеходов, завершающих переход проезжей части, после чего начать движение.', 'Руководствуясь сигналом светофора, сразу начать движение.'])
	},
		{
		id: 194,
		imageName: _elm_lang$core$Maybe$Just('10-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Кому следует уступить дорогу?',
		hint: 'На перекрёстке равнозначных дорог Вы обязаны уступить дорогу находящемуся справа грузовому автомобилю, а также трамваю, который имеет преимущество независимо от направления его движения (п. 13.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваю.', 'Только грузовому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 195,
		imageName: _elm_lang$core$Maybe$Just('10-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Поворачивая налево по направлению главной дороги (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») на перекрёстке неравнозначных дорог, Вы пользуетесь преимуществом перед автобусом, который находится на второстепенной дороге (п. 13.9). Легковой автомобиль также находится на главной дороге, но он движется слева от вас, и по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11) Вы имеете перед ним преимущество.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только легковому автомобилю.', 'Никому.'])
	},
		{
		id: 196,
		imageName: _elm_lang$core$Maybe$Just('10-16.jpg'),
		question: 'Разрешён ли Вам въезд на железнодорожный переезд в данной ситуации?',
		hint: 'Независимо от положения шлагбаума Вы должны остановиться перед ним, поскольку красный сигнал светофора запрещает движение через переезд, даже если отсутствует приближающийся поезд (п. 15.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если отсутствует приближающийся поезд.', 'Нет.'])
	},
		{
		id: 197,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении в условиях недостаточной видимости Вы можете использовать противотуманные фары:',
		hint: 'Правила предписывают при движении в условиях недостаточной видимости использовать противотуманные фары только совместно с ближним или дальним светом фар (п. 19.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Как отдельно, так и совместно с ближним или дальним светом фар.', 'Только отдельно от ближнего или дальнего света фар.', 'Только совместно с ближним или дальним светом фар.'])
	},
		{
		id: 198,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие из перечисленных транспортных средств разрешается эксплуатировать без медицинской аптечки?',
		hint: 'Из всех перечисленных ТС только мотоциклы без бокового прицепа могут эксплуатироваться без медицинской аптечки. Эксплуатация всех остальных ТС при отсутствии аптечки запрещается (Перечень, п. 7.7).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Автобусы.', 'Автомобили.', 'Все мотоциклы.', 'Только мотоциклы без бокового прицепа.'])
	},
		{
		id: 199,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При приближении к вершине подъёма в темное время суток водителю рекомендуется переключить дальний свет фар на ближний:',
		hint: 'Приближаясь в тёмное время суток к вершине подъёма, рекомендуется всегда переключать дальний свет фар на ближний, чтобы не ослепить водителя ТС, неожиданно появившегося со встречного направления.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при появлении встречного транспортного средства.', 'Всегда при приближении к вершине подъёма.'])
	},
		{
		id: 200,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какова первая помощь при травме волосистой части головы?',
		hint: 'Травма головы часто сочетается с травмой шейного отдела позвоночника, поэтому оказание первой помощи начинают с наложения импровизированной шейной шины. Ранение волосистой части головы сопровождается не обильным, но опасным для жизни кровотечением, при котором накладывают давящую повязку. Пострадавшего укладывают на бок для предотваращения попадания рвотных масс в дыхательные пути. Холод, приложенный к голове, замедляет развитие отека мозга.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Наложить импровизированную шейную шину. К ране волосистой части головы приложить давящую повязку из стерильного бинта, пострадавшего уложить на бок с согнутыми в коленях ногами, к голове приложить холод.', 'Наложить импровизированную шейную шину, на рану наложить стерильный ватный тампон, пострадавшего уложить на спину, приподняв ноги. К голове приложить холод.', 'Шейную шину не накладывать, рану заклеить медицинским пластырем, пострадавшего уложить на бок только в случае потери им сознания.'])
	},
		{
		id: 201,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вы совершите вынужденную остановку?',
		hint: 'Под вынужденной остановкой подразумевается прекращение движения ТС из-за его технической неисправности, опасности, создаваемой перевозимым грузом, внезапным ухудшением состояния водителя (или пассажира), а также появлением препятствия на дороге (упавший груз, завал на дороге и т. п.). Остановка, связанная с необходимостью выполнения требования уступить дорогу, не рассматривается как вынужденная (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу.', 'Остановившись на проезжей части из-за технической неисправности автомобиля.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 202,
		imageName: _elm_lang$core$Maybe$Just('11-02.jpg'),
		question: 'Разрешён ли Вам съезд на дорогу с грунтовым покрытием?',
		hint: 'Знаки 1.34.1 и 1.34.2 «Направление поворота» указывают лишь направление движения на закруглениях дороги малого радиуса с ограниченной видимостью, или, как их называют, «закрытых» поворотах. Эти знаки ни в коей мере не ограничивают возможность съезда с дороги, в данном случае — на примыкающую справа грунтовую дорогу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 203,
		imageName: _elm_lang$core$Maybe$Just('11-03.jpg'),
		question: 'Можете ли Вы остановиться для посадки пассажира за знаком?',
		hint: 'Знак 3.28 «Стоянка запрещена» остановку не запрещает, поэтому Вы можете остановиться в указанном месте.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 204,
		imageName: _elm_lang$core$Maybe$Just('11-04.jpg'),
		question: 'Какой из знаков обозначает пешеходную дорожку?',
		hint: 'Дорожка, по которой разрешено движение только пешеходам, обозначается знаком 4.5 «Пешеходная дорожка» (знак Б). Название знака 3.10 «Движение пешеходов запрещено» (знак А) говорит само за себя. А знаком 5.19.1 «Пешеходный переход» (знак В) выделяется на проезжей части участок, где пешеходы переходят дорогу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только Б и В.', 'Все знаки.'])
	},
		{
		id: 205,
		imageName: _elm_lang$core$Maybe$Just('11-05.jpg'),
		question: 'Вы намерены повернуть налево. Где Вы должны остановиться, чтобы уступить дорогу?',
		hint: 'Разметка 1.13 (в виде линии из треугольников) наносится поперёк полосы движения и указывает место, где Вы должны при необходимости остановиться, выполняя требование знака 2.4 «Уступите дорогу» и предоставляя преимущество ТС, движущимся по пересекаемой дороге.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перед знаком.', 'Перед перекрёстком у линии разметки.', 'На перекрёстке перед прерывистой линией разметки.', 'В любом месте по усмотрению водителя.'])
	},
		{
		id: 206,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам запрещается выполнять обгон транспортного средства, имеющего нанесённые на наружные поверхности специальные цветографические схемы?',
		hint: 'Правила запрещают обгонять ТС, имеющие нанесенные на наружные поверхности специальные цветографические схемы, если на таких ТС включены проблесковый маячок синего цвета или маячки синего и красного цветов, а также специальный звуковой сигнал (п 3.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['При включении на нем проблесковых маячков синего (синего и красного) цвета и специального звукового сигнала.', 'Только при включении на нем проблесковых маячков синего (синего и красного) цвета.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 207,
		imageName: _elm_lang$core$Maybe$Just('11-07.jpg'),
		question: 'Обязаны ли Вы в данной ситуации включить сигнал правого поворота?',
		hint: 'Знак 5.15.6 «Конец полосы» и разметка 1.19 (изогнутые стрелы) информируют об окончании средней полосы, предназначенной для движения в данном направлении, и требуют перестроиться на правую полосу. Перед выполнением этого манёвра Вы обязаны подать сигнал правого поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, только в тёмное время суток.'])
	},
		{
		id: 208,
		imageName: _elm_lang$core$Maybe$Just('11-08.jpg'),
		question: 'По какой траектории Вы можете выполнить поворот направо?',
		hint: 'При повороте направо Вы должны двигаться по возможности ближе к правому краю проезжей части, т.е. поворот следует выполнять по траектории А (п. 8.6).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 209,
		imageName: _elm_lang$core$Maybe$Just('11-09.jpg'),
		question: 'По какой траектории Вы можете выполнить разворот?',
		hint: 'Перед Вами нерегулируемый пешеходный переход, обозначенный разметкой 1.14.1 «Зебра». Правилами развороты запрещены только на самих пешеходных переходах (п. 8.11), поэтому Вы можете выполнить разворот по траектории А или В.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по А или В.', 'По любой.'])
	},
		{
		id: 210,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях Вам разрешено выезжать за пределы крайней правой полосы, если Вы управляете транспортным средством, скорость которого не должна превышать 40 км/ч?',
		hint: 'Даже если Ваше ТС не может развить скорость более 40 км/ч, Вам разрешено выехать за пределы правой полосы не только при объезде или перестроении перед поворотом налево (разворотом), но и при обгоне (п. 9.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при объезде или перестроении перед поворотом или разворотом.', 'Только при обгоне.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 211,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие требования предъявляются к водителю обгоняемого транспортного средства?',
		hint: 'Водителю обгоняемого ТС запрещается препятствовать обгону повышением скорости движения или иными действиями, например, смещением влево. Однако этот водитель не обязан тормозить, уступая дорогу автомобилю, который его обгоняет (п. 11.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Он должен уступить дорогу автомобилю, завершающему обгон.', 'Он не должен препятствовать обгону путем повышения скорости движения или иными действиями.'])
	},
		{
		id: 212,
		imageName: _elm_lang$core$Maybe$Just('11-12.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'Оба водителя нарушили Правила, так как стоянка запрещена ближе 50 м по обе стороны от железнодорожных переездов (п. 12.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель автомобиля А.', 'Только водитель автомобиля Б.', 'Оба нарушили.', 'Оба не нарушили.'])
	},
		{
		id: 213,
		imageName: _elm_lang$core$Maybe$Just('11-13.jpg'),
		question: 'Вы намерены повернуть направо. Следует ли уступить дорогу автомобилю, выполняющему разворот?',
		hint: 'При движении в направлении стрелки, включенной в дополнительной секции одновременно с красным сигналом светофора, Вы обязаны уступить дорогу ТС, движущимся с любых других направлений, в том числе выполняющим разворот на перекрёстке (п. 13.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 214,
		imageName: _elm_lang$core$Maybe$Just('11-14.jpg'),
		question: 'Намереваясь продолжить движение в прямом направлении, Вы должны:',
		hint: 'Данный перекрёсток равнозначных дорог Вы проезжаете первым, поскольку водитель легкового автомобиля, находящегося слева, должен уступить вам дорогу (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу легковому автомобилю.', 'Проехать перекрёсток первым.'])
	},
		{
		id: 215,
		imageName: _elm_lang$core$Maybe$Just('11-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. При жёлтом мигающем сигнале светофора Вы должны:',
		hint: 'При жёлтом мигающем сигнале светофора перекрёсток считается нерегулируемым (п. 13.3). Руководствуясь знаком приоритета 2.1 «Главная дорога», Вы можете проехать этот перекрёсток первым, пользуясь преимуществом как перед грузовым автомобилем, так и перед трамваем, находящимися на второстепенной дороге (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать перекрёсток первым.', 'Уступить дорогу только грузовому автомобилю.', 'Уступить дорогу только трамваю.', 'Уступить дорогу обоим транспортным средствам.'])
	},
		{
		id: 216,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'С какой максимальной скоростью разрешено движение транспортным средствам в жилых зонах и на дворовых территориях?',
		hint: 'В связи с необходимостью обеспечить безопасность пешеходов, имеющих право использовать для движения кроме тротуаров и проезжую часть, скорость движения ТС в жилых зонах и на приравненных к ним дворовых территориях ограничена 20 км/ч (п. 10.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['10 км/ч.', '20 км/ч.', '40 км/ч.'])
	},
		{
		id: 217,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Вы можете использовать противотуманные фары совместно с ближним или дальним светом фар:',
		hint: 'Противотуманные фары Вы можете использовать как в условиях недостаточной видимости (снегопад, дождь, туман, сумерки, когда видимость дороги менее 300 м), так и в тёмное время суток на неосвещённых участках дорог совместно с ближним или дальним светом фар (п. 19.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только в условиях недостаточной видимости.', 'Только в тёмное время суток на неосвещённых участках дорог.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 218,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком из перечисленных случаев длина пути обгона будет больше?',
		hint: 'В обоих случаях разница скоростей между обгоняющим и обгоняемым автомобилем будет составлять 20 км/ч, а это означает, что время на выполнение обгона будет затрачено одинаковое. Однако за это время водитель, выполняющий обгон на скорости 90 км/ч, проедет больший путь, чем водитель, движущийся со скоростью 60 км/ч.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['При скорости движения обгоняемого транспортного средства 40 км/ч и обгоняющего 60 км/ч.', 'При скорости движения обгоняемого транспортного средства 70 км/ч и обгоняющего 90 км/ч.', 'Длина пути обгона в обоих случаях будет одинакова.'])
	},
		{
		id: 219,
		imageName: _elm_lang$core$Maybe$Just('11-19.jpg'),
		question: 'Для предупреждения скатывания автомобиля при остановке на подъеме (спуске) водителю следует повернуть передние колеса. Водители каких транспортных средств правильно выполнили это требование при наличии тротуара?',
		hint: 'Производя остановку на спусках (поз. А и Б) или подъёмах (поз. В и Г) при наличии тротуара, необходимо повернуть колёса так, чтобы избежать самопроизвольного скатывания автомобиля на презжую часть. Правильное положение колёс обеспечили водители автомобилей А и В.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['А и Г.', 'Б и В.', 'А и В.', 'Б и Г.'])
	},
		{
		id: 220,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Административная ответственность установлена за нарушение Правил дорожного движения или правил эксплуатации транспортного средства, повлекшее причинение:',
		hint: 'В соответствии со ст 12.24 КоАП нарушение ПДД или правил эксплуатации ТС, повлекшие причинение легкого или средней тяжести вреда здоровью потерпевшего, влечёт административное наказание.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Легкого вреда здоровью человека либо незначительного материального ущерба.', 'Легкого или средней тяжести вреда здоровью человека либо материального ущерба.', 'Легкого или средней тяжести вреда здоровью человека.'])
	},
		{
		id: 221,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Можете ли Вы, будучи владельцем легкового автомобиля, передавать управление этим транспортным средством в своем присутствии другому лицу, имея при этом соответствующий страховой полис?',
		hint: 'Вы можете передать управление легковым автомобилем в своём присутствии другому лицу, имея при этом соответствующий страховой полис, при условии, что лицо имеет водительское удостоверение с отметкой в категории «В» (п. 2.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Можете при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «С».', 'Можете при наличии у этого лица водительского удостоверения на право управления транспортным средством категории «В».', 'Не можете.'])
	},
		{
		id: 222,
		imageName: _elm_lang$core$Maybe$Just('12-02.jpg'),
		question: 'Этот дорожный знак:',
		hint: 'Знак 2.6 «Преимущество встречного движения» обязывает уступить дорогу встречным ТС, находящимся не только непосредственно на узком участке, но и на противоположном подъезде к нему. Вы не должны вынуждать их тормозить или изменять направление движения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предупреждает о наличии узкого участка дороги, но не устанавливает очередность движения.', 'Запрещает проезд через мост.', 'Обязывает уступить дорогу встречному транспортному средству.'])
	},
		{
		id: 223,
		imageName: _elm_lang$core$Maybe$Just('12-03.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на перекрёстке?',
		hint: 'Знак 5.13.2 «Выезд на дорогу с полосой для маршрутных транспортных средств» информирует о том, что на пересекаемой дороге общий поток ТС движется справа налево, а маршрутные ТС по специально выделенной полосе — слева направо. Вам движение по такой полосе, а следовательно, и поворот направо запрещены (п. 18.2). Таким образом, на этом перекрёстке Вы можете продолжить движение прямо, налево и в обратном направлении.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево и в обратном направлении.', 'Только прямо, налево и в обратном направлении.', 'В любых.'])
	},
		{
		id: 224,
		imageName: _elm_lang$core$Maybe$Just('12-04.jpg'),
		question: 'О чем информирует водителя табличка, установленная под знаком?',
		hint: 'Табличка 8.10 «Место для осмотра автомобилей» указывает, что на площадке, обозначенной знаком 6.4 «Место стоянки», имеется эстакада или смотровая канава. Обычно такие места оборудуются на дорогах вне населённых пунктов. Эта табличка: может использоваться и со знаком 7.11 «Место отдыха» (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Стоянка оборудована пунктом технической помощи.', 'На стоянке имеется эстакада или смотровая канава.'])
	},
		{
		id: 225,
		imageName: _elm_lang$core$Maybe$Just('12-05.jpg'),
		question: 'Водитель какого автомобиля не нарушает Правила?',
		hint: 'Линию разметки 1.11 применяют в случаях, когда необходимо ограничить с одной стороны манёвры ТС. В этой ситуации не нарушает Правила водитель автомобиля Б, пересекающий разметку со стороны прерывистой линии. Со стороны сплошной линии её можно пересекать только при завершении обгона или объезда.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Оба нарушают.', 'Оба не нарушают.'])
	},
		{
		id: 226,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое значение имеет сигнал свистком, подаваемый регулировщиком?',
		hint: 'Сигнал свистком является дополнительным сигналом и используется регулировщиком только для привлечения внимания участников движения (п. 6.12).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы должны немедленно остановиться.', 'Вы должны ускорить движение.', 'Сигнал подается для привлечения внимания участников движения.'])
	},
		{
		id: 227,
		imageName: _elm_lang$core$Maybe$Just('12-07.jpg'),
		question: 'Вы намерены повернуть налево на этом перекрёстке. В какой момент Вам следует включить левые указатели поворота?',
		hint: 'Указатели левого поворота в данной ситуации следует включить только после въезда на первое пересечение проезжих частей. Включение сигнала заблаговременно до въезда на перекрёсток может ввести в заблуждение водителя мотоцикла (п. 8.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Заблаговременно, до въезда на перекрёсток.', 'После въезда на первое пересечение проезжих частей.', 'По Вашему усмотрению.'])
	},
		{
		id: 228,
		imageName: _elm_lang$core$Maybe$Just('12-08.jpg'),
		question: 'Вы намерены повернуть на перекрёстке направо. Как Вам следует поступить?',
		hint: 'Стрелы разметки 1.18 указывают, что на данном перекрёстке поворот направо может осуществляться не только с правой, но и с левой полосы. Следовательно, Вы можете выполнить поворот либо заранее перестроившись на крайнюю правю полосу (занять крайнее правое положение) (п. 8.5), либо продолжить движение по левой полосе.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перестроиться на правую полосу, затем осуществить поворот.', 'Продолжить движение по второй полосе до перекрёстка, затем повернуть.', 'Возможны оба способа.'])
	},
		{
		id: 229,
		imageName: _elm_lang$core$Maybe$Just('12-09.jpg'),
		question: 'Разрешён ли Вам такой манёвр на мосту?',
		hint: 'На любых мостах, независимо от видимости дороги в обоих направлениях, разворот запрещён (п. 8.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешен только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 230,
		imageName: _elm_lang$core$Maybe$Just('12-10.jpg'),
		question: 'С какой скоростью Вы можете продолжить движение в населённом пункте по правой полосе?',
		hint: 'В данной ситуации знак 4.6 «Ограничение минимальной скорости» с табличкой 8.14 «Полоса движения» распространяет свое действие только на левую полосу. Двигаясь по правой полосе дороги в населённом пункте, Вы не должны превышать скорость 60 км/ч. Минимальная скорость на ней не установлена (п. 10.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 50 км/ч.', 'Не более 60 км/ч.', 'Не менее 50 км/ч и не более 60 км/ч.'])
	},
		{
		id: 231,
		imageName: _elm_lang$core$Maybe$Just('12-11.jpg'),
		question: 'Разрешён ли Вам обгон в данной ситуации?',
		hint: 'Вы приближаетесь к нерегулируемому перекрёстку равнозначных дорог (знак 1.6 «Пересечение равнозначных дорог»). На нерегулируемых перекрёстках обгон запрещён при движении по дороге, не являющейся главной (п. 11.4). Следовательно, в данной ситуации обгон гужевой повозки можно начать лишь в том случае, если он будет завершен до перекрёстка.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если обгон будет завершен до перекрёстка.', 'Нет.'])
	},
		{
		id: 232,
		imageName: _elm_lang$core$Maybe$Just('12-12.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Поставить автомобиль на стоянку в населённом пункте на левой стороне дороги с одной полосой длвижения для каждого направления Вы имели бы право, если бы не было знака 5.27 «Зона с ограничением стоянки». Данный знак в отличие от запрещающего знака 3.28 «Стоянка запрещена» распространяет своё действие не только на ту сторону дороги на которой он установлен, а на всю территорию (участок дороги) вплоть до выезда из зоны, обозначаемой знаком «Конец зон с ограничением стоянки» (п. 12.1, Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещено.', 'Разрешено.'])
	},
		{
		id: 233,
		imageName: _elm_lang$core$Maybe$Just('12-13.jpg'),
		question: 'Разрешено ли Вам повернуть направо?',
		hint: 'В случае, когда регулировщик расположен к Вам левым или правым боком, а его руки опущены либо вытянуты в стороны, движение Вам разрешено прямо и направо (п. 6.10). Однако, поворачивая направо, следует уступить дорогу пешеходам, переходящим проезжую часть, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, уступив дорогу пешеходам.', 'Нет.'])
	},
		{
		id: 234,
		imageName: _elm_lang$core$Maybe$Just('12-14.jpg'),
		question: 'Вы намерены продолжить движение по перекрёстку с круговым движением. Следует ли уступить дорогу грузовому автомобилю?',
		hint: 'Вы должны уступить дорогу грузовому автомобилю, так как на любых пересечениях равнозначных дорог, в том числе и на перекрёстках с круговым движением действует общее правило: «Уступите дорогу приближающемуся справа» (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 235,
		imageName: _elm_lang$core$Maybe$Just('12-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Поскольку Вы подъезжаете к перекрёстку по второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги»), Вам необходимо уступить дорогу только автобусу и легковому автомобилю (п. 13.9). А вот по отношению к мотоциклу Вы пользуетесь преимуществом по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11), поскольку находитесь от него справа.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Всем транспортным средствам.', 'Только легковому автомобилю.', 'Только легковому автомобилю и автобусу.'])
	},
		{
		id: 236,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли учебная езда на автомагистрали?',
		hint: 'Учебная езда на дорогах, обозначенных знаком 5.1 «Автомагистраль» и предназначенных для движения с высокими скоростями, запрещена без каких-либо исключений (п. 16.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только по крайней правой полосе.', 'Запрещается.'])
	},
		{
		id: 237,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении в тёмное время суток на неосвещённых участках дорог Вы можете использовать противотуманные фары:',
		hint: 'Правила запрещают использовать противотуманные фары самостоятельно в тёмное время суток на неосвещённых участках дорог (п. 19.4). Вы можете применять их только в комбинации с ближним или дальним светом фар.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только отдельно от ближнего или дальнего света фар.', 'Только совместно с ближним или дальним светом фар.', 'Как отдельно, так и совместно с ближним или дальним светом фар.'])
	},
		{
		id: 238,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При какой неисправности тормозной системы Вам запрещается эксплуатация транспортного средства?',
		hint: 'Эксплуатация ТС Вам запрещается, если стояночная тормозная система не обеспечивает неподвижное состояние ТС с полной нагрузкой на уклоне до 16% включительно (Перечень, п. 1.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не включается контрольная лампа стояночной тормозной системы.', 'Стояночная тормозная система не обеспечивает неподвижное состояние транспортного средства с полной нагрузкой на уклоне до 16% включительно.', 'Уменьшен свободный ход педали тормоза.'])
	},
		{
		id: 239,
		imageName: _elm_lang$core$Maybe$Just('12-19.jpg'),
		question: 'На каком рисунке показан безопасный способ разворота вне перекрёстка с использованием прилегающей территории справа?',
		hint: 'Безопасный способ разворота на узких дорогах с использованием прилегающей справа территории показан на левом рисунке, так как при движении задним ходом водитель имеет возможность не только следить за траекторией движения, но и полностью контролировать обстановку на полосе, на которую он въезжает.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На левом.', 'На правом.'])
	},
		{
		id: 240,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При потери пострадавшим сознания и наличии пульса на сонной артерии для оказания первой помощи его необходимо уложить:',
		hint: 'Пострадавший, лежащий в бессознательном состоянии на спине, может погибнуть от удушения в результате западания языка. С учётом этого следует уложить его на бок так, чтобы согнутые колени опирались о землю, а верхняя рука находилась под щекой (устойчевое боковое положение), что обеспечит проходимость дыхательных путей.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['На спину с подложенным под голову валиком.', 'На спину с вытянутыми ногами.', 'На бок так, чтобы согнутые колени опирались о землю, а верхняя рука находилась под щекой.'])
	},
		{
		id: 241,
		imageName: _elm_lang$core$Maybe$Just('13-01.jpg'),
		question: 'Нарушает ли водитель Правила, двигаясь посередине дороги?',
		hint: 'В данной ситуации водитель нарушает Правила, поскольку на всех дорогах установлено правостороннее движение и водители должны занимать для движения правую сторону дороги (п. 1.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не нарушает.', 'Не нарушает, если отсутствуют встречные транспортные средства.', 'Нарушает.'])
	},
		{
		id: 242,
		imageName: _elm_lang$core$Maybe$Just('13-02.jpg'),
		question: 'Как следует поступить, если Вам необходимо развернуться?',
		hint: 'На этом перекрёстке пересекаемая дорога имеет одну проезжую часть, и, следовательно, знак 4.1.1 «Движение прямо» запрещает Вам разворот на перекрёстке. Этот знак не вводит каких-либо ограничений на следующий за перекрёстком участок дороги, где и можно развернуться.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Развернуться на этом перекрёстке при отсутствии на нем других транспортных средств.', 'Проехать прямо и развернуться за перекрёстком.', 'Проехать прямо и развернуться только на следующем перекрёстке.'])
	},
		{
		id: 243,
		imageName: _elm_lang$core$Maybe$Just('13-03.jpg'),
		question: 'Разрешена ли Вам стоянка в указанном месте?',
		hint: 'Зона действия знака 3.27 «Остановка запрещена» распространяется до ближайшего перекрёстка (Приложение 1). Разрыв в разделительной полосе дороги перекрёстком не считается (п. 1.2), поэтому, поставив автомобиль на стоянку в указанном месте, Вы нарушите требование запрещающего знака.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 244,
		imageName: _elm_lang$core$Maybe$Just('13-04.jpg'),
		question: 'Эта табличка распространяет действие установленного с ней знака:',
		hint: 'Табличка 8.4.3 «Вид транспортного средства» распространяет действие знака на легковые автомобили, а также грузовые автомобили с разрешённой максимальной массой до 3,5 т. Этим она отличается от табличек 8.6.2 — 8.6.9  «Способ постановки транспортного средства на стоянку», которые определяют порядок стоянки только легковых автомобилей и мотоциклов.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на легковые автомобили.', 'На легковые автомобили, а также на грузовые автомобили с разрешённой максимальной массой до 3,5 т.', 'На легковые автомобили и мотоциклы.'])
	},
		{
		id: 245,
		imageName: _elm_lang$core$Maybe$Just('13-05.jpg'),
		question: 'В каком из указанных мест Вы можете пересечь сплошную линию разметки и остановиться?',
		hint: 'Правила допускают пересекать сплошную линию разметки 1.2.1 для остановки ТС на обочине (Приложение 2). Остановка на разделительной полосе запрещена (п. 1.2), поэтому Вы можете пересечь разметку только в месте Б.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'В любом.', 'Ни в одном.'])
	},
		{
		id: 246,
		imageName: _elm_lang$core$Maybe$Just('13-06.jpg'),
		question: 'Ваши действия в данной ситуации?',
		hint: 'Круглый бело-лунный мигающий сигнал светофора на железнодорожном переезде разрешает движение (п. 6.9). Следовательно, Вы можете беспрепятственно проехать переезд.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать переезд.', 'Остановиться перед переездом.'])
	},
		{
		id: 247,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Когда может быть прекращена подача сигнала рукой о повороте?',
		hint: 'Подача предупредительного сигнала рукой о повороте может быть прекращена непосредственно перед началом поворота, с тем чтобы водитель имел возможность использовать обе руки при выполнении маневра (п. 8.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Непосредственно перед началом маневра.', 'Только после окончания маневра.'])
	},
		{
		id: 248,
		imageName: _elm_lang$core$Maybe$Just('13-08.jpg'),
		question: 'С какой полосы Вы можете въехать на данный перекрёсток?',
		hint: 'При въезде на перекрёсток с круговым движением (знак 4.3 «Круговое движение») поворот направо Вам можно производить не только с крайней правой полосы, но и с левой (п. 8.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только с правой.', 'С правой или левой.'])
	},
		{
		id: 249,
		imageName: _elm_lang$core$Maybe$Just('13-09.jpg'),
		question: 'Разрешён ли Вам разворот на указанном участке дороги?',
		hint: 'На данном участке дороги нет ни знаков, ни разметки, запрещающих разворот. Но, поскольку впереди поворот дороги, разворот возможен лишь при условии, что видимость дороги будет более 100 м (п. 8.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 250,
		imageName: _elm_lang$core$Maybe$Just('13-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на легковом автомобиле?',
		hint: 'Дорожный знак 5.25 «Начало населённого пункта» (на синем фоне) информирует о том, что на данной дороге не действуют требования Правил, устанавливающие порядок движения в населённых пунктах, в том числе и скоростные режимы. Таким образом, на легковом автомобиле Вы можете продолжить движение со скоростью не более 90 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['60 км/ч.', '70 км/ч.', '90 км/ч.', '110 км/ч.'])
	},
		{
		id: 251,
		imageName: _elm_lang$core$Maybe$Just('13-11.jpg'),
		question: 'Разрешён ли Вам обгон сразу трёх транспортных средств после проезда пешеходного перехода?',
		hint: 'В данной ситуации Вы можете начать обгон даже на пешеходном переходе, поскольку на нём нет пешеходов (п. 11.4). Вам не запрещено обгонять сразу три ТС (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещён.', 'Разрешён.'])
	},
		{
		id: 252,
		imageName: _elm_lang$core$Maybe$Just('13-12.jpg'),
		question: 'Можете ли Вы остановиться на мосту для посадки пассажира?',
		hint: 'Вы не можете посадить пассажира в данном месте, так как на мостах, эстакадах и путепроводах остановка разрешена только в случае, если для движения в данном направлении имеется не менее трех полос (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 253,
		imageName: _elm_lang$core$Maybe$Just('13-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Включенный указатель поворота информирует вас о том, что пути движения вашего автомобиля и трамвая пересекаются на перекрёстке. Учитывая, что данный сигнал светофора одновременно разрешает движение вам и водителю трамвая, Вы обязаны уступить дорогу трамваю (пп. 6.2 и 13.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу трамваю.'])
	},
		{
		id: 254,
		imageName: _elm_lang$core$Maybe$Just('13-14.jpg'),
		question: 'Кто из водителей должен уступить дорогу пешеходам?',
		hint: 'Оба водителя при повороте на перекрёстке должны уступить дорогу пешеходам (п. 13.1) независимо от того, обозначено, место перехода разметкой или нет. При отсутствии пешеходного перехода Правила предписывают пешеходам переходить проезжую часть по линии тротуаров или обочин (п. 4.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель легкового автомобиля.', 'Только водитель грузового автомобиля.', 'Оба водителя.'])
	},
		{
		id: 255,
		imageName: _elm_lang$core$Maybe$Just('13-15.jpg'),
		question: 'Вы намерены повернуть налево. Можете ли Вы приступить к повороту?',
		hint: 'На перекрёстке неравнозначных дорог Правила не запрещают вам приступить к повороту налево одновременно с грузовым автомобилем, поскольку при разъезде правыми сторонами траектории движения автомобилей не пересекаются. Однако, находясь на второстепенной дороге, Вы должны убедиться, что грузовой автомобиль действительно начал поворачивать налево и, что с учётом габаритов автомобилей, ширины проезжей части и т.п., в процессе поворота Вы не создадите ему помех (пп. 13.9 и 1.2 термин «Уступить дорогу»).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но не создавая помех грузовому автомобилю.', 'Нет.'])
	},
		{
		id: 256,
		imageName: _elm_lang$core$Maybe$Just('13-16.jpg'),
		question: 'Разрешено ли Вам продолжить движение по правой полосе?',
		hint: 'На легковом автомобиле Вам запрещено движение по правой полосе, так как по полосе, обозначенной дорожным знаком 5.14 «Полоса для маршрутных транспортных средств» и разметкой 1.23, разрешается движение  и остановка только маршрутным ТС и ТС, используемым в качестве легкового такси (п. 18.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено, если скорость грузового автомобиля менее 30 км/ч.', 'Разрешено, если при этом не будет создано помех движению маршрутных транспортных средств.', 'Запрещено.'])
	},
		{
		id: 257,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Вы можете использовать задние противотуманные фонари:',
		hint: 'Из-за высокой яркости задние противотуманные фонари разрешается применять только в условиях недостаточной видимости (п. 19.7). Запрещается подключать их к стоп-сигналам, так как в тёмное время суток это приведет к ослеплению движущихся сзади водителей.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только в условиях недостаточной видимости.', 'Только при движении в тёмное время суток.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 258,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При возникновении какой неисправности Вам запрещено дальнейшее движение даже до места ремонта или стоянки?',
		hint: 'При неисправности рулевого управления вам запрещено дальнейшее движение даже до места ремонта или стоянки (п. 2.3.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работает стеклоподъемник.', 'Неисправно рулевое управление.', 'Неисправен глушитель.'])
	},
		{
		id: 259,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Двигаясь в прямом направлении со скоростью 60 км/ч, Вы внезапно попали на небольшой участок скользкой дороги. Что следует предпринять?',
		hint: 'Небольшой участок скользкой дороги целесообразно преодолевать, не изменяя траектории и скорости движения автомобиля, чтобы не спровоцировать возникновение заноса.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Плавно затормозить.', 'Не менять траектории и скорости движения.'])
	},
		{
		id: 260,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'На какой срок может быть наложен кровоостанавливающий ?',
		hint: 'В тканях ниже наложенного жгута прекращается кровообращение, поэтому удлинение срока его применения может привести к тяжёлым последствиям. Кровообращение в тёплой атмосфере более интенсивно, чем в холодной, поэтому в тёплое время года жгут накладывается на один час, а в холодное  — на полчаса.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более получаса в тёплое время года и не более одного часа в холодное время года.', 'Не более одного часа в тёплое время года и не более получаса в хоодное время года.', 'Время не ограничено.'])
	},
		{
		id: 261,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает термин «Ограниченная видимость»?',
		hint: 'Под термином «Ограниченная видимость» подразумеваются ситуации когда видимость дороги в направлении движения ограничена рельефом местности, геометрическими параметрами дороги, растительностью, строениями, сооружениями или другими объектами (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Видимость дороги, ограниченная рельефом местности, геометрическими параметрами дороги, растительностью, строениями, сооружениями или другими объектами.', 'Видимостью дороги менее 300 м в условиях тумана, дождя, снегопада, а также в сумерки.', 'Видимостью дороги менее 150 м в ночное время.'])
	},
		{
		id: 262,
		imageName: _elm_lang$core$Maybe$Just('14-02.jpg'),
		question: 'Эти знаки предупреждают Вас о том, что:',
		hint: 'Знак 1.25 «Дорожные работы» предупреждает Вас о том, что на дороге ведутся ремонтные работы, а табличка 8.12 «Опасная обочина» уточняет, что работы ведутся на обочине, в связи с чем съезд на неё опасен, хотя и возможен.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановка транспортных средств на обочине запрещена.', 'Съезд на обочину опасен в связи с проведением на ней ремонтных работ.', 'Остановка разрешена только на проезжей части.'])
	},
		{
		id: 263,
		imageName: _elm_lang$core$Maybe$Just('14-03.jpg'),
		question: 'Какие знаки разрешают движение грузовым автомобилям с разрешённой максимальной массой до 3,5 т?',
		hint: 'Знак 3.1 «Въезд запрещён» (знак Б) запрещает въезд всех транспортных средств. Знак 5.3 «Дорога для автомобилей» (знак А) обозначает дороги, предназначенные для движения только автомобилей, в том числе любых грузовых, автобусов и мотоциклов. На знаке 3.4 «Движение грузовых автомобилей запрещено» (знак В) на кузове автомобиля не указана масса. В этом случае запрещается движение только грузовых автомобилей и составов транспортных средств с разрешенной максимальной массой более 3,5 т.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только А и В.', 'Все.'])
	},
		{
		id: 264,
		imageName: _elm_lang$core$Maybe$Just('14-04.jpg'),
		question: 'В каких направлениях Вы можете продолжить движение по крайней левой полосе на легковом автомобиле?',
		hint: 'Если знак 5.15.2 «Направления движения по полосе», расположенный над крайней левой полосой, разрешает поворот налево, то с этой полосы разрешён и разворот. Таким образом, Вы можете продолжить движение прямо, налево или в обратном направлении.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево.', 'Только прямо или налево.', 'Прямо, налево или в обратном направлении.'])
	},
		{
		id: 265,
		imageName: _elm_lang$core$Maybe$Just('14-05.jpg'),
		question: 'Что означают прерывистые линии разметки в данной ситуации?',
		hint: 'Линия разметки 1.2.2 (прерывистая линия, у которой длина штрихов в два раза короче промежутков между ними) обозначает край проезжей части на двухполосных дорогах с низкой интенсивностью движения (Приложение 2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Места, где разрешен съезд на обочину только для остановки.', 'Край проезжей части на двухполосных дорогах.', 'Места, где разрешено движение по обочине.'])
	},
		{
		id: 266,
		imageName: _elm_lang$core$Maybe$Just('14-06.jpg'),
		question: 'Должны ли Вы остановиться по требованию регулировщика в указанном им месте?',
		hint: 'Вы должны остановиться у тротуара, так как водители обязаны выполнять распоряжения регулировщика даже в тех случаях, когда они противоречат требованиям дорожных знаков и разметки (п. 6.15).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но только с заездом на тротуар.', 'Нет.'])
	},
		{
		id: 267,
		imageName: _elm_lang$core$Maybe$Just('14-07.jpg'),
		question: 'Такой сигнал рукой, подаваемый мотоциклистом, информирует Вас:',
		hint: 'При отсутствии или неисправности световых указателей поворота их заменяют подачей сигнала рукой. Данный сигнал мотоциклиста (вытянутая в сторону левая рука) соответствует сигналу левого поворота (или разворота) (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении повернуть налево или выполнить разворот.', 'О его намерении продолжить движение прямо или налево.', 'О наличии транспортного средства, приближающегося слева.'])
	},
		{
		id: 268,
		imageName: _elm_lang$core$Maybe$Just('14-08.jpg'),
		question: 'Обязаны ли Вы, двигаясь по левой полосе, уступить дорогу водителю автомобиля, который намерен перестроиться на Вашу полосу?',
		hint: 'Вы движетесь без изменения направления движения и поэтому не обязаны уступать дорогу водителю автомобиля, намеревающегося перестроиться на Вашу полосу (п. 8.4). Однако, надо учитывать, что в плотном транспортном потоке часто возникают ситуации, когда, притормозив, Вы даёте возможность водителю справа безболезненно влиться в поток, сняв таким образом напряжённость и обеспечив безопасность движения.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не обязаны.', 'Обязаны.'])
	},
		{
		id: 269,
		imageName: _elm_lang$core$Maybe$Just('14-09.jpg'),
		question: 'Можете ли Вы развернуться в этом месте?',
		hint: 'Разворот запрещён в местах с видимостью дороги хотя бы в одном направлении менее 100 м (п. 8.11). Знак 1.12.1 «Опасные повороты» с табличкой 8.2.1 «Зона действия» вне населённого пункта устанавливается за 150 — 300 м до начала первого поворота. Следовательно, в непосредственной близости от знака развернуться можно, так как табличка показывает не расстояние до опасного участка, а его протяжённость.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но только в светлое время суток.', 'Нет.'])
	},
		{
		id: 270,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях допускается движение автомобилей по тротуарам или пешеходным дорожкам?',
		hint: 'Тротуары и пешеходные дорожки не предназначены для движения ТС. Однако как исключение допускается подъезд, если отсутствуют иные возможности, к торговым предприятиям и другим объектам, расположенным непосредственно у этих тротуаров или дорожек при доставке грузов (п. 9.9). При этом должна быть обеспечена безопасность движения, т.е. пешеходы имеют приоритет.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['В любых, если не будут созданы помехи пешеходам.', 'Только, если Вы обслуживаете торговые или другие предприятия, расположенные непосредственно у этих тротуаров или дорожек при отсутствии других возможностей подъезда.'])
	},
		{
		id: 271,
		imageName: _elm_lang$core$Maybe$Just('14-11.jpg'),
		question: 'В этой ситуации, двигаясь на спуске, Вы:',
		hint: 'Знак 1.13 «Крутой спуск» предупреждает о том, что Вы приближаетесь к спуску. Так как в данной ситуации встречный разъезд затруднён, то уступить дорогу встречному легковому автомобилю должны Вы (п. 11.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу.', 'Имеете право проехать первым.'])
	},
		{
		id: 272,
		imageName: _elm_lang$core$Maybe$Just('14-12.jpg'),
		question: 'Можете ли Вы остановиться на мосту в указанном месте?',
		hint: 'Вы можете остановиться в указанном месте, поскольку при наличии трёх и более полос движения в данном направлении остановка на мостах, путепроводах и эстакадах разрешена (п. 12.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, только для высадки пассажиров.', 'Нет.'])
	},
		{
		id: 273,
		imageName: _elm_lang$core$Maybe$Just('14-13.jpg'),
		question: 'При включении зелёного сигнала светофора Вы должны:',
		hint: 'Вы должны уступить дорогу грузовому автомобилю, не успевшему завершить разворот на перекрёстке (п. 13.8).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу грузовому автомобилю, завершающему разворот на перекрестке.', 'Начать движение, не уступая дорогу грузовому автомобилю.'])
	},
		{
		id: 274,
		imageName: _elm_lang$core$Maybe$Just('14-14.jpg'),
		question: 'При повороте налево Вы должны:',
		hint: 'Руководствуясь правилами проезда перекрёстков равнозначных дорог, Вы обязаны уступить дорогу легковому автомобилю, так как он приближается справа (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу легковому автомобилю.', 'Проехать перекресток первым.'])
	},
		{
		id: 275,
		imageName: _elm_lang$core$Maybe$Just('14-15.jpg'),
		question: 'При повороте налево во второй проезд Вы:',
		hint: 'Правила проезда перекрёстков универсальны и действуют независимо от их конфигурации, наличия на дорогах разделительных полос и т.п. Вы и водитель автобуса находитесь на главной дороге (знак 2.1 «Главная дорога»), и поэтому при повороте налево Вы должны уступить дорогу автобусу (п. 13.12). Перед легковым автомобилем Вы имеете преимущество, так как он находится на второстепенной дороге (п. 13.9).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Имеете преимущество.', 'Должны уступить дорогу легковому автомобилю и автобусу.', 'Должны уступить дорогу только автобусу.'])
	},
		{
		id: 276,
		imageName: _elm_lang$core$Maybe$Just('14-16.jpg'),
		question: 'Кто из водителей нарушает правила разворота на автомагистрали?',
		hint: 'Разворот в технологических разрывах разделительной полосы на автомагистралях запрещён (п. 16.1). Этот манёвр разрешён только водителям дорожно-эксплуатационных машин с включенным проблесковым маячком оранжевого или жёлтого света при выполнении ремонтных или уборочных работ (п. 3.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель легкового автомобиля.', 'Только водитель грузового автомобиля, выполняющего ремонтные или уборочные работы.', 'Оба нарушают.', 'Оба не нарушают.'])
	},
		{
		id: 277,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли буксировка мотоцикла с боковым прицепом?',
		hint: 'Правила не запрещают буксировку мотоциклов с боковым прицепом (п. 20.4). Однако при этом нужно проявлять повышенное внимание и осторожность, учитывая недостаточную устойчиваость и ограниченную манёвренность мотоцикла.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 278,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие преимущества дает Вам использование зимних шин в холодное время года?',
		hint: 'Зимние шины отличаются от летних или всесезонных специальным рисунком протектора и повышенными сцепными качествами, что уменьшает возможность возникновения проскальзывания или пробуксовки колес на скользком покрытии. Если автомобиль используется на зимних дорогах со снежным накатом или в гололедицу, то рекомендуется использовать шипованные шины. Однако, использование зимних шин, в том числе и шипованных, требует от водителей осторожности при выборе скорости движения, так как возможность возникновения заноса на скользком покрытии не исключается.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Исключается возможность возникновения заноса.', 'Появляется возможность в любых погодных условиях двигаться с максимально допустимой скоростью.', 'Уменьшается возможность проскальзывания и пробуксовки колес на скользком покрытии.'])
	},
		{
		id: 279,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как влияет длительный разгон транспортного средства с включенной первой передачей на расход топлива?',
		hint: 'Длительный разгон ТС с включенной первой передачей, когда двигатель работает на повышенных оборотах, увеличивает расход топлива.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Расход топлива увеличивается.', 'Расход топлива уменьшается.', 'Расход топлива не изменяется.'])
	},
		{
		id: 280,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях водитель направляется на медицинское освидетельствование на состояние опьянения:',
		hint: 'В соответствии с ч. 1 ст 27.12 КоАП лицо, которое управляет ТС и в отношении которого имеются достаточные основания пологать, что оно находится в состоянии опьянения подлежит освидетельствованию на состояние алкогольного опянения. При отказе от прохождения указанного освидетельствования либо несогласии с результатами освидетельствования , а равно при наличии достаточных оснований пологать, что лицо находится в состоянии опьянения, отрицательном результате освидетельствования на состояние алокогльного опянения это лицо подлежит направлению на медицнское освидетельствование.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при отказе от прохождения освидетельствования на состояние алкогольного опьянения.', 'Только при несогласии с результатами освидетельствования на состояние алкогольного опьянения.', 'Только при наличии достаточных оснований полагать, что водитель находится в состоянии опьянения, и отрицательном результате освидетельствования на состояние алкогольного опьянения.', 'Во всех перечисленных случаях.'])
	},
		{
		id: 281,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какой неподвижный объект, не позволяющий продолжить движение по полосе, не относится к понятию «Препятствие»?',
		hint: 'Из перечисленных понятий к термину «Препятствие» не относится ТС, остановившееся из-за затора (п. 1.2).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Дефект проезжей части.', 'Посторонний предмет.', 'Неисправное или поврежденное транспортное средство.', 'Транспортное средство, остановившееся на этой полосе из-за образования затора.'])
	},
		{
		id: 282,
		imageName: _elm_lang$core$Maybe$Just('15-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на перекрёстке?',
		hint: 'На этом перекрёстке пересекаемая дорога имеет две проезжие части, знак 4.1.1 «Движение прямо» действует только на первое пересечение проезжих частей, перед которым он установлён. Следовательно, Вам запрещён только поворот направо на первую проезжую часть (направление В).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Б или В.', 'А или Б.'])
	},
		{
		id: 283,
		imageName: _elm_lang$core$Maybe$Just('15-03.jpg'),
		question: 'Этот дорожный знак:',
		hint: 'Круглая форма, красная кайма — это признаки принадлежности знака к группе запрещающих. Знак 3.24 «Ограничение максимальной скорости» запрещает движение со скоростью, превышающей указанную на знаке, в данном случае — более 40 км/ч.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Рекомендует двигаться со скоростью 40 км/ч.', 'Требует двигаться со скоростью не менее 40 км/ч.', 'Запрещает движение со скоростью более 40 км/ч.'])
	},
		{
		id: 284,
		imageName: _elm_lang$core$Maybe$Just('15-04.jpg'),
		question: 'Какие таблички указывают протяженность зоны действия знаков, с которыми они применяются?',
		hint: 'Протяженность зоны действия знаков указывают таблички Б (8.2.1 «Зона действия») и В (8.2.2 «Зона действия»). Табличка А (8.1.1 «Расстояние до объекта») используется, когда надо показать точное расстояние от знака до начала опасного участка, места введения соответствующего ограничения или определенного объекта, находящегося впереди по направлению движения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Б и В.'])
	},
		{
		id: 285,
		imageName: _elm_lang$core$Maybe$Just('15-05.jpg'),
		question: 'Разрешён ли Вам такой манёвр при выключенных реверсивных светофорах?',
		hint: 'В данном случае, когда реверсивные светофоры выключены, линия разметки 1.9 (двойная прерывистая) разделяет транспортные потоки противоположных направлений и пересекать ее нельзя.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён, если нет встречных транспортных средств.', 'Разрешен только для обгона.', 'Не разрешён.'])
	},
		{
		id: 286,
		imageName: _elm_lang$core$Maybe$Just('15-06.jpg'),
		question: 'При таком жесте регулировщика и сигналах светофора Вы должны:',
		hint: 'В этой ситуации в силу каких-то обстоятельств регулировщик вмешался в управление дорожным движением, и Вы должны выполнить его требование — остановиться перед стоп-линией, хотя светофор и разрешает движение (п. 6.15).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Продолжить движение прямо.', 'Продолжить движение прямо или направо.', 'Остановиться у стоп-линии.'])
	},
		{
		id: 287,
		imageName: _elm_lang$core$Maybe$Just('15-07.jpg'),
		question: 'Должен ли в этой ситуации водитель, остановившийся из-за неисправности, выставить знак аварийной остановки?',
		hint: 'Правила разрешают остановку и стоянку легковым автомобилям на левой стороне дорог с односторонним движением в населённых пунктах. Однако в рассматриваемой ситуации водитель из-за неисправности основился в зоне действия знака 3.27 «Остановка запрещена». В этом случае, т.е. при вынужденной остановке в местах, где остановка запрещена, водитель должен выставить знак аварийной остановки. Знак выставляется не только когда отсутствует или неисправна аварийная сигнализация, но и когда она включена (п. 7.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должен, если неисправна аварийная сигнализация.', 'Должен во всех случаях.', 'Не должен.'])
	},
		{
		id: 288,
		imageName: _elm_lang$core$Maybe$Just('15-08.jpg'),
		question: 'По какой траектории Вам разрешено продолжить движение налево?',
		hint: 'Поворот налево может осуществляться на любую полосу пересекаемой проезжей части, однако при выезде с пересечения проезжих частей Вы не должны оказаться на стороне встречного движения (п. 8.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 289,
		imageName: _elm_lang$core$Maybe$Just('15-09.jpg'),
		question: 'Вы выезжаете с места стоянки одновременно с другим автомобилем. Должны ли Вы уступить дорогу в данной ситуации?',
		hint: 'Во всех случаях, когда траектории движения ТС пересекаются, а очередность проезда не оговорена Правилами (в данном случае на стояночной площадке), Вы должны уступить дорогу ТС, приближающемуся справа (п. 8.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 290,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вы можете прибегнуть к резкому торможению?',
		hint: 'Резкое торможение Вы можете использовать только для предотвращения дорожно-транспортного происшествия (п. 10.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только для остановки перед перекрёстком или пешеходным переходом, когда после зелёного сигнала неожиданно для Вас включился жёлтый сигнал светофора.', 'Только для предотвращения дорожно-транспортного происшествия.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 291,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешён ли на двухполосной дороге обгон на перекрёстках?',
		hint: 'На нерегулируемых перекрёстках неравнозначных дорог обгон с выездом на полосу встречного движения разрешен только при движении по главной дороге (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешен только на нерегулируемых перекрёстках.', 'Разрешен только на перекрёстках неравнозначных дорог при движении по главной дороге.', 'Запрещён во всех случаях.'])
	},
		{
		id: 292,
		imageName: _elm_lang$core$Maybe$Just('15-12.jpg'),
		question: 'Кто из водителей нарушил правила остановки?',
		hint: 'Оба водителя нарушили Правила, так как мотоциклист должен был остановиться на обочине. Остановка слева вне населённых пунктов запрещена (п. 12.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель автомобиля.', 'Только водитель мотоцикла.', 'Оба нарушили.', 'Оба не нарушили.'])
	},
		{
		id: 293,
		imageName: _elm_lang$core$Maybe$Just('15-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Включенный указатель поворота у трамвая информирует о том, что пути движения вашего автомобиля и трамвая пересекаются на перекрёстке. Учитывая, что зелёный сигнал светофора разрешает движение прямо, а специальный светофор в виде буквы «Т» запрещает трамваю поворот направо, Вы можете проехать перекресток первым (пп. 6.2 и 6.8).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекресток первым.', 'Уступите дорогу трамваю.'])
	},
		{
		id: 294,
		imageName: _elm_lang$core$Maybe$Just('15-14.jpg'),
		question: 'Намереваясь продолжить движение в прямом направлении, Вы должны:',
		hint: 'В данной ситуации Вы должны уступить дорогу только трамваю, который на перекрёстке равнозначных дорог имеет преимущество перед безрельсовыми ТС (п. 13.11). Встречный легковой автомобиль, поворачивающий налево, обязан уступить дорогу Вам (п. 13.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать перекресток первым.', 'Уступить дорогу только трамваю.', 'Уступить дорогу трамваю и легковому автомобилю.'])
	},
		{
		id: 295,
		imageName: _elm_lang$core$Maybe$Just('15-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'При повороте налево на данном перекрёстке неравнозначных дорог (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») Вы должны уступить дорогу только автобусу, находящемуся справа, который, так же как и вы, движется по главной дороге (пп. 13.10 и 13.11). Перед легковым автомобилем, находящимся на второстепенной дороге, Вы пользуетесь преимуществом (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только легковому автомобилю.', 'Никому.'])
	},
		{
		id: 296,
		imageName: _elm_lang$core$Maybe$Just('15-16.jpg'),
		question: 'По какой траектории можно продолжить движение направо?',
		hint: 'Вы можете продолжить движение только по траектории Б, так как, повернув по траектории А, Вы не выполните требование двигаться по возможности ближе к правому краю проезжей части (п. 8.6), а продолжать дальнейшее движение по полосе для маршрутных ТС по траектории В запрещено (п. 18.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По А и Б.', 'По Б и В.', 'По любой.'])
	},
		{
		id: 297,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы можете в светлое время суток привлечь внимание водителя обгоняемого автомобиля при движении вне населённого пункта?',
		hint: 'Для привлечения внимания водителя обгоняемого автомобиля вне населённого пункта Вы можете использовать как подачу звукового сигнала, так и кратковременное переключение света фар с ближнего света на дальний (пп. 19.10  и 19.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только звуковым сигналом.', 'Только кратковременным переключением фар с ближнего света на дальний.', 'Любым из перечисленных способов, включая совместную подачу этих сигналов.'])
	},
		{
		id: 298,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие из перечисленных транспортных средств разрешается эксплуатировать без огнетушителя?',
		hint: 'Из всех перечисленных только мотоциклы могут эксплуатироваться без огнетушителя. Всем остальным ТС при отсутствии огнетушителя эксплуатация запрещается (Перечень, п. 7.7).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Автомобили.', 'Автобусы.', 'Все мотоциклы.', 'Только мотоциклы без бокового прицепа.'])
	},
		{
		id: 299,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При торможении двигателем на крутом спуске водитель должен выбирать передачу, исходя из условий:',
		hint: 'Более низкая передача на крутом спуске обеспечит вам большую эффективность торможения двигателем, поэтому выбирать передачу следует исходя из условия: чем круче спуск, тем ниже передача.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Чем круче спуск, тем выше передача.', 'Чем круче спуск, тем ниже передача.', 'Выбор передачи не зависит от крутизны спуска.'])
	},
		{
		id: 300,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'О каких травмах пострадавшего может свидетельствовать поза «лягушки» (ноги согнуты в коленях и разведены, а стопы развёрнуты друг к другу) и какую первую помощью необхоимо при этом оказать?',
		hint: 'Поза «лягушки» свидетельствует о том, что у пострадавшего могут быть переломы шейки бедра, костей таза, перелом позвоночника, повреждение внутренних органов малого таза, внутреннее кровотечение. Эта поза позволяет уберечь сосуды и окружающие ткани от повреждения, поэтому не следует её менять. Ноги пострадавшему не вытягивать, шины не накладывать. Под колени подложить валик из мягкой ткани, а к животу по возможности приложить холод.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['У пострадавшего могут быть ушиб брюшной стенки, перелом лодыжки, перелом костей стопы. При первой помощи вытянуть ноги, наложить шины на обе ноги от голеностопного сустава до подмышки.', 'У пострадавшего могут быть переломы шейки бедра, костей таза, перелом позвоночника, повреждение внутренних органов малого таза, внутреннее кровотечение. Позу ему не менять, ноги не вытягивать, шины не накладывать. При первой помощи подложить под колени валик из мягкой ткани, к животу по возможности приложить холод.', 'У пострадавшего могут быть переломы костей голени и нижней трети бедра. При первой помощи наложить шины только на травмированную ногу от коленного сустава, не вытягивая ногу.'])
	},
		{
		id: 301,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли водителю легкового автомобиля занять место в движущейся организованной колонне?',
		hint: 'Водителю любого ТС запрещается, как пересекать организованные колонны, так и занимать место в них (п. 2.7).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается, если на дороге имеется не более трёх полос для движения.', 'Разрешается, если скорость движущихся в колонне транспортных средств не более 30 км/ч.', 'Не разрешается.'])
	},
		{
		id: 302,
		imageName: _elm_lang$core$Maybe$Just('16-02.jpg'),
		question: 'В какой из дворов Вы можете въехать в данной ситуации?',
		hint: 'Знак 4.1.1 «Движение прямо», установленный в начале участка дороги (за перекрёстком), запрещает повороты налево во дворы и развороты на этом участке, не ограничивая заезды во дворы, расположенные справа.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только во двор налево.', 'Только во двор направо.', 'В любой.', 'Повороты во дворы запрещены.'])
	},
		{
		id: 303,
		imageName: _elm_lang$core$Maybe$Just('16-03.jpg'),
		question: 'Какой знак запрещает дальнейшее движение всех без исключения транспортных средств?',
		hint: 'Дальнейшее движение всех ТС, в том числе и маршрутных, запрещает знак 3.17.2 «Опасность» (знак Б). Такая необходимость может возникнуть в связи с дорожно-транспортным происшествием, аварией, пожаром и т.п. Знак 3.1. «Въезда запрещён» (знак А) запрещает въезда всех ТС, кроме маршрутных. Знак 3.2 «Движение запрещено» (знак В) запрещает движение всех ТС, кроме маршрутных и ТС, принадлежайщих инвалидам I и II групп или перевозящих таких инвалидов и детей инвалидов. Действие знака не распространяется также на ТС, обслуживающие предприятия или граждан в обозначенной зоне или принадлежащие гражданам, проживающим или работающим там.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['А.', 'Б.', 'В.'])
	},
		{
		id: 304,
		imageName: _elm_lang$core$Maybe$Just('16-04.jpg'),
		question: 'О чём информируют Вас эти знаки?',
		hint: 'Знак 6.2 «Рекомендуемая скорость» в сочетании с табличкой 8.16 «Влажное покрытие» указывает Вам скорость, с которой рекомендуется движение на этом участке дороги при влажном покрытии проезжей части, например во время дождя или сразу после его окончания.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['При влажном покрытии рекомендуемая скорость 40 км/ч.', 'При влажном покрытии разрешенная скорость не более 40 км/ч.'])
	},
		{
		id: 305,
		imageName: _elm_lang$core$Maybe$Just('16-05.jpg'),
		question: 'Разрешена ли Вам остановка в указанном месте?',
		hint: 'Сплошная жёлтая линия разметки 1.4 , нанесённая у края проезжей части либо по верху бордюра, обозначает места, где запрещена остановка, и применяется как в сочетании со знаком 3.27 «Остановка запрещена», так и самостоятельно. Поэтому в данном месте остановка Вам запрещена независимо от способа постановки ТС.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена без заезда на тротуар.', 'Запрещена.'])
	},
		{
		id: 306,
		imageName: _elm_lang$core$Maybe$Just('16-06.jpg'),
		question: 'О чём информирует Вас сигнал светофора в виде стрелки красного цвета?',
		hint: 'Сигнал светофора в виде красной стрелки информирует вас о том, что с данной полосы разрешено движение только направо (п. 6.3). Выполнить поворот Вы сможете после включения сигнала в виде зелёной стрелки.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['На этом перекрестке всегда запрещён поворот направо.', 'Поворот направо разрешён, но необходимо уступить дорогу пешеходам.', 'При включении зелёного сигнала светофора движение будет разрешено только направо.'])
	},
		{
		id: 307,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях на буксируемом механическом транспортном средстве должна быть включена аварийная световая сигнализация?',
		hint: 'Во всех случаях, когда осуществляется буксировка, на буксируемом механическом ТС должна быть включена аварийная световая сигнализация (п. 7.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только в условиях недостаточной видимости.', 'Только в тёмное время суток.', 'Во всех случаях, когда осуществляется буксировка.'])
	},
		{
		id: 308,
		imageName: _elm_lang$core$Maybe$Just('16-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Знак 5.7.2 «Выезд на дорогу с односторонним движением» информирует о том, что на пересекаемой проезжей части движение осуществляется не только по правой, но и по левой полосе. Следовательно, Вы можете поворачивать налево по любой из двух траекторий (п. 8.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 309,
		imageName: _elm_lang$core$Maybe$Just('16-09.jpg'),
		question: 'Разрешено ли Вам на перекрёстке произвести разворот указанным способом?',
		hint: 'Развернуться указанным способом нельзя, поскольку на перекрёстках движение задним ходом запрещено (п. 8.12).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если не будут созданы помехи другим участникам движения.', 'Нет.'])
	},
		{
		id: 310,
		imageName: _elm_lang$core$Maybe$Just('16-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение, управляя легковым автомобилем?',
		hint: 'За знаком 3.25 «Конец зоны ограничения максимальной скорости» ваша скорость движения вне населённого пункта на дорогах, не относящихся к автомагистралям, должна быть не более 90 км/ч (п. 10.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['60 км/ч.', '90 км/ч.', '110 км/ч.'])
	},
		{
		id: 311,
		imageName: _elm_lang$core$Maybe$Just('16-11.jpg'),
		question: 'Разрешён ли Вам обгон в данной ситуации?',
		hint: 'На нерегулируемых перекрёстках обгон запрещён при движении по дороге, не являющейся главной (п. 11.5). Поскольку Вы приближаетесь к перекрёстку неравнозначных дорог, двигаясь по главной дороге (знак 2.1 «Главная дорога»), то на данном перекрёстке можно совершить обгон.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, только если скорость грузового автомобиля менее 30 км/ч.', 'Запрещён.'])
	},
		{
		id: 312,
		imageName: _elm_lang$core$Maybe$Just('16-12.jpg'),
		question: 'В каком из указанных мест Вы можете поставить автомобиль на стоянку?',
		hint: 'В данной ситуации вам разрешено поставить автомобиль на стоянку только в позиции В, поскольку п. 12.1 Правил разрешает вам поставить автомобиль на стоянку справа на обочине. Согласно этому пункту Правил, Вы можете поставить автомобиль на стоянку на левой стороне дороги только в населённом пункте. Однако знак 5.26 «Конец населённого пункта» (на синем фоне) информирует о том, что на данной дороге до знака, так и после него не действуют положения Правил, установленные для движения в населённых пунктах.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только В.', 'Б или В.', 'В любом.'])
	},
		{
		id: 313,
		imageName: _elm_lang$core$Maybe$Just('16-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Зеленый сигнал светофора дает право на движение вам и встречным ТС (п. 6.2). При этом Вы должны уступить дорогу только трамваю (п. 13.6). Встречный легковой автомобиль проехать перекресток вместе с трамваем не имеет права (п. 13.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу только трамваю.', 'Уступите дорогу трамваю и автомобилю.'])
	},
		{
		id: 314,
		imageName: _elm_lang$core$Maybe$Just('16-14.jpg'),
		question: 'При въезде на перекрёсток Вы:',
		hint: 'Порядок проезда перекрёстков с круговым движением при отсутствии знаков приоритета точно такой же, как и обычных перекрестков равнозначных дорог. Следовательно, оба ТС, находящихся на перекрестке, должны уступить дорогу, так как вы находитесь справа от них (п. 13.11 ).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу обоим транспортным средствам.', 'Должны уступить дорогу только мотоциклу.', 'Имеете преимущественное право на движение.'])
	},
		{
		id: 315,
		imageName: _elm_lang$core$Maybe$Just('16-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Поскольку Вы подъезжаете к перекрёстку неравнозначных дорог по второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги»), Вы должны уступить дорогу обоим ТС, которые движутся по главной дороге, независимо от направления их дальнейшего движения (п. 13.9). Это правило универсально и действует на перекрёстках любой конфигурации.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только легковому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 316,
		imageName: _elm_lang$core$Maybe$Just('16-16.jpg'),
		question: 'В каком случае на автомагистрали Вам разрешено остановиться правее линии, обозначающей край проезжей части?',
		hint: 'Вы можете остановиться на автомагистрали правее линии 1.2.1 , обозначающей край проезжей части, только в случае вынужденной остановки, т.е. прекращения движения ТС из-за его технической неисправности или опасности, создаваемой перевозимым грузом, состоянием водителя или пассажира (пп. 16.2 и 1.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['В любом случае.', 'Только в светлое время суток.', 'Только в случае вынужденной остановки.'])
	},
		{
		id: 317,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие из перечисленных требований являются обязательными при перевозке детей?',
		hint: 'Раздел 22 Правил запрещает перевозку детей до 12-летнего возраста на заднем сиденье мотоцикла, а также на переднем сиденье легкового автомобиля без использования детсяих удерживающих устройств.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещается перевозка детей до 12-летнего возраста на переднем сиденье легкового автомобиля без использования детских удерживающих устройств.', 'Запрещается перевозка детей до 12-летнего возраста на заднем сиденье мотоцикла.', 'Оба требования являются обязательными.'])
	},
		{
		id: 318,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам запрещается дальнейшее движение на автомобиле с прицепом даже до места ремонта или стоянки?',
		hint: 'При неисправности сцепного устройства вам запрещается дальнейшее движение на автомобиле с прицепом даже до места ремонта или стоянки (п. 2.3.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не установлён опознавательный знак автопоезда.', 'Отсутствуют предусмотренные конструкцией зеркала заднего вида.', 'Неисправно сцепное устройство.'])
	},
		{
		id: 319,
		imageName: _elm_lang$core$Maybe$Just('16-19.jpg'),
		question: 'На каком рисунке водитель выполняет правый поворот по траектории, обеспечивающей наибольшую безопасность движения?',
		hint: 'Безопасная траектория движения при выполнении правого поворота изображена на левом рисунке, так как такая траектория обеспечивает меньшую вероятность смещения автомобиля на полосу встречного движения под действием центробежной силы.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На правом.', 'На левом.'])
	},
		{
		id: 320,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как определить наличие пульса на сонной артерии пострадавшего?',
		hint: 'Пульс на сонных артериях определяется даже при низком давлении, что очень важно для установления признаков жизни пострадавшего. Сонные артерии располагаются вдоль шеи с левой и правой стороны от щитовидного хряща горатни (кадыка). Для определения пульса три пальца руки располагаются с правой или левой стороны шеи на уровне кадыка и острожно прдвигают вглубь шеи между щитовидным хрящом и ближайшей к хрящу мышцей.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Три пальца руки располагают с левой стороны шеи под нижней челюстью.', 'Три пальца руки распологают с правой или левой стороны шеи на уровне щитовидного хряща гортани (кадыка) и осторожно продвигают вглубь шеи между щитовидным хрящом и ближайшей к хрящу мышцей.', 'Большой палец руги располагают на шее под подбородком с одной стороны гртани, а остальные пальцы — с другой стороны.'])
	},
		{
		id: 321,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Являются ли тротуары и обочины частью дороги?',
		hint: 'Дорога включает в себя не только проезжие части, но и тротуары и обочины (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Являются.', 'Являются только обочины.', 'Не являются.'])
	},
		{
		id: 322,
		imageName: _elm_lang$core$Maybe$Just('17-02.jpg'),
		question: 'На каком расстоянии до неровного участка дороги устанавливается этот знак вне населённого пункта?',
		hint: 'Знак 1.16 «Неровная дорога», как и все предупреждающие знаки (треугольной формы) вне населённых пунктов, устанавливается на расстоянии от 150 до 300 м до начала опасного, в данном случае неровного, участка дороги.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['150 — 300 м.', '50 — 100 м.', 'Непосредственно перед неровным участком дороги.'])
	},
		{
		id: 323,
		imageName: _elm_lang$core$Maybe$Just('17-03.jpg'),
		question: 'Требования каких знаков вступают в силу непосредственно в том месте, где они установлены?',
		hint: 'Действие запрещающих знаков начинается непосредственно в месте их установки, кроме случая, когда под знаком размещена табличка 8.1.1 «Расстояние до объекта», на которой указывается расстояние от знака до места, где вводится соответствующее ограничение (знак В).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Б.', 'Только Б.', 'Всех.'])
	},
		{
		id: 324,
		imageName: _elm_lang$core$Maybe$Just('17-04.jpg'),
		question: 'По какой траектории Вам разрешено продолжить движение?',
		hint: 'Знак 6.3.1 «Место для разворота» указывает место, где Вы можете развернуться для движения в обратном направлении. Из других возможных направлений запрещается только поворот налево во двор (траектория Б).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по А или В.', 'По любой.', 'По любой, кроме Б.'])
	},
		{
		id: 325,
		imageName: _elm_lang$core$Maybe$Just('17-05.jpg'),
		question: 'Позволяет ли Вам данная разметка выполнить обгон?',
		hint: 'Поскольку линию разметки 1.11 со стороны сплошной можно пересекать только при завершении обгона или объезда, такой манёвр Вам запрещён независимо от скорости движения трактора.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Позволяет, если скорость трактора менее 30 км/ч.', 'Нет.'])
	},
		{
		id: 326,
		imageName: _elm_lang$core$Maybe$Just('17-06.jpg'),
		question: 'В каком месте Вам следует остановиться?',
		hint: 'Знак 6.16 «Стоп-линия» указывает место, где необходимо остановиться при запрещающем сигнале светофора (п. 6.13). В данном случае — непосредственно перед светофором.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перед светофором.', 'Перед пересекаемой проезжей частью.', 'В любом.'])
	},
		{
		id: 327,
		imageName: _elm_lang$core$Maybe$Just('17-07.jpg'),
		question: 'На каком расстоянии от транспортного средства должен быть выставлен знак аварийной остановки в данной ситуации?',
		hint: 'Знак аварийной остановки устанавливается на расстоянии, обеспечивающем в конкретной обстановке своевременное предупреждение других водителей об опасности. Вне населённых пунктов это расстояние должно быть не менее 30 метров от ТС (п. 7.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не менее 15 м.', 'Не менее 20 м.', 'Не менее 30 м.', 'Не менее 100 м.'])
	},
		{
		id: 328,
		imageName: _elm_lang$core$Maybe$Just('17-08.jpg'),
		question: 'Разрешён ли Вам поворот направо в данной ситуации?',
		hint: 'Зелёная стрелка в дополнительной секции светофора разрешает поворот направо. Однако для выполнения этого манёвра Вы обязаны были заблаговременно занять крайнее правое положение на проезжей части (п. 8.5). С левой полосы, где находится автомобиль, поворот направо запрещён.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 329,
		imageName: _elm_lang$core$Maybe$Just('17-09.jpg'),
		question: 'По какой траектории Вам разрешено выполнить разворот?',
		hint: 'Знак 4.1.1 «Движение прямо» установлен в начале данного участка дороги, и его действие прекращается на следующем за ним перекрёстке. Значит, выполнить разворот можно лишь по траектории А. Развернуться по траектории Б нельзя, так как в этом месте еще действует предписание знака.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на перекрёстке — по траектории А.', 'Только перед перекрёстком — по траектории Б.', 'По любой из предложенных траекторий.', 'Ни по одной из предложенных траекторий.'])
	},
		{
		id: 330,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам двигаться со слишком малой скоростью?',
		hint: 'Правила разрешают двигаться со слишком малой скоростью лишь при условии, что Вы не создадите помех другим ТС (п. 10.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается, если Вы не создадите помех другим транспортным средствам.', 'Запрещается.'])
	},
		{
		id: 331,
		imageName: _elm_lang$core$Maybe$Just('17-11.jpg'),
		question: 'Разрешено ли Вам начать обгон в населённом пункте?',
		hint: 'Обгон запрещён на железнодорожных переездах и ближе чем за 100 м перед ними (п. 11.4). Поскольку железнодорожный переезд находится в населённом пункте, то знак 1.2 «Железнодорожный переезд без шлагбаума» установлен на расстоянии 50 — 100 м до переезда. Следовательно, вам запрещено начинать обгон трактора в данной ситуации (Приложение 1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если обгон будет завершён до переезда.', 'Нет.'])
	},
		{
		id: 332,
		imageName: _elm_lang$core$Maybe$Just('17-12.jpg'),
		question: 'В каком месте на данном участке дороги Вы можете поставить автомобиль на длительную стоянку?',
		hint: 'Стоянка в целях длительного отдыха, ночлега вне населённого пункта разрешается только на предусмотренных для этого площадках или за пределами дороги (п. 12.3). Знак 7.11 «Место отдыха» информирует о том, что такая площадка находится на расстоянии 500 м. Следовательно, Вы можете поставить автомобиль на длительную стоянку только через 500 м.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['В любом месте на обочине.', 'Только через 500 м на специальной площадке.', 'В обоих указанных местах.'])
	},
		{
		id: 333,
		imageName: _elm_lang$core$Maybe$Just('17-13.jpg'),
		question: 'При повороте направо Вы должны уступить дорогу:',
		hint: 'При повороте направо по разрешающему сигналу светофора Вы должны уступить дорогу как велосипедисту, так и пешеходам (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только велосипедисту.', 'Только пешеходам.', 'Пешеходам и велосипедисту.', 'Никому.'])
	},
		{
		id: 334,
		imageName: _elm_lang$core$Maybe$Just('17-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Знак 1.6 «Пересечение равнозначных дорог», даже если пересекаемая дорога грунтовая, свидетельствует о том, что перед вами перекресток равнозначных дорог. Вы обязаны уступить дорогу обоим автомобилям: грузовому автомобилю с жёлтым (оранжевым) маячком, так как он находится от вас справа, и встречному грузовому автомобилю, поскольку он движется прямо (пп. 13.11 и 13.12).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу обоим грузовым автомобилям.', 'Выехав на перекрёсток, уступите дорогу встречному грузовому автомобилю и завершите поворот.'])
	},
		{
		id: 335,
		imageName: _elm_lang$core$Maybe$Just('17-15.jpg'),
		question: 'Эти знаки, установлённые перед перекрёстком, означают, что:',
		hint: 'Сочетание дорожного знака 4.3 «Круговое движение» со знаком 2.4 «Уступите дорогу» или знаком 2.5 «Движение без остановки запрещено» означает, что водители, находящиеся на перекрёстке с круговым движением, пользуются преимуществом перед въезжающими на него транспортными средствами (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Находясь на таком перекрёстке, Вы должны будете уступать дорогу всем ТС, въезжающим на него.', 'Находясь на таком перекрёстке, Вы будете иметь преимущество перед всеми ТС, въезжающими на него.'])
	},
		{
		id: 336,
		imageName: _elm_lang$core$Maybe$Just('17-16.jpg'),
		question: 'Кто из водителей должен уступить дорогу трамваю?',
		hint: 'В этой ситуации водители грузового и легкового автомобилей не должны уступать дорогу, так как трамвай, выезжая из депо, не имеет преимущества (п. 18.1).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Оба водителя.', 'Только водитель грузового автомобиля.', 'Только водитель легкового автомобиля.', 'Никто из водителей.'])
	},
		{
		id: 337,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешено ли Вам перевозить людей в буксируемом легковом автомобиле?',
		hint: 'Вы можете перевозить людей в буксируемом легковом автомобиле, когда буксировка осуществляется на жесткой или гибкой сцепке (п. 20.2). Однако из-за невысокой эксплуатационной надежности неисправного ТС эта перевозка сопряжена с определенной опасностью и должна рассматриваться как вынужденная и нежелательная. При буксировке методом частичной погрузки нахождение людей в салоне легкового автомобиля запрещено.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только при буксировке на гибкой или жесткой сцепке.', 'Запрещено.'])
	},
		{
		id: 338,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что следует сделать водителю, чтобы предотвратить возникновение заноса при проезде крутого поворота?',
		hint: 'Занос автомобиля при проезде крутого поворота возникает под действием центробежной силы, которая возрастает с увеличением скорости движения. Поэтому для предотвращения возможного заноса водитель должен с учетом крутизны поворота заблаговременно снизить скорость, при необходимости включить пониженную передачу и проехать поворот, не прибегая к резкому увеличению скорости и торможению. Прохождение поворота с выключенным сцеплением может привести к потере контроля над управлением автомобилем.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перед поворотом снизить скорость и выжать педаль сцепления, чтобы дать возможность автомобилю двигаться накатом на повороте.', 'Перед поворотом снизить скорость, при необходимости включить пониженную передачу, а при проезде поворота резко не увеличивать скорость и не тормозить.', 'Допускается любое из перечисленных действий.'])
	},
		{
		id: 339,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как изменяется длина тормозного пути легкового автомобиля при движении с прицепом, не имеющим тормозной системы?',
		hint: 'При подсоединении прицепа, не имеющего своей тормозной системы, тормозной путь автомобиля увеличивается, так как увеличивается масса сцеплённых ТС.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уменьшается, так как прицеп оказывает дополнительное сопротивление движению.', 'Увеличивается.', 'Не изменяется.'])
	},
		{
		id: 340,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В тёмное время суток и в пасмурную погоду скорость встречного автомобиля воспринимается:',
		hint: 'В тёмное время суток и в пасмурную погоду скорость встречного автомобиля воспринимается ниже, чем в действительности, что увеличивает опасность столкновения при встречном разъезде, обгоне и объезде.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Ниже, чем в действительности.', 'Выше, чем в действительности.', 'Восприятие скорости не меняется.'])
	},
		{
		id: 341,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает термин «Обгон»?',
		hint: 'Под обгоном понимается манёвр опережения одного или нескольких движущихся ТС, связанный с выездом из занимаемой полосы на полосу, предназначенную для встречного движения и последующим возвращением на ранее занимаемую полосу (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Опережение одного или нескольких движущихся транспортных средств, связанное с выездом из занимаемой полосы.', 'Опережение одного или нескольких движущихся транспортных средств, связанное с выездом на полосу (сторону проезжей части), предназначенную для встречного движения, и последующим возвращением на ранее занимаемую полосу (сторону проезжей части).', 'Любое опережение одного или нескольких транспортных средств.'])
	},
		{
		id: 342,
		imageName: _elm_lang$core$Maybe$Just('18-02.jpg'),
		question: 'Этот дорожный знак предупреждает Вас:',
		hint: 'Предупреждающие знаки информируют о приближении к опасному участку дороги, движение по которому требует принятия соответствующих мер. Иными словами, в зависимости от характера опасности, скорости движения, ширины проезжей части и состояния ее покрытия и т.п. водитель решает, какие конкретные меры предосторожности необходимо принять. В данном случае из-под колёс автомобилей возможен выброс гравия или щебня (знак 1.18 «Выброс гравия»), поэтому для снижения вероятности и тяжести повреждения автомобиля летящими камнями Вам необходимо снизить скорость и по возможности увеличить дистанцию и боковой интервал.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['О приближении к скользкому участку дороги.', 'О приближении к мокрому и загрязненному участку дороги.', 'О приближении к участку дороги, где возможен выброс щебня из-под колес.'])
	},
		{
		id: 343,
		imageName: _elm_lang$core$Maybe$Just('18-03.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте по чётным числам месяца?',
		hint: 'Зона действия знака 3.30 «Стоянка запрещена по чётным числам месяца» распространяется от места его установки до ближайшего перекрёстка. Перед знаком Вы можете поставить автомобиль на стоянку в любой день месяца.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только после 19 часов.', 'Запрещено.'])
	},
		{
		id: 344,
		imageName: _elm_lang$core$Maybe$Just('18-04.jpg'),
		question: 'Какие знаки информируют Вас, что на данной дороге действуют требования Правил, устанавливающие порядок движения в населённых пунктах?',
		hint: 'Все три знака: 5.23.1 (А) , 5.23.2 (Б), 5.25 (В) имеют одинаковое название — «Начало населённого пункта». Но только знаки А и Б применяются для обозначения населённого пункта, на всей территории которого действуют требования Правил, устанавливающих порядок движения в населённых пунктах. Знак же В устанавливается в начале населённого пункта, в котором на данной дороге не действуют эти требования Правил (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только А и Б.', 'Все.'])
	},
		{
		id: 345,
		imageName: _elm_lang$core$Maybe$Just('18-05.jpg'),
		question: 'В данной ситуации Вы должны:',
		hint: 'Разметка 1.12 (стоп-линия) указывает место, где Вы должны остановиться, выполняя требование знака 2.5 «Движение без остановки запрещено» (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановиться у знака.', 'Остановиться у стоп-линии.', 'При отсутствии других транспортных средств проехать перекресток без остановки.'])
	},
		{
		id: 346,
		imageName: _elm_lang$core$Maybe$Just('18-06.jpg'),
		question: 'В каких направлениях Вам разрешено движение?',
		hint: 'Когда регулировщик обращен к Вам левым боком, правая рука вытянута вперед, движение разрешается во всех направлениях (п. 6.10). Однако, двигаясь по левой полосе, Вы можете продолжить движение только прямо, налево и в обратном направлении (п. 8.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо и налево.', 'Только прямо, налево и в обратном направлении.', 'В любом.'])
	},
		{
		id: 347,
		imageName: _elm_lang$core$Maybe$Just('18-07.jpg'),
		question: 'Вы намерены остановиться слева у тротуара. Следует ли в данной ситуации включать указатели поворота?',
		hint: 'Перед перестроением и остановкой водитель обязан подавать сигналы световыми указателями поворота соответствующего направления. В данной ситуации Вы решили остановиться слева, а значит, должны включить левый указатель поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'По Вашему усмотрению.'])
	},
		{
		id: 348,
		imageName: _elm_lang$core$Maybe$Just('18-08.jpg'),
		question: 'По какой траектории Вы можете продолжить движение?',
		hint: 'На данном перекрёстке установлён знак 5.7.1 «Выезд на дорогу с односторонним движением», который не запрещает движение прямо и направо. При повороте Вы должны двигаться по возможности ближе к правому краю проезжей части. Следовательно, движение на перекрёстке можно продолжить только по траекториям А и В (п. 8.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['По любой.', 'Только по А.', 'Только по А или В.'])
	},
		{
		id: 349,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Для обеспечения безопасности при выезде задним ходом с места стоянки, имеющего ограниченную видимость, необходимо:',
		hint: 'При выезде задним ходом с места стоянки, имеющего ограниченную видимость, необходимо прибегнуть к помощи других лиц, которые помогли бы водителю обеспечить безопасность движения (п. 8.12).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Подать звуковой сигнал.', 'Включить аварийную сигнализацию.', 'Прибегнуть к помощи других лиц.'])
	},
		{
		id: 350,
		imageName: _elm_lang$core$Maybe$Just('18-10.jpg'),
		question: 'Можете ли Вы продолжить движение по средней полосе после обгона?',
		hint: 'Вы не имеете права продолжать движение по средней полосе после обгона, так как нарушите п. 9.3 Правил, разрешающий использовать среднюю полосу только для выполнения обгонов, объездов, поворотов налево и разворотов.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 351,
		imageName: _elm_lang$core$Maybe$Just('18-11.jpg'),
		question: 'Имеет ли право водитель легкового автомобиля начать обгон?',
		hint: 'Водитель легкового автомобиля не может начать обгон, так как следующий за ним водитель грузового автомобиля уже включил левые указатели поворота и приступил к обгону (п. 11.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 352,
		imageName: _elm_lang$core$Maybe$Just('18-12.jpg'),
		question: 'Разрешено ли Вам остановиться на легковом автомобиле в указанном месте?',
		hint: 'Поскольку расстояние между автомобилем и сплошной линией разметки (с учетом габаритов автомобиля) менее 3 м, Вы не можете остановиться в данном месте (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 353,
		imageName: _elm_lang$core$Maybe$Just('18-13.jpg'),
		question: 'Вы намерены повернуть направо. Следует ли уступить дорогу легковому автомобилю?',
		hint: 'Данный перекрёсток регулируемый и очередность движения на нем определяется не знаками приоритета, а сигналами светофора (пп. 6.15 и 13.3). Поворачивая направо, Вы имеете преимущество перед встречным легковым автомобилем, поворачивающим налево (п. 13.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 354,
		imageName: _elm_lang$core$Maybe$Just('18-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Находящийся слева легковой автомобиль должен уступить вам дорогу (п. 13.11) и поэтому Вы проедете перекрёсток равнозначных дорог первым. При этом конфигурация перекрёстка не влияет на очередность движения.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу автомобилю.'])
	},
		{
		id: 355,
		imageName: _elm_lang$core$Maybe$Just('18-15.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Должны ли Вы уступить дорогу встречному автомобилю с включенным проблесковым маячком?',
		hint: 'При проезде перекрёстка неравнозначных дорог по направлению главной дороги (знак 2.1 «Главная дорога») в прямом направлении Вы пользуетесь преимуществом перед встречным автомобилем, поворачивающим налево (п. 13.12), поскольку проблесковый маячок оранжевого или жёлтого цвета преимущества в движении не дает (п. 3.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 356,
		imageName: _elm_lang$core$Maybe$Just('18-16.jpg'),
		question: 'Обязаны ли Вы уступить дорогу маршрутному такси, отъезжающему от тротуара в месте, где нет обозначенной остановки?',
		hint: 'Положение Правил, обязывающее Вас уступить дорогу маршрутным ТС в населённых пунктах, распространяется только на автобусы и троллейбусы, начинающие движение от обозначенной остановки (п. 18.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 357,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам буксировать автомобиль с недействующей тормозной системой, если фактическая масса этого автомобиля превышает половину фактической массы Вашего автомобиля?',
		hint: 'Правила запрещают буксировать автомобиль с неисправной тормозной системой, если его фактическая масса превышает половину фактической массы Вашего автомобиля (п. 20.4). В этом случае не могут быть обеспечены приемлемые тормозные характеристики состава ТС.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только при скорости буксировки не более 30 км/ч.', 'Не разрешается.'])
	},
		{
		id: 358,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам разрешается эксплуатация автомобиля?',
		hint: 'Из всех перечисленных случаев только установка на задней оси автомобиля шин с восстановленным протектором не является причиной запрещения эксплуатации Вашего автомобиля (Перечень, п. 5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Шины имеют отслоения протектора или боковины.', 'Шины имеют порезы, обнажающие корд.', 'На задней оси автомобиля установлены шины с восстановленным рисунком протектора.'])
	},
		{
		id: 359,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как водитель должен воздействовать на педаль управления подачей топлива при возникновении заноса, вызванного резким ускорением движения?',
		hint: 'Занос на скользкой дороге может возникнуть при резком ускорении движения из-за пробуксовки ведущих колес автомобиля. В этом случае необходимо устранить причину заноса, т.е. уменьшить нажатие на педаль управления подачей топлива.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Усилить нажатие на педаль.', 'Не менять положение педали.', 'Уменьшить нажатие на педаль.'])
	},
		{
		id: 360,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях водители привлекаются к уголовной ответственности за нарушения Правил?',
		hint: 'В соответствии со ст. 264 УК РФ уголовная ответственность предусмотрена за нарушение водителем ПДД, повлекшее по неосторожности смерть человека или причинение тяжкого вреда здоровью человека (причинение вреда здоровью человека, или повлекшего за собой потерю зрения, речи, слуха либо какого-либо органа или утрату органом его функций, прерывание беременности, психическое расстройство, заболевание наркоманией либо токсикоманией, или выразившегося в неизгладимом обезображивании лица, или вызвавшего значительную стойкую утрату общей трудоспособности не менее чем на одну треть либо полную утрату профессиональной трудоспособности).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при причинении смерти человеку.', 'При причинении смерти человеку или тяжкого вреда здоровью человека.', 'При наличии пострадавшего (вне зависимости от степени тяжести полученных им повреждений) или причинении крупного материального ущерба.'])
	},
		{
		id: 361,
		imageName: _elm_lang$core$Maybe$Just('19-01.jpg'),
		question: 'Сколько проезжих частей имеет данная дорога?',
		hint: 'Данная дорога имеет две проезжие части, отделённые друг от друга разделительной полосой (п. 1.2), каждая из которых имеет две полосы для движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одну.', 'Две.', 'Четыре.'])
	},
		{
		id: 362,
		imageName: _elm_lang$core$Maybe$Just('19-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на легковом автомобиле?',
		hint: 'Табличка 8.4.1 «Вид транспортного средства» с изображением грузового автомобиля распространяет действие предписывающего знака 4.1.1 «Движение прямо» только на грузовые автомобили с разрешённой максимальной массой более 3,5 т. Таким образом, Вы можете проехать перекрёсток в любом направлении.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только налево или направо.', 'В любых.'])
	},
		{
		id: 363,
		imageName: _elm_lang$core$Maybe$Just('19-03.jpg'),
		question: 'Разрешается ли Вам осуществить посадку (высадку) пассажиров либо загрузку (разгрузку) транспортного средства в зоне действия этого знака?',
		hint: 'Перед вами знак 3.28 «Стоянка запрещена», который не запрещает остановку, т.е. преднамеренное прекращение движения на время до 5 мин, а при посадке (высадке) пассажиров или загрузке (разгрузке) ТС и на большее время, если это необходимо (п. 1.2, термин «Остановка»).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если это займёт не более 5 минут.', 'Да, даже если остановка продлится более 5 минут.', 'Нет.'])
	},
		{
		id: 364,
		imageName: _elm_lang$core$Maybe$Just('19-04.jpg'),
		question: 'Какие знаки разрешают выполнить разворот?',
		hint: 'Знаки А и Б (5.7.1 и 5.7.2 «Выезд на дорогу с односторонним движением») и В и Г (5.13.1 , 5.13.2 «Выезд на дорогу с полосой для маршрутных транспортных средств») не запрещают разворот на перекрёстках таких дорог.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только Б и В.', 'Все.'])
	},
		{
		id: 365,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Чем Вы должны руководствоваться, если значения дорожных знаков и линий горизонтальной разметки противоречат друг другу?',
		hint: 'Водители должны руководствоваться требованиями дорожных знаков, в том числе и временных, размещённых на переносной стойке, если они противоречат требованиям линий горизонтальной разметки (Приложение 2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Требованиями линий разметки.', 'Требованиями дорожных знаков.', 'Правила эту ситуацию не регламентируют.'])
	},
		{
		id: 366,
		imageName: _elm_lang$core$Maybe$Just('19-06.jpg'),
		question: 'Как Вы должны поступить в данной ситуации?',
		hint: 'Правила предписывают Вам при приближении к стоящему ТС с включенным проблесковым маячком синего цвета снизить скорость и быть готовым при необходимости остановиться (п. 3.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Снизить скорость и быть готовым в случае необходимости незамедлительно остановиться.', 'Продолжить движение, не изменяя скорости.', 'Остановиться около автомобиля ДПС и продолжить движение только после разрешения сотрудника полиции.'])
	},
		{
		id: 367,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Когда должна быть прекращена подача сигнала указателями поворота?',
		hint: 'Подача сигнала указателями поворота, должна быть прекращена сразу же после завершения манёвра, чтобы не ввести в заблуждение других участников движения относительно дальнейшего направления Вашего движения (п. 8.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Непосредственно перед началом манёвра.', 'Сразу же после завершения манёвра.', 'В процессе выполнения манёвра.'])
	},
		{
		id: 368,
		imageName: _elm_lang$core$Maybe$Just('19-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Перед поворотом налево или разворотом Вы обязаны заблаговременно занять крайнее левое положение на проезжей части. Но на данном перекрёстке слева имеются трамвайные пути, расположенные на одном уровне с проезжей частью, и отсутствуют знаки 5.15.1 «Направления движения по полосам» или 5.15.2 «Направление движения по полосе». В этом случае поворот налево Вы должны выполнить с трамвайных путей попутного направления по траектории А (п. 8.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 369,
		imageName: _elm_lang$core$Maybe$Just('19-09.jpg'),
		question: 'Вы случайно проехали нужный въезд во двор. Разрешено ли Вам в этой ситуации использовать задний ход, чтобы затем повернуть направо?',
		hint: 'Знак 5.5 «Дорога с односторонним движением» не запрещает движение задним ходом. В данной ситуации использовать задний ход, чтобы потом повернуть направо во двор, разрешено (п. 8.12).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 370,
		imageName: _elm_lang$core$Maybe$Just('19-10.jpg'),
		question: 'С какой скоростью Вы можете продолжить движение в населенном пункте по левой полосе?',
		hint: 'Знак 4.6 «Ограничение минимальной скорости» с табличкой 8.14 «Полоса движения» предписывает двигаться по левой полосе со скоростью не менее 50 км/ч. Однако при этом в населённом пункте Вы не имеете права развивать скорость более 60 км/ч (п. 10.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 50 км/ч.', 'Не более 60 км/ч.', 'Не менее 50 км/ч и не более 60 км/ч.'])
	},
		{
		id: 371,
		imageName: _elm_lang$core$Maybe$Just('19-11.jpg'),
		question: 'В данной ситуации Вам разрешается:',
		hint: 'В данной ситуации Вы можете продолжить движение только после того, как грузовой автомобиль освободит вам полосу, так как движение ТС по обочине запрещено (п. 9.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Объехать грузовой автомобиль справа по обочине.', 'Продолжить движение только после того, как грузовой автомобиль освободит полосу движения.', 'Разрешается любое из перечисленных действий.'])
	},
		{
		id: 372,
		imageName: _elm_lang$core$Maybe$Just('19-12.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'В местах уширения проезжей части можно ставить на стоянку автомобили, как под углом, так и параллельно к краю проезжей части (п. 12.2). Однако при наличии знака 6.4 «Место стоянки» с табличкой 8.6.1 «Способ постановки транспортного средства на стоянку» все автомобили (легковые и грузовые) должны быть поставлены только параллельно краю проезжей части. Следовательно, нарушил правила стоянки водитель автомобиля Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Никто не нарушил.', 'Оба нарушили.'])
	},
		{
		id: 373,
		imageName: _elm_lang$core$Maybe$Just('19-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'При движении в направлении стрелки, включенной в дополнительной секции одновременно с красным сигналом светофора, Вы обязаны уступать дорогу ТС, движущимся с любых других направлений (п. 13.5). Но в данной ситуации, двигаясь по правой полосе, Вы можете продолжить движение, не останавливаясь перед стоп-линией, если не создадите помех движению легкового автомобиля.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановитесь перед стоп-линией.', 'Продолжите движение, не создавая помех легковому автомобилю.'])
	},
		{
		id: 374,
		imageName: _elm_lang$core$Maybe$Just('19-14.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'Вы проедете перекресток равнозначных дорог первым, поскольку справа от вас нет ТС, которым необходимо было бы уступить дорогу (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу только легковому автомобилю.', 'Уступите дорогу легковому автомобилю и мотоциклу.'])
	},
		{
		id: 375,
		imageName: _elm_lang$core$Maybe$Just('19-15.jpg'),
		question: 'При въезде на перекрёсток Вы:',
		hint: 'Такие знаки при въезде на перекрёсток с круговым движением показывают, что приоритет имеют ТС, уже находящиеся на перекрёстке с круговым движением, поэтому Вы должны уступаить дорогу мотоциклу и автомобилю (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу только мотоциклу.', 'Должны уступить дорогу обоим транспортным средствам.', 'Имеете преимущественное право на движение.'])
	},
		{
		id: 376,
		imageName: _elm_lang$core$Maybe$Just('19-16.jpg'),
		question: 'Разрешён ли такой манёвр?',
		hint: 'Водитель грузового автомобиля остановился в соответствии с требованиями Правил — не ближе 5 м от шлагбаума (п. 15.4), а объезд стоящих перед переездом ТС с выездом на полосу встречного движения запрещён (п. 15.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если нет встречных транспортных средств.', 'Да, если между шлагбаумом и остановившимся грузовым автомобилем 6 м.', 'Нет.'])
	},
		{
		id: 377,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие световые приборы Вы обязаны использовать при движении в светлое время суток?',
		hint: 'Для лучшего восприятия ТС другими участниками движения Правила предписывают обозначать его в светлое время суток включенным ближним светом фар или дневными ходовыми огнями (п. 19.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Дневные ходовые или габаритные огни.', 'Фары ближнего света или габаритные огни.', 'Фары ближнего света или дневные ходовые огни.'])
	},
		{
		id: 378,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях следует увеличить боковой интервал?',
		hint: 'Чем выше скорость при встречном разъезде транспортных средств, тем больше должен быть боковой интервал между ними для исключения возможного столкновения при неожиданном отклонении от траектории движения. При разъезде с длинномерным транспортным средством необходимо иметь запас бокового интервала во избежание столкновения с прицепом (полуприцепом), который смещается к центру поворота при выполнении различных манёвров. При движении по мокрому, скользкому или неровному покрытию увеличение бокового интервала требуется во избежание столкновения, возникающего при потере устойчивости транспортного средства в неблагоприятных дорожных условиях. Таким образом, во всех перечисленных случаях водителю следует увеличить боковой интервал.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['При встречном разъезде на большой скорости.', 'При разъезде с длинномерным транспортным средством.', 'При движении по мокрому, скользкому или неровному покрытию.', 'Во всех перечисленных случаях.'])
	},
		{
		id: 379,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Для прекращения заноса, вызванного торможением, водитель в первую очередь должен:',
		hint: 'Занос на скользкой дороге может возникнуть при торможении из-за блокировки задних колес автомобиля. В этом случае необходимо в первую очередь устранить причину заноса, т.е. прекратить начатое торможение. В дальнейшем поворотом рулевого колеса в сторону заноса можно выровнять траекторию движения автомобиля.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Прекратить начатое торможение.', 'Выключить сцепление.', 'Продолжить торможение, не изменяя усилия на педаль тормоза.'])
	},
		{
		id: 380,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что необходимо сделать для извлечения инородного тела, попавшего в дыхательные пути пострадавшего?',
		hint: 'Признаки попадания инородного тела: шумное и затруднённое дыхание, невозможность говорить. Для его удаления необходимо ударить несколько раз ладонью по спине пострадавшего. При отрицательном результате встать сзади, обхватить его обеими руками на уровне нижних рёбер, сцепить свои руки в кулак, одвновременно сдавить его рёбра и резко надавить на область живота кулаком в направелении внутрь и кверху.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уложить пострадавшего на своё колено лицом вниз и ударить кулаком по спине несколько раз.', 'Вызвать рвоту, надавив на корень языка. При отрицательном результате ударить рером ладони по спине пострадавшего либо встать спереди и сильно надавить кулаком на его живот.', 'Ударить несколько раз ладнью по спине пострадавшего. При отрицательном результате встать сзади, обхватить его обеими руками на уровне нижних рёбер, сцепить свои руки в кулак, одновременно сдавить его рёбра надавить на область живаота кулаком в направлении внуть и кверху.'])
	},
		{
		id: 381,
		imageName: _elm_lang$core$Maybe$Just('20-01.jpg'),
		question: 'На каких рисунках показана главная дорога?',
		hint: 'Главная дорога показана на нижнем и правом верхнем рисунках, о чем свидетельствуют установленные на этих дорогах знаки 2.1 «Главная дорога» и 2.3.3 «Примыкание второстепенной дороги» (п. 1.2). Знак 2.7 «Преимущество перед встречным движением», показанный на левом верхнем рисунке, информирует водителей только об очередности проезда данного участка дороги.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на правом верхнем.', 'На нижнем и правом верхнем.', 'На всех.'])
	},
		{
		id: 382,
		imageName: _elm_lang$core$Maybe$Just('20-02.jpg'),
		question: 'Разрешено ли Вам за перекрёстком въехать во двор?',
		hint: 'Знак 4.1.1 «Движение прямо» в данном случае действует только на перекресток, перед которым он установлен, и не ограничивает манёвры на последующем участке дороги, где Вы можете въехать во двор, расположенный слева.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, только если Вы проживаете в этом доме.'])
	},
		{
		id: 383,
		imageName: _elm_lang$core$Maybe$Just('20-03.jpg'),
		question: 'Разрешена ли Вам остановка за знаком?',
		hint: 'Табличка 8.2.4 «Зона действия» под знаком 3.27 «Остановка запрещена» информирует о том, что Вы находитесь в зоне действия знака 3.27 , установленного ранее, т.е. остановиться нельзя ни до, ни после знака.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена только для посадки или высадки пассажиров.', 'Запрещена.'])
	},
		{
		id: 384,
		imageName: _elm_lang$core$Maybe$Just('20-04.jpg'),
		question: 'Какие знаки запрещают дальнейшее движение без остановки?',
		hint: 'Дальнейшее движение без остановки у таможенного пункта запрещает знак Б (3.17.1 «Таможня»), а у контрольного пункта, например, на карантинном посту, на пункте оплаты проезда по платным дорогам — знак В (3.17.3 «Контроль»). Знак А (7.12 «Пост дорожно-патрульной службы») просто информирует о расположении поста ДПС ГИБДД на дороге, а знак Г (6.16 «Стоп-линия») указывает место, где можно остановиться при запрещающем сигнале светофора.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Г.', 'Только Б и В.', 'Только В и Г.', 'Все.'])
	},
		{
		id: 385,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Чем Вы должны руководствоваться, если нанесённые на проезжей части белые и оранжевые линии разметки противоречат друг другу?',
		hint: 'В этой ситуации водители должны руководствоваться временной разметкой оранжевого цвета, которая применяется при изменении организации движения, например, в связи с производством ремонтных работ на дороге.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Правила эту ситуацию не регламентируют.', 'Необходимо руководствоваться белыми линиями.', 'Необходимо руководствоваться оранжевыми линиями.'])
	},
		{
		id: 386,
		imageName: _elm_lang$core$Maybe$Just('20-06.jpg'),
		question: 'В каких направлениях Вам разрешено движение?',
		hint: 'При этом положении регулировщика (правая рука вытянута вперёд со стороны груди) вам разрешен только поворот направо по направлению А (п. 6.10). Поворот направо во второй проезд по направлению Б запрещён, так как ему предшествует движение прямо, что в этой ситуации запрещено.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'А или Б.', 'В любом.'])
	},
		{
		id: 387,
		imageName: _elm_lang$core$Maybe$Just('20-07.jpg'),
		question: 'Какой знак используется для обозначения автомобиля при вынужденной остановке в местах, где с учетом условий видимости транспортное средство не может быть своевременно замечено другими водителями?',
		hint: 'Для обозначения автомобиля при вынужденной остановке в местах, где с учетом условий видимости он не может быть своевременно замечен другими водителями, должен быть незамедлительно выставлен знак аварийной остановки - А (п. 7.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['А.', 'Б.', 'В.'])
	},
		{
		id: 388,
		imageName: _elm_lang$core$Maybe$Just('20-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Знак 5.15.1 «Направления движения по полосам» разрешает на данном перекрёстке поворот налево из средней и левой полос. Следовательно, Вы можете повернуть налево, либо заранее перестроившись на крайнюю левую полосу, либо продолжив движение по средней полосе (п. 8.5), т.е. поворот разрешён по любой из указанных траекторий.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 389,
		imageName: _elm_lang$core$Maybe$Just('20-09.jpg'),
		question: 'Разрешается ли Вам на узкой проезжей части произвести разворот с заездом во двор?',
		hint: 'На перекрёстке движение задним ходом запрещено (п. 8.12). Однако въезды во дворы перекрёстками не являются (п. 1.2). Значит, использовать для разворота въезд во двор с заездом в него задним ходом разрешается, если не будут созданы помехи другим участникам движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если не будут созданы помехи другим участникам движения.', 'Нет.'])
	},
		{
		id: 390,
		imageName: _elm_lang$core$Maybe$Just('20-10.jpg'),
		question: 'Укажите расстояние, под которым в Правилах подразумевается дистанция:',
		hint: 'Под дистанцией Правила подразумевают расстояние (Б) до движущегося впереди ТС (пп. 9.10 и 9.11). Расстояние между попутным и встречным автомобилями (А и В) называется боковым интервалом.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только В.', 'А и В.'])
	},
		{
		id: 391,
		imageName: _elm_lang$core$Maybe$Just('20-11.jpg'),
		question: 'Можете ли Вы начать обгон грузового автомобиля в данной ситуации?',
		hint: 'Несмотря на наличие знака 3.21 «Конец зоны запрещения обгона», вы, двигаясь за двумя грузовыми автомобилями, не имеете права начать обгон, так как на движущемся впереди грузовом автомобиле включены левые световые указатели поворота, и он приступил к обгону другого автомобиля (п. 11.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 392,
		imageName: _elm_lang$core$Maybe$Just('20-12.jpg'),
		question: 'Разрешено ли водителю поставить на стоянку грузовой автомобиль с разрешённой максимальной массой менее 3,5 т указанным на табличке способом?',
		hint: 'Знак 6.4 «Место стоянки» с табличкой 8.6.3 «Способ постановки транспортного средства на стоянку», а так же п. 12.2 Правил запрещают использовать для стоянки край тротуара, граничащий с проезжей частью, любым грузовым автомобилям.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 393,
		imageName: _elm_lang$core$Maybe$Just('20-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Зеленый сигнал светофора дает вам право двигаться налево (п. 6.2). При этом Вы должны выехать в намеченном направлении независимо от сигнала светофора на выезде с перекрёстка (п. 13.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выполните манёвр без остановки на перекрестке.', 'Повернете налево, остановитесь в разрыве разделительной полосы и, после включения разрешающего сигнала светофора на выходе с перекрёстка, завершите манёвр.'])
	},
		{
		id: 394,
		imageName: _elm_lang$core$Maybe$Just('20-14.jpg'),
		question: 'Поворачивая направо, Вы должны:',
		hint: 'Вы проезжаете перекрёсток равнозначных дорог первым, поскольку легковой автомобиль находится слева от вас и его водитель должен уступить дорогу (п. 13.11). При этом конфигурация перекрёстка не имеет значения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу автомобилю.', 'Проехать перекресток первым.'])
	},
		{
		id: 395,
		imageName: _elm_lang$core$Maybe$Just('20-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'В данном случае вы должны уступить дорогу мотоциклу и автобусу, потому что они находятся на главной дороге (знаки 2.4 «Уступи дорогу» и 8.13 «Направление главной дороги»), и находящемуся, также как и вы, на второстепенной дороге легковому автомобилю, поскольку он является для вас «помехой справа» и разъезжаетесь вы с ним по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11 ).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу и мотоциклу.', 'Только легковому автомобилю и автобусу.', 'Всем транспортным средствам.'])
	},
		{
		id: 396,
		imageName: _elm_lang$core$Maybe$Just('20-16.jpg'),
		question: 'В каком месте Вы должны остановиться в данной ситуации?',
		hint: 'В данной ситуации Правила предписывают Вам, пропуская поезд, остановиться у знака 2.5 «Движение без остановки запрещено» (п. 15.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['У знака «Движение без остановки запрещено».', 'У знака «Однопутная железная дорога».', 'За 5 м до первого рельса.', 'В любом месте по своему усмотрению.'])
	},
		{
		id: 397,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Противотуманные фары и задние противотуманные фонари могут быть включены одновременно:',
		hint: 'Совместно противотуманные фары и задние противотуманные фонари могут быть включены не только в условиях тумана, но и в других условиях недостаточной видимости (дождь, снег), когда видимость дороги менее 300 м (пп. 1.2 , 19.4 и 19.7). В условиях ограниченной видимости противотуманные фонари не используются, так как они будут слепить следующих за Вами водителей.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только в тумане.', 'В условиях недостаточной видимости.', 'В условиях ограниченной видимости.'])
	},
		{
		id: 398,
		imageName: _elm_lang$core$Maybe$Just('20-18.jpg'),
		question: 'Что Вам следует иметь в виду, увидев впереди пешехода, переходящего проезжую часть?',
		hint: 'Пешеходы являются полноправными участниками дорожного движения. Однако среди них есть дети, подростки, пожилые люди, инвалиды, лица, имеющие плохое зрение или слух, то есть люди, которые могут совершать ошибки при оценке дорожных ситуаций. Из-за таких ошибок поведение пешеходов может быть неадекватным сложившейся обстановке. Пешеход, переходящий проезжую часть, может резко уменьшить или увеличить скорость своего перемещения, если сочтёт, что неправильно оценил свои возможности или скрорость приближающегося ТС. Он может также внезапно остановиться или, уже перейдя вашу полосу движения, отступить назад, опасаясь ТС, приближающегося с другого направления. Все это необходимо учитывать, приближаясь к пешеходам, переходящим дорогу, как по пешеходным переходам, так и через проезжую часть.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Что он может перейти дорогу, не меняя своего темпа движения, или ускориться.', 'Что он может внезапно остановиться или отступить назад.', 'Следует иметь в виду все вышеперечисленное.'])
	},
		{
		id: 399,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как правильно произвести экстренное торможение, если Ваш автомобиль оборудован антиблокировочной тормозной системой?',
		hint: 'При наличии на автомобиле антиблокировочной тормозной системы, контроль над сцеплением шины с покрытием проезжей части возложен на эту систему. Поэтому при экстренном торможении следует нажать на педаль тормоза до отказа и удерживать ее до полной остановки.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Тормозить прерывистым нажатием на педаль тормоза, не допуская блокировки колес.', 'Нажать на педаль тормоза до упора и удерживать ее до полной остановки.'])
	},
		{
		id: 400,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При наличии каких обстоятельств оформление документов о дорожно-транспортном происшествии (ДТП) может быть осуществлено без участия уполномоченных на то сотрудников полиции?',
		hint: 'В соответствии с п. 8 ст. 11 Федерального закона «Об обязательном страховании гражданской ответственности владельцев транспортных средств» оформление документов о ДТП может быть осуществленно без участия уполномоченных на то сотрудников полиции, если в результате ДТП с участием двух ТС, гражданская ответственность владельцев которых застрахована в соответствии с законодательством об обязательном страховании гражданской ответственности владельцев ТС, вред причинён только имуществу и обстоятельства причинения вреда в связи с повредждением имущества в результате ДТП, характер и перчень видимых повреждений не вызывают разногласий участников ДТП (п. 2.6 ПДД).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Если ДТП произошло с участием двух транспортных средств, гражданская ответственность владельцев которых застрахована.', 'Если в результате ДТП вред причинён только имуществу и обстоятельства причинения вреда в связи с повреждением имущества не вызывают разногласий участников ДТП.', 'Если характер и перечень видимых повреждений транспортных средств, полученных в результате ДТП, не вызывают разногласий участников ДТП.', 'При наличии одновременно всех перечисленных обстоятельств.'])
	},
		{
		id: 401,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли водителю пользоваться телефоном во время движения?',
		hint: 'Во время движения водитель может пользоваться телефоном независимо от скорости движения ТС, но только при наличии технического устройства, позволяющего вести переговоры без использования рук (п. 2.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только при использовании технического устройства, позволяющего вести переговоры без использования рук.', 'Разрешается только при движении со скоростью менее 40 км/ч.', 'Запрещается.'])
	},
		{
		id: 402,
		imageName: _elm_lang$core$Maybe$Just('21-02.jpg'),
		question: 'Этот знак предупреждает о приближении к перекрёстку, на котором Вы:',
		hint: 'Знак 1.6 «Пересечение равнозначных дорог», устанавливаемый в населённых пунктах за 50 — 100 м до опасного участка, показывает, что за крутым поворотом находится перекрёсток, на котором Вы должны уступить дорогу ТС, приближающимся справа (п. 13.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Имеете право преимущественного проезда.', 'Должны уступить дорогу всем транспортным средствам, движущимся по пересекаемой дороге.', 'Должны уступить дорогу только транспортным средствам, приближающимся справа.'])
	},
		{
		id: 403,
		imageName: _elm_lang$core$Maybe$Just('21-03.jpg'),
		question: 'В каком направлении можно продолжить буксировку?',
		hint: 'Знак 3.7 «Движение с прицепом запрещено» запрещает в направлении Б не только движение грузовых автомобилей и тракторов с прицепом, но и буксировку механических ТС, к которым относятся мотоциклы. При этом не имеет значения, какое ТС является буксирующим.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'В обоих.'])
	},
		{
		id: 404,
		imageName: _elm_lang$core$Maybe$Just('21-04.jpg'),
		question: 'Какой знак информирует о начале дороги с реверсивным движением?',
		hint: 'О начале участка дороги, где на одной или нескольких полосах направление движения может изменяться на противоположное, информирует знак В (5.8 «Реверсивное движение»). Знак А (2.7 «Преимущество перед встречным движением») предоставляет приоритет на узких участках дорог перед встречным движением, а знак Б (5.11 «Дорога с полосой для маршрутных транспортных средств») информирует о направлениях движения общего потока ТС и маршрутных ТС, движущихся по обособленной полосе навстречу.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['А.', 'Б.', 'В.'])
	},
		{
		id: 405,
		imageName: _elm_lang$core$Maybe$Just('21-05.jpg'),
		question: 'Данная вертикальная разметка:',
		hint: 'Данная разметка 2.7 применяется для обозначения возвышающихся островков безопасности и бордюров на опасных участках дорог.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещает стоянку транспортных средств.', 'Запрещает остановку транспортных средств.', 'Обозначает бордюры на опасных участках дорог.'])
	},
		{
		id: 406,
		imageName: _elm_lang$core$Maybe$Just('21-06.jpg'),
		question: 'Разрешено ли Вам за перекрёстком въехать на полосу с реверсивным движением?',
		hint: 'Зеленый сигнал обычного светофора разрешает движение через перекрёсток. Выключенные сигналы реверсивного светофора означают, что въезд на полосу, обозначенную разметкой 1.9, Вам запрещён и движение за перекрёстком возможно только по правой полосе (п. 6.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 407,
		imageName: _elm_lang$core$Maybe$Just('21-07.jpg'),
		question: 'Такой сигнал рукой, подаваемый водителем легкового автомобиля, информирует Вас:',
		hint: 'При отсутствии или неисправности световых указателей поворота их заменяют подачей сигнала рукой. Вытянутая в сторону левая рука соответствует сигналу левого поворота (разворота) (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении повернуть налево или выполнить разворот.', 'О его намерении остановиться и уступить дорогу грузовому автомобилю.', 'Об опасности, которая может возникнуть для Вас на перекрёстке.'])
	},
		{
		id: 408,
		imageName: _elm_lang$core$Maybe$Just('21-08.jpg'),
		question: 'Может ли водитель легкового автомобиля в данной ситуации начать движение?',
		hint: 'Поскольку грузовой автомобиль движется по соседней полосе, водитель легкового автомобиля может начать движение от тротуара, но только если не создает ему помех (п. 8.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если он не создаст помех грузовому автомобилю.', 'Нет.'])
	},
		{
		id: 409,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких местах водителю разрешается движение задним ходом?',
		hint: 'Движение ТС задним ходом запрещено на перекрёстках, пешеходных переходах, в местах остановок маршрутных ТС (п. 8.12). На дорогах с односторонним движением двигаться задним ходом разрешается.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На перекрёстках.', 'На дорогах с односторонним движением.', 'На пешеходных переходах.', 'В местах остановок маршрутных транспортных средств.'])
	},
		{
		id: 410,
		imageName: _elm_lang$core$Maybe$Just('21-10.jpg'),
		question: 'Разрешается ли Вам, управляя легковым автомобилем, продолжить движение по трамвайным путям попутного направления?',
		hint: 'Правила (п. 9.6) разрешают движение: по расположенным слева трамвайным путям попутного направления только при отсутствии знаков 5.15.1 «Направления движения по полосам» или 5.15.2 «Направление движения по полосе». Знак 5.15.2 запрещает использовать для движения трамвайные пути и предписывает для движения прямо, поворота налево и разворота использовать левую полосу проезжей части (п. 8.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только для поворота налево и разворота.', 'Запрещается.'])
	},
		{
		id: 411,
		imageName: _elm_lang$core$Maybe$Just('21-11.jpg'),
		question: 'В каком месте Вы можете начать обгон?',
		hint: 'Обгон запрещён на железнодорожных переездах и ближе чем за 100 м перед ними (п. 11.4), поэтому Вы можете его начать сразу же за переездом.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На переезде.', 'Непосредственно за переездом.', 'Только на расстоянии 100 м за переездом.'])
	},
		{
		id: 412,
		imageName: _elm_lang$core$Maybe$Just('21-12.jpg'),
		question: 'Можете ли Вы поставить автомобиль на стоянку в указанном месте?',
		hint: 'Остановка, а тем более стоянка в указанном месте запрещена, так как в данной ситуации Вы сделали невозможным выезд автомобиля из двора (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 413,
		imageName: _elm_lang$core$Maybe$Just('21-13.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Данный перекрёсток — регулируемый, и очередность движения на нём определяется не знаками приоритета, а сигналами светофора (пп. 6.15 и 13.3). Однако, несмотря на разрешающий сигнал светофора, вы обязаны пропустить автомобиль с включенными проблесковым маячком синего цвета и специальным звуковым сигналом, движущемуся по пересекаемой дороге (п. 3.2). Поворачивая налево, Вы должны уступить дорогу мотоциклу, движущемуся со встерчного направления прямо (п. 13.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только мотоциклу.', 'Только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом.', 'Обоим транспортным средствам.'])
	},
		{
		id: 414,
		imageName: _elm_lang$core$Maybe$Just('21-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Руководствуясь правилами проезда перекрёстков равнозначных дорог, Вы проедете данный перекрёсток последним, так как должны уступить дорогу мотоциклу, который, в свою очередь уступает дорогу леговому автомобилю (пп. 13.11 и 13.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым одновременно со встречным автомобилем.', 'Проедете перекрёсток последним после проезда мотоцикла.'])
	},
		{
		id: 415,
		imageName: _elm_lang$core$Maybe$Just('21-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'К перекрёстку неравнозначных дорог, где главная дорога меняет направление, Вы подъезжаете по второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги») и поэтому должны уступить дорогу обоим ТС,  находящимся на главной дороге, независимо от направлиния их движения через перекрёсток  (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обоим транспортным средствам.', 'Только легковому автомобилю.', 'Только автобусу.'])
	},
		{
		id: 416,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях при выезде из жилой зоны Вы должны уступить дорогу транспортным средствам?',
		hint: 'При выезде из жилой зоны, как и из приравненной к ней дворовой территории, Вы должны уступить дорогу всем ТС независимо от направления их движения (п. 17.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Во всех случаях.', 'Только при наличии знака «Уступите дорогу».', 'Только если другое транспортное средство приближается к Вам справа.'])
	},
		{
		id: 417,
		imageName: _elm_lang$core$Maybe$Just('21-17.jpg'),
		question: 'В зоне действия каких знаков Правила разрешают подачу звуковых сигналов только для предотвращения дорожно-транспортных происшествий?',
		hint: 'В населённых пунктах, обозначенных знаком 5.23.1 и  5.23.2 «Начало населённого пункта», и на участках дорог в зоне действия знака 3.26 «Подача звукового сигнала запрещена» Правила допускают подачу звуковых сигналов только для предотвращения дорожно-транспортного происшествия (п. 19.10).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'А и Б.', 'А и В.'])
	},
		{
		id: 418,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как изменяется поле зрения водителя с увеличением скорости движения?',
		hint: 'С увеличением скорости поле зрения водителя сужается, так как водитель вынужден смотреть намного дальше вперед, чтобы успеть оценить ситуацию в стремительно меняющейся дорожной обстановке.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не изменяется.', 'Расширяется.', 'Сужается.'])
	},
		{
		id: 419,
		imageName: _elm_lang$core$Maybe$Just('21-19.jpg'),
		question: 'При выезде из лесистого участка на открытое место установлен знак «Боковой ветер». Ваши действия?',
		hint: 'При выезде из лесистого участка на открытое место даже при отсутствии знака 1.29 «Боковой ветер» целесообразно уменьшить скорость движения и подготовиться к возможному отклонению автомобиля от заданного курса ввиду опасности появления сильного бокового ветра.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уменьшить скорость и быть готовым к возможному отклонению автомобиля от заданного курса.', 'Не изменяя скорости, сместиться ближе к центру дороги.', 'Не изменяя скорости, сместиться ближе к обочине.'])
	},
		{
		id: 420,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие признаки кровотечения из крупной артерии и первая помощью при её ранении?',
		hint: 'Рана под одеждой не видна, поэтому сначала необходимо ориентироваться на площадь одежды, пропитанной кровью. При ранении крупных артерий кровь алого цвета из раны вытекает пульсирующей струёй в ритме сокращений сердца. Останавливают кроветечение наложением жгута выше места ранения не менее чем на 3 — 5 см.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одежда быстро пропитыается кровью, кровь тёмного цвета вытекает из раны пассивно. Накладывается давящая повязка на место ранения.', 'Одежда пропитана кровью, кровь алого цвета вытекает из раны пульсирующей струёй. Накладывается кровоостанавливающий жгут выше места ранения не менее чем на 3 — 5 см.', 'Одежда пропитывается кровью только в месте ранения (цвет крови не имеет значения), кровь вытекает из раны пассивно. Накладывается кровоостанавливающий жгут ниже места ранения не менее чем на 3-5 см.'])
	},
		{
		id: 421,
		imageName: _elm_lang$core$Maybe$Just('22-01.jpg'),
		question: 'Сколько перекрёстков изображено на рисунке?',
		hint: 'Независимо от того, сколько проезжих частей имеют пересекающиеся дороги, они образуют один перекресток (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Один.', 'Два.', 'Четыре.'])
	},
		{
		id: 422,
		imageName: _elm_lang$core$Maybe$Just('22-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на перекрёстке?',
		hint: 'Знак 4.1.1 «Движение прямо» разрешает Вам на этом перекрёстке продолжить движение только в прямом направлении.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Прямо или налево.', 'Прямо или в обратном направлении.'])
	},
		{
		id: 423,
		imageName: _elm_lang$core$Maybe$Just('22-03.jpg'),
		question: 'Какие требования предъявляют к Вам эти дорожные знаки?',
		hint: 'Знак 3.17.1 «Таможня» в сочетании с табличкой 8.1.1 «Расстояние до объекта» информирует Вас о том, что до таможни осталось 300 м и что там Вам надо будет остановиться.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Снизить скорость при проезде таможни.', 'Остановиться через 300 м у таможни.', 'Остановиться у знака и дождаться работников таможенной службы.'])
	},
		{
		id: 424,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Где начинают действовать требования Правил, относящиеся к населённым пунктам?',
		hint: 'Правила устанавливают ряд требований, которые обязательны для выполнения только в населённых пунктах: скорость движения — до 60 км/ч, возможность остановки на левой стороне дороги, запрещение звукового сигнала и т.д. Эти требования начинают действовать с места установки знака с названием населённого пункта на белом фоне (Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только с места установки дорожного знака с названием населённого пункта на белом фоне.', 'С места установки дорожного знака с названием населённого пункта на белом или синем фоне.', 'В начале застроенной территории, непосредственно прилегающей к дороге.'])
	},
		{
		id: 425,
		imageName: _elm_lang$core$Maybe$Just('22-05.jpg'),
		question: 'Кому из водителей разрешено пересечь сплошную линию разметки с целью остановки в указанных местах?',
		hint: 'Сплошную линию 1.2.1, обозначающую край проезжей части, разрешается пересекать только для остановки на обочине (Приложение 2). В данной ситуации это исключение полностью распространяется на водителя встречного автомобиля. Вам пересечь сплошную линию для съезда на направляющий островок, обозначенный разметкой 1.16.3, запрещено, так как эти места на проезжей части не предназначены для движения и остановки.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обоим разрешено.', 'Разрешено только водителю встречного автомобиля.', 'Обоим запрещено.'])
	},
		{
		id: 426,
		imageName: _elm_lang$core$Maybe$Just('22-06.jpg'),
		question: 'Как в данной ситуации должен поступить водитель легкового автомобиля при приближении автомобиля оперативной службы, сопровождающего колонну?',
		hint: 'В этой ситуации водителю легкового автомобиля достаточно перестроиться на правую полосу, что обеспечит беспрепятственный проезд не только автомобилю ДПС с включенными проблесоквыми маячками синего и красного цветов и специальным звкуовым сигналом, но и сопровождаемой им колонне (п. 3.2). Необходимости в остановке у тротуара нет.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перестроиться на правую полосу и продолжить движение.', 'Остановиться у тротуара и продолжить движение сразу же после проезда автомобиля оперативной службы.', 'Остановиться у тротуара и продолжить движение только после проезда замыкающего колонну транспортного средства.'])
	},
		{
		id: 427,
		imageName: _elm_lang$core$Maybe$Just('22-07.jpg'),
		question: 'Обязаны ли Вы в данной ситуации включить левые указатели поворота?',
		hint: 'Знак 4.1.6 «Движение направо или налево» исключает движение в прямом направлении. Так как Вы движетесь по левой полосе, продолжить движение можно только налево или в обратном направлении (п. 8.5). При этом Вы обязаны включить левые световые указатели поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если будет выполняться разворот.', 'Включение указателей поворота в данной ситуации необязательно.'])
	},
		{
		id: 428,
		imageName: _elm_lang$core$Maybe$Just('22-08.jpg'),
		question: 'По какой траектории Правила разрешают Вам произвести поворот налево?',
		hint: 'Поворачивая налево, Вы должны двигаться так, чтобы при выезде с пересечения проезжих частей автомобиль не оказался на стороне встречного движения (п. 8.6), т.е. двигаться можно только по траектории Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 429,
		imageName: _elm_lang$core$Maybe$Just('22-09.jpg'),
		question: 'Разрешено ли водителю подъехать задним ходом к пассажиру, стоящему на мосту?',
		hint: 'Подъехать задним ходом к пассажиру, стоящему на мосту, нельзя, поскольку движение задним ходом на мостах запрещено (п. 8.12).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если не будут созданы помехи другим участникам движения.', 'Нет.'])
	},
		{
		id: 430,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам использовать для движения трамвайные пути встречного направления?',
		hint: 'Во всех случаях вам запрещён выезд на трамвайные пути встречного направления (п. 9.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается, если при этом не будут созданы помехи встречным транспортным средствам.', 'Разрешается только при объезде трамвая попутного направления.', 'Не разрешается.'])
	},
		{
		id: 431,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие ограничения, относящиеся к обгону, действуют на железнодорожных переездах и вблизи них?',
		hint: 'Обгон запрещён на железнодорожных переездах и ближе чем за 100 м перед ними (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обгон запрещён только на переезде.', 'Обгон запрещён на переезде и на расстоянии 100 м до него.', 'Обгон запрещён на переезде и на расстоянии 100 м до и после него.'])
	},
		{
		id: 432,
		imageName: _elm_lang$core$Maybe$Just('22-12.jpg'),
		question: 'В каком из указанных мест Вам разрешено поставить автомобиль на стоянку?',
		hint: 'Табличка 8.2.3 «Зона действия» указывает место, в котором заканчивается зона действия знака 3.28 «Стоянка запрещена». Вы можете поставить автомобиль на стоянку за знаком, но только на обочине, т.е. в позиции А (п. 12.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'В любом.'])
	},
		{
		id: 433,
		imageName: _elm_lang$core$Maybe$Just('22-13.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Поворачивая налево по разрешающему сигналу светофора, Вы обязаны уступить дорогу встречному автомобилю, движущемуся прямо (п. 13.4), а завершая поворот, также и пешеходам, переходящих проезжую часть дороги, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только встречному автомобилю.', 'Только пешеходам.', 'Встречному автомобилю и пешеходам.'])
	},
		{
		id: 434,
		imageName: _elm_lang$core$Maybe$Just('22-14.jpg'),
		question: 'Следует ли при движении прямо уступить дорогу трамваю?',
		hint: 'Несмотря на то, что Вы движетесь по дороге с разделительной полосой, при отсутствии знаков приоритета она равна по значению с пересекаемой. Руководствуясь правилами проезда перекрёстков равнозначных дорог, Вы должны уступить дорогу трамваю (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 435,
		imageName: _elm_lang$core$Maybe$Just('22-15.jpg'),
		question: 'Вы намерены повернуть направо. Можете ли Вы приступить к повороту?',
		hint: 'Знак 2.4 «Уступите дорогу» обязывает вас на данном перекрёстке неравнозначных дорог уступить дорогу грузовому автомобилю, не требуя обязательной остановки перед перекрёстком (п. 1.2, термин «Уступить дорогу»). Поскольку грузовой автомобиль движется по левой, более удалённой от вас полосе дороги, Вы можете приступить к повороту направо. Однако при этом в процессе всего манёвра Вы не должны создавать помех для движения грузового автомобиля (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но, не создавая помех грузовому автомобилю.', 'Нет.'])
	},
		{
		id: 436,
		imageName: _elm_lang$core$Maybe$Just('22-16.jpg'),
		question: 'Разрешена ли Вам остановка в указанном месте?',
		hint: 'Вы не можете остановиться в указанном месте, так как знак 5.11 «Дорога с полосой для маршрутных транспортных средств» и разметка 1.23 показывают, что левая полоса используется для встречного движения только маршрутных ТС. Заезжать на эту полосу и останавливаться на ней запрещено (п. 18.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещена.', 'Разрешена только для посадки или высадки пассажиров.', 'Разрешена, если не будут созданы помехи движению маршрутных транспортных средств.'])
	},
		{
		id: 437,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы должны быть включены в светлое время суток на мотоциклах?',
		hint: 'На мотоциклах и мопедах при движении в светлое время суток должны быть включены ближний свет или противотуманная фара (пп. 19.4 и 19.5). Таким образом удаётся выделить малогабаритные ТС в потоке легковых и грузовых автомобилей.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только габаритные огни.', 'Фара ближнего света или противотуманная фара.', 'Включение внешних световых приборов днем на мотоциклах не предусмотрено.'])
	},
		{
		id: 438,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам запрещается эксплуатация транспортного средства?',
		hint: 'Если имеются неисправности в глушителе вашего ТС, его эксплуатация запрещена (Перечень, п. 6.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Двигатель не развивает максимальной мощности.', 'Двигатель неустойчиво работает на холостых оборотах.', 'Имеется неисправность в глушителе.'])
	},
		{
		id: 439,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какой стиль вождения обеспечит наименьший расход топлива?',
		hint: 'Плавное ускорение при плавном замедлении обеспечит наименьший расход топлива.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Частое и резкое ускорение при плавном замедлении.', 'Плавное ускорение при резком замедлении.', 'Плавное ускорение при плавном замедлении.'])
	},
		{
		id: 440,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Неуплата административного штрафа в установленный срок влечет:',
		hint: 'В соответствии с ч. 5 ст. 32.2 КоАП при отсутствии документа, свидетельствующего об уплате административного штрафа (т.е. копии соответствующего платежного документа), по истечении 30 дней со срока, указанного в ч. 1 ст. 32.2 КоАП (он составляет 30 дней со дня вступления постановления в законную силу либо со дня истечения срока отсрочки или срока рассрочки), оштрафованное лицо привлекается к ответственности по ч. 1 ст. 20.25 КоАП. Указанная ответственность представляет собой административный штраф в двукратном размере суммы неуплаченного штрафа либо административный арест на срок до 15 суток.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только штраф в двукратном размере неуплаченного штрафа (но не менее 1000 рублей).', 'Штраф в двукратном размере суммы неуплаченного штрафа (но не менее 1000 рублей) либо административный арест на срок до 15 суток.', 'Только административный арест на срок до 15 суток.'])
	},
		{
		id: 441,
		imageName: _elm_lang$core$Maybe$Just('23-01.jpg'),
		question: 'Сколько пересечений проезжих частей имеет этот перекрёсток?',
		hint: 'Перекрёсток имеет два пересечения проезжих частей, так как примыкающая справа дорога с разделительной полосой имеет две проезжие части (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одно.', 'Два.'])
	},
		{
		id: 442,
		imageName: _elm_lang$core$Maybe$Just('23-02.jpg'),
		question: 'Этот дорожный знак:',
		hint: 'Знак 1.5 «Пересечение с трамвайной линией» устанавливается перед всеми пересечениями дороги с трамвайными путями вне перекрёстка, а также перед перекрёстками, по которым проходят трамвайные пути, если видимость этих путей (например, из-за поворота дороги) менее 50 м. В том и другом случае Вы должны быть готовы уступить дорогу трамваю (пп. 18.1 и 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предупреждает о приближении к месту пересечения с трамвайной линией.', 'Предупреждает о приближении к трамвайной остановке.', 'Обязывает Вас остановиться непосредственно перед пересечением с трамвайной линией.'])
	},
		{
		id: 443,
		imageName: _elm_lang$core$Maybe$Just('23-03.jpg'),
		question: 'Эти знаки обязывают Вас соблюдать дистанцию:',
		hint: 'Знак 3.16 «Ограничение минимальной дистанции» запрещает движение ТС с дистанцией между ними меньше указанной на знаке, в данном случае менее 70 м. Такая необходимость может возникнуть при организации движения на ледовых переправах, на мостах с пролетами ограниченной грузоподъемности, в длинных тоннелях и т.п. Табличка 8.2.1 «Зона действия» уточняет, на каком расстоянии следует держать дистанцию, указанную на знаке (в данном случае — на протяжении 100 м).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Менее 70 м на протяжении 100 м.', 'Более 70 м на протяжении 100 м.', 'От 70 м до 100 м.'])
	},
		{
		id: 444,
		imageName: _elm_lang$core$Maybe$Just('23-04.jpg'),
		question: 'Двигаясь по средней полосе на легковом автомобиле, Вы можете продолжить движение:',
		hint: 'Знак 5.15.2 «Направления движения по полосе» разрешает вам двигаться по средней полосе только прямо или налево, так как разворот разрешается лишь из крайней левой полосы.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только прямо или налево.', 'Прямо, налево или в обратном направлении.'])
	},
		{
		id: 445,
		imageName: _elm_lang$core$Maybe$Just('23-05.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Прерывистая жёлтая линия разметки 1.10, нанесённая у края проезжей части или по верху бордюра как самостоятельно, так и в сочетании со знаком 3.28 «Стоянка запрещена», обозначает места, где стоянка запрещена.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только с частичным заездом на тротуар.', 'Запрещено.'])
	},
		{
		id: 446,
		imageName: _elm_lang$core$Maybe$Just('23-06.jpg'),
		question: 'В каких направлениях Вы можете продолжить движение?',
		hint: 'Включенный сигнал светофора в виде стрелки зелёного цвета в дополнительной секции разрешает движение направо в первый проезд (п. 6.3). Поворот во второй проезд запрещён, так как для этого Вам пришлось бы сначала проехать прямо, что запрещает красный сигнал.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только направо в первый проезд.', 'Направо в первый и второй проезды.', 'Движение запрещено.'])
	},
		{
		id: 447,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Обязаны ли Вы подавать сигналы указателями поворота при начале движения в жилой зоне, обозначенной соответствующим знаком?',
		hint: 'Водитель обязан во всех случаях перед началом движения подавать сигналы световыми указателями поворота соответствующего направления, в том числе и в жилой зоне (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, только при наличии в непосредственной близости пешеходов.'])
	},
		{
		id: 448,
		imageName: _elm_lang$core$Maybe$Just('23-08.jpg'),
		question: 'По какой траектории Вы можете продолжить движение?',
		hint: 'Знак 4.3 «Круговое движение» предписывает Вам движение на данном перекрёстке в направлении, указанном стрелками. При повороте направо Вы должны двигаться по возможности ближе к правому краю проезжей части (п. 8.6). В данном случае Вы можете продолжить движение только по траектории А.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по А или Б.', 'По любой.'])
	},
		{
		id: 449,
		imageName: _elm_lang$core$Maybe$Just('23-09.jpg'),
		question: 'Разрешён ли Вам разворот на этом участке дороги?',
		hint: 'На данном участке дороги разметка 1.11 не запрещает разворот, так как её разрешается пересекать со стороны прерывистой линии. Но обязательным условием для Вас при развороте является видимость дороги более 100 м (п. 8.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 450,
		imageName: _elm_lang$core$Maybe$Just('23-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на грузовом автомобиле с разрешённой максимальной массой менее 3,5 т?',
		hint: 'Знак 3.25 «Конец зоны ограничения максимальной скорости» отменяет ранее введенное ограничение — 80 км/ч. На дорогах вне населённых пунктов, не относящихся к автомагистралям, грузовые автомобили с разрешенной максимальной массой менее 3,5 т могут двигаться со скоростью не более 90 км/ч (п. 10.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['90 км/ч.', '70 км/ч.', '60 км/ч.'])
	},
		{
		id: 451,
		imageName: _elm_lang$core$Maybe$Just('23-11.jpg'),
		question: 'Выполняя объезд на подъёме, Вы:',
		hint: 'Знак 1.14 «Крутой подъём» предупреждает о том, что Вы въезжаете на подъём. Так как в данной ситуации встречный разъезд затруднён, уступить дорогу должен водитель встречного легкового автомобиля, поскольку он движется на спуск (п. 11.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу.', 'Имеете право проехать первым.'])
	},
		{
		id: 452,
		imageName: _elm_lang$core$Maybe$Just('23-12.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'В 15 м от указателя места остановки маршрутных ТС стоянка разрешена Правилами без каких-либо ограничений (пп. 12.4 и 12.5).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, если при этом не будут созданы помехи для движения маршрутных транспортных средств.', 'Запрещено.'])
	},
		{
		id: 453,
		imageName: _elm_lang$core$Maybe$Just('23-13.jpg'),
		question: 'Как следует поступить в этой ситуации, если Вам необходимо повернуть направо?',
		hint: 'Если регулировщик обращён к вам левым боком, а его правая рука вытянута вперёд, движение Вам разрешено во всех направлениях: прямо, направо, налево, в обратном направлении (п. 6.10). Однако при повороте направо следует уступить дорогу пешеходам, переходящим проезжую часть, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановиться перед перекрестком и, дождавшись другого сигнала регулировщика, повернуть направо.', 'Можно повернуть направо, уступив дорогу пешеходам.'])
	},
		{
		id: 454,
		imageName: _elm_lang$core$Maybe$Just('23-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Кому следует уступить дорогу?',
		hint: 'В данной ситуации Вы должны уступить дорогу обоим трамваям, так как на перекрёстках равнозначных дорог трамвай имеет преимущество перед безрельсовыми ТС независимо от направления его движения (п. 13.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваю А.', 'Только трамваю Б.', 'Обоим трамваям.', 'Никому.'])
	},
		{
		id: 455,
		imageName: _elm_lang$core$Maybe$Just('23-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'В данном случае при проезде перекрёстка неравнозначных дорог следует уступить дорогу только автобусу, который, так же как и Вы, находится на главной дороге (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») и является для Вас «помехой справа» (пп. 13.10 и 13.11). Легковой автомобиль движется по второстепенной дороге и поэтому уступает дорогу Вам (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Обоим транспортным средствам.', 'Никому.'])
	},
		{
		id: 456,
		imageName: _elm_lang$core$Maybe$Just('23-16.jpg'),
		question: 'Кто из водителей правильно остановился для высадки пассажиров?',
		hint: 'Правильно остановился для высадки пассажиров только водитель А, так как остановка слева на улицах с односторонним движением разрешена (п. 12.1). Водитель автомобиля Б нарушил требования Правил, поставив его у сплошной линии разметки, а не у тротуара. Водитель автомобиля В остановился на полосе, предназначенной для движения только маршрутных ТС, где движение и остановка другим ТС запрещены (п. 18.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только В.', 'А и Б.', 'Б и В.'])
	},
		{
		id: 457,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Достаточно ли в светлое время суток включения дневных ходовых огней для обозначения транспортного средства при движении в тумане?',
		hint: 'Яркость светодиодов, используемых в дневных ходовых огнях, считается достаточной для обозначения ТС вместо ближнего света фар при движении в светлое время суток (п. 19.5). Однако при движении в тумане и других условиях недостаточной видимости на ТС должны быть включены фары дальнего или ближнего света (п. 19.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Достаточно.', 'Недостаточно.'])
	},
		{
		id: 458,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком из перечисленных случаев водителю следует оценивать обстановку сзади?',
		hint: 'Любое торможение опасно, так как водитель, движущийся сзади может вовремя не среагировать на изменение скорости движения Вашего транспортного средства. Если Вы выработаете привычку смотреть в зеркало заднего вида при любом торможении, то у вас появится возможность оценить действия водителя приближающегося сзади, и путём изменения интенсивности торможения уменьшить вероятность столкновения с ним.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при резком торможении.', 'Только при торможении на дороге с мокрым или скользким покрытием.', 'При любом торможении.'])
	},
		{
		id: 459,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Чем опасно длительное торможение с выключенным сцеплением (передачей) на крутом спуске?',
		hint: 'Опасность длительного торможения с выключенным сцеплением на крутом спуске заключается в перегреве тормозных - механизмов и уменьшении эффективности торможения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Значительно увеличивается износ протектора шин.', 'Повышается износ деталей тормозных механизмов.', 'Перегреваются тормозные механизмы и уменьшается эффективность торможения.'])
	},
		{
		id: 460,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие меры административного принуждения предусмотрены за управление транспортным средством, если обязательное страхование гражданской ответственности владельца этого транспортного средства заведомо отсутствует?',
		hint: 'В соответствии с ч. 2 ст. 12.37 КоАП управление ТС в случае, когда обязательное страхование гражданской ответственности, владельца данного ТС заведомо отсутствует, влечет административный штраф в размере от 500 до 800 рублей. В  ч. 2 ст. 27.13 КоАП предусмотрено запрещение эксплуатации ТС при совершении указанного правонарушения. При этом государственные регистрационные знаки подлежат снятию до устранения причины запрещения эксплуатации ТС. Одновременно разрешается движение ТС к месту устранения причины запрещения эксплуатации ТС, но не более чем в течении суток с момента запрещения эксплуатации.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только штраф в размере от 500 до 800 рублей.', 'Запрещение эксплуатации транспортного средства и штраф в размере от 500 до 800 рублей.', 'Задержание транспортного средства и штраф в размере от 500 до 800 рублей.', 'Задержание транспортного средства, запрещение эксплуатации транспортного средства и штраф в размере от 500 до 800 рублей.'])
	},
		{
		id: 461,
		imageName: _elm_lang$core$Maybe$Just('24-01.jpg'),
		question: 'Сколько полос для движения имеет данная дорога?',
		hint: 'Дорога имеет всего четыре полосы для движения, так как каждая из проезжих частей разделена разметкой на две полосы (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Две.', 'Четыре.'])
	},
		{
		id: 462,
		imageName: _elm_lang$core$Maybe$Just('24-02.jpg'),
		question: 'Эти знаки предупреждают Вас:',
		hint: 'Перед вами знак 1.2 «Железнодорожный переезд без шлагбаума». Установленный под ним знак 1.4.1 «Приближение к железнодорожному переезду» с тремя полосами является лишь дополнительным предупреждением о приближении к переезду. Вне населённых пунктов такая комбинация знаков устанавливается на расстоянии от 150 до 300 м до переезда.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['О приближении к железнодорожному переезду с тремя путями.', 'О наличии через 150 — 300 м железнодорожного переезда без шлагбаума.', 'О наличии через 50 — 100 м железнодорожного переезда.'])
	},
		{
		id: 463,
		imageName: _elm_lang$core$Maybe$Just('24-03.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Знак 3.27 «Остановка запрещена» с табличкой 8.2.3 «Зона действия» (Приложение 1) устанавливается в конце зоны запрета остановки. Поставив автомобиль на стоянку за знаком, Вы не нарушите Правил.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, если Вы проживаете рядом с этим местом.', 'Запрещено.'])
	},
		{
		id: 464,
		imageName: _elm_lang$core$Maybe$Just('24-04.jpg'),
		question: 'Какие знаки обязывают водителя грузового автомобиля с разрешённой максимальной массой до 3,5 т повернуть направо?',
		hint: 'Только предписывающий знак Б (4.1.2 «Движение направо» всегда обязывает водителя повернуть направо. Его действие не распространяется только на маршрутные ТС (Приложение 1). Знак А (5.7.1 «Выезд на дорогу с односторонним движением») не обязывает вас ехать в указанном направлении — можно пересечь перекрёсток в прямом направлении или развернуться, а знак В (6.15.2 «Направление движения для грузовых автомобилей») показывает рекомендуемое направление движения для грузовых автомобилей, тракторов и самоходных механизмов в случаях запрещения их движения в одном из направлений.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'А и Б.', 'Б и В.'])
	},
		{
		id: 465,
		imageName: _elm_lang$core$Maybe$Just('24-05.jpg'),
		question: 'Эта разметка обозначает:',
		hint: 'Такой разметкой 1.25 обозначаются искусственные неровности на проезжей части, устраиваемые для принудительного снижения скорости ТС внутри жилых зон, у детских учреждений и т. п.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Место, где начинается или заканчивается жилая зона.', 'Искусственную неровность на проезжей части.', 'Место, где начинается запрет на дальнейшее движение.'])
	},
		{
		id: 466,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает мигание жёлтого сигнала светофора?',
		hint: 'Желтый мигающий сигнал предупреждает о возможной опасности и применяется для обозначения нерегулируемого перекрёстка или пешеходного перехода (п. 6.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предупреждает о неисправности светофора.', 'Разрешает движение и информирует о наличии нерегулируемого перекрестка или пешеходного перехода.', 'Запрещает дальнейшее движение.'])
	},
		{
		id: 467,
		imageName: _elm_lang$core$Maybe$Just('24-07.jpg'),
		question: 'Какую ошибку совершает водитель, въезжающий во двор?',
		hint: 'Знак 4.1.1 «Движение прямо», установленный в начале участка дороги, не запрещает повороты направо во дворы и на другие, прилегающие к дороге территории. Однако перед выполнением манёвра необходимо подавать сигналы правого поворота (п. 8.1), чего водитель не сделал.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Поворачивает в зоне действия знака «Движение прямо».', 'Поворачивает, не включив указатели поворота.', 'Совершает обе перечисленные ошибки.'])
	},
		{
		id: 468,
		imageName: _elm_lang$core$Maybe$Just('24-08.jpg'),
		question: 'Должны ли Вы уступить дорогу грузовому автомобилю в данной ситуации?',
		hint: 'Вы не должны уступать дорогу грузовому автомобилю, так как он выезжает на дорогу с прилегающей территории (пп. 1.2 и 8.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если он поворачивает направо.', 'Нет.'])
	},
		{
		id: 469,
		imageName: _elm_lang$core$Maybe$Just('24-09.jpg'),
		question: 'По какой траектории Вы можете выполнить разворот?',
		hint: 'В данном случае разворот запрещён только непосредственно на пешеходном переходе (траектория Б), границы которого при отсутствии разметки определяются знаками 5.19.1 и 5.19.2 «Пешеходный переход» (п. 8.11). На перекрёстке (траектория А) разворот осуществить можно, поскольку знак 5.7.2 «Выезд на дорогу с односторонним движением» не запрещает разворот.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 470,
		imageName: _elm_lang$core$Maybe$Just('24-10.jpg'),
		question: 'Разрешается ли Вам обогнать легковой автомобиль по трамвайным путям в данной ситуации?',
		hint: 'Выезд на трамвайные пути встречного направления запрещён. Из этого правила исключений нет (п. 9.6).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не разрешается.', 'Разрешается.'])
	},
		{
		id: 471,
		imageName: _elm_lang$core$Maybe$Just('24-11.jpg'),
		question: 'Разрешён ли Вам обгон?',
		hint: 'Знак 3.20 «Обгон запрещён» запрещает обгон всех ТС, кроме тихоходных, а также гужевых повозок, мопедов и двухколесных мотоциклов без коляски. (Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещён.', 'Разрешён, если скорость грузового автомобиля менее 30 км/ч.', 'Разрешён.'])
	},
		{
		id: 472,
		imageName: _elm_lang$core$Maybe$Just('24-12.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'В данной ситуации необходимо руководствоваться требованием знака 6.4 «Место стоянки» с табличкой 8.6.5 «Способ постановки транспортного средства на стоянку». Требование заключается в том, что автомобили должны быть поставлены на стоянку перпендикулярно тротуару. Следовательно, водитель автомобиля Б нарушил правила стоянки.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Никто не нарушил.'])
	},
		{
		id: 473,
		imageName: _elm_lang$core$Maybe$Just('24-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Зеленый сигнал светофора дает право на движение всем ТС (п. 6.2). Но, поворачивая налево, Вы должны уступить дорогу только трамваю (п. 13.6), так как со встречным легковым автомобилем ваши пути не пересекаются.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу трамваю и, убедившись, что Ваши пути не пересекаются со встречным автомобилем, выполните поворот.', 'Проедете перекрёсток первым.'])
	},
		{
		id: 474,
		imageName: _elm_lang$core$Maybe$Just('24-14.jpg'),
		question: 'Кто первым проедет перекрёсток, если все намерены двигаться прямо?',
		hint: 'Проблесковый маячок оранжевого или жёлтого цвета не дает преимущества в движении (п. 3.4). Все ТС на перекрёстке равнозначных дорог находятся в равных условиях, поскольку каждое из них должно уступить дорогу другому ТС, находящемуся справа. Подобную ситуацию Правила не регламентируют, и водители должны определить очередность проезда по договорённости.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы одновременно с троллейбусом.', 'Грузовой автомобиль.', 'Правила эту ситуацию не регламентируют. Водители должны определить очередность по договоренности.'])
	},
		{
		id: 475,
		imageName: _elm_lang$core$Maybe$Just('24-15.jpg'),
		question: 'Вы обязаны уступить дорогу пешеходам:',
		hint: 'На любых перекрёстках, т.е. на регулируемых и нерегулируемых, при повороте, как направо, так и налево, необходимо уступать дорогу пешеходам, переходящим проезжую часть дороги, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при повороте налево по направлению главной дороги.', 'Только при повороте направо.', 'В обоих случаях.'])
	},
		{
		id: 476,
		imageName: _elm_lang$core$Maybe$Just('24-16.jpg'),
		question: 'Как Вы должны поступить в данной ситуации?',
		hint: 'Несмотря на негорящие сигналы светофора, Вы должны остановиться и можете продолжить движение только приоткрытом положении шлагбаума (п. 15.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Объехать шлагбаум, так как светофор не запрещает движение.', 'Остановиться и продолжить движение только при открытом шлагбауме.'])
	},
		{
		id: 477,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'На каком расстоянии до встречного транспортного средства Вы должны переключить дальний свет на ближний?',
		hint: 'Учитывая высокий световой поток фар дальнего света, Правила обязывают Вас, во избежание ослепления водителя встречного ТС, переключить свет с дальнего на ближний не менее чем за 150 м до ТС (п. 19.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не менее чем за 150 м.', 'Не менее чем за 300 м.', 'По усмотрению водителя.'])
	},
		{
		id: 478,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам разрешается эксплуатация легкового автомобиля?',
		hint: 'Из всех перечисленных неисправностей только неработающий указатель температуры охлаждающей жидкости не является причиной запрещения эксплуатации Вашего автомобиля. Если не работают спидометр или предусмотренное конструкцией противоугонное устройство, эксплуатация ТС запрещена (Перечень, п. 7.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работает спидометр.', 'Не работает указатель температуры охлаждающей жидкости.', 'Не работает предусмотренное конструкцией противоугонное устройство.'])
	},
		{
		id: 479,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как следует поступить водителю, если во время движения по сухой дороге с асфальтобетонным покрытием начал моросить дождь?',
		hint: 'При появлении первых капель дождя водителю следует уменьшить скорость и быть особенно осторожным, так как находящиеся на дороге пыль, масло, частицы резины и т.д. образуют скользкую пленку, которая впоследствии смывается дождем.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уменьшить скорость и быть особенно осторожным.', 'Не изменяя скорости, продолжить движение.', 'Увеличить скорость и попытаться проехать как можно большее расстояние, пока не начался сильный дождь.'])
	},
		{
		id: 480,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешено ли давать пострадавшему, находящемуся в безсознательном состоянии, лекарственные средства?',
		hint: 'У пострадавшего, находящегося в безсознательном состоянии, отсутствует глотательный рефлекс. Поэтому любое жидкое или твёрдое вещество попадает в дыхательные пути, а не в желудок.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено в случае крайней необходимости.', 'Запрещено.'])
	},
		{
		id: 481,
		imageName: _elm_lang$core$Maybe$Just('25-01.jpg'),
		question: 'На каком рисунке изображена дорога с разделительной полосой?',
		hint: 'Разделительная полоса представляет собой элемент дороги, выделенный конструктивно (правый рисунок) или с помощью сплошных линий разметки 1.2.1 (левый рисунок). Разделительная полоса отделяет друг от друга смежные проезжие части и не предназначена для движения и остановки ТС (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на правом.', 'На обоих.', 'Ни на одном.'])
	},
		{
		id: 482,
		imageName: _elm_lang$core$Maybe$Just('25-02.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на грузовом автомобиле с разрешённой максимальной массой 3 т?',
		hint: 'Табличка 8.4.1 «Вид транспортного средства» с изображением грузового автомобиля распространяет действие предписывающего знака 4.1.1 «Движение прямо» только на грузовые автомобили с разрешенной максимальной массой более 3,5 т. Таким образом, Вы можете проехать перекресток в любом направлении.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только налево или направо.', 'В любых.'])
	},
		{
		id: 483,
		imageName: _elm_lang$core$Maybe$Just('25-03.jpg'),
		question: 'Какой из знаков отменяет все ограничения, введённые ранее запрещающими знаками?',
		hint: 'Из показанных знаков только знак В (3.31 «Конец зоны всех ограничений») отменяет все ограничения, введённые ранее другими запрещающими знаками. Названия остальных знаков: А (3.21 «Конец зоны запрещения обгона»), Б (3.23 «Конец зоны запрещения обгона грузовым автомобилям») и Г (2.2 «Конец главной дороги») говорят сами за себя.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Б.', 'Только В и Г.', 'Только В.', 'Все.'])
	},
		{
		id: 484,
		imageName: _elm_lang$core$Maybe$Just('25-04.jpg'),
		question: 'Этот знак указывает, что:',
		hint: 'Перед Вами перекрёсток, где на средней полосе пересекаемой дороги осуществляется реверсивное регулирование, т.е. направление движения может изменяться на противоположное. Об этом Вас информируют знак 5.10 «Выезд на дорогу с реверсивным движением» и двойные прерывистые линии разметки 1.9, обозначающие границы средней полосы (Приложение 2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы должны повернуть направо или налево.', 'На пересекаемой дороге организовано реверсивное движение.', 'На пересекаемой дороге организовано одностороннее движение.'])
	},
		{
		id: 485,
		imageName: _elm_lang$core$Maybe$Just('25-05.jpg'),
		question: 'Какой манёвр запрещает Вам данная линия разметки?',
		hint: 'Прерывистая линия разметки 1.5 в данной ситуации разделяет транспортные потоки противоположных направлений на дороге, имеющей две полосы, и не запрещает Вам какой-либо манёвр.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только обгон.', 'Только объезд.', 'Только разворот.', 'Ничего не запрещает.'])
	},
		{
		id: 486,
		imageName: _elm_lang$core$Maybe$Just('25-06.jpg'),
		question: 'На какие транспортные средства распространяются сигналы такого светофора?',
		hint: 'Светофор в виде буквы «Т» с четырьмя сигналами бело-лунного цвета применяется для регулирования движения трамваев, а также других маршрутных ТС в случае, когда их движение осуществляется по специально выделенной для них полосе (п. 6.8). На все остальные ТС действие этого светофора не распространяется.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на трамваи.', 'На трамваи, а также другие маршрутные транспортные средства, движущиеся по выделенной для них полосе.', 'На все маршрутные транспортные средства.'])
	},
		{
		id: 487,
		imageName: _elm_lang$core$Maybe$Just('25-07.jpg'),
		question: 'Обязаны ли Вы включить указатели поворота в данной ситуации?',
		hint: 'На данном перекрёстке, руководствуясь знаком 4.1.2 «Движение направо», Вы можете продолжить движение только направо. При этом Вы обязаны включить соответствующие этому манёвру правые световые указатели поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, но только при наличии на перекрёстке других транспортных средств.'])
	},
		{
		id: 488,
		imageName: _elm_lang$core$Maybe$Just('25-08.jpg'),
		question: 'Кто должен уступить дорогу?',
		hint: 'Поскольку впереди сужение дороги, о чем предупреждает знак 1.20.2 «Сужение дороги», водителю грузового автомобиля придется перестроиться на соседнюю полосу, а при перестроении он должен уступить дорогу легковому автомобилю, движущемуся попутно без изменения направления движения (п. 8.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель легкового автомобиля.', 'Водитель грузового автомобиля.'])
	},
		{
		id: 489,
		imageName: _elm_lang$core$Maybe$Just('25-09.jpg'),
		question: 'Вы случайно проехали поворот на перекрёстке. Разрешено ли Вам в этой ситуации использовать задний ход, чтобы затем продолжить движение налево?',
		hint: 'Проехав перекрёсток, Вы не можете возвратиться задним ходом в показанное положение, поскольку на перекрёстках движение задним ходом запрещено (п. 8.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 490,
		imageName: _elm_lang$core$Maybe$Just('25-10.jpg'),
		question: 'Водитель какого автомобиля, поворачивая налево, не нарушает Правила?',
		hint: 'Въезжая на трёхполосную дорогу, Вы должны помнить, что в соответствии с п. 9.3 Правил, средняя полоса такой дороги перед перекрёстком предназначена для автомобилей, поворачивающих налево. Поэтому в данной ситуации не нарушает Правил только водитель грузового автомобиля, завершающий поворот налево без выезда на полосу встречного движения (п. 8.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легкового.', 'Только грузового.', 'Оба не нарушают.'])
	},
		{
		id: 491,
		imageName: _elm_lang$core$Maybe$Just('25-11.jpg'),
		question: 'Разрешён ли Вам обгон?',
		hint: 'Обгон с выездом на полосу встречного движения запрещён на участках дорог с ограниченной видимостью (п. 11.4). Поскольку дорога впереди поворачивает налево и видимость ограничена, то начинать обгон грузового автомобиля в данной ситуации нельзя.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если скорость грузового автомобиля менее 30 км/ч.', 'Да.', 'Нет.'])
	},
		{
		id: 492,
		imageName: _elm_lang$core$Maybe$Just('25-12.jpg'),
		question: 'Разрешена ли Вам остановка в указанном месте?',
		hint: 'От места предполагаемой остановки до края пересекаемой проезжей части ровно 5 м. Остановка перед перекрёстком запрещена, если это расстояние меньше 5 м. Однако остановка в указанном месте все же запрещена, поскольку расстояние между Вашим автомобилем и пешеходным переходом будет менее 5 м (п. 12.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена, но только при отсутствии пешеходов на переходе.', 'Не разрешена.'])
	},
		{
		id: 493,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Значения каких дорожных знаков отменяются сигналами светофора?',
		hint: 'Перекресток, на котором очередность движения определяется сигналами светофора, считается регулируемым (п. 13.3). Знаки приоритета, устанавливающие очередность проезда нерегулируемых перекрёстков, в данном случае не действуют (п. 6.15). Имейте в виду, что сигналы светофора не отменяют другие дорожные знаки.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Знаков приоритета.', 'Запрещающих знаков.', 'Предписывающих знаков.', 'Всех перечисленных.'])
	},
		{
		id: 494,
		imageName: _elm_lang$core$Maybe$Just('25-14.jpg'),
		question: 'При повороте направо Вы должны уступить дорогу:',
		hint: 'На любых перекрёстках при повороте Вы должны уступить дорогу, как пешеходам, так и велосипедистам, которые движутся по обозначенной знаком 4.4 и выделенной разметкой велосипедной дорожке (п. 13.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только велосипедистам.', 'Только пешеходам.', 'Пешеходам и велосипедистам.', 'Никому.'])
	},
		{
		id: 495,
		imageName: _elm_lang$core$Maybe$Just('25-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'На этом перекрёстке неравнозначных дорог (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») Вы должны уступить дорогу только легковому автомобилю, находящемуся справа, который, так же как и Вы, движется по главной дороге, и, следовательно, с ним надо разъезжаться по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11). Мотоцикл и автобус уступают дорогу Вам, поскольку подъезжают к перекрёстку по второстепенным дорогам (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковому автомобилю.', 'Легковому автомобилю и автобусу.', 'Никому.'])
	},
		{
		id: 496,
		imageName: _elm_lang$core$Maybe$Just('25-16.jpg'),
		question: 'Как Вы должны действовать в данной ситуации?',
		hint: 'Вам необходимо остановиться у знака 2.5 «Движение без остановки запрещено», так как стоп-линия отсутствует (п. 15.4). После проезда состава продолжить движение Вы можете, только убедившись в отсутствии приближающегося поезда, причем с обоих направлений (знак 1.3.2 «Многопутная железная дорога» и п. 15.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать железнодорожный переезд без остановки перед знаком.', 'Остановиться перед знаком и продолжить движение сразу же после проезда поезда.', 'Остановиться перед знаком и продолжить движение, только убедившись в отсутствии приближающегося поезда.'])
	},
		{
		id: 497,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы можете в светлое время суток привлечь внимание водителя обгоняемого автомобиля при движении в населенном пункте?',
		hint: 'В качестве предупредительного сигнала для привлечения внимания обгоняемого водителя в населённом пункте Вы можете использовать лишь кратковременное переключение фар с ближнего света на дальний (п. 19.11). В этом случае применять звуковой сигнал запрещено (п. 19.10).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только звуковым сигналом.', 'Только кратковременным переключением фар с ближнего света на дальний.', 'Любым из перечисленных способов, включая совместную подачу этих сигналов.'])
	},
		{
		id: 498,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам запрещается эксплуатация автомобиля?',
		hint: 'Если на вашем автомобиле не работает звуковой сигнал, его эксплуатация запрещается (Перечень, п. 7.2). Остальные неисправности не являются причиной для запрещения эксплуатации автомобиля, поскольку их нет в Перечне.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работает указатель уровня топлива.', 'Нарушена регулировка угла опережения зажигания.', 'Затруднен пуск двигателя.', 'Не работает звуковой сигнал.'])
	},
		{
		id: 499,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Считаете ли Вы безопасным движение на легковом автомобиле в тёмное время суток с ближним светом фар по неосвещенной загородной дороге со скоростью 90 км/ч?',
		hint: 'Ближний свет фар обеспечивает видимость дороги в тёмное время суток на 30 — 40 м, а остановочный путь автомобиля при скорости 90 км/ч составляет примерно 90 — 100 м. Это значит, что движение в подобных условиях не является безопасным, так как остановочный путь намного превышает расстояние видимости.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, так как предельная допустимая скорость соответствует требованиям Правил.', 'Нет, так как остановочный путь превышает расстояние видимости.'])
	},
		{
		id: 500,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как остановить кровотечение при ранении вены и некрупных артерий?',
		hint: 'Давление в венах и некрупных артериях невелико, поэтому кровь вытекает из них медленно, без толчков. Для остановки кровотечения достаточно наложить на рану давящую повязку. При пропитывании повязки кровью её дополняют новыми слоями.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Наложить давящую повязку на место ранения.', 'Наложить жгут выше места ранения.', 'Наложить жгут ниже места ранения.'])
	},
		{
		id: 501,
		imageName: _elm_lang$core$Maybe$Just('26-01.jpg'),
		question: 'Выезд из двора или с другой прилегающей территории:',
		hint: 'Согласно определению понятия «перекрёсток», выезд с прилегающей территории не считается перекрёстком (п. 1.2). Сюда относятся выезды из дворов, жилых массивов, автостоянок, АЗС, предприятий и другие подобные ситуации, когда водитель должен уступить дорогу транспортным средствам и пешеходам, движущимся по дороге.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Считается перекрёстком равнозначных дорог.', 'Считается перекрёстком неравнозначных дорог.', 'Не считается перекрёстком.'])
	},
		{
		id: 502,
		imageName: _elm_lang$core$Maybe$Just('26-02.jpg'),
		question: 'Какие знаки требуют обязательной остановки?',
		hint: 'Только знак Б (2.5 «Движение без остановки запрещено») обязывает водителей остановиться у стоп-линий, а при ее отсутствии — перед краем пересекаемой проезжей части, железнодорожным переездом, перед знаком. Знак В (6.16 «Стоп-линия») показывает лишь место остановки транспортных средств при запрещающем сигнале светофора или регулировщика. Знаки Г (2.4 «Уступите дорогу») и А (2.6 «Преимущество встречного движения») обязывают водителя уступить дорогу, при необходимости, соответственно на пересечении дорог или её узком участке (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Б.', 'Только Б.', 'Только Б и В.', 'Все.'])
	},
		{
		id: 503,
		imageName: _elm_lang$core$Maybe$Just('26-03.jpg'),
		question: 'В каких случаях Вам разрешается использовать звуковой сигнал в зоне действия этого знака?',
		hint: 'Знак 3.26 «Подача звукового сигнала запрещена» применяют только вне населённых пунктов. Он допускает подачу сигнала только в одном случае — для предотваращения дорожно-транспортного происшествия. Там, где нет этого знака, звуковой сигнал можно использовать также для предупреждения других водителей об обгоне.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только для предупреждения об обгоне.', 'Только для предотвращения дорожно-транспортного происшествия.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 504,
		imageName: _elm_lang$core$Maybe$Just('26-04.jpg'),
		question: 'Что означают эти дорожные знаки?',
		hint: 'Табличка 8.5.1 под знаком 6.4 «Место стоянки» уточняет, что околотротуарной стоянкой можно воспользоваться только в субботние, воскресные и праздничные дни.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Стоянка разрешена только транспортным средствам оперативных служб.', 'Стоянка разрешена только с включенными габаритными огнями.', 'Стоянка разрешена только в праздничные, субботние и воскресные дни.'])
	},
		{
		id: 505,
		imageName: _elm_lang$core$Maybe$Just('26-05.jpg'),
		question: 'Такой вертикальной разметкой обозначают:',
		hint: 'Такой вертикальной разметкой 2.6 обозначают боковые поверхности дорожных ограждений во всех других случаях, когда не применяется разметка 2.5 , используемая только на опасных участках.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Боковые поверхности ограждений только на опасных участках дорог.', 'Боковые поверхности ограждений на других участках дорог.'])
	},
		{
		id: 506,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Красный мигающий сигнал или два попеременно мигающих красных сигнала светофора, установленного на железнодорожном переезде, означают:',
		hint: 'Красный мигающий сигнал или два попеременно мигающих красных сигнала светофора запрещают движение (п. 6.2). Такая сигнализация применяется главным образом на железнодорожных переездах.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Движение разрешается с особой осторожностью.', 'Движение запрещено.', 'Светофорная сигнализация неисправна.'])
	},
		{
		id: 507,
		imageName: _elm_lang$core$Maybe$Just('26-07.jpg'),
		question: 'Обязаны ли Вы включить сигнал левого поворота в данной ситуации?',
		hint: 'В данной ситуации Вам необходимо перестроиться на соседнюю левую полосу движения, а поэтому перед выполнением перестроения Вы должны включить левые указатели поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 508,
		imageName: _elm_lang$core$Maybe$Just('26-08.jpg'),
		question: 'В каких направлениях Вы можете продолжить движение по второй полосе?',
		hint: 'Знак 4.1.6 «Движение направо или налево» исключает на данном перекрёстке только движение в прямом направлении. При наличии двух полос для движения крайняя левая полоса предназначена для поворота налево и разворота. Следовательно, находясь на ней, Вы можете продолжить движение только в этих направлениях (п. 8.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево.', 'Только налево и в обратном направлении.', 'Направо, налево и в обратном направлении.'])
	},
		{
		id: 509,
		imageName: _elm_lang$core$Maybe$Just('26-09.jpg'),
		question: 'Вы случайно проехали нужный въезд во двор. Разрешено ли Вам в этой ситуации использовать задний ход, чтобы затем повернуть направо?',
		hint: 'Использовать задний ход для выполнения указанного манёвра Вам запрещается, поскольку на пути движения имеется место остановки маршрутных ТС, обозначенное разметкой 1.17 и знаком 5.16 «Место остановки автобуса и (или) троллейбуса» (п. 8.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если не будет создано помех движению маршрутных транспортных средств.', 'Нет.'])
	},
		{
		id: 510,
		imageName: _elm_lang$core$Maybe$Just('26-10.jpg'),
		question: 'По какой траектории Вы можете продолжить движение?',
		hint: 'Вы можете продолжить движение только по траектории Б, так как при повороте на дорогу с реверсивным движением (знак 5.10) Вы обязаны, независимо от количества полос на этой дороге, занять крайнюю правую полосу. Перестроение возможно только после того, как станет ясно, по каким еще полосам разрешается движение в данном направлении (п. 9.8).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 511,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешён ли обгон на регулируемых перекрёстках?',
		hint: 'На регулируемых перекрёстках обгон запрещён (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Запрещён.'])
	},
		{
		id: 512,
		imageName: _elm_lang$core$Maybe$Just('26-12.jpg'),
		question: 'Водитель какого автомобиля нарушил правила остановки?',
		hint: 'При наличии обочины остановка и стоянка ТС разрешаются только на ней (п. 12.1). Автомобили Б и В, несмотря на достаточную ширину обочины, целиком или частично находятся на проезжей части дороги, создавая помехи движению других ТС.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только Б и В.', 'Все нарушили.'])
	},
		{
		id: 513,
		imageName: _elm_lang$core$Maybe$Just('26-13.jpg'),
		question: 'Кто должен уступить дорогу?',
		hint: 'На данном перекрёстке порядок движения определяется не знаками приоритета, а сигналами светофора, т.е. перекресток является регулируемым (пп. 6.15 и 13.3). Водитель трамвая, движущегося в направлении стрелки, включенной в дополнительной секции одновременно с красным сигналом светофора, должен уступить дорогу автомобилю, проезжающему по пересекаемой дороге слева на зелёный сигнал (п. 13.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель автомобиля, приближающийся слева.', 'Водитель трамвая.'])
	},
		{
		id: 514,
		imageName: _elm_lang$core$Maybe$Just('26-14.jpg'),
		question: 'Вы намерены повернуть налево. Кому Вы должны уступить дорогу?',
		hint: 'Независимо от конфигурации перекрёстка равнозначных дорог сохраняется общий порядок проезда, и вы, поворачивая налево, должны уступить дорогу обоим ТС, находящимся справа от Вас (пп. 13.11 и 13.12).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обоим транспортным средствам.', 'Только легковому автомобилю.', 'Только грузовому автомобилю.'])
	},
		{
		id: 515,
		imageName: _elm_lang$core$Maybe$Just('26-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'Поскольку Вы подъезжаете к перекрёстку по второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги»), то Вы должны уступить дорогу автобусу и легковому автомобилю (п. 13.9). По отношению к мотоциклу Вы пользуетесь преимуществом, так как оба находитесь на второстепенных дорогах (пп. 13.10 и 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковому автомобилю.', 'Только автобусу и легковому автомобилю.', 'Всем транспортным средствам.'])
	},
		{
		id: 516,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны поступить, если сразу за пешеходным переходом образовался затор?',
		hint: 'Правила запрещают въезжать на пешеходный переход, если за ним образовался затор, который вынудит водителя остановиться на пешеходном переходе. В такой ситуации Вы имеете право остановиться непосредственно перед пешеходным переходом, а не за 5 м перед ним, как это предусмотрено в случае преднамеренного прекращения движения (п. 14.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановиться на пешеходном переходе, если нет пешеходов.', 'Остановиться непосредственно перед пешеходным переходом.', 'Остановиться не ближе 5 м до пешеходного перехода.'])
	},
		{
		id: 517,
		imageName: _elm_lang$core$Maybe$Just('26-17.jpg'),
		question: 'На каком рисунке изображен автомобиль, водитель которого не нарушает правил перевозки грузов?',
		hint: 'Правила допускают перевозку груза, если его ширина не превышает 2,55 м (п. 23.5). Однако груз должен быть обозначен знаком «Крупногабаритный груз» в случаях, когда он более чем на 0,4 м выступает за внешний край габаритного огня (п. 23.4), что не выполнил водитель на рис. А.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на А.', 'Только на Б.', 'На обоих.'])
	},
		{
		id: 518,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли устанавливать шторки или жалюзи на заднем стекле легкового автомобиля?',
		hint: 'На заднем стекле легкового автомобиля разрешается устанавливать шторки или жалюзи, но при условии наличия с обеих сторон наружных зеркал заднего вида (Перечень, п. 7.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается, но только при наличии с обеих сторон зеркал заднего вида.', 'Запрещается.'])
	},
		{
		id: 519,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Уменьшение тормозного пути транспортного средства достигается:',
		hint: 'Уменьшение тормозного пути достигается торможением на грани блокировки, так как заблокированные колеса скользят по дороге, увеличивая при этом тормозной путь.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Торможением с блокировкой колес (юзом).', 'Торможением на грани блокировки способом прерывистого нажатия на педаль тормоза.'])
	},
		{
		id: 520,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие меры административного принуждения предусмотрены за управление транспортным средством, на котором установлены стекла (в том числе покртытые прозрачными цветными плёнками), светопропускание которых не соответствует требованиям технического регламента о безопасности колёсных транспортных средств?',
		hint: 'В соответствии с ч. 3 ст 12.5 КоАП управление ТС, на котором установлены стёкла (в том числе покрытые прозрачными цветными плёнками), светопропускание которых не соответствует требованиям технического регламента о безопасности колёсных транспортных средств, влечёт административный штраф в размере 500 рублей. В ч. 2 ст. 27.13 КоАП предусмотрено запрещение эксплуатации такого ТС в случае совершения данного правонарушения. При этом государственные регистрационные знаки подлежат снятию до устранения причины запрещения эксплуатации ТС. Одновременно разрешается движение ТС к месту устранения причины запрещения эксплуатации ТС, но не более чем в течении суток с момента запрещения его эксплуатации.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещение эксплуатации транспортного средства и штраф в размере 500 руб.', 'Запрещение эксплуатации транспортного средства и лишение права управления транспортными средствами на срок от 1 до 3 месяцев.', 'Задержание транспортного средства и штраф в размере 500 рублей.', 'Задержание транспортного средства и лишение права управления транспортными средствами на срок от 1 до 3 месяцев.'])
	},
		{
		id: 521,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Могут ли водители, причастные к дорожно-транспортному происшествию, прибыть на ближайший пост ДПС или в орган полиции для оформления происшествия, если нет пострадавших?',
		hint: 'Если в результате дорожно-транспортного происшествия нет пострадавших, водители могут прибыть на ближайший пост ДПС или в подразделение полиции для оформления происшествия при взаимном согласии в оценке обстоятельств случившегося, предварительно составив схему происшествия и подписав её (п. 2.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Могут.', 'Могут только при взаимном согласии в оценке обстоятельств случившегося и при наличии составленной и подписанной ими схемы дорожно-транспортного происшествия.', 'Не могут.'])
	},
		{
		id: 522,
		imageName: _elm_lang$core$Maybe$Just('27-02.jpg'),
		question: 'Какой знак используется для обозначения границ искусственной неровности?',
		hint: 'Знаки А и Б имеют одинаковое название «Искуственная неровность», однако устанавливаются они относительно такой неровности, предназначенной для принудительного снижения скорости, по-разному. Знак Б (1.17) устанавливается заблаговременно, в населённых пунктах на расстоянии 50 — 100 м от неровности, а вот знак А (5.20) как раз и обозначает границы исскуственной неровности.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только Б и В.'])
	},
		{
		id: 523,
		imageName: _elm_lang$core$Maybe$Just('27-03.jpg'),
		question: 'Каким транспортным средствам разрешена остановка в зоне действия знака?',
		hint: 'Единственным видом ТС, на которые не распространяется действие знака 3.27 «Остановка запрещена», являются маршрутные ТС, которые в зоне действия знака могут останавливаться на обозначенных местах остановок.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только маршрутным транспортным средствам.', 'Только такси с включенным таксометром.', 'Только автомобилям, управляемым инвалидами I и II групп или перевозящим таких инвалидов.'])
	},
		{
		id: 524,
		imageName: _elm_lang$core$Maybe$Just('27-04.jpg'),
		question: 'Управляя каким автомобилем Вы можете опередить легковой автомобиль?',
		hint: 'На стрелке, указывающей направление движения по левой полосе, изображен знак 3.4 «Движение грузовых автомобилей запрещено», который запрещает движение по этой полосе грузовых автомобилей с разрешённой максимальной массой более 3,5 т. Таким образом, Вы можете использовать левую полосу для опережения только на легковом автомобиле или на грузовом с разрешённой максимальной массой менее 3,5 т.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковым.', 'Только легковым или грузовым с разрешенной максимальной массой менее 3,5 т.', 'Любым автомобилем.'])
	},
		{
		id: 525,
		imageName: _elm_lang$core$Maybe$Just('27-05.jpg'),
		question: 'Эта разметка обозначает:',
		hint: 'Данная разметка 1.24.2 дублирует запрещающий знак 3.24 «Ограничение максимальной скорости».',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Номер дороги или маршрута.', 'Рекомендуемую скорость движения на данном участке дороги.', 'Разрешенную максимальную скорость на данном участке дороги.'])
	},
		{
		id: 526,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Чем Вы должны руководствоваться, если указания регулировщика противоречат сигналам светофора и значениям дорожных знаков?',
		hint: 'Сигналы регулировщика имеют главенствующее значение по отношению к сигналам светофора, требованиям дорожных знаков или разметки (п. 6.15). Вы должны руководствоваться указаниями регулировщика, даже если они противоречат сигналам светофора и требованиям дорожных знаков.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Требованиями дорожных знаков.', 'Значениями сигналов светофора.', 'Указаниями регулировщика.'])
	},
		{
		id: 527,
		imageName: _elm_lang$core$Maybe$Just('27-07.jpg'),
		question: 'Такой сигнал рукой, подаваемый мотоциклистом, движущимся по второй полосе, информирует:',
		hint: 'Установленный на данном перекрёстке знак 5.15.1 «Направления движения по полосам» информирует о том, что поворот направо возможен с обеих полос движения. Мотоциклист, движущийся по второй полосе, вытянул в сторону и согнул в локте под прямым углом вверх левую руку, что соответствует световому сигналу правого поворота. Следовательно, он сообщает о своем намерении повернуть направо, как и мотоциклист на правой полосе, вытянувший в сторону правую руку (п. 8.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении продолжить движение прямо.', 'О его намерении повернуть направо.', 'О его намерении остановиться.'])
	},
		{
		id: 528,
		imageName: _elm_lang$core$Maybe$Just('27-08.jpg'),
		question: 'При перестроении на правую полосу Вы:',
		hint: 'Вам необходимо перестроиться на правую полосу, уступая при этом дорогу всем ТС, движущимся по ней (п. 8.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу всем транспортным средствам, движущимся по соседней полосе.', 'Имеете преимущество.'])
	},
		{
		id: 529,
		imageName: _elm_lang$core$Maybe$Just('27-09.jpg'),
		question: 'По какой траектории Вы можете выполнить разворот?',
		hint: 'В данной ситуации Вы можете выполнить разворот, двигаясь по любой траектории. На перекрёстке знак 3.18.2 «Поворот налево запрещён» устанавливает запрет лишь на выполнение левого поворота, а вне перекрёстка, двигаясь по траектории Б, Вы тоже не нарушаете Правил, ибо прерывистую линию разметки можно пересекать для выполнения манёвров в любом месте.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 530,
		imageName: _elm_lang$core$Maybe$Just('27-10.jpg'),
		question: 'По какой полосе Вы можете продолжить движение, опередив грузовой автомобиль в населенном пункте?',
		hint: 'В населённых пунктах на дорогах, имеющих две полосы движения в данном направлении, разрешается использовать любую, наиболее удобную полосу движения (п. 9.4). Следовательно, опередив грузовой автомобиль, Вы можете продолжить движение по любой полосе.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по правой.', 'По любой.'])
	},
		{
		id: 531,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешён ли обгон на подъёмах?',
		hint: 'Обгон запрещён только в конце подъёма, так как не обеспечена видимость встречных ТС (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещён.', 'Запрещён только в конце подъёма.', 'Разрешён.'])
	},
		{
		id: 532,
		imageName: _elm_lang$core$Maybe$Just('27-12.jpg'),
		question: 'Разрешена ли водителям остановка в указанных местах?',
		hint: 'В данном случае остановка запрещена обоим водителям, так как расстояние между ТС и сплошной линией разметки менее 3 метров (п. 12.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена только мотоциклисту.', 'Запрещена.'])
	},
		{
		id: 533,
		imageName: _elm_lang$core$Maybe$Just('27-13.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'Если регулировщик обращён к Вам левым боком, а правая рука вытянута вперёд, движение вам разрешено во всех направлениях, в том числе направо. Трамвай по данному сигналу регулировщика мог бы двигаться только налево, движение прямо ему запрещено (п. 6.10). Значит, Вы можете проехать перекрёсток первым.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу трамваю.', 'Проедете перекресток первым.'])
	},
		{
		id: 534,
		imageName: _elm_lang$core$Maybe$Just('27-14.jpg'),
		question: 'Вы намерены развернуться. Ваши действия?',
		hint: 'Очередность проезда перекрёстков равнозначных дорог не зависит от конфигурации перекрёстков. В данной ситуации Вы выедете на перекрёсток и, уступив дорогу легковому автомобилю, который окажется справа от Вас (п. 13.11), завершите разворот.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Развернетесь первым.', 'Выедете на перекрёсток и, уступив дорогу автомобилю, завершите разворот.'])
	},
		{
		id: 535,
		imageName: _elm_lang$core$Maybe$Just('27-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Каковы Ваши действия при жёлтом мигающем сигнале светофора?',
		hint: 'При жёлтом мигающем-сигнале светофора перекресток считается нерегулируемым (п. 13.3), и Вам следует руководствоваться знаком приоритета 2.1 «Главная дорога» и табличкой 8.13 «Направление главной дороги». В данном случае следует уступить дорогу только легковому автомобилю, который, также как и Вы, находится на главной дороге и является для Вас «помехой справа» (пп. 13.10 и 13.11). По отношению к трамваю Вы пользуетесь преимуществом, поскольку он движется по второстепенной дороге (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу только трамваю.', 'Уступите дорогу только автомобилю.', 'Дождетесь включения зелёного сигнала светофора и продолжите движение.'])
	},
		{
		id: 536,
		imageName: _elm_lang$core$Maybe$Just('27-16.jpg'),
		question: 'На каком наименьшем расстоянии до ближайшего рельса Вы должны остановиться?',
		hint: 'При отсутствии шлагбаума Вы должны остановиться не ближе 10 метров от ближайшего рельса (п. 15.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['5 м.', '10 м.', '15 м.', '20 м.'])
	},
		{
		id: 537,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое расстояние должно быть обеспечено между буксирующим и буксируемым транспортными средствами при буксировке на гибкой сцепке?',
		hint: 'При буксировке на гибкой сцепке расстояние между буксирующим и буксируемым ТС должно быть от 4 до 6 метров (п. 20.3). Этим обеспечиваются минимально достаточный обзор и возможность своевременно остановиться при резком торможении переднего автомобиля. Большая длина троса недопустима из-за чрезмерной длины состава ТС.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 4 м.', 'От 4 до 6 м.', 'Правилами не регламентируется.'])
	},
		{
		id: 538,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Зависит ли выбор бокового интервала от скорости движения?',
		hint: 'С увеличением скорости увеличиваются и поперечные отклонения от задаваемой водителем траектории движения. Это происходит за счет боковой эластичности колес, неровностей покрытия, воздействия ветра и люфтов в механизмах рулевого управления. Поэтому, увеличивая скорость, водители должны увеличивать боковой интервал.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выбор бокового интервала от скорости движения не зависит.', 'При увеличении скорости движения боковой интервал необходимо увеличить.'])
	},
		{
		id: 539,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении на каком автомобиле увеличение скорости может способствовать устранению заноса задней оси?',
		hint: 'Действия водителя по устранению заноса (скольжения задних колес в сторону) на переднеприводных и заднеприводных автомобилях различны. На переднеприводном автомобиле при увеличении скорости ведущие передние колеса «потянут» за собой задние, тем самым, устраняя занос. На заднеприводном автомобиле увеличение скорости усилит «набегание» задних ведущих колес на передние, тем самым, усиливая занос.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На переднеприводном.', 'На заднеприводном.'])
	},
		{
		id: 540,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'За какие административные правонарушения, связанные с наличием состояния опьянения, предусмотрено лишение права управления транспортными средствами сроком на три года?',
		hint: 'В соответствии с ч. 4 ст. 12.8 КоАП повторное совершение правонарушения в виде управления транспортным средством водителем, находящимся в состоянии опьянения (ч. 1 ст. 12.8), или передачи управления транспортным средством лицу, находящемуся в состоянии опьянения (ч. 2 ст. 12.8), влечёт лишение права управления транспортными средствами на срок 3 года.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['За управление транспортным средством водителем, находящимся в состоянии опьянения; за передачу управления транспортным средством лицу, находящемуся в состоянии опьянения.', 'За управление транспортным средством водителем, находящимся в состоянии опьянения и не имеющим права управления транспортными средствами либо лишенным этого права.', 'За повторное совершение следующего правонарушения: управление транспортным средством водителем, находящимся в состоянии опьянения; за передачу управления транспортным средством лицу, находящемуся в состоянии опьянения.'])
	},
		{
		id: 541,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Обязаны ли Вы предоставлять транспортное средство медицинским и фармацевтическим работникам для перевозки граждан в ближайшее лечебное-профилактическое учреждение в случаях, угрожающих их жизни?',
		hint: 'Водитель обязан, независимо от направления своего движения, предоставлять транспортное средство медицинским и фармацевтическим работникам для транспортировки граждан в ближайшее лечебно-профилактическое учреждение в случаях, угрожающих их жизни (п. 2.3.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обязаны только при движении в попутном направлении.', 'Обязаны независимо от направления движения.', 'Не обязаны.'])
	},
		{
		id: 542,
		imageName: _elm_lang$core$Maybe$Just('28-02.jpg'),
		question: 'По какой траектории Вы можете продолжить движение?',
		hint: 'На этом перекрёстке на пересекаемой дороге три проезжие части. Знак 4.1.2 «Движение направо» распространяет свое действие только на первое пересечение проезжих частей, перед которым он установлен, предписывая всем ТС поворот направо на первую проезжую часть, т.е. только по траектории А.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 543,
		imageName: _elm_lang$core$Maybe$Just('28-03.jpg'),
		question: 'Разрешено ли Вам произвести остановку для посадки пассажира?',
		hint: 'Знак 3.29 «Стоянка запрещена по нечётным числам месяца» запрещает только стоянку. Следовательно, остановиться в этом месте, в том числе и для посадки пассажиров, Вы можете в любой день месяца.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только по чётным числам месяца.', 'Разрешено только по нечётным числам месяца.', 'Не разрешено.'])
	},
		{
		id: 544,
		imageName: _elm_lang$core$Maybe$Just('28-04.jpg'),
		question: 'Какие знаки используются для обозначения номера, присвоенного дороге (маршруту)?',
		hint: 'Для обозначения номера, присвоенного дороге или маршруту, используются знаки 6.14.1 «Номер маршрута» (А и Б). При этом установленные на автомагистралях и дорогах, входящих в систему европейских дорог (буква «Е»), они всегда имеют зелёный фон. Знаки повторяются через 15 — 20 км. Знак В (6.13 «Километровый знак») показывает расстояние до начала или конца дороги (в километрах) и устанавливается через каждый километр.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только А и Б.', 'Все.'])
	},
		{
		id: 545,
		imageName: _elm_lang$core$Maybe$Just('28-05.jpg'),
		question: 'Эта разметка обозначает:',
		hint: 'Разметкой 1.15 обозначают места, где велосипедная дорожка пересекает проезжую часть дороги. При этом на нерегулируемом пересечении велосипедной дорожки вне перекрёстка водители велосипедов и мопедов должны уступить дорогу ТС, движущимся по дороге (п. 24.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Место, где велосипедная дорожка пересекает проезжую часть.', 'Место, где велосипедист имеет преимущество.', 'Место пешеходного перехода.'])
	},
		{
		id: 546,
		imageName: _elm_lang$core$Maybe$Just('28-06.jpg'),
		question: 'В каких направлениях Вам разрешено движение?',
		hint: 'В данной ситуации регулировщик не изменяет существующую на перекрёстке организацию движения (п. 6.15). Сигнал регулировщика (п. 6.10) и дорожный знак 5.7.1 «Выезд на дорогу с одностороннем движением» разрешают проехать перекресток только прямо или направо.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только прямо.', 'Только направо.', 'Прямо или направо.'])
	},
		{
		id: 547,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны обозначить свое транспортное средство при дорожно-транспортном происшествии?',
		hint: 'При дорожно-транспортном происшествии ТС должно быть обозначено включенной аварийной световой сигнализацией и знаком аварийной остановки (п. 7.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только с помощью аварийной световой сигнализации.', 'Только с помощью знака аварийной остановки.', 'Обоими перечисленными способами.'])
	},
		{
		id: 548,
		imageName: _elm_lang$core$Maybe$Just('28-08.jpg'),
		question: 'По какой траектории Вам разрешено продолжить движение налево?',
		hint: 'Поворот налево может осуществляться на любую полосу пересекаемой проезжей части, однако при выезде с пересечения проезжих частей Вы не должны оказаться на полосе встречного движения (п. 8.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по В.', 'По любой.'])
	},
		{
		id: 549,
		imageName: _elm_lang$core$Maybe$Just('28-09.jpg'),
		question: 'Разрешено ли водителю подъехать задним ходом к пассажиру на этом участке дороги?',
		hint: 'Знак 4.1.1 «Движение прямо» не запрещает движение задним ходом. Поэтому водителю разрешено подъехать к пассажиру задним ходом.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 550,
		imageName: _elm_lang$core$Maybe$Just('28-10.jpg'),
		question: 'Разрешается ли Вам, управляя грузовым автомобилем с разрешенной максимальной массой более 2,5 т, выехать на третью полосу в данной ситуации?',
		hint: 'На дорогах, имеющих для движения в одном направлении три и более полосы, грузовым автомобилям с разрешенной максимальной массой более 2,5 тонн выезжать на крайнюю левую полосу разрешается только для поворота налево и разворота (п. 9.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только для поворота налево или разворота.', 'Разрешается только для опережения.', 'Запрещается.'])
	},
		{
		id: 551,
		imageName: _elm_lang$core$Maybe$Just('28-11.jpg'),
		question: 'Можете ли Вы обогнать трактор, управляя грузовым автомобилем с разрешенной максимальной массой не более 3,5 т?',
		hint: 'Знак 3.22 «Обгон грузовым автомобилям запрещён» запрещает обгон только грузовым автомобилям с разрешённой максимальной массой более 3,5 т. Следовательно, в данной ситуации Вы можете обогнать трактор (Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если скорость трактора менее 30 км/ч.', 'Нет.'])
	},
		{
		id: 552,
		imageName: _elm_lang$core$Maybe$Just('28-12.jpg'),
		question: 'В каком месте Вы можете произвести остановку?',
		hint: 'Вы можете остановиться в любом месте, так как в населённых пунктах (знак 5.23.1 «Начало населённого пункта») на дорогах с одной полосой движения для каждого направления без трамвайных путей посередине остановка разрешена как на правой, так и на левой стороне дороги (п. 12.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только В.', 'Только Б и В.', 'В любом.'])
	},
		{
		id: 553,
		imageName: _elm_lang$core$Maybe$Just('28-13.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Зелёный сигнал светофора дает право на движение вам и встречным ТС (п. 6.2). При этом, поворачивая налево, Вы должны уступить дорогу трамваю (п. 13.6) и легковому автомобилю, поворачивающим направо (п. 13.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автомобилю.', 'Только трамваю.', 'Автомобилю и трамваю.', 'Никому.'])
	},
		{
		id: 554,
		imageName: _elm_lang$core$Maybe$Just('28-14.jpg'),
		question: 'Намереваясь продолжить движение в прямом направлении, Вы должны:',
		hint: 'Вы должны уступить дорогу приближающемуся справа грузовому автомобилю, поскольку проезжаете перекрёсток равнозначных дорог (п. 13.11). При этом конфигурация перекрёстка не имеет значения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать перекрёсток первым.', 'Уступить дорогу грузовому автомобилю.'])
	},
		{
		id: 555,
		imageName: _elm_lang$core$Maybe$Just('28-15.jpg'),
		question: 'Вы намерены развернуться. Кому Вы должны уступить дорогу?',
		hint: 'В данном случае Вы находитесь на главной дороге (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги») и имеете преимущество перед легковым автомобилем независимо от направления вашего дальнейшего движения (п. 13.9). А вот по отношению к грузовому автомобилю, также находящемуся на главной дороге, действуют правила проезда перекрёстков равнозначных дорог (п. 13.10), в соответствии с которыми Вы должны уступить ему дорогу, поскольку он приближается справа (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только грузовому автомобилю.', 'Только легковому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 556,
		imageName: _elm_lang$core$Maybe$Just('28-16.jpg'),
		question: 'Двигаясь по автомагистрали, Вы можете произвести остановку:',
		hint: 'В этой ситуации Вы можете остановиться только через 500 м на специальной площадке, о чем информирует знак 7.11 «Место отдыха». Остановка вне специальных площадок на автомагистралях запрещена (п. 16.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только через 500 м.', 'В любом месте правее линии, обозначающей край проезжей части.', 'В любом месте у края проезжей части.'])
	},
		{
		id: 557,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Двигаясь в тёмное время суток вне населённого пункта с дальним светом фар, Вы догнали движущееся впереди Вас транспортное средство. Ваши действия?',
		hint: 'Поскольку дальним светом фар могут быть ослеплены не только встречные водители, но и водители, движущиеся в попутном направлении (через зеркало заднего вида), Правила предписывают вам переключать свет на ближний во всех случаях, когда возможно ослепление (п. 19.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Оставите включенными габаритные огни, выключив дальний свет фар.', 'Переключите дальний свет фар на ближний.', 'Допускаются оба варианта действий.'])
	},
		{
		id: 558,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны поступить, если во время движения отказал в работе спидометр?',
		hint: 'Если в пути на вашем автомобиле отказал в работе спидометр, то эксплуатация автомобиля запрещена (Перечень, п. 7.4). В этом случае Вы должны попытаться устранить неисправность на месте, а если это сделать невозможно, надо следовать к месту стоянки или ремонта с соблюдением необходимых мер предосторожности (п. 2.3.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Продолжить намеченную поездку с особой осторожностью.', 'Прекратить дальнейшее движение.', 'Попытаться устранить неисправность на месте, а если это невозможно, то следовать к месту стоянки или ремонта с соблюдением необходимых мер предосторожности.'])
	},
		{
		id: 559,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'На повороте возник занос задней оси заднеприводного автомобиля. Ваши действия?',
		hint: 'Занос заднеприводного автомобиля может возникнуть при увеличении скорости на повороте из-за «набегания» задних ведущих колес на передние. В этом случае целесообразно слегка уменьшить подачу топлива, не вызывая резкого торможения двигателем, и повернуть рулевое колесо в сторону заноса. Торможение при заносе только ухудшает ситуацию.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Увеличить подачу топлива, рулевым колесом стабилизировать движение.', 'Притормозить и повернуть рулевое колесо в сторону заноса.', 'Значительно уменьшить подачу топлива, не меняя положения рулевого колеса.', 'Слегка уменьшить подачу топлива и повернуть рулевое колесо в сторону заноса.'])
	},
		{
		id: 560,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое административное наказание может быть применено к водителю транспортного средства за оставление в нарушение Правил места дорожно-транспортного происшествия, участником которого он является?',
		hint: 'В ч. 2 ст. 12.27 КоАП установлена административная ответственность за оставление водителем ТС в нарушение ПДД места ДТП, участником которого он является (в п. 2.5 ПДД установлена обязанность такого водителя в экстренных случаях доставить пострадавшего на своём ТС в ближайшее лечебное учереждение и возвратиться к месту ДТП; в п. 2.6 ПДД предусмотрено, что в случае отсутствия пострадавших водители при соблюдении ряда условий могут сами прибыть на ближайший пост ДПС или в орган полиции для оформления ДТП; в соответствии с п. 2.6 ПДД в случае, если в результате ДТП вред причинён только имуществу, и наличия других остоятельств возможно оформление докуметнов о ДТП без участия уполномоченных сотрудников полиции). Указанная ответственность представляет собой лишение права управления ТС на срок от 1 года до 1,5 лет или административный арест на срок до 15 суток.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Штраф в размере 1000 до 1500 рублей.', 'Штраф в размере 1000 до 1500 рублей или лишение права управления транспортными средствами на срок от 1 года до 1,5 лет.', 'Лишение права управления транспортными средствами на срок от одного года до 1,5 лет или административный арест на срок до 15 суток.'])
	},
		{
		id: 561,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает требование уступить дорогу?',
		hint: 'В зависимости от конкретной обстановки Ваши действия при выполнении требования уступить дорогу могут быть различными, т.е. не всегда требуется обязательная остановка, главное — не создавать помех участникам движения, которым предоставлено право на первоочерёдное движение (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы должны обязательно остановиться, чтобы пропустить других участников движения.', 'Вы не должны возобновлять или продолжать движение, осуществлять какой-либо манёвр, если это может вынудить других участников движения, имеющих по отношению к Вам преимущество, изменить направление движения или скорость.', 'Вы должны остановиться только при наличии дорожного знака «Уступите дорогу».'])
	},
		{
		id: 562,
		imageName: _elm_lang$core$Maybe$Just('29-02.jpg'),
		question: 'Какие знаки предоставляют Вам преимущество при проезде нерегулируемых перекрёстков?',
		hint: 'Преимущество при проезде нерегулируемых перекрёстков предоставляют знаки, обозначающие главную дорогу: знаки 2.1 «Главная дорога» (А) и 2.3.3 «Примыкание второстепенной дороги» (В) (п. 1.2, термин «Главная дорога»). Знаки 2.3.4 — 2.3.7 устанавливаются, если угол между осями главной и второстепенной дорог составляет менее 60 градусов. Знак 2.7 «Преимущество перед встречным движением» (Б) применяется на узких участках дорог, где затруднён встречный разъезд.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'А и В.', 'Все.'])
	},
		{
		id: 563,
		imageName: _elm_lang$core$Maybe$Just('29-03.jpg'),
		question: 'Разрешён ли Вам обгон?',
		hint: 'Знак 3.20 «Обгон запрещён» допускает в зоне своего действия обгон двухколесных мотоциклов без коляски, а также мопедов, гужевых повозок и тихоходных ТС (Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Запрещён, если скорость мотоцикла более 30 км/ч.', 'Запрещён.'])
	},
		{
		id: 564,
		imageName: _elm_lang$core$Maybe$Just('29-04.jpg'),
		question: 'Разрешено ли водителю поставить грузовой автомобиль на стоянку в этом месте указанным способом?',
		hint: 'Знак 6.4 «Место стоянки» с табличкой 8.6.2 «Способ постановки транспортного средства на стоянку» и п. 12.2 Правил запрещают любым грузовым автомобилям использовать для стоянки край тротуара.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если разрешенная максимальная масса автомобиля менее 3,5 т.', 'Нет.'])
	},
		{
		id: 565,
		imageName: _elm_lang$core$Maybe$Just('29-05.jpg'),
		question: 'Такой вертикальной разметкой обозначают:',
		hint: 'Разметкой 2.2 обозначают нижний край пролётного строения тоннелей, мостов и путепроводов при расстоянии от него до покрытия дороги менее 5 м.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только нижний край пролетного строения тоннелей, мостов и путепроводов.', 'Только въезд в неосвещенные тоннели.', 'Любые элементы дорожных сооружений, представляющие опасность.'])
	},
		{
		id: 566,
		imageName: _elm_lang$core$Maybe$Just('29-06.jpg'),
		question: 'В каком месте Вам следует остановиться?',
		hint: 'При запрещающем сигнале светофора и наличии стоп-линий на проезжей части Вы должны остановиться непосредственно перед ней (п. 6.13).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перед светофором.', 'Перед стоп-линией.', 'В любом.'])
	},
		{
		id: 567,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Должны ли Вы подавать сигналы указателями поворота при маневрировании на территории автостоянки или АЗС?',
		hint: 'Любое маневрирование, в том числе и на территориях автостоянок, АЗС и т.п., должно быть понятно и безопасно для других участников движения. Поэтому Вы обязаны подавать сигналы световыми указателями поворота соответствующего направления и в этих случаях (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, но только при наличии в непосредственной близости других транспортных средств.'])
	},
		{
		id: 568,
		imageName: _elm_lang$core$Maybe$Just('29-08.jpg'),
		question: 'Кто нарушает правила поворота на перекрёстке?',
		hint: 'Водитель мотоцикла, поворачивающий налево, должен был занять на проезжей части данного направления не только левую полосу, но и крайнее левое положение на ней (п. 8.5). Водитель легкового автомобиля при повороте направо должен был двигаться ближе к правому краю проезжей части, т.е. повернуть на крайнюю правую полосу (п. 8.6). Следовательно, оба водителя нарушают Правила.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель мотоцикла, поворачивающий налево.', 'Только водитель автомобиля.', 'Оба нарушают.', 'Никто не нарушает.'])
	},
		{
		id: 569,
		imageName: _elm_lang$core$Maybe$Just('29-09.jpg'),
		question: 'Разрешено ли водителю движение задним ходом при отсутствии других участников движения?',
		hint: 'Движение задним ходом на дорогах, обозначенных знаком 5.5 «Дорога с односторонним движением», не запрещается. Но поскольку на пути движения расположен пешеходный переход, на котором движение задним ходом запрещено (п. 8.12), водителю можно двигаться задним ходом на данном участке дороги только до пешеходного перехода.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено, но только до пешеходного перехода.', 'Запрещено.'])
	},
		{
		id: 570,
		imageName: _elm_lang$core$Maybe$Just('29-10.jpg'),
		question: 'Можете ли Вы выехать на крайнюю левую полосу для обгона в данной ситуации?',
		hint: 'Низкая скорость движения гужевой повозки, прерывистая линия разметки и отсутствие встречных ТС не дают вам права выполнить такой манёвр, так как крайняя левая полоса на трехполосной дороге предназначена только для встречного движения (п. 9.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, если гужевая повозка движется со скоростью менее 30 км/ч.'])
	},
		{
		id: 571,
		imageName: _elm_lang$core$Maybe$Just('29-11.jpg'),
		question: 'Разрешено ли Вам совершить такой манёвр?',
		hint: 'Вы приближаетесь к нерегулируемому перекрёстку равнозначных дорог. На нерегулируемых перекрёстках обгон запрещён при движении по дороге, не являющейся главной (п. 11.4). Следовательно, выполнение такого манёвра запрещено.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Запрещено.'])
	},
		{
		id: 572,
		imageName: _elm_lang$core$Maybe$Just('29-12.jpg'),
		question: 'Кто из водителей нарушил правила остановки?',
		hint: 'Никто из водителей не нарушил Правила, так как остановка запрещена только непосредственно на железнодорожном переезде (п. 12.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель автомобиля А.', 'Только водитель автомобиля Б.', 'Оба не нарушили.', 'Оба нарушили.'])
	},
		{
		id: 573,
		imageName: _elm_lang$core$Maybe$Just('29-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Зелёный сигнал светофора дает Вам право двигаться налево (п. 6.2). Но, поскольку на данном перекрёстке перед светофором, установленным на разделительной полосе, имеется стоп-линия, Вы должны остановиться перед ней в ожидании зелёного сигнала (п. 13.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выполните манёвр без остановки на перекрёстке.', 'Выехав на перекрёсток, остановитесь у стоп-линии и, дождавшись зелёного сигнала светофора на разделительной полосе, завершите манёвр.'])
	},
		{
		id: 574,
		imageName: _elm_lang$core$Maybe$Just('29-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Вы должны уступить дорогу трамваю, который на перекрёстке равнозначных дорог имеет преимущество перед безрельсовыми ТС (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу трамваю.', 'Проедете перекрёсток первым.'])
	},
		{
		id: 575,
		imageName: _elm_lang$core$Maybe$Just('29-15.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Следует ли уступить дорогу грузовому автомобилю, выезжающему с грунтовой дороги?',
		hint: 'На данном перекрёстке, несмотря на то, что грузовой автомобиль находится справа, Вы не обязаны уступать ему дорогу. Дело в том, что Вы движетесь по дороге с твердым покрытием, являющейся главной по отношению к грунтовой дороге, на которой находится грузовой автомобиль (пп. 13.9 и 1.2, термин «Главная дорога»).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 576,
		imageName: _elm_lang$core$Maybe$Just('29-16.jpg'),
		question: 'Разрешено ли Вам, управляя грузовым автомобилем, совершить опережение в данной ситуации?',
		hint: 'На всех дорогах, имеющих для движения в одном направлении три и более полосы, грузовым автомобилям с разрешенной максимальной массой более 2,5 т разрешается выезжать на крайнюю левую полосу только для поворота налево и разворота (п. 9.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если разрешенная максимальная масса Вашего автомобиля менее 2,5 т.', 'Да, независимо от величины разрешенной максимальной массы Вашего автомобиля.', 'Нет.'])
	},
		{
		id: 577,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы должны быть включены на транспортном средстве при движении в светлое время суток?',
		hint: 'Любые из перечисленных приборов обладают достаточным световым потоком для обозначения ТС в дневное время и могут быть использованы водителем при движении в светлое время суток (п. 19.4 или п. 19.5).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только дневные ходовые огни.', 'Только фары ближнего света.', 'Только противотуманные фары.', 'Любые из перечисленных.'])
	},
		{
		id: 578,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При какой неисправности Вам запрещено дальнейшее движение на транспортном средстве во время дождя или снегопада?',
		hint: 'Во время дождя или снегопада вам запрещается дальнейшее движение на ТС, если не действует стеклоочиститель со стороны водителя (п. 2.3.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работают предусмотренные конструкцией транспортного средства стеклоомыватели.', 'Не действует стеклоочиститель со стороны водителя.', 'Не работают в установленном режиме стеклоочистители.'])
	},
		{
		id: 579,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что должен сделать водитель, чтобы быстро восстановить эффективность тормозов после проезда через водную преграду?',
		hint: 'После проезда водной преграды необходимо просушить тормозные колодки. Многократное непродолжительное нажатие на педаль тормоза позволит быстро восстановить эффективность тормозов всех колес автомобиля.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Продолжить движение, немного натянув рычаг ручного тормоза.', 'Продолжить движение и просушить тормозные колодки многократными непродолжительными нажатиями на педаль тормоза.', 'Продолжить движение с малой скоростью без притормаживания.'])
	},
		{
		id: 580,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Каким образом оказать первую помощью при ранении, полученном в результате ДТП?',
		hint: 'Медицинские перчатки надевают для того, чтобы защитить себя от заражения инфекциями, передающимися (от пострадавшего) через кровь. Для защиты раны от инфицирования её не промывают, а закрывают марлевой стерильной салфеткой, закрепляя её лейкопластырем по краям или бинтовой повязкой. Заклеивание раны сплошным лейкопластырем герметизирует её, что приводит к тяжелым осложнениям.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Промыть рану водой, удалить инородные тела, внедрившиеся в рану, пролижить стерильную вату, закрепив её бинтовой повязкой.', 'Надеть медицинские перчатки, рану промыть спиртовым раствором йода, смазать лечебной мазью и заклеить сплошным лейкопластырем.', 'Надеть медицинские перчатки, рану не промывать, на рану наложить марлевую стерильную салфетку, закрепив её лейкопластырем по краям и бинтовой повязкой.'])
	},
		{
		id: 581,
		imageName: _elm_lang$core$Maybe$Just('30-01.jpg'),
		question: 'На каком рисунке изображен перекрёсток?',
		hint: 'Перекрёсток изображён только на левом рисунке, где к дороге с твердым покрытием примыкает грунтовая дорога. Выезды с прилегающих территорий (в том числе из дворов) перекрёстками не являются (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на левом.', 'Только на правом.', 'На обоих.'])
	},
		{
		id: 582,
		imageName: _elm_lang$core$Maybe$Just('30-02.jpg'),
		question: 'По какой траектории Вы можете выполнить разворот?',
		hint: 'Примыкающая слева дорога имеет две проезжие части, и знак 4.1.1 «Движение прямо» действует только на первое пересечение проезжих частей, перед которым он установлен, запрещая здесь поворот налево и разворот, а на втором пересечении никаких ограничений на выполнение маневров нет, и здесь Вы можете развернуться (траектория Б).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 583,
		imageName: _elm_lang$core$Maybe$Just('30-03.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте по нечётным числам месяца?',
		hint: 'Зона действия знака 3.29 «Стоянка запрещена по нечётным числам месяца» распространяется до ближайшего перекрёстка (Приложение 1), поэтому в указанном месте стоянка вашего ТС по нечётным числам месяца запрещена. Однако при одновременной установке знаков 3.29 и 3.30 «Стоянка запрещена по чётным числам месяца» эти знаки действуют только до 19 часов (Приложение 1). Следовательно, Вы можете поставить автомобиль на стоянку после указанного времени.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено только после 19 часов.', 'Запрещено.'])
	},
		{
		id: 584,
		imageName: _elm_lang$core$Maybe$Just('30-04.jpg'),
		question: 'Какими знаками обозначают участки, на которых водитель обязан уступить дорогу пешеходам, находящимся на проезжей части:',
		hint: 'Участки дорог, на которых Правила предоставляют преимущество в движении пешеходам и обязывают водителей уступить им дорогу, обозначаются знаками Б (5.19.1 «Пешеходный переход») и В (5.21 «Жилая зона»). Знак А (1.22 «Пешеходный переход») лишь предупреждает водителя о приближении к пешеходному переходу и не выдвигает конкретных требований (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Б.', 'Только Б и В.', 'Всеми.'])
	},
		{
		id: 585,
		imageName: _elm_lang$core$Maybe$Just('30-05.jpg'),
		question: 'Что означает надпись на проезжей части дороги?',
		hint: 'Такая разметка 1.22 обозначает номер дороги или маршрута.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Расстояние до ближайшего перекрёстка.', 'Расстояние до ближайшего населённого пункта.', 'Номер дороги или маршрута.'])
	},
		{
		id: 586,
		imageName: _elm_lang$core$Maybe$Just('30-06.jpg'),
		question: 'В каких направлениях Вы можете продолжить движение?',
		hint: 'В данной ситуации регулировщик выполняет функцию светофора и не изменяет существующую на перекрёстке организацию движения, в том числе не отменяет требования дорожной разметки (п. 6.15). Находясь на правой полосе, Вы можете повернуть только направо, так как разметка 1.18 на проезжей части показывает, что из правой полосы возможно движение только направо. Для движения прямо вам необходимо было занять левую полосу.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Прямо или направо.', 'Только прямо.', 'Только направо.'])
	},
		{
		id: 587,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны действовать, если намереваетесь повернуть налево или выполнить разворот на двухполосной дороге?',
		hint: 'Перед поворотом налево или разворотом требуется включить световые сигналы левого поворота (п. 8.1). Однако перед тем как подать сигнал, следует убедиться, что вас никто не обгоняет. Сделать это необходимо, поскольку Правила (п. 11.3) запрещают препятствовать обгону повышением скорости или иными действиями, в частности преждевременной подачей сигнала левого поворота. В этом случае обгоняющий вас окажется невольным нарушителем, так как он не имеет права обгонять ТС, которое подает сигнал о повороте налево (п. 11.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Включить левые указатели поворота, затем приступить к манёвру.', 'Убедиться, что Вас не обгоняют, затем включить левые указатели поворота и приступить к манёвру.'])
	},
		{
		id: 588,
		imageName: _elm_lang$core$Maybe$Just('30-08.jpg'),
		question: 'Вы собираетесь начать движение от тротуара. Должны ли Вы уступить дорогу автомобилю, выполняющему разворот?',
		hint: 'Прежде чем начать движение от тротуара, Вы должны убедиться в том, что при этом не создаете опасности и помех другим участникам движения. Следовательно, Вы должны уступить дорогу автомобилю, выполняющему разворот (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 589,
		imageName: _elm_lang$core$Maybe$Just('30-09.jpg'),
		question: 'Разрешено ли водителю легкового автомобиля подъехать задним ходом к пассажиру, стоящему на тротуаре в тоннеле?',
		hint: 'Подъехать задним ходом к пешеходу, стоящему на тротуаре в тоннеле, нельзя, поскольку движение задним ходом в тоннеле запрещено (пп. 8.12 и 12.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если не будут созданы помехи другим участникам движения.', 'Нет.'])
	},
		{
		id: 590,
		imageName: _elm_lang$core$Maybe$Just('30-10.jpg'),
		question: 'По какой полосе Вам разрешено движение на легковом автомобиле в данной ситуации?',
		hint: 'На свободной дороге, расположенной в населённом пункте и имеющей три полосы движения в данном направлении, Вам разрешается двигаться по любой полосе, кроме левой (п. 9.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['По любой.', 'Только по правой.', 'По любой, кроме крайней левой.'])
	},
		{
		id: 591,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Запрещён ли обгон в тоннелях?',
		hint: 'Учитывая повышенную опасность проезда искусственных сооружений на дорогах, ПДД запрещают обгон на мостах, путепроводах, эстакадах и под ними, а также в тоннелях (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не запрещён.', 'Запрещён.'])
	},
		{
		id: 592,
		imageName: _elm_lang$core$Maybe$Just('30-12.jpg'),
		question: 'Нарушил ли водитель легкового автомобиля Правила, поставив автомобиль на стоянку указанным способом?',
		hint: 'Ставить автомобиль под углом к краю проезжей части разрешается только там, где имеется местное уширение проезжей части. В других местах водитель обязан ставить автомобиль параллельно краю проезжей части (п. 12.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Нет.', 'Нет, если при этом не создаются помехи для движения других транспортных средств.', 'Да.'])
	},
		{
		id: 593,
		imageName: _elm_lang$core$Maybe$Just('30-13.jpg'),
		question: 'Вы намерены повернуть налево. Следует ли уступить дорогу грузовому автомобилю?',
		hint: 'При повороте налево по разрешающему сигналу светофора Вы обязаны уступить дорогу встречному грузовому автомобилю, поворачивающему направо (п. 13.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 594,
		imageName: _elm_lang$core$Maybe$Just('30-14.jpg'),
		question: 'При жёлтом мигающем сигнале светофора, двигаясь прямо, Вы должны:',
		hint: 'При жёлтом мигающем сигнале светофора перекресток считается нерегулируемым (п. 13.3), и поэтому Вы должны, руководствуясь правилами проезда перекрёстков равнозначных дорог, уступить дорогу гужевой повозке, приближающейся справа (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановиться и продолжить движение только после включения зелёного сигнала светофора.', 'Уступить дорогу гужевой повозке.', 'Проехать перекресток одновременно со встречным автомобилем.'])
	},
		{
		id: 595,
		imageName: _elm_lang$core$Maybe$Just('30-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Проезжая данный перекресток неравнозначных дорог по направлению главной дороги (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), Вы пользуетесь преимуществом не только перед находящимися на второстепенной дороге автобусом и легковым автомобилем (п. 13.9), но и перед мотоциклом, который, как и Вы, движется по главной дороге и для которого Вы являетесь «помехой справа» (пп. 13.10 и 13.11).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Легковому автомобилю и автобусу.', 'Только мотоциклу.', 'Никому.'])
	},
		{
		id: 596,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях водитель транспортного средства, приближающийся к нерегулируемому пешеходному переходу, обязан снизить скорость или остановиться перед переходом?',
		hint: 'Правила предписывают водителю, приближающемуся к нерегулируемоему пешеходному переходу, снизить скорость или остановиться, пропуская пешеходов, переходящих проезжую часть или вступивших на нее (п. 14.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Если пешеход переходит проезжую часть.', 'Если пешеход вступил на проезжую часть.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 597,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Обязаны ли Вы переключить дальний свет на ближний, если водитель встречного транспортного средства периодическим переключением фар покажет необходимость этого?',
		hint: 'Принимая во внимание возможность изменения угла наклона светового потока в зависимости от профиля дороги, нагрузки и других факторов, Правила обязывают Вас при встречном разъезде переключить дальний свет на ближний на расстоянии более 150 м до ТС, если водитель встречного ТС периодическим переключением света фар покажет необходимость этого (п. 19.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обязаны, только если расстояние до встречного транспортного средства менее 150 м.', 'Обязаны, даже если расстояние до встречного транспортного средства более 150 м.', 'Не обязаны.'])
	},
		{
		id: 598,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Принято считать, что среднее время реакции водителя составляет:',
		hint: 'Время реакции водителя изменяется в пределах от 0,4 до 1,6 секунды и зависит от его психофизических особенностей, опыта, сложности дорожной обстановки и многих других факторов. Исходя из многочисленных исследований, принято считать, что среднее время реакции водителя составляет около 1 секунды.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Примерно 0,5 секунды.', 'Примерно 1 секунду.', 'Примерно 2 секунды.'])
	},
		{
		id: 599,
		imageName: _elm_lang$core$Maybe$Just('30-19.jpg'),
		question: 'На каком рисунке показано правильное положение рук на рулевом колесе?',
		hint: 'Правильное положение рук показано на правом рисунке. Такое положение рук обеспечивает готовность водителя выполнить любой манёвр, не потеряв при этом контакта с рулевым колесом.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['На левом.', 'На среднем.', 'На правом.'])
	},
		{
		id: 600,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При совершении административного правонарушения, влекущего задержание транспортного средства, оно задерживается до:',
		hint: 'В соответствии с ч. 1 ст. 27.13 КоАП ТС подлежит задержанию при управлении ТС водителем, находящимся в состоянии опьянения, а равно водителем, не имеющим или лишенным права управления ТС либо не имеющим при себе соответствующих документов, предусмотренных ПДД, а также при совершении некоторых иных нарушений ПДД. При этом ТС задерживается до устранения причины задержания.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Составления протокола об административном правонарушении.', 'Устранения причины задержания.', 'Рассмотрения дела об административном правонарушении.'])
	},
		{
		id: 601,
		imageName: _elm_lang$core$Maybe$Just('31-01.jpg'),
		question: 'Сколько полос для движения имеет данная дорога?',
		hint: 'Дорога имеет четыре полосы для движения, так как автомобили могут двигаться в каждом направлении в два ряда (пп. 1.2 и 9.1 , Приложение 2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Две.', 'Четыре.'])
	},
		{
		id: 602,
		imageName: _elm_lang$core$Maybe$Just('31-02.jpg'),
		question: 'Какие знаки информируют Вас о приближении к началу участка дороги со встречным движением?',
		hint: 'О приближении к началу участка дороги со встречным движением вас информирует знак А (1.21 «Двустороннее движение»), который устанавливается перед участком дороги (проезжей части) с двусторонним движением, если ему предшествует участок с односторонним движением. Знак Б (5.8 «Реверсивное движение») показывает начало участка дороги, на котором по одной или нескольким полосам движения его направление может изменяться на противоположное, а знак В (5.15.1 «Направление движения по полосам») применяется при организации движения в одном направлении по двум полосам трехполосной дороги (Приложение 1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только А и Б.', 'Все.'])
	},
		{
		id: 603,
		imageName: _elm_lang$core$Maybe$Just('31-03.jpg'),
		question: 'Разрешено ли Вам подъехать к месту своей работы, расположенному в зоне действия этих знаков?',
		hint: 'Табличка 8.5.2 «Рабочие дни» информирует о том, что знак 3.2 «Движение запрещено» действует только в рабочие дни недели. Однако действие знака 3.2 не распространяется на ТС граждан, которые проживают или работают в обозначенной зоне. Таким образом, Вы можете подъехать к месту своей работы в любой день.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено только в нерабочие дни.', 'Разрешено только в рабочие дни.', 'Разрешено в любой день.', 'Не разрешено.'])
	},
		{
		id: 604,
		imageName: _elm_lang$core$Maybe$Just('31-04.jpg'),
		question: 'Вы буксируете неисправный автомобиль. По какой полосе Вы можете продолжить движение?',
		hint: 'Перед вами знак 5.15.4 «Начало полосы», обозначающий начало дополнительной полосы на подъеме, на котором изображен знак 4.6 «Ограничение минимальной скорости». Это означает, что по левой полосе можно продолжить движение со скоростью не менее 60 км/ч. Поскольку при буксировке неисправного автомобиля скорость не должна превышать 50 км/ч, Вы должны перестроиться на дополнительную полосу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по правой.', 'По любой.'])
	},
		{
		id: 605,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам пересекать двойную сплошную линию продольной разметки?',
		hint: 'Сплошная двойная линия разметки 1.3 применяется для разделения транспортных потоков противоположных направлений на дорогах, имеющих не менее четырех полос для движения. Правила запрещают пересекать её во всех случаях.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается только при выезде из дворов и других прилегающих территорий.', 'Разрешается только при обгоне.', 'Разрешается только при интенсивном движении.', 'Не разрешается.'])
	},
		{
		id: 606,
		imageName: _elm_lang$core$Maybe$Just('31-06.jpg'),
		question: 'О чём информируют Вас стрелки на зелёном сигнале светофора?',
		hint: 'Чёрные контурные стрелки, нанесённые на зелёный сигнал светофора, информируют, что в ином направлении, в данном случае направо, движение регулируется дополнительной секцией (п. 6.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На этом перекрёстке всегда запрещён поворот направо.', 'Движение направо регулируется дополнительной секцией.'])
	},
		{
		id: 607,
		imageName: _elm_lang$core$Maybe$Just('31-07.jpg'),
		question: 'Вытянутая рука водителя стоящего легкового автомобиля является предупредительным сигналом, информирующим Вас:',
		hint: 'Перед началом движения водитель обязан подавать сигналы световыми указателями поворота соответствующего направления, а если они отсутствуют или не исправны — рукой. Вытянутая в сторону левая рука соответствует включению левых световых указателей поворота. Следовательно, водитель информирует Вас о своем намерении начать движение с обочины (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении начать движение.', 'О его просьбе оказать помощь.', 'Об имеющейся опасности за поворотом.'])
	},
		{
		id: 608,
		imageName: _elm_lang$core$Maybe$Just('31-08.jpg'),
		question: 'Водитель какого транспортного средства нарушает Правила?',
		hint: 'Знак 4.3 «Круговое движение» информирует о том, что на данном перекрёстке организовано круговое движение. При въезде на такие перекрёстки не обязательно занимать крайнее правое положение на проезжей части (п. 8.5). Что же касается выезда с перекрёстка, то здесь действует общее для всех перекрёстков правило — для поворота направо необходимо занять крайнее правое положение и поворот должен осуществляться на крайнюю правую полосу (п. 8.6). Этому правилу следует лишь водитель грузового автомобиля.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легкового автомобиля.', 'Обоих транспортных средств.', 'Никто не нарушает.'])
	},
		{
		id: 609,
		imageName: _elm_lang$core$Maybe$Just('31-09.jpg'),
		question: 'Разрешается ли Вам выполнить разворот на перекрёстке?',
		hint: 'Разворот на перекрёстках не запрещён (п. 8.11). Знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги» также не ограничивают выполнение данного манёвра.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 610,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вы имеете право двигаться в населенном пункте со скоростью более 60 км/ч?',
		hint: 'Правила запрещают в населённых пунктах движение со скоростью более 60 км/ч, в том числе при обгоне (п. 10.2), за исключением тех мест, где установлены знаки 3.24 «Ограничение максимальной скорости», допускающие более высокие предельные скорости движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при выполнении обгона.', 'Только, если установлены дорожные знаки, разрешающие движение со скоростью более 60 км/ч.', 'В обоих перечисленных случаях.'])
	},
		{
		id: 611,
		imageName: _elm_lang$core$Maybe$Just('31-11.jpg'),
		question: 'При затруднённом встречном разъезде на таком участке дороги преимущество имеет:',
		hint: 'Знак 1.14 «Крутой подъем» предупреждает водителя легкового автомобиля о приближении к подъему. При затруднённом встречном разъезде на данном участке дороги уступить должен водитель встречного грузового автомобиля, поскольку он движется на спуск (п. 11.7).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель легкового автомобиля.', 'Водитель грузового автомобиля.'])
	},
		{
		id: 612,
		imageName: _elm_lang$core$Maybe$Just('31-12.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте?',
		hint: 'Ставить автомобиль на стоянку в условиях ограниченной видимости (знак 1.11.1 «Опасный поворот») запрещается только на проезжей части (пп. 12.4 и 12.5). Поставив автомобиль на стоянку на обочине, Вы не нарушите Правил.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 613,
		imageName: _elm_lang$core$Maybe$Just('31-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'В случае, когда регулировщик расположен к Вам левым или правым боком, а его руки опущены либо вытянуты в стороны, движение Вам разрешено прямо и направо (п. 6.10). Чтобы повернуть налево, Вам необходимо дождаться разрешающего сигнала регулировщика. Ожидать сигнала Вы должны перед стоп-линией (п. 6.13).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выехав на перекрёсток, дождетесь сигнала регулировщика, разрешающего поворот, и повернёте.', 'Остановитесь у стоп-линии, дождетесь сигнала регулировщика, разрешающего поворот, и повернёте.', 'Выехав на перекрёсток, уступите дорогу встречному автомобилю и повернёте.'])
	},
		{
		id: 614,
		imageName: _elm_lang$core$Maybe$Just('31-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Должны ли Вы уступить дорогу грузовому автомобилю?',
		hint: 'Руководствуясь правилами проезда нерегулируемых перекрёстков равнозначных дорог, Вы должны уступить дорогу приближающемуся справа грузовому автомобилю (п. 13.11), который, в свою очередь, уступая дорогу трамваю, все же имеет право выехать на пересекаемую проезжую часть.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 615,
		imageName: _elm_lang$core$Maybe$Just('31-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'На этом перекрёстке неравнозначных дорог (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги») Вы должны уступить дорогу мотоциклу и автобусу, поскольку они движутся по главной дороге (п. 13.9). Следует уступить дорогу и подъехавшему справа легковому автомобилю, при разъезде с которым Вы должны руководствоваться правилами проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только мотоциклу.', 'Только мотоциклу и легковому автомобилю.', 'Только автобусу и мотоциклу.', 'Всем транспортным средствам.'])
	},
		{
		id: 616,
		imageName: _elm_lang$core$Maybe$Just('31-16.jpg'),
		question: 'Можно ли обучать вождению на этой дороге?',
		hint: 'Учебная езда на дорогах, обозначенных знаком 5.1 «Автомагистраль» и предназначенных для движения с высокими скоростями, запрещена без каких-либо исключений (п. 16.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Можно, используя для движения только правую полосу проезжей части.', 'Можно только при наличии данного опознавательного знака.', 'Нельзя.'])
	},
		{
		id: 617,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли использовать в светлое время суток противотуманные фары вместо ближнего света фар?',
		hint: 'В дневное время для обозначения ТС водитель может использовать противотуманные фары вместо ближнего света фар (п. 19.4), кроме случаев движения в тоннелях и в условиях недостаточной видимости (п. 19.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не разрешается.', 'Разрешается, кроме случаев движения в тоннелях и в условиях недостаточной видимости.', 'Разрешается.'])
	},
		{
		id: 618,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам движение до места ремонта или стоянки в тёмное время суток с негорящими (из-за неисправности) фарами и задними габаритными огнями?',
		hint: 'В тёмное время суток с негорящими (из-за неисправности) или отсутствующими фарами и задними габаритными огнями Вам запрещено дальнейшее движение даже до места ремонта или стоянки (п. 2.3.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещается только на дорогах без искусственного освещения.', 'Запрещается.', 'Разрешается.'])
	},
		{
		id: 619,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как должен поступить водитель в случае потери сцепления колес с дорогой из-за образования «водяного клина»?',
		hint: 'Во время сильного дождя вода сохраняется в зоне контакта колес с покрытием, в результате чего может (особенно при изношенном протекторе) образоваться «водяной клин», а колеса начинают скользить по покрытию. В этом случае водителю следует плавно снизить скорость, применяя торможение двигателем, так как любое резкое изменение скорости движения может привести к заносу автомобиля.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Увеличить скорость.', 'Снизить скорость резким нажатием на педаль тормоза.', 'Снизить скорость, применяя торможение двигателем.'])
	},
		{
		id: 620,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как влияет утомление водителя на его внимание и реакцию?',
		hint: 'В утомлённом состоянии время реакции увеличивается, а внимание притупляется.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Внимание притупляется, время реакции уменьшается.', 'Внимание притупляется, время реакции увеличивается.', 'Внимание не притупляется, время реакции увеличивается.'])
	},
		{
		id: 621,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'По требованию каких лиц водитель обязан проходить освидетельствование на состояние алкогольного опьянения и медицинское освидетельствование на состояние опьянения?',
		hint: 'Водитель обязан проходить освидетельствование на состояние алкогольного опьянения и медицинское освидетельствование на состояние опьянения по требованию должностных лиц, которым предоставлено право государственного надзора и контроля за безопасностью движения и эксплуатации ТС (п. 2.3.2). В соответствии с Положением о государственной инспеции безопасности дорожного движения Министерства внутренних дел Российской Федерации к таким лицам относятся сотрудники Госавтоинспекции.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должностных лиц, которым предоставлено право государственного надзора и контроля за безопасностью дорожного движения и эксплуатации транспортного средства.', 'Всех сотрудников полиции.', 'Только регулировщика.'])
	},
		{
		id: 622,
		imageName: _elm_lang$core$Maybe$Just('32-02.jpg'),
		question: 'Какие знаки информируют Вас, что на перекрёстке необходимо уступить дорогу транспортным средствам, приближающимся слева?',
		hint: 'Знак А (2.3.3 «Примыкание второстепенной дороги») относится к знакам приоритета и информирует о том, что Вы находитесь на главной дороге и на перекрёстке имеете преимущество перед ТС, приближающимися слева. Знаки Б (2.4 «Уступите дорогу» и 8.13 «Направление главной дороги») информируют о необходимости на перекрёстке уступить дорогу ТС, приближающимся по главной дороге (направление главной дороги показано на знаке 8.13) как слева, так и со встречного направления. Знак В (5.13.1 «Выезд на дорогу с полосой для маршрутных транспортных средств») не устанавливает очередности проезда перекрёстка и лишь информирует о выезде на дорогу, где встречная полоса выделена для маршрутных ТС.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только А и Б.', 'Все.'])
	},
		{
		id: 623,
		imageName: _elm_lang$core$Maybe$Just('32-03.jpg'),
		question: 'Разрешено ли Вам при управлении легковым автомобилем с прицепом продолжить движение в прямом направлении?',
		hint: 'Знак 3.7 «Движение с прицепом запрещено» запрещает движение с прицепом только грузовых автомобилей и тракторов, а также буксировку любых механических транспортных средств. На легковом автомобиле с прицепом Вы можете проехать в прямом направлении.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, если Вы проживаете в зоне действия знака.', 'Запрещено.'])
	},
		{
		id: 624,
		imageName: _elm_lang$core$Maybe$Just('32-04.jpg'),
		question: 'В каком из направлений Вам разрешено движение?',
		hint: 'На этом перекрёстке Вы можете двигаться в любом из показанных направлений. Знак 5.7.2 «Выезд на дорогу с односторонним движением» информирует о направлении движения на пересекаемой дороге: справа налево, исключая, таким образом, поворот направо.',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только А и Б.', 'Только Б и В.', 'Во всех указанных.'])
	},
		{
		id: 625,
		imageName: _elm_lang$core$Maybe$Just('32-05.jpg'),
		question: 'Разметкой ввиде буквы «А» обозначают:',
		hint: 'Разметкой 1.23 (в виде буквы «А») обозначает специальную полосу для маршрутных ТС, т.е. автобусов и троллейбусов, движущихся по установленным маршрутам с обозначенными местами остановок (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Специальную полосу для любых автобусов.', 'Специальную полосу для маршрутных транспортных средств.', 'Место остановки и стоянки любых автобусов.'])
	},
		{
		id: 626,
		imageName: _elm_lang$core$Maybe$Just('32-06.jpg'),
		question: 'Можете ли Вы обогнать грузовой автомобиль?',
		hint: 'Вы не можете обогнать грузовой автомобиль, так как красный сигнал реверсивного светофора запрещает использовать для движения в данном направлении другие полосы, кроме крайней правой (п. 6.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 627,
		imageName: _elm_lang$core$Maybe$Just('32-07.jpg'),
		question: 'Обязаны ли Вы включить правые указатели поворота при въезде на этот перекрёсток?',
		hint: 'Правилами разрешено въезжать на перекрёсток с круговым движением как с правой, так и с левой полосы (п. 8.5). Поскольку при въезде совершается поворот направо, Вы обязаны включить указатели поворота (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.', 'Да, но только при наличии движущихся сзади транспортных средств.'])
	},
		{
		id: 628,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Выезжая с прилегающей территории, Вы обязаны уступить дорогу:',
		hint: 'Выезжая на дорогу с прилегающей территории, Вы обязаны уступить дорогу всем ТС и пешеходам (п. 8.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только механическим транспортным средствам.', 'Только маршрутным транспортным средствам.', 'Любым транспортным средствам и пешеходам.'])
	},
		{
		id: 629,
		imageName: _elm_lang$core$Maybe$Just('32-09.jpg'),
		question: 'Разрешён ли разворот на участках дорог, обозначенных этим знаком?',
		hint: 'Знак 5.5 «Дорога с односторонним движением» информирует о том, что на данном участке дороги по всей ее ширине осуществляется движение в одном направлении (указано стрелкой на знаке). В связи с этим разворот запрещён, так как Вы будете двигаться навстречу движению.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён только в населенных пунктах.', 'Разрешён только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 630,
		imageName: _elm_lang$core$Maybe$Just('32-10.jpg'),
		question: 'В каком направлении Вы можете продолжить движение по средней полосе?',
		hint: 'В соответствии с п. 9.3 Правил, выехав на среднюю полосу, Вы можете продолжить движение только налево или в обратном направлении. На трехполосных дорогах для движения в прямом направлении должна использоваться правая полоса.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Прямо или налево.', 'Только налево.', 'Налево или в обратном направлении.'])
	},
		{
		id: 631,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Запрещён ли обгон на пешеходном переходе?',
		hint: 'Обгон запрещён на пешеходных переходах только при наличии на них пешеходов (п. 11.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещён только при наличии на нем пешеходов.', 'Запрещён во всех случаях.', 'Не запрещён.'])
	},
		{
		id: 632,
		imageName: _elm_lang$core$Maybe$Just('32-12.jpg'),
		question: 'В каком из указанных мест Вы можете остановиться?',
		hint: 'Вне населённых пунктов остановка разрешена на правой стороне дороги (п. 12.1). При наличии обочины Вы должны остановиться только на ней, т.е. в месте В.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только В.', 'Только А и В.', 'Только Б и В.', 'В любом.'])
	},
		{
		id: 633,
		imageName: _elm_lang$core$Maybe$Just('32-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Данный перекрёсток регулируемый, и очерёдность движения на нём определяется не знаками приоритета, а сигналами светофора (пп. 6.15 и 13.3). Поворачивая налево, Вы должны уступить дорогу автобусу, движущемуся со встречного направления прямо (п. 13.4). Грузовой автомобиль с включенным проблесковым маячком оранжевого цвета преимущества в проезде перекрёстков не имеет (п. 3.4), поэтому его водитель должен дожидаться разрешающего сигнала светофора.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу только грузовому автомобилю с включенным проблесковым маячком.', 'Уступите дорогу только автобусу.'])
	},
		{
		id: 634,
		imageName: _elm_lang$core$Maybe$Just('32-14.jpg'),
		question: 'Намереваясь продолжить движение в прямом направлении, Вы должны:',
		hint: 'Даже не имея на перекрёстке равнозначных дорог помехи справа (п. 13.11), Вы должны уступить дорогу легковому автомобилю с включенными проблесковым маячком синего цвета и специальным звуковым сигналом (п. 3.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать перекрёсток первым.', 'Пропустить автомобиль с включенными проблесковым маячком и специальным звуковым сигналом.'])
	},
		{
		id: 635,
		imageName: _elm_lang$core$Maybe$Just('32-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'На этом перекрёстке неравнозначных дорог, где главная дорога меняет направление (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), очередность разъезда с трамваем и легковым автомобилем определяется правилами проезда перекрёстков равнозначных дорог, поскольку и вы, и они находитесь на главной дороге (пп. 13.9 и 13.10). В соответствии с этими правилами дорогу следует уступить трамваю, поворачивающему направо, и легковому автомобилю (п. 13.11). По отношению к мотоциклу Вы пользуетесь преимуществом, так как он находится на второстепенной дороге (п. 13.9).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваю.', 'Только легковому автомобилю.', 'Трамваю и легковому автомобилю.', 'Всем транспортным средствам.'])
	},
		{
		id: 636,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли движение по автомагистрали, если Ваше транспортное средство по техническому состоянию развивает скорость менее 40 км/ч?',
		hint: 'В рассматриваемом случае Вы не можете двигаться по автомагистрали, так как из-за низкой скорости будете мешать движению других ТС. Поэтому Правила запрещают на таких дорогах движение ТС, скорость которых по техническому состоянию менее 40 км/ч (п. 16.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только по крайней правой полосе.', 'Запрещается.'])
	},
		{
		id: 637,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Перевозка груза запрещается, если он:',
		hint: 'Правила разрешают перевозку груза при условии, что он не закрывает внешние световые приборы и световозвращатели, регистрационные и опознавательные знаки (п. 23.3). Можно перевозить груз на сиденье, а также груз, выступающий более чем на 1 м спереди или сзади за габариты ТС, обозначив его знаком «Крупногабаритный груз» (п. 23.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выступает более чем на 1 м за габариты транспортного средства спереди или сзади.', 'Закрывает внешние световые приборы, световозвращатели, регистрационные и опознавательные знаки.', 'Установлен на сиденье для пассажиров.'])
	},
		{
		id: 638,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам устанавливать на одну ось легкового автомобиля шины с различным рисунком протектора?',
		hint: 'Рисунок протектора существенно влияет на сцепление шин с дорогой, поэтому не допускается устанавливать на одну ось шины с различным рисунком протектора (Перечень, п. 5.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается на любую ось.', 'Разрешается только на заднюю ось.', 'Не разрешается.'])
	},
		{
		id: 639,
		imageName: _elm_lang$core$Maybe$Just('32-19.jpg'),
		question: 'На каком рисунке водитель выполняет левый поворот по траектории, обеспечивающей наибольшую безопасность движения?',
		hint: 'Безопасная траектория движения при выполнении левого поворота изображена на левом рисунке, так как такая траектория обеспечивает меньшую вероятность выезда автомобиля за пределы дороги под действием центробежной силы.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['На правом.', 'На левом.'])
	},
		{
		id: 640,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как обеспечить восстановление и поддержание проходимости дыхательных путей пострадавшего при подготовке к проведению сердечно-лёгочной реанимации?',
		hint: 'Начинать подготовку к проведению сердечно-лёгочной реанимации необходимо с очищения ротовой полости пострадавшего от слизи и рвотных масс. Поскольку пострадавший лежащий в безсознательном состоянии на спине, может погинбнуть от удушения в результате западаения языка, необходимо обеспечить проходимость дыхательных путей: запрокинуть ему голову, поднять подбородок и выдвинуть нижнюю челюсть.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Очистить ротовую полость от слизи и рвотных масс. Уложить пострадавшего на спину, запрокинуть ему голову, поднять подбородок и выдвинуть нижнюю челюсть.', 'Уложить пострадавшего на бок, наклонить его голову к груди. Очистить ротовую полость от слизи и рвотных масс.', 'Уложить пострадавшего на спину и, не запрокидывая ему голову, сжать щёки, чтобы развдинуть губы и раскрыть рот. Очистить ротовую полость от слизи и рвотных масс.'])
	},
		{
		id: 641,
		imageName: _elm_lang$core$Maybe$Just('33-01.jpg'),
		question: 'Какой манёвр намеревается выполнить водитель легкового автомобиля?',
		hint: 'Водитель легкового автомобиля намеревается выполнить перестроение с дальнейшим опрережением грузового автомобиля (п. 1.2). Этот маневр не является обгоном, так как не осуществляется выезд на полосу встречного движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обгон.', 'Перестроение с дальнейшим опережением.', 'Объезд.'])
	},
		{
		id: 642,
		imageName: _elm_lang$core$Maybe$Just('33-02.jpg'),
		question: 'Этот знак:',
		hint: 'Знак 1.34.3 «Направление поворота» указывает направления движения на разветвлении дорог или на Т-образном перекрёстке, как в данном случае, Знак, установленный напротив проезда, не имеющего продолжения, позволяет водителям правильно сориентироваться в обстановке, в частности в ночное время.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Показывает направления движения на перекрёстке.', 'Указывает, что на пересекаемой дороге движение осуществляется по двум полосам.'])
	},
		{
		id: 643,
		imageName: _elm_lang$core$Maybe$Just('33-03.jpg'),
		question: 'С какой скоростью Вы можете двигаться на грузовом автомобиле с разрешённой максимальной массой не более 3,5 т?',
		hint: 'Табличка 8.4.1 «Вид транспортного средства» с изображением грузового автомобиля распространяет действие знака, с которым она применена, только на грузовые автомобили с разрешённой максимальной массой более 3,5 т. Таким образом, Вы на своём автомобиле можете двигаться со скоростью не более 90 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не более 50 км/ч.', 'Не более 70 км/ч.', 'Не более 90 км/ч.'])
	},
		{
		id: 644,
		imageName: _elm_lang$core$Maybe$Just('33-04.jpg'),
		question: 'Какие знаки указывают протяженность зоны для разворота?',
		hint: 'Знак Б (6.3.2 «Зона разворота») указывает протяжённость участка дороги выделенного для разворота. Знаки А (6.3.1 «Место для разворота» и 8.1.1 «Расстояние до объекта») информируют водителя, что разворот можно выполнить через 50 м (Приложение 1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Все.'])
	},
		{
		id: 645,
		imageName: _elm_lang$core$Maybe$Just('33-05.jpg'),
		question: 'Этой линией обозначают:',
		hint: 'Такой жёлтой линией разметки 1.17 обозначают места остановки маршрутных ТС и стоянки такси, на которых остановка других ТС возможна только для посадки и высадки пассажиров при условии, что это не создаст помех для движения маршрутных ТС (п. 12.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Участок дороги, где запрещено движение вблизи от тротуара.', 'Места, где запрещена любая остановка.', 'Места остановки маршрутных транспортных средств и стоянки такси.'])
	},
		{
		id: 646,
		imageName: _elm_lang$core$Maybe$Just('33-06.jpg'),
		question: 'Обязаны ли Вы уступить дорогу автомобилю «Скорой медицинской помощи» с выключенным проблесковым маячком?',
		hint: 'В этой ситуации Вы имеете преимущество и не должны уступать дорогу автомобилю «Скорой помощи». ТС оперативных служб имеют преимущество перед другими участниками движения только в том случае, если включены проблесковый маячок синего цвета и специальный звуковой сигнал (п. 3.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 647,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Дает ли Вам преимущество подача сигнала указателями поворота?',
		hint: 'Подача сигнала указателями поворота не дает водителю преимущества и не освобождает его от принятия мер предосторожности даже при завершении обгона (п. 8.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, но только при завершении обгона.', 'Нет.'])
	},
		{
		id: 648,
		imageName: _elm_lang$core$Maybe$Just('33-08.jpg'),
		question: 'Разрешён ли Вам поворот направо по указанной траектории в данной ситуации?',
		hint: 'При повороте направо Вы должны двигаться по возможности ближе к правому краю проезжей части (п. 8.6). Поскольку в данной ситуации правая полоса дороги, на которую Вы поворачиваете, занята стоящим автомобилем, поворот направо по указанной траектории разрешён.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 649,
		imageName: _elm_lang$core$Maybe$Just('33-09.jpg'),
		question: 'Разрешено ли Вам выполнить разворот по указанным траекториям?',
		hint: 'Дорожные знаки 5.6 «Конец дороги с односторонним движением» и 1.21 «Двустороннее движение» информируют о том, что Вы находитесь на дороге, на которой по всей ширине движение осуществляется в одном направлении и заканчивается это одностороннее движение на перекрёстке. Поэтому разворот для движения навстречу потоку ТС по любой траектории запрещён.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено только по А.', 'Разрешено только по Б.', 'Запрещено.'])
	},
		{
		id: 650,
		imageName: _elm_lang$core$Maybe$Just('33-10.jpg'),
		question: 'По какой полосе Вы можете продолжить движение, завершив опережение на дороге вне населённого пункта?',
		hint: 'Вне населённого пункта запрещается занимать левые полосы движения при свободных правых (п. 9.4). Следовательно, завершив опережение, Вы должны перестроиться на правую полосу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по правой.', 'По любой.'])
	},
		{
		id: 651,
		imageName: _elm_lang$core$Maybe$Just('33-11.jpg'),
		question: 'Разрешено ли Вам обогнать грузовой автомобиль в конце подъёма?',
		hint: 'Обгон запрещён в конце подъёма (п. 11.4). Поскольку ширина проезжей части не позволяет провести обгон без выезда на полосу встречного движения, то грузовой автомобиль в данной ситуации обгонять запрещено.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено, если скорость грузового автомобиля не более 30 км/ч.', 'Разрешено.', 'Запрещено.'])
	},
		{
		id: 652,
		imageName: _elm_lang$core$Maybe$Just('33-12.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку в указанном месте при наличии узкой обочины?',
		hint: 'Вне населённого пункта при наличии знака 2.1 «Главная дорога» Вам запрещено ставить автомобиль на стоянку с использованием проезжей части (п. 12.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Разрешено, но только в светлое время суток.', 'Запрещено.'])
	},
		{
		id: 653,
		imageName: _elm_lang$core$Maybe$Just('33-13.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'Такой сигнал регулировщика дает право на движение Вам и водителям трамваев (п. 6.10). А так как для поворота направо вам необходимо пересечь трамвайные пути, Вы обязаны уступить дорогу обоим трамваям (п. 13.6).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу только трамваю А.', 'Уступите дорогу только трамваю Б.', 'Уступите дорогу обоим трамваям.', 'Проедете перекрёсток первым.'])
	},
		{
		id: 654,
		imageName: _elm_lang$core$Maybe$Just('33-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Совершая поворот налево на этом перекрёстке равнозначных дорог, Вы обязаны выехать на него первым, так как справа отсутствуют приближающиеся ТС, и, уступив дорогу встречному мотоциклу, завершить проезд перекрёстка (пп. 13.11 и 13.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Выедете на перекрёсток и, уступив дорогу мотоциклу, завершите поворот.'])
	},
		{
		id: 655,
		imageName: _elm_lang$core$Maybe$Just('33-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'Поскольку Вы находитесь на второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги»), Вы можете проехать перекрёсток неравнозначных дорог, уступив дорогу обоим ТС, которые движутся по главной дороге (п. 13.9).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковому автомобилю.', 'Только грузовому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 656,
		imageName: _elm_lang$core$Maybe$Just('33-16.jpg'),
		question: 'Кто из водителей нарушает Правила?',
		hint: 'На автомагистралях Правила запрещают движение ТС, скорость которых по технической характеристике или состоянию менее 40 км/ч, а также движение грузовых автомобилей с разрешённой максимальной массой более 3,5 т далее второй полосы. Следовательно, нарушителями являются водители грузового автомобиля и трактора (п. 16.1).',
		correctAnswer: 4,
		answers: _elm_lang$core$Native_List.fromArray(
			['Все водители.', 'Никто из водителей.', 'Только водитель трактора.', 'Только водитель легкового автомобиля.', 'Водители грузового автомобиля и трактора.'])
	},
		{
		id: 657,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны поступить при ослеплении дальним светом фар встречных или попутно движущихся транспортных средств?',
		hint: 'При ослеплении водитель на некоторый период (до полной адаптации глаз) теряет возможность объективно оценивать ситуацию на дороге, и поэтому Правила предписывают вам конкретный порядок действий, безопасный для других участников движения: включить аварийную световую сигнализацию, не меняя полосу движения, снизить скорость и остановиться (п. 19.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Принять вправо (в сторону обочины) и остановиться.', 'Включить аварийную сигнализацию и, не меняя полосы движения, снизить скорость и остановиться.', 'Подавая звуковой сигнал, остановиться.'])
	},
		{
		id: 658,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Безопасной дистанцией при движении по сухой дороге на легковом автомобиле можно считать расстояние, которое автомобиль пройдет не менее чем за:',
		hint: 'При движении на лёгковом автомобиле безопасной дистанцией до движущегося впереди ТС считается расстояние, которое может проехать автомобиль за время реакции водителя и время срабатывания тормозной системы. Время реакции водителя может колебаться от 0,4 до 1,6 секунд, время срабатывания тормозной системы с гидравлическим приводом может составлять от 0,1 до 0,4 секунд, это значит, что комфортной дистанцией для легковых автомобилей можно считать расстояние, которое проедет автомобиль за время не менее 2 секунд. При изменении условий движения (дождь, снег, гололедица) водитель должен корректировать дистанцию в сторону её увеличения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['1 секунду.', '2 секунды.', '3 секунды.'])
	},
		{
		id: 659,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие действия водителя приведут к уменьшению центробежной силы, возникающей на повороте?',
		hint: 'Центробежная сила увеличивается при увеличении скорости движения и уменьшения радиуса поворота, поэтому только снижение скорости может уменьшить центробежную силу.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Увеличение скорости движения.', 'Уменьшение скорости движения.', 'Уменьшение радиуса прохождения поворота.'])
	},
		{
		id: 660,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как влияет алкоголь на время реакции водителя?',
		hint: 'Опасность алкогольного опьянения при управлении ТС заключается в том, что реакция водителя замедляется, а значит, время реакции, необходимое для принятия решения, увеличивается.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Время реакции уменьшается.', 'Время реакции увеличивается.', 'Алкоголь на время реакции не влияет.'])
	},
		{
		id: 661,
		imageName: _elm_lang$core$Maybe$Just('34-01.jpg'),
		question: 'На каких рисунках показана главная дорога?',
		hint: 'Главная дорога показана на верхних рисунках, о чём свидетельствуют установленные на этих дорогах знаки 5.1 «Автомагистраль» и 2.3.2 «Примыкание второстепенной дороги» (п. 1.2). Знак 5.5 «Дорога с односторонним движением», показанный на нижнем рисунке, информирует водителей только о направлении движения ТС (по всей ширине проезжей части).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только на левом верхнем.', 'Только на правом верхнем.', 'Только на верхних.', 'На всех.'])
	},
		{
		id: 662,
		imageName: _elm_lang$core$Maybe$Just('34-02.jpg'),
		question: 'На каком расстоянии до скользкого участка дороги устанавливается этот знак в населённом пункте?',
		hint: 'Знак 1.15 «Скользкая дорога», как и все предупреждающие знаки в населённых пунктах, устанавливается на расстоянии от 50 до 100 м до начала опасного (в данном случае скользкого) участка дороги.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['150 — 300 м.', '50 — 100 м.', 'Непосредственно перед началом скользкого участка.'])
	},
		{
		id: 663,
		imageName: _elm_lang$core$Maybe$Just('34-03.jpg'),
		question: 'Каким транспортным средствам разрешена остановка в зоне действия знака?',
		hint: 'Со знаком 3.27 «Остановка запрещена» применена табличка 8.18 «Кроме инвалидов», которая указывает, что запрет на остановку не распространяется на мотоколяски и автомобили с опознавательным знаком «Инвалид». Такой знак устанавливают на ТС, управляемых инвалидами I и II групп или их перевозящих (Основные положения, п. 8).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только такси с включенным таксометром.', 'Только автомобилям, на которых установлен опознавательный знак «Инвалид».', 'Всем перечисленным транспортным средствам.'])
	},
		{
		id: 664,
		imageName: _elm_lang$core$Maybe$Just('34-04.jpg'),
		question: 'Какой из знаков используется для обозначения кемпинга?',
		hint: 'Знаки сервиса применяются для информации участников о соответствующих объектах. Кемпинг обозначается знаком Б (7.10 «Кемпинг»). Знаки А (7.9 «Гостиница или мотель») и В (7.11 «Место отдыха») обозначают соответствующие объекты и устанавливаются непосредственно у объектов или у мест поворота к ним. Вне населённых пунктов знаки сервиса также устанавливаются предварительно за 60 — 80, 15 — 20 км и 400 — 800 м до объекта.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только В.', 'Б и В.'])
	},
		{
		id: 665,
		imageName: _elm_lang$core$Maybe$Just('34-05.jpg'),
		question: 'Как Вы должны действовать, если реверсивные светофоры выключились?',
		hint: 'При следовании по полосе, обозначенной дорожной разметкой 1.9, направление движения по которой может меняться на противоположное, в случае отключения реверсивных светофоров Вы должны немедленно перестроиться вправо на соседнюю полосу.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Немедленно перестроиться на правую полосу.', 'Можете продолжить движение по полосе только до перекрёстка.', 'При отсутствии встречных транспортных средств продолжить движение по полосе.'])
	},
		{
		id: 666,
		imageName: _elm_lang$core$Maybe$Just('34-06.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение?',
		hint: 'Дополнительная секция с включенным сигналом в виде зелёной стрелки, знак 5.15.1 «Направления движения по полосам» и разметка 1.18 разрешают Вам из левой полосы повернуть налево или развернуться (п. 6.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево.', 'Только в обратном направлении.', 'Налево и в обратном направлении.'])
	},
		{
		id: 667,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как следует обозначить буксируемый автомобиль при отсутствии или неисправности аварийной световой сигнализации?',
		hint: 'При остутствии и неисправности аварийной световой сигнализации на задней части буксируемого механического ТС должен быть закреплен знак аварийной остановки (пункт 7.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Включить габаритные огни.', 'Включить задний противотуманный фонарь.', 'Установить на задней части буксируемого автомобиля знак аварийной остановки.'])
	},
		{
		id: 668,
		imageName: _elm_lang$core$Maybe$Just('34-08.jpg'),
		question: 'Въезжая во двор, Вы обязаны уступить дорогу:',
		hint: 'Поворачивая налево во двор, Вы съезжаете с дороги и поэтому должны уступить дорогу пешеходам и велосипедисту, путь движения которых пересекаете (п. 8.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только велосипедисту.', 'Только пешеходам.', 'Пешеходам и велосипедисту.', 'Никому.'])
	},
		{
		id: 669,
		imageName: _elm_lang$core$Maybe$Just('34-09.jpg'),
		question: 'Разрешён ли Вам разворот в этом месте?',
		hint: 'В местах остановок маршрутных ТС разворот запрещён независимо от наличия или отсутствия маршрутных ТС (п. 8.11).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешён, если не будет создано помех движению маршрутных транспортных средств.', 'Не разрешён.'])
	},
		{
		id: 670,
		imageName: _elm_lang$core$Maybe$Just('34-10.jpg'),
		question: 'Кто из мотоциклистов занял правильное положение на полосе движения?',
		hint: 'В соответствии с п. 9.1 Правил на дороге имеется по одной полосе движения в каждом направлении. При нанесении линий разметки, определяющих границы полос движения, учитывается требование, что ширина полосы должна обеспечивать движение автомобилей в один ряд (п. 1.2). Мотоциклам без бокового прицепа, с учётом их габаритов и необходимых для безопасности движения интервалов, Правила не запрещают двигаться по полосе в два ряда.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только мотоциклист, занимающий левое положение на полосе движения.', 'Только мотоциклист, занимающий правое положение на полосе движения.', 'Оба мотоциклиста.'])
	},
		{
		id: 671,
		imageName: _elm_lang$core$Maybe$Just('34-11.jpg'),
		question: 'В данной ситуации для того чтобы продолжить движение в прямом направлении Вам разрешается:',
		hint: 'Для продолжения движения Вы вправе выполнить любое из перечисленных действий. Следует учитывать, что при перестроении на правую полосу необходимо уступить дорогу всем ТС, движущимся попутно (п. 8.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Объехать грузовой автомобиль справа.', 'Продолжить движение только после того, как грузовой автомобиль выполнит поворот налево.', 'Разрешается любое из перечисленных действий.'])
	},
		{
		id: 672,
		imageName: _elm_lang$core$Maybe$Just('34-12.jpg'),
		question: 'В каком из указанных мест Вы можете произвести остановку?',
		hint: 'Вы можете остановиться только справа за пешеходным переходом в месте Б (п. 12.4). Требование не останавливаться ближе чем за 5 м перед пешеходным переходом будет нарушено не только в месте А, но с учётом того, что движение двустороннее, и в месте В, хотя на данной дороге остановка слева разрешена (п. 12.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только Б и В.', 'Ни в каком.'])
	},
		{
		id: 673,
		imageName: _elm_lang$core$Maybe$Just('34-13.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Ваши действия?',
		hint: 'Включенный указатель поворота информирует Вас о том, что пути движения Вашего автомобиля и трамвая пересекаются на перекрёстке. Учитывая, что данный сигнал регулировщика разрешает Вам движение прямо и одновременно запрещает водителю трамвая поворот направо (п. 6.10), Вы можете проехать перекрёсток первым.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу трамваю.'])
	},
		{
		id: 674,
		imageName: _elm_lang$core$Maybe$Just('34-14.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Руководствуясь правилами проезда перекрёстков равнозначных дорог, Вы должны уступить дорогу только легковому автомобилю, поскольку он находится справа (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу только легковому автомобилю.', 'Уступите дорогу только мотоциклу.'])
	},
		{
		id: 675,
		imageName: _elm_lang$core$Maybe$Just('34-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Очередность проезда перекрёстков неравнозначных дорог не зависит от их конфигурации. Следовательно, Вы, находясь на второстепенной дороге (знаки 2.4 «Уступите дорогу» и 8.13 «Направление главной дороги»), должны уступить дорогу обоим ТС, которые движутся по главной дороге (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Обоим транспортным средствам.', 'Только легковому автомобилю.', 'Только автобусу.'])
	},
		{
		id: 676,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Сигналом остановки для машиниста поезда служат:',
		hint: 'Сигнал, подаваемый машинисту поезда при вынужденной остановке ТС на переезде, представляет собой круговые движения рукой (п. 15.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вытянутые в стороны руки.', 'Круговое движение рукой.', 'Поднятая вверх правая рука.', 'Поднятые вверх обе руки.'])
	},
		{
		id: 677,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы должны быть включены в тоннеле с искусственным освещением?',
		hint: 'В тоннеле с искусственным освещением должны быть включены, в зависимости от наличия встречных или попутных ТС, фары ближнего или дальнего света (п. 19.1). Движение только с габаритными или дневными ходовыми огнями запрещено, так как они не обеспечивают безопасности движения при внезапном отключении освещения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Фары ближнего света или габаритные огни.', 'Фары ближнего света или дневные ходовые огни.', 'Фары ближнего света или дальнего света.'])
	},
		{
		id: 678,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае Вам разрешается эксплуатация автомобиля?',
		hint: 'Из всех перечисленных неисправностей только неработающий стеклоподъёмник не является причиной запрещения эксплуатации вашего автомобиля (Перечень, пп. 4.1 и 4.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не работают в установленном режиме стеклоочистители.', 'Не работают стеклоомыватели.', 'Не работает стеклоподъёмник.'])
	},
		{
		id: 679,
		imageName: _elm_lang$core$Maybe$Just('34-19.jpg'),
		question: 'После длительного движения по двухполосной дороге за грузовым автомобилем на безопасной дистанции у Вас появилась возможность совершить обгон. Ваши действия?',
		hint: 'Начиная обгон после длительного движения на безопасной дистанции за грузовым автомобилем, необходимо сразу перестроиться на полосу встречного движения, после чего провести сближение с обгоняемым ТС. Такие действия дадут возможность водителю грузового автомобиля заметить вас и не мешать вашему маневру, а у вас появится хорошая обзорность, чтобы обеспечить контроль за изменением дорожной обстановки.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Максимально приблизитесь к обгоняемому автомобилю, затем перестроитесь на полосу встречного движения и совершите манёвр.', 'Перестроитесь на полосу встречного движения, после чего произведете сближение с обгоняемым транспортным средством.', 'Допустимы оба варианта действий.'])
	},
		{
		id: 680,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Каким образом проводится сердечно-лёгочная реанимация пострадавшего?',
		hint: 'Непрямой массаж сердца пострадавшего восстанавливает движение крови, что обеспечивает доставку кислорода к тканям. После 30 надавливаний на грудину проводят искусственную вентиляцию лёгких — 2 вдоха методом «Рот ко рту».',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Искусственная вентиляция лёгких и непрямой массаж сердца: вначале 1 вдох методом «Рот ко рту», затем 15 надавливаний на грудину.', 'Непрямой массаж сердца и искусственная вентиляция лёгких: вначале 5 надавливаний на грудину, затем 1 вдох методом «Рот ко рту».', 'Непрямой массаж сердца и искусственная вентиляция лёгких: вначале 30 надавливалний на грудину, затем 2 вдоха методом «Рот ко рту».'])
	},
		{
		id: 681,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает термин «Недостаточная видимость»?',
		hint: 'Под недостаточной понимается видимость дороги менее 300 м, ограниченная метеорологическими условиями и временем суток, а не геометрическими параметрами дороги (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Видимость дороги менее 100 м вблизи опасных поворотов и переломов продольного профиля дороги.', 'Видимость дороги менее 300 м в условиях тумана, дождя, снегопада и т.п., а также в сумерки.', 'Видимость дороги менее 150 м в ночное время.'])
	},
		{
		id: 682,
		imageName: _elm_lang$core$Maybe$Just('35-02.jpg'),
		question: 'В каких из указанных направлений Вы можете продолжить движение на следующем перекрёстке?',
		hint: 'Знак 4.1.1 «Движение прямо», установленный в начале участка дороги (за перекрёстком), запрещает повороты налево и развороты на этом участке. Действие знака в таких случаях распространяется до ближайшего по ходу движения перекрёстка, манёвры на котором этим знаком никак не ограничиваются. Следовательно, Вы можете двигаться в любом из перечисленных направлений.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'А или Б.', 'Во всех.'])
	},
		{
		id: 683,
		imageName: _elm_lang$core$Maybe$Just('35-03.jpg'),
		question: 'Какие знаки разрешают движение со скоростью 60 км/ч?',
		hint: 'Из показанных знаков лишь один — 3.24 «Ограничение максимальной скорости» (знак А) — запрещает движение со скоростью, превышающей указанную на знаке, т.е. 50 км/ч. Знак 4.6 «Ограничение минимальной скорости» (знак Б) не только разрешает, но и обязывает водителей двигаться со скоростью, равной или больше указанной. Знак 6.2 «Рекомендуемая скорость» (знак В) указывает скорость, с которой рекомендуется движение на данном участке дороги, при этом, однако, не исключается возможность двигаться с меньшей или большей скоростью.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Б и В.', 'Ни один из знаков.'])
	},
		{
		id: 684,
		imageName: _elm_lang$core$Maybe$Just('35-04.jpg'),
		question: 'Кто из водителей нарушил правила стоянки?',
		hint: 'Стоянкой в данном месте, обозначенной знаком 6.4 «Место стоянки» в сочетании с табличкой 8.6 «Способ постановки транспортного средства на стоянку», могут воспользоваться только водители легковых автомобилей и мотоциклов, расположив свои ТС только так, как это указано на табличке, — на тротуаре вдоль его края. Грузовым автомобилям, в том числе и с разрешенной максимальной массой до 3,5 т, стоянка в этом месте запрещена любым способом.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только водитель грузового автомобиля.', 'Водители мотоцикла и грузового автомобиля.', 'Все водители.', 'Никто не нарушил.'])
	},
		{
		id: 685,
		imageName: _elm_lang$core$Maybe$Just('35-05.jpg'),
		question: 'По какой траектории Вы можете объехать препятствие?',
		hint: 'Временный дорожный знак 4.2.2 «Объезд препятствия слева» разрешает Вам пересечь линию разметки 1.1 и объехать препятствие только по траектории А (Приложение 2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 686,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что означает сочетание красного и жёлтого сигналов светофора?',
		hint: 'С целью информирования участников движения о предстоящем включении зелёного сигнала светофора применяется сочетание красного и жёлтого сигналов. Такая комбинация сигналов запрещает движение (п. 6.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Неисправна светофорная сигнализация.', 'Вскоре будет включен зелёный сигнал.', 'Вскоре будет включен красный сигнал.'])
	},
		{
		id: 687,
		imageName: _elm_lang$core$Maybe$Just('35-07.jpg'),
		question: 'На каком расстоянии от транспортного средства должен быть выставлен знак аварийной остановки в данной ситуации?',
		hint: 'Знак аварийной остановки устанавливается на расстоянии, обеспечивающем заблаговременное предупреждение других водителей об опасности. В населённых пунктах это расстояние должно быть не менее 15 метров от ТС (п. 7.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не менее 10 м.', 'Не менее 15 м.', 'Не менее 20 м.', 'Не менее 30 м.'])
	},
		{
		id: 688,
		imageName: _elm_lang$core$Maybe$Just('35-08.jpg'),
		question: 'Двигаясь по правой полосе, Вы намерены перестроиться на левую. На каком из рисунков показана ситуация, в которой Вы обязаны уступить дорогу?',
		hint: 'При перестроении с правой полосы на левую Вы обязаны уступить дорогу легковому автомобилю, движущемуся попутно без изменения направления движения по левой полосе. При одновременном перестроении преимущество остается за вами (п. 8.4). Следовательно, уступить дорогу Вы обязаны в ситуации, изображенной на левом рисунке.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На левом.', 'На правом.', 'На обоих.'])
	},
		{
		id: 689,
		imageName: _elm_lang$core$Maybe$Just('35-09.jpg'),
		question: 'Допускается ли выполнить разворот по данной траектории при видимости дороги более 100 м?',
		hint: 'На дороге вне перекрёстка Вы можете произвести разворот от правого края проезжей части и даже с обочины, если ширина проезжей части недостаточна для выполнения манёвра из крайнего левого положения (п. 8.8).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 690,
		imageName: _elm_lang$core$Maybe$Just('35-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на грузовом автомобиле с разрешённой максимальной массой менее 3,5 т после въезда на примыкающую слева дорогу?',
		hint: 'Знак 5.23.1 «Начало населённого пункта» (на белом фоне) информирует вас о въезде в населённый пункт, где на всех дорогах движение разрешается со скоростью не более 60 км/ч (п. 10.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['60 км/ч.', '70 км/ч.', '90 км/ч.'])
	},
		{
		id: 691,
		imageName: _elm_lang$core$Maybe$Just('35-11.jpg'),
		question: 'В данной ситуации Вы:',
		hint: 'Знак 1.28 «Падение камней» информирует о том, что Вы приближаетесь к участку дороги, на котором возможны обвалы, оползни, падение камней. На этом участке дороги встречный разъезд затруднён, и Вы имеете право проехать первым. Водитель встречного легкового автомобиля должен уступить вам дорогу, поскольку на его стороне имеется препятствие (п. 11.7).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Должны уступить дорогу.', 'Имеете право проехать первым.'])
	},
		{
		id: 692,
		imageName: _elm_lang$core$Maybe$Just('35-12.jpg'),
		question: 'В каком из указанных мест Вы можете остановиться на легковом автомобиле?',
		hint: 'В населённых пунктах на дорогах с односторонним движением остановка легковых автомобилей разрешена и на левой стороне дороги (п. 12.1). Знак 3.27 «Остановка запрещена» с табличкой 8.2.3 «Зона действия» показывает, что за знаком зона запрета остановки заканчивается (автомобиль Б). Кроме того, знак 3.27 действует только на ту сторону дороги, на которую он установлен — поэтому на автомобиль А его действие не распространяется. Следовательно, Вы можете остановиться в местах А и Б.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только А и Б.', 'Только А и В.', 'В любом.'])
	},
		{
		id: 693,
		imageName: _elm_lang$core$Maybe$Just('35-13.jpg'),
		question: 'В каком случае Вам не придется уступать дорогу другим участникам движения?',
		hint: 'Зелёный сигнал светофора разрешает движение вам и трамваю (п. 6.2). При этом, если Вы на данном перекрёстке намерены двигаться налево или в обратном направлении, вам придется уступить дорогу трамваю (п. 13.6), а при повороте направо - пешеходам (п. 13.1). Таким образом, только при движении прямо никому уступать дорогу не требуется.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только если Вы намерены продолжить движение прямо.', 'Только если Вы намерены продолжить движение прямо или направо.', 'В любом случае.'])
	},
		{
		id: 694,
		imageName: _elm_lang$core$Maybe$Just('35-14.jpg'),
		question: 'Вы намерены продолжить движение прямо. Ваши действия?',
		hint: 'Несмотря на то, что Вы первым въехали на перекрёсток равнозначных дорог и приблизились к разделительной полосе, Вы должны уступить дорогу приближающемуся справа грузовому автомобилю (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Завершите проезд перекрестка, поскольку Вы первым выехали на него.', 'Уступите дорогу грузовому автомобилю.'])
	},
		{
		id: 695,
		imageName: _elm_lang$core$Maybe$Just('35-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Двигаясь по главной дороге (знаки 2.1 «Главная дорога» и 8.13 «Направление главной дороги»), Вы могли бы проехать данный перекрёсток неравнозначных дорог первым (п. 13.9). Однако наличие справа автомобиля с включенными проблесковым маячком синего цвета и специальным звуковым сигналом меняет ситуацию, и Вы должны уступить ему дорогу (п. 3.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Никому.', 'Только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом.', 'Обоим транспортным средствам.'])
	},
		{
		id: 696,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как Вы должны поступить с пассажирами при вынужденной остановке на железнодорожном переезде?',
		hint: 'При вынужденной остановке ТС на железнодорожном переезде Вы должны сначала немедленно высадить пассажиров, а затем принять меры для освобождения переезда (п. 15.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Высадить людей, если принятые меры не позволяют убрать автомобиль с переезда.', 'При появлении поезда высадить людей.', 'Немедленно высадить людей.'])
	},
		{
		id: 697,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При остановке и стоянке на неосвещённых участках дорог в тёмное время суток Вы должны:',
		hint: 'При остановке и стоянке на не освещённых участках дорог в тёмное время суток и в условиях недостаточной видимости Вы должны включить на ТС габаритные огни, обозначив его таким образом для водителей других ТС (п. 19.3). Правила рекомендуют для лучшего обозначения автомобиля в условиях тумана, дождя, снегопада и в других случаях, когда видимость дороги менее 300 м, дополнительно включать фары ближнего света, противотуманные фары и задние противотуманные фонари.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Включить габаритные огни.', 'Включить фары ближнего света.', 'Выставить знак аварийной остановки.'])
	},
		{
		id: 698,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Исключает ли антиблокировочная тормозная система возможность возникновения заноса или сноса при прохождении поворота?',
		hint: 'При движении в повороте на автомобиль действует центробежная сила, которая возрастает с увеличением скорости и стремится сместить автомобиль к внешней стороне закругления дороги. Занос или снос автомобиля может возникнуть при проезде поворота из-за большой скорости движения, торможения или низкого коэффициента сцепления. Антиблокировочная тормозная система, предназначенная для предотвращения блокировки колёс автомобиля, может снизить вероятность возникновения заноса или сноса при торможении, но не может исключить возможность их возникновения при других условиях движения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Полностью исключает возможность возникновения только заноса.', 'Полностью исключает возможность возникновения только сноса.', 'Не исключает возможность возникновения сноса или заноса.'])
	},
		{
		id: 699,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В какую сторону смещается прицеп автопоезда на повороте?',
		hint: 'При одновременном прохождении поворота с автопоездом Вам следует позаботиться об увеличении бокового интервала до этого ТС, так как задние колеса автопоезда (прицепа) смещаются к центру поворота.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не смещается.', 'Смещается к центру поворота.', 'Смещается от центра поворота.'])
	},
		{
		id: 700,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении в условиях плохой видимости нужно выбирать скорость, исходя из того, чтобы остановочный путь был:',
		hint: 'Критерием выбора скорости при движении в условиях плохой видимости является остановочный путь, который всегда должен быть меньше расстояния видимости.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Больше расстояния видимости.', 'Меньше расстояния видимости.'])
	},
		{
		id: 701,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какая дорога является главной на перекрёстке?',
		hint: 'На перекрёстке главной дорогой является дорога с твёрдым покрытием по отношению к пересекаемой (примыкающей) грунтовой (п. 1.2 , термин «Главная дорога»). Тип твёрдого покрытия и количество полос не являются классифицирующим признаком главенства дороги.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Дорога с твёрдым покрытием по отношению к грунтовой дороге.', 'Дорога с тремя или более полосами движения по отношению к дороге с двумя полосами.', 'Дорога с асфальтобетонным покрытием по отношению к дороге, покрытой брусчаткой.'])
	},
		{
		id: 702,
		imageName: _elm_lang$core$Maybe$Just('36-02.jpg'),
		question: 'Разрешено ли Вам въехать на мост одновременно с мотоциклистом, если Вы не затрудните ему движение?',
		hint: 'Знак 2.6 «Преимущество встречного движения» запрещает въезд на узкий участок дороги, если это затруднит встречное движение. В данном случае, с учётом ширины моста, мотоцикла и вашего автомобиля, Вы можете въехать на мост одновременно с мотоциклистом.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 703,
		imageName: _elm_lang$core$Maybe$Just('36-03.jpg'),
		question: 'В каких направлениях Вам разрешено продолжить движение на перекрёстке?',
		hint: 'Из четырех предложенных направлений Вы можете двигаться только в двух - А и В. Поворот направо на перекрёстке (направление Г) запрещён знаком 3.18.1 «Поворот направо запрещен». При движении в направлении Б Вы оказались бы левее разделительной полосы, т.е. на проезжей части, предназначенной для встречного движения, и тем самым нарушили бы принцип правостороннего движения (п. 1.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только В.', 'А или В.', 'Во всех, кроме Г.'])
	},
		{
		id: 704,
		imageName: _elm_lang$core$Maybe$Just('36-04.jpg'),
		question: 'Какие таблички распространяют действие установленных с ними знаков на грузовые автомобили с разрешённой максимальной массой менее 3,5 т?',
		hint: 'Табличка Б (8.4.3 «Вид транспортного средства») распространяет действие знака не только на легковые автомобили, но и на легкие грузовики (грузовые автомобили с разрешённой максимальной массой до 3,5 т), а табличка В (8.6.1 «Способ постановки транспортного средства на стоянку») информирует о том, что вообще все ТС должны быть поставлены на стоянку на проезжей части вдоль тротуара. Таким образом, обе таблички с силуэтом легкового автомобиля распространяют действие знака, с которым они установлены, на легкие грузовики. Табличка А с силуэтом грузовика (8.4.1 «Вид транспортного средства») распространяет действие знака только на грузовые автомобили с разрешённой максимальной массой более 3,5 т.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'Только В.', 'Б и В.', 'Все.'])
	},
		{
		id: 705,
		imageName: _elm_lang$core$Maybe$Just('36-05.jpg'),
		question: 'Какие из транспортных средств имеют право двигаться по полосе, обозначенной разметкой в виде буквы «A», на которую распостраняется действие дорожного знака, расположенного справа от дороги?',
		hint: 'Из перечисленных ТС по полосе, обозначенной разметкой 1.23 (в виде буквы «А»), имеют право двигаться только автобусы и троллейбусы, движущиеся по установленным маршрутам с обозначенными местами остановок, которые относятся к маршрутным ТС (п. 1.2).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Автобусы и троллейбусы, движущиеся по установленным маршрутам с обозначенными местами остановок.', 'Троллейбусы и любые автобусы.', 'Любые автобусы'])
	},
		{
		id: 706,
		imageName: _elm_lang$core$Maybe$Just('36-06.jpg'),
		question: 'Как в данной ситуации должен поступить водитель легкового автомобиля при приближении автомобиля оперативной службы?',
		hint: 'Водитель легкового автомобиля должен обеспечить беспрепятственный проезд автомобилю ДПС, имеющему приоритет в движении, так как у него включены проблесковый маячок синего цвета и специальный звуковой сигнал (п. 3.2). Для этого достаточно перестроиться на правую полосу проезжей части.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перестроиться на правую полосу и продолжить движение.', 'Остановиться справа у тротуара.'])
	},
		{
		id: 707,
		imageName: _elm_lang$core$Maybe$Just('36-07.jpg'),
		question: 'Согнутая в локте рука водителя автомобиля является сигналом, информирующим Вас:',
		hint: 'Перед перекрёстком водитель легкового автомобиля вытянул в сторону и согнул в локте под прямым углом вверх левую руку. Такой сигнал соответствует световому сигналу правого поворота. Следовательно, он сообщает о своем намерении повернуть направо (п. 8.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['О его намерении повернуть направо.', 'О его намерении продолжить движение прямо.', 'О его намерении остановиться, чтобы уступить дорогу мотоциклисту.'])
	},
		{
		id: 708,
		imageName: _elm_lang$core$Maybe$Just('36-08.jpg'),
		question: 'Кто имеет преимущество в движении?',
		hint: 'Водитель грузового автомобиля имеет преимущество перед водителем легкового автомобиля, выезжающего с прилегающей территории (в данном случае — с АЗС) (пп. 1.2 и 8.3).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель легкового автомобиля.', 'Водитель грузового автомобиля.'])
	},
		{
		id: 709,
		imageName: _elm_lang$core$Maybe$Just('36-09.jpg'),
		question: 'По какой траектории Вам разрешено выполнить разворот?',
		hint: 'Знак 4.1.1 «Движение прямо» действует только на ближайшее пересечение проезжих частей, перед которыми он установлен (до разделительной полосы). Разворот на втором пересечении, т.е. по траектории А, разрешён.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'Ни по одной из предложенных.'])
	},
		{
		id: 710,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях на дорогах, проезжая часть которых разделена линиями разметки, Вы обязаны двигаться строго по полосам?',
		hint: 'Во всех случаях, когда проезжая часть разделена на полосы движения линиями разметки, Вы должны двигаться строго по этим полосам независимо от интенсивности движения и вида нанесенной разметки (п. 9.7).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при интенсивном движении.', 'Только если полосы движения обозначены сплошными линиями разметки.', 'Во всех случаях.'])
	},
		{
		id: 711,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Водитель обгоняемого транспортного средства обязан:',
		hint: 'Водитель обгоняемого ТС не обязан снижать скорость движения. Ему запрещается препятствовать обгону повышением скорости (п. 11.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Снизить скорость движения.', 'Двигаться с прежней или большей скоростью.', 'Двигаться с прежней или меньшей скоростью.'])
	},
		{
		id: 712,
		imageName: _elm_lang$core$Maybe$Just('36-12.jpg'),
		question: 'Разрешена ли Вам остановка для высадки пассажиров в указанном месте?',
		hint: 'Поскольку в населённых пунктах остановка на левой стороне дороги с одной полосой движения в каждом направлении разрешена (п. 12.1), Вы можете остановиться в указанном месте, но только для посадки или высадки пассажиров и при условии, что это не создаст помех движению маршрутных ТС (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена, если не будет создано помех для движения маршрутных транспортных средств.', 'Запрещена.'])
	},
		{
		id: 713,
		imageName: _elm_lang$core$Maybe$Just('36-13.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'Вы можете выехать на перекрёсток по разрешающему сигналу светофора. Однако, поворачивая направо, Вы должны остановиться перед пешеходным переходом и уступить дорогу пешеходам, переходящим проезжую часть, на которую Вы поворачиваете (п. 13.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановитесь перед стоп-линией и, пропустив пешеходов, повернете направо.', 'Выехав на перекрёсток, остановитесь перед пешеходным переходом, чтобы пропустить пешеходов.', 'Продолжите движение без остановки на перекрёстке.'])
	},
		{
		id: 714,
		imageName: _elm_lang$core$Maybe$Just('36-14.jpg'),
		question: 'Должны ли Вы при движении прямо уступить дорогу трамваю?',
		hint: 'На перекрёстке равнозначных дорог Вы должны уступить дорогу трамваю независимо от направления его дальнейшего движения (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 715,
		imageName: _elm_lang$core$Maybe$Just('36-15.jpg'),
		question: 'Намереваясь повернуть налево, Вы должны:',
		hint: 'При выключенных светофорах перекрёсток считается нерегулируемым и водители должны руководствоваться знаками приоритета (п. 13.3). Грузовой автомобиль, так же, как и Вы, находится на главной дороге (знак 2.1 «Главная дорога»), и поэтому, поворачивая налево, Вы должны уступить ему дорогу (п. 13.12). По отношению к легковому автомобилю Вы пользуетесь преимуществом, так как он подъезжает к перекрёстку по второстепенной дороге (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу грузовому автомобилю.', 'Уступить дорогу обоим транспортным средствам.', 'Проехать перекресток первым.'])
	},
		{
		id: 716,
		imageName: _elm_lang$core$Maybe$Just('36-16.jpg'),
		question: 'Должны ли Вы уступить дорогу грузовому автомобилю?',
		hint: 'Знак 5.22 «Конец жилой зоны» показывает, что Вы выезжаете из жилой зоны и должны уступить дорогу другим участникам движения, в том числе и ТС (п. 17.3).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 717,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях Вы обязаны включать в светлое время суток фары ближнего света?',
		hint: 'Во всех случаях при движении в светлое время суток Вы обязаны включить на ТС ближний свет фар или дневные ходовые огни (п. 19.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при движении вне населённого пункта.', 'При движении по любым дорогам.'])
	},
		{
		id: 718,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли Вам устанавливать на транспортном средстве ошипованные шины совместно с неошипованными?',
		hint: 'Устанавливать на ТС ошипованные шины совместно с неошипованными не разрешается (Перечень, п. 5.5).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только на разные оси.', 'Запрещается.'])
	},
		{
		id: 719,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как правильно произвести экстренное торможение на скользкой дороге, если Ваш автомобиль не оборудован антиблокировочной тормозной системой?',
		hint: 'Если Ваш автомобиль не оборудован антиблокировочной тормозной системой, то на скользкой дороге следует тормозить прерывистым нажатием на педаль тормоза, не допуская блокировки колёс (движения «юзом»).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Нажать на педаль тормоза до упора и удерживать ее до полной остановки.', 'Тормозить прерывистым нажатием на педаль тормоза, не допуская блокировки колес.'])
	},
		{
		id: 720,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Владелец транспортного средства обязан возместить вред, причинённый этим транспортным средством, если не докажет, что:',
		hint: 'В соответствии с п. 1 ст. 1079 ГК РФ владелец (лицо, владеющее ТС на праве собственности на данное ТС или на ином законном основании — по доверенности на право управления ТС и др.) ТС (как источника повышенной опасности) привлекается к гражданской ответственности, т.е. обязан возместить вред, причиненный данным ТС, если не докажет, что этот вред возник вследствие непреодолимой силы (чрезвычайного и непредотвратимого при данных условиях обстоятельства — урагана и т.п.) или умысла потерпевшего (предвидения им вредного результата своего противоправного поведения и желания либо сознательного допущения наступления такого результата).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вред возник исключительно вследствие непреодолимой силы.', 'Вред возник исключительно вследствие умысла потерпевшего.', 'Вред возник вследствие непреодолимой силы или умысла потерпевшего.'])
	},
		{
		id: 721,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Водительское удостоверение на право управления транспортным средством категории «В» разрешает Вам управлять:',
		hint: 'Согласно действующему положению, при наличии водительского удостоверения с отметкой «B» разрешается управлять автомобилями, разрешённая максимальная масса которых не превышает 3,5 т и число сидячих мест в которых, не считая места водителя, не более восьми (п. 4.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковым автомобилем.', 'Легковым автомобилем и мотоциклом.', 'Автомобилем, разрешённая максимальная масса которого не превышает 3,5 т и число сидячих мест в котором, не считая места водителя, не более восьми.'])
	},
		{
		id: 722,
		imageName: _elm_lang$core$Maybe$Just('37-02.jpg'),
		question: 'Какие знаки устанавливают непосредственно перед железнодорожным переездом?',
		hint: 'Ближе всего к железнодорожному переезду устанавливается знак В (1.3.2 «Многопутная железная дорога»). Он размещается перед железнодорожными переездами без шлагбаума на одной опоре со светофорами, а при их отсутствии на расстоянии не менее 20 м от ближайшего рельса. Знаки А (1.1 «Железнодорожный переезд со шлагбаумом» и 1.4.3 «Приближение к железнодорожному переезду») устанавливаются только на дорогах вне населённых пунктов на расстоянии не менее 50 м от опасного участка, а знак Б (1.2 «Железнодорожный переезд без шлагбаума» и 1.4.1 «Приближение к железнодорожному переезду») соответственно за 150 — 300 м до него.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Только В.', 'А и В.'])
	},
		{
		id: 723,
		imageName: _elm_lang$core$Maybe$Just('37-03.jpg'),
		question: 'Разрешён ли Вам разворот в указанном месте?',
		hint: 'Знак 4.3 «Круговое движение» предписывает на этом перекрёстке двигаться вокруг центрального островка против часовой стрелки, в том числе и в случае, если Вы хотите развернуться для движения в обратном направлении. Следовательно, разворот в этом месте запрещён.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Не разрешён.'])
	},
		{
		id: 724,
		imageName: _elm_lang$core$Maybe$Just('37-04.jpg'),
		question: 'Разрешено ли Вам поставить автомобиль на стоянку за путепроводом?',
		hint: 'Зона действия знака 3.28 «Стоянка запрещена» распространяется до ближайшего перекрёстка (Приложение 1). Пересечение дорог на разных уровнях перекрёстком не является (п. 1.2). Следовательно, поставив автомобиль на стоянку в указанном месте, Вы нарушите требование запрещающего знака.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 725,
		imageName: _elm_lang$core$Maybe$Just('37-05.jpg'),
		question: 'Разрешается ли Вам перестроиться на реверсивную полосу в данной ситуации?',
		hint: 'Зелёный сигнал реверсивного светофора разрешает вам пересечь расположенную слева линию разметки 1.9 и двигаться по реверсивной полосе.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается.', 'Разрешается только для поворота налево или разворота.', 'Запрещается.'])
	},
		{
		id: 726,
		imageName: _elm_lang$core$Maybe$Just('37-06.jpg'),
		question: 'Вы были намерены проехать перекрёсток в прямом направлении. Как следует поступить, если Вы не успели заранее перестроиться на левую полосу?',
		hint: 'В этой ситуации, находясь на правой полосе, с учётом требований знака 5.15.1 «Направления движения по полосам» и включенной дополнительной секции (п. 6.3) Вы должны повернуть направо.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Выехать за стоп-линию, перестроиться в левую полосу и остановиться перед пересекаемой проезжей частью.', 'Остановиться перед стоп-линией и, дождавшись зелёного сигнала светофора, продолжить движение прямо.', 'Повернуть направо.'])
	},
		{
		id: 727,
		imageName: _elm_lang$core$Maybe$Just('37-07.jpg'),
		question: 'Какие указатели поворота Вы обязаны включить при выполнении разворота по такой траектории?',
		hint: 'Выполнить разворот на узкой дороге Вы можете только от правого края проезжей части. Прежде чем занять это положение, необходимо включить правые указатели поворота. Последующее включение левых указателей поворота информирует других участников движения о том, что Вы приступаете непосредственно к маневру разворота (п. 8.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только правые.', 'Только левые.', 'Сначала правые, а при движении от тротуара — левые.'])
	},
		{
		id: 728,
		imageName: _elm_lang$core$Maybe$Just('37-08.jpg'),
		question: 'Кто должен уступить дорогу при взаимном перестроении?',
		hint: 'При взаимном перестроении водитель грузового автомобиля должен уступить дорогу водителю легкового автомобиля, находящемуся от него справа (п. 8.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель легкового автомобиля.', 'Водитель грузового автомобиля.'])
	},
		{
		id: 729,
		imageName: _elm_lang$core$Maybe$Just('37-09.jpg'),
		question: 'Разрешено ли водителю легкового автомобиля подъехать задним ходом к пассажиру, стоящему на автобусной остановке?',
		hint: 'Пассажир находится на обозначенной автобусной остановке. Подъехать задним ходом к нему нельзя, поскольку в местах расположения остановок маршрутных ТС движение задним ходом запрещается (п. 8.12).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено.', 'Запрещено.'])
	},
		{
		id: 730,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Что должно иметь для Вас решающее значение при выборе скорости движения в плотном потоке транспортных средств?',
		hint: 'В плотном потоке ТС движение со скоростью, большей или меньшей скорости потока, опасно и может способствовать возникновению аварийной ситуации. Скорость потока, как правило, не совпадает с предельно допустимой для вас скоростью, и поэтому при движении в потоке именно интенсивность движения имеет решающее значение при выборе скорости (п. 10.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Предельные ограничения скорости, установленные для Вашего транспортного средства.', 'Интенсивность движения.'])
	},
		{
		id: 731,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Запрещён ли обгон на мостах, путепроводах, эстакадах и под ними?',
		hint: 'Правила запрещают обгон на таких дорожных сооружениях, как мосты, путепроводы, эстакады, и под ними, а также в тоннелях (п. 11.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещён только под мостами, путепроводами и эстакадами.', 'Запрещён.', 'Разрешён.'])
	},
		{
		id: 732,
		imageName: _elm_lang$core$Maybe$Just('37-12.jpg'),
		question: 'Можете ли Вы остановиться для посадки пассажира?',
		hint: 'Остановиться в данном месте Вы не можете, так как Правила запрещают остановку в тоннелях, под эстакадами, мостами и путепроводами (п. 12.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 733,
		imageName: _elm_lang$core$Maybe$Just('37-13.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'При таком сигнале регулировщика движение разрешено автомобилю, выполняющему разворот (п. 6.10). В этой ситуации очередность движения, правилами проезда перекрёстков не оговорена, а поэтому дорогу должен уступить водитель, к которому ТС приближается справа (п. 8.9). Так как при повороте направо на Вашем пути нет помех для движения, Вы можете проехать перекрёсток первым.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступите дорогу легковому автомобилю, производящему разворот.', 'Проедете перекрёсток первым.'])
	},
		{
		id: 734,
		imageName: _elm_lang$core$Maybe$Just('37-14.jpg'),
		question: 'Поворачивая налево, Вы должны:',
		hint: 'На данном перекрёстке равнозначных дорог Вы имеете преимущество перед водителем легкового автомобиля, находящегося слева, который и должен уступить дорогу (п. 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Уступить дорогу автомобилю.', 'Проехать перекрёсток первым.'])
	},
		{
		id: 735,
		imageName: _elm_lang$core$Maybe$Just('37-15.jpg'),
		question: 'Намереваясь продолжить движение прямо, Вы должны:',
		hint: 'Вы и трамвай находитесь на главной дороге, и поэтому при определении очередности проезда данного перекрёстка следует руководствоваться тем, что трамвай имеет преимущество перед безрельсовыми ТС, движущимися в попутном или встречном направлении по равнозначной дороге независимо от направления движения (п. 13.9).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проехать перекрёсток первым.', 'Уступить дорогу трамваю.'])
	},
		{
		id: 736,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'На каких участках автомагистрали запрещается движение задним ходом?',
		hint: 'Движение задним ходом на автомагистралях запрещено на всем протяжении дороги и по всей ее ширине, включая обочины (п. 16.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['На всем протяжении дороги запрещено.', 'Только в местах въезда или выезда с нее.', 'Только в местах остановок маршрутных транспортных средств.', 'На всем протяжении дороги разрешено.'])
	},
		{
		id: 737,
		imageName: _elm_lang$core$Maybe$Just('37-17.jpg'),
		question: 'В данной ситуации:',
		hint: 'В этой ситуации Вы имеете преимущество и можете продолжить движение, приняв меры предосторожности. Хотя велосипедист находится справа от вас, на нерегулируемом пересечении велосипедной дорожки с дорогой, расположенной вне перекрёстка, он должен уступить дорогу ТС, движущимся по ней (п. 24.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Вы должны уступить дорогу велосипедисту.', 'Вы, имея преимущество, можете продолжить движение, приняв меры предосторожности.'])
	},
		{
		id: 738,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какая наименьшая величина остаточной высоты рисунка протектора допускается при эксплуатации легкового автомобиля?',
		hint: 'Остаточная высота рисунка протектора шин легкового автомобиля должна быть не менее 1,6 мм (Перечень, п. 5.1). При меньшей высоте рисунка протектора заметно ухудшается сцепление колеса с влажным покрытием.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['0,8 мм.', '1,0 мм.', '1,6 мм.', '2,0 мм.'])
	},
		{
		id: 739,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как изменяется величина центробежной силы с увеличением скорости движения на повороте?',
		hint: 'При прохождении поворота водителю следует учитывать, что при увеличении скорости движения автомобиля центробежная сила увеличивается пропорционально квадрату скорости.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не изменяется.', 'Увеличивается пропорционально скорости.', 'Увеличивается пропорционально квадрату скорости.'])
	},
		{
		id: 740,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как оказывается первая помощь при переломах конечностей, если отсутствуют транспортные шины и подручные средства для их изготовления?',
		hint: 'При отсутствии подручных средств, для обеспечения неподчижности костей в области перелома достаточно верхнюю конечность, согнутую в локте, прибинтовать к туловищу, а нижние конечности — друг к другу, проложив между ними мягкую ткань.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Верхнюю конечность, вытянутую вдоль тела, прибинтовывают к туловищу. Нижние конечности прибинтовывают друг к другу, проложив между ними мягкую ткань.', 'Верхнюю конечность,  согнутую в локте, подвешивают на косынке и прибинтовывают к туловищу. Нижние конечности прибинтовывают друг к другу, обязательно проложив между ними мягкую ткань.', 'Верхнюю конечность, согнутую в локте, подвешивают на косынке и прибинтовывают к туловищу. Нижние конечности плотно прижимают друг к другу и прибинтовывают.'])
	},
		{
		id: 741,
		imageName: _elm_lang$core$Maybe$Just('38-01.jpg'),
		question: 'Сколько пересечений проезжих частей имеет этот перекрёсток?',
		hint: 'Перекресток имеет два пересечения проезжих частей, так как пересекаемая дорога с разделительной полосой имеет две проезжие части (п. 1.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Одно.', 'Два.', 'Четыре.'])
	},
		{
		id: 742,
		imageName: _elm_lang$core$Maybe$Just('38-02.jpg'),
		question: 'Эти знаки предупреждают Вас о приближении:',
		hint: 'Основной знак 1.1 «Железнодорожный переезд со шлагбаумом» вне населённых пунктов устанавливается на расстоянии от 150 до 300 м до переезда, кроме того, такой же знак устанавливается повторно на расстоянии не менее 50 м до переезда. Знаки 1.4.1 — 1.4.6 «Приближение к железнодорожному переезду» являются дополнительным предупреждением о приближении к переезду. Они применяются только вне населённых пунктов.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['К месту производства работ на дороге.', 'К железнодорожному переезду со шлагбаумом.', 'К железнодорожному переезду без шлагбаума.'])
	},
		{
		id: 743,
		imageName: _elm_lang$core$Maybe$Just('38-03.jpg'),
		question: 'Какие знаки разрешают разворот?',
		hint: 'Знак А (4.1.3 «Движение налево») разрешает разворот, т.к. предписывающие знаки, разрешающие поворот налево, разрешают и разворот. Знак Б (3.18.2 «Поворот налево запрещен») запрещает поворот налево, но не разворот. Знак В (5.7.1 «Выезд на дорогу с односторонним движением») не запрещает разворот.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Все кроме В.', 'Все.', 'Только А.'])
	},
		{
		id: 744,
		imageName: _elm_lang$core$Maybe$Just('38-04.jpg'),
		question: 'Двигаясь по крайней левой полосе, Вы можете продолжить движение:',
		hint: 'Знак 5.12.2 «Направления движения по полосе», расположенный над крайней левой полосой, кроме поворота налево разрешает вам и разворот.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево.', 'Только в обратном направлении.', 'Налево или в обратном направлении.'])
	},
		{
		id: 745,
		imageName: _elm_lang$core$Maybe$Just('38-05.jpg'),
		question: 'Разрешена ли Вам остановка в указанном месте?',
		hint: 'Прерывистая жёлтая разметка 1.10 обозначает места, где запрещена стоянка. Линия наносится у края проезжей части или по верху бордюра и применяется самостоятельно либо со знаком 3.28 «Стоянка запрещена». Остановка при этом не запрещается, и Вы можете остановиться в указанном месте без каких-либо дополнительных условий.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена только с заездом на тротуар.', 'Разрешена, если не создается помех маршрутным транспортным средствам.', 'Не разрешена.'])
	},
		{
		id: 746,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каком случае водитель автомобиля имеет преимущество перед другими участниками движения?',
		hint: 'Водитель автомобиля с нанесёнными на наружные поверхности специальными цветографическими схемами имеет приемущество перед другими участниками движения только в том случае, если на автомобиле включены проблесковый маячок синего цвета, или маячки синего и красного цветов и специальный звуковой сигнал (п. 3.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только при включенном проблесковом маячке синего или бело-лунного цвета.', 'Только при включенном проблесковом маячке оранжевого или жёлтого цвета.', 'Только при включенных проблесковом маячке синего (синего и красного) цвета и специальном звуковом сигнале.', 'Во всех перечисленных случаях.'])
	},
		{
		id: 747,
		imageName: _elm_lang$core$Maybe$Just('38-07.jpg'),
		question: 'Вы приняли решение остановиться сразу же после перекрёстка. Когда необходимо включить правые указатели поворота?',
		hint: 'В данной ситуации включение правых указателей поворота до въезда на перекрёсток может быть воспринято водителем легкового автомобиля как ваше решение повернуть направо на перекрёстке и послужить ему сигналом к началу движения, что создаст аварийную ситуацию. Следовательно, чтобы не вводить в заблуждение водителя легкового автомобиля, Вы должны включить правый указатель поворота только после въезда на перекрёсток (п. 8.2).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['До въезда на перекрёсток, чтобы заблаговременно предупредить других водителей об остановке.', 'Только после въезда на перекрёсток.', 'Место включения указателей поворота не имеет значения, так как поворот направо запрещён.'])
	},
		{
		id: 748,
		imageName: _elm_lang$core$Maybe$Just('38-08.jpg'),
		question: 'Съезжая с дороги на прилегающую справа территорию, Вы:',
		hint: 'Поворачивая во двор направо, Вы съезжаете с дороги на прилегающую территорию и поэтому должны уступить дорогу не только пешеходам, но и велосипедисту, путь движения которых Вы пересекаете (п. 8.3).',
		correctAnswer: 3,
		answers: _elm_lang$core$Native_List.fromArray(
			['Пользуетесь преимуществом перед другими участниками движения.', 'Должны уступить дорогу только пешеходам.', 'Должны уступить дорогу только велосипедисту.', 'Должны уступить дорогу пешеходам и велосипедисту.'])
	},
		{
		id: 749,
		imageName: _elm_lang$core$Maybe$Just('38-09.jpg'),
		question: 'Разрешён ли разворот на данном участке дороги с подъемом?',
		hint: 'На подъемах развороты запрещены только в местах, где видимость дороги менее 100 м (п. 8.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешён.', 'Разрешен только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 750,
		imageName: _elm_lang$core$Maybe$Just('38-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение после знака, если Вы буксируете неисправное механическое транспортное средство?',
		hint: 'Как до знака 3.25 «Конец зоны ограничения максимальной скорости», так и после него ваша скорость при буксировке неисправного механического ТС не должна превышать 50 км/ч (п. 10.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['50 км/ч.', '70 км/ч.', '90 км/ч.'])
	},
		{
		id: 751,
		imageName: _elm_lang$core$Maybe$Just('38-11.jpg'),
		question: 'Можете ли Вы начать обгон?',
		hint: 'Вы приближаетесь к нерегулируемому перекрёстку по второстепенной дороге (знак 2.4 «Уступите дорогу»). На нерегулируемых перекрёстках обгон запрещён при движении по дороге, не являющейся главной (п. 11.5). Следовательно, в данной ситуации обгон грузового автомобиля можно начать лишь в том случае, если он будет завершён до перекрёстка.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да, если обгон будет завершён до перекрёстка.', 'Да.', 'Нет.'])
	},
		{
		id: 752,
		imageName: _elm_lang$core$Maybe$Just('38-12.jpg'),
		question: 'Разрешена ли Вам остановка в указанных местах?',
		hint: 'Вы можете остановиться в указанном месте (Б), так как Правила не запрещают остановку на левой стороне дороги с односторонним движением в населённых пунктах непосредственно за пешеходным переходом. Перед ним (места А и В) остановка запрещена (пп. 12.1 и 12.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена только в Б.', 'Разрешена только в В.', 'Разрешена только в А и В.', 'Запрещена.'])
	},
		{
		id: 753,
		imageName: _elm_lang$core$Maybe$Just('38-13.jpg'),
		question: 'Вы намерены повернуть налево. Ваши действия?',
		hint: 'Данный перекресток — регулируемый, и очерёдность движения на нём определяется не знаками приоритета, а сигналами светофора (пп. 6.15 и 13.3). Однако, несмотря на разрешающий сигнал светофора, Вы обязаны уступить дорогу автомобилю с включенными проблесковым маячком синего цвета и специальным звуковым сигналом, движущемуся по пересекаемой дороге (п. 3.2). Поворачивая налево, Вы должны уступить дорогу легковому автомобилю, движущемуся со встречного направления (п. 13.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом.', 'Уступите дорогу обоим транспортным средствам.'])
	},
		{
		id: 754,
		imageName: _elm_lang$core$Maybe$Just('38-14.jpg'),
		question: 'Следует ли при движении прямо уступить дорогу трамваю?',
		hint: 'Вы должны уступить дорогу находящемуся слева трамваю, так как на перекрёстках равнозначных дорог трамвай имеет преимущество перед безрельсовыми ТС независимо от направления его движения (п. 13.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 755,
		imageName: _elm_lang$core$Maybe$Just('38-15.jpg'),
		question: 'Вы намерены повернуть направо. Можете ли Вы приступить к повороту?',
		hint: 'Поскольку понятие «Уступить дорогу (не создавать помех)» (п. 1.2) не требует обязательной остановки, Вы можете приступить к повороту направо, как только убедитесь в том, что грузовой автомобиль действительно поворачивает налево.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, после того, как грузовой автомобиль начнет поворот.', 'Нет.'])
	},
		{
		id: 756,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Подъехав к трамваю попутного направления, остановившемуся у посадочной площадки, расположенной на проезжей части посередине дороги, Вы должны:',
		hint: 'Вы обязаны уступить дорогу пешеходам, идущим к стоящему на остановке трамваю (либо иному маршрутному ТС) или от него, если посадка и высадка пассажиров производятся с проезжей части или с посадочной площадки, расположенной на ней. В случае отсутствия пешеходов Вы можете, обеспечив безопасность, начать (продолжить) движение, не дожидаясь закрытия дверей трамвая и начала его движения (п. 14.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Остановиться и продолжить движение только после закрытия дверей трамвая.', 'Уступить дорогу пешеходам, идущим к трамваю или от него.', 'Остановиться и продолжить движение только после начала движения трамвая.'])
	},
		{
		id: 757,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешена ли перевозка детей до 12-летнего возраста на переднем сиденье легкового автомобиля?',
		hint: 'Перевозка детей на переднем сиденье легкового автомобиля разрешена только с использованием детских удерживающих устройств (п. 22.9). Перевозка осуществляется в соответствии с инструкциями по эксплуатации в автомобилях, оборудованных передними подушками безопасности, с расположением детей лицом по ходу движения.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Запрещена.', 'Разрешена только с использованием детских удерживающих устройств.', 'Разрешена только на руках у взрослых.'])
	},
		{
		id: 758,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении в плотном потоке Вы заметили сзади транспортное средство, движущееся на слишком малой дистанции. Как следует поступить, чтобы обеспечить безопасность движения?',
		hint: 'Если при движении в плотном потоке Вы заметили транспортное средство, движущееся сзади на слишком малой дистанции, то целесообразно ослабить нажатие на педаль газа, увеличив тем самым дистанцию до движущегося впереди автомобиля. Таким образом Вы создадите себе резерв времени для применения менее интенсивного торможения при возникновении опасности. Резкое торможение, даже кратковременное, может привести к наезду сзади или испугу следующего за Вами водителя, что небезопасно для других участников движения. А увеличение скорости приведёт к уменьшению дистанции спереди, что опасно для Вас, и не даст гарантии таким способом исправить ситуацию сзади.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Увеличить скорость движения, уменьшив дистанцию до движущегося впереди транспортного средства.', 'Предупредить следующего сзади водителя резким кратковременным торможением.', 'Скорректировать скорость движения, ослабив нажатие на педаль газа, чтобы увеличить дистанцию до движущегося впереди транспортного средства.', 'Допускается любое из перечисленных действий.'])
	},
		{
		id: 759,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Включение каких внешних световых приборов обеспечит Вам наилучшую видимость дороги при движении ночью во время сильной метели?',
		hint: 'При движении ночью во время сильной метели дальний свет фар будет создавать слепящее действие и ухудшит видимость. В таких условиях целесообразно использовать включение противотуманных фар совместно с ближним светом фар.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Противотуманных фар совместно с дальним светом фар.', 'Противотуманных фар совместно с ближним светом фар.'])
	},
		{
		id: 760,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В каких случаях пострадавшего извлекают из салона автомобиля?',
		hint: 'Все виды первой помощи, кроме реанимации, можно оказать пострадавшему, находящемуся в автомобиле. Поэтому извлекают пострадавшего из автомобиля только при необходимости проведения ему реанимации, т.е. при потере сознания, отсутствии пульса на сонной артерии и признаков дыхания.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Всегда при потере потерпевшим сознания.', 'При потере потерпевшем сознания и отсутствии у него пулься на сонной артерии и признаков дыхание.', 'При переломах нижних конечноестей.'])
	},
		{
		id: 761,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Водители и пассажиры каких транспортных средств при движении должны быть пристегнуты ремнями безопасности?',
		hint: 'При движении водители и пассажиры всех ТС, оборудованных ремнями безопасности, должны быть пристегнуты (п. 2.1.2).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковых автомобилей.', 'Всех автомобилей.', 'Всех транспортных средств, оборудованных ремнями безопасности.'])
	},
		{
		id: 762,
		imageName: _elm_lang$core$Maybe$Just('39-02.jpg'),
		question: 'Этот знак предупреждает Вас о приближении к тоннелю, в котором:',
		hint: 'Знак 1.31 «Тоннель» предназначен для предупреждения о приближении к тоннелю, в котором нет искусственного освещения или видимость въездного портала которого ограничена. Поскольку в данной ситуации портал виден хорошо, то, следовательно, это тот случай, когда тоннель не освещается.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Будет затруднен разъезд со встречными транспортными средствами.', 'Отсутствует искусственное освещение.', 'Очередность движения регулируется светофором.'])
	},
		{
		id: 763,
		imageName: _elm_lang$core$Maybe$Just('39-03.jpg'),
		question: 'В каком из указанных мест Вы можете поставить автомобиль на стоянку?',
		hint: 'Зона действия знака 3.27 «Остановка запрещена» в данном случае распространяется до ближайшего перекрёстка. Следовательно, Вы можете поставить автомобиль на стоянку на обочине за перекрёстком.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А.', 'Только Б.', 'Ни в каком.'])
	},
		{
		id: 764,
		imageName: _elm_lang$core$Maybe$Just('39-04.jpg'),
		question: 'Какие знаки разрешают выполнить поворот налево?',
		hint: 'Повернуть налево вам разрешают два знака: Б (6.8.3 «Тупик»), информирующий, что данная дорога не имеет сквозного проезда; и В (5.13.2 «Выезд на дорогу с полосой для маршрутных транспортных средств»), показывающий, что по левой полосе, навстречу основному потоку ТС осуществляется встречное движение автобусов и (или) троллейбусов. Знак А (5.7.1 «Выезд на дорогу с односторонним движением») разрешает движение на перекрёстке только направо или прямо, хотя допускает и разворот в обратном направлении, но не поворот налево навстречу движению (Приложение 1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только Б.', 'А и Б.', 'Б и В.'])
	},
		{
		id: 765,
		imageName: _elm_lang$core$Maybe$Just('39-05.jpg'),
		question: 'Увеличение длины штриха прерывистой линии разметки информирует Вас:',
		hint: 'Линия разметки 1.6 (прерывистая линия, у которой длина штрихов в три раза больше промежутков между ними) предупреждает о приближении к сплошной линии разметки 1.1 . Применяется при разделении, как встречных, так и попутных транспортных потоков.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['О начале зоны, где запрещены любые манёвры.', 'О начале опасного участка дороги.', 'О приближении к сплошной линии разметки, разделяющей транспортные потоки попутных направлений.'])
	},
		{
		id: 766,
		imageName: _elm_lang$core$Maybe$Just('39-06.jpg'),
		question: 'В каких направлениях Вам разрешено движение?',
		hint: 'Если регулировщик обращен к вам левым боком, а правая рука вытянута вперед, движение разрешено во всех направлениях: прямо, направо, налево и в обратном направлении (п. 6.10).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только налево и в обратном направлении.', 'Прямо, налево и в обратном направлении.', 'Во всех.'])
	},
		{
		id: 767,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какие внешние световые приборы должны быть включены при посадке детей в транспортное средство, имеющее опознавательные знаки «Перевозка детей», и высадке из него?',
		hint: 'При посадке и высадке детей на транспортном средстве, оборудованном соответствующими знаками должна быть включена аварийная световая сигнализация (пункт 7.1).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Габаритные огни.', 'Ближний свет фар или противотуманные фары.', 'Аварийная световая сигнализация.'])
	},
		{
		id: 768,
		imageName: _elm_lang$core$Maybe$Just('39-08.jpg'),
		question: 'Водитель автомобиля, выполняющий перестроение на правую полосу, в данной ситуации:',
		hint: 'Водитель автомобиля, выполняющий перестроение, в том числе завершающий обгон, не должен создавать помех автомобилю, движущемуся попутно без изменения направления движения (п. 8.4).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Не должен создавать помех движущемуся по правой полосе автомобилю.', 'Имеет преимущество, так как завершает обгон.'])
	},
		{
		id: 769,
		imageName: _elm_lang$core$Maybe$Just('39-09.jpg'),
		question: 'Кто должен уступить дорогу при одновременном развороте?',
		hint: 'Во всех случаях, когда траектории движения ТС пересекаются, а очередность проезда не оговорена правилами, должен уступить дорогу водитель, к которому ТС приближаются справа (п. 8.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Водитель автобуса.', 'Водитель легкового автомобиля.'])
	},
		{
		id: 770,
		imageName: _elm_lang$core$Maybe$Just('39-10.jpg'),
		question: 'С какой максимальной скоростью Вы можете продолжить движение на легковом автомобиле с прицепом?',
		hint: 'Двигаясь по автомагистрали (знак 5.1 «Автомагистраль») на легковом автомобиле с прицепом, Вы можете развивать скорость не более 90 км/ч (п. 10.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['50 км/ч.', '70 км/ч.', '90 км/ч.', '110 км/ч.'])
	},
		{
		id: 771,
		imageName: _elm_lang$core$Maybe$Just('39-11.jpg'),
		question: 'По какой траектории водитель легкового автомобиля может выполнить обгон?',
		hint: 'Водители приближаются к нерегулируемому перекрёстку равнозначных дорог. Обгон запрещён на нерегулируемых перекрестах при движении по дороге, не являющейся главной (п. 11.4). Следовательно, обгон совершить можно только до перекрёстка (по траектории А).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['По любой.', 'Только по А.', 'Только по Б.'])
	},
		{
		id: 772,
		imageName: _elm_lang$core$Maybe$Just('39-12.jpg'),
		question: 'По какой траектории Вы можете подъехать к пассажирам?',
		hint: 'Вы можете подъехать к пассажирам только по траектории Б, так как при наличии трамвайных путей посередине дороги остановка на левой стороне с подъездом по траектории А запрещена (п. 12.1).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только по А.', 'Только по Б.', 'По любой.'])
	},
		{
		id: 773,
		imageName: _elm_lang$core$Maybe$Just('39-13.jpg'),
		question: 'Должен ли водитель легкового автомобиля при развороте уступить дорогу автобусу?',
		hint: 'Стрелка, включенная в левой дополнительной секции одновременно с зелёным сигналом светофора, разрешает водителю легкового автомобиля разворот и не обязывает уступать дорогу автобусу, который, поворачивая на стрелку с красным сигналом, должен уступить дорогу (п. 13.5).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 774,
		imageName: _elm_lang$core$Maybe$Just('39-14.jpg'),
		question: 'Вы намерены проехать перекрёсток в прямом направлении. Кому следует уступить дорогу?',
		hint: 'Вы должны уступить дорогу обоим трамваям, поскольку на перекрёстках равнозначных дорог трамвай имеет преимущество перед безрельсовыми ТС (п. 13.11) независимо от направления его движения.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только трамваю А.', 'Только трамваю Б.', 'Обоим трамваям.'])
	},
		{
		id: 775,
		imageName: _elm_lang$core$Maybe$Just('39-15.jpg'),
		question: 'Вы намерены продолжить движение прямо. Кому следует уступить дорогу?',
		hint: 'На этом перекрёстке неравнозначных дорог (знаки 2.1 «Главная, дорога» и 8.13 «Направление главной дороги») Вы должны уступить дорогу только приближающемуся справа, легковому автомобилю, который, так же, как и Вы, находится на главной дороге, и поэтому разъезжаться с ним следует по правилам проезда перекрёстков равнозначных дорог (пп. 13.10 и 13.11). Мотоцикл и грузовой автомобиль уступают дорогу вам, так как находятся на второстепенных дорогах (п. 13.9).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковому автомобилю.', 'Легковому автомобилю и мотоциклу.', 'Никому.'])
	},
		{
		id: 776,
		imageName: _elm_lang$core$Maybe$Just('39-16.jpg'),
		question: 'Нарушил ли водитель Правила при вынужденной остановке на автомагистрали?',
		hint: 'Водитель остановился из-за технической неисправности в соответствии с требованиями Правил за сплошной линией разметки (п. 16.2) и включил аварийную световую сигнализацию (п. 7.1). Поскольку он остановился на автомагистрали, где остановка запрещена (п. 16.1), ему необходимо выставить на расстоянии не менее 30 м от ТС знак аварийной остановки (п. 7.2). В противном случае водитель нарушит Правила.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если не выставил знак аварийной остановки.', 'Нет.'])
	},
		{
		id: 777,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешается ли буксировка в гололедицу, если у буксируемого транспортного средства исправны тормоза и рулевое управление?',
		hint: 'Независимо от исправности тормозов и рулевого управления буксировка в гололедицу разрешается только на жесткой сцепке или методом частичной погрузки (п. 20.4). Буксировка на гибкой сцепке запрещена, так как велика вероятность заноса при торможении либо трогании с места.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешается любым способом.', 'Разрешается на жесткой сцепке или методом частичной погрузки.', 'Не разрешается.'])
	},
		{
		id: 778,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какое расстояние проедет транспортное средство за одну секунду при скорости движения около 90 км/час?',
		hint: 'При выборе безопасных условий для движения на скорости 90 км/час водителю плезно помнить, что транспортное средство за 1 секунду перемещается на 25 м.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Примерно 15 метров.', 'Примерно 25 метров.', 'Примерно 35 метров.'])
	},
		{
		id: 779,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'В какой момент следует начинать отпускать стояночный тормоз при трогании на подъёме?',
		hint: 'При трогании на подъёме стояночный тормоз следует начинать отпускать одновременно с началом движения, чтобы избежать скатывания автомобиля (при отпускании до начала движения) и остановки двигателя (при отпускании после начала движения).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['До начала движения.', 'После начала движения.', 'Одновременно с началом движения.'])
	},
		{
		id: 780,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'У водителя, совершившего административное правонарушение, влекущее лишение права управления транспортными средствами, водительское удостоверение изымается:',
		hint: 'В целях пресечения правонарушения, обеспечения своевременного и правильного рассмотрения дела, исполнения принятого постановления в ч. 1 ст. 27.1 и ч. 3 ст. 27.10 КоАП предусмотрено, что при совершении нарушения ПДД, за которое может быть назначено административное наказание в виде лишения права управления ТС, у водителя изымается водительское удостоверение. Об изъятии водительского удостоверения делается запись в протоколе об административном правонарушении (ч.5 ст. 27 КоАП) или в протоколе осмотра места совершения указанного нарушения.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['При выявлении и пресечении правонарушения.', 'Только после вынесения постановления о лишении права управления транспортными средствами.', 'Только после истечения срока обжалования постановления о лишении права управления транспортными средствами.'])
	},
		{
		id: 781,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'По требованию каких лиц Вы обязаны передавать для проверки водительское удостоверение, страховой полис обязательного страхования гражданской ответственности, регистрационные документы на транспортное средство и талон о прохождении государственного технического осмотра?',
		hint: 'Водитель обязан передавать для проверки названные документы только по требованию сотрудника полиции (п. 2.1.1).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Сотрудника полиции.', 'Сотрудника Военной автомобильной инспекции.', 'Любого регулировщика.', 'Всех перечисленных лиц.'])
	},
		{
		id: 782,
		imageName: _elm_lang$core$Maybe$Just('40-02.jpg'),
		question: 'Этот дорожный знак предупреждает Вас:',
		hint: 'Знак 1.24 «Пересечение с велосипедной дорожкой» предупреждает вас о приближении к месту, где велосипедная дорожка пересекает дорогу. Такие участки обозначаются разметкой 1.15, и преимуществом на них пользуются те, кто следует по автомобильной дороге (п. 24.4).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['О приближении к пешеходному переходу, на котором возможно частое появление велосипедистов.', 'О приближении к пересечению с велосипедной дорожкой.', 'О приближении к месту, где Вы должны уступить дорогу велосипедистам.'])
	},
		{
		id: 783,
		imageName: _elm_lang$core$Maybe$Just('40-03.jpg'),
		question: 'Действия каких знаков не распространяются на транспортные средства, управляемые инвалидами I и II групп или перевозящие таких инвалидов?',
		hint: 'На транспортные средства, управляемые инвалидами I и II групп или перевозящие таких инвалидов и детей-инвалидов, не распространяется действие знаков 3.2 «Движение запрещено» (Б) и 3.28 «Стоянка запрещена» (Г).  Такие автомобили и мотоколяски должны быть обозначены опознавательными знаками «Инвалид» (Основные положения, п. 8). На них также не рапространяются действие знаков с табличкой 8.18 «Кроме инвалидов».',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только А и Б.', 'Только Б и Г.', 'Только Б, В и Г.', 'Всех.'])
	},
		{
		id: 784,
		imageName: _elm_lang$core$Maybe$Just('40-04.jpg'),
		question: 'Какие транспортные средства можно поставить на стоянку указанным на табличке способом?',
		hint: 'Знак 6.4 «Место стоянки» с табличкой 8.6.3 «Способ постановки транспортного средства на стоянку», а также п. 12.2 Правил запрещают использовать для стоянки край тротуара любым грузовым автомобилям. Указанным на табличке способом можно поставить на стоянку только легковые автомобили и мотоциклы.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только легковые автомобили и мотоциклы.', 'Все, кроме грузовых автомобилей с разрешённой максимальной массой более 3,5 т.', 'Любые транспортные средства.'])
	},
		{
		id: 785,
		imageName: _elm_lang$core$Maybe$Just('40-05.jpg'),
		question: 'Эта разметка, нанесенная на полосе движения:',
		hint: 'Разметка 1.18 (в виде стрелы) указывает разрешенное на перекрёстке направление движения по полосе. В данном случае разметка наряду с поворотом налево разрешает вам и разворот.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешает Вам только поворот налево.', 'Разрешает Вам только разворот.', 'Разрешает Вам поворот налево и разворот.'])
	},
		{
		id: 786,
		imageName: _elm_lang$core$Maybe$Just('40-06.jpg'),
		question: 'Разрешено ли Вам движение?',
		hint: 'Со стороны спины регулировщика движение всех ТС запрещено (п. 6.10).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешено только направо.', 'Запрещено.'])
	},
		{
		id: 787,
		imageName: _elm_lang$core$Maybe$Just('40-07.jpg'),
		question: 'Какой знак должен быть закреплен на задней части буксируемого механического транспортного средства при отсутствии или неисправности аварийной световой сигнализации?',
		hint: 'При отсутствии или неисправности аварийной световой сигнализации на задней части буксируемого механического ТС, должен быть закреплён знак аварийной остановки (А), представляющий собой равносторонний треугольник с красной светоотражающей окантовкой (п. 7.3). Опознавательным знаком Б («Тихоходное транспортное средство») обозначаются сзади механические ТС, для которых предприятием-изготовителем установлена максимальная скорость не более 30 км/ч, а знаком В («Длинномерное транспортное средство») — ТС, длина которых с грузом или без груза более 20 м, и автопоездов с двумя и более прицепами (Основные положения).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['А.', 'Б.', 'В.'])
	},
		{
		id: 788,
		imageName: _elm_lang$core$Maybe$Just('40-08.jpg'),
		question: 'Вы намерены повернуть на перекрёстке направо. Как Вам следует поступить?',
		hint: 'Знак 5.15.1 «Направления движения по полосам» информирует о том, что на данном перекрёстке поворот направо может осуществляться не только с правой, но и с левой полосы. Значит, Вы можете повернуть направо либо заранее перестроившись на крайнюю правую полосу (п. 8.5), либо из второй полосы.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Перестроиться на правую полосу, затем осуществить поворот.', 'Продолжить движение по второй полосе до перекрестка, затем повернуть.', 'Возможны оба способа.'])
	},
		{
		id: 789,
		imageName: _elm_lang$core$Maybe$Just('40-09.jpg'),
		question: 'Разрешён ли Вам разворот в указанном месте?',
		hint: 'Предупреждающий знак 1.22 «Пешеходный переход», установленный вне населённого пункта за 150 — 300 м до пешеходного перехода, не запрещает разворот. Следовательно, Вам разрешен разворот, если видимость дороги более 100 метров (п. 8.11).',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешен только при видимости дороги более 100 м.', 'Не разрешён.'])
	},
		{
		id: 790,
		imageName: _elm_lang$core$Maybe$Just('40-10.jpg'),
		question: 'Кто из мотоциклистов занял правильное положение на полосе движения?',
		hint: 'В соответствии с п. 9.1 Правил на дороге имеются четыре полосы движения, причем по две в каждом направлении. При нанесении линий разметки, определяющих границы полос движения, учитывается требование, что ширина полосы должна обеспечивать движение автомобилей в один ряд (п. 1.2). Мотоциклам без бокового прицепа, с учетом их габаритов и необходимых для безопасного движения интервалов, Правила не запрещают двигаться по полосе в два ряда.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только мотоциклист, занимающий левое положение на полосе движения.', 'Только мотоциклист, занимающий правое положение на полосе движения.', 'Оба мотоциклиста.'])
	},
		{
		id: 791,
		imageName: _elm_lang$core$Maybe$Just('40-11.jpg'),
		question: 'Должны ли Вы уступить дорогу встречному грузовому автомобилю?',
		hint: 'Если встречный разъезд затруднён, то водитель, на стороне которого имеется препятствие, должен уступить дорогу (п. 11.7). Следовательно, Вы уступать дорогу грузовому автомобилю не должны.',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Нет.'])
	},
		{
		id: 792,
		imageName: _elm_lang$core$Maybe$Just('40-12.jpg'),
		question: 'Разрешена ли Вам остановка в указанном месте на перекрёстке?',
		hint: 'Напротив бокового проезда трехстороннего перекрёстка можно остановиться только при наличии разделительной полосы или сплошной линии разметки 1.1 . В данной ситуации на пересечении нанесена линия 1.11, поэтому остановка Вам запрещена, даже если расстояние от легкового автомобиля до линии разметки более З м (п. 12.4).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Разрешена, если расстояние от Вашего транспортного средства до линии разметки не менее 3 м.', 'Запрещена.'])
	},
		{
		id: 793,
		imageName: _elm_lang$core$Maybe$Just('40-13.jpg'),
		question: 'Вы намерены повернуть направо. Ваши действия?',
		hint: 'Такой сигнал светофора дает право на движение Вам и водителям трамваев (п. 6.2), а так как для поворота направо Вам необходимо пересечь трамвайные пути, Вы обязаны уступить дорогу обоим трамваям (п. 13.6).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Проедете перекрёсток первым.', 'Уступите дорогу обоим трамваям.', 'Уступите дорогу только трамваю А.', 'Уступите дорогу только трамваю Б.'])
	},
		{
		id: 794,
		imageName: _elm_lang$core$Maybe$Just('40-14.jpg'),
		question: 'При движении прямо Вы:',
		hint: 'Проблесковый маячок оранжевого или жёлтого цвета не дает преимущества в движении, и вы, руководствуясь правилами проезда перекрёстков равнозначных дорог, должны уступить дорогу только мотоциклу, приближающемуся справа (пп. 3.4 и 13.11).',
		correctAnswer: 1,
		answers: _elm_lang$core$Native_List.fromArray(
			['Имеете преимущество.', 'Должны уступить дорогу только мотоциклу.', 'Должны уступить дорогу только автомобилю.', 'Должны уступить дорогу обоим транспортным средствам.'])
	},
		{
		id: 795,
		imageName: _elm_lang$core$Maybe$Just('40-15.jpg'),
		question: 'Вы намерены повернуть налево. Кому следует уступить дорогу?',
		hint: 'Поскольку перед перекрёстком установлен знак 2.4 «Уступите дорогу», Вы, двигаясь по второстепенной дороге, должны, руководствуясь правилами проезда перекрёстков неравнозначных дорог, уступить дорогу обоим ТС (п. 13.9).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Только автобусу.', 'Только грузовому автомобилю.', 'Обоим транспортным средствам.'])
	},
		{
		id: 796,
		imageName: _elm_lang$core$Maybe$Just('40-16.jpg'),
		question: 'Разрешено ли Вам въехать на железнодорожный переезд?',
		hint: 'В такой ситуации, когда стоящие за переездом ТС вынуждают Вас остановиться на переезде, Правила запрещают въезд на него даже при отсутствии приближающегося поезда (п. 15.3).',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Да.', 'Да, если отсутствует приближающийся поезд.', 'Нет.'])
	},
		{
		id: 797,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Разрешена ли Вам перевозка людей в салоне легкового автомобиля, буксирующего неисправное транспортное средство?',
		hint: 'Правила не устанавливают каких-либо ограничений на перевозку людей в салоне легкового автомобиля, буксирующего другое неисправное ТС (п. 20.2). Следовательно, Вы можете осуществлять такую перевозку независимо от способа буксировки.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Разрешена.', 'Запрещена.', 'Разрешена только при буксировке на жесткой сцепке.'])
	},
		{
		id: 798,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Как воспринимается водителем скорость своего автомобиля при длительном движении по равнинной дороге на большой скорости?',
		hint: 'Водитель определяет скорость своего автомобиля, главным образом, по скорости перемещения объектов, попадающих в поле его зрения. Если такие объекты, как деревья, дорожные знаки, другие автомобили длительное время удалены от Вас, то угловая скорость их перемещения уменьшается. А этот эффект воспринимается водителем, как уменьшение скорости движения самого автомобиля. Поэтому в подобных условиях движения водителю целесообразно чаще бросать взгляд на приборный щиток, чтобы проверить правильность выбора скоростного режима движения.',
		correctAnswer: 0,
		answers: _elm_lang$core$Native_List.fromArray(
			['Кажется меньше, чем в действительности.', 'Кажется больше, чем в действительности.', 'Восприятие скорости не меняется.'])
	},
		{
		id: 799,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'При движении по какому участку дороги действие сильного бокового ветра наиболее опасно?',
		hint: 'Действие сильного бокового ветра наиболее опасно при выезде с закрытого участка на открытый, так как возникающий в этом месте порыв ветра может повлиять на курсовую устойчивость автомобиля.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['По открытому.', 'По закрытому деревьями.', 'При выезде с закрытого участка на открытый.'])
	},
		{
		id: 800,
		imageName: _elm_lang$core$Maybe$Nothing,
		question: 'Какова первая помощью при наличии признаков термического ожога второй степени (покраснение и отёк кожи, образование на месте ожога пузырей, наполненных жидкостью, сильная боль)?',
		hint: 'Вскрытие пузыря и удаление с обожжённой поверхности остатков одежды не допускается, так как это спрсобствует образованию раны, которая инфицируется, а с её поверхности происходит испарение жидкой части крови, что может привести к обезвоживанию организма. Рану необходимо накрыть стерильной салфеткой, не прибинтовывая её, поскольку тугое бинтование приводит к дополнительным травмам при ожогах. Для профилактики ожогового шока необходимо приложить холод и дать болеутоляющее средство из индивидуальной аптечки водителя, если у пострадавшего нет на него аллергии. Для предотвращения обезвоживания пострадавшего пить водой.',
		correctAnswer: 2,
		answers: _elm_lang$core$Native_List.fromArray(
			['Полить ожоговую поверхность холодной водой, смазать спиртовой настойкой йода, накрыть стерильной салфеткой и туго забинтовать. Дать болеутоляющее средство из индивидуальной аптечки.', 'Вскрыть пузыри, очистить ожоговоую поверхность от остатков одежды, накрыть стерильной салфеткой (не бинтовать), приложить холод, поить пострадавшего водой.', 'Пузыри не вскрывать, остатки одежды с обожжённой поверхности не удалять, рану накрыть старильной салфеткой (не бинтовать),  приложить холод, дать болеутоляющее средство из индивидуальной аптечки (при отсутствии алергии на него) и поить пострадавшего водой.'])
	}
	]);
var _user$project$Data_CardsList$totalCardsCount = _elm_lang$core$List$length(_user$project$Data_CardsList$cardsList);
var _user$project$Data_CardsList$cardById = function (id) {
	return _elm_lang$core$List$head(
		A2(
			_elm_lang$core$List$filter,
			function (card) {
				return _elm_lang$core$Native_Utils.eq(card.id, id);
			},
			_user$project$Data_CardsList$cardsList));
};

var _user$project$Features_Result_Model$selectedAnswer = F2(
	function (index, model) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			A2(_elm_lang$core$Array$get, index, model.answers),
			function (_) {
				return _.answer;
			});
	});
var _user$project$Features_Result_Model$getCards = function (model) {
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Array$toList(
			A2(
				_elm_lang$core$Array$map,
				_user$project$Data_CardsList$cardById,
				A2(
					_elm_lang$core$Array$map,
					function (_) {
						return _.card;
					},
					model.answers))));
};
var _user$project$Features_Result_Model$totalAnswersCount = function (model) {
	return _elm_lang$core$Array$length(model.answers);
};
var _user$project$Features_Result_Model$isCorrectAnswer = function (_p0) {
	var _p1 = _p0;
	return A2(
		_elm_lang$core$Maybe$withDefault,
		false,
		A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				}),
			_p1.answer,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.correctAnswer;
				},
				_user$project$Data_CardsList$cardById(_p1.card))));
};
var _user$project$Features_Result_Model$correctAnswersCount = function (model) {
	return _elm_lang$core$Array$length(
		A2(_elm_lang$core$Array$filter, _user$project$Features_Result_Model$isCorrectAnswer, model.answers));
};
var _user$project$Features_Result_Model$succeed = function (model) {
	var correct = _elm_lang$core$Basics$toFloat(
		_user$project$Features_Result_Model$correctAnswersCount(model));
	var total = _elm_lang$core$Basics$toFloat(
		_user$project$Features_Result_Model$totalAnswersCount(model));
	return _elm_lang$core$Native_Utils.cmp(correct / total, _user$project$Config$successScore) > 0;
};
var _user$project$Features_Result_Model$init = {
	answers: _elm_lang$core$Array$empty,
	elapsedTime: 0,
	date: _elm_lang$core$Date$fromTime(0)
};
var _user$project$Features_Result_Model$Model = F3(
	function (a, b, c) {
		return {answers: a, elapsedTime: b, date: c};
	});

var _user$project$Features_Result_Messages$Close = {ctor: 'Close'};
var _user$project$Features_Result_Messages$Open = function (a) {
	return {ctor: 'Open', _0: a};
};
var _user$project$Features_Result_Messages$NoOp = {ctor: 'NoOp'};

var _user$project$Features_ResultsList_Model$nextId = function (model) {
	return _elm_lang$core$Array$length(model);
};
var _user$project$Features_ResultsList_Model$resultById = F2(
	function (id, model) {
		return A2(_elm_lang$core$Array$get, id, model);
	});
var _user$project$Features_ResultsList_Model$add = F2(
	function (result, model) {
		return A2(_elm_lang$core$Array$push, result, model);
	});
var _user$project$Features_ResultsList_Model$init = _elm_lang$core$Array$empty;

var _user$project$Features_ResultsList_Messages$HelpMessage = function (a) {
	return {ctor: 'HelpMessage', _0: a};
};
var _user$project$Features_ResultsList_Messages$OpenQuiz = {ctor: 'OpenQuiz'};
var _user$project$Features_ResultsList_Messages$SetResults = function (a) {
	return {ctor: 'SetResults', _0: a};
};
var _user$project$Features_ResultsList_Messages$ShowResult = function (a) {
	return {ctor: 'ShowResult', _0: a};
};
var _user$project$Features_ResultsList_Messages$AddResult = function (a) {
	return {ctor: 'AddResult', _0: a};
};
var _user$project$Features_ResultsList_Messages$Close = {ctor: 'Close'};

var _user$project$App_Messages$HelpMessage = function (a) {
	return {ctor: 'HelpMessage', _0: a};
};
var _user$project$App_Messages$ResultsListMessage = function (a) {
	return {ctor: 'ResultsListMessage', _0: a};
};
var _user$project$App_Messages$ResultMessage = function (a) {
	return {ctor: 'ResultMessage', _0: a};
};
var _user$project$App_Messages$QuizMessage = function (a) {
	return {ctor: 'QuizMessage', _0: a};
};
var _user$project$App_Messages$HomeMessage = function (a) {
	return {ctor: 'HomeMessage', _0: a};
};
var _user$project$App_Messages$NoOp = {ctor: 'NoOp'};

var _user$project$App_Routing$navigateTo = function (route) {
	return _elm_lang$navigation$Navigation$newUrl(
		function () {
			var _p0 = route;
			switch (_p0.ctor) {
				case 'Home':
					return '#';
				case 'Quiz':
					return '#quiz';
				case 'Result':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'#results/',
						_elm_lang$core$Basics$toString(_p0._0));
				case 'ResultsList':
					return '#results';
				default:
					return '#';
			}
		}());
};
var _user$project$App_Routing$NotFound = {ctor: 'NotFound'};
var _user$project$App_Routing$routeFromResult = function (result) {
	var _p1 = result;
	if (_p1.ctor === 'Ok') {
		return _p1._0;
	} else {
		return _user$project$App_Routing$NotFound;
	}
};
var _user$project$App_Routing$ResultsList = {ctor: 'ResultsList'};
var _user$project$App_Routing$Result = function (a) {
	return {ctor: 'Result', _0: a};
};
var _user$project$App_Routing$Quiz = {ctor: 'Quiz'};
var _user$project$App_Routing$Home = {ctor: 'Home'};
var _user$project$App_Routing$routes = _evancz$url_parser$UrlParser$oneOf(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$App_Routing$Home,
			_evancz$url_parser$UrlParser$s('')),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$App_Routing$Quiz,
			_evancz$url_parser$UrlParser$s('quiz')),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$App_Routing$Result,
			A2(
				_evancz$url_parser$UrlParser_ops['</>'],
				_evancz$url_parser$UrlParser$s('results'),
				_evancz$url_parser$UrlParser$int)),
			A2(
			_evancz$url_parser$UrlParser$format,
			_user$project$App_Routing$ResultsList,
			_evancz$url_parser$UrlParser$s('results'))
		]));
var _user$project$App_Routing$hashParser = function (location) {
	return A3(
		_evancz$url_parser$UrlParser$parse,
		_elm_lang$core$Basics$identity,
		_user$project$App_Routing$routes,
		A2(_elm_lang$core$String$dropLeft, 1, location.hash));
};
var _user$project$App_Routing$parser = _elm_lang$navigation$Navigation$makeParser(_user$project$App_Routing$hashParser);

var _user$project$Features_Quiz_Model$result = function (model) {
	return {elapsedTime: model.elapsedTime, answers: model.answers, date: model.date};
};
var _user$project$Features_Quiz_Model$activeAnswer = function (model) {
	return A2(_elm_lang$core$Array$get, model.activeCard, model.answers);
};
var _user$project$Features_Quiz_Model$activeCard = function (model) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		_user$project$Features_Quiz_Model$activeAnswer(model),
		function (_p0) {
			var _p1 = _p0;
			return _user$project$Data_CardsList$cardById(_p1.card);
		});
};
var _user$project$Features_Quiz_Model$getCards = function (model) {
	return A2(
		_elm_lang$core$List$filterMap,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Array$toList(
			A2(
				_elm_lang$core$Array$map,
				_user$project$Data_CardsList$cardById,
				A2(
					_elm_lang$core$Array$map,
					function (_) {
						return _.card;
					},
					model.answers))));
};
var _user$project$Features_Quiz_Model$selectedAnswer = function (model) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		A2(_elm_lang$core$Array$get, model.activeCard, model.answers),
		function (_) {
			return _.answer;
		});
};
var _user$project$Features_Quiz_Model$isValidAnswerIndex = F2(
	function (model, index) {
		var _p2 = _user$project$Features_Quiz_Model$activeCard(model);
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Native_Utils.cmp(
				index,
				_elm_lang$core$List$length(_p2._0.answers)) < 0;
		} else {
			return false;
		}
	});
var _user$project$Features_Quiz_Model$addAnswer = F2(
	function (model, index) {
		var _p3 = _user$project$Features_Quiz_Model$activeAnswer(model);
		if (_p3.ctor === 'Just') {
			if (A2(_user$project$Features_Quiz_Model$isValidAnswerIndex, model, index)) {
				var answers = A3(
					_elm_lang$core$Array$set,
					model.activeCard,
					_elm_lang$core$Native_Utils.update(
						_p3._0,
						{
							answer: _elm_lang$core$Maybe$Just(index)
						}),
					model.answers);
				return _elm_lang$core$Native_Utils.update(
					model,
					{answers: answers});
			} else {
				return model;
			}
		} else {
			return model;
		}
	});
var _user$project$Features_Quiz_Model$incrementTimer = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{elapsedTime: model.elapsedTime + 1});
};
var _user$project$Features_Quiz_Model$toggleHint = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			showHint: _elm_lang$core$Basics$not(model.showHint)
		});
};
var _user$project$Features_Quiz_Model$nextCard = function (model) {
	var activeCard = A2(
		_elm_lang$core$Basics$min,
		model.activeCard + 1,
		_elm_lang$core$Array$length(model.answers) - 1);
	return _elm_lang$core$Native_Utils.update(
		model,
		{activeCard: activeCard, showHint: false});
};
var _user$project$Features_Quiz_Model$prevCard = function (model) {
	var activeCard = A2(_elm_lang$core$Basics$max, model.activeCard - 1, 0);
	return _elm_lang$core$Native_Utils.update(
		model,
		{activeCard: activeCard, showHint: false});
};
var _user$project$Features_Quiz_Model$setDate = F2(
	function (model, time) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				date: _elm_lang$core$Date$fromTime(time)
			});
	});
var _user$project$Features_Quiz_Model$reset = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{activeCard: 0, elapsedTime: 0});
};
var _user$project$Features_Quiz_Model$initAnswers = F2(
	function (model, cards) {
		var answers = A2(
			_elm_lang$core$Array$map,
			function (card) {
				return A2(_user$project$Types$Answer, card, _elm_lang$core$Maybe$Nothing);
			},
			A3(_elm_lang$core$Array$slice, 0, _user$project$Config$cardsPerQuiz, cards));
		return _elm_lang$core$Native_Utils.update(
			model,
			{answers: answers});
	});
var _user$project$Features_Quiz_Model$shuffleGenerator = _elm_community$elm_random_extra$Random_Array$shuffle(
	A2(
		_elm_lang$core$Array$map,
		function (_) {
			return _.id;
		},
		_elm_lang$core$Array$fromList(_user$project$Data_CardsList$cardsList)));
var _user$project$Features_Quiz_Model$init = {
	activeCard: 0,
	elapsedTime: 0,
	answers: _elm_lang$core$Array$empty,
	showHint: false,
	date: _elm_lang$core$Date$fromTime(0)
};
var _user$project$Features_Quiz_Model$Model = F5(
	function (a, b, c, d, e) {
		return {activeCard: a, elapsedTime: b, answers: c, showHint: d, date: e};
	});

var _user$project$App_Model$init = function (result) {
	var model = {
		route: _user$project$App_Routing$routeFromResult(result),
		quiz: _user$project$Features_Quiz_Model$init,
		result: _user$project$Features_Result_Model$init,
		resultsList: _user$project$Features_ResultsList_Model$init,
		help: _user$project$Features_Help_Model$init(
			_elm_lang$core$Maybe$Just(_user$project$Types$HomeMenuHint))
	};
	return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
};
var _user$project$App_Model$Model = F5(
	function (a, b, c, d, e) {
		return {route: a, quiz: b, result: c, resultsList: d, help: e};
	});

var _user$project$Utils_Keyboard$UnknownKey = {ctor: 'UnknownKey'};
var _user$project$Utils_Keyboard$Number5 = {ctor: 'Number5'};
var _user$project$Utils_Keyboard$Number4 = {ctor: 'Number4'};
var _user$project$Utils_Keyboard$Number3 = {ctor: 'Number3'};
var _user$project$Utils_Keyboard$Number2 = {ctor: 'Number2'};
var _user$project$Utils_Keyboard$Number1 = {ctor: 'Number1'};
var _user$project$Utils_Keyboard$RightArrow = {ctor: 'RightArrow'};
var _user$project$Utils_Keyboard$LeftArrow = {ctor: 'LeftArrow'};
var _user$project$Utils_Keyboard$Escape = {ctor: 'Escape'};
var _user$project$Utils_Keyboard$codeToKey = function (code) {
	var _p0 = code;
	switch (_p0) {
		case 27:
			return _user$project$Utils_Keyboard$Escape;
		case 37:
			return _user$project$Utils_Keyboard$LeftArrow;
		case 39:
			return _user$project$Utils_Keyboard$RightArrow;
		case 49:
			return _user$project$Utils_Keyboard$Number1;
		case 50:
			return _user$project$Utils_Keyboard$Number2;
		case 51:
			return _user$project$Utils_Keyboard$Number3;
		case 52:
			return _user$project$Utils_Keyboard$Number4;
		case 53:
			return _user$project$Utils_Keyboard$Number5;
		default:
			return _user$project$Utils_Keyboard$UnknownKey;
	}
};

var _user$project$Features_Quiz_Subscriptions$keypressToAction = function (keycode) {
	var _p0 = _user$project$Utils_Keyboard$codeToKey(keycode);
	switch (_p0.ctor) {
		case 'Escape':
			return _user$project$Features_Quiz_Messages$Cancel;
		case 'LeftArrow':
			return _user$project$Features_Quiz_Messages$PrevCard;
		case 'RightArrow':
			return _user$project$Features_Quiz_Messages$NextCard;
		case 'Number1':
			return _user$project$Features_Quiz_Messages$Answer(0);
		case 'Number2':
			return _user$project$Features_Quiz_Messages$Answer(1);
		case 'Number3':
			return _user$project$Features_Quiz_Messages$Answer(2);
		case 'Number4':
			return _user$project$Features_Quiz_Messages$Answer(3);
		case 'Number5':
			return _user$project$Features_Quiz_Messages$Answer(4);
		default:
			return _user$project$Features_Quiz_Messages$NoOp;
	}
};
var _user$project$Features_Quiz_Subscriptions$subscriptions = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$core$Time$every,
			_elm_lang$core$Time$second,
			function (_p1) {
				return _user$project$Features_Quiz_Messages$IncrementTimer;
			}),
			_elm_lang$keyboard$Keyboard$downs(_user$project$Features_Quiz_Subscriptions$keypressToAction)
		]));

var _user$project$Features_Result_Decode$answerDecoder = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		_elm_lang$core$Json_Decode$succeed(_user$project$Types$Answer),
		A2(_elm_lang$core$Json_Decode_ops[':='], 'card', _elm_lang$core$Json_Decode$int)),
	A2(
		_elm_lang$core$Json_Decode_ops[':='],
		'answer',
		_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int)));
var _user$project$Features_Result_Decode$dateDecoder = A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Json_Decode$float);
var _user$project$Features_Result_Decode$modelDecoder = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_user$project$Features_Result_Model$Model),
			A2(
				_elm_lang$core$Json_Decode_ops[':='],
				'answers',
				_elm_lang$core$Json_Decode$array(_user$project$Features_Result_Decode$answerDecoder))),
		A2(_elm_lang$core$Json_Decode_ops[':='], 'elapsedTime', _elm_lang$core$Json_Decode$int)),
	A2(_elm_lang$core$Json_Decode_ops[':='], 'date', _user$project$Features_Result_Decode$dateDecoder));
var _user$project$Features_Result_Decode$fromJson = function (json) {
	var _p0 = A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Features_Result_Decode$modelDecoder, json);
	if (_p0.ctor === 'Ok') {
		return _p0._0;
	} else {
		return _user$project$Features_Result_Model$init;
	}
};

var _user$project$Features_ResultsList_Decode$modelDecoder = _elm_lang$core$Json_Decode$array(_user$project$Features_Result_Decode$modelDecoder);
var _user$project$Features_ResultsList_Decode$fromJson = function (json) {
	var _p0 = A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Features_ResultsList_Decode$modelDecoder, json);
	if (_p0.ctor === 'Ok') {
		return _p0._0;
	} else {
		return _user$project$Features_ResultsList_Model$init;
	}
};

var _user$project$Features_ResultsList_Subscriptions$mapResults = function (value) {
	return _user$project$Features_ResultsList_Messages$SetResults(
		_user$project$Features_ResultsList_Decode$fromJson(
			A2(_elm_lang$core$Maybe$withDefault, _elm_lang$core$Json_Encode$null, value)));
};
var _user$project$Features_ResultsList_Subscriptions$results = _elm_lang$core$Native_Platform.incomingPort(
	'results',
	_elm_lang$core$Json_Decode$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value)
			])));
var _user$project$Features_ResultsList_Subscriptions$subscriptions = _user$project$Features_ResultsList_Subscriptions$results(_user$project$Features_ResultsList_Subscriptions$mapResults);
var _user$project$Features_ResultsList_Subscriptions$setResults = _elm_lang$core$Native_Platform.outgoingPort(
	'setResults',
	function (v) {
		return v;
	});

var _user$project$Features_Help_Decode$helpHint = function (value) {
	var _p0 = value;
	switch (_p0) {
		case 'HomeMenuHint':
			return _user$project$Types$HomeMenuHint;
		case 'QuizMenuHint':
			return _user$project$Types$QuizMenuHint;
		case 'QuizStatusHint':
			return _user$project$Types$QuizStatusHint;
		case 'QuizCardHint':
			return _user$project$Types$QuizCardHint;
		case 'ResultTableHint':
			return _user$project$Types$ResultTableHint;
		default:
			return _user$project$Types$HomeMenuHint;
	}
};
var _user$project$Features_Help_Decode$currentHintDecoder = function (hint) {
	return _elm_lang$core$Json_Decode$succeed(
		A2(_elm_lang$core$Maybe$map, _user$project$Features_Help_Decode$helpHint, hint));
};
var _user$project$Features_Help_Decode$shownHints = function (hints) {
	return _elm_lang$core$Json_Decode$succeed(
		A2(_elm_lang$core$List$map, _user$project$Features_Help_Decode$helpHint, hints));
};
var _user$project$Features_Help_Decode$modelDecoder = A2(
	_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
	A2(
		_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
		A2(
			_elm_community$json_extra$Json_Decode_Extra_ops['|:'],
			_elm_lang$core$Json_Decode$succeed(_user$project$Features_Help_Model$Model),
			A2(_elm_lang$core$Json_Decode_ops[':='], 'show', _elm_lang$core$Json_Decode$bool)),
		A2(
			_elm_lang$core$Json_Decode$andThen,
			A2(
				_elm_lang$core$Json_Decode_ops[':='],
				'currentHint',
				_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$string)),
			_user$project$Features_Help_Decode$currentHintDecoder)),
	A2(
		_elm_lang$core$Json_Decode$andThen,
		A2(
			_elm_lang$core$Json_Decode_ops[':='],
			'shownHints',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
		_user$project$Features_Help_Decode$shownHints));
var _user$project$Features_Help_Decode$fromJson = function (json) {
	var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Features_Help_Decode$modelDecoder, json);
	if (_p1.ctor === 'Ok') {
		return _p1._0;
	} else {
		return _user$project$Features_Help_Model$init(
			_elm_lang$core$Maybe$Just(_user$project$Types$HomeMenuHint));
	}
};

var _user$project$Features_Help_Subscriptions$mapHelp = function (value) {
	return _user$project$Types$SetHelp(
		_user$project$Features_Help_Decode$fromJson(
			A2(_elm_lang$core$Maybe$withDefault, _elm_lang$core$Json_Encode$null, value)));
};
var _user$project$Features_Help_Subscriptions$help = _elm_lang$core$Native_Platform.incomingPort(
	'help',
	_elm_lang$core$Json_Decode$oneOf(
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value)
			])));
var _user$project$Features_Help_Subscriptions$subscriptions = _user$project$Features_Help_Subscriptions$help(_user$project$Features_Help_Subscriptions$mapHelp);
var _user$project$Features_Help_Subscriptions$setHelp = _elm_lang$core$Native_Platform.outgoingPort(
	'setHelp',
	function (v) {
		return v;
	});

var _user$project$App_Subscriptions$mapQuizMessages = F2(
	function (model, message) {
		return _elm_lang$core$Native_Utils.eq(model.route, _user$project$App_Routing$Quiz) ? _user$project$App_Messages$QuizMessage(message) : _user$project$App_Messages$NoOp;
	});
var _user$project$App_Subscriptions$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$core$Platform_Sub$map,
				_user$project$App_Subscriptions$mapQuizMessages(model),
				_user$project$Features_Quiz_Subscriptions$subscriptions),
				A2(_elm_lang$core$Platform_Sub$map, _user$project$App_Messages$ResultsListMessage, _user$project$Features_ResultsList_Subscriptions$subscriptions),
				A2(_elm_lang$core$Platform_Sub$map, _user$project$App_Messages$HelpMessage, _user$project$Features_Help_Subscriptions$subscriptions)
			]));
};

var _user$project$Utils_Commands$sendMessage = function (message) {
	return A3(
		_elm_lang$core$Task$perform,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Basics$identity,
		_elm_lang$core$Task$succeed(message));
};

var _user$project$App_Update_Home$updateHome = F2(
	function (message, model) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'OpenQuiz':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _user$project$App_Routing$navigateTo(_user$project$App_Routing$Quiz)
				};
			case 'OpenResultsList':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _user$project$App_Routing$navigateTo(_user$project$App_Routing$ResultsList)
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _user$project$Utils_Commands$sendMessage(
						_user$project$App_Messages$HelpMessage(_p0._0))
				};
		}
	});

var _user$project$Features_Quiz_Update$update = F2(
	function (message, model) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'Start':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Features_Quiz_Model$reset(model),
					_1: _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								A3(
								_elm_lang$core$Task$perform,
								function (_p1) {
									return _user$project$Features_Quiz_Messages$NoOp;
								},
								_user$project$Features_Quiz_Messages$SetDate,
								_elm_lang$core$Time$now),
								A2(_elm_lang$core$Random$generate, _user$project$Features_Quiz_Messages$InitAnswers, _user$project$Features_Quiz_Model$shuffleGenerator)
							]))
				};
			case 'InitAnswers':
				return {
					ctor: '_Tuple2',
					_0: A2(_user$project$Features_Quiz_Model$initAnswers, model, _p0._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'NextCard':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Features_Quiz_Model$nextCard(model),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'PrevCard':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Features_Quiz_Model$prevCard(model),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ToggleHint':
				return {
					ctor: '_Tuple2',
					_0: _user$project$Features_Quiz_Model$toggleHint(model),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'IncrementTimer':
				var updatedModel = _user$project$Features_Quiz_Model$incrementTimer(model);
				var command = _elm_lang$core$Native_Utils.eq(updatedModel.elapsedTime, _user$project$Config$timeLimit) ? _user$project$Utils_Commands$sendMessage(
					_user$project$Features_Quiz_Messages$Finish(
						_user$project$Features_Quiz_Model$result(updatedModel))) : _elm_lang$core$Platform_Cmd$none;
				return {ctor: '_Tuple2', _0: updatedModel, _1: command};
			case 'Answer':
				return {
					ctor: '_Tuple2',
					_0: A2(_user$project$Features_Quiz_Model$addAnswer, model, _p0._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SetDate':
				return {
					ctor: '_Tuple2',
					_0: A2(_user$project$Features_Quiz_Model$setDate, model, _p0._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});

var _user$project$App_Update_Quiz$updateQuiz = F2(
	function (message, model) {
		var _p0 = A2(_user$project$Features_Quiz_Update$update, message, model.quiz);
		var quiz = _p0._0;
		var command = _p0._1;
		var taggedCommand = A2(_elm_lang$core$Platform_Cmd$map, _user$project$App_Messages$QuizMessage, command);
		var finalCommand = function () {
			var _p1 = message;
			switch (_p1.ctor) {
				case 'Cancel':
					return _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								taggedCommand,
								_user$project$App_Routing$navigateTo(_user$project$App_Routing$Home)
							]));
				case 'Finish':
					return _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								taggedCommand,
								_user$project$Utils_Commands$sendMessage(
								_user$project$App_Messages$ResultsListMessage(
									_user$project$Features_ResultsList_Messages$AddResult(_p1._0))),
								_user$project$App_Routing$navigateTo(
								_user$project$App_Routing$Result(
									_user$project$Features_ResultsList_Model$nextId(model.resultsList)))
							]));
				case 'HelpMessage':
					return _user$project$Utils_Commands$sendMessage(
						_user$project$App_Messages$HelpMessage(_p1._0));
				default:
					return taggedCommand;
			}
		}();
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{quiz: quiz}),
			_1: finalCommand
		};
	});

var _user$project$Features_Result_Encode$encodeAnswer = function (_p0) {
	var _p1 = _p0;
	var encodedAnswer = function () {
		var _p2 = _p1.answer;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Json_Encode$int(_p2._0);
		} else {
			return _elm_lang$core$Json_Encode$null;
		}
	}();
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'card',
				_1: _elm_lang$core$Json_Encode$int(_p1.card)
			},
				{ctor: '_Tuple2', _0: 'answer', _1: encodedAnswer}
			]));
};
var _user$project$Features_Result_Encode$encodeAnswersArray = function (answers) {
	return _elm_lang$core$Json_Encode$array(
		A2(_elm_lang$core$Array$map, _user$project$Features_Result_Encode$encodeAnswer, answers));
};
var _user$project$Features_Result_Encode$toJson = function (model) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'answers',
				_1: _user$project$Features_Result_Encode$encodeAnswersArray(model.answers)
			},
				{
				ctor: '_Tuple2',
				_0: 'elapsedTime',
				_1: _elm_lang$core$Json_Encode$int(model.elapsedTime)
			},
				{
				ctor: '_Tuple2',
				_0: 'date',
				_1: _elm_lang$core$Json_Encode$float(
					_elm_lang$core$Date$toTime(model.date))
			}
			]));
};

var _user$project$Features_ResultsList_Encode$toJson = function (model) {
	return _elm_lang$core$Json_Encode$array(
		A2(_elm_lang$core$Array$map, _user$project$Features_Result_Encode$toJson, model));
};

var _user$project$Features_ResultsList_Update$update = F2(
	function (message, model) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'AddResult':
				var updatedModel = A2(_user$project$Features_ResultsList_Model$add, _p0._0, model);
				return {
					ctor: '_Tuple2',
					_0: updatedModel,
					_1: _user$project$Features_ResultsList_Subscriptions$setResults(
						_user$project$Features_ResultsList_Encode$toJson(updatedModel))
				};
			case 'SetResults':
				return {ctor: '_Tuple2', _0: _p0._0, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});

var _user$project$App_Update_ResultsList$updateResultsList = F2(
	function (message, model) {
		var _p0 = A2(_user$project$Features_ResultsList_Update$update, message, model.resultsList);
		var resultsList = _p0._0;
		var command = _p0._1;
		var taggedCommand = A2(_elm_lang$core$Platform_Cmd$map, _user$project$App_Messages$ResultsListMessage, command);
		var finalCommand = function () {
			var _p1 = message;
			switch (_p1.ctor) {
				case 'OpenQuiz':
					return _user$project$App_Routing$navigateTo(_user$project$App_Routing$Quiz);
				case 'Close':
					return _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								taggedCommand,
								_user$project$App_Routing$navigateTo(_user$project$App_Routing$Home)
							]));
				case 'ShowResult':
					var _p2 = _p1._0;
					var successCommand = function (result) {
						return _elm_lang$core$Platform_Cmd$batch(
							_elm_lang$core$Native_List.fromArray(
								[
									taggedCommand,
									_user$project$App_Routing$navigateTo(
									_user$project$App_Routing$Result(_p2))
								]));
					};
					return A2(
						_elm_lang$core$Maybe$withDefault,
						taggedCommand,
						A2(
							_elm_lang$core$Maybe$map,
							successCommand,
							A2(_user$project$Features_ResultsList_Model$resultById, _p2, resultsList)));
				case 'HelpMessage':
					return _user$project$Utils_Commands$sendMessage(
						_user$project$App_Messages$HelpMessage(_p1._0));
				default:
					return taggedCommand;
			}
		}();
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{resultsList: resultsList}),
			_1: finalCommand
		};
	});

var _user$project$Features_Result_Update$update = F2(
	function (message, model) {
		var _p0 = message;
		if (_p0.ctor === 'Open') {
			return {ctor: '_Tuple2', _0: _p0._0, _1: _elm_lang$core$Platform_Cmd$none};
		} else {
			return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});

var _user$project$App_Update_Result$updateResult = F2(
	function (message, model) {
		var _p0 = A2(_user$project$Features_Result_Update$update, message, model.result);
		var result = _p0._0;
		var command = _p0._1;
		var taggedCommand = A2(_elm_lang$core$Platform_Cmd$map, _user$project$App_Messages$ResultMessage, command);
		var finalCommand = function () {
			var _p1 = message;
			if (_p1.ctor === 'Close') {
				return _elm_lang$core$Platform_Cmd$batch(
					_elm_lang$core$Native_List.fromArray(
						[
							taggedCommand,
							_user$project$App_Routing$navigateTo(_user$project$App_Routing$Home)
						]));
			} else {
				return taggedCommand;
			}
		}();
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{result: result}),
			_1: finalCommand
		};
	});

var _user$project$Features_Help_Encode$shownHints = function (answers) {
	return _elm_lang$core$Json_Encode$array(
		A2(
			_elm_lang$core$Array$map,
			function (_p0) {
				return _elm_lang$core$Json_Encode$string(
					_elm_lang$core$Basics$toString(_p0));
			},
			_elm_lang$core$Array$fromList(answers)));
};
var _user$project$Features_Help_Encode$currentHint = function (hint) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_elm_lang$core$Json_Encode$null,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p1) {
				return _elm_lang$core$Json_Encode$string(
					_elm_lang$core$Basics$toString(_p1));
			},
			hint));
};
var _user$project$Features_Help_Encode$toJson = function (model) {
	return _elm_lang$core$Json_Encode$object(
		_elm_lang$core$Native_List.fromArray(
			[
				{
				ctor: '_Tuple2',
				_0: 'show',
				_1: _elm_lang$core$Json_Encode$bool(model.show)
			},
				{
				ctor: '_Tuple2',
				_0: 'currentHint',
				_1: _user$project$Features_Help_Encode$currentHint(model.currentHint)
			},
				{
				ctor: '_Tuple2',
				_0: 'shownHints',
				_1: _user$project$Features_Help_Encode$shownHints(model.shownHints)
			}
			]));
};

var _user$project$Features_Help_Update$update = F2(
	function (message, model) {
		var updatedModel = function () {
			var _p0 = message;
			switch (_p0.ctor) {
				case 'ShowHintSet':
					return A2(_user$project$Features_Help_Model$showHintSet, model, _p0._0);
				case 'ShowHint':
					return A2(_user$project$Features_Help_Model$showHint, model, _p0._0);
				case 'HideHint':
					return _user$project$Features_Help_Model$hideHint(model);
				case 'EnableHelp':
					return _user$project$Features_Help_Model$enableHelp;
				case 'DisableHelp':
					return _user$project$Features_Help_Model$disableHelp;
				default:
					return _p0._0;
			}
		}();
		return {
			ctor: '_Tuple2',
			_0: updatedModel,
			_1: _user$project$Features_Help_Subscriptions$setHelp(
				_user$project$Features_Help_Encode$toJson(updatedModel))
		};
	});

var _user$project$App_Update_Help$updateHelp = F2(
	function (message, model) {
		var _p0 = A2(_user$project$Features_Help_Update$update, message, model.help);
		var help = _p0._0;
		var command = _p0._1;
		var taggedCommand = A2(_elm_lang$core$Platform_Cmd$map, _user$project$App_Messages$HelpMessage, command);
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{help: help}),
			_1: taggedCommand
		};
	});

var _user$project$App_Update$update = F2(
	function (message, model) {
		var _p0 = _elm_lang$core$Native_Utils.eq(message, _user$project$App_Messages$NoOp) ? message : A2(_elm_lang$core$Debug$log, 'update', message);
		var _p1 = message;
		switch (_p1.ctor) {
			case 'HomeMessage':
				return A2(_user$project$App_Update_Home$updateHome, _p1._0, model);
			case 'QuizMessage':
				return A2(_user$project$App_Update_Quiz$updateQuiz, _p1._0, model);
			case 'ResultsListMessage':
				return A2(_user$project$App_Update_ResultsList$updateResultsList, _p1._0, model);
			case 'ResultMessage':
				return A2(_user$project$App_Update_Result$updateResult, _p1._0, model);
			case 'HelpMessage':
				return A2(_user$project$App_Update_Help$updateHelp, _p1._0, model);
			default:
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
		}
	});

var _user$project$App_Update_Routing$showHintSet = function (hints) {
	return _user$project$Utils_Commands$sendMessage(
		_user$project$App_Messages$HelpMessage(
			_user$project$Types$ShowHintSet(hints)));
};
var _user$project$App_Update_Routing$openResult = function (result) {
	return _user$project$Utils_Commands$sendMessage(
		_user$project$App_Messages$ResultMessage(
			_user$project$Features_Result_Messages$Open(result)));
};
var _user$project$App_Update_Routing$update = F2(
	function (result, model) {
		var route = _user$project$App_Routing$routeFromResult(result);
		var command = function () {
			var _p0 = route;
			switch (_p0.ctor) {
				case 'Home':
					return _user$project$App_Update_Routing$showHintSet(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Types$HomeMenuHint]));
				case 'Quiz':
					return _elm_lang$core$Platform_Cmd$batch(
						_elm_lang$core$Native_List.fromArray(
							[
								_user$project$Utils_Commands$sendMessage(
								_user$project$App_Messages$QuizMessage(_user$project$Features_Quiz_Messages$Start)),
								_user$project$App_Update_Routing$showHintSet(
								_elm_lang$core$Native_List.fromArray(
									[_user$project$Types$QuizMenuHint, _user$project$Types$QuizStatusHint, _user$project$Types$QuizCardHint]))
							]));
				case 'Result':
					return A2(
						_elm_lang$core$Maybe$withDefault,
						_user$project$App_Routing$navigateTo(_user$project$App_Routing$ResultsList),
						A2(
							_elm_lang$core$Maybe$map,
							_user$project$App_Update_Routing$openResult,
							A2(_user$project$Features_ResultsList_Model$resultById, _p0._0, model.resultsList)));
				case 'ResultsList':
					return _user$project$App_Update_Routing$showHintSet(
						_elm_lang$core$Native_List.fromArray(
							[_user$project$Types$ResultTableHint]));
				default:
					return _elm_lang$core$Platform_Cmd$none;
			}
		}();
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.update(
				model,
				{route: route}),
			_1: command
		};
	});

var _user$project$Features_Home_Styles$namespace = 'Home';
var _user$project$Features_Home_Styles$namespacedClass = _user$project$Utils_CssHelpers$namespacedClass(_user$project$Features_Home_Styles$namespace);
var _user$project$Features_Home_Styles$Button = {ctor: 'Button'};
var _user$project$Features_Home_Styles$Card = {ctor: 'Card'};
var _user$project$Features_Home_Styles$Container = {ctor: 'Container'};
var _user$project$Features_Home_Styles$css = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Features_Home_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Home_Styles$Container,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$vw(100)),
					_rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$vh(100))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Home_Styles$Card,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$top(
					_rtfeldman$elm_css$Css$pct(50)),
					_rtfeldman$elm_css$Css$left(
					_rtfeldman$elm_css$Css$pct(50)),
					_rtfeldman$elm_css$Css$padding(
					_rtfeldman$elm_css$Css$px(40)),
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$px(350)),
					_rtfeldman$elm_css$Css$textAlign(_rtfeldman$elm_css$Css$center),
					_rtfeldman$elm_css$Css$transforms(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$translateX(
							_rtfeldman$elm_css$Css$pct(-50)),
							_rtfeldman$elm_css$Css$translateY(
							_rtfeldman$elm_css$Css$pct(-50))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Home_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$pct(100)),
					_rtfeldman$elm_css$Css$marginBottom(
					_rtfeldman$elm_css$Css$px(20)),
					_rtfeldman$elm_css$Css$lastOfType(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$marginBottom(_rtfeldman$elm_css$Css$zero)
						]))
				]))
		]));

var _user$project$Features_Home_View$view = F2(
	function (helpModel, help) {
		var helpToggleMessage = (helpModel.show && _elm_lang$core$Basics$not(
			_user$project$Features_Help_Model$allHintsShown(helpModel))) ? _user$project$Features_Home_Messages$HelpMessage(_user$project$Types$DisableHelp) : _user$project$Features_Home_Messages$HelpMessage(_user$project$Types$EnableHelp);
		var helpToggleCaption = (helpModel.show && _elm_lang$core$Basics$not(
			_user$project$Features_Help_Model$allHintsShown(helpModel))) ? 'Не показывать справку' : 'Показывать справку';
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_Home_Styles$namespacedClass,
					_user$project$Features_Home_Styles$Container,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_Home_Styles$namespacedClass,
							_user$project$Features_Home_Styles$Card,
							_elm_lang$core$Native_List.fromArray(
								['card']))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_elm_lang$html$Html$button,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_user$project$Features_Home_Styles$namespacedClass,
									_user$project$Features_Home_Styles$Button,
									_elm_lang$core$Native_List.fromArray(
										['btn'])),
									_elm_lang$html$Html_Events$onClick(_user$project$Features_Home_Messages$OpenQuiz)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Начать тестирование')
								])),
							A2(
							_elm_lang$html$Html$button,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_user$project$Features_Home_Styles$namespacedClass,
									_user$project$Features_Home_Styles$Button,
									_elm_lang$core$Native_List.fromArray(
										['btn'])),
									_elm_lang$html$Html_Events$onClick(_user$project$Features_Home_Messages$OpenResultsList)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text('Результаты')
								])),
							A2(
							_elm_lang$html$Html$button,
							_elm_lang$core$Native_List.fromArray(
								[
									A2(
									_user$project$Features_Home_Styles$namespacedClass,
									_user$project$Features_Home_Styles$Button,
									_elm_lang$core$Native_List.fromArray(
										['btn'])),
									_elm_lang$html$Html_Events$onClick(helpToggleMessage)
								]),
							_elm_lang$core$Native_List.fromArray(
								[
									_elm_lang$html$Html$text(helpToggleCaption)
								])),
							A3(
							help,
							_user$project$Types$HomeMenuHint,
							_elm_lang$core$Maybe$Nothing,
							_elm_lang$core$Native_List.fromArray(
								[
									{ctor: '_Tuple2', _0: _user$project$Types$Left, _1: 20},
									{ctor: '_Tuple2', _0: _user$project$Types$Bottom, _1: -100}
								]))
						]))
				]));
	});

var _user$project$Components_Header_Styles$namespace = 'Header';
var _user$project$Components_Header_Styles$namespacedClass = F2(
	function ($class, otherClasses) {
		var defaultClasses = function () {
			var _p0 = $class;
			switch (_p0.ctor) {
				case 'Menu':
					return _elm_lang$core$Native_List.fromArray(
						['header-menu', 'nav-wrapper', 'white']);
				case 'Left':
					return _elm_lang$core$Native_List.fromArray(
						['left']);
				default:
					return _elm_lang$core$Native_List.fromArray(
						['right']);
			}
		}();
		return A3(
			_user$project$Utils_CssHelpers$namespacedClass,
			_user$project$Components_Header_Styles$namespace,
			$class,
			A2(_elm_lang$core$List$append, defaultClasses, otherClasses));
	});
var _user$project$Components_Header_Styles$Right = {ctor: 'Right'};
var _user$project$Components_Header_Styles$Left = {ctor: 'Left'};
var _user$project$Components_Header_Styles$Menu = {ctor: 'Menu'};
var _user$project$Components_Header_Styles$css = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Components_Header_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Header_Styles$Menu,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$height(
						_rtfeldman$elm_css$Css$px(56)))
				]))
		]));

var _user$project$Components_AnswerList_Styles$answerClasses = F3(
	function (correct, highlight, colorAnswer) {
		var classes = highlight ? (colorAnswer ? _elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'green white-text', _1: correct},
				{
				ctor: '_Tuple2',
				_0: 'red lighten-2 white-text',
				_1: _elm_lang$core$Basics$not(correct)
			}
			]) : _elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'teal lighten-1 white-text', _1: true}
			])) : _elm_lang$core$Native_List.fromArray(
			[
				{ctor: '_Tuple2', _0: 'empty', _1: true}
			]);
		return _elm_lang$html$Html_Attributes$classList(
			A2(
				_elm_lang$core$List_ops['::'],
				{ctor: '_Tuple2', _0: 'collection-item', _1: true},
				classes));
	});
var _user$project$Components_AnswerList_Styles$namespace = 'AnswerList';
var _user$project$Components_AnswerList_Styles$namespacedClass = F2(
	function ($class, otherClasses) {
		var defaultClasses = function () {
			var _p0 = $class;
			return _elm_lang$core$Native_List.fromArray(
				['collection']);
		}();
		return A3(
			_user$project$Utils_CssHelpers$namespacedClass,
			_user$project$Components_AnswerList_Styles$namespace,
			$class,
			A2(_elm_lang$core$List$append, defaultClasses, otherClasses));
	});
var _user$project$Components_AnswerList_Styles$Container = {ctor: 'Container'};
var _user$project$Components_AnswerList_Styles$css = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Components_AnswerList_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_AnswerList_Styles$Container,
			_elm_lang$core$Native_List.fromArray(
				[
					A3(
					_rtfeldman$elm_css$Css$margin3,
					_rtfeldman$elm_css$Css$px(20),
					_rtfeldman$elm_css$Css$zero,
					_rtfeldman$elm_css$Css$zero)
				]))
		]));

var _user$project$Components_Card_Styles$namespace = 'Card';
var _user$project$Components_Card_Styles$namespacedClass = F2(
	function ($class, otherClasses) {
		var defaultClasses = function () {
			var _p0 = $class;
			switch (_p0.ctor) {
				case 'ReadOnlyCard':
					return _elm_lang$core$Native_List.fromArray(
						['card', 'card-static']);
				case 'Card':
					return _elm_lang$core$Native_List.fromArray(
						['card']);
				case 'Action':
					return _elm_lang$core$Native_List.fromArray(
						['card-action']);
				case 'Button':
					return _elm_lang$core$Native_List.fromArray(
						['card-button', 'teal-text']);
				case 'Hint':
					return _elm_lang$core$Native_List.fromArray(
						['card-reveal']);
				case 'Title':
					return _elm_lang$core$Native_List.fromArray(
						['card-title']);
				case 'Content':
					return _elm_lang$core$Native_List.fromArray(
						['card-content']);
				case 'Image':
					return _elm_lang$core$Native_List.fromArray(
						['card-image']);
				default:
					return _elm_lang$core$Native_List.fromArray(
						[]);
			}
		}();
		return A3(
			_user$project$Utils_CssHelpers$namespacedClass,
			_user$project$Components_Card_Styles$namespace,
			$class,
			A2(_elm_lang$core$List$append, defaultClasses, otherClasses));
	});
var _user$project$Components_Card_Styles$Image = {ctor: 'Image'};
var _user$project$Components_Card_Styles$Content = {ctor: 'Content'};
var _user$project$Components_Card_Styles$Title = {ctor: 'Title'};
var _user$project$Components_Card_Styles$HintContent = {ctor: 'HintContent'};
var _user$project$Components_Card_Styles$StaticHint = {ctor: 'StaticHint'};
var _user$project$Components_Card_Styles$Hint = {ctor: 'Hint'};
var _user$project$Components_Card_Styles$Button = {ctor: 'Button'};
var _user$project$Components_Card_Styles$Action = {ctor: 'Action'};
var _user$project$Components_Card_Styles$Card = {ctor: 'Card'};
var _user$project$Components_Card_Styles$Container = {ctor: 'Container'};
var _user$project$Components_Card_Styles$HelpIcon = {ctor: 'HelpIcon'};
var _user$project$Components_Card_Styles$ReadOnlyCard = {ctor: 'ReadOnlyCard'};
var _user$project$Components_Card_Styles$componentCss = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Components_Card_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$Container,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative),
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$vw(100)),
					_rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$vh(100)),
					_rtfeldman$elm_css$Css$marginTop(
					_rtfeldman$elm_css$Css$px(-56))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$ReadOnlyCard,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$maxWidth(
					_rtfeldman$elm_css$Css$px(600)),
					A3(
					_rtfeldman$elm_css$Css$margin3,
					_rtfeldman$elm_css$Css$zero,
					_rtfeldman$elm_css$Css$auto,
					_rtfeldman$elm_css$Css$px(20)),
					_rtfeldman$elm_css$Css$paddingBottom(
					_rtfeldman$elm_css$Css$px(20))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$Card,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$top(
					_rtfeldman$elm_css$Css$pct(50)),
					_rtfeldman$elm_css$Css$left(
					_rtfeldman$elm_css$Css$pct(50)),
					_rtfeldman$elm_css$Css$padding(
					_rtfeldman$elm_css$Css$px(1)),
					_rtfeldman$elm_css$Css$width(
					_rtfeldman$elm_css$Css$px(500)),
					_rtfeldman$elm_css$Css$overflow(_rtfeldman$elm_css$Css$hidden),
					_rtfeldman$elm_css$Css$transforms(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$translateX(
							_rtfeldman$elm_css$Css$pct(-50)),
							_rtfeldman$elm_css$Css$translateY(
							_rtfeldman$elm_css$Css$pct(-50))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$HelpIcon,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$marginTop(
					_rtfeldman$elm_css$Css$px(5))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$Action,
			_elm_lang$core$Native_List.fromArray(
				[_rtfeldman$elm_css$Css$displayFlex])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$Hint,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$important(
					_rtfeldman$elm_css$Css$display(_rtfeldman$elm_css$Css$block))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$HintContent,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$marginTop(
					_rtfeldman$elm_css$Css$px(10))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Components_Card_Styles$StaticHint,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$padding(
					_rtfeldman$elm_css$Css$px(20)),
					_rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('959595'))
				]))
		]));
var _user$project$Components_Card_Styles$css = _elm_lang$core$List$concat(
	_elm_lang$core$Native_List.fromArray(
		[_user$project$Components_AnswerList_Styles$css, _user$project$Components_Card_Styles$componentCss]));

var _user$project$Features_Quiz_Styles$namespace = 'Quiz';
var _user$project$Features_Quiz_Styles$namespacedClass = _user$project$Utils_CssHelpers$namespacedClass(_user$project$Features_Quiz_Styles$namespace);
var _user$project$Features_Quiz_Styles$CardHint = {ctor: 'CardHint'};
var _user$project$Features_Quiz_Styles$Cards = {ctor: 'Cards'};
var _user$project$Features_Quiz_Styles$HeaderMenu = {ctor: 'HeaderMenu'};
var _user$project$Features_Quiz_Styles$featureCss = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Features_Quiz_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Quiz_Styles$HeaderMenu,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative)
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Quiz_Styles$Cards,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$displayFlex,
					_rtfeldman$elm_css$Css$height(
					_rtfeldman$elm_css$Css$vh(100))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_Quiz_Styles$CardHint,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$absolute),
					_rtfeldman$elm_css$Css$top(
					_rtfeldman$elm_css$Css$pct(50)),
					_rtfeldman$elm_css$Css$left(
					_rtfeldman$elm_css$Css$pct(50))
				]))
		]));
var _user$project$Features_Quiz_Styles$css = _elm_lang$core$List$concat(
	_elm_lang$core$Native_List.fromArray(
		[_user$project$Components_Header_Styles$css, _user$project$Components_Card_Styles$css, _user$project$Features_Quiz_Styles$featureCss]));
var _user$project$Features_Quiz_Styles$Container = {ctor: 'Container'};

var _user$project$Components_Icon_Main$view = function (name) {
	return A2(
		_elm_lang$html$Html$i,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('material-icons')
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(name)
			]));
};

var _user$project$Components_Header_Main$menu = F2(
	function (kind, items) {
		return A2(
			_elm_lang$html$Html$ul,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Header_Styles$namespacedClass,
					kind,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			A2(
				_elm_lang$core$List$map,
				function (item) {
					return A2(
						_elm_lang$html$Html$li,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[item]));
				},
				items));
	});
var _user$project$Components_Header_Main$view = F2(
	function (left, right) {
		return A2(
			_elm_lang$html$Html$nav,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Header_Styles$namespacedClass,
					_user$project$Components_Header_Styles$Menu,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(_user$project$Components_Header_Main$menu, _user$project$Components_Header_Styles$Left, left),
					A2(_user$project$Components_Header_Main$menu, _user$project$Components_Header_Styles$Right, right)
				]));
	});

var _user$project$Components_AnswerList_Main$highlightAnswer = F2(
	function (current, selected) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			false,
			A2(
				_elm_lang$core$Maybe$map,
				function (answer) {
					return _elm_lang$core$Native_Utils.eq(answer, current);
				},
				selected));
	});
var _user$project$Components_AnswerList_Main$Model = F5(
	function (a, b, c, d, e) {
		return {readOnly: a, answers: b, selectedAnswer: c, correctAnswer: d, colorAnswer: e};
	});
var _user$project$Components_AnswerList_Main$Answer = function (a) {
	return {ctor: 'Answer', _0: a};
};
var _user$project$Components_AnswerList_Main$renderAnswer = F3(
	function (model, answer, answerText) {
		var highlight = A2(_user$project$Components_AnswerList_Main$highlightAnswer, answer, model.selectedAnswer);
		var correct = _elm_lang$core$Native_Utils.eq(answer, model.correctAnswer);
		var classes = A3(_user$project$Components_AnswerList_Styles$answerClasses, correct, highlight, model.colorAnswer);
		var attrs = model.readOnly ? _elm_lang$core$Native_List.fromArray(
			[_user$project$Utils_HtmlHelpers$void, classes]) : _elm_lang$core$Native_List.fromArray(
			[
				_user$project$Utils_HtmlHelpers$void,
				classes,
				_user$project$Utils_Events$onClick(
				_user$project$Components_AnswerList_Main$Answer(answer))
			]);
		var caption = A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Basics$toString(answer + 1),
			A2(_elm_lang$core$Basics_ops['++'], '. ', answerText));
		return A2(
			_elm_lang$html$Html$a,
			attrs,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text(caption)
				]));
	});
var _user$project$Components_AnswerList_Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Components_AnswerList_Styles$namespacedClass,
				_user$project$Components_AnswerList_Styles$Container,
				_elm_lang$core$Native_List.fromArray(
					[]))
			]),
		A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (index, text) {
					return A3(_user$project$Components_AnswerList_Main$renderAnswer, model, index, text);
				}),
			model.answers));
};

var _user$project$Components_Card_Main$image = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1.imageName;
	if (_p2.ctor === 'Just') {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Card_Styles$namespacedClass,
					_user$project$Components_Card_Styles$Image,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$img,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$src(
							A2(_elm_lang$core$Basics_ops['++'], 'assets/images/', _p2._0))
						]),
					_elm_lang$core$Native_List.fromArray(
						[]))
				]));
	} else {
		return _elm_lang$html$Html$text('');
	}
};
var _user$project$Components_Card_Main$Model = F5(
	function (a, b, c, d, e) {
		return {kind: a, number: b, card: c, showHint: d, selectedAnswer: e};
	});
var _user$project$Components_Card_Main$ReadOnly = {ctor: 'ReadOnly'};
var _user$project$Components_Card_Main$Common = {ctor: 'Common'};
var _user$project$Components_Card_Main$Last = {ctor: 'Last'};
var _user$project$Components_Card_Main$First = {ctor: 'First'};
var _user$project$Components_Card_Main$Answer = function (a) {
	return {ctor: 'Answer', _0: a};
};
var _user$project$Components_Card_Main$answerListMessageToCardMessage = function (message) {
	var _p3 = message;
	return _user$project$Components_Card_Main$Answer(_p3._0);
};
var _user$project$Components_Card_Main$ToggleHint = {ctor: 'ToggleHint'};
var _user$project$Components_Card_Main$hint = function (_p4) {
	var _p5 = _p4;
	var transform = _p5.showHint ? 'translateY(-100%)' : 'translateY(0)';
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Components_Card_Styles$namespacedClass,
				_user$project$Components_Card_Styles$Hint,
				_elm_lang$core$Native_List.fromArray(
					[])),
				_elm_lang$html$Html_Attributes$style(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 'transform', _1: transform}
					]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('material-icons right'),
						_user$project$Utils_Events$onClick(_user$project$Components_Card_Main$ToggleHint)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('close')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Components_Card_Styles$namespacedClass,
						_user$project$Components_Card_Styles$Title,
						_elm_lang$core$Native_List.fromArray(
							[]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text('Подсказка')
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Components_Card_Styles$namespacedClass,
						_user$project$Components_Card_Styles$HintContent,
						_elm_lang$core$Native_List.fromArray(
							[]))
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(_p5.card.hint)
					]))
			]));
};
var _user$project$Components_Card_Main$content = function (_p6) {
	var _p7 = _p6;
	var _p10 = _p7.kind;
	var _p9 = _p7.card;
	var answers = _user$project$Components_AnswerList_Main$view(
		{
			readOnly: _elm_lang$core$Native_Utils.eq(_p10, _user$project$Components_Card_Main$ReadOnly),
			answers: _p9.answers,
			selectedAnswer: _p7.selectedAnswer,
			correctAnswer: _p9.correctAnswer,
			colorAnswer: _elm_lang$core$Native_Utils.eq(_p10, _user$project$Components_Card_Main$ReadOnly)
		});
	var title = _elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Вопрос №',
				_elm_lang$core$Basics$toString(_p7.number)))
		]);
	var hint = function () {
		var _p8 = _p10;
		if (_p8.ctor === 'ReadOnly') {
			return _elm_lang$html$Html$text('');
		} else {
			return A2(
				_elm_lang$html$Html$span,
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Components_Card_Styles$namespacedClass,
						_user$project$Components_Card_Styles$HelpIcon,
						_elm_lang$core$Native_List.fromArray(
							[])),
						_user$project$Utils_Events$onClick(_user$project$Components_Card_Main$ToggleHint)
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Components_Icon_Main$view('live_help')
					]));
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Components_Card_Styles$namespacedClass,
				_user$project$Components_Card_Styles$Content,
				_elm_lang$core$Native_List.fromArray(
					[]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_user$project$Components_Card_Styles$namespacedClass,
						_user$project$Components_Card_Styles$Title,
						_elm_lang$core$Native_List.fromArray(
							[]))
					]),
				title),
				A2(
				_elm_lang$html$Html$p,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html$text(_p9.question)
					])),
				A2(_elm_lang$html$Html_App$map, _user$project$Components_Card_Main$answerListMessageToCardMessage, answers)
			]));
};
var _user$project$Components_Card_Main$Finish = {ctor: 'Finish'};
var _user$project$Components_Card_Main$finish = A2(
	_elm_lang$html$Html$a,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Utils_HtmlHelpers$void,
			A2(
			_user$project$Components_Card_Styles$namespacedClass,
			_user$project$Components_Card_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[])),
			_user$project$Utils_Events$onClick(_user$project$Components_Card_Main$Finish)
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('Закончить тестирование')
		]));
var _user$project$Components_Card_Main$Prev = {ctor: 'Prev'};
var _user$project$Components_Card_Main$prev = A2(
	_elm_lang$html$Html$a,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Utils_HtmlHelpers$void,
			A2(
			_user$project$Components_Card_Styles$namespacedClass,
			_user$project$Components_Card_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[])),
			_user$project$Utils_Events$onClick(_user$project$Components_Card_Main$Prev)
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('Предыдущий')
		]));
var _user$project$Components_Card_Main$Next = {ctor: 'Next'};
var _user$project$Components_Card_Main$next = A2(
	_elm_lang$html$Html$a,
	_elm_lang$core$Native_List.fromArray(
		[
			_user$project$Utils_HtmlHelpers$void,
			A2(
			_user$project$Components_Card_Styles$namespacedClass,
			_user$project$Components_Card_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[])),
			_user$project$Utils_Events$onClick(_user$project$Components_Card_Main$Next)
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$html$Html$text('Следующий')
		]));
var _user$project$Components_Card_Main$buttons = function (kind) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Components_Card_Styles$namespacedClass,
				_user$project$Components_Card_Styles$Action,
				_elm_lang$core$Native_List.fromArray(
					[]))
			]),
		function () {
			var _p11 = kind;
			switch (_p11.ctor) {
				case 'First':
					return _elm_lang$core$Native_List.fromArray(
						[_user$project$Components_Card_Main$next]);
				case 'Last':
					return _elm_lang$core$Native_List.fromArray(
						[_user$project$Components_Card_Main$prev, _user$project$Components_Card_Main$finish]);
				case 'Common':
					return _elm_lang$core$Native_List.fromArray(
						[_user$project$Components_Card_Main$prev, _user$project$Components_Card_Main$next]);
				default:
					return _elm_lang$core$Native_List.fromArray(
						[]);
			}
		}());
};
var _user$project$Components_Card_Main$view = function (model) {
	var _p12 = model.kind;
	if (_p12.ctor === 'ReadOnly') {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Card_Styles$namespacedClass,
					_user$project$Components_Card_Styles$ReadOnlyCard,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Components_Card_Main$image(model.card),
					_user$project$Components_Card_Main$content(model)
				]));
	} else {
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Card_Styles$namespacedClass,
					_user$project$Components_Card_Styles$Container,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Components_Card_Styles$namespacedClass,
							_user$project$Components_Card_Styles$Card,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Components_Card_Main$image(model.card),
							_user$project$Components_Card_Main$content(model),
							_user$project$Components_Card_Main$buttons(model.kind)
						]))
				]));
	}
};

var _user$project$Components_Timer_Main$view = F2(
	function (showCaption, time) {
		var caption = showCaption ? 'Время: ' : '';
		var seconds = A3(
			_elm_lang$core$String$padLeft,
			2,
			_elm_lang$core$Native_Utils.chr('0'),
			_elm_lang$core$Basics$toString(
				A2(_elm_lang$core$Basics$rem, time, 60)));
		var minutes = A3(
			_elm_lang$core$String$padLeft,
			2,
			_elm_lang$core$Native_Utils.chr('0'),
			_elm_lang$core$Basics$toString((time / 60) | 0));
		return _elm_lang$html$Html$text(
			A2(
				_elm_lang$core$Basics_ops['++'],
				caption,
				A2(
					_elm_lang$core$Basics_ops['++'],
					minutes,
					A2(_elm_lang$core$Basics_ops['++'], ':', seconds))));
	});

var _user$project$Features_Quiz_View$leftMenu = function (help) {
	return _elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Utils_HtmlHelpers$void,
					_elm_lang$html$Html_Attributes$class('black-text'),
					_user$project$Utils_Events$onClick(_user$project$Features_Quiz_Messages$Cancel)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Components_Icon_Main$view('menu')
				])),
			A2(
			_elm_lang$html$Html$a,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Utils_HtmlHelpers$void,
					_elm_lang$html$Html_Attributes$class('black-text material-icons'),
					_user$project$Utils_Events$onClick(_user$project$Features_Quiz_Messages$Start)
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Components_Icon_Main$view('replay')
				])),
			help
		]);
};
var _user$project$Features_Quiz_View$containerStyle = F2(
	function (currentCard, cardsCount) {
		var offset = currentCard * -100;
		var containerWidth = cardsCount * 100;
		return _elm_lang$html$Html_Attributes$style(
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: 'transition', _1: 'transform 200ms cubic-bezier(0.86, 0, 0.07, 1)'},
					{
					ctor: '_Tuple2',
					_0: 'width',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(containerWidth),
						'vw')
				},
					{
					ctor: '_Tuple2',
					_0: 'transform',
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'translateX(',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(offset),
							'vw)'))
				}
				]));
	});
var _user$project$Features_Quiz_View$currentCardNumber = F2(
	function (currentCard, cardsCount) {
		return _elm_lang$html$Html$text(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Вопрос ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(currentCard + 1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' из ',
						_elm_lang$core$Basics$toString(cardsCount)))));
	});
var _user$project$Features_Quiz_View$rightMenu = F2(
	function (model, help) {
		return _elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$a,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Utils_HtmlHelpers$void,
						_elm_lang$html$Html_Attributes$class('black-text')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Features_Quiz_View$currentCardNumber, model.activeCard, _user$project$Config$cardsPerQuiz)
					])),
				A2(
				_elm_lang$html$Html$a,
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Utils_HtmlHelpers$void,
						_elm_lang$html$Html_Attributes$class('black-text')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_Timer_Main$view, true, model.elapsedTime)
					])),
				help
			]);
	});
var _user$project$Features_Quiz_View$cardMessageToQuizMessage = F2(
	function (model, message) {
		var _p0 = message;
		switch (_p0.ctor) {
			case 'Prev':
				return _user$project$Features_Quiz_Messages$PrevCard;
			case 'Next':
				return _user$project$Features_Quiz_Messages$NextCard;
			case 'ToggleHint':
				return _user$project$Features_Quiz_Messages$ToggleHint;
			case 'Answer':
				return _user$project$Features_Quiz_Messages$Answer(_p0._0);
			default:
				return _user$project$Features_Quiz_Messages$Finish(
					_user$project$Features_Quiz_Model$result(model));
		}
	});
var _user$project$Features_Quiz_View$renderCard = F4(
	function (model, selectedAnswer, index, card) {
		var kind = function () {
			var _p1 = {ctor: '_Tuple2', _0: index, _1: (_user$project$Config$cardsPerQuiz - index) - 1};
			if (_p1._0 === 0) {
				return _user$project$Components_Card_Main$First;
			} else {
				if (_p1._1 === 0) {
					return _user$project$Components_Card_Main$Last;
				} else {
					return _user$project$Components_Card_Main$Common;
				}
			}
		}();
		var cardModel = {kind: kind, number: index + 1, card: card, showHint: model.showHint, selectedAnswer: selectedAnswer};
		return A2(
			_elm_lang$html$Html_App$map,
			_user$project$Features_Quiz_View$cardMessageToQuizMessage(model),
			_user$project$Components_Card_Main$view(cardModel));
	});
var _user$project$Features_Quiz_View$view = F2(
	function (model, help) {
		var cardHint = A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_Quiz_Styles$namespacedClass,
					_user$project$Features_Quiz_Styles$CardHint,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A3(
					help,
					_user$project$Types$QuizCardHint,
					_elm_lang$core$Maybe$Nothing,
					_elm_lang$core$Native_List.fromArray(
						[
							{ctor: '_Tuple2', _0: _user$project$Types$Left, _1: -40},
							{ctor: '_Tuple2', _0: _user$project$Types$Top, _1: -230}
						]))
				]));
		var statusHint = A3(
			help,
			_user$project$Types$QuizStatusHint,
			_elm_lang$core$Maybe$Just(_user$project$Types$QuizCardHint),
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: _user$project$Types$Right, _1: 20},
					{ctor: '_Tuple2', _0: _user$project$Types$Top, _1: 40}
				]));
		var menuHint = A3(
			help,
			_user$project$Types$QuizMenuHint,
			_elm_lang$core$Maybe$Just(_user$project$Types$QuizStatusHint),
			_elm_lang$core$Native_List.fromArray(
				[
					{ctor: '_Tuple2', _0: _user$project$Types$Left, _1: 20},
					{ctor: '_Tuple2', _0: _user$project$Types$Top, _1: 40}
				]));
		var card = A2(
			_user$project$Features_Quiz_View$renderCard,
			model,
			_user$project$Features_Quiz_Model$selectedAnswer(model));
		var cards = A2(
			_elm_lang$core$List$indexedMap,
			card,
			_user$project$Features_Quiz_Model$getCards(model));
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_Quiz_Styles$namespacedClass,
					_user$project$Features_Quiz_Styles$Container,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Header_Main$view,
					_user$project$Features_Quiz_View$leftMenu(menuHint),
					A2(_user$project$Features_Quiz_View$rightMenu, model, statusHint)),
					cardHint,
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_Quiz_Styles$namespacedClass,
							_user$project$Features_Quiz_Styles$Cards,
							_elm_lang$core$Native_List.fromArray(
								[])),
							A2(_user$project$Features_Quiz_View$containerStyle, model.activeCard, _user$project$Config$cardsPerQuiz)
						]),
					cards)
				]));
	});

var _user$project$Components_QuizResult_Main$result = function (passed) {
	var message = passed ? 'Ура, вы сдали экзамен!' : 'Жаль, но вы не сдали экзамен';
	return A2(
		_elm_lang$html$Html$h5,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(message)
			]));
};
var _user$project$Components_QuizResult_Main$correctAnswers = F2(
	function (correctAnswersCount, totalAnswersCount) {
		return _elm_lang$html$Html$text(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Правильных ответов: ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(correctAnswersCount),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' из ',
						_elm_lang$core$Basics$toString(totalAnswersCount)))));
	});
var _user$project$Components_QuizResult_Main$view = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1.passed;
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$classList(
				_elm_lang$core$Native_List.fromArray(
					[
						{ctor: '_Tuple2', _0: 'card-panel', _1: true},
						{ctor: '_Tuple2', _0: 'green lighten-4', _1: _p2},
						{
						ctor: '_Tuple2',
						_0: 'red lighten-3',
						_1: _elm_lang$core$Basics$not(_p2)
					}
					]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Components_QuizResult_Main$result(_p2),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_QuizResult_Main$correctAnswers, _p1.correctAnswersCount, _p1.totalAnswersCount)
					])),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Components_Timer_Main$view, true, _p1.time)
					]))
			]));
};
var _user$project$Components_QuizResult_Main$Model = F4(
	function (a, b, c, d) {
		return {correctAnswersCount: a, totalAnswersCount: b, time: c, passed: d};
	});

var _user$project$Features_Result_View$card = F3(
	function (model, index, card) {
		return A2(
			_elm_lang$html$Html_App$map,
			function (_p0) {
				return _user$project$Features_Result_Messages$NoOp;
			},
			_user$project$Components_Card_Main$view(
				{
					kind: _user$project$Components_Card_Main$ReadOnly,
					number: index + 1,
					card: card,
					showHint: false,
					selectedAnswer: A2(_user$project$Features_Result_Model$selectedAnswer, index, model)
				}));
	});
var _user$project$Features_Result_View$result = function (model) {
	return _user$project$Components_QuizResult_Main$view(
		{
			correctAnswersCount: _user$project$Features_Result_Model$correctAnswersCount(model),
			totalAnswersCount: _user$project$Features_Result_Model$totalAnswersCount(model),
			time: model.elapsedTime,
			passed: _user$project$Features_Result_Model$succeed(model)
		});
};
var _user$project$Features_Result_View$rightMenu = function (model) {
	return _elm_lang$core$Native_List.fromArray(
		[]);
};
var _user$project$Features_Result_View$leftMenu = _elm_lang$core$Native_List.fromArray(
	[
		A2(
		_elm_lang$html$Html$a,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Utils_HtmlHelpers$void,
				_elm_lang$html$Html_Attributes$class('black-text'),
				_user$project$Utils_Events$onClick(_user$project$Features_Result_Messages$Close)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Components_Icon_Main$view('menu')
			]))
	]);
var _user$project$Features_Result_View$view = function (model) {
	var cards = A2(
		_elm_lang$core$List$indexedMap,
		_user$project$Features_Result_View$card(model),
		_user$project$Features_Result_Model$getCards(model));
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('Result')
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Components_Header_Main$view,
				_user$project$Features_Result_View$leftMenu,
				_user$project$Features_Result_View$rightMenu(model)),
				A2(
				_elm_lang$html$Html$div,
				_elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$html$Html_Attributes$class('Result-container')
					]),
				_elm_lang$core$Native_List.fromArray(
					[
						_user$project$Features_Result_View$result(model),
						A2(
						_elm_lang$html$Html$div,
						_elm_lang$core$Native_List.fromArray(
							[
								_elm_lang$html$Html_Attributes$class('Result-cards')
							]),
						cards)
					]))
			]));
};

var _user$project$Features_ResultsList_Styles$namespace = 'ResultsList';
var _user$project$Features_ResultsList_Styles$namespacedClass = F2(
	function ($class, otherClasses) {
		var defaultClasses = function () {
			var _p0 = $class;
			switch (_p0.ctor) {
				case 'Results':
					return _elm_lang$core$Native_List.fromArray(
						['container']);
				case 'Table':
					return _elm_lang$core$Native_List.fromArray(
						['striped']);
				default:
					return _elm_lang$core$Native_List.fromArray(
						[]);
			}
		}();
		return A3(
			_user$project$Utils_CssHelpers$namespacedClass,
			_user$project$Features_ResultsList_Styles$namespace,
			$class,
			A2(_elm_lang$core$List$append, defaultClasses, otherClasses));
	});
var _user$project$Features_ResultsList_Styles$Button = {ctor: 'Button'};
var _user$project$Features_ResultsList_Styles$NoResults = {ctor: 'NoResults'};
var _user$project$Features_ResultsList_Styles$Failure = {ctor: 'Failure'};
var _user$project$Features_ResultsList_Styles$Success = {ctor: 'Success'};
var _user$project$Features_ResultsList_Styles$Cell = {ctor: 'Cell'};
var _user$project$Features_ResultsList_Styles$Row = {ctor: 'Row'};
var _user$project$Features_ResultsList_Styles$Table = {ctor: 'Table'};
var _user$project$Features_ResultsList_Styles$Results = {ctor: 'Results'};
var _user$project$Features_ResultsList_Styles$featureCss = A2(
	_rtfeldman$elm_css$Css_Namespace$namespace,
	_user$project$Features_ResultsList_Styles$namespace,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Results,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$position(_rtfeldman$elm_css$Css$relative)
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Table,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_rtfeldman$elm_css$Css$margin2,
					_rtfeldman$elm_css$Css$px(40),
					_rtfeldman$elm_css$Css$auto),
					_rtfeldman$elm_css$Css$backgroundColor(
					_rtfeldman$elm_css$Css$hex('fff'))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Row,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$hover(
					_elm_lang$core$Native_List.fromArray(
						[
							_rtfeldman$elm_css$Css$important(
							_rtfeldman$elm_css$Css$backgroundColor(
								_rtfeldman$elm_css$Css$hex('4db6ac')))
						]))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Cell,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_rtfeldman$elm_css$Css$padding2,
					_rtfeldman$elm_css$Css$px(10),
					_rtfeldman$elm_css$Css$px(20))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Failure,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('f44336'))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Success,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$color(
					_rtfeldman$elm_css$Css$hex('4caf50'))
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$NoResults,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$maxWidth(
					_rtfeldman$elm_css$Css$px(600)),
					A2(
					_rtfeldman$elm_css$Css$margin2,
					_rtfeldman$elm_css$Css$px(40),
					_rtfeldman$elm_css$Css$auto)
				])),
			A2(
			F2(
				function (x, y) {
					return A2(_rtfeldman$elm_css$Css_ops['.'], x, y);
				}),
			_user$project$Features_ResultsList_Styles$Button,
			_elm_lang$core$Native_List.fromArray(
				[
					_rtfeldman$elm_css$Css$marginTop(
					_rtfeldman$elm_css$Css$px(10))
				]))
		]));
var _user$project$Features_ResultsList_Styles$css = _elm_lang$core$List$concat(
	_elm_lang$core$Native_List.fromArray(
		[_user$project$Components_Header_Styles$css, _user$project$Features_ResultsList_Styles$featureCss]));
var _user$project$Features_ResultsList_Styles$Container = {ctor: 'Container'};

var _user$project$Features_ResultsList_View$noResults = A2(
	_elm_lang$html$Html$div,
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_user$project$Features_ResultsList_Styles$namespacedClass,
			_user$project$Features_ResultsList_Styles$NoResults,
			_elm_lang$core$Native_List.fromArray(
				['card']))
		]),
	_elm_lang$core$Native_List.fromArray(
		[
			A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html_Attributes$class('card-content')
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Attributes$class('card-title')
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Результатов пока нет')
						])),
					A2(
					_elm_lang$html$Html$p,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Вы еще ни разу не проходили тестирование.')
						])),
					A2(
					_elm_lang$html$Html$p,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Почему бы не сделать это прямо сейчас? ')
						])),
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Button,
							_elm_lang$core$Native_List.fromArray(
								['btn'])),
							_user$project$Utils_Events$onClick(_user$project$Features_ResultsList_Messages$OpenQuiz)
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Начать тестирование')
						]))
				]))
		]));
var _user$project$Features_ResultsList_View$date = function (d) {
	return _elm_lang$html$Html$text(
		A2(_mgold$elm_date_format$Date_Format$format, '%d.%m.%Y %H:%M', d));
};
var _user$project$Features_ResultsList_View$correctAnswers = F2(
	function (correctAnswersCount, totalAnswersCount) {
		return _elm_lang$html$Html$text(
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(correctAnswersCount),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' из ',
					_elm_lang$core$Basics$toString(totalAnswersCount))));
	});
var _user$project$Features_ResultsList_View$resultItem = F2(
	function (id, model) {
		var result = _user$project$Features_Result_Model$succeed(model) ? A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_ResultsList_Styles$namespacedClass,
					_user$project$Features_ResultsList_Styles$Success,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('Пройден')
				])) : A2(
			_elm_lang$html$Html$span,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_ResultsList_Styles$namespacedClass,
					_user$project$Features_ResultsList_Styles$Failure,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					_elm_lang$html$Html$text('Не пройден')
				]));
		return A2(
			_elm_lang$html$Html$tr,
			_elm_lang$core$Native_List.fromArray(
				[
					_user$project$Utils_Events$onClick(
					_user$project$Features_ResultsList_Messages$ShowResult(id)),
					A2(
					_user$project$Features_ResultsList_Styles$namespacedClass,
					_user$project$Features_ResultsList_Styles$Row,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Cell,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_user$project$Features_ResultsList_View$date(model.date)
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Cell,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_View$correctAnswers,
							_user$project$Features_Result_Model$correctAnswersCount(model),
							_user$project$Features_Result_Model$totalAnswersCount(model))
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Cell,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A2(_user$project$Components_Timer_Main$view, false, model.elapsedTime)
						])),
					A2(
					_elm_lang$html$Html$td,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Cell,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[result]))
				]));
	});
var _user$project$Features_ResultsList_View$resultsTable = function (model) {
	return A2(
		_elm_lang$html$Html$table,
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_user$project$Features_ResultsList_Styles$namespacedClass,
				_user$project$Features_ResultsList_Styles$Table,
				_elm_lang$core$Native_List.fromArray(
					[]))
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				A2(
				_elm_lang$html$Html$thead,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Native_List.fromArray(
					[
						A2(
						_elm_lang$html$Html$tr,
						_elm_lang$core$Native_List.fromArray(
							[]),
						_elm_lang$core$Native_List.fromArray(
							[
								A2(
								_elm_lang$html$Html$th,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_user$project$Features_ResultsList_Styles$namespacedClass,
										_user$project$Features_ResultsList_Styles$Cell,
										_elm_lang$core$Native_List.fromArray(
											[]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Дата')
									])),
								A2(
								_elm_lang$html$Html$th,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_user$project$Features_ResultsList_Styles$namespacedClass,
										_user$project$Features_ResultsList_Styles$Cell,
										_elm_lang$core$Native_List.fromArray(
											[]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Ответы')
									])),
								A2(
								_elm_lang$html$Html$th,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_user$project$Features_ResultsList_Styles$namespacedClass,
										_user$project$Features_ResultsList_Styles$Cell,
										_elm_lang$core$Native_List.fromArray(
											[]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Время')
									])),
								A2(
								_elm_lang$html$Html$th,
								_elm_lang$core$Native_List.fromArray(
									[
										A2(
										_user$project$Features_ResultsList_Styles$namespacedClass,
										_user$project$Features_ResultsList_Styles$Cell,
										_elm_lang$core$Native_List.fromArray(
											[]))
									]),
								_elm_lang$core$Native_List.fromArray(
									[
										_elm_lang$html$Html$text('Результат')
									]))
							]))
					])),
				A2(
				_elm_lang$html$Html$tbody,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_lang$core$Array$toList(
					A2(_elm_lang$core$Array$indexedMap, _user$project$Features_ResultsList_View$resultItem, model)))
			]));
};
var _user$project$Features_ResultsList_View$rightMenu = function (model) {
	return _elm_lang$core$Native_List.fromArray(
		[]);
};
var _user$project$Features_ResultsList_View$leftMenu = _elm_lang$core$Native_List.fromArray(
	[
		A2(
		_elm_lang$html$Html$a,
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Utils_HtmlHelpers$void,
				_elm_lang$html$Html_Attributes$class('black-text'),
				_user$project$Utils_Events$onClick(_user$project$Features_ResultsList_Messages$Close)
			]),
		_elm_lang$core$Native_List.fromArray(
			[
				_user$project$Components_Icon_Main$view('menu')
			]))
	]);
var _user$project$Features_ResultsList_View$view = F2(
	function (model, help) {
		var results = function () {
			var _p0 = _elm_lang$core$Array$toList(model);
			if (_p0.ctor === '[]') {
				return _user$project$Features_ResultsList_View$noResults;
			} else {
				return A2(
					_elm_lang$html$Html$div,
					_elm_lang$core$Native_List.fromArray(
						[
							A2(
							_user$project$Features_ResultsList_Styles$namespacedClass,
							_user$project$Features_ResultsList_Styles$Results,
							_elm_lang$core$Native_List.fromArray(
								[]))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							A3(
							help,
							_user$project$Types$ResultTableHint,
							_elm_lang$core$Maybe$Nothing,
							_elm_lang$core$Native_List.fromArray(
								[
									{ctor: '_Tuple2', _0: _user$project$Types$Top, _1: 10},
									{ctor: '_Tuple2', _0: _user$project$Types$Left, _1: -20}
								])),
							_user$project$Features_ResultsList_View$resultsTable(model)
						]));
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Features_ResultsList_Styles$namespacedClass,
					_user$project$Features_ResultsList_Styles$Container,
					_elm_lang$core$Native_List.fromArray(
						[]))
				]),
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_user$project$Components_Header_Main$view,
					_user$project$Features_ResultsList_View$leftMenu,
					_user$project$Features_ResultsList_View$rightMenu(model)),
					results
				]));
	});

var _user$project$App_View$page = function (model) {
	var help = _user$project$App_Help$help(model.help);
	var _p0 = model.route;
	switch (_p0.ctor) {
		case 'Home':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$App_Messages$HomeMessage,
				A2(
					_user$project$Features_Home_View$view,
					model.help,
					help(_user$project$Features_Home_Messages$HelpMessage)));
		case 'Quiz':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$App_Messages$QuizMessage,
				A2(
					_user$project$Features_Quiz_View$view,
					model.quiz,
					help(_user$project$Features_Quiz_Messages$HelpMessage)));
		case 'Result':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$App_Messages$ResultMessage,
				_user$project$Features_Result_View$view(model.result));
		case 'ResultsList':
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$App_Messages$ResultsListMessage,
				A2(
					_user$project$Features_ResultsList_View$view,
					model.resultsList,
					help(_user$project$Features_ResultsList_Messages$HelpMessage)));
		default:
			return A2(
				_elm_lang$html$Html_App$map,
				_user$project$App_Messages$HomeMessage,
				A2(
					_user$project$Features_Home_View$view,
					model.help,
					help(_user$project$Features_Home_Messages$HelpMessage)));
	}
};
var _user$project$App_View$view = function (model) {
	return _user$project$App_View$page(model);
};

var _user$project$Main$main = {
	main: A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$App_Routing$parser,
		{init: _user$project$App_Model$init, urlUpdate: _user$project$App_Update_Routing$update, update: _user$project$App_Update$update, view: _user$project$App_View$view, subscriptions: _user$project$App_Subscriptions$subscriptions})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

