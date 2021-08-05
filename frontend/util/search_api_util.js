export const getSearchResults = () => (
  $.ajax({
    url: "/api/search",
    method: "get"
  })
);