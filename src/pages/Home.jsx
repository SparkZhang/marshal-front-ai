import React from 'react';
import { Carousel, Row, Col, Card, Typography } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Home = () => {
  // 模拟轮播图数据
  const carouselItems = [
    { id: 1, image: 'https://via.placeholder.com/1200x400?text=Promotion+Banner+1', alt: 'Banner 1' },
    { id: 2, image: 'https://via.placeholder.com/1200x400?text=Promotion+Banner+2', alt: 'Banner 2' },
    { id: 3, image: 'https://via.placeholder.com/1200x400?text=Promotion+Banner+3', alt: 'Banner 3' },
  ];

  // 模拟热门商品数据
  const hotProducts = [
    { id: 1, name: '智能手机 X', price: 5999, image: 'https://via.placeholder.com/200x200?text=Product+1', rating: 4.5 },
    { id: 2, name: '笔记本电脑 Pro', price: 9999, image: 'https://via.placeholder.com/200x200?text=Product+2', rating: 4.7 },
    { id: 3, name: '无线耳机', price: 1299, image: 'https://via.placeholder.com/200x200?text=Product+3', rating: 4.3 },
    { id: 4, name: '智能手表', price: 2999, image: 'https://via.placeholder.com/200x200?text=Product+4', rating: 4.6 },
    { id: 5, name: '平板电脑', price: 3999, image: 'https://via.placeholder.com/200x200?text=Product+5', rating: 4.4 },
    { id: 6, name: '蓝牙音箱', price: 899, image: 'https://via.placeholder.com/200x200?text=Product+6', rating: 4.2 },
  ];

  return (
    <div>
      {/* 轮播图 */}
      <Carousel autoplay style={{ marginBottom: 32 }}>
        {carouselItems.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Carousel>

      {/* 热门商品 */}
      <div style={{ padding: '0 24px' }}>
        <Title level={2} style={{ marginBottom: 24 }}>热门商品</Title>
        <Row gutter={[16, 16]}>
          {hotProducts.map(product => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
                actions={[
                  <HeartOutlined key="heart" />,
                  <StarOutlined key="star" />,
                  <ShoppingCartOutlined key="cart" />,
                ]}
              >
                <Card.Meta title={product.name} description={`¥${product.price}`} />
                <div style={{ marginTop: 8 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarOutlined
                      key={i}
                      style={{ color: i < Math.floor(product.rating) ? '#ffd700' : '#d9d9d9' }}
                    />
                  ))}
                  <Text style={{ marginLeft: 8 }}>{product.rating}</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;