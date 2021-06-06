import styled from 'styled-components'

export const FooterLogo = styled.h1`
  grid-area: lg;
  font-size: ${({ theme }) => theme.fontSize.tenth};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -6px;
  font-weight: 900;
`

export const PagesList = styled.ul`
  grid-area: pgs;
  list-style-type: none;
  justify-self: flex-end;
`

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
`

export const LinksList = styled.li`
  grid-area: lks;
  list-style-type: none;
  justify-self: flex-end;
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
`

export const OthersLinksArea = styled.div`
  grid-area: othlks;
  list-style-type: none;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
`

export const FotterItems = styled.li`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'MarvelRegular';
`
