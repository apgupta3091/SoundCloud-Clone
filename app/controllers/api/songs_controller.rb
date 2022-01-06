class Api::SongsController < ApplicationController

    def index 
        @songs = Song.all
        render :index
    end

    def show 
        @song = Song.find_by(id: params[:id])
        render :show
    end

    def create
        @song = Song.new(song_create_params)
        @song.artist_id = current_user.id 
        if @song.save
            render :show 
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def update 
        @song = Song.find_by(id: params[:song][:id])
        if @song.update(song_update_params)
            render :show 
        else
            render json: @song.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @song = Song.find_by(id: params[:id])
        @song.destroy
        render json: {}
    end

    private 

    def song_update_params
        params.require(:song).permit(:id, :title, :artist_id, :cover_photo, :genre, :song_file)
    end

    def song_create_params
        params.require(:song).permit(:title, :artist_id, :cover_photo, :genre, :song_file)
    end
end
