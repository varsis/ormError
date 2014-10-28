var db = require('orm').db,
    Article = db.models.article,
    SubArticle = db.models.subarticle;

exports.index = function(req, res) {

    var article = new Article({
        title: 'asdf',
        url: 'asdfasd',
        text: 'some text'
    });

    Article.find(function(err, articles) {
        console.log('save article')
        article.save(function(err, article) {

            var subarticle = new SubArticle({
                title: 'asdf',
                url: 'asdfasd',
                text: 'some text'
            })
            console.log('setMain');
            article.setMain(subarticle,function(err){
            console.log('after set main');
            //article.addSubarticles(subarticle, function(err) {

               // article.addSubarticles(new SubArticle({
             //       title: 'asdf',
              //      url: 'asdfasd',
             //       text: 'some text'
             //   }), function(err) {

                    if (err) throw new Error(err);
                    res.render('home/index', {
                        title: 'Generator-Express MVC',
                        articles: articles
                    });
//
             //   })
//
//
            //});
        });
        });
    });
};
