import { ProfileModel } from './Securite';
export class MenuModel{
    constructor(public id: number,
        public title: string,
        public routerLink: string,
        public href: string,
        public icon: string,
        public target: string,
        public hasSubMenu: boolean,
        public parentId: number) { }
}

export class userMenuModel{
    id:number;
    menu: MenuModel[];
    profile: ProfileModel;
}