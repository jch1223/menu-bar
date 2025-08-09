import type { Route } from "../../data/menu";
import { DropdownMenu } from "../dropdownMenu/dropdownMenu";
import { DropdownSubMenu } from "../dropdownMenu/dropdownSubMenu";
import { Link } from "../link";
import "./navigation.css";

export const Navigation = ({ routes }: { routes: Route }) => {
  return `
    <header class="header">
      <nav class="nav">
        ${Object.values(routes)
          .map((route) => {
            if (route.children) {
              return DropdownMenu({
                className: "nav-item",
                trigger: route.name,
                contents: route.children
                  .map((child) => {
                    if (child.children) {
                      return DropdownSubMenu({
                        className: "nav-item",
                        trigger: child.name,
                        contents: child.children
                          .map((grandChild) => {
                            return Link({
                              className: "nav-item",
                              href: grandChild.path,
                              children: grandChild.name,
                            });
                          })
                          .join(""),
                      });
                    }

                    return Link({
                      className: "nav-item",
                      href: child.path,
                      children: child.name,
                    });
                  })
                  .join(""),
              });
            } else {
              return Link({
                className: "nav-item",
                href: route.path,
                children: route.name,
              });
            }
          })
          .join("")}
      </nav>
    </header>
  `;
};
