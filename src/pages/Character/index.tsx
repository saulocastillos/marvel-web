import MidiaCard from '../../components/MidiaCard'
import useCharacter from '../../hooks/useCharacter'

import { SerieType } from '../../types/serie'

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

const defaultSeries: SerieType[] = []
function Character() {
  const { loading, character, series } = useCharacter()
  const imgSrc = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <Container>
      <Header>
        <CharacterName>{character.name}</CharacterName>
        <Image imgSrc={imgSrc} />
      </Header>
      <SeriesSection>
        <SectionTitle>SERIES</SectionTitle>
        <List>
          {series?.length > 0 &&
            series.map((serie: SerieType) => {
              const { id, title, thumbnail, description } = serie
              return (
                <MidiaCard
                  key={id}
                  title={title}
                  description={description}
                  thumbnail={thumbnail}
                />
              )
            })}
        </List>
        {loading && <h1>Carregando...</h1>}
        {!loading && series?.length <= 0 && (
          <h1>Nenhuma serie encontrada...</h1>
        )}
      </SeriesSection>
      <EventsSection />
    </Container>
  )
}

export default Character
