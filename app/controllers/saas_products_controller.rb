class SaasProductsController < ApplicationController
  before_action :set_saas_product, only: [:show, :edit, :update, :destroy]

  # GET /saas_products
  def index
    @saas_products = SaasProduct.all

    # Filter by category
    @saas_products = @saas_products.by_category(params[:category]) if params[:category].present?

    # Filter by free plan
    @saas_products = @saas_products.with_free_plan if params[:free_plan] == 'true'

    # Sorting
    case params[:sort]
    when 'rating'
      @saas_products = @saas_products.ordered_by_rating
    when 'price_asc'
      @saas_products = @saas_products.ordered_by_price
    when 'price_desc'
      @saas_products = @saas_products.order(price_monthly: :desc)
    when 'name'
      @saas_products = @saas_products.order(:name)
    else
      @saas_products = @saas_products.ordered_by_rating
    end

    @categories = SaasProduct::CATEGORIES
  end

  # GET /saas_products/1
  def show
    @similar_products = SaasProduct.where(category: @saas_product.category)
                                   .where.not(id: @saas_product.id)
                                   .limit(3)
  end

  # GET /saas_products/new
  def new
    @saas_product = SaasProduct.new
  end

  # GET /saas_products/1/edit
  def edit
  end

  # POST /saas_products
  def create
    @saas_product = SaasProduct.new(saas_product_params)

    if @saas_product.save
      redirect_to @saas_product, notice: 'SaaS product was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /saas_products/1
  def update
    if @saas_product.update(saas_product_params)
      redirect_to @saas_product, notice: 'SaaS product was successfully updated.'
    else
      render :edit
    end
  end

  # DELETE /saas_products/1
  def destroy
    @saas_product.destroy
    redirect_to saas_products_url, notice: 'SaaS product was successfully deleted.'
  end

  # GET /saas_products/compare
  def compare
    @product_ids = params[:ids].to_s.split(',').map(&:to_i).reject(&:zero?)

    if @product_ids.empty?
      @saas_products = SaasProduct.all.limit(10)
      @comparison_products = []
    else
      @comparison_products = SaasProduct.where(id: @product_ids)
      @saas_products = SaasProduct.where.not(id: @product_ids).limit(10)
    end

    @categories = SaasProduct::CATEGORIES
  end

  private

  def set_saas_product
    @saas_product = SaasProduct.find(params[:id])
  end

  def saas_product_params
    params.require(:saas_product).permit(
      :name, :category, :description, :price_monthly, :price_yearly,
      :free_plan, :trial_days, :features, :website_url, :logo_url,
      :rating, :pros, :cons, :target_users
    )
  end
end
