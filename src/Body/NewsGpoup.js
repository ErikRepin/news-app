import CardGroup from 'react-bootstrap/CardGroup';
import NewsCardComponent from './NewsCard';
import './News.scss';

function NewsGroupComponet() {
  return (
    <CardGroup>
        <NewsCardComponent />
        <NewsCardComponent />
        <NewsCardComponent />
    </CardGroup>
  );
}

export default NewsGroupComponet;
