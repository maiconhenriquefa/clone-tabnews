import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-10 py-32 px-16 bg-zinc-50 sm:items-start">
        <div>
          <h1 className="text-2xl text-black font-bold">
            Olha a linda família que temos, te amo amor. Se você me ama dá uma
            risadinha ;)
          </h1>
        </div>
        <Image
          src="/family.jpg"
          alt="Family photo"
          width={400}
          height={400}
          priority
          style={{ borderRadius: "6px" }}
        />
      </main>
    </div>
  );
}
