/* eslint-disable react/prop-types */
export default function BookingRow({ booking, handleDelete }) {
  const { _id, service_img, fullName, email, serviceTitle, date, dueAmount } =
    booking;

  return (
    <>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-32 rounded">
                {service_img ? (
                  <img src={service_img} />
                ) : (
                  <div className="">
                    <h1 className="text-center">{serviceTitle}</h1>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceTitle}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{fullName}</span>
        </td>
        <td>{email}</td>
        <td>{dueAmount}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
}
