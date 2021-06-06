import { Container } from './styles'

type Thumbnail = {
  path: string
  extension: string
}

type CharacterCardProps = {
  name: string
  thumbnail: Thumbnail
}

function CharacterCard({ name, thumbnail }: CharacterCardProps) {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`
  return <Container imgSrc={imgSrc}>{name}</Container>
}

export default CharacterCard
