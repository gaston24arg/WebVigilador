git remote remove origin 2>$null
git remote add origin https://github.com/gaston24arg/WebVigilador.git
Write-Output "Remote configured. Pushing to GitHub..."
git push -u origin main
