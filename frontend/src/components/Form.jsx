import React, {useState} from 'react'
import styles from './Form.module.css'

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isError, setIsError] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const isValidName = name.length > 5;
    const isValidEmail = email.includes("@") && email.includes(".com");

    function signUpUser(e) {
        e.preventDefault();

        if(isValidName && isValidEmail) {
            setIsError(false);
            setShowCard(true);
        } else {
            setIsError(true);
        }
    }

    const onNameChange = (e) => {
        resetValidationStates();
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        resetValidationStates();
        setEmail(e.target.value);
    };

    const resetValidationStates = () => {
        setShowCard(false);
        setIsError(false);
    };

  return (
    <>
      <form onSubmit={signUpUser}>
        <div>
            <input className={styles.input} 
            type="text"
            placeholder='Name'
            value={name}
            onChange={onNameChange}
            onFocus={resetValidationStates}
             />
        </div>
        <div>
            <input
            className={styles.input}
            type="text" 
            placeholder='Email'
            value={email}
            onChange={onChangeEmail}
            onFocus={resetValidationStates}
            />
        </div>
        <div>
            <button type='submit'>Enviar</button>
        </div>
        {isError && <p>Por favor verifique su información</p>}
      </form>
      {showCard && (
        <div className={styles.card}>
            <div>Graacias {name}, te contactaremos por vía Email lo más pronto posible!!!!</div>
        </div>
      )}
    </>
  )
}

export default Form
