import { Card, Container, Row, Col, Image} from "react-bootstrap"
import Turki1Image from "../assets/image/turki/cam tavanlar.jpeg"
import Turki2Image from "../assets/image/turki/cinta.jpg"


const Turki = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center">DRAMA TURKI</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="turki">
                            <Card className="movieImage">
                                <Image src={Turki1Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Cam Tavanlar</Card.Title>
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
                        <Col md={4} className="movieWrapper">
                            <Card className="movieImage">
                                <Image src={Turki2Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Cinta dimusim Stroberry</Card.Title>
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

export default Turki