import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Api from '../../services/api'

import MidiaCard from '../../components/MidiaCard'

import { CharacterType } from '../../types/character'
import { SerieType } from '../../types/serie'

import character from './mock.json'
import serie from './series.json'

import {
  Container,
  Header,
  CharacterName,
  Image,
  SeriesSection,
  SectionTitle,
  EventsSection,
  List,
} from './styles'

type ParamsProp = {
  id: string
}

const defaultSeries: SerieType[] = []

function Character() {
  const [series, setSeries]: [SerieType[], (series: SerieType[]) => void] =
    useState(defaultSeries)

  const { id } = useParams<ParamsProp>()

  async function getSeries(id: number) {
    const response = await Api.MarvelApi.getAllSeriesByCharacterId(id)
    if (response?.data) setSeries(response.data)
  }

  useEffect(() => {
    getSeries(Number(id))
  }, [])

  return (
    <Container>
      <Header>
        <CharacterName>Iron Man</CharacterName>
        <Image />
      </Header>
      <SeriesSection>
        <SectionTitle>SERIES</SectionTitle>
        <List>
          {series?.length > 0 &&
            series.map((serie: SerieType) => {
              const { id, title, thumbnail } = serie
              return <MidiaCard key={id} title={title} thumbnail={thumbnail} />
            })}
        </List>
      </SeriesSection>
      <EventsSection />
    </Container>
  )
}

export default Character
