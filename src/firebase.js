import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7pejBr_X3baGoYpkP87QqP0JJ8gZLH1Q',
  authDomain: 'bazaar-e476f.firebaseapp.com',
  projectId: 'bazaar-e476f',
  storageBucket: 'bazaar-e476f.appspot.com',
  messagingSenderId: '462423609801',
  appId: '1:462423609801:web:179b99cce4b91ca9ca1818',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export const handleAuth = async (user = null) => {
  if (!user) {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result?.user.email;
      const userInfo = await getDoc(doc(db, 'users', email));
      if (!userInfo._document) {
        await setDoc(doc(db, 'users', email), {
          buy: [],
          sell: [],
        });
      }
      return result?.user;
    } catch (error) {}
  } else if (username) {
    try {
      await signOut(auth);
      return null;
    } catch (error) {}
  }
};

export const makeBid = async (itemId, bid, user) => {
  try {
    const itemRef = db(db, 'items', itemId);
    const itemSnap = await getDoc(itemRef);
    await setDoc(docRef, {
      lastBid: lastBid + bid,
      lastBidMadeBy: user,
      ...itemSnap.data()
    })
    return true;
  } catch (error) {
    return false;    
  }
}
