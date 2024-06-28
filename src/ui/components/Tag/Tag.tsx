import { TagProps } from "./Tag.types";

export const Tag = ({ context = "default", label = "" }: TagProps) => {
  return (
    <div className="">
      {context}
      <hr />
      {label}
    </div>
  );
};
