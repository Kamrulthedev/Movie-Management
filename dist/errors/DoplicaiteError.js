"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const ErrorSourse = [{
            path: '',
            message: `${extractedMessage} already exists`
        }];
    return {
        ErrorSourse
    };
};
exports.default = DuplicateError;
