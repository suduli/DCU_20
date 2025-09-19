#!/bin/bash

# DCU_20 Website Deployment Script
# This script helps you set up and deploy the interactive website

echo "🚀 DCU_20 Website Deployment Script"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Navigate to website directory
cd website

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "Choose an option:"
echo "1. Start development server"
echo "2. Build for production"
echo "3. Build and serve production"

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🖥️  Starting development server..."
        echo "The website will open at http://localhost:3000"
        npm start
        ;;
    2)
        echo "🏗️  Building for production..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Production build completed successfully!"
            echo "📁 Files are ready in the 'build' directory"
            echo "🌐 You can deploy these files to any static hosting service"
        else
            echo "❌ Build failed"
            exit 1
        fi
        ;;
    3)
        echo "🏗️  Building for production..."
        npm run build
        if [ $? -eq 0 ]; then
            echo "✅ Production build completed!"
            echo "🌐 Installing serve to run production server..."
            npm install -g serve
            echo "🚀 Starting production server..."
            echo "The website will open at http://localhost:3000"
            serve -s build
        else
            echo "❌ Build failed"
            exit 1
        fi
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac