import React from "react";

export default function UserDetail(props) {
    let {detail} = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                    <div className="well profile">
                        <div className="col-sm-12">
                            <div className="col-xs-12 col-sm-8">
                                <h2>{detail.name}</h2>
                                <p><strong>About: </strong>{detail.about}</p>
                                <p><strong>Hobbies: </strong>{detail.hobby}</p>
                                <p><strong>Skills: </strong>
                                    {detail.skills.map((skill, i) => (
                                        <span className="tags" key={i}>{skill}&nbsp;</span>
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