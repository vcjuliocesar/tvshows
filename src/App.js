import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import TvShows from './components/TvShows';
import Axios from 'axios';

function App() {
  let showIniciales = JSON.parse(localStorage.getItem('shows'));
  const [busqueda, setBusqueda] = useState('');
  const [shows, setShows] = useState(showIniciales);


const renderShows = (shows)=>{
   return shows.map(show=>(
      show.hasOwnProperty('show') ? show.show: show
   ));
 
}
  useEffect(() => {

    const consultaApi = async () => {
      if(!localStorage.shows && busqueda === ''){
        const url = `https://api.tvmaze.com/shows`;
        const resultado = await Axios.get(url);
        localStorage.shows=JSON.stringify(renderShows(resultado.data));
        setShows(renderShows(resultado.data));
      }else if(busqueda !== ''){
        const url = `https://api.tvmaze.com/search/shows?q=${busqueda}`;
        const resultado = await Axios.get(url);
        setShows(renderShows(resultado.data));
      }
    }
    consultaApi();
  }, [busqueda]);

  return (
    <Fragment>
      <Header />
      <section id="app-body">
        <SearchForm
          setBusqueda={setBusqueda}
        />
        <TvShows
          shows={shows}
        />
      </section>
      <Footer />
    </Fragment>

  );
}

export default App;
