# GENERAL

# Cafe_FullStackWebsite

**Overview**

A cafe website with public facing UI and admin-only UI. 

Front-end built in ReactJS with Bootstrap, back-end built using Ruby-on-Rails with Postgres SQL database.

Admin functionality includes admin-only routes using log-in generated JWT token. This includes a form for editing menus and menu items. Changes that are stored in the menu database successfully are automatically rendered to the public-facing menu list in the UI. Each item has a unique SQL database id. 

A separate database and admin route allows admin to add and delete images of local dogs etc using a url with add/delete functionality. 

The two bespoke APIs create and access data stored in postgres for this purpose through CRUD functionality and via a Ruby-on-Rails backend server.

The configuration of the database tables make use of SQL entity association - the menu form adds instances to the 'menu items' table with values including a menu category id number, which references the relevant instance id from a separate 'menu categories' table.


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

Login - Password security will be enhanced using salting techniques (the login functionality is currently limited to a simple hash being performed on the password entered by the user, which is then stored in the user database in Postgres). 

Protected routes - Security will be enhanced by extending JWT token use to checking by API when data is called, and the current logged-in property using state updated to a function that can be invoked by children components to check the existance in local storage of the JWT token.

**Future plans**

I plan to add scheduling functionality for the menu item update - for example, the admin can add items one day but schedule them to appear at midnight on Sunday night, or add a 'special' that appears only on a particular day of the week.

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

