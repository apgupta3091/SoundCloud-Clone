export const fetchSongs = () => (
    $.ajax({
        method: 'GET',
        url: `/api/songs/`
    })
);

export const fetchUserSongs = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/songs`
    })
);

export const fetchSong = songId => {
    return (
    $.ajax({
        method: 'GET',
        url: `api/songs/${songId}`,
        contentType: false,
        processData: false
    })
    )
};

export const createSong = song => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: song,
        contentType: false,
        processData: false
    })
);

export const updateSong = song => (
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${song.id}`,
        data: song,
        contentType: false,
        processData: false
    })
);

export const deleteSong = songId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/songs/${songId}`
    })
);