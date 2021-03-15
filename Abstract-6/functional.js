// Переменные как константы . промежуточные переменные 
// Функции - в математическом смысле. чистые функция
// Объекты - неизменяемые, данные (POJO), Модули - набор функционала (префикс), 

// React - функционального: компонент - функция

// username - обязательное, не меньше 5 символов
// passwrods - обязательное, не меньше 8 символов, (содержит символ !) (содержит большую букву и цифру)
// age - число, целое, (0, 150)

let validForm = {
  username: "anton",
  password: "anton!anton",
  age: "20",
};

let invalidForm = {
  username: "anto",
  password: "anto",
  age: "20a",
};


const validateUsername = (username) => (
  username.length < 5
  ? [false, "Логин должен быть не меньше 5 символов"]
  : [true, null]
);

const validatePassword = (password) => {
  
  if (password.length < 8) {
    return [false, "Пароль должен быть не меньше 8 символов"];
  }

  if (password.indexOf("!") < 0) {
    return [false,  "Пароль должен содержать '!'"];
  }

  return [true, null];
}

const validateAge = (age) => {
  let ageNumber = parseInt(age);

  if (isNaN(ageNumber) || age !== String(ageNumber)) {
    return [false, "Возраст должен быть числом"];
  }

  if (age < 0 || age > 150) {
    return [false, "Возраст должен быть в промежутке от 0 до 150 лет"];
  }

  return [true, null];
}

const createUser = ({
  username,
  password,
  age
}) => ({
  username,
  password,
  age,
  dateOfRegistration: new Date()
});


const validateUserForm = form => {
  const { username, password, age } = form;

  let isFormValid = true;
  const errors = [];


  let isValid = true;
  let error = null;

  [isValid, error] = validateUsername(username);
  isFormValid &= isValid;
  errors.push(error);

  [isValid, error] = validatePassword(password);
  isFormValid &= isValid;
  errors.push(error);

  [isValid, error] = validateAge(age);
  isFormValid &= isValid;
  errors.push(error);

  return [
    isFormValid, 
    errors, 
    isFormValid && createUser(form)
  ];
}


// Пограничная функция между миром чистых функций и миром побочных эффектов
const handleSubmit = (form) => {
  // проверка типов данных 
  const [isValid, errors, user] = validateUserForm(form);

  if (isValid) {
    // отправить форму 
    console.log("Создаем пользователя", user);
  } else {
    // отображаем ошибки в форме
    console.log("Форма заполнена с ошибками", errors, form);
  }
}

/// 

handleSubmit(validForm);
console.log("-----");
handleSubmit(invalidForm);