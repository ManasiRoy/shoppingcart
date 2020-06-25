import React, { Component } from "react";

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: false
};


const ourbannerData = [
    {
        id: 1,
        title: "Safe is our priority",
        heading: "Cannabis for Health",
        img: "images/banner.jpg",
        describe:
            "We encourage and promote the responsible use of our products. We are licenzed retailer, all our products is legal and regulated by the federal Cannabis Act.",
    },
    {
        id: 2,
        title: "Safe is our priority",
        heading: "Cannabis for Health",
        img: "images/banner.jpg",
        describe:
            "We encourage and promote the responsible use of our products. We are licenzed retailer, all our products is legal and regulated by the federal Cannabis Act.",
    },
    {
        id: 3,
        title: "Safe is our priority",
        heading: "Cannabis for Health",
        img: "images/banner.jpg",
        describe:
            "We encourage and promote the responsible use of our products. We are licenzed retailer, all our products is legal and regulated by the federal Cannabis Act.",
    },
    {
        id: 4,
        title: "Safe is our priority",
        heading: "Cannabis for Health",
        img: "images/banner.jpg",
        describe:
            "We encourage and promote the responsible use of our products. We are licenzed retailer, all our products is legal and regulated by the federal Cannabis Act.",
    },
];

class BannerSlider extends Component {
    state = {
        bannerData: ourbannerData,
    };
    render() {
        const { bannerData } = this.state;

        return (
            <div className="banner">
                <div className="container">
                    <OwlCarousel options={options}>
                        {bannerData.map(({ id, describe, heading, img, title }) => (
                            <div className="col-12" key={id}>
                                <div className="row">
                                    <div className="col-md-6 bg-blue">
                                        <div className="bannerinr">
                                            <span>{title}</span>
                                            <h2>{heading}</h2>
                                            <p>{describe}</p>
                                            <button className="btn btn-red">Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 bg-red d-flex">
                                        <figure className="align-self-center">
                                            <img src={img} alt="banner" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>

        );
    }
}
export default BannerSlider;
