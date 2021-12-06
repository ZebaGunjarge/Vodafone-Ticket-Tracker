import logo from '../download.png';
import React from 'react';
  
const Header = () => {
  return (
    <>
      <header className="App-header">
        
        <ul>
          <li>
            <a href="default.asp" class="logo" itemprop="url">
              <span class="icon icon-vf-inner"><img src={logo} alt="Logo" id="logo"/></span>
            </a>
          </li>
          <li><a href="default.asp">Cellular</a></li>
          <li><a href="news.asp">Internet&landline</a></li>
          <li><a href="contact.asp">TV</a></li>
          <li><a href="about.asp">Offers for customers</a></li>
          <li><a href="contact.asp">help</a></li>
      </ul>  
      </header>
    </>
  );
};
  
export default Header;