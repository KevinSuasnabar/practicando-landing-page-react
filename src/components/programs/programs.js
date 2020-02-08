import React from 'react';
import './proStyless.css';
import img1 from '../../images/art-img.jpg';
import img2 from '../../images/foreignLang-img.jpg';
import img3 from '../../images/sports-img.jpg';


const Programs =() =>{

    return(
        <div id="our-programs">
            <div class="container">
                <div class="section-intro">
                    <div class="section-heading">
                        <h1 style={{"color":"beige"}}>Our Programs</h1>
                    </div>
                </div>
                <div class="program-boxes flex">
                    <div class="prog-box">
                        <div class="prog-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div class="prog-info">
                            <h2><a href="#">Arts programs</a> </h2>
                            <p>These programs provide extensive art experiences and activities for kids and teens.</p>
                            <p>Teacher: <span><a href="#">Stephen Rose</a></span></p>
                        </div>
                    </div>
                    <div class="prog-box">
                        <div class="prog-img">
                            <img src={img2} alt=""/>
                        </div>
                        <div class="prog-info">
                            <h2><a href="#">Foreign Language programs</a></h2>
                            <p>The goal of these programs is to prepare your child for better foreign language studying.</p>
                            <p>Teacher: <span><a href="#">Catherine White</a></span></p>
                        </div>
                    </div>
                    <div class="prog-box">
                        <div class="prog-img">
                            <img src={img3} alt="" />
                        </div>
                        <div class="prog-info">
                            <h2><a href="#">Sports programs</a></h2>
                            <p>Competitive activities and movement classes form the basis of these programs.</p>
                            <p>Teacher: <span><a href="#">Stephen Rose</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );

}

export default Programs;