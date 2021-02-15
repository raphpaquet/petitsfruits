import './Contact.scss';
import React, { useState, useEffect, useRef } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

  buttonProgress: {
    color: '#006466',
    position: 'flex',
    justifyContent: 'center',
    alignItem:'center',
    marginTop: '1em',
  }
}));


export default function Contact() {


  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const timer = useRef()
  const [state, setState] = useState(
    {
    email: '',
    name: '', 
    subject: '', 
    message: ''
  });

  const handleChange = e => {
    const {name, value} = e.target
    setState(prev => ({...prev, [name]: value }))
  };

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    //destructure from state 
    const {email, name, subject, message} = state
    axios.post('/sendtome', {
      //make an object to be handled from req.body on the backend. 
      email,
      name,
      subject,
      text: message
    })
    .then((response) => {
      setLoading(false)
      setSuccess(true)
      if(response.status === 200) {
        alert('Merci pour votre courriel. Je vous réponds le plus tôt possible');
        clearState()
      } else {
        alert("Oups! Le message n'envoie pas, réessayez ou contactez moi via facebook ou instagram !")
      }
    })
    clearState()
  };

  const clearState = () => {
    setState({
      email: '',
      name: '', 
      subject: '', 
      message: ''
    })
  }


  return (
    <section id="contact">
        <h1 className="contact-title">Contactez-Moi</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input id="name" className="form-input" type="text" name="name" placeholder='Votre Nom *' value={state.name} onChange={handleChange} required/>
        <br></br>
        <input id="email" className="form-input" type="email" name="email" placeholder='Votre Courriel *' value={state.email} onChange={handleChange} required/>
        <br></br>
        <input id="subject" className="form-input" type="text" name="subject" placeholder='Object' value={state.subject} onChange={handleChange}/>
        <br></br>
        <TextareaAutosize aria-label="empty textarea" id="message" className="form-input msg" name="message" placeholder='Message *' value={state.message} onChange={handleChange} required/>
        <br></br>
        <div class="box-1">
          <button class="btn btn-one" type="submit" variant="contained" disabled={loading} >
            <span>ENVOYER</span>
         </button>
         <div className="progress">
          {loading && <CircularProgress color="secondary" size={40} className={classes.buttonProgress} /> }
         </div>
        </div>
      </form>
    </section>
  )
}