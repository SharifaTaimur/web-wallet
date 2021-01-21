import React from "react";
import "./AccountTracking.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../Stateprovider";
import { getTotal } from "./../reducer";

const AccountTracking = () => {
  const [{ expenselistitems }, dispatch] = useStateValue();

  return (
    <div className="accounttracking">
      <h1>Subtotal ({getTotal(expenselistitems)} )!!</h1>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total ({expenselistitems.length} Transactions):{" "}
              <strong>{value}</strong>
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
