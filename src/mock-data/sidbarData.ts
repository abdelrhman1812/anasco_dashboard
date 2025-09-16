export const navigationItems = {
    Dashboard: [
      { id: 1, title: "Default", url: "/" },
      { id: 2, title: "e-commerce", url: "/ecommerce-dashboard" },
      { id: 3, title: "projects", url: "/projects-dashboard" },
      { id: 4, title: "online courses", url: "/courses-dashboard" },
    ],
    pages: [
      {
        title: "user profile",
        url: "/profile",
        children: [
          { title: "Overview", url: "/profile/overview" },
          { title: "Projects", url: "/profile/projects" },
          { title: "Campaigns", url: "/profile/campaigns" },
          { title: "Documents", url: "/profile/documents" },
          { title: "Followers", url: "/profile/followers" },
        ],
      },
      { title: "Account", url: "/account" },
      { title: "Corporate", url: "/corporate" },
      { title: "Blog", url: "/blog" },
      { title: "Social", url: "/social" },
    ],
  };
  