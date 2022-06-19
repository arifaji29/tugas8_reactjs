import React from 'react';
import {Button, Modal} from 'react-bootstrap'
class Login extends React.Component {
    constructor() {
        super()
        this.state={
            show:false

        }
    }

    handleModal(){
        this.setState({show:!this.state.show})
    }

  render (){
    return(
      <div>
         {/* <h1> Bootstrap Modal in React</h1> */}
         <Button onClick={()=>this.handleModal()} >Login</Button>
        <Modal show={this.state.show}>
         <Modal.Header closeButton >Login</Modal.Header>
         <Modal.Body>
          Anda Berhasil Login
        </Modal.Body>
        <Modal.Footer>
           <Button variant="secondary" onClick={()=>this.handleModal()} >
             keluar
           </Button>
           <Button>Save email dan Password</Button>
         </Modal.Footer>
        </Modal>
      </div>
    );
  }
  }
export default Login ;