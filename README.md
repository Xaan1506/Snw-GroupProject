# 🏠 NextHome - Apartment Rental Platform

A modern, responsive web application for browsing and renting apartments across major Indian cities. Built with vanilla JavaScript, HTML5, and CSS3.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

##  Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Pages](#pages)
- [Contributing](#contributing)

## ✨ Features

### Core Functionality
- **36 Premium Properties** across Bangalore, Mumbai, Hyderabad, Chennai, Pune, and Gurgaon
- **Advanced Filtering System** - Search by location, BHK, furnishing, availability, and price range
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Property Details Modal** - Comprehensive property information with image gallery
- **Real-time Search** - Instant results as you type
- **Multiple Property Types** - Apartments, Villas, Studios, Commercial Spaces, and Plots
- **⭐ Property Reviews & Ratings** - User reviews with star ratings (NEW!)
- **🧪 Testing Framework** - Comprehensive unit and E2E tests (NEW!)
- **⚡ Performance Optimized** - Following web performance best practices (NEW!)

### User Interface
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 🖼️ **High-Quality Images** - Curated property photos from Unsplash
- 📱 **Mobile-First Approach** - Fully responsive across all devices
- 🎯 **Intuitive Navigation** - Easy-to-use menu and filter system
- ⚡ **Fast Loading** - Optimized performance with efficient code
- 🎭 **Smooth Scrolling** - Enhanced user experience with scroll behaviors
- ⭐ **Star Ratings** - Visual rating display on property cards (NEW!)

### Property Features
- Detailed property information (area, deposit, maintenance)
- Amenities listing (Gym, Pool, Parking, etc.)
- Pet-friendly indicators
- Availability status badges
- Multiple images per property
- Location with city categorization
- User reviews and ratings with submission form (NEW!)

## Demo

Visit the live site by running a local server:

```bash
cd SNWGROUP
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

##  Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Google Fonts** - Poppins font family

### External Services
- **Unsplash** - High-quality property images
- **Python HTTP Server** - Local development server

##  Project Structure

```
SNWGROUP/
├── index.html              # Main landing page
├── rent.html               # Rental properties page (filter-first)
├── buy.html                # Properties for sale (filter-first)
├── all-properties.html     # All properties listing
├── login.html              # User authentication page
├── css/
│   ├── style.css          # Global styles and navbar
│   └── cursor.css         # Component-specific styles
├── js/
│   ├── cursor.js          # Main JavaScript logic
│   └── unique_images.js   # Image URL reference
└── README.md              # Project documentation
|__ assets
```

##  Getting Started

### Prerequisites

- **Web Browser** (Chrome, Firefox, Safari, Edge)
- **Python 3.x** (for local server)
- **Text Editor** (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or download** the project:
   ```bash
   cd /Users/xaan/Documents/SNWGROUP
   ```

2. **Start the local server**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

### Alternative Server Options

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

##  Usage

### Browsing Properties

1. **Home Page** - View featured properties and browse all listings
2. **Filter Properties** - Use the search bar and filters to narrow down results
3. **Click on Property** - View detailed information in a modal
4. **Browse Gallery** - Click thumbnails to view different property images

### Navigation

- **Home** - Main landing page with featured properties
- **Rent** - Rental properties (requires filter selection)
- **Buy** - Properties for sale (requires filter selection)
- **All Our Properties** - View all 36 properties at once
- **About** - Company information and features
- **Contact** - Contact details and information

### Filtering

Available filter options:
- **Location** - Free text search (city, locality, or project name)
- **BHK** - 1 BHK, 2 BHK, 3 BHK, 4 BHK, 5 BHK
- **Furnishing** - Fully Furnished, Semi Furnished, Unfurnished
- **Availability** - Available Now, Coming Soon
- **Price Range** - Up to ₹20k, ₹20k-₹50k, ₹50k-₹1L, ₹1L+

##  Pages

### 1. **index.html** - Home Page
- Hero section with search
- Featured properties grid
- Why choose us section
- Customer testimonials
- Complete property listings

### 2. **rent.html** - Rental Properties
- Filter-first approach
- Properties shown only after applying filters
- Focused on rental listings

### 3. **buy.html** - Properties for Sale
- Filter-first approach
- Purchase-oriented property listings
- Similar filtering capabilities

### 4. **all-properties.html** - Complete Catalog
- All 36 properties displayed immediately
- Optional filtering available
- Comprehensive property showcase

### 5. **login.html** - Authentication
- User login interface
- Account access (placeholder)

##  Design Features

### Color Scheme
- **Primary**: `#6C5CE7` (Vibrant Purple)
- **Accent**: `#FF6B6B` (Coral)
- **Secondary**: `#00BFA6` (Teal)
- **Background**: Linear gradient (`#f0f4ff` to `#fff7fb`)
- **Text**: `#0f1724` (Dark Blue-Gray)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semi-bold), 700 (Bold)

### Visual Effects
- Box shadows with subtle blur
- Smooth transitions (0.2s ease)
- Hover animations
- Card elevation on hover
- Custom scrollbars
- Backdrop blur effects

##  Key JavaScript Features

### Data Management
- 36 property objects with comprehensive details
- Dynamic rendering based on filters
- Real-time search functionality

### Event Handling
- Click handlers for property details
- Filter change listeners
- Modal open/close functionality
- Image gallery navigation

### DOM Manipulation
- Dynamic card generation
- Modal content updates
- Results count updates
- Smooth scroll behaviors

##  Customization

### Adding New Properties

Edit `js/cursor.js` and add a new object to the `apartments` array:

```javascript
{
  id: 37,
  title: "Your Property Name",
  location: "Locality, City",
  city: "City",
  bhk: 2,
  furnishing: "fully", // "fully", "semi", or "none"
  rent: 30000,
  availability: "available", // "available" or "soon"
  area: 1000,
  deposit: 60000,
  maintenance: 2000,
  petsAllowed: true,
  amenities: ["Parking", "Gym"],
  images: [
    "image_url_1.jpg",
    "image_url_2.jpg",
    "image_url_3.jpg",
    "image_url_4.jpg"
  ]
}
```

### Modifying Styles

Edit `css/style.css` for global styles or `css/cursor.css` for component styles.

### Changing Colors

Update CSS variables in `:root` selector:

```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
  --bg: linear-gradient(180deg, #COLOR1, #COLOR2);
}
```

##  Responsive Breakpoints

- **Desktop**: > 1000px
- **Tablet**: 700px - 1000px
- **Mobile**: < 700px

##  Known Issues

- Image loading depends on Unsplash API availability
- Modal requires JavaScript enabled
- Filters reset on page reload

##  Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

##  License

This project is created for educational purposes.

##  Authors

- **GSG.Co Team** - Initial work and design

##  Acknowledgments

- **Unsplash** - For providing high-quality property images
- **Google Fonts** - For the Poppins font family
- **MagicBricks** - Design inspiration

##  Contact

- **Email**: hello@gsg.co
- **Phone**: +91 98765 43210
- **Address**: Mumbai, India

---

Made with ❤️ by GSG Team
