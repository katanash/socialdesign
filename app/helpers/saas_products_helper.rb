module SaasProductsHelper
  def rating_stars(rating)
    return '' if rating.nil?

    full_stars = rating.floor
    half_star = (rating - full_stars) >= 0.5
    empty_stars = 5 - full_stars - (half_star ? 1 : 0)

    stars = ''
    full_stars.times { stars += '<span class="text-warning">&#9733;</span>' }
    stars += '<span class="text-warning">&#9734;</span>' if half_star
    empty_stars.times { stars += '<span class="text-muted">&#9734;</span>' }

    stars.html_safe
  end

  def price_range_badge(product)
    return content_tag(:span, 'Free', class: 'badge badge-success') if product.free_plan? && product.price_monthly.nil?

    if product.price_monthly.present?
      if product.price_monthly < 10
        content_tag(:span, '$', class: 'badge badge-success')
      elsif product.price_monthly < 50
        content_tag(:span, '$$', class: 'badge badge-warning')
      else
        content_tag(:span, '$$$', class: 'badge badge-danger')
      end
    else
      content_tag(:span, 'Contact', class: 'badge badge-secondary')
    end
  end
end
