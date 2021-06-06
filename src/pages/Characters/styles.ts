import styled from 'styled-components'

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
`

export const PageTitle = styled.h1`
  width: 1px;
  grid-area: title;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSize.tenth};
  font-weight: 900;
  padding-top: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.fontSize.ninth};
`

export const SearchBox = styled.div`
  grid-area: search;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const SearchTitle = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 900;
  text-align: right;
  padding-right: 1rem;
`

export const Content = styled.div`
  grid-area: c;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`
