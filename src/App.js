import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponet from './Header';
import PaginationComponent from './Footer';
import ErrorModalComponent from './ErrorModal';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

// komponentq v react eto obq4nqi js funkcii kotorqe vozvrashajut JSX/React element;

function App() {

  //JSX eta novqi sintext ot react kotorqi sovmeshaet s soboi ja i html v udobnom vide.
  //JSX/React element emeet pravilo: vozvrahsaet tolko odin element ili komponent. odin glavnqi i beskone4no

  // react-router-dom eto biblioteka kotoraja pomogaet nam rabotat s sqlkami
  // kazdqi komponent Route otvechaet za kakujunibud ssqlku
  // v Route me peredjom te komponentq, kotorqe ma hotim videt po, dannoi v path properti, ssqlki
  // mq mozem peredavat dannqe s sqlki komponentam
  // ':' oznachajut 4to mq vozmjom vsjo 4to napisanno posle / i peredaim v peremennuju posle ':';
  // v nashem slu4ae http://localhost:3000/privet budet oznachat 4to mq pokazqvaem newsGroup
  return (
    <Container>
      <HeaderComponet />
      <Routes>
        <Route path="/" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/:q" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/lang/:lang" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;