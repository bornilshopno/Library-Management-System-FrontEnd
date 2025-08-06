import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type MakeToolTipProps = {
  clues: {
    onHover: React.ReactNode;
    title: React.ReactNode;
  };
};

const MakeToolTip  = ({clues}:MakeToolTipProps) => {
    const {onHover, title}=clues;
    return (
        <Tooltip>
            <TooltipTrigger>{title}</TooltipTrigger>
            <TooltipContent>
                <div>{onHover}</div>
            </TooltipContent>
        </Tooltip>
    );
};

export default MakeToolTip;