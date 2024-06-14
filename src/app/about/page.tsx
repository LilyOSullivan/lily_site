import Achievements from "./_components/achievements";
import Education from "./_components/education";
import Experience from "./_components/experience";

export default function AboutPage() {
  return (
    <div>
      <h1 className="pb-5">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Nibh imperdiet euismod nisl
        adipiscing in diam mauris massa. Ipsum malesuada amet interdum a
        blandit. In sed adipiscing in fermentum vel vivamus arcu nulla. Ipsum
        leo faucibus convallis quam neque. Volutpat curabitur hac aliquam purus
        sed congue. Lectus blandit cursus rutrum vel viverra accumsan ut. Et.
      </p>

      <Education />
      <Experience />
      <Achievements />
    </div>
  );
}
