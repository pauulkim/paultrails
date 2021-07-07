export const getParkTrails = parkId => (
  $.ajax({
    url: `/api/parks/${parkId}/trails`,
    method: 'get'
  })
);

export const getTrail = trailId => (
  $.ajax({
    url: `/api/trails/${trailId}`,
    method: 'get'
  })
);