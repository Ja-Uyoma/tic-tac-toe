import { MouseEventHandler } from "react";

export function Cell({
  value,
  onClickHandler,
}: {
  value: string;
  onClickHandler: MouseEventHandler;
}) {
  return (
    <div className="border border-black cursor-pointer">
      <button type="button" onClick={onClickHandler} className="size-full">
        {value}
      </button>
    </div>
  );
}
