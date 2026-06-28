# Rangesh Vasudevan Robotics Portfolio

Clean static website for GitHub Pages. No build step required.

## Fresh start deployment

1. Delete the old `Rangesh15.github.io` repository on GitHub.
2. Create a new public repository named exactly `Rangesh15.github.io`.
3. Upload the **contents** of this folder, not the folder itself.
4. Go to Settings → Pages.
5. Set Source to `Deploy from a branch`.
6. Set Branch to `main` and Folder to `/ (root)`.
7. Wait 1–3 minutes.
8. Visit `https://rangesh15.github.io`.

## Terminal deployment

```bash
rm -rf .git
git init -b main
git add .
git commit -m "Initial robotics portfolio website"
git remote add origin https://github.com/Rangesh15/Rangesh15.github.io.git
git push -u origin main
```
