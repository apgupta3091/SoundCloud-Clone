require 'open-uri'

User.destroy_all
Song.destroy_all

user1 = User.create!( email:"AA.com", username:'DJ AA', password: 'password')
user2 = User.create!( email:"Goat.com", username:'The Goats', password: 'password')
user3 = User.create!( email:"DV.com", username:'Darth Vader', password: 'password')
user4 = User.create!( email:"Demon.com", username:'The Demons', password: 'password')
user5 = User.create!( email:"BB.com", username:'Bikini Bottom', password: 'password')
user6 = User.create!( email:"DA.com", username:'DJ Alvin', password: 'password')
user7 = User.create!( email:"guest@gmail.com", username:'guest', password: '123456')





song1 = Song.create!(title:'Groove', artist_id: user1.id, genre:'edm')
song1_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image1.jpg')
song1.cover_photo.attach(io: song1_image, filename: 'image1.jpg')

song2 = Song.create!(title:'Bass Drop', artist_id: user1.id, genre:'edm')
song2_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image2.jpg')
song2.cover_photo.attach(io: song2_image, filename: 'image2.jpg')

song3 = Song.create!(title:'Vibe', artist_id: user1.id, genre:'edm')
song3_image = open('https://soundwave-seeds.s3.amazonaws.com/images/vibe.jpg')
song3.cover_photo.attach(io: song3_image, filename: 'vibe.jpg')

song4 = Song.create!(title:'Hands up', artist_id: user1.id, genre:'edm')
song4_image = open('https://soundwave-seeds.s3.amazonaws.com/images/hands_up.jpg')
song4.cover_photo.attach(io: song4_image, filename: 'hands_up.jpg')


song5 = Song.create!(title:'MJ', artist_id: user2.id, genre:'hip-hop')
song5_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image3.jpg')
song5.cover_photo.attach(io: song5_image, filename: 'image3.jpg')

song6 = Song.create!(title:'Best Ever', artist_id: user2.id, genre:'hip-hop')
song6_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image4.jpg')
song6.cover_photo.attach(io: song6_image, filename: 'image4.jpg')

song7 = Song.create!(title:'Kobe', artist_id: user2.id, genre:'hip-hop')
song7_image = open('https://soundwave-seeds.s3.amazonaws.com/images/kobe.jpg')
song7.cover_photo.attach(io: song7_image, filename: 'kobe.jpg')

song8 = Song.create!(title:'John Wick', artist_id: user2.id, genre:'hip-hop')
song8_image = open('https://soundwave-seeds.s3.amazonaws.com/images/wick.jpg')
song8.cover_photo.attach(io: song8_image, filename: 'wick.jpg')

song9 = Song.create!(title:'Battleship', artist_id: user3.id, genre:'pop')
song9_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image5.jpg')
song9.cover_photo.attach(io: song9_image, filename: 'image5.jpg')

song10 = Song.create!(title:'Spaceman', artist_id: user3.id, genre:'pop')
song10_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image6.jpg')
song10.cover_photo.attach(io: song10_image, filename: 'image6.jpg')

song11 = Song.create!(title:'Light Saber', artist_id: user3.id, genre:'pop')
song11_image = open('https://soundwave-seeds.s3.amazonaws.com/images/saber.jpg')
song11.cover_photo.attach(io: song11_image, filename: 'saber.jpg')

song12 = Song.create!(title:'Stormtrooper', artist_id: user3.id, genre:'pop')
song12_image = open('https://soundwave-seeds.s3.amazonaws.com/images/stormtrooper.jpg')
song12.cover_photo.attach(io: song12_image, filename: 'stormtrooper.jpg')

song13 = Song.create!(title:'Storm', artist_id: user4.id, genre:'edm')
song13_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image7.jpg')
song13.cover_photo.attach(io: song13_image, filename: 'image7.jpg')

song14 = Song.create!(title:'Versace', artist_id: user4.id, genre:'edm')
song14_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image8.jpg')
song14.cover_photo.attach(io: song14_image, filename: 'image8.jpg')

song15 = Song.create!(title:'Ghosts', artist_id: user4.id, genre:'edm')
song15_image = open('https://soundwave-seeds.s3.amazonaws.com/images/ghost.jpg')
song15.cover_photo.attach(io: song15_image, filename: 'ghost.jpg')

song16 = Song.create!(title:'Alone', artist_id: user4.id, genre:'edm')
song16_image = open('https://soundwave-seeds.s3.amazonaws.com/images/alone.jpg')
song16.cover_photo.attach(io: song16_image, filename: 'alone.jpg')


song17 = Song.create!(title:'Campfire Song', artist_id: user5.id, genre:'pop')
song17_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image9.jpg')
song17.cover_photo.attach(io: song17_image, filename: 'image9.jpg')

song18 = Song.create!(title:'Klean Krab', artist_id: user5.id, genre:'pop')
song18_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image10.jpg')
song18.cover_photo.attach(io: song18_image, filename: 'image10.jpg')

song19 = Song.create!(title:'Patty Controversy', artist_id: user5.id, genre:'pop')
song19_image = open('https://soundwave-seeds.s3.amazonaws.com/images/patty.jpg')
song19.cover_photo.attach(io: song19_image, filename: 'patty.jpg')

song20 = Song.create!(title:'Crib', artist_id: user5.id, genre:'pop')
song20_image = open('https://soundwave-seeds.s3.amazonaws.com/images/pineapple.jpg')
song20.cover_photo.attach(io: song20_image, filename: 'pineapple.jpg')

song21 = Song.create!(title:'Recursion Recur...', artist_id: user6.id, genre:'edm')
song21_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image11.jpg')
song21.cover_photo.attach(io: song21_image, filename: 'image11.jpg')

song22 = Song.create!(title:'DS & Algs', artist_id: user6.id, genre:'edm')
song22_image = open('https://soundwave-seeds.s3.amazonaws.com/images/image12.jpg')
song22.cover_photo.attach(io: song22_image, filename: 'image12.jpg')

song23 = Song.create!(title:'React to this', artist_id: user6.id, genre:'hip-hop')
song23_image = open('https://soundwave-seeds.s3.amazonaws.com/images/react.jpg')
song23.cover_photo.attach(io: song23_image, filename: 'react.jpg')

song24 = Song.create!(title:'Stacks', artist_id: user6.id, genre:'hip-hop')
song24_image = open('https://soundwave-seeds.s3.amazonaws.com/images/money.jpg')
song24.cover_photo.attach(io: song24_image, filename: 'money.jpg')

song25 = Song.create!(title:'Diploma', artist_id: user7.id, genre:'pop')
song25_image = open('https://soundwave-seeds.s3.amazonaws.com/images/diploma.jpgg')
song25.cover_photo.attach(io: song25_image, filename: 'diploma.jpg')

song26 = Song.create!(title:'Peace', artist_id: user7.id, genre:'pop')
song26_image = open('https://soundwave-seeds.s3.amazonaws.com/images/peace.jpg')
song26.cover_photo.attach(io: song26_image, filename: 'peace.jpg')

song27 = Song.create!(title:'Tomato Soup', artist_id: user7.id, genre:'hip-hop')
song27_image = open('https://soundwave-seeds.s3.amazonaws.com/images/soup.jpg')
song27.cover_photo.attach(io: song27_image, filename: 'soup.jpg')

song28 = Song.create!(title:'GameCube', artist_id: user7.id, genre:'hip-hop')
song28_image = open('https://soundwave-seeds.s3.amazonaws.com/images/gamecube.jpg')
song28.cover_photo.attach(io: song28_image, filename: 'gamecube.jpg')

song29 = Song.create!(title:'Chill vibez', artist_id: user7.id, genre:'hip-hop')
song29_image = open('https://soundwave-seeds.s3.amazonaws.com/images/chill.jpg')
song29.cover_photo.attach(io: song29_image, filename: 'chill.jpg')

song30 = Song.create!(title:'Telephone', artist_id: user7.id, genre:'hip-hop')
song30_image = open('https://soundwave-seeds.s3.amazonaws.com/images/phone.jpg')
song30.cover_photo.attach(io: song30_image, filename: 'phone.jpg')


