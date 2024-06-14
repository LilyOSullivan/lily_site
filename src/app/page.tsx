import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lily O{"'"}Sullivan</h1>
      <br />
      <p className="prose-invert">
        Lorem ipsum dolor sit amet consectetur. Nibh imperdiet euismod nisl
        adipiscing in diam mauris massa. Ipsum malesuada amet interdum a
        blandit. In sed adipiscing in fermentum vel vivamus arcu nulla. Ipsum
        leo faucibus convallis quam neque. Volutpat curabitur hac aliquam purus
        sed congue. Lectus blandit cursus rutrum vel viverra accumsan ut. Et.
      </p>
      <br />
      <div className="flex justify-center">
        <div className="flex">
          <div className="w-44">
            <p className="text-sm text-gray-600">XXX</p>
            <Link
              href="/about"
              className="underline decoration-gray-600 underline-offset-2 duration-200 hover:decoration-gray-200"
            >
              About
            </Link>
          </div>
          <div className="w-44">
            <p className="text-sm text-gray-600">XXX</p>
            Hello
          </div>
          <div className="w-44">
            <p className="text-sm text-gray-600">XXX</p>
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}
