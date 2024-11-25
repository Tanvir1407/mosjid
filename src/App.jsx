import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Admin page */}
      </Routes>
    </Router>
  );
};

export default App;
