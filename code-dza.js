let Country = require('./models/country')

  Country
    .all({
      where: {
        code: 'DZA'
    }
  })
    .then(function(countries){
    let mapped = countries.map(function(country){
      return country.get()
    })
    console.log(mapped)
  })
