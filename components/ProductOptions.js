// Render all options on product

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <div className="">
      <fieldset className="mt-3 ">
        <legend className="text-xl  pt-6">{name} :</legend>
        <div className="inline-flex items-center flex-wrap gap-4 style ">
        
          {values.map((value) => {
            const id = `option-${name}-${value}`;
            const checked = selectedOptions[name] === value;

            return (
              <label className={`option-${name} flex-grow pt-5`} key={id} htmlFor={id}>
                <input
                  className="sr-only "
                  type="radio"
                  id={id}
                  name={`option-${name}`}
                  value={value}
                  checked={checked}
                  onChange={() => {
                    setOptions(name, value);
                  }}
                />
                <div
                  className={` ${value}   relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none
                               ${
                                  checked
                                    ? "ring ring-offset-2"
                                    : "ring-2 ring-gray-100"
                                }`}
                >
                  <span className="px-2">{value}</span>
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
