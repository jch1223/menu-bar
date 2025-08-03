import type { MenuItem, Route } from "./data/menu";

const createNavLink = (
  menuItem: MenuItem,
  { className }: { className?: string } = {}
) => {
  const link = document.createElement("a");
  link.href = menuItem.path ?? "";
  link.textContent = menuItem.name;

  if (className) {
    link.classList.add(className);
  }

  return link;
};

const createNavDropdownMenu = (menuItem: MenuItem) => {
  const dropdownMenu = document.createElement("div");

  dropdownMenu.classList.add("nav-item");
  dropdownMenu.classList.add("dropdown-menu");

  const title = document.createElement("div");
  title.classList.add("dropdown-menu-title");
  title.textContent = menuItem.name;
  dropdownMenu.appendChild(title);

  const container = document.createElement("div");
  container.classList.add("dropdown-menu-container");
  dropdownMenu.appendChild(container);

  menuItem.children?.forEach((item) => {
    let menuItem: HTMLElement | null = null;

    if (item.children) {
      menuItem = createSubMenu(item, { className: "dropdown-menu-item" });
    } else {
      menuItem = document.createElement("div");
      menuItem.classList.add("dropdown-menu-item");
      const link = createNavLink(item);

      menuItem.appendChild(link);
    }

    container.appendChild(menuItem);
  });

  return dropdownMenu;
};

const createSubMenu = (
  menuItem: MenuItem,
  { className }: { className?: string } = {}
) => {
  const subMenu = document.createElement("div");
  subMenu.classList.add("sub-menu");
  if (className) {
    subMenu.classList.add(className);
  }

  const title = document.createElement("div");
  title.textContent = menuItem.name;
  subMenu.appendChild(title);

  const container = document.createElement("div");
  container.classList.add("sub-menu-container");
  subMenu.appendChild(container);

  menuItem.children?.forEach((child) => {
    const link = createNavLink(child, { className: "dropdown-menu-item" });
    container.appendChild(link);
  });

  return subMenu;
};

export const createNavigation = (routes: Route) => {
  const header = document.createElement("header");
  header.classList.add("header");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  Object.values(routes).forEach((route) => {
    if (route.children) {
      const dropdownMenu = createNavDropdownMenu(route);
      nav.appendChild(dropdownMenu);
    } else {
      const link = createNavLink(route, { className: "nav-item" });
      nav.appendChild(link);
    }
  });

  header.appendChild(nav);

  return header;
};
