# 🌐 ConnectHub - Full Stack Social Media Web Application

## 📌 Introduction

**ConnectHub** is a full-stack social media web application developed as part of the **CodeAlpha Internship - Task 2**. The application allows users to register, log in securely, create and interact with posts, manage their profiles, and explore a modern social networking experience.

The project follows a client-server architecture where the frontend communicates with the backend using REST APIs, and all user data is stored in a MySQL database.

---

# 🎯 Project Objectives

* Develop a complete social media web application.
* Implement secure user authentication.
* Perform CRUD operations on posts.
* Integrate a relational database.
* Build responsive and user-friendly interfaces.
* Understand frontend and backend integration using REST APIs.

---

# ✨ Features

### 👤 User Authentication

* User Registration
* User Login
* Logout
* Session Management

### 📝 Post Management

* Create Post
* Upload Images
* Edit Post
* Delete Post
* Display Posts in Feed

### ❤️ Social Features

* Like Posts
* Comment on Posts
* Search Users
* Suggested Friends
* Follow Button (Frontend UI)

### 👤 Profile Management

* View Profile
* Edit Profile
* Update Profile Photo
* Update User Information

### ⚙ Settings

* Dark Mode
* Notification Settings
* Privacy Settings
* Change Password UI
* About ConnectHub

### 📄 Additional Pages

* Feed Page
* Profile Page
* Edit Profile Page
* Settings Page
* Messages Page
* Friends Page

---

# 🛠 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript (ES6)

## Backend

* Node.js
* Express.js

## Database

* MySQL

## Middleware

* Multer (Image Upload)

## API Testing

* Postman

## Version Control

* Git
* GitHub

---

# 📁 Project Structure
## 📁 Project Structure

```text
ConnectHub/
│
├── Frontend/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── css/
│   │   ├── feed.css
│   │   ├── profile.css
│   │   ├── edit-profile.css
│   │   ├── settings.css
│   │   ├── messages.css
│   │   ├── friends.css
│   │   └── ...
│   │
│   ├── js/
│   │   ├── feed.js
│   │   ├── profile.js
│   │   ├── edit-profile.js
│   │   ├── settings.js
│   │   ├── messages.js
│   │   ├── friends.js
│   │   └── ...
│   │
│   ├── feed.html
│   ├── profile.html
│   ├── edit-profile.html
│   ├── settings.html
│   ├── messages.html
│   ├── friends.html
│   ├── login.html
│   └── register.html
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   ├── commentController.js
│   │   ├── likeController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── upload.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   ├── commentRoutes.js
│   │   ├── likeRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── uploads/
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── README.md
└── .gitignore
```


# 🔄 Application Flow

```
User

   │

   ▼

Register / Login

   │

   ▼

Authentication

   │

   ▼

Feed Page

   │

   ├────────► Create Post

   ├────────► Like Post

   ├────────► Comment

   ├────────► Edit Post

   ├────────► Delete Post

   │

   ▼

Profile Page

   │

   ├────────► Edit Profile

   ├────────► Upload Profile Photo

   │

   ▼

Settings

   │

   ▼

Logout
```

---

# 🗄 Database Tables

* Users
* Posts
* Comments
* Likes

---

# REST APIs Implemented

## Authentication

* Register User
* Login User

## Posts

* Create Post
* Get Posts
* Edit Post
* Delete Post

## Comments

* Add Comment
* Get Comments

## Likes

* Like / Unlike Post

## Users

* Get Profile
* Update Profile
* Search Users
* Upload Profile Photo

---

# 🚀 Future Enhancements

* Real-Time Chat
* Friend Request System
* Follow & Followers Backend
* Notifications Backend
* Email Verification
* Password Reset
* Live Search Suggestions
* Real-Time Updates using Socket.IO

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

* Full Stack Web Development
* REST API Development
* CRUD Operations
* Authentication & Authorization
* MySQL Database Design
* File Upload using Multer
* Frontend & Backend Integration
* Responsive UI Design
* Git & GitHub Version Control

---

# 👨‍💻 Developed By

**Balisetti Anusha**

### Internship

**CodeAlpha - Full Stack Web Development Internship**

---

## ⭐ Thank You

Thank you for visiting this repository. Your feedback and suggestions are always welcome.
