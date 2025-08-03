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
                <div>{onHover}</div>
            </TooltipContent>
        </Tooltip>
    );
};

export default MakeToolTip;