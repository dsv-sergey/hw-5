function profile() {
    retiredAgeMale = prompt('Введите пенсионный возраст мужчин');
    retiredAgeFemale = prompt('Введите пенсионный возраст женщин');
    var family = prompt('Введите вашу фамилию'),
        name = prompt('Введите ваше имя'),
        nameTwo = prompt('Введите ваше отчество'),
        age = prompt('Введите ваш возраст'),
        gender = confirm('Ваш пол - мужской? Если Мужской - ок') ? 'мужской' : 'женский',
        retired = ((gender == 'мужской') && (age>=retiredAgeMale) || (gender == 'женский') && (age>=retiredAgeFemale)) ? 'Вы пенсионер' : 'Пенсию надо заработать',
        profile = ('ваше ФИО: ' + family + ' ' + name + ' ' + nameTwo + '\nваш возраст в годах: ' + age + '\nваш возраст в днях: ' + age*365 + '\nпол: ' + gender + '\n' + retired);
    alert(profile);
};
profile();