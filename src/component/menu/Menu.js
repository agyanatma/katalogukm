import React, { Component } from 'react';
import './Menu.css';
 
class Menu extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <a href="#home" className="tittle">Toko Maju Jaya</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="#products" className="header">PRODUCTS</a></li>
                        <li><a href="#about" className="header">ABOUT</a></li>
                        <li><a href="#store" className="header">STORE</a></li>
                        <li><a href="#call us" className="btn-a" >CALL US</a></li>
                    </ul>
                </header>
            </div>
        );
    }
}
 
export default Menu;
