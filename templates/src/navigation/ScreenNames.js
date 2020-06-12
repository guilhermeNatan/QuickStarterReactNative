/**
 * @copyright (C) Copyright 2020 Hotcode
 * @author guilherme.natan
 */


const registerScreen = (id, name) => ({
  [id]: {
    id,
    name,
  },
});

export default {
  ...registerScreen('HOME', 'Home'),
  ...registerScreen('DETAIL', 'Updates'),
  ...registerScreen('SETTINGS', 'Settings'),
};
