export const email = (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : null;

export const isRequired = (value) => (value ? null : 'Required');

export const phoneNumber = (value) => (
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : null
);

export const password = (value) => (
    value && value.length < 6
        ? 'Too short for a password'
        : null
);

// Ie, form name is password1 and password2,
export const compareField = (value, allValues, name) => {
    // really crappy comparing field, substr the name and check the name with the value 1 if works, doesn't work with multiple forms.
    const otherValue = allValues[name.substr(0, name.length - 1) + '1'];
    return value && !isRequired(otherValue) && otherValue !== value
        ? 'Does not match'
        : null;
};

// Usage: maxLength(3)
export const setMaxLength = (maxLength) => (value) => {
    return value.length > maxLength;
};