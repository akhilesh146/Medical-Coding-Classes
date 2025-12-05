# GitHub Push Script
# Replace YOUR_USERNAME with your actual GitHub username
# Replace REPO_NAME with your repository name

$username = "YOUR_USERNAME"
$repoName = "disha-samarth-coaching"

Write-Host "Setting up GitHub remote..." -ForegroundColor Green

# Add remote (remove if exists first)
git remote remove origin 2>$null
git remote add origin "https://github.com/$username/$repoName.git"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

Write-Host "Done! Check your repository at: https://github.com/$username/$repoName" -ForegroundColor Cyan

