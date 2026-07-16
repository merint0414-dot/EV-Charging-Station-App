import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";

const ViewStation = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-booking")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <NavigationBar/>
            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success text-white text-center">
                        <h3>View All EV Bookings</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Owner</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Vehicle No</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Battery</th>
                                        <th>Connector</th>
                                        <th>Date</th>
                                        <th>Time Slot</th>
                                        <th>Units</th>
                                        <th>Charging Bay</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.bookingId}</td>
                                                <td>{value.ownerName}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.vehicleRegistrationNumber}</td>
                                                <td>{value.vehicleBrand}</td>
                                                <td>{value.vehicleModel}</td>
                                                <td>{value.batteryCapacity}</td>
                                                <td>{value.connectorType}</td>
                                                <td>{value.chargingDate}</td>
                                                <td>{value.timeSlot}</td>
                                                <td>{value.estimatedUnits}</td>
                                                <td>{value.chargingBayNumber}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewStation