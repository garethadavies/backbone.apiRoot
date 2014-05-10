# Backbone apiRoot

Define your apiRoot once and use it within all your collection and models

Version currently live: **v0.1.0**

### Requirements

* jQuery (1.8.3) - http://jquery.com
* Backbone (1.0.0) - http://backbonejs.org
* Underscore (1.4.4) - http://underscorejs.com

### Getting up and running

#### Download the script

* [backbone.apiRoot.js](https://raw.github.com/garethadavies/backbone.apiRoot/master/backbone.apiRoot.js)

#### Reference the script

This script requires jQuery, Backbone and Underscore, so make sure you add it after those files.

```js
<script src="path/to/file/backbone.apiRoot.js"></script>
```

#### Define your api root

You will need to define your api root within your app before any models or collections are included.

```js
Backbone.apiRoot = {

	root: 'http://api.website.com/', // Default: '/'
	dataType: '.json' // Optional - Default: ''

};
```

The ```root``` value is prefixed to all request URLs. If a ```dataType``` is supplied, it will be appended to URL.

With this in place, you are now set up to create collections and models.

### Using apiRoot

#### urlSource property

Your collections will now require a ```urlSource``` property be set.

This **replaces** the regular ```url``` collection property and is a reference to the section of the api rest pattern that is unique to the collection.

e.g. A list of users is requested from http://api.website.com/users, will now simply be 'users'

#### Example

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
```

The request for this collection will be made to http://api.website.com/users or http://api.website.com/users.json if a ```dataType``` has been set.

```js
// Create our model
var myModel = new Model();

// Set the id of the model
myModel.set({ id: 321 });

// Fetch the data
myModel.fetch();
```

The request for this model will be made to http://api.website.com/users/321 or http://api.website.com/users/321.json if a ```dataType``` has been set.
