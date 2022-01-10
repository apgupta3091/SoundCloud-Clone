export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

export const removeSong = () => ({
    type: REMOVE_SONG,
});

export const playSong = dispatch => ({
 type: PLAY_SONG,
});

export const pauseSong = dispatch => ({
 type: PAUSE_SONG,
});