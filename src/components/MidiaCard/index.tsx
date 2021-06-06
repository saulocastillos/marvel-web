import { Container, Image, Name, Description } from './styles'

type Thumbnail = {
  path: string
  extension: string
}

type MidiaCardProps = {
  title: string
  description: string
  thumbnail: Thumbnail
}

function MidiaCard({ title, thumbnail, description }: MidiaCardProps) {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <Container>
      <Image imgSrc={imgSrc} />
      <Name>{title}</Name>
      {(description !== '' && <Description>{description}</Description>) || (
        <Description>Description not found</Description>
      )}
    </Container>
  )
}

export default MidiaCard
