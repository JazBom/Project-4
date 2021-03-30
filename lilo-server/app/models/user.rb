class User < ApplicationRecord
  has_secure_password
  validates :name, uniqueness: { message: 'User already exists' }
end
