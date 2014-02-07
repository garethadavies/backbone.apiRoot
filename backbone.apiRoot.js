/*
Backbone Datasource v1.0.0
Extends Backbone Model and Collection and sets the url via a pre-defined dataSource root
*/

/*
Requires:
  * Backbone
  * Underscore
Contents:
  * Extend Backbone Model
  * Extend Backbone Collection
Author(s):
  * Gareth Davies @GarethDavies_Me
*/

;(function(window, document, Backbone, _, undefined) {

	'use strict';

	// Attach a url reference to the model prototype
  Backbone.Model.prototype.urlReference = Backbone.Model.prototype.url;

  /*
  Extend Backbone Model
  @extends Backbone.Model.prototype
  */
  _.extend(Backbone.Model.prototype, {

    url: function() {

      // Set the api root defaults
      _.defaults(Backbone.apiRoot, {

        root: '/',
        dataType: ''

      });

			// Return the url based on the apiRoot and model's url
			return Backbone.apiRoot + this.urlReference() + Backbone.apiRoot.dataType;

    }

  });

  /*
  Extend Backbone Collection
  @extends Backbone.Collection.prototype
  */
  _.extend(Backbone.Collection.prototype, {

    url: function() {

      var
      proto = this.constructor.prototype,
      urlSource = (_.isFunction(proto.urlSource)) ? proto.urlSource() : proto.urlSource;

      // Return the url based on the apiRoot and collection's urlSource property
      return Backbone.apiRoot.root + urlSource + Backbone.apiRoot.dataType;

    }

  });

})(this, document, Backbone, _);
