import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4">
      <div>
        <div className="bg-gray-400 p-40" />
        <div className="mt-4 flex items-center space-x-2.5 border-b pb-3">
          <div className="h-10 w-10 rounded-full bg-gray-400" />
          <div>
            <p className="text-sm font-medium">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <p className="fond-medium mt-4 text-2xl text-gray-700">$140</p>
          <p className="mt-4 text-gray-500">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="mt-5 flex items-center space-x-4">
            <button className="w-full rounded-md bg-orange-500 py-3 text-white hover:ring hover:ring-orange-500 hover:ring-offset-2">
              Talk to seller
            </button>
            <button className="text-gray-400 hover:font-bold hover:text-red-400">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className="">
              <div className="aspect-square bg-gray-500" />
              <h3 className="mt-4 text-sm text-gray-600">Galaxy S60</h3>
              <p className="text-xs font-bold">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
