import React from 'react';
import '../App.css'
import {RiBracesFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Js from '../assets/Js.png';
import Rc from '../assets/Rc.png';
import Figma from '../assets/Figma.png';
import Github from '../assets/Github.png';

function Skills(props) {
  return (
    <div className='vh-100'>
      <div className='skills section'>
        <h2 className='section__title d-flex justify-content-center mt-4 mb-4 fw-bold'>Skills</h2>

        <div className="skills__container container grid section border">
          {/* Jenis Skill */}
            <div className="skills__content">
                <h3 className="skills__title mt-3 ">
                    <RiBracesFill /> FrontEnd Developer
                </h3>
                  
                <div className="skills__info mb-3">
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Html} alt='skills'/>
                        </div>

                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Css} alt='skills'/>
                        </div>

                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__subtitle">Advance</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Js} alt='skills'/>
                        </div>

                        <h3 className="skills__name">Js</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Rc} alt='skills'/>
                        </div>

                        <h3 className="skills__name">React Js</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Github} alt='skills'/>
                        </div>

                        <h3 className="skills__name">Github</h3>
                        <span className="skills__subtitle">Advance</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                          <img src={Figma} alt='skills'/>
                        </div>

                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='d-flex justify-content-center text-center mt-4'>
              <button type="button" class="btn btn-dark "><Link to='/blog'>Next</Link></button>
      </div>
    </div>
  );
}

export default Skills;