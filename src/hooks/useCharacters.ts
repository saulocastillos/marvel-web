import { useEffect, useState } from 'react'

import Api from '../services/api'

import { CharacterType, ApiResponseType } from '../types/character'

type handleOrderByTypes = 'name' | 'modified'

type ParamsType = {
  orderBy?: string[]
  limit?: number
  count?: number
  offset?: number
  total?: number
}

type apiMetaType = {
  offset: number
  limit: number
  total: number
  count: number
  results: CharacterType[]
}

const defaultApiMeta: apiMetaType = {
  count: 0,
  limit: 10,
  offset: 0,
  total: 0,
  results: [],
}
const defaultCharacters: CharacterType[] = []

const useCharacters = () => {
  const [apiMeta, setApiMeta]: [apiMetaType, (apiMeta: apiMetaType) => void] =
    useState(defaultApiMeta)

  const [characters, setCharacters]: [
    CharacterType[],
    (characters: CharacterType[]) => void
  ] = useState(defaultCharacters)
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState({
    name: 'name',
    modified: 'modified',
  })

  async function getCharacters(params?: ParamsType) {
    setLoading(true)
    const { data } = await Api.MarvelApi.getAllCharacters(params)
    if (data) {
      setCharacters(data.results)
      const { count, limit, offset, total, results } = data
      setApiMeta({
        count,
        limit,
        offset,
        total,
        results,
      })
    }
    setLoading(false)
  }

  function orderBy(value: handleOrderByTypes) {
    const _paramValue = order[value].includes('-') ? value : `-${value}`

    const _order = {
      ...order,
      [value]: _paramValue,
    }

    const _queryParam = Object.values(_order)

    setOrder(_order)
    getCharacters({
      orderBy: _queryParam,
      limit: 10,
    })
  }

  function handleFirst() {
    getCharacters({ limit: 10 })
  }

  function handleLast() {
    getCharacters({
      offset: apiMeta.total - 10,
      limit: 10,
    })
  }

  function handlePrevious() {
    getCharacters({
      offset: apiMeta.offset - 10,
      limit: 10,
    })
  }

  function handleNext() {
    getCharacters({
      offset: apiMeta.offset + 10,
      limit: 10,
    })
  }

  function paginate(field: string) {
    switch (field) {
      case 'first':
        handleFirst()
        break
      case 'previous':
        handlePrevious()
        break
      case 'next':
        handleNext()
        break
      case 'last':
        handleLast()
        break
      default:
    }
  }

  useEffect(() => {
    getCharacters({ limit: 10 })
  }, [])

  return { characters, loading, getCharacters, orderBy, paginate, apiMeta }
}

export default useCharacters
