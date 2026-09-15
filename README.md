# Amazon SDE Portfolio Website

A modern, responsive portfolio website built for an Amazon Software Development Engineer showcasing AWS skills, projects, experience, and more.

## 🚀 Live Demo

Visit the live portfolio: [https://amazon-sde-portfolio-20241219.vercel.app](https://amazon-sde-portfolio-20241219.vercel.app)

## ✨ Features

- **Dark/Light Theme Toggle** with localStorage persistence
- **Fully Responsive Design** - works on mobile, tablet, and desktop
- **Modern UI/UX** with smooth animations and transitions
- **Accessibility Focused** - WCAG AA compliant
- **Performance Optimized** - fast loading times
- **Contact Form** with validation and success/error states
- **Interactive Timeline** for experience and education
- **Project Showcase** with 4 featured AWS projects
- **Skills Section** highlighting AWS expertise
- **SEO Optimized** with proper meta tags

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - CSS Variables, Flexbox, Grid, Animations
- **JavaScript** - Vanilla JS for interactivity
- **Font Awesome** - Icons
- **Vercel** - Deployment and hosting

## 📁 Project Structure

```
amazon-sde-portfolio-20241219/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── variables.css     # CSS Variables for theming
│   │   ├── base.css          # CSS Reset and base styles
│   │   ├── components.css    # Component-specific styles
│   │   └── utils.css         # Utility classes and helpers
│   ├── js/
│   │   ├── theme.js          # Dark mode toggle functionality
│   │   ├── form.js           # Contact form validation
│   │   ├── timeline.js       # Timeline animations
│   │   └── main.js           # Main interactivity and animations
│   ├── img/                  # Images (profile, projects)
│   └── icons/                # SVG icons (AWS logos, etc.)
```

## 🎯 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional bio and profile image
3. **AWS Skills** - Visual representation of AWS expertise
4. **Projects** - Grid of 4 featured projects with hover effects
5. **Timeline** - Vertical timeline of experience and education
6. **Contact** - Form with validation and submission feedback

## 🔧 Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/amazon-sde-portfolio-20241219.git
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: ≥ 576px
- **Desktop**: ≥ 768px
- **Large Desktop**: ≥ 992px

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible indicators
- Skip to content link
- Color contrast compliant (WCAG AA)
- Responsive text scaling

## ⚡ Performance Optimizations

- CSS Variables for efficient theming
- Minimal DOM manipulation
- Efficient event listeners
- Optimized animations using transform and opacity
- Proper image loading strategies
- Efficient CSS selectors

## 📧 Contact

For inquiries or collaboration opportunities, please use the contact form on the website or reach out directly.

---

*Built with ❤️ for showcasing Amazon SDE expertise*