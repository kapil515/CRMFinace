// lib/auth.ts
export function login(email: string) {
  localStorage.setItem("user", JSON.stringify({ email: email.trim().toLowerCase() }));
}

export function logout() {
  localStorage.removeItem("user");
}

export function isLoggedIn() {
  try {
    const user = localStorage.getItem("user");
    if (!user) return false;
    const parsed = JSON.parse(user);
    return !!parsed?.email;
  } catch {
    return false;
  }
}