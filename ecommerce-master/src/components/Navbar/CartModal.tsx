import Image from "next/image";
import React from "react";

const CartModal = () => {
  return (
    <div className="p-4 w-max absolute top-[100%] right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white mt-2">
      <h3 className="text-xl text-gray-500 mb-2">Shopping Cart</h3>
      <div>
        {/* Product */}
        <div className="flex">
          {/* Image */}
          <Image
            src="/instagram.png"
            alt=""
            height={80}
            width={80}
            className="object-cover mr-2"
          />

          {/* Details */}
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <p className="font-extrabold text-black">Classic Tote Bag</p>
              <p>$18</p>
            </div>

            <p className="text-gray-500 mt-2 text-sm">AVAILABLE</p>

            <div className="flex justify-between text-sm mt-auto">
              <p>Qty. 1</p>
              <p className="text-blue-400">Remove</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between font-bold text-black">
            <p>Subtotal</p>
            <p>$103</p>
          </div>

          <p className="text-gray-500 text-sm">
            Shipping and Taxes calculated at checkout.
          </p>

          <div>
            <div className="buttons flex justify-between items-center">
              <button className="ring-1 ring-gray-300 rounded-md px-4 py-2 text-sm">
                View Cart
              </button>
              <button className="px-4 py-2 ring-1 ring-gray-300 rounded-md bg-black text-white text-sm">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
