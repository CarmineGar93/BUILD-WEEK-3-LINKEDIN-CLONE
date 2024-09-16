import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("Registrazione avvenuta con successo!");
        navigate("/home"); // Reindirizza alla home page dopo la registrazione
      } else {
        alert("Errore durante la registrazione.");
      }
    } catch (error) {
      console.error("Errore:", error);
      alert("Si è verificato un errore. Riprova più tardi.");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center pb-3">
      <Card className="p-4 shadow cardSign mb-3">
        <Card.Title className="mb-2 fs-2">Registrati</Card.Title>
        <Card.Text> Resta al passo con il tuo mondo professionale. </Card.Text>
        <Form onSubmit={handleSubmit}>
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
          </Form.Group>
          <div className="text-center">
            <Card.Text>
              Cliccando su “Accetta e iscriviti” o "continua", accetti il{" "}
              <Link className="hover-underline text-primary">
                Contratto di licenza,
              </Link>{" "}
              <br />
              <Link className="hover-underline text-primary">
                l’Informativa sulla privacy
              </Link>
              e
              <Link className="hover-underline text-primary">
                l’Informativa sui cookie
              </Link>
              di LinkedIn.
            </Card.Text>
            <Button
              variant="primary"
              type="submit"
              className="btn-lg w-100 rounded-pill"
            >
              Accedi e Iscriviti
            </Button>
            <div className="d-flex align-items-center">
              <hr className="flex-grow-1" />
              <span className="mx-3 text-secondary">oppure</span>
              <hr className="flex-grow-1" />
            </div>
          </div>

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
            <img
              className="me-2 mb-1"
              src="https://cdn.discordapp.com/attachments/1257281696189907015/1283736614329253952/image.png?ex=66e41463&is=66e2c2e3&hm=b33139f2a1f5d627864fcafc65f0012c65876462a62e960ee7a907fee5f8a857&"
              width={25} alt=""
            ></img>
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
        <Card.Text className='text-center'>
          Hai già un Account LinkedIn?
          <Link to="/sign" className="text-primary  hover-underline">
            {" "}
            Accedi ora{" "}
          </Link>
        </Card.Text>
      </Card>
      <h4 >
        Vuoi creare una pagina per una Azienda?
        <Link className="text-primary hover-underline"> Lasciati aiutare! </Link>
      </h4>
    </Container>
  );
};

export default FormRegister;
