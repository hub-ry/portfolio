import sshProject from "../assets/ssh-project.png"
import lance from "../assets/lance.jpg";
import gymProject from "../assets/gym-proj.png"
import chatter from "../assets/chatter-proj.png"
import serv from "../assets/ssh-serve.mov";
import protocol from "../assets/protocol.mov";

export type Project = {
  title: string
  subtitle: string
  description: string
  image: string
  video?: string
  type: "Project" | "Presentation"
  start: string
  end: string
  techStack: string[]
  source: "Open-Source" | "Closed-Source" | "In-Progress"
  id: string
}


export const projects: Project[] = [
  {
    title: "Full Stack Ticketing System",
    subtitle: "Built for Purdue GrandPrix.",
    description: "string",
    image: lance,
    type: "Project",
    start: 'September 2025',
    end: 'Present',
    techStack: ["Python", "FastAPI", "React", "Sqlite3"],
    source: "Open-Source",
    id: "ticketing-system"
  },
  {
    title: "Attendace Automation",
    subtitle: "Built for Purdue GrandPrix",
    description: "string",
    image: lance,
    type: "Presentation",
    start: 'September 2025',
    end: 'October 2025',
    techStack: ["Python", "React"],
    source: "Open-Source",
    id: "attendance-automation"
  },
  {
    title: "Building Personal Server",
    subtitle: "",
    description: "string",
    image: sshProject,
    video: serv,
    type: "Presentation",
    start: 'Dec 2025',
    end: 'Jan 2026',
    techStack: ["Linux", "SSH", "Server Configuration"],
    source: "Open-Source",
    id: "personal-server"
  },
  {
    title: "Protocol Tracker",
    subtitle: "Health Database built for personal use",
    description: "string",
    image: gymProject,
    video: protocol,
    type: "Project",
    start: 'Aug 2025',
    end: 'Feb 2026',
    techStack: ["Python", "Pandas"],
    source: "Open-Source",
    id: "protocol-tracker"
  },
  {
    title: "Chatterbox",
    subtitle: "Social Media Platform Built in CS180 Team Project",
    description: "string",
    image: chatter,
    type: "Project",
    start: 'October 2024',
    end: 'December 2024',
    techStack: ["Java", "MySQL", "Swing GUI"],
    source: "Closed-Source",
    id: "chatterbox"
  },
]
