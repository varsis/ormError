// Example model

var db = require('orm').db;

var Article = db.define('article', {
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


var SubArticle = db.models.subarticle;
Article.hasOne('main',SubArticle,{});
Article.hasMany('subarticles',SubArticle,{},{
    reverse:'parent'
});
Article.sync();
