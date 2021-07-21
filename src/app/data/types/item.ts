export class Item {

    get profile(): URL {
        return this.pictures[0];
    }

    constructor(
        readonly ownerId: number,
        readonly itemId: number,
        readonly categoryId: {
            main: number,
            minor: number
        },
        readonly pictures: readonly URL[],
        readonly location: string,
        readonly price: number
    ) { }
}
