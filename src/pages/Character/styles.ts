import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
  position: relative;
  ${media.lessThan('medium')`${css`
    margin-top: 40px;
  `}
  `}
`

export const CharacterName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.eighth};
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  letter-spacing: -4px;
  margin-left: 6rem;
  position: absolute;
  ${media.lessThan('medium')`${css`
    font-size: ${({ theme }) => theme.fontSize.fourth};
    margin-left: 1rem;
  `}
  `}
`

type ImageProps = {
  imgSrc?: string
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 50vw;
  margin-top: 100px;
  background-image: url(${(props) => props?.imgSrc});
  background-size: cover;
  background-position: center;
  ${media.lessThan('medium')`${css`
    margin-top: 40px;
  `}
  `}
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
  ${media.lessThan('medium')`${css`
    font-size: ${({ theme }) => theme.fontSize.fourth};
    margin-left: 0rem;
  `}
  `}
`

export const List = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(3, 0.8fr);
  ${media.lessThan('medium')`${css``}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`
