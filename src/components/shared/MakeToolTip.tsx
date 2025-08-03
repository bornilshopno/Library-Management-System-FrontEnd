import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const MakeToolTip = ({clues}) => {
    const {onHover, title}=clues;
    return (
        <Tooltip>
            <TooltipTrigger>{title}</TooltipTrigger>
            <TooltipContent>
                <p>{onHover}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default MakeToolTip;