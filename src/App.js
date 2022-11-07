import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body/NewsGpoup';
import HeaderComponet from './Body/Header';

function App() {
  return (
      <Container>
        <HeaderComponet />
        <NewsGroupComponent />
      </Container>
  );
}

export default App;
