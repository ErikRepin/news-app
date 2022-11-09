import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import HeaderComponet from './Header';
import PaginationComponent from './Footer';

function App() {
  return (
      <Container>
        <HeaderComponet />
        <NewsGroupComponent />
        <PaginationComponent />
      </Container>
  );
}

export default App;
