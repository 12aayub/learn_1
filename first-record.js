let Country = require('./models/country')

Country.findById(1).then(function(country){
  console.log(country.get('name'))
})
