---
sidebar_position: 1
---

# Module Overview

Modsynth provides 31 production-ready modules across three categories: Backend, Frontend, and Infrastructure.

## Module Philosophy

Each Modsynth module follows these principles:

- **Single Responsibility** - Does one thing well
- **Well-Documented** - Comprehensive README and examples
- **Tested** - 70%+ code coverage
- **Versioned** - Semantic versioning (v0.1.0+)
- **Independent** - Can be used standalone or combined

## Backend Modules (Go)

### Authentication & Security

#### auth-module
JWT and OAuth2.0 authentication

**Features:**
- JWT token generation and validation
- Refresh token management
- OAuth2.0 (Google, GitHub, Kakao)
- RBAC (Role-Based Access Control)

**Installation:**
```bash
go get github.com/modsynth/auth-module@v0.1.0
```

**Usage:**
```go
import "github.com/modsynth/auth-module/jwt"

manager := jwt.NewManager(config)
token, _ := manager.GenerateAccessToken(userID, email, roles, nil)
claims, _ := manager.ValidateAccessToken(token)
```

### Data Management

#### db-module
Database abstraction with GORM

**Features:**
- PostgreSQL, MySQL, SQLite support
- Generic repository pattern
- Connection pooling
- Transaction management
- Pagination helpers

**Installation:**
```bash
go get github.com/modsynth/db-module@v0.1.0
```

**Usage:**
```go
import "github.com/modsynth/db-module"

conn := db.NewConnection(config)
repo := repository.NewRepository[User](conn.DB())
user, _ := repo.FindByID(ctx, 1)
```

#### cache-module
Redis caching client

**Features:**
- Get/Set with TTL
- Delete and pattern-based deletion
- JSON serialization
- Connection pooling

**Installation:**
```bash
go get github.com/modsynth/cache-module@v0.1.0
```

#### search-module
Elasticsearch integration

**Features:**
- Document indexing
- Full-text search
- Match and term queries
- Query builders

**Installation:**
```bash
go get github.com/modsynth/search-module@v0.1.0
```

### API & Communication

#### api-gateway
Gin-based API gateway

**Features:**
- Request routing
- Middleware support
- CORS handling
- Rate limiting

**Installation:**
```bash
go get github.com/modsynth/api-gateway@v0.1.0
```

#### messaging-module
RabbitMQ/Kafka abstraction

**Features:**
- Publish/Subscribe
- Queue management
- Multiple broker support

**Installation:**
```bash
go get github.com/modsynth/messaging-module@v0.1.0
```

### Business Services

#### payment-module
Payment processing (Stripe/PayPal)

**Features:**
- Payment creation
- Refund processing
- Subscription management
- Multiple payment providers

**Installation:**
```bash
go get github.com/modsynth/payment-module@v0.1.0
```

#### notification-module
Multi-channel notifications

**Features:**
- Email (SMTP)
- SMS (Twilio)
- Push notifications
- Template support

**Installation:**
```bash
go get github.com/modsynth/notification-module@v0.1.0
```

### Infrastructure

#### logging-module
Structured logging with Zap

**Features:**
- Multiple log levels
- JSON output
- Context support
- Performance optimized

**Installation:**
```bash
go get github.com/modsynth/logging-module@v0.1.0
```

#### monitoring-module
Prometheus metrics

**Features:**
- Request counting
- Duration tracking
- Custom metrics
- /metrics endpoint

**Installation:**
```bash
go get github.com/modsynth/monitoring-module@v0.1.0
```

#### file-storage-module
S3-compatible storage

**Features:**
- File upload/download
- S3 and MinIO support
- Presigned URLs

**Installation:**
```bash
go get github.com/modsynth/file-storage-module@v0.1.0
```

#### task-scheduler
Cron job scheduler

**Features:**
- Cron syntax support
- Job management
- Error handling

**Installation:**
```bash
go get github.com/modsynth/task-scheduler@v0.1.0
```

---

## Frontend Modules (TypeScript/React)

### UI Components

#### ui-components
Tailwind CSS React components

**Features:**
- Button, Input, Modal, Card
- Responsive design
- Dark mode support
- TypeScript types

**Installation:**
```bash
npm install @modsynth/ui-components@0.1.0
```

**Usage:**
```tsx
import { Button, Input } from '@modsynth/ui-components';

<Button variant="primary" size="lg">Click me</Button>
<Input placeholder="Enter text" />
```

#### chart-components
Chart.js React components

**Features:**
- Line, Bar, Pie charts
- Responsive charts
- TypeScript support

**Installation:**
```bash
npm install @modsynth/chart-components@0.1.0
```

#### table-components
TanStack Table components

**Features:**
- Sorting, filtering, pagination
- Column resizing
- Row selection

**Installation:**
```bash
npm install @modsynth/table-components@0.1.0
```

### Data & State

#### api-client
Axios REST API client

**Features:**
- Automatic token refresh
- Request/response interceptors
- Error handling
- TypeScript support

**Installation:**
```bash
npm install @modsynth/api-client@0.1.0
```

**Usage:**
```typescript
import { ApiClient } from '@modsynth/api-client';

const client = new ApiClient({ baseURL: 'https://api.example.com' });
const users = await client.get<User[]>('/users');
```

#### state-management
Redux Toolkit setup

**Features:**
- Slice creators
- Async thunks
- TypeScript support
- DevTools integration

**Installation:**
```bash
npm install @modsynth/state-management@0.1.0
```

#### websocket-client
WebSocket client

**Features:**
- Auto-reconnection
- Event handling
- TypeScript support

**Installation:**
```bash
npm install @modsynth/websocket-client@0.1.0
```

### User Experience

#### auth-client
Authentication client

**Features:**
- Login/logout
- Token management
- OAuth integration
- Protected routes

**Installation:**
```bash
npm install @modsynth/auth-client@0.1.0
```

#### routing
React Router setup

**Features:**
- Type-safe routes
- Protected routes
- Nested routing

**Installation:**
```bash
npm install @modsynth/routing@0.1.0
```

#### form-validation
React Hook Form + Zod

**Features:**
- Form validation
- Type-safe schemas
- Error handling

**Installation:**
```bash
npm install @modsynth/form-validation@0.1.0
```

#### error-handling
Error Boundary components

**Features:**
- Global error handling
- Error logging
- Fallback UI

**Installation:**
```bash
npm install @modsynth/error-handling@0.1.0
```

#### i18n
Internationalization

**Features:**
- Multi-language support
- i18next integration
- Language detection

**Installation:**
```bash
npm install @modsynth/i18n@0.1.0
```

#### analytics-client
Google Analytics

**Features:**
- Page tracking
- Event tracking
- E-commerce tracking

**Installation:**
```bash
npm install @modsynth/analytics-client@0.1.0
```

---

## Infrastructure Modules

### shared-configs
Shared configurations for all projects

**Contents:**
- ESLint configurations (.base, .react, .node)
- Prettier configuration
- TypeScript configurations
- GitHub Actions workflows (go-ci, node-ci, release)
- Testing framework (Go + React)

**Installation:**
```bash
npm install --save-dev @modsynth/shared-configs
```

[Learn more about shared-configs](../guides/shared-configs)

### modules-manifest
Multi-repo management tool

**Features:**
- Profile-based syncing (minimal, full, phase-1, etc.)
- Version management
- Dependency tracking

**Usage:**
```bash
git clone https://github.com/modsynth/modules-manifest.git
cd modules-manifest
./scripts/sync.sh profile minimal
```

### module-catalog-mcp
MCP Server for AI-powered module discovery

**Features:**
- Module search
- Module recommendations
- Claude Code integration

**Installation:**
```bash
npm install -g @modsynth/module-catalog-mcp
```

### claude-code-templates
Claude Code slash command templates

**Commands:**
- `/add-module` - Add a Modsynth module
- `/create-api` - Create API endpoint
- `/setup-frontend` - Setup React frontend
- `/add-monitoring` - Add monitoring

**Installation:**
```bash
git clone https://github.com/modsynth/claude-code-templates.git
cp -r .claude your-project/
```

---

## Module Compatibility

### Version Matrix

| Module Category | Go Version | Node Version | TypeScript |
|----------------|------------|--------------|------------|
| Backend        | 1.21+      | N/A          | N/A        |
| Frontend       | N/A        | 18+          | 5.0+       |
| Infrastructure | 1.21+      | 18+          | 5.0+       |

### Dependencies

Most modules have minimal dependencies:

- **Backend**: Standard library + specific libraries (GORM, Redis, etc.)
- **Frontend**: React 18+ + specific libraries
- **All**: Well-tested, production-ready dependencies

---

## Next Steps

- **[Quick Start Guide](../quick-start)** - Build your first app
- **[Production Templates](../templates)** - Use ready-made templates
- **[CI/CD Setup](../ci-cd)** - Automate your workflow
