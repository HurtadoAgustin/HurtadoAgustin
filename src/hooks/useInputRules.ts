const RegExps = {
  text: /^[a-zA-Z\s]*$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  tel: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
};

type Rule = {
  pattern: {
    value: RegExp
    message: string
  }
}

type ListOfRules = {
  text: Rule
  email: Rule
  tel: Rule
  textarea: Rule | {}
}

function useInputRules(): ListOfRules {
  const Rules = {
    text: {
      pattern: {
        value: RegExps.text,
        message: "Invalid Name"
      }
    },
    email: {
      pattern: {
        value: RegExps.email,
        message: "Invalid email adress"
      }
    },
    tel: {
      pattern: {
        value: RegExps.tel,
        message: "Invalid phone number"
      }
    },
    textarea: {} // No RegExp needed
  }

  return Rules;
}

export default useInputRules;
