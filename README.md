# Personal Portfolio Website

A professional portfolio website built with Jekyll and Tailwind CSS, designed to be deployed on GitHub Pages.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Project showcase with detailed project pages
- Skills and experience sections
- Contact form
- Customizable color scheme

## Setup Instructions

### Prerequisites

- Ruby (with Bundler)
- Node.js and npm

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/minhnq0702/minhnq0702.github.io.git
   cd minhnq0702.github.io
   ```

2. Install Ruby dependencies:
   ```bash
   bundle install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Build the Tailwind CSS:
   ```bash
   npm run build:css
   ```

### Development

1. Start the Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```

2. In a separate terminal, watch for CSS changes:
   ```bash
   npm run watch:css
   ```

3. Visit `http://localhost:4000` in your browser

## Deployment

This site is designed to be deployed on GitHub Pages. Simply push your changes to the main branch of your repository named `username.github.io`, and GitHub will automatically build and deploy your site.

## Customization

- Edit `_config.yml` to update your personal information
- Modify project files in the `projects` directory
- Update the content in `index.html`
- Customize the color scheme in `tailwind.config.js`

## License

MIT
