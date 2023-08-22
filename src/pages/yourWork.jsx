import Container from "../components/Container";
import Row from "../components/Row";
import "../index.css";

function YourWork() {

    return (
        <div>
            <Container fluid style= {{ marginTop: 50 }}>
                <Row>
                    <h1 className="text-center">Projects/ Your Work</h1>
                </Row>
            </Container>
        </div>
    )
}

export default YourWork;