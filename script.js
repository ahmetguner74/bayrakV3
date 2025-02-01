// Bayrak dosyalarının yolu
const flagsPath = './flags/';

// Ülke kodları ve isimleri eşleştirmesi
const countryData = {
    'af': 'Afganistan',
    'al': 'Arnavutluk',
    'dz': 'Cezayir',
    'ad': 'Andorra',
    'ao': 'Angola',
    'ar': 'Arjantin',
    'am': 'Ermenistan',
    'au': 'Avustralya',
    'at': 'Avusturya',
    'az': 'Azerbaycan',
    'bs': 'Bahamalar',
    'bh': 'Bahreyn',
    'bd': 'Bangladeş',
    'be': 'Belçika',
    'br': 'Brezilya',
    'bg': 'Bulgaristan',
    'ca': 'Kanada',
    'cl': 'Şili',
    'cn': 'Çin',
    'co': 'Kolombiya',
    'hr': 'Hırvatistan',
    'cu': 'Küba',
    'cy': 'Kıbrıs',
    'cz': 'Çek Cumhuriyeti',
    'dk': 'Danimarka',
    'eg': 'Mısır',
    'ee': 'Estonya',
    'fi': 'Finlandiya',
    'fr': 'Fransa',
    'ge': 'Gürcistan',
    'de': 'Almanya',
    'gr': 'Yunanistan',
    'hu': 'Macaristan',
    'is': 'İzlanda',
    'in': 'Hindistan',
    'id': 'Endonezya',
    'ir': 'İran',
    'iq': 'Irak',
    'ie': 'İrlanda',
    'il': 'İsrail',
    'it': 'İtalya',
    'jp': 'Japonya',
    'tr': 'Türkiye',
    'gb': 'Birleşik Krallık',
    'us': 'Amerika Birleşik Devletleri'
    // Diğer ülkeler buraya eklenebilir
};

// Ülke kodlarını bir diziye çevirelim
const countryCodes = Object.keys(countryData);

// Oyun değişkenleri
let score = 0;
let currentCorrectAnswer = '';

// Rastgele ülke kodu seçme fonksiyonu
function getRandomCountry() {
    return countryCodes[Math.floor(Math.random() * countryCodes.length)];
}

// Rastgele 4 seçenek oluşturma (1 doğru, 3 yanlış)
function generateOptions(correctAnswer) {
    let options = [correctAnswer];
    while (options.length < 4) {
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
    currentCorrectAnswer = getRandomCountry();
    const flagImage = document.getElementById('flag-image');
    flagImage.src = `${flagsPath}${currentCorrectAnswer}.svg`;

    const options = generateOptions(currentCorrectAnswer);
    const optionButtons = document.querySelectorAll('.option');
    
    optionButtons.forEach((button, index) => {
        // Ülke kodunu Türkçe isme çeviriyoruz
        button.textContent = countryData[options[index]];
        button.onclick = () => checkAnswer(options[index]);
    });
}

// Bildirim gösterme fonksiyonu
function showNotification(message, isCorrect) {
    const notification = document.getElementById('notification');
    const options = document.querySelectorAll('.option');
    
    notification.textContent = message;
    notification.className = `notification ${isCorrect ? 'correct' : 'wrong'} show`;
    
    // Butonları geçici olarak devre dışı bırak
    options.forEach(button => {
        button.disabled = true;
    });

    // 2 saniye sonra yeni soruya geç
    setTimeout(() => {
        notification.className = 'notification';
        loadNewQuestion();
        // Butonları tekrar aktif et
        options.forEach(button => {
            button.disabled = false;
            button.className = 'option';
        });
    }, 2000);
}

// Cevap kontrolü
function checkAnswer(selectedAnswer) {
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
        showNotification('Doğru!', true);
    } else {
        selectedButton.className = 'option wrong';
        correctButton.className = 'option correct';
        showNotification(`Yanlış! Doğru cevap: ${countryData[currentCorrectAnswer]}`, false);
    }
}

// Oyunu başlat
window.onload = () => {
    loadNewQuestion();
};

// Ekran geçişleri için fonksiyonlar
function startGame() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadNewQuestion(); // Oyunu başlat
}

function showMainMenu() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
    // Oyunu sıfırla
    score = 0;
    document.getElementById('score').textContent = '0';
}

function showHighScores() {
    // Yüksek skorlar ekranı için (şimdilik boş)
    alert('Yüksek skorlar yakında eklenecek!');
}

function showInstructions() {
    // Nasıl oynanır ekranı için (şimdilik boş)
    alert('Bayrakları tahmin ederek puan kazanın!');
} 