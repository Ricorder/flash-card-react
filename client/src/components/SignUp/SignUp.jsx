import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const signUpCheck = "http://localhost:3001/user/signup";
// lv

const SignUp = () => {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function inputHandlerEmail(e) {
    setInputEmail(e.target.value);
  }
  function inputHandlerPassword(e) {
    setInputPassword(e.target.value);
  }

  const addHandler = async (email, password) => {
    const response = await fetch(signUpCheck, {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const responseServer = await response.json();
    localStorage.setItem('id', JSON.stringify(responseServer._id))
      window.location.assign('/')
  };

  function submitHandler(e) {
    e.preventDefault();
    if ( inputEmail.trim() && inputPassword.trim()) {
      addHandler( inputEmail.trim(), inputPassword.trim());
      setInputEmail("");
      setInputPassword("");
    }
  }


  
     

      return ( 
        <Form onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={inputHandlerEmail} name='email' value={inputEmail} type="email" placeholder="Введите email" />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={inputHandlerPassword} name='password' value={inputPassword} type="password" placeholder="Введите пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
       );

  }



 
export default SignUp;
