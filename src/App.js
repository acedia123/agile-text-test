import "./styles/App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import Post from "./components/Post";

const showHome = () => {
  if (window.location.pathname === "/") {
    return (
      <MainLayout>
        <Home />
      </MainLayout>
    );
  }
};

const showLogin = () => {
  if (window.location.pathname === "/login") {
    return <AuthLayout />;
  }
};

const showAdmin = () => {
  const token = localStorage.getItem("accessToken");
  if (window.location.pathname === "/admin" && token) {
    return (
      <AdminLayout>
        <Post />
      </AdminLayout>
    );
  } else {
    return (
      <MainLayout>
        <Home />
      </MainLayout>
    );
  }
};

export default function App() {
  return (
    <div className="App">
      {showHome()}
      {showLogin()}
      {showAdmin()}
    </div>
  );
}
