import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Main/Main';
import { SearchResult } from './SearchResult/SearchResult';

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:name" element={<SearchResult />} />
      </Routes>
    )
  }
}
