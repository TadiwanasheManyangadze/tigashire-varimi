Write-Host "🌾 Starting Tigashire Varimi..." -ForegroundColor Green
Write-Host ""

Write-Host "🔌 Starting server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\server'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "⏳ Waiting for server to start..." -ForegroundColor Cyan
Start-Sleep -Seconds 5

Write-Host ""
Write-Host "🌐 Starting client..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\client'; npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "🚀 Both servers are starting!" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Client will open on: http://localhost:3000" -ForegroundColor Cyan
Write-Host "🔌 Server is running on: http://localhost:4000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Enter to close this window..." -ForegroundColor White
Read-Host
