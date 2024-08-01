import { Item } from "./Item";

function knapsack(objects: Item[], capacity: number): number {
    const n = objects.length;
    const sac: number[][] = [];

    for (let i = 0; i <= n; i++) {
        sac[i] = [];
        for (let Poid = 0; Poid <= capacity; Poid++) {
            if (i == 0 || Poid == 0) {
                sac[i][Poid] = 0;
            } else if (objects[i - 1].Poids <= Poid) {
                sac[i][Poid] = Math.max(objects[i - 1].Valeur + sac[i - 1][Poid - objects[i - 1].Poids], sac[i - 1][Poid]);
            } else {
                sac[i][Poid] = sac[i - 1][Poid];
            }
        }
    }
    return sac[n][capacity];
}
const objects: Item[] = [
    new Item(2, 6),
    new Item(2, 10),
    new Item(3, 12),
];
const capacity = 5;
console.log("La valeur maximale du sac à dos est :", knapsack(objects, capacity));