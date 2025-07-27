
export default function Link({ href, children,...props }) {
  return (
    <a href={href} className="items-center rounded-full py-3 px-5 bg-black text-white" {...props}>
      {children}
    </a>
  );
}