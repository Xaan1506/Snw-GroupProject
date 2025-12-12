# End-to-End Test Scenarios for GSG.Co Apartment Rental Platform

## Test Suite 1: User Navigation Flow

### Test Case 1.1: Homepage Navigation
**Scenario**: User visits homepage and navigates through menu
**Steps**:
1. Navigate to `http://localhost:8000`
2. Verify page loads successfully
3. Check that navigation menu is visible
4. Click on each nav item (Home, Rent, Buy, All Our Properties, About, Contact)
5. Verify each section/page loads correctly

**Expected Results**:
- Homepage displays featured properties
- All navigation links are functional
- Smooth scrolling works for anchor links
- New tabs open for Rent and Buy pages

**Assertions**:
```javascript
- Page title is "GSG.Co — Apartments"
- Featured properties grid contains 4 properties
- Navigation menu has 6 links
- Footer is visible
```

---

### Test Case 1.2: Property Search and Filter
**Scenario**: User searches and filters properties
**Steps**:
1. Navigate to "All Our Properties" page
2. Enter "Bangalore" in location search
3. Select "2 BHK" from BHK filter
4. Select "Fully Furnished" from furnishing filter
5. Click "Apply Filters" (if required)
6. Verify filtered results display

**Expected Results**:
- Results update dynamically
- Only Bangalore properties shown
- Only 2 BHK properties displayed
- Only fully furnished properties visible
- Results count updates correctly

**Assertions**:
```javascript
- Results count > 0
- All displayed properties match filters
- "No properties found" message shown if no matches
```

---

## Test Suite 2: Property Details

### Test Case 2.1: View Property Details
**Scenario**: User clicks on property to view details
**Steps**:
1. Navigate to home page
2. Click on first property card
3. Wait for modal to open
4. Verify property details are displayed

**Expected Results**:
- Modal opens smoothly
- Property images load correctly
- Property title, location, and price are visible
- Amenities list is displayed
- Facts section shows area, deposit, etc.
- Reviews and ratings are visible
- Action buttons (Send Inquiry, Contact Agent) are present

**Assertions**:
```javascript
- Modal has class "show"
- Main image is visible
- Thumbnail gallery exists
- Price is displayed prominently
- Amenities count matches data
- Rating stars are rendered
```

---

### Test Case 2.2: Navigate Property Gallery
**Scenario**: User browses through property images
**Steps**:
1. Open property details modal
2. Click on second thumbnail image
3. Verify main image updates
4. Click on each thumbnail sequentially
5. Confirm image changes for each click

**Expected Results**:
- Main image updates when thumbnail clicked
- Active thumbnail has visual indicator
- All thumbnails are clickable
- Images load without errors

**Assertions**:
```javascript
- Each thumbnail click updates main image
- Active class applied to clicked thumbnail
- Image URLs are valid
```

---

## Test Suite 3: Reviews and Ratings

### Test Case 3.1: View Property Reviews
**Scenario**: User views reviews for a property
**Steps**:
1. Open property details for Property ID 1
2. Scroll to reviews section
3. Verify review summary is visible
4. Check individual reviews display

**Expected Results**:
- Overall rating displays correctly (e.g., 4.5 stars)
- Review count is shown
- Individual reviews list appears
- Each review shows: username, date, rating, comment

**Assertions**:
```javascript
- Rating value matches expected (4.5)
- Review count matches data (12)
- Reviews array length > 0
- Each review has all required fields
```

---

### Test Case 3.2: Submit New Review
**Scenario**: User writes and submits a review
**Steps**:
1. Open property details modal
2. Click "Write a Review" button
3. Fill in review form:
   - Select 5-star rating
   - Enter name: "Test User"
   - Enter comment: "Great apartment!"
4. Click "Submit Review"
5. Verify success message or form reset

**Expected Results**:
- Review form appears
- All fields are editable
- Submit button is enabled
- Form validates required fields
- Success feedback shown

**Assertions**:
```javascript
- Form dialog opens
- Rating input is functional
- Text inputs accept user input
- Validation prevents empty submission
```

---

## Test Suite 4: Responsive Design

### Test Case 4.1: Mobile View Testing
**Scenario**: User accesses site on mobile device
**Steps**:
1. Set viewport to 375x667 (iPhone SE)
2. Navigate to homepage
3. Verify layout adjusts properly
4. Test menu navigation
5. Open property modal
6. Test filters

**Expected Results**:
- Layout stacks vertically
- Images scale appropriately
- Text remains readable
- Buttons are tap-friendly (min 44x44px)
- Modal fits screen

**Assertions**:
```javascript
- No horizontal scrolling
- Navigation menu is accessible
- Cards display in single column
- Touch targets are adequate
```

---

### Test Case 4.2: Tablet View Testing
**Scenario**: User accesses site on tablet device
**Steps**:
1. Set viewport to 768x1024 (iPad)
2. Navigate through site
3. Verify 2-column layout for property grid
4. Test all interactive elements

**Expected Results**:
- Properties display in 2 columns
- Navigation remains horizontal
- Modal is centered
- All features accessible

---

## Test Suite 5: Filter Functionality

### Test Case 5.1: Location Search
**Scenario**: User searches by location
**Steps**:
1. Navigate to All Properties
2. Enter "Mumbai" in search box
3. Verify only Mumbai properties shown
4. Clear search
5. Verify all properties display again

**Expected Results**:
- Search updates results in real-time
- Case-insensitive matching works
- Partial matches accepted
- Clear button resets filter

**Assertions**:
```javascript
- Filtered results.length < total properties
- All results contain "Mumbai"
- Clear restores full list
```

---

### Test Case 5.2: Multiple Filters
**Scenario**: User applies multiple filters simultaneously
**Steps**:
1. Select "3 BHK"
2. Select "Semi Furnished"
3. Enter "Bangalore" in location
4. Select price range "₹50k-₹1L"
5. Verify cumulative filtering

**Expected Results**:
- All filters apply together (AND logic)
- Results match ALL criteria
- Results count accurate
- Filters can be cleared

**Assertions**:
```javascript
- Results match BHK filter
- Results match furnishing filter
- Results match location filter
- Results match price filter
```

---

## Test Suite 6: Performance

### Test Case 6.1: Page Load Time
**Scenario**: Measure initial page load performance
**Steps**:
1. Clear browser cache
2. Navigate to homepage
3. Measure time to interactive
4. Check resource loading

**Expected Results**:
- Page loads in < 3 seconds
- Images lazy load
- No console errors
- CSS and JS load successfully

**Assertions**:
```javascript
- DOMContentLoaded < 2s
- Load event < 3s
- No 404 errors
- Core Web Vitals are good
```

---

### Test Case 6.2: Large Dataset Handling
**Scenario**: Test with all 36 properties loaded
**Steps**:
1. Navigate to "All Properties"
2. Verify all 36 cards render
3. Apply various filters
4. Measure filter response time

**Expected Results**:
- All properties render without lag
- Filtering is near-instantaneous
- Scrolling remains smooth
- No memory leaks

---

## Test Suite 7: Error Handling

### Test Case 7.1: Invalid Image URLs
**Scenario**: Handle broken image links
**Steps**:
1. Modify an apartment to have invalid image URL
2. Load property card
3. Open property modal
4. Verify graceful degradation

**Expected Results**:
- Placeholder or alt text shown
- No broken image icon
- Page doesn't crash
- Other images still load

---

### Test Case 7.2: No Search Results
**Scenario**: User search returns no results
**Steps**:
1. Enter search term with no matches: "XYZ123"
2. Verify "No properties found" message
3. Verify UI provides helpful feedback

**Expected Results**:
- Clear message displayed
- Suggestions to adjust filters
- No error thrown
- UI remains functional

---

## Test Suite 8: Accessibility

### Test Case 8.1: Keyboard Navigation
**Scenario**: Navigate site using only keyboard
**Steps**:
1. Use Tab key to navigate
2. Use Enter to activate links
3. Use Esc to close modal
4. Verify focus indicators visible

**Expected Results**:
- All interactive elements reachable
- Focus outline visible
- Logical tab order
- Modal traps focus appropriately

---

### Test Case 8.2: Screen Reader Compatibility
**Scenario**: Test with screen reader
**Steps**:
1. Enable screen reader
2. Navigate through property cards
3. Open property modal
4. Verify aria labels

**Expected Results**:
- All images have alt text
- Links have descriptive labels
- Form fields have labels
- Semantic HTML used

---

## Automation Recommendations

### Tools:
- **Selenium** - Browser automation
- **Cypress** - Modern E2E testing
- **Playwright** - Cross-browser testing
- **Jest** - Unit testing
- **Lighthouse** - Performance auditing

### Example Cypress Test:
```javascript
describe('Property Search', () => {
  it('should filter properties by location', () => {
    cy.visit('http://localhost:8000/all-properties.html')
    cy.get('#filter-location').type('Mumbai')
    cy.get('.card').should('contain', 'Mumbai')
    cy.get('#results-count').should('contain', 'properties found')
  })
})
```

---

## Test Execution Checklist

- [ ] All test cases documented
- [ ] Test data prepared
- [ ] Test environments set up
- [ ] Automated tests written
- [ ] Manual tests executed
- [ ] Bugs logged and tracked
- [ ] Regression testing completed
- [ ] Performance benchmarks met
- [ ] Accessibility standards met
- [ ] Cross-browser testing done
- [ ] Mobile testing completed
- [ ] Test results documented
