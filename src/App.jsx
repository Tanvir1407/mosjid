import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Main from "./admin/Main.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the Admin page */}
        <Route path="/admin/*" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
