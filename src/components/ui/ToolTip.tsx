import "./ToolTip.scss"

export type TPosition = "top" | "bottom" | "left" | "right"

interface ITiilTipProps {
    text: string
    position: TPosition
}

export default function ToolTip({ text, position }: ITiilTipProps) {

    return (
        <div className={`tool-tip tip-stats tool-tip-${position}`}>{text}</div>
    )
}
