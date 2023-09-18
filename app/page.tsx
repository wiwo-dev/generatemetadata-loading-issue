import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <div>
      <br />
      <h2>Users (with generateMetadata) - it hangs for 3 seconds after clicking. No loading state...</h2>
      {users.map((user, key) => {
        return (
          <div key={key}>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </div>
        );
      })}
      <h2>Users (NO metadata) - works fine. Suspense works and there is loading state.</h2>
      {users.map((user, key) => {
        return (
          <div key={key}>
            <p key={user.id}>
              <Link href={`/users-no-metadata/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );

  return content;
}
