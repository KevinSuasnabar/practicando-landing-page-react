import React from 'react';
import './sliStyles.css';

const Slider =() =>{

    return(
        <div id="slider">
        <div class="slider-context">
            <div class="social-media">
                <ul>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-facebook-messenger"></i></a></li>
                </ul>
            </div>
            <div class="text">
                <p>
                    <span>Best Teachers</span><br/>
                    and Environment
                </p>
                <div class="learnBtn">
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>


    </div>
    
    );

}

export default Slider;