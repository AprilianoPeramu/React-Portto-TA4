import React from 'react';
import About from './About';
import { Link, Routes, Route } from 'react-router-dom'

function Home() {
    return (

        <div className='home'>

            <div className="container ">
                
                <h1 className='text'>Apriliano Peramu</h1>
                <h3 style={{ color: 'white' }}>Web <span>Developer</span></h3>
                <br />
                <Link to='/about'> <button className='btn' style={{color: 'white'}}>Next</button></Link>
            </div>
           
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>
        </div>

    );
}

export default Home;