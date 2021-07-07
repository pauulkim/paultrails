export const getPark = parkId => (
  $.ajax({
    url: `/api/parks/${parkId}`,
    method: 'get'
  })
)