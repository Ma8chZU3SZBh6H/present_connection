import Container from "./Container";

function Navbar() {
  return (
    <div className="bg-gray-100">
      <Container className="py-2 ">
        <h1 className="font-light text-2xl text-center md:text-left">
          Present Connection
        </h1>
      </Container>
    </div>
  );
}

export default Navbar;
