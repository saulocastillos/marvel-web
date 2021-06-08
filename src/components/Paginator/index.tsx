import { SyntheticEvent, useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'

import { CharacterType } from '../../types/character'

import { Container, Previous, Next, First, Last, Current } from './styles'

type CharactersMetaType = {
  offset: number
  limit: number
  total: number
  count: number
  results: CharacterType[]
}

type FilterBarProps = {
  paginate: Function
  charactersMeta: CharactersMetaType
}

function Paginator({ paginate, charactersMeta }: FilterBarProps) {
  const [paginator, setPaginator] = useState({
    first: { disabled: false, visible: true },
    previous: { disabled: false, visible: true },
    numbers: { disabled: false, visible: true },
    current: { disabled: true, visible: true },
    next: { disabled: false, visible: true },
    last: { disabled: false, visible: true },
  })

  function handleFirst() {
    paginate({ limit: 10, offset: 0 })
  }

  function handleLast() {
    paginate({
      offset: charactersMeta.total - 10,
      limit: 10,
    })
  }

  function handlePrevious() {
    const { offset } = charactersMeta

    if (offset - 10 > 10) {
      paginate({
        offset: offset - 10,
        limit: 10,
      })
    }
  }

  function handleNext() {
    const { offset, total } = charactersMeta
    if (total - offset > 10) {
      paginate({
        offset: charactersMeta.offset + 10,
        limit: 10,
      })
    }
  }

  function handlePaginate(field: string) {
    switch (field) {
      case 'first':
        handleFirst()
        break
      case 'previous':
        handlePrevious()
        break
      case 'next':
        handleNext()
        break
      case 'last':
        handleLast()
        break
      default:
    }
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
        {charactersMeta?.offset === 0
          ? 1
          : Math.ceil(charactersMeta?.offset / 10 + 1)}
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
