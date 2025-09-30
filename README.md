# BloggingSite 📝

A modern, full-featured blogging platform built with React, Vite, and Appwrite. This application provides a complete content management system for creating, editing, and publishing blog posts with user authentication and rich text editing capabilities.

## ✨ Features

- 🔐 **User Authentication** - Secure login/signup with Appwrite
- 📝 **Rich Text Editor** - TinyMCE integration for content creation
- 🖼️ **Image Upload** - Featured image support for blog posts
- 📱 **Responsive Design** - Tailwind CSS for modern, mobile-first UI
- 🔄 **State Management** - Redux Toolkit for efficient state handling
- 🛣️ **Routing** - React Router DOM for seamless navigation
- 📄 **CRUD Operations** - Create, read, update, and delete blog posts
- 🎨 **Modern UI Components** - Reusable components with clean design
- 🚀 **Fast Development** - Vite for lightning-fast build times

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Backend-as-a-Service**: Appwrite
- **Rich Text Editor**: TinyMCE
- **Form Handling**: React Hook Form
- **Development**: ESLint for code quality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd BloggingSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Appwrite Setup**
   - Create an account at [Appwrite](https://appwrite.io/)
   - Create a new project
   - Set up a database with a collection for blog posts
   - Create a storage bucket for images
   - Configure authentication settings

## 🚀 Getting Started

1. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

4. **Lint Code**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Footer component
│   ├── container/      # Layout container
│   └── post-form/      # Post creation/editing form
├── pages/              # Application pages
│   ├── Home.jsx        # Homepage
│   ├── AllPosts.jsx    # Posts listing
│   ├── AddPost.jsx     # Create new post
│   ├── EditPost.jsx    # Edit existing post
│   ├── Post.jsx        # Single post view
│   ├── Login.jsx       # Login page
│   └── Signup.jsx      # Registration page
├── appwrite/           # Appwrite service configuration
│   ├── auth.js         # Authentication services
│   └── config.js       # Database and storage services
├── store/              # Redux store configuration
│   ├── store.js        # Store setup
│   └── authSlice.js    # Authentication state slice
├── conf/               # Configuration management
│   └── conf.js         # Environment variables handling
└── assets/             # Static assets
```

## 🔧 Key Components

### Authentication
- **AuthLayout**: Protected route wrapper
- **Login/Signup**: User authentication forms
- **LogoutBtn**: Logout functionality

### Content Management
- **PostForm**: Rich text editor for creating/editing posts
- **PostCard**: Post preview component
- **RTE**: TinyMCE rich text editor wrapper

### UI Components
- **Button**: Reusable button component
- **Input**: Form input component
- **Select**: Dropdown select component
- **Container**: Layout wrapper

## 🔐 Authentication Flow

1. Users can register/login using email and password
2. Authentication state is managed globally with Redux
3. Protected routes ensure only authenticated users can create/edit posts
4. Session persistence maintains login state across browser sessions

## 📝 Blog Post Features

- **Create Posts**: Rich text editor with formatting options
- **Upload Images**: Featured image support with Appwrite storage
- **Draft/Publish**: Post status management
- **Edit Posts**: Update existing content
- **Delete Posts**: Remove posts with confirmation
- **View Posts**: Responsive post display with HTML parsing

## 🎨 Styling

The application uses Tailwind CSS for styling with:
- Responsive design principles
- Modern color schemes
- Consistent spacing and typography
- Custom component styling
- Mobile-first approach

## 📱 Responsive Design

- **Mobile**: Optimized for small screens
- **Tablet**: Adapted layout for medium screens
- **Desktop**: Full-featured layout for large screens


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [Appwrite](https://appwrite.io/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [TinyMCE](https://www.tiny.cloud/) - Rich text editor

---
