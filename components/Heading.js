import Link from "next/link";

export const Heading = () => {
  return (
    <div className='bg-gray-800 px-10 p-5 md:flex md:items-center md:justify-between'>
      <div className='flex-1 min-w-0'>
        <h2 className='text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
          Students Data
        </h2>
      </div>
      <div className='mt-4 flex md:mt-0 md:ml-4'>
        <Link href='/addStudent'>
          <button
            type='button'
            className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
          >
            Add Student
          </button>
        </Link>
      </div>
    </div>
  );
};
