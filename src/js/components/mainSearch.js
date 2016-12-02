var View = require('jquery-simple-view');

require('fastsearch');

module.exports = View.extend({

    initialize: function() {

        this.$('.query').fastsearch({
            'onItemSelect': 'fillInput',
		    'noResultsText': 'No results found',
		    'onItemCreate': function($item, model, fastsearchApi){
		        $item.append(model.subtitle);
		    }
        });

    }

});
