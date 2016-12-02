var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function() {
    	this.$el.simpleLightbox();
    }

});