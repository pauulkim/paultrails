class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.includes(:user).where(trail_id: params[:trail_id])
    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review && @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy!
  end

  private 

  def review_params
    params.require(:review).permit(:rating, :activity_date, :review_description, :user_id, :trail_id)
  end
end 