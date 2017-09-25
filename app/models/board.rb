class Board < ApplicationRecord
  has_many :lists
  has_many :cards
  belongs_to :user
end
