import React from "react";
import { ShipingAdd, INPUT, Button, SELECT, SELECT1 } from "../Cart/Style";
import {
  BsInfoCircleFill,
  BsCheckCircleFill,
  BsChevronDown,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ShipingAddress = () => {
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    alert("Order Placed");
    navigate("/");
  };
  return (
    <ShipingAdd>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <h3
            style={{
              marginBottom: "20px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            1. Email and delivery address
          </h3>
          <label htmlFor="email" style={{ display: "flex" }}>
            * Email address
          </label>
          <INPUT type="email" width="100%" required />
          <label
            htmlFor="We'll"
            style={{ display: "flex", marginTop: "-20px" }}
          >
            We'll send the purchase receipt to this email.
          </label>
          <label
            htmlFor="country"
            style={{ display: "flex", marginTop: "20px" }}
          >
            * Country/Region
          </label>

          <SELECT1 type="text" width="96%" required>
            <option value="Please Select" disabled>
              Please Select
            </option>
            <option selected value="United States">
              United States
            </option>
            <option value="CANADA">CANADA</option>
          </SELECT1>
          <label htmlFor="name" style={{ display: "flex" }}>
            * Full Name
          </label>
          <INPUT
            type="text"
            // placeholder="Enter Full Name"
            width="96%"
            required
          />
          <label htmlFor="Address" style={{ display: "flex" }}>
            * Address Search
          </label>
          <INPUT
            type="text"
            placeholder="start typing your address..."
            width="96%"
            required
          />
          <label htmlFor="Address" style={{ display: "flex" }}>
            {" "}
            Apartment/Suite number
          </label>
          <INPUT
            type="text"
            // placeholder="start typing your address..."
            width="96%"
          />
          <label htmlFor="Address" style={{ display: "flex" }}>
            * Town/City
          </label>
          <INPUT
            type="text"
            // placeholder="start typing your address..."
            width="96%"
            required
          />
          <label htmlFor="Address" style={{ display: "flex" }}>
            * State
          </label>
          <SELECT1 type="text" width="96%" required>
            <option selected value="Please Select" disabled>
              Please Select
            </option>
            <option value="AA">AA - Armed Forces Americas</option>
            <option value="AE">AE - Armed Forces other</option>
            <option value="AP">AP - Armed Forces Pacific</option>
            <option value="CA">CA - California</option>
            <option value="CO">CO - Colorado</option>
            <option value="CT">CT - Connecticut</option>
            <option value="DC">DC - District of Columbia</option>
            <option value="DE">DE - Delaware</option>
            <option value="FL">FL - Florida</option>
            <option value="GA">GA - Georgia</option>
            <option value="HI">HI - Hawaii</option>
            <option value="WY">WY - Wyoming</option>
            <option value="AA">AA - Armed Forces Americas</option>
            <option value="AE">AE - Armed Forces other</option>
            <option value="AP">AP - Armed Forces Pacific</option>
            <option value="CA">CA - California</option>
            <option value="CO">CO - Colorado</option>
            <option value="CT">CT - Connecticut</option>
            <option value="DC">DC - District of Columbia</option>
            <option value="DE">DE - Delaware</option>
            <option value="FL">FL - Florida</option>
            <option value="GA">GA - Georgia</option>
            <option value="HI">HI - Hawaii</option>
            <option value="WY">WY - Wyoming</option>
            <option value="AA">AA - Armed Forces Americas</option>
            <option value="AE">AE - Armed Forces other</option>
            <option value="AP">AP - Armed Forces Pacific</option>
            <option value="CA">CA - California</option>
            <option value="CO">CO - Colorado</option>
            <option value="CT">CT - Connecticut</option>
            <option value="DC">DC - District of Columbia</option>
            <option value="DE">DE - Delaware</option>
            <option value="FL">FL - Florida</option>
            <option value="GA">GA - Georgia</option>
            <option value="HI">HI - Hawaii</option>
            <option value="WY">WY - Wyoming</option>
          </SELECT1>
          <label htmlFor="Zip Code/Postcode" style={{ display: "flex" }}>
            * Zip Code/Postcode
          </label>
          <INPUT type="text" width="96%" required />
          <label htmlFor="contact number" style={{ display: "flex" }}>
            * Contact Number
          </label>
          <INPUT type="text" width="96%" required />
          <p
            style={{
              display: "flex",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "14px",
            }}
          >
            Why do we need your number?
          </p>
        </div>
        <div style={{ width: "70%" }}>
          <h3
            style={{
              marginBottom: "20px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            2. Select Delivery Option
          </h3>
          <div>
            <section>
              <BsInfoCircleFill />
            </section>
            <h4>
              Please enter your address so we can calculate your delivery
              options.
            </h4>
          </div>
        </div>
        <div style={{ width: "70%" }}>
          <h3
            style={{
              marginBottom: "20px",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            3. Select Payment Method
          </h3>
          <div1>
            <h2>
              <BsCheckCircleFill />
            </h2>
            <p style={{ display: "flex" }}>Credit/Debit Card</p>
            <div1 style={{ display: "flex" }}>
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/5ea52bff4335c6810730e818e701bdf5.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/c6b3c4b8eea09a08c22da2cef43e15a5.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg"
                alt=""
              />
              <img
                width="40px"
                height="40px"
                src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg"
                alt=""
              />
            </div1>
            <br />
            <label htmlFor="card number" style={{ display: "flex" }}>
              * Card Number
            </label>
            <INPUT type="text" width="98%" required />
            <label htmlFor="name on card" style={{ display: "flex" }}>
              * Name on card
            </label>
            <INPUT type="text" width="98%" required />
            <label htmlFor="expiry date" style={{ display: "flex" }}>
              * Expiry Date
            </label>
            <br />
            <SELECT className="first-select">
              <option value="">MONTH</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </SELECT>
            <SELECT>
              <option value="">YEAR</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </SELECT>
            <label htmlFor="security code" style={{ marginRight: "370px" }}>
              *Security Code (CV2)
            </label>
            <br />
            <div1 style={{ display: "flex" }}>
              <INPUT
                type="text"
                width="46%"
                required
                style={{ marginRight: "370px" }}
              />
              {/* <section >
                <BsQuestionCircle style={{marginRight:"100px"}}/>
              </section> */}
            </div1>
          </div1>
          <div style={{ border: "1px solid black", width: "90%" }}>
            <h4
              style={{
                marginBottom: "50px",
                display: "flex",
                fontFamily: "serif",
              }}
            >
              Use a different payment method{" "}
              <section style={{ marginLeft: "280px", fontWeight: "bold" }}>
                <BsChevronDown />
              </section>
            </h4>
            <div1 style={{ display: "flex" }}>
              <img
                width="90px"
                height="24px"
                src="https://s1.thcdn.com/checkout/resources/images/52c235cfc21b037c320712891df2cffc.svg"
                alt=""
              />
              <img
                width="90px"
                height="24px"
                src="https://s1.thcdn.com/checkout/resources/images/5ba5f9cd0c43d9f966774630aa65d7c6.svg"
                alt=""
              />
              <img
                width="90px"
                height="24px"
                src="https://s1.thcdn.com/checkout/resources/images/959a8e732266683b799128acf46e03fd.svg"
                alt=""
              />
              <img
                width="90px"
                height="24px"
                src="https://s1.thcdn.com/checkout/resources/images/3c5574b5e1fe1470a49f46bc08828ef4.svg"
                alt=""
              />
            </div1>
          </div>
        </div>

        <div className="button">
          <Button padding="20px 40px" width="100%" fontSize="20px">
            SUBMIT MY ORDER
          </Button>
        </div>
        <p style={{ display: "flex", marginLeft: "100px" }}>
          By placing this order, you are confirming that you agree to our
        </p>
        <p
          style={{
            display: "flex",
            marginLeft: "150px",
            textDecoration: "underline",
          }}
        >
          Terms and Conditions and Privacy Policy.
        </p>
      </form>
    </ShipingAdd>
  );
};

export default ShipingAddress;
