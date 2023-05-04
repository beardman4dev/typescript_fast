class Gangsta {
    static totalBullets = 100

    shoot() {
        Gangsta.totalBullets--
        console.log(`Left bullets: ${Gangsta.totalBullets}`)
    }
}

class SuperGangsta extends Gangsta {
    shootMany() {
        SuperGangsta.totalBullets--;
        SuperGangsta.totalBullets--;
        console.log(`[SG] Bullets left: ${SuperGangsta.totalBullets}`);
    }
}

const g1 = new Gangsta()
const g2 = new Gangsta()

g1.shoot()
g2.shoot()

const sg = new SuperGangsta();

sg.shootMany(); // prints 98
sg.shoot();     // prints 99
