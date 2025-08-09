import { Navigation } from "./components/navigation/navigation";
import { ROUTES } from "./data/menu";
import "./style.css";

const initializeApp = () => {
  const navigation = Navigation({ routes: ROUTES });
  document.querySelector("#app")!.innerHTML = navigation;
};

initializeApp();
