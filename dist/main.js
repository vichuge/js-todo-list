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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNERBQTRELG1CQUFtQiw4QkFBOEIsOEJBQThCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLGtCQUFrQixnQ0FBZ0MsS0FBSyxlQUFlLDRCQUE0QixLQUFLLGlCQUFpQixtQkFBbUIsS0FBSyxzQkFBc0Isa0JBQWtCLEtBQUssc0JBQXNCLHNCQUFzQixLQUFLLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSwyQ0FBMkMsbUJBQW1CLDhCQUE4Qiw4QkFBOEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssa0JBQWtCLGdDQUFnQyxLQUFLLGVBQWUsNEJBQTRCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLHNCQUFzQixrQkFBa0IsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLHVCQUF1QjtBQUNsdEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0RBQWU7QUFDdkMsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDamVtQjs7QUFFeEMsd0JBQXdCLGlEQUFXOztBQUVuQzs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUNOL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ0s7QUFDTTtBQUNMO0FBQ0M7QUFDVzs7QUFFdkM7QUFDQSxvQkFBb0IsZ0RBQWU7O0FBRW5DO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRCxxQkFBcUIsNkNBQU87QUFDNUI7QUFDQSxtQkFBbUIsdUNBQXVDO0FBQzFEO0FBQ0EsdUJBQXVCLDBDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBb0I7QUFDdEIsRUFBRSw2REFBd0I7O0FBRTFCO0FBQ0Esb0JBQW9CLHNEQUFnQjtBQUNwQztBQUNBLHFCQUFxQixxREFBZTs7QUFFcEM7QUFDQSw4Q0FBOEMsQ0FBQyxtREFBYSxjQUFjLEVBQUU7O0FBRTVFO0FBQ0EsaURBQWlELENBQUMsc0RBQWdCLGNBQWMsRUFBRTtBQUNsRjs7QUFFQSxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LWdyb3VwLWl0ZW0ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ5ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXHJcXG59XFxyXFxuXFxyXFxuLmJyZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udHdoaXRlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbGljbGlja2FibGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3Ige1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5iZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ieWVsbG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxyXFxufVxcclxcblxcclxcbi5icmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXNlbGVjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2xpY2xpY2thYmxlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQWxsUHJvamVjdHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuXG4gIGFkZEVsZW1lbnQoZWxlbSkge1xuICAgIHRoaXMubGlzdC5wdXNoKGVsZW0pO1xuICB9XG5cbiAgZGVsZXRlRWxlbWVudCh0aXRsZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5saXN0W2ldLnRpdGxlID09PSB0aXRsZSkgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvamVjdHM7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUgPSAnZGVmYXVsdCcsIGRlc2NyaXB0aW9uID0gJ2RlZmF1bHQgcHJvamVjdCcpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMubGlzdCA9IFtdO1xuICB9XG5cbiAgYWRkRWxlbWVudChlbGVtKSB7XG4gICAgdGhpcy5saXN0LnB1c2goZWxlbSk7XG4gIH1cblxuICBkZWxldGVFbGVtZW50KHRpdGxlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RbaV0udGl0bGUgPT09IHRpdGxlKSB0aGlzLmxpc3Quc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrID0gY2hlY2s7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgYWxsUHJvamVjdHNGdW5jIGZyb20gJy4vb2JqZWN0JztcblxuY29uc3Qgbm90aGluZyA9IChuKSA9PiBuO1xuXG5jb25zdCBjaGFuZ2VDaGVjayA9IChwcm9qZWN0LCB0aXRsZVByb2plY3QpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGl0bGVQcm9qZWN0ID09PSBwcm9qZWN0Lmxpc3RbaV0udGl0bGUpIHtcbiAgICAgIGxldCBjaGsgPSBwcm9qZWN0Lmxpc3RbaV0uY2hlY2s7XG4gICAgICBpZiAoY2hrID09PSB0cnVlKSB7XG4gICAgICAgIGNoayA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hrID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0c0Z1bmMoKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufTtcblxuY29uc3QgbGlzdHMgPSB7XG4gIGNyZWF0ZVByb2plY3RzTGlzdCgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IGFsbFByb2plY3RzRnVuYygpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzTGlzdCcpO1xuICAgIHVsLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xuICAgIGxpMS5pbm5lckhUTUwgPSAnQWxsIHByb2plY3RzJztcbiAgICBsaTEuaWQgPSAnbGljbGlja2FibGUnO1xuICAgIGxpMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5jcmVhdGVUb2RvTGlzdCgpOyB9KTtcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xuICAgIGNvbnN0IG1hcHB5ID0gbGlzdC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xuICAgICAgbGkuaW5uZXJIVE1MID0gcHJvamVjdC50aXRsZTtcbiAgICAgIGxpLmlkID0gJ2xpY2xpY2thYmxlJztcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNyZWF0ZVRvZG9MaXN0KHByb2plY3QpOyB9KTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIHJldHVybiB1bDtcbiAgICB9KS5qb2luKCcnKTtcbiAgICBub3RoaW5nKG1hcHB5KTtcbiAgfSxcbiAgY3JlYXRlVG9kb0xpc3QodGFza3MgPSAnZGVmYXVsdCcpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcblxuICAgIGNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0b2RvVGFzay5jbGFzc0xpc3QuYWRkKCd0b2RvVGFzaycpO1xuXG4gICAgaWYgKHRhc2tzICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIHJ1bkxpc3QodG9kb1Rhc2ssIHRhc2tzLCB0YXNrcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgcnVuTGlzdCh0b2RvVGFzaywgYWxsUHJvamVjdHMubGlzdFtpXSwgdGFza3MpO1xuICAgICAgfVxuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQoY29sLCB0YXNrcy5saXN0KTtcbiAgICBjb2wuYXBwZW5kQ2hpbGQodG9kb1Rhc2spO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmICh0eXBlb2YgdGFza3MudGl0bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSAnQWxsIHByb2plY3RzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGFza3MudGl0bGU7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgfSxcbn07XG5cbmNvbnN0IGVkaXRUYXNrID0gKG15VGFzaywgbmV4dExpc3QpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVFZGl0JykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRWRpdCcpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVFZGl0JykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0RWRpdCcpLnZhbHVlO1xuXG4gIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpO1xuICBlcnJvcnMuaW5uZXJIVE1MID0gJyc7XG4gIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdUaXRsZSBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xuICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ0Rlc2NyaXB0aW9uIGNhblxcJ3QgYmUgYmxhbmsnO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZHVlRGF0ZSA9PT0gJycpIHtcbiAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICcgRGF0ZSBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICByZXR1cm47XG4gIH1cblxuICBteVRhc2sudGl0bGUgPSB0aXRsZTtcbiAgbXlUYXNrLmRlc2MgPSBkZXNjcmlwdGlvbjtcbiAgbXlUYXNrLmRhdGUgPSBkdWVEYXRlO1xuICBteVRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVFZGl0JykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRWRpdCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUVkaXQnKS5jbGljaygpO1xuICBsaXN0cy5jcmVhdGVUb2RvTGlzdChuZXh0TGlzdCk7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdteVByb2plY3RzJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAocHJvamVjdCwgdGl0bGVUYXNrLCBsaXN0ID0gJ2RlZmF1bHQnKSA9PiB7XG4gIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUVkaXQnKTtcbiAgY29uc3QgZGVzY0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25FZGl0Jyk7XG4gIGNvbnN0IGRhdGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVFZGl0Jyk7XG4gIGNvbnN0IHByaW9yRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdEVkaXQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aXRsZVRhc2sgPT09IHByb2plY3QubGlzdFtpXS50aXRsZSkge1xuICAgICAgdGl0bGVFZGl0LnZhbHVlID0gcHJvamVjdC5saXN0W2ldLnRpdGxlO1xuICAgICAgZGVzY0VkaXQudmFsdWUgPSBwcm9qZWN0Lmxpc3RbaV0uZGVzYztcbiAgICAgIGRhdGVFZGl0LnZhbHVlID0gcHJvamVjdC5saXN0W2ldLmRhdGU7XG4gICAgICBwcmlvckVkaXRbMF0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgcHJpb3JFZGl0WzFdLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIHByaW9yRWRpdFsyXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByaW9yRWRpdC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAocHJvamVjdC5saXN0W2ldLnByaW9yaXR5ID09PSBwcmlvckVkaXRbal0udmFsdWUpIHByaW9yRWRpdFtqXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnRuRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVUYXNrTW9kYWwnKTtcbiAgICAgIGJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGVkaXRUYXNrKHByb2plY3QubGlzdFtpXSwgbGlzdCk7IH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChwcm9qZWN0LCB0aXRsZVByb2plY3QsIGxpc3QpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGl0bGVQcm9qZWN0ID09PSBwcm9qZWN0Lmxpc3RbaV0udGl0bGUpIHtcbiAgICAgIHByb2plY3QubGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdteVByb2plY3RzJyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbiAgaWYgKGxpc3QgPT09ICdkZWZhdWx0Jykge1xuICAgIGxpc3RzLmNyZWF0ZVRvZG9MaXN0KCk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdHMuY3JlYXRlVG9kb0xpc3QocHJvamVjdCk7XG4gIH1cbn07XG5cbmNvbnN0IHJ1bkxpc3QgPSAodG9kb1Rhc2ssIHRhc2tzLCBuZXh0TGlzdCkgPT4ge1xuICBjb25zdCBtYXBweSA9IHRhc2tzLmxpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYmdyZWVuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYnllbGxvdycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdicmVkJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZC1mbGV4Jyk7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpO1xuXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jaGVjay1pbnB1dCcpO1xuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKCdtZS0xJyk7XG4gICAgaW5wdXQxLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlQ2hlY2sodGFza3MsIHRhc2sudGl0bGUpOyB9KTtcbiAgICBpZiAodGFzay5jaGVjayA9PT0gdHJ1ZSkgaW5wdXQxLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcblxuICAgIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoNS5jbGFzc0xpc3QuYWRkKCdtYi0xJyk7XG4gICAgaDUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lclRleHQgPSB0YXNrLmRlc2M7XG5cbiAgICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG4gICAgc21hbGwuaW5uZXJIVE1MID0gdGFzay5kYXRlO1xuXG4gICAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpO1xuICAgIGJ1dHRvbjIudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjIuaW5uZXJIVE1MID0gJ0VkaXQnO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcsICcjZXhhbXBsZU1vZGFsMycpO1xuICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHVwZGF0ZVRhc2sodGFza3MsIHRhc2sudGl0bGUsIG5leHRMaXN0KTsgfSk7XG5cbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XG4gICAgaW5wdXQyLnR5cGUgPSAnYnV0dG9uJztcbiAgICBpbnB1dDIuaWQgPSAnZGVsZXRlaWQnO1xuICAgIGlucHV0Mi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICBpbnB1dDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGRlbGV0ZVRhc2sodGFza3MsIHRhc2sudGl0bGUsIG5leHRMaXN0KTsgfSk7XG5cbiAgICBkaXYyLmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChoNSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChwKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKHNtYWxsKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIHRvZG9UYXNrLmFwcGVuZENoaWxkKGxpKTtcbiAgICByZXR1cm4gdG9kb1Rhc2s7XG4gIH0pLmpvaW4oJycpO1xuICBub3RoaW5nKG1hcHB5KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgbGlzdHM7XG4iLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IGFsbFByb2plY3RzRnVuYyBmcm9tICcuL29iamVjdCc7XG5cbmZ1bmN0aW9uIGVtcHR5SW5wdXRzKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlID0gJyc7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlMicpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbjInKS52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKS5jbGljaygpO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbDIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZTInKS5jbGljaygpO1xufTtcblxuY29uc3QgZnVuY3MgPSB7XG4gIGFkZFRhc2soYWxsUHJvamVjdHMpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlTZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1NlbGVjdCcpLnZhbHVlO1xuXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgZXJyb3JzLmlubmVySFRNTCA9ICcnO1xuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ1RpdGxlIGNhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdEZXNjcmlwdGlvbiBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGR1ZURhdGUgPT09ICcnKSB7XG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICcgRGF0ZSBjYW5cXCd0IGJlIGJsYW5rJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdE5hbWUgPT09ICcnKSB7XG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdDcmVhdGUgYSBwcm9qZWN0IGZpcnN0JztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmFsc2UpO1xuICAgIGxldCBwcm9qZWN0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYWxsUHJvamVjdHMubGlzdFtpXS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgcHJvamVjdCA9IGFsbFByb2plY3RzLmxpc3RbaV07XG4gICAgICAgIHByb2plY3QuYWRkRWxlbWVudChlbGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGlzdHMuY3JlYXRlVG9kb0xpc3QocHJvamVjdCk7XG4gICAgZW1wdHlJbnB1dHMoKTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG4gIH0sXG4gIGFkZFByb2plY3QocHJvamVjdHMpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZTInKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbjInKS52YWx1ZTtcblxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcjInKTtcbiAgICBlcnJvcnMuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgZXJyb3JzLmlubmVySFRNTCArPSAnVGl0bGUgY2FuXFwndCBiZSBibGFuayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ0Rlc2NyaXB0aW9uIGNhblxcJ3QgYmUgYmxhbmsnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNTZWxlY3QnKTtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB0aXRsZTtcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgc2VsZWN0Mi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgY29uc3QgZWxlbSA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdHMubGlzdC5wdXNoKGVsZW0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgICBlbXB0eUlucHV0cygpO1xuICAgIGNsb3NlTW9kYWwyKCk7XG4gICAgbGlzdHMuY3JlYXRlUHJvamVjdHNMaXN0KCk7XG4gICAgbGlzdHMuY3JlYXRlVG9kb0xpc3QoKTtcbiAgfSxcbiAgYnVpbGRNb2RhbCgpIHtcbiAgICBjb25zdCBkaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2NS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4YW1wbGVNb2RhbCcpO1xuICAgIGRpdjUuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBkaXY1LmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBkaXY1LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICBkaXY1LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJ2V4YW1wbGVNb2RhbExhYmVsJyk7XG4gICAgZGl2NS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIGNvbnN0IGRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpYWxvZycpO1xuXG4gICAgY29uc3QgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gICAgY29uc3QgZGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjguY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaDUuc2V0QXR0cmlidXRlKCdpZCcsICdleGFtcGxlTW9kYWxMYWJlbCcpO1xuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXRpdGxlJyk7XG4gICAgaDUuaW5uZXJIVE1MID0gJ0VudGVyIHRoZSB0YXNrIGluZm9ybWF0aW9uJztcblxuICAgIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24yLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24yLmNsYXNzTGlzdC5hZGQoJ2J0bi1jbG9zZScpO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICBidXR0b24yLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDbG9zZScpO1xuICAgIGJ1dHRvbjIuaWQgPSAnY2xvc2UnO1xuXG4gICAgZGl2OC5hcHBlbmRDaGlsZChoNSk7XG4gICAgZGl2OC5hcHBlbmRDaGlsZChidXR0b24yKTtcblxuICAgIGNvbnN0IGRpdjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJvZHknKTtcblxuICAgIGNvbnN0IGRpdjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTAuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjExLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBwMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Vycm9yJyk7XG5cbiAgICBkaXYxMS5hcHBlbmRDaGlsZChwMSk7XG4gICAgZGl2MTAuYXBwZW5kQ2hpbGQoZGl2MTEpO1xuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTApO1xuXG4gICAgY29uc3QgZGl2MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMi5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDEuaHRtbEZvciA9ICd0aXRsZSc7XG4gICAgbGFiZWwxLmlubmVySFRNTCA9ICdUaXRsZSc7XG5cbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5pZCA9ICd0aXRsZSc7XG4gICAgaW5wdXQyLm5hbWUgPSAndGl0bGUnO1xuXG4gICAgZGl2MjEuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgICBkaXYyMS5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdjEyLmFwcGVuZENoaWxkKGRpdjIxKTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEyKTtcblxuICAgIGNvbnN0IGRpdjEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTMuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE0LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjE0LmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcblxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwyLmh0bWxGb3IgPSAnZGVzY3JpcHRpb24nO1xuICAgIGxhYmVsMi5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24nO1xuXG4gICAgY29uc3QgdGV4dGFyZWExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYTEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250cm9sJyk7XG4gICAgdGV4dGFyZWExLmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICB0ZXh0YXJlYTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgZGVzY3JpcHRpb24gaGVyZScpO1xuICAgIHRleHRhcmVhMS5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcblxuICAgIGRpdjE0LmFwcGVuZENoaWxkKGxhYmVsMik7XG4gICAgZGl2MTQuYXBwZW5kQ2hpbGQodGV4dGFyZWExKTtcbiAgICBkaXYxMy5hcHBlbmRDaGlsZChkaXYxNCk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMyk7XG5cbiAgICBjb25zdCBkaXYxNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE1LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgZGl2MTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxNi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcblxuICAgIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwzLmh0bWxGb3IgPSAnZHVlRGF0ZSc7XG4gICAgbGFiZWwzLmlubmVySFRNTCA9ICdEdWVEYXRlJztcblxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICAgIGlucHV0MS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0MS5uYW1lID0gJ2R1ZURhdGUnO1xuXG4gICAgZGl2MTYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgICBkaXYxNi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdjE1LmFwcGVuZENoaWxkKGRpdjE2KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjE1KTtcblxuICAgIGNvbnN0IGRpdjE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTcuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5U2VsZWN0Jyk7XG5cbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSAnTG93JztcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gJ0xvdyc7XG5cbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uMS52YWx1ZSA9ICdNZWRpdW0nO1xuICAgIG9wdGlvbjEuaW5uZXJIVE1MID0gJ01lZGl1bSc7XG5cbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uMi52YWx1ZSA9ICdIaWdoJztcbiAgICBvcHRpb24yLmlubmVySFRNTCA9ICdIaWdoJztcblxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgZGl2MTguYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBkaXYxNy5hcHBlbmRDaGlsZChkaXYxOCk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNyk7XG5cblxuICAgIGNvbnN0IGRpdjMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MzEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjMyLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjMyLmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcblxuICAgIGNvbnN0IHNlbGVjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XG4gICAgc2VsZWN0Mi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xuICAgIHNlbGVjdDIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eVNlbGVjdCcpO1xuICAgIHNlbGVjdDIuaWQgPSAncHJvamVjdHNTZWxlY3QnO1xuXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0c0Z1bmMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gYWxsUHJvamVjdHMubGlzdFtpXS50aXRsZTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBhbGxQcm9qZWN0cy5saXN0W2ldLnRpdGxlO1xuICAgICAgc2VsZWN0Mi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIGRpdjMyLmFwcGVuZENoaWxkKHNlbGVjdDIpO1xuICAgIGRpdjMxLmFwcGVuZENoaWxkKGRpdjMyKTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjMxKTtcblxuICAgIGNvbnN0IGRpdjE5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9vdGVyJyk7XG5cblxuICAgIGNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24zLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24zLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnYnRuLXNlY29uZGFyeScpO1xuICAgIGJ1dHRvbjMuc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcbiAgICBidXR0b24zLmlubmVySFRNTCA9ICdDbG9zZSc7XG5cbiAgICBjb25zdCBidXR0b240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uNC50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uNC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XG4gICAgYnV0dG9uNC5pZCA9ICd0ZXN0UHJvamVjdCc7XG4gICAgYnV0dG9uNC5pbm5lckhUTUwgPSAnQWRkIFRhc2snO1xuICAgIGJ1dHRvbjQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVUYXNrJyk7XG5cbiAgICBkaXYxOS5hcHBlbmRDaGlsZChidXR0b24zKTtcbiAgICBkaXYxOS5hcHBlbmRDaGlsZChidXR0b240KTtcblxuXG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY4KTtcbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjkpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2MTkpO1xuICAgIGRpdjYuYXBwZW5kQ2hpbGQoZGl2Nyk7XG4gICAgZGl2NS5hcHBlbmRDaGlsZChkaXY2KTtcblxuICAgIHJldHVybiBkaXY1O1xuICB9LFxuICBlZGl0TW9kYWwoKSB7XG4gICAgY29uc3QgZGl2NTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY1MC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4YW1wbGVNb2RhbDMnKTtcbiAgICBkaXY1MC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICAgIGRpdjUwLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBkaXY1MC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgZGl2NTAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnZXhhbXBsZU1vZGFsTGFiZWwnKTtcbiAgICBkaXY1MC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIGNvbnN0IGRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpYWxvZycpO1xuXG4gICAgY29uc3QgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuXG4gICAgY29uc3QgZGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjguY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaDUuc2V0QXR0cmlidXRlKCdpZCcsICdleGFtcGxlTW9kYWxMYWJlbEVkaXQnKTtcbiAgICBoNS5jbGFzc0xpc3QuYWRkKCdtb2RhbC10aXRsZScpO1xuICAgIGg1LmlubmVySFRNTCA9ICdFZGl0IHRoZSB0YXNrIGluZm9ybWF0aW9uJztcblxuXG4gICAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjIudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuLWNsb3NlJyk7XG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJyk7XG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlRWRpdCcpO1xuXG4gICAgZGl2OC5hcHBlbmRDaGlsZChoNSk7XG4gICAgZGl2OC5hcHBlbmRDaGlsZChidXR0b24yKTtcblxuXG4gICAgY29uc3QgZGl2OSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYm9keScpO1xuXG4gICAgY29uc3QgZGl2MTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMC5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTEuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIHAxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3InKTtcblxuICAgIGRpdjExLmFwcGVuZENoaWxkKHAxKTtcbiAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMSk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMCk7XG5cblxuICAgIGNvbnN0IGRpdjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjIxLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjIxLmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcblxuXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDEuaHRtbEZvciA9ICd0aXRsZSc7XG4gICAgbGFiZWwxLmlubmVySFRNTCA9ICdUaXRsZSc7XG5cbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0Mi50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0Mi5pZCA9ICd0aXRsZUVkaXQnO1xuICAgIGlucHV0Mi5uYW1lID0gJ3RpdGxlJztcblxuXG4gICAgZGl2MjEuYXBwZW5kQ2hpbGQobGFiZWwxKTtcbiAgICBkaXYyMS5hcHBlbmRDaGlsZChpbnB1dDIpO1xuICAgIGRpdjEyLmFwcGVuZENoaWxkKGRpdjIxKTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEyKTtcblxuXG4gICAgY29uc3QgZGl2MTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYxMy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcblxuICAgIGNvbnN0IGRpdjE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTQuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XG4gICAgZGl2MTQuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xuXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDIuaHRtbEZvciA9ICdkZXNjcmlwdGlvbic7XG4gICAgbGFiZWwyLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICBjb25zdCB0ZXh0YXJlYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhMS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcbiAgICB0ZXh0YXJlYTEuaWQgPSAnZGVzY3JpcHRpb25FZGl0JztcbiAgICB0ZXh0YXJlYTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgZGVzY3JpcHRpb24gaGVyZScpO1xuICAgIHRleHRhcmVhMS5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcblxuXG4gICAgZGl2MTQuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgICBkaXYxNC5hcHBlbmRDaGlsZCh0ZXh0YXJlYTEpO1xuICAgIGRpdjEzLmFwcGVuZENoaWxkKGRpdjE0KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEzKTtcblxuICAgIGNvbnN0IGRpdjE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTUuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE2LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuXG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbDMuaHRtbEZvciA9ICdkdWVEYXRlJztcbiAgICBsYWJlbDMuaW5uZXJIVE1MID0gJ0R1ZURhdGUnO1xuXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlRWRpdCcpO1xuICAgIGlucHV0MS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0MS5uYW1lID0gJ2R1ZURhdGUnO1xuXG4gICAgZGl2MTYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcbiAgICBkaXYxNi5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgIGRpdjE1LmFwcGVuZENoaWxkKGRpdjE2KTtcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjE1KTtcblxuICAgIGNvbnN0IGRpdjE3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MTcuY2xhc3NMaXN0LmFkZCgncm93Jyk7XG5cbiAgICBjb25zdCBkaXYxOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcblxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5U2VsZWN0RWRpdCcpO1xuXG4gICAgY29uc3QgcHJpb3JzID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcnNbaV07XG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gcHJpb3JzW2ldO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgZGl2MTguYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICBkaXYxNy5hcHBlbmRDaGlsZChkaXYxOCk7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNyk7XG5cbiAgICBjb25zdCBkaXYzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjMxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuXG4gICAgY29uc3QgZGl2MzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdtdC0zJyk7XG5cbiAgICBkaXYzMS5hcHBlbmRDaGlsZChkaXYzMik7XG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYzMSk7XG5cbiAgICBjb25zdCBkaXYxOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjE5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvb3RlcicpO1xuXG4gICAgY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbjMudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XG4gICAgYnV0dG9uMy5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xuICAgIGJ1dHRvbjMuaW5uZXJIVE1MID0gJ0Nsb3NlJztcblxuICAgIGNvbnN0IGJ1dHRvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b240LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICAgIGJ1dHRvbjQuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcbiAgICBidXR0b240LmlubmVySFRNTCA9ICdFZGl0IFRhc2snO1xuICAgIGJ1dHRvbjQuaWQgPSAndXBkYXRlVGFza01vZGFsJztcblxuICAgIGRpdjE5LmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xuICAgIGRpdjE5LmFwcGVuZENoaWxkKGJ1dHRvbjQpO1xuXG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY4KTtcbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjkpO1xuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2MTkpO1xuICAgIGRpdjYuYXBwZW5kQ2hpbGQoZGl2Nyk7XG4gICAgZGl2NTAuYXBwZW5kQ2hpbGQoZGl2Nik7XG5cbiAgICByZXR1cm4gZGl2NTA7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jcztcbiIsImltcG9ydCBBbGxQcm9qZWN0cyBmcm9tICcuL0FsbFByb2plY3RzJztcblxuY29uc3QgYWxsUHJvamVjdHMgPSBuZXcgQWxsUHJvamVjdHMoKTtcblxuY29uc3QgYWxsUHJvamVjdHNGdW5jID0gKCkgPT4gYWxsUHJvamVjdHM7XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFByb2plY3RzRnVuYztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdCc7XG5pbXBvcnQgZnVuY3MgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgYWxsUHJvamVjdHNGdW5jIGZyb20gJy4vb2JqZWN0JztcblxuY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG5jb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xuXG5pZiAobG9jYWxQcm9qZWN0cyAhPSBudWxsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbSA9IG5ldyBQcm9qZWN0KGxvY2FsUHJvamVjdHMubGlzdFtpXS50aXRsZSwgbG9jYWxQcm9qZWN0cy5saXN0W2ldLmRlc2NyaXB0aW9uKTtcbiAgICBhbGxQcm9qZWN0cy5hZGRFbGVtZW50KGVsZW0pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYWxQcm9qZWN0cy5saXN0W2ldLmxpc3QubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IG9iaiA9IGxvY2FsUHJvamVjdHMubGlzdFtpXS5saXN0W2pdO1xuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKG9iai50aXRsZSwgb2JqLmRlc2MsIG9iai5kYXRlLCBvYmoucHJpb3JpdHksIG9iai5jaGVjayk7XG4gICAgICBlbGVtLmFkZEVsZW1lbnQodGFzayk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGxpc3RzLmNyZWF0ZVRvZG9MaXN0KCk7XG4gIGxpc3RzLmNyZWF0ZVByb2plY3RzTGlzdCgpO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZ1bmNzLmJ1aWxkTW9kYWwoKSk7XG4gIGNvbnN0IG1vZGFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbDInKTtcbiAgbW9kYWwyLmFwcGVuZENoaWxkKGZ1bmNzLmVkaXRNb2RhbCgpKTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVRhc2snKTtcbiAgY3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZnVuY3MuYWRkVGFzayhhbGxQcm9qZWN0cyk7IH0pO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdCcpO1xuICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBmdW5jcy5hZGRQcm9qZWN0KGFsbFByb2plY3RzKTsgfSk7XG59O1xuXG5pbml0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==