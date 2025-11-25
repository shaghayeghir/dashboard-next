import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .trim("لطفا فاصله اضافی را حذف کنید")
    .min(6, "ایمیل خیلی کوتاه است")
    .required("ایمیل الزامی است"),

  password: yup
    .string()
    .min(6, "حداقل ۶ کاراکتر لازم است")
    .matches(/[A-Z]/, "حداقل یک حرف بزرگ لاتین لازم است")
    .matches(/[a-z]/, "حداقل یک حرف کوچک لازم است")
    .matches(/[0-9]/, "حداقل یک عدد لازم است")
    .matches(/[@$!%*?&]/, "باید شامل کاراکتر خاص (@$!%*?&) باشد")
    .required("رمز عبور الزامی است"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد")
    .required("تأیید رمز عبور الزامی است"),
});
