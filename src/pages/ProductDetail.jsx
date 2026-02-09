import React, { useState } from 'react';
import { Row, Col, Card, Typography, Button, Image, Carousel, Select, InputNumber, Tag, Rate, Tabs } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, ShareAltOutlined, StarOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 模拟商品数据库
  const products = [
    {
      id: 1,
      name: '智能手机 X',
      price: 5999,
      originalPrice: 6999,
      image: 'https://via.placeholder.com/400x400?text=Smartphone+X',
      images: [
        'https://via.placeholder.com/400x400?text=Smartphone+X+1',
        'https://via.placeholder.com/400x400?text=Smartphone+X+2',
        'https://via.placeholder.com/400x400?text=Smartphone+X+3',
        'https://via.placeholder.com/400x400?text=Smartphone+X+4',
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
    },
    {
      id: 2,
      name: '无线耳机 Pro',
      price: 1299,
      originalPrice: 1599,
      image: 'https://via.placeholder.com/400x400?text=Wireless+Headphones',
      images: [
        'https://via.placeholder.com/400x400?text=Headphones+1',
        'https://via.placeholder.com/400x400?text=Headphones+2',
        'https://via.placeholder.com/400x400?text=Headphones+3',
        'https://via.placeholder.com/400x400?text=Headphones+4',
      ],
      rating: 4.8,
      reviews: 2341,
      description: '这是一款高品质无线耳机，具有主动降噪功能和出色的音质表现。',
      specifications: [
        { name: '类型', value: '真无线' },
        { name: '降噪', value: '主动降噪' },
        { name: '续航', value: '30小时' },
        { name: '充电接口', value: 'USB-C' },
        { name: '防水等级', value: 'IPX4' },
        { name: '连接方式', value: '蓝牙5.3' },
      ],
      tags: ['限时优惠'],
    },
    {
      id: 3,
      name: '智能手表 Ultra',
      price: 2999,
      originalPrice: 3499,
      image: 'https://via.placeholder.com/400x400?text=Smart+Watch',
      images: [
        'https://via.placeholder.com/400x400?text=Watch+1',
        'https://via.placeholder.com/400x400?text=Watch+2',
        'https://via.placeholder.com/400x400?text=Watch+3',
        'https://via.placeholder.com/400x400?text=Watch+4',
      ],
      rating: 4.7,
      reviews: 1876,
      description: '这是一款功能强大的智能手表，支持多种运动模式和健康监测功能。',
      specifications: [
        { name: '屏幕尺寸', value: '1.92英寸' },
        { name: '处理器', value: '双芯处理器' },
        { name: '续航', value: '14天' },
        { name: '防水等级', value: '5ATM' },
        { name: '健康监测', value: '心率、血氧、睡眠' },
        { name: '运动模式', value: '100+种' },
      ],
      tags: ['新品'],
    },
    {
      id: 4,
      name: '轻薄笔记本 Pro',
      price: 8999,
      originalPrice: 9999,
      image: 'https://via.placeholder.com/400x400?text=Laptop',
      images: [
        'https://via.placeholder.com/400x400?text=Laptop+1',
        'https://via.placeholder.com/400x400?text=Laptop+2',
        'https://via.placeholder.com/400x400?text=Laptop+3',
        'https://via.placeholder.com/400x400?text=Laptop+4',
      ],
      rating: 4.6,
      reviews: 987,
      description: '这是一款轻薄便携的高性能笔记本电脑，适合办公和娱乐使用。',
      specifications: [
        { name: '屏幕尺寸', value: '14英寸' },
        { name: '处理器', value: 'Intel i7' },
        { name: '内存', value: '16GB' },
        { name: '存储', value: '512GB SSD' },
        { name: '显卡', value: 'MX570' },
        { name: '重量', value: '1.2kg' },
      ],
      tags: ['热销'],
    },
    {
      id: 5,
      name: '无线充电器',
      price: 299,
      originalPrice: 399,
      image: 'https://via.placeholder.com/400x400?text=Wireless+Charger',
      images: [
        'https://via.placeholder.com/400x400?text=Charger+1',
        'https://via.placeholder.com/400x400?text=Charger+2',
        'https://via.placeholder.com/400x400?text=Charger+3',
        'https://via.placeholder.com/400x400?text=Charger+4',
      ],
      rating: 4.4,
      reviews: 3210,
      description: '这是一款快速无线充电器，支持多种设备的快充功能。',
      specifications: [
        { name: '功率', value: '30W' },
        { name: '支持设备', value: '手机、手表、耳机' },
        { name: '充电接口', value: 'USB-C' },
        { name: '材质', value: '铝合金+硅胶' },
        { name: '尺寸', value: '100x100mm' },
        { name: '颜色', value: '黑色、白色' },
      ],
      tags: [],
    },
    {
      id: 6,
      name: '运动手环',
      price: 399,
      originalPrice: 499,
      image: 'https://via.placeholder.com/400x400?text=Fitness+Band',
      images: [
        'https://via.placeholder.com/400x400?text=Band+1',
        'https://via.placeholder.com/400x400?text=Band+2',
        'https://via.placeholder.com/400x400?text=Band+3',
        'https://via.placeholder.com/400x400?text=Band+4',
      ],
      rating: 4.5,
      reviews: 2567,
      description: '这是一款时尚的运动手环，支持心率监测和多种运动模式。',
      specifications: [
        { name: '屏幕尺寸', value: '1.47英寸' },
        { name: '续航', value: '15天' },
        { name: '防水等级', value: '5ATM' },
        { name: '健康监测', value: '心率、血氧、睡眠' },
        { name: '运动模式', value: '50+种' },
        { name: '连接方式', value: '蓝牙5.2' },
      ],
      tags: ['限时优惠'],
    }
  ];
  
  // 根据ID查找商品
  const product = products.find(p => p.id === parseInt(id));
  
  // 如果找不到商品，返回404提示
  if (!product) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <Title level={2}>商品不存在</Title>
        <Text>您访问的商品可能已下架或不存在</Text>
        <div style={{ marginTop: 24 }}>
          <Button type="primary" onClick={() => navigate('/')}>返回首页</Button>
        </div>
      </div>
    );
  }

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