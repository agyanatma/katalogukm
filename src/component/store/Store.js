import React, { Component } from 'react';
import './Store.css';
import {Card, Row, Col, Button} from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';

class Store extends Component {
    render() {
        return (
            <div className="card1">
              <div className="button2">
                <input className="search" id="search" placeholder="Ketik barang yang ingin anda cari...." />
                <Button variant="primary" className="cari" ><BsSearch /></Button>
                </div>
              <div className="container2">
                    <Row xs={1} md={4} className="container-2">
                      {Array.from({ length: 12 }).map((_, idx) => (
                      <Col>
                        <Card className="content-d">
                          <Card.Img height="156px" width="240px" variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                          <Card.Body className="body">
                          <Card.Title className="nambar">Nama Barang</Card.Title>
                          <Card.Text className="namhar">
                            <b>Rp. 24.500</b> 
                          </Card.Text>
                          <Button variant="primary" className="btn-c">Beli</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                    </div>
                </div>
        );
    }
}
 
export default Store;