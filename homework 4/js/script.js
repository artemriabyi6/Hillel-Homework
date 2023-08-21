function userInfo() {
    let userAge = prompt('Ваш вік')
    let userName = prompt('Ваше імя') 
    let userCity = prompt('Ваше місто')
    let userFavSport = prompt('Ваш улюблений вид спорту')

   


    let message = 'ваш вік ' + userAge + ', '

    let nonMessage = 'Шкода, що ви не заповнили всі поля'

    if(userCity === 'Київ' || userCity === 'Лондон' || userCity === 'Вашингтон'){
        let country;

        switch(userCity) {
            case 'Київ':
            country = 'ти зі столиці України'
            break;
            case 'Лондон':
            country = 'ти зі столиці Англії'
            break;
            case 'Вашингтон':
            country = 'ти зі столиці США'
            break;
            }
            message += country + ',';

    } else {
        message += ' Ви з міста ' + userCity  + ','
    }



    if(userAge === null || userAge === '' || userName === null || userName === '' || userCity === null || userCity === '' || userFavSport === null || userFavSport === '') {
        alert(nonMessage)
    } else {
        message += ' Вас звуть ' + userName + ','
       
    }

    if(userFavSport === 'футбол' || userFavSport === 'баскетбол' || userFavSport === 'бокс') {
        let star;

        switch(userFavSport) {
            case 'футбол' :
            star = 'Ліонель Мессі';
            break;
            case 'баскетбол' :
            star = 'Ліброн Джеймс';
            break;
            case 'бокс' :
            star = 'Олександр Усик';
            break;
        }
        message += ' Хочеш бути як ' + star + '?'
        alert(message)
        
    } else {
        message += 'ваш улюблений вид спорту ' + userFavSport
        alert(message)
    }
}

userInfo()