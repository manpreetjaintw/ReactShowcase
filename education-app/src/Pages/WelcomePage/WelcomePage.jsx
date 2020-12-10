import React, {useState} from "react";
import { withRouter } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import styled from "styled-components";

import TextField from '../../Components/TextField'
import Buttons from "../../Components/Button";
import {saveUserAction} from '../../Redux/actions/saveUserAction';
import { Container } from '@material-ui/core';

const Div = styled.div`
    background-color: #f5f5f5;
   padding:20px;
   margin-top:30%;
   text-align:center;
`;

const WelcomePage = (props) => {
  const dispatch = useDispatch ();
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const addUser = () => {
    console.log("MMMMM", name);
    dispatch (saveUserAction (name));
    props.history.push({
      pathname: '/dashboard',
      state: name
     });
  }

  return (
    <div>
      
<Container maxWidth="sm">
<Div>
      <h3>Hi, there! Welcome to your education Showcase</h3>
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => handleChange(e)}/>
      <Buttons variant='contained'
        color="primary"
        name="add"
        onClick={()=> addUser()}
        >
        Add User
      </Buttons>
      </Div>
      </Container>
    </div>
  );
};

export default withRouter(WelcomePage);
