import React, { useContext } from 'react';

import Card from '../card/Card';
import Input from '../input/Input';
import Button from '../buton/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from '../input/validators';
import { useForm } from '../form-hooks/form-hooks';
import './Auth.css';
import { AuthContext } from '../context/auth.context';

const Auth = () => {

  

  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const authSubmitHandler =  event => {
    event.preventDefault();
  
        
        auth.login();
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(30)]}
          errorText="You are not Authorized."
          onInput={inputHandler}
        />
        <Button inverse type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
   </Card>
  );
};

export default Auth;
