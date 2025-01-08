import React from 'react';
import Link from "next/link"; 


const Header = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link href="/home">Home</Link>
              </li>
              <li>
                  <Link href="/about">About</Link>
              </li>
              <li>
                  <Link href="/posts">Posts</Link>
              </li>
          </ul>
      </div>
  );
}

export default Header