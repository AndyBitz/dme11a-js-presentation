export function getMaxWidth() {
  try {
    const ret = Math.max(
      document.documentElement["clientWidth"],
      document.body["scrollWidth"],
      document.documentElement["scrollWidth"],
      document.body["offsetWidth"],
      document.documentElement["offsetWidth"]
    );
    return ret;
  } catch(e) {
    return 0;
  }
}

export function getMaxHeight() {
  try {
    const ret = Math.max(
      document.documentElement["clientHeight"],
      document.body["scrollHeight"],
      document.documentElement["scrollHeight"],
      document.body["offsetHeight"],
      document.documentElement["offsetHeight"]
    );
    return ret;
  } catch(e) {
    return 0;
  }
}
