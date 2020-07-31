import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import TvShows from './components/TvShows';
import Spinner from './components/Spinner';
import Axios from 'axios';

function App() {
  let showIniciales = JSON.parse(localStorage.getItem('shows'));
  const [busqueda, setBusqueda] = useState('');
  const [shows, setShows] = useState(showIniciales);
  const [cargando, setCargando] = useState(false);


  const renderShows = (shows) => {
    return shows.map(show => (
      show.hasOwnProperty('show') ? show.show : show
    ));

  }
  useEffect(() => {

    const consultaApi = async () => {

      if (busqueda !== '') {
        const url = `https://api.tvmaze.com/search/shows?q=${busqueda}`;
        const resultado = await Axios.get(url);
        setCargando(true);
        setTimeout(() => {
          setCargando(false);
          setShows(renderShows(resultado.data));
        }, 3000);
      } else if (!localStorage.shows) {
        const url = `https://api.tvmaze.com/shows`;
        const resultado = await Axios.get(url);
        localStorage.shows = JSON.stringify(renderShows(resultado.data));
        setCargando(true);
        setTimeout(() => {
          setCargando(false);
          setShows(renderShows(resultado.data));
        }, 3000);
      } else {
        setShows(JSON.parse(localStorage.shows));
      }
    }
    consultaApi();
  }, [busqueda]);
  const componente = (cargando) ? <Spinner /> : <TvShows shows={shows} />;
  return (
    <Fragment>
      <Header />
      <section id="app-body">
        <SearchForm
          setBusqueda={setBusqueda}
        />
        {componente}
      </section>
      <Footer />
    </Fragment>

  );
}

export default App;
