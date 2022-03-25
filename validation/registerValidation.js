const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) =>{
    let errors = {};

    //Check the email field
    if(isEmpty(data.email)){
        errors.email = "Enail field can not be empty";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid, please provide a valid email";
    }

    //check password field
    if(isEmpty(data.password)){
        errors.password = "Password field can not be empty";
    }else if(!Validator.isLength(data.password, {min:6, max: 150})){
        errors.password = "Password must be between 6 and 150 characters long"
    }

        //check name field
        if(isEmpty(data.name)){
            errors.name = "Password field can not be empty";
        }else if(!Validator.isLength(data.name, {min:6, max: 150})){
            errors.name = "Name must be between 6 and 150 characters long"
        } 

    //chack confirm password field
    if(isEmpty(data.confirmPassword)){
        errors.confirmPassword = "Confimr Password field not be empty";
    }else if(!Validator.equals(data.password, data.confirmPassword)){
        errors.confirmPassword = 'Password and Confirm Password fields must match';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    }
};

module.exports = validateRegisterInput;

