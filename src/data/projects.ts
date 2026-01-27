export type Project = {
  title: string
  subtitle: string
  image: string
  type: "Project" | "Presentation"
}

export const projects: Project[] = [
  {
    title: "TICYL",
    subtitle: "Topological Interlocking Cylinder Generator",
    image: "/images/ticyl.png",
    type: "Project",
  },
  {
    title: "A Glimpse Of Configurations",
    subtitle: "Topological Interlocking Presentation",
    image: "/images/configs.png",
    type: "Presentation",
  },
  {
    title: "Assemblable Polyominoes",
    subtitle: "Interlocking Presentation",
    image: "/images/polyominoes1.png",
    type: "Presentation",
  },
  {
    title: "Interlocking Polyominoes",
    subtitle: "Colorful Grid Project",
    image: "/images/polyominoes2.png",
    type: "Project",
  },
]
