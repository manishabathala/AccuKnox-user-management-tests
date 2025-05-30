exports.OrangeHRM_LoginPage=class OrangeHRM_LoginPage{
    constructor(page){
        this.page=page
        this.username_Input=page.locator("//input[@placeholder='Username']")
        this.password_Input=page.locator("//input[@placeholder='Password']")
        this.login_Btn=page.locator("//button[normalize-space()='Login']")

    }
    async login(username,password){
        await this.username_Input.fill(username)
        await this.password_Input.fill(password)
        await this.login_Btn.click()
        
    }
}