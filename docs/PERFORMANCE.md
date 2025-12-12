# Performance Optimization Guide

## Overview
This document outlines optimization strategies implemented for the GSG.Co Apartment Rental Platform.

---

## CSS Optimization

### 1. Minification Strategy
- Remove comments and whitespace
- Combine multiple CSS files
- Use CSS variables for consistent theming
- Minimize redundant rules

### 2. Critical CSS
Extract above-the-fold CSS and inline it in `<head>` for faster initial render.

### 3. CSS Best Practices Implemented
✅ Use efficient selectors (avoid deep nesting)
✅ Group related properties
✅ Use shorthand properties where possible
✅ Minimize use of `!important`
✅ Use CSS Grid and Flexbox for layouts
✅ Implement CSS custom properties for theming

### 4. Unused CSS Removal
- Audit CSS files for unused selectors
- Remove dead code
- Use tools like PurgeCSS for production builds

---

## JavaScript Optimization

### 1. Code Splitting
Separate code into logical chunks:
- `cursor.js` - Core functionality
- `reviews.js` - Reviews system 
- Load non-critical scripts asynchronously

### 2. Performance Best Practices

#### Event Delegation
Instead of:
```javascript
// ❌ Inefficient - multiple listeners
cards.forEach(card => {
  card.addEventListener('click', handleClick);
});
```

Use:
```javascript
// ✅ Efficient - single delegated listener
container.addEventListener('click', (e) => {
  if (e.target.closest('.card')) {
    handleClick(e);
  }
});
```

#### Debouncing Search Input
```javascript
let searchTimeout;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(e.target.value);
  }, 300); // Wait 300ms after user stops typing
});
```

#### Use DocumentFragment for Multiple DOM Updates
```javascript
// ✅ Efficient - single reflow
const fragment = document.createDocumentFragment();
apartments.forEach(apt => {
  fragment.appendChild(createCard(apt));
});
container.appendChild(fragment);
```

### 3. Caching Strategies
```javascript
// Cache DOM queries
const cache = {
  grid: document.getElementById('listings-grid'),
  modal: document.getElementById('details-modal'),
  filters: document.querySelectorAll('.filter-item')
};
```

### 4. Lazy Loading Implementation
```javascript
// Lazy load images
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

---

## Image Optimization

### 1. Image Guidelines
- Use appropriate formats (WebP for modern browsers, JPEG fallback)
- Optimize image sizes (recommended max 800x600 for property images)
- Implement lazy loading
- Use srcset for responsive images

### 2. Responsive Images
```html
<img 
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-800.jpg"
  alt="Property"
  loading="lazy"
>
```

### 3. Image CDN
- Use Unsplash with optimization parameters:
  - `?w=800&h=600` - Set dimensions
  - `&fit=crop` - Crop to fit
  - `&q=80` - Set quality to 80%

---

## Performance Metrics

### Target Metrics
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 300ms

### Measurement Tools
1. **Chrome DevTools** - Lighthouse audit
2. **WebPageTest** - Detailed performance analysis
3. **Google PageSpeed Insights** - Real-world metrics

---

## Network Optimization

### 1. HTTP Caching
```html
<!-- In production -->
<link rel="stylesheet" href="css/style.min.css?v=1.0.0">
<script src="js/cursor.min.js?v=1.0.0"></script>
```

### 2. Resource Hints
```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Prefetch next page -->
<link rel="prefetch" href="rent.html">
```

### 3. Compression
- Enable Gzip/Brotli compression on server
- Compress CSS and JS files
- Use minified versions in production

---

## Build Optimization

### Production Build Checklist
- [ ] Minify HTML
- [ ] Minify CSS
- [ ] Minify JavaScript
- [ ] Optimize images
- [ ] Enable compression
- [ ] Set proper cache headers
- [ ] Remove console.logs
- [ ] Bundle and tree-shake unused code

### Build Commands (Recommended)
```bash
# Install build tools
npm install --save-dev cssnano postcss clean-css-cli terser

# Minify CSS
npx clean-css-cli -o css/style.min.css css/style.css css/cursor.css css/reviews.css

# Minify JavaScript
npx terser js/cursor.js js/reviews.js -o js/app.min.js -c -m

# Optimize images (if using local images)
npx imagemin images/* --out-dir=images/optimized
```

---

## Runtime Performance

### 1. Reduce DOM Queries
```javascript
// ❌ Inefficient
for (let i = 0; i < 100; i++) {
  document.getElementById('result').innerHTML += data[i];
}

// ✅ Efficient
const results = data.map(item => `<div>${item}</div>`).join('');
document.getElementById('result').innerHTML = results;
```

### 2. Avoid Layout Thrashing
```javascript
// ❌ Causes multiple reflows
elements.forEach(el => {
  const height = el.offsetHeight; // Read
  el.style.height = height + 10 + 'px'; // Write
});

// ✅ Batch reads and writes
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px';
});
```

### 3. Use CSS Transforms
```css
/* ❌ Triggers layout */
.element {
  left: 100px;
  top: 100px;
}

/* ✅ Triggers only composite */
.element {
  transform: translate(100px, 100px);
}
```

---

## Memory Management

### 1. Remove Event Listeners
```javascript
function cleanup() {
  button.removeEventListener('click', handler);
  observer.disconnect();
}
```

### 2. Clear Timeouts/Intervals
```javascript
const timer = setTimeout(fn, 1000);
// Later...
clearTimeout(timer);
```

### 3. Weak References for Caching
```javascript
const cache = new WeakMap();
cache.set(element, data);
```

---

## Accessibility Performance

### 1. Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 2. High Contrast Mode
```css
@media (prefers-contrast: high) {
  .card {
    border: 2px solid currentColor;
  }
}
```

---

## Monitoring

### Performance Monitoring Script
```javascript
// Log Performance Metrics
window.addEventListener('load', () => {
  const perfData = performance.getEntriesByType('navigation')[0];
  console.log({
    DNS: perfData.domainLookupEnd - perfData.domainLookupStart,
    TCP: perfData.connectEnd - perfData.connectStart,
    Request: perfData.responseStart - perfData.requestStart,
    Response: perfData.responseEnd - perfData.responseStart,
    DOM: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
    Load: perfData.loadEventEnd - perfData.loadEventStart,
    Total: perfData.loadEventEnd - perfData.fetchStart
  });
});
```

---

## Progressive Enhancement

### 1. Feature Detection
```javascript
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver for lazy loading
} else {
  // Load all images immediately
}
```

### 2. Service Worker (Future Enhancement)
```javascript
// sw.js - Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/js/cursor.js',
        '/images/logo.png'
      ]);
    })
  );
});
```

---

## Conclusion

Following these optimization strategies will result in:
- ✅ Faster page load times
- ✅ Better user experience
- ✅ Improved SEO rankings
- ✅ Lower bounce rates
- ✅ Higher conversion rates

**Next Steps:**
1. Implement build process
2. Set up performance monitoring
3. Regular performance audits
4. Continuous optimization
