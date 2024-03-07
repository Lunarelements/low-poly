const InputNumber = ({ label, id, defaultValue, register }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="line-color"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="number"
        defaultValue={defaultValue}
        {...register(id)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputNumber;
