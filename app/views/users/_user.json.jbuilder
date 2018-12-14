json.extract! user, :id, :image, :name, :address, :born_address, :job_type, :workat, :job_description, :facebook_url, :owned_media, :vision, :join_purpose, :give_free, :give_cost, :trouble, :needs, :thinking, :recent_news, :perspective_talent, :life_carrier, :created_at, :updated_at
json.url user_url(user, format: :json)
