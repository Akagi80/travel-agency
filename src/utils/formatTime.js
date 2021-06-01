export const formatTime = arg => {
  if (!arg || typeof(arg) !== 'number' || arg < 0) {
    return null;
  }

  const sec = Math.floor(arg % 60);
  const min = Math.floor(arg / 60 % 60);
  const hrs = Math.floor(arg / 3600);

  const displayCountdown = [hrs, min, sec].map(element => `${element + 100}`.substring(1));
  return displayCountdown.join(':');
};
