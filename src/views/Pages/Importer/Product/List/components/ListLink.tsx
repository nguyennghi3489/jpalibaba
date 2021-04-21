import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  url: string;
  count: number;
}
export const ListLink = ({ title, url, count }: Props) => (
  <>
    {count > 0 ? (
      <NavLink to={url}>
        {title} ({count})
      </NavLink>
    ) : (
      count
    )}
  </>
);
