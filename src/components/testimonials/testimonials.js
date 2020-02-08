import React from 'react';
import './tesStyles.css';
import img1 from '../../images/human1.jpg';
import img2 from '../../images/human2.jpg';
import img3 from '../../images/human3.jpg';
import img4 from '../../images/human4.jpg';



const Testimonials =() =>{

    return(
        <div id="testimonials">
        <div className="container overflow">
            <div className="section-intro">
                <div className="section-heading">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div className="outside-box flex">

                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="author-data">
                            <p>Sarah Johnson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>
                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="author-data">
                            <p>Marie Hanson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>
                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="author-data">
                            <p>Sarah Johnson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>
                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img4} alt=""/>
                        </div>
                        <div className="author-data">
                            <p>Sarah Johnson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>
                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="author-data">
                            <p>Sarah Johnson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>
                <div className="human-info">
                    <div className="time flex">
                        <div className="star-icons">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="time-info">
                            <p>2 days ago</p>
                        </div>


                    </div>

                    <div className="human-info-text">
                        <p>My son started at Kinderex at the beginning of the year. We were all a bit anxious to move
                            him into a new environment, but it was the best decision we have made!</p>
                    </div>
                    <div className="author flex">
                        <div className="author-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="author-data">
                            <p>Marie Hanson</p>
                            <p>Client</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="scroll-icon">

            </div>
        </div>
    </div>
    
    );

}

export default Testimonials;