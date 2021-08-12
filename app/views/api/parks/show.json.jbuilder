json.extract! @park, :id, :name, :description, :lat, :long, :acreage, :contact
json.parkPhoto url_for(@park.park_photo)