import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useStateContext } from "../context/ContextProvider";

const Sidelink = ({ name, icon, handler, selected }) => {
    const { isActive } = useStateContext();
    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md transition duration-300 transition duration-300 text-red-500 bg-cream m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 bg-red-500 pt-3 pb-2.5 rounded-lg text-md text-cream transition duration-300 transition duration-300 hover:text-red-500 hover:bg-cream m-2";
    return (
        <NavLink
            onClick={() => handler(name)}
            className={selected == name ? activeLink : normalLink}
        >
            <Icon
                icon={icon}
                className={isActive ? "text-white" : ""}
                width="22"
            />
            <span className="capitalize">{name}</span>
        </NavLink>
    );
};

export default Sidelink;
