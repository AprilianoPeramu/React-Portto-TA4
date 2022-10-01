import React from 'react';
import '../App.css'
import Profile from '../assets/Profile.png';
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function About(props) {
  return (
    <div className='vh-100 d-flex align-items-center '>
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-center text-center '>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="col-lg-7 mx-auto text-center">
            <img className='profile' src={Profile} alt="Profile" width="270" height="270" />
          </div>
          <div className="col-lg-7 mx-auto text-center fs-bold mt-3">
            <p>
              I am a graduate of SMA Negeri 1 Remboken in Remboken sub-district, North Sulawesi province,
              I have served as vice chairman of the student council and my expertise is problem solving. I really wanted to learn about IT and was very curious so I decided to start IT at the age of 18.
            </p>
            <hr />
            <div className="icon mt-2">
              <a href='https://www.facebook.com/'><FaFacebookF /></a>
              <a href='https://github.com/AprilianoPeramu'><FaGithub /></a>
              <a href='https://twitter.com/gorseweebs'><FaTwitter /></a>
              <a href='https://www.linkedin.com/in/gorse-peramu-03b962247/'><FaLinkedin /></a>
            </div>
            <div className='text-center mt-3'>
              <button type="button" class="btn btn-dark ms-2k"><Link to='/skills'>Next</Link></button>
              <button type="button" class="btn btn-secondary ms-1"><a href='https://drive.google.com/file/d/1QfKcbV2-AYz5dtziV011Jc9WWf0f1oL_/view?usp=sharing'>Download CV </a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;