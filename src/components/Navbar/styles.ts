import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`

export const Logo = styled.span`
  font-family: 'Marvel';
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.textColor};
  width: 200px;
  text-align: start;
`

export const Links = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

export const LinkItem = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.textColor};
  padding: 1rem;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  text-decoration: none;
  cursor: pointer;
`

export const Action = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.textColor};
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.textColor};
  font-family: 'MarvelRegular';
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  cursor: pointer;
`
