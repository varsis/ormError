// Example model

var db = require('orm').db;

var Article = db.define('subarticle', {
    title: String,
    url: String,
    text: String
}, {
    hooks: {
        beforeValidation: function() {
            this.text = 'changed';
        },
        afterSave: function() {
            console.log('afterSave');

        }
    }
});

Article.sync();
