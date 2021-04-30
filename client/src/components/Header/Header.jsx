import { Navbar, Nav, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const goToSignUp = () => {
    history.push('/signup')
  }

  const goToSignIn = () => {
    history.push('/signin')
  }

  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Профиль</Nav.Link>
          
          <Nav.Link onClick={goToSignIn}>Войти</Nav.Link>
          <Nav.Link onClick={goToSignUp}>Регистрация</Nav.Link>
        </Nav>
        <Form inline>
          <Navbar.Brand href="/home">FlashCards</Navbar.Brand>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
