let Country = require('./models/country')

Country.all({
  where: {
    name: 'Westeros'
  }
})
  .then(function(records){
    let promises = records.map(function(country){
      return country.destroy()
    })
    return Promise.all(promises)
   })
   .then(function(results){
    console.log("They're gone!")
  })
