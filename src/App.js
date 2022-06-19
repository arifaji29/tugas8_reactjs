import { Container, Dropdown, Navbar, Nav, Col, Row, Card, Image, Figure, Breadcrumb, Button, Carousel, ListGroup, Alert, Form, Modal } from "react-bootstrap";
import Login from "./modal";



function App() {
  return (
    <>
      <Navbar bg="dark">
        <Container fluid className="justify-content-start" >
          {/* <Navbar.Brand href="#home"> */}
          <Dropdown className="justify-content-start">

            <Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm" >
              Pilih Bahasa
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bahasa Indnesia</Dropdown.Item>

            </Dropdown.Menu>

          </Dropdown>
          {/* </Navbar.Brand> */}
        </Container>
        <Container className="justify-content-end" >

          <Figure className="text-center">
            <Figure.Image
              width={32}
              height={32}
              alt="171x180"
              src="https://live.staticflickr.com/65535/52058051806_5c59c2648e.jpg"
              roundedCircle />
            <Figure.Caption >
              Aldo Setiawan
            </Figure.Caption>
          </Figure>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col sm={8}></Col>
          <Col sm={4}>
            <Button variant="light" style={{ width: "700px" }}>
              <Breadcrumb >
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Berita
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={12} md={8}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Neymar Berencana Menikah dengan Batu Kali</h3>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Inggris Larang Harry Maguire Main di Lapangan, Tapi Boleh di Empang</h3>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Timnas dipastikan tidak ikut main di Euro 2024</h3>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </Col>
          <Col></Col>
        </Row>

      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga 1 Indnesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Premier Inggris</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Divisi Premiera
              </ListGroup.Item>
              <ListGroup.Item as="li">Serie A</ListGroup.Item>
              <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={6}>
            <Alert variant="secondary" style={{ height: '200px' }}>
              <h3>Divisi Premiera</h3>
              <p>Main di Catalunya Gerrad Pique Minta dihormati</p>
              
            </Alert>
          </Col>

          <Col>
            <Row>
              <Col className="text-center">
                <Figure >
                  <Figure.Image
                    width={50}
                    height={50}
                    alt="171x180"
                    src="https://live.staticflickr.com/65535/52058537659_7c544484ed.jpg"
                    roundedCircle />
                  <Figure.Caption >
                    <h4>Silahkan Login</h4>
                  </Figure.Caption>

                </Figure>
              </Col>
            </Row>

            <Form left>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>

              <Login/>
            </Form>

          </Col>
        </Row>
      </Container>





    </>

  );
}

export default App;

