class SaasProduct < ApplicationRecord
  # Categories for SaaS products
  CATEGORIES = [
    'CRM',
    'Project Management',
    'Accounting',
    'Marketing',
    'HR',
    'Communication',
    'Design',
    'Development',
    'Analytics',
    'Security',
    'Customer Support',
    'E-commerce',
    'Other'
  ].freeze

  validates :name, presence: true, uniqueness: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }, allow_nil: true

  scope :by_category, ->(category) { where(category: category) if category.present? }
  scope :with_free_plan, -> { where(free_plan: true) }
  scope :ordered_by_rating, -> { order(rating: :desc) }
  scope :ordered_by_price, -> { order(price_monthly: :asc) }

  def features_list
    features.to_s.split("\n").map(&:strip).reject(&:empty?)
  end

  def pros_list
    pros.to_s.split("\n").map(&:strip).reject(&:empty?)
  end

  def cons_list
    cons.to_s.split("\n").map(&:strip).reject(&:empty?)
  end

  def price_display
    if free_plan?
      'Free plan available'
    elsif price_monthly.present?
      "From $#{price_monthly}/month"
    else
      'Contact for pricing'
    end
  end
end
