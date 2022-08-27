import React from 'react';
import Profile from '../assets/Profile.png';
import SkillPage from './SkillPage';
import { Link, Routes, Route } from 'react-router-dom'

function About() {
    return (
        <div className='about'>
            <div className="container text-center mobile">

                <div className="row">
                    <div className="col-md-6  imgAbout">


                        <img src={Profile} alt="foto Gorse " className='gambarA' />
                    </div>

                    <div className="col-md-6 text-center textAbout" style={{ marginTop: '100px' }} >
                        <h1 className='h1about'>About Me</h1>
                        <h3 className='h2about'>
                        my name is apriliano peramu & i am a front-end developer</h3>
                        <p className='h2about'>I am a graduate of SMA Negeri 1 Remboken in Remboken sub-district, North Sulawesi province,
                    I have served as vice chairman of the student council and my expertise is problem solving. I really wanted to learn about IT and was very curious so I decided to start IT at the age of 18.</p>



                        <Link to="/SkillPage" className='btnabout'>Next</Link>
                    </div>

                </div>

            </div>
            <Routes>
                <Route path="/SkillPage" element={<SkillPage />} />
            </Routes>
        </div >


    );
}

export default About;