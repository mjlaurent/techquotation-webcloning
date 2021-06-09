import './App.css';
import NavBar from './components/NavBar'
import SubHeader from './components/SubHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';
import FormsText from './components/FormsText';
import BannerBottom from './components/BannerBottom';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <SubHeader />
        <FormsText />
      </div>
        <Forms/>
      <div className="App">
        <BannerBottom/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
