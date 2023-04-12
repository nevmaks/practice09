import React from "react";
import {useSelector} from "react-redux";
import UserDetail from "./UserDetail";

export default function UserDetails() {
    const details = useSelector((state) => state.details);

    return (
        <div>
            {details.map((user, index) =>
                <UserDetail key={index} user={user}/>
            )}
        </div>
    );
}