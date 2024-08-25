"use client";

import { useEffect } from "react";

interface Props {}

const SHOULD_SKIP_SW_REGISTER =
  process.env.NEXT_PUBLIC_SKIP_SERVICE_WORKER === "true";

export default function RegisterServiceWorker({}: Props) {
  useEffect(() => {
    if (SHOULD_SKIP_SW_REGISTER) {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      /* eslint-disable-next-line no-console */
      console.log("sw is not supported");

      return;
    }

    navigator.serviceWorker
      .register("sw.js", {
        scope: "./",
      })
      .then((registration) => {
        let serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
          /* eslint-disable-next-line no-console */
          console.log("sw is installing");
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          /* eslint-disable-next-line no-console */
          console.log("sw is waiting");
        } else if (registration.active) {
          serviceWorker = registration.active;
          /* eslint-disable-next-line no-console */
          console.log("sw is active");
        }

        // if (serviceWorker) {
        //   serviceWorker.addEventListener("statechange", (e) => {});
        // }
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.log(error);
      });
  }, []);

  return null;
}
