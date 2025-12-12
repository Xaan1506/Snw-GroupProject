// reviews.js - Property Reviews and Ratings System

// Sample reviews data for properties
const propertyReviews = {
    1: {
        rating: 4.5,
        reviewCount: 12,
        reviews: [
            {
                id: 1,
                userName: "Priya Sharma",
                rating: 5,
                date: "2024-11-15",
                comment: "Excellent apartment! Very well maintained and the location is perfect. Landlord is very responsive.",
                helpful: 8
            },
            {
                id: 2,
                userName: "Rahul Mehta",
                rating: 4,
                date: "2024-10-22",
                comment: "Good value for money. Parking can be tight during peak hours but overall satisfied.",
                helpful: 5
            },
            {
                id: 3,
                userName: "Anjali Desai",
                rating: 5,
                date: "2024-09-10",
                comment: "Love the neighborhood! Close to metro and shopping areas. Highly recommend.",
                helpful: 12
            }
        ]
    },
    2: {
        rating: 4.7,
        reviewCount: 18,
        reviews: [
            {
                id: 1,
                userName: "Vikram Singh",
                rating: 5,
                date: "2024-11-20",
                comment: "Spacious and beautiful apartment. The gym and pool facilities are excellent!",
                helpful: 15
            },
            {
                id: 2,
                userName: "Sneha Patel",
                rating: 4,
                date: "2024-11-01",
                comment: "Great location in Powai. A bit pricey but worth it for the amenities.",
                helpful: 7
            }
        ]
    },
    3: {
        rating: 4.2,
        reviewCount: 9,
        reviews: [
            {
                id: 1,
                userName: "Arjun Nair",
                rating: 4,
                date: "2024-10-15",
                comment: "Decent apartment in Andheri. Good connectivity to office areas.",
                helpful: 6
            }
        ]
    }
};

// Generate random ratings for all properties that don't have reviews
function generateDefaultRating(propertyId) {
    // Generate rating between 3.5 and 5.0
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    // Generate review count between 5 and 25
    const reviewCount = Math.floor(Math.random() * 20) + 5;

    return {
        rating: parseFloat(rating),
        reviewCount: reviewCount,
        reviews: []
    };
}

// Get reviews for a property
function getPropertyReviews(propertyId) {
    return propertyReviews[propertyId] || generateDefaultRating(propertyId);
}

// Create star rating HTML
function createStarRating(rating, size = 'medium') {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star star--full">★</span>';
    }

    // Half star
    if (hasHalfStar) {
        stars += '<span class="star star--half">★</span>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star star--empty">☆</span>';
    }

    return `<div class="rating-stars rating-stars--${size}">${stars}</div>`;
}

// Create rating badge for property card
function createRatingBadge(propertyId) {
    const reviewData = getPropertyReviews(propertyId);

    return `
    <div class="rating-badge">
      ${createStarRating(reviewData.rating, 'small')}
      <span class="rating-value">${reviewData.rating}</span>
      <span class="rating-count">(${reviewData.reviewCount})</span>
    </div>
  `;
}

// Create reviews section for modal
function createReviewsSection(propertyId) {
    const reviewData = getPropertyReviews(propertyId);

    let reviewsHTML = `
    <div class="reviews-section">
      <div class="reviews-header">
        <h4>Reviews & Ratings</h4>
        <div class="reviews-summary">
          ${createStarRating(reviewData.rating)}
          <div class="reviews-summary-text">
            <span class="reviews-rating">${reviewData.rating}</span>
            <span class="reviews-count">${reviewData.reviewCount} reviews</span>
          </div>
        </div>
      </div>
  `;

    if (reviewData.reviews.length > 0) {
        reviewsHTML += '<div class="reviews-list">';

        reviewData.reviews.forEach(review => {
            reviewsHTML += `
        <div class="review-item">
          <div class="review-header">
            <div class="review-user">
              <div class="review-avatar">${review.userName.charAt(0)}</div>
              <div class="review-user-info">
                <div class="review-user-name">${review.userName}</div>
                <div class="review-date">${formatDate(review.date)}</div>
              </div>
            </div>
            ${createStarRating(review.rating, 'small')}
          </div>
          <div class="review-comment">${review.comment}</div>
          <div class="review-actions">
            <button class="review-helpful">
              <span class="review-helpful-icon">👍</span>
              Helpful (${review.helpful})
            </button>
          </div>
        </div>
      `;
        });

        reviewsHTML += '</div>';
    } else {
        reviewsHTML += `
      <div class="no-reviews">
        <p>No detailed reviews yet. Be the first to review this property!</p>
      </div>
    `;
    }

    reviewsHTML += `
      <button class="btn-write-review">Write a Review</button>
    </div>
  `;

    return reviewsHTML;
}

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Add review form
function showReviewForm(propertyId) {
    return `
    <div class="review-form">
      <h4>Write a Review</h4>
      <div class="form-group">
        <label>Your Rating</label>
        <div class="rating-input">
          <input type="radio" name="rating" value="5" id="star5">
          <label for="star5">★</label>
          <input type="radio" name="rating" value="4" id="star4">
          <label for="star4">★</label>
          <input type="radio" name="rating" value="3" id="star3">
          <label for="star3">★</label>
          <input type="radio" name="rating" value="2" id="star2">
          <label for="star2">★</label>
          <input type="radio" name="rating" value="1" id="star1">
          <label for="star1">★</label>
        </div>
      </div>
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" class="form-input" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label>Your Review</label>
        <textarea class="form-textarea" rows="4" placeholder="Share your experience..." required></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-submit-review primary-btn">Submit Review</button>
        <button class="btn-cancel-review ghost-btn">Cancel</button>
      </div>
    </div>
  `;
}

// Export functions for use in cursor.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getPropertyReviews,
        createStarRating,
        createRatingBadge,
        createReviewsSection,
        showReviewForm
    };
}
