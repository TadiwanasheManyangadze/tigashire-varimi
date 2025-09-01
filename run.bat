@echo off
echo 🌾 Starting Tigashire Varimi...
echo.

echo 🔌 Starting server...
start "Server" cmd /k "cd server && npm run dev"

echo.
echo ⏳ Waiting for server to start...
timeout /t 5 /nobreak >nul

echo.
echo 🌐 Starting client...
start "Client" cmd /k "cd client && npm run dev"

echo.
echo 🚀 Both servers are starting!
echo.
echo 🌐 Client will open on: http://localhost:3000
echo 🔌 Server is running on: http://localhost:4000
echo.
echo Press any key to close this window...
pause >nul
