{/*This component has the modal and gets props from the active meal to get the div to open the modal with no button I passed the show state from here to the main component*/}


const React = require('react');
import { Button, Modal, ButtonToolbar  } from 'react-bootstrap';


class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }


  }
        // <Button bsStyle="primary" onClick={this.showModal}>
        //   Launch demo modal
        // </Button>
                   // <Button onClick={this.props.hideModal}>Close</Button>


  render() {
    return (
      <ButtonToolbar>

        <Modal
          show={this.props.show}
          onHide={this.props.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.day}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.img} />
            <h4>{this.props.meal}</h4>
            <h4>{this.props.ingredients}</h4>
            <p>{this.props.instructions}</p>
          </Modal.Body>
          <Modal.Footer>
 
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

module.exports = MyModal;
