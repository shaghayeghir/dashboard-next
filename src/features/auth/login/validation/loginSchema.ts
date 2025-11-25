import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .min(6, "ایمیل خیلی کوتاه است")
    .required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(6, "حداقل ۶ کاراکتر لازم است")
    .matches(/[A-Z]/, "باید حداقل یک حرف بزرگ داشته باشد")
    .matches(/[a-z]/, "باید حداقل یک حرف کوچک داشته باشد")
    .matches(/[0-9]/, "باید حداقل یک رقم داشته باشد")
    .matches(/[@$!%*?&]/, "باید حداقل یک کاراکتر خاص (@$!%*?&) داشته باشد")
    .required("رمز عبور الزامی است"),
});
