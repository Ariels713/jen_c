export const initialState = {
  createUser: true,
  userEmail: "",
  userPassword: "",
  newUserName: "",
  newUserEmail: "",
  newUserPassword: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case "REGISTERING_USER":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "LOG_IN_USER":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "WRONG_PASSWORD":
      return {
        ...state,
        error: "Incorrect Password",
        isLoggedIn: false,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "INVALID_EMAIL":
      return {
        ...state,
        error: "Email is not valid, please register!",
        isLoggedIn: false,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "USER_DISABLED":
      return {
        ...state,
        error: "User account has been disabled",
        isLoggedIn: false,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "USER_NOT_FOUND":
      return {
        ...state,
        error: "User not found, please rigister!",
        isLoggedIn: false,
        isLoading: false,
        userEmail: "",
        userPassword: "",
        newUserName: "",
        newUserEmail: "",
        newUserPassword: "",
      };
    case "FIELD":
      return {
        ...state,
        [action.name]: action.payload,
      };
    case "REGISTER":
      return {
        ...state,
        error: "",
        createUser: false,
      };
    case "LOG_IN":
      return {
        ...state,
        error: "",
        createUser: true,
      };
    case "WEAK_PASSWORD":
      return {
        ...state,
        error: "Password Should be at least 6 characters long",
        newUserPassword: "",
        isLoading: false,
      };
    default:
      return state;
  }
};
