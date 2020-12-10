import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';

import Buttons from '../../Components/Button';
import TextField from '../../Components/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

import ModalComponent from '../../Components/Modal';
import AutoComplete from '../../Components/AutoComplete';
import Grid from '../../Components/Grid';
import {addData} from '../../Redux/actions/saveUserAction';
import Api from '../../Apis';
import { Container } from '@material-ui/core';

import styled from "styled-components";

const Div = styled.div`
   padding:20px;
   margin-top:20px;
   text-align:center;
`;

const TextAlign = styled.h1`
  text-align: center;
`;


const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  btnDiv: {
    float: 'right',
  },
  formInput: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
  },
  inputWidth:{
    width : '80%',
    marginBottom: '15px',
  },

}));

function Dashboard (props) {
  const classes = useStyles();
    const dispatch = useDispatch ();
    const [response, setResponse] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [nameOfSchool, setNameofSchool] = useState('');
    const [fieldOfStudy, setFieldofStudy] = useState('');
    const [degree, setDegree] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [options, setOptions]= useState([])

    const userData = useSelector (state => {
        return state.userDataReducer.user;
      });

      useEffect(() => {
        Api.get(`http://universities.hipolabs.com/search?name=middle`)
        .then(res => {
           setResponse(res);
           let array =[];
           Array.isArray(res) && res.map((item) =>{
             array =[...array, item]
            });
            setOptions(array)
          })
      }, []);
    
 
      const openModal = () => {
          setIsOpen(true);
      }

      const closeModal =() => {
          setIsOpen(false);
      }

      const addEducation = () => {
        let data = {
            school: nameOfSchool,
            fieldOfStudy: fieldOfStudy,
            degree: degree,
            startYear: startYear,
            endYear: endYear
        }
        dispatch(addData(data));
        setFieldofStudy('');
        setIsOpen(false);
      }

      console.log("Options", options)
  return (
    <div>
      <Container maxWidth="md">
        <Div> 
        <Typography variant="h4" className={classes.title}>
        Welcome to {props.location.state}'s education page
          </Typography>

     <Buttons variant='contained'
        color="primary"
        name="add"
        onClick={()=> openModal()}
        >
        Add New Education
      </Buttons>
      </Div>
     
    <Grid/>
    </Container>
    <ModalComponent isOpen={isOpen}>
        <div>
          <div> 
            <TextAlign> Add new Education Details</TextAlign>
          </div>
          <FormControl className={classes.formInput} >
            <AutoComplete
              options={options}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}

            />
          
            <TextField id="outlined-basic" label="Field of Study" variant="outlined" className={classes.inputWidth} onChange={(e) => setFieldofStudy(e.target.value)}/>
            <TextField id="outlined-basic" label="Degree" variant="outlined" className={classes.inputWidth} onChange={(e) => setDegree(e.target.value)}/>
            <TextField id="outlined-basic" label="Start year" variant="outlined" className={classes.inputWidth} onChange={(e) => setStartYear(e.target.value)}/>
            <TextField id="outlined-basic" label="End year" variant="outlined" className={classes.inputWidth} onChange={(e) => setEndYear(e.target.value)}/>
          </FormControl>
         <div className={classes.btnDiv}> 
          <Buttons variant='contained'
              color="primary"
              name="add"
              onClick={()=> addEducation()}
              >
              Add
          </Buttons>
          <Buttons variant='contained'
              color="primary"
              name="add"
              onClick={()=> closeModal()}
              >
              Close
          </Buttons>
         </div>
        </div>
    </ModalComponent>
    </div>
  );
};

export default withRouter(Dashboard);
