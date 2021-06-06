import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ImageProps = {
  imgSrc?: string
}

export const Container = styled.div`
  height: 500px;
  min-width: 280px;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.lessThan('medium')`${css`
    height: 400px;
  `}
  `}
`

export const Image = styled.div<ImageProps>`
  margin-top: 4px;
  width: 98%;
  height: 70%;
  background-image: url(${(props) => props?.imgSrc});
  background-size: cover;
  ${media.lessThan('medium')`${css`
    height: 90%;
  `}
  `}
`

export const Name = styled.div`
  margin: 8px;
  width: 98%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.fontSize.lg};
`

export const Description = styled.span`
  margin: 8px;
  width: 98%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'MarvelRegular';
  ${media.lessThan('medium')`${css`
    display: none;
  `}
  `}
`
