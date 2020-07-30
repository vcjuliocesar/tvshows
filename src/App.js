import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <Fragment>
      <Header/>
      <section id="app-body">
        <SearchForm/>
      </section>
      <Footer/>  
    </Fragment>
     
  );
}

export default App;
