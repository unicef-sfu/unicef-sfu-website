import pastEvents from "../data/pastEvents.json"
import { PastEventsCard } from "./PastEventsCard"

export const PastEvents = () => {
    {/* past events section */}
    return (
        <div className="w-full bg-[#FFFFFF] py-16 flex flex-col items-center mt-20">
            <h2 className="text-4xl font-bold text-center text-[#009EDB] mb-12">Our Work</h2>
            
            {/* mobile screen: cards only */}
            <div className="sm:hidden flex flex-col items-center gap-12 w-full px-6">
                {pastEvents.map((pastEvent, id) => { 
                    return (
                        <PastEventsCard key={id} pastEvent={pastEvent} />
                    )
                })}
            </div>
            
            {/* timeline */}
            <div className="hidden sm:block relative w-full max-w-6xl px-6">
                {/* line down the middle  */}
                <div className="absolute left-1/2 inset-y-0 w-1 bg-[#009EDB] -translate-x-1/2 z-[1]"></div>
                
                {pastEvents.map((pastEvent, id) => {
                    const isEven = id % 2 === 1;
                    return (
                        <div
                            key={id}
                            className={`
                                relative z-[2] mb-10 flex w-full items-center
                                ${isEven ? 'justify-start pl-[calc(50%+30px)]' : 'justify-end pr-[calc(50%+30px)]'}
                            `}
                            style={{
                                marginTop: isEven ? '-12rem' : '0'
                            }}
                        >   
                            {/* timeline node */}
                            <div className="absolute left-1/2 w-5 h-5 bg-[#009EDB] border-4 border-[#F9FAFB] rounded-full -translate-x-1/2 z-[3] shadow-[0_0_0_4px_#009EDB]"></div>
                            <PastEventsCard pastEvent={pastEvent}></PastEventsCard>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}