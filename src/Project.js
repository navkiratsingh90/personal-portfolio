import tictactoe from './assets/tictactoe.png'
import portfolio from './assets/portfolio.png'
import todo from './assets/todo.png'
import rm from './assets/rm.png'


export const ProjectList = [{
  id: 1,
  title: "My Portfolio",
  imageUrl: portfolio,
  description: "My personal portfolio website serves as a digital showcase of my skills, projects, and professional journey. Designed with a modern aesthetic and user experience focus, it demonstrates my frontend development capabilities while effectively presenting my work to potential employers and clients.",
  techStack: ["React"],
  features: ["Responsive design that adapts seamlessly to all devices", "Dynamic project detail pages"],
  githubUrl: "https://github.com/your-project",
  additionalInfo: "More details about challenges, scope, etc."
},

  {
    id: 2,
    title: "Tic Tac Toe",
    imageUrl: tictactoe,
    description: "A game which everyone plays",
    techStack: ["html","css","javascript"],
    features: ["Users can track their scores and restart the new game after when the game ends"],
    githubUrl: "https://github.com/navkiratsingh90/tic-tac-toe",
    additionalInfo: "More details about challenges, scope, etc."
  },
  {
    id: 3,
    title: "Todo app",
    imageUrl: todo,
    description: "A basic todo app",
    techStack: ["React"],
    features: ["Users can add todo, delete todo, mark it as completed, edit their todos, saved in local storage"],
    githubUrl: "https://github.com/navkiratsingh90/Todo-app",
    additionalInfo: "More details about challenges, scope, etc."
  },
  {
    id: 4,
    title: "Resale Marketplace",
    imageUrl: rm,
    description: "Resale marketplace for selling/buying products from various user from your nearby location",
    techStack: ["React","mongoDB","express","nodeJs"],
    features: ["User Authentication: Secure signup/login with email verification and password recovery.", "Product Listings: Sellers can add products with detailed descriptions, images, pricing, and category selection.","Advanced Filters & Sorting: Users can filter items by price, brand, fuel type (for vehicles), and category.","Wishlist: Buyers can save products they’re interested in for later.",":User Dashboard – Manage products, wishlist, and profile. ","Admin Dashboard – Manage users, product categories, and monitor marketplace activity with charts."],
    githubUrl: "https://github.com/navkiratsingh90/Resale-Marketplace",
    additionalInfo: "More details about challenges, scope, etc."
  }
]