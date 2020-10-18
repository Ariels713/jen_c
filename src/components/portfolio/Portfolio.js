import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal, Form } from "reactstrap";

function Example() {
  const [loginModal, setLoginModal] = React.useState(false);
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
          <h3 className="modal-title text-center">Portfolio</h3>
          <p>Log in to see my portfolio</p>
        </div>
        <div className="modal-body">
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
        </div>
        {/* <div className="modal-footer no-border-footer">
          <span className="text-muted text-center">
            Looking{" "}
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              create an account
            </a>
            ?
          </span>
        </div> */}
      </Modal>
    </>
  );
}

export default Example;
