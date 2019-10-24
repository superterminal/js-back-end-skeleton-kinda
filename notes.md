sorting -
    search: (req, res) => {
        const { search } = req.body;

        Article
            .find({})
            .then(articles => {
                const searchedArticles = 
                    articles.filter(a => 
                    a.toLowerCase().includes(search.toLowerCase()
                ));

                res.render('template', { articles });
            })
    }

to add middleware for isLogged - 
    app.use((req, res, next) => {
        res.locals.isLogged = req.cookies[config.cookie] !== undefined;
    })