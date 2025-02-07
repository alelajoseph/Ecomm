import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    title: "Bathing Soap",
    img: "https://images.pexels.com/photos/206299/pexels-photo-206299.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$25",
  },

  {
    id: 2,
    title: "Caps",

    img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$30",
  },

  {
    id: 3,
    title: "Water Bottles",
    img: "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$10",
  },

  {
    id: 4,
    title: "Shirts",
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$100",
  },
];

const NewProducts = () => {
  return (
    <section className=" section py-16">
      <div className="container">
        <h2 className=" py-5 text-2xl font-bold">New Products</h2>

        <div className="  grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link key={index} href="">
              {/* image section  */}

              <div className="h-[300px] w-full relative">
                <Image
                  alt=""
                  src={product.img}
                  fill
                  className=" rounded-md object-cover hover:opacity-0 z-10 transition-opacity easy duration-500"
                />

                <Image
                  alt=""
                  src="https://images.pexels.com/photos/16194085/pexels-photo-16194085/free-photo-of-pile-of-lemons.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  fill
                  className=" object-cover rounded-md"
                />
              </div>

              {/* text section */}

              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between text-black/70 ">
                  <h3 className=" font-semibold">{product.title}</h3>
                  <h4 className="font-medium">{product.price}</h4>
                </div>

                <p className=" text-gray-600  line-clamp-3 text-sm">
                  {product.desc}
                </p>
                <button className=" w-max my-3 text-sm ring-1 ring-red-400 text-red-400 px-2 py-1 rounded-full hover:bg-red-400 hover:text-white transition-all ease-linear duration-300">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
