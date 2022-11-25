import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NewsCardComponent from './NewsCard';
import FormComponent from './Form';
import { getEverything } from '../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setTotalResults, setSearchParams } from '../services/stateService';
import { useParams, Link } from 'react-router-dom';
import './News.scss';

function NewsGroupComponet() {

    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // useParams eto hook react-router-dom dlja poluchenija informacii s ssqlki
    const { q, lang } = useParams();
    // useDispatch eto hook react-redux i blagodorja emu mq mozem zaimodeistvovat s redux
    // useDispatch eto most mezdu react i redux
    const dispatch = useDispatch();
    
    // useSelector eto react-redux hook, kotorqi sledit za redux sostojanii, i pri nali4ii izmenenie zapuskaet otrisovku komponenta 
    const searchParams = useSelector((state) => state.searchParams);

    // useEffect - eto react hook kotorqi zapuskaetsja posle togo kak pervqi render/otrisovka komponenta proizoshol
    // useEffect prinimaet 1 parametr
    // 1: Funkcija kotoruju nuzno zapustit
    // 2: massive iz peremennqh, ot kotorqh budet zaviset dalneshaja rabota useEffecta
    // vse vneshnie peremennqe, kotorqe mi ispolzuem v funkcqii dolznq bqt v massive savisemosti
    // Pri ljubqh izmenenijah etih zavisemostei useEffect zapuskaetsja
    // Pri izmenenii v komponente ne kasajushih zavisemosti useEffecta ne zapuskaet useEffect no komponent renderitsja
    // Petomu v njom lu4she vsego rabotat s zaprosami 
    useEffect(() => {
        if(lang && searchParams.language !== lang){
            dispatch(setSearchParams({
                ...searchParams,
                language: lang,
            }));
            return;
        }
        (async function () {
            try {
                const response = await getEverything({
                    ...searchParams,
                    q: q || searchParams.q,
                });
                const responseData = await response.json();
                if (responseData.status === 'error') {
                    throw responseData;
                }
                setArticles(responseData.articles);
                // redux deistvie neobhodimo obernut v dispatch
                dispatch(setTotalResults(responseData.totalResults));
            } catch (error) {
                dispatch(setErrorMessage(error.message));
            }
        })();
    }, [searchParams, dispatch, q, lang]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Link to="/bitcoin">Bitcoin today</Link>
            <Row xs={1} md={2} lg={3} className="g-2">
                {articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCardComponent article={article} />
                    </Col>
                ))}
            </Row>
            <FormComponent
                show={show}
                handleClose={handleClose}
                setArticles={setArticles}
                searchProps={searchParams}
            />
        </>
    );
}

export default NewsGroupComponet;