
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3001/')
})

afterAll(async () => {
    driver.quit()
})

test('draw cards button draws cards', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
})
test('draw button displays the div with the id "choices"', async () => {
    await driver.findElement(By.id('choices'))
    await driver.sleep(3000)
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})