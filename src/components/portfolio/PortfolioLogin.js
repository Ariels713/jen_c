import React, { useState, useReducer } from "react";
import firebase from "../../firebase/firebase";

// reactstrap components
import { Button, FormGroup, Input, Modal, Form, Alert } from "reactstrap";
import { reducer, initialState } from "./reducer/portfolioReducer";

const PortfolioLogin = () => {
  //open and close modal
  const [loginModal, setLoginModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    createUser,
    userEmail,
    userPassword,
    newUserName,
    newUserEmail,
    newUserPassword,
    isLoading,
    error,
    isLoggedIn,
  } = state;

  const registerUser = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN" });
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
        .then((res) => {
          dispatch({ type: "REGISTERING_USER" });
          setLoginModal(false);
        });
    } catch (e) {
      let errorCode = e.code;
      let errMessage = e.message;
      console.log(e);
      if (errorCode === "auth/email-already-in-use") {
        dispatch({ type: "EMAIL_IN_USE" });
      } else if (errorCode === "auth/invalid-email") {
        dispatch({ type: "INVALID_EMAIL" });
      } else if (errorCode === "auth/operation-not-allowed") {
        dispatch({ type: "USER_DISABLED" });
      } else if (errorCode === "auth/operation-not-allowed") {
        dispatch({ type: "USER_NOT_FOUND" });
      } else if (errorCode === "auth/weak-password") {
        dispatch({ type: "WEAK_PASSWORD" });
      } else console.log(errMessage);
    }
  };

  const logInUser = async (event) => {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((res) => {
          dispatch({ type: "LOG_IN_USER" });
          setLoginModal(false);
        });
    } catch (e) {
      let errorCode = e.code;
      let errMessage = e.message;
      console.log(e);
      if (errorCode === "auth/wrong-password") {
        dispatch({ type: "WRONG_PASSWORD" });
      } else if (errorCode === "auth/invalid-email") {
        dispatch({ type: "INVALID_EMAIL" });
      } else if (errorCode === "auth/user-disabled") {
        dispatch({ type: "USER_DISABLED" });
      } else if (errorCode === "auth/user-not-found") {
        dispatch({ type: "USER_NOT_FOUND" });
      } else if (errorCode === "auth/weak-password") {
        dispatch({ type: "WEAK_PASSWORD" });
      } else console.log(errMessage);
    }
  };

  return (
    <>
      <Button
        className="btn-magnify btn-round"
        color="success"
        type="button"
        onClick={() => setLoginModal(true)}
      >
        PortFolio
      </Button>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName="modal-register"
      >
        <div className="modal-header no-border-header text-center">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          {/* <h3 className="modal-title text-center">Portfolio</h3> */}
          {createUser ? (
            <>
              <h3 className="modal-title text-center">Portfolio</h3>
              <p>Log in to see my portfolio</p>
              {error && <Alert color="danger">{error}</Alert>}
            </>
          ) : (
            <>
              <h3 className="modal-title text-center">Register</h3>
              <p>Register to see my portfolio</p>
              {error && <Alert color="danger">{error}</Alert>}
            </>
          )}
        </div>
        <div className="modal-body">
          {createUser ? (
            <Form onSubmit={logInUser}>
              <FormGroup>
                <label>Email</label>
                <Input
                  placeholder="Email"
                  type="email"
                  name="userEmail"
                  value={userEmail}
                  onChange={(e) => {
                    dispatch({
                      type: "FIELD",
                      name: "userEmail",
                      payload: e.target.value,
                    });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input
                  placeholder="Password"
                  type="password"
                  name="userPassword"
                  value={userPassword}
                  onChange={(e) => {
                    dispatch({
                      type: "FIELD",
                      name: "userPassword",
                      payload: e.target.value,
                    });
                  }}
                />
              </FormGroup>
              <Button block className="btn-round" color="success">
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </Form>
          ) : (
            <>
              <div className="social text-center">
                <Button className="btn-just-icon mr-1" color="facebook">
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon mr-1" color="google">
                  <i className="fa fa-google" />
                </Button>
                <Button className="btn-just-icon" color="twitter">
                  <i className="fa fa-twitter" />
                </Button>
              </div>
              <Form onSubmit={registerUser}>
                <FormGroup>
                  <label>Name</label>
                  <Input
                    placeholder="Name"
                    type="text"
                    name="newUserName"
                    value={newUserName}
                    onChange={(e) => {
                      dispatch({
                        type: "FIELD",
                        name: "newUserName",
                        payload: e.target.value,
                      });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="newUserEmail"
                    value={newUserEmail}
                    onChange={(e) => {
                      dispatch({
                        type: "FIELD",
                        name: "newUserEmail",
                        payload: e.target.value,
                      });
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="newUserPassword"
                    value={newUserPassword}
                    onChange={(e) => {
                      dispatch({
                        type: "FIELD",
                        name: "newUserPassword",
                        payload: e.target.value,
                      });
                    }}
                  />
                </FormGroup>
                <Button block className="btn-round" color="success">
                  {isLoading ? "Signing You Up!" : "Register"}
                </Button>
              </Form>
            </>
          )}
        </div>
        {createUser ? (
          <div className="modal-footer no-border-footer">
            <span className="text-muted text-center">
              Create an{" "}
              <a
                href="#register"
                onClick={(event) => {
                  dispatch({ type: "REGISTER" });
                }}
              >
                account
              </a>
              ?
            </span>
          </div>
        ) : (
          <div className="modal-footer no-border-footer">
            <span className="text-muted text-center">
              Registered?{" "}
              <a
                href="#login"
                onClick={(event) => {
                  dispatch({ type: "LOG_IN" });
                }}
              >
                Log In
              </a>
              ?
            </span>
          </div>
        )}
      </Modal>
    </>
  );
};

export default PortfolioLogin;
