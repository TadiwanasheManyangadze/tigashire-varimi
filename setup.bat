@echo off
echo 🌾 Setting up Tigashire Varimi...
echo.

echo 📦 Installing client dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install client dependencies
    pause
    exit /b 1
)
echo ✅ Client dependencies installed

echo.
echo 📦 Installing server dependencies...
cd ..\server
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install server dependencies
    pause
    exit /b 1
)
echo ✅ Server dependencies installed

echo.
echo 🔧 Creating environment files...
cd ..\client
if not exist .env (
    copy env.example .env
    echo ✅ Client .env file created
) else (
    echo ℹ️ Client .env file already exists
)

cd ..\server
if not exist .env (
    copy env.example .env
    echo ✅ Server .env file created
) else (
    echo ℹ️ Server .env file already exists
)

echo.
echo 🚀 Setup complete! 
echo.
echo To run the project:
echo 1. Start MongoDB
echo 2. Open a terminal and run: cd server && npm run dev
echo 3. Open another terminal and run: cd client && npm run dev
echo.
echo 🌐 Client will run on: http://localhost:3000
echo 🔌 Server will run on: http://localhost:4000
echo.
pause
