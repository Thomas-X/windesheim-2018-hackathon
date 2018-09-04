import { compareField, email, isRequired, password } from './validationTests';

export const FORM_NAMES = {
    email: 'email',
    username: 'username',
    password: 'password',
    passwordOne: 'password1',
    passwordTwo: 'password2',
};

export const FORM_VALIDATIONS = {
    [FORM_NAMES.email]: {
        name: FORM_NAMES.email,
        validations: [email, isRequired],
    },
    [FORM_NAMES.username]: {
        name: FORM_NAMES.username,
        validations: [isRequired],
    },
    [FORM_NAMES.password]: {
        name: FORM_NAMES.password,
        validations: [password, isRequired],
    },
    [FORM_NAMES.passwordOne]: {
        name: FORM_NAMES.passwordOne,
        validations: [password, isRequired],
    },
    [FORM_NAMES.passwordTwo]: {
        name: FORM_NAMES.passwordTwo,
        validations: [password, compareField, isRequired],
    },
};

export default (validations = []) => (values) => {
    const errors = {};
    for (const validation of validations) {
        const {validations: validationTests} = validation;
        for (const test of validationTests) {
            const result = test(values[validation.name], values, validation.name);
            if (result && result.length > 0) {
                errors[validation.name] = result;
            }
        }
    }
    return errors;
};