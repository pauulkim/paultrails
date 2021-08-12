json.extract! @park, :id, :name, :description, :lat, :long, :acreage, :contact
json.photoURL url_for(@park.park_photo)