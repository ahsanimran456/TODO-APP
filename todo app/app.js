import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
import { getFirestore,collection, addDoc,getDocs

} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBo3MnItMa83CwQhTUDoT4nZ9MQX8fr1zA",
    authDomain: "todo-app-9e284.firebaseapp.com",
    projectId: "todo-app-9e284",
    storageBucket: "todo-app-9e284.appspot.com",
    messagingSenderId: "469721867185",
    appId: "1:469721867185:web:26624f9eed38fd649dd390",
    measurementId: "G-GN5KHBL19S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);


let add_btn = document.getElementById("add-btn")
let list_value = document.getElementById("list-value")
let docreference = (db,"todo-list")
let ul_list = document.getElementById("ul-list")

add_btn.addEventListener("click",async()=>{
    console.log(list_value.value)
    const docRef = await addDoc(collection(db, docreference), {
        list: list_value.value,
        timestamp: new Date()
      });
})
async function getTodo(){
    const querySnapshot = await getDocs(collection(db, docreference));
    querySnapshot.forEach((doc) => {
        ul_list.innerHTML += `<li>${doc.data().list}</li>`
      console.log(doc.id, " => ", doc.data());
    });
} 
getTodo()
