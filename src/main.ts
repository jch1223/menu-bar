import { ROUTES } from "./data/menu";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div>
    <header id="header">
      <nav>
        <div>
          <a href="/" class="nav-item">${ROUTES.home.name}</a>
          
          <div>
            <div>${ROUTES.products.name}</div>

            <div>
              <div>
                ${ROUTES.products.children[0].name}
              </div>

              <div>
                <div>
                  <a href="${ROUTES.products.children[0].children[0].path}">ec2</a>
                </div>

                <div>
                  <a href="${ROUTES.products.children[0].children[1].path}">s3</a>
                </div>
              </div>
            </div>

            <div>
              <a href="${ROUTES.products.children[1].path}">
                ${ROUTES.products.children[1].name}
              </a>
            </div>
          </div>
          
          <a href="${ROUTES.about.path}" class="nav-item">${ROUTES.about.name}</a>
        </div>
      </nav>
    </header>
  </div>
`;
