import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useStateValue } from "./../Stateprovider";

const ModalDialog = (props) => {
  const [{ expenselistitems }, dispatch] = useStateValue();
  const [expenselist, setExpenseList] = useState({
    nameofexpense: "",
    amountofexpense: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setExpenseList({ ...expenselist, [name]: value });
  };

  const Add = () => {
    dispatch({
      type: "ADD_TO_EXPENSE",
      item: {
        nameofexpense: expenselist.nameofexpense,
        amountofexpense: expenselist.amountofexpense,
      },
    });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Expense
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="nameofexpense"
                className="form-control"
                placeholder="Name Of Expense"
                value={expenselist.nameofexpense}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                name="amountofexpense"
                placeholder="Amount of Expense"
                value={expenselist.amountofexpense}
                onChange={handleOnChange}
              />
            </div>

            <Button variant="info" className="offset-11" onClick={Add}>
              ADD
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDialog;
