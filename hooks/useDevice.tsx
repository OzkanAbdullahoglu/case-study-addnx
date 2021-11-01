import useWindowSize from './useWindowSize';

let device: string;

export default function useDevice() {
  const windowSize = useWindowSize();
  const { width } = windowSize;

  const devices = [
    { isNarrowMobile: [0, 449] },
    { isWideMobile: [450, 767] },
    { isNarrowTablet: [768, 1023] },
    { isWideTablet: [1024, 1279] },
    { isSmallDesktop: [1280, 1439] },
    { isMediumDesktop: [1440, 1919] },
    { isLargeDesktop: [1920, 3840] },
  ];

  for (let i = 0; i < devices.length; i++) {
    const ranges = Object.values(devices[i])[0];
    const deviceName = Object.keys(devices[i])[0];
    if (width!! >= ranges[0] && width!! <= ranges[1]) {
      return (device = deviceName);
    }
    device = 'isExtra';
  }
  return device;
}
