export const isAuthenticated = (): boolean => {
    const accessToken = getAccessToken();
    return !!accessToken;
};

export const getAccessToken = (): string | null => {
    return document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
};

export const redirectToLogin = (router: any) => {
    router.push('/');
};
