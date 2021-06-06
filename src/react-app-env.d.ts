/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_MARVEL_API: string
    REACT_APP_ML_PBLC_API_KEY: string
    REACT_APP_ML_PRVT_API_KEY: string
  }
}
