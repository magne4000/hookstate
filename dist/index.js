'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function t(t){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y[t],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+t;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return "'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(t){return !!t&&!!t[Q]}function r(t){return !!t&&(function(t){if(!t||"object"!=typeof t)return !1;var n=Object.getPrototypeOf(t);return !n||n===Object.prototype}(t)||Array.isArray(t)||!!t[L]||!!t.constructor[L]||s(t)||v(t))}function i(t,n,r){void 0===r&&(r=!1),0===o(t)?(r?Object.keys:Z)(t).forEach((function(e){r&&"symbol"==typeof e||n(e,t[e],t);})):t.forEach((function(r,e){return n(e,r,t)}));}function o(t){var n=t[Q];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:s(t)?2:v(t)?3:0}function u(t,n){return 2===o(t)?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function a(t,n){return 2===o(t)?t.get(n):t[n]}function f(t,n,r){var e=o(t);2===e?t.set(n,r):3===e?(t.delete(n),t.add(r)):t[n]=r;}function c(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}function s(t){return X&&t instanceof Map}function v(t){return q&&t instanceof Set}function p(t){return t.o||t.t}function l(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=tt(t);delete n[Q];for(var r=Z(n),e=0;e<r.length;e++){var i=r[e],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]});}return Object.create(Object.getPrototypeOf(t),n)}function d(t,e){return void 0===e&&(e=!1),y(t)||n(t)||!r(t)?t:(o(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&i(t,(function(t,n){return d(n,!0)}),!0),t)}function h(){t(2);}function y(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b(n){var r=nt[n];return r||t(18,n),r}function m(t,n){nt[t]||(nt[t]=n);}function _(){return "production"===process.env.NODE_ENV||U||t(0),U}function j(t,n){n&&(b("Patches"),t.u=[],t.s=[],t.v=n);}function g(t){w(t),t.p.forEach(S),t.p=null;}function w(t){t===U&&(U=t.l);}function O(t){return U={p:[],l:U,h:t,m:!0,_:0}}function S(t){var n=t[Q];0===n.i||1===n.i?n.j():n.g=!0;}function P(n,e){e._=e.p.length;var i=e.p[0],o=void 0!==n&&n!==i;return e.h.O||b("ES5").S(e,n,o),o?(i[Q].P&&(g(e),t(4)),r(n)&&(n=M(e,n),e.l||x(e,n)),e.u&&b("Patches").M(i[Q],n,e.u,e.s)):n=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),n!==H?n:void 0}function M(t,n,r){if(y(n))return n;var e=n[Q];if(!e)return i(n,(function(i,o){return A(t,e,n,i,o,r)}),!0),n;if(e.A!==t)return n;if(!e.P)return x(t,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(n,i){return A(t,e,o,n,i,r)})),x(t,o,!1),r&&t.u&&b("Patches").R(e,r,t.u,t.s);}return e.o}function A(e,i,o,a,c,s){if("production"!==process.env.NODE_ENV&&c===o&&t(5),n(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!n(v))return;e.m=!1;}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(t,n,r){void 0===r&&(r=!1),t.h.N&&t.m&&d(n,r);}function z(t,n){var r=t[Q];return (r?p(r):t)[n]}function I(t,n){if(n in t)for(var r=Object.getPrototypeOf(t);r;){var e=Object.getOwnPropertyDescriptor(r,n);if(e)return e;r=Object.getPrototypeOf(r);}}function k(t){t.P||(t.P=!0,t.l&&k(t.l));}function E(t){t.o||(t.o=l(t.t));}function R(t,n,r){var e=s(n)?b("MapSet").T(n,r):v(n)?b("MapSet").F(n,r):t.O?function(t,n){var r=Array.isArray(t),e={i:r?1:0,A:n?n.A:_(),P:!1,I:!1,D:{},l:n,t:t,k:null,o:null,j:null,C:!1},i=e,o=rt;r&&(i=[e],o=et);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(n,r):b("ES5").J(n,r);return (r?r.A:_()).p.push(e),e}function D(e){return n(e)||t(22,e),function t(n){if(!r(n))return n;var e,u=n[Q],c=o(n);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(n,c),u.I=!1;}else e=N(n,c);return i(e,(function(n,r){u&&a(u.t,n)===r||f(e,n,t(r));})),3===c?new Set(e):e}(e)}function N(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return l(t)}function F(){function e(t){if(!r(t))return t;if(Array.isArray(t))return t.map(e);if(s(t))return new Map(Array.from(t.entries()).map((function(t){return [t[0],e(t[1])]})));if(v(t))return new Set(Array.from(t).map(e));var n=Object.create(Object.getPrototypeOf(t));for(var i in t)n[i]=e(t[i]);return n}function f(t){return n(t)?e(t):t}var c="add";m("Patches",{$:function(n,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=n,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||t(24),"function"==typeof f&&"prototype"===p&&t(24),"object"!=typeof(f=a(f,p))&&t(15,i.join("/"));}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:t(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:t(17,u);}})),n},R:function(t,n,r,e){switch(t.i){case 0:case 4:case 2:return function(t,n,r,e){var o=t.t,s=t.o;i(t.D,(function(t,i){var v=a(o,t),p=a(s,t),l=i?u(o,t)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=n.concat(t);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)});}}));}(t,n,r,e);case 5:case 1:return function(t,n,r,e){var i=t.t,o=t.D,u=t.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1];}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=n.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])});}for(var l=i.length;l<u.length;l++){var d=n.concat([l]);r.push({op:c,path:d,value:f(u[l])});}i.length<u.length&&e.push({op:"replace",path:n.concat(["length"]),value:i.length});}(t,n,r,e);case 3:return function(t,n,r,e){var i=t.t,o=t.o,u=0;i.forEach((function(t){if(!o.has(t)){var i=n.concat([u]);r.push({op:"remove",path:i,value:t}),e.unshift({op:c,path:i,value:t});}u++;})),u=0,o.forEach((function(t){if(!i.has(t)){var o=n.concat([u]);r.push({op:c,path:o,value:t}),e.unshift({op:"remove",path:o,value:t});}u++;}));}(t,n,r,e)}},M:function(t,n,r,e){r.push({op:"replace",path:[],value:n}),e.push({op:"replace",path:[],value:t.t});}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(t){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(t){return "Cannot apply patch, path doesn't resolve: "+t},16:'Sets cannot have "replace" patches.',17:function(t){return "Unsupported patch operation: "+t},18:function(t){return "The plugin for '"+t+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+t+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(t){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+t+"'"},22:function(t){return "'current' expects a draft, got: "+t},23:function(t){return "'original' expects a draft, got: "+t},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,tt=Object.getOwnPropertyDescriptors||function(t){var n={};return Z(t).forEach((function(r){n[r]=Object.getOwnPropertyDescriptor(t,r);})),n},nt={},rt={get:function(t,n){if(n===Q)return t;var e=p(t);if(!u(e,n))return function(t,n,r){var e,i=I(n,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(t.k):void 0}(t,e,n);var i=e[n];return t.I||!r(i)?i:i===z(t.t,n)?(E(t),t.o[n]=R(t.A.h,i,t)):i},has:function(t,n){return n in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,n,r){var e=I(p(t),n);if(null==e?void 0:e.set)return e.set.call(t.k,r),!0;if(!t.P){var i=z(p(t),n),o=null==i?void 0:i[Q];if(o&&o.t===r)return t.o[n]=r,t.D[n]=!1,!0;if(c(r,i)&&(void 0!==r||u(t.t,n)))return !0;E(t),k(t);}return t.o[n]=r,t.D[n]=!0,!0},deleteProperty:function(t,n){return void 0!==z(t.t,n)||n in t.t?(t.D[n]=!1,E(t),k(t)):delete t.D[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var r=p(t),e=Reflect.getOwnPropertyDescriptor(r,n);return e?{writable:!0,configurable:1!==t.i||"length"!==n,enumerable:e.enumerable,value:r[n]}:e},defineProperty:function(){t(11);},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){t(12);}},et={};i(rt,(function(t,n){et[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)};})),et.deleteProperty=function(n,r){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(r))&&t(13),rt.deleteProperty.call(this,n[0],r)},et.set=function(n,r,e){return "production"!==process.env.NODE_ENV&&"length"!==r&&isNaN(parseInt(r))&&t(14),rt.set.call(this,n[0],r,e,n[0])};var it=function(){function e(t){this.O=B,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(n,e,i){if("function"==typeof n&&"function"!=typeof e){var o=e;e=n;var u=this;return function(t){var n=this;void 0===t&&(t=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(t,(function(t){var r;return (r=e).call.apply(r,[n,t].concat(i))}))}}var a;if("function"!=typeof e&&t(6),void 0!==i&&"function"!=typeof i&&t(7),r(n)){var f=O(this),c=R(this,n,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g(f):w(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j(f,i),P(t,f)}),(function(t){throw g(f),t})):(j(f,i),P(a,f))}if(!n||"object"!=typeof n){if((a=e(n))===H)return;return void 0===a&&(a=n),this.N&&d(a,!0),a}t(21,n);},i.produceWithPatches=function(t,n){var r,e,i=this;return "function"==typeof t?function(n){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(n,(function(n){return t.apply(void 0,[n].concat(e))}))}:[this.produce(t,n,(function(t,n){r=t,e=n;})),r,e]},i.createDraft=function(e){r(e)||t(8),n(e)&&(e=D(e));var i=O(this),o=R(this,e,void 0);return o[Q].C=!0,w(i),o},i.finishDraft=function(n,r){var e=n&&n[Q];"production"!==process.env.NODE_ENV&&(e&&e.C||t(9),e.I&&t(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(t){this.N=t;},i.setUseProxies=function(n){n&&!B&&t(20),this.O=n;},i.applyPatches=function(t,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){t=i.value;break}}var o=b("Patches").$;return n(t)?o(t,r):this.produce(t,(function(t){return o(t,r.slice(e+1))}))},e}(),ot=new it,at=ot.produceWithPatches.bind(ot),ft=ot.setAutoFreeze.bind(ot),ct=ot.setUseProxies.bind(ot),st=ot.applyPatches.bind(ot),vt=ot.createDraft.bind(ot),pt=ot.finishDraft.bind(ot);

F();
var imm = new it({
    autoFreeze: false,
});
/**
 * Special symbol which might be returned by onPromised callback of [StateMethods.map](#map) function.
 *
 * [Learn more...](https://hookstate.js.org/docs/asynchronous-state#executing-an-action-when-state-is-loaded)
 */
var postpone = Symbol('postpone');
/**
 * Special symbol which might be used to delete properties
 * from an object calling [StateMethods.set](#set) or [StateMethods.merge](#merge).
 *
 * [Learn more...](https://hookstate.js.org/docs/nested-state#deleting-existing-element)
 */
var none = Symbol('none');
/**
 * Creates new state and returns it.
 *
 * You can create as many global states as you need.
 *
 * When you the state is not needed anymore,
 * it should be destroyed by calling
 * `destroy()` method of the returned instance.
 * This is necessary for some plugins,
 * which allocate native resources,
 * like subscription to databases, broadcast channels, etc.
 * In most cases, a global state is used during
 * whole life time of an application and would not require
 * destruction. However, if you have got, for example,
 * a catalog of dynamically created and destroyed global states,
 * the states should be destroyed as advised above.
 *
 * @param initial Initial value of the state.
 * It can be a value OR a promise,
 * which asynchronously resolves to a value,
 * OR a function returning a value or a promise.
 *
 * @typeparam S Type of a value of the state
 *
 * @returns [State](#state) instance,
 * which can be used directly to get and set state value
 * outside of React components.
 * When you need to use the state in a functional `React` component,
 * pass the created state to [useState](#usestate) function and
 * use the returned result in the component's logic.
 */
function createState(initial, options) {
    if (options === void 0) { options = {}; }
    var methods = createStore(initial, options).toMethods();
    var devtools = createState[DevToolsID];
    if (devtools) {
        methods.attach(devtools);
    }
    return methods.self;
}
function useState(source) {
    return useHookstate(source);
}
function useHookstate(source) {
    var parentMethods = typeof source === 'object' && source !== null ?
        source[self] :
        undefined;
    if (parentMethods) {
        if (parentMethods.isMounted) {
            // Scoped state mount
            // eslint-disable-next-line react-hooks/rules-of-hooks
            var _a = React.useState({}), setValue_1 = _a[1];
            return useSubscribedStateMethods(parentMethods.state, parentMethods.path, function () { return setValue_1({}); }, parentMethods).self;
        }
        else {
            // Global state mount or destroyed link
            // eslint-disable-next-line react-hooks/rules-of-hooks
            var _b = React.useState({ state: parentMethods.state }), value_1 = _b[0], setValue_2 = _b[1];
            return useSubscribedStateMethods(value_1.state, parentMethods.path, function () { return setValue_2({ state: value_1.state }); }, value_1.state).self;
        }
    }
    else {
        // Local state mount
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var _c = React.useState(function () { return ({ state: createStore(source) }); }), value_2 = _c[0], setValue_3 = _c[1];
        var result = useSubscribedStateMethods(value_2.state, RootPath, function () { return setValue_3({ state: value_2.state }); }, value_2.state);
        if (isDevelopmentMode) {
            // This is a workaround for the issue:
            // https://github.com/avkonst/hookstate/issues/109
            // See technical notes on React behavior here:
            // https://github.com/apollographql/apollo-client/issues/5870#issuecomment-689098185
            var isEffectExecutedAfterRender_1 = React.useRef(false);
            isEffectExecutedAfterRender_1.current = false; // not yet...
            React.useEffect(function () {
                isEffectExecutedAfterRender_1.current = true; // ... and now, yes!
                // The state is not destroyed intentionally
                // under hot reload case.
                return function () { isEffectExecutedAfterRender_1.current && value_2.state.destroy(); };
            });
        }
        else {
            React.useEffect(function () { return function () { return value_2.state.destroy(); }; }, []);
        }
        var devtools = useState[DevToolsID];
        if (devtools) {
            result.attach(devtools);
        }
        return result.self;
    }
}
function StateFragment(props) {
    var scoped = useState(props.state);
    return props.children(scoped);
}
/**
 * A plugin which allows to opt-out from usage of Javascript proxies for
 * state usage tracking. It is useful for performance tuning.
 *
 * [Learn more...](https://hookstate.js.org/docs/performance-managed-rendering#downgraded-plugin)
 */
function Downgraded() {
    return {
        id: DowngradedID
    };
}
/**
 * For plugin developers only.
 * Reserved plugin ID for developers tools extension.
 *
 * @hidden
 * @ignore
 */
var DevToolsID = Symbol('DevTools');
/**
 * Returns access to the development tools for a given state.
 * Development tools are delivered as optional plugins.
 * You can activate development tools from `@hookstate/devtools`package,
 * for example. If no development tools are activated,
 * it returns an instance of dummy tools, which do nothing, when called.
 *
 * [Learn more...](https://hookstate.js.org/docs/devtools)
 *
 * @param state A state to relate to the extension.
 *
 * @returns Interface to interact with the development tools for a given state.
 *
 * @typeparam S Type of a value of a state
 */
function DevTools(state) {
    var plugin = state.attach(DevToolsID);
    if (plugin[0] instanceof Error) {
        return EmptyDevToolsExtensions;
    }
    return plugin[0];
}
///
/// INTERNAL SYMBOLS (LIBRARY IMPLEMENTATION)
///
var isDevelopmentMode = process !== undefined && process !== null && typeof process === 'object' &&
    process.env !== undefined && process.env !== null && typeof process.env === 'object' &&
    process.env.NODE_ENV === 'development';
var self = Symbol('self');
var EmptyDevToolsExtensions = {
    label: function () { },
    log: function () { }
};
var ErrorId;
(function (ErrorId) {
    ErrorId[ErrorId["InitStateToValueFromState"] = 101] = "InitStateToValueFromState";
    ErrorId[ErrorId["SetStateToValueFromState"] = 102] = "SetStateToValueFromState";
    ErrorId[ErrorId["GetStateWhenPromised"] = 103] = "GetStateWhenPromised";
    ErrorId[ErrorId["SetStateWhenPromised"] = 104] = "SetStateWhenPromised";
    ErrorId[ErrorId["SetStateNestedToPromised"] = 105] = "SetStateNestedToPromised";
    ErrorId[ErrorId["SetStateWhenDestroyed"] = 106] = "SetStateWhenDestroyed";
    ErrorId[ErrorId["ToJson_Value"] = 108] = "ToJson_Value";
    ErrorId[ErrorId["ToJson_State"] = 109] = "ToJson_State";
    ErrorId[ErrorId["GetUnknownPlugin"] = 120] = "GetUnknownPlugin";
    ErrorId[ErrorId["SetProperty_State"] = 201] = "SetProperty_State";
    ErrorId[ErrorId["SetProperty_Value"] = 202] = "SetProperty_Value";
    ErrorId[ErrorId["SetPrototypeOf_State"] = 203] = "SetPrototypeOf_State";
    ErrorId[ErrorId["SetPrototypeOf_Value"] = 204] = "SetPrototypeOf_Value";
    ErrorId[ErrorId["PreventExtensions_State"] = 205] = "PreventExtensions_State";
    ErrorId[ErrorId["PreventExtensions_Value"] = 206] = "PreventExtensions_Value";
    ErrorId[ErrorId["DefineProperty_State"] = 207] = "DefineProperty_State";
    ErrorId[ErrorId["DefineProperty_Value"] = 208] = "DefineProperty_Value";
    ErrorId[ErrorId["DeleteProperty_State"] = 209] = "DeleteProperty_State";
    ErrorId[ErrorId["DeleteProperty_Value"] = 210] = "DeleteProperty_Value";
    ErrorId[ErrorId["Construct_State"] = 211] = "Construct_State";
    ErrorId[ErrorId["Construct_Value"] = 212] = "Construct_Value";
    ErrorId[ErrorId["Apply_State"] = 213] = "Apply_State";
    ErrorId[ErrorId["Apply_Value"] = 214] = "Apply_Value";
})(ErrorId || (ErrorId = {}));
var StateInvalidUsageError = /** @class */ (function (_super) {
    __extends(StateInvalidUsageError, _super);
    function StateInvalidUsageError(path, id, details) {
        return _super.call(this, "Error: HOOKSTATE-" + id + " [path: /" + path.join('/') + (details ? ", details: " + details : '') + "]. " +
            ("See https://hookstate.js.org/docs/exceptions#hookstate-" + id)) || this;
    }
    return StateInvalidUsageError;
}(Error));
function isNoProxyInititializer() {
    try {
        var used = new Proxy({}, {});
        return false;
    }
    catch (e) {
        return true;
    }
}
var IsNoProxy = isNoProxyInititializer();
var DowngradedID = Symbol('Downgraded');
var SelfMethodsID = Symbol('ProxyMarker');
var RootPath = [];
var DestroyedEdition = -1;
var Store = /** @class */ (function () {
    function Store(_value, _a) {
        var _b = (_a === void 0 ? {} : _a).untrackedGet, untrackedGet = _b === void 0 ? false : _b;
        this._value = _value;
        this._edition = 0;
        this._subscribers = new Set();
        this._setSubscribers = new Set();
        this._destroySubscribers = new Set();
        this._batchStartSubscribers = new Set();
        this._batchFinishSubscribers = new Set();
        this._plugins = new Map();
        this._batches = 0;
        if (typeof _value === 'object' &&
            Promise.resolve(_value) === _value) {
            this._promised = this.createPromised(_value);
            this._value = none;
        }
        else if (_value === none) {
            this._promised = this.createPromised(undefined);
        }
        this.untrackedGet = untrackedGet;
    }
    Store.prototype.createPromised = function (newValue) {
        var _this = this;
        var promised = new Promised(newValue ? Promise.resolve(newValue) : undefined, function (r) {
            if (_this.promised === promised && _this.edition !== DestroyedEdition) {
                _this._promised = undefined;
                _this.set(RootPath, r, undefined);
                _this.update([RootPath]);
            }
        }, function () {
            if (_this.promised === promised && _this.edition !== DestroyedEdition) {
                _this._edition += 1;
                _this.update([RootPath]);
            }
        }, function () {
            if (_this._batchesPendingActions &&
                _this._value !== none &&
                _this.edition !== DestroyedEdition) {
                var actions = _this._batchesPendingActions;
                _this._batchesPendingActions = undefined;
                actions.forEach(function (a) { return a(); });
            }
        });
        return promised;
    };
    Object.defineProperty(Store.prototype, "edition", {
        get: function () {
            return this._edition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "promised", {
        get: function () {
            return this._promised;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.get = function (path) {
        var result = this._value;
        if (result === none) {
            return result;
        }
        path.forEach(function (p) {
            result = result[p];
        });
        return result;
    };
    Store.prototype.set = function (path, value, patches) {
        if (this._edition < 0) {
            throw new StateInvalidUsageError(path, ErrorId.SetStateWhenDestroyed);
        }
        if (path.length === 0) {
            // Root value UPDATE case,
            var onSetArg = {
                path: path,
                state: value,
                value: value,
                previous: this._value,
                patches: patches
            };
            if (value === none) {
                this._promised = this.createPromised(undefined);
                delete onSetArg.value;
                delete onSetArg.state;
            }
            else if (typeof value === 'object' && Promise.resolve(value) === value) {
                this._promised = this.createPromised(value);
                value = none;
                delete onSetArg.value;
                delete onSetArg.state;
            }
            else if (this._promised && (!this._promised.resolver && !this._promised.fullfilled)) {
                throw new StateInvalidUsageError(path, ErrorId.SetStateWhenPromised);
            }
            var prevValue = this._value;
            if (prevValue === none) {
                delete onSetArg.previous;
            }
            this._value = value;
            this.afterSet(onSetArg);
            if (prevValue === none && this._value !== none &&
                this.promised && this.promised.resolver) {
                this.promised.resolver(this._value);
            }
            return path;
        }
        if (typeof value === 'object' && Promise.resolve(value) === value) {
            throw new StateInvalidUsageError(path, ErrorId.SetStateNestedToPromised);
        }
        var target = this._value;
        for (var i = 0; i < path.length - 1; i += 1) {
            target = target[path[i]];
        }
        var p = path[path.length - 1];
        if (p in target) {
            if (value !== none) {
                // Property UPDATE case
                var prevValue = target[p];
                target[p] = value;
                this.afterSet({
                    path: path,
                    state: this._value,
                    value: value,
                    previous: prevValue,
                    patches: patches
                });
                return path;
            }
            else {
                // Property DELETE case
                var prevValue = target[p];
                if (Array.isArray(target) && typeof p === 'number') {
                    target.splice(p, 1);
                }
                else {
                    delete target[p];
                }
                this.afterSet({
                    path: path,
                    state: this._value,
                    previous: prevValue,
                    patches: patches
                });
                // if an array of object is about to loose existing property
                // we consider it is the whole object is changed
                // which is identified by upper path
                return path.slice(0, -1);
            }
        }
        if (value !== none) {
            // Property INSERT case
            target[p] = value;
            this.afterSet({
                path: path,
                state: this._value,
                value: value,
                patches: patches
            });
            // if an array of object is about to be extended by new property
            // we consider it is the whole object is changed
            // which is identified by upper path
            return path.slice(0, -1);
        }
        // Non-existing property DELETE case
        // no-op
        return path;
    };
    Store.prototype.update = function (paths) {
        if (this._batches) {
            this._batchesPendingPaths = this._batchesPendingPaths || [];
            this._batchesPendingPaths = this._batchesPendingPaths.concat(paths);
            return;
        }
        var actions = [];
        this._subscribers.forEach(function (s) { return s.onSet(paths, actions); });
        actions.forEach(function (a) { return a(); });
    };
    Store.prototype.afterSet = function (params) {
        if (this._edition !== DestroyedEdition) {
            this._edition += 1;
            this._setSubscribers.forEach(function (cb) { return cb(params); });
        }
    };
    Store.prototype.startBatch = function (path, options) {
        this._batches += 1;
        var cbArgument = {
            path: path
        };
        if (options && 'context' in options) {
            cbArgument.context = options.context;
        }
        if (this._value !== none) {
            cbArgument.state = this._value;
        }
        this._batchStartSubscribers.forEach(function (cb) { return cb(cbArgument); });
    };
    Store.prototype.finishBatch = function (path, options) {
        var cbArgument = {
            path: path
        };
        if (options && 'context' in options) {
            cbArgument.context = options.context;
        }
        if (this._value !== none) {
            cbArgument.state = this._value;
        }
        this._batchFinishSubscribers.forEach(function (cb) { return cb(cbArgument); });
        this._batches -= 1;
        if (this._batches === 0) {
            if (this._batchesPendingPaths) {
                var paths = this._batchesPendingPaths;
                this._batchesPendingPaths = undefined;
                this.update(paths);
            }
        }
    };
    Store.prototype.postponeBatch = function (action) {
        this._batchesPendingActions = this._batchesPendingActions || [];
        this._batchesPendingActions.push(action);
    };
    Store.prototype.getPlugin = function (pluginId) {
        return this._plugins.get(pluginId);
    };
    Store.prototype.register = function (plugin) {
        var existingInstance = this._plugins.get(plugin.id);
        if (existingInstance) {
            return;
        }
        var pluginCallbacks = plugin.init ? plugin.init(this.toMethods().self) : {};
        this._plugins.set(plugin.id, pluginCallbacks);
        if (pluginCallbacks.onSet) {
            this._setSubscribers.add(function (p) { return pluginCallbacks.onSet(p); });
        }
        if (pluginCallbacks.onDestroy) {
            this._destroySubscribers.add(function (p) { return pluginCallbacks.onDestroy(p); });
        }
        if (pluginCallbacks.onBatchStart) {
            this._batchStartSubscribers.add(function (p) { return pluginCallbacks.onBatchStart(p); });
        }
        if (pluginCallbacks.onBatchFinish) {
            this._batchFinishSubscribers.add(function (p) { return pluginCallbacks.onBatchFinish(p); });
        }
    };
    Store.prototype.toMethods = function () {
        return new StateMethodsImpl(this, RootPath, this.get(RootPath), this.edition, OnSetUsedNoAction);
    };
    Store.prototype.subscribe = function (l) {
        this._subscribers.add(l);
    };
    Store.prototype.unsubscribe = function (l) {
        this._subscribers.delete(l);
    };
    Store.prototype.destroy = function () {
        var _this = this;
        this._destroySubscribers.forEach(function (cb) { return cb(_this._value !== none ? { state: _this._value } : {}); });
        this._edition = DestroyedEdition;
    };
    Store.prototype.toJSON = function () {
        throw new StateInvalidUsageError(RootPath, ErrorId.ToJson_Value);
    };
    return Store;
}());
var Promised = /** @class */ (function () {
    function Promised(promise, onResolve, onReject, onPostResolve) {
        var _this = this;
        this.promise = promise;
        if (!promise) {
            promise = new Promise(function (resolve) {
                _this.resolver = resolve;
            });
        }
        this.promise = promise
            .then(function (r) {
            _this.fullfilled = true;
            if (!_this.resolver) {
                onResolve(r);
            }
        })
            .catch(function (err) {
            _this.fullfilled = true;
            _this.error = err;
            onReject();
        })
            .then(function () { return onPostResolve(); });
    }
    return Promised;
}());
// use symbol property to allow for easier reference finding
var ValueUnusedMarker = Symbol('ValueUnusedMarker');
function OnSetUsedNoAction() { }
// use symbol to mark that a function has no effect anymore
var UnmountedMarker = Symbol('UnmountedMarker');
OnSetUsedNoAction[UnmountedMarker] = true;
var StateMethodsImpl = /** @class */ (function () {
    function StateMethodsImpl(state, path, valueSource, valueEdition, onSetUsed) {
        this.state = state;
        this.path = path;
        this.valueSource = valueSource;
        this.valueEdition = valueEdition;
        this.onSetUsed = onSetUsed;
        this.valueCache = ValueUnusedMarker;
    }
    StateMethodsImpl.prototype.getUntracked = function (allowPromised) {
        if (this.valueEdition !== this.state.edition) {
            this.valueSource = this.state.get(this.path);
            this.valueEdition = this.state.edition;
            if (this.isMounted) {
                // this link is still mounted to a component
                // populate cache again to ensure correct tracking of usage
                // when React scans which states to rerender on update
                if (this.valueCache !== ValueUnusedMarker) {
                    this.valueCache = ValueUnusedMarker;
                    this.get(true); // renew cache to keep it marked used
                }
            }
            else {
                // This link is not mounted to a component
                // for example, it might be global link or
                // a link which has been discarded after rerender
                // but still captured by some callback or an effect.
                // If we are here and if it was mounted before,
                // it means it has not been garbage collected
                // when a component unmounted.
                // We take this opportunity to clean up caches
                // to avoid memory leaks via stale children states cache.
                this.valueCache = ValueUnusedMarker;
                delete this.childrenCache;
                delete this.selfCache;
            }
        }
        if (this.valueSource === none && !allowPromised) {
            if (this.state.promised && this.state.promised.error) {
                throw this.state.promised.error;
            }
            throw new StateInvalidUsageError(this.path, ErrorId.GetStateWhenPromised);
        }
        return this.valueSource;
    };
    StateMethodsImpl.prototype.get = function (allowPromised) {
        var currentValue = this.getUntracked(allowPromised);
        if (this.state.untrackedGet) {
            return currentValue;
        }
        if (this.valueCache === ValueUnusedMarker) {
            if (this.isDowngraded) {
                this.valueCache = currentValue;
            }
            else if (Array.isArray(currentValue)) {
                this.valueCache = this.valueArrayImpl(currentValue);
            }
            else if (typeof currentValue === 'object' && currentValue !== null) {
                this.valueCache = this.valueObjectImpl(currentValue);
            }
            else {
                this.valueCache = currentValue;
            }
        }
        return this.valueCache;
    };
    Object.defineProperty(StateMethodsImpl.prototype, "value", {
        get: function () {
            return this.get();
        },
        enumerable: false,
        configurable: true
    });
    StateMethodsImpl.prototype.produceUntracked = function (recipe, allowPromised) {
        var changes = [];
        var state;
        var newState;
        try {
            state = this.getUntracked(allowPromised);
        }
        catch (e) {
            if (e instanceof StateInvalidUsageError) {
                throw new StateInvalidUsageError(this.path, ErrorId.SetStateWhenPromised);
            }
            throw e;
        }
        if (Array.isArray(state) || (typeof state === 'object' && state !== null)) {
            newState = imm.produce(state, recipe, function (patches) {
                changes.push.apply(changes, patches);
            });
        }
        else {
            // TODO move to dedicated set method?
            var ret = recipe(state);
            if (ret !== undefined) {
                newState = ret;
            }
            else {
                newState = state;
            }
            changes.push({
                op: 'replace',
                path: [],
                value: newState
            });
        }
        if (typeof newState === 'object' && newState !== null && newState[SelfMethodsID]) {
            throw new StateInvalidUsageError(this.path, ErrorId.SetStateToValueFromState);
        }
        return [this.state.set(this.path, newState, changes)];
    };
    StateMethodsImpl.prototype.produce = function (recipe, allowPromised) {
        this.state.update(this.produceUntracked(recipe, allowPromised));
    };
    StateMethodsImpl.prototype.applyPatchesUntracked = function (patches) {
        var newState = st(this.getUntracked(), patches);
        return [this.state.set(this.path, newState, patches)];
    };
    StateMethodsImpl.prototype.applyPatches = function (patches) {
        this.state.update(this.applyPatchesUntracked(patches));
    };
    StateMethodsImpl.prototype.nested = function (key) {
        return this.child(key).self;
    };
    StateMethodsImpl.prototype.rerender = function (paths) {
        this.state.update(paths);
    };
    StateMethodsImpl.prototype.destroy = function () {
        this.state.destroy();
    };
    StateMethodsImpl.prototype.subscribe = function (l) {
        if (this.subscribers === undefined) {
            this.subscribers = new Set();
        }
        this.subscribers.add(l);
    };
    StateMethodsImpl.prototype.unsubscribe = function (l) {
        this.subscribers.delete(l);
    };
    Object.defineProperty(StateMethodsImpl.prototype, "isMounted", {
        get: function () {
            return !this.onSetUsed[UnmountedMarker];
        },
        enumerable: false,
        configurable: true
    });
    StateMethodsImpl.prototype.onUnmount = function () {
        this.onSetUsed[UnmountedMarker] = true;
    };
    StateMethodsImpl.prototype.onSet = function (paths, actions) {
        var _this = this;
        var update = function () {
            if (_this.isDowngraded && _this.valueCache !== ValueUnusedMarker) {
                actions.push(_this.onSetUsed);
                return true;
            }
            for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
                var path = paths_1[_i];
                var firstChildKey = path[_this.path.length];
                if (firstChildKey === undefined) {
                    if (_this.valueCache !== ValueUnusedMarker) {
                        actions.push(_this.onSetUsed);
                        return true;
                    }
                }
                else {
                    var firstChildValue = _this.childrenCache && _this.childrenCache[firstChildKey];
                    if (firstChildValue && firstChildValue.onSet(paths, actions)) {
                        return true;
                    }
                }
            }
            return false;
        };
        var updated = update();
        if (!updated && this.subscribers !== undefined) {
            this.subscribers.forEach(function (s) {
                s.onSet(paths, actions);
            });
        }
        return updated;
    };
    Object.defineProperty(StateMethodsImpl.prototype, "keys", {
        get: function () {
            var value = this.get();
            if (Array.isArray(value)) {
                return Object.keys(value).map(function (i) { return Number(i); }).filter(function (i) { return Number.isInteger(i); });
            }
            if (typeof value === 'object' && value !== null) {
                return Object.keys(value);
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    StateMethodsImpl.prototype.child = function (key) {
        // if this state is not mounted to a hook,
        // we do not cache children to avoid unnecessary memory leaks
        if (this.isMounted) {
            this.childrenCache = this.childrenCache || {};
            var cachehit = this.childrenCache[key];
            if (cachehit) {
                return cachehit;
            }
        }
        var r = new StateMethodsImpl(this.state, this.path.slice().concat(key), this.valueSource[key], this.valueEdition, this.onSetUsed);
        if (this.isDowngraded) {
            r.isDowngraded = true;
        }
        if (this.childrenCache) {
            this.childrenCache[key] = r;
        }
        return r;
    };
    StateMethodsImpl.prototype.valueArrayImpl = function (currentValue) {
        var _this = this;
        if (IsNoProxy) {
            this.isDowngraded = true;
            return currentValue;
        }
        return proxyWrap(this.path, currentValue, function () { return currentValue; }, function (target, key) {
            if (key === 'length') {
                return target.length;
            }
            if (key in Array.prototype) {
                return Array.prototype[key];
            }
            if (key === SelfMethodsID) {
                return _this;
            }
            if (typeof key === 'symbol') {
                // allow clients to associate hidden cache with state values
                return target[key];
            }
            var index = Number(key);
            if (!Number.isInteger(index)) {
                return undefined;
            }
            return _this.child(index).get();
        }, function (target, key, value) {
            if (typeof key === 'symbol') {
                // allow clients to associate hidden cache with state values
                target[key] = value;
                return true;
            }
            throw new StateInvalidUsageError(_this.path, ErrorId.SetProperty_Value);
        }, true);
    };
    StateMethodsImpl.prototype.valueObjectImpl = function (currentValue) {
        var _this = this;
        if (IsNoProxy) {
            this.isDowngraded = true;
            return currentValue;
        }
        return proxyWrap(this.path, currentValue, function () { return currentValue; }, function (target, key) {
            if (key === SelfMethodsID) {
                return _this;
            }
            if (typeof key === 'symbol') {
                // allow clients to associate hidden cache with state values
                return target[key];
            }
            return _this.child(key).get();
        }, function (target, key, value) {
            if (typeof key === 'symbol') {
                // allow clients to associate hidden cache with state values
                target[key] = value;
                return true;
            }
            throw new StateInvalidUsageError(_this.path, ErrorId.SetProperty_Value);
        }, true);
    };
    Object.defineProperty(StateMethodsImpl.prototype, "self", {
        get: function () {
            var _this = this;
            if (this.selfCache) {
                return this.selfCache;
            }
            var getter = function (_, key) {
                if (key === self) {
                    return _this;
                }
                if (typeof key === 'symbol') {
                    return undefined;
                }
                if (key === 'toJSON') {
                    throw new StateInvalidUsageError(_this.path, ErrorId.ToJson_State);
                }
                switch (key) {
                    case 'path':
                        return _this.path;
                    case 'keys':
                        return _this.keys;
                    case 'value':
                        return _this.value;
                    case 'ornull':
                        return _this.ornull;
                    case 'promised':
                        return _this.promised;
                    case 'error':
                        return _this.error;
                    case 'get':
                        return function () { return _this.get(); };
                    case 'produce':
                        return function (recipe, allowPromised) {
                            return _this.produce(recipe, allowPromised);
                        };
                    case 'applyPatches':
                        return function (patches) { return _this.applyPatches(patches); };
                    case 'nested':
                        return function (p) { return _this.nested(p); };
                    case 'batch':
                        // tslint:disable-next-line: no-any
                        return function (action, context) { return _this.batch(action, context); };
                    case 'attach':
                        return function (p) { return _this.attach(p); };
                    case 'destroy': {
                        return function () { return _this.destroy(); };
                    }
                    // fall down
                }
                var currentDowngraded = _this.isDowngraded; // relevant for IE11 only
                var currentValue = _this.get(); // IE11 marks this as downgraded
                _this.isDowngraded = currentDowngraded; // relevant for IE11 only
                if ( // if currentValue is primitive type
                (typeof currentValue !== 'object' || currentValue === null) &&
                    // if promised, it will be none
                    currentValue !== none) {
                    // This was an error case, but various tools like webpack bundler
                    // and react dev tools attempt to get props out of non-null object,
                    // so this was changed to return just undefined for any property request
                    // as there is no way to fix 3rd party tools.
                    // Logging a warning to console is also not an option
                    // as it pollutes console for legitimate apps on app start app.
                    // Ref: https://github.com/avkonst/hookstate/issues/125
                    return undefined;
                }
                if (Array.isArray(currentValue)) {
                    if (key === 'length') {
                        return currentValue.length;
                    }
                    if (key in Array.prototype) {
                        return Array.prototype[key];
                    }
                    var index = Number(key);
                    if (!Number.isInteger(index)) {
                        return undefined;
                    }
                    return _this.nested(index);
                }
                return _this.nested(key.toString());
            };
            if (IsNoProxy) {
                // minimal support for IE11
                var result_1 = (Array.isArray(this.valueSource) ? [] : {});
                [self, 'toJSON', 'path', 'keys', 'value', 'ornull',
                    'promised', 'error', 'get', 'produce',
                    'nested', 'batch', 'attach', 'destroy']
                    .forEach(function (key) {
                    Object.defineProperty(result_1, key, {
                        get: function () { return getter(result_1, key); }
                    });
                });
                if (typeof this.valueSource === 'object' && this.valueSource !== null) {
                    Object.keys(this.valueSource).forEach(function (key) {
                        Object.defineProperty(result_1, key, {
                            enumerable: true,
                            get: function () { return getter(result_1, key); }
                        });
                    });
                }
                this.selfCache = result_1;
                return this.selfCache;
            }
            this.selfCache = proxyWrap(this.path, this.valueSource, function () {
                _this.get(); // get latest & mark used
                return _this.valueSource;
            }, getter, function (_, key, value) {
                throw new StateInvalidUsageError(_this.path, ErrorId.SetProperty_State);
            }, false);
            return this.selfCache;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMethodsImpl.prototype, "promised", {
        get: function () {
            var currentValue = this.get(true); // marks used
            if (currentValue === none && this.state.promised && !this.state.promised.fullfilled) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMethodsImpl.prototype, "error", {
        get: function () {
            var currentValue = this.get(true); // marks used
            if (currentValue === none) {
                if (this.state.promised && this.state.promised.fullfilled) {
                    return this.state.promised.error;
                }
                this.get(); // will throw 'read while promised' exception
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    StateMethodsImpl.prototype.batch = function (action, context) {
        var _this = this;
        var opts = { context: context };
        try {
            this.state.startBatch(this.path, opts);
            var result = action(this.self);
            if (result === postpone) {
                this.state.postponeBatch(function () { return _this.batch(action, context); });
            }
            return result;
        }
        finally {
            this.state.finishBatch(this.path, opts);
        }
    };
    Object.defineProperty(StateMethodsImpl.prototype, "ornull", {
        get: function () {
            var value = this.get();
            if (value === null || value === undefined) {
                return value;
            }
            return this.self;
        },
        enumerable: false,
        configurable: true
    });
    StateMethodsImpl.prototype.attach = function (p) {
        if (typeof p === 'function') {
            var pluginMeta = p();
            if (pluginMeta.id === DowngradedID) {
                this.isDowngraded = true;
                if (this.valueCache !== ValueUnusedMarker) {
                    var currentValue = this.getUntracked(true);
                    this.valueCache = currentValue;
                }
                return this.self;
            }
            this.state.register(pluginMeta);
            return this.self;
        }
        else {
            return [
                this.state.getPlugin(p) ||
                    (new StateInvalidUsageError(this.path, ErrorId.GetUnknownPlugin, p.toString())),
                this
            ];
        }
    };
    return StateMethodsImpl;
}());
function proxyWrap(path, 
// tslint:disable-next-line: no-any
targetBootstrap, 
// tslint:disable-next-line: no-any
targetGetter, 
// tslint:disable-next-line: no-any
propertyGetter, 
// tslint:disable-next-line: no-any
propertySetter, isValueProxy) {
    var onInvalidUsage = function (op) {
        throw new StateInvalidUsageError(path, op);
    };
    if (typeof targetBootstrap !== 'object' || targetBootstrap === null) {
        targetBootstrap = {};
    }
    return new Proxy(targetBootstrap, {
        getPrototypeOf: function (target) {
            // should satisfy the invariants:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getPrototypeOf#Invariants
            var targetReal = targetGetter();
            if (targetReal === undefined || targetReal === null) {
                return null;
            }
            return Object.getPrototypeOf(targetReal);
        },
        setPrototypeOf: function (target, v) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.SetPrototypeOf_State :
                ErrorId.SetPrototypeOf_Value);
        },
        isExtensible: function (target) {
            // should satisfy the invariants:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/isExtensible#Invariants
            return true; // required to satisfy the invariants of the getPrototypeOf
            // return Object.isExtensible(target);
        },
        preventExtensions: function (target) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.PreventExtensions_State :
                ErrorId.PreventExtensions_Value);
        },
        getOwnPropertyDescriptor: function (target, p) {
            var targetReal = targetGetter();
            if (targetReal === undefined || targetReal === null) {
                return undefined;
            }
            var origin = Object.getOwnPropertyDescriptor(targetReal, p);
            if (origin && Array.isArray(targetReal) && p in Array.prototype) {
                return origin;
            }
            return origin && {
                configurable: true,
                enumerable: origin.enumerable,
                get: function () { return propertyGetter(targetReal, p); },
                set: undefined
            };
        },
        has: function (target, p) {
            if (typeof p === 'symbol') {
                return false;
            }
            var targetReal = targetGetter();
            if (typeof targetReal === 'object' && targetReal !== null) {
                return p in targetReal;
            }
            return false;
        },
        get: propertyGetter,
        set: propertySetter,
        deleteProperty: function (target, p) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.DeleteProperty_State :
                ErrorId.DeleteProperty_Value);
        },
        defineProperty: function (target, p, attributes) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.DefineProperty_State :
                ErrorId.DefineProperty_Value);
        },
        ownKeys: function (target) {
            var targetReal = targetGetter();
            if (Array.isArray(targetReal)) {
                return Object.keys(targetReal).concat('length');
            }
            if (targetReal === undefined || targetReal === null) {
                return [];
            }
            return Object.keys(targetReal);
        },
        apply: function (target, thisArg, argArray) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.Apply_State :
                ErrorId.Apply_Value);
        },
        construct: function (target, argArray, newTarget) {
            return onInvalidUsage(isValueProxy ?
                ErrorId.Construct_State :
                ErrorId.Construct_Value);
        }
    });
}
function createStore(initial, options) {
    if (options === void 0) { options = {}; }
    var initialValue = initial;
    if (typeof initial === 'function') {
        initialValue = initial();
    }
    if (typeof initialValue === 'object' && initialValue !== null && initialValue[SelfMethodsID]) {
        throw new StateInvalidUsageError(RootPath, ErrorId.InitStateToValueFromState);
    }
    return new Store(initialValue, options);
}
function useSubscribedStateMethods(state, path, update, subscribeTarget) {
    var link = new StateMethodsImpl(state, path, state.get(path), state.edition, update);
    React.useEffect(function () {
        subscribeTarget.subscribe(link);
        return function () {
            link.onUnmount();
            subscribeTarget.unsubscribe(link);
        };
    });
    return link;
}

exports.DevTools = DevTools;
exports.DevToolsID = DevToolsID;
exports.Downgraded = Downgraded;
exports.StateFragment = StateFragment;
exports.createState = createState;
exports.none = none;
exports.postpone = postpone;
exports.useHookstate = useHookstate;
exports.useState = useState;
//# sourceMappingURL=index.js.map
