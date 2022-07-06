import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import BookDescription from './components/BookDescription';
import Book from './components/Books';
import Input from './components/Input';
import SelectBlock from './components/SelectBlock';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <div className="App">
                <Input />
                <SelectBlock />
                <Book />
              </div>
            </>
          } />

          <Route path="book/:id" element={
            <>
              <BookDescription />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
