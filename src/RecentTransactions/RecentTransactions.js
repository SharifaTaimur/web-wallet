import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalDialog from "./../Modal/Modal";
import Card from "react-bootstrap/Card";
import "./RecentTransactions.css";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { useStateValue } from "./../Stateprovider";

const RecentTransactions = () => {
  const [modalShow, setModalShow] = useState(false);
  const [{ expenselistitems }, dispatch] = useStateValue();

  console.log(expenselistitems.reverse());

  return (
    <div className="recenttransactions">
      <div className="recenttransactions__header">
        <h3>Recent Transactions</h3>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add New
        </Button>
      </div>
      <div className="cardsitem">
        {expenselistitems
          .slice()
          .reverse()
          .map((item) => (
            <Card
              bg="light"
              text={"dark"}
              style={{ width: "50rem" }}
              className="mb-2 recenttransactions__card"
            >
              <Card.Body>
                <Card.Text className="recenttransactions__cardtext">
                  <ReceiptIcon style={{ fontSize: 40 }} />
                  {/* {item.nameofexpense} -${item.amountofexpense} */}
                  <div className="nameofexpense">{item.nameofexpense}</div>
                  <div className="amountofexpense">${item.amountofexpense}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
      <ModalDialog show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default RecentTransactions;
