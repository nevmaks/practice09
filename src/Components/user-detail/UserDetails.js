import React from "react";
import {useSelector} from "react-redux";
import UserDetail from "./UserDetail";

export default function UserDetails(props) {
    let details = useSelector((state) => state.details);
    // const id = props.match.params.id;
    // if (id) {
    //     details = details.filter(r => r.id === id);
    // }
    return (
        <div>
            {details.map((detail, index) =>
                <UserDetail key={index} detail={detail}/>
            )}
        </div>
    );
}