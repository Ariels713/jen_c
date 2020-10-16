import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal, Form } from "reactstrap";

function ContactModal() {
  const [loginModal, setLoginModal] = React.useState(false);
  return (
    <>
      <Button
        // className="btn-round"
        color="neutral"
        type="button"
        onClick={() => setLoginModal(true)}
      >
        Contact
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
          <h3 className="modal-title text-center">Say Hello!</h3>
        </div>
        <div className="modal-body">
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
              <label>Message</label>
              <Input
                defaultValue=""
                placeholder="Message"
                type="textarea"
                rows="5"
              />
            </FormGroup>
            <Button block className="btn-round" color="success">
              Log in
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default ContactModal;
