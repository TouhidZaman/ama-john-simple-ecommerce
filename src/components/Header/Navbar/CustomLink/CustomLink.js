import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, children, activeStyle, ...props }) => {
   console.log(activeStyle);
   const resolved = useResolvedPath(to);
   const match = useMatch({ path: resolved.pathname, end: true });
   return (
      <Link className={match && activeStyle} to={to} {...props}>
         {children}
      </Link>
   );
};

export default CustomLink;
