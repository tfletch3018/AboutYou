import Container from "../components/Container";
import Row from "../components/Row";
// import { Link } from "react-router-dom";
import "../index.css";


function Misc() {

    return (
        <div>
            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <h1 className="text-center">Miscellaneous</h1>
                </Row>
            </Container>
        </div>
    )
}

export default Misc;