import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useFetch } from './hooks/useFetch'
import Searchbar from './components/Searchbar'
import { Characters } from './components/Characters/Characters';

function App() {
  const { loading, error, response } = useFetch('character');
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  console.log("response ->", response)
  if (loading) return "loading...";
  if (error) return "error ...";

  return (
    <Container fluid style={{ height: '100vh' }}>
      <Searchbar searchValue={searchValue} onSearchChange={handleSearchChange} />
      <Characters characters={response.results} />
    </Container>
  );
}

export default App;
