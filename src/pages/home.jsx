import Container from "../components/Container";
import Row from "../components/Row";
import Carousel1 from "../components/Carousel";
import "../index.css";

function Home() {

    return (

       
        <div className="backGround1">
    
            <Container fluid style={{ marginTop: 50 }}>
            <Row>
                    <h1 className="text-center">Homepage</h1>
                <p className="text-center">I am Person.... Welcome to my web application</p>
                </Row>
                <Row>
                <Carousel1 />
                </Row>
               
            </Container>
        </div>
    )
}

export default Home;