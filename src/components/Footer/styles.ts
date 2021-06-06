import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FooterLogo = styled.h1`
  grid-area: lg;
  font-size: ${({ theme }) => theme.fontSize.tenth};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -6px;
  font-weight: 900;
  ${media.lessThan('medium')`${css`
    font-size: ${({ theme }) => theme.fontSize.fourth};
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: -4px;
  `}
  `}
`

export const PagesList = styled.ul`
  grid-area: pgs;
  list-style-type: none;
  justify-self: flex-end;
  ${media.lessThan('medium')`${css`
    justify-self: flex-start;
  `}
  `}
`

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
`

export const LinksList = styled.li`
  grid-area: lks;
  list-style-type: none;
  justify-self: flex-end;
  ${media.lessThan('medium')`${css`
    justify-self: flex-start;
  `}
  `}
`

export const ItemDescription = styled.li`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  font-family: 'MarvelRegular';
`
export const TrademarkArea = styled.div`
  grid-area: trm;
  list-style-type: none;
  ${media.lessThan('medium')`${css`
    max-width: 90%;
  `}
  `}
`

export const OthersLinksArea = styled.div`
  grid-area: othlks;
  list-style-type: none;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  ${media.lessThan('medium')`${css`
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 90%;
    padding-bottom: 2rem;
  `}
  `}
`

export const FotterItems = styled.li`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'MarvelRegular';
`
