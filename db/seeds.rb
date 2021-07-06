# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# users
User.destroy_all # destroys all recs
ApplicationRecord.connection.reset_pk_sequence!("users") # resets primary keys 

demo = User.create(email: "demo@paultrails.com", first_name: "Demo", last_name: "User", password: "demopassword")



# parks
Park.destroy_all
ApplicationRecord.connection.reset_pk_sequence!("parks")

zion = Park.create(
  name: "Zion National Park",
  description: "Looking for a great trail in Zion National Park, Utah? AllTrails has 110 great hiking trails, trail running trails, dogs no trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge? There are 45 hard trails in Zion National Park ranging from 0.8 to 796 miles and from 3,654 to 11,417 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
  lat: 37.2965531777223,
  long: -113.02527239400264,
  acreage: 146597,
  contact: "435-772-3256"
)

hallasan = Park.create(
  name: "Hallasan National Park, South Korea",
  description: "Looking for a great trail in Hallasan National Park, Jeju? AllTrails has 9 great hiking trails, walking trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 5 moderate trails in Hallasan National Park ranging from 4.7 to 8.4 miles and from 2,463 to 5,620 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
  lat: 33.34914412812787,
  long: 126.49618933790676,
  acreage: 125000,
  contact: "064-713-9950"
)



# trails
