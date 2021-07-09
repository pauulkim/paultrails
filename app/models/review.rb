class Review < ApplicationRecord
  validates :rating, :activity_date, :review_description, :user_id, :trail_id, presence: true
  
  
end