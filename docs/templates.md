---
sidebar_position: 3
---

# Production Templates

Jump-start your project with production-ready application templates. Each template includes complete backend/frontend code, Docker setup, CI/CD pipelines, and deployment guides.

## Available Templates

### 1. E-Commerce API

**Difficulty:** ⭐⭐⭐
**Type:** Backend API
**Modules Used:** 8

Complete e-commerce REST API with payment processing and product search.

**Features:**
- JWT authentication & user management
- Product catalog (CRUD)
- Shopping cart & checkout
- Stripe payment integration
- Elasticsearch product search
- S3 image storage
- Prometheus monitoring

**Tech Stack:**
- Go + Gin
- PostgreSQL
- Redis
- Elasticsearch
- Stripe

**Quick Start:**
```bash
git clone https://github.com/modsynth/examples.git
cd examples/production-templates/e-commerce-api
cp .env.example .env
docker-compose up
```

**[View Documentation →](https://github.com/modsynth/examples/tree/main/production-templates/e-commerce-api)**

---

### 2. Task Management App

**Difficulty:** ⭐⭐⭐⭐
**Type:** Fullstack
**Modules Used:** 17 (8 Backend + 9 Frontend)

Trello/Asana-style task management with real-time collaboration.

**Features:**
- Kanban board (drag & drop)
- Real-time collaboration (WebSocket)
- Project & team management
- Task assignment & tracking
- Email notifications
- File attachments
- Multi-language support

**Tech Stack:**
- **Backend:** Go + PostgreSQL + Redis + WebSocket
- **Frontend:** React + TypeScript + Redux + Tailwind CSS

**Quick Start:**
```bash
git clone https://github.com/modsynth/examples.git
cd examples/production-templates/task-management-app
docker-compose up
```

**Access:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

**[View Documentation →](https://github.com/modsynth/examples/tree/main/production-templates/task-management-app)**

---

### 3. Real-Time Chat

**Difficulty:** ⭐⭐⭐⭐⭐
**Type:** Fullstack
**Modules Used:** 19 (10 Backend + 9 Frontend)

Slack/Discord-style real-time chat with voice/video calls.

**Features:**
- Real-time messaging (WebSocket)
- Channels & direct messages
- Voice/video calls (WebRTC)
- Typing indicators & read receipts
- Message search (Elasticsearch)
- File sharing
- Emoji reactions

**Tech Stack:**
- **Backend:** Go + PostgreSQL + Redis + RabbitMQ + Elasticsearch
- **Frontend:** React + TypeScript + Redux + WebRTC

**Quick Start:**
```bash
git clone https://github.com/modsynth/examples.git
cd examples/production-templates/real-time-chat
docker-compose up
```

**[View Documentation →](https://github.com/modsynth/examples/tree/main/production-templates/real-time-chat)**

---

## Template Comparison

| Feature | E-Commerce API | Task Management | Real-Time Chat |
|---------|----------------|-----------------|----------------|
| **Type** | Backend Only | Fullstack | Fullstack |
| **Difficulty** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Modules** | 8 | 17 | 19 |
| **WebSocket** | ❌ | ✅ | ✅ |
| **Real-time** | ❌ | ✅ | ✅ |
| **Payment** | ✅ Stripe | ❌ | ❌ |
| **Search** | ✅ ES | ❌ | ✅ ES |
| **File Storage** | ✅ S3 | ✅ S3 | ✅ S3 |
| **Notifications** | ❌ | ✅ Email | ✅ Push |
| **WebRTC** | ❌ | ❌ | ✅ |
| **Message Queue** | ❌ | ❌ | ✅ RabbitMQ |
| **i18n** | ❌ | ✅ | ❌ |

## What's Included

All templates include:

### ✅ Infrastructure
- Docker containers
- Docker Compose setup
- Kubernetes manifests (optional)
- Environment configuration

### ✅ CI/CD
- GitHub Actions workflows
- Automated testing
- Code coverage reporting
- Automated releases

### ✅ Database
- Migration scripts
- Seed data
- Schema documentation

### ✅ Monitoring
- Prometheus metrics
- Health check endpoints
- Structured logging (JSON)

### ✅ Security
- HTTPS/WSS
- JWT authentication
- CORS configuration
- Rate limiting
- XSS/CSRF protection

### ✅ Testing
- Unit tests
- Integration tests
- E2E tests (Playwright)
- Test coverage >70%

### ✅ Documentation
- Complete README
- API documentation
- Architecture diagrams
- Deployment guides

## Use Cases

### E-Commerce API
Perfect for:
- Online stores
- Marketplaces
- Product catalogs
- Payment systems
- Inventory management

### Task Management App
Perfect for:
- Project management tools
- Collaboration platforms
- Issue trackers
- CRM systems
- Workflow management

### Real-Time Chat
Perfect for:
- Team communication tools
- Customer support chat
- Social networks
- Gaming chat
- Community platforms

## Customization Guide

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Configure your settings
vim .env
```

### 2. Add Modules

```bash
# Backend (Go)
go get github.com/modsynth/new-module@v0.1.0

# Frontend (npm)
npm install @modsynth/new-module
```

### 3. Extend Features

Each template is modular:
- `internal/service/` - Add business logic
- `internal/api/handlers/` - Add API endpoints
- `src/components/` - Add React components
- `src/pages/` - Add new pages

### 4. Deploy

```bash
# Build Docker image
docker build -t your-app:v1.0.0 .

# Deploy to Kubernetes
kubectl apply -f k8s/

# Or deploy to cloud
# AWS, GCP, Azure, Railway, Vercel, etc.
```

## Performance Benchmarks

### E-Commerce API
- **Throughput:** ~5,000 RPS
- **Avg Response:** 50ms
- **P95 Response:** 120ms
- **Concurrent Users:** 10,000

### Task Management App
- **Throughput:** ~3,000 RPS
- **WebSocket Connections:** 5,000
- **Avg Response:** 80ms
- **Real-time Latency:** <100ms

### Real-Time Chat
- **Messages/sec:** ~10,000
- **WebSocket Connections:** 50,000
- **Avg Message Latency:** 30ms
- **P99 Latency:** 150ms

*Benchmarks on 4 CPU, 8GB RAM*

## Cost Estimates (AWS)

### E-Commerce API (Small)
- EC2 (t3.medium): $30/month
- RDS PostgreSQL (db.t3.small): $25/month
- ElastiCache Redis (cache.t3.micro): $15/month
- S3 Storage: $5/month
- **Total:** ~$75/month

### Task Management (Medium)
- EC2 (t3.large) x2: $120/month
- RDS PostgreSQL (db.t3.medium): $65/month
- ElastiCache Redis (cache.t3.small): $30/month
- S3 Storage: $10/month
- CloudFront: $15/month
- **Total:** ~$240/month

### Real-Time Chat (Large)
- EC2 (c5.xlarge) x3: $360/month
- RDS PostgreSQL (db.r5.large): $180/month
- ElastiCache Redis (cache.r5.large): $150/month
- Elasticsearch (r5.large.search) x2: $300/month
- S3 Storage: $20/month
- RabbitMQ (t3.medium): $30/month
- **Total:** ~$1,040/month

## Production Checklist

Before deploying to production:

- [ ] Environment variables configured (.env.production)
- [ ] Strong JWT_SECRET set
- [ ] Database backups enabled
- [ ] HTTPS certificates installed
- [ ] CORS settings verified
- [ ] Rate limiting configured
- [ ] Log collection setup
- [ ] Monitoring dashboard configured
- [ ] Error alerting setup
- [ ] Database migrations tested
- [ ] Load testing completed
- [ ] Security scan passed

## Support

- **Documentation:** [Full Template Docs](https://github.com/modsynth/examples/tree/main/production-templates)
- **Issues:** [Report Issues](https://github.com/modsynth/examples/issues)
- **Discussions:** [Ask Questions](https://github.com/orgs/modsynth/discussions)

## License

All templates are MIT licensed - use freely in commercial and personal projects.

---

## Next Steps

1. **[Choose a template](#available-templates)** based on your needs
2. **[Follow the setup guide](https://github.com/modsynth/examples/tree/main/production-templates)** in the template README
3. **[Customize](#customization-guide)** for your use case
4. **[Deploy](#4-deploy)** to production

Happy building! 🚀
