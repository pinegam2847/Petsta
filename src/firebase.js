import { initializeApp } from "firebase/app";
import { 
getAuth,// authentication 설정
signInWithPopup, //google 로그인을 팝업창에 띄우기 위해
GoogleAuthProvider, //google login 기능
signInWithEmailAndPassword,// email 로그인
createUserWithEmailAndPassword, //email 회원가입
setPersistence // 계정 지속성
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
export const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
