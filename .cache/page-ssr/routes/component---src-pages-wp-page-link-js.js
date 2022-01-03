"use strict";
exports.id = "component---src-pages-wp-page-link-js";
exports.ids = ["component---src-pages-wp-page-link-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return (s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }).apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./src/components/BreadCrumb/BreadCrumb.js":
/*!*************************************************!*\
  !*** ./src/components/BreadCrumb/BreadCrumb.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _BreadCrumb_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreadCrumb.styles */ "./src/components/BreadCrumb/BreadCrumb.styles.js");




const BreadCrumb = ({
  parent
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BreadCrumb_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Inicio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "divider"
}, "/"), parent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: parent.uri
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  dangerouslySetInnerHTML: {
    __html: parent.title
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "divider"
}, "/")) : null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumb);

/***/ }),

/***/ "./src/components/BreadCrumb/BreadCrumb.styles.js":
/*!********************************************************!*\
  !*** ./src/components/BreadCrumb/BreadCrumb.styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "BreadCrumbstyles__Wrapper"
})(["font-family:'Teko',Arial,Helvetica,sans-serif;font-weight:800;font-size:1rem;margin:10px 0;padding-left:0;margin-left:0;@media (min-width:992px){padding-left:25%;margin-left:15px;}.divider{margin:0 10px;}"]);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Footer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.styles */ "./src/components/Footer/Footer.styles.js");

 //Styles



const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "content-wrapper"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "listing"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "menu"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Inicio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/productos/all-products/"
}, "Productos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/galeria/all-proyects/"
}, "Portafolios")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/fichas_tecnicas/all-fichas/"
}, "Documentaci\xF3n")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://wa.link/szvz94"
}, "Contacto"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "servicios"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH2, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Servicios")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Corte y Doblez de L\xE1mina")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Suministro de Materiales")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Instalaci\xF3n Especializada"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "redes"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.StyledH2, null, "Encuentranos en:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "(55) 8185-3675"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "(55) 8280-2149"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "info.mevasa@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "ventas@techosymantenimientos.com.mx"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Direcci\xF3n F\xEDscal:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Ricardo Flores Mag\xF3n #105, Izcalli Chamapa, 53689, Naucalpan de Ju\xE1rez, EdoM\xE9x."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_styles__WEBPACK_IMPORTED_MODULE_2__.Credits, null, "2022 \xA9 Tehchos y Mantenimientos | Mevasa Comercializadora | Todos los derechos reservados. Sitio Creado por:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "https://disturbioilustrativo.com"
}, "Disturbio Ilustrativo")));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Footer/Footer.styles.js":
/*!************************************************!*\
  !*** ./src/components/Footer/Footer.styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Credits": () => (/* binding */ Credits),
/* harmony export */   "StyledH2": () => (/* binding */ StyledH2),
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Credits = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Footerstyles__Credits"
})(["color:#fff;background:#0c0c0c;text-align:center;padding:20px 10px 20px 10px;font-family:\"Teko\",Arial,Helvetica,sans-serif;a{color:#fff;}a:hover{color:#ff6600;cursor:pointer;}"]);
const StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "Footerstyles__StyledH2"
})(["font-weight:500;font-size:1.5rem;font-family:\"Teko\",Arial,Helvetica,sans-serif;a{color:#000;:hover{color:#ff6600;}}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer.withConfig({
  displayName: "Footerstyles__Wrapper"
})(["display:flex;align-items:center;flex-direction:row;justify-align:space-between;color:#000;max-height:1350px;padding:50px 0;box-shadow:7px -7px 14px 3px #d1d1d1,7px 7px 14px 3px #fff;@media screen and (min-width:992px){padding:120px 0;}.content-wrapper{max-width:1180px;margin:0 auto;}p{margin:0;padding:0;font-family:'Teko',Arial,Helvetica,sans-serif;}.listing{list-style:none;display:grid;grid-template-columns:1fr;grid-gap:20px;*/ max-width:1180px;margin:0 auto;padding:0 25px;text-align:left;li.menu{p{line-height:35px;}}li > p{font-size:20px;line-height:35px;color:#000;font-family:'Teko',Arial,Helvetica,sans-serif;a{color:#000;:hover{color:#f26e3b;line-height:35px;}}}a > img{width:18px;position:relative;top:4px;filter:invert(100%);margin:12px 3px 0 0;:hover{filter:invert(56%) sepia(81%) saturate(2559%) hue-rotate(337deg) brightness(99%) contrast(92%);}}span{margin-bottom:20px;font-size:20px;color:#000;font-family:'Teko',Arial,Helvetica,sans-serif;}@media screen and (min-width:768px){grid-template-columns:1fr 1fr 2fr;}"]);

/***/ }),

/***/ "./src/components/Hamburger/Hamburger.js":
/*!***********************************************!*\
  !*** ./src/components/Hamburger/Hamburger.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hamburger_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hamburger.styles */ "./src/components/Hamburger/Hamburger.styles.js");
/* harmony import */ var _images_menu_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/menu-icon-2.svg */ "./src/images/menu-icon-2.svg");




const Hamburger = ({
  handleOverlayMenu
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hamburger_styles__WEBPACK_IMPORTED_MODULE_1__.HamburgerButton, {
  onClick: handleOverlayMenu
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _images_menu_icon_2_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "menu-hamburger"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);

/***/ }),

/***/ "./src/components/Hamburger/Hamburger.styles.js":
/*!******************************************************!*\
  !*** ./src/components/Hamburger/Hamburger.styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerButton": () => (/* binding */ HamburgerButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const HamburgerButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Hamburgerstyles__HamburgerButton"
})(["img{position:fixed;display:block;z-index:100000;right:30px;top:60px;width:40px;height:40px;cursor:pointer;transition:all 0.2s ease;:hover{transform:scale(1.2);}@media (min-width:992px){display:none;}}"]);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Navigation/Navigation.js");
/* harmony import */ var _images_logo_multycasetas_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/logo_multycasetas.png */ "./src/images/logo_multycasetas.png");
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _Header_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.styles */ "./src/components/Header/Header.styles.js");
/* harmony import */ var _images_facebook_f_brands_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/facebook-f-brands.svg */ "./src/images/facebook-f-brands.svg");
/* harmony import */ var _images_facebook_messenger_brands_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/facebook-messenger-brands.svg */ "./src/images/facebook-messenger-brands.svg");
/* harmony import */ var _images_instagram_brands_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/instagram-brands.svg */ "./src/images/instagram-brands.svg");
/* harmony import */ var _images_youtube_brands_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/youtube-brands.svg */ "./src/images/youtube-brands.svg");
/* harmony import */ var _images_whatsapp_brands_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/whatsapp-brands.svg */ "./src/images/whatsapp-brands.svg");












const Header = () => {
  const {
    site,
    menu
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_4__.useMenuQuery)();
  console.log(menu);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_5__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "phone"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Seguridad, Exactitud y Garant\xEDa (55) 8185-3675 | (55) 8280-2149"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://facebook.com/mevasacomercializadora"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_facebook_f_brands_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "red-logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://m.me/mevasacomercializadora"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_facebook_messenger_brands_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: "red-logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://instagram.com/mevasacomercializadora"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_instagram_brands_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "red-logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/channel/UCdPy7ZYQeeu1_nQGt71y-Bg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_youtube_brands_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: "red-logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://wa.link/szvz94"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_whatsapp_brands_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "red-logo"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_5__.Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_logo_multycasetas_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: site.siteMetadata.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: menu.menuItems.nodes
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Header/Header.styles.js":
/*!************************************************!*\
  !*** ./src/components/Header/Header.styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "Content": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "Headerstyles__Wrapper"
})(["background-color:white;height:130px;box-shadow:7px 7px 16px #d1d1d1,-7px -7px 16px #fff;border-bottom:1px solid #e7e7e7;position:fixed;width:100%;z-index:10000;.phone{text-align:center;font-family:\"Teko\",Arial,Helvetica,sans-serif;text-transform:uppercase;color:#212121;font-size:1rem;font-weight:400;letter-spacing:2px;padding:10px 20px 0 20px;background:#fff;display:flex;justify-content:center;align-items:center;span{display:none;margin:0 0 0 5px;}a:hover{color:#ff6600;cursor:pointer;}img{height:20px;margin:0 8px;}@media screen and (min-width:768px){justify-content:space-between;span{display:block;}}}"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Headerstyles__Content"
})(["display:flex;align-items:center;justify-content:space-between;height:100%;max-width:1180px;margin:0 auto;padding:0 20px 20px 20px;img{width:150px;margin:0;padding-bottom:10px;}"]);

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _OverlayMenu_OverlayMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OverlayMenu/OverlayMenu */ "./src/components/OverlayMenu/OverlayMenu.js");
/* harmony import */ var _Hamburger_Hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hamburger/Hamburger */ "./src/components/Hamburger/Hamburger.js");
/* harmony import */ var _Layout_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout.styles */ "./src/components/Layout/Layout.styles.js");







const Layout = ({
  children
}) => {
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleOverlayMenu = () => setMenuOpen(prev => !prev);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_styles__WEBPACK_IMPORTED_MODULE_5__.GlobalStyles, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hamburger_Hamburger__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleOverlayMenu: handleOverlayMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OverlayMenu_OverlayMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menuOpen: menuOpen,
    callback: handleOverlayMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_styles__WEBPACK_IMPORTED_MODULE_5__.Primary, null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Layout/Layout.styles.js":
/*!************************************************!*\
  !*** ./src/components/Layout/Layout.styles.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Primary": () => (/* binding */ Primary),
/* harmony export */   "GlobalStyles": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Primary = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].main.withConfig({
  displayName: "Layoutstyles__Primary"
})(["padding:110px 0 0 0;"]);
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["{html{font-family:'arial',sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.whiteText{color:#fff;}h2,article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;}audio:not([controls]){display:none;height:0;}progress{vertical-align:baseline;}[hidden],template{display:none;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}a:active,a:hover{outline-width:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;font-weight:bolder;}dfn{font-style:italic;}h1{font-family:'Teko',Arial,Helvetica,sans-serif;font-weight:700;font-size:2em;margin:0.67em 0;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}svg:not(:root){overflow:hidden;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}button,input,optgroup,select,textarea{font:inherit;margin:0;}optgroup{font-weight:700;}button,input{overflow:visible;}button,select{text-transform:none;}[type='reset'],[type='submit'],button,html [type='button']{-webkit-appearance:button;}[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}fieldset{border:1px solid silver;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}html{font:112.5%/1.45em arial,georgia,serif;box-sizing:border-box;overflow-y:scroll;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}body{color:hsla(0,0%,0%,0.8);font-family:'arial',georgia,serif;font-weight:normal;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:'kern','liga','clig','calt';-ms-font-feature-settings:'kern','liga','clig','calt';-webkit-font-feature-settings:'kern','liga','clig','calt';font-feature-settings:'kern','liga','clig','calt';}img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}a{text-decoration:none;color:#000;}p{font-family:Arial,Helvetica,sans-serif;font-size:1.1rem;line-height:1.7rem;}h1{font-size:2.2rem;font-family:'Teko',Arial;font-weight:800;letter-spacing:1px;color:#282828;text-transform:uppercase;line-height:40px;margin-top:10px;}h2{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-family:'Teko',Arial,Helvetica Neue,sans-serif;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.62671rem;line-height:1.1;}h3{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.38316rem;line-height:1.1;}h4{font-family:Arial;font-weight:800;font-size:1.2rem;letter-spacing:1px;}h5{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1rem;font-style:normal;font-variant:normal;font-weight:200;letter-spacing:1px;margin-bottom:10px;color:#000;text-transform:uppercase;}h6{font-family:'Times New Roman';font-size:28px;color:#fff;font-style:italic;margin:40px 20% 20px 20%;line-height:35px;}hgroup{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}ul{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}ol{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}dl{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}dd{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}p{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}figure{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}form{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}noscript{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}iframe{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}hr{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:calc(1.45rem - 1px);background:hsla(0,0%,0%,0.2);border:none;height:1px;}address{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}b{font-weight:bold;}strong{font-weight:bold;}dt{font-weight:bold;}th{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li > ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li > ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li > p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}kbd{font-size:0.85rem;line-height:1.45rem;}samp{font-size:0.85rem;line-height:1.45rem;}abbr{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}acronym{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}abbr[title]{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;text-decoration:none;}thead{text-align:left;}td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:'tnum';-moz-font-feature-settings:'tnum';-ms-font-feature-settings:'tnum';-webkit-font-feature-settings:'tnum';padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}th:first-child,td:first-child{padding-left:0;}th:last-child,td:last-child{padding-right:0;}tt,code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:'SFMono-Regular',Consolas,'Roboto Mono','Droid Sans Mono','Liberation Mono',Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:' ';}pre code:before,pre code:after,pre tt:before,pre tt:after{content:'';}@media only screen and (max-width:480px){html{font-size:100%;}}}"]);

/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/*!*************************************************!*\
  !*** ./src/components/Navigation/Navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Navigation_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navigation/Navigation.styles */ "./src/components/Navigation/Navigation.styles.js");




const Navigation = ({
  menu
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, menu.map(mainItem => !mainItem.parentId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: mainItem.id
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: mainItem.url,
  activeClassName: "nav-active"
}, mainItem.label, mainItem.childItems.nodes.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\u2304")), mainItem.childItems.nodes.length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, mainItem.childItems.nodes.map(childItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  key: childItem.id
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: childItem.url,
  activeClassName: "nav-active"
}, childItem.label)))) : null) : null)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/Navigation/Navigation.styles.js":
/*!********************************************************!*\
  !*** ./src/components/Navigation/Navigation.styles.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "Navigationstyles__Wrapper"
})(["font-family:\"Teko\",Arial,Helvetica,sans-serif;text-transform:uppercase;color:#212121;font-size:1rem;font-weight:600;letter-spacing:1px;display:none;.nav-active{color:#f26e3b;}@media (min-width:992px){font-size:0.85rem;display:block;}@media (min-width:1200px){font-size:1rem;}ul li{display:block;margin:0 10px 0 0;float:left;height:30px;position:relative;a{display:flex;padding:0 0 0 10px;transition:all 0.2s ease;text-decoration:none;color:#000;div{margin:-4px 0 0 5px;}}}ul li:last-child{margin:0;}ul li:hover > ul{display:block;}ul li a:hover{color:#f26e3b;}ul ul{animation:fadeInMenu 0.3s both ease-in;display:none;position:absolute;left:0;margin:0;top:30px;text-transform:none;background:#fff;padding:15px 10px 10px 10px;box-shadow:0px 6px 23px -10px rgba(0,0,0,0.5);}ul ul li{width:auto;min-width:170px;}ul ul li a{padding:5px 10px;text-decoration:none;white-space:nowrap;}@keyframes fadeInMenu{from{opacity:0;}to{opacity:1;}}"]);

/***/ }),

/***/ "./src/components/OverlayMenu/OverlayMenu.js":
/*!***************************************************!*\
  !*** ./src/components/OverlayMenu/OverlayMenu.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_gatsby_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/gatsby-icon.png */ "./src/images/gatsby-icon.png");
/* harmony import */ var _images_tango_close_button_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/tango_close_button.svg */ "./src/images/tango_close_button.svg");
/* harmony import */ var _hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useMenuQuery */ "./src/hooks/useMenuQuery.js");
/* harmony import */ var _OverlayMenu_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverlayMenu.styles */ "./src/components/OverlayMenu/OverlayMenu.styles.js");







const OverlayMenu = ({
  menuOpen,
  callback
}) => {
  const {
    menu
  } = (0,_hooks_useMenuQuery__WEBPACK_IMPORTED_MODULE_4__.useMenuQuery)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OverlayMenu_styles__WEBPACK_IMPORTED_MODULE_5__.Overlay, {
    menuOpen: menuOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "invertedLogo",
    src: _images_gatsby_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "white-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "overlayMenu"
  }, menu.menuItems.nodes.map(item => !item.parentId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: item.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.url,
    activeClassName: "overlayActive"
  }, item.label)) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "closeButton",
    onClick: callback,
    role: "button",
    tabIndex: "0",
    onKeyDown: callback
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_tango_close_button_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "close-button"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverlayMenu);

/***/ }),

/***/ "./src/components/OverlayMenu/OverlayMenu.styles.js":
/*!**********************************************************!*\
  !*** ./src/components/OverlayMenu/OverlayMenu.styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "OverlayMenustyles__Overlay"
})(["width:100%;height:100%;position:fixed;opacity:", ";transform:", ";z-index:100000;background:#fff;left:0px;padding:20px;transition:all 0.3s ease;.inner{display:flex;flex-direction:column;align-items:center;justify-content:center;background:gray;box-shadow:7px 7px 16px #d1d1d1,-7px -7px 16px #fff;border-bottom:1px solid #e7e7e7;width:100%;height:100%;color:#000;padding:40px;.invertedLogo{max-width:120px;margin:0 0 60px 0;}.overlayMenu{text-align:center;list-style-type:none;margin:0;li{margin:0 0 20px 0;}li.overlayActive{color:#f26e3b;}a{font-family:\"Teko\",Arial,Helvetica,sans-serif;font-size:2rem;color:#fff;transition:all 0.3s ease;text-decoration:none;:hover{color:#f26e3b;}}}}.closeButton{position:absolute;top:50px;right:50px;color:#fff;width:30px;height:30px;cursor:pointer;transition:all 1s ease;outline:none;:hover{transform:rotate(180deg);}}"], props => props.menuOpen ? "1" : "0", props => props.menuOpen ? "translateX(0%)" : "translateX(-100%)");

/***/ }),

/***/ "./src/components/PageHero/PageHero.js":
/*!*********************************************!*\
  !*** ./src/components/PageHero/PageHero.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageHero_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHero.styles */ "./src/components/PageHero/PageHero.styles.js");



const PageHero = ({
  img
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageHero_styles__WEBPACK_IMPORTED_MODULE_1__.StyledImg, {
  image: img,
  alt: "page hero"
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHero);

/***/ }),

/***/ "./src/components/PageHero/PageHero.styles.js":
/*!****************************************************!*\
  !*** ./src/components/PageHero/PageHero.styles.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledImg": () => (/* binding */ StyledImg)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");


const StyledImg = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.GatsbyImage).withConfig({
  displayName: "PageHerostyles__StyledImg"
})(["height:300px;width:100%;"]);

/***/ }),

/***/ "./src/components/PageSidebar/PageSideBar.js":
/*!***************************************************!*\
  !*** ./src/components/PageSidebar/PageSideBar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _SidebarMessage_SidebarMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SidebarMessage/SidebarMessage */ "./src/components/SidebarMessage/SidebarMessage.js");
/* harmony import */ var _images_tango_page_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/tango-page-icon.svg */ "./src/images/tango-page-icon.svg");
/* harmony import */ var _PageSidebar_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageSidebar.styles */ "./src/components/PageSidebar/PageSidebar.styles.js");






const PageSidebar = ({
  children,
  parentChildren,
  currentPage,
  parent
}) => {
  const getParentContent = () =>
  /*#__PURE__*/
  //Page with children, show menu
  react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "sidebar-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_tango_page_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "CakeIt Page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: currentPage.title
    }
  })), children.nodes.map(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: child.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: child.uri
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: child.title
    }
  })))));

  const getChildContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "sidebar-menu-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _images_tango_page_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "Cakeit Page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: parent
    }
  })), parentChildren.map(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: child.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: child.uri,
    activeClassName: "sidebar-highlighted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: child.title
    }
  })))));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSidebar_styles__WEBPACK_IMPORTED_MODULE_4__.Wrapper, null, children.nodes.length === 0 && !parent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SidebarMessage_SidebarMessage__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSidebar_styles__WEBPACK_IMPORTED_MODULE_4__.Menu, null, parent ? getChildContent() : getParentContent()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSidebar);

/***/ }),

/***/ "./src/components/PageSidebar/PageSidebar.styles.js":
/*!**********************************************************!*\
  !*** ./src/components/PageSidebar/PageSidebar.styles.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper),
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside.withConfig({
  displayName: "PageSidebarstyles__Wrapper"
})(["margin-top:40px;min-width:25%;@media (min-width:992px){margin:100px 15px 0 0;padding-right:20px;}"]);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "PageSidebarstyles__Menu"
})(["list-style-type:none;padding:0 20px 0 0;margin:0;.sidebar-menu-header{display:flex;font-family:\"Teko\",Arial,Helvetica,sans-serif;border-bottom:2px #e4e4e4 solid;font-weight:600;font-size:1.2rem;letter-spacing:1px;margin:0 0 20px 0;padding:0 0 5px 0;text-transform:uppercase;img{margin-bottom:5px;padding:0 10px 0 0;width:38px;height:auto;}}li{margin:0 0 5px 38px;color:#000;font-family:\"Teko\",Arial;font-size:20px;font-weight:400;letter-spacing:1px;a:hover{color:#f26e3b;}}.sidebar-highlighted{color:#f26e3b;}p{font-size:0.85rem;line-height:1.2rem;letter-spacing:0.5px;a{font-weight:800;}}"]);

/***/ }),

/***/ "./src/components/SidebarMessage/SidebarMessage.js":
/*!*********************************************************!*\
  !*** ./src/components/SidebarMessage/SidebarMessage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SidebarMessage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarMessage.styles */ "./src/components/SidebarMessage/SidebarMessage.styles.js");
/* harmony import */ var _images_tango_mail_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/tango-mail-icon.svg */ "./src/images/tango-mail-icon.svg");




const SidebarMessage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SidebarMessage_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _images_tango_mail_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "cakeit-mail"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Escr\xEDbenos:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xBFNecesitas una cotizaci\xF3n?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "O s\xF3lo quieres mantenerte informado de nuestras actualizaciones y novedades...", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Env\xEDanos un correo con tu nombre:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "mailto:ventas@multycasetas.com"
}, "Envi\xE1r E-Mail"))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarMessage);

/***/ }),

/***/ "./src/components/SidebarMessage/SidebarMessage.styles.js":
/*!****************************************************************!*\
  !*** ./src/components/SidebarMessage/SidebarMessage.styles.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wrapper": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "SidebarMessagestyles__Wrapper"
})(["font-family:\"Teko\",Arial,Helvetica,sans-serif;font-weight:600;margin:0 0 5em 0;p{font-weight:400;font-size:0.8rem;margin:0;line-height:1.2rem;margin-top:10px;}div{display:flex;align-items:center;padding:10px 0;border-bottom:2px #e4e4e4 solid;img{padding-right:10px;margin-bottom:3px;width:30px;height:auto;}span{font-size:1.2rem;font-weight:600;text-transform:uppercase;}}"]);

/***/ }),

/***/ "./src/hooks/useMenuQuery.js":
/*!***********************************!*\
  !*** ./src/hooks/useMenuQuery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenuQuery": () => (/* binding */ useMenuQuery)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4192767499_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/4192767499.json */ "./public/page-data/sq/d/4192767499.json");

const useMenuQuery = () => {
  const data = _public_page_data_sq_d_4192767499_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data;
};

/***/ }),

/***/ "./src/pages/{wpPage.link}.js":
/*!************************************!*\
  !*** ./src/pages/{wpPage.link}.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./src/components/Layout/Layout.js");
/* harmony import */ var _components_PageHero_PageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHero/PageHero */ "./src/components/PageHero/PageHero.js");
/* harmony import */ var _components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BreadCrumb/BreadCrumb */ "./src/components/BreadCrumb/BreadCrumb.js");
/* harmony import */ var _components_PageSidebar_PageSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageSidebar/PageSideBar */ "./src/components/PageSidebar/PageSideBar.js");
/* harmony import */ var _utils_TransformOembedToIframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/TransformOembedToIframe */ "./src/utils/TransformOembedToIframe.js");

 //Components






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "wpPagelink__Wrapper"
})(["max-width:1180px;margin:0 auto;padding:20px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "wpPagelink__ContentWrapper"
})(["display:block;@media (min-width:992px){display:flex;}"]);
const PageContent = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].article.withConfig({
  displayName: "wpPagelink__PageContent"
})(["margin-top:20px;max-width:800px;iframe{width:100%;}"]);

const PageTemplate = ({
  data
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, data.wpPage.featuredImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageHero_PageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
  img: data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
}) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
  parent: data.wpPage.wpParent && data.wpPage.wpParent.node
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PageSidebar_PageSideBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  parentChildren: data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes,
  currentPage: data.wpPage,
  parent: data.wpPage.wpParent && data.wpPage.wpParent.node.title
}, data.wpPage.wpChildren), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
  dangerouslySetInnerHTML: {
    __html: data.wpPage.title
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  dangerouslySetInnerHTML: {
    __html: (0,_utils_TransformOembedToIframe__WEBPACK_IMPORTED_MODULE_5__["default"])(data.wpPage.content)
  }
})))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTemplate);
const pageQuery = "2431303538";

/***/ }),

/***/ "./src/utils/TransformOembedToIframe.js":
/*!**********************************************!*\
  !*** ./src/utils/TransformOembedToIframe.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransformOembedToIframe)
/* harmony export */ });
function TransformOembedToIframe(htmlContent) {
  const oembed = htmlContent.split("</oembed>");
  let body = "";
  oembed.forEach((item, index) => {
    body += oembed[index] + "</oembed>";
    const oembed1 = item.split('url="')[1];

    if (oembed1) {
      const oembed2 = oembed1.split('">')[0];

      if (oembed2) {
        const youtube = oembed2.split("https://www.youtube.com/watch?v=")[1];

        if (youtube) {
          body += '<div class="iframe-container"><iframe src="https://youtube.com/embed/' + youtube + '" frameborder="0"; scrolling="no"; allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
      }
    }
  });
  return body;
}

/***/ }),

/***/ "./src/images/facebook-f-brands.svg":
/*!******************************************!*\
  !*** ./src/images/facebook-f-brands.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJmYWNlYm9vay1mIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtZmFjZWJvb2stZiBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI3OS4xNCAyODhsMTQuMjItOTIuNjZoLTg4Ljkxdi02MC4xM2MwLTI1LjM1IDEyLjQyLTUwLjA2IDUyLjI0LTUwLjA2aDQwLjQyVjYuMjZTMjYwLjQzIDAgMjI1LjM2IDBjLTczLjIyIDAtMTIxLjA4IDQ0LjM4LTEyMS4wOCAxMjQuNzJ2NzAuNjJIMjIuODlWMjg4aDgxLjM5djIyNGgxMDAuMTdWMjg4eiI+PC9wYXRoPjwvc3ZnPg==");

/***/ }),

/***/ "./src/images/facebook-messenger-brands.svg":
/*!**************************************************!*\
  !*** ./src/images/facebook-messenger-brands.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJmYWNlYm9vay1tZXNzZW5nZXIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1mYWNlYm9vay1tZXNzZW5nZXIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYuNTUgOEMxMTYuNTIgOCA4IDExMC4zNCA4IDI0OC41N2MwIDcyLjMgMjkuNzEgMTM0Ljc4IDc4LjA3IDE3Ny45NCA4LjM1IDcuNTEgNi42MyAxMS44NiA4LjA1IDU4LjIzQTE5LjkyIDE5LjkyIDAgMCAwIDEyMiA1MDIuMzFjNTIuOTEtMjMuMyA1My41OS0yNS4xNCA2Mi41Ni0yMi43QzMzNy44NSA1MjEuOCA1MDQgNDIzLjcgNTA0IDI0OC41NyA1MDQgMTEwLjM0IDM5Ni41OSA4IDI1Ni41NSA4em0xNDkuMjQgMTg1LjEzbC03MyAxMTUuNTdhMzcuMzcgMzcuMzcgMCAwIDEtNTMuOTEgOS45M2wtNTguMDgtNDMuNDdhMTUgMTUgMCAwIDAtMTggMGwtNzguMzcgNTkuNDRjLTEwLjQ2IDcuOTMtMjQuMTYtNC42LTE3LjExLTE1LjY3bDczLTExNS41N2EzNy4zNiAzNy4zNiAwIDAgMSA1My45MS05LjkzbDU4LjA2IDQzLjQ2YTE1IDE1IDAgMCAwIDE4IDBsNzguNDEtNTkuMzhjMTAuNDQtNy45OCAyNC4xNCA0LjU0IDE3LjA5IDE1LjYyeiI+PC9wYXRoPjwvc3ZnPg==");

/***/ }),

/***/ "./src/images/gatsby-icon.png":
/*!************************************!*\
  !*** ./src/images/gatsby-icon.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/gatsby-icon-595242041843c01a92265516928b0acb.png");

/***/ }),

/***/ "./src/images/instagram-brands.svg":
/*!*****************************************!*\
  !*** ./src/images/instagram-brands.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJpbnN0YWdyYW0iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1pbnN0YWdyYW0gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXoiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./src/images/logo_multycasetas.png":
/*!******************************************!*\
  !*** ./src/images/logo_multycasetas.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAABQCAYAAADvJRKqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIyNTc4NkVDMEY4RDExRTlCQTVEQTc3RTNERjkwOTI3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIyNTc4NkVCMEY4RDExRTlCQTVEQTc3RTNERjkwOTI3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIzLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODllNDNhZWEtMmE5Zi02NjQyLTgwY2QtZGYwYmFkNjg3YjM5IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpk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");

/***/ }),

/***/ "./src/images/menu-icon-2.svg":
/*!************************************!*\
  !*** ./src/images/menu-icon-2.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./src/images/tango-mail-icon.svg":
/*!****************************************!*\
  !*** ./src/images/tango-mail-icon.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ3cHgiIGhlaWdodD0iMTE1cHgiIHZpZXdCb3g9IjAgMCAxNDcgMTE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+ZW52ZWxvcGU1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkZvbnQtQXdlc29tZS1JY29uLVBhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTcwLjAwMDAwMCwgLTc0MS4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9ImVudmVsb3BlNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE3MC44NDM3NTAsIDc0MS41MDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDIuMTcxLDMuNDcyIEMxMzkuNjE4LDAuOTE5IDEzNi41NDksLTAuMzU3IDEzMi45NjUsLTAuMzU3IEwxMy4wMzYsLTAuMzU3IEM5LjQ1MSwtMC4zNTcgNi4zODIsMC45MTkgMy44MjksMy40NzIgQzEuMjc2LDYuMDI1IDAsOS4wOTQgMCwxMi42NzkgTDAsMTAxLjMyMyBDMCwxMDQuOTA4IDEuMjc2LDEwNy45NzUgMy44MjksMTEwLjUyOCBDNi4zODIsMTEzLjA4MyA5LjQ1MSwxMTQuMzU4IDEzLjAzNiwxMTQuMzU4IEwxMzIuOTY1LDExNC4zNTggQzEzNi41NDksMTE0LjM1OCAxMzkuNjE4LDExMy4wODMgMTQyLjE3MSwxMTAuNTI4IEMxNDQuNzI1LDEwNy45NzUgMTQ2LDEwNC45MDcgMTQ2LDEwMS4zMjMgTDE0NiwxMi42NzkgQzE0Niw5LjA5NCAxNDQuNzI1LDYuMDI1IDE0Mi4xNzEsMy40NzIgTDE0Mi4xNzEsMy40NzIgWiBNMTM1LjU3LDEwMS4zMjEgQzEzNS41NywxMDIuMDI3IDEzNS4zMTIsMTAyLjYzOCAxMzQuNzk2LDEwMy4xNTQgQzEzNC4yOCwxMDMuNjcgMTMzLjY2OSwxMDMuOTI3IDEzMi45NjQsMTAzLjkyNyBMMTMuMDM1LDEwMy45MjcgQzEyLjMyOSwxMDMuOTI3IDExLjcxOCwxMDMuNjcgMTEuMjAyLDEwMy4xNTQgQzEwLjY4NiwxMDIuNjM4IDEwLjQyOCwxMDIuMDI3IDEwLjQyOCwxMDEuMzIxIEwxMC40MjgsMzguNzUgQzEyLjE2Niw0MC43MDUgMTQuMDQsNDIuNDk4IDE2LjA1LDQ0LjEyNyBDMzAuNjA3LDU1LjMxNiA0Mi4xNzYsNjQuNDk1IDUwLjc1OCw3MS42NjUgQzUzLjUyOCw3NC4wMDEgNTUuNzgyLDc1LjgyIDU3LjUyLDc3LjEyNCBDNTkuMjU4LDc4LjQyOCA2MS42MDcsNzkuNzQ0IDY0LjU2Nyw4MS4wNzUgQzY3LjUyNyw4Mi40MDYgNzAuMzExLDgzLjA3IDcyLjkxOCw4My4wNyBMNzMsODMuMDcgTDczLjA4MSw4My4wNyBDNzUuNjg3LDgzLjA3IDc4LjQ3Myw4Mi40MDYgODEuNDMyLDgxLjA3NSBDODQuMzkzLDc5Ljc0NCA4Ni43NDMsNzguNDI4IDg4LjQ4MSw3Ny4xMjQgQzkwLjIxOCw3NS44MiA5Mi40NzMsNzQuMDAxIDk1LjI0Myw3MS42NjUgQzEwMy44MjUsNjQuNDk1IDExNS4zOTMsNTUuMzE2IDEyOS45NSw0NC4xMjcgQzEzMS45Niw0Mi40OTggMTMzLjgzNSw0MC43MDUgMTM1LjU3MSwzOC43NSBMMTM1LjU3MSwxMDEuMzIxIEwxMzUuNTcsMTAxLjMyMSBaIE0xMzUuNTcsMTQuNzk3IEwxMzUuNTcsMTUuNjkzIEMxMzUuNTcsMTguODk3IDEzNC4zMDgsMjIuNDY5IDEzMS43ODMsMjYuNDA2IEMxMjkuMjU4LDMwLjM0NCAxMjYuNTI3LDMzLjQ4MSAxMjMuNTk1LDM1LjgxNiBDMTEzLjExMSw0NC4wNzMgMTAyLjIyMiw1Mi42ODEgOTAuOTIzLDYxLjY0MyBDOTAuNTk3LDYxLjkxNCA4OS42NDYsNjIuNzE2IDg4LjA3MSw2NC4wNDYgQzg2LjQ5Nyw2NS4zNzcgODUuMjQ3LDY2LjM5NyA4NC4zMjMsNjcuMTAyIEM4My4zOTksNjcuODA5IDgyLjE5Miw2OC42NjQgODAuNjk4LDY5LjY2OCBDNzkuMjA0LDcwLjY3MiA3Ny44MzMsNzEuNDIgNzYuNTg0LDcxLjkwOCBDNzUuMzM1LDcyLjM5NiA3NC4xNjcsNzIuNjQgNzMuMDgxLDcyLjY0IEw3Myw3Mi42NCBMNzIuOTE4LDcyLjY0IEM3MS44MzIsNzIuNjQgNzAuNjY1LDcyLjM5NiA2OS40MTUsNzEuOTA4IEM2OC4xNjYsNzEuNDIgNjYuNzk0LDcwLjY3MiA2NS4zMDEsNjkuNjY4IEM2My44MDgsNjguNjY0IDYyLjU5OSw2Ny44MDkgNjEuNjc2LDY3LjEwMiBDNjAuNzUzLDY2LjM5NyA1OS41MDMsNjUuMzc3IDU3LjkyOCw2NC4wNDYgQzU2LjM1Myw2Mi43MTYgNTUuNDAyLDYxLjkxNCA1NS4wNzYsNjEuNjQzIEM0My43NzksNTIuNjgxIDMyLjg4OSw0NC4wNzMgMjIuNDA2LDM1LjgxNiBDMTQuNDIxLDI5LjUxNiAxMC40MjksMjEuODAzIDEwLjQyOSwxMi42NzggQzEwLjQyOSwxMS45NzIgMTAuNjg3LDExLjM2MSAxMS4yMDMsMTAuODQ1IEMxMS43MTksMTAuMzI5IDEyLjMzLDEwLjA3MSAxMy4wMzYsMTAuMDcxIEwxMzIuOTY1LDEwLjA3MSBDMTMzLjM5OSwxMC4zMTUgMTMzLjc3OSwxMC4zODMgMTM0LjEwNiwxMC4yNzUgQzEzNC40MzIsMTAuMTY1IDEzNC42NzYsMTAuMzY5IDEzNC44MzgsMTAuODg1IEMxMzUuMDAxLDExLjQwMSAxMzUuMTUsMTEuNjQ1IDEzNS4yODYsMTEuNjE4IEMxMzUuNDIyLDExLjU5MSAxMzUuNTA0LDExLjkzIDEzNS41MzEsMTIuNjM3IEMxMzUuNTU2LDEzLjM0MyAxMzUuNTcsMTMuNjk4IDEzNS41NywxMy42OTggTDEzNS41NywxNC43OTcgTDEzNS41NywxNC43OTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./src/images/tango-page-icon.svg":
/*!****************************************!*\
  !*** ./src/images/tango-page-icon.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMzAgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5vcGVuOTY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQm9vc3RyYXAzLWdyaWQtc3lzdGVtLWxheW91dHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUNvcHktNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMC4wMDAwMDAsIC02MjguMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJvcGVuOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMC4wMDAwMDAsIDYyOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43MTk4MDc3LDExLjQ4Njg5NDcgQzI5LjQ5MDM4NDYsMTEuMDA0ODI0NiAyOS4xMzk4MDc3LDEwLjYzNTI2MzIgMjguNjcwMTkyMywxMC4zNzg3ODk1IEMyOC4yMDAxOTIzLDEwLjEyMTkyOTggMjcuNjgzMjY5Miw5Ljk5MzU5NjQ5IDI3LjExOTIzMDgsOS45OTM1OTY0OSBMMjQuMTEwNzY5Miw5Ljk5MzU5NjQ5IEwyNC4xMTA3NjkyLDcuNDc3ODc3MTkgQzI0LjExMDc2OTIsNi41MTM1NDM4NiAyMy43NjU5NjE1LDUuNjg1NDU2MTQgMjMuMDc2NzMwOCw0Ljk5MzYxNDA0IEMyMi4zODcxMTU0LDQuMzAxNzcxOTMgMjEuNTYxOTIzMSwzLjk1NTk0NzM3IDIwLjYwMTE1MzgsMy45NTU5NDczNyBMMTIuMDc3ODg0NiwzLjk1NTk0NzM3IEwxMi4wNzc4ODQ2LDMuNDUyODQyMTEgQzEyLjA3Nzg4NDYsMi40ODg1MDg3NyAxMS43MzMwNzY5LDEuNjYwNDIxMDUgMTEuMDQzODQ2MiwwLjk2ODc3MTkzIEMxMC4zNTQ0MjMxLDAuMjc2OTI5ODI1IDkuNTI5MjMwNzcsLTAuMDY5MDg3NzE5MyA4LjU2ODI2OTIzLC0wLjA2OTA4NzcxOTMgTDMuNTU0NjE1MzgsLTAuMDY5MDg3NzE5MyBDMi41OTM2NTM4NSwtMC4wNjkwODc3MTkzIDEuNzY4NDYxNTQsMC4yNzY5Mjk4MjUgMS4wNzkwMzg0NiwwLjk2ODc3MTkzIEMwLjM4OTYxNTM4NSwxLjY2MDQyMTA1IDAuMDQ1LDIuNDg4NTA4NzcgMC4wNDUsMy40NTI4NDIxMSBMMC4wNDUsMTguNTQ2OTY0OSBDMC4wNDUsMTkuNTExMTA1MyAwLjM4OTYxNTM4NSwyMC4zMzkxOTMgMS4wNzkwMzg0NiwyMS4wMzA4NDIxIEMxLjc2ODQ2MTU0LDIxLjcyMjg3NzIgMi41OTM2NTM4NSwyMi4wNjg4OTQ3IDMuNTU0NjE1MzgsMjIuMDY4ODk0NyBMMjAuNjAxNTM4NSwyMi4wNjg4OTQ3IEMyMS4zMDExNTM4LDIyLjA2ODg5NDcgMjIuMDMyMzA3NywyMS44ODc4NzcyIDIyLjc5NSwyMS41MjYyMjgxIEMyMy41NTc1LDIxLjE2NDc3MTkgMjQuMTYzMDc2OSwyMC43MDYwNTI2IDI0LjYxMjMwNzcsMjAuMTUwNDU2MSBMMjkuMjM0NDIzMSwxNC40NDMxOTMgQzI5LjcxNDgwNzcsMTMuODM1Mjk4MiAyOS45NTQ4MDc3LDEzLjIwNjU2MTQgMjkuOTU0ODA3NywxMi41NTY0MDM1IEMyOS45NTUsMTIuMTc4OTI5OCAyOS44NzY3MzA4LDExLjgyMjg3NzIgMjkuNzE5ODA3NywxMS40ODY4OTQ3IEwyOS43MTk4MDc3LDExLjQ4Njg5NDcgWiBNMi4wNTA1NzY5MiwzLjQ1MzAzNTA5IEMyLjA1MDU3NjkyLDMuMDMzODc3MTkgMi4xOTY3MzA3NywyLjY3NzQzODYgMi40ODkyMzA3NywyLjM4MzkxMjI4IEMyLjc4MTUzODQ2LDIuMDkwNTc4OTUgMy4xMzY3MzA3NywxLjk0MzcxOTMgMy41NTQ2MTUzOCwxLjk0MzcxOTMgTDguNTY4NDYxNTQsMS45NDM3MTkzIEM4Ljk4NjM0NjE1LDEuOTQzNzE5MyA5LjM0MTM0NjE1LDIuMDkwMzg1OTYgOS42MzM4NDYxNSwyLjM4MzkxMjI4IEM5LjkyNjE1Mzg1LDIuNjc3NDM4NiAxMC4wNzI1LDMuMDMzODc3MTkgMTAuMDcyNSwzLjQ1MzAzNTA5IEwxMC4wNzI1LDQuNDU5NDM4NiBDMTAuMDcyNSw0Ljg3ODc4OTQ3IDEwLjIxODg0NjIsNS4yMzUyMjgwNyAxMC41MTExNTM4LDUuNTI4NTYxNCBDMTAuODAzNDYxNSw1LjgyMTg5NDc0IDExLjE1ODY1MzgsNS45Njg3NTQzOSAxMS41NzY1Mzg1LDUuOTY4NzU0MzkgTDIwLjYwMTM0NjIsNS45Njg3NTQzOSBDMjEuMDE5MDM4NSw1Ljk2ODc1NDM5IDIxLjM3NDQyMzEsNi4xMTU2MTQwNCAyMS42NjY3MzA4LDYuNDA4OTQ3MzcgQzIxLjk1OTAzODUsNi43MDIyODA3IDIyLjEwNTM4NDYsNy4wNTg3MTkzIDIyLjEwNTM4NDYsNy40NzgwNzAxOCBMMjIuMTA1Mzg0Niw5Ljk5Mzc4OTQ3IEwxMC4wNzI1LDkuOTkzNzg5NDcgQzkuMzYyMzA3NjksOS45OTM3ODk0NyA4LjYzMDk2MTU0LDEwLjE3NDYxNCA3Ljg3ODg0NjE1LDEwLjUzNjI2MzIgQzcuMTI2NzMwNzcsMTAuODk3OTEyMyA2LjUyMDk2MTU0LDExLjM1NjQzODYgNi4wNjEzNDYxNSwxMS45MTIyMjgxIEwyLjA1MDU3NjkyLDE2Ljg2NDczNjggTDIuMDUwNTc2OTIsMy40NTMwMzUwOSBMMi4wNTA1NzY5MiwzLjQ1MzAzNTA5IFogTTI3LjY2NzUsMTMuMTY5NzAxOCBMMjMuMDYxMTUzOCwxOC44NzcxNTc5IEMyMi44MDAxOTIzLDE5LjIwMTk0NzQgMjIuNDI5MjMwOCwxOS40Nzk4NDIxIDIxLjk0ODY1MzgsMTkuNzEwMDcwMiBDMjEuNDY4MjY5MiwxOS45NDA2ODQyIDIxLjAxOTAzODUsMjAuMDU2MDg3NyAyMC42MDEzNDYyLDIwLjA1NjA4NzcgTDMuNTU0NjE1MzgsMjAuMDU2MDg3NyBDMy4wMDA5NjE1NCwyMC4wNTYwODc3IDIuNzI0MjMwNzcsMTkuODcyNTYxNCAyLjcyNDIzMDc3LDE5LjUwNTcwMTggQzIuNzI0MjMwNzcsMTkuMzM4IDIuODE4MjY5MjMsMTkuMTI4NDIxMSAzLjAwNjM0NjE1LDE4Ljg3NjU3ODkgTDcuNjEyNjkyMzEsMTMuMTY5MzE1OCBDNy44ODQyMzA3NywxMi44NDQzMzMzIDguMjU3NSwxMi41NjkzMzMzIDguNzMyODg0NjIsMTIuMzQzOTI5OCBDOS4yMDgwNzY5MiwxMi4xMTg1MjYzIDkuNjU0NjE1MzgsMTIuMDA1ODI0NiAxMC4wNzI1LDEyLjAwNTgyNDYgTDI3LjExOTIzMDgsMTIuMDA1ODI0NiBDMjcuNjcyODg0NiwxMi4wMDU4MjQ2IDI3Ljk0OTYxNTQsMTIuMTg5NTQzOSAyNy45NDk2MTU0LDEyLjU1NjIxMDUgQzI3Ljk0OTYxNTQsMTIuNzM0NzE5MyAyNy44NTU3NjkyLDEyLjkzOTI4MDcgMjcuNjY3NSwxMy4xNjk3MDE4IEwyNy42Njc1LDEzLjE2OTcwMTggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./src/images/tango_close_button.svg":
/*!*******************************************!*\
  !*** ./src/images/tango_close_button.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNjUuNiAyNjUuNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY1LjYgMjY1LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjM5LjgsMjY0LjNjLTYuNCwwLTEyLjgtMi40LTE3LjctNy4zTDguNiw0My40Yy05LjgtOS44LTkuOC0yNS42LDAtMzUuNGM5LjgtOS44LDI1LjYtOS44LDM1LjQsMAoJCWwyMTMuNSwyMTMuNWM5LjgsOS44LDkuOCwyNS42LDAsMzUuNEMyNTIuNiwyNjEuOCwyNDYuMiwyNjQuMywyMzkuOCwyNjQuM3oiLz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xLjMsMjM5LjNjMC02LjQsMi40LTEyLjgsNy4zLTE3LjdMMjIyLjEsOC4xYzkuOC05LjgsMjUuNi05LjgsMzUuNCwwYzkuOCw5LjgsOS44LDI1LjYsMCwzNS40TDQzLjksMjU3CgkJYy05LjgsOS44LTI1LjYsOS44LTM1LjQsMEMzLjcsMjUyLjEsMS4zLDI0NS43LDEuMywyMzkuM3oiLz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/images/whatsapp-brands.svg":
/*!****************************************!*\
  !*** ./src/images/whatsapp-brands.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ3aGF0c2FwcCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXdoYXRzYXBwIGZhLXctMTQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzgwLjkgOTcuMUMzMzkgNTUuMSAyODMuMiAzMiAyMjMuOSAzMmMtMTIyLjQgMC0yMjIgOTkuNi0yMjIgMjIyIDAgMzkuMSAxMC4yIDc3LjMgMjkuNiAxMTFMMCA0ODBsMTE3LjctMzAuOWMzMi40IDE3LjcgNjguOSAyNyAxMDYuMSAyN2guMWMxMjIuMyAwIDIyNC4xLTk5LjYgMjI0LjEtMjIyIDAtNTkuMy0yNS4yLTExNS02Ny4xLTE1N3ptLTE1NyAzNDEuNmMtMzMuMiAwLTY1LjctOC45LTk0LTI1LjdsLTYuNy00LTY5LjggMTguM0w3MiAzNTkuMmwtNC40LTdjLTE4LjUtMjkuNC0yOC4yLTYzLjMtMjguMi05OC4yIDAtMTAxLjcgODIuOC0xODQuNSAxODQuNi0xODQuNSA0OS4zIDAgOTUuNiAxOS4yIDEzMC40IDU0LjEgMzQuOCAzNC45IDU2LjIgODEuMiA1Ni4xIDEzMC41IDAgMTAxLjgtODQuOSAxODQuNi0xODYuNiAxODQuNnptMTAxLjItMTM4LjJjLTUuNS0yLjgtMzIuOC0xNi4yLTM3LjktMTgtNS4xLTEuOS04LjgtMi44LTEyLjUgMi44LTMuNyA1LjYtMTQuMyAxOC0xNy42IDIxLjgtMy4yIDMuNy02LjUgNC4yLTEyIDEuNC0zMi42LTE2LjMtNTQtMjkuMS03NS41LTY2LTUuNy05LjggNS43LTkuMSAxNi4zLTMwLjMgMS44LTMuNy45LTYuOS0uNS05LjctMS40LTIuOC0xMi41LTMwLjEtMTcuMS00MS4yLTQuNS0xMC44LTkuMS05LjMtMTIuNS05LjUtMy4yLS4yLTYuOS0uMi0xMC42LS4yLTMuNyAwLTkuNyAxLjQtMTQuOCA2LjktNS4xIDUuNi0xOS40IDE5LTE5LjQgNDYuMyAwIDI3LjMgMTkuOSA1My43IDIyLjYgNTcuNCAyLjggMy43IDM5LjEgNTkuNyA5NC44IDgzLjggMzUuMiAxNS4yIDQ5IDE2LjUgNjYuNiAxMy45IDEwLjctMS42IDMyLjgtMTMuNCAzNy40LTI2LjQgNC42LTEzIDQuNi0yNC4xIDMuMi0yNi40LTEuMy0yLjUtNS0zLjktMTAuNS02LjZ6Ij48L3BhdGg+PC9zdmc+");

/***/ }),

/***/ "./src/images/youtube-brands.svg":
/*!***************************************!*\
  !*** ./src/images/youtube-brands.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ5b3V0dWJlIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEteW91dHViZSBmYS13LTE4IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU3NiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTU0OS42NTUgMTI0LjA4M2MtNi4yODEtMjMuNjUtMjQuNzg3LTQyLjI3Ni00OC4yODQtNDguNTk3QzQ1OC43ODEgNjQgMjg4IDY0IDI4OCA2NFMxMTcuMjIgNjQgNzQuNjI5IDc1LjQ4NmMtMjMuNDk3IDYuMzIyLTQyLjAwMyAyNC45NDctNDguMjg0IDQ4LjU5Ny0xMS40MTIgNDIuODY3LTExLjQxMiAxMzIuMzA1LTExLjQxMiAxMzIuMzA1czAgODkuNDM4IDExLjQxMiAxMzIuMzA1YzYuMjgxIDIzLjY1IDI0Ljc4NyA0MS41IDQ4LjI4NCA0Ny44MjFDMTE3LjIyIDQ0OCAyODggNDQ4IDI4OCA0NDhzMTcwLjc4IDAgMjEzLjM3MS0xMS40ODZjMjMuNDk3LTYuMzIxIDQyLjAwMy0yNC4xNzEgNDguMjg0LTQ3LjgyMSAxMS40MTItNDIuODY3IDExLjQxMi0xMzIuMzA1IDExLjQxMi0xMzIuMzA1czAtODkuNDM4LTExLjQxMi0xMzIuMzA1em0tMzE3LjUxIDIxMy41MDhWMTc1LjE4NWwxNDIuNzM5IDgxLjIwNS0xNDIuNzM5IDgxLjIwMXoiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ "./public/page-data/sq/d/4192767499.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4192767499.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Techos y Mantenimientos"}},"menu":{"menuItems":{"nodes":[{"label":"Inicio","url":"/","parentId":null,"id":"cG9zdDo5NjU=","childItems":{"nodes":[]}},{"label":"Productos","url":"/productos/all-products/","parentId":null,"id":"cG9zdDoxMDQ5","childItems":{"nodes":[]}},{"label":"Portafolios","url":"/portafolios/all-proyects/","parentId":null,"id":"cG9zdDoxMDU2","childItems":{"nodes":[]}},{"label":"Documentación","url":"/blog/all-posts/","parentId":null,"id":"cG9zdDoxMDE2","childItems":{"nodes":[]}},{"label":"Contacto","url":"https://wa.link/szvz94","parentId":null,"id":"cG9zdDoxMDE4","childItems":{"nodes":[]}}]}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-wp-page-link-js.js.map