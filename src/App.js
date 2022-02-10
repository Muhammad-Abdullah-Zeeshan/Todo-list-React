import './App.css';
import Header from './MyComponents/Header/Header';
import TodoContainer from './MyComponents/TodoContainer/TodoContainer';
import Footer from './MyComponents/Footer/footer'


function App() {
  return (
    <>
      <div className="container">
        <div className="components">
          <Header/>
          <TodoContainer/>
        </div>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
