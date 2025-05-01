# RTi Auto Locksmith – 24/7 UK Car Key Services

**Author**: Kristina Masiulytė Tomkienė  
**Project Name**: RTi Auto Locksmith  
**Project Type**: Multi-language service website

## Description

This website showcases RTi Auto Locksmith's automotive locksmith services across the United Kingdom. It includes:

- Car key programming, duplication, repairs
- Emergency lockout assistance
- Ignition lock repair
- ECU remapping
- Professional training
- Global postal service for repairs

## Features

- 💬 Multilingual support: English, Lithuanian, Russian, Polish
- 📱 Integrated social media icons (top and footer)
- 📦 Postal service information and form
- 📤 Netlify-powered contact form
- 🔼 Back to Top button
- 📱 Mobile-responsive design

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Netlify (form handling)**
- **Font Awesome (icons)**

## Local Setup

1. Clone or download the project.
2. Open `index.html` in your browser or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3. All dynamic behavior is handled via `translations.js` and `script.js`.

## Structure

```
📁 project-root
│
├── index.html
├── styles.css
├── script.js
├── translations.js
├── images/
│   └── logo.webp, flag-gb.svg, ...
```
QA Testing

This website was tested using both manual methods and Cypress automated tests to ensure high functionality, usability, and responsiveness across multiple devices and languages.

Manual Testing Included:
	•	Netlify form field validation (required fields, email format)
	•	Language switching with real-time content and placeholder updates
	•	Responsive design checks on mobile, tablet, and desktop
	•	Section animation triggering using IntersectionObserver
	•	Navigation and scroll behavior
	•	Social media link functionality
	•	SEO essentials: robots.txt, sitemap.xml, meta tags, and hreflang attributes

Cypress Automated Testing:
	•	End-to-End tests for navigation, contact form, and language switch
	•	Error handling tests (e.g., submitting empty form)
	•	i18n (multilingual) interface checks
	•	UI elements presence and visibility
	•	Form success and failure paths
	•	Scroll and animation checks

Tools & Technologies:
	•	Cypress
	•	Git & GitHub
	•	GitHub Actions (CI pipeline)
	•	Visual Studio Code
## Author

**Kristina Masiulytė Tomkienė**  
Created for the RTi Auto Locksmith project.

---

This website provides quick access to automotive key services in the UK and allows communication in your preferred language.
