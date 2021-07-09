export const getTrailReviews = trailId => (
  $.ajax({
    url: `/api/trails/${trailId}/reviews`,
    method: 'get'
  })
);

export const postReview = review => (
  $.ajax({
    url: '/api/reviews',
    method: 'post',
    data: { review }
  })
);

export const patchReview = (review, reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'patch',
    data: { review }
  })
);

export const deleteReview = reviewId => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'delete'
  })
)