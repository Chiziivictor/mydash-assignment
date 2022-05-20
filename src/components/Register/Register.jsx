import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/image.png";

import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [tocErr, setTocErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(emailPattern) == undefined) {
      setEmailErr(true);
      return;
    }

    if (password !== password2) {
      setPasswordErr(true);
      return;
    }

    if (e.target.checkbox.checked === false) {
      setTocErr(true);
      return;
    }

    navigate("/chart");
  };

  return (
    <div className="register--container">
      <div className="chart">
        <div className="chart__text">
          <h2 className="chart__text--heading">Choose a date range</h2>
          <p className="chart__text--body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            imperdiet bibendum
          </p>
        </div>
        <img src={img} alt="" className="chart__img" />
      </div>
      <div className="register register--form">
        <h1 className="register__heading">Create an account</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your email address
            </label>
            <input
              type="text"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr(false);
              }}
              className="form__input"
              autoComplete="off"
            />
            {emailErr && <div className="form__error">Invalid Email</div>}
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your password
            </label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErr(false);
              }}
              className="form__input"
              autoComplete="off"
            />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Confirm your password
            </label>
            <input
              type="password"
              value={password2}
              name="password2"
              onChange={(e) => {
                setPassword2(e.target.value);
                setPasswordErr(false);
              }}
              className="form__input"
              autoComplete="off"
            />
            {passwordErr && (
              <div className="form__error">Passwords must match</div>
            )}
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your full name
            </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form__input"
              autoComplete="off"
            />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your phone number
            </label>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="form__input"
              autoComplete="off"
            />
            {/* <div className="form__error">Invalid phone number</div> */}
          </div>
          <div className="register__toc">
            <input
              type="checkbox"
              name="checkbox"
              onChange={() => setTocErr(false)}
            />
            <label htmlFor="">I read and agree Terms and Conditions</label>
            {tocErr && (
              <div className="register__toc--error">
                Must agree to Terms and Conditions
              </div>
            )}
          </div>
          <button type="submit" className="register__btn">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
