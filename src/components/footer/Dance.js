import React from "react";
// reactstrap components
import { Button, Modal } from "reactstrap";

function Dance() {
  const [largeModal, setLargeModal] = React.useState(false);

  return (
    <>
      <Button
        // className="btn-round"
        color="neutral"
        type="button"
        onClick={() => setLargeModal(true)}
      >
        Lets Dance
      </Button>
      <Modal
        isOpen={largeModal}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        toggle={() => setLargeModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="myLargeModalLabel">
            Large modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLargeModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <iframe
            title="videoPlayer"
            width="700"
            height="315"
            src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </Modal>
    </>
  );
}

export default Dance;
