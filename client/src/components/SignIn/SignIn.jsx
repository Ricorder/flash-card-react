import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const SignIn = () => {

  


  const history = useHistory();

  const goToSignUp = () => {
    history.push('/signUp')
  }

  return ( 
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Введите email" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Введите пароль" />
  </Form.Group>

  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Войти
  </Button>
  <hr/>
  Еще не зарегистрированы?
  <Button onClick={goToSignUp} variant="primary" type="submit">
    Пройти регистрацию
  </Button>
</Form>
   );
}
 
export default SignIn;
