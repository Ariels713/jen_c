import React, { useState } from "react";
import firebase from "../../firebase/firebase";

// reactstrap components
import { Button, FormGroup, Input, Modal, Form } from "reactstrap";

function Portfolio() {
  const [loginModal, setLoginModal] = useState(false);
  //Updates Modol from signin to register user
  const [createUser, setCreateUser] = useState(true);

  //values for current user
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //values to regist new user
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassWord, setNewUserPassword] = useState("");

  const buttonHandler = (e) => {
    setCreateUser(!createUser);
  };

  function clearFroms() {
    setCreateUser(true);
    setUserEmail("");
    setUserPassword("");
    setNewUserName("");
    setNewUserEmail("");
    setNewUserPassword("");
    setLoginModal(false);
  }

  const registerNewUser = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUserEmail, newUserPassWord)
      .then((res) => {
        console.log(res);
        clearFroms();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const logInUser = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((res) => {
        clearFroms();
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
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
            </>
          ) : (
            <>
              <h3 className="modal-title text-center">Register</h3>
              <p>Register to see my portfolio</p>
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
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </FormGroup>
              <Button block className="btn-round" color="success">
                Log in
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
              <Form onSubmit={registerNewUser}>
                <FormGroup>
                  <label>Name</label>
                  <Input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={newUserPassWord}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                  />
                </FormGroup>
                <Button block className="btn-round" color="success">
                  Register
                </Button>
              </Form>
            </>
          )}
        </div>
        {createUser ? (
          <div className="modal-footer no-border-footer">
            <span className="text-muted text-center">
              Looking{" "}
              <a href="#pablo" onClick={buttonHandler}>
                create an account
              </a>
              ?
            </span>
          </div>
        ) : (
          <div className="modal-footer no-border-footer">
            <span className="text-muted text-center">
              Registered?{" "}
              <a href="#pablo" onClick={buttonHandler}>
                Log In
              </a>
              ?
            </span>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Portfolio;
