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
song1_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image1.jpg')
song1.cover_photo.attach(io: song1_image, filename: 'image1.jpg')
song1_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song1.mp3')
song1.song_file.attach(io: song1_song, filename: 'song1.mp3')

song2 = Song.create!(title:'Bass Drop', artist_id: user1.id, genre:'edm')
song2_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image2.jpg')
song2.cover_photo.attach(io: song2_image, filename: 'image2.jpg')
song2_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song2.mp3')
song2.song_file.attach(io: song2_song, filename: 'song2.mp3')

song3 = Song.create!(title:'Vibe', artist_id: user1.id, genre:'edm')
song3_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/vibe.jpg')
song3.cover_photo.attach(io: song3_image, filename: 'vibe.jpg')
song3_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song3.mp3')
song3.song_file.attach(io: song3_song, filename: 'song3.mp3')

song4 = Song.create!(title:'Hands up', artist_id: user1.id, genre:'edm')
song4_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/hands_up.jpg')
song4.cover_photo.attach(io: song4_image, filename: 'hands_up.jpg')
song4_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song4.mp3')
song4.song_file.attach(io: song4_song, filename: 'song4.mp3')


song5 = Song.create!(title:'MJ', artist_id: user2.id, genre:'hip-hop')
song5_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image3.jpg')
song5.cover_photo.attach(io: song5_image, filename: 'image3.jpg')
song5_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song5.mp3')
song5.song_file.attach(io: song5_song, filename: 'song5.mp3')

song6 = Song.create!(title:'Best Ever', artist_id: user2.id, genre:'hip-hop')
song6_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image4.jpg')
song6.cover_photo.attach(io: song6_image, filename: 'image4.jpg')
song6_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song6.mp3')
song6.song_file.attach(io: song6_song, filename: 'song6.mp3')

song7 = Song.create!(title:'Kobe', artist_id: user2.id, genre:'hip-hop')
song7_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/kobe.jpg')
song7.cover_photo.attach(io: song7_image, filename: 'kobe.jpg')
song7_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song7.mp3')
song7.song_file.attach(io: song7_song, filename: 'song7.mp3')

song8 = Song.create!(title:'John Wick', artist_id: user2.id, genre:'hip-hop')
song8_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/wick.jpg')
song8.cover_photo.attach(io: song8_image, filename: 'wick.jpg')
song8_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song8.mp3')
song8.song_file.attach(io: song8_song, filename: 'song8.mp3')

song9 = Song.create!(title:'Battleship', artist_id: user3.id, genre:'pop')
song9_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image5.jpg')
song9.cover_photo.attach(io: song9_image, filename: 'image5.jpg')
song9_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song9.mp3')
song9.song_file.attach(io: song9_song, filename: 'song9.mp3')

song10 = Song.create!(title:'Spaceman', artist_id: user3.id, genre:'pop')
song10_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image6.jpg')
song10.cover_photo.attach(io: song10_image, filename: 'image6.jpg')
song10_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song10.mp3')
song10.song_file.attach(io: song10_song, filename: 'song10.mp3')

song11 = Song.create!(title:'Light Saber', artist_id: user3.id, genre:'pop')
song11_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/saber.jpg')
song11.cover_photo.attach(io: song11_image, filename: 'saber.jpg')
song11_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song11.mp3')
song11.song_file.attach(io: song11_song, filename: 'song11.mp3')

song12 = Song.create!(title:'Stormtrooper', artist_id: user3.id, genre:'pop')
song12_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/stormtrooper.jpg')
song12.cover_photo.attach(io: song12_image, filename: 'stormtrooper.jpg')
song12_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song12.mp3')
song12.song_file.attach(io: song12_song, filename: 'song12.mp3')

song13 = Song.create!(title:'Storm', artist_id: user4.id, genre:'edm')
song13_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image7.jpg')
song13.cover_photo.attach(io: song13_image, filename: 'image7.jpg')
song13_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song13.mp3')
song13.song_file.attach(io: song13_song, filename: 'song13.mp3')

song14 = Song.create!(title:'Versace', artist_id: user4.id, genre:'edm')
song14_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image8.jpg')
song14.cover_photo.attach(io: song14_image, filename: 'image8.jpg')
song14_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song14.mp3')
song14.song_file.attach(io: song14_song, filename: 'song14.mp3')

song15 = Song.create!(title:'Ghosts', artist_id: user4.id, genre:'edm')
song15_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/ghost.jpg')
song15.cover_photo.attach(io: song15_image, filename: 'ghost.jpg')
song15_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song15.mp3')
song15.song_file.attach(io: song15_song, filename: 'song15.mp3')

song16 = Song.create!(title:'Alone', artist_id: user4.id, genre:'edm')
song16_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/alone.jpg')
song16.cover_photo.attach(io: song16_image, filename: 'alone.jpg')
song16_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song16.mp3')
song16.song_file.attach(io: song16_song, filename: 'song16.mp3')


song17 = Song.create!(title:'Campfire Song', artist_id: user5.id, genre:'pop')
song17_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image9.jpg')
song17.cover_photo.attach(io: song17_image, filename: 'image9.jpg')
song17_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song17.mp3')
song17.song_file.attach(io: song17_song, filename: 'song17.mp3')

song18 = Song.create!(title:'Klean Krab', artist_id: user5.id, genre:'pop')
song18_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image10.jpg')
song18.cover_photo.attach(io: song18_image, filename: 'image10.jpg')
song18_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song18.mp3')
song18.song_file.attach(io: song18_song, filename: 'song18.mp3')

song19 = Song.create!(title:'Patty Controversy', artist_id: user5.id, genre:'pop')
song19_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/patty.jpg')
song19.cover_photo.attach(io: song19_image, filename: 'patty.jpg')
song19_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song19.mp3')
song19.song_file.attach(io: song19_song, filename: 'song19.mp3')

song20 = Song.create!(title:'Crib', artist_id: user5.id, genre:'pop')
song20_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/pineapple.jpg')
song20.cover_photo.attach(io: song20_image, filename: 'pineapple.jpg')
song20_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song20.mp3')
song20.song_file.attach(io: song20_song, filename: 'song20.mp3')

song21 = Song.create!(title:'Recursion Recur...', artist_id: user6.id, genre:'edm')
song21_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image11.jpg')
song21.cover_photo.attach(io: song21_image, filename: 'image11.jpg')
song21_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song21.mp3')
song21.song_file.attach(io: song21_song, filename: 'song21.mp3')

song22 = Song.create!(title:'DS & Algs', artist_id: user6.id, genre:'edm')
song22_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/image12.jpg')
song22.cover_photo.attach(io: song22_image, filename: 'image12.jpg')
song22_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song1.mp3')
song22.song_file.attach(io: song22_song, filename: 'song1.mp3')

song23 = Song.create!(title:'React to this', artist_id: user6.id, genre:'hip-hop')
song23_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/react.jpg')
song23.cover_photo.attach(io: song23_image, filename: 'react.jpg')
song23_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song2.mp3')
song23.song_file.attach(io: song23_song, filename: 'song2.mp3')

song24 = Song.create!(title:'Stacks', artist_id: user6.id, genre:'hip-hop')
song24_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/money.jpg')
song24.cover_photo.attach(io: song24_image, filename: 'money.jpg')
song24_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song3.mp3')
song24.song_file.attach(io: song24_song, filename: 'song3.mp3')

song25 = Song.create!(title:'Diploma', artist_id: user7.id, genre:'pop')
song25_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/diploma.jpg')
song25.cover_photo.attach(io: song25_image, filename: 'diploma.jpg')
song25_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song5.mp3')
song25.song_file.attach(io: song25_song, filename: 'song5.mp3')

song26 = Song.create!(title:'Peace', artist_id: user7.id, genre:'pop')
song26_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/peace.jpg')
song26.cover_photo.attach(io: song26_image, filename: 'peace.jpg')
song26_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song6.mp3')
song26.song_file.attach(io: song26_song, filename: 'song6.mp3')

song27 = Song.create!(title:'Tomato Soup', artist_id: user7.id, genre:'hip-hop')
song27_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/soup.jpg')
song27.cover_photo.attach(io: song27_image, filename: 'soup.jpg')
song27_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song7.mp3')
song27.song_file.attach(io: song27_song, filename: 'song7.mp3')

song28 = Song.create!(title:'GameCube', artist_id: user7.id, genre:'hip-hop')
song28_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/gamecube.jpg')
song28.cover_photo.attach(io: song28_image, filename: 'gamecube.jpg')
song28_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song8.mp3')
song28.song_file.attach(io: song28_song, filename: 'song8.mp3')

song29 = Song.create!(title:'Chill vibez', artist_id: user7.id, genre:'hip-hop')
song29_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/chill.jpg')
song29.cover_photo.attach(io: song29_image, filename: 'chill.jpg')
song29_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song9.mp3')
song29.song_file.attach(io: song29_song, filename: 'song9.mp3')

song30 = Song.create!(title:'Telephone', artist_id: user7.id, genre:'hip-hop')
song30_image = URI.open('https://soundwave-seeds.s3.amazonaws.com/images/phone.jpg')
song30.cover_photo.attach(io: song30_image, filename: 'phone.jpg')
song30_song = URI.open('https://soundwave-seeds.s3.amazonaws.com/songs/song10.mp3')
song30.song_file.attach(io: song30_song, filename: 'song10.mp3')


