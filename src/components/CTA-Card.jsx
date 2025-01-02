'use client' 

import React from "react"; 
import TypeWriter from "./typewrite";
import { SwapBtn } from "./swapBtn";
 
const examples = [
  "Can you redesign my existing website?",
  "Can you help automate my business processes?",
  "What will it take to get a custom website for my business?",
  "Do you offer e-commerce solutions?",
  "Can you optimize my website for SEO?",
  "What technologies do you specialize in?",
]

const BlockInTextCard = ({ tag, text, examples }) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <div className="inline-block h-2 w-2 flex-shrink-0 bg-colorDark animate-bounce" />
        <p className="mb-1.5 text-lg text-colorDark font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed">{text} </p>
      <div className="flex items-center gap-3">
        <div className="inline-block h-2 w-2 flex-shrink-0 bg-colorDark animate-bounce" />
        <p className="font-extralight text-colorDark">EXAMPLE:</p>
        <div className=" ">
          <TypeWriter data={examples} /> 
        </div>
      </div>
      <hr className="border-neutral-300" /> 
      <SwapBtn > 
         Contact Support 
      </SwapBtn>
    </div>
  );
};


export const ContactCTA = () => {
  return (
    <div className="flex items-center justify-center bg-colorLight px-8 py-24 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any questions you may have.
          </>
        }
        examples={examples}
      />
    </div>
  );
};

 