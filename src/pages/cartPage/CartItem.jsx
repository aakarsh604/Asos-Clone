import { CloseButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getItemApi, removeCartApi, updateCartApi } from "../../store/cart/cart.actions";
import styles from "./cart.module.css";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const sizeRef = useRef(item.size);
  const location = useLocation()
  const quantityRef = useRef(item.quantity);
  let handleUpdate = () => {
     dispatch(updateCartApi(item.id,quantityRef.current,sizeRef.current,))
     setFlag(!flag)
  };
  let from = {
    pathname:location.pathname
  }
  return (
    <>
      
       
        <div key={item.id} className={styles.leftDivTwo}>
        <img className={styles.imgPrd} src={item.Image} alt="cart" />
       
        <div className={styles.itemDiv}>
        <Link to={`/productdetails/${item.id}`} state={from}>
          <div className={styles.itemDetails}>
            <p className={styles.price1}>{`£${item.price}`}</p>
            <p className={styles.name1}>{item.productName}</p>
            <div className={styles.colorSize}>
              {" "}
              <span>{item.color}</span>
              <p className={styles.size}>
                <select
                  className={styles.selectSize}
                  onChange={(e) => {
                    sizeRef.current = e.target.value;
                    setFlag(true);
                  }}
                >
                  <option hidden>{item.size}</option>
                  <option value={"2XS"}>2XS</option>
                  <option value={"XS"}>XS</option>
                  <option value={"S"}>S</option>
                  <option value={"M"}>M</option>
                  <option value={"L"}>L</option>
                  <option value={"XL"}>XL</option>
                </select>
              </p>
              <span>
                Qty
                <select
                  className={styles.selectQuantity}
                  onChange={(e) => {
                    quantityRef.current = Number(e.target.value);
                    setFlag(true);
                  }}
                >
                  <option hidden>{item.quantity}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </span>
            </div>

            <p className={styles.later}>Save for later</p>
          </div>
          </Link>
          <div>
            {" "}
            <CloseButton
              size="lg"
              onClick={() => {
                dispatch(removeCartApi(item.id));
              }}
            />
          </div>
        </div>
        </div>
       
     
      <div>
          {flag && (
            <div className={styles.cancelUpdate}>
              
              <button className={styles.update} onClick={handleUpdate}>UPDATE</button>
              <button className={styles.cancel}
                onClick={() => {
                  setFlag(!flag);
                   dispatch(getItemApi())
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
    </>
  );
};

export default CartItem;
