import type { FC } from "react";

interface SpacerProps {
  width?: string;
  height?: string;
}

const Spacer: FC<SpacerProps> = ({ width = '100%', height = '20px', ...props}) => {
  return (
    <div style={{ width, height}} {...props}/>
  )
}

export default Spacer