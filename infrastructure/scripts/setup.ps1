# ThynkSuccess Setup Script (PowerShell)
# This script sets up the development environment on Windows

Write-Host "🚀 Setting up ThynkSuccess development environment..." -ForegroundColor Cyan

# Check Node.js version
Write-Host "📦 Checking Node.js version..." -ForegroundColor Yellow
$nodeVersion = node -v
if (-not $nodeVersion) {
    Write-Host "❌ Node.js is not installed. Please install Node.js 20+." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Node.js $nodeVersion" -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start development:" -ForegroundColor Cyan
Write-Host "  npm run dev"
