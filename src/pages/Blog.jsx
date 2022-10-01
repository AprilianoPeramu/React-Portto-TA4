import React from 'react';
import '../App.css'
import op from '../assets/op.png'
import hxh from '../assets/hxh.png'
import jjk1 from '../assets/jjk1.png'
import { FaEye } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Blog(props) {
  return (
    <div className='vh-100'>
      <div className="container">
        <div className="text-center my-5">
          <h2>My Projects</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-sm-8">
            <div className="card md-5 shadow-sm">
              <img src={op} alt="img" width="100%" height="100%" className='img-fluid' />

              <div className="card-body">
                <div className="card-title">
                  <h3>This is the post title</h3>
                </div>
                <div className="car-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae!</p>
                </div>
                <button type="button" class="btn btn-dark ms-2k"><a href='#'>View Demo <FaEye /></a></button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-sm-8">
            <div className="card md-5 shadow-sm">
              <img src={hxh} alt="img" width="100%" height="100%" className='img-fluid' />

              <div className="card-body">
                <div className="card-title">
                  <h3>This is the post title</h3>
                </div>
                <div className="car-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae!</p>
                </div>
                <button type="button" class="btn btn-dark ms-2k"><a href='#'>View Demo <FaEye /></a></button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-sm-8">
            <div className="card md-5 shadow-sm">
              <img src={jjk1} alt="img" width="100%" height="100%" className='img-fluid' />

              <div className="card-body">
                <div className="card-title">
                  <h3>This is the post title</h3>
                </div>
                <div className="car-text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae!</p>
                </div>
                <button type="button" class="btn btn-dark ms-2k"><a href='#'>View Demo <FaEye /></a></button>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center text-center mt-4'>
          <button type="button" class="btn btn-dark "><Link to='/'>Back to Home</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Blog;