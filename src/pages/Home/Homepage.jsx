import { Box, Flex, Image, Spacer, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";
import Salebar from "../Womenpage/Salebar";
import styles from "./home.module.css"
import {Link} from "react-router-dom"
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Salebar />
      <Box position={"relative"} mb={"-250px"}>
        <Image
          m="auto"
          src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/archive/oct-2021/microsoftteams-image-(10).png"
        ></Image>

        <Flex className={styles.imagebox} w="92.15%" m="auto">
            <Spacer></Spacer>
          <Box textAlign={"left"} lineHeight="17px">
            <Text className={styles.textfont}>EASY WORLDWIDE DELIVERY</Text>
            <Text className={styles.textfont}>*minimum spends apply</Text>
          </Box>
          <Spacer></Spacer>
          <Box lineHeight="17px">
            <Text  className={styles.textfont}>ASOS DESIGN and 850+</Text>
            <Text  className={styles.textfont} textAlign={"left"}>brands</Text>
          </Box>
          <Spacer></Spacer>
        </Flex>

        <Box className={styles.brandbox}>
            <Heading color="white" size="3xl">This is ASOS</Heading>
            <Text color="white" fontSize="xl">ASOS DESIGN and 850+ brands</Text>
            <Flex gap="35px">
                <Button rounded="0px" _hover={{color: "white", backgroundColor : "black"}} className={styles.homebtn} fontWeight="700" p="10px 25px"><Link to="/women" >SHOP WOMEN</Link></Button>
                <Button rounded="0px" _hover={{color: "white", backgroundColor : "black"}} className={styles.homebtn} fontWeight="700" p="10px 25px"><Link to="/men">SHOP MEN</Link></Button>
            </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Homepage;
