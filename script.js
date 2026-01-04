const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

// Language Switcher Logic
const languageRadios = document.querySelectorAll('.nav-language input[type="radio"]');

const translations = {
    'hi': {
        'nav_country_p': 'मुंबई 400001 को डिलीवरी',
        'nav_country_h1': 'स्थान अपडेट करें',
        'nav_search_placeholder': 'Amazon.in खोजें',
        'nav_signin_hello': 'नमस्ते, साइन इन करें',
        'nav_signin_account': 'खाता और सूचियाँ',
        'nav_orders_returns': 'लौटाएं',
        'nav_orders_orders': 'और आदेश',
        'nav_cart': 'कार्ट',
        'nav_all': 'सभी',
        'nav_todays_deals': 'आज की डील',
        'nav_customer_service': 'ग्राहक सेवा',
        'nav_registry': 'रजिस्ट्री',
        'nav_gift_cards': 'गिफ्ट कार्ड',
        'nav_sell': 'बेचें',
        'header_box_1_h3': 'शैली में अपने घर को नया रूप दें',
        'header_box_1_a': 'सभी देखें',
        'header_box_2_h3': 'थोक ऑर्डर छूट + 18% तक जीएसटी बचत',
        'header_box_2_a': 'और देखें',
        'header_box_3_h3': 'आपके घर के लिए उपकरण | 55% तक की छूट',
        'header_box_3_a': 'और देखें',
        'header_box_4_h3': '₹49 से शुरू | घरेलू जरूरी सामानों पर डील',
        'header_box_4_a': 'सभी देखें',
    },
    'ta': {
        'nav_country_p': 'மும்பை 400001 க்கு வழங்கப்படுகிறது',
        'nav_country_h1': 'இருப்பிடத்தைப் புதுப்பிக்கவும்',
        'nav_search_placeholder': 'Amazon.in இல் தேடுங்கள்',
        'nav_signin_hello': 'வணக்கம், உள்நுழையவும்',
        'nav_signin_account': 'கணக்கு & பட்டியல்கள்',
        'nav_orders_returns': 'திரும்பப் பெறுதல்',
        'nav_orders_orders': '& ஆர்டர்கள்',
        'nav_cart': 'வண்டி',
        'nav_all': 'அனைத்தும்',
        'nav_todays_deals': 'இன்றைய ஒப்பந்தங்கள்',
        'nav_customer_service': 'வாடிக்கையாளர் சேவை',
        'nav_registry': 'பதிவு',
        'nav_gift_cards': 'பரிசு அட்டைகள்',
        'nav_sell': 'விற்கவும்',
        'header_box_1_h3': 'உங்கள் வீட்டை பாணியில் புதுப்பிக்கவும்',
        'header_box_1_a': 'அனைத்தையும் ஆராயுங்கள்',
        'header_box_2_h3': 'மொத்த ஆர்டர் தள்ளுபடிகள்  GST சேமிப்பு',
        'header_box_2_a': 'மேலும் காண்க',
        'header_box_3_h3': 'உங்கள் வீட்டிற்கான உபகரணங்கள் | 55% வரை தள்ளுபடி',
        'header_box_3_a': 'மேலும் காண்க',
        'header_box_4_h3': '₹49 முதல் | வீட்டு அத்தியாவசியப் பொருட்களுக்கான ஒப்பந்தங்கள்',
        'header_box_4_a': 'அனைத்தையும் பாருங்கள்',
    },
    'te': {
        'nav_country_p': 'ముంబై 400001 కి డెలివరీ చేయబడుతోంది',
        'nav_country_h1': 'స్థానాన్ని నవీకరించండి',
        'nav_search_placeholder': 'Amazon.in లో శోధించండి',
        'nav_signin_hello': 'హలో, సైన్ ఇన్ చేయండి',
        'nav_signin_account': 'ఖ ఖాతా & జాబితాలు',
        'nav_orders_returns': 'తిరిగి ఇస్తుంది',
        'nav_orders_orders': '& ఆర్డర్లు',
        'nav_cart': 'బండి',
        'nav_all': 'అన్నీ',
        'nav_todays_deals': 'నేటి ఒప్పందాలు',
        'nav_customer_service': 'కస్టమర్ సేవ',
        'nav_registry': 'రిజిస్ట్రీ',
        'nav_gift_cards': 'బహుమతి కార్డులు',
        'nav_sell': 'అమ్మండి',
        'header_box_1_h3': 'మీ ఇంటిని స్టైల్‌లో పునరుద్ధరించండి',
        'header_box_1_a': 'అన్నీ అన్వేషించండి',
        'header_box_2_h3': 'బల్క్ ఆర్డర్ డిస్కౌంట్లు  GST ఆదా',
        'header_box_2_a': 'మరిన్ని చూడండి',
        'header_box_3_h3': 'మీ ఇంటికి ఉపకరణాలు | 55% వరకు తగ్గింపు',
        'header_box_3_a': 'మరిన్ని చూడండి',
        'header_box_4_h3': '₹49 నుండి ప్రారంభం | ఇంటి అవసరాలపై ఒప్పందాలు',
        'header_box_4_a': 'అన్నీ చూడండి',
    },
    'kn': {
        'nav_country_p': 'ಮುಂಬೈ 400001 ಗೆ ತಲುಪಿಸಲಾಗುತ್ತಿದೆ',
        'nav_country_h1': 'ಸ್ಥಳವನ್ನು ನವೀಕರಿಸಿ',
        'nav_search_placeholder': 'Amazon.in ನಲ್ಲಿ ಹುಡುಕಿ',
        'nav_signin_hello': 'ನಮಸ್ಕಾರ, ಸೈನ್ ಇನ್ ಮಾಡಿ',
        'nav_signin_account': 'ಖಾತೆ ಮತ್ತು ಪಟ್ಟಿಗಳು',
        'nav_orders_returns': 'ಹಿಂತಿರುಗಿಸುವಿಕೆಗಳು',
        'nav_orders_orders': '& ಆರ್ಡರ್‌ಗಳು',
        'nav_cart': 'ಕಾರ್ಟ್',
        'nav_all': 'ಎಲ್ಲಾ',
        'nav_todays_deals': 'ಇಂದಿನ ಡೀಲ್ಗಳು',
        'nav_customer_service': 'ಗ್ರಾಹಕ ಸೇವೆ',
        'nav_registry': 'ನೋಂದಣಿ',
        'nav_gift_cards': 'ಉಡುಗೊರೆ ಕಾರ್ಡ್‌ಗಳು',
        'nav_sell': 'ಮಾರಾಟ ಮಾಡಿ',
        'header_box_1_h3': 'ನಿಮ್ಮ ಮನೆಯನ್ನು ಶೈಲಿಯಲ್ಲಿ ನವೀಕರಿಸಿ',
        'header_box_1_a': 'ಎಲ್ಲವನ್ನೂ ಎಕ್ಸ್ಪ್ಲೋರ್ ಮಾಡಿ',
        'header_box_2_h3': 'ಬಲ್ಕ್ ಆರ್ಡರ್ ರಿಯಾಯಿತಿಗಳು  GST ಉಳಿತಾಯ',
        'header_box_2_a': 'ಇನ್ನಷ್ಟು ನೋಡಿ',
        'header_box_3_h3': 'ನಿಮ್ಮ ಮನೆಗೆ ಉಪಕರಣಗಳು | 55% ರಷ್ಟು ರಿಯಾಯಿತಿ',
        'header_box_3_a': 'ಇನ್ನಷ್ಟು ನೋಡಿ',
        'header_box_4_h3': '₹49 ರಿಂದ ಪ್ರಾರಂಭ | ಮನೆಯ ಅಗತ್ಯಗಳ ಮೇಲಿನ ಡೀಲ್ಗಳು',
        'header_box_4_a': 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
    },
    'en': {
        'nav_country_p': 'Delivering to Mumbai 400001',
        'nav_country_h1': 'Update location',
        'nav_search_placeholder': 'Search Amazon.in',
        'nav_signin_hello': 'Hello, Sign in',
        'nav_signin_account': 'Account & Lists',
        'nav_orders_returns': 'Returns',
        'nav_orders_orders': '& Orders',
        'nav_cart': 'Cart',
        'nav_all': 'All',
        'nav_todays_deals': "Today's Deals",
        'nav_customer_service': 'Customer Service',
        'nav_registry': 'Registry',
        'nav_gift_cards': 'Gift Cards',
        'nav_sell': 'Sell',
        'header_box_1_h3': 'Revamp your home in style',
        'header_box_1_a': 'Explore all',
        'header_box_2_h3': 'Bulk order discounts + Up to 18% GST savings',
        'header_box_2_a': 'See more',
        'header_box_3_h3': 'Appliances for your home | Up to 55% off',
        'header_box_3_a': 'See more',
        'header_box_4_h3': 'Starting ₹49 | Deals on home essentials',
        'header_box_4_a': 'See all',
    }
};

languageRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        let lang = 'en';
        const parentLi = e.target.closest('li');
        const text = parentLi.innerText.trim();

        if (text.includes('HI')) lang = 'hi';
        else if (text.includes('TA')) lang = 'ta';
        else if (text.includes('TE')) lang = 'te';
        else if (text.includes('KN')) lang = 'kn';
        else lang = 'en';

        const content = translations[lang];
        if (!content) return;

        // Apply Translations
        document.querySelector('.nav-country p').innerText = content['nav_country_p'];
        document.querySelector('.nav-country h1').innerText = content['nav_country_h1'];
        document.querySelector('.nav-search-input').placeholder = content['nav_search_placeholder'];
        document.querySelector('.nav-text p').innerText = content['nav_signin_hello'];
        const accountH1 = document.querySelectorAll('.nav-text h1')[0];
        accountH1.childNodes[0].nodeValue = content['nav_signin_account'] + " ";

        const returnsDiv = document.querySelectorAll('.nav-text')[1];
        if (returnsDiv) {
            returnsDiv.querySelector('p').innerText = content['nav_orders_returns'];
            returnsDiv.querySelector('h1').innerText = content['nav_orders_orders'];
        }

        document.querySelector('.nav-cart h4').innerText = content['nav_cart'];
        document.querySelector('.nav-bottom div p').innerText = content['nav_all'];

        // Update Nav Bottom Links dynamically
        const pTags = Array.from(document.querySelectorAll('.nav-bottom > p'));
        // Map based on index to ensure stability if text changes
        if (pTags.length >= 5) {
            pTags[0].innerText = content['nav_todays_deals']; // Today's Deals
            pTags[1].innerText = content['nav_customer_service']; // Customer Service
            pTags[2].innerText = content['nav_registry']; // Registry
            pTags[3].innerText = content['nav_gift_cards']; // Gift Cards
            pTags[4].innerText = content['nav_sell']; // Sell
        }

        // Header Boxes
        const boxCols = document.querySelectorAll('.header-box .box-col');
        if (boxCols.length >= 4) {
            boxCols[0].querySelector('h3').innerText = content['header_box_1_h3'];
            boxCols[0].querySelector('a').innerText = content['header_box_1_a'];
            boxCols[1].querySelector('h3').innerText = content['header_box_2_h3'];
            boxCols[1].querySelector('a').innerText = content['header_box_2_a'];
            boxCols[2].querySelector('h3').innerText = content['header_box_3_h3'];
            boxCols[2].querySelector('a').innerText = content['header_box_3_a'];
            boxCols[3].querySelector('h3').innerText = content['header_box_4_h3'];
            boxCols[3].querySelector('a').innerText = content['header_box_4_a'];
        }

        document.querySelector('.nav-language p').innerText = lang.toUpperCase();
    });
});

// Sidebar Logic
const sidebarNavigation = document.getElementById('sidebar-container');
const sidebarOpenBtn = document.querySelector('.nav-bottom-left div');
const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
const sidebarOverlay = document.getElementById('sidebar-overlay');

if (sidebarOpenBtn) {
    sidebarOpenBtn.addEventListener('click', () => {
        sidebarNavigation.classList.add('active');
        document.body.classList.add('sidebar-open');
    });
}

const closeSidebar = () => {
    sidebarNavigation.classList.remove('active');
    document.body.classList.remove('sidebar-open');
};

if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// Header auto-advance (pause on hover)
let autoSlideInterval = setInterval(() => {
    if (imgs.length > 0) {
        if (n < imgs.length - 1) n++; else n = 0;
        changeSlide();
    }
}, 5000);

const headerSlider = document.querySelector('.header-slider');
if (headerSlider) {
    headerSlider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    headerSlider.addEventListener('mouseleave', () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (imgs.length > 0) {
                if (n < imgs.length - 1) n++; else n = 0;
                changeSlide();
            }
        }, 5000);
    });
}

// Dropdown menus (show on hover / focus for accessibility)
document.querySelectorAll('.nav-text, .nav-language').forEach(el => {
    const menu = el.querySelector('.dropdown-menu');
    if (!menu) return;
    el.addEventListener('mouseenter', () => menu.style.display = 'block');
    el.addEventListener('mouseleave', () => menu.style.display = '');
    // keyboard accessibility
    el.addEventListener('focusin', () => menu.style.display = 'block');
    el.addEventListener('focusout', () => menu.style.display = '');
});

// Product carousel: add simple scroll buttons if the container exists
const productsRow = document.querySelector('.products-slider-with-btn');
if (productsRow) {
    const btnPrev = document.createElement('button');
    const btnNext = document.createElement('button');
    btnPrev.className = 'products-scroll-prev';
    btnNext.className = 'products-scroll-next';
    btnPrev.innerText = '<';
    btnNext.innerText = '>';
    productsRow.parentNode.insertBefore(btnPrev, productsRow);
    productsRow.parentNode.appendChild(btnNext);

    const scrollAmount = Math.max(productsRow.clientWidth * 0.6, 300);

    btnPrev.addEventListener('click', () => {
        productsRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    btnNext.addEventListener('click', () => {
        productsRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Search: Enter or clicking search icon navigates to product page with query
const searchInput = document.querySelector('.nav-search-input');
const searchIcon = document.querySelector('.nav-search-icon');
if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const q = encodeURIComponent(searchInput.value.trim());
            if (q.length) window.location.href = `product.html?search=${q}`;
        }
    });
}
if (searchIcon && searchInput) {
    searchIcon.addEventListener('click', () => {
        const q = encodeURIComponent(searchInput.value.trim());
        if (q.length) window.location.href = `product.html?search=${q}`;
    });
}