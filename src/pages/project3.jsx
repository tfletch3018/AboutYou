import Container from "../components/Container";
import Row from "../components/Row";
import { Link } from "react-router-dom";
import "../index.css";

function Project3() {

    return (
        <div>
            <Container fluid style={{ marginTop: 50 }}>
                <Container>
                    <Row>
                        <h1 className="text-center">Project Three</h1>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="center">
                            <Link to="/yourWork">
                                <button id="projectBtn">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Project3;