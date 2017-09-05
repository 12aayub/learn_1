class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {
    }
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors

  }

  validate(){
    this.errors = {password: []}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePassword1('password')
    this.validatePassword2('password')
    this.validateEmail('email')
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /* eslint-disable */  /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  validatePassword1(fieldName){
    const filter = /^[a-z0-9]+$/i
    if(!filter.test(this.fields[fieldName])){
      this.addPasswordError(fieldName, 'letters and numbers only ');

    }
  }

  validatePassword2(fieldName){
    if(this.fields[fieldName].length <= 8) {
      this.addPasswordError(fieldName, 'needs to be at least 8 characters long');
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }


  addPasswordError(fieldName, passMessage){
    this.errors[fieldName].push(passMessage)
  }
}

const store = new RegistrationStore()
export default store
