const TEAM_DATA = {
  "The Board": [
    { name: "Alveena Babul", role: "Co-President", img: "/team pics/Alveena-Babul.jpeg" },
    { name: "Sarah Wiese", role: "Co-President", img: "/team pics/Sarah-Wiese.jpeg"  },
    { name: "Amareet Dhaliwal", role: "VP of External Relations", img: "/team pics/Amareet-Dhaliwal.jpeg" },
    { name: "Jasnoor Sekhon", role: "VP of Communications", img: "/team pics/Jasnoor.jpeg" },
    { name: "Grace Tognotti", role: "VP of Internal Relations", img: "/team pics/Grace-Tognotti.jpeg" },
    { name: "Therese Baido", role: "VP of Advocacy", img: "/team pics/Therese-Baido.jpeg" },
    { name: "Martin Aguliar", role: "VP of Finance", img: "/team pics/Martin-Aguilar.jpeg" },
  ],
  "Internals Team": [
    { name: "Alex Hanada", role: "Internal Events Director", img: "/team pics/Alexander-Hanada.jpeg" },
    { name: "Isha Cheema", role: "Ambassador", img: "/team pics/Isha-Cheema.jpeg" },
    { name: "Tajin Rai", role: "Internal Events Director", img: "/team pics/Tajin-Rai.jpeg"},
    { name: "Angela Luong", role: "Ambassador", img: "/team pics/Angela-Luong.jpeg"},
    { name: "Yar Biar", role: "Internal Events Director", img: "/team pics/Yar-Biar.png" },
    { name: "Linda Palchevsky", role: "Internal Events Director", img: "/team pics/Linda-Palchevsky.jpeg"},
    { name: "Lakshmi Harman", role: "Ambassador", img: "/team pics/Lakshmi-Harman.jpeg" },
    { name: "Olivia Tuan", role: "Ambassador", img: "/team pics/Olivia_Tuan.jpeg"}

  ],
  "Externals Team": [
    { name: "Rowen Mack", role: "Outreach Director", img: "/team pics/Rowen-Mack.jpeg"},
    { name: "Colleen Flores", role: "Fundraising Director", img: "/team pics/Colleen-Flores.jpeg"},
    { name: "Jennie Park", role: "Fundraising Director", img: "/team pics/Jennie_Park.jpeg"},
    { name: "Eshal Usmani", role: "Volunteer Director", img: "/team pics/Eshal-Usmani.jpeg"},
    { name: "Andrea Watanabe", role: "Logistics Director", img: "/team pics/Andrea-Watanabe.jpeg"},
    { name: "Jenny Nguyen", role: "Logistics Director", img: "/team pics/Jenny-Nguyen.jpeg"},
    { name: "Baljot Reehal", role: "Logistics Director", img: "/team pics/Baljot-Reehal.jpeg"},
    { name: "Winston Zhou", role: "Sponsorship Director", img: "/team pics/Winston-Zhou.jpeg"},
    { name: "Junghun Byun", role: "Sponsorship Director", img: "/team pics/Junghun-Byun.jpg"},
    { name: "Kudrat Kochhar", role: "Sponsorship Director", img: "/team pics/Kudrat-Kochhar.jpeg"},

  ],
  Finance: [
    { name: "Akash Jassal", role: "Finance Director", img: "/team pics/Akash-Jassal.jpeg" }
  ],
  Communications: [
    { name: "Aliza Sandhu", role: "Graphics Director", img: "/team pics/Aliza-Sandhu.jpeg" },
    { name: "Inarah Usmani", role: "Graphics Director", img: "/team pics/Inarah-Usmani.jpeg" },
    { name: "Simrat Dhanoa", role: "Graphics Director", img: "/team pics/Simrat-Dhanoa.jpeg" },
    { name: "Cheska Mercurio", role: "Marketing Director", img: "/team pics/Cheska.jpeg" },
    { name: "Noorkiran Dhaliwal", role: "Marketing Director", img: "/team pics/Noorkiran-Dhaliwal.jpeg" },
    { name: "Jordan Baty-Martin", role: "Marketing Director", img: "/team pics/Jordan-Baty-Martin.jpg" },
    { name: "Justinne Baltazar", role: "Website Developer", img: "/team pics/Justinne-Baltazar.jpeg" },
    { name: "Owen Tedja", role: "Website Designer", img: "/team pics/Owen-Tedja.jpeg" },
  ],
}

const TeamMemberCard = ({ name, role, img }) => {
  const initials =
    name?.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase() || ""

  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-[#D9D9D9] flex items-center justify-center">
        {img ? (
          <img src={img} alt={`${name} headshot`} className="w-full h-full object-cover" />
        ) : (
          <span className="text-black/40 font-semibold text-xl">{initials}</span>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-black">{name}</p>
        <p className="text-sm text-black/80">{role}</p>
      </div>
    </div>
  )
}

const TeamSection = () => {
  const teams = Object.entries(TEAM_DATA).map(([teamName, members]) => ({
    name: teamName,
    members: members.map((m, idx) => ({
      id: `${teamName.toLowerCase().replace(/\s+/g, "-")}-${idx}`,
      ...m,
    })),
  }))

  return (
    <div className="w-full max-w-6xl px-6 pb-16">
      <h2 className="text-center text-4xl md:text-5xl font-light text-[#009EDB] mt-10 mb-12">
        Meet the team that makes
        <br />
        the magic happen
      </h2>

      <div className="flex flex-col gap-16">
        {teams.map((team) => (
          <section key={team.name}>
            <h3 className="text-2xl font-semibold text-black mb-8">
              {team.name} ({team.members.length})
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12">
              {team.members.map((m) => (
                <TeamMemberCard key={m.id} name={m.name} role={m.role} img={m.img} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <div className="flex flex-col items-center justify-center w-full px-4 sm:p-2">
        <p className="text-xl sm:text-2xl w-full sm:w-3/4 lg:w-1/2 text-justify p-5 sm:p-10">
          <span className="text-[#009EDB] font-bold">
            UNICEF is the world’s leading child-focused humanitarian and development agency.
          </span>{" "}
          Our global reach, unparalleled influence on policy makers, and diverse partnerships make us
          an instrumental force in shaping a world fit for children. UNICEF is supported entirely by
          voluntary donations and helps all children, regardless of race, religion or politics.
        </p>

        <p className="text-xl sm:text-2xl w-full sm:w-3/4 lg:w-1/2 text-justify p-5 sm:p-10">
          UNICEF SFU is the university’s largest student club dedicated to humanitarian efforts and is 
          directly affiliated with UNICEF Canada. We are dedicated to advocating and fundraising for 
          UNICEF’s work to defend every child’s right to a childhood.
        </p>
      </div>

      <TeamSection />
    </div>
  )
}
