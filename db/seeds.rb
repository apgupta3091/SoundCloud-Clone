# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Song.destroy_all

user1 = User.create!( email:"AA.com", username:'DJ AA', password: 'password')
user2 = User.create!( email:"Goat.com", username:'The Goats', password: 'password')
user3 = User.create!( email:"DV.com", username:'Darth Vader', password: 'password')
user4 = User.create!( email:"Demon.com", username:'Demons', password: 'password')
user5 = User.create!( email:"BB.com", username:'Bikini Bottom', password: 'password')
user6 = User.create!( email:"DA.com", username:'DJ Alvin', password: 'password')





song1 = Song.create!(title:'Groove', artist_id: user1.id, genre:'edm')
song1_image = open('/Users/anujgupta/Desktop/images/image1.jpg')
song1.cover_photo.attach(io: song1_image, filename: 'image1.jpg')

song2 = Song.create!(title:'Bass Drop', artist_id: user1.id, genre:'edm')
song2_image = open('/Users/anujgupta/Desktop/images/image2.jpg')
song2.cover_photo.attach(io: song2_image, filename: 'image2.jpg')


song3 = Song.create!(title:'MJ', artist_id: user2.id, genre:'hip-hop')
song3_image = open('/Users/anujgupta/Desktop/images/image3.jpg')
song3.cover_photo.attach(io: song3_image, filename: 'image3.jpg')

song4 = Song.create!(title:'Best Ever', artist_id: user2.id, genre:'hip-hop')
song4_image = open('/Users/anujgupta/Desktop/images/image4.jpg')
song4.cover_photo.attach(io: song4_image, filename: 'image4.jpg')

song5 = Song.create!(title:'Battleship', artist_id: user3.id, genre:'pop')
song5_image = open('/Users/anujgupta/Desktop/images/image5.jpg')
song5.cover_photo.attach(io: song5_image, filename: 'image5.jpg')

song6 = Song.create!(title:'Spaceman', artist_id: user3.id, genre:'pop')
song6_image = open('/Users/anujgupta/Desktop/images/image6.jpg')
song6.cover_photo.attach(io: song6_image, filename: 'image6.jpg')

song7 = Song.create!(title:'Storm', artist_id: user4.id, genre:'edm')
song7_image = open('/Users/anujgupta/Desktop/images/image7.jpg')
song7.cover_photo.attach(io: song7_image, filename: 'image7.jpg')

song8 = Song.create!(title:'Versace', artist_id: user4.id, genre:'edm')
song8_image = open('/Users/anujgupta/Desktop/images/image8.jpg')
song8.cover_photo.attach(io: song8_image, filename: 'image8.jpg')


song9 = Song.create!(title:'Campfire Song', artist_id: user5.id, genre:'pop')
song9_image = open('/Users/anujgupta/Desktop/images/image9.jpg')
song9.cover_photo.attach(io: song9_image, filename: 'image9.jpg')

song10 = Song.create!(title:'Klean Krab', artist_id: user5.id, genre:'pop')
song10_image = open('/Users/anujgupta/Desktop/images/image10.jpg')
song10.cover_photo.attach(io: song10_image, filename: 'image10.jpg')

song11 = Song.create!(title:'Recursion Recur...', artist_id: user6.id, genre:'edm')
song11_image = open('/Users/anujgupta/Desktop/images/image11.jpg')
song11.cover_photo.attach(io: song11_image, filename: 'image11.jpg')

song12 = Song.create!(title:'DS & Algs', artist_id: user6.id, genre:'edm')
song12_image = open('/Users/anujgupta/Desktop/images/image12.jpg')
song12.cover_photo.attach(io: song12_image, filename: 'image12.jpg')

