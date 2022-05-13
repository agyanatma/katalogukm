import React from 'react';
import useItem from '../../queries/useItem';
import './Menu.css';
 
const Menu = () =>  {
        const {data: item} = useItem()
            console.log("Item:", item)
        return (
            <div>
                <header className="header">
                    <a href="#home" className="tittle">Toko Maju Jaya</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="#products">PRODUCTS</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#store">STORE</a></li>
                        <li><a href="#call us" className="btn-a">CALL US</a></li>
                    </ul>
                </header>
            </div>
        );
    }

 
export default Menu;
