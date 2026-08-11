# ThynkSuccess Architecture

## Overview

ThynkSuccess is a multi-product platform built as a monorepo using Turborepo.

## Products

### Website (thynksuccess.com)
- Main landing and marketing website
- User-facing application

### Pulse (pulse.thynksuccess.com)
- Pulse product - subdomain application

### Schooling (schooling.thynksuccess.com)
- Schooling product - subdomain application

## Architecture

### Frontend
- All frontends are built with Next.js
- Shared UI components in `@thynk/ui` and `@thynk/components`
- Shared hooks in `@thynk/hooks`

### Backend (Coming Soon)
- Each product will have its own backend API
- Shared microservices for cross-cutting concerns

### Shared Services
- **Auth Service**: Authentication & authorization
- **Notification Service**: Email & push notifications
- **Payment Service**: Payment processing
- **Media Service**: File uploads & media management
- **Analytics Service**: Usage tracking & analytics
- **Gateway**: API Gateway / BFF

### Infrastructure
- Docker Compose for local development
- Terraform for infrastructure as code
- Kubernetes for container orchestration
- Nginx for reverse proxy and routing

## Tech Stack

- **Monorepo**: Turborepo + npm workspaces
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Database**: PostgreSQL
- **CI/CD**: GitHub Actions
