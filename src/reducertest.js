export const initialState = {
  expense: [
    {
      nameofexpense: "",
      amountofexpense: [],
    },
  ],
  expenselistitems: [],
  total: [],
};

// Selector
// export const getTotal = (total) =>
//   total?.reduce((amount, item) =>
//     console.log("HERE TOTAL,", item.expenselist.amountofexpense + amount, 0)
//   );

export const getTotal = (expenselistitems) =>
  expenselistitems?.reduce((amount, item) => item.price + amount, 0);
//   total?.reduce((amount, item) =>
//     console.log("HERE TOTAL,", item.expenselist.amountofexpense + amount, 0)

const reducer = (state, action) => {
  console.log("in the reducer", action);

  switch (action.type) {
    case "ADD_TO_EXPENSE":
      return {
        ...state,
        expense: [...state.expenselist, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
