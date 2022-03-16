import React, { Component } from 'react';
import './Home.css';
import logo from './logo.png';

class Home extends Component {
    render() {
        return (
            <div className="card-b">
                <p><img src={logo} alt="logo" className="img" align="right"/></p>
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