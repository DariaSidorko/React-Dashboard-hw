
import './App.css';
import Sidebar from './components/Sidebar';
import AverageRating from './components/AverageRating';
import Reviews from './components/Reviews';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';


function App() {
  return (
    <div className="App grid-container">
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
