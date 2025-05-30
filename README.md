# 🧪 OrangeHRM User Management Flow Automation

This project automates the **User Management flow** in [OrangeHRM](https://opensource-demo.orangehrmlive.com/) using **Playwright** and **JavaScript**, following the **Page Object Model** design pattern.

---

## 📁 Project Structure

```bash
project-root/
│
├── pages/                      # Page Object Model files
│   ├── OrangeHRM_LoginPage.js
│   └── OrangeHRM_AdminPage.js
│
├── tests/                      # Test files
│   ├── AddNewUser.spec.js
│   ├── SearchUser.spec.js
│   ├── EditUser.spec.js
│   ├── ValidateUpdatedUser.spec.js
│   └── DeleteUser.spec.js
│
├── utility/                    # Shared utility files
│   ├── data.js                 # Test data
│   └── login_setup.js          # Reusable login function
│
├── playwright.config.js        # Playwright test runner configuration
├── package.json                # Project metadata and dependencies                

```

---

## 🛠 Setup Instructions

### Prerequisites
- Node.js: **v18.18.0**
- npm: **v9.8.1**

### Project Initialization
This project was initialized using:

```bash
npm init playwright@latest
```

This command bootstraps the Playwright framework with helpful defaults, config files, and example test structure.

### Steps

1. **Install Dependencies**

```bash
npm install
```

2. **Install Playwright Browsers**

```bash
npx playwright install
```

---

## ▶️ Running Tests

> ⚠️ **Test Order Matters!**  
> Do **not** run all tests at once using `npx playwright test` as they are dependent.  
> Instead, execute them **one by one** in the recommended order below.

### Recommended Order:

```bash
npx playwright test tests/AddNewUser.spec.js
npx playwright test tests/SearchUser.spec.js
npx playwright test tests/EditUser.spec.js
npx playwright test tests/ValidateUpdatedUser.spec.js
npx playwright test tests/DeleteUser.spec.js
```

### Optional Commands

- Run tests in a visible browser (headed mode):

```bash
npx playwright test tests/AddUser.spec.js --headed
```

- Run tests using Chromium:

```bash
npx playwright test tests/AddUser.spec.js --project=chromium
```

---

## ✅ Features Automated

- Login to OrangeHRM
- Navigate to the Admin Module
- Add a New User
- Search the Newly Created User
- Edit the User Details
- Validate Updated User Details
- Delete the User

---

## 🥪 Playwright Version

- **@playwright/test**: `^1.52.0`
- **Node.js**: `v18.18.0`
- **npm**: `v9.8.1`

---


## 📂 Sample Data Configuration (`data.js`)

```js
exports.data = {
  newUser: {
    role: 'Admin',
    employeeName: 'Paul Collings',
    status: 'Enabled',
    username: 'testuser123',
    password: 'Test@1234'
  },
  updatedUser: {
    username: 'updateduser123'
  }
};
```
---

For any issues or contributions, feel free to raise a pull request or issue on the repository.
