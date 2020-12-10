import React from 'react';
import Modal from 'react-modal';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from 'styled-system';

const useStyles = makeStyles((theme) => ({


  mymodal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
  
  myoverlay:  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}));

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

function ModalComponent (props){
  const classes = useStyles();
  return (
    <div>
      {/* <Container maxWidth="sm"> */}
      <Modal
        isOpen={props.isOpen}
        // className={classes.Confirm_Modal}
        className={classes.mymodal}
        overlayClassName={classes.myoverlay}
        // ariaHideApp={false}
        // style={customStyles}

        shouldCloseOnOverlayClick={true}
        contentLabel="Confirm Modal"
      >
        {props.children}
      </Modal>
      {/* </Container> */}
    </div>
  );
};


export default ModalComponent;
