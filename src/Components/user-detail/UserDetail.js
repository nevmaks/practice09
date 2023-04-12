import React from "react";

export default function UserDetail({user}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                    <div className="well profile">
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h2>{user.name}</h2>
                                <p><strong>About: </strong>{user.about}</p>
                                <p><strong>Hobbies: </strong>{user.hobby}</p>
                                <p><strong>Skills: </strong>
                                    {user.skills.map((s, i) => (
                                        <span className="tags" key={i}>{s}&nbsp;</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}