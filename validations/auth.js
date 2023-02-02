import { body } from "express-validator";

export const registerValidation = [
  body("email", "Введите правильную почту").isEmail({ min: 5 }),
  body("password", "Введите пароль не меннее 5 символов").isLength({ min: 5 }),
  body("fullName", "Введите полное имя").isLength({ min: 3 }),
  body("avatarUrl", "Ссылка на аватар некорректная").optional().isURL(),
];
