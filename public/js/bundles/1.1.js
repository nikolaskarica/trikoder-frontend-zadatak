webpackJsonp([1],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	var View = __webpack_require__(3);

	__webpack_require__(10);

	module.exports = View.extend({

	    initialize: function(options) {

	        $.simpleLightbox.open({
	            content: $('.slbContent').load('public/login-modal.html'),
	            elementClass: 'slbContentEl'
	        });
	    }

	});


/***/ }

});