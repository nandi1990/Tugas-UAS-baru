import { Card, Container, Row, Col, Image} from "react-bootstrap"
import drakor1Image from "../assets/image/trending/drakor1.jpg"
import drakor2Image from "../assets/image/trending/drakor2.jpg"
import dracin1Image from "../assets/image/trending/dracin1.jpg"
import dracin2Image from "../assets/image/trending/dracin2.jpg"
import turki1Image from "../assets/image/trending/turki1.jpg"
import turki2Image from "../assets/image/trending/turki2.jpg"

const Trending = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-dark text-center">HOT DRAMA</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="hot drama">
                            <Card className="movieImage">
                                <Image src={drakor1Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">E V E</Card.Title>
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
                                <Image src={drakor2Image} alt="Drama Korea" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Wedding Hell</Card.Title>
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
                                <Image src={dracin1Image} alt="Drama Cina" className="image" />
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Who Rules The World</Card.Title>
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
                                <Image src={dracin2Image} alt="Drama Cina" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">The Twenty Eight</Card.Title>
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
                                <Image src={turki1Image} alt="Drama Turki" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Sol Yanim</Card.Title>
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
                                <Image src={turki2Image} alt="Drama Turki" className="image"/>
                                    <div className="bg-dark">
                                    <div className="p-2 m-1 text-white">
                                        <Card.Title className="text-center">Su Ates</Card.Title>
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

export default Trending