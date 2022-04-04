import {Header} from './components/Header';
import { BrowserRouter} from 'react-router-dom';

import { GlobalStyle } from './styles/global';

import Routes from './Routes'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes/>
      <GlobalStyle/>

    </BrowserRouter>
  
    </div>
  );
}

export default App;
