let Country = require('./models/country')

Country.findById(1).then(function(country) {
    country.name = country.name.charAt(0).toLowerCase() + country.name.slice(1)
    console.log(country.name)
})
.catch(function(error){
  console.log(error)
})
