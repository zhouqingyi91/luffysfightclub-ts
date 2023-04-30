import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className='space-y-3 text-xl'>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div>
        <Link className='hover:text-white underline' to="/">Go to Homepage</Link>
      </div>
    </section>
  )
};

export default PageNotFound;