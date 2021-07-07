export const getTrail = trailId => (
  $.ajax({
    url: `/api/trails/${trailId}`,
    method: 'get'
  })
);