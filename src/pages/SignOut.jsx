import * as React from "react";

function SignOut() {
  return (
    <div className="flex overflow-hidden flex-col font-bold bg-white">
      <div className="flex flex-col justify-center items-center px-20 py-96 w-full bg-black bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-end p-6 mb-0 max-w-full bg-white rounded shadow w-[600px] max-md:px-5 max-md:mb-2.5">
          <div className="text-xl tracking-tight leading-tight text-neutral-700 max-md:max-w-full">
            Sign Out ?
          </div>
          <div className="mt-4 text-sm leading-none text-stone-500 max-md:max-w-full">
            Are you sure you want to sign out?{" "}
          </div>
          <div className="flex overflow-hidden gap-2.5 justify-center items-center mt-4 text-base leading-none text-center">
            <div className="gap-2.5 self-stretch px-4 py-1 my-auto text-amber-500 whitespace-nowrap rounded-[40px]">
              Cancel
            </div>
            <div className="gap-2.5 self-stretch px-8 py-2 my-auto text-white bg-amber-500 rounded-[40px] w-[133px] max-md:px-5">
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignOut;