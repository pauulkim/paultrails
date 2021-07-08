class Trail < ApplicationRecord
  validates :name, :summary, :description, :difficulty, :length, :elevation_gain, :route_type, :lat, :long, :park_id, presence: true
  validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"] }
  validates :route_type, inclusion: { in: ["Loop", "Out & back", "Point to point"] }
  # validation unique name?

  belongs_to :park

  has_one_attached :trail_photo
end