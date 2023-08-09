import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class iFramePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get outerWarning(){
        return $('#banner-accept');
    }

    public get outerParagraph(){
        return $('//p[contains(text(),"This will produce the following result −")]');
    }

    public get innerParagraph(){
        return $('//p[normalize-space()="Document content goes here..."]');
    }

    public get outerFrame(){
        return $('//iframe[@class]');
    }

    public async validateInnerParagraph(){
        await this.outerWarning.click();
        await expect(this.outerParagraph).toHaveTextContaining('following result')
        await driver.switchToFrame(this.outerFrame);
        await expect(this.innerParagraph).toHaveTextContaining('Document');
        //await driver.switchToFrame(30);
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open2 () {
        return super.open2('html_iframes');
    }
}

export default new iFramePage();