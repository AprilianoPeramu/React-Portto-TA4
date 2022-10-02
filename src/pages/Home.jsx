import React from 'react';
import '../App.css'
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin, FaAngleDoubleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/Theme';
import { useContext } from 'react';

const Home = (props) => {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log("theme", theme);

  return (
    <div className='vh-100 d-flex align-items-center' style={{backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2>Hello, My Name Is Apriliano Peramu</h2>
            <h3>Im Front-End Developer</h3>
            
            <div className="icon mt-4">
              <a href='https://www.facebook.com/'>{isDark ? "" : ""}<FaFacebookF /></a>
              <a href='https://github.com/AprilianoPeramu'><FaGithub /></a>
              <a href='https://twitter.com/gorseweebs'><FaTwitter /></a>
              <a href='https://www.linkedin.com/in/gorse-peramu-03b962247/'><FaLinkedin /></a>
            </div>
            <hr className='mt-4' />
            <div className='d-flex justify-content-center text-center mt-4'>
              <button type="button" class="btn btn-dark "><Link to='/about'>Next <FaAngleDoubleRight /></Link></button>
              <button onClick={toggleTheme} type="button" class="btn btn-dark ms-2">Change Theme</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;