import React from "react";
// import styles from "./page.module.scss";
import Image from "next/image";
function Page() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left sm:max-xl:bg-blue-50">
      <div>
        <Image
          src="/americano1.jpg"
          alt="w"
          width={400}
          height={400}
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="mb-2 text-4xl font-medium max-sm:text-center">
          Headline
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ab
          facere, quas non totam esse fugiat, sed ut suscipit error architecto
          ipsam deserunt corrupti at voluptatum maiores? Deserunt, consequuntur
          non?
        </p>
      </div>
    </section>
  );
}

export default Page;
