import {test,expect} from '@playwright/test'
import {OrangeHRM_LoginPage} from '../pages/OrangeHRM_LoginPage'
import { Orange_AdminPage } from '../pages/OrangeHRM_AdminPage'
import {login_setup} from '../utility/login_setup'
import {data} from '../utility/data'


test.beforeEach(async({page})=>{
    await login_setup(page);
})

test('Add New User',async({page})=>{
    const adminpage=new Orange_AdminPage(page)
    await adminpage.addNewUser(data.newUser.role,data.newUser.employeeName,data.newUser.status,data.newUser.username,data.newUser.password)
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    //await page.waitForTimeout(5000)

})