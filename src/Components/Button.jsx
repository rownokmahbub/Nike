import React from 'react'

export default function Button({label,iconURL,backgroudColor,textColor,borderColor,fullWidth}) {
  return (
    <button
      className={` flex justify-center
items-center gap-2 px-7 py-4 border
font-montserrat text-1g leading-none
${
  backgroudColor
    ? `${backgroudColor} ${textColor} ${borderColor}`
    : "bg-coral-red text-white border-coral-red"
} rounded-full ${fullWidth && 'w-full'} "} `}
    >
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="Arrow Rignt icon"
        />
      )}
    </button>
  );
}
