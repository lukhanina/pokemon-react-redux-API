import Button from 'react-bootstrap/Button';
import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
  
export function BackButton() {
  
  return (
    <Link to={'/'}>
      <Button
        variant="primary"
        className="back__button"
      >
      Back to the main page
        <svg className="DocSearch-Hit-Select-Icon" width="14" height="14" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg>
      </Button>
    </Link>
  )
}

