import {
  GET_DATA_fp03_063_FAILURE,
  GET_DATA_fp03_063_REQUEST,
  GET_DATA_fp03_063_SUCCESS,
  GET_DATA_fw19_0144_FAILURE,
  GET_DATA_fw19_0144_REQUEST,
  GET_DATA_fw19_0144_SUCCESS,
} from "./actionType";

const initialstate = {
  hotels_fw19_0144: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA_fw19_0144_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_fw19_0144_SUCCESS:
      console.log(payload);
      return {
        ...state,
        hotels_fw19_0144: payload,
        isLoading: false,
        isError: false,
      };
    case GET_DATA_fw19_0144_FAILURE:
      return {
        ...state,
        isError: true,
      };

    case GET_DATA_fp03_063_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_DATA_fp03_063_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hotels_fw19_0144: payload,
        isError: false,
      };

    case GET_DATA_fp03_063_FAILURE:
      return {
        ...state,
        isLoading: false,
        hotels_fw19_0144: [],
        isError: true,
      };
    default:
      return state;
  }
};

// before pushing the code to repo
// first we need to make pull request and then push code to repo
// 1. using `git pull origin main`
// 2. `git checkout <branch name>` and then
// using `git push origin <branch name>`
