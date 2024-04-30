"use client";

import Modal from "@/components/modal";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [showModal, setShowModal] = useState(false);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [total, setTotal] = useState(0);

  function AddThemTogether() {
    setShowModal(true);
    // setTotal(number1 + number2 + number3);
  }

  useEffect(() => {
    console.log("qw1-start ue");
    setNumber1(1);
    setNumber2(1);
    setNumber3(1);
  }, []);

  useEffect(() => {
    console.log("qw1-start ue");
    setTotal(number1 + number2 + number3);
  }, [number1, number2, number3]);

  console.log("qw1-inside fc");

  return (
    <div className="flex flex-col justify-center h-[100vh] bg-secondary">
      {/* <div> */}
      <div className="text-xl p-10">
        <Link href={"/"}>(Home)</Link>
      </div>

      <div className="p-10 text-xl">
        <label className="mr-5" htmlFor="numOne">
          Input number 1
        </label>
        <input
          className="border border-x-2 pl-2"
          id="numOne"
          type="number"
          placeholder="0"
          defaultValue={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
      </div>

      <div className="p-10 text-xl">
        <label className="mr-5" htmlFor="numTwo">
          Input number 2
        </label>
        <input
          className="border border-x-2 pl-2"
          id="numTwo"
          type="number"
          placeholder="0"
          defaultValue={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>

      <div className="p-10 text-xl">
        <label className="mr-5" htmlFor="numThree">
          Input number 3
        </label>
        <input
          className="border border-x-2 pl-2"
          id="numThree"
          type="number"
          placeholder="0"
          defaultValue={number3}
          onChange={(e) => setNumber3(+e.target.value)}
        />
      </div>

      <div className="p-10 text-xl">
        <label className="mr-5" htmlFor="numTwo1">
          Output
        </label>
        <input
          className="border border-x-2 pl-2"
          id="numTwo1"
          type="number"
          value={total}
          disabled
        />
      </div>

      <div className="flex justify-center items-center p-10 text-xl bg-slate-300 mt-5 cursor-pointer">
        <button className="[h-30px] w-50px" onClick={AddThemTogether}>
          Add
        </button>
      </div>
      {/* </div> */}

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <p>******************************</p>
        <h1>
          Addition ---- {number1} + {number2} + {number3} = {total}
        </h1>
        <p>******************************</p>
      </Modal>
    </div>
  );
}
