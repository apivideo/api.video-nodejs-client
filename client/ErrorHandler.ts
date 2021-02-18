import { BeforeErrorHook } from 'got';

const errorHandler: BeforeErrorHook = (error) => {
  const { response } = error;
  const options = error.request?.options;
  if (response && response.body) {
    console.error(`${options?.method} ${options?.url?.href}`);
    console.error('Headers:', options?.headers);
    console.error('Response:');
    console.error('Headers:', response.headers);
    console.error('Body:', response.body);
  }

  return error;
};

export default errorHandler;
