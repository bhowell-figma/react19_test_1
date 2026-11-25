import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Tag,
  Avatar,
  Rate,
  Divider,
  Space,
  ConfigProvider,
  Badge,
  Timeline,
} from 'antd';
import type { TableColumnsType } from 'antd';
import {
  RiseOutlined,
  SafetyCertificateOutlined,
  LineChartOutlined,
  GlobalOutlined,
  BankOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FallOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

// ── Mock data ──────────────────────────────────────────────────────────────────

interface MarketRow {
  key: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePct: number;
  volume: string;
}

const marketData: MarketRow[] = [
  { key: '1', symbol: 'AAPL', name: 'Apple Inc.', price: 189.42, change: 2.18, changePct: 1.16, volume: '54.2M' },
  { key: '2', symbol: 'MSFT', name: 'Microsoft Corp.', price: 415.30, change: -1.45, changePct: -0.35, volume: '22.8M' },
  { key: '3', symbol: 'GOOGL', name: 'Alphabet Inc.', price: 176.65, change: 3.72, changePct: 2.15, volume: '18.4M' },
  { key: '4', symbol: 'AMZN', name: 'Amazon.com Inc.', price: 201.18, change: -0.83, changePct: -0.41, volume: '31.1M' },
  { key: '5', symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.40, change: 21.60, changePct: 2.53, volume: '41.7M' },
  { key: '6', symbol: 'JPM', name: 'JPMorgan Chase', price: 212.75, change: 1.05, changePct: 0.50, volume: '9.3M' },
];

const marketColumns: TableColumnsType<MarketRow> = [
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    render: (v: string) => <Text strong style={{ color: '#1677ff' }}>{v}</Text>,
  },
  { title: 'Name', dataIndex: 'name' },
  {
    title: 'Price',
    dataIndex: 'price',
    align: 'right',
    render: (v: number) => <Text strong>${v.toFixed(2)}</Text>,
  },
  {
    title: 'Change',
    dataIndex: 'change',
    align: 'right',
    render: (v: number) => (
      <Text style={{ color: v >= 0 ? '#52c41a' : '#ff4d4f' }}>
        {v >= 0 ? '+' : ''}{v.toFixed(2)}
      </Text>
    ),
  },
  {
    title: 'Change %',
    dataIndex: 'changePct',
    align: 'right',
    render: (v: number) => (
      <Tag
        icon={v >= 0 ? <RiseOutlined /> : <FallOutlined />}
        color={v >= 0 ? 'success' : 'error'}
      >
        {v >= 0 ? '+' : ''}{v.toFixed(2)}%
      </Tag>
    ),
  },
  { title: 'Volume', dataIndex: 'volume', align: 'right' },
];

const navItems = [
  { key: 'products', label: 'Products' },
  { key: 'markets', label: 'Markets' },
  { key: 'research', label: 'Research' },
  { key: 'wealth', label: 'Wealth Management' },
  { key: 'about', label: 'About' },
];

const services = [
  {
    icon: <LineChartOutlined style={{ fontSize: 32, color: '#1677ff' }} />,
    title: 'Investment Management',
    desc: 'Diversified portfolios built by expert advisors, powered by AI-driven insights and real-time market data.',
    badge: 'Most Popular' as string | null,
  },
  {
    icon: <BankOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
    title: 'Private Banking',
    desc: 'Dedicated relationship managers and tailored banking solutions for high-net-worth individuals.',
    badge: null as string | null,
  },
  {
    icon: <GlobalOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
    title: 'Global Markets',
    desc: 'Trade equities, fixed income, FX, and derivatives across 50+ global exchanges with zero commission.',
    badge: 'New' as string | null,
  },
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    title: 'Insurance & Protection',
    desc: 'Comprehensive life, health, and asset protection plans underwritten by top-rated carriers.',
    badge: null as string | null,
  },
];

const features = [
  { icon: <LockOutlined />, title: 'Bank-Grade Security', desc: '256-bit encryption and biometric authentication protect every transaction.' },
  { icon: <RiseOutlined />, title: 'AI-Powered Insights', desc: 'Machine learning models analyse your portfolio 24/7 and surface actionable recommendations.' },
  { icon: <TeamOutlined />, title: 'Expert Advisors', desc: 'Certified financial planners available on-demand via chat, call, or video.' },
  { icon: <CheckCircleOutlined />, title: 'FDIC & SIPC Insured', desc: 'Your deposits and investments are protected up to regulatory limits.' },
];

const plans = [
  {
    name: 'Essential',
    price: 'Free',
    color: '#f0f2f5',
    textColor: '#262626',
    perks: ['Up to $10K invested', 'Automated rebalancing', 'Basic analytics', '24/7 chat support'],
    primary: false,
  },
  {
    name: 'Growth',
    price: '$9/mo',
    color: '#1677ff',
    textColor: '#fff',
    perks: ['Unlimited investing', 'Tax-loss harvesting', 'Advanced analytics', 'Priority phone support', 'Dedicated advisor (quarterly)'],
    primary: true,
  },
  {
    name: 'Private',
    price: 'Custom',
    color: '#13111a',
    textColor: '#fff',
    perks: ['Unlimited AUM', 'Bespoke portfolio', 'Family office services', '24/7 dedicated advisor', 'Concierge onboarding'],
    primary: false,
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Entrepreneur, NYC',
    avatar: 'SM',
    rating: 5,
    quote: 'Apex grew my portfolio by 34% in 18 months. The AI recommendations are eerily accurate and the advisors are world-class.',
  },
  {
    name: 'David Chen',
    role: 'CTO, San Francisco',
    avatar: 'DC',
    rating: 5,
    quote: 'Finally a platform that respects my time. Everything is automated intelligently and I sleep easy knowing my money is working hard.',
  },
  {
    name: 'Priya Sharma',
    role: 'Physician, Chicago',
    avatar: 'PS',
    rating: 5,
    quote: 'The tax-loss harvesting alone saved me over $8,000 last year. Switching to Apex was the best financial decision I ever made.',
  },
];

const milestones = [
  { year: '2014', desc: 'Founded in New York with a mission to democratise wealth management.' },
  { year: '2017', desc: 'Crossed $1B in assets under management.' },
  { year: '2020', desc: 'Launched AI-driven portfolio engine — industry-first.' },
  { year: '2023', desc: 'Expanded to 40+ countries. $50B AUM milestone reached.' },
  { year: '2026', desc: '2M+ clients. Named #1 Digital Wealth Manager by Forbes.' },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
          fontFamily: "'Inter', system-ui, sans-serif",
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>

        {/* ── HEADER ── */}
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #f0f0f0',
            padding: '0 48px',
            height: 64,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 40, flexShrink: 0 }}>
            <BankOutlined style={{ fontSize: 24, color: '#1677ff' }} />
            <Title level={4} style={{ margin: 0, color: '#1677ff' }}>Apex Finance</Title>
          </div>
          <Menu
            mode="horizontal"
            items={navItems}
            style={{ flex: 1, border: 'none', background: 'transparent', lineHeight: '64px' }}
            selectedKeys={[]}
          />
          <Space>
            <Button type="text">Log In</Button>
            <Button type="primary">Sign Up</Button>
          </Space>
        </Header>

        <Content>

          {/* ── HERO ── */}
          <div
            style={{
              background: 'linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 50%, #f9f0ff 100%)',
              padding: '96px 48px 80px',
              textAlign: 'center',
            }}
          >
            <Paragraph
              style={{
                fontSize: 20,
                color: '#595959',
                maxWidth: 560,
                margin: '0 auto 40px',
                lineHeight: 1.6,
              }}
            >
              Join 2 million investors who trust Apex Finance to grow, protect,
              and transfer their wealth — from first dollar to generational legacy.
            </Paragraph>
            <Space orientation="vertical" size={0} style={{ width: '100%' }}>
              <Space size={8} style={{ marginBottom: 24 }}>
                <Tag color="blue" icon={<SafetyCertificateOutlined />}>FDIC Insured</Tag>
                <Tag color="purple" icon={<CheckCircleOutlined />}>SEC Registered</Tag>
                <Tag color="cyan" icon={<GlobalOutlined />}>50+ Markets</Tag>
              </Space>
              <Title
                style={{
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  lineHeight: 1.1,
                  margin: '0 auto 24px',
                  maxWidth: 800,
                  background: 'linear-gradient(135deg, #1677ff, #722ed1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Wealth,<br />Intelligently Managed
              </Title>
              <Space size={16} wrap style={{ justifyContent: 'center' }}>
                <Button size="large">Schedule a Consultation</Button>
                <Button type="primary" size="large" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Start Investing Free
                </Button>
              </Space>
              <Text type="secondary" style={{ marginTop: 16, display: 'block', fontSize: 13 }}>
                No minimums. No hidden fees. Cancel anytime.
              </Text>
            </Space>
          </div>

          {/* ── KEY METRICS ── */}
          <div style={{ background: '#1677ff', padding: '48px' }}>
            <Row gutter={[32, 32]} justify="center">
              {[
                { title: 'Assets Under Management', value: '$50B+' },
                { title: 'Active Clients', value: '2M+' },
                { title: 'Avg. Annual Return', value: '14.8%' },
                { title: 'Countries Served', value: '40+' },
              ].map((m) => (
                <Col key={m.title} xs={12} sm={12} md={6}>
                  <Statistic
                    title={<Text style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{m.title}</Text>}
                    value={m.value}
                    styles={{ content: { color: '#fff', fontSize: 36, fontWeight: 700 } }}
                  />
                </Col>
              ))}
            </Row>
          </div>

          {/* ── SERVICES ── */}
          <div style={{ padding: '80px 48px', background: '#fff' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Tag color="blue" style={{ marginBottom: 12 }}>Our Services</Tag>
              <Title level={2} style={{ margin: '0 auto 12px', maxWidth: 560 }}>
                Everything you need to build lasting wealth
              </Title>
              <Paragraph type="secondary" style={{ fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
                One platform. Every financial product. Zero compromises.
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {services.map((s) => (
                <Col key={s.title} xs={24} sm={12} lg={6}>
                  <Badge.Ribbon
                    text={s.badge ?? ''}
                    color={s.badge === 'New' ? 'cyan' : 'blue'}
                    style={{ display: s.badge ? 'block' : 'none' }}
                  >
                    <Card
                      hoverable
                      style={{ height: '100%', borderRadius: 12 }}
                      styles={{ body: { padding: 28 } }}
                    >
                      <Space orientation="vertical" size={16}>
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12,
                            background: '#f0f5ff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {s.icon}
                        </div>
                        <div>
                          <Title level={4} style={{ margin: '0 0 8px' }}>{s.title}</Title>
                          <Paragraph type="secondary" style={{ margin: 0 }}>{s.desc}</Paragraph>
                        </div>
                        <Button type="link" style={{ padding: 0 }} icon={<ArrowRightOutlined />} iconPlacement="end">
                          Learn more
                        </Button>
                      </Space>
                    </Card>
                  </Badge.Ribbon>
                </Col>
              ))}
            </Row>
          </div>

          {/* ── MARKET OVERVIEW ── */}
          <div style={{ padding: '80px 48px', background: '#fafafa' }}>
            <Row gutter={[48, 48]} align="top">
              <Col xs={24} lg={16}>
                <div style={{ marginBottom: 24 }}>
                  <Tag color="geekblue" style={{ marginBottom: 8 }}>Live Markets</Tag>
                  <Title level={2} style={{ margin: '0 0 4px' }}>Today's Market Snapshot</Title>
                  <Text type="secondary">Prices refresh every 15 seconds. Data is delayed by 15 minutes.</Text>
                </div>
                <Table
                  columns={marketColumns}
                  dataSource={marketData}
                  pagination={false}
                  size="middle"
                  style={{ borderRadius: 12, overflow: 'hidden' }}
                />
              </Col>
              <Col xs={24} lg={8}>
                <div style={{ marginBottom: 24 }}>
                  <Tag color="green" style={{ marginBottom: 8 }}>Portfolio</Tag>
                  <Title level={2} style={{ margin: 0 }}>Sample Portfolio</Title>
                </div>
                <Space orientation="vertical" size={16} style={{ width: '100%' }}>
                  <Card style={{ borderRadius: 12, background: 'linear-gradient(135deg, #1677ff, #0958d9)', border: 'none' }}>
                    <Statistic
                      title={<Text style={{ color: 'rgba(255,255,255,0.8)' }}>Total Portfolio Value</Text>}
                      value={284750.32}
                      precision={2}
                      prefix="$"
                      styles={{ content: { color: '#fff', fontSize: 28, fontWeight: 700 } }}
                    />
                    <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '16px 0' }} />
                    <Row gutter={16}>
                      <Col span={12}>
                        <Statistic
                          title={<Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Today's Gain</Text>}
                          value={1842.10}
                          precision={2}
                          prefix="+$"
                          styles={{ content: { color: '#95f080', fontSize: 16 } }}
                        />
                      </Col>
                      <Col span={12}>
                        <Statistic
                          title={<Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>All-Time Return</Text>}
                          value={34.2}
                          suffix="%"
                          precision={1}
                          prefix="+"
                          styles={{ content: { color: '#95f080', fontSize: 16 } }}
                        />
                      </Col>
                    </Row>
                  </Card>
                  <Card style={{ borderRadius: 12 }}>
                    <Title level={5} style={{ marginBottom: 16 }}>Allocation</Title>
                    <Space orientation="vertical" size={12} style={{ width: '100%' }}>
                      {[
                        { label: 'US Equities', pct: 45, color: '#1677ff' },
                        { label: 'International', pct: 25, color: '#722ed1' },
                        { label: 'Fixed Income', pct: 20, color: '#52c41a' },
                        { label: 'Alternatives', pct: 10, color: '#fa8c16' },
                      ].map((a) => (
                        <div key={a.label}>
                          <Row justify="space-between">
                            <Text>{a.label}</Text>
                            <Text strong>{a.pct}%</Text>
                          </Row>
                          <div style={{ height: 6, background: '#f0f0f0', borderRadius: 3, marginTop: 4 }}>
                            <div style={{ height: '100%', width: `${a.pct}%`, background: a.color, borderRadius: 3 }} />
                          </div>
                        </div>
                      ))}
                    </Space>
                  </Card>
                </Space>
              </Col>
            </Row>
          </div>

          {/* ── WHY APEX ── */}
          <div style={{ padding: '80px 48px', background: '#fff' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Tag color="purple" style={{ marginBottom: 12 }}>Why Apex</Tag>
              <Title level={2} style={{ margin: '0 auto 12px', maxWidth: 480 }}>
                Built for investors who demand more
              </Title>
            </div>
            <Row gutter={[24, 24]}>
              {features.map((f) => (
                <Col key={f.title} xs={24} sm={12} lg={6}>
                  <Card
                    hoverable
                    style={{ textAlign: 'center', borderRadius: 12, height: '100%' }}
                    styles={{ body: { padding: 32 } }}
                  >
                    <Avatar
                      size={56}
                      icon={f.icon}
                      style={{ background: '#e6f4ff', color: '#1677ff', marginBottom: 20, fontSize: 24 }}
                    />
                    <Title level={4} style={{ marginBottom: 8 }}>{f.title}</Title>
                    <Paragraph type="secondary" style={{ margin: 0 }}>{f.desc}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* ── PLANS ── */}
          <div style={{ padding: '80px 48px', background: '#f0f5ff' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Tag color="blue" style={{ marginBottom: 12 }}>Pricing</Tag>
              <Title level={2} style={{ margin: '0 auto 12px' }}>Simple, transparent pricing</Title>
              <Paragraph type="secondary" style={{ fontSize: 16 }}>No hidden fees. No surprises. Ever.</Paragraph>
            </div>
            <Row gutter={[24, 24]} justify="center">
              {plans.map((p) => (
                <Col key={p.name} xs={24} sm={12} md={8} style={{ maxWidth: 360 }}>
                  <Card
                    hoverable={!p.primary}
                    style={{
                      background: p.color,
                      border: p.primary ? '2px solid #1677ff' : undefined,
                      borderRadius: 16,
                      height: '100%',
                      transform: p.primary ? 'scale(1.04)' : undefined,
                      boxShadow: p.primary ? '0 20px 60px rgba(22,119,255,0.25)' : undefined,
                    }}
                    styles={{ body: { padding: 36 } }}
                  >
                    <Space orientation="vertical" size={20} style={{ width: '100%' }}>
                      <div>
                        <Text style={{ color: p.primary ? 'rgba(255,255,255,0.7)' : '#8c8c8c', textTransform: 'uppercase', letterSpacing: 1, fontSize: 12 }}>
                          {p.name}
                        </Text>
                        <Title level={2} style={{ color: p.textColor, margin: '8px 0 0' }}>{p.price}</Title>
                      </div>
                      <Divider style={{ margin: 0, borderColor: p.primary ? 'rgba(255,255,255,0.2)' : undefined }} />
                      <Space orientation="vertical" size={8} style={{ width: '100%' }}>
                        {p.perks.map((perk) => (
                          <Space key={perk} size={8}>
                            <CheckCircleOutlined style={{ color: p.primary ? '#95f080' : '#52c41a' }} />
                            <Text style={{ color: p.textColor }}>{perk}</Text>
                          </Space>
                        ))}
                      </Space>
                      <Button
                        type={p.primary ? 'default' : 'primary'}
                        block
                        size="large"
                        style={
                          p.primary
                            ? { background: '#fff', color: '#1677ff', fontWeight: 600 }
                            : p.name === 'Private'
                            ? { background: '#1677ff', borderColor: '#1677ff', color: '#fff' }
                            : {}
                        }
                      >
                        {p.name === 'Essential' ? 'Get Started Free' : p.name === 'Growth' ? 'Start 30-Day Trial' : 'Contact Sales'}
                      </Button>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* ── TESTIMONIALS ── */}
          <div style={{ padding: '80px 48px', background: '#fff' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <Tag color="gold" style={{ marginBottom: 12 }}>Testimonials</Tag>
              <Title level={2} style={{ margin: 0 }}>Trusted by investors worldwide</Title>
            </div>
            <Row gutter={[24, 24]}>
              {testimonials.map((t) => (
                <Col key={t.name} xs={24} md={8}>
                  <Card style={{ borderRadius: 12, height: '100%' }} styles={{ body: { padding: 32 } }}>
                    <Space orientation="vertical" size={16}>
                      <Rate disabled defaultValue={t.rating} style={{ fontSize: 14 }} />
                      <Paragraph
                        style={{ fontSize: 15, lineHeight: 1.7, fontStyle: 'italic', color: '#434343', margin: 0 }}
                      >
                        "{t.quote}"
                      </Paragraph>
                      <Space>
                        <Avatar style={{ background: '#1677ff', fontWeight: 700 }}>{t.avatar}</Avatar>
                        <div>
                          <Text strong style={{ display: 'block' }}>{t.name}</Text>
                          <Text type="secondary" style={{ fontSize: 13 }}>{t.role}</Text>
                        </div>
                      </Space>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* ── MILESTONES ── */}
          <div style={{ padding: '80px 48px', background: '#fafafa' }}>
            <Row gutter={[64, 48]} align="middle">
              <Col xs={24} lg={10}>
                <Tag color="blue" style={{ marginBottom: 12 }}>Our Story</Tag>
                <Title level={2} style={{ marginBottom: 16 }}>
                  A decade of financial innovation
                </Title>
                <Paragraph type="secondary" style={{ fontSize: 16, lineHeight: 1.7 }}>
                  From a small New York fintech startup to a globally recognised wealth platform,
                  Apex Finance has consistently pushed the boundaries of what personalised financial
                  management can look like.
                </Paragraph>
                <Button type="primary" style={{ marginTop: 16 }} icon={<ArrowRightOutlined />} iconPlacement="end">
                  Read Our Story
                </Button>
              </Col>
              <Col xs={24} lg={14}>
                <Timeline
                  mode="start"
                  items={milestones.map((m) => ({
                    title: <Text strong style={{ fontSize: 15 }}>{m.year}</Text>,
                    content: <Text>{m.desc}</Text>,
                    color: 'blue',
                  }))}
                />
              </Col>
            </Row>
          </div>

          {/* ── CTA BANNER ── */}
          <div style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #1677ff 0%, #722ed1 100%)', textAlign: 'center' }}>
            <Tag color="gold" style={{ marginBottom: 20 }}>Limited Time Offer</Tag>
            <Title level={2} style={{ color: '#fff', margin: '0 auto 16px', maxWidth: 560 }}>
              Start your 30-day free trial today
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, maxWidth: 400, margin: '0 auto 40px' }}>
              No credit card required. Full access to all Growth features for 30 days.
            </Paragraph>
            <Space size={16} wrap style={{ justifyContent: 'center' }}>
              <Button size="large" style={{ background: '#fff', color: '#1677ff', fontWeight: 600, border: 'none' }}>
                Create Free Account
              </Button>
              <Button size="large" ghost>
                Talk to an Advisor
              </Button>
            </Space>
          </div>

        </Content>

        {/* ── FOOTER ── */}
        <Footer style={{ background: '#13111a', padding: '64px 48px 32px' }}>
          <Row gutter={[48, 40]}>
            <Col xs={24} md={8}>
              <Space align="center" style={{ marginBottom: 16 }}>
                <BankOutlined style={{ fontSize: 20, color: '#1677ff' }} />
                <Title level={4} style={{ color: '#fff', margin: 0 }}>Apex Finance</Title>
              </Space>
              <Paragraph style={{ color: '#8c8c8c', maxWidth: 280, lineHeight: 1.7 }}>
                Your intelligent wealth management partner. Regulated, trusted, and always on your side.
              </Paragraph>
              <Space size={12} style={{ marginTop: 16 }}>
                <Button shape="circle" icon={<TwitterOutlined />} style={{ background: '#1f1f2e', border: 'none', color: '#8c8c8c' }} />
                <Button shape="circle" icon={<LinkedinOutlined />} style={{ background: '#1f1f2e', border: 'none', color: '#8c8c8c' }} />
                <Button shape="circle" icon={<YoutubeOutlined />} style={{ background: '#1f1f2e', border: 'none', color: '#8c8c8c' }} />
              </Space>
            </Col>
            {[
              { heading: 'Products', links: ['Investments', 'Private Banking', 'Global Markets', 'Insurance', 'Retirement'] },
              { heading: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'] },
              { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Disclosures', 'Security'] },
            ].map((col) => (
              <Col key={col.heading} xs={12} md={4}>
                <Text strong style={{ color: '#fff', display: 'block', marginBottom: 16 }}>{col.heading}</Text>
                <Space orientation="vertical" size={8}>
                  {col.links.map((l) => (
                    <Button key={l} type="link" style={{ color: '#8c8c8c', padding: 0, height: 'auto' }}>{l}</Button>
                  ))}
                </Space>
              </Col>
            ))}
          </Row>

          <Divider style={{ borderColor: '#2e2e3e', margin: '48px 0 24px' }} />

          <Row justify="space-between" align="middle" wrap>
            <Col>
              <Text style={{ color: '#595959', fontSize: 13 }}>
                © 2026 Apex Finance, Inc. All rights reserved. SIPC & FDIC member. Advisory services by Apex Advisors LLC, an SEC-registered investment adviser.
              </Text>
            </Col>
            <Col>
              <Space size={16}>
                <Space size={4}>
                  <PhoneOutlined style={{ color: '#595959' }} />
                  <Text style={{ color: '#595959', fontSize: 13 }}>1-800-APEX-FIN</Text>
                </Space>
                <Space size={4}>
                  <MailOutlined style={{ color: '#595959' }} />
                  <Text style={{ color: '#595959', fontSize: 13 }}>hello@apexfinance.com</Text>
                </Space>
              </Space>
            </Col>
          </Row>
        </Footer>

      </Layout>
    </ConfigProvider>
  );
}
