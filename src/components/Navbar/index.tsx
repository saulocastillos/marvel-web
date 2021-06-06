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
      <Logo>MARVEL</Logo>
      <Links>
        <LinkItem>VIDEOS</LinkItem>
        <LinkItem>CHARACTERS</LinkItem>
        <LinkItem>COMICS</LinkItem>
        <LinkItem>MOVIES</LinkItem>
        <LinkItem>TV SHOW</LinkItem>
        <LinkItem>NEWS</LinkItem>
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
