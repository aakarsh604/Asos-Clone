
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./productDetails.module.css";
import SimpleSlider from "./DataSlide"
import {
  Button,
  Spinner,
  Collapse,
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  useToast,
  Progress,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartApi,
  getproductdetailsApi,
} from "../../store/cart/cart.actions";
import { useRef } from "react";

import { ChevronRightIcon } from "@chakra-ui/icons";
const ProductDetails = () => {
  const toast = useToast();
  const refSize = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();

  let prevLocation;
  if (location.state.pathname === "/products/mensclothing") {
    prevLocation = "men";
  } else if (location.state.pathname === "/products/womensclothing") {
    prevLocation = "women";
  } else if(location.state.pathname==='/products/shoes'){
    prevLocation = "shoe"
  }
  else {
    prevLocation = "";
  }
  

  const {
    detailsData: productDetails,
    getProductDetails,
    cartData,
    addItemCart: { loading },
  } = useSelector((state) => state.cart);

  const [selectSize, setSelectSize] = useState(false);
  const [show, setShow] = React.useState(false);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    dispatch(getproductdetailsApi(id,prevLocation));
    return () => {};
  }, [id]);

  let handleAddCart = () => {
    let s = refSize.current;
    if (s === null) {
      setSelectSize(true);
    }
    let new1 = cartData.some((el) => el.id === productDetails.id);
    if (!new1 && s) {
      dispatch(addCartApi(productDetails, s));

      return toast({
        title: `successfully added`,
        status: "success",
        position: "top",
        isClosable: true,
        color:"white"
      });
    }
  };
  let handleSize = (e) => {
    refSize.current = e.target.value;
    setSelectSize(false);
  };
  const handleToggle = () => setShow(!show);
  if (getProductDetails.loading) {
    return (
      <div>
        <Progress size="lg" isIndeterminate />
      </div>
    );
  } else if (getProductDetails.error) {
    return (
      <div>
        <Stack spacing={3}>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        </Stack>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.breadCrumbDiv}>
        <Breadcrumb className={styles.breadCrumb1}
          spacing="8px"
          separator={<ChevronRightIcon color='gray.500' />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

         {prevLocation &&  <BreadcrumbItem>
            <BreadcrumbLink href={location.state.pathname}>
              {prevLocation}
            </BreadcrumbLink>
          </BreadcrumbItem>}

          <BreadcrumbItem isCurrentPage>
            <p>{productDetails.Brand_Name}</p>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
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
            <p className={styles.brandname}>{productDetails.Brand_Name}</p>
          </div>
          <div className={styles.price1}>
            <h3 className={styles.price2}>{`£${productDetails.Price}`}</h3>
          </div>
          <div className={styles.color}>
            <span className={styles.cspan}>COLOUR: </span>{" "}
            {productDetails.color}
          </div>
          <div className={styles.sizeDiv}>
            <h5 className={styles.sizeH}>SIZE:</h5>
            <div>
              <select
                className={styles.select}
                onChange={(e) => {
                  handleSize(e);
                }}
              >
                <option hidden>Please select</option>
                <option value={"2XS"}>2XS </option>
                <option value={"XS"}>XS </option>
                <option value={"S"}>S </option>
                <option value={"M"}>M </option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL </option>
              </select>
            </div>
          </div>
          {selectSize && (
            <div className={styles.chooseSize}>
              Please select from the available colour and size options
            </div>
          )}
          <div className={styles.btnDiv}>
            <Wrap>
              <WrapItem>
                <button
                  className={styles.btnCart}
                  onClick={() => {
                    handleAddCart();
                  }}
                >
                  <div className={styles.spin}>
                    {loading && <Spinner color="white" />}
                  </div>
                  <div className={styles.insidebtn}>ADD TO BAG</div>
                </button>
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
              <p className={styles.p}>
                <span className={styles.uSpan}>Product</span> by{" "}
                <span className={styles.uSpan}>ASOS DESIGN</span>
              </p>
              <div className={styles.ul}>
                <UnorderedList>
                  <ListItem className={styles.li}>Next stop: checkout</ListItem>
                  <ListItem className={styles.li}>Wolverine design</ListItem>
                  <ListItem className={styles.li}>Crew neck</ListItem>
                  <ListItem className={styles.li}>Short sleeves</ListItem>
                  <ListItem className={styles.li}>Oversized fit</ListItem>
                </UnorderedList>
              </div>
            </div>
            <div className={styles.innerLowertwo}>
              <h2 className={styles.h2}>PRODUCT CODE</h2>
              <p className={styles.p}>
                {Math.floor(Math.random() * 10000000) + 10000000}
              </p>
              <div>
                <h3 className={styles.h3}>BRAND</h3>
                <p className={styles.p}>
                  This is <span className={styles.uSpan}>ASOS DESIGN</span> –
                  your go-to for all the latest trends, no matter who you are,
                  where you’re from and what you’re up to. Exclusive to ASOS,
                  our universal brand is here for you, and comes in Plus and
                  Tall. Created by us, styled by you.
                </p>
              </div>
            </div>
            <div className={styles.innerLowerthree}>
              <h3 className={styles.h2}>{"SIZE & FIT"}</h3>
              <p className={styles.p}>Model's height: 188cm/6'2"</p>
              <p className={styles.p1}>Model is wearing: Size Medium</p>
              <div>
                <h2 className={styles.h3}>LOOK AFTER ME</h2>
                <p className={styles.p}>
                  Machine wash according to instructions on care label
                </p>
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
        <Button
          className={styles.btn2}
          size="md"
          backgroundColor={"white"}
          onClick={handleToggle}
          mt="1rem"
        >
          Show {show ? "Less" : "More"}
        </Button>
      </div>
      <div className={styles.like}>
      <h1 className={styles.h1Like}>YOU MIGHT ALSO LIKE</h1>
      <SimpleSlider />
      </div>
    </div>
  );
};

export default ProductDetails;
