import React, { Component } from 'react';
import './Home.css';
import logo from './logo.png';

class Home extends Component {
    render() {
        return (
            <div className="card-b">
                <div className="img">
                <img src={logo} alt="logo" className="img" align="right"/>
                </div>
                    <div className="Titel-a">
                        Tumbuh Bersama Kami
                    </div>
                    <div className="content-b">
                        Toko Maju Jaya bersama UKM Lokal 
                    </div>
            </div>
        );
    }
}
 
export default Home;