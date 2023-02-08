"use strict"; //SWIPER//

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _Swiper;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper('.reviews-swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewhell: true,
  keyboard: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  speed: 900
});
var swiperGallery = new Swiper('.gallery-swiper', (_Swiper = {
  spaceBetween: 10,
  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev'
  },
  mousewhell: true,
  keyboard: true,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  speed: 900,
  slidesPerView: 1.5
}, _defineProperty(_Swiper, "spaceBetween", 30), _defineProperty(_Swiper, "centeredSlides", true), _defineProperty(_Swiper, "loop", true), _Swiper)); //FORM//

document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  function formSend(_x) {
    return _formSend.apply(this, arguments);
  }

  function _formSend() {
    _formSend = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var error, formData, respinse, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              error = formValidate(form);
              formData = formValidate(form);
              formData.append('image', formImage.files[0]);

              if (!(error === 0)) {
                _context.next = 23;
                break;
              }

              form.classList.add('_sending');
              _context.next = 8;
              return fetch('sendmail.php', {
                method: 'POST',
                body: formData
              });

            case 8:
              respinse = _context.sent;

              if (!response.ok) {
                _context.next = 19;
                break;
              }

              _context.next = 12;
              return response.json();

            case 12:
              result = _context.sent;
              alert(result.message);
              formPreview.innerHTML = '';
              form.reset();
              form.classList.remove('_sending');
              _context.next = 21;
              break;

            case 19:
              alert('Fout');
              form.classList.remove('_sending');

            case 21:
              _context.next = 24;
              break;

            case 23:
              alert('Verplichte velden invullen');

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _formSend.apply(this, arguments);
  }

  function formValidate(form) {
    var error = 0;
    var formReq = document.querySelectorAll('._req');

    for (var index = 0; index < formReq.length; index++) {
      var input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\W=)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
}); //MODAL//

var modal = document.getElementById("form-div");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJtb3VzZXdoZWxsIiwia2V5Ym9hcmQiLCJhdXRvcGxheSIsImRlbGF5Iiwic3RvcE9uTGFzdFNsaWRlIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzcGVlZCIsInN3aXBlckdhbGxlcnkiLCJzbGlkZXNQZXJWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsImdldEVsZW1lbnRCeUlkIiwiZm9ybVNlbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImZvcm1WYWxpZGF0ZSIsImZvcm1EYXRhIiwiYXBwZW5kIiwiZm9ybUltYWdlIiwiZmlsZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXNwaW5zZSIsInJlc3BvbnNlIiwib2siLCJqc29uIiwicmVzdWx0IiwiYWxlcnQiLCJtZXNzYWdlIiwiZm9ybVByZXZpZXciLCJpbm5lckhUTUwiLCJyZXNldCIsInJlbW92ZSIsImZvcm1SZXEiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJsZW5ndGgiLCJpbnB1dCIsImZvcm1SZW1vdmVFcnJvciIsImNvbnRhaW5zIiwiZW1haWxUZXN0IiwiZm9ybUFkZEVycm9yIiwidmFsdWUiLCJwYXJlbnRFbGVtZW50IiwidGVzdCIsIm1vZGFsIiwiYnRuIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXHJcbi8vU1dJUEVSLy9cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnJldmlld3Mtc3dpcGVyJywge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBtb3VzZXdoZWxsOiB0cnVlLFxyXG4gICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3BlZWQ6IDkwMCxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5ID0gbmV3IFN3aXBlcignLmdhbGxlcnktc3dpcGVyJywge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuZ2FsbGVyeS1idG4tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLmdhbGxlcnktYnRuLXByZXYnLFxyXG4gICAgfSxcclxuICAgIG1vdXNld2hlbGw6IHRydWUsXHJcbiAgICBrZXlib2FyZDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDE1MDAsXHJcbiAgICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzcGVlZDogOTAwLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMS41LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxufSk7XHJcblxyXG4vL0ZPUk0vL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybVNlbmQpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZvcm1TZW5kKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGVycm9yID0gZm9ybVZhbGlkYXRlKGZvcm0pO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IGZvcm1WYWxpZGF0ZShmb3JtKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZm9ybUltYWdlLmZpbGVzWzBdKTtcclxuICAgICAgICBpZiAoZXJyb3IgPT09IDApIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdfc2VuZGluZycpXHJcbiAgICAgICAgICAgIGxldCByZXNwaW5zZSA9IGF3YWl0IGZldGNoKCdzZW5kbWFpbC5waHAnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtUHJldmlldy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdGb3V0JylcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWZXJwbGljaHRlIHZlbGRlbiBpbnZ1bGxlbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZShmb3JtKSB7XHJcbiAgICAgICAgbGV0IGVycm9yID0gMDtcclxuICAgICAgICBsZXQgZm9ybVJlcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5fcmVxJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3JtUmVxLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGZvcm1SZXFbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3JtUmVtb3ZlRXJyb3IoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnX2VtYWlsJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKGVtYWlsVGVzdChpbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybUFkZEVycm9yKGlucHV0KSB7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZXJyb3InKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdfZXJyb3InKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1SZW1vdmVFcnJvcihpbnB1dCkge1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlbWFpbFRlc3QoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gIS9eXFx3KyhbXFwuLV0/XFxXPSkqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7Miw4fSkrJC8udGVzdChpbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9NT0RBTC8vXHJcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1kaXZcIik7XHJcbnZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blwiKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG5idG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn07XHJcblxyXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUNBOzs7Ozs7K0NBQUEsb0o7Ozs7Ozs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLElB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