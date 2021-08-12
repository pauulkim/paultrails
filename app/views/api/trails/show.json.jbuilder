json.extract! @trail, :id, :name, :summary, :description, :difficulty, :length, :elevation_gain, :route_type, :lat, :long, :park_id
json.trailPhoto url_for(@trail.trail_photo)