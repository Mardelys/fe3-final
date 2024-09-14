import AppRouter from './AppRouter';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <Footer />
      
    </div>
  );
}

export default App;
