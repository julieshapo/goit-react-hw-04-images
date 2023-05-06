import * as API from 'services/pixabay-api';
// import { fetchGallery } from 'services/pixabay-api';
import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchImages = ({ name }) => {
    if (name.trim()) {
      setGallery([]);
      setSearch(name);
      setPage(1);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchImages = async (name, page) => {
      try {
        setIsLoading(true);
        const images = await API.fetchGallery(name, page);
        setGallery(prevState =>
          page === 1 ? images : [...prevState, ...images]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [search, page]);

  return (
    <Container>
      <Header>
        <SearchBar onSubmit={searchImages} />
      </Header>
      {error && <p>'Oops, something went wrong! Please, try again'</p>}
      {isLoading ? <Loader /> : <ImageGallery items={gallery} />}
      {Math.ceil(gallery?.length / 12) >= page && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </Container>
  );
};
