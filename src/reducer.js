export const initialState = {
  expenselistitems: [],
};

//Selector
export const getTotal = (expenselistitems) =>
  expenselistitems?.reduce(
    (amount, item) => Number(item.amountofexpense) + Number(amount),
    0
  );

// export const getTotal = (expenselistitems) => {
//   expenselistitems.reduce(function (previousValue, currentValue) {
//     console.log(previousValue);
//     console.log(currentValue);
//     return Number(previousValue) + Number(currentValue.amountofexpense);
//   }, 0);

const reducer = (state, action) => {
  console.log("in the reducer-action", action);

  switch (action.type) {
    case "ADD_TO_EXPENSE":
      return {
        ...state,
        expenselistitems: [...state.expenselistitems, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
