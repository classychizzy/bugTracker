// This funtion is for checking the environment
export function isDevEnvironment() {
    if (process.env.NODE_ENV === "development") {
      return true;
    }
    return false;
}