// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7cRZp":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e2205b50d5b4114f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2iQTb":[function(require,module,exports,__globalThis) {
var _start = require("./src/views/start");
const appContainer = document.getElementById("app");
if (appContainer) (0, _start.renderStartView)(appContainer);

},{"./src/views/start":"c4AaC"}],"c4AaC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderStartView", ()=>renderStartView);
var _test = require("./test");
function renderStartView(container) {
    container.innerHTML = `
    <h1>Witaj w aplikacji testowej</h1>
    <p>Przed tob\u{105} czeka test z paroma pytaniami. Naci\u{15B}nij poni\u{17C}szy przycisk, aby rozpocz\u{105}\u{107} test.</p>
    <button id="start-button">Rozpocznij test</button>
  `;
    const startButton = document.getElementById("start-button");
    if (startButton) startButton.addEventListener("click", ()=>{
        (0, _test.renderTestView)(container);
    });
}

},{"./test":"k87hJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k87hJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTestView", ()=>renderTestView);
var _questionsJson = require("../data/questions.json");
var _questionsJsonDefault = parcelHelpers.interopDefault(_questionsJson);
var _storage = require("../utils/storage");
var _timer = require("../utils/timer");
var _summary = require("./summary");
const shuffledQuestions = shuffleArray((0, _questionsJsonDefault.default));
function shuffleArray(array) {
    return array.map((item)=>({
            item,
            sort: Math.random()
        })).sort((a, b)=>a.sort - b.sort).map(({ item })=>item);
}
let currentQuestionIndex = 0;
let userAnswers = new Array(shuffledQuestions.length).fill(null);
function renderTestView(container) {
    (0, _timer.startTimer)();
    container.innerHTML = `
    <div id="intro">
      <h1>Witaj w te\u{15B}cie!</h1>
      <p>Odpowiedz na wszystkie pytania i zako\u{144}cz test, aby zobaczy\u{107} swoje wyniki.</p>
    </div>
    <div id="stats">
      <p>Calkowity czas: <span id="total-time">0s</span></p>
      <p>Czas po\u{15B}wi\u{119}cony temu pytaniu: <span id="question-time">0s</span></p>
      <button id="cancel-test">Anuluj test</button>
    </div>
    <div id="question-container"></div>
  `;
    document.getElementById("cancel-test")?.addEventListener("click", ()=>{
        if (confirm("Czy na pewno chcesz anulowa\u0107 test?")) location.reload();
    });
    const questionContainer = container.querySelector("#question-container");
    renderQuestion(questionContainer);
    setInterval(()=>{
        const totalTime = (0, _timer.finishTimer)();
        const currentQuestionTime = (0, _timer.getCurrentQuestionTime)();
        document.getElementById("total-time").textContent = `${Math.floor(totalTime)}s`;
        document.getElementById("question-time").textContent = `${Math.floor(currentQuestionTime)}s`;
    }, 1000);
    container.addEventListener("click", (event)=>{
        const target = event.target;
        if (target.id === "next-button" && currentQuestionIndex < shuffledQuestions.length - 1) {
            (0, _timer.switchToNextQuestion)(currentQuestionIndex);
            currentQuestionIndex++;
            renderQuestion(questionContainer);
        } else if (target.id === "prev-button" && currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion(questionContainer);
        } else if (target.id === "finish-button") {
            if (!userAnswers.includes(null)) {
                const totalTime = (0, _timer.finishTimer)();
                const questionTimes = (0, _timer.getQuestionTimes)();
                (0, _storage.saveStats)({
                    totalTime,
                    questionTimes
                });
                (0, _summary.renderSummaryView)(container, userAnswers.filter((answer)=>answer !== null), shuffledQuestions);
            } else alert("Przed zako\u0144czeniem testu odpowiedz na wszystkie pytania.");
        }
    });
}
function renderQuestion(container) {
    const question = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    container.innerHTML = `
      <div>
        <h2>Pytanie ${currentQuestionIndex + 1} z ${shuffledQuestions.length}</h2>
        <p>${question.question}</p>
        <ul>
          ${question.options.map((option, index)=>`
              <li>
                <input type="radio" name="option" id="option-${index}" value="${index}" 
                  ${userAnswer === index ? "checked" : ""}
                  ${userAnswer !== null ? "disabled" : ""} />
                <label for="option-${index}">${option}</label>
              </li>
            `).join("")}
        </ul>
        <button id="prev-button" ${currentQuestionIndex === 0 ? "disabled" : ""}>Poprzednie</button>
        <button id="next-button" ${currentQuestionIndex === shuffledQuestions.length - 1 ? "disabled" : ""}>Nast\u{119}pne</button>
        <button id="finish-button" ${userAnswers.includes(null) ? "disabled" : ""}>Zako\u{144}cz</button>
      </div>
    `;
    container.querySelectorAll('input[name="option"]').forEach((input)=>{
        input.addEventListener("change", (event)=>{
            const selectedOption = event.target.value;
            userAnswers[currentQuestionIndex] = parseInt(selectedOption, 10);
            updateFinishButtonState();
        });
    });
}
function updateFinishButtonState() {
    const finishButton = document.getElementById("finish-button");
    if (finishButton) finishButton.disabled = userAnswers.includes(null);
}

},{"../data/questions.json":"7RJkR","./summary":"4HUoP","../utils/timer":"43kc9","../utils/storage":"6wKZi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RJkR":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"question":"Kto napisa\u0142 krzy\u017Cak\xf3w?","options":["Henryk Sienkiewicz","Krzy\u017Cacy","Onufry Zag\u0142oba","Fryderyk Chopin"],"answer":0},{"question":"Jak nazywaj\u0105 si\u0119 obecne zaj\u0119cia?","options":["Wst\u0119p do sztucznej inteligencji","Zaawansowane aplikacje sieciowe","Filozofia","Programowanie w j\u0119zyku Java"],"answer":1},{"question":"Kt\xf3ra warstwa nie nale\u017Cy do modelu OSI?","options":["Aplikacji","Transportowa","Sesji","Internetowa"],"answer":2},{"question":"Kt\xf3ry j\u0119zyk nie jest j\u0119zykiem programowania?","options":["Java","Angielski","Python","JavaScript"],"answer":1},{"question":"Z jak\u0105 pr\u0119dko\u015Bci\u0105 mo\u017Cna porusza\u0107 si\u0119 na autostradzie w Polsce\'?","options":["140 km/h","130 km/h","160 km/h","Ile fabryka da\u0142a"],"answer":0},{"question":"Jak nazywa si\u0119 za\u0142o\u017Cyciel firmy SpaceX?","options":["Elon Musk","Elon M\xf3zg","Jan Brzechwa","Miko\u0142aj Kopernik"],"answer":0}]');

},{}],"4HUoP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSummaryView", ()=>renderSummaryView);
var _timer = require("../utils/timer");
var _start = require("./start");
function renderSummaryView(container, userAnswers, shuffledQuestions) {
    const correctAnswers = userAnswers.filter((answer, index)=>answer === shuffledQuestions[index].answer).length;
    const totalTimeSpent = (0, _timer.finishTimer)();
    const questionTimes = (0, _timer.getQuestionTimes)();
    container.innerHTML = `
    <h1>Podsumowanie testu</h1>
    <p>Prawid\u{142}owo odpowiedzia\u{142}e\u{15B} na ${correctAnswers} z ${shuffledQuestions.length} pyta\u{144}.</p>
    <p>Ca\u{142}kowity czas sp\u{119}dzony: ${formatTime(totalTimeSpent)}</p>
    
    <h2>Szczeg\xf3\u{142}y:</h2>
    <table>
      <thead>
        <tr>
          <th>Pytanie</th>
          <th>Twoja odpowied\u{17A}</th>
          <th>Poprawna odpowied\u{17A}</th>
          <th>Czas sp\u{119}dzony (s)</th>
          <th>Wynik</th>
        </tr>
      </thead>
      <tbody>
        ${shuffledQuestions.map((question, index)=>{
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.answer;
        const timeSpent = questionTimes[index] || 0;
        return `
              <tr>
                <td>${index + 1}</td>
                <td>${userAnswer !== null ? question.options[userAnswer] : "Bez odpowiedzi"}</td>
                <td>${question.options[question.answer]}</td>
                <td>${timeSpent}s</td>
                <td>${isCorrect ? "\u2714\uFE0F Prawid\u0142owa" : "\u274C Nieprawid\u0142owa"}</td>
              </tr>
            `;
    }).join("")}
      </tbody>
    </table>
    
    <button id="restart-button">Powr\xf3\u{107} do strony g\u{142}\xf3wnej</button>
  `;
    const restartButton = document.getElementById("restart-button");
    if (restartButton) restartButton.addEventListener("click", ()=>{
        (0, _start.renderStartView)(container);
    });
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

},{"./start":"c4AaC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils/timer":"43kc9"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"43kc9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startTimer", ()=>startTimer);
parcelHelpers.export(exports, "switchToNextQuestion", ()=>switchToNextQuestion);
parcelHelpers.export(exports, "finishTimer", ()=>finishTimer);
parcelHelpers.export(exports, "getQuestionTimes", ()=>getQuestionTimes);
parcelHelpers.export(exports, "getCurrentQuestionTime", ()=>getCurrentQuestionTime);
let startTime;
let questionStartTime;
const questionTimes = [];
function startTimer() {
    startTime = Date.now();
    questionStartTime = Date.now();
}
function switchToNextQuestion(currentIndex) {
    const timeSpent = Date.now() - questionStartTime;
    questionTimes[currentIndex] = Math.floor(timeSpent / 1000);
    questionStartTime = Date.now();
}
function finishTimer() {
    const totalTime = (Date.now() - startTime) / 1000;
    const timeSpent = Date.now() - questionStartTime;
    questionTimes[questionTimes.length - 1] = Math.floor(timeSpent / 1000);
    return Math.floor(totalTime);
}
function getQuestionTimes() {
    return questionTimes;
}
function getCurrentQuestionTime() {
    return Math.floor((Date.now() - questionStartTime) / 1000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wKZi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveStats", ()=>saveStats);
parcelHelpers.export(exports, "loadStats", ()=>loadStats);
parcelHelpers.export(exports, "clearStats", ()=>clearStats);
function saveStats(stats) {
    localStorage.setItem("testStats", JSON.stringify(stats));
}
function loadStats() {
    return JSON.parse(localStorage.getItem("testStats") || "{}");
}
function clearStats() {
    localStorage.removeItem("testStats");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7cRZp","2iQTb"], "2iQTb", "parcelRequire94c2")

//# sourceMappingURL=index.d5b4114f.js.map
