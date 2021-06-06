import { Container, Image, Name, Description } from './styles'

type Thumbnail = {
  path: string
  extension: string
}

type CharacterCardProps = {
  name: string
  description: string
  thumbnail: Thumbnail
}

function CharacterCard({ name, thumbnail, description }: CharacterCardProps) {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <Container>
      <Image imgSrc={imgSrc} />
      <Name>{name}</Name>
      {(description !== '' && <Description>{description}</Description>) || (
        <Description>Description not found</Description>
      )}
    </Container>
  )
}

export default CharacterCard
