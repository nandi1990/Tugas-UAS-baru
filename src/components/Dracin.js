import { Card, Container, Row, Col, Image} from "react-bootstrap"
import dracin11Image from "../assets/image/dracin/dream.jpg"
import dracin2Image from "../assets/image/dracin/master.jpg"


const Dracin = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center">DRAMA CINA</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="dracin">
                            <Card className="movieImage">
                                <Image src={dracin11Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">A Dream Of Spendor</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                            <a href="index.html" className="stretched-link">Continue reading</a>
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last updated 3 mins ago
                                        </Card.Text>
                                    </div>
                                    </div>
                            </Card>
                        </Col>
                        <Col md={4} className="movieWrapper">
                            <Card className="movieImage">
                                <Image src={dracin2Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Master of My Own</Card.Title>
                                        <Card.Text className="text-left">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Card.Text className="text-left">
                                            Last updated 3 mins ago
                                        </Card.Text>
                                    </div>
                                    </div>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Dracin