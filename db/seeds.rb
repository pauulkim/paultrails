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
Trail.destroy_all
ApplicationRecord.connection.reset_pk_sequence!("trails")

z1 = Trail.create(
  name: "Angels Landing Trail",
  summary: "Angels Landing Trail is a 4.4 mile heavily trafficked out and back trail located near Springdale, Utah that features a river and is rated as difficult. The trail is primarily used for hiking and nature trips and is best used from February until October.",
  description: "The Angels Landing Trail is a strenuous route in Zion National Park with steep drop-offs and very narrow sections. The technical route and incredible views of Zion Canyon make this hike the most popular in Zion. Start by parking at The Grotto Trailhead or taking the West Rim Shuttle to The Grotto shuttle stop. Begin by crossing a bridge over the Virgin River. The first 2-miles of the West Rim Trail are a well-maintained paved trail. Most of the path is sunny, but Refrigerator Canyon offers shade and often a cool breeze.",
  difficulty: "hard",
  length: 4.4,
  elevation_gain: 1604,
  route_type: "Out & back",
  lat: 37.258847816320475,
  long: -112.95056120939489,
  park_id: 1
)


z2 = Trail.create(
  name: "The Zion Narrows Riverside Walk",
  summary: "The Zion Narrows Riverside Walk is a 1.9 mile heavily trafficked out and back trail located near Springdale, Utah that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, running, and nature trips and is best used from March until October.",
  description: "Planning a trip to Zion to hike The Narrows should be on every outdoor enthusiast's bucket list. This route along the Riverside Walk Trail is a relatively easy and paved out and back located at the end of the Zion Canyon Scenic Drive. This route only includes the maintained trail. Those looking for a longer adventure can find the full Zion Narrows route that continues down the river past this trail's endpoint. There is water and a restroom at the trailhead. You’ll also have access to sandy areas near the end of the entrance to the Narrows where you can cool your feet in the refreshing waters.",
  difficulty: "easy",
  length: 1.9,
  elevation_gain: 193,
  route_type: "Out & back",
  lat: 37.285205642939836,
  long: -112.94771914222615,
  park_id: 1
)

z3 = Trail.create(
  name: "Zion Canyon Overlook Trail",
  summary: "Zion Canyon Overlook Trail is a 1 mile heavily trafficked out and back trail located near Springdale, Utah that features a cave and is rated as moderate. The trail is primarily used for hiking and walking and is accessible year-round.",
  description: "The Canyon Overlook Trail offers some of the most breathtaking views of Zion Canyon. Located in the Upper East Canyon portion of the park, the trail is actually one of the few official trails in the area. This unfortunately means that the shuttle does not stop at this trailhead. To do this hike, you must enter the park in a private vehicle. You’ll be able to see the overlook from the switchbacks on Route 9. After going through the tunnel, the trailhead parking area is on your right. Parking is extremely limited here, but there are overflow lots further down the road.",
  difficulty: "moderate",
  length: 1.0,
  elevation_gain: 187,
  route_type: "Out & back",
  lat: 37.21522026086148,
  long: -112.9408886196094,
  park_id: 1
)


h1 = Trail.create(
  name: "Hallasan Summit",
  summary: "Hallasan Summit is a 10.6 mile moderately trafficked point-to-point trail located near Seogwipo-si, Jeju, South Korea that offers scenic views and is rated as difficult. The trail is primarily used for hiking and walking and is best used from April until October.",
  description: "Ascending Seongpanak Trail (9.6Km) and Descending Gwaneumsa Trail (8.7Km).",
  difficulty: "hard",
  length: 10.6,
  elevation_gain: 3864,
  route_type: "Point to point",
  lat: 33.384929676858874, 
  long: 126.61876536891627,
  park_id: 2
)

h2 = Trail.create(
  name: "Sara Oreum",
  summary: "Sara Oreum is a 7.6 mile out and back trail located near Jeju-si, Jeju-do, South Korea that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and walking.",
  description: "Sara Oreum. This unique volcanic cone is a bit different from the other oreums on Jeju. Located in Hallasan, this mountain top contains a crater lake and has the highest altitude.",
  difficulty: "moderate",
  length: 7.6,
  elevation_gain: 1916,
  route_type: "Out & back",
  lat: 33.38573262515486,
  long: 126.61911444445144,
  park_id: 2
)

h3 = Trail.create(
  name: "Halla Eco-Forest",
  summary: "Halla Eco-Forest is a 2.5 mile loop trail located near Jeju-si, Jeju-do, South Korea that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips.",
  description: "Halla Eco-Forest. This nature reserve is home to a variety of flora and fauna. The trails here are well maintained and marked, keep an eye out for pheasants and deer.",
  difficulty: "easy",
  length: 2.5,
  elevation_gain: 442,
  route_type: "Loop",
  lat: 33.43155649402897,
  long: 126.59626519835005,
  park_id: 2
)