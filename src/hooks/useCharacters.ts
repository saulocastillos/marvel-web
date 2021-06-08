import { useState } from 'react'

import Api from '../services/api'

import { CharacterType } from '../types/character'

type ParamsType = {
  orderBy?: string[]
  limit?: number
  offset?: number
  total?: number
  nameStartsWith?: string
}

type charactersMetaType = {
  offset: number
  limit: number
  total: number
  count: number
  results: CharacterType[]
}

const defaultCharactersMeta: charactersMetaType = {
  count: 0,
  limit: 10,
  offset: 0,
  total: 0,
  results: [],
}
const defaultCharacters: CharacterType[] = []

const defaultParams: ParamsType = {}

const useCharacters = () => {
  const [charactersMeta, setCharactersMeta]: [
    charactersMetaType,
    (charactersMeta: charactersMetaType) => void
  ] = useState(defaultCharactersMeta)

  const [currentParams, setCurrentParams]: [
    ParamsType,
    (currentParams: ParamsType) => void
  ] = useState(defaultParams)

  const [characters, setCharacters]: [
    CharacterType[],
    (characters: CharacterType[]) => void
  ] = useState(defaultCharacters)
  const [loading, setLoading] = useState(false)

  async function getCharacters(newParams?: ParamsType, reset?: boolean) {
    setLoading(true)

    const _currentParams = {
      ...currentParams,
    }

    if (reset !== undefined && _currentParams.nameStartsWith) {
      delete _currentParams.nameStartsWith
    }

    setCurrentParams({
      ..._currentParams,
      ...newParams,
    })

    const { data } = await Api.MarvelApi.getAllCharacters({
      ..._currentParams,
      ...newParams,
    })
    if (data) {
      setCharacters(data.results)
      const { count, limit, offset, total, results } = data
      setCharactersMeta({
        count,
        limit,
        offset,
        total,
        results,
      })
    }
    setLoading(false)
  }

  return {
    characters,
    loading,
    getCharacters,
    charactersMeta,
    currentParams,
    setCurrentParams,
  }
}

export default useCharacters
