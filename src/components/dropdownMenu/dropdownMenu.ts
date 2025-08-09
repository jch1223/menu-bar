import "./dropdownMenu.css";

export const DropdownMenu = ({
  className,
  trigger,
  contents,
}: {
  className?: string;
  trigger: string;
  contents: string;
}) => {
  return `
    <div class="dropdown-menu ${className}">
      <div>${trigger}</div>
      <div class="dropdown-menu-container">${contents}</div>
    </div>
  `;
};

document.querySelector("#app")?.addEventListener("mouseover", (e) => {
  const target = e.target as HTMLElement;

  const dropdownElement = target.closest(".dropdown-menu");

  if (dropdownElement) {
    dropdownElement.classList.add("active");
  }
});

document.querySelector("#app")?.addEventListener("mouseout", (e) => {
  const target = e.target as HTMLElement;

  const dropdownElement = target.closest(".dropdown-menu");

  if (dropdownElement) {
    dropdownElement.classList.remove("active");
  }
});
