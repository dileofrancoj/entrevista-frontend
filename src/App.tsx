import * as React from 'react';
import { Container } from 'react-bootstrap';

import Searchbar from './components/Searchbar'

function App() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  return (
    <Container>
      <Searchbar searchValue={searchValue} onSearchChange={handleSearchChange} />
    </Container>
  );
}

export default App;
