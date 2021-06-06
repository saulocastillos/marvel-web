import { SyntheticEvent, useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'

import { CharacterType } from '../../types/character'

import { Container, Previous, Next, First, Last, Current } from './styles'

type apiMetaType = {
  offset: number
  limit: number
  total: number
  count: number
  results: CharacterType[]
}

type FilterBarProps = {
  paginate: Function
  apiMeta: apiMetaType
}

function Paginator({ paginate, apiMeta }: FilterBarProps) {
  const [paginator, setPaginator] = useState({
    first: { disabled: false, visible: true },
    previous: { disabled: false, visible: true },
    numbers: { disabled: false, visible: true },
    current: { disabled: true, visible: true },
    next: { disabled: false, visible: true },
    last: { disabled: false, visible: true },
  })

  function handlePaginate(name: string) {
    paginate(name)
  }

  return (
    <Container>
      <First
        name='first'
        onClick={() => handlePaginate('first')}
        type='button'
        status={paginator.first}
        disabled={paginator.first.disabled}
      >
        <Icon size='1x' icon={faChevronLeft} color='#d84128' />
        <Icon size='1x' icon={faChevronLeft} color='#d84128' />
      </First>
      <Previous
        name='previous'
        onClick={() => handlePaginate('previous')}
        type='button'
        status={paginator.previous}
        disabled={paginator.previous.disabled}
      >
        <Icon size='1x' icon={faChevronLeft} color='#d84128' />
      </Previous>

      <Current
        name='current'
        type='button'
        status={paginator.current}
        disabled={paginator.current.disabled}
      >
        {apiMeta?.offset === 0 ? 1 : Math.ceil(apiMeta?.offset / 10 + 1)}
      </Current>

      <Next
        name='next'
        onClick={() => handlePaginate('next')}
        type='button'
        status={paginator.next}
        disabled={paginator.next.disabled}
      >
        <Icon size='1x' icon={faChevronRight} color='#d84128' />
      </Next>
      <Last
        name='last'
        onClick={() => handlePaginate('last')}
        type='button'
        status={paginator.last}
        disabled={paginator.last.disabled}
      >
        <Icon size='1x' icon={faChevronRight} color='#d84128' />
        <Icon size='1x' icon={faChevronRight} color='#d84128' />
      </Last>
    </Container>
  )
}

export default Paginator
