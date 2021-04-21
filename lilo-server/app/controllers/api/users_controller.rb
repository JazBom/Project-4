class Api::UsersController < ApplicationController
  # before_action :user_valid, except: [:create]

  def index
    render json: User.all
  end

  def create
    puts user_params
    user = User.create(user_params)
    if user.valid?
      render json: user, status: 201
    else
      puts user.errors.inspect
      render json: { message: 'Unable to create user.' }, status: 500
    end
  end

  def show
    puts params[:id]
    render json: User.find(params[:id])
  end

  def update
    render json: User.find(params[:id]).update(user_params)
  end

  def destroy
    puts params[:id]
    User.destroy(params[:id])
    render json: { message: 'Successfully deleted user.' }
  end

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
