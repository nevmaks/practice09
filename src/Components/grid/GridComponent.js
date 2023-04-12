import React, {cloneElement, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import GridRecord from "./GridRecord";
import {filterGrid, toggleActive as toggleActiveAction} from "../../Actions";

export default function GridComponent({children}) {
    const records = useSelector((state) => state.grid.records);
    const filter = useSelector((state) => state.grid.filter)
    const dispatcher = useDispatch();
    const filterInput = useRef(null);

    useEffect(() => {
        filterInput.current.focus();
    }, []);

    let toggleActive = (index) => {
        dispatcher(toggleActiveAction(index));
    }

    let handleFilterChange = (e) => {
        dispatcher(filterGrid(e.target.value));
    }

    let gridRecords = records
        .filter((record) => record.firstName.toUpperCase().includes(filter.toUpperCase()))
        .map((record, index) => {
            return <GridRecord record={record} key={index} index={index} toggleActive={ toggleActive.bind(null, index) } />
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