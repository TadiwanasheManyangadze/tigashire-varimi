# 🌾 Tigashire Varimi - Fresh Produce from Zimbabwe

A beautiful e-commerce platform connecting Zimbabwean farmers with consumers worldwide. Built with React, Node.js, and MongoDB.

## ✨ Features

- **Beautiful UI/UX** - Modern, responsive design with Google Poppins font
- **Multi-language Support** - English, Shona, and Ndebele
- **Fresh Produce Marketplace** - Organic fruits, vegetables, and grains
- **Farmer Profiles** - Direct connection with local farmers
- **Secure Checkout** - Stripe payment integration
- **Responsive Design** - Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
cd tigashire-varimi
```

### 2. Install Dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Environment Setup

#### Client (.env file in client directory)
```env
VITE_API_URL=http://localhost:4000
```

#### Server (.env file in server directory)
```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/tigashire-varimi
CLIENT_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key-here
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:
```bash
# On Windows (if using MongoDB Community)
mongod

# On macOS (if using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

### 5. Run the Application

#### Terminal 1 - Start the Server
```bash
cd server
npm run dev
```
Server will run on: http://localhost:4000

#### Terminal 2 - Start the Client
```bash
cd client
npm run dev
```
Client will run on: http://localhost:3000

### 6. Seed the Database (Optional)

```bash
cd server
npm run seed
```

## 🛠️ Development

### Available Scripts

#### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Server
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data

### Project Structure

```
tigashire-varimi/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and stores
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/            # API routes
│   ├── models/            # MongoDB models
│   ├── utils/             # Utility functions
│   └── package.json
└── README.md
```

## 🎨 UI Components

The application uses:
- **Tailwind CSS** for styling
- **Google Poppins** font family
- **Custom color palette** with green and yellow themes
- **Responsive design** for all screen sizes
- **Beautiful animations** and transitions

## 🔧 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check your connection string in .env file

2. **Port Already in Use**
   - Change PORT in server .env file
   - Kill processes using the port: `npx kill-port 4000`

3. **Client Can't Connect to Server**
   - Verify server is running on correct port
   - Check VITE_API_URL in client .env file
   - Ensure CORS is properly configured

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure all dependencies are installed
4. Check MongoDB connection

## 🌟 Features in Detail

### Authentication
- User registration and login
- JWT-based authentication
- Role-based access (farmer/buyer)

### Product Management
- Browse fresh produce
- Product details with farmer information
- Shopping cart functionality
- Secure checkout process

### Multi-language Support
- English (default)
- Shona (Zimbabwe's main language)
- Ndebele (Zimbabwe's second language)

### Responsive Design
- Mobile-first approach
- Beautiful on all devices
- Touch-friendly interface

## 📱 Mobile Experience

The application is fully responsive and provides an excellent mobile experience:
- Touch-friendly buttons and controls
- Optimized layouts for small screens
- Fast loading times
- Native app-like feel

## 🔒 Security Features

- JWT authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Secure payment processing

## 🚀 Deployment

### Client Deployment
```bash
cd client
npm run build
# Deploy the dist folder to your hosting service
```

### Server Deployment
```bash
cd server
npm start
# Use PM2 or similar for production process management
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Zimbabwean farmers for inspiration
- React and Node.js communities
- Tailwind CSS for beautiful styling
- MongoDB for reliable data storage

---

**Made with ❤️ for Zimbabwean farmers and fresh produce lovers worldwide!**

