# 📚 HTML Academy — Interactive Web Development Learning Platform

**Web Development notes curated into interactive example-based learning.**

An interactive educational platform designed to teach HTML fundamentals through hands-on examples, live previews, visual mind maps, and engaging quizzes. Built for learners who prefer learning by doing.

---

## 🎯 Features

### 🎓 Interactive Learning Experience
- **Live Code Editor & Preview**: Edit HTML code and see changes instantly in a side-by-side interface
- **Structured Lessons**: Comprehensive HTML curriculum organized into logical learning modules
- **Example-Based Learning**: Real-world code examples for every concept with runnable demonstrations
- **Progressive Difficulty**: Lessons arranged from foundational concepts to advanced techniques

### 🧠 Visual Learning Tools
- **Interactive Mind Map**: Explore HTML concepts through an interactive, zoomable mind map visualization
- **Topic Categorization**: 37+ core topics organized into 6 categories:
  - Core Basics
  - Styling
  - Interactivity
  - Media
  - Architecture
  - Symbols & Characters
- **Search & Filter**: Quickly find topics of interest using the integrated search and category filters
- **Zoom & Navigation**: Pan and zoom controls for detailed exploration

### 🎨 Customizable Learning Environment
- **10+ Theme Options**:
  - Light, Dark
  - Nordic Frost, Warm Paper, Sage Mint
  - Corporate Slate, Tokyo Night
  - Forest Emerald, Synthwave Dusk
  - Monokai Charcoal, Solarised (Light & Dark), Rose Gold Latte
- **Font Customization**: 12 typography presets including:
  - System Default, Modern Tech Docs, Editorial Paperback
  - Friendly Modern, Clean Academic, Neo-Grotesque Studio
  - Terminal Developer, Sharp Tech, Humanist Scholar
  - Minimalist Notebook, High-End Editorial

### 📊 Progress Tracking
- Real-time progress monitoring across all lessons
- Visual progress bar in the sidebar
- Completion statistics

### 🌐 Accessibility & Responsive Design
- Fully accessible with ARIA labels and semantic HTML
- Mobile-responsive design with collapsible navigation
- Keyboard navigation support
- Theme persistence across sessions

---

## 📂 Project Structure

```
Notes_WebDev/
├── index.html           # Main application file (13KB)
├── css/
│   └── styles.css       # Complete styling system (58KB)
│       ├── CSS Variables for theming
│       ├── Component styles (buttons, cards, modals)
│       ├── Layout system (flexbox-based)
│       └── Responsive design utilities
├── js/
│   ├── app.js           # Core application logic (30KB)
│   │   ├── Sidebar navigation management
│   │   ├── Theme and font persistence
│   │   ├── Menu toggle functionality
│   │   ├── Content rendering
│   │   └── Event delegation
│   ├── lessons.js       # Lesson content database (475KB)
│   │   ├── HTML fundamentals lessons
│   │   ├── Code examples and descriptions
│   │   ├── Quiz questions
│   │   └── Learning resources
│   ├── mindmap.js       # Mind Map visualization engine (19KB)
│   │   ├── SVG rendering for mind maps
│   │   ├── Zoom and pan controls
│   │   ├── Topic selection and highlighting
│   │   └── Interactive node handling
│   └── mindmap-data.js  # Mind Map data structure (468KB)
│       ├── 37 core HTML topics
│       ├── Hierarchical relationships
│       ├── Topic metadata (category, difficulty, description)
│       └── Visual node positioning data
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/aryan-src/Notes_WebDev.git
   ```

2. Open in your browser:
   - **Local**: Open `index.html` directly in your browser
   - **Live**: Visit the GitHub Pages deployment (if enabled)

3. Start learning:
   - Browse lessons in the left sidebar
   - Toggle the Mind Map to visualize concepts
   - Switch themes and fonts for comfortable learning
   - Track your progress at the bottom of the sidebar

---

## 📚 Curriculum Overview

### Core Basics
- HTML document structure and syntax
- Semantic tags and elements
- Document hierarchy and nesting
- Basic metadata and page setup

### Styling & Presentation
- HTML-CSS integration
- Inline vs. external styling
- Responsive design foundations
- Media queries basics

### Interactivity
- Forms and input elements
- Event handling fundamentals
- DOM interaction basics
- User input validation

### Media & Content
- Images and image optimization
- Audio and video embedding
- SVG integration
- Multimedia accessibility

### Architecture & Best Practices
- Page structure and hierarchy
- Accessibility standards (WCAG)
- Performance optimization
- SEO fundamentals

### Symbols & Characters
- HTML entities
- Special characters
- Escape sequences
- Unicode handling

---

## 💻 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **Styling** | CSS Custom Properties, Flexbox, Grid |
| **Interactivity** | DOM API, Event Listeners, Data Attributes |
| **Visualization** | SVG-based mind map rendering |
| **Storage** | localStorage (theme & font preferences) |
| **Deployment** | GitHub Pages |

---

## 🎮 How to Use

### Navigating Lessons
1. **Sidebar Navigation**: Click topics in the left sidebar to load lessons
2. **Progress Tracking**: Monitor completion status with the progress bar
3. **Menu Toggle**: Use the hamburger menu to collapse/expand navigation on mobile

### Using the Mind Map
1. **Open**: Click the "🧠 Mind Map" button in the top toolbar
2. **Filter**: Use category chips to filter topics by subject area
3. **Search**: Type in the search box to find specific topics
4. **Navigate**: Click topic cards to view their mind map
5. **Interact**: Use zoom controls (-, +, Reset) to explore the visualization

### Customizing Your Experience
1. **Theme Selector**: Click "Light" dropdown in the top toolbar to choose from 10+ themes
2. **Font Selector**: Click "System Default" to customize typography
3. **Preferences**: Selections are automatically saved and restored on next visit

---

## 📖 Learning Methodology

This platform follows **active learning** principles:

1. **Concept Introduction**: Read the lesson content
2. **Example Review**: Study provided code examples
3. **Hands-On Practice**: Modify examples and experiment
4. **Reinforcement**: Use quizzes to test understanding
5. **Visual Integration**: Reference the mind map for concept relationships
6. **Customization**: Adjust environment for optimal learning

---

## 🌟 Key Highlights

✨ **37 Comprehensive Topics** covering essential HTML concepts  
✨ **10+ Beautiful Themes** for distraction-free learning  
✨ **Interactive Mind Map** for visual concept mapping  
✨ **Completely Free** and open-source  
✨ **No External Dependencies** — pure HTML, CSS, and JavaScript  
✨ **Fully Responsive** — learn on any device  
✨ **Accessibility First** — WCAG compliant

---

## 🔧 Technical Details

### File Sizes
- **HTML**: 13 KB
- **CSS**: 58 KB (comprehensive theming system)
- **JavaScript**: 530+ KB (lessons, mind map data, and interactive logic)
- **Total**: ~600 KB (uncompressed)

### Performance Optimizations
- Single-page application (no page reloads)
- Efficient DOM manipulation
- CSS custom properties for theme switching
- localStorage caching for preferences

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Content Attribution

- **Content Source**: Adapted from [W3Schools HTML Basic](https://www.w3schools.com/html/html_basic.asp)
- **Curator**: [Aryan](https://github.com/aryan-src)

---

## 🤝 Contributing

Contributions are welcome! To help improve HTML Academy:

1. **Report Issues**: Found a bug or have feedback? Open an issue
2. **Suggest Improvements**: Propose new lessons, themes, or features
3. **Content Additions**: Help expand the lesson library
4. **Code Quality**: Submit PRs for performance improvements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🔗 Links

- **Repository**: https://github.com/aryan-src/Notes_WebDev
- **Author**: [@aryan-src](https://github.com/aryan-src)
- **Live Demo**: [GitHub Pages](https://github.com/aryan-src/Notes_WebDev/deployments)

---

## 🎓 Perfect For

- 👨‍🎓 **Beginners** learning HTML from scratch
- 🎯 **Students** preparing for web development coursework
- 📚 **Educators** using as supplementary learning material
- 🔄 **Developers** refreshing HTML fundamentals
- 🌍 **Non-native speakers** with customizable fonts and themes

---

## 📞 Support

Have questions or need help? 
- Check existing documentation in lessons
- Review the Mind Map for concept clarity
- Open an issue on [GitHub Issues](https://github.com/aryan-src/Notes_WebDev/issues)

---

**Happy Learning! 🚀**

*Master HTML interactively, one concept at a time.*
