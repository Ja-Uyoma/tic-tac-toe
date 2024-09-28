import { MouseEventHandler } from "react";

export function Restart({
  onClickHandler,
}: {
  onClickHandler: MouseEventHandler;
}) {
  return (
    <div className="flex justify-center py-2">
      <button
        type="button"
        onClick={onClickHandler}
        className="text-white font-medium rounded-md bg-sky-600 border px-4 py-2 active:shadow-lg active:scale-95 transition duration-200 ease-in-out hover:bg-sky-800"
      >
        Restart
      </button>
    </div>
  );
}
