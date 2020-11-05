import React from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../../general/data';

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      {pages.map((item, index) => (
        <li key={index} className="nav__item">
          <Link className="nav__link" to={`/${item.router}`}>
            <div className="nav__link-icon" />
            <span className="nav__link-txt">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
