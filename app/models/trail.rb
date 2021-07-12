class Trail < ApplicationRecord
  validates :name, :summary, :description, :difficulty, :length, :elevation_gain, :route_type, :lat, :long, :park_id, presence: true
  validates :difficulty, inclusion: { in: ["easy", "moderate", "hard"] }
  validates :route_type, inclusion: { in: ["Loop", "Out & back", "Point to point"] }
  # validation unique name?

  has_many :reviews

  belongs_to :park

  has_many_attached :trail_photos
end