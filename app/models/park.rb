class Park < ApplicationRecord
  validates :name, :description, :lat, :long, :acreage, :contact, presence: true
  # validation unique name?

  has_many :trails
  
end