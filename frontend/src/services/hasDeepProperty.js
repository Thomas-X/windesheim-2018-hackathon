export const hasDeepProperty = (obj, propArray) => {
    propArray = (Array.isArray(propArray)) ? propArray : [propArray];
    if (!propArray.length) {
        return true;
    } // no more properties to check

    // only check for properties if working with an object
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    if (obj.hasOwnProperty(propArray[0])) {
        const nextObj = obj[propArray[0]];
        const nextList = propArray.slice(1, propArray.length);
        return hasDeepProperty(nextObj, nextList);
    } else {
        return false;
    }
};

export const getData = (requestName, props) => {
    if (props[requestName] && props[requestName].data) {
        return props[requestName].data;
    }
    return {};
};

export const getErrorMessage = (name, props) => {
    if(props[name]) {
        if (props[name].error) {
            if (props[name].error.response) {
                if (props[name].error.response.data) {
                    if (props[name].error.response.data.message) {
                        return props[name].error.response.data.message;
                    }
                }
            }
        }
    }
    return '';
};