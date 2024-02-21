import React from "react";
import Sidelink from "./Sidelink";

const Sidebar = ({ handler, selected }) => {
    return (
        <div className=" p-2 glassmorphism rounded-3xl w-2/12 h-96">
            <Sidelink
                name="users"
                icon="mdi:users"
                handler={handler}
                selected={selected}
            />
            <Sidelink
                name="statistics"
                icon="tabler:chart-pie-filled"
                handler={handler}
                selected={selected}
            />
        </div>
    );
};

export default Sidebar;
