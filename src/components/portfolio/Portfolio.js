import React, { useState } from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal, Form } from "reactstrap";

function Example() {
  const [loginModal, setLoginModal] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const [logIn, setLogIn] = useState({
    register: true,
    user: {
      email: "",
      password: "",
    },
  });

  const buttonHandler = (e) => {
    e.preventDefault();
    setCreateUser(!createUser);
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
            <Form>
              <FormGroup>
                <label>Email</label>
                <Input defaultValue="" placeholder="Email" type="text" />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input defaultValue="" placeholder="Password" type="password" />
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
              <Form>
                <FormGroup>
                  <label>Name</label>
                  <Input defaultValue="" placeholder="Name" type="text" />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <Input defaultValue="" placeholder="Email" type="text" />
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <Input
                    defaultValue=""
                    placeholder="Password"
                    type="password"
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

export default Example;
