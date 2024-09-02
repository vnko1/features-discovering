export const formsData = {
  contactUs: {
    initialValues: {
      name: "",
      email: "",
      phone: "",
      contactType: "",
    },
    labelText: "Оберіть, будь ласка, комфортний спосіб зв’язку",
    buttonText: "Надіслати заявку",
    fields: {
      inputs: [
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
    },
    radioButtons: {
      name: "contactType",
      inputs: [
        {
          text: "Telegram",
          value: "telegram",
          rules: { required: true },
        },
        {
          text: "Viber",
          value: "viber",
          rules: { required: true },
        },
        {
          text: "WhatsApp",
          value: "whatsApp",
          rules: { required: true },
        },
        {
          name: "contactType",
          text: "Signal",
          value: "signal",
          rules: { required: true },
        },
      ],
    },
  },
};
