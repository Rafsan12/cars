import Parts from "../../../assets/images/about_us/parts.jpg";
import Person from "../../../assets/images/about_us/person.jpg";

export default function About() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen mt-8">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={Person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={Parts}
              className="w-1/2 absolute right-4 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-2xl font-bold text-orange-500">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="py-6">
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
}
