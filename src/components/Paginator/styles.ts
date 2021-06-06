import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

type StatusProps = {
  disabled?: boolean
  visible?: boolean
}

type GenericProps = {
  status?: StatusProps
}

export const Generic = styled.button<GenericProps>`
  border: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.status?.visible ? 'visible' : 'none')};
`

export const Previous = styled(Generic)``
export const Next = styled(Generic)``
export const First = styled(Generic)``
export const Last = styled(Generic)``
export const Current = styled(Generic)``
