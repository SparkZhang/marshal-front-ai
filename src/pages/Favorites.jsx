import React, { useState } from 'react';
import { List, Card, Typography, Button, Empty, Badge, Modal } from 'antd';
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, DeleteOutlined, CheckOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Favorites = () => {
  const navigate = useNavigate();
  
  // 模拟收藏商品数据
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: '智能手机 X',
      price: 5999,
      image: 'https://via.placeholder.com/200x200?text=Smartphone+X',
      category: '手机数码',
      tags: ['新品', '热销'],
      isFavorite: true
    },
    {
      id: 2,
      name: '无线耳机 Pro',
      price: 1299,
      image: 'https://via.placeholder.com/200x200?text=Wireless+Headphones',
      category: '音频设备',
      tags: ['限时优惠'],
      isFavorite: true
    },
    {
      id: 3,
      name: '智能手表 Ultra',
      price: 2999,
      image: 'https://via.placeholder.com/200x200?text=Smart+Watch',
      category: '智能穿戴',
      tags: ['新品'],
      isFavorite: true
    },
    {
      id: 4,
      name: '轻薄笔记本 Pro',
      price: 8999,
      image: 'https://via.placeholder.com/200x200?text=Laptop',
      category: '电脑办公',
      tags: ['热销'],
      isFavorite: true
    },
    {
      id: 5,
      name: '无线充电器',
      price: 299,
      image: 'https://via.placeholder.com/200x200?text=Wireless+Charger',
      category: '手机配件',
      tags: [],
      isFavorite: true
    },
    {
      id: 6,
      name: '运动手环',
      price: 399,
      image: 'https://via.placeholder.com/200x200?text=Fitness+Band',
      category: '智能穿戴',
      tags: ['限时优惠'],
      isFavorite: true
    }
  ]);

  // 切换收藏状态
  const toggleFavorite = (id) => {
    Modal.confirm({
      title: '取消收藏',
      content: '确定要取消收藏这个商品吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        setFavorites(favorites.map(item => 
          item.id === id ? { ...item, isFavorite: false } : item
        ));
      }
    });
  };

  // 添加到购物车
  const addToCart = (product) => {
    // 这里可以实现添加到购物车的逻辑
    Modal.success({
      title: '添加成功',
      content: `${product.name} 已添加到购物车`,
      okText: '去购物车',
      cancelText: '继续浏览',
      onOk: () => navigate('/cart')
    });
  };

  // 查看商品详情
  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  // 过滤出收藏的商品
  const favoriteItems = favorites.filter(item => item.isFavorite);

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        <HeartOutlined style={{ marginRight: 8 }} />
        我的收藏
      </Title>

      {favoriteItems.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div>
              <Text style={{ fontSize: 16, marginBottom: 8, display: 'block' }}>暂无收藏商品</Text>
              <Button type="primary" onClick={() => navigate('/')}>去购物</Button>
            </div>
          }
        />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={favoriteItems}
          renderItem={item => (
            <List.Item>
              <Card hoverable>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      type="text"
                      icon={<HeartFilled />}
                      style={{ fontSize: 24, color: '#ff4d4f', marginRight: 16 }}
                      onClick={() => toggleFavorite(item.id)}
                    />
                    <div style={{ width: 120, height: 120, marginRight: 24, position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => viewProduct(item.id)}
                      />
                      <div style={{ position: 'absolute', top: 8, left: 8 }}>
                        {item.tags.map((tag, index) => (
                          <Badge.Ribbon
                            key={index}
                            text={tag}
                            color={tag === '新品' ? '#1890ff' : tag === '热销' ? '#52c41a' : '#ff7875'}
                          />
                        ))}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <Text
                        strong
                        style={{ fontSize: 18, cursor: 'pointer', marginBottom: 8, display: 'block' }}
                        onClick={() => viewProduct(item.id)}
                      >
                        {item.name}
                      </Text>
                      <div style={{ marginBottom: 16 }}>
                        <Text type="secondary" style={{ marginRight: 16 }}>{item.category}</Text>
                      </div>
                      <Text style={{ color: '#ff4d4f', fontWeight: 'bold', fontSize: 24, marginBottom: 8, display: 'block' }}>¥{item.price}</Text>
                      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#faad14', marginRight: 8 }}>★★★★☆</span>
                        <Text type="secondary">4.7</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <Button
                          type="text"
                          icon={<HeartFilled />}
                          style={{ fontSize: 20, color: '#ff4d4f' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id);
                          }}
                        >
                          收藏
                        </Button>
                        <Button
                          type="text"
                          icon={<StarOutlined />}
                          style={{ fontSize: 20, color: '#faad14' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // 这里可以实现评分功能
                            Modal.info({ title: '评分', content: '评分功能开发中' });
                          }}
                        >
                          评分
                        </Button>
                        <Button
                          type="text"
                          icon={<ShoppingCartOutlined />}
                          style={{ fontSize: 20, color: '#1890ff' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                        >
                          购物车
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Button
                      icon={<ShoppingCartOutlined />}
                      type="primary"
                      onClick={() => addToCart(item)}
                    >
                      加入购物车
                    </Button>
                    <Button
                      icon={<CheckOutlined />}
                      type="default"
                      onClick={() => viewProduct(item.id)}
                    >
                      查看详情
                    </Button>
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

export default Favorites;