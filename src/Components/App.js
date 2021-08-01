import Header from './Headers';
import News from '../Components';
import Main from '../Components/pages/MainPages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={News} />
      <Route exact path="/main" component={Main} />
    </div>
  );
}

export default App;
