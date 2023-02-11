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
      var error, formData, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              error = formValidate(form);
              formData = new FormData(form);

              if (!(error === 0)) {
                _context.next = 21;
                break;
              }

              form.classList.add('_sending');
              _context.next = 7;
              return fetch('sendmail.php', {
                method: 'POST',
                body: formData
              });

            case 7:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 17;
                break;
              }

              _context.next = 11;
              return response.json();

            case 11:
              result = _context.sent;
              alert(result.message);
              form.reset();
              form.classList.remove('_sending');
              _context.next = 19;
              break;

            case 17:
              alert('Fout');
              form.classList.remove('_sending');

            case 19:
              _context.next = 22;
              break;

            case 21:
              alert('Vul de rood gemarkeerde verplichte velden in');

            case 22:
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
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
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

var modal = document.getElementById("form-wrapper");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbInN3aXBlciIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJtb3VzZXdoZWxsIiwia2V5Ym9hcmQiLCJhdXRvcGxheSIsImRlbGF5Iiwic3RvcE9uTGFzdFNsaWRlIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzcGVlZCIsInN3aXBlckdhbGxlcnkiLCJzbGlkZXNQZXJWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsImdldEVsZW1lbnRCeUlkIiwiZm9ybVNlbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImZvcm1WYWxpZGF0ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjbGFzc0xpc3QiLCJhZGQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInJlc3VsdCIsImFsZXJ0IiwibWVzc2FnZSIsInJlc2V0IiwicmVtb3ZlIiwiZm9ybVJlcSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmRleCIsImxlbmd0aCIsImlucHV0IiwiZm9ybVJlbW92ZUVycm9yIiwiY29udGFpbnMiLCJlbWFpbFRlc3QiLCJmb3JtQWRkRXJyb3IiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwidmFsdWUiLCJwYXJlbnRFbGVtZW50IiwidGVzdCIsIm1vZGFsIiwiYnRuIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXHJcbi8vU1dJUEVSLy9cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnJldmlld3Mtc3dpcGVyJywge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBtb3VzZXdoZWxsOiB0cnVlLFxyXG4gICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3BlZWQ6IDkwMCxcclxufSk7XHJcblxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5ID0gbmV3IFN3aXBlcignLmdhbGxlcnktc3dpcGVyJywge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuZ2FsbGVyeS1idG4tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLmdhbGxlcnktYnRuLXByZXYnLFxyXG4gICAgfSxcclxuICAgIG1vdXNld2hlbGw6IHRydWUsXHJcbiAgICBrZXlib2FyZDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDE1MDAsXHJcbiAgICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzcGVlZDogOTAwLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMS41LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxufSk7XHJcblxyXG4vL0ZPUk0vL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZm9ybVNlbmQpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZvcm1TZW5kKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBlcnJvciA9IGZvcm1WYWxpZGF0ZShmb3JtKTtcclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3IgPT09IDApIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdfc2VuZGluZycpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnc2VuZG1haWwucGhwJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VuZGluZycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ZvdXQnKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWdWwgZGUgcm9vZCBnZW1hcmtlZXJkZSB2ZXJwbGljaHRlIHZlbGRlbiBpbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZShmb3JtKSB7XHJcbiAgICAgICAgbGV0IGVycm9yID0gMDtcclxuICAgICAgICBsZXQgZm9ybVJlcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5fcmVxJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3JtUmVxLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGZvcm1SZXFbaW5kZXhdO1xyXG4gICAgICAgICAgICBmb3JtUmVtb3ZlRXJyb3IoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnX2VtYWlsJykpIHtcclxuICAgICAgICAgICAgICAgIGlmKGVtYWlsVGVzdChpbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ2NoZWNrYm94JyAmJiBpbnB1dC5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtQWRkRXJyb3IoaW5wdXQpIHtcclxuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybVJlbW92ZUVycm9yKGlucHV0KSB7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGVtYWlsVGVzdChpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiAhL15cXHcrKFtcXC4tXT9cXFc9KSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDh9KSskLy50ZXN0KGlucHV0LnZhbHVlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vL01PREFMLy9cclxudmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXdyYXBwZXJcIik7XHJcbnZhciBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blwiKTtcclxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG5idG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn07XHJcblxyXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59O1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0g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