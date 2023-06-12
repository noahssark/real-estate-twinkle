"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/Property.jsx
var Property = __webpack_require__(1091);
// EXTERNAL MODULE: ./utils/fetchApi.js
var fetchApi = __webpack_require__(9665);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/HeroSection.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CallToActionWithVideo() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Container, {
    maxW: '7xl',
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
      align: 'center',
      spacing: {
        base: 8,
        md: 10
      },
      py: {
        base: 20,
        md: 28
      },
      direction: {
        base: 'column',
        md: 'row'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
        flex: 1,
        spacing: {
          base: 5,
          md: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Heading, {
          lineHeight: 1.1,
          fontWeight: 600,
          fontSize: {
            base: '3xl',
            sm: '4xl',
            lg: '6xl'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            as: 'span',
            position: 'relative',
            _after: {
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1
            },
            children: "Discover Your,"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            as: 'span',
            color: 'red.400',
            children: "New Home"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          color: 'gray.500',
          children: "Choose from over 1 million apartments, houses, condos, and townhomes for rent."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
          spacing: {
            base: 4,
            sm: 6
          },
          direction: {
            base: 'column',
            sm: 'row'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
            activeClass: "active",
            to: "rental-section",
            spy: true,
            smooth: true,
            offset: -70,
            duration: 500,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
              rounded: 'full',
              size: 'lg',
              fontWeight: 'normal',
              px: 6,
              colorScheme: 'red',
              bg: 'red.400',
              _hover: {
                bg: 'red.500'
              },
              children: ["Get started \xA0", /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiOutlineArrowRight, {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
            rounded: 'full',
            size: 'lg',
            fontWeight: 'normal',
            px: 6,
            children: "How It Works"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        flex: 1,
        justify: 'center',
        align: 'center',
        position: 'relative',
        w: 'full',
        children: [/*#__PURE__*/jsx_runtime_.jsx(Blob, {
          w: '150%',
          h: '150%',
          position: 'absolute',
          top: '-20%',
          left: 0,
          zIndex: -1,
          color: (0,react_.useColorModeValue)('red.50', 'red.400')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          position: 'relative',
          height: '300px',
          rounded: '2xl',
          boxShadow: '2xl',
          width: 'full',
          overflow: 'hidden',
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
            "aria-label": 'Play Button',
            variant: 'ghost',
            _hover: {
              bg: 'transparent'
            },
            size: 'lg',
            color: 'white',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)'
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
            alt: 'Hero Image',
            fit: 'cover',
            align: 'center',
            w: '100%',
            h: '100%',
            src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          })]
        })]
      })]
    })
  });
}
const Blob = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, _objectSpread(_objectSpread({
    width: '100%',
    viewBox: "0 0 578 440",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z",
      fill: "currentColor"
    })
  }));
};
;// CONCATENATED MODULE: ./components/CardSection.jsx





const TextComponent = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    bg: "white",
    _dark: {
      bg: "gray.800"
    },
    pt: 10,
    shadow: "lg",
    rounded: "md",
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      direction: "column",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        px: 10,
        pb: 5,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          mb: 2,
          fontSize: "3xl",
          fontWeight: ["bold", "extrabold"],
          color: "gray.900",
          _dark: {
            color: "gray.50"
          },
          lineHeight: "tight",
          children: item.title
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.chakra.p, {
          mb: 6,
          fontSize: "lg",
          color: "gray.500",
          _dark: {
            color: "gray.500"
          },
          children: item.description
        })]
      })
    })
  });
};

const ImageComponent = ({
  item
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    bg: "white",
    _dark: {
      bg: "gray.800"
    },
    shadow: "lg",
    rounded: "md",
    height: 320,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
      alt: 'Hero Image',
      fit: 'cover',
      align: 'center',
      w: '100%',
      h: '100%',
      src: item.imgUrl
    })
  });
};

function CardSection({
  item,
  inverted = false
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    textAlign: {
      base: "left",
      md: "center"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      pt: 10,
      pb: 10,
      rounded: "md",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
          columns: [1,,, 2],
          rounded: "md",
          mx: [10,, 0],
          textAlign: "left",
          children: inverted ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TextComponent, {
              item: item
            }), /*#__PURE__*/jsx_runtime_.jsx(ImageComponent, {
              item: item
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(ImageComponent, {
              item: item
            }), /*#__PURE__*/jsx_runtime_.jsx(TextComponent, {
              item: item
            })]
          })
        })
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Banner.jsx






const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
  passedId
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  m: "10",
  id: passedId,
  children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: imageUrl,
    width: 500,
    height: 300,
    alt: "banner",
    style: {
      borderRadius: '10px'
    }
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    p: "5",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      color: "gray.500",
      fontSize: "sm",
      fontWeight: "medium",
      children: purpose
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "3xl",
      fontWeight: "bold",
      children: [title1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), title2]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "lg",
      paddingTop: "3",
      paddingBottom: "3",
      color: "gray.700",
      children: [desc1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), desc2]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
      fontSize: "xl",
      bg: "red.300",
      color: "white",
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: linkName,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: buttonText
        })
      })
    })]
  })]
});

/* harmony default export */ const components_Banner = (Banner);
;// CONCATENATED MODULE: ./pages/index.js








const details = [{
  id: 1,
  title: 'Renting Made Simple',
  description: 'Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.',
  imgUrl: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
}, {
  id: 2,
  title: 'Tips for Renters',
  description: 'Find answers to all of your renting questions with the best renter’s guide in the galaxy.',
  imgUrl: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
}];

const Home = ({
  propertiesForSale,
  propertiesForRent
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(CallToActionWithVideo, {}), details.map(item => /*#__PURE__*/jsx_runtime_.jsx(CardSection, {
    item: item,
    inverted: item.id % 2 == 0 && true
  }, item.id)), /*#__PURE__*/jsx_runtime_.jsx(components_Banner, {
    purpose: "RENT A HOME",
    title1: "Rental Homes for",
    title2: "Everyone",
    desc1: " Explore from Apartments, builder floors, villas",
    desc2: "and more",
    buttonText: "Explore Renting",
    linkName: "/search?purpose=for-rent",
    imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4",
    passedId: "rental-section"
  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    children: propertiesForRent.map(property => /*#__PURE__*/jsx_runtime_.jsx(Property/* default */.Z, {
      property: property,
      renting: true
    }, property.id))
  }), /*#__PURE__*/jsx_runtime_.jsx(components_Banner, {
    purpose: "BUY A HOME",
    title1: " Find, Buy & Own Your",
    title2: "Dream Home",
    desc1: " Explore from Apartments, land, builder floors,",
    desc2: " villas and more",
    buttonText: "Explore Buying",
    linkName: "/search?purpose=for-sale",
    imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008",
    passedId: "sale-section"
  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    children: propertiesForSale.map(property => /*#__PURE__*/jsx_runtime_.jsx(Property/* default */.Z, {
      property: property
    }, property.id))
  })]
});

async function getStaticProps() {
  const propertyForSale = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  };
}
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

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
var __webpack_exports__ = __webpack_require__.X(0, [121,383,563,664,675,218], () => (__webpack_exec__(4073)));
module.exports = __webpack_exports__;

})();