import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.filter(
        (user) => user.email === email && user.password === password
      );

      if (user.length > 0) {
        alert("Accesso avvenuto con successo!");
        navigate("/home"); // Reindirizza alla home page dopo l'accesso
      } else {
        alert("Email o password errati.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center ">
      <Card className="p-4 shadow cardSign mb-5">
        <Card.Title className="mb-2 fs-2">Accedi</Card.Title>
        <Card.Text> Resta al passo con il tuo mondo professionale. </Card.Text>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-primary fs-6 mt-4">
              Hai dimenticato la tua password?
            </Form.Text>
          </Form.Group>
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              className="btn-lg w-100 rounded-pill"
            >
              Accedi
            </Button>
            <div className="d-flex align-items-center">
              <hr className="flex-grow-1" />
              <span className="mx-3 text-secondary">oppure</span>
              <hr className="flex-grow-1" />
            </div>
          </div>
          <Card.Text>
            Cliccando su “Continua”, accetti il{" "}
            <a className="hover-underline text-primary" href="#a">
              Contratto di licenza,
            </a>{" "}
            <br />
            <a className="hover-underline text-primary" href="#a">
              l’Informativa sulla privacy
            </a>
            e
            <a className="hover-underline text-primary" href="#a">
              l’Informativa sui cookie
            </a>
            di LinkedIn.
          </Card.Text>
          <Button
            variant="light"
            type="submit"
            className="btn-lg w-100 rounded-pill border-3 border bg-white mb-2 "
          >
            <img
              className="me-2 mb-1"
              src=" https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              width={25} alt=""
            ></img>
            Continue with Google
          </Button>

          <Button
            variant="light"
            type="submit"
            className="btn-lg w-100 rounded-pill border-3 border  bg-white  mb-2  "
          >
            <img className="me-2 mb-1" src="https://cdn.discordapp.com/attachments/1257281696189907015/1283736614329253952/image.png?ex=66e41463&is=66e2c2e3&hm=b33139f2a1f5d627864fcafc65f0012c65876462a62e960ee7a907fee5f8a857&" width={25} alt=""></img>
            Accedi con Microsoft
          </Button>
          <Button
            variant="light"
            type="submit"
            className="btn-lg w-100 rounded-pill border-3 border  bg-white  mb-2 "
          >
            <img
              className="me-2 mb-1"
              src=" https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
              width={25} alt=""
            ></img>
            Accedi con Apple
          </Button>
        </Form>
      </Card>
      <h4 >
        Non hai un account LinkedIn?
        <Link to='/' className="text-primary hover-underline"> Iscriviti ora </Link>
      </h4>
    </Container>
  );
};

export default FormSignUp;
