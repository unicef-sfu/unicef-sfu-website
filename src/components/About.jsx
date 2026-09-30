const TEAM_DATA = {
  "The Board": [
    { name: "Akash Jassal", role: "Co-President", img: "/team-pics/Akash-Jassal.png" },
    { name: "Tajin Rai", role: "Co-President", img: "/team-pics/Tajin-Rai.JPG"  },
    { name: "Jenny Nguyen", role: "VP of External Relations", img: "/team-pics/Jenny-Nguyen.jpeg" },
    { name: "Simrat Dhanoa", role: "VP of Communications", img: "/team-pics/Simrat-Dhanoa.JPG" },
    { name: "Isha Cheema", role: "VP of Internal Relations", img: "/team-pics/Isha-Cheema.jpeg" },
    { name: "Lakshmi Harman", role: "VP of Advocacy", img: "/team-pics/Lakshmi-H.jpeg" },
    { name: "Alex Hanada", role: "VP of Finance", img: "/team-pics/Alex-Hanada.jpeg" },
  ],
  "Internals Team": [
    { name: "Drishia Prabhu", role: "Internal Events Director", img: "/team-pics/Drishia.jpeg" },
    { name: "Imran Johal", role: "Internal Events Director", img: "/team-pics/Imran-Johal.jpeg"},
    { name: "Marie-Ange Lokenga", role: "Internal Events Director", img: "/team-pics/Marie-Ange-Lokenga.jpeg"},    
    { name: "Yar Biar", role: "Internal Events Director", img: "/team pics/Yar-Biar.jpeg" },
    { name: "Aarav Kamboj", role: "Ambassador", img: "/team-pics/Aarav-Kamboj.PNG"},
    { name: "Amina Kulchikova", role: "Ambassador", img: "/team-pics/Amina-Kulchikova.png" },
    { name: "Betty Kiros", role: "Ambassador", img: "/team-pics/Betty-Ghirmay.jpeg" },
    { name: "Sejal Dhaliwal", role: "Ambassador", img: "/team-pics/Sejal-Dhaliwal.jpeg"}

  ],
  "Externals Team": [
    { name: "Eshal Usmani", role: "Volunteer Director", img: "/team-pics/Eshal-Usmani.jpeg"},
    { name: "Amanjot Brar", role: "Fundraising Director", img: "/team-pics/Amanjot-Brar.png"},
    { name: "Jennie Park", role: "Fundraising Director", img: "/team-pics/jennie-park.jpeg"},
    { name: "Jolina Ronnekleiv", role: "Fundraising Director", img: "/team-pics/Jolina-Ronnekleiv.jpeg"},
    { name: "Ayati Nayar", role: "Logistics Director", img: "/team-pics/Ayati-Nayar.jpeg"},
    { name: "Jasnoor Sekhon", role: "Logistics Director", img: "/team-pics/Jasnoor-Sekhon.jpg"},
    { name: "Samanya Ramnath", role: "Logistics Director", img: "/team-pics/Samanya-R.jpeg"},
    { name: "Judy Kim", role: "Sponsorship Director", img: "/team-pics/Judy-Kim.jpeg"},
    { name: "Shivam Narula", role: "Sponsorship Director", img: "/team-pics/shivam-narula.png"},
    { name: "SooMin Yeo", role: "Sponsorship Director", img: "/team-pics/SooMin-Yeo.jpeg"}

  ],
  Finance: [
    { name: "Sahij Sandhu", role: "Finance Director", img: "/team-pics/Sahij-Sandhu.jpeg" }
  ],
  Communications: [
    { name: "Judy Jiang", role: "Graphics Director", img: "/team-pics/Judy.jpg" },
    { name: "Layan Kutieleh", role: "Graphics Director", img: "/team-pics/Layan-Kutieleh.jpeg" },
    { name: "Sahaj Kaur Gabria", role: "Graphics Director", img: "/team-pics/SahajKaur-Gabria.jpeg" },
    { name: "Anaya Naqvi", role: "Marketing Director", img: "/team-pics/Anaya-Ali.jpg" },
    { name: "Noorkiran Dhaliwal", role: "Marketing Director", img: "/team pics/Noorkiran-Dhaliwal.jpeg" },
    { name: "Yuvraj Dhillon", role: "Marketing Director", img: "/team-pics/Yuvraj-Dhillon.jpeg" },
    { name: "Justinne Baltazar", role: "Website Developer", img: "/team-pics/Justinne-Baltazar.JPG" }
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
