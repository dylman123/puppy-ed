export const ENV = process.env.NODE_ENV;

export const DEV = ENV === 'development';
export const TEST = ENV === 'test';
export const PROD = ENV === 'production';

export const BASE_URL = DEV ?
    'https://dev.puppyed.com.au' : 'https://puppyed.com.au';

export const MIXPANEL_PROJECT_TOKEN = DEV ?
    process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN_DEVELOPMENT :
    process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN_PRODUCTION