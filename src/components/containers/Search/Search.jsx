import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
    
export function Search() {
  const [ name, setName ] = useState(''); 
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Enter pokemons name ..."
        className="me-2 search__input"
        aria-label="Search"
        onChange={(e) => {
          setName(e.target.value.toLowerCase())
        }}
      />
      <Link to={`/pokemon/${name}`}>
        <Button variant="outline-success" type='submit' className='search__button' disabled={!name}>Search</Button>
      </Link>
    </Form>
  );
}
