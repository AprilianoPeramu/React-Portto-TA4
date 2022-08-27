import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import './Navbar.css';
import Home from '../pages/Home';
import About from '../pages/About';
import SkillPage from '../pages/SkillPage';
import Blog from '../pages/Blog';

function Navbar(props) {
    return (
        <div className='navbarAja'>
        <nav class="navbar navbar-expand-lg  fixed-top navbar-dark">
            <div class="container">
                <h1 class="navbar-brand oce" >Gorse <span>Peramu</span> </h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <div className="nav-menu">
                            <ul className='Nav'>
                                <li class="nav-link-active" aria-current="page" ><Link to="/"> Home</Link>
                                </li>

                                <li class="nav-link-active" ><Link to='/about'> About</Link>
                                </li>
                                <br />
                                <li class="nav-link-active" > <Link to="/skillPage"> Skill </Link>
                                </li>
                                <br />
                                <li class="nav-link-active"><Link to="/blog"> Blog</Link></li>
                            </ul>
                        </div>

                    </div>


                </div>

            </div>

        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skillPage" element={<SkillPage />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>
    );
}

export default Navbar;