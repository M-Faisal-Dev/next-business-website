import Link from "next/link";

function Banner() {
  return (
    <div
    className="py-3 text-center"
    style={{
      background: "linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(248, 154, 191, 0.7))"
    }}
  >
    <div className="flex flex-row justify-center">
    <p className="font-medium">
        <span className="hidden sm:inline">Welcome to the Future of Innovation and Excellence!</span>
    </p>
      <Link className="underline underline-offset-4 font-medium" href="#">
        <div className="container">hello this is faisal</div>
      </Link> 
    </div>
    
    </div>
  );
}

export default Banner;
