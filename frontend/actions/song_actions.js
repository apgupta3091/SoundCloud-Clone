import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';
export const CLEAR_SONG_ERRORS = 'CLEAR_SONG_ERRORS';

const receiveAllSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

const removeSong = songId => ({
    type: REMOVE_SONG,
    songId
});

const receiveSongErrors = errors => ({
    type: RECEIVE_SONG_ERRORS,
    errors
});

export const clearSongErrors = () => ({
    type: CLEAR_SONG_ERRORS
});


export const fetchSongs = () => dispatch => (
    SongAPIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
);

export const fetchUserSongs = userId => dispatch => (
    SongAPIUtil.fetchUserSongs(userId).then(songs => dispatch(receiveAllSongs(songs)))
);

export const fetchSong = songId => dispatch => {
    return SongAPIUtil.fetchSong(songId).then(song => dispatch(receiveSong(song)))
};

export const createSong = song => dispatch => (
    SongAPIUtil.createSong(song).then(song => dispatch(receiveSong(song)))
        
);

export const updateSong = song => dispatch => (
    SongAPIUtil.updateSong(song).then(song => dispatch(receiveSong(song)),
        err => dispatch(receiveSongErrors(err.responseJSON)))
);

export const deleteSong = songId => dispatch => (
    SongAPIUtil.deleteSong(songId).then(() => dispatch(removeSong(songId)))
);