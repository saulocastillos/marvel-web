import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    '. h h h h h h h h h h .'
    '. s s s s s s s s s s .'
    '. e e e e e e e e e e .';

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto auto;
  gap: ${({ theme }) => theme.spacing.md};
`

export const Header = styled.div`
  grid-area: h;
  /* display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'title search';
  gap: ${({ theme }) => theme.spacing.xxs};
  padding-bottom: ${({ theme }) => theme.spacing.xl}; */
  position: relative;
`

export const CharacterName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.eighth};
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: -4px;
  margin-left: 6rem;
  position: absolute;
`

export const Image = styled.div`
  width: 100%;
  height: 50vw;
  margin-top: 100px;
  background-image: url('http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg');
  background-size: cover;
  background-position: center;
`

export const SeriesSection = styled.div`
  grid-area: s;
`
export const EventsSection = styled.div`
  grid-area: e;
`

export const SectionTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.eighth};
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  letter-spacing: -4px;
  margin-left: 6rem;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`
