import './App.css';
import Products from './components/Products';
import Users from './components/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { About } from './components/About';
import { Blogs } from './components/Blogs';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';
import ContactUs from './components/ContactUs';
import { Likes } from './components/Likes';

function App() {
  return (
    <div className="container">
      

      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <Layout /> } >
            <Route index element={ <Dashboard />} />
            <Route path="about-us" element={ <About />} />
            <Route path="blogs" element={ <Blogs />} />
            <Route path="contact" element={< ContactUs /> } />
            <Route path="products" element={< Products /> } />
            <Route path="users" element={< Users /> } />
            <Route path="likes" element={ <Likes />} />
            <Route path="*" element={< NotFound /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;