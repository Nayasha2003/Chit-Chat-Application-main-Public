# 💬 Chit-Chat Application – Real-Time Chat Platform  

Chit-Chat is a **real-time chat application** built with the **MERN stack and Socket.IO** ⚡.  
It enables users to send and receive messages instantly with **low latency (100ms)**, supporting multiple concurrent users.  
The app is fully **Dockerized 🐳** for seamless deployment and scalability.  

🌐 **Live Demo**  
🔗 Live Site: https://chit-chat-client-one.vercel.app/login  

---

## 🖼️ Screenshots  

💬 **Login Page**  
⚡ **Real-Time Messaging**  
👥 **Multiple Concurrent Users**  
📱 **Responsive Chat UI**  

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
