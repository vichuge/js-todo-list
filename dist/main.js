/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".list-group-item {\r\n  color: white;\r\n  background-color: black;\r\n  border: 1px solid white;\r\n}\r\n\r\n.bgreen {\r\n  background-color: green;\r\n}\r\n\r\n.byellow {\r\n  background-color: #ffc107;\r\n}\r\n\r\n.bred {\r\n  background-color: red;\r\n}\r\n\r\n.twhite {\r\n  color: white;\r\n}\r\n\r\n.form-select {\r\n  width: auto;\r\n}\r\n\r\n#liclickable {\r\n  cursor: pointer;\r\n}\r\n\r\n#error {\r\n  color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ","sourcesContent":[".list-group-item {\r\n  color: white;\r\n  background-color: black;\r\n  border: 1px solid white;\r\n}\r\n\r\n.bgreen {\r\n  background-color: green;\r\n}\r\n\r\n.byellow {\r\n  background-color: #ffc107;\r\n}\r\n\r\n.bred {\r\n  background-color: red;\r\n}\r\n\r\n.twhite {\r\n  color: white;\r\n}\r\n\r\n.form-select {\r\n  width: auto;\r\n}\r\n\r\n#liclickable {\r\n  cursor: pointer;\r\n}\r\n\r\n#error {\r\n  color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/AllProjects.js":
/*!****************************!*\
  !*** ./src/AllProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class AllProjects {
  constructor() {
    this.list = [];
  }

  addElement(elem) {
    this.list.push(elem);
  }

  deleteElement(title) {
    for (let i = 0; i < this.list.length; i += 1) {
      if (this.list[i].title === title) this.list.splice(i, 1);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProjects);


/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(title = 'default', description = 'default project') {
    this.title = title;
    this.description = description;
    this.list = [];
  }

  addElement(elem) {
    this.list.push(elem);
  }

  deleteElement(title) {
    for (let i = 0; i < this.list.length; i += 1) {
      if (this.list[i].title === title) this.list.splice(i, 1);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority, check) {
    this.title = title;
    this.desc = description;
    this.date = dueDate;
    this.priority = priority;
    this.check = check;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./src/object.js");


const nothing = (n) => n;

const changeCheck = (project, titleProject) => {
  for (let i = 0; i < project.list.length; i += 1) {
    if (titleProject === project.list[i].title) {
      let chk = project.list[i].check;
      if (chk === true) {
        chk = false;
      } else {
        chk = true;
      }
    }
  }
  const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_0__.default)();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
};

const lists = {
  createProjectsList() {
    const { list } = (0,_object__WEBPACK_IMPORTED_MODULE_0__.default)();
    const ul = document.getElementById('projectsList');
    ul.innerHTML = '';
    const li1 = document.createElement('li');
    li1.classList.add('list-group-item');
    li1.innerHTML = 'All projects';
    li1.id = 'liclickable';
    li1.addEventListener('click', () => { this.createTodoList(); });
    ul.appendChild(li1);
    const mappy = list.map((project) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = project.title;
      li.id = 'liclickable';
      li.addEventListener('click', () => { this.createTodoList(project); });
      ul.appendChild(li);
      return ul;
    }).join('');
    nothing(mappy);
  },
  createTodoList(tasks = 'default') {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    const todoTask = document.createElement('ul');
    todoTask.classList.add('todoTask');

    if (tasks !== 'default') {
      runList(todoTask, tasks, tasks);
    } else {
      const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_0__.default)();
      for (let i = 0; i < allProjects.list.length; i += 1) {
        runList(todoTask, allProjects.list[i], tasks);
      }
    }
    row.appendChild(col, tasks.list);
    col.appendChild(todoTask);

    const title = document.createElement('h2');
    if (typeof tasks.title === 'undefined') {
      title.innerHTML = 'All projects';
    } else {
      title.innerHTML = tasks.title;
    }

    container.appendChild(title);
    container.appendChild(row);
  },
};

const editTask = (myTask, nextList) => {
  const title = document.getElementById('titleEdit').value;
  const description = document.getElementById('descriptionEdit').value;
  const dueDate = document.getElementById('dateEdit').value;
  const priority = document.getElementById('prioritySelectEdit').value;

  const errors = document.getElementById('error');
  errors.innerHTML = '';
  if (title === '') {
    errors.innerHTML += 'Title can\'t be blank';
    return;
  }
  if (description === '') {
    errors.innerHTML += 'Description can\'t be blank';
    return;
  }
  if (dueDate === '') {
    errors.innerHTML += ' Date can\'t be blank';
    return;
  }

  myTask.title = title;
  myTask.desc = description;
  myTask.date = dueDate;
  myTask.priority = priority;

  document.getElementById('titleEdit').value = '';
  document.getElementById('descriptionEdit').value = '';
  document.getElementById('dateEdit').value = '';
  document.getElementById('closeEdit').click();
  lists.createTodoList(nextList);
  const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_0__.default)();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
};

const updateTask = (project, titleTask, list = 'default') => {
  const titleEdit = document.getElementById('titleEdit');
  const descEdit = document.getElementById('descriptionEdit');
  const dateEdit = document.getElementById('dateEdit');
  const priorEdit = document.getElementById('prioritySelectEdit');

  for (let i = 0; i < project.list.length; i += 1) {
    if (titleTask === project.list[i].title) {
      titleEdit.value = project.list[i].title;
      descEdit.value = project.list[i].desc;
      dateEdit.value = project.list[i].date;
      priorEdit[0].removeAttribute('selected');
      priorEdit[1].removeAttribute('selected');
      priorEdit[2].removeAttribute('selected');
      for (let j = 0; j < priorEdit.length; j += 1) {
        if (project.list[i].priority === priorEdit[j].value) priorEdit[j].setAttribute('selected', '');
      }
      const btnEdit = document.getElementById('updateTaskModal');
      btnEdit.addEventListener('click', () => { editTask(project.list[i], list); });
    }
  }
};

const deleteTask = (project, titleProject, list) => {
  for (let i = 0; i < project.list.length; i += 1) {
    if (titleProject === project.list[i].title) {
      project.list.splice(i, 1);
    }
  }
  const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_0__.default)();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
  if (list === 'default') {
    lists.createTodoList();
  } else {
    lists.createTodoList(project);
  }
};

const runList = (todoTask, tasks, nextList) => {
  const mappy = tasks.list.map((task) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    switch (task.priority) {
      case 'Low':
        li.classList.add('bgreen');
        break;
      case 'Medium':
        li.classList.add('byellow');
        break;
      case 'High':
        li.classList.add('bred');
        break;
      default:
    }

    const div1 = document.createElement('div');
    div1.classList.add('row');

    const div2 = document.createElement('div');
    div2.classList.add('col-12');
    div2.classList.add('d-flex');
    div2.classList.add('justify-content-between');

    const input1 = document.createElement('input');
    input1.classList.add('form-check-input');
    input1.classList.add('me-1');
    input1.type = 'checkbox';
    input1.addEventListener('click', () => { changeCheck(tasks, task.title); });
    if (task.check === true) input1.setAttribute('checked', '');

    const h5 = document.createElement('h5');
    h5.classList.add('mb-1');
    h5.innerText = task.title;

    const p = document.createElement('p');
    p.innerText = task.desc;

    const small = document.createElement('small');
    small.innerHTML = task.date;

    const button2 = document.createElement('button');
    button2.classList.add('btn');
    button2.classList.add('btn-primary');
    button2.type = 'button';
    button2.innerHTML = 'Edit';
    button2.setAttribute('data-bs-toggle', 'modal');
    button2.setAttribute('data-bs-target', '#exampleModal3');
    button2.addEventListener('click', () => { updateTask(tasks, task.title, nextList); });

    const input2 = document.createElement('button');
    input2.classList.add('btn');
    input2.classList.add('btn-primary');
    input2.type = 'button';
    input2.id = 'deleteid';
    input2.innerHTML = 'Delete';
    input2.addEventListener('click', () => { deleteTask(tasks, task.title, nextList); });

    div2.appendChild(input1);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(small);
    div2.appendChild(button2);
    div2.appendChild(input2);
    div1.appendChild(div2);
    li.appendChild(div1);
    todoTask.appendChild(li);
    return todoTask;
  }).join('');
  nothing(mappy);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lists);


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./src/object.js");





function emptyInputs() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';

  document.getElementById('title2').value = '';
  document.getElementById('description2').value = '';
}

const closeModal = () => {
  document.getElementById('close').click();
};

const closeModal2 = () => {
  document.getElementById('close2').click();
};

const funcs = {
  addTask(allProjects) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('prioritySelect').value;
    const projectName = document.getElementById('projectsSelect').value;

    const errors = document.getElementById('error');
    errors.innerHTML = '';
    if (title === '') {
      errors.innerHTML += 'Title can\'t be blank';
      return;
    }
    if (description === '') {
      errors.innerHTML += 'Description can\'t be blank';
      return;
    }
    if (dueDate === '') {
      errors.innerHTML += ' Date can\'t be blank';
      return;
    }

    if (projectName === '') {
      errors.innerHTML += 'Create a project first';
      return;
    }

    const elem = new _Task__WEBPACK_IMPORTED_MODULE_0__.default(title, description, dueDate, priority, false);
    let project = '';
    for (let i = 0; i < allProjects.list.length; i += 1) {
      if (allProjects.list[i].title === projectName) {
        project = allProjects.list[i];
        project.addElement(elem);
      }
    }
    _list__WEBPACK_IMPORTED_MODULE_1__.default.createTodoList(project);
    emptyInputs();
    closeModal();
    localStorage.removeItem('myProjects');
    localStorage.setItem('myProjects', JSON.stringify(allProjects));
  },
  addProject(projects) {
    const title = document.getElementById('title2').value;
    const description = document.getElementById('description2').value;

    const errors = document.getElementById('error2');
    errors.innerHTML = '';
    if (title === '') {
      errors.innerHTML += 'Title can\'t be blank';
      return;
    }
    if (description === '') {
      errors.innerHTML += 'Description can\'t be blank';
      return;
    }

    const select2 = document.getElementById('projectsSelect');
    const option = document.createElement('option');
    option.value = title;
    option.innerHTML = title;
    select2.appendChild(option);

    const elem = new _Project__WEBPACK_IMPORTED_MODULE_2__.default(title, description);
    projects.list.push(elem);

    localStorage.removeItem('myProjects');
    localStorage.setItem('myProjects', JSON.stringify(projects));

    emptyInputs();
    closeModal2();
    _list__WEBPACK_IMPORTED_MODULE_1__.default.createProjectsList();
    _list__WEBPACK_IMPORTED_MODULE_1__.default.createTodoList();
  },
  buildModal() {
    const div5 = document.createElement('div');
    div5.setAttribute('id', 'exampleModal');
    div5.classList.add('modal');
    div5.classList.add('fade');
    div5.setAttribute('tabindex', '-1');
    div5.setAttribute('aria-labelledby', 'exampleModalLabel');
    div5.setAttribute('aria-hidden', 'true');

    const div6 = document.createElement('div');
    div6.classList.add('modal-dialog');

    const div7 = document.createElement('div');
    div7.classList.add('modal-content');

    const div8 = document.createElement('div');
    div8.classList.add('modal-header');

    const h5 = document.createElement('h5');
    h5.setAttribute('id', 'exampleModalLabel');
    h5.classList.add('modal-title');
    h5.innerHTML = 'Enter the task information';

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.classList.add('btn-close');
    button2.setAttribute('data-bs-dismiss', 'modal');
    button2.setAttribute('aria-label', 'Close');
    button2.id = 'close';

    div8.appendChild(h5);
    div8.appendChild(button2);

    const div9 = document.createElement('div');
    div9.classList.add('modal-body');

    const div10 = document.createElement('div');
    div10.classList.add('row');

    const div11 = document.createElement('div');
    div11.classList.add('col-12');

    const p1 = document.createElement('p');
    p1.classList.add('error');
    p1.setAttribute('id', 'error');

    div11.appendChild(p1);
    div10.appendChild(div11);
    div9.appendChild(div10);

    const div12 = document.createElement('div');
    div12.classList.add('row');

    const div21 = document.createElement('div');
    div21.classList.add('col-12');
    div21.classList.add('mb-2');

    const label1 = document.createElement('label');
    label1.htmlFor = 'title';
    label1.innerHTML = 'Title';

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'title';
    input2.name = 'title';

    div21.appendChild(label1);
    div21.appendChild(input2);
    div12.appendChild(div21);
    div9.appendChild(div12);

    const div13 = document.createElement('div');
    div13.classList.add('row');

    const div14 = document.createElement('div');
    div14.classList.add('col-12');
    div14.classList.add('mb-2');

    const label2 = document.createElement('label');
    label2.htmlFor = 'description';
    label2.innerHTML = 'Description';

    const textarea1 = document.createElement('textarea');
    textarea1.classList.add('form-control');
    textarea1.id = 'description';
    textarea1.setAttribute('placeholder', 'Add description here');
    textarea1.name = 'description';

    div14.appendChild(label2);
    div14.appendChild(textarea1);
    div13.appendChild(div14);
    div9.appendChild(div13);

    const div15 = document.createElement('div');
    div15.classList.add('row');

    const div16 = document.createElement('div');
    div16.classList.add('col-12');

    const label3 = document.createElement('label');
    label3.htmlFor = 'dueDate';
    label3.innerHTML = 'DueDate';

    const input1 = document.createElement('input');
    input1.setAttribute('id', 'dueDate');
    input1.type = 'date';
    input1.name = 'dueDate';

    div16.appendChild(label3);
    div16.appendChild(input1);
    div15.appendChild(div16);
    div9.appendChild(div15);

    const div17 = document.createElement('div');
    div17.classList.add('row');

    const div18 = document.createElement('div');
    div18.classList.add('col-12');
    div18.classList.add('mt-3');

    const select = document.createElement('select');
    select.classList.add('form-select');
    select.setAttribute('aria-label', 'Default select example');
    select.setAttribute('id', 'prioritySelect');

    const option = document.createElement('option');
    option.value = 'Low';
    option.innerHTML = 'Low';

    const option1 = document.createElement('option');
    option1.value = 'Medium';
    option1.innerHTML = 'Medium';

    const option2 = document.createElement('option');
    option2.value = 'High';
    option2.innerHTML = 'High';

    select.appendChild(option);
    select.appendChild(option1);
    select.appendChild(option2);
    div18.appendChild(select);
    div17.appendChild(div18);
    div9.appendChild(div17);

    const div31 = document.createElement('div');
    div31.classList.add('row');

    const div32 = document.createElement('div');
    div32.classList.add('col-12');
    div32.classList.add('mt-3');

    const select2 = document.createElement('select');
    select2.classList.add('form-select');
    select2.setAttribute('aria-label', 'Default select example');
    select2.setAttribute('id', 'prioritySelect');
    select2.id = 'projectsSelect';

    const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_3__.default)();
    for (let i = 0; i < allProjects.list.length; i += 1) {
      const option = document.createElement('option');
      option.value = allProjects.list[i].title;
      option.innerHTML = allProjects.list[i].title;
      select2.appendChild(option);
    }

    div32.appendChild(select2);
    div31.appendChild(div32);
    div9.appendChild(div31);

    const div19 = document.createElement('div');
    div19.classList.add('modal-footer');

    const button3 = document.createElement('button');
    button3.type = 'button';
    button3.classList.add('btn');
    button3.classList.add('btn-secondary');
    button3.setAttribute('data-bs-dismiss', 'modal');
    button3.innerHTML = 'Close';

    const button4 = document.createElement('button');
    button4.type = 'button';
    button4.classList.add('btn');
    button4.classList.add('btn-primary');
    button4.id = 'testProject';
    button4.innerHTML = 'Add Task';
    button4.setAttribute('id', 'createTask');

    div19.appendChild(button3);
    div19.appendChild(button4);

    div7.appendChild(div8);
    div7.appendChild(div9);
    div7.appendChild(div19);
    div6.appendChild(div7);
    div5.appendChild(div6);

    return div5;
  },
  editModal() {
    const div50 = document.createElement('div');
    div50.setAttribute('id', 'exampleModal3');
    div50.classList.add('modal');
    div50.classList.add('fade');
    div50.setAttribute('tabindex', '-1');
    div50.setAttribute('aria-labelledby', 'exampleModalLabel');
    div50.setAttribute('aria-hidden', 'true');

    const div6 = document.createElement('div');
    div6.classList.add('modal-dialog');

    const div7 = document.createElement('div');
    div7.classList.add('modal-content');

    const div8 = document.createElement('div');
    div8.classList.add('modal-header');

    const h5 = document.createElement('h5');
    h5.setAttribute('id', 'exampleModalLabelEdit');
    h5.classList.add('modal-title');
    h5.innerHTML = 'Edit the task information';

    const button2 = document.createElement('button');
    button2.type = 'button';
    button2.classList.add('btn-close');
    button2.setAttribute('data-bs-dismiss', 'modal');
    button2.setAttribute('aria-label', 'Close');
    button2.setAttribute('id', 'closeEdit');

    div8.appendChild(h5);
    div8.appendChild(button2);

    const div9 = document.createElement('div');
    div9.classList.add('modal-body');

    const div10 = document.createElement('div');
    div10.classList.add('row');

    const div11 = document.createElement('div');
    div11.classList.add('col-12');

    const p1 = document.createElement('p');
    p1.classList.add('error');
    p1.setAttribute('id', 'error');

    div11.appendChild(p1);
    div10.appendChild(div11);
    div9.appendChild(div10);

    const div12 = document.createElement('div');
    div12.classList.add('row');

    const div21 = document.createElement('div');
    div21.classList.add('col-12');
    div21.classList.add('mb-2');

    const label1 = document.createElement('label');
    label1.htmlFor = 'title';
    label1.innerHTML = 'Title';

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'titleEdit';
    input2.name = 'title';

    div21.appendChild(label1);
    div21.appendChild(input2);
    div12.appendChild(div21);
    div9.appendChild(div12);

    const div13 = document.createElement('div');
    div13.classList.add('row');

    const div14 = document.createElement('div');
    div14.classList.add('col-12');
    div14.classList.add('mb-2');

    const label2 = document.createElement('label');
    label2.htmlFor = 'description';
    label2.innerHTML = 'Description';

    const textarea1 = document.createElement('textarea');
    textarea1.classList.add('form-control');
    textarea1.id = 'descriptionEdit';
    textarea1.setAttribute('placeholder', 'Add description here');
    textarea1.name = 'description';

    div14.appendChild(label2);
    div14.appendChild(textarea1);
    div13.appendChild(div14);
    div9.appendChild(div13);

    const div15 = document.createElement('div');
    div15.classList.add('row');

    const div16 = document.createElement('div');
    div16.classList.add('col-12');

    const label3 = document.createElement('label');
    label3.htmlFor = 'dueDate';
    label3.innerHTML = 'DueDate';

    const input1 = document.createElement('input');
    input1.setAttribute('id', 'dateEdit');
    input1.type = 'date';
    input1.name = 'dueDate';

    div16.appendChild(label3);
    div16.appendChild(input1);
    div15.appendChild(div16);
    div9.appendChild(div15);

    const div17 = document.createElement('div');
    div17.classList.add('row');

    const div18 = document.createElement('div');
    div18.classList.add('col-12');
    div18.classList.add('mt-3');

    const select = document.createElement('select');
    select.classList.add('form-select');
    select.setAttribute('aria-label', 'Default select example');
    select.setAttribute('id', 'prioritySelectEdit');

    const priors = ['Low', 'Medium', 'High'];
    for (let i = 0; i < priors.length; i += 1) {
      const option = document.createElement('option');
      option.value = priors[i];
      option.innerHTML = priors[i];
      select.appendChild(option);
    }

    div18.appendChild(select);
    div17.appendChild(div18);
    div9.appendChild(div17);

    const div31 = document.createElement('div');
    div31.classList.add('row');

    const div32 = document.createElement('div');
    div32.classList.add('col-12');
    div32.classList.add('mt-3');

    div31.appendChild(div32);
    div9.appendChild(div31);

    const div19 = document.createElement('div');
    div19.classList.add('modal-footer');

    const button3 = document.createElement('button');
    button3.type = 'button';
    button3.classList.add('btn');
    button3.classList.add('btn-secondary');
    button3.setAttribute('data-bs-dismiss', 'modal');
    button3.innerHTML = 'Close';

    const button4 = document.createElement('button');
    button4.type = 'button';
    button4.classList.add('btn');
    button4.classList.add('btn-primary');
    button4.innerHTML = 'Edit Task';
    button4.id = 'updateTaskModal';

    div19.appendChild(button3);
    div19.appendChild(button4);

    div7.appendChild(div8);
    div7.appendChild(div9);
    div7.appendChild(div19);
    div6.appendChild(div7);
    div50.appendChild(div6);

    return div50;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funcs);


/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllProjects */ "./src/AllProjects.js");


const allProjects = new _AllProjects__WEBPACK_IMPORTED_MODULE_0__.default();

const allProjectsFunc = () => allProjects;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allProjectsFunc);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./src/object.js");







const localProjects = JSON.parse(localStorage.getItem('myProjects'));
const allProjects = (0,_object__WEBPACK_IMPORTED_MODULE_5__.default)();

if (localProjects != null) {
  for (let i = 0; i < localProjects.list.length; i += 1) {
    const elem = new _Project__WEBPACK_IMPORTED_MODULE_2__.default(localProjects.list[i].title, localProjects.list[i].description);
    allProjects.addElement(elem);
    for (let j = 0; j < localProjects.list[i].list.length; j += 1) {
      const obj = localProjects.list[i].list[j];
      const task = new _Task__WEBPACK_IMPORTED_MODULE_1__.default(obj.title, obj.desc, obj.date, obj.priority, obj.check);
      elem.addElement(task);
    }
  }
}

const init = () => {
  _list__WEBPACK_IMPORTED_MODULE_3__.default.createTodoList();
  _list__WEBPACK_IMPORTED_MODULE_3__.default.createProjectsList();

  const modal = document.getElementById('modal');
  modal.appendChild(_modal__WEBPACK_IMPORTED_MODULE_4__.default.buildModal());
  const modal2 = document.getElementById('modal2');
  modal2.appendChild(_modal__WEBPACK_IMPORTED_MODULE_4__.default.editModal());

  const createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { _modal__WEBPACK_IMPORTED_MODULE_4__.default.addTask(allProjects); });

  const createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { _modal__WEBPACK_IMPORTED_MODULE_4__.default.addProject(allProjects); });
};

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNERBQTRELG1CQUFtQiw4QkFBOEIsOEJBQThCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLGtCQUFrQixnQ0FBZ0MsS0FBSyxlQUFlLDRCQUE0QixLQUFLLGlCQUFpQixtQkFBbUIsS0FBSyxzQkFBc0Isa0JBQWtCLEtBQUssc0JBQXNCLHNCQUFzQixLQUFLLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSwyQ0FBMkMsbUJBQW1CLDhCQUE4Qiw4QkFBOEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssa0JBQWtCLGdDQUFnQyxLQUFLLGVBQWUsNEJBQTRCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLHNCQUFzQixrQkFBa0IsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLHVCQUF1QjtBQUNsdEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGdEQUFlO0FBQ3ZDLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZkbUI7O0FBRXhDLHdCQUF3QixpREFBVzs7QUFFbkM7O0FBRUEsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7O1VDTi9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNLO0FBQ007QUFDTDtBQUNDO0FBQ1c7O0FBRXZDO0FBQ0Esb0JBQW9CLGdEQUFlOztBQUVuQztBQUNBLGlCQUFpQiwrQkFBK0I7QUFDaEQscUJBQXFCLDZDQUFPO0FBQzVCO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBLHVCQUF1QiwwQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUseURBQW9CO0FBQ3RCLEVBQUUsNkRBQXdCOztBQUUxQjtBQUNBLG9CQUFvQixzREFBZ0I7QUFDcEM7QUFDQSxxQkFBcUIscURBQWU7O0FBRXBDO0FBQ0EsOENBQThDLENBQUMsbURBQWEsY0FBYyxFQUFFOztBQUU1RTtBQUNBLGlEQUFpRCxDQUFDLHNEQUFnQixjQUFjLEVBQUU7QUFDbEY7O0FBRUEsTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5iZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ieWVsbG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxyXFxufVxcclxcblxcclxcbi5icmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXNlbGVjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2xpY2xpY2thYmxlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxpc3QtZ3JvdXAtaXRlbSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmdyZWVuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYnllbGxvdyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi50d2hpdGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNsaWNsaWNrYWJsZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNlcnJvciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIEFsbFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cblxuICBhZGRFbGVtZW50KGVsZW0pIHtcbiAgICB0aGlzLmxpc3QucHVzaChlbGVtKTtcbiAgfVxuXG4gIGRlbGV0ZUVsZW1lbnQodGl0bGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubGlzdFtpXS50aXRsZSA9PT0gdGl0bGUpIHRoaXMubGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFByb2plY3RzO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gJ2RlZmF1bHQnLCBkZXNjcmlwdGlvbiA9ICdkZWZhdWx0IHByb2plY3QnKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbSkge1xuICAgIHRoaXMubGlzdC5wdXNoKGVsZW0pO1xuICB9XG5cbiAgZGVsZXRlRWxlbWVudCh0aXRsZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5saXN0W2ldLnRpdGxlID09PSB0aXRsZSkgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2spIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVjayA9IGNoZWNrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IGFsbFByb2plY3RzRnVuYyBmcm9tICcuL29iamVjdCc7XG5cbmNvbnN0IG5vdGhpbmcgPSAobikgPT4gbjtcblxuY29uc3QgY2hhbmdlQ2hlY2sgPSAocHJvamVjdCwgdGl0bGVQcm9qZWN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRpdGxlUHJvamVjdCA9PT0gcHJvamVjdC5saXN0W2ldLnRpdGxlKSB7XG4gICAgICBsZXQgY2hrID0gcHJvamVjdC5saXN0W2ldLmNoZWNrO1xuICAgICAgaWYgKGNoayA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGsgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdteVByb2plY3RzJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmNvbnN0IGxpc3RzID0ge1xuICBjcmVhdGVQcm9qZWN0c0xpc3QoKSB7XG4gICAgY29uc3QgeyBsaXN0IH0gPSBhbGxQcm9qZWN0c0Z1bmMoKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xpc3QnKTtcbiAgICB1bC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpMS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcbiAgICBsaTEuaW5uZXJIVE1MID0gJ0FsbCBwcm9qZWN0cyc7XG4gICAgbGkxLmlkID0gJ2xpY2xpY2thYmxlJztcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY3JlYXRlVG9kb0xpc3QoKTsgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBjb25zdCBtYXBweSA9IGxpc3QubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcbiAgICAgIGxpLmlubmVySFRNTCA9IHByb2plY3QudGl0bGU7XG4gICAgICBsaS5pZCA9ICdsaWNsaWNrYWJsZSc7XG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5jcmVhdGVUb2RvTGlzdChwcm9qZWN0KTsgfSk7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICByZXR1cm4gdWw7XG4gICAgfSkuam9pbignJyk7XG4gICAgbm90aGluZyhtYXBweSk7XG4gIH0sXG4gIGNyZWF0ZVRvZG9MaXN0KHRhc2tzID0gJ2RlZmF1bHQnKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG5cbiAgICBjb25zdCB0b2RvVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdG9kb1Rhc2suY2xhc3NMaXN0LmFkZCgndG9kb1Rhc2snKTtcblxuICAgIGlmICh0YXNrcyAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBydW5MaXN0KHRvZG9UYXNrLCB0YXNrcywgdGFza3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHJ1bkxpc3QodG9kb1Rhc2ssIGFsbFByb2plY3RzLmxpc3RbaV0sIHRhc2tzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCwgdGFza3MubGlzdCk7XG4gICAgY29sLmFwcGVuZENoaWxkKHRvZG9UYXNrKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAodHlwZW9mIHRhc2tzLnRpdGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJ0FsbCBwcm9qZWN0cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRhc2tzLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gIH0sXG59O1xuXG5jb25zdCBlZGl0VGFzayA9IChteVRhc2ssIG5leHRMaXN0KSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlRWRpdCcpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkVkaXQnKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdEVkaXQnKS52YWx1ZTtcblxuICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKTtcbiAgZXJyb3JzLmlubmVySFRNTCA9ICcnO1xuICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgZXJyb3JzLmlubmVySFRNTCArPSAnVGl0bGUgY2FuXFwndCBiZSBibGFuayc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdEZXNjcmlwdGlvbiBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGR1ZURhdGUgPT09ICcnKSB7XG4gICAgZXJyb3JzLmlubmVySFRNTCArPSAnIERhdGUgY2FuXFwndCBiZSBibGFuayc7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbXlUYXNrLnRpdGxlID0gdGl0bGU7XG4gIG15VGFzay5kZXNjID0gZGVzY3JpcHRpb247XG4gIG15VGFzay5kYXRlID0gZHVlRGF0ZTtcbiAgbXlUYXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlRWRpdCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkVkaXQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZUVkaXQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VFZGl0JykuY2xpY2soKTtcbiAgbGlzdHMuY3JlYXRlVG9kb0xpc3QobmV4dExpc3QpO1xuICBjb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3QsIHRpdGxlVGFzaywgbGlzdCA9ICdkZWZhdWx0JykgPT4ge1xuICBjb25zdCB0aXRsZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVFZGl0Jyk7XG4gIGNvbnN0IGRlc2NFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRWRpdCcpO1xuICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpO1xuICBjb25zdCBwcmlvckVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlTZWxlY3RFZGl0Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGl0bGVUYXNrID09PSBwcm9qZWN0Lmxpc3RbaV0udGl0bGUpIHtcbiAgICAgIHRpdGxlRWRpdC52YWx1ZSA9IHByb2plY3QubGlzdFtpXS50aXRsZTtcbiAgICAgIGRlc2NFZGl0LnZhbHVlID0gcHJvamVjdC5saXN0W2ldLmRlc2M7XG4gICAgICBkYXRlRWRpdC52YWx1ZSA9IHByb2plY3QubGlzdFtpXS5kYXRlO1xuICAgICAgcHJpb3JFZGl0WzBdLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIHByaW9yRWRpdFsxXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICBwcmlvckVkaXRbMl0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcmlvckVkaXQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5wcmlvcml0eSA9PT0gcHJpb3JFZGl0W2pdLnZhbHVlKSBwcmlvckVkaXRbal0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJ0bkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlVGFza01vZGFsJyk7XG4gICAgICBidG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0VGFzayhwcm9qZWN0Lmxpc3RbaV0sIGxpc3QpOyB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAocHJvamVjdCwgdGl0bGVQcm9qZWN0LCBsaXN0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRpdGxlUHJvamVjdCA9PT0gcHJvamVjdC5saXN0W2ldLnRpdGxlKSB7XG4gICAgICBwcm9qZWN0Lmxpc3Quc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIGlmIChsaXN0ID09PSAnZGVmYXVsdCcpIHtcbiAgICBsaXN0cy5jcmVhdGVUb2RvTGlzdCgpO1xuICB9IGVsc2Uge1xuICAgIGxpc3RzLmNyZWF0ZVRvZG9MaXN0KHByb2plY3QpO1xuICB9XG59O1xuXG5jb25zdCBydW5MaXN0ID0gKHRvZG9UYXNrLCB0YXNrcywgbmV4dExpc3QpID0+IHtcbiAgY29uc3QgbWFwcHkgPSB0YXNrcy5saXN0Lm1hcCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgJ0xvdyc6XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2JncmVlbicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01lZGl1bSc6XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J5ZWxsb3cnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYnJlZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpO1xuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWJldHdlZW4nKTtcblxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2hlY2staW5wdXQnKTtcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZCgnbWUtMScpO1xuICAgIGlucHV0MS50eXBlID0gJ2NoZWNrYm94JztcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZUNoZWNrKHRhc2tzLCB0YXNrLnRpdGxlKTsgfSk7XG4gICAgaWYgKHRhc2suY2hlY2sgPT09IHRydWUpIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG5cbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnbWItMScpO1xuICAgIGg1LmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJUZXh0ID0gdGFzay5kZXNjO1xuXG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuICAgIHNtYWxsLmlubmVySFRNTCA9IHRhc2suZGF0ZTtcblxuICAgIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24yLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcbiAgICBidXR0b24yLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24yLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICBidXR0b24yLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10b2dnbGUnLCAnbW9kYWwnKTtcbiAgICBidXR0b24yLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnI2V4YW1wbGVNb2RhbDMnKTtcbiAgICBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB1cGRhdGVUYXNrKHRhc2tzLCB0YXNrLnRpdGxlLCBuZXh0TGlzdCk7IH0pO1xuXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpO1xuICAgIGlucHV0Mi50eXBlID0gJ2J1dHRvbic7XG4gICAgaW5wdXQyLmlkID0gJ2RlbGV0ZWlkJztcbiAgICBpbnB1dDIuaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBkZWxldGVUYXNrKHRhc2tzLCB0YXNrLnRpdGxlLCBuZXh0TGlzdCk7IH0pO1xuXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaDUpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQocCk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChzbWFsbCk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChidXR0b24yKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICB0b2RvVGFzay5hcHBlbmRDaGlsZChsaSk7XG4gICAgcmV0dXJuIHRvZG9UYXNrO1xuICB9KS5qb2luKCcnKTtcbiAgbm90aGluZyhtYXBweSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0cztcbiIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0JztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgYWxsUHJvamVjdHNGdW5jIGZyb20gJy4vb2JqZWN0JztcblxuZnVuY3Rpb24gZW1wdHlJbnB1dHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWUgPSAnJztcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUyJykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uMicpLnZhbHVlID0gJyc7XG59XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZScpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsMiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlMicpLmNsaWNrKCk7XG59O1xuXG5jb25zdCBmdW5jcyA9IHtcbiAgYWRkVGFzayhhbGxQcm9qZWN0cykge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzU2VsZWN0JykudmFsdWU7XG5cbiAgICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKTtcbiAgICBlcnJvcnMuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgZXJyb3JzLmlubmVySFRNTCArPSAnVGl0bGUgY2FuXFwndCBiZSBibGFuayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ0Rlc2NyaXB0aW9uIGNhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZHVlRGF0ZSA9PT0gJycpIHtcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJyBEYXRlIGNhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHtcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ0NyZWF0ZSBhIHByb2plY3QgZmlyc3QnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW0gPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmYWxzZSk7XG4gICAgbGV0IHByb2plY3QgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxQcm9qZWN0cy5saXN0W2ldLnRpdGxlID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICBwcm9qZWN0ID0gYWxsUHJvamVjdHMubGlzdFtpXTtcbiAgICAgICAgcHJvamVjdC5hZGRFbGVtZW50KGVsZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0cy5jcmVhdGVUb2RvTGlzdChwcm9qZWN0KTtcbiAgICBlbXB0eUlucHV0cygpO1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgfSxcbiAgYWRkUHJvamVjdChwcm9qZWN0cykge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlMicpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uMicpLnZhbHVlO1xuXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yMicpO1xuICAgIGVycm9ycy5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdUaXRsZSBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgZXJyb3JzLmlubmVySFRNTCArPSAnRGVzY3JpcHRpb24gY2FuXFwndCBiZSBibGFuayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1NlbGVjdCcpO1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHRpdGxlO1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICBzZWxlY3QyLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBjb25zdCBlbGVtID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0cy5saXN0LnB1c2goZWxlbSk7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgIGVtcHR5SW5wdXRzKCk7XG4gICAgY2xvc2VNb2RhbDIoKTtcbiAgICBsaXN0cy5jcmVhdGVQcm9qZWN0c0xpc3QoKTtcbiAgICBsaXN0cy5jcmVhdGVUb2RvTGlzdCgpO1xuICB9LFxuICBidWlsZE1vZGFsKCkge1xuICAgIGNvbnN0IGRpdjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY1LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhhbXBsZU1vZGFsJyk7XG4gICAgZGl2NS5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgIGRpdjUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIGRpdjUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIGRpdjUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnZXhhbXBsZU1vZGFsTGFiZWwnKTtcbiAgICBkaXY1LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgZGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGlhbG9nJyk7XG5cbiAgICBjb25zdCBkaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Ny5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkaXY4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2OC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4YW1wbGVNb2RhbExhYmVsJyk7XG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnbW9kYWwtdGl0bGUnKTtcbiAgICBoNS5pbm5lckhUTUwgPSAnRW50ZXIgdGhlIHRhc2sgaW5mb3JtYXRpb24nO1xuXG4gICAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjIudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuLWNsb3NlJyk7XG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJyk7XG4gICAgYnV0dG9uMi5pZCA9ICdjbG9zZSc7XG5cbiAgICBkaXY4LmFwcGVuZENoaWxkKGg1KTtcbiAgICBkaXY4LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuXG4gICAgY29uc3QgZGl2OSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gICAgY29uc3QgZGl2MTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMC5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTEuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHAxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3InKTtcblxuICAgIGRpdjExLmFwcGVuZENoaWxkKHAxKTtcbiAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMSk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMCk7XG5cbiAgICBjb25zdCBkaXYxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjEyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgZGl2MjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYyMS5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICBkaXYyMS5jbGFzc0xpc3QuYWRkKCdtYi0yJyk7XG5cbiAgICBjb25zdCBsYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsMS5odG1sRm9yID0gJ3RpdGxlJztcbiAgICBsYWJlbDEuaW5uZXJIVE1MID0gJ1RpdGxlJztcblxuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQyLmlkID0gJ3RpdGxlJztcbiAgICBpbnB1dDIubmFtZSA9ICd0aXRsZSc7XG5cbiAgICBkaXYyMS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuICAgIGRpdjIxLmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgZGl2MTIuYXBwZW5kQ2hpbGQoZGl2MjEpO1xuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTIpO1xuXG4gICAgY29uc3QgZGl2MTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTQuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG4gICAgZGl2MTQuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDIuaHRtbEZvciA9ICdkZXNjcmlwdGlvbic7XG4gICAgbGFiZWwyLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCB0ZXh0YXJlYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhMS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICB0ZXh0YXJlYTEuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIHRleHRhcmVhMS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBkZXNjcmlwdGlvbiBoZXJlJyk7XG4gICAgdGV4dGFyZWExLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuXG4gICAgZGl2MTQuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgICBkaXYxNC5hcHBlbmRDaGlsZCh0ZXh0YXJlYTEpO1xuICAgIGRpdjEzLmFwcGVuZENoaWxkKGRpdjE0KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEzKTtcblxuICAgIGNvbnN0IGRpdjE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTUuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE2LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuXG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDMuaHRtbEZvciA9ICdkdWVEYXRlJztcbiAgICBsYWJlbDMuaW5uZXJIVE1MID0gJ0R1ZURhdGUnO1xuXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gICAgaW5wdXQxLnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXQxLm5hbWUgPSAnZHVlRGF0ZSc7XG5cbiAgICBkaXYxNi5hcHBlbmRDaGlsZChsYWJlbDMpO1xuICAgIGRpdjE2LmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2MTUuYXBwZW5kQ2hpbGQoZGl2MTYpO1xuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTUpO1xuXG4gICAgY29uc3QgZGl2MTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxNy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTguY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG4gICAgZGl2MTguY2xhc3NMaXN0LmFkZCgnbXQtMycpO1xuXG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdEZWZhdWx0IHNlbGVjdCBleGFtcGxlJyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlTZWxlY3QnKTtcblxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9ICdMb3cnO1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSAnTG93JztcblxuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24xLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgb3B0aW9uMS5pbm5lckhUTUwgPSAnTWVkaXVtJztcblxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24yLnZhbHVlID0gJ0hpZ2gnO1xuICAgIG9wdGlvbjIuaW5uZXJIVE1MID0gJ0hpZ2gnO1xuXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICBkaXYxOC5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgIGRpdjE3LmFwcGVuZENoaWxkKGRpdjE4KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjE3KTtcblxuICAgIGNvbnN0IGRpdjMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MzEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjMyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjMyLmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcblxuICAgIGNvbnN0IHNlbGVjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG4gICAgc2VsZWN0Mi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xuICAgIHNlbGVjdDIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eVNlbGVjdCcpO1xuICAgIHNlbGVjdDIuaWQgPSAncHJvamVjdHNTZWxlY3QnO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0c0Z1bmMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gYWxsUHJvamVjdHMubGlzdFtpXS50aXRsZTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBhbGxQcm9qZWN0cy5saXN0W2ldLnRpdGxlO1xuICAgICAgc2VsZWN0Mi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGRpdjMyLmFwcGVuZENoaWxkKHNlbGVjdDIpO1xuICAgIGRpdjMxLmFwcGVuZENoaWxkKGRpdjMyKTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjMxKTtcblxuICAgIGNvbnN0IGRpdjE5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uMy50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidXR0b24zLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcbiAgICBidXR0b24zLnNldEF0dHJpYnV0ZSgnZGF0YS1icy1kaXNtaXNzJywgJ21vZGFsJyk7XG4gICAgYnV0dG9uMy5pbm5lckhUTUwgPSAnQ2xvc2UnO1xuXG4gICAgY29uc3QgYnV0dG9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjQudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnV0dG9uNC5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpO1xuICAgIGJ1dHRvbjQuaWQgPSAndGVzdFByb2plY3QnO1xuICAgIGJ1dHRvbjQuaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcbiAgICBidXR0b240LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRlVGFzaycpO1xuXG4gICAgZGl2MTkuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gICAgZGl2MTkuYXBwZW5kQ2hpbGQoYnV0dG9uNCk7XG5cbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjgpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OSk7XG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXYxOSk7XG4gICAgZGl2Ni5hcHBlbmRDaGlsZChkaXY3KTtcbiAgICBkaXY1LmFwcGVuZENoaWxkKGRpdjYpO1xuXG4gICAgcmV0dXJuIGRpdjU7XG4gIH0sXG4gIGVkaXRNb2RhbCgpIHtcbiAgICBjb25zdCBkaXY1MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhhbXBsZU1vZGFsMycpO1xuICAgIGRpdjUwLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG4gICAgZGl2NTAuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICBkaXY1MC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsICdleGFtcGxlTW9kYWxMYWJlbCcpO1xuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgZGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGlhbG9nJyk7XG5cbiAgICBjb25zdCBkaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Ny5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBkaXY4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2OC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4YW1wbGVNb2RhbExhYmVsRWRpdCcpO1xuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXRpdGxlJyk7XG4gICAgaDUuaW5uZXJIVE1MID0gJ0VkaXQgdGhlIHRhc2sgaW5mb3JtYXRpb24nO1xuXG4gICAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjIudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuLWNsb3NlJyk7XG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJyk7XG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRWRpdCcpO1xuXG4gICAgZGl2OC5hcHBlbmRDaGlsZChoNSk7XG4gICAgZGl2OC5hcHBlbmRDaGlsZChidXR0b24yKTtcblxuICAgIGNvbnN0IGRpdjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJvZHknKTtcblxuICAgIGNvbnN0IGRpdjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTAuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjExLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBwMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vycm9yJyk7XG5cbiAgICBkaXYxMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgZGl2MTAuYXBwZW5kQ2hpbGQoZGl2MTEpO1xuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTApO1xuXG4gICAgY29uc3QgZGl2MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDEuaHRtbEZvciA9ICd0aXRsZSc7XG4gICAgbGFiZWwxLmlubmVySFRNTCA9ICdUaXRsZSc7XG5cbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5pZCA9ICd0aXRsZUVkaXQnO1xuICAgIGlucHV0Mi5uYW1lID0gJ3RpdGxlJztcblxuICAgIGRpdjIxLmFwcGVuZENoaWxkKGxhYmVsMSk7XG4gICAgZGl2MjEuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYxMi5hcHBlbmRDaGlsZChkaXYyMSk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMik7XG5cbiAgICBjb25zdCBkaXYxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjEzLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgZGl2MTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxNC5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICBkaXYxNC5jbGFzc0xpc3QuYWRkKCdtYi0yJyk7XG5cbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsMi5odG1sRm9yID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBsYWJlbDIuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcblxuICAgIGNvbnN0IHRleHRhcmVhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dGFyZWExLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xuICAgIHRleHRhcmVhMS5pZCA9ICdkZXNjcmlwdGlvbkVkaXQnO1xuICAgIHRleHRhcmVhMS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBkZXNjcmlwdGlvbiBoZXJlJyk7XG4gICAgdGV4dGFyZWExLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuXG4gICAgZGl2MTQuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgICBkaXYxNC5hcHBlbmRDaGlsZCh0ZXh0YXJlYTEpO1xuICAgIGRpdjEzLmFwcGVuZENoaWxkKGRpdjE0KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEzKTtcblxuICAgIGNvbnN0IGRpdjE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTUuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE2LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuXG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDMuaHRtbEZvciA9ICdkdWVEYXRlJztcbiAgICBsYWJlbDMuaW5uZXJIVE1MID0gJ0R1ZURhdGUnO1xuXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlRWRpdCcpO1xuICAgIGlucHV0MS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0MS5uYW1lID0gJ2R1ZURhdGUnO1xuXG4gICAgZGl2MTYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgICBkaXYxNi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdjE1LmFwcGVuZENoaWxkKGRpdjE2KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjE1KTtcblxuICAgIGNvbnN0IGRpdjE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTcuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5U2VsZWN0RWRpdCcpO1xuXG4gICAgY29uc3QgcHJpb3JzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcnNbaV07XG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gcHJpb3JzW2ldO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZGl2MTguYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBkaXYxNy5hcHBlbmRDaGlsZChkaXYxOCk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNyk7XG5cbiAgICBjb25zdCBkaXYzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjMxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgZGl2MzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdtdC0zJyk7XG5cbiAgICBkaXYzMS5hcHBlbmRDaGlsZChkaXYzMik7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYzMSk7XG5cbiAgICBjb25zdCBkaXYxOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvb3RlcicpO1xuXG4gICAgY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjMudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XG4gICAgYnV0dG9uMy5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjMuaW5uZXJIVE1MID0gJ0Nsb3NlJztcblxuICAgIGNvbnN0IGJ1dHRvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b240LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGJ1dHRvbjQuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcbiAgICBidXR0b240LmlubmVySFRNTCA9ICdFZGl0IFRhc2snO1xuICAgIGJ1dHRvbjQuaWQgPSAndXBkYXRlVGFza01vZGFsJztcblxuICAgIGRpdjE5LmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xuICAgIGRpdjE5LmFwcGVuZENoaWxkKGJ1dHRvbjQpO1xuXG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY4KTtcbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjkpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2MTkpO1xuICAgIGRpdjYuYXBwZW5kQ2hpbGQoZGl2Nyk7XG4gICAgZGl2NTAuYXBwZW5kQ2hpbGQoZGl2Nik7XG5cbiAgICByZXR1cm4gZGl2NTA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jcztcbiIsImltcG9ydCBBbGxQcm9qZWN0cyBmcm9tICcuL0FsbFByb2plY3RzJztcblxuY29uc3QgYWxsUHJvamVjdHMgPSBuZXcgQWxsUHJvamVjdHMoKTtcblxuY29uc3QgYWxsUHJvamVjdHNGdW5jID0gKCkgPT4gYWxsUHJvamVjdHM7XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFByb2plY3RzRnVuYztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgZnVuY3MgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgYWxsUHJvamVjdHNGdW5jIGZyb20gJy4vb2JqZWN0JztcblxuY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG5jb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xuXG5pZiAobG9jYWxQcm9qZWN0cyAhPSBudWxsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbSA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHMubGlzdFtpXS50aXRsZSwgbG9jYWxQcm9qZWN0cy5saXN0W2ldLmRlc2NyaXB0aW9uKTtcbiAgICBhbGxQcm9qZWN0cy5hZGRFbGVtZW50KGVsZW0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYWxQcm9qZWN0cy5saXN0W2ldLmxpc3QubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IG9iaiA9IGxvY2FsUHJvamVjdHMubGlzdFtpXS5saXN0W2pdO1xuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKG9iai50aXRsZSwgb2JqLmRlc2MsIG9iai5kYXRlLCBvYmoucHJpb3JpdHksIG9iai5jaGVjayk7XG4gICAgICBlbGVtLmFkZEVsZW1lbnQodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGxpc3RzLmNyZWF0ZVRvZG9MaXN0KCk7XG4gIGxpc3RzLmNyZWF0ZVByb2plY3RzTGlzdCgpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZ1bmNzLmJ1aWxkTW9kYWwoKSk7XG4gIGNvbnN0IG1vZGFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbDInKTtcbiAgbW9kYWwyLmFwcGVuZENoaWxkKGZ1bmNzLmVkaXRNb2RhbCgpKTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVRhc2snKTtcbiAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZnVuY3MuYWRkVGFzayhhbGxQcm9qZWN0cyk7IH0pO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdCcpO1xuICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBmdW5jcy5hZGRQcm9qZWN0KGFsbFByb2plY3RzKTsgfSk7XG59O1xuXG5pbml0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==