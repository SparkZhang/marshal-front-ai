import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import UserCenter from './pages/UserCenter';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

const { Content } = Layout;

// 受保护路由组件
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();
  
  if (!isLoggedIn) {
    // 如果未登录，重定向到登录页，并保存当前位置以便登录后返回
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return children;
};

// 应用主组件
const AppContent = () => {
  const location = useLocation();
  
  // 检查是否是登录或注册页面
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {!isLoginPage && <Navbar />}
      <Content style={{ padding: 0, background: '#f5f5f5' }}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute><UserCenter /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </Content>
      {!isLoginPage && <Footer />}
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;