"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function OfflineNavigation() {
  const [linksToDisplay, setLinksToDisplay] = useState<string[]>([]);

  useEffect(() => {
    async function getAllCachedPages(cacheName: string) {
      const cache = await caches.open(cacheName);
      const keys = await cache.keys();
      return keys.map((request_1) => request_1.url);
    }

    getAllCachedPages("my-cache-v1").then((cachedUrls) => {
      const collectedUrls = cachedUrls.reduce<string[]>(
        (acc, url) => {
          if (
            (url.includes("slide") || url.includes("form")) &&
            !(
              url.includes(".js") ||
              url.includes(".css") ||
              url.includes("image")
            )
          ) {
            const theUrl = url.split("?")[0];

            if (!acc.includes(theUrl)) {
              acc.push(theUrl);
            }
          }

          return acc;
        },
        ["/"],
      );

      setLinksToDisplay(collectedUrls);
    });
  }, []);

  return (
    <nav>
      <h2 className="text-4xl my-4">Available pages</h2>
      <ul>
        {linksToDisplay.map((link) => {
          return (
            <li
              key={link}
              className="list-disc mx-8 my-2 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 text-2xl"
            >
              <Link href={link} className="underline">
                {link === "/" ? "Home" : link.split("/").at(-1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
