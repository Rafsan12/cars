import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import BookingRow from "./BookingRow";

export default function Bookings() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-server-kappa-jet.vercel.app/booking?email=${user?.email}`;

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await axios.get(url, { withCredentials: true });
        const result = response.data;
        setBookings(result);
      } catch (error) {
        console.error("Error fetching bookings:", error.message);
      }
    };

    fetchBookingsData();
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm(
      `Are you sure you want to delete ${bookings?.serviceTitle}?`
    );
    if (proceed) {
      const deleteBooking = async () => {
        try {
          const response = await fetch(
            `https://car-server-kappa-jet.vercel.app/booking/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            const result = await response.json();
            const remaining = bookings.filter((booking) => booking._id !== id);
            console.log("Booking deleted:", result);
            alert("Booking successfully deleted!");
            setBookings(remaining);
          } else {
            console.error("Failed to delete booking");
            alert("Failed to delete booking. Please try again.");
          }
        } catch (error) {
          console.error("Error deleting booking:", error);
          alert("An error occurred. Please try again.");
        }
      };
      deleteBooking();
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Bookings Items</h1>
        <p className="mt-4 text-gray-500">Booking:{bookings.length}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Title</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Due amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
