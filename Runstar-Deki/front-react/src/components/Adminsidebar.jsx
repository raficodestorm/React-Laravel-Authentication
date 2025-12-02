import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./adminsidebar.css"; // keep your existing CSS

export default function AdminSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isClosed, setIsClosed] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleSidebar = () => {
    setIsClosed((prev) => !prev);
  };

  // MENU CONFIG (easy to edit)
  const menus = [
    {
      name: "Bus type",
      icon: "/svg/addbus.svg",
      items: [
        { to: "/admin/bustypes/create", text: "Add Bustype", icon: "/svg/bus.svg" },
        { to: "/admin/bustypes", text: "All Bustypes", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Buses",
      icon: "/svg/bus.svg",
      items: [
        { to: "/admin/buses/create", text: "Add New Bus", icon: "/svg/addbus.svg" },
        { to: "/admin/buses", text: "All Buses", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Drivers",
      icon: "/svg/driver.svg",
      items: [
        { to: "/admin/drivers/create", text: "Add Driver", icon: "/svg/driver.svg" },
        { to: "/admin/drivers", text: "All Drivers", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Supervisor",
      icon: "/svg/supervisor.svg",
      items: [
        { to: "/admin/supervisors/create", text: "Add Supervisor", icon: "/svg/supervisor.svg" },
        { to: "/admin/supervisors", text: "All Supervisors", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Schedule",
      icon: "/svg/schedule.svg",
      items: [
        { to: "/admin/schedules/create", text: "Create schedule", icon: "/svg/addschedule.svg" },
        { to: "/admin/schedules", text: "All schedules", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Trips",
      icon: "/svg/trip.svg",
      items: [
        { to: "/admin/pendingtrip", text: "Pending Trips", icon: "/svg/pending.svg" },
        { to: "/admin/runningtrip", text: "Running Trips", icon: "/svg/running.svg" },
        { to: "/admin/finishedtrip", text: "Finished Trips", icon: "/svg/finish.svg" },
      ],
    },
    {
      name: "Location",
      icon: "/svg/location.svg",
      items: [
        { to: "/admin/locations/create", text: "Add location", icon: "/svg/addlocation.svg" },
        { to: "/admin/locations", text: "All locations", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Route",
      icon: "/svg/route.svg",
      items: [
        { to: "/admin/routes/create", text: "Add Route", icon: "/svg/addroute.svg" },
        { to: "/admin/routes", text: "All Routes", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Counter",
      icon: "/svg/counter.svg",
      items: [
        { to: "/admin/counters/create", text: "Add Counter", icon: "/svg/counter.svg" },
        { to: "/admin/counters", text: "All Counters", icon: "/svg/list.svg" },
      ],
    },
    {
      name: "Users",
      icon: "/svg/user1.svg",
      items: [
        { to: "/admin/users/create", text: "Add Users", icon: "/svg/adduser.svg" },
        { to: "/admin/users/admins", text: "Manage Admins", icon: "/svg/admins.svg" },
        { to: "/admin/users/controllers", text: "Manage Controllers", icon: "/svg/controllers.svg" },
        { to: "/admin/users/managers", text: "Manage Managers", icon: "/svg/managers.svg" },
        { to: "/admin/users", text: "Manage Users", icon: "/svg/allusers.svg" },
      ],
    },
    {
      name: "Cost",
      icon: "/svg/schedule.svg",
      items: [
        { to: "/admin/costs/create", text: "Add Cost", icon: "/svg/addschedule.svg" },
        { to: "/admin/costs", text: "All Costs", icon: "/svg/list.svg" },
      ],
    },
  ];

  return (
    <nav className={`sidebar ${isClosed ? "close" : ""}`}>
      <ul>
        {/* Logo + Toggle */}
        <li className="first">
          <span>
            <NavLink className="nav-logo" to="/">RunStar</NavLink>
          </span>

          <button className="toggle-btn" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#220901">
              <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
            </svg>
          </button>
        </li>

        {/* Dashboard */}
        <li>
          <NavLink to="/admin/dashboard">
            <img src="/svg/dashboard.svg" alt="" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* DROPDOWNS */}
        {menus.map((menu, i) => (
          <li className="dropdown" key={i}>
            <button
              className="drop-btn"
              onClick={() => toggleDropdown(menu.name)}
            >
              <img src={menu.icon} alt="" />
              <span>{menu.name}</span>

              <svg
                className={`arrow ${openDropdown === menu.name ? "rotate" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#0000F5"
              >
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </button>

            <ul className={`submenu ${openDropdown === menu.name ? "showmenu" : ""}`}>
              <div>
                {menu.items.map((item, j) => (
                  <li key={j}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <img src={item.icon} alt="" />
                      <span>{item.text}</span>
                    </NavLink>
                  </li>
                ))}
              </div>
            </ul>
          </li>
        ))}

        {/* Calendar */}
        <li>
          <NavLink to="/admin/calendar">
            <img src="/svg/schedule.svg" alt="" />
            <span>Calendar</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
