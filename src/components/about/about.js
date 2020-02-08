import React from 'react';
import about from '../../images/about.jpg';
import './aboStyles.css';

const About =() =>{

    return(
        <div id="about">
        <div class="container">
            <div class="section-intro">
                <div class="section-heading">
                    <h1>A Few Words About Us</h1>
                    <p>We are dedicated to providing a wide variety of childcare services to parents and their children,
                        while also <br/> increasing the skills and basic knowledge of your children.</p>
                </div>
            </div>
            <div class="about-info flex">
                <div class="image">
                    <img src={about} alt="" />
                </div>
                <div class="about-context">
                    <p>
                        At Kinderex, our mission is to provide excellence in preschool, kindergarten, before and after
                        school programs and summer camp for families living in the greater local area. Here you’ll find
                        exceptional teachers, curriculum and learning environments that encourage children to learn,
                        play, and explore in a safe, healthy, and nurturing environment promoting creative thinking.
                    </p>
                    <div class="progress ">
                        <div class="percent-text">
                            <p>Preschool Education</p>
                            <p>75%</p>
                        </div>
                        <div class="percent ">

                            <div class="colorful summer"></div>
                        </div>

                    </div>



                    <div class="progress">
                        <div class="percent-text">
                            <p>Summer Program</p>
                            <p>50%</p>
                        </div>
                        <div class="percent">

                            <div class="colorful preschoolProg"></div>
                        </div>
                    </div>

                    <div class="learnBtn">
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default About;