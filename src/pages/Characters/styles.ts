import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    '. h h h h h h h h h h .'
    '. f f f f f f f f f f .'
    '. c c c c c c c c c c .';

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 100px auto;
  gap: ${({ theme }) => theme.spacing.md};
`

export const Header = styled.div`
  grid-area: h;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'title search';
  gap: ${({ theme }) => theme.spacing.xxs};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  ${media.lessThan('medium')`${css`
    grid-template-areas:
      'title'
      'search';

    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: ${({ theme }) => theme.spacing.md};
  `}
  `}
`

export const PageTitle = styled.h1`
  width: 1px;
  grid-area: title;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSize.tenth};
  font-weight: 900;
  padding-top: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.fontSize.ninth};
  ${media.lessThan('medium')`${css`
    grid-area: title;
    font-size: ${({ theme }) => theme.fontSize.fourth};
    line-height: ${({ theme }) => theme.fontSize.fourth};
  `}
  `}
`

export const SearchBox = styled.div`
  grid-area: search;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${media.lessThan('medium')`${css`
    grid-area: search;
    justify-content: flex-start;
  `}
  `}
`

export const SearchIconWrapper = styled.div`
  ${media.lessThan('medium')`${css`
    display: none;
  `}
  `}
`

export const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 900;
  text-align: right;
  ${media.lessThan('medium')`${css`
    text-align: left;
  `}
  `}
`

export const Content = styled.div`
  grid-area: c;
`

export const List = styled.div`
  display: grid;
  gap: 4px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 0.8fr);
  ${media.lessThan('medium')`${css``}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`
