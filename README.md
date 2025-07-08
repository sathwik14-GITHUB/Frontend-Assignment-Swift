# 🚀 Comments Dashboard with Profile Viewer
A sleek, modern React application to view, search, sort, and paginate user comments — along with a dedicated user profile page.
---

## 🚀 Technologies Used

| Technology       | Purpose                                |
|------------------|----------------------------------------|
| React            | Frontend framework                     |
| React Router DOM | Routing between profile and dashboard  |
| Plain JavaScript | Logic for pagination, sorting, search  |
| CSS              | Component-level styling                |
| JSONPlaceholder  | Dummy API data                         |

---

## 📌 Features

### 🔹 Profile Page (`/profile`)
- Displays details of the first user from the [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
- Clean, card-style UI with user details: name, username, email, phone and address
- Clickable user name in header navigates to this profile screen
- ![image](https://github.com/user-attachments/assets/fcc97171-0ba5-4e54-81dc-70d5100fda88)


### 🔹 Comments Dashboard (`/`)
- Lists 500 comments from the [JSONPlaceholder Comments API](https://jsonplaceholder.typicode.com/comments)

-  Features and the requirements met:
  -  **Pagination** (Prev, Next, Page size: 10 / 50 / 100) ✅
  -  **Search**: Single search bar filters by name, email, and comment ✅
  -  **Sorting**: By Post ID, Name, or Email (toggles between ascending, descending, and default) ✅
  -  **Routing** via React Router ✅
  -  **Client-side data persistence** using localStorage (search, sort, page, page size) ✅
  -  Fully responsive layout using CSS Grid and Flexbox ✅
  -  Div-based table layout for accessibility and responsiveness ✅
  -  ![image](https://github.com/user-attachments/assets/e75ef7aa-8507-4287-b537-d11a64211578)



## 🧪 How to Run the App

1. Clone the repository or download ZIP
2. Install dependencies using Terminal:

   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:

   \`\`\`bash
   npm run dev
   \`\`\`

4. Open in browser:

   \`\`\`
   http://localhost:5654
   \`\`\`

---

## 🧾 Notes

- All logic for pagination, filtering, and sorting is **manually implemented**.
- No external UI component libraries (like MUI or Ant) were used.
- CSS is modularized per component.
- Fully responsive on mobile, tablet, and desktop.

---

## 📎 Dummy APIs Used

- Users: https://jsonplaceholder.typicode.com/users
- Comments: https://jsonplaceholder.typicode.com/comments
