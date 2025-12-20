// src/components/sections/Menu.tsx
"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface OrderItem {
  id: number;
  image: string;
  price: string;
  title: string;
  description: string;
}

const orders: OrderItem[] = [
  {
    id: 1,
    image: "/assets/img/order/order-1.png",
    price: "10.00",
    title: "Weastern Set Meal 01",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
  {
    id: 2,
    image: "/assets/img/order/order-2.png",
    price: "10.00",
    title: "Weastern Set Meal 02",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
  {
    id: 3,
    image: "/assets/img/order/order-3.png",
    price: "10.00",
    title: "Weastern Set Meal 03",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
  {
    id: 4,
    image: "/assets/img/order/order-4.png",
    price: "10.00",
    title: "Weastern Set Meal 01",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
  {
    id: 5,
    image: "/assets/img/order/order-5.png",
    price: "10.00",
    title: "Weastern Set Meal 02",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
  {
    id: 6,
    image: "/assets/img/order/order-6.png",
    price: "10.00",
    title: "Weastern Set Meal 03",
    description: "Chicken Fried Rice   |   Crispy Chicken fry\nWeastern Pickle   |   Mixed Vegetable\nSoft Drinks",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="menu section order_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-5 text-center" style={{ marginBottom: "70px" }}>
              <Reveal>
                <h3>Popular Orders</h3>
                <p>
                  inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards{" "}
                  <br className="d-none d-md-block" />
                  especially in the workplace. That's why it's crucial that, as women.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="row">
          {orders.map((order, idx) => (
            <div key={order.id} className="col-xl-4 col-md-6 mb-4">
              <Reveal delay={idx * 0.1}>
                <div className="single_order h-100">
                  <div className="order_thumb position-relative">
                    <img
                      src={order.image}
                      alt={order.title}
                      className="img-fluid w-100"
                      style={{ height: "250px", objectFit: "cover" }}
                      onError={(e) => {
                        // Fallback to menu images if order images don't exist
                        const target = e.target as HTMLImageElement;
                        const menuImages = [
                          "/assets/img/menu/bread-barrel.jpg",
                          "/assets/img/menu/caesar.jpg",
                          "/assets/img/menu/greek-salad.jpg",
                          "/assets/img/menu/lobster-bisque.jpg",
                          "/assets/img/menu/lobster-roll.jpg",
                          "/assets/img/menu/mozzarella.jpg",
                        ];
                        const fallbackIndex = (order.id - 1) % menuImages.length;
                        if (!target.src.includes(menuImages[fallbackIndex])) {
                          target.src = menuImages[fallbackIndex];
                        }
                      }}
                    />
                    <div className="order_prise position-absolute">
                      <span>${order.price}</span>
                    </div>
                  </div>
                  <div className="order_info p-4">
                    <h3 className="mb-3">
                      <Link href="#" onClick={(e) => e.preventDefault()}>
                        {order.title}
                      </Link>
                    </h3>
                    <p className="mb-3" style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
                      {order.description}
                    </p>
                    <Link href="/contact" className="boxed_btn">
                      Order Now!
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
