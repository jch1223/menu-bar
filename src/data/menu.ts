export const ROUTES = {
  home: {
    name: "홈",
    path: "/",
  },
  products: {
    name: "제품",
    children: [
      {
        name: "주요서비스",
        children: [
          {
            name: "ec2",
            path: "/products/ec2",
          },
          {
            name: "s3",
            path: "/products/s3",
          },
        ],
      },
      {
        name: "분석",
        path: "/products/analysis",
      },
    ],
  },
  about: {
    name: "회사소개",
    path: "/about",
  },
} as const;
