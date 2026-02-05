<<<<<<< HEAD
"use client";
=======
'use client';
>>>>>>> 119e90be90bbc86e31c548b40e433bae76769f5e
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function NewOrdersPage({ orders = [], layout = "list" }) {
  const { t } = useTranslation();

  const [hiddenOrders, setHiddenOrders] = useState(new Set());
  const [loadingOrders, setLoadingOrders] = useState(new Set());
  useEffect(() => {
    // Auto-accept all orders when component mounts or orders change
    orders.forEach((order) => {
      if (!hiddenOrders.has(order.id) && !loadingOrders.has(order.id)) {
        // Set loading state immediately
        setLoadingOrders((prev) => new Set([...prev, order.id]));

        setTimeout(() => {
          setHiddenOrders((prev) => new Set([...prev, order.id]));
          setLoadingOrders((prev) => {
            const newSet = new Set(prev);
            newSet.delete(order.id);
            return newSet;
          });
        }, 60000);
      }
    });
  }, [orders]);
  // Filter out hidden orders
  const visibleOrders = orders.filter((order) => !hiddenOrders.has(order.id));


  return (
    <div className="border border-[#CDD5DF] rounded-[3px] p-6">
      <p className="text-[#0F022E] text-xl font-medium">
        {t("New orders")}
      </p>

      <div className={layout === "grid" ? "grid grid-cols-2 gap-4" : `grid lg1:grid-cols-1 ${orders.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
      {visibleOrders.map((order) => (
        <div
          key={order.id}
          className="mt-6 border border-[#CDD5DF] bg-white shadow-sm rounded-[3px] p-4 mb-4"
        >
          {/* Service */}
          <div className="flex gap-2 items-center">
            <img src="/images/icons/automotive-battery.svg" alt="service" />
            <p>
              <span className="text-[#364152] text-lg font-medium">
                {order.service} -
              </span>{" "}
              <span className="text-[#4B5565] text-sm">
                {order.customer}
              </span>
            </p>
          </div>

          <hr className="border-[#E3E8EF] my-4" />

          {/* Price & Distance */}
          <div className="flex justify-between">
            <div className="flex gap-1.5 items-center">
              <img src="/images/icons/clock-gray.svg" alt="price" />
              <p className="text-[#364152] text-base font-medium">
                  الاجمالي 45 دقيقة
              </p>
            </div>
            
            <div className="flex gap-1.5 items-center">
              <img src="/images/icons/route.svg" alt="distance" />
              <p className="text-[#364152] text-base">
                مسافة العمل {order.distance}
              </p>
            </div>
          </div>

          <hr className="border-[#E3E8EF] my-4" />

          {/* Location */}
            <div className="flex justify-between w-full">
              <div className="flex gap-2 items-center">
                <img src="/images/icons/location-bluee.svg" alt="location" />
                <p className="text-[#364152] text-base">
                  {order.location}
                </p>
              </div>
              <button className=" bg-[#FF3B30] text-[#fff] text-sm font-medium w-[25%] h-10 rounded-[3px] cursor-pointer">
                {t("to reject")}
              </button>
            </div>
        

          <hr className="border-[#E3E8EF] my-4" />
          <div className="flex justify-between items-center w-full">
            {/* Buttons */}
            <button
              disabled={loadingOrders.has(order.id)}
              className={`
                text-white text-sm font-semibold w-[50%] h-14 rounded-[3px]
                flex items-center justify-center gap-2
                overflow-hidden relative cursor-pointer
                ${loadingOrders.has(order.id)
                  ? " bg-[#079455]"
                  : "bg-[#079455] "}
              `}
            >
              {loadingOrders.has(order.id) && (
                <span
                  className="absolute top-0 right-0 h-full bg-gradient-to-r from-[#17B26A] via-[#17B26A] to-[#17B26A] animate-progress"
                  style={{ width: "0%" }}
                ></span>
                )}
                <span className="relative z-10">
                {t("acceptance")}
                </span>
            </button>

            <p className="text-[var(--color-primary)] text-xl font-semibold">
              40.00 جنية
            </p>
            
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default NewOrdersPage;
