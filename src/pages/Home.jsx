import '../App.css'
import { FaGithub, FaTwitter, FaLinkedin, FaAngleDoubleDown, FaFacebook, FaTelegramPlane } from 'react-icons/fa'
import Haski from '../assets/haski-logo.png';
import Pfp from '../assets/Pfp.JPEG';
import { RiBracesFill } from 'react-icons/ri'
import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Js from '../assets/Js.png';
import Rc from '../assets/Rc.png';
import Figma from '../assets/Figma.png';
import Github from '../assets/Github.png';
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
import gorse from '../assets/gorse.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink, } from 'react-router-hash-link';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    toast('The message has been sent 😉', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    emailjs.sendForm('service_pjt1pqr', 'template_j0zrf5j', form.current, 'NFJoUVFJXQaqKs6Nq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>

      <Navbar bg="dark" variant="dark" className="navbar fixed-top" expand="lg">

        <div className="logo mx-4"><HashLink to="#"><img src={Haski} alt="doggo" />Gorse</HashLink></div>
        <Navbar.Toggle className="ms-2 mb-2 mt-2 mx-4" />

        <Navbar.Collapse>
          <Container className="d-flex justify-content-end text-center">
            <Nav className="d-flex justify-content-center text-center">
              <Nav.Link><HashLink className='effect' to="#">Home</HashLink></Nav.Link>
              <Nav.Link><HashLink className='effect' to="#about">About</HashLink></Nav.Link>
              <Nav.Link><HashLink className='effect' to="#skill">Skill</HashLink></Nav.Link>
              <Nav.Link><HashLink className='effect' to="#blog">Blog</HashLink></Nav.Link>
              <Nav.Link><HashLink className='effect' to="#contact">Contact</HashLink></Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>


      <section className='jumbotron vh-100 d-flex align-items-center' id='home'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <img className='rounded-circle mb-3' src={Pfp} alt="Profile" height="200" />
              <h2>Hello, My Name Is Apriliano Peramu</h2>
              <h3>Im Front-End Developer</h3>

              <div className="icon mt-4">
                <a href='https://github.com/AprilianoPeramu' target='_blank' ><FaGithub /></a>
                <a href='https://twitter.com/gorseweebs' target='_blank' ><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/apriliano-peramu-a51706252/' target='_blank' ><FaLinkedin /></a>
              </div>
              <hr className='mt-4' />
              <div className='d-flex justify-content-center text-center mt-4'>
                <HashLink to="#about" className='iconss'><FaAngleDoubleDown /></HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='about d-flex align-items-center' id='about'>
        <div className='container'>
          <div className='row text-center'>
            <div className="col mt-5">
              <h2>About <span>Me</span></h2>
            </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
              <div className="col-md-6 mb-5">
                <p className='fs-5 align-items-center'>I am a graduate of SMA Negeri 1 Remboken in Remboken sub-district, North Sulawesi province, I have served as vice chairman of the student council and my expertise is problem solving. I really wanted to learn about IT and was very curious so I decided to start IT at the age of 18.</p>
                <button type="button" class="btn btn-secondary mt-5"><a href="https://drive.google.com/file/d/1gppF-A198GY9RYbwOaTT5fOK1BaJk6Fl/view?usp=sharing" target="blank"> <FaTelegramPlane/> Download CV</a></button>
              </div>
              <div className="col-md-6">
                  <img className='rounded' height="350px" width="350px" src={gorse} alt="gorse"/>
              </div>
            </div>
        </div>
      </div>

      <section id="skill">
        <div className='skills section mb-4'>
          <div className="container">
            <h2 className='section__title d-flex justify-content-center mt-4 fw-bold'>Skills</h2>
            <hr className="mb-3" />
            <div className="skills__container container grid section border">
              {/* Jenis Skill */}
              <div className="skills__content">
                <h3 className="skills__title mt-3 ">
                  <RiBracesFill /> FrontEnd Developer
                </h3>

                <div className="skills__info mb-3">
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Html} alt='skills' />
                    </div>

                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__subtitle">Intermediate</span>
                  </div>
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Css} alt='skills' />
                    </div>

                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__subtitle">Advance</span>
                  </div>
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Js} alt='skills' />
                    </div>

                    <h3 className="skills__name">Js</h3>
                    <span className="skills__subtitle">Intermediate</span>
                  </div>
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Rc} alt='skills' />
                    </div>

                    <h3 className="skills__name">React Js</h3>
                    <span className="skills__subtitle">Intermediate</span>
                  </div>
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Github} alt='skills' />
                    </div>

                    <h3 className="skills__name">Github</h3>
                    <span className="skills__subtitle">Advance</span>
                  </div>
                  <div className="skills__data">
                    <div className="skills__blob">
                      <img src={Figma} alt='skills' />
                    </div>

                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__subtitle">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <div className="text-center my-5 mb-3">
            <h2>My Projects</h2>
            <hr />
          </div>

          <div className="row ">
            <div className="col-lg-4 col-md-sm-8 mb-3">
              <div className="card bg-dark md-2 shadow-sm">
                <a href='https://comforting-dragon-e63f91.netlify.app/' target="_blank"><img src={pro1} alt="img" width="auto" height="auto" className='img-fluid mt-2' /></a>

                <div className="card-body">
                  <div className="card-title text-center">
                    <h3>Web e commarce</h3>
                  </div>
                  <div className="car-text text-center">
                    <p>G Five Market is a e-commerce website made based on html, css, and js</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-sm-8 mb-3">
              <div className="card bg-dark md-2 shadow-sm">
                <a href='#'><img src={pro3} alt="img" width="100%" height="100%" className='img-fluid mt-2' /></a>

                <div className="card-body">
                  <div className="card-title text-center">
                    <h3>Web e commarce</h3>
                  </div>
                  <div className="car-text text-center">
                    <p>FIVE SHOPE is a web e commarce made using React.js and Context for some logic</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-sm-8 mb-3">
              <div className="card bg-dark md-2 shadow-sm">
                <a href='https://gorse-movie.netlify.app/' target="_blank"><img src={pro2} alt="img" width="100%" height="100%" className='img-fluid mt-2' /></a>

                <div className="card-body">
                  <div className="card-title text-center">
                    <h3>Web Movie App</h3>
                  </div>
                  <div className="car-text text-center">
                    <p>a website made with html, css, and js that uses an API for list data and picture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact mb-5" id="contact">
        <div className="container card-body form-">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                  <label for="nama" class="form-label">Name</label>
                  <input type="text" name='user_name' class="form-control" id="nama" aria-describedby="nama" placeholder='Your Name' />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" name='user_email' class="form-control" id="email" aria-describedby="emailHelp" placeholder='Your Email' />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Type Massage'></textarea>
                </div>

                <div className="row text-center mb-2">
                  <div className="col">
                    <button type="submit" class="btn btn-secondary d-flex justify-content-center" value="Send" >Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer bg-dark'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className='text-center text-md-center'>
                <h5 className='text-uppercase text-white fs-medium mt-2'>follow me</h5>
                <ul className='list-unstyled list-inline'>
                  <li className='list-inline-item icon1'>
                    <a href='https://www.facebook.com/gorse.gorse.73' className='btn-floating btn-sm text-white' style={{ fs: 23 }}><FaFacebook /></a>
                  </li>
                  <li className='list-inline-item icon1'>
                    <a href='https://github.com/AprilianoPeramu' target="blank" className='btn-floating btn-sm text-white' style={{ fs: 23 }}><FaGithub /></a>
                  </li>
                  <li className='list-inline-item icon1'>
                    <a href='https://twitter.com/gorseweebs' target="blank" className='btn-floating btn-sm text-white' style={{ fs: 23 }}><FaTwitter /></a>
                  </li>
                  <li className='list-inline-item icon1'>
                    <a href='https://www.linkedin.com/in/apriliano-peramu-a51706252/' className='btn-floating btn-sm text-white' style={{ fs: 23 }}><FaLinkedin /></a>
                  </li>
                </ul>
                <p className='create'>Create with <span className='heart'> ❤ </span>by Apriliano Peramu</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Home;