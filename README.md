# 💬 Chit-Chat Application – Real-Time Chat Platform  

💬 Chit-Chat — A scalable real-time chat application built with the MERN stack ⚛️ and Socket.IO ⚡.  
It supports 👥 50+ concurrent users with instant messaging ⏱️ under 100ms latency, ensuring a seamless communication experience.  
Fully Dockerized 🐳 for efficient deployment and scalability 🚀, with a modern responsive UI 🎨 and secure backend 🔐.  

🌐 **Live Demo**  
🔗 Live Site: https://chit-chat-client-one.vercel.app/login  

---

## 🖼️ Screenshots  

💬 **Login Page**  

![Login Page](https://raw.githubusercontent.com/Nayasha2003/Chit-Chat-Application-main-Public/21f0063ae720333ec5d820ac5e725c4caa0ca210/Chit-Chat-Application-main/Chit-Chat-Application-main/client/src/assets/1.png)


⚡ **Chat Dashboard**  

![Logged In](https://raw.githubusercontent.com/Nayasha2003/Chit-Chat-Application-main-Public/21f0063ae720333ec5d820ac5e725c4caa0ca210/Chit-Chat-Application-main/Chit-Chat-Application-main/client/src/assets/2.png)


👥 **Multiple Concurrent Users**  

![Messaging UI](https://raw.githubusercontent.com/Nayasha2003/Chit-Chat-Application-main-Public/21f0063ae720333ec5d820ac5e725c4caa0ca210/Chit-Chat-Application-main/Chit-Chat-Application-main/client/src/assets/3.png)


📱 **Dockerized**  

![Docker Desktop](https://raw.githubusercontent.com/Nayasha2003/Chit-Chat-Application-main-Public/21f0063ae720333ec5d820ac5e725c4caa0ca210/Chit-Chat-Application-main/Chit-Chat-Application-main/client/src/assets/4.jpg)


---

## 💡 Features  

- 🔐 User Authentication (JWT / Clerk)  
- ⚡ Real-time bidirectional communication with **Socket.IO**  
- 👥 Supports **50+ concurrent users**  
- 📡 Low-latency messaging (**~100ms**)  
- 🐳 Dockerized (Frontend + Backend + Database)  
- 🗂️ MongoDB for chat history and user data  
- 🎨 Modern responsive chat UI  

---

## 🛠 Tech Stack  

**Frontend:**  
- React.js  
- TailwindCSS  
- Axios  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB  
- Socket.IO  

**Tools & Deployment:**  
- Docker  
- Vercel (Frontend)  
- Render / AWS EC2 (Backend)  
- Git & GitHub  

---

## 📦 Installation & Setup  

### 📥 Clone the Repository  
```bash
git clone https://github.com/Nayasha2003/Chit-Chat-Application-main-Public.git
⚙️ Backend Setup

cd chit-chat-backend
npm install
Create a .env file in the backend root:


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:


npm start
🎨 Frontend Setup
bash
Copy
Edit
cd ../chit-chat-frontend
npm install
Create a .env file in the frontend root:


VITE_BACKEND_URL=http://localhost:5000
Run the development server:


npm run dev
The frontend runs at http://localhost:5173.

🚀 Access the Application
Open http://localhost:5173 in your browser.

Register/Login.

Start chatting in real-time with other users.

✨ Key Highlights
⚡ Real-time messaging with Socket.IO

🐳 Fully Dockerized for scalable deployment

👥 50+ concurrent user support

🎨 Responsive, modern UI
