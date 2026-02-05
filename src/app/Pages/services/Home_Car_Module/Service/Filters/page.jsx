"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

// Dynamically import Dialog to avoid SSR
const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

function FiltersPage({ open, handleClose, onApply, onReset, currentFilters }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState([]);
  
  const options = [
    { value: "active", label: t("active") },
    { value: "pending", label: t("pending") },
    { value: "refused", label: t("refused") },
    { value: "stopped", label: t("stopped") },
    { value: "inactive", label: t("inactive") },
  ];

  // Initialize from currentFilters
  React.useEffect(() => {
    if (open && currentFilters && currentFilters.status) {
       // Support both single string (if user manually edited params) and array
       const status = Array.isArray(currentFilters.status) ? currentFilters.status : [currentFilters.status];
       setSelected(status);
    } else if (open && !currentFilters?.status) {
      setSelected([]);
    }
  }, [open, currentFilters]);

  const handleChange = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
      <section className="flex justify-between px-6 mt-6">
        <button
          onClick={handleClose}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
        <div className="w-14 h-14 bg-[#EEF2F6] rounded-[100px] flex justify-center items-center">
          <p className="bg-[#E3E8EF] flex items-center justify-center w-10 h-10 rounded-[100px]">
            <img src="/images/icons/FilterGreyicon.svg" alt="" className="w-6 h-6" />
          </p>
        </div>
      </section>

      <section className="mt-8 px-6">
        <p className="text-[#364152] text-xl font-medium mb-5">{t("Filter items")}</p>
        <p className="text-[#4B5565] text-sm font-normal mb-5">
          {t("Filter results to facilitate access to the required service")}
        </p>
      </section>
      <span className="border-[0.5px] border-[#E3E8EF]" />

      <section className="border m-6 p-6 border-[#CDD5DF] rounded-[5px]">
        <p className="mb-6 text-[#364152] text-xl font-medium">{t("Services status")}</p>
        <div>
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-2 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => handleChange(option.value)}
                className="hidden"
              />
              <span
                className={`w-6 h-6 flex items-center justify-center border rounded-[3px] 
                  ${
                    selected.includes(option.value)
                      ? "bg-[#C69815] border-[#C69815]"
                      : "bg-white border-[#CDD5DF]"
                  }`}
              >
                {selected.includes(option.value) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13 4.25L6.125 11.125L3 8"
                      stroke="white"
                      strokeWidth="2.08325"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="text-[#727272] text-base font-normal">{option.label}</span>
            </label>
          ))}
        </div>
      </section>

      <div className="px-6 mt-4 mb-6 flex gap-4">
        <button 
          onClick={() => {
            onApply({ status: selected });
          }}
          className="bg-[#C69815] text-white px-4 py-2.5 w-42.5 h-13.5 rounded-[3px] cursor-pointer"
        >
          {t("apply")}
        </button>
        <button
          className="border border-[#C69815] text-[#C69815] px-4 py-2.5 w-32.5 h-13.5 rounded-[3px] cursor-pointer"
          onClick={() => {
            setSelected([]);
            onReset();
          }}
        >
          {t("cancel")}
        </button>
      </div>
    </Dialog>
  );
}

export default FiltersPage;
