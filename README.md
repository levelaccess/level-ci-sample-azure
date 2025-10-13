# Sample Project with Level CI Accessibility Testing  

This project demonstrates how to integrate **Level CI accessibility analysis** into a web application using  **Playwright**, and **Azure DevOps**.  

---

## 🔍 Adding Level CI Accessibility Analysis  

1. **Configure the `.npmrc` file**

   - Refer to the setup instructions in Level CI.  

3. **Install the Level CI playwright package**

```bash
npm install --save-dev @level-ci/a11y-playwright
```

5. **Update the playwright support file**

   - Include Level CI setup (refer to setup steps).  

7. **Add Level CI analysis calls**

   - Add `levelAnalyze()` in your Cypress tests where accessibility analysis is required.  

9. **Configure optional settings**
    
   - Add TypeScript configuration if needed.
   - Update `.gitignore` to exclude reports.  

11. **Verify local setup**
    
      - Run your e2e tests locally.  
      - Confirm reports appear in the `level-ci-reports` directory.  
      - Ensure the number of reports matches the number of analysis calls.  

⚠️ **Important:** Ensure the Level CI token is correctly configured for reports to be generated.  

---

## 🔗 Azure Workflow Integration  

## 1. Install Level CI Extension

1. Go to the [Level CI extension in the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=LevelAccess.LevelCI).
2. Click **Get it free**.
3. Select your Azure DevOps organization from the list.
4. Click the **Install** button.


---

## 2. Add a New Level CI Service Connection

In your Azure DevOps project:

1. Navigate to **Project Settings → Service connections**.  
2. Click **New service connection**.  
3. Choose **Level CI** as the service connection type.  
4. Fill in the required fields:
   - **Project Token**: `<your_project_token>`
   - **Project Name**: `level-ci-azure-integration`
   - **Organization Slug**: `<your_organization_slug>`
   - **Service connection name**: `Level CI`
5. Click **Verify** to ensure the connection works.  
   - You should see: `Verification Succeeded`.

---

## 3. Install @level-ci/cli NPM Package

Install the CLI package in the root of your website project.  
This provides the command line tool and TypeScript types for configuration.

```bash
npm install --save-dev @level-ci/cli
```

---

## 🚀 Setting up the Project  

Install dependencies:  
```bash
npm install
```

Run the development server:  
```bash
npm run dev
```

App URL: `http://localhost:1342/`  

Open the app in the browser at the provided local URL.  

---

## ✅ End-to-End Tests  

### Playwright Tests  
Install browser dependencies:  
```bash
npx playwright install chromium
```

Run the Playwright test suite:  
```bash
npm run test:playwright
```


## 📚 Resources  

**Demo site pages**:  
- Main page  
- Billing page  
- Profile page  
- Tables page  
- Sign-up page  


**Documentation**: See the full details in the [docs/](https://docs.ci.levelaccess.net/get-started/connect-repository/azure) directory.

---
