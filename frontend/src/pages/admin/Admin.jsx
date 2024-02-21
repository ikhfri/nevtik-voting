import React, { useState } from "react";
import { Sidebar } from "../../components";
import Users from "./Users";
import Statistics from "./Statistics";

const Admin = () => {
    const [selectedLink, setSelectedLink] = useState("users");

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <div className="flex justify-end m-2 md:m-10 gap-3">
            <Sidebar handler={handleLinkClick} selected={selectedLink} />
            {selectedLink === "users" && <Users />}
            {selectedLink === "statistics" && <Statistics />}
        </div>
    );
};

export default Admin;
