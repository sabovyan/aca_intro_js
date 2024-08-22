import { Slide } from "@/types/main";

export const DEVOPS_INTRO: Slide[] = [
  {
    title: "Introduction to DevOps Culture and Basic Tools",
    items: [
      {
        type: "image",
        order: 2,
        url: "/devops_intro/devops_intro.webp",
        alt: "Illustration of DevOps culture",
      },
      {
        type: "description",
        order: 1,
        content:
          "In this session, we will explore the fundamental principles of DevOps, its significance in modern software development, and the basic tools used in DevOps practices.",
      },
    ],
  },
  {
    title: "Session Overview",
    items: [
      {
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "Introduction to DevOps Culture",
          "Version Control Systems with Git",
          "Networking Basics",
          "Basics of CI/CD",
          "Introduction to Containerization with Docker",
        ],
      },
    ],
  },
  {
    title: "What is DevOps?",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "DevOps is a combination of 'Development' and 'Operations'. It is a culture that promotes collaboration between software development and IT operations teams.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Focuses on delivering software faster and more reliably",
          "Emphasizes automation and monitoring",
          "Improves collaboration across teams",
        ],
      },
    ],
  },
  {
    title: "Version Control Systems (Git)",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Git is a powerful version control system that allows multiple developers to work on a project simultaneously, tracking changes and facilitating collaboration.",
      },
      {
        type: "image",
        order: 3,
        url: "/devops_intro/git_intro.webp",
        alt: "Basic Git workflow",
      },
    ],
  },
  {
    title: "Version Control Systems (Git)",
    items: [
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Initialize a repository: git init",
          "Stage changes: git add",
          "Commit changes: git commit",
          "Push to a remote repository: git push",
          "Pull from a remote repository: git pull",
        ],
      },
    ],
  },
  {
    title: "Networking Basics",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Networking is essential for understanding how different systems communicate within a DevOps pipeline. Basic networking concepts include IP addresses, DNS, and HTTP/HTTPS.",
      },
      {
        type: "image",
        order: 3,
        url: "/devops_intro/network_intro.webp",
        alt: "Networking diagram illustrating how data travels through the internet",
      },
    ],
  },
  {
    title: "Networking Basics",
    items: [
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "IP Addresses: Unique identifiers for devices on a network",
          "DNS: Domain Name System, translates domain names to IP addresses",
          "HTTP/HTTPS: Protocols for transferring data over the web",
        ],
      },
    ],
  },
  {
    title: "Basics of CI/CD",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Continuous Integration (CI) and Continuous Deployment (CD) are key practices in DevOps. They involve automatically testing and deploying code to ensure high-quality software delivery.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "CI: Automates the process of integrating code changes",
          "CD: Automates the deployment of code to production",
          "Tools: Jenkins, GitLab CI/CD, CircleCI",
        ],
      },
    ],
  },
  {
    title: "Introduction to Containerization with Docker",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Docker is a platform that uses containerization to package applications and their dependencies into isolated environments. This ensures consistency across different stages of development.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Docker Images: Pre-configured environments",
          "Containers: Running instances of Docker images",
          "Dockerfile: A script to create Docker images",
        ],
      },
      // {
      //   type: "image",
      //   order: 3,
      //   url: "https://example.com/docker_container.png",
      //   alt: "Diagram showing the relationship between Docker images and containers",
      // },
    ],
  },
];
