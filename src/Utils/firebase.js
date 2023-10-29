
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD4WZ1s9zxnzSElAz8dVwe8qPyT-xwQ2TI",
  authDomain: "netflixindiagpt.firebaseapp.com",
  projectId: "netflixindiagpt",
  storageBucket: "netflixindiagpt.appspot.com",
  messagingSenderId: "726378164914",
  appId: "1:726378164914:web:c03788cb9b2ff54d03cfab",
  measurementId: "G-6318GCP12E"
};
// Initialize Firebase
export const movieOptionsApi = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_MOVIE_API
  }
};
