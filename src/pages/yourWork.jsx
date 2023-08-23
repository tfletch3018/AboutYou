import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Collapse, Collapse1, Collapse2 } from "../components/Collapse/index";
import "../index.css";

function YourWork() {

    return (
        <div>
            <Container fluid style= {{ marginTop: 50 }}>
                <Row>
                    <h1 className="text-center">Projects/ Your Work</h1>
                </Row>
                </Container>

                <Container fluid style= {{ marginTop: 50 }}>

                <Row>
                    <Col size="sm-4">
                        <p>Text here</p>
                        <Collapse />
                    </Col>
                    <Col size="sm-4">
                    <p>Text here</p>

                    <Collapse1 />
                    </Col>
                    <Col size="sm-4">
                    <p>Text here</p>

                    <Collapse2 />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default YourWork;