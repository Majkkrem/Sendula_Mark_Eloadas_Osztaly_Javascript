export class Eloadas {
    foglalasok = [];

    constructor(sorokSzama, helyekSzama) {
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw new Error('Invalid arguments. The number of rows and seats must be greater than 0.');
        }
        this.foglalasok = Array.from(Array(sorokSzama), () => new Array(helyekSzama))
        for (let i = 0; i < sorokSzama; i++) {
            for (let j = 0; j < helyekSzama; j++) {
                this.foglalasok[i][j] = false;
            }
        }
        console.log(this.foglalasok);
    }

    lefoglal() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    this.foglalasok[i][j] = true;
                    return true;
                }
            }
        }
        return false;
    }

    getSzabadHelyek() {
        let count = 0;
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    count++;
                }
            }
        }
        return count;
    }

    get Teli() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    Foglalt(sorSzam, helySzam) {
        if (sorSzam <= 0 || helySzam <= 0 || sorSzam > this.foglalasok.length || helySzam > this.foglalasok[0].length) {
            throw new Error('Invalid arguments. Row and seat numbers must be between 1 and the maximum number of rows/seats.');
        }
        return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
}
