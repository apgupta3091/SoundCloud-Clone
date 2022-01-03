class Api::SongsController < ApplicationController

    def index 
        if params.has_key?(:user_id)
            @songs = .includes(:artist).where('artist_id = ?', params[:user_id])
        else
            @songs = Song.all
        end
        render :index
    end

    def show 
        @song = Song.find_by(id: params[:id])
        render :show
    end

    def create
        @song = Song.new(song_params)
        @song.artist_id = current_user.id 

        if @song.save 
            render :show 
        else
            render json: @songs.errors.full_messages, status: 422
        end
    end

    def update 
        @song = Song.find_by(id: params[:id])

        if @song.update(song_params)
            render: show 
        else
            render json: @songs.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @song = Song.find_by(id: params[:id])
        @song.destroy
        render json: {}
    end

    private 

    def song_params 
        params.require(:song).permit(:title, :artist_id, :cover_photo, :genre, :song_file)
    end
end
