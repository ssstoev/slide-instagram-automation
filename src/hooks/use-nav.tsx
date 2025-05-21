import { usePathname } from "next/navigation"

export const usePaths = () => {
  const pathname = usePathname();    //usePathname is a client function that allows to read the user's current url
  const path = pathname.split('/')    // get array of the pages split by /
  let page = path[path.length - 1]  // current page is last element of path array

  return { page, pathname }
}