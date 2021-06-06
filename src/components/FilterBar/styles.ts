import { title } from 'process'
import styled from 'styled-components'

export const Filter = styled.div`
  grid-area: f;
  height: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.colors.grey?.[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilterItem = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

export const Count = styled.div`
  margin-left: auto;
  margin-bottom: 10px;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;

  span {
    font-family: MarvelRegular;
    font-size: 1.2rem;
  }
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.textColor};
`
