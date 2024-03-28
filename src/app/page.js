import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  // console.log(data);

  return (
    <div>
      <h1 className="text-4xl text-center">welcome my first nextjs app</h1>
      <div className=" flex justify-between p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
                width={400}
                height={300}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
