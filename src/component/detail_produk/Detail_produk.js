import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Detail_produk.css';
import {Button} from "react-bootstrap";

export default function SyncSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

    return (
    <div className="detail">
        <div class="product">
            <div class="product-images">
            <div class="content-e">
    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        <div>
          <h2>1</h2>
        </div>
        <div>
          <h2>2</h2>
        </div>
        <div>
          <h2>3</h2>
        </div>
        <div>
          <h2>4</h2>
        </div>
        <div>
          <h2>5</h2>
        </div>
        <div>
          <h2>6</h2>
        </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
            </div>
            <div class="product-description">
                <div class="judul">
                <p class="category">Kategori</p>
                <p class="category-1" align="center">Pembersih Jamur</p>
                </div>
                <h5>
                    Water Spot Remover penghilang jamur Quick Sealant Spray Protection
                </h5>
                <h6>
                    Rp. 24.500
                </h6>
                <h1>Description</h1>
                <p class="desc">
                    Berfungsi sebagai pembersih jamur/kerak air/deposit mineral pada bagian body, emblem, mesin, logam, kaca dll.
                </p>
                <p class="desc">
                    * Tidak direkomendasikan untuk kaca yang memiliki lapisan UV (mobil baru, mobil eropa) dan kaca Spion.
                </p>
                <p class="desc"> 
                    * Untuk membersihikan jamur kaca, gunakan Glass Reborn. Aman dan lebih efektif
                </p>
                <div class="btn-5">
                <Button variant="primary" className="btn-3">Beli Sekarang</Button>
                <Button variant="primary" className="btn-2">Bantuan</Button>
                </div>
            </div>
        </div>
    </div>
  );
}