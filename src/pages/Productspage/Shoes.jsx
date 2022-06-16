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

const Shoes = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.products);

  useEffect(() => {
    // console.log("useEffect");

    showProducts(dispatch);
  }, [dispatch]);

  const handleOnSelect = (e) => {
    // e.preventDefault()
    const { value } = e.target;
    console.log(value);
    // let keys = Object.keys(data[1]);
    // console.log('keys',keys)
    if (value === "ASC" || value === 'DESC') {
      sort(dispatch, value,data);
    }
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
                New In: shoes
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div style={{ border: "1px solid grey", width: "100%", height: "220px" }}>
        <div className="headline">
          <h1>Men's New in: Shoes</h1>
          <p>
            If you needed another excuse to build on your footwear collection,
            our edit of men's new shoes is a pretty good one. We've rounded up
            new men's trainers, shoes and men's new boots from some of your
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
            <Select variant="filled" placeholder="Sort" w={200} onChange={(e) => handleOnSelect(e)}>
              <option value="What's new">What's new</option>
              <option value="DESC" >
                Price high to low
              </option>
              <option value="ASC">Price low to high</option>
            </Select>
            <Select variant="filled" placeholder="Filled" w={200} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
          </Stack>
          <Stack spacing={3}>
            <Select variant="filled" placeholder="Filled" w={200} ml={3} />
          </Stack>
        </Flex>
      </div>
      <div>
        <p>No of items</p>
      </div>

      <div className="products">
        {data.map((el) => (
          <div id="items">
            <img src={el.Image} alt="" />
            <div id="name_div">
              <h2> {el.Brand_Name}</h2>
            </div>
            <div id="price_div">
              <h3>{`Rs: ${+(el.Price)}`}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
