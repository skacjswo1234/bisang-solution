// 헤더 스크롤 효과
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 실시간 후기 더미 데이터
const reviews = [
    { name: '김**', rating: 5, content: '빠르고 간편하게 신청했어요! 정말 도움이 많이 되었습니다.', date: '2024.01.15' },
    { name: '이**', rating: 5, content: '카드 한도 활용이 너무 쉬워서 놀랐어요. 추천합니다!', date: '2024.01.14' },
    { name: '박**', rating: 5, content: '상품권 구매가 편리하네요. 다음에도 이용할게요.', date: '2024.01.13' },
    { name: '최**', rating: 5, content: '소액 결제가 이렇게 쉬울 줄 몰랐어요. 만족합니다!', date: '2024.01.12' },
    { name: '정**', rating: 5, content: '친절한 상담과 빠른 처리 덕분에 문제 해결했어요.', date: '2024.01.11' },
    { name: '강**', rating: 5, content: '카드 한도 확인부터 활용까지 한 번에 해결! 좋아요.', date: '2024.01.10' },
    { name: '조**', rating: 5, content: '간편 소액 결제 서비스가 정말 편리해요. 강력 추천!', date: '2024.01.09' },
    { name: '윤**', rating: 5, content: '상품권 구매가 간단하고 빠르네요. 만족합니다.', date: '2024.01.08' },
    { name: '장**', rating: 5, content: '처음 이용했는데 생각보다 쉬워서 놀랐어요.', date: '2024.01.07' },
    { name: '임**', rating: 5, content: '빠른 처리와 친절한 서비스에 감사드려요!', date: '2024.01.06' },
    { name: '한**', rating: 5, content: '24시간 언제든지 신청 가능해서 너무 좋아요!', date: '2024.01.05' },
    { name: '오**', rating: 5, content: '신청 절차가 간단하고 빠르게 처리되어 만족합니다.', date: '2024.01.04' },
    { name: '서**', rating: 5, content: '카드 한도 확인이 실시간으로 가능해서 편해요.', date: '2024.01.03' },
    { name: '신**', rating: 5, content: '상품권 구매부터 결제까지 한 번에 해결! 최고예요.', date: '2024.01.02' },
    { name: '유**', rating: 5, content: '소액 결제 서비스가 정말 유용해요. 자주 이용할게요.', date: '2024.01.01' },
    { name: '류**', rating: 5, content: '친절한 안내와 빠른 처리 덕분에 문제 없이 해결했어요.', date: '2023.12.31' },
    { name: '문**', rating: 5, content: '카드 한도 활용이 이렇게 쉬울 줄 몰랐어요. 추천합니다!', date: '2023.12.30' },
    { name: '송**', rating: 5, content: '간편 소액 결제로 생활이 훨씬 편해졌어요.', date: '2023.12.29' },
    { name: '홍**', rating: 5, content: '상품권 구매가 간단하고 빠르네요. 만족합니다!', date: '2023.12.28' },
    { name: '전**', rating: 5, content: '처음 이용했는데 생각보다 쉬워서 놀랐어요. 좋아요!', date: '2023.12.27' },
    { name: '남**', rating: 5, content: '빠른 처리와 친절한 서비스에 감사드려요. 최고예요!', date: '2023.12.26' },
    { name: '노**', rating: 5, content: '24시간 언제든지 신청 가능해서 너무 좋아요. 만족합니다.', date: '2023.12.25' },
    { name: '배**', rating: 5, content: '신청 절차가 간단하고 빠르게 처리되어 좋아요.', date: '2023.12.24' },
    { name: '백**', rating: 5, content: '카드 한도 확인이 실시간으로 가능해서 편리해요.', date: '2023.12.23' },
    { name: '심**', rating: 5, content: '상품권 구매부터 결제까지 한 번에 해결! 강력 추천!', date: '2023.12.22' },
    { name: '안**', rating: 5, content: '소액 결제 서비스가 정말 유용해요. 자주 이용할게요.', date: '2023.12.21' },
    { name: '양**', rating: 5, content: '친절한 안내와 빠른 처리 덕분에 문제 없이 해결했어요.', date: '2023.12.20' },
    { name: '엄**', rating: 5, content: '카드 한도 활용이 이렇게 쉬울 줄 몰랐어요. 만족합니다!', date: '2023.12.19' },
    { name: '원**', rating: 5, content: '간편 소액 결제로 생활이 훨씬 편해졌어요. 좋아요!', date: '2023.12.18' },
    { name: '위**', rating: 5, content: '상품권 구매가 간단하고 빠르네요. 추천합니다!', date: '2023.12.17' }
];

// 별점 생성 함수 (모두 노란색으로 표시)
function createStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    return starsHTML;
}

// 후기 카드 생성 함수
function createReviewCard(review) {
    return `
        <div class="review-card">
            <div class="review-header">
                <span class="reviewer-name">${review.name}</span>
                <div class="star-rating">${createStars(review.rating)}</div>
            </div>
            <div class="review-content">${review.content}</div>
            <div class="review-date">${review.date}</div>
        </div>
    `;
}

// PC용 실시간 후기 슬라이더 초기화
let pcSlideInterval = null;
function initPCReviewsSlider() {
    const slider = document.getElementById('pcReviewsSlider');
    if (!slider) {
        console.error('pcReviewsSlider element not found');
        return;
    }
    
    // 기존 인터벌 제거
    if (pcSlideInterval) {
        clearInterval(pcSlideInterval);
    }
    
    if (reviews.length === 0) return;
    
    slider.innerHTML = reviews.map(createReviewCard).join('');
    slider.style.transform = 'translateX(0px)';
    
    let currentPosition = 0;
    const cardWidth = 320; // 카드 너비 + gap
    const visibleCards = Math.floor(window.innerWidth / cardWidth);
    const maxPosition = (reviews.length - visibleCards) * cardWidth;
    
    function slideNext() {
        currentPosition -= cardWidth;
        if (currentPosition < -maxPosition) {
            currentPosition = 0;
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
    
    pcSlideInterval = setInterval(slideNext, 3000);
}

// 모바일용 실시간 후기 슬라이더 초기화
let mobSlideInterval = null;
function initMobReviewsSlider() {
    const slider = document.getElementById('mobReviewsSlider');
    if (!slider) {
        console.error('mobReviewsSlider element not found');
        return;
    }
    
    // 기존 인터벌 제거
    if (mobSlideInterval) {
        clearInterval(mobSlideInterval);
    }
    
    slider.innerHTML = '';
    slider.style.transform = 'none';
    let currentIndex = 0;
    
    function showNextReview() {
        if (reviews.length === 0) return;
        slider.innerHTML = createReviewCard(reviews[currentIndex]);
        const card = slider.querySelector('.review-card');
        if (card) {
            card.classList.add('mob-review-card');
            // active 클래스를 약간의 지연 후 추가하여 애니메이션 효과
            setTimeout(() => {
                card.classList.add('active');
            }, 50);
        }
        
        currentIndex = (currentIndex + 1) % reviews.length;
    }
    
    // 즉시 첫 번째 후기 표시
    showNextReview();
    mobSlideInterval = setInterval(showNextReview, 2500);
}

// 실시간 후기 슬라이더 초기화 (통합 함수)
function initReviewsSlider() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        initMobReviewsSlider();
    } else {
        initPCReviewsSlider();
    }
}

// Top 버튼 기능
const topBtn = document.getElementById('topBtn');
const mobileTopBtn = document.getElementById('mobileTopBtn');

if (topBtn) {
    topBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

if (mobileTopBtn) {
    mobileTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Top 버튼 표시/숨김
window.addEventListener('scroll', function() {
    const topBtn = document.getElementById('topBtn');
    const mobileTopBtn = document.getElementById('mobileTopBtn');
    
    if (window.scrollY > 300) {
        if (topBtn) topBtn.style.display = 'flex';
        if (mobileTopBtn) mobileTopBtn.style.display = 'flex';
    } else {
        if (topBtn) topBtn.style.display = 'none';
        if (mobileTopBtn) mobileTopBtn.style.display = 'none';
    }
});

// 카드 이미지 목록
const cardImages = [
    'images/card/culture.png',
    'images/card/gs.png',
    'images/card/gumgang.png',
    'images/card/happy.png',
    'images/card/item.png',
    'images/card/munsang.png',
    'images/card/okcash.png',
    'images/card/sinsae.png',
    'images/card/tmoney.png'
];

// 카드 아이템 생성 함수
function createCardItem(imageSrc) {
    return `
        <div class="card-item">
            <img src="${imageSrc}" alt="Card">
        </div>
    `;
}

// 카드 슬라이더 초기화
function initCardSlider() {
    const pcSlider = document.getElementById('pcCardSlider');
    const mobSlider = document.getElementById('mobCardSlider');
    
    // 이미지를 두 번 복제하여 무한 루프 효과 생성
    const duplicatedImages = [...cardImages, ...cardImages];
    const sliderHTML = duplicatedImages.map(createCardItem).join('');
    
    if (pcSlider) {
        pcSlider.innerHTML = sliderHTML;
    }
    
    if (mobSlider) {
        mobSlider.innerHTML = sliderHTML;
    }
}

// 모달 내용 데이터
const modalContents = {
    terms: {
        title: '이용약관',
        content: `
            <h2>이용약관</h2>
            <h3>제1조 (목적)</h3>
            <p>본 약관은 본 사이트가 제공하는 정보 콘텐츠의 이용 조건과 책임 범위를 규정함을 목적으로 합니다.</p>
            
            <h3>제2조 (서비스 내용)</h3>
            <p>본 사이트는 신용카드, 상품권, 소액결제 등과 관련된 일반적인 이용 구조와 흐름에 대한 정보를 제공하는 안내 페이지입니다.<br>
            본 사이트는 금융 상품을 직접 제공하지 않습니다.</p>
            
            <h3>제3조 (이용자의 책임)</h3>
            <p>이용자는 본 사이트의 정보를 참고용으로 활용하며, 최종적인 판단과 선택에 대한 책임은 이용자 본인에게 있습니다.</p>
            
            <h3>제4조 (책임의 제한)</h3>
            <p>본 사이트는 제공되는 정보의 정확성이나 완전성을 보장하지 않으며, 정보 이용으로 발생하는 어떠한 결과에 대해서도 법적 책임을 지지 않습니다.</p>
            
            <h3>제5조 (약관의 변경)</h3>
            <p>본 약관은 필요 시 변경될 수 있으며, 변경 내용은 사이트를 통해 공지합니다.</p>
        `
    },
    privacy: {
        title: '개인정보처리방침',
        content: `
            <h2>개인정보처리방침</h2>
            <p>본 사이트는 이용자의 개인정보를 중요하게 보호하며, 관련 법령을 준수합니다.</p>
            
            <h3>1. 수집하는 개인정보 항목</h3>
            <p>본 사이트는 원칙적으로 개인정보를 수집하지 않습니다.<br>
            다만 이용자가 자발적으로 문의를 남기는 경우, 이메일 주소 등 최소한의 정보만 수집될 수 있습니다.</p>
            
            <h3>2. 개인정보의 이용 목적</h3>
            <p>수집된 개인정보는 문의에 대한 응답 목적 외에는 사용되지 않습니다.</p>
            
            <h3>3. 개인정보의 보관 및 파기</h3>
            <p>수집된 개인정보는 이용 목적이 달성된 후 즉시 파기됩니다.</p>
            
            <h3>4. 개인정보 제공</h3>
            <p>본 사이트는 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
            
            <h3>5. 개인정보 보호 책임자</h3>
            <p>문의: <a href="mailto:tnxkqltkdrma@gmail.com">tnxkqltkdrma@gmail.com</a></p>
        `
    },
    disclaimer: {
        title: '면책 고지',
        content: `
            <h2>면책 고지</h2>
            <p>본 사이트에서 제공되는 모든 정보는 일반적인 이해를 돕기 위한 참고용 정보입니다.</p>
            
            <p>본 사이트는 금융 기관이 아니며, 금융 상품을 직접 제공하거나 중개하지 않습니다.</p>
            
            <p>개인의 신용 상태, 이용 환경 등에 따라 결과와 조건은 달라질 수 있으며, 본 사이트의 정보는 특정 결과를 보장하지 않습니다.</p>
            
            <p>본 사이트의 정보를 이용함으로써 발생하는 모든 책임은 이용자 본인에게 있습니다.</p>
        `
    }
};

// 모달 열기
function openModal(modalType) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    if (modalContents[modalType]) {
        modalBody.innerHTML = modalContents[modalType].content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
}

// 모달 닫기
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
}

// 모달 이벤트 리스너
function initModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const footerLinks = document.querySelectorAll('.footer-link[data-modal]');
    
    // 푸터 링크 클릭 이벤트
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            openModal(modalType);
        });
    });
    
    // 오버레이 클릭 시 닫기
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // 닫기 버튼 클릭 시 닫기
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// 초기화 함수
function initialize() {
    initReviewsSlider();
    initCardSlider();
    initModal();
}

// DOM 로드 완료 시 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    // DOM이 이미 로드된 경우 즉시 실행
    initialize();
}

// 리사이즈 이벤트 처리
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // 기존 인터벌 모두 제거
        if (pcSlideInterval) {
            clearInterval(pcSlideInterval);
            pcSlideInterval = null;
        }
        if (mobSlideInterval) {
            clearInterval(mobSlideInterval);
            mobSlideInterval = null;
        }
        // 재초기화
        initReviewsSlider();
    }, 250);
});

// Top 버튼 초기 숨김
if (topBtn) topBtn.style.display = 'none';
if (mobileTopBtn) mobileTopBtn.style.display = 'none';

