import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

export const api = axios.create({})

api.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const { headers } = request
  if (headers) {
    headers['Content-Type'] = 'application/json'
    // headers.apikey = process.env.REACT_APP_MARVEL_API_KEY
  }
  return request
})

export const Api = {
  MarvelApi: {
    getAllCharacters: () => {
      return api.get(`${process.env.REACT_APP_MARVEL_API}/v1/public/characters`)
    },
    getCharacterById: (id: number) => {
      return api.get(
        `${process.env.REACT_APP_MARVEL_API}/v1/public/characters/${id}`
      )
    },
  },
}

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    /* console.error(error); */
  }
)

export default Api
