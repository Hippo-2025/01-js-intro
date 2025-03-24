const Mokinys1 = ['Antanas', 5,6,5,6,5];
const Mokinys2 = ['Jonas', 3,3,3,3,5];
const Mokinys3 = ['Maria', 1,1,1,1,1];

function MokinioVidurkis (mok)
{
    let vidurkis = (mok[1]+mok[2]+mok[3]+mok[4]+mok[5])/5;
    if(vidurkis >=3.5)
    {
        console.log(mok[0] + "Islaike, Jo vidurkis:" + vidurkis);

    }
    else
    {
        let NaujasVidurkis = ((vidurkis*5)+10)/6;
        console.log(mok[0], "neislaike. Jo dabartinis vidurkis:" + vidurkis);
        if(NaujasVidurkis >= 3.5)
        {
            console.log(mok[0] + "islaikitu kursa jei gautu vien desimtuka");
        }
    }
}
    MokinioVidurkis(Mokinys1)
    MokinioVidurkis(Mokinys2)
    MokinioVidurkis(Mokinys3)

