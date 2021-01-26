import axios from "axios";

const instanece = axios.create({
    baseURL: "https://burgerproject-reactive-default-rtdb.firebaseio.com"
})

export default instanece;