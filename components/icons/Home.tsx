import React, { FunctionComponent } from "react";

interface HomeIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

const HomeIcon: FunctionComponent<HomeIconProps> = ({
  width = "36",
  height = "36",
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7148 31.1685V22.3895C13.7148 21.6134 14.0232 20.869 14.5719 20.3202C15.1207 19.7714 15.8651 19.4631 16.6412 19.4631H19.5675C20.3436 19.4631 21.088 19.7714 21.6367 20.3202C22.1855 20.869 22.4939 21.6134 22.4939 22.3895"
        stroke="#65B94A"
        stroke-width="2.92634"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
      <path
        d="M28.3472 20.1773V18.0001H31.2736L18.105 4.83154L4.93652 18.0001H7.86286V28.2422C7.86286 29.0183 8.17117 29.7627 8.71996 30.3115C9.26876 30.8603 10.0131 31.1686 10.7892 31.1686H17.41M22.4945 28.2422L25.4209 31.1686L31.2736 25.3159"
        stroke="#65B94A"
        stroke-width="2.92634"
        stroke-linecap="square"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default HomeIcon;
