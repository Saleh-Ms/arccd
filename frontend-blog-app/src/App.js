import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import Users from "./pages/admin/screens/users/Users";
import EditPost from "./pages/admin/screens/posts/EditPost";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import Categories from "./pages/admin/screens/categories/Categories";
import { Toaster } from "react-hot-toast";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import BlogPage from "./pages/blog/BlogPage";
import ContactUs from "./pages/contact/ContactUs";
import OurTeam from "./pages/our-team/OurTeam";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<OurTeam />} />
 

                {/* admin layout routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="users/manage" element={<Users />} />
          <Route path="posts/manage/" element={<ManagePosts />} />
          <Route path="categories/manage/" element={<Categories />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />
          }
          />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
