class Review < ApplicationRecord
  validates :rating, :activity_date, :review_description, :user_id, :trail_id, presence: true
  
  belongs_to :user

  belongs_to :trail
end