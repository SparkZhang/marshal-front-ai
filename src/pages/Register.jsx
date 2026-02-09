import React from 'react';
import { Layout, Card, Form, Input, Button, Checkbox, Typography, Divider, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;
const { Content } = Layout;

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  // 注册表单提交处理
  const handleRegister = (values) => {
    console.log('注册表单值:', values);
    // 这里可以添加实际的注册逻辑，比如调用API注册
    // 模拟注册成功
    // 注册成功后跳转到登录界面
    navigate('/login');
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
                  <Title level={3} style={{ margin: 0 }}>注册账户</Title>
                  <Text style={{ color: '#666' }}>创建新账户，享受更多优惠</Text>
                </div>

                <Form
                  form={form}
                  name="register"
                  onFinish={handleRegister}
                  layout="vertical"
                >
                  <Form.Item
                    name="username"
                    label="用户名"
                    rules={[
                      { required: true, message: '请输入用户名' },
                      { min: 6, max: 20, message: '用户名长度在6-20个字符之间' },
                      { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线' }
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="请输入用户名"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                      { required: true, message: '请输入邮箱' },
                      { type: 'email', message: '请输入有效的邮箱地址' }
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="请输入邮箱"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[
                      { required: true, message: '请输入手机号码' },
                      { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码' }
                    ]}
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      placeholder="请输入手机号码"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                      { required: true, message: '请输入密码' },
                      { min: 6, max: 20, message: '密码长度在6-20个字符之间' },
                      { pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/, message: '密码必须包含字母和数字' }
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="请输入密码"
                      size="large"
                      iconRender={(visible) => (
                        visible ? <EyeOutlined onClick={() => setShowPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setShowPassword(true)} />
                      )}
                      type={showPassword ? 'text' : 'password'}
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    label="确认密码"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: '请确认密码' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('两次输入的密码不一致'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="请确认密码"
                      size="large"
                      iconRender={(visible) => (
                        visible ? <EyeOutlined onClick={() => setShowConfirmPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setShowConfirmPassword(true)} />
                      )}
                      type={showConfirmPassword ? 'text' : 'password'}
                    />
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      { validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意用户协议和隐私政策')) }
                    ]}
                  >
                    <Checkbox>
                      我已阅读并同意 <a href="#" style={{ color: '#1890ff' }}>《用户协议》</a> 和 <a href="#" style={{ color: '#1890ff' }}>《隐私政策》</a>
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block style={{ height: 40 }}>
                      注册
                    </Button>
                  </Form.Item>

                  <Divider>
                    <Text style={{ color: '#999' }}>其他注册方式</Text>
                  </Divider>

                  <Row gutter={[16, 0]} justify="center">
                    <Col>
                      <Button type="default" size="large" icon={<MailOutlined />} style={{ width: 100 }}>
                        邮箱注册
                      </Button>
                    </Col>
                    <Col>
                      <Button type="default" size="large" icon={<PhoneOutlined />} style={{ width: 100 }}>
                        手机注册
                      </Button>
                    </Col>
                  </Row>

                  <div style={{ textAlign: 'center', marginTop: 24 }}>
                    <Text>已有账户？</Text>
                    <Link to="/login" style={{ color: '#1890ff', marginLeft: 4 }}>
                      立即登录
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

export default Register;