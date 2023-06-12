"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/fc"
const fc_namespaceObject = require("react-icons/fc");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.jsx








const Navbar = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
  p: "2",
  borderBottom: "1px",
  borderColor: "gray.100",
  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    fontSize: "3xl",
    color: "red.400",
    fontWeight: "bold",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      paddingLeft: "2",
      children: "TwinkleApartments"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Spacer, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
        as: react_.IconButton,
        icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcMenu, {}),
        variant: "outline",
        color: "red.400"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuList, {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcHome, {}),
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/search",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(bs_.BsSearch, {}),
            children: "Search"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/search?purpose=for-sale",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcAbout, {}),
            children: "Buy Property"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/search?purpose=for-rent",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(fi_namespaceObject.FiKey, {}),
            children: "Rent Property"
          })
        })]
      })]
    })
  })]
});

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
  textAlign: "center",
  p: "5",
  color: "gray.600",
  children: ["Made with \u2764\uFE0F by Noah Oladele", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\xA9 2022 \u2014 TwinkleApartments"]
});

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/Layout.jsx







function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Twinkle Real Estate"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      maxWidth: "1280px",
      m: "auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  external_nprogress_default().configure({
    showSpinner: false
  });
  router_default().events.on('routeChangeStart', () => {
    external_nprogress_default().start();
  });
  router_default().events.on('routeChangeComplete', () => {
    external_nprogress_default().done();
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",
        integrity: "sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664], () => (__webpack_exec__(1273)));
module.exports = __webpack_exports__;

})();