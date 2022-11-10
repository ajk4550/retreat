const Input = ({
  type,
  id,
  placeholder,
  required = false,
  value,
  onChange: handleChange,
  labeled = false,
}) => {
  return (
    <>
      {labeled ? (
        <label
          htmlFor={id}
          className="block mt-4 mb-1 text-sm font-medium text-gray-900"
        >
          {placeholder}
        </label>
      ) : (
        ''
      )}
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Input;
