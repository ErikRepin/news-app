import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModalComponent from './NewsModal';
import moment from 'moment';

function NewsCardComponent({ article }) {
    // useState = eta funkcija/hook, kotoraja pomogaet rabotat s sostojaniem komponenta
    // Sostojanie eto informacija kotoruju komponent soderzit v sebe.
    // Pri izmenenii sostojanija zapuskaetsja novaja otrisovka/render komponenta.
    // U kazdogo sostojanija est svojo iznachalnoe znachenie i funkcija kotoraja menjaet eto znachenie.
    // useState prinemaet kak argument iznachalnoe znachenie sostojanija i vqdajot massiv s dvumja znachenijami
    // 1: iznachalnoe sostojanie
    // 2: finkcija dlja izmenenija sostojanija  
    const [show, setShow] = useState(false);

// Card component - eto komponent iz npm paketa react-bootstrap.
// react-bootstrap eto biblioteka s gotovqmi react komponentami napisannq s ispolzovaniem  bootstrap css toolkit

    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Card.Img variant="top" src={article.urlToImage || noImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: article.description }}>
                    </Card.Text>
                    {article.author ? (
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                <cite title="Author">{article.author}</cite>
                            </footer>
                        </blockquote>
                    ) : ''}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{moment(article.publishedAt).format('DD.MM.YYYY')}</small>
                </Card.Footer>
            </Card>
            <NewsModalComponent show={show} setShow={setShow} article={article}/>
        </>
    );
}

export default NewsCardComponent;