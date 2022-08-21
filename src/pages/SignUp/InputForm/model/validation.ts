import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("Это поле обязательно к заполнению")
        .min(3, "Имя должно быть минимум из 3 букв")
        .max(20, "Имя должно быть максимум из 20 букв"),
    lastName: Yup.string()
        .required("Это поле обязательно к заполнению")
        .min(3, "Имя должно быть минимум из 3 букв")
        .max(20, "Имя должно быть максимум из 20 букв"),
    phone: Yup.string()
        .required("Введите номер телефона")
        .min(9, "Длина номера телефона не менее 9 цифр"),
    password: Yup.string()
        .required("Это поле обязательно к заполнению")
        .min(6, "Длина пароля не должна быть менее 6 букв")
        .max(40, "Длина пароля не должна быть более 40 букв"),
    confirmPassword: Yup.string()
        .required("Введите пароль повторно")
        .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
});