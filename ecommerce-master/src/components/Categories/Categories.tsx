import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [

    {
        id: 1,
        title: "All Products",
        img: "https://images.pexels.com/photos/12224203/pexels-photo-12224203.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
        price: "$25",
      },
  {
    id: 2,
    title: "Accessories",
    img: "https://images.pexels.com/photos/206299/pexels-photo-206299.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$25",
  },

  {
    id: 3,
    title: "Featured",

    img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$30",
  },

  {
    id: 4,
    title: "Health",
    img: "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$10",
  },

  {
    id: 5,
    title: "Home",
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$100",
  },

  {
    id: 6,
    title: "Tshirts",
    img: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis vel quam praesentium, consectetur perferendis distinctio aliquid omnis asperiores eum min",
    price: "$100",
  },
];

const Categories = () => {
  return (
    <section className="section py-16 ">
      <div className="container">
        <h2 className="  text-2xl font-bold pb-5">Categories</h2>
      </div>

      <div className="wrapper w-screen flex gap-4 overflow-x-scroll px-4   scroll-bar-hide ">

        {products.map((product,index)=>
        <Link key={index} href="#" className="flex-shrink-0 w-full sm:w-full md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]">

            <div className=" h-[250px]  relative">
                <Image alt="" src={product.img} fill className=" object-cover rounded-md"/>
            </div>
            <div>
                <span className=" mt-20 font-light tracking-wide">{product.title}</span>
            </div>
        </Link>
        )}
      </div>
    </section>
  );
};

export default Categories;
