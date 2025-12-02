import { useEffect, useState } from "react";
import axios from "axios";
import "./user-style/userfront.css"; 

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  // Fetch all locations initially (like Blade $location)
  useEffect(() => {
  axios.get("/api/locations")
    .then(res => {
      console.log("API DATA:", res.data);

      const arr = Array.isArray(res.data)
        ? res.data
        : res.data.data;

      setLocations(arr || []);
    })
    .catch(err => console.error(err));
}, []);

  // Handle Form Input
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  // Submit to your Laravel route
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/bus/search", form)
      .then(res => {
        // Redirect or show results
        console.log("Search result:", res.data);
      })
      .catch(err => console.log(err));
  };

  // Popular Routes same as Blade PHP array
  const routes = [
    { from: "Dhaka", to: "Natore" },
    { from: "Natore", to: "Dhaka" },
    { from: "Dhaka", to: "Rajshahi" },
    { from: "Rajshahi", to: "Dhaka" },
    { from: "Kustia", to: "Dhaka" },
    { from: "Dhaka", to: "Kustia" },
    { from: "Meherpur", to: "Dhaka" },
    { from: "Dhaka", to: "Meherpur" },
    { from: "Dhaka", to: "Cox's Bazar" },
  ];

  return (
    <>
      {/* Master Background Section */}
      <div className="container-fluid master-background">
        <div className="row justify-content-between w-100">
          
          {/* Left Heading */}
          <div className="col-md-6">
            <div className="heading">
              <h1>RunStar is Near, <br />Start your journey Here,</h1>
              <p>Book fast, Ride easy and cheer!</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-4 p-5 form-part">
            <div className="light1"></div>
            <div className="light2"></div>

            <div className="card shadow-sm p-4 rounded-3">
              <h5 className="fw-bold mb-3 text-center" style={{ color: "#220901" }}>
                Find Your Bus
              </h5>

              <form onSubmit={handleSubmit}>
                {/* From */}
                <div className="mb-3 form-in">
                  <label className="form-label fw-semibold">From</label>
                  <select
                    name="from"
                    className="form-control rounded-3"
                    required
                    value={form.from}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Location --</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc.district}>
                        {loc.district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* To */}
                <div className="mb-3 form-in">
                  <label className="form-label fw-semibold">To</label>
                  <select
                    name="to"
                    className="form-control rounded-3"
                    required
                    value={form.to}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Location --</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc.district}>
                        {loc.district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="mb-3 form-in">
                  <label className="form-label fw-semibold">Date of Journey</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control rounded-3"
                    required
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button type="submit" className="btn bus-src rounded-3 fw-semibold">
                    Search Buses
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>


      {/* Popular Routes */}
      <div className="container my-5 p-routes">
        <h2 className="text-center mb-4 popular-title">Popular Routes</h2>

        <div className="row g-4">
          {routes.map((route, index) => (
            <div key={index} className="col-md-4 col-sm-6 card-route">
              <div className="main-card rounded-3 p-3">
                <div className="int">
                  <span>From</span>
                  <span>To</span>
                </div>
                <div className="route-card d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{route.from}</span>
                  <div className="route-line mt-2 mb-2">
                    <i className="bi bi-bus-front bus-icon"></i>
                  </div>
                  <span className="fw-bold">{route.to}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Variations */}
      <div className="container-fluid mt-3">
        <div className="col-12 text-center mb-2">
          <h1 
            className="fw-bold" 
            style={{ fontFamily: "El Messiri, sans-serif", color: "var(--second-color)" }}
          >
            Our Variations
          </h1>
        </div>

        {/* First row */}
        <div className="row g-3">
          <div className="col-md-6 p-5 service-col">
            <div className="service-card">
              <img src="/images/bus-6.png" className="img-fluid service-img" alt="Standard Non-AC" />
            </div>
            <div className="service-ins">
              <h3>Standard Non-AC</h3>
              <p>Affordable travel with simple comfort.</p>
            </div>
          </div>

          <div className="col-md-6 p-5 service-col">
            <div className="service-card">
              <img src="/images/bus-7.png" className="img-fluid service-img" alt="AC Coach" />
            </div>
            <div className="service-ins">
              <h3>AC Coach</h3>
              <p>Affordable travel with comfort.</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-3 mb-5">
          <div className="col-md-6 p-5 service-col">
            <div className="service-card">
              <img src="/images/bus-8.png" className="img-fluid service-img" alt="Luxurious" />
            </div>
            <div className="service-ins">
              <h3>Luxurious</h3>
              <p>Affordable travel with super comfort.</p>
            </div>
          </div>

          <div className="col-md-6 p-5 service-col">
            <div className="service-card">
              <img src="/images/bus-8.png" className="img-fluid service-img" alt="Sleeper Coach" />
            </div>
            <div className="service-ins">
              <h3>Sleeper Coach</h3>
              <p>Affordable travel with dreaming.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
