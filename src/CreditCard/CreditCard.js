import React, { useState } from "react";
import Cards from "react-credit-cards";
import Button from "react-bootstrap/Button";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCard.css";

const CreditCard = () => {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="creditcard">
      <div className="container">
        <div className="row">
          <div className="col-6 creditcard__img">
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
          </div>

          <div className="col-6 creditcard__img">
            <form>
              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                    value={cvc}
                    onChange={(e) => setCVC(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </div>

              <div className="creditcard__button">
                <Button variant="primary">Add Card</Button>
              </div>

              {/* <div className="">
                <label></label>
                <button className="btn btn-primary btn-block">ADD</button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
