import React, { useState } from "react";
import "./Transactions.css";
import ModalDialog from "./../Modal/Modal";
import Button from "react-bootstrap/Button";

const Transactions = () => {
  const [expense, setExpense] = useState("");
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="transactions">
      <h2>Transcactions</h2>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <ModalDialog show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Transactions;
