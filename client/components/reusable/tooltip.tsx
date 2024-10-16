<<<<<<< HEAD
=======

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
=======
import useIsTruncated from "../hooks/useIsTruncated";

>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
interface ResuableTooltipProps {
  text: string;
}

const ResuableTooltip = ({ text }: ResuableTooltipProps) => {
<<<<<<< HEAD
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={`truncate max-w-[100%]`}>
          {text}
        </TooltipTrigger>
        <TooltipContent
          className={`break-words bg-[#007C85] text-white overflow-visible max-w-[429px]`}
        >
          <p className="relative z-[51]">{text}</p>
          <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#007C85] rotate-45 z-[49]"></div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ResuableTooltip;
=======
  const [isTruncated, textRef] = useIsTruncated(text);

  return (
    <div ref={textRef}>
      {isTruncated ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="truncate max-w-[100%]">
              {text}
            </TooltipTrigger>
            <TooltipContent className=" bg-[#007C85] text-white overflow-visible max-w-[429px] text-wrap" side="top">
              <p className="relative z-[51] break-words text-[15px]">{text}</p>
              <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#007C85] rotate-45 z-[49]"></div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <span className="truncate max-w-[100%]">{text}</span>
      )}
    </div>
  );
};

export default ResuableTooltip;
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
