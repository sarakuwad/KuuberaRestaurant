@echo off
title Kuubera Pure Veg - Local Website Launcher
echo ========================================================
echo   KUUBERA PURE VEG
echo   "Where Every Meal Becomes a Royal Experience."
echo   Launching website...
echo ========================================================
echo.

if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python311\python.exe" (
    echo Starting local server with Python 3.11 at http://localhost:8000 ...
    start http://localhost:8000
    "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python311\python.exe" server.py
    pause
    exit /b
)

echo Opening index.html directly in your default browser...
start "" "%~dp0index.html"
