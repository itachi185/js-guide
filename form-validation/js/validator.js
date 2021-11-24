// Đối tượng `Validator`
function Validator(options) {
  let selectorRules = {};

  function validate(inputElement, rule) {
    // Hàm thực hiện validate
    const parentElement = inputElement.closest(options.formGroupSelector);
    const errorElement = parentElement.querySelector(options.errorSelector);
    let errorMessage;

    // Lấy ra các rules của selector
    const rules = selectorRules[rule.selector];

    console.log(rules);

    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm tra
    for (let i = 0; i < rules.length; i++) {
      switch (inputElement.type) {
        case "radio":
        case "checkbox":
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ":checked")
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
          console.log(errorMessage);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      parentElement.classList.remove("invalid");
    }

    return !errorMessage;
  }

  // Lấy element của form cần validate
  const formElement = document.querySelector(options.form);

  if (formElement) {
    // Khi submit form
    formElement.onsubmit = (e) => {
      e.preventDefault();

      let isFormValid = true;

      // Thực hiện lặp qua từng rule và validate
      options.rules.forEach(function (rule) {
        const inputElement = formElement.querySelector(rule.selector);

        let isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === "function") {
          const enableInputs = formElement.querySelectorAll("[name]");

          // Convert to array
          const formValues = Array.from(enableInputs).reduce(
            (values, input) => {
              switch (input.type) {
                case "radio":
                  if (input.matches(":checked")) {
                    values[input.name] = input.value;
                  } else if (!values[input.name]) {
                    values[input.name] = "";
                  }
                  break;

                case "checkbox":
                  if (input.matches(":checked")) {
                    if (!Array.isArray(values[input.name])) {
                      values[input.name] = [];
                    }
                    values[input.name].push(input.value);
                  } else if (!values[input.name]) {
                    values[input.name] = "";
                  }
                  break;

                case "file":
                  values[input.name] = input.files;
                  break;

                default:
                  values[input.name] = input.value;
              }
              return values;
            },
            {}
          );

          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    };

    // Xử lý lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {
      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      const inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach((inputElement) => {
        if (inputElement) {
          // Xử lý trường hợp blur khỏi input
          inputElement.onblur = () => {
            validate(inputElement, rule);
          };

          // Xử lý trường hợp mỗi khi người dùng nhập vào input
          inputElement.oninput = () => {
            const parentElement = inputElement.closest(
              options.formGroupSelector
            );
            const errorElement = parentElement.querySelector(
              options.errorSelector
            );

            errorElement.innerText = "";
            parentElement.classList.remove("invalid");
          };

          if (inputElement.type === "select-one") {
            inputElement.onchange = () => {
              validate(inputElement, rule);
            };
          }
        }
      });
    });
  }
}

// Định nghĩa các rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector,
    test: (value) => {
      return value ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector,
    test: (value) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector,
    test: (value) => {
      return value.trim().length >= min
        ? undefined
        : message || `Vui lòng nhập ít nhất ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector,
    test: (value) => {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
