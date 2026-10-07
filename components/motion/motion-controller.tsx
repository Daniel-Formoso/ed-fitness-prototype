"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";
const videoSelector = "video[data-motion-video]";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>(videoSelector));
    const heroStage = document.querySelector<HTMLElement>(".hero-stage");

    if (reduceMotion.matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      videos.forEach((video) => video.pause());
      return;
    }

    root.classList.add("motion-ready");

    let frame = 0;
    const updateHeroProgress = () => {
      frame = 0;
      if (!heroStage) return;
      const travel = Math.max(heroStage.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-heroStage.getBoundingClientRect().top / travel, 0), 1);
      heroStage.style.setProperty("--hero-scroll", progress.toFixed(3));
    };
    const requestHeroUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateHeroProgress);
    };

    updateHeroProgress();
    window.addEventListener("scroll", requestHeroUpdate, { passive: true });
    window.addEventListener("resize", requestHeroUpdate);

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.16 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && !document.hidden) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 },
    );

    videos.forEach((video) => videoObserver.observe(video));

    const handleVisibility = () => {
      videos.forEach((video) => {
        if (document.hidden) video.pause();
      });
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      root.classList.remove("motion-ready");
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestHeroUpdate);
      window.removeEventListener("resize", requestHeroUpdate);
      revealObserver.disconnect();
      videoObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}
