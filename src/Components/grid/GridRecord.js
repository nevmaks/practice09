import React from "react";
import PropTypes from "prop-types";

GridRecord.propTypes = {
    record: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired
    })
}

GridRecord.defaultProps = {
    record: {firstName: "N/A", lastName: "N/A", active: false}
}

export default function GridRecord ({record, toggleActive, index}) {
    return (
        <tr>
            <td>{record.firstName}</td>
            <td>{record.lastName}</td>
            <td><input type="checkbox" checked={record.active} onChange={() => toggleActive(index)}/></td>
        </tr>
    )
}