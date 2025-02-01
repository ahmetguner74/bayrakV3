// Bayrak dosyalarının yolu
const flagsPath = './flags/';

// Sadece mevcut bayrakları içeren countryData objesi
const countryData = {
    'ad': 'Andorra',
    'ae': 'Birleşik Arap Emirlikleri',
    'af': 'Afganistan',
    'ag': 'Antigua ve Barbuda',
    'al': 'Arnavutluk',
    'am': 'Ermenistan',
    'ao': 'Angola',
    'ar': 'Arjantin',
    'at': 'Avusturya',
    'au': 'Avustralya',
    'az': 'Azerbaycan',
    'ba': 'Bosna Hersek',
    'bb': 'Barbados',
    'bd': 'Bangladeş',
    'be': 'Belçika',
    'bf': 'Burkina Faso',
    'bg': 'Bulgaristan',
    'bh': 'Bahreyn',
    'bi': 'Burundi',
    'bj': 'Benin',
    'bn': 'Brunei',
    'bo': 'Bolivya',
    'br': 'Brezilya',
    'bs': 'Bahamalar',
    'bt': 'Butan',
    'bw': 'Botsvana',
    'by': 'Belarus',
    'bz': 'Belize',
    'ca': 'Kanada',
    'cd': 'Kongo DC',
    'cf': 'Orta Afrika Cumhuriyeti',
    'cg': 'Kongo',
    'ch': 'İsviçre',
    'ci': 'Fildişi Sahili',
    'cl': 'Şili',
    'cm': 'Kamerun',
    'cn': 'Çin',
    'co': 'Kolombiya',
    'cr': 'Kosta Rika',
    'cu': 'Küba',
    'cv': 'Cabo Verde',
    'cy': 'Kıbrıs',
    'cz': 'Çekya',
    'de': 'Almanya',
    'dj': 'Cibuti',
    'dk': 'Danimarka',
    'dm': 'Dominika',
    'do': 'Dominik Cumhuriyeti',
    'dz': 'Cezayir',
    'ec': 'Ekvador',
    'ee': 'Estonya',
    'eg': 'Mısır',
    'er': 'Eritre',
    'es': 'İspanya',
    'et': 'Etiyopya',
    'fi': 'Finlandiya',
    'fj': 'Fiji',
    'fm': 'Mikronezya',
    'fr': 'Fransa',
    'ga': 'Gabon',
    'gb': 'Birleşik Krallık',
    'gd': 'Grenada',
    'ge': 'Gürcistan',
    'gh': 'Gana',
    'gm': 'Gambiya',
    'gn': 'Gine',
    'gq': 'Ekvator Ginesi',
    'gr': 'Yunanistan',
    'gt': 'Guatemala',
    'gw': 'Gine-Bissau',
    'gy': 'Guyana',
    'hn': 'Honduras',
    'hr': 'Hırvatistan',
    'ht': 'Haiti',
    'hu': 'Macaristan',
    'id': 'Endonezya',
    'ie': 'İrlanda',
    'il': 'İsrail',
    'in': 'Hindistan',
    'iq': 'Irak',
    'ir': 'İran',
    'is': 'İzlanda',
    'it': 'İtalya',
    'jm': 'Jamaika',
    'jo': 'Ürdün',
    'jp': 'Japonya',
    'ke': 'Kenya',
    'kg': 'Kırgızistan',
    'kh': 'Kamboçya',
    'ki': 'Kiribati',
    'km': 'Komorlar',
    'kn': 'Saint Kitts ve Nevis',
    'kp': 'Kuzey Kore',
    'kr': 'Güney Kore',
    'kw': 'Kuveyt',
    'kz': 'Kazakistan',
    'la': 'Laos',
    'lb': 'Lübnan',
    'lc': 'Saint Lucia',
    'li': 'Lihtenştayn',
    'lk': 'Sri Lanka',
    'lr': 'Liberya',
    'ls': 'Lesotho',
    'lt': 'Litvanya',
    'lu': 'Lüksemburg',
    'lv': 'Letonya',
    'ly': 'Libya',
    'ma': 'Fas',
    'mc': 'Monako',
    'md': 'Moldova',
    'me': 'Karadağ',
    'mg': 'Madagaskar',
    'mh': 'Marshall Adaları',
    'mk': 'Kuzey Makedonya',
    'ml': 'Mali',
    'mm': 'Myanmar',
    'mn': 'Moğolistan',
    'mr': 'Moritanya',
    'mt': 'Malta',
    'mu': 'Mauritius',
    'mv': 'Maldivler',
    'mw': 'Malavi',
    'mx': 'Meksika',
    'my': 'Malezya',
    'mz': 'Mozambik',
    'na': 'Namibya',
    'ne': 'Nijer',
    'ng': 'Nijerya',
    'ni': 'Nikaragua',
    'nl': 'Hollanda',
    'no': 'Norveç',
    'np': 'Nepal',
    'nr': 'Nauru',
    'nz': 'Yeni Zelanda',
    'om': 'Umman',
    'pa': 'Panama',
    'pe': 'Peru',
    'pg': 'Papua Yeni Gine',
    'ph': 'Filipinler',
    'pk': 'Pakistan',
    'pl': 'Polonya',
    'pt': 'Portekiz',
    'pw': 'Palau',
    'py': 'Paraguay',
    'qa': 'Katar',
    'ro': 'Romanya',
    'rs': 'Sırbistan',
    'ru': 'Rusya',
    'rw': 'Ruanda',
    'sa': 'Suudi Arabistan',
    'sb': 'Solomon Adaları',
    'sc': 'Seyşeller',
    'sd': 'Sudan',
    'se': 'İsveç',
    'sg': 'Singapur',
    'si': 'Slovenya',
    'sk': 'Slovakya',
    'sl': 'Sierra Leone',
    'sm': 'San Marino',
    'sn': 'Senegal',
    'so': 'Somali',
    'sr': 'Surinam',
    'ss': 'Güney Sudan',
    'st': 'Sao Tome ve Principe',
    'sv': 'El Salvador',
    'sy': 'Suriye',
    'sz': 'Esvatini',
    'td': 'Çad',
    'tg': 'Togo',
    'th': 'Tayland',
    'tj': 'Tacikistan',
    'tl': 'Doğu Timor',
    'tm': 'Türkmenistan',
    'tn': 'Tunus',
    'to': 'Tonga',
    'tr': 'Türkiye',
    'tt': 'Trinidad ve Tobago',
    'tv': 'Tuvalu',
    'tz': 'Tanzanya',
    'ua': 'Ukrayna',
    'ug': 'Uganda',
    'us': 'Amerika Birleşik Devletleri',
    'uy': 'Uruguay',
    'uz': 'Özbekistan',
    'va': 'Vatikan',
    'vc': 'Saint Vincent ve Grenadinler',
    've': 'Venezuela',
    'vn': 'Vietnam',
    'vu': 'Vanuatu',
    'ws': 'Samoa',
    'ye': 'Yemen',
    'za': 'Güney Afrika',
    'zm': 'Zambiya',
    'zw': 'Zimbabve'
};

// Yeni eklenecek ülkeler (eksik olanlar)
const additionalCountries = {
    'aq': 'Antarktika',
    'bl': 'Saint Barthélemy',
    'bv': 'Bouvet Adası',
    'eu': 'Avrupa Birliği',
    'gb-eng': 'İngiltere',
    'gb-nir': 'Kuzey İrlanda',
    'gb-sct': 'İskoçya',
    'gb-wls': 'Galler',
    'gf': 'Fransız Guyanası',
    'gg': 'Guernsey',
    'gp': 'Guadeloupe',
    'gs': 'Güney Georgia',
    'hk': 'Hong Kong',
    'hm': 'Heard ve McDonald Adaları',
    'im': 'Man Adası',
    'io': 'İngiliz Hint Okyanusu Toprakları',
    'je': 'Jersey',
    'mf': 'Saint Martin',
    'mo': 'Makao',
    'mp': 'Kuzey Mariana Adaları',
    'mq': 'Martinik',
    'ms': 'Montserrat',
    're': 'Réunion',
    'sh': 'Saint Helena',
    'sj': 'Svalbard ve Jan Mayen',
    'sx': 'Sint Maarten',
    'tf': 'Fransız Güney Toprakları',
    'tw': 'Tayvan',
    'um': 'ABD Küçük Dış Adaları',
    'vg': 'İngiliz Virgin Adaları',
    'vi': 'ABD Virgin Adaları',
    'wf': 'Wallis ve Futuna',
    'xk': 'Kosova',
    'yt': 'Mayotte'
};

// Ek ülkeler
const moreCountries = {
    'as': 'Amerikan Samoası',
    'aw': 'Aruba',
    'ai': 'Anguilla',
    'ax': 'Åland Adaları',
    'bm': 'Bermuda',
    'bq': 'Karayip Hollandası',
    'cc': 'Cocos Adaları',
    'ck': 'Cook Adaları',
    'cw': 'Curaçao',
    'cx': 'Christmas Adası',
    'eh': 'Batı Sahra',
    'fk': 'Falkland Adaları',
    'fo': 'Faroe Adaları',
    'gi': 'Cebelitarık',
    'gl': 'Grönland',
    'gu': 'Guam',
    'ky': 'Cayman Adaları',
    'nc': 'Yeni Kaledonya',
    'nf': 'Norfolk Adası',
    'nu': 'Niue',
    'pf': 'Fransız Polinezyası',
    'pm': 'Saint Pierre ve Miquelon',
    'pn': 'Pitcairn Adaları',
    'pr': 'Porto Riko',
    'tc': 'Turks ve Caicos Adaları',
    'tk': 'Tokelau',
    'ps': 'Filistin'
};

// Tüm yeni ülkeleri countryData'ya ekleyelim
Object.assign(countryData, additionalCountries);
Object.assign(countryData, moreCountries);

// Ülke kodlarını bir diziye çevirelim
const countryCodes = Object.keys(countryData);

// Oyun değişkenlerini güncelleyelim
let score = 0;
let currentCorrectAnswer = '';
let currentDifficulty = 'medium'; // Varsayılan zorluk orta olsun
let currentContinent = 'all';
let currentQuestion = 1;
let timer = null;
let timeLeft = 15;
const TOTAL_QUESTIONS = 10;

// Kıta tanımlamaları
const continents = {
    europe: ['al', 'ad', 'at', 'by', 'be', 'ba', 'bg', 'hr', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'is', 'ie', 'it', 'lv', 'li', 'lt', 'lu', 'mt', 'md', 'mc', 'me', 'nl', 'mk', 'no', 'pl', 'pt', 'ro', 'ru', 'sm', 'rs', 'sk', 'si', 'es', 'se', 'ch', 'ua', 'gb', 'va'],
    asia: ['af', 'am', 'az', 'bh', 'bd', 'bt', 'bn', 'kh', 'cn', 'cy', 'ge', 'in', 'id', 'ir', 'iq', 'il', 'jp', 'jo', 'kz', 'kw', 'kg', 'la', 'lb', 'my', 'mv', 'mn', 'mm', 'np', 'om', 'pk', 'ph', 'qa', 'sa', 'sg', 'kr', 'lk', 'sy', 'tw', 'tj', 'th', 'tr', 'tm', 'ae', 'uz', 'vn', 'ye'],
    africa: ['dz', 'ao', 'bj', 'bw', 'bf', 'bi', 'cm', 'cv', 'cf', 'td', 'km', 'cd', 'cg', 'ci', 'dj', 'eg', 'gq', 'er', 'et', 'ga', 'gm', 'gh', 'gn', 'gw', 'ke', 'ls', 'lr', 'ly', 'mg', 'mw', 'ml', 'mr', 'mu', 'ma', 'mz', 'na', 'ne', 'ng', 'rw', 'st', 'sn', 'sc', 'sl', 'so', 'za', 'ss', 'sd', 'sz', 'tz', 'tg', 'tn', 'ug', 'zm', 'zw'],
    americas: ['ag', 'ar', 'bs', 'bb', 'bz', 'bo', 'br', 'ca', 'cl', 'co', 'cr', 'cu', 'dm', 'do', 'ec', 'sv', 'gd', 'gt', 'gy', 'ht', 'hn', 'jm', 'mx', 'ni', 'pa', 'py', 'pe', 'kn', 'lc', 'vc', 'sr', 'tt', 'us', 'uy', 've'],
    oceania: ['au', 'fj', 'ki', 'mh', 'fm', 'nr', 'nz', 'pw', 'pg', 'ws', 'sb', 'to', 'tv', 'vu']
};

// Ses değişkenleri
const SOUNDS = {
    correct: new Audio('sounds/correct.mp3'),
    wrong: new Audio('sounds/wrong.mp3'),
    click: new Audio('sounds/click.mp3'),
    gameOver: new Audio('sounds/game-over.mp3'),
    countdown: new Audio('sounds/countdown.mp3'),
    background: new Audio('sounds/background.mp3')
};

let SOUND_ENABLED = true;
let MUSIC_ENABLED = true;

// Ses çalma fonksiyonu
function playSound(soundName) {
    if (SOUND_ENABLED && SOUNDS[soundName]) {
        SOUNDS[soundName].currentTime = 0; // Sesi başa sar
        SOUNDS[soundName].play();
    }
}

// Müzik kontrolü
function toggleBackgroundMusic() {
    if (MUSIC_ENABLED) {
        SOUNDS.background.loop = true;
        SOUNDS.background.volume = 0.3;
        SOUNDS.background.play();
    } else {
        SOUNDS.background.pause();
        SOUNDS.background.currentTime = 0;
    }
}

// Ses ayarlarını güncelle
function updateSoundSettings() {
    if (!SOUND_ENABLED) {
        Object.keys(SOUNDS).forEach(key => {
            if (key !== 'background') {
                SOUNDS[key].muted = true;
            }
        });
    } else {
        Object.keys(SOUNDS).forEach(key => {
            if (key !== 'background') {
                SOUNDS[key].muted = false;
            }
        });
    }
    
    SOUNDS.background.muted = !MUSIC_ENABLED;
}

// Rastgele ülke seçme fonksiyonunu güncelle
function getRandomCountry() {
    let availableCountries;
    if (currentContinent === 'all') {
        availableCountries = countryCodes;
    } else {
        availableCountries = continents[currentContinent];
    }
    return availableCountries[Math.floor(Math.random() * availableCountries.length)];
}

// Rastgele 4 seçenek oluşturma (1 doğru, 3 yanlış)
function generateOptions(correctAnswer) {
    let optionCount;
    switch(currentDifficulty) {
        case 'easy':
            optionCount = 3; // 3 seçenek
            break;
        case 'medium':
            optionCount = 4; // 4 seçenek
            break;
        case 'hard':
            optionCount = 6; // 6 seçenek
            break;
        default:
            optionCount = 4;
    }

    let options = [correctAnswer];
    while (options.length < optionCount) {
        const randomCountry = getRandomCountry();
        if (!options.includes(randomCountry)) {
            options.push(randomCountry);
        }
    }
    return shuffleArray(options);
}

// Diziyi karıştırma fonksiyonu
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Yeni soru yükleme
function loadNewQuestion() {
    if (currentQuestion > TOTAL_QUESTIONS) {
        endGame();
        return;
    }
    
    document.getElementById('question-counter').textContent = `${currentQuestion}/${TOTAL_QUESTIONS}`;
    startTimer();
    
    currentCorrectAnswer = getRandomCountry();
    const flagImage = document.getElementById('flag-image');
    flagImage.src = `${flagsPath}${currentCorrectAnswer}.svg`;

    const options = generateOptions(currentCorrectAnswer);
    const optionsContainer = document.getElementById('options-container');
    
    // Mevcut seçenekleri temizle
    optionsContainer.innerHTML = '';
    
    // Zorluk seviyesine göre grid düzenini ayarla
    switch(currentDifficulty) {
        case 'easy':
            optionsContainer.style.gridTemplateColumns = 'repeat(1, 1fr)'; // Tek sütun
            break;
        case 'medium':
            optionsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)'; // İki sütun
            break;
        case 'hard':
            optionsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Üç sütun
            break;
    }
    
    // Yeni seçenekleri ekle
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = countryData[option];
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Bildirim gösterme fonksiyonu
function showNotification(message, isCorrect) {
    let delay;
    switch(currentDifficulty) {
        case 'easy':
            delay = 3000; // 3 saniye
            break;
        case 'medium':
            delay = 2000; // 2 saniye
            break;
        case 'hard':
            delay = 1000; // 1 saniye
            break;
        default:
            delay = 2000;
    }

    const notification = document.getElementById('notification');
    const options = document.querySelectorAll('.option');
    
    notification.textContent = message;
    notification.className = `notification ${isCorrect ? 'correct' : 'wrong'} show`;
    
    options.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        notification.className = 'notification';
        loadNewQuestion();
        options.forEach(button => {
            button.disabled = false;
            button.className = 'option';
        });
    }, delay);
}

// Cevap kontrolü
function checkAnswer(selectedAnswer) {
    clearInterval(timer);
    document.getElementById('timer').classList.remove('warning', 'danger');
    
    const options = document.querySelectorAll('.option');
    const correctButton = Array.from(options).find(
        button => button.textContent === countryData[currentCorrectAnswer]
    );
    const selectedButton = Array.from(options).find(
        button => button.textContent === countryData[selectedAnswer]
    );

    if (selectedAnswer === currentCorrectAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        selectedButton.className = 'option correct';
        playSound('correct');
        showNotification('Doğru!', true);
    } else {
        selectedButton.className = 'option wrong';
        correctButton.className = 'option correct';
        playSound('wrong');
        showNotification(`Yanlış! Doğru cevap: ${countryData[currentCorrectAnswer]}`, false);
    }
    
    currentQuestion++;
}

// Bayrak kontrolü fonksiyonunu güncelleyelim
function checkFlags() {
    let missingFlags = [];
    let existingFlags = [];
    let allFiles = [];
    
    // Tüm ülke kodlarını kontrol et
    countryCodes.forEach(code => {
        const img = new Image();
        img.src = `${flagsPath}${code}.svg`;
        
        img.onerror = () => {
            missingFlags.push({
                code: code,
                name: countryData[code]
            });
            console.log(`Eksik bayrak: ${code} - ${countryData[code]}`);
        };
        
        img.onload = () => {
            existingFlags.push(code);
            console.log(`Yüklenen bayrak: ${code} - ${countryData[code]}`);
        };
    });

    setTimeout(() => {
        console.log('Mevcut bayrak sayısı:', existingFlags.length);
        console.log('Eksik bayrak sayısı:', missingFlags.length);
        console.log('Toplam ülke sayısı:', countryCodes.length);
        
        // Eksik bayrakları alfabetik sırala
        missingFlags.sort((a, b) => a.code.localeCompare(b.code));
        console.log('Eksik bayraklar:', missingFlags);
    }, 2000);
}

// Oyun başlatılmadan önce bayrakları kontrol et
window.onload = () => {
    checkFlags();
    loadNewQuestion();
};

// Ekran geçişleri için fonksiyonlar
function startGame() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('difficulty-popup').classList.remove('hidden');
}

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // Seçili butonu vurgula
    const buttons = document.querySelectorAll('.difficulty-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.classList.contains(difficulty)) {
            btn.classList.add('selected');
        }
    });
}

function selectContinent(continent) {
    currentContinent = continent;
    
    // Seçili butonu vurgula
    const buttons = document.querySelectorAll('.continent-btn');
    buttons.forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent.toLowerCase().includes(continent)) {
            btn.classList.add('selected');
        }
    });
    
    // Oyunu hemen başlat
    startGameWithContinent();
}

function startGameWithContinent() {
    // Önce oyun ekranını göster
    document.getElementById('game-screen').classList.remove('hidden');
    
    // Sonra popup'ı gizle
    document.getElementById('difficulty-popup').classList.add('hidden');
    
    // Oyunu başlat
    loadNewQuestion();
}

function showMainMenu() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
    // Oyunu sıfırla
    score = 0;
    document.getElementById('score').textContent = '0';
    currentContinent = 'all'; // Kıta seçimini sıfırla
    
    // Seçili kıta butonunu temizle
    document.querySelectorAll('.continent-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
}

function showHighScores() {
    // Yüksek skorlar ekranı için (şimdilik boş)
    alert('Yüksek skorlar yakında eklenecek!');
}

function showInstructions() {
    document.getElementById('settings-popup').classList.remove('hidden');
}

function closeSettings() {
    document.getElementById('settings-popup').classList.add('hidden');
}

function switchTab(tabName) {
    // Tüm tabları ve içerikleri gizle
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Seçili tabı ve içeriğini göster
    document.querySelector(`.tab-btn[onclick*="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 5) {
            document.getElementById('timer').classList.add('warning');
        }
        if (timeLeft <= 3) {
            document.getElementById('timer').classList.add('danger');
            playSound('countdown');
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            playSound('wrong');
            // Süre dolduğunda otomatik yanlış cevap
            handleTimeOut();
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timer').textContent = timeLeft;
}

function handleTimeOut() {
    const options = document.querySelectorAll('.option');
    const correctButton = Array.from(options).find(
        button => button.textContent === countryData[currentCorrectAnswer]
    );
    
    correctButton.className = 'option correct';
    playSound('wrong');
    showNotification('Süre doldu! Doğru cevap: ' + countryData[currentCorrectAnswer], false);
}

function endGame() {
    clearInterval(timer);
    
    // Oyun ekranını gizle
    document.getElementById('game-screen').classList.add('hidden');
    
    // Skor mesajını hazırla
    const scoreMessage = getScoreMessage(score);
    
    // Oyun sonu popup'ını hazırla
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = TOTAL_QUESTIONS;
    document.getElementById('score-message').textContent = scoreMessage;
    
    // Oyun sonu popup'ını göster
    document.getElementById('game-end-popup').classList.remove('hidden');
    playSound('gameOver');
}

function getScoreMessage(score) {
    const percentage = (score / TOTAL_QUESTIONS) * 100;
    if (percentage === 100) return "Mükemmel! Tüm bayrakları bildin!";
    if (percentage >= 80) return "Harika! Çok iyisin!";
    if (percentage >= 60) return "Güzel! Biraz daha pratik yapabilirsin.";
    if (percentage >= 40) return "Fena değil! Gelişme gösterebilirsin.";
    return "Daha çok çalışmalısın!";
}

function restartGame() {
    // Oyun sonu popup'ını gizle
    document.getElementById('game-end-popup').classList.add('hidden');
    
    // Oyunu sıfırla
    score = 0;
    currentQuestion = 1;
    document.getElementById('score').textContent = '0';
    
    // Yeni oyunu başlat
    document.getElementById('game-screen').classList.remove('hidden');
    loadNewQuestion();
}

// HTML head kısmına Font Awesome ekleyin
document.head.innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">';

// Ayarlar için event listener'ları
document.addEventListener('DOMContentLoaded', function() {
    // Zorluk seçenekleri için
    const difficultyOptions = document.querySelectorAll('.difficulty-option');
    difficultyOptions.forEach(option => {
        option.addEventListener('click', function() {
            difficultyOptions.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            currentDifficulty = this.dataset.difficulty;
        });
    });

    // Süre seçenekleri için
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            timeOptions.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            QUESTION_TIME = parseInt(this.dataset.time);
        });
    });

    // Ses ayarları için
    const soundToggle = document.getElementById('sound-toggle');
    soundToggle.addEventListener('change', function() {
        SOUND_ENABLED = this.checked;
        updateSoundSettings();
    });

    const musicToggle = document.getElementById('music-toggle');
    musicToggle.addEventListener('change', function() {
        MUSIC_ENABLED = this.checked;
        toggleBackgroundMusic();
    });
});

// Buton tıklamalarına ses efekti ekle
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => playSound('click'));
}); 