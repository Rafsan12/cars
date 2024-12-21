/* eslint-disable react/prop-types */
export default function Service({ service }) {
  const { price, img, title } = service;
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{title}</h2>
          <div>
            <p className="text-2xl text-orange-500">Price: ${price}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
