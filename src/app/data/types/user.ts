export class User {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly email: string,
        readonly itemIdList: number[],
    ) { }

    addItem(id: number): void {
        this.itemIdList.push(id);
    }

    removeItem(id: number): void {
        let index = this.itemIdList.indexOf(id);
        this.itemIdList.splice(index, 1);
    }
}
