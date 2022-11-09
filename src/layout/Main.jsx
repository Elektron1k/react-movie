import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_SEARCH = 'http://www.omdbapi.com/?apikey=50b8b6e&s=';

function Main() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_SEARCH + searchText)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.Search);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  function startSearch(textSearch, radioButtonSearch) {
    if (textSearch) {
      switch (radioButtonSearch) {
        case 'all':
          setSearchText(textSearch);
          break;
        case 'movie':
          console.log(textSearch + '&type=' + radioButtonSearch);
          setSearchText(textSearch + '&type=' + radioButtonSearch);
          break;
        case 'series':
          console.log(textSearch + '&type=' + radioButtonSearch);
          setSearchText(textSearch + '&type=' + radioButtonSearch);
          break;
      }
    }
  }

  return (
    <main className="container content">
      <Search search={startSearch} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export default Main;
