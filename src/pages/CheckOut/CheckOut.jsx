import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CheckOut() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [inputState, setInputState] = useState({
    fullName: "",
    email: "",
    date: "",
    dueAmount: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderConfirmed = {
      ...inputState,
      serviceTitle: service?.title ?? "",
      service_img: service?.img,
      serviceID: id,
    };

    const fetchBooking = async () => {
      try {
        const response = await fetch("http://localhost:5000/bookings", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(orderConfirmed),
        });
        const result = await response.json();
        if (result.insertedId) {
          alert("Booking successfully");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();

    // console.log(orderConfirmed);
  };

  useEffect(() => {
    const serviceItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/services/${id}`);

        const result = await response.json();
        // const selectService = result.find((item) => item.id === parseInt(id));
        setService(result);

        if (result && result.price) {
          setInputState((prevState) => ({
            ...prevState,
            dueAmount: `$ ${result.price}`,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };
    serviceItem();
  }, [id]);
  return (
    <>
      <h1 className="text-center text-3xl">
        Booking Service: {service?.title}
      </h1>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              name="fullName"
              value={inputState.fullName}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="Email"
              placeholder="email"
              name="email"
              value={inputState.email}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Data</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              value={inputState.date}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              placeholder="Due Amount"
              name="dueAmount"
              value={inputState.dueAmount}
              onChange={handleChange}
              className="input input-bordered"
              required
              readOnly
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-primary"
            value="Order Confirmed"
          />
        </div>
      </form>
    </>
  );
}
