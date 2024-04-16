/**
 * 쿼리 파라미터 추출 유틸리티 훅
 */
export const useQuery = () => {
    return new URLSearchParams(window.location.search);
};

/**
 * 쿠키 생성 유틸리티 훅
 */
export const setCookie = (name: string, value: string, days: number) => {
    let expires = '';
    if (days) {
        const date = new Date(Date.now() + days * 864e5); // 864e5 = 86400000 = 24 * 60 * 60 * 1000
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
};

/**
 * 쿠키 조회 유틸리티 훅
 */
export const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
    ));
    return matches?.[1] ?? null;
};