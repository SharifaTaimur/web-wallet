import React from "react";
import "./AccountTracking.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../Stateprovider";
import { getTotal, getBalance, getFirstItem } from "./../reducer";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const AccountTracking = () => {
  const [{ expenselistitems, Balance }, dispatch] = useStateValue();

  // let items = getFirstItem(expenselistitems);
  console.log(getFirstItem(expenselistitems));

  return (
    <div className="flex-container">
      <div className="accounttracking">
        <div className="accounttracking__info">
          <FiberManualRecordIcon className="accounttracking__infoleft" />{" "}
          <span>Spent</span>
          <FiberManualRecordIcon className="accounttracking__inforight" />
          <span className="accounttracking__inforighttext">Balance</span>
        </div>
        <div className="accounttracking__money">
          <div className="values">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    {/* Total ({expenselistitems.length} Transactions):{" "} */}
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
          <div className="values">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBalance(expenselistitems, Balance)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
        <hr></hr>
        {getFirstItem(expenselistitems) && (
          <span className="accounttracking__reminder">
            You have spent ${getFirstItem(expenselistitems).amountofexpense} on{" "}
            {getFirstItem(expenselistitems).nameofexpense}.Let's try to save
            more !
          </span>
        )}
      </div>
    </div>
  );
};

export default AccountTracking;
