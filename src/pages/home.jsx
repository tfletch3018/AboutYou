import Container from "../components/Container";
import Row from "../components/Row";
import "../index.css";

function Home() {

    return (
        <div className="backGround1">
            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <h1 className="text-center">Homepage</h1>
                </Row>
            </Container>
        </div>
    )
}

export default Home;