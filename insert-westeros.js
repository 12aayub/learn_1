let Country = require('./models/country')

let Westeros = Country.create({
  code: 'WES',
  name: 'Westeros',
  continent: 'Europe',
  region: 'Game of Thrones'
})
  .then(function(country){
  console.log(country.code, country.name, country.continent, country.region, country.id)
  })
  .catch(function(error){
    console.log(error)
  })
