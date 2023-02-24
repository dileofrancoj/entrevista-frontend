import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useFetch } from './hooks/useFetch'
import Searchbar from './components/Searchbar'

function App() {
  const { loading, error, response } = useFetch('character');
  console.log("response: ", response)
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  if (loading) return "loading...";
  if (error) return "error ...";

  return (
    <Container>
      <Searchbar searchValue={searchValue} onSearchChange={handleSearchChange} />
    </Container>
  );
}

export default App;
