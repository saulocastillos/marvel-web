type ThumbnailType = {
  path: string
  extension: string
}

type ComicsItemsType = {
  resourceURI: string
  name: string
}

type ComicsType = {
  available: number
  collectionURI: string
  items: ComicsItemsType
}

type CharacterType = {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: ThumbnailType
  resourceURI: string
  comics: ComicsType
}
type ApiResponseType = {
  count: number
  limit: number
  offset: number
  total: number
  results: CharacterType[]
}

type CharactersType = {
  characters: CharacterType[]
}

export type {
  CharactersType,
  CharacterType,
  ComicsType,
  ComicsItemsType,
  ThumbnailType,
  ApiResponseType,
}
