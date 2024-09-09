"use client";

import { useEffect, useRef, useState } from "react";

interface Props {}

const SHOULD_SKIP_SW_REGISTER =
  process.env.NEXT_PUBLIC_SKIP_SERVICE_WORKER === "true";

export default function RegisterServiceWorker({}: Props) {
  const ref = useRef<
    | ServiceWorkerRegistration["installing"]
    | ServiceWorkerRegistration["waiting"]
    | ServiceWorkerRegistration["active"]
    | undefined
  >(undefined);

  const [sw_status, set_sw_status] = useState<
    "idle" | "waiting" | "active" | "reload"
  >("idle");

  useEffect(() => {
    if (SHOULD_SKIP_SW_REGISTER) {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      /* eslint-disable-next-line no-console */
      console.warn("sw is not supported");

      return;
    }

    navigator.serviceWorker
      .register("sw.js", {
        scope: "./",
      })
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          const new_sw = registration.installing || registration.waiting;

          if (new_sw && navigator.serviceWorker.controller) {
            set_sw_status("waiting");
          }
        });

        if (registration.installing) {
          ref.current = registration.installing;
        } else if (registration.waiting) {
          ref.current = registration.waiting;
          set_sw_status("waiting");
        } else if (registration.active) {
          ref.current = registration.active;
          set_sw_status("active");
        }
      })
      .catch((error) => {
        /* eslint-disable-next-line no-console */
        console.error(error);
      });
  }, []);

  const handleUpdateCache = () => {
    ref.current?.postMessage({ action: "skipWaiting" }); // Tell the new SW to activate
  };

  const hardReload = () => {
    // @ts-ignore
    window.location.reload(true);
  };

  const handleButtonClick = () => {
    if (sw_status === "waiting") {
      handleUpdateCache();
    }

    if (sw_status === "reload") {
      hardReload();
    }
  };

  useEffect(() => {
    navigator.serviceWorker.addEventListener("message", () => {
      set_sw_status("reload");
    });
  }, []);

  return sw_status !== "idle" && sw_status !== "active" ? (
    <div className="flex gap-4 bg-stone-700 text-stone-200">
      <p className="px-2 py-1">
        {sw_status === "waiting" || sw_status === "reload"
          ? "There is a new version available"
          : null}
      </p>
      <button onClick={handleButtonClick} className="px-2 py-1 underline">
        {sw_status === "waiting"
          ? "Update"
          : sw_status === "reload"
            ? "Reload"
            : null}
      </button>
    </div>
  ) : null;
}
