import React from 'react';
import Link from "next/link"; 


const Header = () => {
  return (
      <div>
          <ul className="flex gap-4 mb-6">
              <li>
                  <Link href="/home">Home</Link>
              </li>
              <li>
                  <Link href="/about">About</Link>
              </li>
              <li>
                  <Link href="/posts">Posts</Link>
              </li>
              <li>
                  <Link href="/users">Users</Link>
              </li>
          </ul>
      </div>
  );
}

export default Header