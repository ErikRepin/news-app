import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
import Figure from 'react-bootstrap/Figure';

// Kak i ljubaja funkcija v js takze i komponentq prinemajut props (propeties)
// Komponentq mozet prinjat beskone4noe koli4estvo properties, no hranit ih vseh v odnoi peremennoi tip object
// properties peredajutsja v komponent, takze kak html element my peredajom atributq
//  <component prop1={1} prop2={2} />
// V komponent 
function NewsModalComponent({ setShow, show, article }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={article.urlToImage || noImage}
                        />
                        <Figure.Caption>
                            {article.url}
                        </Figure.Caption>
                    </Figure>
                    <p>{article.content}</p>
                    <Button variant="outline-primary" href={article.url} target="_blank" className="w-100">
                            Read more
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;