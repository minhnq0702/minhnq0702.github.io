# Deployment Guide

This guide will help you deploy your Jekyll site to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine

## Steps to Deploy

1. **Initialize Git Repository** (if not already done)
   ```
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub Repository**
   - Go to GitHub and create a new repository named `minhnq0702.github.io`
   - This specific name format is required for GitHub Pages user sites

3. **Link Local Repository to GitHub**
   ```
   git remote add origin https://github.com/minhnq0702/minhnq0702.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow file already in your repository will handle the deployment

5. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - You can check the progress in the Actions tab of your repository
   - Once deployed, your site will be available at `https://minhnq0702.github.io`

## Making Updates

To update your site:
1. Make changes locally
2. Commit the changes
   ```
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Actions will automatically rebuild and deploy your site

## Troubleshooting

If your site doesn't deploy correctly:
1. Check the GitHub Actions logs for errors
2. Ensure your _config.yml file is correctly formatted
3. Verify that all required dependencies are listed in your Gemfile
