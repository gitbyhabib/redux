// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case "Movies_List":
      return action.payload;
    default:
      return state;
  }
}
