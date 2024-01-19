/**
 * * This is my own implementation of AOS (Animate On Scroll) using GSAP.
 * It does not have all the features of AOS, but it does the job.
 * Why? Because AOS had issues with view transitions, and GSAP does not. Also, AOS hasn't been updated in 6 years.
 *
 * Implemented:
 * - data-aos (animation name). Currently supports fade-up, fade-down, fade-left, fade-right, fade-in
 * - data-aos-delay (delay to wait to start animation after triggered (seconds))
 * - data-aos-position (offset from top of screen to trigger animation on, can use pixels, percentage, etc)
 * - data-aos-trigger (selector of element to trigger animation on, if not the element itself)
 * - data-aos-distance (distance for animation travel (pixels))
 * - data-aos-duration (duration of animation (seconds))
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function aosInit() {
  const defaults = {
    position: "85%",
    delay: 0,
    duration: 0.7,
    distance: 20,
  };
  gsap.registerPlugin(ScrollTrigger);

  const gsapElements = document.querySelectorAll("[data-aos]");

  if (gsapElements.length === 0) return;

  gsapElements.forEach((element) => {
    const tempDelay = element.getAttribute("data-aos-delay");
    const delay = tempDelay ? tempDelay : defaults.delay;

    const position = element.getAttribute("data-aos-position");

    const id = element.getAttribute("data-aos-trigger");
    const trigger = id ? id : element;

    const tempDistance = element.getAttribute("data-aos-distance");
    const distance = tempDistance
      ? parseFloat(tempDistance)
      : defaults.distance;

    const tempDuration = element.getAttribute("data-aos-duration");
    const duration = tempDuration ? tempDuration : defaults.duration;

    const onStartFunction = () => {
      // add class "aos-animate"
      element.classList.add("aos-animate");
    };

    // pre-made animations
    const animationName = element.getAttribute("data-aos");
    let animation: GSAPTween;
    switch (animationName) {
      case "fade-up":
        animation = gsap.from(element, {
          y: distance,
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
      case "fade-down":
        animation = gsap.from(element, {
          y: -1 * distance,
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
      case "fade-left":
        animation = gsap.from(element, {
          x: distance,
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
      case "fade-right":
        animation = gsap.from(element, {
          x: -1 * distance,
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
      case "fade-in":
        animation = gsap.from(element, {
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
      default:
        // default to fade-in
        animation = gsap.from(element, {
          opacity: 0,
          duration: duration,
          delay: delay,
          onStart: onStartFunction,
        });
        break;
    }

    ScrollTrigger.create({
      trigger: trigger,
      start: `top ${position ? position : defaults.position}`,
      markers: false, // set to true for debugging so you can see the triggers
      animation: animation,
    });
  });
}
