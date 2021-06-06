import { Container } from './styles'

type Thumbnail = {
  path: string
  extension: string
}

type MidiaCardProps = {
  title: string
  thumbnail: Thumbnail
}

function MidiaCard({ title, thumbnail }: MidiaCardProps) {
  const imgSrc = `${thumbnail.path}.${thumbnail.extension}`
  return <Container imgSrc={imgSrc}>{title}</Container>
}

export default MidiaCard
