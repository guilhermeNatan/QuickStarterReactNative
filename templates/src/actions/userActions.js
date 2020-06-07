/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCES';
export const userLoginSucess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  user,
});
