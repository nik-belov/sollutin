import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import Image from "next/image";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <div>
        <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
          {/* <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
            <p className='text-sm font-semibold text-gray-700'>
              Sollutin is now public!
            </p>
          </div> */}
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-6xl">
            {" "}
            <span className="text-green-800">Sollutin:</span> AI-powered
            studying companion for online schools
          </h1>
          <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
            Sollutin helps educational businesses to significantly lower
            operational costs by automating the manual work of tutors and
            coordinators with personalized AI learning companion.
          </p>
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
            href="https://calendly.com/nikita-belov/15min-sollutin"
            target="_blank"
          >
            Book demo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </MaxWidthWrapper>

        {/* value proposition section */}
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#dbdb73] to-[#5be49b] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      src="/demo.png"
                      alt="product preview"
                      width={1079}
                      height={1259}
                      quality={100}
                      className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mb-16 mt-32 max-w-5xl sm:mt-56">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-4xl">
                Seamless Learning, No Compromise
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience the future of education with Sollutin, where AI
                tutoring matches the quality of human guidance.
              </p>
            </div>
          </div>

          {/* steps */}
          <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                {/* <span className='text-sm font-medium text-blue-600'>
                  Step 1
                </span> */}
                <span className="text-xl font-semibold">
                  Trained on your materials
                </span>
                <span className="mt-2 text-zinc-700">
                  The AI learns from the platform&apos;s educational materials,
                  ensuring its guidance is rooted in the curriculum.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                {/* <span className='text-sm font-medium text-blue-600'>
                  Step 2
                </span> */}
                <span className="text-xl font-semibold">
                  Doesn&apos;t just give the answers
                </span>
                <span className="mt-2 text-zinc-700">
                  It encourages students to uncover solutions themselves through
                  constructive dialogue.
                </span>
              </div>
            </li>
            <li className="md:flex-1">
              <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                {/* <span className='text-sm font-medium text-blue-600'>
                  Step 3
                </span> */}
                <span className="text-xl font-semibold">
                  Human support on standby
                </span>
                <span className="mt-2 text-zinc-700">
                  In instances where the AI&apos;s explanations don&apos;t fully
                  resonate, students can call for a human tutor into the
                  conversation.
                </span>
              </div>
            </li>
          </ol>
        </div>
        <MaxWidthWrapper className="mb-12 mt-0 flex flex-col items-center justify-center text-center sm:mt-0">
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
            href="https://calendly.com/nik-belov/15min"
            target="_blank"
          >
            Book demo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </MaxWidthWrapper>
        <Footer />
      </div>
    </>
  );
}
