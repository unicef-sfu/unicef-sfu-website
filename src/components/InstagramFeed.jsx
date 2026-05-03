import posts from "../data/instagramPosts.json"

export const InstagramFeed = () => {
    return (
        <div className="bg-[#EEEEEE] p-3">
            <div className="flex flex-col items-center justify-center p-7">
                <p className="text-xl sm:text-2xl text-[#585962] p-5 text-center">Follow us to stay updated on our events and opportunities</p>
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.instagram.com/usfuclub/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center"
                    >
                        <img src="/icons/instagram-logo.png" alt="instagram-logo" className="w-7 h-7"/>
                    </a>
                    <a href="https://www.instagram.com/usfuclub/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex items-center">
                        <p className="text-xl sm:text-2xl"> usfuclub</p>
                    </a>
                </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-10 mb-10">
                {posts.map(post => (
                    <a
                    key={post.id}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative"
                    >

                    {/* Instagram icon overlay */}
                    <div className="absolute top-2 right-2 z-10 p-1 ">
                        <img 
                            src="/icons/white-instagram-logo.svg" 
                            alt="instagram" 
                            className="w-7 h-7"
                        />
                    </div>

                    <img
                        src={post.image}
                        alt={post.caption}
                        className="rounded-xl shadow-md object-cover aspect-square transition-transform duration-200 group-hover:scale-105"
                    />

                    </a>
                ))}
            </div>
        </div>
    )
}