# 🚀 Deployment Guide - Tigashire Varimi

## 📋 Prerequisites

1. **GitHub Account** - Your code should be on GitHub
2. **MongoDB Atlas Account** - For database
3. **Stripe Account** - For payments (optional for testing)

## 🎯 Step-by-Step Deployment

### **Step 1: Deploy Backend (Railway)**

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login with GitHub**
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Select your repository**
5. **Set Root Directory to: `server`**
6. **Add Environment Variables:**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/tigashire-varimi
   JWT_SECRET=your-super-secret-jwt-key-here
   STRIPE_SECRET_KEY=your-stripe-secret-key-here
   CLIENT_URL=https://your-frontend-url.vercel.app
   PORT=4000
   ```
7. **Deploy and copy the generated URL**

### **Step 2: Deploy Frontend (Vercel)**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login with GitHub**
3. **Click "New Project" → Import your repository**
4. **Set Root Directory to: `client`**
5. **Add Environment Variable:**
   ```
   VITE_API_URL=https://your-backend-url.railway.app
   ```
6. **Deploy**

### **Step 3: Update CORS Settings**

After getting your frontend URL, update the backend CORS:

1. **Go back to Railway dashboard**
2. **Add environment variable:**
   ```
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```
3. **Redeploy the backend**

## 🔧 Environment Variables Reference

### **Backend (Railway):**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/tigashire-varimi
JWT_SECRET=your-super-secret-jwt-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key-here
CLIENT_URL=https://your-frontend-url.vercel.app
PORT=4000
```

### **Frontend (Vercel):**
```env
VITE_API_URL=https://your-backend-url.railway.app
```

## 🗄️ MongoDB Atlas Setup

1. **Create account at [MongoDB Atlas](https://mongodb.com/atlas)**
2. **Create new cluster (free tier)**
3. **Create database user**
4. **Get connection string**
5. **Replace `MONGO_URI` in Railway environment variables**

## 💳 Stripe Setup (Optional)

1. **Create account at [Stripe.com](https://stripe.com)**
2. **Get API keys from dashboard**
3. **Add to Railway environment variables**

## 🎉 Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend is loading without errors
- [ ] Database connection is working
- [ ] Products are displaying correctly
- [ ] User registration/login works
- [ ] Shopping cart functions properly
- [ ] Payment integration works (if using Stripe)

## 🔍 Troubleshooting

### **Common Issues:**

1. **CORS Errors:** Make sure CLIENT_URL is set correctly
2. **Database Connection:** Verify MONGO_URI is correct
3. **Build Errors:** Check that all dependencies are installed
4. **Environment Variables:** Ensure all variables are set in both platforms

### **Useful Commands:**

```bash
# Test backend locally
cd server
npm start

# Test frontend build
cd client
npm run build

# Check environment variables
echo $VITE_API_URL
```

## 📞 Support

If you encounter issues:
1. Check Railway and Vercel logs
2. Verify environment variables
3. Test locally first
4. Check browser console for errors

---

**Your beautiful Tigashire Varimi marketplace will be live! 🌾**
