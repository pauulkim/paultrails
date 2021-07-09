json.array! @reviews do |review| 
  json.name (review.user.first_name + " " + review.user.last_name)
  json.extract! review, :id, :rating, :activity_date, :review_description, :user_id, :trail_id
end