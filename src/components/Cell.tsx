import { MouseEventHandler } from "react";
import PropTypes from "prop-types";

export function Cell({
  value,
  onClickHandler,
}: {
  value: string;
  onClickHandler: MouseEventHandler;
}) {
  return (
    <div className="border border-black cursor-pointer hover:bg-slate-100">
      <button
        type="button"
        onClick={onClickHandler}
        className="size-full text-8xl"
      >
        {value}
      </button>
    </div>
  );
}

Cell.propTypes = {
  value: PropTypes.string,
  onClickHandler: PropTypes.func,
};
