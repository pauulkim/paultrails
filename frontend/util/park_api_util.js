export const getPark = parkId => (
  $.ajax({
    url: `/api/parks/${parkId}`,
    method: 'get'
  })
)

export const getParkTrails = parkId => (
  $.ajax({
    url: `/api/parks/${parkId}/trails`,
    method: 'get'
  })
);