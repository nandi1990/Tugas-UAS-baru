import { Card, Container, Row, Col, Image} from "react-bootstrap"
import Drakor1Image from "../assets/image/drakor/cleaning.jpg"
import Drakor2Image from "../assets/image/drakor/doctor.jpg"
import Drakor3Image from "../assets/image/drakor/link_eat_love_.jpg"
import Drakor4Image from "../assets/image/drakor/why.jpg"

const Drakor = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center">DRAMA KOREA</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="drakor">
                            <Card className="movieImage">
                                <Image src={Drakor1Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Cleaning</Card.Title>
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
                                <Image src={Drakor2Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Doctor</Card.Title>
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
                                <Image src={Drakor3Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Link eat Love</Card.Title>
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
                                <Image src={Drakor4Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Why Her</Card.Title>
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

export default Drakor