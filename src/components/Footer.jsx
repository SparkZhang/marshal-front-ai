import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, WechatOutlined, WeiboOutlined, QqOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  // 页脚导航数据
  const footerLinks = [
    {
      title: '购物指南',
      links: [
        { name: '注册流程', href: '#' },
        { name: '购物流程', href: '#' },
        { name: '支付方式', href: '#' },
        { name: '配送方式', href: '#' },
        { name: '常见问题', href: '#' },
      ],
    },
    {
      title: '会员中心',
      links: [
        { name: '个人中心', href: '#' },
        { name: '我的订单', href: '#' },
        { name: '我的收藏', href: '#' },
        { name: '我的优惠券', href: '#' },
        { name: '账户设置', href: '#' },
      ],
    },
    {
      title: '关于我们',
      links: [
        { name: '公司简介', href: '#' },
        { name: '联系我们', href: '#' },
        { name: '招聘信息', href: '#' },
        { name: '媒体报道', href: '#' },
        { name: '隐私政策', href: '#' },
      ],
    },
    {
      title: '客户服务',
      links: [
        { name: '客服中心', href: '#' },
        { name: '售后政策', href: '#' },
        { name: '退款说明', href: '#' },
        { name: '投诉建议', href: '#' },
        { name: '在线反馈', href: '#' },
      ],
    },
  ];

  // 联系信息
  const contactInfo = [
    { icon: <PhoneOutlined />, text: '400-123-4567', description: '周一至周日 9:00-21:00' },
    { icon: <MailOutlined />, text: 'service@example.com' },
    { icon: <EnvironmentOutlined />, text: '北京市朝阳区某某大厦', description: '邮编：100000' },
  ];

  return (
    <Footer style={{ backgroundColor: '#000', color: '#fff', padding: '30px 0 20px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Row gutter={[48, 24]}>
          {/* 导航链接 */}
          {footerLinks.map((group, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <h4 style={{ color: '#fff', marginBottom: 16, fontSize: 16, fontWeight: 500 }}>{group.title}</h4>
              <Space direction="vertical" size={8} style={{ width: '100%' }}>
                {group.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href} style={{ color: '#999', display: 'block', fontSize: 14 }}>
                    {link.name}
                  </Link>
                ))}
              </Space>
            </Col>
          ))}

          {/* 联系信息 */}
          <Col xs={24} sm={12} md={6}>
            <h4 style={{ color: '#fff', marginBottom: 16, fontSize: 16, fontWeight: 500 }}>联系我们</h4>
            <Space direction="vertical" size={12} style={{ width: '100%' }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ marginRight: 12, color: '#ff4d4f', fontSize: 18 }}>{info.icon}</div>
                  <div>
                    <Text style={{ color: '#fff', fontSize: 14 }}>{info.text}</Text>
                    {info.description && <Text style={{ color: '#999', display: 'block', marginTop: 2, fontSize: 12 }}>{info.description}</Text>}
                  </div>
                </div>
              ))}
            </Space>

            {/* 社交媒体 */}
            <div style={{ marginTop: 16 }}>
              <h5 style={{ color: '#fff', marginBottom: 12, fontSize: 14, fontWeight: 500 }}>关注我们</h5>
              <Space size="middle" style={{ fontSize: 20 }}>
                <WechatOutlined style={{ color: '#52c41a' }} />
                <WeiboOutlined style={{ color: '#ff4d4f' }} />
                <QqOutlined style={{ color: '#1890ff' }} />
              </Space>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: '#333', margin: '30px 0' }} />

        {/* 版权信息 */}
        <div style={{ textAlign: 'center', color: '#666' }}>
          <Text style={{ fontSize: 14 }}>© 2024 电商平台. All Rights Reserved.</Text>
          <br />
          <Text style={{ marginTop: 8, display: 'block', fontSize: 12 }}>京ICP备12345678号 | 京公网安备110101000000号</Text>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;