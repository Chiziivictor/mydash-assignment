import React from "react";

import "./register.scss";

const Register = () => {
  return (
    <div className="register--container">
      <div className="chart-img"></div>
      <div className="register register--form">
        <h1 className="register__heading">Create an account</h1>
        <form className="form">
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your email address
            </label>
            <input type="email" className="form__input" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your password
            </label>
            <input type="password" className="form__input" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Confirm your password
            </label>
            <input type="password" className="form__input" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your full name
            </label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__wrapper">
            <label htmlFor="" className="form__label">
              Your phone number
            </label>
            <input type="text" className="form__input" />
          </div>
          <div className="register__toc">
            <input type="checkbox" />
            <label htmlFor="">I read and agree Terms and Conditions</label>
          </div>
          <button className="register__btn">Create account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
