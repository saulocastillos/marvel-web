import {
  FooterLogo,
  PagesList,
  ListItem,
  LinksList,
  ItemDescription,
  TrademarkArea,
  OthersLinksArea,
  FotterItems,
} from './styles'

function Footer() {
  return (
    <>
      <FooterLogo>MARVEL</FooterLogo>
      <PagesList>
        <ListItem>ABOUT MARVEL</ListItem>
        <ListItem>HELP/FAQS</ListItem>
        <ListItem>CAREERS</ListItem>
        <ListItem>INTERNSHIPS</ListItem>
        <ListItem>MARVELHQ.COM</ListItem>
        <ListItem>REDEEM DIGITAL COMIC</ListItem>
      </PagesList>
      <LinksList>
        <ListItem>MARVEL INSIDER</ListItem>
        <ItemDescription>Lorem ipsum</ItemDescription>
        <ItemDescription>Lorem ipsum</ItemDescription>
        <ListItem>MARVEL MASTERCAR</ListItem>
        <ItemDescription>Lorem ipsum</ItemDescription>
        <ItemDescription>Lorem ipsum</ItemDescription>
        <ListItem>FOLLOW MARVEL</ListItem>
        <ItemDescription>Lorem ipsum</ItemDescription>
        <ItemDescription>Lorem ipsum</ItemDescription>
      </LinksList>
      <TrademarkArea>
        <FotterItems>@2028 MARVEL</FotterItems>
      </TrademarkArea>
      <OthersLinksArea>
        <FotterItems>TERMS OF USE</FotterItems>
        <FotterItems>PRIVACY POLICY</FotterItems>
        <FotterItems>CHILDRENS ONLINE PRIVACY POLICY</FotterItems>
        <FotterItems>LICENCE AGREEMENT</FotterItems>
        <FotterItems>MARVEL INSIDER TERMS</FotterItems>
      </OthersLinksArea>
    </>
  )
}

export default Footer
