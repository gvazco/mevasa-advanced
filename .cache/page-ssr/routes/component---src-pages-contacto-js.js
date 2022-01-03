"use strict";
exports.id = "component---src-pages-contacto-js";
exports.ids = ["component---src-pages-contacto-js"];
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

/***/ "./src/pages/contacto.js":
/*!*******************************!*\
  !*** ./src/pages/contacto.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contacto)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ "./src/components/Layout/Layout.js");
/* harmony import */ var _components_SidebarMessage_SidebarMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SidebarMessage/SidebarMessage */ "./src/components/SidebarMessage/SidebarMessage.js");
/* harmony import */ var _components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BreadCrumb/BreadCrumb */ "./src/components/BreadCrumb/BreadCrumb.js");


 //Components




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contacto__Wrapper"
})(["max-width:1180px;margin:0 auto;padding:20px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "contacto__ContentWrapper"
})(["display:block;@media (min-width:992px){display:flex;}"]);
const PageContent = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].article.withConfig({
  displayName: "contacto__PageContent"
})(["margin-top:50px;width:100%;@media (min-width:992px){margin-left:20px;}.contact{background-color:#221e3f;}form{width:100%;margin:0px auto;}form label{font-size:1.2rem;}e form h1{text-align:center;}input,select,textarea{width:97%;padding:1.5rem;margin-bottom:1rem;border:0.1rem solid black;outline-color:#fd57bf;font-size:1.5rem;}fieldset{border:none !important;}select#service{width:100%;}input[type=\"submit\"]{width:initial;background-color:#fd57bf;color:#eee;padding:1rem 2rem;border-radius:0.8rem;cursor:pointer;transition:background-color 650ms;}input[type=\"submit\"]:hover{color:#221e3f;background-color:#ffe838;}.image-icon-whatsapp{bottom:20px;right:20px;cursor:pointer;transition:all 0.2s;position:absolute;top:85%;left:50%;transform:translate(-50%,-50%);width:12rem;text-align:center;z-index:1;}.formulariowtsp{width:90%;margin:50px auto;border-radius:5px;position:relative;bottom:65px;box-shadow:0 2px 20px 0 rgba(0,0,0,0.22);background:rgba(255,255,255,0.1);padding:20px;}.inputwts{width:100%;box-sizing:border-box;padding:5px;margin-top:20px;margin-bottom:10px;font-family:\"Teko\",Arial,Helvetica,sans-serif;font-size:13px;border-radius:5px;border:1px solid rgba(0,0,0,0.19);color:#666;}.inputwts:focus{outline:none;}.textareawts{width:100%;min-width:100%;box-sizing:border-box;height:140px;max-height:140px;min-height:140px;font-family:\"Teko\",Arial,Helvetica,sans-serif;font-size:13px;border-radius:5px;padding:5px;border:1px solid rgba(0,0,0,0.19);color:#666;}.textareawts:focus{outline:none;}.newmessagewts{font-family:\"Teko\",Arial,Helvetica,sans-serif;display:block;text-align:center;width:100%;box-sizing:border-box;line-height:10px;color:black;}.btnwtsp{position:relative;display:inline-block;width:100%;border:none;padding:12px 36px;letter-spacing:2px;margin-top:10px;color:white;cursor:pointer;font-size:1.5rem;font-family:\"Teko\",Arial,Helvetica,sans-serif;animation:pulse 3s infinite;border-radius:40px;background:linear-gradient(90deg,#f26e3b,#d22e26);}#icon-wts:hover{color:white;}.btnwtsp:hover{background:linear-gradient(90deg,#d22e26,#f26e3b);}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(242,110,59,0.99);}70%{box-shadow:0 0 0 2rem rgba(242,110,59,0);}100%{box-shadow:0 0 0 0 rgba(242,110,59,0);}}"]);
function contacto() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_5__.StaticImage, {
    src: "../images/archive_headerimage.png",
    placeholder: "TRACED_SVG",
    layout: "constrained",
    width: 1920,
    height: 300,
    alt: "Blog Image Post",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1861016386.json */ "./.cache/caches/gatsby-plugin-image/1861016386.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
    parent: {
      uri: "/contacto",
      title: "envía un mensaje por WhatsApp"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SidebarMessage_SidebarMessage__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageContent, {
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    id: "formulariowtsp",
    action: "",
    className: "formulariowtsp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Estamos a tu alcance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      display: "none"
    },
    href: "https://api.whatsapp.com/send?phone=5215581853675&text=hola%20gustavo"
  }, "Envia un mensaje via WhatsApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "contactName"
  }, "Nombre ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "required"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Ingresa tu nombre...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "contactEmail"
  }, "Email ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "required"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Ingresa tu correo electr\xF3nico...",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "contactMessage"
  }, "Mensaje ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "required"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "subject",
    id: "subject",
    cols: "10",
    rows: "10",
    placeholder: "Ingresa tu mensaje aqu\xED..."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    id: "sendbttn",
    className: "btnwtsp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fab fa-whatsapp",
    id: "icon-wts"
  }), " ENVIAR"))))))));
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

/***/ "./.cache/caches/gatsby-plugin-image/1861016386.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1861016386.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'1920\'%20height=\'300\'%20viewBox=\'0%200%201920%20300\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2066c0%2074%200%2073%206%2074l6%203c2%203%208%205%2022%2010%2011%204%2014%203%208%200l-2-3c2-1-3-3-6-2-4%200-7-2-5-5h11c5%200%206%200%208%202l7%202c4%201%204%201-5-5l-9-6%2015%207c11%207%2014%208%2017%207%202%200%203%200%203%202%201%201%201-6%201-15v-16H61c-15%200-17-1-19-2-4-5%204-6%2031-7%204%200%204%200%204-3v-3l-33%201a378%20378%200%2000-39%200c-2-1-3-4%200-4a488%20488%200%200169-3%201985%201985%200%200187-3c-18-3-29-7-22-7l6-1%204-2c4%200%205-1%205-9v-7c2-1%202%202%202%208%200%205%200%206%202%205l2-4c0-2%200-2%201-1%202%202%209%201%209-1%200-3%201-5%203-5l1%204%201%204c1%201%201%200%201-1v-2l1%202c1%201%202%202%205%202h4l1-4c0-3%201-4%203-4l4%201h4c3-1-8-3-24-5h-4l-11-2-12-2c-2-1%2014-1%2038%202h16c-8-3-5-3%209-3h15l40-1a29224%2029224%200%2000265-2h68l-1-23a2282%202282%200%2000-1-37c0-2%200-2-18-2-17%200-19%200-19%202-1%201-1%202-4%201-2%200-3-1-3-2h-51L250%200H0v66M629%203l-2%204v2l2%202-2%204c-1%202-1%202%201%202%202-1%202-1%201%202l-2%205c-1%202-1%203%201%204s2%202%201%203l-1%202-4%202-4%201%203%201c5%200%206%200%205%204%200%203-1%203-4%203s-4%200-4%202l1%201c1-1%207%200%207%201v3c1%202-3%204-6%202h-3c-1%202%201%203%204%203%205-1%2010%204%206%205-4%202%202%202%2017%203l20%201%2032%201a3181%203181%200%2001148%206%2091368%2091368%200%200174%203h19V62c0-3%200-3%203-3h3l-1%208%201%208%201-13c0-3%200-3%203-3s3%200%203%204l1%203%201-3c0-4%200-4%203-4h3v8c0%208%201%2011%201%203l2-5v-2c-3-2%200-5%204-4%202%200%203%205%201%205v2l1%206-1%205%201-6%202-5v-9l1-14v-4h26l26%201-1%205-2%2014-2%202-1-2V44l-1%206c-1%205-1%206-3%207l-2%201h2l2%201-3%201c-3%201-3%200-3-6%200-4-1-3-1%200%200%202-1%203-3%203-2%201-2%201%200%201s2%203%200%203c-1%200-2%200-2%202-1%201-1%201-1-1l-1-4c1-1%200-2-4-1-2%201-2%201%200%201s3%201%202%2011v8h4l7%201a1014%201014%200%200048-1h-5l-1-9c0-8%200-9%202-9l2-1-2-1c-2%200-3-2%200-3v-1l-2-3-1%201v4l-1%202v1c2%203%200%2019-2%2019s-2-1-2-9l1-10v-1l-1-2c1-5%200-10-1-10l-1%203v4l-1-4c-1-3%200-7%201-7l1%201v1l1-2%2012-1h23v5c0%209-1%2012-4%2012-2%200-2-1-3-5%200-7-1-8-1-2l-1%207v12c-1%208%200%2012%202%209h11l2%201h3l6%201c6%200%207%200%207-2%201-3%203-3%203%200%201%202%203%203%203%201%200-1%201-2%203-2l2%202%202%201%201-2%202-2%201%202%202%202%201-2c0-2%205-2%205%200%201%203%202%203%203%200%200-3%203-3%203%201%200%203%202%202%203-1l2-2%202%201v2c0%203%203%202%204-1%201-4%203-4%203%200%200%202%200%203%202%203l1-3c0-2%201-3%202-3l1%203c0%202%201%203%202%203l1-3c0-3%200-3%202-3l2%201%201%203%202%202%201-2%201-4v-2c-2-1-2-2%200-3v-4c-2-2%200-11%202-9l1%2012c-1%2011%200%2015%202%2012V68l1-11V35l-2-2v2c-2%204-4%200-4-6s2-10%204-8h2c3-2%204%202%203%2019-1%2022-1%2041%201%2041l1-3c0-4%200-4%203-3h11c2-2%200-4-2-3s-5%201-6-1l2-2%202-1-2-1c-1%200-2%200-2-4-1-4-1-4-1-1l-1%205v3c1%202%200%203-3%203V31c0-9%201-11%204-9h4c3-2%203-2%204%200s4%200%204-2c0-3-3-4-4-2h-3l-4-1c-3%201-5-1-5-4%200-2%200-2-1%201s-2%204-5%204l-5-2h-3l-5%201h-3c-1%201-9%201-10-1h-3c-2%202-3%202-4%201-3-2-5%201-4%204v13c0%202-3%203-4%200l-1%201h-8l-10%201c-10%200-10-1-9-9V12l1-12h-9c-6%200-8%200-7%201%201%202%200%2015-1%2017v16c0%204-4%204-5%201-1-2-1-2-1%200s-2%203-5%202h-9c-2%201-20%201-21-1h-2c-1%201-1%200-1-4%200-5%200-6%201-5s2%201%202-1c1-2%200-3-2-2l-1-2c0-2%200-2%201-1%202%201%203%200%203-2s-1-2-2-2c-2%201-2%200-2-7V1l-10-1h-10v9a734%20734%200%2000-2%2028h-46c-4%200-5-1-4-10l-1-3-1%206c0%206-1%207-3%207s-3%200-4-2l-1-2v2c-1%203-7%203-7%200%200-2%200-2-1%200s-2%202-7%202l-7-1-1-10V15l-1-5V3l2-3H664l1%2025a513%20513%200%20000%2032l-2%206-9-1-9-1-1-11-1-12V0h-14v3m629%204l-1%2010v4c2%202%201%2012-1%2014-2%201-2%202-1%203%203%202%203%2014%200%2015l-2%201%202%202c3%200%203%2011%200%2013-2%202-2%202-1%203s2%203%202%207l1%206h11v-6c1-9%203-9%204%200%201%207%202%206%202-1%200-5%201-5%203-5s3-1%203-2l-2-1c-3%201-4-1-4-10v-8l-1%208c0%208-1%2011-3%2010s-2-3-1-16l1-16v-2l-1-9%201-8V4l1-4h-13v7m58%201v27l-1%2026c0%205-2%2010-4%209h-8l-3%201h-2l7%201c6%200%207%201%207%202%200%203%202%204%209%203l7-1%201-38%201-38h-14v8m79-4l-1%206-2%209%201%208h3c10%201%2017-4%2010-6-4-2-4-4%200-6%203-2%203-2%201-4-3-2-4-3-4-7s0-4-3-4c-4%200-4%200-5%204m91%2011a615%20615%200%2001-4%2062c3%203%200%203-29%202-36-1-35-1-28%201l7%202%203%203c2%205%203%205%2035%206l29-1%202-3c2-1%203-2%203-5l1-6%202-2h23l24%201%201%207c0%207%201%209%204%209s4-3%205-19c0-17-1-20-5-20-3%200-5%202-5%206v3l-22-1c-27%200-26%200-26-11a505%20505%200%20015-46l2-1-1-2-1%201-1%201V1l-12-1h-12v15m85-6l-2%2047v38h12c9%200%2011%200%209-1-3-2-4-10%200-11v-1l-2-1V56l-1-3c-2%200-1-3%201-3a675%20675%200%200158-4l-54-2c-3%200-4%200-4-2s1-3%202-3c2-1%203-9%201-9l-1-2-2-1c-3%201-3-1%200-4l3-6V1l-11-1h-9v9m123-8l-1%2010-1%2010v21l-3%203-3%202%203%201%203%202v12a124%20124%200%2001-1%2021l1%205c0%205-1%206-3%207l-1%201%2012%201a790%20790%200%20004-89l1-8h-5l-6%201m29%2011a3031%203031%200%2000-1%2076l1-10%206%201%203%201c-3%200-3%200%202%202%206%201%206%201%207%206l1%205v1c-2%200-1%202%201%204%202%201%207%200%207-1%202-21-2-19%2039-19a1290%201290%200%200180%204c12%200%2014%201%2015%205l10%202c8%200%2013%201%2018%204%201%201%202%200%203-1%202-2%203-3%203-1v4c1%201%201-5%201-13V68h-12l-24-1a5118%205118%200%2000-129-3c-2-1-3-2-3-6V6l1-6h-7l1%205v12l-1%203c1%201%201%209-1%209s-1%204%201%204c1%201%201%2010-1%2013l-1%204v3l-1%205-2%206-3%204-3%204c-2%200-1-3%201-4l1-2-1-1-2%201-2%201c-2%200-2%201%200%206%200%202-4%205-6%204s-2-4%200-6c1-2%202-4%200-4l-1-1a819%20819%200%20011-66c-1%200-2%203-2%2012m-95-8v28h22c2-1%202-3%202-13%200-13%200-12%207-13l3-2c0-3-33-2-34%200m-480%2019c-2%205%200%2016%203%2012h2c2%202%203%200%204-6%200-7-1-9-4-7h-3c0-1-2-1-2%201m721%205v17h2c4%200%205-1%205-10%200-6%200-8-2-8-2-1-4-1-5%201m-671%204l-1%2021a629%20629%200%20012-11c1-5%200-13-1-10m-93%207a171%20171%200%20001%2036c2-1%203-16%201-18l1-1v-3c-2-3%201-5%204-3%202%202%202%202%200%203-1%201-1%201%201%202v3c-3%200-3%207%200%207%202%201%203%200%203-7l1-8c1-2%201-2%201%2013l1%2012%202-5%201-8-1-4v-3l1-1c-1-1%200-4%201-7l1-4v3c0%203%200%204%202%205%202%200%203%202%201%202-3%200-2%202%200%202%203%201%203%201%203-8v-8h-25m42%200l1%2016%203-10%201%204c2%209%203%208%203-3l1-7-4-1-5%201m-207%201l-1%209v8h11c2%200%202%200%203-9v-9h-6l-7%201m15%200l-1%209c0%207%200%208%203%208%203%201%204-1%204-4l1-3v4c0%203%200%203%204%203%203%200%203%200%203-3v-4l1-6v-4l-8-1-7%201m121%2019l-1%209v8h3c2%200%203-1%203-9%200-9%200-9-2-9l-3%201m535%204l-1%2011c0%2011%200%2012%207%2012%204%200%205-1%205-3l1-3v-3l-1-7-1-7h-10m-313%2016l-1%203c0%203%200%203%206%203h9c2%200%204-3%202-5-2-1-15-2-16-1M324%2094l1%203c1%200%202%201%201%202l1%202c2%200%204-2%204-4l2-2%201%201h2c3%200%205%202%204%203l-2-1c-1-1-1-1-1%202s0%203%203%203%204-1%202-3l-1-4c0-2-1-3-2-3l-8-1c-5%200-6%200-7%202m37%205c0%202%200%203%203%203%201%200%202%200%201-1l1-1%201%202c1%201%200%201-1%201-2%200-4%202-3%202l5%201%205%201v-3c0-4%202-5%202-1v3l1-3c1-2%201-2%202-1s0%202-1%203c-3%202-2%203%202%203%202%200%203-1%203-2l-1-1-1-3c0-4%200-4-13-6h-6v3m-191%202c0%201%200%202%202%201v1c0%201%202%202%209%203%2011%203%2037%204%2037%202l-25-5c-24-5-23-5-23-2m233%203c0%202%201%203%202%203%202%200%201%202-1%203s-2%201%204%201l6%201c3%201%203%201%203-3l1-4v4c0%204%203%207%205%204h1l2%201%201-1-1-2-1-4-1-4-4-1h-10l-7-1v3m-325%205c0%204-3%203%2034%202%2029-1%2034-2%2031-4l-33-1H78v3m376-2h-1l-1%206c0%203%200%204%201%202%200-2%200-3%201-2l1%203-1%202c1%201%204-3%204-5s3-4%204-2h2c2-2%204-1%203%200v2h1l1-1%201%202%202%202c1%201%201%200%201-2%200-1%200-2%201-1%202%201%201%204-1%205h-2l-1%201c0%202%204%202%205%201h2c0%202%203%201%203-1l-1-2-1-4c0-4-3-6-6-4h-2c-1-1-6-2-8-1h-1c0-2-3-1-4%202%200%203%200%203-1%202v-3l1-2h-3m-229%205c2%203%203%204%205%204a168%20168%200%200061%207c2-2%200-2-42-10-27-5-25-5-24-1m284%207v7l1-6%201-3%201%204v2c-2%203%200%204%202%202%201-1%202-1%202%201%201%202%203%201%204-2%201-2%201-2%201%200l1%203c7%201%207%201%207-4l1-4%201%204c0%204%200%205%203%205%203%201%204%200%204-7%200-6%200-6-3-6h-3c0-2-11-1-11%200h-1c0-4-3-2-4%202%200%203-1%203-2%201-2-1-2-1-1-2%203-2%202-3-1-3h-3v6m-415%201l-14%201-1%205v27c0%202%201%202%202%201%202%200%202%200%201%201l-2%203v1c-2%200-3%206-1%207%202%202%204-4%203-6-2-2%200-1%204%201s7%203%2013%203l10%202h4c2-1%203-1%203%201l6%203%206%203c3%201%203%201%203-1%201-2%201-2%204-1%202%200%203%200%204-2h11l1%207c1%205%201%206-2%209l-3%203-4-1c-5-2-7-2-5%200l-1%201c-1%200-1%201%201%202%201%202%201%202-1%201-3-1-6%200-7%201-2%201%205%207%208%207l9-2h3c4%200%205%200%206-2l1-2v2c0%202%200%202%201%201s2-2%201-3l2-1c2%200%203%201%203%202s1%201%206-1c5-3%2011-7%209-7v-2c-1%201-2%200-2-1l-1-3-1-3c1-1%204%202%204%204%201%204%205%203%2013-1l7-3-12%208v1l-1%201h-1v1c-3%200-5%201-10%204l-5%203h14l2-1%201-1h2v-1c-1%200-1-1%201-1v-2c-2%200-3-2-1-2%203%200%205%203%204%206a658%20658%200%20014-3l1-5%202%202%207%204c4%201%204%201%203%203-1%203-1%203%201%203%203%201%205%206%203%207l1%202%202-2%202-2%204-2c3-1%206%200%208%203%201%201%201%201%201-2l1-6c1-1%201-1%201%202%200%204%203%206%2011%207%205%200%207-1%208-2%202-2%202-2%203-1h2c1-3%203-1%204%203l1%2013c0%209%201%209%204%209l-1%204c-2%201-3%204-2%205%200%201-4%203-5%202v-3c3-3-4%201-16%208l-2%201%203%202c5%203%2033%202%2037-2%203-2%2010-1%209%201%200%202%203%203%203%200l5-1c4%201%2010%200%2011-2v-5l-1-3-2%202c-2%203-3%202-4-4%200-4-2-7-5-7l-1-3%201-4%201-2h1l4%201%202%201%202%201c2%200%203-3%203-9%200-3-1-3-4-3-2%200-3%200-2-2%201-1%200-1-3-2-6%200-10-3-12-8-3-5-5-6-8-2-4%205-5%205-9%201l-4-3c-3%200-3-3-2-5%202%200%202-1%201-2s-1-1%203-2c1-1-26-17-31-19-4-1-5-1-5%206%200%206%202%209%204%209l19%209c1%203-11%200-18-4h-5c-1%201-1%201-2-1l-2-2-3-1c-1-1-14-4-19-4-3%200-4-1-4-2v-1l-17-5c-15-4-15-4-17-8l-2-5c0-3%2011-5%2029-5%208%200%2011-1%2013-2v-1h-2c1-1-5-4-7-3l-4-1c-1-2-3-3-2-1l-1%201-1-2h-1l-1-1-17-1h-17v11c0%2013-2%2013-2%200v-10h-13l-26%201-1%201c-1-1-3%200-5%201-3%201-6%202-4%200%201-2%200-2-3-2-5-1-8-4-8-6%200-4%203-4%2018-5s16-1%2021-4l6-4H94m493%202l-1%204v5l2-3c1-3%201-3%202-2%200%203%200%206-2%206s-2%203%201%204c2%200%202%200%202-5l1-5v4c0%203%201%207%204%207v-4c-3-1-2-6%200-8l2-2v7c0%209%201%209%201-1l1-7h-3c-1-1-3%200-4%201h-2c0-2-3-3-4-1m-290%202l2%204c0%202%201%202%207%204l3-1h2l3%202%2017%203a261%20261%200%200032%206l22%201%2018%201%202%204%202%201a826%20826%200%200153%2010l5%201c4%202%2046%2010%2063%2012h20c16-1%2016-1%2018%201l2%205c-1%202%201%204%203%203a959%20959%200%200190%2015h4a1994%201994%200%2001121%2023c7%202%2017%203%2034%201%2026-2%2026-2%2030%202%203%203%204%204%203%206-2%205-1%206%208%206a414%20414%200%200179%2013l11%202a1483%201483%200%2001105%2020%201148%201148%200%200066%2012%202245%202245%200%200098%2017c8%202%2017%202%2054%202h45l-10-2a3505%203505%200%2000-132-23%2013700%2013700%200%2000-303-53l-33-6a23453%2023453%200%2001-536-93c-11-2-11-2-8%201m310%207c0%207%200%207%203%207%202%200%202%200%202-3%200-7%202-9%202-2%200%206%200%206%202%206%203%200%203%200%203-8v-7l-1%206-1%205-1-6-1-5-1%201h-1l-4-2c-2%200-2%201-2%208m64%200c-2%203-1%2014%202%2015%202%202%204-1%204-7v-5l1%206c0%206%201%207%203%207%204%200%204-3%201-4s-3-7%200-7l2-3c1-2%200-2-2-2l-3%201-1%201-1-1c0-2-4-3-6-1m15%202v15l1-7%201-7v7c0%208%202%2010%202%202%200-5%200-6%202-6l1%206%201%206%201-8c0-8%200-9-2-9-1-1-3%200-4%201h-1c0-2-2-2-2%200m11%201l-1%208c0%206%200%207%203%207%203%201%204%200%204-8%200-7%200-8-2-8-3-1-4-1-4%201m-575%207c-3%202%204%206%2016%209a327%20327%200%20018%201l-1-2-3-2c-2-2-19-8-20-6m654%202c-2%203-2%2012-1%2015%201%202%205%203%206%201%202-2%202-16%201-17-2-2-5-1-6%201m9%201v16l4%201c3%200%203-5%200-5-3-1-3-8%200-8%202%200%203-1%203-3%200-3%200-3-3-3l-4%202m13%200l-2%209%201%209c2%200%202-1%202-6%200-6%200-7%202-7l1%207c0%206%200%207%202%207l1-9-1-10-4-1-2%201m9%202l-1%209v8l3%201c5%200%206%200%206-7l1-5%201%205v7h8v-18c-1%200-2%202-2%207s0%206-2%206-2%200-1-7c0-8-1-10-3-4l-1%204v-4l-2-3-4-1c-1%200-2%200-3%202m57%202c0%202%2022%205%2023%203h21l-5-1-8-1a523%20523%200%2000-31-1m33%207c-2%203-1%2010%202%2011%203%202%203%204-1%204s-3%204%202%205c4%200%205-1%205-6%200-4-1-6-4-7s-3-3%201-3c2%200%203-1%203-2%201-3%200-3-3-3l-5%201m11%202c-2%203-3%2015-1%2017s8%203%209%202c1-2%202-17%201-19-2-3-7-3-9%200m-841%200v1l-4%202c-3%200-4%201-3%202v2l2%201%202%201c-1%202%204%203%209%202%204%200%204%200%204-5l-1-4c-5%202-5%202-3%200s2-2%200-2l-4-1-2%201m853%200l-1%2010c0%2010%201%2011%206%2011%203%200%203%200%203-3%200-2-1-3-2-3-2%200-3-1-3-5s0-4%203-4%203%200%203-3c0-4%200-4-4-4l-5%201m16%202l-1%2011c0%208%200%209%202%209s2-1%202-8c0-6%200-7%202-7%201%200%202%202%202%208s0%208%202%208l1-4%201-10c0-7%200-8-6-8-4-1-5-1-5%201m13%201l-1%2011v10h5c6%201%206%200%207-9%200-12%200-13-6-13l-5%201m13%201l-1%209c0%2010%201%2013%208%2013h4v-6l1-11c0-5%200-5-2-5s-3%203-3%2011c0%203%200%204-2%204-2-1-3-5-1-12%201-4%201-4-1-4l-3%201M2%20162a865%20865%200%20001%2038l11-7%2014-7-19%2012c-3%201-5%203-5%204l19%2012a668%20668%200%2001-1%202L3%20204l-1%204-1%2033%201%2039v9l6-4c11-5%2011-4%201%202l-6%204%207%204%207%205h106l-5-4a1462%201462%200%2000-41-32l-1-7-2%202c-1%201-5%200-6-2s-2-2-5-1c-2%200-2%200-1-1s-1-5-3-5-9-8-9-9l-2-2c-2%200-3%200-3-3v-3l5%203h1l1%201v1c1%200%2011%206%2013%209%203%203%205%203%208%201l3-1-3-2a466%20466%200%2000-3-4l1-3c-1-2-1-4%201-7l2-3-2-2-2-3c0-2-2-1-2%201-1%203-2%201-6-8-1-4-2-5-4-6-1-1-2-1-1-2l15%207%205%203v-6c0-4%200-6-1-5l-1-1-1-3-2-2-4-3-6-3-4-3-17-10c-1-1-2%200-7%202-7%203-7%202-2-2l4-2-2-1-3-2-1-1a257%20257%200%2001-28-14m242%201l18%2010%2016%209%204-1c2-2%204-2%204-1h2c1-2%202-2%205-1h12c2%200%203-1%203-3l-1-2c-1%202-3-1-2-3l-1-3-2-2-1-1-12-1-36-3c-11%200-11%200-9%202m-23%202c-6%203-8%205-4%205l12%203c2%201%203-4%202-8%200-4-3-4-10%200m804-1c-3%203-3%203%206%203l20%202%206-1%205-2h-3a483%20483%200%2000-34-2m36%208l-1%2013c0%209%200%2010%202%2010s2%200%202-7l1-12c1-6-2-9-4-4m7%202c-4%204-2%2011%203%2012%204%201%204%204-1%204-3%200-3%200-3%203%200%202%201%203%205%203%205%200%206%200%206-6%201-5-1-8-4-9l-3-2c0-2%200-2%203-2%204%201%204%201%205-2s1-3-4-3c-4-1-5%200-7%202m15%200c-2%201-3%206-3%2013%200%208%201%2010%208%2011%207%200%207-1%207-14v-10l-5-1-7%201m16%202c-2%202-2%204-2%2012%200%2010%200%2011%208%2012h5v-3c0-3%200-4-4-5-3%200-3-1-3-5v-4h3c4%200%204-1%205-4%201-4%202-4-5-4-4-1-5%200-7%201m14%203l-1%2012c0%2010%200%2010%202%2010%203%200%203%200%203-11l1-12c1-2%201-2-1-2s-3%201-4%203m7%200v13c0%209%200%2010%202%2010s2%200%202-7c0-9%201-11%203-10%202%200%202%200%202%2010%200%208%200%208%202%208%203%200%204-3%204-16%200-10%201-9-9-10-5-1-5-1-6%202m18%201l-1%2013v11h7c8%201%208%201%209-12%200-13%201-12-9-13-5-1-6-1-6%201m18%202v22l5%203%207%201h3v-12l1-13c0-1%200-2-2-2-3%200-4%202-4%2011v7h-3c-2%200-2-1-2-7v-9c1-3%201-3-2-3-2%200-3%201-3%202m83%203v3c0%202%201%202%207%202h8l8%201%207%201%202%202c2%200%202%200%201-1-2-1-1-1%202-1l6%201%203-1c4-2%2011-3%2013%200%202%201%208%201%2010-1l-17-2a2145%202145%200%2001-50-4m54%2010l-1%2015v13l2%201%204-1c1-1%202-28%200-28l-2-1-3%201m11%203c-4%206-1%2016%204%2016%203%200%205%202%204%204l-5%201-5-1v3c0%203%201%204%207%204%208%202%2010%200%2010-8%200-6-2-9-5-9s-5-1-5-3%200-2%205-2c5%201%205%201%206-2%200-4%200-4-8-5-6%200-7%200-8%202m20%202c-2%202-2%203-2%2013%200%2014%201%2014%2010%2016%2010%201%2011%200%2011-18%200-11%200-12-10-13-6%200-7%200-9%202m24%202c-2%203-2%204-2%2014%200%2014%201%2014%2010%2015%208%201%208%202%208-3v-4l-4-1c-6-1-7-2-6-7%201-6%201-6%206-6l5%201%201-4c0-5%200-6-8-6-7-1-7-1-10%201m21%202l-1%2015v13l3%201%203%201v-7l1-16%201-8-4-1c-2%200-3%200-3%202m10%201l-1%2015v13l2%201c5%201%205%201%205-9s1-11%205-11l3%201v21h6l2-28c-2-4-21-7-22-3m-1069%209l1%208%202%201%202%201%204%203%206%204%203%203c0%201%205%207%207%207l2-2c2-2%2010-3%2010-1l1%201h1l1%202%201-1v-1l2%201%202%201c1-1%202%200%203%201l3%201%203%202%205%203%204%203c0%201%202%201%207-2l5-3-3-1-3-3%204%201c3%202%203%202%203%200h5l3-1-2%202c-4%202-4%202%204%207a1026%201026%200%200136%2020c3%201%205-1%205-4%200-2%200-2%207-2%2011%200%2018%201%2018%203l1-3c0-4%201-1%201%209l1%2015v4l-1%204%201%203h30c31%200%2032%200%2029-4-1-1-1-1%201-3%203-3%204-3%205%202%201%203%203%204%205%202%200-1%201-2%203-2l2-4c0-1%200-2%201-1l1%205v5h38l37-1c0-1-7-2-9-1-1%200-2%200-1-1a1090%201090%200%2001-34-11%20137%20137%200%2001-31-7l-2-1c-1-1-4-3-8-3l-9-4-6-2-4-3-2-1-3-3c-2-4-8-11-10-11l-5%204c-6%206-11%206-15%202-4-5-12-6-14-2l-1%201c0-3-3-4-28-11a261%20261%200%2001-30-9h-2v-2l-15-4h-3a277%20277%200%2000-62-19l-10-4-3-1v8m1094%200c-2%2024-2%2023%2011%2025%2010%200%2011%200%2011-11%202-19%201-20-13-22h-9v8m27-4l-1%2015c0%2015%200%2015%2011%2017%2013%202%2012%203%2012-12l2-16c0-3%200-3-4-3-4-1-4-1-5%2010%200%2012%200%2012-5%2011-4%200-4-1-3-13l1-10c-2-1-7-1-8%201M79%20212c-2%205%200%207%2010%2013%2012%206%2013%207%2017%205%203-3%203-3-2-6-13-7-22-13-22-14%200-2-3-1-3%202m1452%202l10%202c15%202%2016%202%2013%204-5%203%2010%208%2017%205h5c1%202%202%202%204%202%202-1%203-1%202%201h5c0%201%206%201%207-1l3%201%205%201%202%201h3l3%201c-2%202%204%201%2010-2%208-4%2015-4%2020-1%203%202%204%202%208%201h7a3706%203706%200%200065%206c32%204%2030%203%2034%205%202%202%204%202%2011%201l26%202a2583%202583%200%200064%207l17%201a443%20443%200%2000-41-5%203005%203005%200%2000-128-14%207266%207266%200%2001-119-13l-53-5M107%20231c-2%200-3%202-2%202a309%20309%200%200043%2026c5%203%206%203%206-2%200-4-3-7-11-10l-11-8-2-5-3-3-1-2-3%202-3%202-4-2c-5-2-6-2-9%200m1530%201l-3%2021v14h4l5%201%201-15a107%20107%200%20012-20l-9-1m15%204c-8%208-3%2020%207%2020%203%200%206%202%205%205h-15v4c0%204%200%204%2013%206%2010%200%2012-2%2012-11%200-8-2-10-9-12-4%200-6-1-6-3s1-3%208-2c6%201%207%201%208-1v-2c2-4%200-5-7-5-11-1-14-1-16%201m30%204c-2%202-3%204-3%2011-2%2020-1%2021%2013%2023%2017%203%2017%202%2019-18%200-16%201-16-12-18-12-2-14-1-17%202m36%204c-3%203-3%203-3%2022-1%2010%201%2011%2015%2013%2013%202%2013%202%2013-4%200-5%200-5-9-6-8-1-9-3-7-10l1-5h16l1-5%201-6-22-2-6%203m32%202c-2%204-2%208-2%2021v15h9l2-16%202-17c1-4%200-5-6-5-4%200-5%200-5%202m15%201l-2%2020v17h10l1-12c1-14%201-14%207-13s6%201%206%2015v12l6%201%205%201v-12l1-16c1-9-2-11-16-13l-14-2c-3%200-3%200-4%202M78%20251c0%204%200%203%2021%2017l41%2029c1%201%207-2%207-3l-7-5-11-8-5-4-11-7-34-22-1%203m310%205l1%2010%201%202c0%203%204%206%206%204%203-2%203-4%201-7l-1-3%201-3c0-2%200-2%202-2a341%20341%200%2001-8-7l-3-2v8m1301-5v7c0%204%201%205%204%205%205%202%206%201%207-6%200-6-1-8-6-8-3%200-4%200-5%202m116%201c-2%206-2%2011-2%2023v14l14%201c21%203%2021%203%2023-18%201-18%201-19-16-21s-19-1-19%201m-1649%207c0%204%200%205%202%205l11%207c10%205%2010%205%2013%204l3-3c1-1-9-7-20-13l-7-4c-2-1-2-1-2%204m1691-4c-1%201-2%206-3%2020%200%2014%201%2017%206%2019l30%204%202-16%202-19c1-5%202-5-6-6-7%200-7-1-8%2016v12l-5-1h-7v-21l1-7c-2-2-12-2-12-1m-31%209l-1%207c-1%207%200%208%207%208h5v-7l-1-7c-1-2-10-2-10-1m-1274%208l5%203%2012%203a117%20117%200%200031%208l23%205c2%200%202%200%201-2h1c3%200%203%200%203-3l-1-8c0-5-2-7-3-3l-7-1h-9c-3%201-4%203-2%203l17%2011-8-4-19-9h-2v1l-3%201v-1c2-2%200-3-2%200h-5l-8-1h-5c-1-2-1-2%202-2l3-1-5-1c-8%201-8%201-7%202h-5c-3-2-7-2-7-1m98%200v1h-7l-7%201c-5%201-6%201-6%204v11l17-11%204-2v-4h-1m-456%203l-3%202a1335%201335%200%200045%2023c9%200%207-2-10-12l-21-12c-6-4-6-4-11-1m469%201l-6%201c-3%201-24%2011-27%2014-1%201%209%204%2017%205l12%203%2025%201h21l-1-9-1-9h-2l-2%202c-1%201-1%200-1-3l-1-4-1%201v1l-2-1h-2c0%202-2%201-2-1h-6c-6-1-18-2-21-1m46%206v1c-1-6-3%200-3%209v8h59l7-4c8-5%209-6%206-6l-3-1h-1l-1-1h-4c-2%202-5%202-4%200l-1-1-2%201h-2c-3-2-7-1-9%201l-2%203v-3c1-2%200-3-2-1h-2l-1-1-2-1-3%201c0%203-3%201-3-3l-2-2v2c0%202%200%202-2%202l-2-2c0-2-2-4-3-2l-5%201-4%201-4%201-3%201v-4l-1-4-1%204m80%207v1h-2l-1%201%201%201h1l7%204%206%204h26c17%200%2025%200%2023-1l-22-1-20-1%202-1v-1l-2-1-12-1c0-2%200-2-1-1h-1c1-2%201-2-1-1l-3%201%201-2c2%200%202%200%201-1h-3\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e"},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/9a4c09e699479b3cd25da9dff2a8b484/e6349/archive_headerimage.png","srcSet":"/static/9a4c09e699479b3cd25da9dff2a8b484/35964/archive_headerimage.png 750w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/52960/archive_headerimage.png 1080w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/1534b/archive_headerimage.png 1366w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/e6349/archive_headerimage.png 1880w","sizes":"(min-width: 1880px) 1880px, 100vw"},"sources":[{"srcSet":"/static/9a4c09e699479b3cd25da9dff2a8b484/79f6a/archive_headerimage.webp 750w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/d2ed4/archive_headerimage.webp 1080w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/14a45/archive_headerimage.webp 1366w,\\n/static/9a4c09e699479b3cd25da9dff2a8b484/f1dba/archive_headerimage.webp 1880w","type":"image/webp","sizes":"(min-width: 1880px) 1880px, 100vw"}]},"width":1920,"height":300.25531914893617}');

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
//# sourceMappingURL=component---src-pages-contacto-js.js.map