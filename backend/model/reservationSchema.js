import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[2, "First Name must contain atleast 2 characters!"],
        maxLength:[20, "Last Name should not contain more than 20 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[2, "Last Name must contain atleast 2 characters!"],
        maxLength:[20, "Last Name should not contain more than 20 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"]
    },
    phone: {
        type: String,
        required: true,
        minLength:[10, "Phone number must contain 10 digits"],
        maxLength:[10, "Phone number must contain 10 digits"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }

});

export const Reservation = mongoose.model("Reservation",reservationSchema );