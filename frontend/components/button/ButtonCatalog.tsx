import React from "react";

function ButtonCatalog({
  Props,
}: {
  Props: {
    title: string;
  };
}) {
  return (
    <button className="bg-amber-600 opacity-100 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition transform hover:scale-105">
      {Props.title}
    </button>
  );
}

export default ButtonCatalog;
