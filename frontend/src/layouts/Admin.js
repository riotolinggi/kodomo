import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { getToken } from "../features/token/tokenSlice";

const Admin = () => {
  const { showSidebar } = useSelector((state) => state.dashboard);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getToken())
      .then((res) => {
        const result = res.payload;
        return result;
      })
      .then((result) => {
        if (!result.success || !user) {
          navigate("/");
        }
      });
  }, [dispatch, navigate, user]);

  const renderDashboard = (
    <div className='relative flex min-h-screen bg-blue-100'>
      {/* Sidebar */}
      <div
        className={`bg-slate-900 fixed w-64 left-0 inset-y-0 h-full transform duration-300 transition ease-in-out z-10  ${
          showSidebar ? "-translate-x-full" : "translate-x-0"
        }`}>
        <Sidebar />
      </div>
      {/* Main Content */}
      <div
        className={`flex-1 transform duration-300 h-full overflow-hidden ${
          showSidebar ? "md:ml-0" : "md:ml-64"
        } `}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
  return renderDashboard;
};

export default Admin;
