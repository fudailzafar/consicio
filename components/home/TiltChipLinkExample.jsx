import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

const TiltChipLink = () => {
  return (
    <div className="mb-1.5 w-fit rounded-full bg-rose-600 animate-pulse">
      <a
        href="#"
        rel="nofollow"
        className="flex origin-top-left font-medium items-center rounded-full border border-rose-600 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
      >
        <span className="rounded-full px-2 py-3 font-medium text-white">
          <Sparkles className="size-4 text-rose-600" />
        </span>
        <span className="ml-1.5 mr-1 inline-block text-base text-rose-600">
          Powered by AI!
        </span>
        <ArrowRight className="mr-2 inline-block text-rose-600" />
      </a>
    </div>
  );
};

export default TiltChipLink;
