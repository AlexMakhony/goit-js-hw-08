var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function m(t,e,n){var o,r,i,u,f,a,c=0,m=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,f=setTimeout(T,e),m?g(t):u}function x(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=i}function T(){var t=d();if(x(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-a);return y?s(n,i-(t-c)):n}(t))}function h(t){return f=void 0,b&&o?g(t):(o=r=void 0,u)}function S(){var t=d(),n=x(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(y)return f=setTimeout(T,e),g(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=p(e)||0,v(n)&&(m=!!n.leading,i=(y="maxWait"in n)?l(p(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},S.flush=function(){return void 0===f?u:h(d())},S}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||r.test(t)?i(t.slice(2),f?2:8):n.test(t)?NaN:+t}const y={form:document.querySelector(".feedback-form"),mail:document.querySelector("input"),textAr:document.querySelector("textarea")};!function(){const t=localStorage.getItem("Feed-msg");t&&(y.textAr.value=t)}(),y.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("Feed-msg")})),y.textAr.addEventListener("input",(function(t){const e=t.target.value;localStorage.setItem("Feed-msg",e)}));
//# sourceMappingURL=03-feedback.90004e0d.js.map
