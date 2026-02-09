import React, { useState } from 'react';
import { Row, Col, Card, Typography, Input, Select, Radio, Checkbox, Button, Pagination } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, StarOutlined, SearchOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const ProductList = () => {
  // 模拟商品数据
  const products = [
    { id: 1, name: '智能手机 X', price: 5999, image: 'https://via.placeholder.com/200x200?text=Product+1', rating: 4.5, category: '手机' },
    { id: 2, name: '笔记本电脑 Pro', price: 9999, image: 'https://via.placeholder.com/200x200?text=Product+2', rating: 4.7, category: '电脑' },
    { id: 3, name: '无线耳机', price: 1299, image: 'https://via.placeholder.com/200x200?text=Product+3', rating: 4.3, category: '耳机' },
    { id: 4, name: '智能手表', price: 2999, image: 'https://via.placeholder.com/200x200?text=Product+4', rating: 4.6, category: '手表' },
    { id: 5, name: '平板电脑', price: 3999, image: 'https://via.placeholder.com/200x200?text=Product+5', rating: 4.4, category: '平板' },
    { id: 6, name: '蓝牙音箱', price: 899, image: 'https://via.placeholder.com/200x200?text=Product+6', rating: 4.2, category: '音箱' },
    { id: 7, name: '游戏手机', price: 7999, image: 'https://via.placeholder.com/200x200?text=Product+7', rating: 4.8, category: '手机' },
    { id: 8, name: '轻薄本', price: 6999, image: 'https://via.placeholder.com/200x200?text=Product+8', rating: 4.5, category: '电脑' },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('default');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([]);

  const handleSearch = (value) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSort = (value) => {
    setSortBy(value);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (value === 'price-asc') return a.price - b.price;
      if (value === 'price-desc') return b.price - a.price;
      if (value === 'rating') return b.rating - a.rating;
      return 0;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        {/* 左侧筛选 */}
        <Col xs={24} md={6}>
          <Card title="筛选条件" style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <Text strong>分类</Text>
              <Select
                style={{ width: '100%', marginTop: 8 }}
                placeholder="选择分类"
                onChange={setCategory}
                value={category}
              >
                <Option value="all">全部</Option>
                <Option value="手机">手机</Option>
                <Option value="电脑">电脑</Option>
                <Option value="耳机">耳机</Option>
                <Option value="手表">手表</Option>
              </Select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <Text strong>价格范围</Text>
              <div style={{ marginTop: 8 }}>
                <Checkbox.Group onChange={setPriceRange}>
                  <div><Checkbox value="0-1000">0-1000元</Checkbox></div>
                  <div><Checkbox value="1000-3000">1000-3000元</Checkbox></div>
                  <div><Checkbox value="3000-5000">3000-5000元</Checkbox></div>
                  <div><Checkbox value="5000+">5000元以上</Checkbox></div>
                </Checkbox.Group>
              </div>
            </div>

            <Button type="primary" block>应用筛选</Button>
          </Card>
        </Col>

        {/* 右侧商品列表 */}
        <Col xs={24} md={18}>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Search
              placeholder="搜索商品"
              allowClear
              enterButton={<SearchOutlined />}
              size="large"
              onSearch={handleSearch}
              style={{ width: 300 }}
            />

            <Select
              defaultValue="default"
              style={{ width: 150 }}
              onChange={handleSort}
            >
              <Option value="default">默认排序</Option>
              <Option value="price-asc">价格从低到高</Option>
              <Option value="price-desc">价格从高到低</Option>
              <Option value="rating">销量从高到低</Option>
            </Select>
          </div>

          <Row gutter={[16, 16]}>
            {filteredProducts.map(product => (
              <Col xs={24} sm={12} md={8} key={product.id}>
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

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Pagination current={1} total={filteredProducts.length} pageSize={8} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;