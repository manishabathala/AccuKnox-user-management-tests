import {test,expect} from '@playwright/test'
import { OrangeHRM_LoginPage } from '../pages/OrangeHRM_LoginPage'
import { Orange_AdminPage } from '../pages/OrangeHRM_AdminPage'
import {data} from './data'

async function login_setup(page){
    const loginpage=new OrangeHRM_LoginPage(page)
    const adminpage=new Orange_AdminPage(page)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.pause()
    await loginpage.login(data.admin.username,data.admin.password)
    await adminpage.navigateToAdmin()
    
}
module.exports={login_setup}