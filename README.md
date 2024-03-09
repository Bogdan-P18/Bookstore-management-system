# Bookstore-management-system
A simple bookstore management system using asp.net core and react. It offers authentication functionality. After the user authenticates, he can see a list of books and select them to purchase.


## Features
- You can login or sign up if you don't have an account
- You can see a list of books available in the store

## Frameworks/dependencies
- [ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-8.0)
- [Entity Framework](https://learn.microsoft.com/en-us/aspnet/entity-framework)

## Getting started
### You'll need:
- Node.js (version >= 18)
- MySQL database
- Visual Studio
- NuGet package manager

### 1. Clone the repository
    git clone https://github.com/BogdanP-18/Bookstore-management-system.git
    
### 2. Install npm dependencies
    Go to the bookstore-frontend folder and run 'npm install'

### 3. Setting up the database
    In the appsettings.json, go to the ConnectionStrings and change the Server to localhost,
     and the you'll have to add the migrations.
    To do that, follow this steps:
- Go to NuGet Package Manager and select Package Manager Console
- After the console appears, run Add-Migration "Message" and Update-Database

### 4. Using the app
    For the backend, just run the Program.cs. A window should appear in the browser which
     you can just close. Then go to the bookstore-frontend and run "npm run dev"
    