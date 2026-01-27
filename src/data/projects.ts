import sshProject from "../assets/ssh-project.png"
import lance from "../assets/lance.jpg";
import gymProject from "../assets/gym-proj.png"

export type Project = {
  title: string
  subtitle: string
  image: string
  type: "Project" | "Presentation"
  start: string
  end: string
}


export const projects: Project[] = [
  {
    title: "Full Stack Ticketing System",
    subtitle: "Built for Purdue GrandPrix",
    image: lance,
    type: "Project",
    start: 'string',
    end: 'sting'
  },
  {
    title: "Attendace Automation",
    subtitle: "Built for Purdue GrandPrix",
    image: lance,
    type: "Presentation",
    start: 'string',
    end: 'sting'
  },
  {
    title: "Building Personal Server",
    subtitle: "",
    image: sshProject,
    type: "Presentation",
    start: 'Dec 2025',
    end: 'Jan 2026'
  },
  {
    title: "Protocol Tracker",
    subtitle: "Health Database built for personal use",
    image: gymProject,
    type: "Project",
    start: 'Aug 2025',
    end: 'Present'
  },
]
