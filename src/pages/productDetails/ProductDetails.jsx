import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productDetails.module.css";
import {
  Button,
  Spinner,
  Collapse,
  ListItem,
  UnorderedList,
  Wrap,
  useToast,
  WrapItem
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addCartApi } from "../../store/cart/cart.actions";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const {data,addItemCart:{loading,error}} = useSelector((state)=>state.cart)
  const [productDetails, setProductDetails] = useState({});
  const [show, setShow] = React.useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(` http://localhost:8080/Shoes/${id}`)
      .then((res) => setProductDetails(res.data));

    return () => {};
  }, [id]);

  let handleAddCart=()=>{
    let new1 = data.some((el)=>(el.productName=== productDetails.BrandName)) 
    if(!new1){
      dispatch(addCartApi(productDetails))
      if(!loading && !error){
        return(
          toast({
            title: ` succesfully added`,
            position:"top",
            status: 'success',
            isClosable: true,
          })
        )
      }
     
    }
  }
  const handleToggle = () => setShow(!show);
  return (
    <div>
      ProductDetails
      <div className={styles.uperDiv}>
        <div className={styles.imgDiv}>
          <div className={styles.smallimgDiv}>
            <img
              className={styles.smallImg}
              src={productDetails.Image}
              alt="img"
            />
          </div>
          <img className={styles.bigImg} src={productDetails.Image} alt="img" />
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.brand}>
            <p>{productDetails.BrandName}</p>
          </div>
          <div className={styles.price}>
            <h4>{`£${productDetails.Price}`}</h4>
          </div>
          <div className={styles.color}>
            <span className={styles.cspan}>COLOUR: </span> ECRU
          </div>
          <div className={styles.sizeDiv}>
            <h5 className={styles.sizeH}>SIZE:</h5>
            <div>
              <select className={styles.select}>
                <option>Please select</option>
                <option value={"2XS"}>2XS - chest 34</option>
                <option value={"XS"}>XS - chest 36</option>
                <option value={"S"}>S - chest 38</option>
                <option value={"M"}>M - chest 40</option>
                <option value={"L"}>L - chest 42</option>
                <option value={"XL"}>XL - chest 44</option>
              </select>
            </div>
          </div>
          <div className={styles.btnDiv}>
          <Wrap>
         <WrapItem>
            <button className={styles.btnCart}  onClick={()=>{handleAddCart()
                   

            }}><div className={styles.spin}>{loading&&<Spinner  color='white' />}</div><div className={styles.insidebtn}>ADD TO BAG</div></button>
            </WrapItem>
          </Wrap>
          </div>
          <div className={styles.delivery}>
            <div className={styles.iconDiv}>
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/512/3233/3233997.png"
              />{" "}
              <span>Free Delivery.</span>
            </div>
            <p className={styles.tc}>
              {"Ts&Cs apply. "}
              <span className={styles.lSpan}>Learn more</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.lowerDiv}>
        <Collapse startingHeight={110} in={show}>
          <div className={styles.innerlower}>
            <div className={styles.innerLowerone}>
              <h2 className={styles.h2}>PRODUCT DETAILS</h2>
              <p className={styles.p}><span className={styles.uSpan}>Product</span> by <span className={styles.uSpan}>ASOS DESIGN</span></p>
              <div className={styles.ul}>
              <UnorderedList >
                <ListItem>Next stop: checkout</ListItem>
                <ListItem>Wolverine design</ListItem>
                <ListItem>Crew neck</ListItem>
                <ListItem>Short sleeves</ListItem>
                <ListItem>Oversized fit</ListItem>
              </UnorderedList>
              </div>
              
            </div>
            <div className={styles.innerLowertwo}>
              <h2 className={styles.h2}>PRODUCT CODE</h2>
              <p className={styles.p}>{Math.floor(Math.random() * 10000000) + 10000000}</p>
              <div>
                <h3 className={styles.h3}>BRAND</h3>
                <p className={styles.p}>
                  This is <span className={styles.uSpan}>ASOS DESIGN</span> – your go-to for all the latest trends, no
                  matter who you are, where you’re from and what you’re up to.
                  Exclusive to ASOS, our universal brand is here for you, and
                  comes in Plus and Tall. Created by us, styled by you.
                </p>
              </div>
            </div>
            <div className={styles.innerLowerthree}>
              <h3 className={styles.h2}>{"SIZE & FIT"}</h3>
              <p className={styles.p}>Model's height: 188cm/6'2"</p>
              <p className={styles.p1}>Model is wearing: Size Medium</p>
              <div>
                <h2 className={styles.h3}>LOOK AFTER ME</h2>
                <p className={styles.p}>Machine wash according to instructions on care label</p>
              </div>
              <div>
                <h2 className={styles.h3}>ABOUT ME</h2>
                <p className={styles.p}>
                  By choosing our Better Cotton products, you’re supporting
                  ASOS’s investment in Better Cotton’s mission. This product is
                  sourced via a system of mass balance and therefore may not
                  contain Better Cotton. See:
                  https://www.asos.com/responsible-fashion/partner/our-certification-partners/
                </p>
                <p className={styles.p2}>Main: 100% Good Quality.</p>
              </div>
            </div>
          </div> 
        </Collapse>
        <Button className={styles.btn2} size="md" backgroundColor={"white"} onClick={handleToggle} mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
