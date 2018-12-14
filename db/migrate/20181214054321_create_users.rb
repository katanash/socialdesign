class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :image
      t.string :name
      t.string :address
      t.string :born_address
      t.string :job_type
      t.string :workat
      t.text :job_description
      t.text :facebook_url
      t.text :owned_media
      t.text :vision
      t.text :join_purpose
      t.text :give_free
      t.text :give_cost
      t.text :trouble
      t.text :needs
      t.text :thinking
      t.text :recent_news
      t.text :perspective_talent
      t.text :life_carrier

      t.timestamps
    end
  end
end
