# GENERAL

# Cafe_FullStackWebsite

**Overview**

A cafe website with public facing UI and admin-only UI. 

Front-end built in ReactJS with Bootstrap, back-end built using Ruby-on-Rails with Postgres SQL database.

Admin functionality includes protected admin-only routes using JWT tokens for editing menus (changes that are stored in the database successfully are automatically rendered to the public-facing menu UI) including adding, deleting and editing item name, description and category. Each item has a unique SQL database id. 

A separate admin functionality, also with protected routes, allows admin to add and delete images - for example, of the cafe, locals and resident pooches. 

Two bespoke APIs (currently named 'menu', and 'dogs', however these names may be updated if the scope of current data changes) create and access data stored in postgres for this purpose through CRUD functionality and via a Ruby-on-Rails backend server.




![Screen Shot 2021-03-09 at 8 33 22 pm](https://user-images.githubusercontent.com/65477570/110449887-c2a83800-8116-11eb-8846-5405b3e60353.png)

![Screen Shot 2021-03-09 at 8 44 02 pm](https://user-images.githubusercontent.com/65477570/110451334-34cd4c80-8118-11eb-8230-ccf400d9774f.png)

___________________________________________________________________________________________________________________________________________________________

The website is fully responsive, with layouts for all screen sizes including tablets and smart-phones:

(1) Tablet example -

![Screen Shot 2021-03-09 at 8 49 05 pm](https://user-images.githubusercontent.com/65477570/110452065-ecfaf500-8118-11eb-9c17-ee5442471f6c.png)

(2) Smart phone example -

![Screen Shot 2021-03-09 at 9 30 59 pm](https://user-images.githubusercontent.com/65477570/110457475-c8a21700-811e-11eb-946a-6ce72e6b9ea2.png)



___________________________________________________________________________________________________________________________________________________________


**Current app issues**

The login functionality is currently limited to a simple hash being performed on the password entered by the user, which is then stored in the user database in Postgres. A user (name: 'Jess', password: 'abc123') has been seeded, but had to be input on the console using Ruby. The functionality to add a user via the CRUD routes (for example, in Postman) is still being developed. Password security will be further enhanced using salting techniques.

The database Postgres is SQL, but does not currently contain any entities that relate to each other - this will be added in the future. For example, the menu categories are hard-coded, but will be transferred to a table in Postgres and front/back-end code updated to integrate this (e.g. adding 'hasmany :menuitems' to the category model in the back-end, e.g. rendering front-end drop-down category input in the admin UI menu form based on get-all category database instances).

**Future plans**

I plan to add scheduling functionality for the menu item update - so, for example, the admin can add items one day but schedule them to appear at midnight on Sunday night, or add a 'special' that appears only on a particular day of the week.

An 'order online' function will be added and integrated with full stack functionality, so that customers can both order coffee and food ahead of time (or the cafe's preferred app for this integrated), and also order and pay for groceries from the cafe's newly established in-house corner-store.

The contact form that is currently in the website footer will also be given back-end functionality using CRUD and API with a database, so that the admin can respond to queries and keep track of customer names and email addresses. 

**Install instructions**

PREREQUISITES

NodeJS v15.11.0
Ruby v2.6.6
Rails
Postgres

SET-UP

Once cloned, start a terminal for both the client (cd lilo-client) and server (cd lilo-server) folders. 

Run the following commands in the terminal for each respectively:

(1) Server
- bundle install (downloads the necessary dependencies from the file 'Gemfile')
- rails db:create (creates the migrate file with parameters for databases and tables based on models in the code, including User, Menuitem and Dog)
- rails db:migrate (creates the databases and tables in the database Postgres, based on the migration just created)
- rails db:seed (seeds the user data so you can log-in to the admin-only routes using: username: 'Jess', password: 'abc123')
- rails s (to start the server at http://localhost:9000)

(2) Client
- npm install (downloads the necessary dependencies from the file 'package.json')
- npm start (to start the client at http://localhost:3000)

Together this should start the app, with full-stack functionality, in the browser at http://localhost:3000.

Make sure you are logged-in to postgres. You may also wish to download and open your favourite postgres interface, such as Postico, to view the databases and tables directly or use SQL to update and/or query it directly.

___________________________________________________________________________________________________________________________________________________________

