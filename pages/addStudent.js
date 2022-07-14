import { useState } from "react";
import Link from "next/link";
import { Success } from "../components/Success";
import { Failure } from "../components/Failure";
import axios from "axios";

export default function Example() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    if (firstName && lastName && dob) {
      await axios.post("/api/student", { firstName, lastName, dob });
      const dobYear = new Date(dob).getFullYear();
      const generatedPassword = `${firstName}*${dobYear}`;
      setPassword(generatedPassword);
      setMessage("Password Generated. Welcome!");
    } else {
      setFirstName("");
      setLastName("");
      setDob("");
      setPassword("");
      setMessage("Please enter the valid details.");
    }
  };
  return (
    <div className='max-w-5xl p-10 mx-auto my-10 rounded-xl shadow-lg space-y-8 divide-y divide-gray-200'>
      <div className='space-y-8 divide-y divide-gray-200 sm:space-y-5'>
        {message === "Password Generated. Welcome!" && <Success />}
        {message === "Please enter the valid details." && <Failure />}
        <div className='space-y-6 sm:space-y-5'>
          <div>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>Personal Information</h3>
          </div>
          <div className='space-y-6 sm:space-y-5'>
            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                First name
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete='given-name'
                  className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Last name
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
              <label
                htmlFor='dob'
                className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
              >
                Date Of Birth
              </label>
              <div className='mt-1 sm:mt-0 sm:col-span-2'>
                <input
                  type='date'
                  name='dob'
                  id='dob'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete='dob'
                  className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                />
              </div>
            </div>

            {password && (
              <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'
                >
                  One Time Password
                </label>
                <div className='mt-1 sm:mt-0 sm:col-span-2'>
                  <input
                    type='text'
                    readOnly={true}
                    name='password'
                    id='password'
                    value={password}
                    className='cursor-not-allowed max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='pt-5'>
        <div className='flex justify-end'>
          <Link href='/'>
            <button
              type='button'
              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Go To Student List
            </button>
          </Link>
          <button
            onClick={handleClick}
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
