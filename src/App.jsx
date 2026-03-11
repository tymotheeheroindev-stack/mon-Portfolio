import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard.jsx'; // On va le créer
import Login from './pages/Login'; // On va le créer

const ProtectedRoute = ({ children }) => {
  // On vérifie si une session est active dans le stockage local
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    // Si pas authentifié, on redirige vers login
    return <Navigate to="/login" replace />;
  }
  return children;
};

function Portfolio() {
  return (
    <div className="bg-[#0B1120] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-8 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Page Publique */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Pages Admin (à protéger plus tard) */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
  <ProtectedRoute>
    <AdminDashboard />
  </ProtectedRoute>
} />
        
        {/* Redirection si page inconnue */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;