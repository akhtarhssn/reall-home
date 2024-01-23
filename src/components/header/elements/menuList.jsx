import Link from "next/link";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">Home</Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">About</Link>
      </li>
      <li className="menu-icon">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="menu-icon">
        <Link href="/shop">Property</Link>
      </li>
      <li className="menu-icon">
        <Link href="/locations">Locations</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/add-listing">Add Listing</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
