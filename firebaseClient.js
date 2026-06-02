import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnRIhSE6f6Z0Ccs4CGbjP49BkfJSCrzw8",
  authDomain: "lovebank-67a55.firebaseapp.com",
  projectId: "lovebank-67a55",
  storageBucket: "lovebank-67a55.firebasestorage.app",
  messagingSenderId: "218336388779",
  appId: "1:218336388779:web:3b19de4f95779f615d39ee",
  measurementId: "G-4E5ZP77P0W"
};

// 這是關鍵：先檢查是否已經初始化，避免重複出錯
const apps = getApps();
const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

export const auth = getAuth(app);
