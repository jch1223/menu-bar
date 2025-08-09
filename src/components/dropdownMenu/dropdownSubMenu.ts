import "./dropdownSubMenu.css";

export const DropdownSubMenu = ({
  className,
  trigger,
  contents,
}: {
  className?: string;
  trigger: string;
  contents: string;
}) => {
  return `
    <div class="dropdown-sub-menu ${className}">
      <div>${trigger}</div>
      <div class="dropdown-sub-menu-container">${contents}</div>
    </div>
  `;
};

document.querySelector("#app")?.addEventListener("mouseover", (e) => {
  const target = e.target as HTMLElement;

  const dropdownElement = target.closest(".dropdown-sub-menu");

  if (dropdownElement) {
    dropdownElement.classList.add("active");
  }
});

document.querySelector("#app")?.addEventListener("mouseout", (e) => {
  const target = e.target as HTMLElement;

  const dropdownElement = target.closest(".dropdown-sub-menu");

  if (dropdownElement) {
    dropdownElement.classList.remove("active");
  }
});
