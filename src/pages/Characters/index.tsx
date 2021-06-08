import { useEffect, useState, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
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
  Input,
  SearchIconWrapper,
} from './styles'

const defaultCharacters: CharacterType[] = []

function Characters() {
  const [search, setSearch] = useState('')
  const { loading, characters, charactersMeta, getCharacters, currentParams } =
    useCharacters()

  useEffect(() => {
    if (search !== '') {
      const delaySearch = setTimeout(() => {
        getCharacters({ nameStartsWith: search })
      }, 1000)
      return () => clearTimeout(delaySearch)
    }

    getCharacters({ limit: 10 }, true)

    return () => {}
  }, [search])

  return (
    <Container>
      <Header>
        <PageTitle>Marvel Characters List</PageTitle>
        <SearchBox>
          <Input
            type='search'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIconWrapper>
            <Icon size='10x' icon={faSearch} color='#d84128' />
          </SearchIconWrapper>
        </SearchBox>
      </Header>
      <FilterBar
        currentParams={currentParams}
        orderBy={getCharacters}
        results={characters?.length || 0}
        total={charactersMeta?.total || 0}
      />
      <Content>
        <List>
          {characters?.length > 0 &&
            characters.map((character: CharacterType) => {
              const { id, name, thumbnail, description } = character
              return (
                <Link key={id} to={`/character/${id}`}>
                  <CharacterCard
                    name={name}
                    thumbnail={thumbnail}
                    description={description}
                  />
                </Link>
              )
            })}
          {loading && <h1>Carregando...</h1>}
          {!loading && characters?.length <= 0 && (
            <h1>Nenhum personagem encontrado...</h1>
          )}
        </List>
        <Paginator paginate={getCharacters} charactersMeta={charactersMeta} />
      </Content>
    </Container>
  )
}

export default Characters
