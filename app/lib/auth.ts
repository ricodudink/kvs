export type UserRole = "volunteer" | "organization" | "parent";

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password: string;
};

const users: User[] = [
  {
    id: "1",
    email: "vrijwilliger@example.nl",
    name: "Demo vrijwilliger",
    role: "volunteer",
    password: "demo1234"
  },
  {
    id: "2",
    email: "ouder@example.nl",
    name: "Demo ouder",
    role: "parent",
    password: "demo1234"
  },
  {
    id: "3",
    email: "organisatie@example.nl",
    name: "Demo organisatie",
    role: "organization",
    password: "demo1234"
  }
];

export function findUserByEmail(email: string) {
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function validateUser(email: string, password: string) {
  const user = findUserByEmail(email);
  if (!user || user.password !== password) return null;
  const { password: _pw, ...safe } = user;
  return safe;
}

export function registerUser(data: {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}) {
  const existing = findUserByEmail(data.email);
  if (existing) {
    throw new Error("Er bestaat al een account met dit e-mailadres.");
  }
  const newUser: User = {
    id: String(users.length + 1),
    ...data
  };
  users.push(newUser);
  const { password: _pw, ...safe } = newUser;
  return safe;
}

