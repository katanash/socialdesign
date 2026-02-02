class CreateSaasProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :saas_products do |t|
      t.string :name, null: false
      t.string :category
      t.text :description
      t.decimal :price_monthly, precision: 10, scale: 2
      t.decimal :price_yearly, precision: 10, scale: 2
      t.boolean :free_plan, default: false
      t.integer :trial_days
      t.text :features
      t.string :website_url
      t.string :logo_url
      t.decimal :rating, precision: 2, scale: 1
      t.text :pros
      t.text :cons
      t.string :target_users

      t.timestamps
    end

    add_index :saas_products, :category
    add_index :saas_products, :name
  end
end
