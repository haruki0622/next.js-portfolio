import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <ul className="flex items-center">
        <li className="ml-10">
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li  className="ml-10">
          <Link href='https://next-js-blog-nine-liart.vercel.app/'>
            <a target="_blank">Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
