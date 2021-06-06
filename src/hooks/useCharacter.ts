import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Api from '../services/api'

import { CharacterType } from '../types/character'
import { SerieType } from '../types/serie'

type ParamsProp = {
  id: string
}

const defaultSeries: SerieType[] = []

const defaultCharacter: CharacterType = {
  id: 0,
  name: '',
  description: '',
  modified: '',
  thumbnail: {
    extension: '',
    path: '',
  },
  resourceURI: '',
  comics: {
    available: 0,
    collectionURI: '',
    items: {
      resourceURI: '',
      name: '',
    },
  },
}

const useCharacter = () => {
  const { id } = useParams<ParamsProp>()

  const [character, setCharacter]: [
    CharacterType,
    (character: CharacterType) => void
  ] = useState(defaultCharacter)
  const [loading, setLoading] = useState(false)

  const [series, setSeries]: [SerieType[], (series: SerieType[]) => void] =
    useState(defaultSeries)

  async function getDataAboutCharacter(id: number) {
    setLoading(true)
    const { data } = await Api.MarvelApi.getCharacterById(id)
    if (data) {
      setCharacter(data.results[0])
      const { data: series } = await Api.MarvelApi.getAllSeriesByCharacterId(id)
      if (series) {
        setSeries(series.results)
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    getDataAboutCharacter(Number(id))
  }, [])

  return { loading, character, series }
}

export default useCharacter
