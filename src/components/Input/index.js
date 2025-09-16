import './input.css';

import './input.css';

//props para mudar o placeholder e a className (css)
// Repassa todas as props para o <input />, incluindo onBlur, onChange etc.
//...props pega tudo o que for passado além de placeholder e className — como onBlur, onChange, value, etc.
function Input({ placeholder = 'Digite aqui', className = '', ...props }) {
  return (
    <input
      placeholder={placeholder}
      className={`input ${className}`}
      {...props}
    />
  );
}

export default Input;
