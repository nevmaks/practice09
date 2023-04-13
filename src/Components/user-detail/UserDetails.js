import React from "react";
import {useSelector} from "react-redux";
import UserDetail from "./UserDetail";
import {useParams} from "react-router-dom";

export default function UserDetails() {
    let details = useSelector((state) => state.details);
    const {id} = useParams();
    if (id) {
        details = details.filter(r => r.id === id);
    }
    return (
        <div>
            {details.map((detail, index) =>
                <UserDetail key={index} detail={detail}/>
            )}
        </div>
    );
}