import ErrorHandler from "../error/error.js";
import{Reservation} from'../model/reservationSchema.js';

export const sendReservation= async(req,res,next) =>{
    const{firstName,lastName,email,phone,time,date} = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please fill the complete form!" , 400));
    }
    try {
        await Reservation.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            time: time,
            date: date,
        });
        res.status(200).json({
            sucess: true,
            message: "Reservation completed successfully!"
        });
        
    } catch (error) {
        if(error.name=="ValidationError"){
        const validationErrors=Object.values(error.errors).map(
            (err)=>err.message
        );
        return next(new ErrorHandler(validationErrors.join(' , '),400));
        }
        return next(error);
    }

};
