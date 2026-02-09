import React from 'react';
import { Layout, Menu, Input, Button, Avatar, Badge, Dropdown, message } from 'antd';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, BellOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { Search } = Input;

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 导航菜单项
  const navItems = [
    { key: '/', label: <Link to="/">首页</Link> },
    { key: '/category', label: <Link to="/category">分类</Link> },
    { key: '/hot', label: <Link to="/hot">热销</Link> },
    { key: '/new', label: <Link to="/new">新品</Link> },
    { key: '/sale', label: <Link to="/sale">促销</Link> },
  ];

  // 检查登录状态
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const username = localStorage.getItem('username') || '用户';

  // 退出登录处理
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    message.success('退出登录成功');
    navigate('/');
  };

  // 用户下拉菜单
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/user">个人中心</Link>
      </Menu.Item>
      <Menu.Item key="orders">
        <Link to="/orders">我的订单</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorites">我的收藏</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/settings">账户设置</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout} icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', flexWrap: 'wrap' }}>
      {/* Logo */}
      <div style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4f' }}>
        <Link to="/">电商平台</Link>
      </div>

      {/* 主导航菜单 */}
      <Menu mode="horizontal" selectedKeys={[location.pathname]} items={navItems} style={{ flex: 1, justifyContent: 'center', borderBottom: 0 }} />

      {/* 搜索框 */}
      <Search
        placeholder="搜索商品"
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        style={{ width: 300, margin: '0 24px' }}
      />

      {/* 功能按钮区 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge count={5} style={{ marginRight: 24 }}>
          <Button type="text" icon={<HeartOutlined />} size="large" />
        </Badge>

        <Badge count={3} style={{ marginRight: 24 }}>
          <Link to="/cart">
            <Button type="text" icon={<ShoppingCartOutlined />} size="large" />
          </Link>
        </Badge>

        <Badge count={2} style={{ marginRight: 24 }}>
          <Button type="text" icon={<BellOutlined />} size="large" />
        </Badge>

        {/* 用户登录/头像区域 */}
        {isLoggedIn ? (
          <Dropdown overlay={userMenu} trigger={['click']}>
            <Button type="text" size="large" style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
              <span style={{ marginRight: 4 }}>{username}</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        ) : (
          <Button type="primary" size="large" onClick={() => navigate('/login')}>
            登录
          </Button>
        )}
      </div>
    </Header>
  );
};

export default Navbar;