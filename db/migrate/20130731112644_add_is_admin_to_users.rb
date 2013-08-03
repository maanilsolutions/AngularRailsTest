class AddIsAdminToUsers < ActiveRecord::Migration
  def change
  	:users, :is_admin, :boolean
  end
end
