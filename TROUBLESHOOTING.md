# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. MongoDB Connection Issues

**Problem**: Server shows "MongoDB connection error"
**Solution**: 
- Make sure MongoDB is running on your system
- Check if MongoDB is installed: `mongod --version`
- Start MongoDB service:
  - Windows: `net start MongoDB` (in admin command prompt)
  - macOS: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

### 2. Port Already in Use

**Problem**: "EADDRINUSE" error when starting server
**Solution**:
- Change the port in server/.env file: `PORT=4001`
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :4000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -ti:4000 | xargs kill -9
  ```

### 3. Client Can't Connect to Server

**Problem**: Client shows network errors or can't fetch data
**Solution**:
- Verify server is running on correct port
- Check VITE_API_URL in client/.env file
- Ensure server is accessible at http://localhost:4000
- Check browser console for CORS errors

### 4. Dependencies Installation Issues

**Problem**: npm install fails
**Solution**:
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and package-lock.json:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- Check Node.js version: `node --version` (should be 16+)
- Update npm: `npm install -g npm@latest`

### 5. Build Errors

**Problem**: Client build fails
**Solution**:
- Check for syntax errors in React components
- Verify all imports are correct
- Clear build cache: `npm run build -- --force`
- Check for missing dependencies

### 6. Environment Variables Not Working

**Problem**: Environment variables not being read
**Solution**:
- Ensure .env files are in the correct directories
- Restart the development servers after changing .env
- Check file names (should be exactly `.env`, not `.env.txt`)
- Verify variable names match what the code expects

### 7. Images Not Loading

**Problem**: Product images show as broken
**Solution**:
- Check if images exist in `client/public/images/`
- Verify image file names match the database
- Ensure image files are not corrupted
- Check browser network tab for 404 errors

### 8. Authentication Issues

**Problem**: Login/Register not working
**Solution**:
- Check if JWT_SECRET is set in server/.env
- Verify database connection
- Check server logs for error messages
- Ensure bcrypt is properly installed

### 9. Stripe Checkout Issues

**Problem**: Checkout process fails
**Solution**:
- Verify STRIPE_SECRET_KEY is set in server/.env
- Check if Stripe keys are valid
- Ensure client is using correct Stripe publishable key
- Check server logs for Stripe errors

### 10. Performance Issues

**Problem**: App is slow or unresponsive
**Solution**:
- Check browser console for errors
- Verify database queries are optimized
- Check if large images are being loaded
- Ensure proper caching is implemented

## Getting Help

If you're still experiencing issues:

1. **Check the logs**: Look at both client and server console outputs
2. **Verify setup**: Ensure all prerequisites are met
3. **Check versions**: Verify Node.js, npm, and MongoDB versions
4. **Search issues**: Look for similar problems in the project repository
5. **Ask for help**: Provide detailed error messages and system information

## System Requirements

- **Node.js**: 16.0.0 or higher
- **npm**: 8.0.0 or higher
- **MongoDB**: 4.4 or higher
- **RAM**: Minimum 4GB, recommended 8GB
- **Storage**: At least 1GB free space

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Network Requirements

- Local development: No special requirements
- Production: HTTPS required for Stripe integration
- CORS: Configured for localhost development
