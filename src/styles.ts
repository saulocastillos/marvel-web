import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-areas:
    '. n n n n n n n n n n .'
    'r r r r r r r r r r r r'
    'f f f f f f f f f f f f';
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1.2fr auto;
  gap: 20px 0;
`
export const NavSection = styled.div`
  grid-area: n;
`

export const RouteSection = styled.div`
  grid-area: r;
`

export const FooterSection = styled.div`
  grid-area: f;
  height: 350px;
  border: 5px dashed red;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.primaryColor};
  display: grid;
  grid-template-areas:
    '. lg lg lg lg pgs pgs pgs lks lks lks .'
    '. trm trm othlks othlks othlks othlks othlks othlks othlks othlks .';
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 20px 0;
  align-items: center;
`
