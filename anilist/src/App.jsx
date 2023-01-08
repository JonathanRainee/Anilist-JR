import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/homePage';
import DetailPage from './pages/detailPage';
import SeachPage from './pages/seachPage';
import FavoritePage from './pages/favoritePage';

export default function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}/>
      <Route path='/detail/:animeid' element={<DetailPage></DetailPage>}></Route>
      <Route path='/search' element={<SeachPage></SeachPage>}></Route>
      <Route path='favorite' element={<FavoritePage></FavoritePage>}></Route>
    </Routes>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world jingssssssss!
    // </h1>
  );
}

