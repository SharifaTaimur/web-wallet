export const initialState = {
  expenselistitems: [],
  Balance: 60000,
};

//Selector
export const getTotal = (expenselistitems) =>
  expenselistitems?.reduce(
    (amount, item) => Number(item.amountofexpense) + Number(amount),
    0
  );

export const getBalance = (expenselistitems, Balance) =>
  expenselistitems?.reduce(
    (amount, item) => Balance - Number(item.amountofexpense),
    0
  );

export const getFirstItem = (expenselistitems) =>
  expenselistitems?.slice()?.reverse()[0];

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
