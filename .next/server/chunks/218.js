"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 1091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Property = ({
  property: {
    coverPhoto,
    rooms,
    isVerified,
    title,
    baths,
    score_l1,
    price,
    randBoostScore,
    rentFrequency,
    externalID
  }
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
  href: `/property/${externalID}`,
  passHref: true,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
    bg: "white",
    _dark: {
      bg: "gray.800"
    },
    maxW: "sm",
    borderWidth: "1px",
    roundedTop: "md",
    padding: 23,
    shadow: "lg",
    style: {
      cursor: 'pointer'
    },
    _hover: {
      transform: 'scale(1.02)'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: coverPhoto.url,
      alt: "property",
      roundedTop: "lg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
      p: "6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: "flex",
        alignItems: "baseline",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Badge, {
          rounded: "full",
          px: "2",
          colorScheme: "red",
          children: "New"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
          color: "gray.500",
          fontWeight: "semibold",
          letterSpacing: "wide",
          fontSize: "xs",
          textTransform: "uppercase",
          ml: "2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Flex, {
            alignItems: "center",
            justifyContent: "center",
            children: [rooms, " Rooms \u2022 ", baths, " baths \xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
              color: "green.400",
              children: isVerified && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoVerified, {})
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Text, {
        mt: "1",
        fontWeight: "semibold",
        as: "h4",
        lineHeight: "tight",
        noOfLines: 1,
        children: ["$", price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), rentFrequency && `/${rentFrequency}`]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
        display: "flex",
        mt: "2",
        alignItems: "center",
        children: [Array(5).fill("").map((_, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.StarIcon, {
          color: i < randBoostScore / 100 ? "red.500" : "gray.300"
        }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_0__.Box, {
          as: "span",
          ml: "2",
          color: "gray.600",
          fontSize: "sm",
          children: [score_l1, " reviews"]
        })]
      })]
    })]
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Property);
;

/***/ }),

/***/ 9665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl),
/* harmony export */   "a": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = 'https://bayut.p.rapidapi.com';
const fetchApi = async url => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
    headers: {
      'X-RapidAPI-Key': '535007e754msh03ca26c636c947bp1b1591jsnc83eba5279bb',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
};

/***/ })

};
;