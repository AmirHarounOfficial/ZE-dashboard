'use client'
import { getActiveFuelTypesThunk, createFuelPriceThunk, getFuelPricesThunk } from '@/redux/slice/Services/ServicesSlice';
import { Dialog } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';

function AddFuel({open , setOpen}) {
  const {t}= useTranslation();

  //api
  const dispatch = useDispatch()
  const {ActiveFuel, loadingList } = useSelector((state) => state.services)

  const[formData , setFormData]=useState({
    price:'',
    type_id:'',
    is_active:1
  })

  const handleSubmit = () => {
    if (!formData.type_id || !formData.price) {
      alert(t('Please fill all fields'));
      return;
    }

    dispatch(createFuelPriceThunk(formData))
      .unwrap()
      .then(() => {
        // Reset form
        setFormData({ price: '', type_id: '', is_active: 1 });
        setSelected1(null);
        setSearchValue1('');
        // Refresh fuel prices list
        dispatch(getFuelPricesThunk());
        // Close dialog
        setOpen(false);
      })
      .catch((error) => {
        console.error('Failed to create fuel price:', error);
        alert(t('Failed to add fuel price'));
      });
  }

  useEffect(() => {
    if (!ActiveFuel || ActiveFuel.length === 0) {
      dispatch(getActiveFuelTypesThunk());
    }
  }, [dispatch, ActiveFuel]);


  // type of fuel (1)
  // =========================
  const [open1, setOpen1] = useState(false);
  const [selected1, setSelected1] = useState(null);
  const [searchValue1, setSearchValue1] = useState("");
  const dropdownRef1 = useRef(null);
  const optionFuel = Array.isArray(ActiveFuel?.data) ? ActiveFuel.data  : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) setOpen1(false);        };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <>
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "AddFuel-dialog" }}
    >
      <section className="px-6 mt-6">
        <button
          onClick={() => setOpen(false)}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
    
      </section>
      <p className='flex justify-center text-[#0F022E] text-2xl font-medium mb-8'>{t('Add fuel type')}</p>

      <section className='p-6'>
          {/* ==========type of fuel  ========== */}
          <div className="flex flex-col">
            <label className="text-[#364152] text-base font-normal mb-3">
              {t("Fuel type")}
            </label>

            <div className="relative w-full" ref={dropdownRef1}>
              <div
                className="relative flex items-center border border-[#C8C8C8] rounded-[3px] cursor-pointer"
                onClick={() => setOpen1(!open1)}
              >
                <input
                  type="text"
                  placeholder={t("Choose fuel type")}
                  value={selected1 || searchValue1}   
                  onChange={(e) => {
                    setSearchValue1(e.target.value);
                    setOpen1(true);
                    setSelected1(null);
                  }}
                  className="h-14 p-3 w-full text-[#364152] focus:outline-none"
                />

                <span className="absolute left-3 pointer-events-none">
                  {open1 ? (
                    <img src="/images/icons/ArrowUp.svg" alt="up" />
                  ) : (
                    <img src="/images/icons/ArrowDown.svg" alt="down" />
                  )}
                </span>
              </div>

              {open1 && (
                <ul className="absolute left-0 right-0 border border-[#C8C8C8] bg-white rounded-[3px] shadow-md z-10 max-h-48 overflow-y-auto">
                  {optionFuel
                    .filter((opt) =>
                      opt.name.toLowerCase().includes(searchValue1.toLowerCase())
                    )
                    .map((opt) => (
                      <li
                        key={opt.id}
                        onClick={() => {
                          setSelected1(opt.name);
                          setFormData({ ...formData, type_id: opt.id });
                          setOpen1(false);
                          setSearchValue1("");
                        }}
                        className="p-3 hover:bg-[#F5F5F5] cursor-pointer"
                      >
                        {opt.name}
                      </li>
                    ))}
                </ul>
              )}

            </div>
          </div>


          <div className='flex flex-col gap-1.5 my-4'>
            <label className="text-[#364152] text-sm font-normal">{t('the price')}({t('pound')})</label>
            <input 
              type="text"
              placeholder={t('Enter the price')}
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className='border border-[#C8C8C8] text-[#364152] w-full h-14 px-3 outline-none'
              />
          </div>

          {/* note */}
          <ul className='bg-[#EEF2F6] p-3 mb-4'>
            <li className='text-[#775B0D] text-sm font-normal'>{t('The price must match the official prices to avoid account suspension.')}</li>
          </ul>

          {/* btn */}
          <button 
            onClick={handleSubmit}
            disabled={loadingList}
            className='w-full h-14 bg-[var(--color-primary)] text-white cursor-pointer disabled:opacity-50'
          >
            {loadingList ? t('Loading...') : t('addition')}
          </button>

      </section>
    </Dialog>
    </>
  )
}

export default AddFuel