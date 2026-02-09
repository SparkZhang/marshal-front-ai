import React, { useState } from 'react';
import { Row, Col, Card, Typography, List, Badge, Button, Switch, Empty } from 'antd';
import { BellOutlined, CheckOutlined, ShoppingCartOutlined, HeartOutlined, StarOutlined, ClockCircleOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const Notifications = () => {
  // 模拟通知数据
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: '订单状态更新',
      content: '您的订单 #123456 已发货，预计明天送达',
      time: '2026-02-10 14:30',
      read: false,
      icon: <ShoppingCartOutlined />
    },
    {
      id: 2,
      type: 'promotion',
      title: '限时优惠活动',
      content: '手机数码专区满1000减200，点击查看详情',
      time: '2026-02-10 10:15',
      read: true,
      icon: <StarOutlined />
    },
    {
      id: 3,
      type: 'system',
      title: '系统通知',
      content: '网站将于2月12日凌晨2点进行维护，期间部分功能可能无法使用',
      time: '2026-02-09 18:45',
      read: false,
      icon: <MessageOutlined />
    },
    {
      id: 4,
      type: 'favorite',
      title: '收藏商品降价',
      content: '您收藏的「智能手机 X」降价了，现在仅需5999元',
      time: '2026-02-09 15:20',
      read: true,
      icon: <HeartOutlined />
    },
    {
      id: 5,
      type: 'order',
      title: '订单已完成',
      content: '您的订单 #123456 已完成，感谢您的购买',
      time: '2026-02-08 16:30',
      read: true,
      icon: <CheckOutlined />
    },
    {
      id: 6,
      type: 'reminder',
      title: '活动即将结束',
      content: '「新年特惠活动」将在24小时后结束，抓住最后机会',
      time: '2026-02-08 10:00',
      read: true,
      icon: <ClockCircleOutlined />
    }
  ]);

  // 标记所有通知为已读
  const markAllAsRead = () => {
    setNotifications(notifications.map(item => ({ ...item, read: true })));
  };

  // 标记单个通知为已读
  const markAsRead = (id) => {
    setNotifications(notifications.map(item => 
      item.id === id ? { ...item, read: true } : item
    ));
  };

  // 删除通知
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(item => item.id !== id));
  };

  // 获取未读通知数量
  const unreadCount = notifications.filter(item => !item.read).length;

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        <BellOutlined style={{ marginRight: 8 }} />
        我的通知
      </Title>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Text strong>通知设置</Text>
              </div>
              <div>
                <Switch defaultChecked />
                <Text style={{ marginLeft: 8 }}>接收通知</Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={16}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Text strong>未读通知</Text>
                <Badge count={unreadCount} style={{ marginLeft: 8 }} />
              </div>
              <Button 
                type="link" 
                onClick={markAllAsRead} 
                disabled={unreadCount === 0}
              >
                全部标记为已读
              </Button>
            </div>
          </Card>
        </Col>
      </Row>

      {notifications.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div>
              <Text style={{ fontSize: 16, marginBottom: 8, display: 'block' }}>暂无通知</Text>
            </div>
          }
        />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={notifications}
          renderItem={item => (
            <List.Item>
              <Card 
                hoverable 
                style={{ borderLeft: `4px solid ${!item.read ? '#1890ff' : '#d9d9d9'}` }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Badge dot={!item.read} style={{ marginRight: 12 }}>
                      <div style={{ fontSize: 24, color: '#1890ff' }}>
                        {item.icon}
                      </div>
                    </Badge>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text strong style={{ fontSize: 16 }}>{item.title}</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>{item.time}</Text>
                      </div>
                      <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 8, color: '#666' }}>
                        {item.content}
                      </Paragraph>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {!item.read && (
                          <Button 
                            type="link" 
                            size="small" 
                            onClick={() => markAsRead(item.id)}
                            style={{ padding: 0, marginRight: 16 }}
                          >
                            标记已读
                          </Button>
                        )}
                        <Button 
                          type="link" 
                          size="small" 
                          danger
                          onClick={() => deleteNotification(item.id)}
                          style={{ padding: 0 }}
                        >
                          删除
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Notifications;