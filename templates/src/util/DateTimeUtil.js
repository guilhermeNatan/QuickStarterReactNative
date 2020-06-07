import moment from 'moment';

export class DateTimeUtil {
  static DAYS = {
    DOMINGO: 0,
    SEGUNDA: 1,
    TERCA: 2,
    QUARTA: 3,
    QUINTA: 4,
    SEXTA: 5,
    SABADO: 6,
  };

  static getDateTimeFromTimeInMiliSeconds = (timeInMiliSeconds) => {
    const time = moment(timeInMiliSeconds);
    return time.format('DD-MM-YYYY HH:mm:ss');
  };
}
