import { ADD_NEW_USER, ADD_MESSAGE } from "../constants";

const initialState = [
  {
    date: 1518210286693,
    author: "Some1",
    text: "Hi"
  },
  {
    date: 1518210355693,
    author: "Some2",
    text: "Hello"
  }
];

export default (state = initialState, action) => {
  const { payload} = action
  switch (action.type) {

    case ADD_MESSAGE:
    console.log("ADD_MESSAGE")
      return state.concat(payload)

    default:
      console.log("state")
      return state;
  }
};