import { body } from "express-validator";

export const loginValidation = [
  body("email", "Введите правильную почту").isEmail({ min: 5 }),
  body("password", "Введите пароль не меннее 5 символов").isLength({ min: 5 }),
];
export const registerValidation = [
  body("email", "Введите правильную почту").isEmail({ min: 5 }),
  body("password", "Введите пароль не меннее 5 символов").isLength({ min: 5 }),
  body("fullName", "Введите полное имя").isLength({ min: 3 }),
  body("avatarUrl", "Ссылка на аватар некорректная").optional().isURL(),
];
export const postCreateValidation = [
  body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
