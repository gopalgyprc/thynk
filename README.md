# 🚀 ThynkSuccess

A multi-product platform built as a **Turborepo** monorepo.

## Products

| Product | Domain | Frontend | Backend |
|---------|--------|----------|---------|
| **Website** | thynksuccess.com | Next.js (port 3000) | Coming Soon (port 4000) |
| **Pulse** | pulse.thynksuccess.com | Next.js (port 3001) | Coming Soon (port 4001) |
| **Schooling** | schooling.thynksuccess.com | Next.js (port 3002) | Coming Soon (port 4002) |

## Project Structure

```
thynksuccess/
├── apps/                    # Product applications
│   ├── website/            # Main ThynkSuccess website
│   │   ├── frontend/       # Next.js app
│   │   ├── backend/        # API (coming soon)
│   │   └── docker-compose.yml
│   ├── pulse/              # Pulse product
│   │   ├── frontend/       # Next.js app
│   │   ├── backend/        # API (coming soon)
│   │   └── docker-compose.yml
│   └── schooling/          # Schooling product
│       ├── frontend/       # Next.js app
│       ├── backend/        # API (coming soon)
│       └── docker-compose.yml
├── services/               # Shared microservices
│   ├── auth-service/
│   ├── notification-service/
│   ├── payment-service/
│   ├── media-service/
│   ├── analytics-service/
│   └── gateway/
├── shared/                 # Shared packages
│   ├── ui/                # @thynk/ui
│   ├── components/        # @thynk/components
│   ├── hooks/             # @thynk/hooks
│   ├── utils/             # @thynk/utils
│   ├── constants/         # @thynk/constants
│   ├── types/             # @thynk/types
│   ├── config/            # @thynk/config
│   └── validation/        # @thynk/validation
├── packages/               # Shared configs
│   ├── eslint-config/     # @thynk/eslint-config
│   ├── tsconfig/          # @thynk/tsconfig
│   └── prettier-config/   # @thynk/prettier-config
├── infrastructure/         # Infrastructure
│   ├── nginx/             # Reverse proxy configs
│   ├── docker/            # Root docker-compose
│   ├── terraform/         # IaC (AWS)
│   ├── kubernetes/        # K8s manifests
│   └── scripts/           # Setup scripts
├── docs/                  # Documentation
└── .github/               # GitHub Actions workflows
```

## Tech Stack

- **Monorepo**: Turborepo + npm workspaces
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Database**: PostgreSQL 16
- **Infrastructure**: Docker, Terraform, Kubernetes
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 10

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/thynksuccess.git
cd thynksuccess

# Install dependencies
npm install

# Start all applications in development mode
npm run dev
```

### Individual App Development

```bash
# Start only the website
npm run dev --filter=@thynk/website

# Start only pulse
npm run dev --filter=@thynk/pulse

# Start only schooling
npm run dev --filter=@thynk/schooling
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start all apps in development mode |
| `npm run build` | Build all apps for production |
| `npm run lint` | Lint all projects |
| `npm run check-types` | Type-check all projects |
| `npm run format` | Format code with Prettier |
| `npm run clean` | Clean all build outputs |

## Adding a New Product

1. Create the app structure under `apps/`:
   ```
   apps/new-product/
   ├── frontend/       # Next.js app
   ├── backend/        # API (optional)
   └── docker-compose.yml
   ```
2. Update the root `turbo.json` pipeline if needed
3. Configure Nginx routing in `infrastructure/nginx/`

## License

Private - All rights reserved.
