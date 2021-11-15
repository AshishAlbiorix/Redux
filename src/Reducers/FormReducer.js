const initialState = [];
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STOREDATA":
      return action.payload;
        default:
          return state;
        }

};
export default formReducer;

