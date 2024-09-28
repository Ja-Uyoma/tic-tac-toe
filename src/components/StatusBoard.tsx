import PropTypes from "prop-types";

export function StatusBoard({ status }: { status: string }) {
  return (
    <div className="text-center py-2">
      <p>{status}</p>
    </div>
  );
}

StatusBoard.propTypes = {
  status: PropTypes.string,
};
