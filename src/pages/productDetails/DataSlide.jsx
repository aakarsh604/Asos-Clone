import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import "./dataSlide.css";
import LikeProducts from "./LikeProducts";




const data=[
  {
    Image: "https://images.asos-media.com/products/nike-repeat-pack-logo-taped-sweatshirt-in-iron-grey/200877661-1-grey?$n_320w$&wid=317&fit=constrain",
    Brand_Name: "Nike Repeat Pack logo taped tracksuit in grey",
    Price: "59.00",
    id: 24,
    color: "GREY"
  },
  {
    Image: "https://images.asos-media.com/products/asos-design-stretch-slim-fit-work-shirt-in-blue/23632998-1-blue?$n_640w$&wid=513&fit=constrain",
    Brand_Name: "ASOS DESIGN stretch slim fit work shirt in blue",
    Price: "15.25",
    id: 25,
    color: "Blue"
  },
  {
    Image: "https://images.asos-media.com/products/wrangler-t-shirt-with-americana-print-in-black/201262477-1-black?$n_640w$&wid=513&fit=constrain",
    Brand_Name: "Wrangler t-shirt with americana print in black",
    Price: "18.00",
    id: 26,
    color: "BLACK"
  },
  {
    "Image": "https://images.asos-media.com/products/influence-peter-pan-collar-midi-dress-in-bright-pink/201737178-1-brightpink?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "Influence peter pan collar midi dress in bright pink",
    "Price": "24.00",
    "id": 33,
    "color": "Bright Pink"
  },
  {
    "Image": "https://images.asos-media.com/groups/asos-design-co-ord-embellished-floral-mini-dress-in-fil-coupe-lgreen-and-skirt/72527-group-1?$n_640w$&wid=513&fit=constrain",
    "Brand_Name": "ASOS DESIGN co-ord embellished floral mini dress in fil coupe - LGREEN and skirt",
    "Price": "21.25",
    "id": 34,
    "color": "Teal"
  },
  {
    "Image": "https://images.asos-media.com/products/wednesdays-girl-long-sleeve-mini-smock-dress/22197809-1-black?$n_1920w$&wid=1926&fit=constrain",
    "Brand_Name": "Wednesday's Girl long sleeve mini smock dress",
    "Price": "9.75",
    "id": 35,
    "color": "Black"
  },
  {
    "Image": "https://images.asos-media.com/products/influence-midi-dress-in-daisy-print/203021004-1-multi?$n_640w$&wid=513&fit=constrain",
    "Brand_Name": "Influence midi dress in daisy print",
    "Price": "21.00",
    "id": 36,
    "color": "MULTI"
  },
  {
    "Image": "https://images.asos-media.com/groups/calvin-klein-modern-cotton-logo-loungewear-co-ord-in-black-check-print/68989-group-1?$n_640w$&wid=513&fit=constrain",
    "Brand_Name": "Calvin Klein Modern Cotton logo loungewear co-ord in black check print",
    "Price": "25.50",
    "id": 37,
    "color": "BLACK"
  },
  {
    "Image": "https://images.asos-media.com/products/closet-london-puff-sleeve-mini-dress-in-pink-print/203094981-1-multi?$n_1920w$&wid=1926&fit=constrain",
    "Brand_Name": "Closet London puff sleeve mini dress in pink print",
    "Price": "51.00",
    "id": 38,
    "color": "Multi"
  },
  {
    "Image": "https://images.asos-media.com/products/river-island-suede-tassle-loafer-in-pink/203330311-1-pinklight?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "Tommy Hilfiger runner trainer in white",
    "Price": "90.09",
    "id": 7,
    "color":"pink"
  },
  {
    "Image": "https://images.asos-media.com/products/new-balance-hierro-trainers-in-sand/201100347-1-beige?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "Puma Running Aviator trainers in blue",
    "Price": "68.25",
    "id": 8,
    "color":"beige-brown"
  },
  {
    "Image": "https://images.asos-media.com/products/gianni-feraud-shacket-in-grey/202291452-1-grey?$n_1920w$&wid=1926&fit=constrain",
    "Brand_Name": "Gianni Feraud shacket in grey",
    "Price": "53.00",
    "id": 31,
    "color": "GREY"
  },
  {
    "Image": "https://images.asos-media.com/products/puma-training-activate-jacket-in-red/22501999-1-red?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "Puma Training Activate jacket in red",
    "Price": "26.25",
    "id": 32,
    "color": "Red"
  },
  {
    "Image": "https://images.asos-media.com/products/river-island-suede-tassle-loafer-in-pink/203330311-1-pinklight?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "ASOS DESIGN chunky sole mule loafer in drenched stone",
    "Price": "40.01",
    "id": 1,
    "color": "pink"
  },
  {
    "Image": "https://images.asos-media.com/products/vans-old-skool-trainers-in-orange/201666941-1-orange?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "River Island round toe derby shoes in brown",
    "Price": "37.40",
    "id": 2,
    "color":"orange"
  },
  {
    "Image": "https://images.asos-media.com/products/vans-style-36-colour-block-trainers-in-beige-brown/201667618-1-multi?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "River Island wide fit leather brogue shoes in black",
    "Price": "53.02",
    "id": 3,
    "color":"beige-brown"

  },
  {
    "Image": "https://images.asos-media.com/products/napapijri-phlox-boots-in-black/201469506-1-black?$n_320w$&wid=317&fit=constrain",
    "Brand_Name": "River Island leather boots in dark brown",
    "Price": "63.07",
    "id": 4,
    "color":"black"
  }
]








export default class MultipleItems extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      speed: 500,
      slidesToScroll: 4,
      nextArrow : <ChevronRightIcon marginRight={"-30px"} backgroundColor={"white"} color="black"  ml="-30px" _hover={{color : "black"}} viewBox="4 6 20 13"/>,
      prevArrow : <ChevronLeftIcon backgroundColor={"white"} color="black" ml="-30px" _hover={{color : "black"}} viewBox="4 6 20 13"/>,
    };
    return (
      <div className="sliderdiv" >
        <Slider {...settings} style={{width: "80%", margin : "auto"}}  >
            {data.map(item=>(
                <LikeProducts key={item.id} item={item}/>
            ))}
        </Slider>
      </div>
    )
}
}