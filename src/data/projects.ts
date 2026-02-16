import sshProject from "../assets/ssh-project.png"
import lance from "../assets/lance.jpg";
import gymProject from "../assets/gym-proj.png"
import chatter from "../assets/chatter-proj.png"
import serv from "../assets/ssh-serve.mov";
import protocol from "../assets/protocol.mov";

export type ProjectLink = {
  label: "Repository" | "Live Demo" | "Live" | "Post";
  url: string;
};

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
  source: "Open-Source" | "Closed-Source" | "In-Development"
  links?: ProjectLink[]
  id: string
}


export const projects: Project[] = [
  {
    title: "Full Stack Ticketing System",
    subtitle: "Building a Full-Stack Ticketing System for Purdue GrandPrix 2027",
    description: "Current Design Choices: Using Flask for the backend API with SQLite3 for rapid prototyping. Implementing QR code generation for tickets and real-time seat availability tracking.",
    image: lance,
    type: "Project",
    start: 'September 2025',
    end: 'Present',
    techStack: ["Python", "Flask", "Sqlite3"],
    source: "In-Development",
    id: "ticketing-system"
  },
  {
    title: "Attendace Automation",
    subtitle: "Automated meeting and office hours attendance using Python and Excel in my role at Purdue Grand Prix.",
    description: "Included openpyxl to automate meeting attendance through pulling from Microsoft Forms, coloring cells, and reuploading to cloud. An idea I have is to work with an OCR library like Tesseract to work with paper logs more efficiently.",
    image: lance,
    type: "Presentation",
    start: 'September 2025',
    end: 'October 2025',
    techStack: ["Python", "Excel"],
    source: "Closed-Source",
    id: "attendance-automation"
  },
  {
    title: "Self-Hosted Linux Server",
    subtitle: "Secure remote infrastructure for private application hosting",
    description: "Built and configured a personal Linux server for self-hosting applications and experimentation. Implemented secure remote access via SSH and mesh VPN networking using Tailscale. Configured firewall rules, user permissions, and service management to support reliable, private deployment of containerized applications.",
    image: sshProject,
    video: serv,
    type: "Presentation",
    start: 'Dec 2025',
    end: 'Jan 2026',
    techStack: ["Linux", "SSH", "Docker", "Tailscale"],
    source: "Open-Source",
    links: [
      { label: "Post", url: "https://notes.ryhub.dev/Forest/Linux-Server/Building-Personal-Linux-SSH-Server" },
    ],
    id: "personal-server"
  },
  {
    title: "Protocol Tracker",
    subtitle: "Private Health Tracking System",
    description: "Designed and deployed a private, self-hosted fitness tracking platform running on a Linux server, accessible securely via Tailscale VPN. Implemented real-time data logging through iOS Shortcuts and built a live visualization dashboard using Svelte. Containerized services with Docker for portability and automated restarts.",
    image: gymProject,
    video: protocol,
    type: "Project",
    start: 'Aug 2025',
    end: 'Feb 2026',
    techStack: ["Python", "FastAPI", "Svelte", "Chart.js", "Docker","Tailscale","Linux Server"],
    source: "Open-Source",
    links: [
      { label: "Repository", url: "https://github.com/hub-ry/protocol" },
      { label: "Live Demo", url: "" },
    ],
    id: "protocol-tracker"
  },
  {
    title: "Chatterbox",
    subtitle: "Social Media Platform Built in CS180 Team Project",
    description: "This project implements the backend for a social media platform, focusing on both the database and client-server communication. It includes user management, direct messaging, and data persistence using MySQL. The server is capable of handling multiple client connections concurrently, and a command-line client application is provided for user interaction. Note: Team of 4, Closed Source to maintain  ",
    image: chatter,
    type: "Project",
    start: 'October 2024',
    end: 'December 2024',
    techStack: ["Java", "MySQL", "Swing GUI"],
    source: "Closed-Source",
    id: "chatterbox"
  },
]
