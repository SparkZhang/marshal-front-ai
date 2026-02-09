import React, { useState } from 'react';
import { Row, Col, Card, Typography, Button, Table, InputNumber, Checkbox, Tag } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Cart = () => {
  // 模拟购物车数据
  const [cartItems, setCartItems] = useState([
    { id: 1, name: '智能手机 X', price: 5999, image: 'https://via.placeholder.com/100x100?text=Product+1', quantity: 1, selected: true, color: '深空灰', storage: '256GB' },
    { id: 2, name: '无线耳机', price: 1299, image: 'https://via.placeholder.com/100x100?text=Product+2', quantity: 2, selected: true, color: '白色', storage: '标配' },
    { id: 3, name: '智能手表', price: 2999, image: 'https://via.placeholder.com/100x100?text=Product+3', quantity: 1, selected: false, color: '黑色', storage: '42mm' },
  ]);

  const [selectedAll, setSelectedAll] = useState(true);

  // 计算总价
  const calculateTotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 计算已选商品数量
  const calculateSelectedCount = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((count, item) => count + item.quantity, 0);
  };

  // 切换单个商品选中状态
  const toggleItemSelected = (id) => {
    const newItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setCartItems(newItems);
    setSelectedAll(newItems.every(item => item.selected));
  };

  // 切换全选状态
  const toggleSelectAll = (checked) => {
    setSelectedAll(checked);
    setCartItems(cartItems.map(item => ({ ...item, selected: checked })));
  };

  // 更新商品数量
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  // 删除商品
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // 表格列配置
  const columns = [
    {
      title: (
        <Checkbox checked={selectedAll} onChange={(e) => toggleSelectAll(e.target.checked)}>
          全选
        </Checkbox>
      ),
      dataIndex: 'selected',
      key: 'selected',
      render: (selected, record) => (
        <Checkbox checked={selected} onChange={() => toggleItemSelected(record.id)} />
      ),
    },
    {
      title: '商品信息',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={record.image} alt={name} style={{ width: 80, height: 80, marginRight: 16 }} />
          <div>
            <Text strong>{name}</Text>
            <div>
              <Text style={{ marginRight: 16 }}>颜色：{record.color}</Text>
              <Text>存储：{record.storage}</Text>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Text style={{ color: '#ff4d4f', fontWeight: 'bold' }}>¥{price}</Text>,
    },
    {
      title: '数量',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => updateQuantity(record.id, quantity - 1)}
            disabled={quantity <= 1}
          />
          <InputNumber min={1} value={quantity} onChange={(val) => updateQuantity(record.id, val)} style={{ width: 80, margin: '0 8px' }} />
          <Button type="text" icon={<PlusOutlined />} onClick={() => updateQuantity(record.id, quantity + 1)} />
        </div>
      ),
    },
    {
      title: '小计',
      dataIndex: 'total',
      key: 'total',
      render: (_, record) => <Text style={{ color: '#ff4d4f', fontWeight: 'bold' }}>¥{record.price * record.quantity}</Text>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Button type="text" danger icon={<DeleteOutlined />} onClick={() => removeItem(record.id)}>
          删除
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginBottom: 24 }}>
        <ShoppingCartOutlined style={{ marginRight: 8 }} />
        我的购物车
      </Title>

      {cartItems.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '48px 0' }}>
          <ShoppingCartOutlined style={{ fontSize: 48, color: '#d9d9d9', marginBottom: 16 }} />
          <Text style={{ fontSize: 18, color: '#999' }}>购物车是空的，快去选购商品吧！</Text>
          <div style={{ marginTop: 24 }}>
            <Button type="primary">去购物</Button>
          </div>
        </Card>
      ) : (
        <>
          <Card style={{ marginBottom: 24 }}>
            <Table
              columns={columns}
              dataSource={cartItems}
              rowKey="id"
              pagination={false}
              bordered
            />
          </Card>

          <Card style={{ position: 'sticky', bottom: 0, backgroundColor: '#fff', zIndex: 10 }}>
            <Row justify="space-between" align="middle">
              <Col>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox checked={selectedAll} onChange={(e) => toggleSelectAll(e.target.checked)}>
                    全选
                  </Checkbox>
                  <Text style={{ marginLeft: 16 }}>已选 {calculateSelectedCount()} 件商品</Text>
                </div>
              </Col>
              <Col style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: 24, textAlign: 'right' }}>
                  <Text>合计：</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff4d4f' }}>¥{calculateTotal()}</Text>
                  <Text style={{ display: 'block', color: '#999', marginTop: 4 }}>不含运费</Text>
                </div>
                <Button type="primary" size="large" style={{ width: 150, height: 48, fontSize: 16 }}>
                  去结算
                </Button>
              </Col>
            </Row>
          </Card>
        </>
      )}
    </div>
  );
};

export default Cart;