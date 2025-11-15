# Frontend Modules

Modsynth provides **12 production-ready frontend modules** built with TypeScript and React. All modules are available on npm with version **v0.2.0** (enhanced with utilities and React hooks).

---

## 🎨 UI Components

### @modsynth/ui-components@0.2.0

React UI component library built with Tailwind CSS.

**Features**:
- ✨ **Button**: Primary, secondary, danger variants with multiple sizes
- ✨ **Input**: Form input with validation states
- ✨ **Card** (New in v0.2.0): Flexible card component with variants
- ✨ **Spinner** (New in v0.2.0): Loading spinner with customizable size and color
- ✨ **Utilities** (New in v0.2.0): `cn()` for class merging, `variant()` for style selection

**Installation**:
```bash
npm install @modsynth/ui-components@0.2.0
```

**Usage Example**:
```tsx
import { Button, Card, Spinner, cn } from '@modsynth/ui-components';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Card variant="elevated" padding="lg">
      <h2>Welcome to Modsynth</h2>

      {loading ? (
        <Spinner size="md" color="text-blue-600" />
      ) : (
        <Button
          variant="primary"
          size="lg"
          onClick={() => setLoading(true)}
        >
          Get Started
        </Button>
      )}

      <div className={cn('mt-4', loading && 'opacity-50')}>
        Content here
      </div>
    </Card>
  );
}
```

---

## 🔄 API Client

### @modsynth/api-client@0.2.0

Axios-based REST API client with React hooks and retry logic.

**Features**:
- 🔌 **HTTP Methods**: GET, POST, PUT, PATCH, DELETE
- 🔑 **Authentication**: Automatic token management
- 🔁 **Interceptors**: Request/response interceptors
- ✨ **React Hooks** (New in v0.2.0): `useApiClient`, `useApiRequest`
- ✨ **Retry Logic** (New in v0.2.0): Exponential backoff
- ✨ **Utilities** (New in v0.2.0): `buildQueryString`, `isApiError`

**Installation**:
```bash
npm install @modsynth/api-client@0.2.0
```

**Usage Example**:
```tsx
import { ApiClient, useApiRequest, retryRequest } from '@modsynth/api-client';

// Basic usage
const client = new ApiClient({ baseURL: 'https://api.example.com' });

// With React Hook
function UserProfile({ userId }) {
  const { data, loading, error, refetch } = useApiRequest(
    () => client.get(`/users/${userId}`)
  );

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

// With retry logic
async function fetchWithRetry() {
  const data = await retryRequest(
    () => client.get('/api/data'),
    3, // maxRetries
    1000 // delayMs
  );
  return data;
}
```

---

## 🏪 State Management

### @modsynth/state-management@0.2.0

Redux Toolkit wrapper with type-safe hooks and async thunk helpers.

**Features**:
- 🏪 **Redux Toolkit**: Full Redux Toolkit re-export
- ✨ **Type-Safe Hooks** (New in v0.2.0): `createTypedHooks`
- ✨ **Async Thunk Helpers** (New in v0.2.0): `createAppAsyncThunk`, `createAsyncReducers`

**Installation**:
```bash
npm install @modsynth/state-management@0.2.0
npm install @reduxjs/toolkit react-redux
```

**Usage Example**:
```tsx
import { configureStore, createSlice } from '@modsynth/state-management';
import { createTypedHooks, createAppAsyncThunk } from '@modsynth/state-management';

// Define your store
interface RootState {
  user: { name: string; email: string };
}

const userSlice = createSlice({
  name: 'user',
  initialState: { name: '', email: '' },
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

type AppDispatch = typeof store.dispatch;

// Create typed hooks
const { useAppDispatch, useAppSelector } = createTypedHooks<RootState, AppDispatch>();

// Use in components
function UserProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return <div>{user.name}</div>;
}

// Create async thunk with error handling
const fetchUser = createAppAsyncThunk(
  'user/fetch',
  async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  }
);
```

---

## ✅ Form Validation

### @modsynth/form-validation@0.2.0

React Hook Form + Zod integration with common validation schemas.

**Features**:
- 📝 **React Hook Form**: Full react-hook-form re-export
- 🔍 **Zod**: Schema validation
- ✨ **Common Schemas** (New in v0.2.0): email, password, url, phone
- ✨ **Form Schemas** (New in v0.2.0): login, register

**Installation**:
```bash
npm install @modsynth/form-validation@0.2.0
npm install react-hook-form zod
```

**Usage Example**:
```tsx
import { useForm, zodResolver, loginSchema } from '@modsynth/form-validation';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data); // { email: string, password: string }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Login</button>
    </form>
  );
}

// Custom schema with common validators
import { emailSchema, passwordSchema, z } from '@modsynth/form-validation';

const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
```

---

## 🔐 Authentication Client

### @modsynth/auth-client@0.2.0

Frontend authentication client with JWT utilities and token storage.

**Features**:
- 🔑 **AuthClient**: Login, logout, refresh token management
- ✨ **JWT Utilities** (New in v0.2.0): decode, check expiration, get TTL
- ✨ **Token Storage** (New in v0.2.0): Helpers for localStorage management

**Installation**:
```bash
npm install @modsynth/auth-client@0.2.0
npm install @modsynth/api-client@0.2.0
```

**Usage Example**:
```tsx
import { AuthClient, decodeJWT, isTokenExpired, tokenStorage } from '@modsynth/auth-client';
import { ApiClient } from '@modsynth/api-client';

const apiClient = new ApiClient({ baseURL: 'https://api.example.com' });
const authClient = new AuthClient(apiClient);

// Login
async function login(email: string, password: string) {
  const tokens = await authClient.login(email, password);
  console.log('Logged in!', tokens);
}

// Check if token is expired
const token = tokenStorage.get();
if (token && isTokenExpired(token)) {
  console.log('Token expired, refreshing...');
  await authClient.refresh();
}

// Decode JWT
const payload = decodeJWT(token);
console.log('User ID:', payload?.sub);
console.log('Expires at:', new Date(payload?.exp * 1000));

// Token storage helpers
tokenStorage.set(token);
tokenStorage.get();
tokenStorage.remove();
tokenStorage.clear();
```

---

## 🛡️ Error Handling

### @modsynth/error-handling@0.2.0

React Error Boundary with client-side error logging.

**Features**:
- 🛡️ **ErrorBoundary**: Catch React errors
- ✨ **ErrorLogger** (New in v0.2.0): Client-side error logging and reporting

**Installation**:
```bash
npm install @modsynth/error-handling@0.2.0
```

**Usage Example**:
```tsx
import { ErrorBoundary, ErrorLogger, errorLogger } from '@modsynth/error-handling';

// Wrap your app
function App() {
  return (
    <ErrorBoundary>
      <YourApp />
    </ErrorBoundary>
  );
}

// Log errors manually
try {
  // some code
} catch (error) {
  errorLogger.log(error);
}

// Send errors to server
errorLogger.sendToServer('/api/errors');

// Create custom logger
const logger = new ErrorLogger(50); // maxLogs: 50
logger.log(new Error('Something went wrong'));
console.log(logger.getLogs());
logger.clear();
```

---

## 🧭 Routing

### @modsynth/routing@0.2.0

React Router wrapper with protected routes and navigation hooks.

**Features**:
- 🧭 **React Router**: Full react-router-dom re-export
- ✨ **ProtectedRoute** (New in v0.2.0): Authentication guard
- ✨ **Navigation Hooks** (New in v0.2.0): useDocumentTitle, usePageTracking, useScrollToTop
- ✨ **Utilities** (New in v0.2.0): generateBreadcrumbs, filterNavigationItems

**Installation**:
```bash
npm install @modsynth/routing@0.2.0
npm install react-router-dom
```

**Usage Example**:
```tsx
import { BrowserRouter, Routes, Route } from '@modsynth/routing';
import { ProtectedRoute, useDocumentTitle } from '@modsynth/routing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

// Use navigation hooks
function PageComponent() {
  useDocumentTitle('My Page Title');
  usePageTracking();
  useScrollToTop();

  return <div>Content</div>;
}
```

---

## 🔌 WebSocket Client

### @modsynth/websocket-client@0.2.0

WebSocket client with automatic reconnection and React integration.

**Features**:
- 🔌 **WebSocketClient**: Connection management
- ✨ **Auto-Reconnect** (New in v0.2.0): Exponential backoff reconnection
- ✨ **React Hook** (New in v0.2.0): `useWebSocket`

**Installation**:
```bash
npm install @modsynth/websocket-client@0.2.0
```

**Usage Example**:
```tsx
import { WebSocketClient, useWebSocket, WebSocketStatus } from '@modsynth/websocket-client';

// Basic usage
const ws = new WebSocketClient('wss://api.example.com/ws');

ws.on('message', (data) => {
  console.log('Received:', data);
});

ws.connect();
ws.send({ type: 'ping' });
ws.disconnect();

// React Hook
function ChatComponent() {
  const { status, sendMessage, lastMessage } = useWebSocket('wss://api.example.com/chat');

  return (
    <div>
      <div>Status: {status}</div>
      {lastMessage && <div>Last message: {lastMessage}</div>}
      <button onClick={() => sendMessage({ text: 'Hello!' })}>
        Send
      </button>
    </div>
  );
}
```

---

## 🌐 Internationalization (i18n)

### @modsynth/i18n@0.2.0

i18next integration with formatters and language sync.

**Features**:
- 🌐 **i18next**: Full i18next and react-i18next re-export
- ✨ **Initialization** (New in v0.2.0): `initI18n()`, language detection
- ✨ **Formatters** (New in v0.2.0): formatDate, formatNumber, formatCurrency
- ✨ **React Hooks** (New in v0.2.0): useLanguageSync, useDirectionSync

**Installation**:
```bash
npm install @modsynth/i18n@0.2.0
npm install i18next react-i18next
```

**Usage Example**:
```tsx
import { initI18n, formatDate, formatCurrency } from '@modsynth/i18n';
import { useTranslation } from '@modsynth/i18n';

// Initialize
await initI18n({
  en: { translation: { welcome: 'Welcome' } },
  ko: { translation: { welcome: '환영합니다' } },
});

// Use in components
function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{formatDate(new Date(), i18n.language)}</p>
      <p>{formatCurrency(1000, i18n.language, 'USD')}</p>

      <button onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
    </div>
  );
}
```

---

## 📊 Chart Components

### @modsynth/chart-components@0.2.0

Chart.js React components with themes.

**Features**:
- 📊 **Chart Components**: Line, Bar, Pie, Doughnut, and more
- ✨ **Themes** (New in v0.2.0): Default and dark themes
- ✨ **Additional Charts** (New in v0.2.0): Scatter, Bubble, Radar, PolarArea

**Installation**:
```bash
npm install @modsynth/chart-components@0.2.0
npm install chart.js react-chartjs-2
```

**Usage Example**:
```tsx
import { Line, Bar } from '@modsynth/chart-components';
import { defaultTheme, darkTheme } from '@modsynth/chart-components';

function ChartExample() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      ...defaultTheme, // Apply theme
    }],
  };

  return <Line data={data} />;
}
```

---

## 📋 Table Components

### @modsynth/table-components@0.2.0

TanStack Table components with CSV export and pagination.

**Features**:
- 📋 **TanStack Table**: Full @tanstack/react-table re-export
- ✨ **CSV Export** (New in v0.2.0): `exportToCSV()` utility
- ✨ **Pagination Helpers** (New in v0.2.0): `getPaginationInfo()`

**Installation**:
```bash
npm install @modsynth/table-components@0.2.0
npm install @tanstack/react-table
```

**Usage Example**:
```tsx
import { useReactTable, getCoreRowModel, flexRender } from '@modsynth/table-components';
import { exportToCSV, getPaginationInfo } from '@modsynth/table-components';

function DataTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleExport = () => {
    exportToCSV(data, 'export.csv');
  };

  return (
    <div>
      <button onClick={handleExport}>Export to CSV</button>
      <table>
        {/* Render table */}
      </table>
      <div>{getPaginationInfo(table)}</div>
    </div>
  );
}
```

---

## 📈 Analytics Client

### @modsynth/analytics-client@0.2.0

Google Analytics integration with React hook.

**Features**:
- 📈 **AnalyticsClient**: Page views, events, custom metrics
- ✨ **React Hook** (New in v0.2.0): `useAnalytics()`

**Installation**:
```bash
npm install @modsynth/analytics-client@0.2.0
```

**Usage Example**:
```tsx
import { AnalyticsClient, useAnalytics } from '@modsynth/analytics-client';

// Initialize
const analytics = new AnalyticsClient('GA-XXXXXXXXX');
analytics.trackPageView('/home');
analytics.trackEvent('button_click', { label: 'Sign Up' });

// React Hook
function Component() {
  const { trackPageView, trackEvent } = useAnalytics('GA-XXXXXXXXX');

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <button onClick={() => trackEvent('click', { button: 'signup' })}>
      Sign Up
    </button>
  );
}
```

---

## 📦 All Modules at a Glance

| Module | Version | npm | Description |
|--------|---------|-----|-------------|
| ui-components | v0.2.0 | ✅ | Tailwind CSS components, Card, Spinner |
| api-client | v0.2.0 | ✅ | Axios REST + hooks, retry |
| state-management | v0.2.0 | ✅ | Redux Toolkit + typed hooks |
| form-validation | v0.2.0 | ✅ | React Hook Form + Zod schemas |
| auth-client | v0.2.0 | ✅ | Auth + JWT utilities |
| error-handling | v0.2.0 | ✅ | Error Boundary + ErrorLogger |
| routing | v0.2.0 | ✅ | React Router + ProtectedRoute |
| websocket-client | v0.2.0 | ✅ | WebSocket + auto-reconnect |
| i18n | v0.2.0 | ✅ | i18next + formatters |
| chart-components | v0.2.0 | ✅ | Chart.js + themes |
| table-components | v0.2.0 | ✅ | TanStack Table + CSV export |
| analytics-client | v0.2.0 | ✅ | Google Analytics + hook |

---

## 🚀 Quick Install

Install all enhanced modules at once:

```bash
npm install \
  @modsynth/ui-components@0.2.0 \
  @modsynth/api-client@0.2.0 \
  @modsynth/state-management@0.2.0 \
  @modsynth/form-validation@0.2.0 \
  @modsynth/auth-client@0.2.0 \
  @modsynth/error-handling@0.2.0 \
  @modsynth/routing@0.2.0 \
  @modsynth/websocket-client@0.2.0 \
  @modsynth/i18n@0.2.0 \
  @modsynth/chart-components@0.2.0 \
  @modsynth/table-components@0.2.0 \
  @modsynth/analytics-client@0.2.0
```

---

**Last Updated**: 2025-11-12
**Version**: v0.2.0
