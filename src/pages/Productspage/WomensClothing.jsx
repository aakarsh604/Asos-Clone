import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Select,
  Stack,
} from "@chakra-ui/react";

import "../Productspage/Products.css";
import { useEffect } from "react";
import { showProducts, sort } from "../../store/ProductsStore/products.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const WomensClothing = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.products);
  const location = useLocation();
  const from ={
     pathname: location.pathname
  }
  useEffect(() => {
    // console.log("useEffect");

    showProducts(dispatch,"Women");
  }, [dispatch]);

  const handleOnSelect = (e) => {
    const { value } = e.target;
    // console.log(value);
    sort(dispatch, value, data);
  };

  if (loading)
    return (
      <div className="loading">
        <h1>LOADING</h1>
      </div>
    );
  if (error)
    return (
      <div className="error">
        <h1>SOMETHING WENT WRONG.......</h1>
      </div>
    );
  console.log(data, "jsx");
  return (
    <div>
      <div
        style={{
          border: "1px solid grey",
          width: "100%",
          height: "60px",
          marginTop: "0px",
        }}
      >
        <div className="breadcrum">
          <Breadcrumb separator=">" fontSize={14}>
            <BreadcrumbItem>
              <BreadcrumbLink href="http://localhost:3001/" fontSize={14}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="http://localhost:3001/menpage"
                fontSize="14px"
              >
                Men
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="" fontSize={14}>
                New In
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" fontSize={14} color="grey">
                New In: women clothes
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div style={{ border: "1px solid grey", width: "100%", height: "220px" }}>
        <div className="headline">
          <h1>Women's New in: Women</h1>
          <p>
            If you needed another excuse to build on your footwear collection,
            our edit of women's new clothes is a pretty good one. We've rounded
            up new men's trainers, shoes and men's new boots from some of your
            favourite brands (think Nike, adidas Originals, Dr. Martens and ASOS
            DESIGN) to bring you the latest shoe styles all in one place. Jack &
            Jones, New Look and River Island are in the mix, too, with
            everything from brogues and loafers to smart wedding shoes to cop.
            All you need now are some big plans to debut your new kicks.
          </p>
        </div>
      </div>
      <div className="filter_box">
        <Flex position="relative" top={2} left={110}>
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Sort"
              w={200}
              onChange={(e) => handleOnSelect(e)}
            >
              <option value="What's new">What's new</option>
              <option value="DESC">Price high to low</option>
              <option value="ASC">Price low to high</option>
            </Select>
            <Select variant="filled" placeholder="New in date" w={200} />
          </Stack>
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Product Type"
              w={200}
              ml={3}
            />
            <Select variant="filled" placeholder="Style" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Leather" w={200} ml={3} />
            <Select variant="filled" placeholder="Brand" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Color"
              w={200}
              ml={3}
              onChange={(e) => handleOnSelect(e)}
            >
              <option value="none">All Colors</option>
              <option value="black">black</option>
              <option value="orange">orange</option>
              <option value="green">green</option>
              <option value="white">white</option>
              <option value="blue">blue</option>
              <option value="beige-brown">beige brown</option>
            </Select>
            <Select variant="filled" placeholder="Body Fit" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Size" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Price Range" w={200} ml={3} />
          </Stack>
        </Flex>
      </div>
      <div>
        <p>No of items</p>
      </div>

      <div className="products">
        {data.map((el) => (
         <div id="items" key={el.id}>
         <Link to={`/productdetails/${el.id}`} state={from}>
         <img src={el.Image} alt="" />
         <div id="name_div">
           <h2> {el.Brand_Name}</h2>
         </div>
         <div id="price_div">
           <h3>{`£ ${+(el.Price)}`}</h3>
         </div>
         </Link>
       </div>
        ))}
      </div>
    </div>
  );
};

export default WomensClothing;
