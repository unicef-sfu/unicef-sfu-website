export const PastEventsCard = ({ pastEvent : {eventName, date, image, alt, descriptions} }) => {
    return (
        <div className="flex flex-col gap-6 items-center bg-[#F9FAFB] p-6 rounded-xl w-3/4">
            <img src={image} alt={alt}
                className="w-full rounded-lg shadow-md object-cover"
            />

            <div className="w-full text-left">
                <h3 className="text-l md:text-xl font-semibold text-[#1CABE2] mb-3">{eventName}</h3>
                <p className="text-[#585962]">
                    {descriptions[0]}
                    
                    {descriptions.length > 1 && 
                        <>
                            <br/>
                            <br/>
                            {descriptions[1]}
                        </>
                    }
                </p>


            </div>

        </div>
    )
}