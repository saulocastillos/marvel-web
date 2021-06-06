import { Container, TextBlock, ImageBlock } from './styles'

function PageNotFound() {
  return (
    <Container>
      <TextBlock>
        <h1>404</h1>
        <h2>Hydra is currently attacking this page!</h2>
        <span>
          404 PAGE NOT FOUND Check that you typed the address correctly, go back
          to your previous page or try using our site search to find something
          specific.
        </span>
      </TextBlock>
      <ImageBlock />
    </Container>
  )
}

export default PageNotFound
