import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleSwitcherClick = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div id="contact-section">
      <h1 className="text-4xl font-bold mt-8 w-full text-center text-white">
        Contact US
      </h1>
      <p className="text-white text-center w-full mt-1 mb-8 text-gray-500 font-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo
        repellat rem rerum <br /> voluptate voluptatem quis in, aspernatur eum
        soluta at!
      </p>
      <div className="contactLeft-section"></div>
      <div className="contactRight-section">
        <section className="forms-section">
          <div className="forms">
            <div
              className={`form-wrapper ${
                activeForm === "login" ? "is-active" : ""
              }`}
            >
              <button
                type="button"
                className="switcher switcher-login"
                onClick={() => handleSwitcherClick("login")}
              >
                Login
                <span className="underline"></span>
              </button>
              <form className="form form-login">
                <fieldset>
                  <legend>
                    Please, enter your email and password for login.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="login-email">E-mail</label>
                    <input id="login-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>
            </div>

            <div
              className={`form-wrapper ${
                activeForm === "signup" ? "is-active" : ""
              }`}
            >
              <button
                type="button"
                className="switcher switcher-signup"
                onClick={() => handleSwitcherClick("signup")}
              >
                Sign Up
                <span className="underline"></span>
              </button>
              <form className="form form-signup">
                <fieldset>
                  <legend>
                    Please, enter your email, password, and password
                    confirmation for sign up.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="password" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password-confirm">
                      Confirm password
                    </label>
                    <input
                      id="signup-password-confirm"
                      type="password"
                      required
                    />
                  </div>
                </fieldset>
                <button type="submit" className="btn-signup">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
