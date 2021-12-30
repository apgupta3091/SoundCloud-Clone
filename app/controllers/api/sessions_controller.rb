class Api::SessionsController < ApplicationController
     def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show';
        else
            render json: ['invalid credentials']
        end
    end

    def destroy
        if !current_user
            render json: { message: 404 }
        else
            logout!
            render json: {}
        end
    end
end
