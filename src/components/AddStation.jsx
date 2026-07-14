
import axios from "axios";
import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const AddStation = () => {

    const [input, changeInput] = useState({
        bookingId: "",
        ownerName: "",
        email: "",
        phone: "",
        vehicleRegistrationNumber: "",
        vehicleBrand: "",
        vehicleModel: "",
        batteryCapacity: "",
        connectorType: "",
        chargingDate: "",
        timeSlot: "",
        estimatedUnits: "",
        chargingBayNumber: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const submitData = () => {

        axios.post(
            "http://localhost:3000/add-booking",
            input
        )
            .then((response) => {

                setError(false)
                setMessage("Booking Added Successfully")

                changeInput({
                    bookingId: "",
                    ownerName: "",
                    email: "",
                    phone: "",
                    vehicleRegistrationNumber: "",
                    vehicleBrand: "",
                    vehicleModel: "",
                    batteryCapacity: "",
                    connectorType: "",
                    chargingDate: "",
                    timeSlot: "",
                    estimatedUnits: "",
                    chargingBayNumber: ""
                })

            })
            .catch((error) => {

                setError(true)
                setMessage("Something went wrong")

            })

    }

    return (
        <div>

        <NavigationBar/>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success text-white text-center">
                        <h3>Add EV Charging Booking</h3>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input type="text" className="form-control"
                                    name="bookingId"
                                    value={input.bookingId}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input type="text" className="form-control"
                                    name="ownerName"
                                    value={input.ownerName}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Email</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Phone</label>
                                <input type="text" className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Registration No</label>
                                <input type="text" className="form-control"
                                    name="vehicleRegistrationNumber"
                                    value={input.vehicleRegistrationNumber}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Brand</label>
                                <input type="text" className="form-control"
                                    name="vehicleBrand"
                                    value={input.vehicleBrand}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Vehicle Model</label>
                                <input type="text" className="form-control"
                                    name="vehicleModel"
                                    value={input.vehicleModel}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Battery Capacity (kWh)</label>
                                <input type="text" className="form-control"
                                    name="batteryCapacity"
                                    value={input.batteryCapacity}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Connector Type</label>
                                <input type="text" className="form-control"
                                    name="connectorType"
                                    value={input.connectorType}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Charging Date</label>
                                <input type="date" className="form-control"
                                    name="chargingDate"
                                    value={input.chargingDate}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Time Slot</label>
                                <input type="text" className="form-control"
                                    name="timeSlot"
                                    value={input.timeSlot}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Estimated Units (kWh)</label>
                                <input type="text" className="form-control"
                                    name="estimatedUnits"
                                    value={input.estimatedUnits}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Charging Bay Number</label>
                                <input type="text" className="form-control"
                                    name="chargingBayNumber"
                                    value={input.chargingBayNumber}
                                    onChange={inputHandler} />
                            </div>

                            <div className="col-12 text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={submitData}>
                                    Add Booking
                                </button>
                            </div>

                            <div className="col-12 text-center">
                                <h5 className={error ? "text-danger" : "text-success"}>
                                    {message}
                                </h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddStation