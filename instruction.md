# AI Agent Prompt: GitHub Pages Profile Site Development

## Project Brief
You are tasked with helping a developer create a professional CV/portfolio website using GitHub Pages, Jekyll, and Tailwind CSS. The site will serve as an online resume with a project showcase.

## Client Requirements

### Site Structure
- **Main Page Sections**: Experience, Skills, Contact
- **Project Showcase**: 5 projects accessible via scrollable sidebar
- **Navigation**: Each project links to dedicated subpage with detailed content
- **Layout**: Single-page main layout with project subpages

### Design Specifications
- **Color Palette**: 
  - Primary Orange: #FE5D26
  - Secondary Gold: #F2C078  
  - Cream: #FAEDCA
  - Sage Green: #C1DBB3
- **Sidebar**: Scrollable project menu
- **Responsiveness**: Mobile-first, fully responsive design

### Technical Stack
- **Platform**: GitHub Pages
- **Static Site Generator**: Jekyll
- **CSS Framework**: Tailwind CSS
- **Responsive Design**: Required for mobile, tablet, desktop

### Content Status
- **CV Content**: Client has existing CV content ready
- **Project Information**: Needs to be collected (5 projects total)
- **GitHub Integration**: No automatic repo pulling required

## Technical Implementation Requirements

### Repository Setup
```
Repository Name: {username}.github.io
Structure:
├── _config.yml
├── _layouts/
│   ├── default.html
│   └── project.html
├── _includes/
│   ├── head.html
│   ├── header.html
│   └── sidebar.html
├── _sass/
│   └── main.scss
├── assets/
│   ├── css/
│   └── images/
├── projects/
│   ├── project1.md
│   ├── project2.md
│   ├── project3.md
│   ├── project4.md
│   └── project5.md
├── index.html
└── Gemfile
```

### Jekyll Configuration
```yaml
# _config.yml template
title: [Client Name] - Portfolio
description: Professional CV and Project Portfolio
url: "https://[username].github.io"

markdown: kramdown
highlighter: rouge

plugins:
  - jekyll-feed
  - jekyll-sitemap

# Personal Information Variables
name: "[Client Full Name]"
title_job: "[Client Job Title]"
email: "[client.email@example.com]"
phone: "[phone number]"
location: "[City, Country]"
linkedin: "[linkedin-profile]"
github: "[github-username]"

# Projects Configuration
projects:
  - name: "[Project 1 Name]"
    slug: "project1"
    tech: "[Technology Stack]"
    summary: "[Brief description]"
  - name: "[Project 2 Name]"
    slug: "project2"
    tech: "[Technology Stack]"
    summary: "[Brief description]"
  # [Additional 3 projects to be defined]
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './index.html',
    './projects/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE5D26',
        'secondary': '#F2C078',
        'accent': '#FAEDCA',
        'sage': '#C1DBB3'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
```

## Content Structure Requirements

### Main Page Sections

#### Experience Section
```yaml
experiences:
  - company: "[Company Name]"
    position: "[Job Title]"
    duration: "[Start Date - End Date]"
    description: "[Key achievements and responsibilities]"
    technologies: ["[Tech1]", "[Tech2]", "[Tech3]"]
```

#### Skills Section Categories
- Programming Languages
- Frameworks & Libraries
- Tools & Technologies
- Soft Skills

#### Contact Section Elements
- Contact form integration
- Social media links
- CV download functionality

### Project Information Collection
For each of the 5 projects, collect:
1. **Project Name & Description**
2. **Technology Stack**
3. **Key Features/Achievements** 
4. **Challenges & Solutions**
5. **Live Demo Link** (if available)
6. **Repository Link** (if applicable)
7. **Screenshots/Images**
8. **Role in Project**
9. **Timeline/Duration**
10. **Lessons Learned**

## Design System Specifications

### Color Usage Guidelines
- **Primary Orange (#FE5D26)**: CTA buttons, active links, highlights
- **Secondary Gold (#F2C078)**: Section headers, accent elements
- **Cream (#FAEDCA)**: Background sections, card backgrounds
- **Sage Green (#C1DBB3)**: Subtle backgrounds, borders, secondary text

### Typography Hierarchy
- **Headings**: Modern sans-serif (Inter/Poppins)
- **Body Text**: System font stack for performance
- **Code**: Monospace font (JetBrains Mono/Fira Code)

### Responsive Breakpoints
- **Mobile (< 768px)**: Stacked layout, hamburger menu
- **Tablet (768px - 1024px)**: Collapsible sidebar
- **Desktop (> 1024px)**: Fixed sidebar (300px width)

## Development Workflow

### Phase 1: Setup (Priority: High)
1. Repository creation and cloning
2. Jekyll and dependency installation
3. Tailwind CSS integration
4. Basic file structure creation

### Phase 2: Content Integration (Priority: High)
1. CV content structuring
2. Project information collection
3. Configuration file setup
4. Content markdown creation

### Phase 3: Layout Development (Priority: Medium)
1. Default layout template
2. Project page template
3. Sidebar component
4. Navigation implementation

### Phase 4: Styling & Responsiveness (Priority: Medium)
1. Mobile-first CSS implementation
2. Component styling
3. Cross-device testing
4. Performance optimization

### Phase 5: Deployment (Priority: Low)
1. Local testing
2. Production build
3. GitHub Pages deployment
4. Final testing and adjustments

## AI Agent Instructions

### Primary Tasks
1. **Guide repository setup** with proper Jekyll and Tailwind configuration
2. **Collect project information** systematically from client
3. **Create responsive layouts** following mobile-first principles
4. **Implement design system** using specified color palette
5. **Provide code examples** for all major components

### Information Gathering
- Request client's CV content in structured format
- Collect detailed project information for all 5 projects
- Clarify any design preferences or additional requirements
- Determine image/media assets needed

### Code Generation Guidelines
- Use semantic HTML5 elements
- Implement proper Jekyll templating
- Follow Tailwind CSS best practices
- Ensure accessibility compliance
- Maintain clean, documented code

### Testing Requirements
- Cross-browser compatibility
- Mobile responsiveness validation
- Performance optimization
- GitHub Pages deployment verification

## Success Criteria
- [ ] Fully functional Jekyll site deployed on GitHub Pages
- [ ] Responsive design working across all device sizes
- [ ] All 5 projects accessible via sidebar navigation
- [ ] Professional CV presentation with Experience, Skills, Contact sections
- [ ] Consistent color scheme implementation
- [ ] Clean, maintainable code structure
- [ ] Fast loading times and good performance scores

## Next Steps for AI Agent
1. Begin with repository setup guidance
2. Collect client's specific project information
3. Structure CV content appropriately
4. Implement responsive layouts
5. Deploy and test final site

**Note**: Client has existing CV content ready and needs assistance collecting/organizing project information for the 5 projects to be showcased.