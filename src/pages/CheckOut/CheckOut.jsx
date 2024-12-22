import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CheckOut() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const serviceItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/services/${id}`);

        const result = await response.json();
        // const selectService = result.find((item) => item.id === parseInt(id));
        setService(result);
      } catch (error) {
        console.log(error);
      }
    };
    serviceItem();
  }, [id]);
  return (
    <>
      <h1>Booking Service: {service?.title}</h1>

      <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
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
