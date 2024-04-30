"use client";

import { NavigationBar } from "@/components/navbar";
import Modal from "@/components/modal";
import { useState } from "react";

export default function Staff() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.staffname.value;
    console.log("Name: " + name);
  };

  return (
    <main className="w-full h-[100vh] bg-slate-100 container">
      <NavigationBar />

      <div className="flex w-full justify-between px-5 mt-5">
        <h1 className="text-4xl text-indigo-600 mr-auto">Staff</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-2  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
          Add New
        </button>
      </div>

      <div className="md:px-2 py-2 w-full mt-5">
        <div className="shadow overflow-y-scroll rounded border-b border-gray-200 w-full">
          <table className="min-w-full bg-white">
            <thead className="border-b-2 text-black border-indigo-400">
              <tr>
                <th className="text-left py-5 px-4   text-sm font-bold">#</th>
                <th className="text-left py-5 px-4   text-sm font-bold">
                  Name
                </th>
                <th className="text-left py-5 px-4   text-sm font-bold">
                  Username
                </th>
                <th className="text-left py-5 px-4   text-sm font-bold">
                  Contract Type
                </th>
                <th className="text-left py-5 px-4   text-sm font-bold">
                  Role
                </th>
                <th className="text-left py-5 px-4   text-sm font-bold">
                  Contact Info
                </th>
                <th className="text-left py-5 px-4   text-sm font-bold">NIC</th>
                <th className="text-left py-5 px-4   text-sm font-bold"></th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="even:bg-blue-gray-50/50">
                <td className="text-left py-3 px-4 font-bold">1</td>
                <td className="text-left py-3 px-4">aa</td>
                <td className="text-left py-3 px-4">aa</td>
                <td className="text-left py-3 px-4">Training</td>
                <td className="text-left py-3 px-4">User</td>
                <td className="text-left py-3 px-4">11</td>
                <td className="text-left py-3 px-4">11</td>
                <td className="text-left py-3 px-4 cursor-pointer hover:text-amber-900 hover: ">
                  <button className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-2  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Edit | Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="pl-12 pb-1">
          <h1 className="text-2xl text-indigo-800 mt-5">
            Add New Staff Member
          </h1>
        </div>

        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            {/***************************** FORM - BEGIN *****************************/}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Name
                  </label>
                  <input
                    id="staffname"
                    placeholder="Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="staffname"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Contract Type
                  </label>
                  <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="">Select Contract Type</option>
                    <option value="Training">Training</option>
                    <option value="Probation">Probation</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                    <option value="Assigment">Assigment</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Username
                  </label>
                  <input
                    id="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="username"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Role
                  </label>
                  <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                    <option value="">Select role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Contact No
                  </label>
                  <input
                    id="contactno"
                    placeholder="Contact No"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="contactno"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    NIC
                  </label>
                  <input
                    id="nic"
                    placeholder="NIC"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="nic"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="password"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="confirmpassword"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text"
                    // value=""
                    name="confirmpassword"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="mr-3">
                <button
                  onClick={handleSubmit}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
              <div>
                <button className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Cancel
                </button>
              </div>
              <div className="flex ml-auto">
                <div>
                  <button className="rounded-lg py-3 px-8 text-center text-base font-semibold text-white outline-none bg-gradient-to-r from-red-500 to-red-600 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {/***************************** FORM - END *****************************/}
          </div>
        </div>
      </Modal>
    </main>
  );
}
