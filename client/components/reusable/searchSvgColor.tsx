import { SearchIconProps } from "@/lib/interface";
import { cn } from "@/lib/utils";

const SearchIcon = ({ className, w, h }: SearchIconProps) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('absolute left-3 pointer-events-none', className)}
    >
      <path
        fill-rule="evenod       d"
        clip-rule="evenodd"
        d="M6.27203 0.93457C3.23686 0.93457 0.776367 3.39506 0.776367 6.43023C0.776367 9.4654 3.23686 11.9259 6.27203 11.9259C7.50646 11.9259 8.64583 11.5189 9.56328 10.8318L12.7828 14.0513C13.0894 14.3579 13.5865 14.3579 13.8931 14.0513C14.1997 13.7447 14.1997 13.2476 13.8931 12.941L10.6736 9.72148C11.3607 8.80404 11.7677 7.66466 11.7677 6.43023C11.7677 3.39506 9.3072 0.93457 6.27203 0.93457ZM2.34656 6.43023C2.34656 4.26225 4.10405 2.50476 6.27203 2.50476C8.44001 2.50476 10.1975 4.26225 10.1975 6.43023C10.1975 8.59821 8.44001 10.3557 6.27203 10.3557C4.10405 10.3557 2.34656 8.59821 2.34656 6.43023Z"
        // fill="#64748B"     
        /> 
    </svg>
  );
};

export default SearchIcon;
