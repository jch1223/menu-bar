import { ROUTES } from "./data/menu";
import { createNavigation } from "./navigation";
import "./style.css";

const initializeApp = () => {
  const navigation = createNavigation(ROUTES);
  document.body.appendChild(navigation);
};

initializeApp();
