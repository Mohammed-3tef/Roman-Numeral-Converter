import './style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App flex justify-between flex-col content-center flex-wrap text-center min-h-[100vh] px-[0.75rem] bg-[#1b1b32] text-[#f5f6f7]">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
