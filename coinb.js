const axios = require('axios')

axios(`https://www.coinbase.com/api/v2/assets/prices?base=EUR&filter=listed&resolution=latest`).then((response) => {
    console.log(Number(response.data.data.filter(crypto => {
        if (crypto.base === 'BTC') return true;
    }).map(coin => coin.prices.latest_price).map(fields => {
        return fields.amount.amount})))
}).catch(err => console.log(err))

/*

const test = [{
        name: 'Marc'
    },
    {
        name: 'Arnau'
    }
]


const resultat1 = test.filter(persona => {
    if (persona.name === 'Marc') {
        return true
    }
})

const resultat2 = test.map(persona => {
    if (persona.name === 'Marc') {
        return true
    }
})

console.log(test, resultat2)*/