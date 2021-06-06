import {
  Container,
  Logo,
  Links,
  LinkItem,
  Action,
  Avatar,
  Name,
  Description,
} from './styles'

function Navbar() {
  return (
    <Container>
      <Logo to='/'>MARVEL</Logo>
      <Links>
        <LinkItem to='/videos'>VIDEOS</LinkItem>
        <LinkItem to='/character'>CHARACTERS</LinkItem>
        <LinkItem to='/comics'>COMICS</LinkItem>
        <LinkItem to='/movies'>MOVIES</LinkItem>
        <LinkItem to='/shows'>TV SHOW</LinkItem>
        <LinkItem to='/news'>NEWS</LinkItem>
      </Links>
      <Action>
        <Name>SAULO CASTILHOS</Name>
        <Description>VAGA FRONTEND</Description>
        <Avatar>SC</Avatar>
      </Action>
    </Container>
  )
}

export default Navbar
