#!/bin/bash

echo "🚀 Deploying DrBalcony Pop-ups to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (will prompt for authentication)
echo "🔐 Logging into Vercel..."
vercel login

# Deploy the project
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📱 Your live links will be shown above."
