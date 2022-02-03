import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-4">
      {/* box 1 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto">
          Checkout
        </div>
      </div>
      {/* box2 */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-t-3xl p-6 bg-white relative -top-5">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full"></div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-xs">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="-mt-14 -mb-5 flex flex-col items-center">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      {/* box 3 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
