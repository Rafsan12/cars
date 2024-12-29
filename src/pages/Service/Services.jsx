import { useEffect, useState } from "react";
import Service from "./Service";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(
          "https://car-server-kappa-jet.vercel.app/services"
        );
        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchService();
  }, []);
  return (
    <>
      <div className="text-center  mt-4">
        <h3 className="text-2xl font-bold text-orange-400">Service</h3>
        <h1 className="text-4xl ">Our Service Area</h1>
        <p className=" text-gray-300">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 mt-4 mb-4 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </>
  );
}
