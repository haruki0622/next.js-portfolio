import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
