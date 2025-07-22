# New Beginnings Shelter System - CIS133DA Project

## Two Versions Available

This project contains two complete versions of the website to accommodate different course requirements:

### **CIS133DA Compliant Version**
- **Files**: `index.html`, `services.html`, `resources.html`, `about.html`, `contact.html`
- **Styles**: Three separate CSS files for responsive design:
  - `styles/default.css` - Desktop styles
  - `styles/tablet.css` - Tablet styles (≤768px)
  - `styles/mobile.css` - Mobile styles (≤480px)
- **JavaScript**: Basic CIS133-appropriate techniques in `scripts/main.js`

## Key Differences

### **CSS Techniques**
| Feature | Original Version | Simplified Version |
|---------|------------------|-------------------|
| **Layout** | CSS Grid & Flexbox | Float & Block layouts |
| **Responsive Design** | Complex media queries | Basic media queries |
| **Animations** | CSS transitions | None |
| **Modern Features** | CSS custom properties | Standard CSS only |

### **JavaScript Features**
| Feature | Original Version | Simplified Version |
|---------|------------------|-------------------|
| **Variables** | `const` and `let` | `var` only |
| **DOM Methods** | `querySelector()`, `addEventListener()` | `getElementById()`, `onclick` |
| **Functions** | Arrow functions, modern syntax | Traditional functions |
| **Mobile Menu** | Dynamic creation | Simple show/hide |

### **HTML Structure**
| Feature | Original Version | Simplified Version |
|---------|------------------|-------------------|
| **Semantic Elements** | Full ARIA support | Basic semantic HTML |
| **Form Handling** | Complex validation | Basic HTML5 validation |
| **Accessibility** | Advanced WCAG compliance | Basic accessibility |

## Visual Appearance

**The visual appearance is 95% identical between both versions:**
- ✅ Same colors, fonts, and overall design
- ✅ Same content and organization
- ✅ Same responsive behavior
- ✅ Professional appearance maintained

**Minor differences:**
- Slightly different spacing due to layout method changes
- Simpler mobile navigation (button instead of dynamic menu)
- Basic form validation instead of real-time validation

## Functionality Differences

### **What Works the Same:**
- ✅ All navigation links
- ✅ Form submissions to Rio Salado postscript
- ✅ Basic responsive design
- ✅ All content displays correctly

### **Simplified Functionality:**
- 📱 **Mobile Menu**: Simple show/hide instead of dynamic creation
- ✨ **Animations**: Removed smooth scrolling and transitions
- 🎯 **Form Validation**: Basic HTML5 instead of complex JavaScript
- ⚡ **Interactive Features**: Simplified donation form handling

## Which Version to Use?

### **Use the Simplified Version If:**
- Your instructor emphasizes basic HTML/CSS/JS techniques
- CIS133 focuses on fundamental web development concepts
- You want to demonstrate mastery of core technologies
- Course requirements specify avoiding advanced features

### **Use the Original Version If:**
- Your instructor allows modern web development techniques
- The course covers contemporary web development practices
- You want to showcase advanced skills
- No restrictions on CSS Grid, Flexbox, or ES6+ JavaScript

## File Structure

```
Lesson14/
├── index.html                 # Original home page
├── index-simple.html          # Simplified home page
├── services.html              # Original services
├── services-simple.html       # Simplified services
├── resources.html             # Original resources
├── resources.html             # Resources page
├── about.html                 # About page
├── contact.html               # Contact page
├── styles/
│   ├── default.css           # Desktop styles
│   ├── tablet.css            # Tablet styles (≤768px)
│   └── mobile.css            # Mobile styles (≤480px)
├── scripts/
│   └── main.js               # CIS133DA-appropriate JavaScript
└── images/                   # Website images

## Testing the Website

1. **Desktop**: Open `index.html` in your browser
2. **Mobile Testing**: Visit https://pat2203673.github.io/Lesson14/ on your mobile device
3. **Local Testing**: Use the provided PowerShell scripts for mobile viewport testing

## Mobile Navigation

The mobile navigation uses a hamburger menu (☰) that appears on screens 768px and below. Click the hamburger icon to toggle the navigation menu on mobile devices.

**For CIS133DA specifically**, I recommend using the **simplified version** as it demonstrates mastery of fundamental web development concepts without advanced features that may be beyond the course scope.

The simplified version still maintains professional appearance and functionality while using only basic HTML, CSS, and JavaScript techniques appropriate for an introductory web development course.
