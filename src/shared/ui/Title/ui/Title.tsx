import { FC } from "react";
import { TitleProps } from "../model/Title";

export const Title: FC<TitleProps> = ({
  title,
  ...props
}: TitleProps): JSX.Element => {
  return (
    <div {...props} className="flex justify-center py-2">
      <span className="text-gray-400">{title}</span>
    </div>
  );
};
