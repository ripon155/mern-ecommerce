import classNames from "classnames";

function Skeleton({ times, clasName }) {
  const outerClassName = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    clasName
  );
  const innerClassName = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    " -translate-x-full",
    "bg-gradient-to-r",
    "via-white",
    "to-gray-200"
  );
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={outerClassName} key={i}>
          <div className={innerClassName}></div>
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
