import { useEvents } from "../hooks/useEvents"

export const Events = () => {
    const events = useEvents()

    const getMonthAbbreviation = (month) => month.slice(0, 3).toUpperCase()

    return (
        <div className="flex flex-col items-center justify-center p-10 sm:p-20 w-full">
            {/* header */}
            <div className="flex flex-col items-center justify-center p-2 mb-12">
                <h2 className="text-2xl sm:text-4xl  w-full sm:w-3/4 text-center p-5 sm:p-10 text-[#009EDB] font-semibold">Upcoming Events</h2>
                <p className="text-xl text-center  w-full sm:w-1/2 text-[#585962]">UNICEF SFU holds a wide variety of events every month, from General Meetings to donation drives. Make a difference by contributing to our fundraisers and advocacy events.</p>
            </div>
            
            {/* events section */}
            <div className="w-full sm:w-9/10 max-w-5xl p-4">
                {events.map((monthData, monthIndex) => (
                    <div key={monthIndex}>
                        <h3 className="text-2xl sm:text-4xl  md:p-8 text-[#009EDB] font-semibold">{monthData.month} Events</h3>

                        {/* all upcoming events for the month */}
                        {monthData.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="w-full max-w-3xl mx-auto flex flex-col md:flex-row bg-[#e5f7fd] rounded-2xl m-4 overflow-hidden">
                                
                                {/* left column info */}
                                <div className="flex flex-col md:flex-row gap-6 px-6 md:pl-8 md:pr-2 py-8 md:max-w-[60%]">

                                    {/* date box */}
                                    <div className="flex flex-col items-center justify-center bg-white/60 rounded-xl px-4 py-3 h-fit self-center">
                                        <span className="text-sm font-semibold text-[#009EDB] tracking-[0.3em]">
                                            {getMonthAbbreviation(monthData.month)}
                                        </span>
                                        {event.dates.map((date, idx) => (
                                            <span key={`${event.title}-${date}-${idx}`} className="text-lg font-semibold text-[#1F145D]">
                                                {date}
                                            </span>
                                        ))}
                                    </div>

                                    {/* text info */}
                                    <div className="flex flex-col justify-center flex-1 items-center md:items-start text-center md:text-left">
                                        <h4 className="text-l sm:text-xl w-full text-[#1F145D] font-semibold mb-4">{event.title}</h4>

                                        {/* event location */}
                                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                            <img src="/icons/location-icon.png" alt="location-icon" className="hidden sm:block w-8 h-8"/>
                                            <div>
                                                <p className="text-md text-[#5D5D5D]">{event.building}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.room}</p>
                                                <p className="text-md text-[#5D5D5D]">{event.campus}</p>
                                            </div>
                                        </div>
                                        
                                        {/* time info */}
                                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                            <img src="/icons/clock-icon.png" alt="time" className="hidden sm:block w-8 h-8"/>

                                            <p className="text-md text-[#5D5D5D]">{event.time}</p>
                                        </div>

                                        {/* instagram link post / more info  */}
                                        {event.postLink && (
                                            <a href={event.postLink} target="_blank" rel="noopener noreferrer" className="mt-4 w-fit self-center md:self-start">
                                                <button className="px-4 py-1 md:px-6 md:py-2 bg-[#009EDB] text-white rounded-lg font-semibold hover:bg-[#007fb0] transition">
                                                    Learn More
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* image */}
                                <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center md:justify-end p-3 sm:p-4">
                                    <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden bg-white shadow-sm">
                                        <a href={event.postLink} target="_blank" rel="noopener noreferrer">
                                            <img 
                                                src={event.imgLink} alt={event.title} className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    console.error("Image failed to load:", event.imgLink)
                                                    e.target.src = "posts/unicef-logo.png"
                                                }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
