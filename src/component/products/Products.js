import React from 'react';
import './Products.css';
import useItem from '../../queries/useItem';
import {Card, Row, Col, Button} from "react-bootstrap";

const Products = () =>  {
    const {data: item} = useItem()
        console.log("Item:", item)
        return (
            <div className="card-1">
                    <div className="Titel-1">
                        Produk Terlaris
                    </div>
                    <div className="rectangle" />
                    <div className="container">
                    <Row xs={1} md={3} className="container-1">
                      {Array.from({ length: 3 }).map((_, idx) => (
                      <Col>
                        <Card className="content-c">
                          <Card.Img height="156px" width="240px" variant="top" src="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                          <Card.Body className="body">
                          <Card.Title className="nambar">Nama Barang</Card.Title>
                          <Card.Text className="namhar">
                            <b>Rp. 24.500</b> 
                          </Card.Text>
                          <Card.Text className="tersedia">
                            <b>Tersedia</b> 
                          </Card.Text>
                          <Button variant="primary" className="btn-1">Terjual</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      ))}
                    </Row>
                    </div>
                </div>
        );
    }
 
export default Products;

