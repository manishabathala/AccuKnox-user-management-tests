exports.Orange_AdminPage=class Orange_AdminPage{
    constructor(page){
        this.page=page
        this.admin=page.locator("//li[1]//a[1]//span[1]")
        this.adduser=page.locator("//button[normalize-space()='Add']")
        this.userRole=page.locator("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-2 orangehrm-full-width-grid']/div[1]/div[1]/div[2]/div[1]/div[1]")
        this.userRoles = page.locator("//label[text()='User Role']/parent::div/following-sibling::div//div[contains(@class, 'oxd-select-text')]")
        this.status_opts=page.locator("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-2 orangehrm-full-width-grid']/div[3]/div[1]/div[2]/div[1]/div[1]")
        this.status_options = page.locator("//label[text()='Status']/parent::div/following-sibling::div//div[contains(@class,'oxd-select-text')]")
        this.employeeNameInput = page.locator("input[placeholder='Type for hints...']");
        this.usernameInput = page.locator("//div[@class='oxd-form-row']//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
        this.passwordInput = page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters user-password-cell']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']")
        this.confirmPasswordInput = page.locator("//div[@class='oxd-grid-item oxd-grid-item--gutters']//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@type='password']")
        this.saveBtn = page.locator("button:has-text('Save')")
        this.searchUsernameInput = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']")
        this.searchBtn = page.locator("button:has-text('Search')")
        this.confirmDeleteBtn = page.locator("button:has-text('Yes, Delete')")

    }
    async navigateToAdmin(){
        await this.admin.click()

    }

    async addNewUser(role,employeeName,status,username,password){
        await this.adduser.click()
        await this.userRole.click()
        const options_list = await this.page.locator("div[role='listbox'] span").allTextContents()
        for (let i = 0; i < options_list.length; i++) {
            if (options_list[i].trim() === role) {
                await this.page.locator(`div[role='listbox'] span`).nth(i).click()
                break
            }
        }
        await this.employeeNameInput.click()
        await this.employeeNameInput.fill(employeeName)
        const options = this.page.locator("div[role='listbox'] span")
        await options.first().waitFor({ state: 'visible', timeout: 5000 })
        const optionTexts = await options.allTextContents()
        for (let i = 0; i < optionTexts.length; i++) {
            if (optionTexts[i].trim() === employeeName) {
                await options.nth(i).click()
                break
            }
        }
        await this.status_opts.click()
        const statusOptions = await this.page.locator("div[role='listbox'] span").allTextContents()
        for (let i = 0; i < statusOptions.length; i++) {
            if (statusOptions[i].trim() === status) {
                await this.page.locator("div[role='listbox'] span").nth(i).click()
                break
            }
        }


        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.confirmPasswordInput.fill(password);
        await this.saveBtn.click()

    }

    async searchUserByUserName(username){
        await this.searchUsernameInput.fill(username)
        await this.searchBtn.click()
    }

    async editUserByUserName(username,updatedusername){
        const row = this.page.locator(`//div[@role='row' and .//div[contains(text(), "${username}")]]`)
        const editBtn = row.locator('//i[@class="oxd-icon bi-pencil-fill"]')
        await editBtn.click()
        await this.page.waitForTimeout(2000)
        await this.usernameInput.fill(updatedusername)
        await this.saveBtn.click()
    }

    async deleteUser(username){
        const row = this.page.locator(`//div[@role='row' and .//div[contains(text(), "${username}")]]`)
        const deleteBtn = row.locator('.oxd-icon.bi-trash')
        await deleteBtn.click()
        await this.confirmDeleteBtn.click()
    }


}