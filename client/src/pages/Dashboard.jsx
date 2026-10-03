import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response =
          await api.get("/auth/me");

        setUser(response.data.user);

      } catch (error) {
        localStorage.removeItem("token");

        navigate("/login");

      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();

  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };


  if (loading) {
    return (
      <div className="loading-screen">
        Loading your vault...
      </div>
    );
  }


  return (
    <div className="dashboard-page">

      <nav className="navbar">

        <div className="nav-brand">
          🗺️ TripVault
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </nav>


      <main className="dashboard-content">

        <section className="welcome-card">

          <p className="eyebrow">
            YOUR TRAVEL VAULT
          </p>

          <h1>
            Welcome back, {user?.name}! 👋
          </h1>

          <p>
            Your travel memories will have
            a home here.
          </p>


          <div className="coming-soon">

            <span>✈️</span>

            <div>

              <h3>
                More adventures coming soon
              </h3>

              <p>
                Trip creation, photo memories
                and travel sharing will be
                added in future weeks.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;