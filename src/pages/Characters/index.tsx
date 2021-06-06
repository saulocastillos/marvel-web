import { useEffect, useState, SyntheticEvent } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import useCharacters from '../../hooks/useCharacters'

import { CharacterType } from '../../types/character'

import CharacterCard from '../../components/CharacterCard'
import FilterBar from '../../components/FilterBar'
import Icon from '../../components/Icon'
import Paginator from '../../components/Paginator'

import {
  Container,
  Header,
  PageTitle,
  SearchBox,
  Content,
  List,
  SearchTitle,
} from './styles'

const defaultCharacters: CharacterType[] = []

function Characters() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults]: [
    CharacterType[],
    (characters: CharacterType[]) => void
  ] = useState(defaultCharacters)

  const { loading, characters, orderBy, apiMeta, paginate } = useCharacters()

  const handleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    setSearch(target.value)
  }

  useEffect(() => {
    const result = characters?.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    if (result?.length > 0) {
      setSearchResults(result)
    } else {
      setSearchResults([])
    }
  }, [search, characters])

  return (
    <Container>
      <Header>
        <PageTitle>Marvel Characters List</PageTitle>
        <SearchBox>
          <SearchTitle
            type='search'
            placeholder='Search'
            value={search}
            onChange={(e) => handleChange(e)}
          />
          <Icon size='10x' icon={faSearch} color='#d84128' />
        </SearchBox>
      </Header>
      <FilterBar
        orderBy={orderBy}
        results={searchResults?.length || 0}
        total={apiMeta?.total || 0}
      />
      <Content>
        <List>
          {searchResults?.length > 0 &&
            searchResults.map((character: CharacterType) => {
              const { id, name, thumbnail } = character
              return (
                <CharacterCard key={id} name={name} thumbnail={thumbnail} />
              )
            })}
          {loading && <h1>Carregando...</h1>}
          {!loading && searchResults?.length <= 0 && (
            <h1>Nenhum personagem encontrado...</h1>
          )}
        </List>
        <Paginator paginate={paginate} apiMeta={apiMeta} />
      </Content>
    </Container>
  )
}

export default Characters