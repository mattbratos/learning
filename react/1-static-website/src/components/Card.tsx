export default function Card() {
  return (
    <div className="max-w-sm mx-auto text-white shadow-lg rounded-lg overflow-hidden border border-white px-12 ">
      <div className="px-6 py-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 mt-4">Bratos</h2>
        <img
          src="https://via.placeholder.com/200x200"
          alt="Placeholder Pic"
          className=" mx-auto size-48 object-cover mt-4 rounded-full"
        />
        <p className="text-base mt-4">I love react</p>
      </div>
    </div>
  );
}
