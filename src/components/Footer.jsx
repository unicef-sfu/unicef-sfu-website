import { Link } from 'react-router-dom'

export const Footer = () => {
    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Contact', path: '/contact' }
    ]

    const socialLinks = [
        { name: 'Instagram', path: 'https://www.instagram.com/usfuclub/', icon: "/icons/instagram-logo.png"},
        { name: 'TikTok', path: 'https://www.tiktok.com/@unicefsfu', icon: "/icons/tiktok-logo.png"},
        { name: 'LinkedIn', path: 'https://www.linkedin.com/company/unicef-sfu/', icon: "/icons/linkedin-logo.png"},
    ]

     return (
        <div className="w-full bg-[#E8F6FC] text-[#585962]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between">
                    {/* logo + description */}
                    <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-2/5">
                        <img
                            src="/unicef-logo.png"
                            alt="UNICEF logo"
                            className="w-48 lg:w-56 object-contain"
                        />
                        <p className="text-lg text-center lg:text-left leading-relaxed">
                            We are Simon Fraser University’s student-led Campus Club directly affiliated with UNICEF Canada.
                            We hold events that fundraise, raise awareness and advocate on behalf of children around the world.
                            100% of proceeds raised each academic year are donated to UNICEF Canada.
                        </p>
                    </div>

                    {/* website navigation */}
                    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/5 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-[#1F145D]">Website</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className="hover:text-[#009EDB] transition-colors">{link.name}</Link>
                                </li>
                            ))}
                            <li>
                                <a href="https://linktr.ee/unicefsfu?utm_source=linktree_profile_share&ltsid=ecfc8b55-7a29-4e95-8414-e7ac341f79f5"
                                    key="get-involved" target='_blank' rel="noopener noreferrer" className="hover:text-[#009EDB] transition-colors">Get Involved</a>
                            </li>
                        </ul>
                    </div>

                    {/* contact section */}
                    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/3 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-[#1F145D]">Contact</h3>
                        <p className="max-w-xs lg:max-w-none">
                            Follow us on social media to get the latest updates on events and fundraisers.
                        </p>
                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            {/* social media links */}
                            {socialLinks.map((link) => (
                                <a key={link.name} href={link.path} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                                    <img src={link.icon} alt={link.name + ' logo'} className='w-10 h-10'></img>
                                </a>
                            ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}