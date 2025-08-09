export const Link = ({
  className,
  href = "",
  children,
}: {
  className?: string;
  href?: string;
  children: string;
}) => {
  return `<a href="${href}" class="${className}">${children}</a>`;
};
