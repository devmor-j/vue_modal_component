export function useMobile() {
  function isMobile() {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

    return isMobileDevice;
  }

  return {
    isMobile,
  };
}
