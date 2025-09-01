Write-Host "🌾 Setting up Tigashire Varimi..." -ForegroundColor Green
Write-Host ""

Write-Host "📦 Installing client dependencies..." -ForegroundColor Yellow
Set-Location "client"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install client dependencies" -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}
Write-Host "✅ Client dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "📦 Installing server dependencies..." -ForegroundColor Yellow
Set-Location "../server"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install server dependencies" -ForegroundColor Red
    Read-Host "Press Enter to continue"
    exit 1
}
Write-Host "✅ Server dependencies installed" -ForegroundColor Green

Write-Host ""
Write-Host "🔧 Creating environment files..." -ForegroundColor Yellow
Set-Location "../client"
if (!(Test-Path ".env")) {
    Copy-Item "env.example" ".env"
    Write-Host "✅ Client .env file created" -ForegroundColor Green
} else {
    Write-Host "ℹ️ Client .env file already exists" -ForegroundColor Cyan
}

Set-Location "../server"
if (!(Test-Path ".env")) {
    Copy-Item "env.example" ".env"
    Write-Host "✅ Server .env file created" -ForegroundColor Green
} else {
    Write-Host "ℹ️ Server .env file already exists" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🚀 Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To run the project:" -ForegroundColor White
Write-Host "1. Start MongoDB" -ForegroundColor White
Write-Host "2. Open a terminal and run: cd server && npm run dev" -ForegroundColor White
Write-Host "3. Open another terminal and run: cd client && npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Client will run on: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔌 Server will run on: http://localhost:4000" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to continue"
