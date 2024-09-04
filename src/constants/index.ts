const initialValues = {
  contactUs: {
    name: "",
    email: "",
    phone: "",
    contactType: "",
  },
};
const buttonText = {
  contactUs: "Надіслати заявку",
};

const textFields = {
  contactUs: [
    {
      name: "name",
      type: "text",
      placeholder: "Імʼя",
      rules: { required: true },
    },
    {
      name: "email",
      type: "text",
      placeholder: "Пошта",
      rules: { required: true },
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Телефон",
      rules: { required: true },
    },
  ],
};
const radioButtons = {
  contactUs: {
    labelText: "Оберіть, будь ласка, комфортний спосіб зв’язку",
    name: "contactType",
    rules: { required: true },
    inputs: [
      {
        label: "Telegram",
        value: "telegram",
      },
      {
        label: "Viber",
        value: "viber",
      },
      {
        label: "WhatsApp",
        value: "whatsApp",
      },
      {
        label: "Signal",
        value: "signal",
      },
    ],
  },
};

export const data = {
  radioButtons,
  textFields,
  buttonText,
  initialValues,
};
