export default async function getUser(userId: string) {
  await new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, 3000);
  });

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-cache" });

  if (!res.ok) throw new Error("failed to fetch user");

  return res.json();
}
