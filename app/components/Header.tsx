import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <div className="h-[40px] flex mb-[100px] gap-3">
      <Link href="/">1 задача</Link>
      <Link href="/lessontwo">2 задача</Link>
      <Link href="/lessonthree">3 задача</Link>
    </div>
  );
};

export default header;
