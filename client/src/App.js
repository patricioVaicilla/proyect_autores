import Main from './views/Main';
import New from './views/New ';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/edit/:id" element={<Update />} />
          <Route exact path="/new" element={<New />} />
          <Route path="/" element={<Main />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;