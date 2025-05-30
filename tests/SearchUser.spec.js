import {test,expect} from '@playwright/test'
import {login_setup} from '../utility/login_setup'
import { Orange_AdminPage } from '../pages/OrangeHRM_AdminPage'
import {data} from '../utility/data'


test.beforeEach(async({page})=>{
    await login_setup(page);
})

test('Search User By UserName',async({page})=>{
    const adminpage=new Orange_AdminPage(page)
    await adminpage.searchUserByUserName(data.newUser.username)
    await expect(page.locator("//span[normalize-space()='(1) Record Found']")).toBeVisible()
})