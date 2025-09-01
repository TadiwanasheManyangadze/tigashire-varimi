# 🚀 Quick Start Guide

## ⚡ Get Running in 5 Minutes

### Prerequisites Check
Make sure you have:
- ✅ Node.js installed (`node --version`)
- ✅ npm installed (`npm --version`)
- ✅ MongoDB running locally

### 🎯 Step-by-Step Setup

#### 1. Install Dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

#### 2. Create Environment Files
```bash
# Copy example files
cd ../client
copy env.example .env

cd ../server
copy env.example .env
```

#### 3. Start the Application
```bash
# Terminal 1 - Start Server
cd server
npm run dev

# Terminal 2 - Start Client
cd client
npm run dev
```

#### 4. Open Your Browser
- 🌐 **Client**: http://localhost:3000
- 🔌 **Server**: http://localhost:4000

### 🎉 You're Done!
The application should now be running with:
- Beautiful UI with Google Poppins font
- Multi-language support (English, Shona, Ndebele)
- Fresh produce marketplace
- Shopping cart functionality
- User authentication

### 🔧 If Something Goes Wrong
1. Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. Ensure MongoDB is running
3. Verify all dependencies are installed
4. Check console for error messages

### 📱 Test the App
1. Browse products on the home page
2. Try switching languages
3. Register a new account
4. Add items to cart
5. Test the checkout process

### 🚀 Next Steps
- Customize the product images in `client/public/images/`
- Add more products via the API
- Modify the color scheme in `client/tailwind.config.js`
- Add new features to the marketplace

---

**Need help?** Check the [README.md](./README.md) for detailed documentation!
