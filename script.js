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

// 실시간 신청 현황 더미 데이터
const applications = [
    { category: '카드 한도 활용', info: '김**님 신청 완료', time: '방금 전' },
    { category: '간편 소액 결제', info: '이**님 신청 완료', time: '1분 전' },
    { category: '상품권', info: '박**님 신청 완료', time: '2분 전' },
    { category: '카드 한도 활용', info: '최**님 신청 완료', time: '3분 전' },
    { category: '간편 소액 결제', info: '정**님 신청 완료', time: '4분 전' },
    { category: '상품권', info: '강**님 신청 완료', time: '5분 전' },
    { category: '카드 한도 활용', info: '조**님 신청 완료', time: '6분 전' },
    { category: '간편 소액 결제', info: '윤**님 신청 완료', time: '7분 전' },
    { category: '상품권', info: '장**님 신청 완료', time: '8분 전' },
    { category: '카드 한도 활용', info: '임**님 신청 완료', time: '9분 전' },
    { category: '간편 소액 결제', info: '한**님 신청 완료', time: '10분 전' },
    { category: '상품권', info: '오**님 신청 완료', time: '11분 전' },
    { category: '카드 한도 활용', info: '서**님 신청 완료', time: '12분 전' },
    { category: '간편 소액 결제', info: '신**님 신청 완료', time: '13분 전' },
    { category: '상품권', info: '유**님 신청 완료', time: '14분 전' }
];

// 신청 현황 아이템 생성 함수
function createApplicationItem(application) {
    return `
        <div class="application-item">
            <div>
                <div class="application-category">${application.category}</div>
                <div class="application-info">${application.info}</div>
            </div>
            <div class="application-time">${application.time}</div>
        </div>
    `;
}

// 실시간 신청 현황 전광판 초기화
function initApplicationBoard() {
    const board = document.getElementById('applicationList');
    let currentIndex = 0;
    
    function showApplications() {
        // 현재 보여줄 3개 아이템
        const itemsToShow = applications.slice(currentIndex, currentIndex + 3);
        
        // 아이템 생성
        board.innerHTML = itemsToShow.map(createApplicationItem).join('');
        
        // 애니메이션 적용
        const items = board.querySelectorAll('.application-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        });
        
        // 다음 3개로 이동
        currentIndex += 3;
        if (currentIndex >= applications.length) {
            currentIndex = 0;
        }
    }
    
    // 초기 표시
    showApplications();
    
    // 3초마다 업데이트
    setInterval(() => {
        // 기존 아이템 제거 애니메이션
        const items = board.querySelectorAll('.application-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-20px)';
            }, index * 50);
        });
        
        // 새 아이템 표시
        setTimeout(() => {
            showApplications();
        }, 300);
    }, 3000);
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

// 초기화 함수
function initialize() {
    initReviewsSlider();
    initApplicationBoard();
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

