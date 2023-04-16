import React, {cloneElement, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import GridRecord from "./GridRecord";
import {addGridData, filterGrid, startGridLoading, stopGridLoading, toggleGridChange} from "../../Actions";

export default function GridComponent({children}) {
    const records = useSelector((state) => state.grid.records);
    const filter = useSelector((state) => state.grid.filter)
    const dispatcher = useDispatch();
    const filterInput = useRef(null);

    let loadData = () => {
        dispatcher(startGridLoading());
        fetch('http://localhost:4730/grid')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                dispatcher(addGridData(json));
            })
            .then(function () {
                dispatcher(stopGridLoading);
            })
    }

    useEffect(() => {
        filterInput.current.focus();
        loadData();
    },[]);

    let toggleActive = (id) => {
        dispatcher(toggleGridChange(id));
    }

    let handleFilterChange = (e) => {
        dispatcher(filterGrid(e.target.value));
    }

    let gridRecords = records
        .filter((record) => record.firstName.toUpperCase().includes(filter.toUpperCase()))
        .map((record) => {
            return <GridRecord record={record} key={record.id} toggleActive={ toggleActive.bind(null, record.id) } />
    });

    return (
        <div style={{width: 300, height: 300, padding:20}}>
            <p>
                <input type="text" ref={filterInput} placeholder="Filter by..." onChange={handleFilterChange}/>
            </p>
            <table className="table table-condensed">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tbody>
                {gridRecords}
                </tbody>
            </table>
            <div>
                {React.Children.map(children, (child) => cloneElement(child, { records: records }))}
            </div>
        </div>
    );
}