import {test,expect} from '@playwright/test'
import { Orange_AdminPage } from '../pages/OrangeHRM_AdminPage'
import {login_setup} from '../utility/login_setup'
import {data} from '../utility/data'



test('Delete User By UserName',async({page})=>{
    const adminpage=new Orange_AdminPage(page)
    await login_setup(page)
    await adminpage.searchUserByUserName(data.updatedUser.username)
    await adminpage.deleteUser(data.updatedUser.username)
    await expect(page.locator("//span[normalize-space()='No Records Found']")).toBeVisible()
    //await page.waitForTimeout(5000)

})
