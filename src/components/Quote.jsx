export const Quote = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10 md:p-20 my-8 md:my-10">
            <h2 className="text-2xl sm:text-4xl text-[#374EA2] w-3/4 text-center">Children need champions. Get involved, speak up, and volunteer with us to make an impact.</h2>
            <div className="flex flex-col sm:flex-row gap-4 p-10 text-lg text-[#374EA2] text-center items-center justify-center">
                <a className="border-2 border-[#374EA2] border-solid rounded-md p-4 text-md sm:text-lg" href="/events">Upcoming Events</a>
                <a className="border-2 border-[#374EA2] border-solid rounded-md p-4 text-md sm:text-lg" href="/contact">Contact</a>
            </div>
        </div>
    )
}