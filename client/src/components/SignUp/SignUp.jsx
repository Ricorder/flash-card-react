import { Form, Button } from "react-bootstrap";

const signUpCheck = "http://localhost:3001/user/signup";


const SignUp = () => {

  const signUpFetch = async () => {
    const preResult = await fetch(signUpCheck);
    const response = await preResult.json();
    
  };

  return ( 
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Введите email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Введите пароль" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Зарегистрироваться
  </Button>
</Form>
   );
}
 
export default SignUp;
