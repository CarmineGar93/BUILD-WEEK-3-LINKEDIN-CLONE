import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnalisiComponent from "./AnalisiComponent";
import Sidebar from "./SidebarComponent";
import RisorseComponent from "./RisorseComponent";
import HeroProfile from "./HeroProfile";
import AttivityComponent from "./AttivityComponent";
import Esperienzadin from "./Esperienzadin";

import InfoComponent from "./InfoComponent";

function ProfileComponent() {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Fare un componente che ne racchiuda altri */}
          <HeroProfile />
          <AnalisiComponent />
          <RisorseComponent />
          <AttivityComponent/>
          <InfoComponent />
          <Esperienzadin />          
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileComponent;
