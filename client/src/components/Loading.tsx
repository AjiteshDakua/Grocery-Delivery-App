// import { Loader2Icon } from "lucide-react";

// const Loading = () => {
//   return (
//     <div className="flex-center min-h-96 h-full w-full">
//       <Loader2Icon className="animate-spin size-8 text-green-950" />
//     </div>
//   );
// };

// export default Loading;

import { BikeIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-orange-50 to-green-50">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-orange-300/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-green-300/10 blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-6">
          {/* Soft Glow */}
          <div className="absolute inset-0 rounded-3xl bg-orange-200/20 blur-xl" />

          {/* Logo Card */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 animate-[float_3s_ease-in-out_infinite]">
            <div className="rounded-2xl bg-orange-100 p-3">
              <BikeIcon className="h-7 w-7 text-green-950" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-4xl font-extrabold tracking-tight leading-none">
          <span className="text-green-950">Zap</span>
          <span className="text-orange-500">Cart</span>
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-base font-medium text-gray-500">
          Fast • Fresh • Delivered
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-56 h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full rounded-full bg-green-950 animate-progress"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-sm tracking-wide text-gray-500">
          Loading your groceries...
        </p>
      </div>
    </div>
  );
};

export default Loading;
