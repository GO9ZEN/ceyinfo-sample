import Link from "next/link";

export function NavigationBar() {
  return (
    <header className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white p-4 border border-gray-200 shadow-md">
      <nav className="flex flex-row items-center justify-between w-full">
        <div>LOGO</div>
        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className=" pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <Link
                href="/shadcn-staff"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                {/* overline */}
                (Shadcn-staff)
              </Link>
            </li>
            <li>
              <Link
                href="/staff-zod"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                {/* overline */}
                (Staff-Zod)
              </Link>
            </li>
            <li>
              <Link
                href="/calculator"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                {/* overline */}
                (Calculator)
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                {/* overline */}
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/staff"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                href="/category"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                href="/task"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                Task
              </Link>
            </li>
            <li>
              <Link
                href="/task-report"
                className="md:p-4 py-2 block text-indigo-800 hover:font-bold"
              >
                Report
              </Link>
            </li>
            <li>
              <span className="md:p-4 py-2 block text-indigo-800 hover:font-bold cursor-pointer">
                admin
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
