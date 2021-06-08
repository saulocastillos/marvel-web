import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_API,
})

api.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const { headers } = request
  if (headers) {
    headers['Content-Type'] = 'application/json'
  }
  return request
})

type CharactersParams = {
  orderBy?: string[]
  limit?: number
  offset?: number
  nameStartsWith?: string
}

export const Api = {
  MarvelApi: {
    getAllCharacters: async (params?: CharactersParams) => {
      const { data } = await api.get(
        `v1/public/characters?apikey=${process.env.REACT_APP_ML_PBLC_API_KEY}`,
        {
          params,
        }
      )
      return { data: data.data }
    },
    getAllSeriesByCharacterId: async (characterId?: number) => {
      const { data } = await api.get(
        `v1/public/characters/${characterId}/series?apikey=${process.env.REACT_APP_ML_PBLC_API_KEY}`
      )
      return { data: data.data }
    },
    getCharacterById: async (characterId: number) => {
      const { data } = await api.get(
        `/v1/public/characters/${characterId}?apikey=${process.env.REACT_APP_ML_PBLC_API_KEY}`
      )
      return { data: data.data }
    },
  },
}

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {}
)

export default Api
