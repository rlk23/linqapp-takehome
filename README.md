# **Contact List Manager**

This is a simple web application that allows users to manage a list of contacts. It includes the ability to add, edit, delete, and search for contacts. The application is built with a **Node.js backend** for handling API requests and a **React frontend** for the user interface.

---

## **Features**

- **Add Contact**: Create a new contact with a name, email, and phone number.
- **Edit Contact**: Modify the details of an existing contact.
- **Delete Contact**: Remove a contact from the list.
- **Search Contacts**: Search for contacts by name or email.
- **In-Memory Storage**: Data is temporarily stored in memory for simplicity.

---

## **Technologies Used**

### Backend:
- Node.js
- Express.js

### Frontend:
- React
- Redux (State Management)
- React Router
- Bootstrap (UI Styling)
- Toastify (Notifications)

---

## **Getting Started**

### Prerequisites:
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn
- Git

---

### **1. Clone the Repository**
```bash
git clone https://github.com/rlk23/linqapp-takehome.git
cd linqapp-takehome
```

---

### **2. Setup the Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend server will run on [http://localhost:5000](http://localhost:5000).

---

### **3. Setup the Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## **Usage**
1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Use the UI to:
   - Add a new contact.
   - View the list of existing contacts.
   - Edit or delete a contact.
   - Search for contacts by name or email.

---

## **Project Structure**

### Backend
```
backend/
├── server.js             # Entry point for the backend server
├── routes/
│   └── contactRoutes.js  # API routes for contact management
├── controllers/
│   └── contactController.js # Logic for handling API requests
└── package.json          # Backend dependencies
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── AddContact.js  # Component to add a contact
│   │   ├── EditContact.js # Component to edit a contact
│   │   └── Home.js        # Main dashboard to view and manage contacts
│   ├── redux/
│   │   └── store.js       # Redux store configuration
│   └── index.js           # Entry point for the React app
└── package.json           # Frontend dependencies
```

---

## **Future Improvements**
- Connect to a database (e.g., MongoDB) for persistent data storage.
- Add user authentication and role-based access.
- Deploy the application to a cloud platform (e.g., AWS, Heroku).

---

## **Contributing**
Feel free to fork the repository and submit pull requests with enhancements or bug fixes.

---

## **License**
This project is open-source and available under the MIT License.
