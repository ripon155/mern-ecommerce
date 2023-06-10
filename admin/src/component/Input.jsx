import classNames from "classnames";
import PropTypes from "prop-types";

function Input({ name, type, placeholder, label, classname, onChange }) {
  const className = classNames(
    classname,
    "rounded border-2 border-slate-500 mx-3 p-1"
  );
  return (
    <>
      <label htmlFor={label} className="mx-3 mb-1 block">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  classname: PropTypes.string,
};
export default Input;
