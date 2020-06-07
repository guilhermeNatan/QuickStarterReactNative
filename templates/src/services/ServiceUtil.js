import firebase from '../Firebase';

export default class ServiceUtil {
  static getRef = (path) => {
    return firebase.database().ref(path);
  };

  static getOnce = (path) => {
    return firebase.database().ref(path).once('value');
  };

  static handleResponse = (response) => {
    return response && response.val && response.val();
  };

  static logout = () => firebase.auth().signOut();

  static getCurrentUser = () => firebase.auth().currentUser;

  static getOn = (path, callback) =>
    firebase.database().ref(path).on('value', callback);

  static convertSnapshotInArrayObjects = (snapshot) => {
    const values = snapshot.val();
    if (values) {
      const keys = Object.keys(values);
      return keys.map((id) => ({...values[id], id}));
    }
    return [];
  };
}
