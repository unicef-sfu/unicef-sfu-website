import sponsors from "../data/sponsors.json"

export const Sponsors = () => {
    
    return (
        <div className="w-full flex flex-col items-center py-16 bg-white">

            <h2 className="text-2xl sm:text-4xl text-[#585962] mb-10 text-center">
                Our Sponsors
            </h2>

            {/* sponsor logos grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl px-5 md:px-10">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img
                            src={sponsor.image}
                            alt={sponsor.alt}
                            className="max-h-20 object-contain"
                            loading="eager"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}