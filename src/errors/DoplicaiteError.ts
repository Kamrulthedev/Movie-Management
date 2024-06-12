import { TErrorSourse } from "../interface/Error.interface";

const DuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const ErrorSourse: TErrorSourse = [{
    path: '',
    message: `${extractedMessage} already exists`
  }];
  return {
    ErrorSourse
  };
};

export default DuplicateError;
