import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';

function HeaderComponet() {
    return (
        <Navbar bg="light" className="mb-3">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HeaderComponet;
