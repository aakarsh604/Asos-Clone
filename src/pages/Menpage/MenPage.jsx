import React from 'react'
import {Box, Button, Heading, Image, Flex, Text} from "@chakra-ui/react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../../components/slider/slider';
import "./menpage.css"
import menSale from "../../data/menSale.json"
import MenSaleCard from './MenSaleCard';
import pic1 from "../../assets/img1.png"
import pic2 from "../../assets/img2.png"
import Footer from '../../components/footer/Footer';

const MenPage = () => {
  return (
    <div>
        <Box pb="15px" className="mencontainer">
                <Button bg="white" rounded="30px" w="250px" fontSize="4xl" p="22px 25px" mt={5}>SALE</Button>
                <Heading maxW="38%" m="auto" size="3xl" fontWeight={900} fontStyle="italic" color="black" mt={5}>UP TO 70% OFF! ITS CALLED BIG DISCOUNT ENERGY</Heading>
                <Box>
                    <SimpleSlider/>
                </Box>
                <Button rounded="0px" mt="25px" h="45px" w="170px" fontWeight="700" color="black" letterSpacing="2px" _hover={{color : "white", backgroundColor : "black"}}>VIEW ALL</Button>
                <p className='conditions'>Limited time only. Selected styles marked down as shown.</p>
        </Box> 

        <Box className="bigimagediv">
        <Image m="auto" mt="50px" src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw1_dt_hero_1258x600.jpg"></Image>
        <Button size="6xl" className="summerbtn" rounded="0px" fontWeight="700" fontSize="6xl"  _hover={{backgroundColor : "white"}}>Summer juice</Button>
        <Button className="asosbtn" h="45px" p="25px" rounded="0px" fontWeight="700" _hover={{color : "white", backgroundColor : "black"}}>SHOP ASOS DESIGN</Button>
        </Box>

        <Flex w="83%" m="auto" gap="20px">
                {menSale.map((item) => (
                  <MenSaleCard key={item.name} item={item}/>
                ))}
        </Flex>

        <Image src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride-2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png" m="auto" mt="80px"/>

        <Flex w="83%" m="auto" mt="60px" p="0px 65px">
          <Flex direction="column" justify="center" w="50%" align="center">
            <Box className="colordiv" w="85%"><Image src={pic1}/></Box>
            <Heading color="black" fontSize="28px" mt="20px" fontWeight="700" letterSpacing="1px">TOPMAN</Heading>
            <Text fontWeight="600" mt="10px">Top-Tier threads</Text>
            <Button bg="white" fontWeight={700} h="55px" className="catebtn" rounded="0px" _hover={{color : "white", backgroundColor : "black"}}>SHOP THE BRAND</Button>
          </Flex>
          <Flex direction="column" justify="center" w="50%" align="center">
          <Box className="colordiv" w="85%"><Image src={pic2}/></Box>
          <Heading color="black" fontSize="28px" mt="20px" fontWeight="700" letterSpacing="1px">SWIM ESSENTIALS</Heading>
          <Text fontWeight="600" mt="10px">Evrythings's just beachy</Text>
          <Button bg="white" fontWeight={700} h="55px" className="catebtn" rounded="0px" _hover={{color : "white", backgroundColor : "black"}}>SHOP NOW</Button>
          </Flex>
        </Flex>

        <Box>
                <Text letterSpacing="1px" fontWeight="700" fontSize="2xl" mt="50px" color="black">TRENDING BRANDS</Text>
                <Flex w="83%" m="auto" className="brandbox">
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" /></Box>
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer">  <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer">  <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" /></Box>
                  <Box cursor="pointer"> <Image src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" /></Box>   
                </Flex>
        </Box>

        <Footer/>
    </div>
  )
}

export default MenPage