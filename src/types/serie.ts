type ThumbnailType = {
  path: string
  extension: string
}

type ComicsItemsType = {
  resourceURI?: string
  name?: string
}

type ComicsType = {
  available?: number
  collectionURI?: string
  items?: ComicsItemsType
}

type UrlType = {
  type?: string
  url?: string
}

type ItemsType = {
  resourceURI?: string
  name?: string
  role?: string
  type?: string
}

type CreatorsType = {
  available?: number
  collectionsURI?: string
  items?: ItemsType
  returned?: number
}
type CharactersType = {
  available?: number
  collectionURI?: string
  items?: ItemsType
  returned?: number
}
type StoriesType = {
  available?: string
  collectionURI?: string
  items?: ItemsType
  returned?: number
}
type EventsType = {
  available: number
  collectionURI?: string
  items: ItemsType
}

type SerieType = {
  id: number
  title: string
  description: string
  resourceURI: string
  urls: UrlType[]
  startYear: number
  endYear: number
  rating: string
  type: string
  modified: string
  thumbnail: ThumbnailType
  creators: CreatorsType
  characters: CharactersType
  stories: StoriesType
  comics: ComicsType
  events: EventsType
  next: number
  previous: number
}

type SeriesType = {
  series: SeriesType[]
}

export type {
  SeriesType,
  SerieType,
  ComicsType,
  ComicsItemsType,
  ThumbnailType,
}
