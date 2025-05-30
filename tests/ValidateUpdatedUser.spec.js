import {test,expect} from '@playwright/test'
import { OrangeHRM_LoginPage } from '../pages/OrangeHRM_LoginPage'
import { Orange_AdminPage} from '../pages/OrangeHRM_AdminPage'
import {login_setup} from '../utility/login_setup'
import {data} from '../utility/data'

test.beforeEach(async({page})=>{
    await login_setup(page);
})

test('Validate Updated User By UserName',async({page})=>{
    const adminpage=new Orange_AdminPage(page)
    await adminpage.searchUserByUserName(data.updatedUser.username)
    //await expect(page.locator("//span[normalize-space()='(1) Record Found']")).toBeVisible()
    const userRow = page.locator(`//div[@role='row' and .//div[contains(text(), "${data.updatedUser.username}")]]`)
    await expect(userRow).toBeVisible();

})