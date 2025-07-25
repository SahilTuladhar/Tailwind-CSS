

const asyncHandler = (requestHandler) => {

    return(
        // returining a middleware function

        (req,res,next) => {
            Promise.resolve(requestHandler(req,res,next))
            .catch((err) => next(err)
        )
        }
    )

}

export default asyncHandler