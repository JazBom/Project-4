class Api::MenuCategoriesController < ApplicationController
    def index
        render json: MenuCategory.all
      end
    
      def create
        puts menu_category_params
        menu_category = MenuCategory.create(menu_category_params)
        if menu_category.valid?
          render json: menu_category, status: 201
        else
          render json: { message: 'Unable to create menu category.' }, status: 500
        end
      end
    
      def show
        puts params[:id]
        render json: MenuCategory.find(params[:id])
      end
    
      def update
        render json: MenuCategory.find(params[:id]).update(menu_category_params)
      end
    
      def destroy
        puts params[:id]
        MenuCategory.destroy(params[:id])
        render json: { message: 'Successfully deleted menu category.' }
      end
    
      def menu_category_params
        params.required(:menu_category).permit(:category)
      end
    end
    
