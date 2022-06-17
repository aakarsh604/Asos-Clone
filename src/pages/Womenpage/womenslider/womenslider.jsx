import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "./slider.css"
import {ChevronRightIcon} from "@chakra-ui/icons"
import {ChevronLeftIcon} from "@chakra-ui/icons"
import Card from "./womenCard";
import data from "../../../data/womenslider.json"

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