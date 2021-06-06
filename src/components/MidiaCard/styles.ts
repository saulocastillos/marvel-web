import styled from 'styled-components'

type ContainerProps = {
  imgSrc?: string
}

export const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 300px;
  background-image: url(${(props) => props?.imgSrc});
  background-size: cover;
`
