<h1>To-Do-List App (MERN Stack)</h1>

A simple and efficient To-Do List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to manage daily tasks with features like adding, editing, marking as complete, and deleting tasks. It is designed with a clean UI and a fully functional REST API.

🚀 Features

➕ Add new tasks

✏️ Edit existing tasks

✔️ Mark tasks as completed

🗑️ Delete tasks

📦 Persistent storage using MongoDB

🔗 RESTful API (CRUD operations)

🎨 Responsive and clean React UI

🛠️ Tech Stack
* Frontend

React.js

CSS 

*Backend

Node.js

Express.js

MongoDB + Mongoose

📁 Project Structure
/client
  ├── src
  │   ├── components
  │   ├── pages
  │   ├── App.js
  │   └── index.js

/server
  ├── models
  ├── routes
  ├── controllers
  ├── server.js

README.md

🔌 API Endpoints
Base URL: http://localhost:5000/api/tasks
Method	Endpoint	Description
GET	/	Get all tasks
POST	/	Create a new task
PUT	/:id	Update a task
DELETE	/:id	Delete a task
🗄️ Environment Variables

Create a .env file in /server:

MONGO_URI='mongodb:localhost://27017/list'
PORT=5000

📚 Future Enhancements

User authentication (JWT)

Drag-and-drop tasks

Dark mode UI

Task categories & deadlines

🤝 Contributing

Feel free to submit issues or pull requests to enhance the project!


Sync with cloud backend for cross-device support
