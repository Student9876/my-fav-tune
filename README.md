# My Favourite Tune
This is a NodeJs app to show ones favourite songs and artists.
This webapp is made using the technologies 
- EJS
- CSS
- NodeJs
- Supabase (PostgreSQL Based)
## To install this app in local system
1. First install the NodeJs LTS version from the official website of Nodejs https://nodejs.org/en
1. Clone the repository in your PC and go-to root directory of the project
    ```
    git clone https://github.com/Student9876/my-fav-tune.git
    cd my-fav-tune
    
    ```
1. Intall necessary package by entering the following command
   ```
   npm i
   ```
   This will install all the packages necessary to run the projects. Wait till all the node modules get installed in your pc.
1. Create a new file named `.env` in the root directory `my-fav-tune/' of the project and paste the following code in the file and save it.
   ```
   API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoemJvanNoZmJidWx5Y25scnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NzExODUsImV4cCI6MjAyMDM0NzE4NX0.sbHIG4dAH2694v7_a4ag4yHssk6JrNyM52xvUi0OKow
   PORT=9000
   ```
   This is the API key of the Supabase project I used in the project to store all the data.

1. Now start the project by using the following command
   ```
   node server.js
   ```
1. Now open `http://localhost:9000/` on your browser to access the app. If the port `9000` is occupied in your PC then change the port number to your desired in the `.env` file and run the app again.
