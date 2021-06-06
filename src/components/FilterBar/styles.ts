import { title } from 'process'
import styled from 'styled-components'

export const Filter = styled.div`
  grid-area: f;
  height: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.colors.grey?.[300]};
  display: flex;
`

export const FilterItem = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
`

export const Count = styled.div`
  margin-left: auto;
  margin-bottom: 10px;
  align-self: flex-end;
  font-size: 1.2rem;

  span {
    font-family: MarvelRegular;
    font-size: 1.2rem;
  }
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.textColor};
`
