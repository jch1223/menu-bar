export interface MenuItem {
  name: string;
  path?: string;
  children?: MenuItem[];
}

export interface Route {
  [key: string]: MenuItem;
}

export const ROUTES: Route = {
  home: {
    name: "홈",
    children: [
      {
        name: "분석",
        path: "/products/analysis",
      },
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
            children: [
              {
                name: "분석",
                path: "/products/analysis",
              },
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
            ],
          },
        ],
      },
    ],
  },
  products: {
    name: "제품",
    children: [
      {
        name: "분석",
        path: "/products/analysis",
      },
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
    ],
  },
  about: {
    name: "회사소개",
    path: "/about",
  },
};
