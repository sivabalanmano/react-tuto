import{  Routes,Route  } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Editpost from './Editpost';
import { DataProvider } from './contaxt/DataContaxt';

function App() {
  
  return (
    <div className="App">
      <DataProvider>
      <Header />
      <Nav/>

      <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="post">
              <Route index element ={<NewPost/>}/>
             <Route path=":id" element ={<PostPage/>}/>
          </Route>
          <Route path='/edit/:id' element={<Editpost />}/>
          <Route path="/about" element ={<About/>}/>
          <Route path="*" element ={<Missing/>}/>
      </Routes>
      <Footer/>
      </DataProvider>
      
    </div>
  );
}

export default App;
