/**
 * Renders a single form input with its label.
 * @param {Object} props
 * @prop {string} name - Name of the input
 * @prop {string} [className=''] - Additional CSS class
 * @prop {string} [type='text'] - Input type
 * @returns {ReactElement} A rendered form input
 */
export default function FormInput({ name, inputName, className = "lg:w-[calc(50%-.5rem)]", type = "text", isRequired = false }) {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className="text-base font-medium">
        {name}
        {isRequired && "*"} :
      </label>
      <input
        type={type}
        name={inputName ? inputName : name.toLowerCase().replace(" ", "_")}
        placeholder={name.toLowerCase()}
        required={isRequired}
        className="w-full border border-sky-900 rounded-lg shadow-lg py-1 px-4 text-black outline-none transition focus:scale-105"
      />
    </div>
  );
}
