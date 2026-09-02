import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, get, remove, onValue } from 'firebase/database'

/*
 * =============================================
 * FIREBASE SETUP INSTRUCTIONS
 * =============================================
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (e.g. "mscs-hackathon-2026")
 * 3. Click "Realtime Database" > "Create Database"
 * 4. Choose "Start in test mode" > select a region > Enable
 * 5. Go to Project Settings (gear icon) > General
 * 6. Under "Your apps", click the web icon (</>) to add a web app
 * 7. Register the app, copy the firebaseConfig object
 * 8. Paste your config values below
 * =============================================
 */

const firebaseConfig = {
  apiKey: "AIzaSyCkEww7cy1evwn-tWp8n3km3siwWsTn4OY",
  authDomain: "hackthon-a4281.firebaseapp.com",
  databaseURL: "https://hackthon-a4281-default-rtdb.firebaseio.com",
  projectId: "hackthon-a4281",
  storageBucket: "hackthon-a4281.firebasestorage.app",
  messagingSenderId: "636871188883",
  appId: "1:636871188883:web:d7d859ddc052bd3f5ac866"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export const registrationsRef = ref(db, 'registrations')

export function saveRegistration(data) {
  return push(registrationsRef, data)
}

export function getRegistrations() {
  return get(registrationsRef)
}

export function deleteRegistration(key) {
  return remove(ref(db, `registrations/${key}`))
}

export function onRegistrationsChange(callback) {
  return onValue(registrationsRef, (snapshot) => {
    const data = snapshot.val()
    if (data) {
      const list = Object.entries(data).map(([key, val]) => ({ ...val, firebaseKey: key }))
      callback(list)
    } else {
      callback([])
    }
  })
}
