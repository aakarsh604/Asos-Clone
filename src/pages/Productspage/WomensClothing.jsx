import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Select,
  Stack,
} from "@chakra-ui/react";

import styles from './Shoes.module.css';
import { useEffect } from "react";
import { filterData, showProducts, sort } from "../../store/ProductsStore/products.action";
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
    // e.preventDefault()
    const { value } = e.target;
    filterData(dispatch,"women",value);
  };

  if (loading)
    return (
      <div className={styles.loading}>
        <h1>LOADING</h1>
      </div>
    );
  if (error)
    return (
      <div className={styles.error}>
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
        <div className={styles.breadcrum}>
          <Breadcrumb separator=">" fontSize={14}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" fontSize={14}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="/women"
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
                New In: women clothing
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className={styles.headline_box} style={{ border: "1px solid grey", width: "100%", height: "220px" }}>
        <div className={styles.headline}>
          <h1>Women's New in: Women Clothes</h1>
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
      <div className={styles.filter_box}>
        <Flex position="relative" top={2} left={110}>
        {/* <div className={styles.flex_box}> */}
          <Stack spacing={3}>
            <Select
              variant="filled"
              placeholder="Sort"
              w={200}
              onChange={(e) => handleOnSelect(e)}
            >
              <option value="What's new">What's new</option>
              <option value="desc">Price high to low</option>
              <option value="asc">Price low to high</option>
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
              <option value="Black">black</option>
              <option value="MULTI">Multi</option>
              <option value="TEAL">TEAL</option>
              <option value="White">white</option>
              <option value="Bright Pink">BRIGHT PINK</option>
              <option value="Beige-Brown">beige brown</option>
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
        {/* </div> */}
      </div>
      <div>
        <p>{data.length} styles found</p>
      </div>

      <div className={styles.products}>
        {data.map((el) => (
          <div id={styles.items} key={el._id}>
          <Link to={`/productdetails/${el._id}`} state={from}>
          <img src={el.Image} alt="" />
          <div id={styles.name_div}>
            <h2> {el.Brand_Name}</h2>
          </div>
          <div id={styles.price_div}>
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
