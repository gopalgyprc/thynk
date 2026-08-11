#!/bin/bash
# ThynkSuccess Setup Script
# This script sets up the development environment

set -e

echo "🚀 Setting up ThynkSuccess development environment..."

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$node_version" -lt 20 ]; then
    echo "❌ Node.js 20+ is required. Current version: $(node -v)"
    exit 1
fi
echo "✅ Node.js $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment files
echo "🔧 Setting up environment files..."
if [ ! -f apps/website/frontend/.env.local ]; then
    cp apps/website/frontend/.env.example apps/website/frontend/.env.local 2>/dev/null || true
fi

echo "✅ Setup complete!"
echo ""
echo "To start development:"
echo "  npm run dev"
