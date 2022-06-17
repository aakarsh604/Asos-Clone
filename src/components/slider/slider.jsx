import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "./slider.css"
import {ChevronRightIcon} from "@chakra-ui/icons"
import {ChevronLeftIcon} from "@chakra-ui/icons"
import Card from "./Card";

const data = [
    {
        name : "FOOTWEAR",
        url : "https://images.asos-media.com/products/asos-design-sandals-in-olive/201370900-2?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "TOPS",
        url : "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-white-with-photographic-back-print/201154126-1-white?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "SPORTS BRANDS",
        url : "https://images.asos-media.com/products/adidas-training-earth-shades-aeroready-panelled-long-sleeve-half-zip-sweat-in-grey/201104836-1-grey?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "TAILORING",
        url : "https://images.asos-media.com/products/bando-regular-fit-jersey-suit-jacket-in-stone/202183594-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "HOODIES & SWEATSHIRTS",
        url : "https://images.asos-media.com/products/asos-actual-oversized-hoodie-with-logo-front-print-in-rose/201355721-1-rosepink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "SHORTS & TROUSERS",
        url : "https://images.asos-media.com/products/puma-downtown-colourblock-shorts-in-pink-exclusive-to-asos/24307413-3?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    },
    {
        name : "SWIMWEAR",
        url : "https://images.asos-media.com/products/south-beach-tie-dye-swim-shorts-with-bonded-zip-in-pink/201557375-1-pink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000",
    }
]

//console.log(data)

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      arrows : true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow : <ChevronRightIcon backgroundColor={"#d87f87"} color="white" mr="-30px" _hover={{color : "white"}} viewBox="4 6 20 13"/>,
      prevArrow : <ChevronLeftIcon backgroundColor={"#ef2b5c"} color="white" ml="-30px" _hover={{color : "white"}} viewBox="4 6 20 13"/>,
    };

    return (
      <div className="sliderdiv" >
        <Slider {...settings} style={{width: "80%", margin : "auto"}} autoplay autoplaySpeed={2500} >
            {data.map(item=>(
                <Card key={item.name} item={item}/>
            ))}
        </Slider>
      </div>
    );
  }
}