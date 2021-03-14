import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import MainPage from "./pages/MainPage/MainPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import AlbumPage from './pages/AlbumPage/AlbumPage';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={MainPage}/>
      <Route exact path={"/user/albums/:id/"} component={AlbumsPage}/>
      <Route exact path={"/album-page"} component={AlbumPage}/>
    </div>
  );
}

export default App;
