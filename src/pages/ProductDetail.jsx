import React, { useState } from 'react';
import { Row, Col, Card, Typography, Button, Image, Carousel, Select, InputNumber, Tag, Rate, Tabs } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const ProductDetail = () => {
  // 模拟商品详情数据
  const product = {
    id: 1,
    name: '智能手机 X',
    price: 5999,
    originalPrice: 6999,
    image: 'https://via.placeholder.com/400x400?text=Product+Detail',
    images: [
      'https://via.placeholder.com/400x400?text=Image+1',
      'https://via.placeholder.com/400x400?text=Image+2',
      'https://via.placeholder.com/400x400?text=Image+3',
      'https://via.placeholder.com/400x400?text=Image+4',
    ],
    rating: 4.5,
    reviews: 1256,
    description: '这是一款高性能智能手机，拥有强大的处理器和出色的摄像头系统。',
    specifications: [
      { name: '屏幕尺寸', value: '6.7英寸' },
      { name: '处理器', value: '骁龙 8 Gen 2' },
      { name: '内存', value: '12GB' },
      { name: '存储', value: '256GB' },
      { name: '电池容量', value: '5000mAh' },
      { name: '摄像头', value: '50MP + 12MP + 12MP' },
    ],
    tags: ['新品', '热销', '限时优惠'],
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('深空灰');
  const [selectedStorage, setSelectedStorage] = useState('256GB');

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[24, 24]}>
        {/* 商品图片 */}
        <Col xs={24} md={12}>
          <Carousel dots={true} style={{ marginBottom: 16 }}>
            {product.images.map((img, index) => (
              <div key={index}>
                <Image src={img} alt={`Product image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
              </div>
            ))}
          </Carousel>
          <Row gutter={[8, 8]}>
            {product.images.map((img, index) => (
              <Col span={6} key={index}>
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* 商品信息 */}
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            {product.tags.map((tag, index) => (
              <Tag key={index} color="red" style={{ marginRight: 8 }}>{tag}</Tag>
            ))}
          </div>

          <Title level={2} style={{ marginBottom: 8 }}>{product.name}</Title>

          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center' }}>
            <Rate disabled value={product.rating} style={{ marginRight: 8 }} />
            <Text>{product.rating} ({product.reviews}条评价)</Text>
          </div>

          <div style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4f' }}>¥{product.price}</Text>
            <Text style={{ marginLeft: 16, textDecoration: 'line-through', color: '#999' }}>¥{product.originalPrice}</Text>
            <Text style={{ marginLeft: 16, color: '#ff4d4f', backgroundColor: '#fff1f0', padding: '2px 8px', borderRadius: 4 }}>省¥{product.originalPrice - product.price}</Text>
          </div>

          <Card style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <Text strong style={{ display: 'inline-block', width: 80 }}>颜色：</Text>
              <Select
                value={selectedColor}
                style={{ width: 120, marginRight: 16 }}
                onChange={setSelectedColor}
              >
                <Option value="深空灰">深空灰</Option>
                <Option value="银色">银色</Option>
                <Option value="金色">金色</Option>
              </Select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <Text strong style={{ display: 'inline-block', width: 80 }}>存储：</Text>
              <Select
                value={selectedStorage}
                style={{ width: 120, marginRight: 16 }}
                onChange={setSelectedStorage}
              >
                <Option value="128GB">128GB</Option>
                <Option value="256GB">256GB</Option>
                <Option value="512GB">512GB</Option>
              </Select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <Text strong style={{ display: 'inline-block', width: 80 }}>数量：</Text>
              <InputNumber min={1} max={10} defaultValue={1} onChange={setQuantity} />
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <Button type="primary" size="large" icon={<ShoppingCartOutlined />} style={{ flex: 1 }}>
                加入购物车
              </Button>
              <Button type="default" size="large" icon={<HeartOutlined />}>
                收藏
              </Button>
              <Button type="default" size="large" icon={<ShareAltOutlined />}>
                分享
              </Button>
            </div>
          </Card>

          <div style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 4 }}>
            <Paragraph style={{ margin: 0 }}><Text strong>配送信息：</Text>全国包邮，预计3天内送达</Paragraph>
            <Paragraph style={{ margin: '8px 0 0 0' }}><Text strong>售后保障：</Text>7天无理由退换货，全国联保</Paragraph>
          </div>
        </Col>
      </Row>

      {/* 商品详情标签页 */}
      <div style={{ marginTop: 32 }}>
        <Tabs defaultActiveKey="1" size="large">
          <TabPane tab="商品详情" key="1">
            <Card>
              <Paragraph>{product.description}</Paragraph>
              <Title level={4}>商品规格</Title>
              <Row gutter={[16, 16]}>
                {product.specifications.map((spec, index) => (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <Text strong>{spec.name}：</Text>{spec.value}
                  </Col>
                ))}
              </Row>
            </Card>
          </TabPane>
          <TabPane tab="用户评价" key="2">
            <Card>
              <div style={{ marginBottom: 24 }}>
                <Text strong style={{ fontSize: 18 }}>商品评分</Text>
                <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
                  <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#ff4d4f', marginRight: 16 }}>{product.rating}</Text>
                  <Rate disabled value={product.rating} style={{ fontSize: 24 }} />
                  <Text style={{ marginLeft: 16 }}>({product.reviews}条评价)</Text>
                </div>
              </div>
              <Text>评价内容将在此显示...</Text>
            </Card>
          </TabPane>
          <TabPane tab="售后服务" key="3">
            <Card>
              <Paragraph>保修政策：全国联保，享受三包服务</Paragraph>
              <Paragraph>质保时间：1年</Paragraph>
              <Paragraph>客服电话：400-123-4567</Paragraph>
              <Paragraph>详细内容：自购机日起（以购机发票为准），如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！</Paragraph>
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;