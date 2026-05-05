# express-login-system# 🚀 YUVAN Auth System

A full-stack authentication system built using **Node.js, Express, MySQL, and EJS**.
This project allows users to **register, login, and view a personalized welcome page**.

---

## 📌 Features

* 📝 User Registration
* 🔐 User Login Authentication
* 👤 Dynamic Welcome Page
* 🎨 Modern UI (Glassmorphism + Dark/Light Mode)
* ⚡ Fast and lightweight backend using Express

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MySQL
* **Frontend:** EJS, CSS
* **Other:** UUID, Method-Override

---

## 📂 Project Structure

```
project/
│── public/
│   └── style.css
│
│── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── welcome.ejs
│
│── index.js
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/yuvan-auth-system.git
cd yuvan-auth-system
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Setup MySQL Database

Create a database:

```sql
CREATE DATABASE r1;
```

Create table:

```sql
CREATE TABLE register (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phonenumber VARCHAR(15),
    password VARCHAR(100)
);
```

---

### 4️⃣ Configure Database Connection

Update your `index.js`:

```js
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "r1"
});
```

---

### 5️⃣ Run the Server

```
node index.js
```

Open in browser:

```
http://localhost:8080
```

---

## 📸 Screens

* 🏠 Home Page
* 🔑 Login Page
* 📝 Registration Page
* 🎉 Welcome Page

---

## ⚠️ Current Limitations

* ❌ Passwords stored in plain text (not secure)
* ❌ No session management
* ❌ No input validation

---

## 🚀 Future Improvements

* 🔐 Password hashing (bcrypt)
* 🍪 Session management / JWT authentication
* ✅ Form validation
* 📱 Responsive UI improvements
* 🌐 Deployment (Render / Vercel / Railway)

---

## 👨‍💻 Author

**Yuvrajsinh Jadeja**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
