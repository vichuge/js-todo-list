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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3QvLi9zcmMvQWxsUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0Ly4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNERBQTRELG1CQUFtQiw4QkFBOEIsOEJBQThCLEtBQUssaUJBQWlCLDhCQUE4QixLQUFLLGtCQUFrQixnQ0FBZ0MsS0FBSyxlQUFlLDRCQUE0QixLQUFLLGlCQUFpQixtQkFBbUIsS0FBSyxzQkFBc0Isa0JBQWtCLEtBQUssc0JBQXNCLHNCQUFzQixLQUFLLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSwyQ0FBMkMsbUJBQW1CLDhCQUE4Qiw4QkFBOEIsS0FBSyxpQkFBaUIsOEJBQThCLEtBQUssa0JBQWtCLGdDQUFnQyxLQUFLLGVBQWUsNEJBQTRCLEtBQUssaUJBQWlCLG1CQUFtQixLQUFLLHNCQUFzQixrQkFBa0IsS0FBSyxzQkFBc0Isc0JBQXNCLEtBQUssZ0JBQWdCLGlCQUFpQixLQUFLLHVCQUF1QjtBQUNsdEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0RBQWU7QUFDdkMsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDamVtQjs7QUFFeEMsd0JBQXdCLGlEQUFXOztBQUVuQzs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUNOL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ0s7QUFDTTtBQUNMO0FBQ0M7QUFDVzs7QUFFdkM7QUFDQSxvQkFBb0IsZ0RBQWU7O0FBRW5DO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRCxxQkFBcUIsNkNBQU87QUFDNUI7QUFDQSxtQkFBbUIsdUNBQXVDO0FBQzFEO0FBQ0EsdUJBQXVCLDBDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBb0I7QUFDdEIsRUFBRSw2REFBd0I7O0FBRTFCO0FBQ0Esb0JBQW9CLHNEQUFnQjtBQUNwQztBQUNBLHFCQUFxQixxREFBZTs7QUFFcEM7QUFDQSw4Q0FBOEMsQ0FBQyxtREFBYSxjQUFjLEVBQUU7O0FBRTVFO0FBQ0EsaURBQWlELENBQUMsc0RBQWdCLGNBQWMsRUFBRTtBQUNsRjs7QUFFQSxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LWdyb3VwLWl0ZW0ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJncmVlbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ5ZWxsb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXHJcXG59XFxyXFxuXFxyXFxuLmJyZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udHdoaXRlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbGljbGlja2FibGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3Ige1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5iZ3JlZW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5ieWVsbG93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxyXFxufVxcclxcblxcclxcbi5icmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXNlbGVjdCB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2xpY2xpY2thYmxlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQWxsUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5saXN0ID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRFbGVtZW50KGVsZW0pIHtcclxuICAgIHRoaXMubGlzdC5wdXNoKGVsZW0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRWxlbWVudCh0aXRsZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKHRoaXMubGlzdFtpXS50aXRsZSA9PT0gdGl0bGUpIHRoaXMubGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxQcm9qZWN0cztcclxuIiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSAnZGVmYXVsdCcsIGRlc2NyaXB0aW9uID0gJ2RlZmF1bHQgcHJvamVjdCcpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkRWxlbWVudChlbGVtKSB7XHJcbiAgICB0aGlzLmxpc3QucHVzaChlbGVtKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUVsZW1lbnQodGl0bGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RbaV0udGl0bGUgPT09IHRpdGxlKSB0aGlzLmxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVjaykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jaGVjayA9IGNoZWNrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgYWxsUHJvamVjdHNGdW5jIGZyb20gJy4vb2JqZWN0JztcclxuXHJcbmNvbnN0IG5vdGhpbmcgPSAobikgPT4gbjtcclxuXHJcbmNvbnN0IGNoYW5nZUNoZWNrID0gKHByb2plY3QsIHRpdGxlUHJvamVjdCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGl0bGVQcm9qZWN0ID09PSBwcm9qZWN0Lmxpc3RbaV0udGl0bGUpIHtcclxuICAgICAgbGV0IGNoayA9IHByb2plY3QubGlzdFtpXS5jaGVjaztcclxuICAgICAgaWYgKGNoayA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNoayA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoayA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0c0Z1bmMoKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxufTtcclxuXHJcbmNvbnN0IGxpc3RzID0ge1xyXG4gIGNyZWF0ZVByb2plY3RzTGlzdCgpIHtcclxuICAgIGNvbnN0IHsgbGlzdCB9ID0gYWxsUHJvamVjdHNGdW5jKCk7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0xpc3QnKTtcclxuICAgIHVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpMS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgIGxpMS5pbm5lckhUTUwgPSAnQWxsIHByb2plY3RzJztcclxuICAgIGxpMS5pZCA9ICdsaWNsaWNrYWJsZSc7XHJcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY3JlYXRlVG9kb0xpc3QoKTsgfSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpO1xyXG4gICAgY29uc3QgbWFwcHkgPSBsaXN0Lm1hcCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpO1xyXG4gICAgICBsaS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICBsaS5pZCA9ICdsaWNsaWNrYWJsZSc7XHJcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNyZWF0ZVRvZG9MaXN0KHByb2plY3QpOyB9KTtcclxuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICByZXR1cm4gdWw7XHJcbiAgICB9KS5qb2luKCcnKTtcclxuICAgIG5vdGhpbmcobWFwcHkpO1xyXG4gIH0sXHJcbiAgY3JlYXRlVG9kb0xpc3QodGFza3MgPSAnZGVmYXVsdCcpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29sLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRvZG9UYXNrLmNsYXNzTGlzdC5hZGQoJ3RvZG9UYXNrJyk7XHJcblxyXG4gICAgaWYgKHRhc2tzICE9PSAnZGVmYXVsdCcpIHtcclxuICAgICAgcnVuTGlzdCh0b2RvVGFzaywgdGFza3MsIHRhc2tzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIHJ1bkxpc3QodG9kb1Rhc2ssIGFsbFByb2plY3RzLmxpc3RbaV0sIHRhc2tzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcm93LmFwcGVuZENoaWxkKGNvbCwgdGFza3MubGlzdCk7XHJcbiAgICBjb2wuYXBwZW5kQ2hpbGQodG9kb1Rhc2spO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGlmICh0eXBlb2YgdGFza3MudGl0bGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdBbGwgcHJvamVjdHMnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGFza3MudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBlZGl0VGFzayA9IChteVRhc2ssIG5leHRMaXN0KSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVFZGl0JykudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25FZGl0JykudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0RWRpdCcpLnZhbHVlO1xyXG5cclxuICBjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKTtcclxuICBlcnJvcnMuaW5uZXJIVE1MID0gJyc7XHJcbiAgaWYgKHRpdGxlID09PSAnJykge1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCArPSAnVGl0bGUgY2FuXFwndCBiZSBibGFuayc7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIHtcclxuICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJ0Rlc2NyaXB0aW9uIGNhblxcJ3QgYmUgYmxhbmsnO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoZHVlRGF0ZSA9PT0gJycpIHtcclxuICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJyBEYXRlIGNhblxcJ3QgYmUgYmxhbmsnO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbXlUYXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgbXlUYXNrLmRlc2MgPSBkZXNjcmlwdGlvbjtcclxuICBteVRhc2suZGF0ZSA9IGR1ZURhdGU7XHJcbiAgbXlUYXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUVkaXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkVkaXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRWRpdCcpLmNsaWNrKCk7XHJcbiAgbGlzdHMuY3JlYXRlVG9kb0xpc3QobmV4dExpc3QpO1xyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3QsIHRpdGxlVGFzaywgbGlzdCA9ICdkZWZhdWx0JykgPT4ge1xyXG4gIGNvbnN0IHRpdGxlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUVkaXQnKTtcclxuICBjb25zdCBkZXNjRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkVkaXQnKTtcclxuICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlRWRpdCcpO1xyXG4gIGNvbnN0IHByaW9yRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdEVkaXQnKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGlmICh0aXRsZVRhc2sgPT09IHByb2plY3QubGlzdFtpXS50aXRsZSkge1xyXG4gICAgICB0aXRsZUVkaXQudmFsdWUgPSBwcm9qZWN0Lmxpc3RbaV0udGl0bGU7XHJcbiAgICAgIGRlc2NFZGl0LnZhbHVlID0gcHJvamVjdC5saXN0W2ldLmRlc2M7XHJcbiAgICAgIGRhdGVFZGl0LnZhbHVlID0gcHJvamVjdC5saXN0W2ldLmRhdGU7XHJcbiAgICAgIHByaW9yRWRpdFswXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIHByaW9yRWRpdFsxXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIHByaW9yRWRpdFsyXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJpb3JFZGl0Lmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgaWYgKHByb2plY3QubGlzdFtpXS5wcmlvcml0eSA9PT0gcHJpb3JFZGl0W2pdLnZhbHVlKSBwcmlvckVkaXRbal0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZVRhc2tNb2RhbCcpO1xyXG4gICAgICBidG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBlZGl0VGFzayhwcm9qZWN0Lmxpc3RbaV0sIGxpc3QpOyB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKHByb2plY3QsIHRpdGxlUHJvamVjdCwgbGlzdCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBpZiAodGl0bGVQcm9qZWN0ID09PSBwcm9qZWN0Lmxpc3RbaV0udGl0bGUpIHtcclxuICAgICAgcHJvamVjdC5saXN0LnNwbGljZShpLCAxKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBhbGxQcm9qZWN0c0Z1bmMoKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlQcm9qZWN0cycpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxuICBpZiAobGlzdCA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICBsaXN0cy5jcmVhdGVUb2RvTGlzdCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0cy5jcmVhdGVUb2RvTGlzdChwcm9qZWN0KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBydW5MaXN0ID0gKHRvZG9UYXNrLCB0YXNrcywgbmV4dExpc3QpID0+IHtcclxuICBjb25zdCBtYXBweSA9IHRhc2tzLmxpc3QubWFwKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTtcclxuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xyXG4gICAgICBjYXNlICdMb3cnOlxyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2JncmVlbicpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdNZWRpdW0nOlxyXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2J5ZWxsb3cnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnSGlnaCc6XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYnJlZCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgnZC1mbGV4Jyk7XHJcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJyk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNoZWNrLWlucHV0Jyk7XHJcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZCgnbWUtMScpO1xyXG4gICAgaW5wdXQxLnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgaW5wdXQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGFuZ2VDaGVjayh0YXNrcywgdGFzay50aXRsZSk7IH0pO1xyXG4gICAgaWYgKHRhc2suY2hlY2sgPT09IHRydWUpIGlucHV0MS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XHJcblxyXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnbWItMScpO1xyXG4gICAgaDUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lclRleHQgPSB0YXNrLmRlc2M7XHJcblxyXG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xyXG4gICAgc21hbGwuaW5uZXJIVE1MID0gdGFzay5kYXRlO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b24yLmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgICBidXR0b24yLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbjIuaW5uZXJIVE1MID0gJ0VkaXQnO1xyXG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdG9nZ2xlJywgJ21vZGFsJyk7XHJcbiAgICBidXR0b24yLnNldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnLCAnI2V4YW1wbGVNb2RhbDMnKTtcclxuICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHVwZGF0ZVRhc2sodGFza3MsIHRhc2sudGl0bGUsIG5leHRMaXN0KTsgfSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBpbnB1dDIuY2xhc3NMaXN0LmFkZCgnYnRuLXByaW1hcnknKTtcclxuICAgIGlucHV0Mi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBpbnB1dDIuaWQgPSAnZGVsZXRlaWQnO1xyXG4gICAgaW5wdXQyLmlubmVySFRNTCA9ICdEZWxldGUnO1xyXG4gICAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBkZWxldGVUYXNrKHRhc2tzLCB0YXNrLnRpdGxlLCBuZXh0TGlzdCk7IH0pO1xyXG5cclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaDUpO1xyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoc21hbGwpO1xyXG4gICAgZGl2Mi5hcHBlbmRDaGlsZChidXR0b24yKTtcclxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcclxuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgIHRvZG9UYXNrLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIHJldHVybiB0b2RvVGFzaztcclxuICB9KS5qb2luKCcnKTtcclxuICBub3RoaW5nKG1hcHB5KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsaXN0cztcclxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdCc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBhbGxQcm9qZWN0c0Z1bmMgZnJvbSAnLi9vYmplY3QnO1xyXG5cclxuZnVuY3Rpb24gZW1wdHlJbnB1dHMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWUgPSAnJztcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlMicpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uMicpLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJykuY2xpY2soKTtcclxufTtcclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwyID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZTInKS5jbGljaygpO1xyXG59O1xyXG5cclxuY29uc3QgZnVuY3MgPSB7XHJcbiAgYWRkVGFzayhhbGxQcm9qZWN0cykge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5U2VsZWN0JykudmFsdWU7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1NlbGVjdCcpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKHRpdGxlID09PSAnJykge1xyXG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdUaXRsZSBjYW5cXCd0IGJlIGJsYW5rJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xyXG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdEZXNjcmlwdGlvbiBjYW5cXCd0IGJlIGJsYW5rJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGR1ZURhdGUgPT09ICcnKSB7XHJcbiAgICAgIGVycm9ycy5pbm5lckhUTUwgKz0gJyBEYXRlIGNhblxcJ3QgYmUgYmxhbmsnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3ROYW1lID09PSAnJykge1xyXG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdDcmVhdGUgYSBwcm9qZWN0IGZpcnN0JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW0gPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmYWxzZSk7XHJcbiAgICBsZXQgcHJvamVjdCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChhbGxQcm9qZWN0cy5saXN0W2ldLnRpdGxlID09PSBwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIHByb2plY3QgPSBhbGxQcm9qZWN0cy5saXN0W2ldO1xyXG4gICAgICAgIHByb2plY3QuYWRkRWxlbWVudChlbGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGlzdHMuY3JlYXRlVG9kb0xpc3QocHJvamVjdCk7XHJcbiAgICBlbXB0eUlucHV0cygpO1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxuICB9LFxyXG4gIGFkZFByb2plY3QocHJvamVjdHMpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlMicpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24yJykudmFsdWU7XHJcblxyXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yMicpO1xyXG4gICAgZXJyb3JzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKHRpdGxlID09PSAnJykge1xyXG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdUaXRsZSBjYW5cXCd0IGJlIGJsYW5rJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykge1xyXG4gICAgICBlcnJvcnMuaW5uZXJIVE1MICs9ICdEZXNjcmlwdGlvbiBjYW5cXCd0IGJlIGJsYW5rJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNTZWxlY3QnKTtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gdGl0bGU7XHJcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICBzZWxlY3QyLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcblxyXG4gICAgY29uc3QgZWxlbSA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICBwcm9qZWN0cy5saXN0LnB1c2goZWxlbSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ215UHJvamVjdHMnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgICBlbXB0eUlucHV0cygpO1xyXG4gICAgY2xvc2VNb2RhbDIoKTtcclxuICAgIGxpc3RzLmNyZWF0ZVByb2plY3RzTGlzdCgpO1xyXG4gICAgbGlzdHMuY3JlYXRlVG9kb0xpc3QoKTtcclxuICB9LFxyXG4gIGJ1aWxkTW9kYWwoKSB7XHJcbiAgICBjb25zdCBkaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXY1LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhhbXBsZU1vZGFsJyk7XHJcbiAgICBkaXY1LmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICBkaXY1LmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIGRpdjUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgZGl2NS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsICdleGFtcGxlTW9kYWxMYWJlbCcpO1xyXG4gICAgZGl2NS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICBjb25zdCBkaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXY2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpYWxvZycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjguY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaDUuc2V0QXR0cmlidXRlKCdpZCcsICdleGFtcGxlTW9kYWxMYWJlbCcpO1xyXG4gICAgaDUuY2xhc3NMaXN0LmFkZCgnbW9kYWwtdGl0bGUnKTtcclxuICAgIGg1LmlubmVySFRNTCA9ICdFbnRlciB0aGUgdGFzayBpbmZvcm1hdGlvbic7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uMi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidXR0b24yLmNsYXNzTGlzdC5hZGQoJ2J0bi1jbG9zZScpO1xyXG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtZGlzbWlzcycsICdtb2RhbCcpO1xyXG4gICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKTtcclxuICAgIGJ1dHRvbjIuaWQgPSAnY2xvc2UnO1xyXG5cclxuICAgIGRpdjguYXBwZW5kQ2hpbGQoaDUpO1xyXG4gICAgZGl2OC5hcHBlbmRDaGlsZChidXR0b24yKTtcclxuXHJcbiAgICBjb25zdCBkaXY5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXY5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJvZHknKTtcclxuXHJcbiAgICBjb25zdCBkaXYxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTAuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjExLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG5cclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgIHAxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3InKTtcclxuXHJcbiAgICBkaXYxMS5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMSk7XHJcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEwKTtcclxuXHJcbiAgICBjb25zdCBkaXYxMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTIuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjIxLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbDEuaHRtbEZvciA9ICd0aXRsZSc7XHJcbiAgICBsYWJlbDEuaW5uZXJIVE1MID0gJ1RpdGxlJztcclxuXHJcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCc7XHJcbiAgICBpbnB1dDIuaWQgPSAndGl0bGUnO1xyXG4gICAgaW5wdXQyLm5hbWUgPSAndGl0bGUnO1xyXG5cclxuICAgIGRpdjIxLmFwcGVuZENoaWxkKGxhYmVsMSk7XHJcbiAgICBkaXYyMS5hcHBlbmRDaGlsZChpbnB1dDIpO1xyXG4gICAgZGl2MTIuYXBwZW5kQ2hpbGQoZGl2MjEpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMik7XHJcblxyXG4gICAgY29uc3QgZGl2MTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjEzLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYxNC5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuICAgIGRpdjE0LmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwyLmh0bWxGb3IgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgbGFiZWwyLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRhcmVhMS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRyb2wnKTtcclxuICAgIHRleHRhcmVhMS5pZCA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICB0ZXh0YXJlYTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgZGVzY3JpcHRpb24gaGVyZScpO1xyXG4gICAgdGV4dGFyZWExLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG5cclxuICAgIGRpdjE0LmFwcGVuZENoaWxkKGxhYmVsMik7XHJcbiAgICBkaXYxNC5hcHBlbmRDaGlsZCh0ZXh0YXJlYTEpO1xyXG4gICAgZGl2MTMuYXBwZW5kQ2hpbGQoZGl2MTQpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxMyk7XHJcblxyXG4gICAgY29uc3QgZGl2MTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjE1LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYxNi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwzLmh0bWxGb3IgPSAnZHVlRGF0ZSc7XHJcbiAgICBsYWJlbDMuaW5uZXJIVE1MID0gJ0R1ZURhdGUnO1xyXG5cclxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XHJcbiAgICBpbnB1dDEudHlwZSA9ICdkYXRlJztcclxuICAgIGlucHV0MS5uYW1lID0gJ2R1ZURhdGUnO1xyXG5cclxuICAgIGRpdjE2LmFwcGVuZENoaWxkKGxhYmVsMyk7XHJcbiAgICBkaXYxNi5hcHBlbmRDaGlsZChpbnB1dDEpO1xyXG4gICAgZGl2MTUuYXBwZW5kQ2hpbGQoZGl2MTYpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNSk7XHJcblxyXG4gICAgY29uc3QgZGl2MTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjE3LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYxOC5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdEZWZhdWx0IHNlbGVjdCBleGFtcGxlJyk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eVNlbGVjdCcpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gJ0xvdyc7XHJcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gJ0xvdyc7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uMS52YWx1ZSA9ICdNZWRpdW0nO1xyXG4gICAgb3B0aW9uMS5pbm5lckhUTUwgPSAnTWVkaXVtJztcclxuXHJcbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICBvcHRpb24yLnZhbHVlID0gJ0hpZ2gnO1xyXG4gICAgb3B0aW9uMi5pbm5lckhUTUwgPSAnSGlnaCc7XHJcblxyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMik7XHJcbiAgICBkaXYxOC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgZGl2MTcuYXBwZW5kQ2hpbGQoZGl2MTgpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGRpdjMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYzMS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuXHJcbiAgICBjb25zdCBkaXYzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MzIuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XHJcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdtdC0zJyk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgc2VsZWN0Mi5jbGFzc0xpc3QuYWRkKCdmb3JtLXNlbGVjdCcpO1xyXG4gICAgc2VsZWN0Mi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnRGVmYXVsdCBzZWxlY3QgZXhhbXBsZScpO1xyXG4gICAgc2VsZWN0Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5U2VsZWN0Jyk7XHJcbiAgICBzZWxlY3QyLmlkID0gJ3Byb2plY3RzU2VsZWN0JztcclxuXHJcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGFsbFByb2plY3RzRnVuYygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5saXN0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBhbGxQcm9qZWN0cy5saXN0W2ldLnRpdGxlO1xyXG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gYWxsUHJvamVjdHMubGlzdFtpXS50aXRsZTtcclxuICAgICAgc2VsZWN0Mi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdjMyLmFwcGVuZENoaWxkKHNlbGVjdDIpO1xyXG4gICAgZGl2MzEuYXBwZW5kQ2hpbGQoZGl2MzIpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYzMSk7XHJcblxyXG4gICAgY29uc3QgZGl2MTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjE5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvb3RlcicpO1xyXG5cclxuXHJcbiAgICBjb25zdCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24zLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b24zLmNsYXNzTGlzdC5hZGQoJ2J0bi1zZWNvbmRhcnknKTtcclxuICAgIGJ1dHRvbjMuc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcclxuICAgIGJ1dHRvbjMuaW5uZXJIVE1MID0gJ0Nsb3NlJztcclxuXHJcbiAgICBjb25zdCBidXR0b240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b240LnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbjQuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bi1wcmltYXJ5Jyk7XHJcbiAgICBidXR0b240LmlkID0gJ3Rlc3RQcm9qZWN0JztcclxuICAgIGJ1dHRvbjQuaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcclxuICAgIGJ1dHRvbjQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdGVUYXNrJyk7XHJcblxyXG4gICAgZGl2MTkuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XHJcbiAgICBkaXYxOS5hcHBlbmRDaGlsZChidXR0b240KTtcclxuXHJcblxyXG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY4KTtcclxuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OSk7XHJcbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjE5KTtcclxuICAgIGRpdjYuYXBwZW5kQ2hpbGQoZGl2Nyk7XHJcbiAgICBkaXY1LmFwcGVuZENoaWxkKGRpdjYpO1xyXG5cclxuICAgIHJldHVybiBkaXY1O1xyXG4gIH0sXHJcbiAgZWRpdE1vZGFsKCkge1xyXG4gICAgY29uc3QgZGl2NTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhhbXBsZU1vZGFsMycpO1xyXG4gICAgZGl2NTAuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgIGRpdjUwLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgIGRpdjUwLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgJ2V4YW1wbGVNb2RhbExhYmVsJyk7XHJcbiAgICBkaXY1MC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICBjb25zdCBkaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXY2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWRpYWxvZycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjcuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjguY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaDUuc2V0QXR0cmlidXRlKCdpZCcsICdleGFtcGxlTW9kYWxMYWJlbEVkaXQnKTtcclxuICAgIGg1LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXRpdGxlJyk7XHJcbiAgICBoNS5pbm5lckhUTUwgPSAnRWRpdCB0aGUgdGFzayBpbmZvcm1hdGlvbic7XHJcblxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbjIudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdidG4tY2xvc2UnKTtcclxuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdkYXRhLWJzLWRpc21pc3MnLCAnbW9kYWwnKTtcclxuICAgIGJ1dHRvbjIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3NlJyk7XHJcbiAgICBidXR0b24yLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2VFZGl0Jyk7XHJcblxyXG4gICAgZGl2OC5hcHBlbmRDaGlsZChoNSk7XHJcbiAgICBkaXY4LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXY5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXY5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJvZHknKTtcclxuXHJcbiAgICBjb25zdCBkaXYxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTAuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjExLmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG5cclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcDEuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgIHAxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3InKTtcclxuXHJcbiAgICBkaXYxMS5hcHBlbmRDaGlsZChwMSk7XHJcbiAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMSk7XHJcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjEwKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGl2MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjEyLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYyMS5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuICAgIGRpdjIxLmNsYXNzTGlzdC5hZGQoJ21iLTInKTtcclxuXHJcblxyXG4gICAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsMS5odG1sRm9yID0gJ3RpdGxlJztcclxuICAgIGxhYmVsMS5pbm5lckhUTUwgPSAnVGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0JztcclxuICAgIGlucHV0Mi5pZCA9ICd0aXRsZUVkaXQnO1xyXG4gICAgaW5wdXQyLm5hbWUgPSAndGl0bGUnO1xyXG5cclxuXHJcbiAgICBkaXYyMS5hcHBlbmRDaGlsZChsYWJlbDEpO1xyXG4gICAgZGl2MjEuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcclxuICAgIGRpdjEyLmFwcGVuZENoaWxkKGRpdjIxKTtcclxuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkaXYxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTMuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjE0LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG4gICAgZGl2MTQuY2xhc3NMaXN0LmFkZCgnbWItMicpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbDIuaHRtbEZvciA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBsYWJlbDIuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGV4dGFyZWExLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udHJvbCcpO1xyXG4gICAgdGV4dGFyZWExLmlkID0gJ2Rlc2NyaXB0aW9uRWRpdCc7XHJcbiAgICB0ZXh0YXJlYTEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBZGQgZGVzY3JpcHRpb24gaGVyZScpO1xyXG4gICAgdGV4dGFyZWExLm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG5cclxuXHJcbiAgICBkaXYxNC5hcHBlbmRDaGlsZChsYWJlbDIpO1xyXG4gICAgZGl2MTQuYXBwZW5kQ2hpbGQodGV4dGFyZWExKTtcclxuICAgIGRpdjEzLmFwcGVuZENoaWxkKGRpdjE0KTtcclxuICAgIGRpdjkuYXBwZW5kQ2hpbGQoZGl2MTMpO1xyXG5cclxuICAgIGNvbnN0IGRpdjE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYxNS5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuXHJcbiAgICBjb25zdCBkaXYxNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTYuY2xhc3NMaXN0LmFkZCgnY29sLTEyJyk7XHJcblxyXG4gICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsMy5odG1sRm9yID0gJ2R1ZURhdGUnO1xyXG4gICAgbGFiZWwzLmlubmVySFRNTCA9ICdEdWVEYXRlJztcclxuXHJcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZUVkaXQnKTtcclxuICAgIGlucHV0MS50eXBlID0gJ2RhdGUnO1xyXG4gICAgaW5wdXQxLm5hbWUgPSAnZHVlRGF0ZSc7XHJcblxyXG4gICAgZGl2MTYuYXBwZW5kQ2hpbGQobGFiZWwzKTtcclxuICAgIGRpdjE2LmFwcGVuZENoaWxkKGlucHV0MSk7XHJcbiAgICBkaXYxNS5hcHBlbmRDaGlsZChkaXYxNik7XHJcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjE1KTtcclxuXHJcbiAgICBjb25zdCBkaXYxNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTcuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcblxyXG4gICAgY29uc3QgZGl2MTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjE4LmNsYXNzTGlzdC5hZGQoJ2NvbC0xMicpO1xyXG4gICAgZGl2MTguY2xhc3NMaXN0LmFkZCgnbXQtMycpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VsZWN0Jyk7XHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0RlZmF1bHQgc2VsZWN0IGV4YW1wbGUnKTtcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5U2VsZWN0RWRpdCcpO1xyXG5cclxuICAgIGNvbnN0IHByaW9ycyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JzW2ldO1xyXG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gcHJpb3JzW2ldO1xyXG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXYxOC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG4gICAgZGl2MTcuYXBwZW5kQ2hpbGQoZGl2MTgpO1xyXG4gICAgZGl2OS5hcHBlbmRDaGlsZChkaXYxNyk7XHJcblxyXG4gICAgY29uc3QgZGl2MzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdjMxLmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG5cclxuICAgIGNvbnN0IGRpdjMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYzMi5jbGFzc0xpc3QuYWRkKCdjb2wtMTInKTtcclxuICAgIGRpdjMyLmNsYXNzTGlzdC5hZGQoJ210LTMnKTtcclxuXHJcbiAgICBkaXYzMS5hcHBlbmRDaGlsZChkaXYzMik7XHJcbiAgICBkaXY5LmFwcGVuZENoaWxkKGRpdjMxKTtcclxuXHJcbiAgICBjb25zdCBkaXYxOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2MTkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZm9vdGVyJyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uMy50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidXR0b24zLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgYnV0dG9uMy5jbGFzc0xpc3QuYWRkKCdidG4tc2Vjb25kYXJ5Jyk7XHJcbiAgICBidXR0b24zLnNldEF0dHJpYnV0ZSgnZGF0YS1icy1kaXNtaXNzJywgJ21vZGFsJyk7XHJcbiAgICBidXR0b24zLmlubmVySFRNTCA9ICdDbG9zZSc7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uNC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidXR0b240LmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gICAgYnV0dG9uNC5jbGFzc0xpc3QuYWRkKCdidG4tcHJpbWFyeScpO1xyXG4gICAgYnV0dG9uNC5pbm5lckhUTUwgPSAnRWRpdCBUYXNrJztcclxuICAgIGJ1dHRvbjQuaWQgPSAndXBkYXRlVGFza01vZGFsJztcclxuXHJcbiAgICBkaXYxOS5hcHBlbmRDaGlsZChidXR0b24zKTtcclxuICAgIGRpdjE5LmFwcGVuZENoaWxkKGJ1dHRvbjQpO1xyXG5cclxuICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OCk7XHJcbiAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjkpO1xyXG4gICAgZGl2Ny5hcHBlbmRDaGlsZChkaXYxOSk7XHJcbiAgICBkaXY2LmFwcGVuZENoaWxkKGRpdjcpO1xyXG4gICAgZGl2NTAuYXBwZW5kQ2hpbGQoZGl2Nik7XHJcblxyXG4gICAgcmV0dXJuIGRpdjUwO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jcztcclxuIiwiaW1wb3J0IEFsbFByb2plY3RzIGZyb20gJy4vQWxsUHJvamVjdHMnO1xyXG5cclxuY29uc3QgYWxsUHJvamVjdHMgPSBuZXcgQWxsUHJvamVjdHMoKTtcclxuXHJcbmNvbnN0IGFsbFByb2plY3RzRnVuYyA9ICgpID0+IGFsbFByb2plY3RzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsUHJvamVjdHNGdW5jO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCBsaXN0cyBmcm9tICcuL2xpc3QnO1xyXG5pbXBvcnQgZnVuY3MgZnJvbSAnLi9tb2RhbCc7XHJcbmltcG9ydCBhbGxQcm9qZWN0c0Z1bmMgZnJvbSAnLi9vYmplY3QnO1xyXG5cclxuY29uc3QgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XHJcbmNvbnN0IGFsbFByb2plY3RzID0gYWxsUHJvamVjdHNGdW5jKCk7XHJcblxyXG5pZiAobG9jYWxQcm9qZWN0cyAhPSBudWxsKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFByb2plY3RzLmxpc3QubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGVsZW0gPSBuZXcgUHJvamVjdChsb2NhbFByb2plY3RzLmxpc3RbaV0udGl0bGUsIGxvY2FsUHJvamVjdHMubGlzdFtpXS5kZXNjcmlwdGlvbik7XHJcbiAgICBhbGxQcm9qZWN0cy5hZGRFbGVtZW50KGVsZW0pO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhbFByb2plY3RzLmxpc3RbaV0ubGlzdC5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBvYmogPSBsb2NhbFByb2plY3RzLmxpc3RbaV0ubGlzdFtqXTtcclxuICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKG9iai50aXRsZSwgb2JqLmRlc2MsIG9iai5kYXRlLCBvYmoucHJpb3JpdHksIG9iai5jaGVjayk7XHJcbiAgICAgIGVsZW0uYWRkRWxlbWVudCh0YXNrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgbGlzdHMuY3JlYXRlVG9kb0xpc3QoKTtcclxuICBsaXN0cy5jcmVhdGVQcm9qZWN0c0xpc3QoKTtcclxuXHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICBtb2RhbC5hcHBlbmRDaGlsZChmdW5jcy5idWlsZE1vZGFsKCkpO1xyXG4gIGNvbnN0IG1vZGFsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbDInKTtcclxuICBtb2RhbDIuYXBwZW5kQ2hpbGQoZnVuY3MuZWRpdE1vZGFsKCkpO1xyXG5cclxuICBjb25zdCBjcmVhdGVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVRhc2snKTtcclxuICBjcmVhdGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBmdW5jcy5hZGRUYXNrKGFsbFByb2plY3RzKTsgfSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlUHJvamVjdCcpO1xyXG4gIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGZ1bmNzLmFkZFByb2plY3QoYWxsUHJvamVjdHMpOyB9KTtcclxufTtcclxuXHJcbmluaXQoKTsiXSwic291cmNlUm9vdCI6IiJ9