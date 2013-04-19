Backbone apiRoot
================

Define your apiRoot once and use it within all your collection and models

Version currently live: **v0.1.0**

Requirements
------------

* Backbone - http://backbonejs.org
* Underscore - http://underscorejs.com

Getting up and running
----------------------

### Download the script

* [backbone.apiRoot.js](https://raw.github.com/garethadavies/backbone.apiRoot/master/backbone.apiRoot.js)
* [backbone.apiRoot.min.js](https://raw.github.com/garethadavies/backbone.apiRoot/master/backbone.apiRoot.min.js)

### Reference the script

This script requires Backbone and Underscore, so make sure you reference it after those files.

```js
<script src="path/to/file/backbone.apiRoot.min.js"></script>
```

### Define your api root

You will need to define your api root within your app before any models or collections are extended.

```js
Backbone.apiRoot = 'http://api.website.com/';
```

### urlSource property

Your collections will require a urlSource property be set.

```js
var Collection = Backbone.Collection.extend({

  urlSource: 'users'

});
```

This **replaces** the regular 'url' collection property and is a reference to the section of the api rest pattern that is unique to the particular collection, e.g. A list of users is requested from 'http://api.website.com/users', will now simply be 'users'.

### Example

```js
var Model = Backbone.Model.extend({

  urlRoot: 'users',

  idAttribute: 'id'

});

var Collection = Backbone.Collection.extend({

	model: Model,

	// Make sure this is set
  urlSource: 'users'

});

// Create our collection
var myCollection = new Collection();

// Fetch the data
myCollection.fetch();

// Create our model
var myModel = new Model();

// Set the id of the model
myModel.set({ id: 321 });

// Fetch the data
myModel.fetch();
```

Changelog
---------

### Version 0.1.0

* Initial commit