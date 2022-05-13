import React from 'react';
import useItem from '../../queries/useItem';
import './Home.css';
import logo from './logo.png';

const Home = () =>  {
        const {data: item} = useItem()
            console.log("Item:", item)
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
 
export default Home;