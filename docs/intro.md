---
sidebar_position: 1
---

# Welcome to Modsynth

**Modsynth** (Module + Synthesizer) is a production-ready modular architecture framework for building modern web applications.

## What is Modsynth?

Modsynth provides a comprehensive ecosystem of 31+ battle-tested modules that you can compose together to build scalable applications - just like synthesizing music from individual modules.

### 🎯 Key Benefits

- ⚡ **Faster Development** - 40-60% reduction in development time
- 🔧 **Production Ready** - All modules include CI/CD, monitoring, and testing
- 🏗️ **Modular Architecture** - Pick only what you need
- 📚 **Comprehensive Docs** - Complete guides and examples
- 🚀 **Deployment Ready** - Docker, Kubernetes, CI/CD included

## Quick Start

### Backend (Go)

```bash
# Authentication
go get github.com/modsynth/auth-module@v0.1.0

# Database
go get github.com/modsynth/db-module@v0.1.0

# Caching
go get github.com/modsynth/cache-module@v0.1.0
```

### Frontend (TypeScript/React)

```bash
# UI Components (v0.2.0 - Enhanced!)
npm install @modsynth/ui-components@0.2.0
# ✨ New: Card, Spinner components, cn/variant utilities

# API Client (v0.2.0 - Enhanced!)
npm install @modsynth/api-client@0.2.0
# ✨ New: React hooks (useApiClient, useApiRequest), retry logic

# State Management (v0.2.0 - Enhanced!)
npm install @modsynth/state-management@0.2.0
# ✨ New: createTypedHooks, createAppAsyncThunk helpers

# Form Validation (v0.2.0 - Enhanced!)
npm install @modsynth/form-validation@0.2.0
# ✨ New: Common schemas (email, password, login, register)

# Authentication (v0.2.0 - Enhanced!)
npm install @modsynth/auth-client@0.2.0
# ✨ New: JWT utilities, tokenStorage

# Routing (v0.2.0 - Enhanced!)
npm install @modsynth/routing@0.2.0
# ✨ New: ProtectedRoute, navigation hooks
```

### Production Templates

Jump-start your project with ready-to-deploy templates:

```bash
git clone https://github.com/modsynth/examples.git
cd examples/production-templates/task-management-app
docker-compose up
```

## Module Categories

### Backend Modules (Go)
- **auth-module** - JWT + OAuth2.0 authentication
- **db-module** - GORM database abstraction
- **cache-module** - Redis caching
- **api-gateway** - Gin API gateway
- **payment-module** - Stripe/PayPal integration
- **search-module** - Elasticsearch integration
- **monitoring-module** - Prometheus metrics
- And 5 more...

### Frontend Modules (TypeScript/React) - v0.2.0 Enhanced!
- **ui-components** - Tailwind CSS components, Card, Spinner, utilities
- **api-client** - Axios REST client, React hooks, retry logic
- **state-management** - Redux Toolkit, typed hooks, async thunk helpers
- **auth-client** - Authentication client, JWT utilities, token storage
- **routing** - React Router, ProtectedRoute, navigation hooks
- **form-validation** - React Hook Form + Zod, common schemas
- **error-handling** - Error Boundary, ErrorLogger
- **websocket-client** - WebSocket with auto-reconnect, React hook
- **i18n** - i18next, formatters, language sync
- **chart-components** - Chart.js with themes
- **table-components** - TanStack Table, CSV export, pagination
- **analytics-client** - Google Analytics, useAnalytics hook

### Infrastructure
- **shared-configs** - ESLint, Prettier, TypeScript configs, GitHub Actions, Testing
- **modules-manifest** - Multi-repo management
- **module-catalog-mcp** - AI-powered module search
- **claude-code-templates** - Claude Code integration

## Production Templates

Choose from 3 production-ready templates:

1. **E-Commerce API** - REST API with payments and search
2. **Task Management App** - Real-time collaboration (Trello-style)
3. **Real-Time Chat** - WebSocket + WebRTC (Slack-style)

Each includes Docker, CI/CD, monitoring, and deployment guides.

## Project Stats

- 📦 **31 Modules** (96.9% complete)
- ⭐ **Latest: v0.2.0** - Enhanced frontend modules (12개)
- 🎯 **v0.1.0** - Stable backend modules (12개)
- 🧪 **Test Coverage** - 97.1% average (10 core modules)
- 📖 **100% Documented**
- 🔄 **CI/CD Ready** - 31/31 modules (100%)
- 📦 **npm Published** - 12 packages @0.2.0, 1 package @0.1.0

## Getting Started

Choose your path:

- 📘 **[Module Guide](./modules/overview)** - Learn about available modules
- 🚀 **[Quick Start](./quick-start)** - Build your first app in 5 minutes
- 💡 **[Templates](./templates)** - Use production templates
- 🛠️ **[CI/CD Setup](./ci-cd)** - Automate your workflow

## Latest Updates 🎉

### v0.2.0 (2025-11-12) - Enhanced Frontend Modules

**12 enhanced modules** with production-level utilities:
- 🎨 **UI Components**: Card, Spinner, utility functions
- 🔄 **API Client**: React hooks, automatic retry with exponential backoff
- 🏪 **State Management**: Type-safe hooks factory, async thunk helpers
- ✅ **Form Validation**: Common schemas (email, password, login, register)
- 🔐 **Auth Client**: JWT utilities, token storage
- 🛡️ **Error Handling**: ErrorLogger for client-side logging
- 🧭 **Routing**: ProtectedRoute, navigation hooks
- 🔌 **WebSocket**: Auto-reconnect, useWebSocket hook
- 🌐 **i18n**: initI18n, formatters, language sync
- 📊 **Charts**: Themes (default, dark)
- 📋 **Tables**: CSV export, pagination helpers
- 📈 **Analytics**: useAnalytics hook

**Try it now**:
```bash
npm install @modsynth/ui-components@0.2.0
npm install @modsynth/api-client@0.2.0
```

## Community

- **GitHub**: [github.com/modsynth](https://github.com/modsynth)
- **npm**: [@modsynth](https://www.npmjs.com/org/modsynth)
- **Issues**: [Report bugs](https://github.com/modsynth/docs-dev/issues)
- **Discussions**: [Ask questions](https://github.com/orgs/modsynth/discussions)
