#!/bin/bash

# DrBalcony Webinar Pop-ups Deployment Script
echo "🚀 Deploying DrBalcony Webinar Pop-ups..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: DrBalcony webinar pop-ups"
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "DrBalcony webinar pop-ups - 3 optimized variants ready for deployment"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found."
    echo "Please create a GitHub repository and run:"
    echo "git remote add origin YOUR_GITHUB_REPO_URL"
    echo "Then run this script again."
    exit 1
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

echo "✅ Git push complete!"
echo ""
echo "🌐 Next steps for Vercel deployment:"
echo "1. Go to https://vercel.com"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Deploy automatically"
echo ""
echo "📱 Your pop-ups will be available at:"
echo "- /hero-overlay.html"
echo "- /card-blur-variation.html" 
echo "- /businessman-engagement-variation.html"
echo ""
echo "🎯 All CTAs link to: https://drbalcony.com/webinar/"
echo ""
echo "✨ Deployment ready!"
