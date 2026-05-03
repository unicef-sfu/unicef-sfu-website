export const Gala = () => {
    
    const GOLD_TIER_PRIZES = [
        { title: "Escape Room Challenge", prize: "$120 - 4 passes to EXIT Burnaby" },
        { title: "Sports Night", prize: "$140 - 4 tickets to a Vancouver Bandits Game", prize2: "$120 - 4 Tickets to a Vancouver Canadians Baseball Game" },
        { title: "Laser Tag Party", prize: "$235 - 4 games for 8 players at Laserdome+" },
        { title: "Road to Recovery", prize: "5 draws of $200 - Free Massage/Physio Sessions at Launch Rehab" }
    ];

    const SILVER_TIER_PRIZES = [
        { title: "Classic Date Night", prize: "$25 - Old Spaghetti Factory", prize2: "$50 - Landmark Cinema (2 Movie Tickets & 2 Medium Popcorns" },
        { title: "Garden Getaway", total_price: "$66 Total", prize: "4 passes to UBC Botanical Garden", prize2: "4 passes to Nitobe Memorial Garden" }, 
        { title: "Sweet Tooth", prize: "$70 - Rain or Shine Ice Cream and Bon Macaron Patisserie"},
        { title: "Space Discovery", prize: "$84 - Family Pass to the H.R. MacMillan Space Centre" }, 
        { title: "Rainy Day in Downtown", prize: "$36 - 2 Cineplex Movie Tickets", prize2: "$58 - 2 passes to the Vancouver Art Gallery" },
        { title: "Campus Essentials", prize: "$130 - SFU Bookstore, Travis and Wells tech backpack, and Champion unisex sweatshirt (size small)"},
        { title: "Museum Lovers", prize: "$150 - Beaty Biodiversity Museum (1-year family membership) and Museum of Anthropology (1-year individual membership)"}
    ]

    return (
        <div>
            {/* header */}
            <div className="w-full flex flex-col px-4 py-8 sm:p-10 md:p-16 justify-center items-center gap-15 sm:gap-20"
                style={{
                    backgroundImage: `url('/gala/gala-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* top row with information */}
                <div className="w-full flex justify-between">
                    
                        <div className="text-center">
                            <p className="text-s sm:text-l md:text-xl font-libre">Save the date</p>
                            <h2 className="text-m sm:text-xl md:text-2xl font-libre">March 20, 2026</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-s sm:text-l md:text-xl font-libre">Check-in starts</p>
                            <h2 className="text-m sm:text-xl md:text-2xl font-libre">5:00 PM</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-s sm:text-l md:text-xl font-libre">Event begins at</p>
                            <h2 className="text-m sm:text-xl md:text-2xl font-libre">5:30 PM</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-s sm:text-l md:text-xl font-libre">See you there</p>
                            <h2 className="text-m sm:text-xl md:text-2xl font-libre">Sub Ballroom</h2>
                        </div>
                </div>

                {/* middle row big title section */}
                <div className="text-center flex gap-5 flex-col">
                    <p className="text-2xl sm:text-4xl font-great-vibes">An Advocacy Event for Child Survival</p>
                    <h2 className="text-6xl sm:text-7xl md:text-8xl font-great-vibes">The Light of Life Gala</h2>
                    <p className="text-2xl sm:text-4xl font-great-vibes">A night of advocacy, connection, raffle prizes, and delicious food.</p>
                </div>

                <div className="pb-10">
                    <div className="rounded-2xl p-6 md:p-4 text-center border-2">
                        <a href="https://www.bouncelife.com/events/6988266b316bad8542535c2e"
                            target='_blank' rel='noopener noreferrer'><p className="text-l sm:text-xl font-libre">Early Bird Tickets Available Now</p></a>
                    </div>
                </div>
            </div>

            {/* guest speaker */}
            <div className="w-full flex flex-col p-15 justify-center items-center gap-6 py-10" 
                style={{
                    backgroundImage: `url('/gala/gala-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="text-center text-4xl md:text-6xl font-great-vibes">Our Keynote Speaker</h2>
                {/* <p className="text-center text-l md:text-xl w-3/4">Meet our guest speaker for the Light of Light Gala: Sediqa Sarwari. Don’t miss this opportunity to hear from an inspiring speaker! Get your tickets now!</p> */}
                
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 my-10">
                    <div className="rounded-full w-60 h-60 sm:w-64 sm:h-64 overflow-hidden">
                        <img src="/gala/Gala_KeynoteSpeaker.jpeg" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-3/4 sm:w-4/5 md:w-4/7 flex flex-col gap-4 justify-center text-center md:text-left">
                        <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl font-great-vibes">Sediqa Sarwari</h2>
                        <p className="text-l sm:text-xl font-libre">Sediqa Sarwari is the author of <em>The Flowers of Your Pains</em> and the founder of Young Leaders Initiative World. She is a mental health advocate with over ten years of experience in the social services sector in Canada and internationally. Her work and writings focus on resilience, healing, and hope.</p>
                    </div>
                </div>
            </div>
            
            {/* tiered raffle prizes */}
            <div className="w-full flex flex-col p-15 justify-center items-center gap-6" 
                style={{
                    backgroundImage: `url('/gala/gala-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* gold tier prizes */}
                <div className="text-center">
                    <h2 className="font-great-vibes text-4xl sm:text-5xl md:text-6xl py-10">Gold Tier Raffle Prizes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {GOLD_TIER_PRIZES.map((item, index) => (
                            <div key={index} className="flex flex-col p-4">
                                <h3 className="font-libre font-bold text-l sm:text-2xl mb-2">{item.title}</h3>
                                <p className="font-libre text-l sm:text-xl">{item.prize}</p>
                                {item.prize2 && (
                                    <p className="font-libre pt-4 text-l sm:text-xl">{item.prize2}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* silver tier prizes */}
                <div className="text-center">
                    <h2 className="font-great-vibes text-4xl sm:text-5xl md:text-6xl py-20">Silver Tier Raffle Prizes</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {SILVER_TIER_PRIZES.map((item, index) => (
                            <div key={index} className="flex flex-col p-4 w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(25%-1.5rem)] min-w-[250px]">
                                <h3 className="font-libre font-bold mb-2 text-lg sm:text-2xl">{item.title}</h3>
                                {item.total_price && (
                                    <p className="font-libre pb-2 text-l sm:text-xl">{item.total_price}</p>
                                )}
                                <p className="font-libre text-l sm:text-xl">{item.prize}</p>
                                {item.prize2 && (
                                    <p className="font-libre pt-4 text-l sm:text-xl">{item.prize2}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ticket prices */}
            <div className="px-10 py-15"
                style={{
                    backgroundImage: `url('/gala/gala-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="font-great-vibes text-4xl sm:text-6xl text-center">Raffle Ticket Prices</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-center my-8 sm:my-10">
                        <h2 className="font-libre text-l sm:text-2xl mb-6 sm:mb-8 font-bold">Gold Tier Tickets</h2>
                        <ul className="flex flex-col gap-3 font-libre text-l sm:text-xl">
                            <li>$2 for 1 gold ticket</li>
                            <li>$5 for 3 gold tickets</li>
                            <li>$10 for 7 gold tickets</li>
                        </ul>
                    </div>

                    <div className="text-center my-8 sm:my-10">
                        <h2 className="font-libre text-l sm:text-2xl mb-6 sm:mb-8 font-bold">Silver Tier Tickets</h2>
                        <ul className="flex flex-col list-none font-libre text-l sm:text-xl gap-3">
                            <li>$1 for 1 silver ticket</li>
                            <li>$7 for 10 silver tickets</li>
                            <li>$13 for 20 silver tickets</li>
                        </ul>
                    </div>

                </div>

                <div className="font-libre text-center my-8 sm:my-10">
                    <h2 className="font-libre text-l sm:text-2xl mb-6 sm:mb-8 font-bold">Ticket Bundle</h2>
                    <p className="font-libre text-l sm:text-xl">$15 for 20 silver tickets + 5 gold tickets</p>
                </div>

            </div>

            {/* menu */}
            <div className="px-10 py-15"
                style={{
                    backgroundImage: `url('/gala/gala-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h2 className="font-great-vibes text-4xl sm:text-6xl text-center my-10">Menu</h2>

                
                {/* dinner sponsor */}
                <div className="w-full">

                    {/* <div>
                        <p>Thank you to our sponsors, KRSMA Indian Restaurant and Sassy Treats, for generously providing dinner for the Light of Life gala. </p>
                    </div> */}

                    {/* logos + menu */}
                    <h2 className="font-great-vibes text-4xl sm:text-6xl text-center my-10">Main Course</h2>
                    <div className="w-full flex">
                        
                        {/* sponsor logo */}
                        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 my-4">
                            <div className="rounded-full w-60 h-60 sm:w-64 sm:h-64 overflow-hidden">
                                <img src="/sponsors/krsma-logo-clear.png" className="w-full h-full object-cover"></img>

                            </div> 

                            <div>
                                <div className="flex flex-row gap-10 justify-center items-center">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-libre font-bold">Butter Chicken</h2>
                                        <p className="font-libre text-xl">Non-Vegetarian</p>
                                        
                                    </div>

                                    <div className="text-center">
                                        <h2 className="text-2xl font-libre font-bold">Paneer Butter Masala</h2>
                                        <p className="font-libre text-xl">Vegetarian</p>
                                    </div>

                                    <div className="text-center">
                                        <h2 className="text-2xl font-libre font-bold">Chana Masala</h2>
                                        <p className="font-libre text-xl">Vegan</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-10 mt-10">
                                    <h2 className="text-2xl font-libre font-bold">Basmati Rice</h2>
                                    <h2 className="text-2xl font-libre font-bold">Assorted Naan</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* dessert sponsor */}
                <div>
                    <h2 className="font-great-vibes text-4xl sm:text-6xl text-center my-10">Dessert</h2>
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-12 my-4">
                        <div>
                            <p className="font-libre text-2xl font-bold">UNICEF-themed cupcakes and dessert</p>
                        </div>

                        <div>
                            <div className="w-60 h-60 sm:w-90 sm:h-70 overflow-hidden">
                                <img src="/sponsors/sassy-treats-logo-big.jpg" className="w-full h-full object-cover"></img>

                            </div> 
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-25">
                    <h2 className="font-libre text-2xl w-3/4 text-center font-bold">Thank you to our sponsors, KRSMA Indian Restaurant and Sassy Treats, for generously providing dinner for the Light of Life gala. </h2>
                </div>

                <div>
                    {/* sponsor website button */}
                    <div className="flex items-center justify-center mt-6 gap-10">
                        <div className="rounded-2xl p-6 md:p-4 text-center border-2 bg-black w-1/3" >
                            <a 
                                href="https://krsmaindianrestaurant.com/"
                                target='_blank' rel='noopener noreferrer'
                            >
                                <p className="text-white text-l sm:text-xl font-libre">Visit Krsma Indian Restaurant</p>
                            </a>
                        </div>
                        <div className="rounded-2xl p-6 md:p-4 text-center border-2 bg-black w-1/3" >
                            <a 
                                href="https://www.instagram.com/_sassy.treats_/"
                                target='_blank' rel='noopener noreferrer'
                            >
                                <p className="text-white text-l sm:text-xl font-libre">Visit Sassy Treats</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

                // {/* menu items */}
                // <div className="flex flex-row gap-10 justify-center items-center">
                //     <div className="text-center">
                //         <h2 className="text-2xl font-libre font-bold">Butter Chicken</h2>
                //         <p className="font-libre text-xl">Non-Vegetarian</p>
                //     </div>
                //     <div className="text-center">
                //         <h2 className="text-2xl font-libre font-bold">Paneer Butter Masala</h2>
                //         <p className="font-libre text-xl">Vegetarian</p>
                //     </div>
                //     <div className="text-center">
                //         <h2 className="text-2xl font-libre font-bold">Chana Masala</h2>
                //         <p className="font-libre text-xl">Vegan</p>
                //     </div>
                // </div>
                // <div className="flex justify-center items-center gap-10 mt-10">
                //     <h2 className="text-2xl font-libre font-bold">Basmati Rice</h2>
                //     <h2 className="text-2xl font-libre font-bold">Assorted Naan</h2>
                // </div>

// font-great-vibes text-4xl sm:text-6xl text-center my-10

                                // {/* sponsor website button */}
                                // <div className="flex items-center justify-center pt-5">
                                //     <div className="rounded-2xl p-6 md:p-4 text-center border-2 bg-black w-1/2" >
                                //         <a 
                                //             href="https://krsmaindianrestaurant.com/"
                                //             target='_blank' rel='noopener noreferrer'
                                //         >
                                //             <p className="text-white text-l sm:text-xl font-libre">Visit Krsma Indian Restaurant</p>
                                //         </a>
                                //     </div>
                                // </div>