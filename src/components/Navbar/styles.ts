import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import media from 'styled-media-query'

export const Container = styled.div`
  min-height: 100px;
  display: grid;
  grid-template-areas: 'lg lg lks lks lks lks lks lks p p';
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr;
  ${media.lessThan('medium')`${css`
    grid-template-areas:
      'lg lg'
      'p p'
      'lks lks';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  `}
  `}
`

export const Logo = styled(Link)`
  grid-area: lg;
  font-family: 'Marvel';
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.textColor};
  text-align: start;

  ${media.lessThan('medium')`${css`
    grid-area: lg;
    padding: 10px;
  `}
  `}
`

export const Links = styled.div`
  grid-area: lks;
  height: 100%;
  flex: 1;
  display: flex;

  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan('medium')`${css`
    margin-top: 10px;
    margin-left: -4px;
    grid-area: lks;
    flex-wrap: wrap;
  `}
  `}
`

export const LinkItem = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.textColor};
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  text-decoration: none;
  cursor: pointer;
  ${media.lessThan('medium')`${css`
    height: 16px;
  `}
  `}
`

export const Action = styled.div`
  grid-area: p;
  height: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan('medium')`${css`
    grid-area: p;
    justify-content: space-between;
    margin-left: 10px;
  `}
  `}
`

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.textColor};
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.textColor};
  font-family: 'MarvelRegular';
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
