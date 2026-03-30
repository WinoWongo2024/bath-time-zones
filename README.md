# bath-time-# Bath Time Zones
A PWA that splits Bath into 7 custom time zones - deployed from GitHub to EdgeOne.


## **DEPLOY TO GITHUB PAGES**
1. Go to your repo → Settings → Pages
2. Under "Build and deployment", set "Source" to "Deploy from a branch"
3. Choose "main" branch and "/ (root)" folder → Save
4. Your app will be live at `https://[your-username].github.io/bath-time-zones/`


## **PUSH TO EDGEONE FROM GITHUB**
1. Log into your EdgeOne console → Sites → Add Site
2. Choose "GitHub" as the deployment source
3. Authorize EdgeOne to access your repo
4. Select the `bath-time-zones` repo and `main` branch
5. Set the root directory to `/` and enable "Auto-deploy on commit"
6. EdgeOne will build and host your app - add a custom domain if needed!


## **NOTES**
- Replace the `base href="/bath-time-zones/"` line in `index.html` if using a custom domain
- Add your own icon files to the `/icons` folder (use tools like [RealFaviconGenerator](https://realfavicongenerator.net/) to create them)
- Location access works on both HTTP (localhost) and HTTPS (GitHub/EdgeOne)
