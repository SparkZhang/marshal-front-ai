import React, { useState } from 'react';
import { Layout, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, WechatOutlined, WeiboOutlined, QqOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

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
    <Footer style={{ backgroundColor: '#000', color: '#fff', height: '5vh', minHeight: '40px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* 导航链接 - 水平排列，带悬停显示内容 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {footerLinks.map((group, index) => (
            <Tooltip
              key={index}
              title={
                <div style={{ padding: '12px', minWidth: '150px' }}>
                  {group.links.map((link, linkIndex) => (
                    <div key={linkIndex} style={{ marginBottom: '8px' }}>
                      <Link href={link.href} style={{ color: '#fff', fontSize: '12px', display: 'block' }}>
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              }
              placement="top"
              color="#333"
            >
              <Link href="#" style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>
                {group.title}
              </Link>
            </Tooltip>
          ))}
          
          {/* 联系我们带悬停显示内容 */}
          <Tooltip
            title={
              <div style={{ padding: '12px', minWidth: '200px' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#ff4d4f' }}>{info.icon}</span>
                    <span style={{ color: '#fff', fontSize: '12px' }}>{info.text}</span>
                  </div>
                ))}
              </div>
            }
            placement="top"
            color="#333"
          >
            <Link href="#" style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>联系我们</Link>
          </Tooltip>
        </div>
        
        {/* 社交媒体 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <WechatOutlined style={{ color: '#52c41a', fontSize: 20 }} />
          <WeiboOutlined style={{ color: '#ff4d4f', fontSize: 20 }} />
          <QqOutlined style={{ color: '#1890ff', fontSize: 20 }} />
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;