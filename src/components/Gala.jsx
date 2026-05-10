
export const Gala = () => {
    return (
        <div className="w-full flex flex-col">
            <h2 class="text-4xl font-bold text-center pt-6 pb-2">The Life of Light Gala 2026</h2>
            <p className="text-xl text-center pb-4 font-libre">An Advocacy Event for Child Survival</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 py-2 justify-center">
                <img src="/gala/CheckIn.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                <img src="/gala/Tablephoto1.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center px-19 py-4">
                <img src="/gala/Tablephoto2.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                <img src="/gala/Tablephoto3.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                <img src="/gala/BalloonArchPhoto.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
            </div>

            {/* guest speaker */}
            <div className="w-full flex flex-col p-15 justify-center items-center gap-6 py-10">
                <h2 className="text-center font-semibold text-3xl">We welcomed an inspirational guest speaker, Sediqa Sarwari!</h2>
                
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-15">
                    <div className="rounded-lg w-60 h-60 sm:w-64 sm:h-64 overflow-hidden">
                        <img src="/gala/GuestSpeaker.JPG" className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-3/4 sm:w-4/5 md:w-4/7 flex flex-col gap-4 justify-center text-center md:text-left">
                        <h2 className="font-semibold text-2xl sm:text-4xl md:text-5xl">Sediqa Sarwari</h2>
                        <p className="text-l sm:text-xl font-libre">She shared her stories of resilience and survival, and her advocacy focuses on supporting refugees and vulnerable communities.</p>
                    </div>
                </div>
            </div>

            <div className="pb-10">
                <h2 className="text-center font-semibold text-3xl pt-5 pb-3">We had a cute photo booth for our guests!</h2>
                <div className="flex flex-col md:flex-row items-center gap-6 justify-center px-19 py-4">
                    <img src="/gala/Photobooth5.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth7.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth9.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 justify-center px-19 py-4">
                    <img src="/gala/Photobooth2.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth1.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth3.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 justify-center px-19 py-4">
                    <img src="/gala/Photobooth8.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth4.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Photobooth6.JPG" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                </div>

            </div>

            <div className="pb-7">
                <h2 className="text-center font-semibold text-3xl pt-5 pb-3">And some amazing raffle prizes!</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 py-2 justify-center">
                    <img src="/gala/Raffleprize1.JPG" alt="volunteers-at-check-in-table" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Raffleprize2.jpg" alt="gala-attendees" class="w-full md:w-1/3 h-auto rounded-lg shadow-md"/>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6 justify-center px-19 py-4">
                    <img src="/gala/Raffleprize3.jpg" alt="volunteers-at-check-in-table" class="w-full md:w-1/4 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Raffleprize4.jpg" alt="gala-attendees" class="w-full md:w-1/4 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Raffleprize5.jpg" alt="gala-attendees" class="w-full md:w-1/4 h-auto rounded-lg shadow-md"/>
                    <img src="/gala/Raffleprize6.jpg" alt="gala-attendees" class="w-full md:w-1/4 h-auto rounded-lg shadow-md"/>
                </div>
            </div>

        </div>

        

        
    )
}