# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Board.create(name: 'Board 1', color: "blue")
Board.create(name: 'Board 2', color: "red")
Board.create(name: 'Board 3', color: "yellow")

List.create(name: 'List 1', board_id: 1)
List.create(name: 'List 2', board_id: 1)
List.create(name: 'List 3', board_id: 1)
List.create(name: 'List 4', board_id: 2)
List.create(name: 'List 5', board_id: 2)
List.create(name: 'List 6', board_id: 3)
List.create(name: 'List 7', board_id: 3)
List.create(name: 'List 8', board_id: 3)

Card.create(name: 'Card 1', list_id: 1)
Card.create(name: 'Card 2', list_id: 1)
Card.create(name: 'Card 3', list_id: 2)
Card.create(name: 'Card 4', list_id: 3)
Card.create(name: 'Card 5', list_id: 5)
Card.create(name: 'Card 6', list_id: 8)
Card.create(name: 'Card 7', list_id: 8)
Card.create(name: 'Card 8', list_id: 8)
Card.create(name: 'Card 9', list_id: 4)
Card.create(name: 'Card 10', list_id: 6)
Card.create(name: 'Card 11', list_id: 7)
Card.create(name: 'Card 12', list_id: 7)
Card.create(name: 'Card 13', list_id: 7)
