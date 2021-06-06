import { Filter, Title, FilterItem, Count } from './styles'

type FilterBarProps = {
  orderBy: Function
  total: number
  results: number
}

function FilterBar({ orderBy, results, total }: FilterBarProps) {
  return (
    <>
      <Filter>
        <FilterItem
          onClick={() => {
            orderBy('name')
          }}
        >
          <Title>ORDER BY NAME</Title>
        </FilterItem>
        <FilterItem
          onClick={() => {
            orderBy('modified')
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
