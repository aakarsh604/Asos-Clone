import React from 'react'
import {Box, Button, Heading, Image, Flex, Text} from "@chakra-ui/react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './womenslider/womenslider';
import "./women.css"
import womenSale from "../../data/womenSale.json"
import MenSaleCard from '../Menpage/MenSaleCard';
import pic1 from "../../assets/img3.png"
import pic2 from "../../assets/img4.png"
import Salebar from './Salebar';
import { Link } from 'react-router-dom';


const WomenPage = () => {
  return (
    <div>
        <Salebar/>

        <Box pb="15px" className="mencontainer">
                <Button bg="white" rounded="30px" w="250px" fontSize="4xl" p="22px 25px" mt={5}>SALE</Button>
                <Heading maxW="38%" m="auto" size="3xl" fontWeight={900} fontStyle="italic" color="black" mt={5}>UP TO 70% OFF! ITS CALLED BIG DISCOUNT ENERGY</Heading>
                <Box>
                    <SimpleSlider/>
                </Box>
                <Link to="/products/womensclothing">
                <Button rounded="0px" mt="25px" h="45px" w="170px" fontWeight="700" color="black" letterSpacing="2px" _hover={{color : "white", backgroundColor : "black"}}>VIEW ALL</Button></Link>
                <p className='conditions'>Limited time only. Selected styles marked down as shown.</p>
        </Box> 

        <Box className="bigimagediv">
        <Image m="auto" mt="50px" src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/hero/hero_1258x600.jpg"></Image>
        <Button size="6xl" className="summerbtnwomen" rounded="0px" fontWeight="700" fontSize="6xl"  _hover={{backgroundColor : "white"}}>Festi-gal</Button>
        <Link to="/products/womensclothing"><Button className="asosbtnwomen" h="45px" p="25px" rounded="0px" fontWeight="700" _hover={{color : "white", backgroundColor : "black"}}>SHOP ASOS DESIGN</Button></Link>
        </Box>

        <Flex w="83%" m="auto" gap="20px">
                {womenSale.map(item => (
                  <MenSaleCard item={item}/>
                ))}
        </Flex>

        <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride-2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png" m="auto" mt="80px"/>

        <Flex w="83%" m="auto" mt="60px" p="0px 65px">
          <Flex direction="column" justify="center" w="50%" align="center">
            <Box className="colordiv" w="85%"><Image src={pic1}/></Box>
            <Heading color="black" fontSize="28px" mt="20px" fontWeight="700" letterSpacing="1px">ASOS EDITION</Heading>
            <Text fontWeight="600" mt="10px">Material girl</Text>
            <Link to="/products/womensclothing"><Button bg="white" fontWeight={700} h="55px" className="catebtn" rounded="0px" _hover={{color : "white", backgroundColor : "black"}}>SHOP THE BRAND</Button></Link>
          </Flex>
          <Flex direction="column" justify="center" w="50%" align="center">
          <Box className="colordiv" w="85%"><Image src={pic2}/></Box>
          <Heading color="black" fontSize="28px" mt="20px" fontWeight="700" letterSpacing="1px">SUMMER ROMANCE</Heading>
          <Text fontWeight="600" mt="10px">Ruffle some feathers</Text>
          <Link to="/products/womensclothing"><Button bg="white" fontWeight={700} h="55px" className="catebtn" rounded="0px" _hover={{color : "white", backgroundColor : "black"}}>SHOP ASOS DESIGN</Button></Link>
          </Flex>
        </Flex>

        <Box>
                <Text letterSpacing="1px" fontWeight="700" fontSize="2xl" mt="50px" color="black">TRENDING BRANDS</Text>
                <Flex w="83%" m="auto" className="brandboxwo">
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer"> <Image h="55%" src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x_200227170013.png" /></Box>
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer">  <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer">  <Image h="55%" src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x.png" /></Box>
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" /></Box>   
                </Flex>
        </Box>
    </div>
  )
}

export default WomenPage