class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.includes(:user).where(trail_id: params[:trail_id])
    render :index
  end

  private 

  def review_params
    params.require(:review).permit(:rating, :activity_date, :review_description, :user_id, :trail_id)
  end
end 