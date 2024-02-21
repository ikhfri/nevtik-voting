import { Icon } from "@iconify/react";
import React from "react";

const Dropdown = ({ name, contents, select }) => {
    return (
        <div className="dropdown">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-outline bg-light-blue btn-sm font-bold text-base text-dark-blue hover:bg-dark-blue hover:text-light-blue"
            >
                {name}
                <Icon icon="tabler:chevron-down" width="22" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 rounded-box flex-nowrap overflow-y-auto w-52 max-h-52"
            >
                <li onClick={() => select(null)}>
                    <a>All</a>
                </li>
                {contents?.map((content) => (
                    <li key={content} onClick={() => select(content)}>
                        <a>{content}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
