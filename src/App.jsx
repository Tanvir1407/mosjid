import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Main from './admin/main';
import PrivateRoute from './admin/pages/Authentication/PrivateRoute';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Admin page */}
        <Route path="/admin/*" element={<PrivateRoute><Main /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
