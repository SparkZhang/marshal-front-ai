import React from 'react';
import { Row, Col, Card, Typography, Avatar, List, Button, Badge, Statistic } from 'antd';
import { UserOutlined, UnorderedListOutlined, ShoppingCartOutlined, HeartOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Meta } = Card;

const UserCenter = () => {
  // 模拟用户信息
  const user = {
    name: '张三',
    avatar: 'https://via.placeholder.com/100x100?text=User+Avatar',
    email: 'zhangsan@example.com',
    phone: '138****8888',
    memberLevel: '黄金会员',
    points: 1250,
    couponCount: 5,
  };

  // 模拟订单数据
  const orders = [
    { id: 1, status: '待付款', date: '2024-01-15', product: '智能手机 X', price: 5999, image: 'https://via.placeholder.com/80x80?text=Order+1' },
    { id: 2, status: '待发货', date: '2024-01-14', product: '无线耳机', price: 1299, image: 'https://via.placeholder.com/80x80?text=Order+2' },
    { id: 3, status: '待收货', date: '2024-01-13', product: '智能手表', price: 2999, image: 'https://via.placeholder.com/80x80?text=Order+3' },
    { id: 4, status: '已完成', date: '2024-01-10', product: '蓝牙音箱', price: 899, image: 'https://via.placeholder.com/80x80?text=Order+4' },
  ];

  // 功能导航数据
  const navItems = [
    { key: 'orders', icon: <UnorderedListOutlined />, label: '我的订单', count: 3 },
    { key: 'cart', icon: <ShoppingCartOutlined />, label: '购物车', count: 5 },
    { key: 'favorites', icon: <HeartOutlined />, label: '我的收藏', count: 8 },
    { key: 'settings', icon: <SettingOutlined />, label: '账户设置' },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: 24 }}>用户中心</Title>

      {/* 用户信息卡片 */}
      <Card style={{ marginBottom: 24 }}>
        <Row align="middle">
          <Col xs={24} sm={6} md={4}>
            <Avatar size={100} icon={<UserOutlined />} src={user.avatar} />
          </Col>
          <Col xs={24} sm={18} md={20} style={{ marginLeft: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <Title level={3} style={{ margin: 0, marginRight: 16 }}>{user.name}</Title>
              <Badge color="gold" text={user.memberLevel} />
              <Button type="primary" size="small" style={{ marginLeft: 24 }}>会员中心</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              <div>
                <Text strong>邮箱：</Text>{user.email}
              </div>
              <div>
                <Text strong>手机：</Text>{user.phone}
              </div>
              <div>
                <Text strong>积分：</Text>{user.points}
              </div>
              <div>
                <Text strong>优惠券：</Text>{user.couponCount}张
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      {/* 功能导航 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {navItems.map(item => (
          <Col xs={12} sm={6} key={item.key}>
            <Card hoverable>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ fontSize: 24, marginRight: 16, color: '#1890ff' }}>
                    {item.icon}
                  </div>
                  <Text strong>{item.label}</Text>
                </div>
                {item.count && (
                  <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} />
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 最新订单 */}
      <Card title="最新订单" extra={<a href="#">查看全部</a>} style={{ marginBottom: 24 }}>
        <List
          dataSource={orders}
          renderItem={item => (
            <List.Item
              actions={[
                <Button key="pay" size="small" type={item.status === '待付款' ? 'primary' : 'default'}>
                  {item.status === '待付款' ? '立即付款' : '查看详情'}
                </Button>
              ]}
            >
              <List.Item.Meta
                avatar={<img src={item.image} alt={item.product} style={{ width: 64, height: 64 }} />}
                title={<a href="#">{item.product}</a>}
                description={
                  <div>
                    <div>{item.date}</div>
                    <Badge status={
                      item.status === '待付款' ? 'error' : 
                      item.status === '待发货' ? 'processing' :
                      item.status === '待收货' ? 'warning' : 'success'
                    } text={item.status} />
                  </div>
                }
              />
              <div>
                <Text style={{ color: '#ff4d4f', fontWeight: 'bold' }}>¥{item.price}</Text>
              </div>
            </List.Item>
          )}
        />
      </Card>

      {/* 统计数据 */}
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="待付款"
              value={1}
              valueStyle={{ color: '#ff4d4f' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="待发货"
              value={1}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="待收货"
              value={1}
              valueStyle={{ color: '#faad14' }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card>
            <Statistic
              title="已完成"
              value={15}
              valueStyle={{ color: '#52c41a' }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserCenter;