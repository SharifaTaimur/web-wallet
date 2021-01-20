import React from "react";
import "./AccountTracking.css";
import CurrencyFormat from "react-currency-format";
import { getTotal } from "../reducertest";
import { useStateValue } from "./../Stateprovider";

const AccountTracking = () => {
  const [{ expenselistitems }, dispatch] = useStateValue();
  console.log("Amountof exp>>>>>>", expenselistitems);
  return (
    <div className="accounttracking">
      <h1>test</h1>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({expense.amountofexpense.length} items):{" "} */}
              {/* <strong>{expense.amountofexpense}</strong> */}
            </p>
          </>
        )}
        decimalScale={2}
        value={getTotal(expenselistitems)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default AccountTracking;
