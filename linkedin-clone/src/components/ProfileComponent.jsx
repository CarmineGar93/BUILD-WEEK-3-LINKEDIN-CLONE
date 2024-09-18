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
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RETRIEVE_PROFILE, RetrieveProfileAction } from "../redux/actions";

function ProfileComponent() {
  const user_logged = useSelector(state => state.user.user_logged)
  const token = useSelector(state => state.token.token)
  const profile = useSelector(state => state.user.profile)
  const userId = useParams().userId
  const dispatch = useDispatch()
  useEffect(() => {
    if (userId === user_logged._id) {
      dispatch({
        type: RETRIEVE_PROFILE,
        payload: user_logged
      })
    } else {
      dispatch(RetrieveProfileAction(token, userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <Container>
      {
        profile && (
          <Row className="justify-content-center">
            <Col md={8}>
              {/* Fare un componente che ne racchiuda altri */}
              <HeroProfile />
              <AnalisiComponent />
              <RisorseComponent />
              <AttivityComponent />
              <InfoComponent />
              <Esperienzadin />
            </Col>
            <Col md={3}>
              <Sidebar />
            </Col>
          </Row>
        )
      }

    </Container>
  );
}

export default ProfileComponent;
