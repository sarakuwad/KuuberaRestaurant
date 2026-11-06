@echo off
title Push Kuubera Pure Veg to GitHub
echo ========================================================
echo   KUUBERA PURE VEG - GIT PUSH
echo   Repository: https://github.com/sarakuwad/KuuberaRestaurant.git
echo ========================================================
echo.

set PATH=C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\cmd;C:\Users\%USERNAME%\AppData\Local\Programs\MinGit\ucrt64\bin;%PATH%

git add -A
git commit -m "Update Kuubera Pure Veg website" 2>nul

set /p TOKEN="Enter your GitHub Personal Access Token (or press Enter to use saved Git Credential Manager): "

if "%TOKEN%"=="" (
    echo.
    echo Pushing with Git Credential Manager...
    git push -u origin main --force
) else (
    echo.
    echo Pushing with provided token...
    git push -u https://sarakuwad:%TOKEN%@github.com/sarakuwad/KuuberaRestaurant.git main --force
)

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESSFULLY PUSHED TO GITHUB!
    echo   Repo: https://github.com/sarakuwad/KuuberaRestaurant
    echo ========================================================
) else (
    echo.
    echo Push failed. Please verify your token has 'repo' scope.
)

echo.
pause
