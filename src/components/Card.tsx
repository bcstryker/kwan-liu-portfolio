import {FC} from "react";

const Card: FC<{linkText: string}> = ({linkText}) => (
  <div className="w-64 p-16 rounded-xl border-solid border-2 border-fuchsia-100">
    <p className="text-xl text-white">{linkText}</p>
  </div>
);

export default Card;
