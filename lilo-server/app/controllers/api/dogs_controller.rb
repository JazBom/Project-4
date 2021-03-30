class Api::DogsController < ApplicationController
  def index
    render json: Dog.all
  end

  def create
    puts dog_params
    dog = Dog.create(dog_params)
    if dog.valid?
      render json: dog, status: 201
    else
      render json: { message: 'Unable to create dog pic.' }, status: 500
    end
  end

  def show
    render json: Dog.find(params[:id])
  end

  def update
    render json: Dog.find(params[:id]).update(dog_params)
  end

  def destroy
    puts params[:id]
    Dog.destroy(params[:id])
    render json: { message: 'Successfully deleted dog pic.' }
  end

  def dog_params
    params.required(:dog).permit(:imgUrl)
  end
end
