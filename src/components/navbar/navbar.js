import React,{useState} from 'react';
import logo from '../../images/logo.png';
import ModalPage from '../admin/modal';
import './navStyles.css';

const Navbar =() =>{


    return(
        <div className="nav">
            <nav>
                <img src={logo} alt="" className="logo" />
                <ul className="menu">
                    <li><a href="#">Home</a>
                    <hr />
                    </li>
                    <li><a href="#offers">Offers</a>
                        <hr/>
                    </li>
                    <li><a href="#about">About</a>
                        <hr/>
                    </li>
                    <li><a href="#our-programs">Programs</a>
                        <hr />
                    </li>
                    <li><a href="#testimonials">Testimonials</a>
                        <hr />
                    </li>
                    <li><button>Amdin</button>
                        <hr />
                    </li>
                </ul>
            </nav>
        </div>
    
    );

}

export default Navbar;