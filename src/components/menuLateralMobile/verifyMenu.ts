export default class VerifyMenu {

    static instance : VerifyMenu

    private menuOpen: boolean = false;

    private constructor(){
       
    }

    public static get getInstance(): VerifyMenu{
        if(!VerifyMenu.instance){
            VerifyMenu.instance = new VerifyMenu()
        }
        return VerifyMenu.instance
    }

    getStateMenu() : boolean{
        return this.menuOpen;
    }

    setStateMenu(){
        console.log("Mudou o estado")
        this.menuOpen = true;
    }
}