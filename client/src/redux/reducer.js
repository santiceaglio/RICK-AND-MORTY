import {
  GET_ALL_CHARACTERS,
  GENERATE_COPY,
  GET_CHARACTER_BY_NAME,
  GET_ALL_FAVORITES,
  GET_USER,
  FILTER_ORDER_BY_NAME,
  FILTER_ORDER_BY_ID,
  FILTER_ORDER_BY_LIVE,
  FILTER_ORDER_BY_GENDER,
  DETAIL_ID,
  CLEAN_DETAIL_BY_ID
} from "./actions";

const initialState = {
  characters: [],
  copyCharacters: [],
  detail: {},
  favorites: [],
  user: 2,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case GENERATE_COPY:
      return {
        ...state,
        copyCharacters: state.characters,
      };
    case GET_CHARACTER_BY_NAME:
      return {
        ...state,
        copyCharacters: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.id,
      };
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case FILTER_ORDER_BY_NAME:
      switch (action.payload) {
        case "ascendente":
          return {
            ...state,
            copyCharacters: [
              ...state.copyCharacters.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              }),
            ],
          };
        case "descendente":
          return {
            ...state,
            copyCharacters: [
              ...state.copyCharacters.sort(function (a, b) {
                return b.name.localeCompare(a.name);
              }),
            ],
          };
        default:
          return {
            ...state,
            copyCharacters: state.characters,
          };
      }

    case FILTER_ORDER_BY_ID:
      switch (action.payload) {
        case "ascendente":
          return {
            ...state,
            copyCharacters: [
              ...state.copyCharacters.sort(function (a, b) {
                return a.id - b.id;
              }),
            ],
          };
        case "descendente":
          return {
            ...state,
            copyCharacters: [
              ...state.copyCharacters.sort(function (a, b) {
                return b.id - a.id;
              }),
            ],
          };
        default:
          return {
            ...state,
            copyCharacters: state.characters,
          };
      }

    case FILTER_ORDER_BY_LIVE:
      switch (action.payload) {
        case "alive":
          return {
            ...state,
            copyCharacters: state.copyCharacters.filter(
              (char) => char.status.toLowerCase() === "alive"
            ),
          };
        case "dead":
          return {
            ...state,
            copyCharacters: state.copyCharacters.filter(
              (char) => char.status.toLowerCase() === "dead"
            ),
          };
        default:
          return {
            ...state,
            copyCharacters: state.characters,
          };
      }

    case FILTER_ORDER_BY_GENDER:
      switch (action.payload) {
        case "male":
          return {
            ...state,
            copyCharacters: state.copyCharacters.filter(
              (char) => char.gender.toLowerCase() === "male"
            ),
          };
        case "female":
          return {
            ...state,
            copyCharacters: state.copyCharacters.filter(
              (char) => char.gender.toLowerCase() === "female"
            ),
          };
        default:
          return {
            ...state,
            copyCharacters: state.characters,
          };

      }
    case DETAIL_ID:
      return {
        ...state,
        detail: state.characters.find((char) => char.id == action.payload)
      }
    case CLEAN_DETAIL_BY_ID:
      return {
        ...state,
        detail: {}
      }

    default:
      return { ...state };
  }
}



