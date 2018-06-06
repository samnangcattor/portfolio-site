import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () =>(
  <div>
    Portfolio home page with links to items in Nav
    <p> Check the I've done</p>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
  </div>
);

export default PortfolioPage;
