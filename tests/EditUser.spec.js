import {test,expect} from '@playwright/test'
import {login_setup} from '../utility/login_setup'
import { Orange_AdminPage } from '../pages/OrangeHRM_AdminPage'
import {data} from '../utility/data'




test('Edit UserName of User',async({page})=>{
    const adminpage=new Orange_AdminPage(page)
    await login_setup(page)
    await adminpage.searchUserByUserName(data.newUser.username)
    await adminpage.editUserByUserName(data.newUser.username,data.updatedUser.username)
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    //await page.waitForTimeout(5000)
})
