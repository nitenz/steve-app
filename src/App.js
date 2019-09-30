import React from 'react';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import News from './pages/news/news.component';
import Photos from './pages/photos/photos.component';
import Videos from './pages/videos/videos.component';
import Header from './components/header/header.component';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <header className="App-header">

        <Header />
    
        <div className="content">
          <Switch>
            <Route exact path='/' activeClassName="active" component={HomePage} />
            <Route path='/about' activeClassName="active" component={About} />
            <Route path='/news' activeClassName="active" component={News} />
            <Route path='/photos' activeClassName="active" component={Photos} />
            <Route path='/videos' activeClassName="active" component={Videos} />
          </Switch>
        </div>
      </header>
    </div>


  );
 }
} 



export default App;