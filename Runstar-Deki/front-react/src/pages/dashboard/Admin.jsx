// src/pages/admin/AdminDashboard.jsx
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Admin() {

  // Dummy example (you will fetch from API)
  const totalPassengersThisMonth = 1200;
  const totalAmountThisMonth = 550000;
  const totalTripsThisMonth = 240;

  const reservations = [
    { id: 1, name: "John Doe", schedule_id: 12, coach_no: "D4", route: "Dhaka–CTG", seats: "A1,A2", total: 1200, status: "Paid" },
    { id: 2, name: "Alex", schedule_id: 18, coach_no: "C2", route: "Dhaka–Sylhet", seats: "F4,F5", total: 950, status: "Pending" }
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            label: "Bookings",
            data: [120,95,110,130,125,140,100,115,90,105,98,150],
            backgroundColor: "#ff0000",
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });

    return () => myChart.destroy();
  }, []);

  return (
    <div className="container-fluid">

      {/* FIRST FOUR CARDS */}
      <div className="row g-2">
        <div className="col-md-3 p-2">
          <div className="hello p-2">
            <h5>Passenger</h5>
            <h2>{totalPassengersThisMonth}p</h2>
            <p>in February</p>
            <div className="style-hello"></div>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="hello p-2">
            <h5>Sale</h5>
            <h2>{totalAmountThisMonth} Tk</h2>
            <p>in February</p>
            <div className="style-hello"></div>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="hello p-2">
            <h5>Completed Trips</h5>
            <h2>{totalTripsThisMonth}</h2>
            <p>in February</p>
            <div className="style-hello"></div>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="hello p-2">
            <h5>Cost</h5>
            <h2>3500tk</h2>
            <p>in February</p>
            <div className="style-hello"></div>
          </div>
        </div>
      </div>

      {/* CHART + TOP BRANCH */}
      <div className="row g-2 mt-2">
        <div className="col-md-6 p-2">
          <div className="graph p-2">
            <h4 className="text-center">Monthly Bookings Overview</h4>
            <div className="chart-container" style={{ height: "300px" }}>
              <canvas ref={chartRef}></canvas>
            </div>
            <div className="style-hello-graph"></div>
          </div>
        </div>

        {/* TOP 5 BRANCHES */}
        <div className="col-md-6 p-2">
          <div className="top-saler p-2">
            <h4 className="mb-4">🏆 Top 5 Branches</h4>

            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Manager</th>
                  <th className="text-center">Sales</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dhaka Central", "S A Rafi", 1200],
                  ["Chittagong Hub", "Rasel Khan", 1100],
                  ["Sylhet Point", "Mehedi Hasan", 980],
                  ["Rajshahi Zone", "Anis Khan", 920],
                  ["Khulna Station", "Tariq Rahman", 850],
                ].map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={`https://i.pravatar.cc/50?img=${index + 1}`}
                          alt={row[1]}
                          className="top-saler-profile-pic"
                        />
                        <span className="ms-2">{row[1]}</span>
                      </div>
                    </td>
                    <td className="text-center fw-bold top-saler-text-main">{row[2]}+</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          <div className="style-hello-topsale"></div>
        </div>
      </div>

      {/* BOOKINGS TABLE */}
      <div className="row g-2 mt-3 mx-1 mb-3">
        <div className="index-card shadow p-3">

          <h3>All bookings</h3>

          <table className="table table-bordered align-middle mt-3" id="table-same">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Passenger</th>
                <th>Schedule id</th>
                <th>Coach no</th>
                <th>Route</th>
                <th>Seats</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length > 0 ? (
                reservations.map((r, i) => (
                  <tr className="text-center" key={i}>
                    <td>{i + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.schedule_id}</td>
                    <td>{r.coach_no}</td>
                    <td>{r.route}</td>
                    <td>{r.seats}</td>
                    <td>{r.total}</td>
                    <td className="badge bg-info">{r.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No locations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
}
