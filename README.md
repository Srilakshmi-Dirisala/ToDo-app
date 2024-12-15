# Todo-App

This is a simple To-Do application built with Node.js, Express, and MongoDB. The app allows users to register, log in, and manage their to-do tasks (create, read, update, delete). It also includes JWT-based authentication and Swagger API documentation.

## Features
- **User Authentication**: Users can register and log in using JWT for secure access.
- **Task Management**: Users can create, view, update, and delete tasks.
- **Swagger API Documentation**: The app uses Swagger for API documentation.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Documentation**: Swagger

## Requirements
- Node.js (version 14 or above)
- MongoDB Atlas or a local MongoDB setup
- Postman (for testing API endpoints)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Srilakshmi-Dirisala/ToDo-app.git
2. Install dependencies
npm install
3. Create .env file
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
4. Run the server
npm start
API Endpoints
User Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in with a registered user
Task Management (Protected Routes)
GET /api/tasks: Get all tasks for the logged-in user
POST /api/tasks: Create a new task
PUT /api/tasks/:id: Update a specific task
DELETE /api/tasks/:id: Delete a specific task
Swagger API Documentation
Access the Swagger UI at http://localhost:5000/api-docs.

License
This project is open-source and available under the MIT License.


1. **Save the file** with the name `README.md`.
2. **Test it locally or on GitHub** to see if the markdown format is rendered correctly.

Let me know if this works or if there’s another issue!
