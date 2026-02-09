import React from 'react';
import { Layout, Card, Form, Input, Button, Checkbox, Typography, Divider, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
const { Content } = Layout;

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  // 登录表单提交处理
  const handleLogin = (values) => {
    console.log('登录表单值:', values);
    // 这里可以添加实际的登录逻辑，比如调用API验证
    // 模拟登录成功
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', values.username);
    // 登录成功后跳转到首页
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ maxWidth: 1200, width: '100%' }}>
          <Row gutter={[48, 0]} align="middle">
            <Col xs={24} lg={14} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 32 }}>
                <Title level={2} style={{ color: '#ff4d4f', marginBottom: 16 }}>电商平台</Title>
                <Text style={{ fontSize: 18, color: '#666' }}>轻松购物，享受生活</Text>
              </div>
              <div style={{ maxWidth: 400, margin: '0 auto' }}>
                <img 
                  src="https://via.placeholder.com/400x300?text=Shopping+Illustration" 
                  alt="购物插图" 
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>
            </Col>
            
            <Col xs={24} lg={10}>
              <Card style={{ borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
                <div style={{ marginBottom: 24 }}>
                  <Title level={3} style={{ margin: 0 }}>登录</Title>
                  <Text style={{ color: '#666' }}>欢迎回来，请登录您的账户</Text>
                </div>

                <Form
                  form={form}
                  name="login"
                  onFinish={handleLogin}
                  layout="vertical"
                >
                  <Form.Item
                    name="username"
                    label="用户名"
                    rules={[{ required: true, message: '请输入用户名' }]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="请输入用户名"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="密码"
                    rules={[{ required: true, message: '请输入密码' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="请输入密码"
                      size="large"
                      iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 24 }}>
                    <Row justify="space-between" align="middle">
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                      </Form.Item>
                      <Link to="/forgot-password" style={{ color: '#1890ff' }}>
                        忘记密码？
                      </Link>
                    </Row>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block style={{ height: 40 }}>
                      登录
                    </Button>
                  </Form.Item>

                  <Divider>
                    <Text style={{ color: '#999' }}>其他登录方式</Text>
                  </Divider>

                  <Row gutter={[16, 0]} justify="center">
                    <Col>
                      <Button type="default" size="large" icon={<UserOutlined />} style={{ width: 100 }}>
                        短信登录
                      </Button>
                    </Col>
                    <Col>
                      <Button type="default" size="large" icon={<LockOutlined />} style={{ width: 100 }}>
                        扫码登录
                      </Button>
                    </Col>
                  </Row>

                  <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text>还没有账户？</Text>
                    <Link to="/register" style={{ color: '#1890ff', marginLeft: 4 }}>
                      立即注册
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;