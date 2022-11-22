import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import {useToast} from "@chakra-ui/react";
import { loginReq } from "../../store/auth/auth.actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [users, setUsers] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    dispatch(loginReq(users));
    toast({
        title: `Welcome to ASOS`,
        status: "success",
        position: "top",
        isClosable: true,
        color:"white"
      })
    Navigate("/");
  };
  return (
    <>
      <form className={styles.form}>
        <label>EMAIL ADDRESS</label>
        <input
          type="text"
          className={styles.input}
          name="email"
          value={users.email}
          onChange={handleChange}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          className={styles.input}
          value={users.password}
          name="password"
          onChange={handleChange}
        />
        <button className={styles.signInBtn} onClick={handledSubmit}>
          SIGN IN
        </button>
      </form>
    </>
  );
};
export default LoginForm;
