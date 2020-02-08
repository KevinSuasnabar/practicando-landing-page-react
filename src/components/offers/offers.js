import React from 'react';
import './offStyles.css';

const Offers =() =>{

    return(
        <div id="offers">
        <div class="section-intro">
            <div class="section-heading">
                <h1>What We Offer</h1>
                <p>At our education center, we provide a variety of benefits and advantages for your kids’ successful
                    education,<br/> while allowing your kid to stay fully active, creative, and healthy.</p>
            </div>
        </div>
        <div class="our-offer">
            <div class="offers-part1 flex">
                <div class="offer">
                    <div class="sml-circle begin-top-left"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Safety First</h2>
                        <p>We offer first-class protection and security <br/> for your children at Kinderex.</p>
                    </div>
                </div>
                <div class="offer">
                    <div class="sml-circle begin-bottom-left"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="far fa-user-circle"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Small Class Size</h2>
                        <p>All classes at our center have up to 6 <br/> students regardless of the curriculum.</p>
                    </div>
                </div>

                <div class="offer">
                    <div class="sml-circle begin-top-right"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Certified Teachers</h2>
                        <p>We hire only the most experienced and <br/> certified teachers for your children.</p>
                    </div>
                </div>



            </div>
            <div class="offers-part2 flex">
                <div class="offer">
                    <div class="sml-circle begin-bottom-right"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="fas fa-baby-carriage"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Infant Care</h2>
                        <p>Meeting the educational needs of infants <br/> through quality infant care.</p>
                    </div>
                </div>
                <div class="offer">
                    <div class="sml-circle begin-top-left"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Creative Lessons</h2>
                        <p>Our curriculum was designed to nurture <br/> creativity in all students of Kinderex.</p>
                    </div>
                </div>
                <div class="offer">
                    <div class="sml-circle begin-bottom-left"></div>
                    <div class="big-circle"></div>
                    <div class="offer-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div class="offer-text">
                        <h2>Happy Environment</h2>
                        <p>The best conditions for your child to have <br /> the unique learning experience.</p>
                    </div>
                </div>



            </div>
        </div>


    </div>
    
    );

}

export default Offers;