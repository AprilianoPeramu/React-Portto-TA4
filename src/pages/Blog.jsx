
import React from 'react';
import project from '../assets/project.jpg'

function Blog() {
    return (
        <div className='blog'>
            <div className="container text-center">
                <div className="jarakblog">
                    <h1>PROJECT</h1>
                    <h3>Recent Project 2022 </h3>
                </div>
                <div className="container project">

                    <div className="row">
                        <img src={project} alt="" />
                        <div className='teks'>
                            <p>MFIVE</p>
                            <p className='mfive'>MFIVE adalah project tentang E-commerc sayur buah online,yang di buat agar membantu pembeli dalam memilih buah dan sayuran yang berkualitas. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;