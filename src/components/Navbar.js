import logo from "../img/CONNECT_LOGO.png";

function Navbar() {
  return (
    <div className="bg-gray-100">
      <div className="container py-2 flex justify-center md:justify-start">
        <div className="flex gap-3 ">
          <img src={logo} alt="" className="w-10" />
          <h1 className="font-normal text-2xl  md:text-left ">
            <a href="/">Present Connection</a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
