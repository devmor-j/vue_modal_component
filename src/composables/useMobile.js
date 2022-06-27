export function useMobile() {
  function isMobile() {
    // according to mdn, in summary to find mobile users
    // we should look for 'Mobi' inside agent's browser:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
    if ("navigator" in window) {
      const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
      return isMobileDevice;
    } else {
      return undefined;
    }
  }

  return {
    isMobile,
  };
}
