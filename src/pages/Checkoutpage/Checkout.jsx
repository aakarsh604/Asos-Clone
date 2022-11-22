import React, { useEffect, useState } from "react";
import styles from "./checkOut.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  ListItem,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
// import { IconName } from "react-icons/fa";
import { FaCreditCard, FaCcPaypal } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getItemApi } from "../../store/cart/cart.actions";
import CartItem from "../cartPage/CartItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState([]);
  const [countryImage, setCountryImage] = useState([]);
  const { cartData, getItemCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemApi());
  }, [dispatch]);

  useEffect(() => {
    const getcountry = async () => {
      const rescountry = await fetch("http://localhost:8080/country");
      const rescon = await rescountry.json();
      setCountry(await rescon);
    };
    getcountry();
  }, []);

  useEffect(() => {
    const getcountryImage = async () => {
      const rescountry = await fetch(
        `http://localhost:8080/country/${countryId}`
      );
      const rescon = await rescountry.json();
      setCountryImage(await rescon);
      //   console.log(countryImage);
    };
    getcountryImage();
  }, [countryImage, countryId]);

  const handleOnChange = (e) => {
    const countryId = e.target.value;
    // console.log(countryId);
    setCountryId(countryId);
  };

  const handleOnClick = () => {
    window.location.href = "https://dazzling-starburst-fbd186.netlify.app";
  };
  let total1 = cartData.reduce(
    (acu, el) => Number(acu) + Number(el.price) * Number(el.quantity),
    0
  );
  if (getItemCart.loading) {
    return (
      <div>
        <Progress size="lg" isIndeterminate />
      </div>
    );
  } else if (getItemCart.error) {
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
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.logo}
            src="https://cdn.worldvectorlogo.com/logos/asos-1.svg"
            alt=""
          />
          <h1 className={styles.checkoutText}>CHECKOUT</h1>
          <img
            className={styles.logo}
            src="https://www.digicert.com/content/dam/digicert/images/tls-ssl/tls-ssl-overview/digicert-smart-seal/dc_seal_page-02.png"
            alt=""
          />
        </div>
        <div className={styles.mainBox}>
          <div className={styles.leftBox}>
            <div className={styles.country}>
              <div className={styles.countryLeft}>
                <h1 className={styles.boldLargeText}>DELIVERY COUNTRY:</h1>
                <div className={styles.countryBox}>
                  <img
                    className={styles.countryImage}
                    src={countryImage.img}
                    alt=""
                  />
                  <select
                    name="country"
                    className={styles.form_controlp_2}
                    onChange={(e) => handleOnChange(e)}
                  >
                    <option value="">-- Select Country --</option>
                    {country.map((getcon, index) => (
                      <option key={index} value={getcon.id}>
                        {getcon.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.grid2}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <h1 className={styles.smallBoldText}>
                          PROMO/STUDENT CODE OR VOUCHER
                        </h1>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Tabs size="md" variant="enclosed">
                      <TabList>
                        <Tab>PROMO/STUDENT CODE</Tab>
                        <Tab>VOUCHER</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <h1 className={styles.boldLargeText}>
                            ADD A PROMO/STUDENT CODE:
                          </h1>

                          <Input size="lg" />
                          <Button
                            colorScheme="teal"
                            variant="solid"
                            mt="4"
                            mb="5"
                          >
                            APPLY CODE
                          </Button>
                          <h1 className={styles.boldLargeText}>NEED TO KNOW</h1>
                          <UnorderedList>
                            <ListItem pb="4">
                              You can only use one discount/promo code per
                              order. This applies to our free-delivery codes,
                              too.
                            </ListItem>
                            <ListItem>
                              Discount/promo codes cannot be used when buying
                              gift vouchers.
                            </ListItem>
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <h1 className={styles.boldLargeText}>
                            ADD A VOUCHER
                          </h1>
                          <br />
                          <p mt="30">16-DIGIT VOUCHER CODE:</p>
                          <Input size="lg" />
                          <Button
                            colorScheme="teal"
                            variant="solid"
                            mt="4"
                            mb="5"
                          >
                            ADD VOUCHER
                          </Button>

                          <h1>
                            Got a gift card? Visit My Account to add it to your
                            gift-voucher balance before you can redeem it at
                            checkout.
                          </h1>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className={styles.grid3}>
              <h1 className={styles.boldLargeText}>EMAIL ADDRESS</h1>
              {/* todo */}
              <p className={styles.paraText}>Aakarsh604@gmail.com</p>
            </div>
            <div className={styles.grid4}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h1 className={styles.addressD}>DELIVERY ADDRESS </h1>{" "}
                  <button className={styles.addressBtn}>
                    <AccordionButton type="button">Add Address</AccordionButton>
                  </button>
                  <AccordionPanel pb={4}>
                    <form>
                      <FormControl>
                        <FormLabel htmlFor="first-name" color="#999999">
                          FIRST NAME:
                        </FormLabel>
                        <Input
                          id="first-name"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="last-name" color="#999999">
                          LAST NAME:
                        </FormLabel>
                        <Input
                          id="last-name"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="mobile" color="#999999">
                          MOBILE:
                        </FormLabel>
                        <Input
                          id="mobile"
                          type="number"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                        <FormHelperText
                          mb="20px"
                          display="flex"
                          flexDirection="flex-start"
                        >
                          We'll never share your Mobile Number
                        </FormHelperText>
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="address" color="#999999">
                          ADDRESS:
                        </FormLabel>
                        <Input
                          id="address"
                          type="address"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="city" color="#999999">
                          CITY:
                        </FormLabel>
                        <Input
                          id="city"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="mobile" color="#999999">
                          POSTAL CODE:
                        </FormLabel>
                        <Input
                          id="mobile"
                          type="number"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>
                    </form>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className={styles.grid3}>
              <h1 className={styles.boldLargeText}>PAYMENT TYPE</h1>
              <br></br>
              <br></br>

              <div className={styles.payment}>
                <div className={styles.pay1}>
                  <Icon h="60px" ml="14px" w="22px" as={FaCreditCard} />
                  <h1 className={styles.smallBoldText}>
                    ADD CREDIT/DEBIT CARD
                  </h1>
                </div>
                <div className={styles.pay2}>
                  <h1>OR</h1>
                </div>

                <div className={styles.pay1}>
                  <Icon h="60px" w="22px" as={FaCcPaypal} />
                  <h1 className={styles.smallBoldText}>PAY VIA PAYPAL</h1>
                </div>
                <br></br>
              </div>
              <div className={styles.paymentFooter}>
                <h1>WE ACCEPT:</h1>
                <img
                  src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  alt=""
                />
              </div>
            </div>
            <button
              className={styles.payBtn}
              onClick={() => {
                handleOnClick();
              }}
            >
              PLACE ORDER
            </button>
            <br></br>
            <br></br>
            <div className={styles.lastPara}>
              <p>
                By placing your order you agree to our{" "}
                <a href="/">
                  <u>Terms & Conditions</u>
                </a>
                , privacy and returns policies . You also consent to some of
                your data being stored by ASOS, which may be used to make future
                shopping experiences better for you.
              </p>
            </div>
          </div>

          <div className={styles.rightBox}>
            <div className={styles.totalEdit}>
              <h1 className={styles.totalItem}>{cartData.length} ITEMS</h1>{" "}
              <Link to={"/cart"}>
                <button className={styles.btn4}>EDIT</button>
              </Link>
            </div>
            {cartData.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
            <div className={styles.subTpay}>
              <div className={styles.subTotal}>
                <h1 className={styles.sub_total}>Subtotal</h1>
                <h1 className={styles.sub_price}>{`£${total1.toFixed(2)}`}</h1>
              </div>
              <div className={styles.totalPay}>
                <h1 className={styles.t_pay}>TOTAL TO PAY</h1>
                <h1 className={styles.t_price}>{`£${total1.toFixed(2)}`}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className={styles.footer}>
        <p style={{ textAlign: "center" }}>ASOS Help</p>
      </div>
    </>
  );
};

export default Checkout;
