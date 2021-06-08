import { useState } from 'react'
import { Filter, Title, FilterItem, Count } from './styles'

type handleOrderByTypes = 'name' | 'modified'

type ParamsType = {
  orderBy?: string[]
  limit?: number
  offset?: number
  total?: number
  nameStartsWith?: string
}

type FilterBarProps = {
  orderBy: Function
  total: number
  results: number
  currentParams: ParamsType
}

function FilterBar({ orderBy, results, total, currentParams }: FilterBarProps) {
  const [order, setOrder] = useState({
    name: 'name',
    modified: 'modified',
  })

  function handlePaginate(field: handleOrderByTypes) {
    const _paramValue = order[field].includes('-') ? field : `-${field}`

    const _order = {
      ...order,
      [field]: _paramValue,
    }

    setOrder(_order)

    const _queryParam = Object.values(_order)

    orderBy({ orderBy: _queryParam })
  }

  return (
    <>
      <Filter>
        <FilterItem
          onClick={() => {
            handlePaginate('name')
          }}
        >
          <Title>ORDER BY NAME</Title>
        </FilterItem>
        <FilterItem
          onClick={() => {
            handlePaginate('modified')
          }}
        >
          <Title>ORDER BY MODIFIED</Title>
        </FilterItem>
        <Count>
          <span>SHOWING {results} - </span>
          {total} RESULTS
        </Count>
      </Filter>
    </>
  )
}

export default FilterBar
