import styled from 'styled-components'

export const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.textColor};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.textColor};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.textColor};
  }
`

export const TextBlock = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ImageBlock = styled.div`
  width: 800px;
  height: 600px;
  background-image: url(https://i.annihil.us/u/prod/marvel/html_pages_assets/error-pages/prod/captain-america-char.4b7f4c07.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
`
