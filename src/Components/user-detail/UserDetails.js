import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserDetail from "./UserDetail";
import {useParams} from "react-router-dom";
import {addDetailData, startDetailLoading, stopDetailLoading} from "../../Actions";

export default function UserDetails() {
    let details = useSelector((state) => state.details.records);
    const dispatcher = useDispatch();

    function loadData() {
        dispatcher(startDetailLoading);
        fetch('http://localhost:4730/detail')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatcher(addDetailData(json));
            })
            .then(function () {
                dispatcher(stopDetailLoading);
            })
    }

    useEffect(() => {
        loadData();
    },[]);

    const {id} = useParams();
    if (id) {
        details = details.filter(r => r.id === id);
    }
    return (
        <div>
            {details.map((detail) =>
                <UserDetail key={detail.id} detail={detail}/>
            )}
        </div>
    );
}