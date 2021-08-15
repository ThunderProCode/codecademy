const express = require('express');
const app = express();
const apiRouter = express.Router();

app.use('/api', apiRouter);

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

apiRouter.get('/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

apiRouter.get('/quotes', (req, res, next) => {
    const fQuotes = quotes.filter(author => {
        return author.person === req.query.person;
    });

    if(req.query.person){
        res.send({quotes: fQuotes });
    }else{
        res.send({ quotes: quotes });
    }

});

apiRouter.post('/quotes', (req, res) => {
    const nQuote = req.query.quote;
    const nAuthor = req.query.person; 

    if(nQuote !== '' && nAuthor != ''){
        quotes.push({quote: nQuote, person: nAuthor});
        res.send({quote: { quote: {quote: nQuote, person: nAuthor}}});
    }else{
        res.sendStatus(400);
    }
});

app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});

