var $ = require('jquery');
var View = require('jquery-simple-view');
var MainNav = require('js/components/mainNav');

module.exports = View.extend({

    delegatedEvents: false,

    initialize: function() {

        this.setupBaseComponents();

    },

    events: {
        'click .mainHeader .signIn': function(e) {

            e.preventDefault();
            this.showLoginModal();

        },

        'one:click .gallery li a': function(e) {

            e.preventDefault();
            this.loadImageGallery();

        },

        'keyup .mainSearch .query': function(e) {

            e.preventDefault();
            this.loadMainSearch();

        }

    },

    setupBaseComponents: function() {

        this.mainNav = this.addView(new MainNav({$el: $('.mainNav')}));

        return this;

    },

    showLoginModal: function(e) {

        require.ensure([], function() {

            var LoginModal = require('js/components/loginModal');
            new LoginModal();

        });

    },

    loadImageGallery: function(e) {

        require.ensure([], function() {

            var ImageGallery = require('js/components/imageGallery');

            new ImageGallery({$el: $('.gallery li a')});
        });

    },

    loadMainSearch: function(e) {

        require.ensure([], function() {

            var MainSearch = require('js/components/mainSearch');
            new MainSearch({$el: $('.mainSearch')});

        });

    }




});
